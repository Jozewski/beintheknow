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
 * Heuristic detector for prompt-injection / rule-breaking attempts in a
 * user message. A match does NOT block the message (the layered prompt and
 * output guards handle the actual content) - it flags the message so an
 * admin can review manipulation patterns later. Kept here as a pure,
 * unit-tested function so the pattern cannot silently regress.
 *
 * Built from a pattern list rather than one long literal so it stays easy
 * to read and edit. The apostrophe in "you're" is written as `you.?re`
 * (matches with or without the apostrophe) to avoid quoting pitfalls.
 */
const SUSPICIOUS_PATTERNS = [
  "ignore (all |your |the |previous |above |prior )*(instructions|rules|guidelines|prompt)",
  "disregard (your|the|all)",
  "system prompt",
  "reveal your (rules|instructions|prompt)",
  "pretend (you.?re|you are|to be)",
  "act as (a |my |an )?(lawyer|attorney|judge)",
  "you are now",
  "jailbreak",
  "developer mode",
  "new directive",
  "override",
];

const SUSPICIOUS_REGEX = new RegExp(SUSPICIOUS_PATTERNS.join("|"), "i");

export function isSuspiciousUserMessage(message: string) {
  return SUSPICIOUS_REGEX.test(message);
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