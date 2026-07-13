/**
 * Conservative PII redaction for stored chat messages.
 *
 * Applied to the PERSISTED copy of a user message only - the in-flight
 * message JO answers is untouched, so answer quality never degrades. The
 * goal is that a later breach, subpoena, or account compromise of stored
 * chat history exposes as little identifying detail as possible.
 *
 * Patterns are deliberately conservative: a legal question must never be
 * mangled into meaninglessness, so only high-confidence identifiers are
 * redacted (SSNs, phone numbers, email addresses, street addresses).
 * Names, dates, and case numbers are NOT auto-detected - reliable detection
 * needs NER and the false-positive cost (breaking statute citations and
 * ordinary legal phrasing) is too high. The chat input notice asks users
 * not to share those.
 *
 * Kept as pure functions so the patterns are unit-testable and cannot
 * silently regress.
 */

// Words that mark a "<number> ... court/way/place" phrase as a duration or
// ordinary sentence, not a street address ("30 days in court").
const NON_ADDRESS_WORDS =
  /\b(day|days|week|weeks|month|months|year|years|hour|hours|minute|minutes|time|times)\b/i;

const STREET_SUFFIX =
  "street|st|avenue|ave|road|rd|boulevard|blvd|lane|ln|drive|dr|court|ct|circle|cir|way|place|pl|terrace|ter|highway|hwy";

const ADDRESS_REGEX = new RegExp(
  `\\b\\d{1,5}\\s+(?:[A-Za-z]+\\s+){0,2}(?:${STREET_SUFFIX})\\b\\.?`,
  "gi",
);

export function redactPii(text: string): string {
  return (
    text
      // Email addresses.
      .replace(
        /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g,
        "[email removed]",
      )
      // Social Security numbers: 3-2-4 with separators, or a bare 9-digit
      // run (which is never a statute citation in our corpus).
      .replace(/\b\d{3}[- ]\d{2}[- ]\d{4}\b/g, "[SSN removed]")
      .replace(/\b\d{9}\b/g, "[SSN removed]")
      // US phone numbers: requires the full 3-3-4 shape (optionally +1),
      // so statute citations like 13-3601 never match.
      .replace(
        /(\+?1[-. ])?(\(\d{3}\)\s?|\b\d{3}[-. ])\d{3}[-. ]\d{4}\b/g,
        "[phone removed]",
      )
      // Street addresses: "123 Main Street", "45 N Oak Ave". The callback
      // guard keeps duration phrases like "30 days in court" intact.
      .replace(ADDRESS_REGEX, (match) =>
        NON_ADDRESS_WORDS.test(match) ? match : "[address removed]",
      )
  );
}

/** True when redaction would change the text (used for tests/telemetry). */
export function containsPii(text: string): boolean {
  return redactPii(text) !== text;
}
