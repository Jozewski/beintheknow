---
name: beintheknow-dev
description: Complete working knowledge of the Be In The Know / Just Ask JO project - a legal rights education platform for people navigating reentry. Use this skill for ANY work in the beintheknow repository or any mention of "Be In The Know", "JO", "Just Ask JO", the reentry legal-rights app, its chat/retrieval system, LegiScan pipeline, embeddings, admin dashboard, or deployment. Consult it before writing or changing any code in this project, answering questions about how it works, debugging it, or planning features - even small ones, because the project has strict non-negotiable rules (source discipline, human review gates) that all changes must respect.
---

# Be In The Know / Just Ask JO - Project Guide

Be In The Know is a Next.js legal rights education platform. Its assistant, JO,
answers questions about voting rights, expungement, housing, employment, police
interactions, and supervision (the six topic IDs: `voting`, `expungement`,
`housing`, `employment`, `police`, `supervision`) for all fifty states plus
federal. Users are people navigating reentry - a vulnerable population. That
fact drives every design rule below.

## Non-negotiable principles

These are the project's constitution. Do not trade them away for convenience,
and check any change against them:

1. **Source discipline.** JO answers ONLY from retrieved, approved chunks and
   cites them. It never answers from model memory, never cites what was not
   retrieved, and declines when no approved source exists. Any change that
   lets unreviewed or unretrieved content into answers is wrong.
2. **Human review gate.** New content always enters at `draft`/`legal-review`
   status and is invisible to JO until a person promotes it with
   `npm run chunks:approve`. Automation may detect, fetch, chunk, and embed -
   it must never approve or rewrite the source of truth.
3. **LegiScan is monitoring, never an answer source.** Bills signal that OUR
   laws (LegalAuthority records) may need review. Bill text is never part of
   the answer corpus.
4. **Education, not legal advice.** Disclaimers everywhere, no eligibility or
   deadline promises unless the source states them, always route to legal aid
   for individual situations.
5. **Truthful UI.** Never ship interface copy promising features that are not
   enforced server-side (this project once advertised a "5 questions/day"
   limit that nothing enforced - that class of bug is banned).
6. **Minimal data.** No raw IPs stored (only salted SHA-256 hashes), no
   tracking cookies, passwords bcrypt-hashed, deletion is self-service.

## Architecture map

| Area | Files |
|---|---|
| Chat API (streaming) | `app/api/chat/route.ts` |
| Chat history / sessions | `app/api/chat/history/route.ts`, `app/api/chat/sessions/route.ts` |
| Auth | `lib/auth.ts`, `app/api/auth/{register,login,logout,me,account}/route.ts`, `app/auth/page.tsx` |
| Retrieval | `lib/mcp/legalAuthorityTools.ts` (orchestration), `lib/legalRetrieval.ts` (vector search + fallback) |
| Prompt & voice | `lib/chatPrompt.ts` |
| Answer repair | `lib/answerRepair.ts` (pure functions, unit-tested) |
| Embeddings | `lib/embeddings.ts` |
| Pipeline | `app/api/cron/pipeline/route.ts` orchestrates the other `app/api/cron/*` routes |
| Cron/admin auth | `lib/cronAuth.ts`, `lib/adminAuth.ts` |
| Admin dashboard | `app/admin/page.tsx`, `app/api/admin/{coverage,candidates}/route.ts` |
| Health | `app/api/health/route.ts` |
| UI | `app/page.tsx`, `components/chat/*`, `components/layout/*` (PageHero for secondary pages) |
| Legal pages | `app/{about,terms,privacy}/page.tsx` |
| Models | `models/*.ts` (Mongoose; see data model below) |
| Tests | `tests/*.test.ts` (vitest, alias `@` -> repo root) |
| Scripts | `scripts/*.mjs` (each loads `.env.local` itself) |

## Data model (MongoDB Atlas via Mongoose)

