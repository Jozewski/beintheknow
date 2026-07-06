import { isAdminRequest } from "@/lib/adminAuth";
import { getActiveEmbeddingModel } from "@/lib/embeddings";
import { connectDB } from "@/lib/mongodb";
import { LegalTextChunkModel } from "@/models/LegalTextChunk";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

const TOPIC_IDS = [
  "voting",
  "expungement",
  "housing",
  "employment",
  "police",
  "supervision",
] as const;

type TopicCell = {
  total: number;
  embedded: number;
  thin: number;
};

type CoverageRow = {
  state: string;
  topics: Record<string, TopicCell>;
  total: number;
  embedded: number;
};

/**
 * Per-state, per-topic health of JO's answer corpus (approved chunks only):
 * how many chunks exist, how many are embedded with the ACTIVE model
 * (i.e., actually searchable), and how many look like thin/boilerplate
 * content that deserves an editorial pass.
 */
export async function GET(request: Request) {
  if (!isAdminRequest(request)) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
  } catch (error) {
    console.error("Coverage: database connection failed", error);
    return Response.json({ error: "Database unavailable." }, { status: 503 });
  }

  const activeModel = getActiveEmbeddingModel();

  const rows = await LegalTextChunkModel.aggregate<{
    _id: { state: string; topic: string };
    total: number;
    embedded: number;
    thin: number;
  }>([
    {
      $match: {
        reviewStatus: "approved",
        sourceType: { $in: ["legal-authority", "legal-content"] },
      },
    },
    { $unwind: "$topicIds" },
    {
      $group: {
        _id: {
          state: { $ifNull: ["$stateCode", "FEDERAL"] },
          topic: "$topicIds",
        },
        total: { $sum: 1 },
        embedded: {
          $sum: {
            $cond: [{ $eq: ["$embeddingModel", activeModel] }, 1, 0],
          },
        },
        thin: {
          $sum: {
            $cond: [{ $lt: [{ $strLenCP: "$chunkText" }, 120] }, 1, 0],
          },
        },
      },
    },
  ]);

  const byState = new Map<string, CoverageRow>();

  for (const row of rows) {
    const state = row._id.state || "FEDERAL";
    const entry =
      byState.get(state) ??
      ({ state, topics: {}, total: 0, embedded: 0 } as CoverageRow);

    entry.topics[row._id.topic] = {
      total: row.total,
      embedded: row.embedded,
      thin: row.thin,
    };
    entry.total += row.total;
    entry.embedded += row.embedded;
    byState.set(state, entry);
  }

  const states = [...byState.values()].sort((left, right) =>
    left.state === "FEDERAL" ? -1 : right.state === "FEDERAL" ? 1 : left.state.localeCompare(right.state),
  );

  const totals = states.reduce(
    (acc, row) => {
      acc.total += row.total;
      acc.embedded += row.embedded;
      for (const topic of Object.values(row.topics)) acc.thin += topic.thin;
      return acc;
    },
    { total: 0, embedded: 0, thin: 0 },
  );

  const statesMissingTopics = states
    .filter((row) => row.state !== "FEDERAL")
    .filter((row) => TOPIC_IDS.some((topic) => !row.topics[topic]?.total))
    .map((row) => row.state);

  return Response.json({
    activeEmbeddingModel: activeModel,
    topics: TOPIC_IDS,
    totals,
    statesMissingTopics,
    states,
  });
}
