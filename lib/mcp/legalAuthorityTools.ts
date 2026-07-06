import { embedText } from "@/lib/embeddings";
import {
  detectLegalTopicIds,
  retrieveLegalContext,
  type RetrievedLegalContext,
} from "@/lib/legalRetrieval";

export type RetrieveLegalAuthorityInput = {
  question: string;
  jurisdiction: "federal" | "state";
  stateCode?: string;
  limit?: number;
};

export type RetrieveLegalAuthorityOutput = {
  toolName: "retrieve_legal_authority";
  sourceType: "legal-authority";
  context: RetrievedLegalContext[];
};

/**
 * Detects if a question is high-level (definitional/general) or specific (factual/situational).
 * High-level questions benefit from curated summaries.
 * Specific questions need precise statute text.
 */
function isHighLevelQuestion(question: string): boolean {
  const normalized = question.toLowerCase().trim();

  // High-level question patterns
  const highLevelPatterns = [
    /^what is\b/,
    /^what are\b/,
    /^what does\b/,
    /^explain\b/,
    /^define\b/,
    /^tell me about\b/,
    /^how does\b.*\bwork\b/,
    /^why\b/,
    /\bgeneral\b/,
    /\boverview\b/,
  ];

  return highLevelPatterns.some(pattern => pattern.test(normalized));
}

/**
 * Option 1: Multi-source retrieval from legal-authority AND legal-content
 * Option 2: Prioritize source types based on question type
 * Option 3: Fallback to legal-content when no legal-authority exists
 */
/**
 * Minimum relevance score for chunks retrieved WITHOUT a topic-keyword match.
 * Scores are on the Atlas normalized cosine scale (0..1, where 1 is
 * identical). When no known topic is detected we rely purely on embedding
 * similarity, so weak matches must be dropped rather than cited.
 */
function getMinRetrievalScore() {
  const parsed = Number(process.env.RETRIEVAL_MIN_SCORE ?? "0.62");
  return Number.isFinite(parsed) && parsed > 0 && parsed < 1 ? parsed : 0.62;
}

export async function retrieveLegalAuthority({
  question,
  jurisdiction,
  stateCode,
  limit = 6,
}: RetrieveLegalAuthorityInput): Promise<RetrieveLegalAuthorityOutput> {
  // Topic detection now only tunes retrieval (via the topicIds filter inside
  // retrieveLegalContext) - it is no longer a hard gate. Questions phrased
  // without a known keyword still get semantic retrieval; a score threshold
  // below protects against citing irrelevant chunks.
  const topicIds = detectLegalTopicIds(question);

  const queryEmbedding = await embedText(question);

  // Option 2: Adjust retrieval limits based on question type
  const isHighLevel = isHighLevelQuestion(question);
  const authorityLimit = isHighLevel ? 3 : 5;
  const contentLimit = isHighLevel ? 5 : 2;

  // Option 1: Retrieve from BOTH sources in parallel
  const [authorityContext, contentContext] = await Promise.all([
    retrieveLegalContext({
      embedding: queryEmbedding,
      query: question,
      jurisdiction,
      stateCode,
      limit: authorityLimit,
      sourceType: "legal-authority",
      reviewStatuses: ["approved"],
    }),
    retrieveLegalContext({
      embedding: queryEmbedding,
      query: question,
      jurisdiction,
      stateCode,
      limit: contentLimit,
      sourceType: "legal-content",
      reviewStatuses: ["approved"],
    }),
  ]);

  // Option 3: Fallback - if no legal-authority found, use more legal-content
  if (authorityContext.length === 0 && contentContext.length > 0) {
    // No official statutes found, retrieve more curated content
    const fallbackContent = await retrieveLegalContext({
      embedding: queryEmbedding,
      query: question,
      jurisdiction,
      stateCode,
      limit: limit,
      sourceType: "legal-content",
      reviewStatuses: ["approved"],
    });

    return {
      toolName: "retrieve_legal_authority",
      sourceType: "legal-authority",
      context: fallbackContent,
    };
  }

  // Option 3: Fallback - if neither source has content, try without sourceType filter
  if (authorityContext.length === 0 && contentContext.length === 0) {
    const allSourcesContext = await retrieveLegalContext({
      embedding: queryEmbedding,
      query: question,
      jurisdiction,
      stateCode,
      limit: limit,
      // No sourceType filter - get any approved content
      reviewStatuses: ["approved"],
    });

    return {
      toolName: "retrieve_legal_authority",
      sourceType: "legal-authority",
      context: allSourcesContext,
    };
  }

  // Combine both sources and sort by relevance score
  let combinedContext = [...authorityContext, ...contentContext]
    .sort((a, b) => (b.score ?? 0) - (a.score ?? 0))
    .slice(0, limit);

  // Without a topic-keyword match there is no metadata filter backing the
  // results, so require a minimum semantic similarity before citing.
  if (topicIds.length === 0) {
    const minScore = getMinRetrievalScore();
    combinedContext = combinedContext.filter(
      (item) => (item.score ?? 0) >= minScore,
    );
  }

  return {
    toolName: "retrieve_legal_authority",
    sourceType: "legal-authority",
    context: combinedContext,
  };
}
