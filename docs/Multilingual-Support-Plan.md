# Be In The Know — Multilingual Support Plan

Date: 2026-07-13
Scope: Add multilingual support to JO, starting with Spanish, on a
language-agnostic foundation so more languages can follow.
Decisions locked for this plan:
- **Retrieval architecture:** Native multilingual embeddings (no query-translation step).
- **Answer policy:** LLM-generated answers in the user's language, with an explicit disclaimer that the official legal source is in English.
- **Rollout:** Spanish first, framework built to be language-agnostic.

---

## 1. Why This Is Mostly Already Possible

The retrieval half of a multilingual RAG system is the part that usually
forces a redesign. It does not here, because the project already runs a
multilingual embedding model.

`gemini-embedding-001` maps many languages into one shared vector space. A
Spanish question embedded with `RETRIEVAL_QUERY` lands near the English
`RETRIEVAL_DOCUMENT` chunks that answer it, with no translation step. That
means:

- No re-embedding of the corpus.
- No new Atlas Vector Search index.
- No change to `embeddingModel` labels (`gemini-embedding-001@768` stays the
  active model, and exact-label filtering keeps working).
- No second search path.

The two "primary architectural approaches" for multilingual RAG are Native
Multilingual Embeddings versus a Query-Translation Pipeline. For this project
Native wins decisively: the multilingual model is already paid for and
deployed, and a translation pipeline would only add latency and a new failure
mode (a bad translation "ruins the search intent" before retrieval even runs).

The real work is not retrieval. It is answer generation, static UI copy, and
one policy decision about legal accuracy.

---

## 2. Non-Negotiables This Plan Must Respect

Every item below is checked against the project's constitution:

1. **Source discipline.** JO still answers ONLY from retrieved, approved
   English chunks and still cites them with `[n]`. Multilingual changes the
   *output language*, never the *source of truth*. No Spanish answer may
   introduce a fact that is not in a retrieved chunk.
2. **Human review gate.** No new content enters the corpus from this work.
   We are translating JO's phrasing at generation time, not adding a Spanish
   corpus (that is a possible later phase, and if we ever do it, it enters at
   `draft`/`legal-review` like everything else).
3. **Education, not legal advice.** The English disclaimers must appear in
   every supported language, and must say the same thing — no softer promises
   in translation.
4. **Truthful UI.** Translated interface copy may not advertise anything the
   English UI does not, or anything not enforced server-side.
5. **Minimal harm to a vulnerable audience.** Because answers are
   LLM-generated in Spanish from English law, the honest-limitations
   disclaimer (Section 4) is a required feature, not a nicety.

---

## 3. Architecture: Native Multilingual Embeddings

No pipeline redesign. The only retrieval-side risk is score calibration.

**What stays exactly the same:** query embedding (`RETRIEVAL_QUERY`), the
`legal_text_chunk_embedding_gemini_768` index, all filter fields, the
in-memory cosine fallback, and every `embeddingModel` label.

**The one thing to test:** `RETRIEVAL_MIN_SCORE` (default 0.62). Cross-lingual
similarity scores (Spanish query ↔ English chunk) can sit slightly lower than
same-language scores. If good matches fall below the threshold, JO will
wrongly decline in Spanish where it would answer in English. Mitigation is a
measured threshold, not a guess:

- Run `npm run chat:smoke` with a set of Spanish questions across several
  states and topics.
- Compare retrieved scores and hit sets against the English equivalents.
- If Spanish good-matches cluster just under 0.62, lower the threshold
  *globally by a small margin* (do not fork a separate Spanish threshold unless
  the data demands it — a second constant is a second thing to maintain).

Do not change dimensions, provider, or index. Any of those would break the
exact-label retrieval filter and silently return zero chunks.

---

## 4. Answer Generation (the main build)

JO must detect or be told the user's language, answer in it, and stay inside
source discipline.

**Language selection — prefer an explicit toggle over auto-detection.** A
visible language toggle (persisted per session/user) is more predictable and
more honest than sniffing the message language, and it avoids mis-detecting
short or code-switched messages. Auto-detection can be a later enhancement or
a default the toggle overrides.

**Prompt changes (`lib/chatPrompt.ts`).** Add a language instruction to the
system prompt: answer in `<language>`, keep the same voice (warm
"knowledgeable friend," short sentences), keep a **sixth-grade reading level in
that language**, keep **no markdown** (chat bubbles render plain text), keep
citations as `[n]` brackets. The retrieved context stays English; only JO's
prose changes language. Restate the no-canned-closer rule per language so the
model does not fall back to a repeated Spanish sign-off.

**Required disclaimer (the answer-policy decision).** Because a Spanish answer
is JO paraphrasing English legal sources on the fly, every non-English answer
must carry a short, plain-language disclaimer that:

