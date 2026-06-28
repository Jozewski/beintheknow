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

export async function retrieveLegalAuthority({
  question,
  jurisdiction,
  stateCode,
  limit = 6,
}: RetrieveLegalAuthorityInput): Promise<RetrieveLegalAuthorityOutput> {
  const topicIds = detectLegalTopicIds(question);
  if (topicIds.length === 0) {
    return {
      toolName: "retrieve_legal_authority",
      sourceType: "legal-authority",
      context: [],
    };
  }

  const queryEmbedding = await embedText(question);
  const context = await retrieveLegalContext({
    embedding: queryEmbedding,
    query: question,
    jurisdiction,
    stateCode,
    limit,
    sourceType: "legal-authority",
    reviewStatuses: ["approved"],
  });

  return {
    toolName: "retrieve_legal_authority",
    sourceType: "legal-authority",
    context,
  };
}
