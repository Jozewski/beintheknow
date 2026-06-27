const args = new Map();

for (const arg of process.argv.slice(2)) {
  const [key, value] = arg.replace(/^--/, "").split("=");
  args.set(key, value ?? "true");
}

const baseUrl = args.get("baseUrl") ?? "http://localhost:3000";
const batches = Number(args.get("batches") ?? "10");
const limit = Number(args.get("limit") ?? "25");
const waitMs = Number(args.get("waitMs") ?? "1000");
const reviewStatus = args.get("reviewStatus") ?? "draft";
const sourceType = args.get("sourceType") ?? "legiscan-bill-text";
const state = args.get("state");
const topic = args.get("topic");
const force = args.get("force") === "true";
const includeOtherModels = args.get("includeOtherModels") === "true";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

for (let index = 0; index < batches; index += 1) {
  const url = new URL("/api/cron/embeddings", baseUrl);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("reviewStatus", reviewStatus);
  url.searchParams.set("sourceType", sourceType);
  if (state) url.searchParams.set("state", state);
  if (topic) url.searchParams.set("topic", topic);
  if (force) url.searchParams.set("force", "true");
  if (includeOtherModels) {
    url.searchParams.set("includeOtherModels", "true");
  }

  const response = await fetch(url);
  const body = await response.json().catch(() => undefined);

  console.log(
    JSON.stringify(
      {
        batch: index + 1,
        status: response.status,
        body,
      },
      null,
      2,
    ),
  );

  if (!response.ok) {
    process.exitCode = 1;
    break;
  }

  if (body?.counts?.scannedChunks === 0) break;

  if (index < batches - 1) {
    await sleep(waitMs);
  }
}
