/**
 * Post-generation repair and quality checks for JO's answers.
 *
 * These guard against model truncation artifacts: dangling sentence
 * fragments, unclosed citation brackets, and answers that end mid-thought.
 * Kept as pure functions so they are unit-testable.
 */

const REPAIR_SUFFIX =
  "Check the cited source or ask legal aid before you rely on this.";

/**
 * Ensures the answer ends in a complete sentence.
 * - Closes a trailing unfinished citation bracket ("[1, 2" -> "[1, 2]").
 * - Accepts answers ending in terminal punctuation or a citation bracket.
 * - Otherwise trims a short dangling fragment back to the last complete
 *   sentence (or appends a period), adding a short verification notice.
 */
export function ensureCompleteAnswer(value: string) {
  const trimmed = value.trim().replace(/\[(\d+(?:,\s*\d+)*)$/, "[$1]");
  if (!trimmed) return trimmed;
  // An answer ending in a citation bracket like "[1]" or "[1, 2]" is
  // complete - do not bolt a canned closing sentence onto it.
  if (/[.!?)\]"']$/.test(trimmed)) return trimmed;

  const lastCompleteSentenceEnd = Math.max(
    trimmed.lastIndexOf("."),
    trimmed.lastIndexOf("!"),
    trimmed.lastIndexOf("?"),
  );
  const trailingFragment =
    lastCompleteSentenceEnd >= 0
      ? trimmed.slice(lastCompleteSentenceEnd + 1).trim()
      : "";

  if (
    lastCompleteSentenceEnd >= 0 &&
    trailingFragment.split(/\s+/).filter(Boolean).length <= 8
  ) {
    return `${trimmed.slice(0, lastCompleteSentenceEnd + 1)} ${REPAIR_SUFFIX}`;
  }

  return `${trimmed}. ${REPAIR_SUFFIX}`;
}

/**
 * Detects answers that were cut off mid-thought (ending on a conjunction
 * or preposition followed by a period), which read as broken and should be
 * replaced with the source-based fallback response.
 */
export function isBrokenGeneratedAnswer(value: string) {
  const normalized = value.trim().replace(/\s+/g, " ");

  return (
    /\b(if|when|because|unless|that|and|or|but|to)\.\s*$/i.test(normalized) ||
    /\b(if|when|because|unless|that|and|or|but|to)\.\s*Check the cited source/i.test(
      normalized,
    )
  );
}