- the official legal source is in English,
- JO's translation is for understanding, not an official legal document, and
- for their specific situation they should contact (bilingual) legal aid.

This disclaimer is part of the answer contract for non-English languages —
it ships with the feature, not after.

**Answer repair (`lib/answerRepair.ts`).** The repair functions are
language-sensitive in subtle ways. `ensureCompleteAnswer` treats a trailing
`]` as a complete ending (regression-tested — keep it). But the
source-based fallback template ("What the official sources say:") is
English-only; it needs a translated variant per language, and
`isBrokenGeneratedAnswer`'s heuristics should be reviewed so they do not
misfire on Spanish text.

**Citations.** Citations still point to English sources. That is acceptable and
honest — the `[n]` bracket references the source; the surrounding Spanish prose
explains it. No change to citation data, only to the prose around it.

---

## 5. Static UI and Content (easy to underestimate)

Everything that is not a chat answer also needs translation, under the
truthful-UI rule.

- **Message catalog / i18n layer.** Introduce a language-agnostic string
  catalog (e.g. `next-intl` or a lightweight in-repo dictionary keyed by
  locale). Every user-facing string routes through it. Build it
  language-agnostic now even though only Spanish ships first.
- **Disclaimers and legal pages.** About, Terms, Privacy, and every disclaimer
  string need reviewed Spanish. These are legal-adjacent — treat their
  translation with the same care as content, even though they are UI.
- **Chrome:** `PageHero` copy, topic cards, jurisdiction/state grid labels,
  auth flow, error and quota messages, the language toggle itself.
- **Reading level applies here too:** sixth-grade Spanish, matching JO's voice.

Do not let translated copy promise a feature the English UI does not, or one
not enforced server-side (the banned "5 questions/day that nothing enforced"
class of bug).

---

## 6. Data Model and Persistence

- Add a `language` (locale) preference to `User` and `ChatSession`. Default
  to the browser/UI locale, overridden by the toggle.
- Persist the chosen locale alongside `guestToken`/`sessionId` so a refresh
  keeps the user's language.
- No change to `LegalTextChunk`, embeddings, or the vector index.

---

## 7. Testing and Verification

- **Cross-lingual retrieval smoke:** `npm run chat:smoke` with Spanish
  questions per state/topic; confirm the same chunks are retrieved as the
  English equivalents and scores clear the threshold.
- **Generation checks:** answers come back in Spanish, at a sixth-grade level,
  with no markdown, with citations intact, and with the disclaimer present.
- **Repair checks:** unit tests for the translated fallback template and for
  `isBrokenGeneratedAnswer` not misfiring on Spanish.
- **UI:** language toggle persists across refresh; all catalog strings render;
  legal pages load in Spanish.
- **Full gate before commit:** `npm run lint`, `npx tsc --noEmit`, `npm test`,
  `npm run build` — CI runs the same order and will reject what fails locally.
  (Watch `react/no-unescaped-entities`: Spanish copy has apostrophes/quotes
  that must be escaped in JSX.)

---

## 8. Phased Rollout

**Phase 0 — De-risk retrieval (½ day).** Run the Spanish cross-lingual smoke
test. Confirm Native multilingual retrieval actually works on this corpus and
settle the `RETRIEVAL_MIN_SCORE` question with data. Everything else depends on
this being true, so prove it first.

**Phase 1 — Generation in Spanish.** Add the language instruction to
`lib/chatPrompt.ts`, the required disclaimer, and the translated fallback
template in `lib/answerRepair.ts`. Wire a `language` param through the chat
route (defaulting to English so nothing regresses).

**Phase 2 — i18n framework + UI toggle.** Stand up the language-agnostic
message catalog, add the persisted language toggle, route all chrome strings
through the catalog. Ship English + Spanish.

**Phase 3 — Translate static content.** Reviewed Spanish for disclaimers,
About/Terms/Privacy, topic copy, error/quota messages.

**Phase 4 — Persistence + polish.** `language` on `User`/`ChatSession`,
locale persisted across refresh, per-language smoke tests in CI.

**Later (not in this plan):** optional auto-detection of message language;
optional human-reviewed Spanish *corpus* (which, if pursued, enters through
the normal `draft` → `legal-review` → `chunks:approve` gate and is a real
content operation, not a generation change).

---

## 9. Open Questions to Resolve Before Phase 1

- Exact disclaimer wording per language (needs a legal-aware review, same as
  any disclaimer copy).
- Which additional languages come after Spanish (affects only translation
  volume, not architecture — the framework is language-agnostic by design).
- Whether to offer auto-detection as a default the toggle overrides, or keep
  the toggle as the sole control for v1.
