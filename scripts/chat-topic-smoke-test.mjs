import fs from "node:fs";
import mongoose from "mongoose";

const args = new Map();

for (const arg of process.argv.slice(2)) {
  const [key, value] = arg.replace(/^--/, "").split("=");
  args.set(key, value ?? "true");
}

function loadEnvFile(path) {
  if (!fs.existsSync(path)) return;

  const env = fs.readFileSync(path, "utf8");
  for (const line of env.split(/\r?\n/)) {
    if (!line || line.trim().startsWith("#")) continue;
    const index = line.indexOf("=");
    if (index === -1) continue;

    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile(".env.local");

const baseUrl = args.get("baseUrl") ?? "http://localhost:3000";
const selectedState = (args.get("state") ?? "AZ").toUpperCase();
const mongoUri = process.env.MONGODB_DIRECT_URI ?? process.env.MONGODB_URI;
// Mirrors getActiveEmbeddingModel() in lib/embeddings.ts: respects the
// EMBEDDING_PROVIDER switch and includes the Gemini dimension suffix.
const geminiDimensionsRaw = Number(process.env.GEMINI_EMBEDDING_DIMENSIONS ?? "768");
const geminiDimensions =
  Number.isFinite(geminiDimensionsRaw) && geminiDimensionsRaw > 0
    ? geminiDimensionsRaw
    : 768;
const activeEmbeddingModel =
  process.env.EMBEDDING_PROVIDER === "local"
    ? process.env.LOCAL_EMBEDDING_MODEL ?? "BAAI/bge-small-en-v1.5"
    : `${process.env.GEMINI_EMBEDDING_MODEL ?? "gemini-embedding-001"}@${geminiDimensions}`;

const topicOrder = [
  "voting",
  "expungement",
  "housing",
  "employment",
  "police",
  "supervision",
];

const LegalTextChunk = mongoose.model(
  "LegalTextChunkSmokeTest",
  new mongoose.Schema({}, { strict: false }),
  "legaltextchunks",
);

async function getCoverageByTopic(stateCode) {
  await mongoose.connect(mongoUri, { bufferCommands: false });

  const rows = await LegalTextChunk.aggregate([
    {
      $match: {
        jurisdiction: "state",
        stateCode,
        sourceType: "legal-authority",
        reviewStatus: "approved",
      },
    },
    { $unwind: "$topicIds" },
    {
      $group: {
        _id: "$topicIds",
        chunks: { $sum: 1 },
        embeddedChunks: {
          $sum: {
            $cond: [
              {
                $and: [
                  { $eq: ["$embeddingModel", activeEmbeddingModel] },
                  { $gt: [{ $size: { $ifNull: ["$embedding", []] } }, 0] },
                ],
              },
              1,
              0,
            ],
          },
        },
        citations: { $addToSet: "$citation" },
      },
    },
  ]);

  await mongoose.disconnect();

  const byTopic = new Map(rows.map((row) => [row._id, row]));

  return topicOrder.map((topic) => {
    const row = byTopic.get(topic);
    const citations = (row?.citations ?? []).filter(Boolean).sort();

    return {
      topic,
      chunks: row?.chunks ?? 0,
      embeddedChunks: row?.embeddedChunks ?? 0,
      citations,
    };
  });
}

async function askChat(question, stateCode) {
  const headers = { "Content-Type": "application/json" };

  // Bypass the guest daily quota for smoke testing when CRON_SECRET is set.
  if (process.env.CRON_SECRET) {
    headers.Authorization = `Bearer ${process.env.CRON_SECRET}`;
  }

  const response = await fetch(new URL("/api/chat", baseUrl), {
    method: "POST",
    headers,
    body: JSON.stringify({
      message: question,
      jurisdiction: "state",
      stateCode,
      // Scripts use the single-JSON response instead of streaming.
      stream: false,
    }),
  });

  const body = await response.json().catch(() => undefined);

  return {
    ok: response.ok,
    status: response.status,
    question,
    stateCode,
    answer: body?.message?.content ?? body?.error ?? "No response body.",
    confidence: body?.message?.confidence,
    citations: body?.message?.citations ?? [],
  };
}

function printCoverage(coverage) {
  console.log(`\nApproved legal-authority coverage for ${selectedState}`);
  console.log("=".repeat(52));

  for (const row of coverage) {
    const status =
      row.chunks === 0
        ? "MISSING"
        : row.embeddedChunks === row.chunks
          ? "ready"
          : "needs embedding";

    console.log(
      `${row.topic.padEnd(12)} ${status.padEnd(15)} chunks=${String(
        row.chunks,
      ).padEnd(3)} embedded=${String(row.embeddedChunks).padEnd(3)} citations=${
        row.citations.length
      }`,
    );

    if (row.citations.length > 0) {
      console.log(`  ${row.citations.slice(0, 5).join("; ")}`);
    }
  }
}

function printChatResult(result) {
  console.log(`\n[${result.stateCode}] ${result.question}`);
  console.log("-".repeat(52));
  console.log(`HTTP ${result.status} | confidence=${result.confidence ?? "n/a"}`);
  console.log(result.answer);

  if (result.citations.length > 0) {
    console.log("\nCitations:");
    for (const citation of result.citations) {
      console.log(
        `- ${citation.citation ?? citation.title ?? citation.sourceId} (${citation.reviewStatus})`,
      );
    }
  }
}

if (!mongoUri) {
  throw new Error("Missing MONGODB_URI or MONGODB_DIRECT_URI in .env.local.");
}

const coverage = await getCoverageByTopic(selectedState);
printCoverage(coverage);

const questions = [
  { question: "What is expungement?", stateCode: selectedState },
  { question: "Can I vote with a felony in Texas?", stateCode: "TX" },
  {
    question: "Can a landlord reject me for a record?",
    stateCode: selectedState,
  },
  { question: "Can I record police?", stateCode: selectedState },
];

console.log(`\nChat smoke tests via ${baseUrl}`);
console.log("=".repeat(52));

for (const item of questions) {
  const result = await askChat(item.question, item.stateCode);
  printChatResult(result);

  if (!result.ok || result.citations.length === 0) {
    process.exitCode = 1;
  }
}
