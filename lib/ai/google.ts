import { createGoogle } from "@ai-sdk/google";

export const GEMINI_CHAT_MODEL =
  process.env.GEMINI_CHAT_MODEL ?? "gemini-2.5-flash";

export const GEMINI_EMBEDDING_MODEL =
  process.env.GEMINI_EMBEDDING_MODEL ?? "gemini-embedding-001";

export function getGoogleProvider() {
  const apiKey =
    process.env.GEMINI_API_KEY ?? process.env.GOOGLE_GENERATIVE_AI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "Missing GEMINI_API_KEY. Add it to .env.local before using chat or embeddings.",
    );
  }

  return createGoogle({ apiKey });
}