Answer corpus: `LegalAuthority` (official statutes; the source of truth) and
`LegalContent` (curated summaries with resource links) are chunked into
`LegalTextChunk` with `sourceType: "legal-authority" | "legal-content"`,
`reviewStatus` (`draft`/`legal-review`/`approved`/`expired`), `topicIds`,
`jurisdiction`/`stateCode`, `embedding`, `embeddingModel`.
Curated-summary chunks use `sourceId: "candidate:<id>"` (NOT an ObjectId -
resource enrichment must skip non-ObjectId sourceIds or it throws CastError).

Monitoring layer: `LegiScanBill`, `LegiScanBillText`, `LegalAuthorityCandidate`
(status workflow `needs-review` -> `verified`/`rejected`), `LegiScanSyncRun`.

Users/chat: `User`, `ChatSession` (has `userId`, `guestToken`, `ipHash`),
`ChatMessage` (timestamps used for daily quota counting).

## Chat flow specifics

- Quota is checked BEFORE any storage or model spend: guests counted per
  guestToken + hashed IP (`GUEST_DAILY_LIMIT`, default 5); signed-in users per
  account (`REGISTERED_DAILY_LIMIT`, default 25). A
  `Authorization: Bearer ${CRON_SECRET}` header bypasses quota (internal
  tests only).
- Session reuse requires ownership proof (matching guestToken or account
  userId) - never trust a bare sessionId.
- Streaming is the default: NDJSON events `{type:"meta"}` (session, quota,
  citations) -> `{type:"text",value}` chunks -> optional `{type:"final",content}`
  when repair changed the text (final is what persists) -> `{type:"done"}`.
  `stream:false` in the body returns classic single JSON (scripts use this).
- Gemini generation runs with `thinkingConfig: { thinkingBudget: 0 }` (thinking
  adds seconds of dead air; context is already retrieved) and
  `experimental_transform: smoothStream({ delayInMs: 15 })` for word-level
  pacing. Model: `gemini-2.5-flash`, temp 0.4, maxOutputTokens 1500.
- Answer repair (`lib/answerRepair.ts`): `ensureCompleteAnswer` treats a
  trailing citation bracket `]` as a complete ending (regression-tested - do
  not remove `]` from the terminal-character set, it caused robotic canned
  endings on every answer). `isBrokenGeneratedAnswer` triggers the
  source-based fallback response.
- Topic keyword detection (`detectLegalTopicIds`) only TUNES retrieval; it is
  not a gate. Questions with no keyword match still retrieve semantically,
  protected by `RETRIEVAL_MIN_SCORE` (default 0.62, Atlas 0..1 scale; the dev
  cosine fallback normalizes raw cosine to the same scale via (1+cos)/2).

## Embedding rules (violating these silently breaks retrieval)

- Provider is Gemini (`gemini-embedding-001`), 768 dimensions via
  `GEMINI_EMBEDDING_DIMENSIONS`, task types RETRIEVAL_DOCUMENT (chunks) /
  RETRIEVAL_QUERY (questions).
- The stored model label includes dimensions: `gemini-embedding-001@768`.
  Retrieval filters chunks by exact label match, so mixed dimensions or
  providers can never share a search path. Any script that computes the
  active model must mirror `getActiveEmbeddingModel()` exactly (the smoke
  test once broke by omitting the `@768` suffix).
- Atlas Vector Search index: `legal_text_chunk_embedding_gemini_768`, path
  `embedding`, 768 dims, cosine, filter fields: jurisdiction, stateCode,
  topicIds, reviewStatus, sourceType, embeddingModel. One index serves both
  sourceTypes.
- If Atlas vector search errors, retrieval silently falls back to an
  in-memory cosine scan (correct but slow) - check the index before chasing
  ghosts.

## Pipeline (content operations)

`/api/cron/pipeline` runs daily at 9:00 UTC via Vercel cron (single cron
entry - fits Hobby plan). Mondays (or `?weekly=true`): LegiScan sync -> bill
text fetch -> PDF extraction -> statute-citation extraction ->
candidate-report. Daily: `legal-chunks?run=authorities` (hash-skips
unchanged) + `embeddings?limit=50`. It self-calls the stage routes with the
CRON_SECRET bearer, 25s per-stage timeout, 40s launch budget; stages are
resumable so skipped stages catch up next run. `legiscan-cleanup` and content
approval stay manual on purpose.

