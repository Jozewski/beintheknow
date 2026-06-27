export type TextChunk = {
  chunkIndex: number;
  chunkText: string;
  tokenEstimate: number;
};

export type ChunkTextOptions = {
  maxChars?: number;
  overlapChars?: number;
};

const DEFAULT_MAX_CHARS = 1800;
const DEFAULT_OVERLAP_CHARS = 200;

function estimateTokens(value: string) {
  return Math.ceil(value.length / 4);
}

function findChunkEnd(text: string, start: number, maxEnd: number) {
  if (maxEnd >= text.length) return text.length;

  const minimumBreak = start + Math.floor((maxEnd - start) / 4);
  const paragraphBreak = text.lastIndexOf("\n\n", maxEnd);

  if (paragraphBreak > minimumBreak) {
    return paragraphBreak;
  }

  const sentenceBreak = Math.max(
    text.lastIndexOf(". ", maxEnd),
    text.lastIndexOf("; ", maxEnd),
    text.lastIndexOf(": ", maxEnd),
  );

  if (sentenceBreak > minimumBreak) {
    return sentenceBreak + 1;
  }

  const wordBreak = text.lastIndexOf(" ", maxEnd);

  return wordBreak > start ? wordBreak : maxEnd;
}

export function chunkText(value: string, options: ChunkTextOptions = {}): TextChunk[] {
  const text = value.trim();
  const maxChars = options.maxChars ?? DEFAULT_MAX_CHARS;
  const overlapChars = options.overlapChars ?? DEFAULT_OVERLAP_CHARS;
  const chunks: TextChunk[] = [];
  let start = 0;

  while (start < text.length) {
    const maxEnd = Math.min(start + maxChars, text.length);
    const end = findChunkEnd(text, start, maxEnd);
    const chunk = text.slice(start, end).trim();

    if (chunk) {
      chunks.push({
        chunkIndex: chunks.length,
        chunkText: chunk,
        tokenEstimate: estimateTokens(chunk),
      });
    }

    if (end >= text.length) break;

    start = Math.max(end - overlapChars, start + 1);
  }

  return chunks;
}
