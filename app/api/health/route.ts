import { getActiveEmbeddingModel } from "@/lib/embeddings";
import { connectDB } from "@/lib/mongodb";
import { LegalTextChunkModel } from "@/models/LegalTextChunk";

export const dynamic = "force-dynamic";

/**
 * Deployment health check.
 *
 * Verifies the pieces JO needs to answer questions: database connectivity,
 * embedded corpus coverage for the ACTIVE embedding model, and required
 * configuration. Returns 200 when chat can work, 503 when it cannot.
 * Exposes no secrets - only booleans and counts.
 */
export async function GET() {
  const activeEmbeddingModel = getActiveEmbeddingModel();
  const config = {
    embeddingProvider: "gemini",
    activeEmbeddingModel,
    vectorSearchIndex:
      process.env.VECTOR_SEARCH_INDEX ?? "legal_text_chunk_embedding",
    hasGeminiApiKey: Boolean(
      process.env.GEMINI_API_KEY ?? process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    ),
    hasMongoUri: Boolean(
      process.env.MONGODB_URI ?? process.env.MONGODB_DIRECT_URI,
    ),
    hasCronSecret: Boolean(process.env.CRON_SECRET),
    // Chat and forgot-password fail fast in production without JWT_SECRET
    // (it signs auth cookies and peppers IP hashes), so a deploy missing it
    // must report unhealthy - not just log 500s while health says 200.
    hasJwtSecret: Boolean(process.env.JWT_SECRET),
  };

  try {
    await connectDB();
  } catch (error) {
    console.error("Health check: database connection failed", error);
    return Response.json(
      { status: "unhealthy", database: "unreachable", config },
      { status: 503 },
    );
  }

  const [approvedAuthorityChunks, approvedContentChunks] = await Promise.all([
    LegalTextChunkModel.countDocuments({
      sourceType: "legal-authority",
      reviewStatus: "approved",
      embeddingModel: activeEmbeddingModel,
    }),
    LegalTextChunkModel.countDocuments({
      sourceType: "legal-content",
      reviewStatus: "approved",
      embeddingModel: activeEmbeddingModel,
    }),
  ]);

  const corpusReady = approvedAuthorityChunks + approvedContentChunks > 0;
  const healthy = corpusReady && config.hasGeminiApiKey && config.hasJwtSecret;

  return Response.json(
    {
      status: healthy ? "healthy" : "degraded",
      database: "connected",
      corpus: {
        activeEmbeddingModel,
        approvedAuthorityChunks,
        approvedContentChunks,
        ready: corpusReady,
      },
      config,
    },
    { status: healthy ? 200 : 503 },
  );
}