Law-change workflow: pipeline flags -> review in `/admin` queue -> edit the
LegalAuthority record if the law changed -> `npm run chunks:approve` -> mark
Handled. Daily stages re-chunk and re-embed automatically.

## Commands

```bash
npm run dev                # dev server
npm run lint               # eslint (CI runs this - see gotchas)
npx tsc --noEmit           # typecheck (CI runs this)
npm test                   # vitest unit tests (28+ tests)
npm run build              # production build (CI runs this)
npm run chat:smoke -- --state=AZ         # end-to-end chat test
npm run chunks:approve -- --sourceType=legal-content          # dry run
npm run chunks:approve -- --sourceType=legal-content --apply  # promote
npm run embeddings:stats -- --sourceType=legal-authority --reviewStatus=approved
npm run embeddings:batch -- --limit=50 --batches=40 --waitMs=5000 --sourceType=legal-content --reviewStatus=approved --includeOtherModels=true
```

Always finish a work session with lint + tsc + test before suggesting a
commit; CI (GitHub Actions) runs lint -> typecheck -> tests -> build and will
reject what fails locally.

## Environment variables

Required: `MONGODB_URI`, `JWT_SECRET`, `GEMINI_API_KEY`, `LEGISCAN_API_KEY`,
`CRON_SECRET` (cron routes 401 without it in production),
`EMBEDDING_PROVIDER=gemini`, `GEMINI_EMBEDDING_DIMENSIONS=768`,
`VECTOR_SEARCH_INDEX=legal_text_chunk_embedding_gemini_768`.
Behavior: `GUEST_DAILY_LIMIT` (5 prod; often 100 in local dev),
`REGISTERED_DAILY_LIMIT` (25), `RETRIEVAL_MIN_SCORE` (0.62),
`ADMIN_EMAILS` (comma-separated, gates /admin), `NEXT_PUBLIC_SENTRY_DSN`.
Scripts read `.env.local` themselves; the dev server only reads env at
startup - restart after changes.

## Voice and UI conventions

JO's prompt (lib/chatPrompt.ts) enforces: warm "knowledgeable friend" tone,
sixth-grade reading level, short sentences, NO markdown (chat bubbles render
plain text - asterisks would show literally), no repeated canned closers,
blended structure (short answer -> what the law says -> facts that matter ->
next step) without section labels, citations as [n] brackets only for
retrieved sources. Brand colors: deep green `#085041`, accent `#1D9E75`,
mint `#E1F5EE`, hero gradient `linear-gradient(135deg,#060C18,#085041)`.
Secondary pages use the shared `PageHero` component. Header/footer anchors
must be `/#topics` style (page-qualified), not bare `#topics`.

## Known gotchas

- ESLint `react/no-unescaped-entities`: apostrophes and straight quotes in
  JSX text must be `&apos;` / `&quot;` - this has failed CI before.
- Zod narrowing (`parsed.data`) is lost inside nested closures - destructure
  what closures need into consts first.
- Mongoose `.lean()` needs explicit type parameters; type `_id` as
  `Types.ObjectId` (not `unknown`) when it feeds another query filter.
- Never call `.hint(undefined)` on a Mongoose query - guard it (crashed the
  embedding worker's migration path).
- Gemini free tier limits are 100 requests/min and 1,000/day; the project
  key has billing enabled, but if quota errors appear, check the tier.
- AGENTS.md warning applies: Next.js 16 differs from training data - check
  `node_modules/next/dist/docs/` before using unfamiliar Next APIs, and grep
  the installed `ai` / `@ai-sdk/google` `.d.ts` files before using SDK
  options (this project verified `providerOptions`, `thinkingConfig`,
  `smoothStream` that way).

## Going deeper

Read `references/operations.md` (bundled with this skill) for the admin
handbook and the full deployment runbook. Read the repo's own docs for
history: `docs/Gap-Analysis-and-Remediation-Plan.md` (why everything was
built) and `docs/Embedding-Migration-Gemini.md` (embedding migration +
troubleshooting).
