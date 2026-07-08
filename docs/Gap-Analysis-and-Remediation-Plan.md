# Be In The Know — Gap Analysis and Remediation Plan

Date: 2026-07-06
Scope: Full repo review against the vision in README.md.
Validation status: `npx tsc --noEmit` passes, `eslint` (errors) passes. The gaps below are functional, architectural, and operational — not compile errors.

---

## 1. Where the Project Stands

The core promise of the README is largely built and coherent:

- Retrieval-first chat with topic detection, multi-source retrieval (legal-authority + legal-content), question-type-aware limits, three-tier fallback, and resource enrichment — all implemented as documented.
- Atlas Vector Search with cosine fallback for local dev.
- Prompt discipline (sixth-grade reading level, citation-only answers, no-authority refusal, source-based fallback when Gemini fails).
- Full LegiScan monitoring pipeline (sync, text, PDF extract, candidates, cleanup) kept separate from the answer corpus.
- 50-state legal authority seed data (~13 records per state) and curated state topic resources.
- Clean UI: jurisdiction toggle, state flag grid, topic cards with fallback content, chat panel with citations.

The gaps are in the layer between "works on my machine with the local embedding server running" and "deployed application that behaves the way the README and the UI promise."

---

## 2. Critical Gaps (app will not work as expected)

### 2.1 Production embedding provider is unreachable — chat dies on deploy
`EMBEDDING_PROVIDER=local` points retrieval at `http://127.0.0.1:5055`. That server only exists on your laptop. On Vercel, every `embedText()` call throws, `/api/chat` returns an unhandled 500, and JO can never answer.

Compounding it: you cannot just flip to `EMBEDDING_PROVIDER=gemini`, because
- stored chunks are embedded with `BAAI/bge-small-en-v1.5` (384 dims) and retrieval filters on `embeddingModel = active model`, so Gemini queries would match zero chunks, and
- the Atlas index `legal_text_chunk_embedding_bge_small` is built for 384 dims; `gemini-embedding-001` outputs a different dimension.

**Decision required:** pick one production embedding path.
- Option A (recommended): switch to Gemini embeddings everywhere. Re-embed the corpus (`embeddings:batch` with `includeOtherModels`/`force`), create a new Atlas index sized for the Gemini dimension, update `VECTOR_SEARCH_INDEX`.
- Option B: host the bge-small model behind a real URL (e.g., a small Fly.io/Railway/HF Inference endpoint) and set `LOCAL_EMBEDDING_URL` to it. Cheaper per-call, one more service to run.


### 2.2 No error handling around retrieval/embedding in the chat route
`/api/chat` calls `retrieveLegalAuthority()` outside any try/catch. Any embedding or DB failure → raw 500, user sees a generic error, and the user's message is already persisted while no assistant message is. Wrap retrieval, return `buildGenerationFailureResponse()`-style JSON with a 200/503, and log the cause.
Also: `await request.json()` throws on malformed JSON → 500. Guard it.

### 2.3 Guest limit is enforced
The UI states "You have 5 educational questions available today," `GUEST_DAILY_LIMIT=5` is in env, and the README lists it. The server now enforces this limit and returns 429 with a friendly message when exceeded.

### 2.4 Accounts exist,
"Create an account to keep your chat history" — there is a `User` model, `bcryptjs`, `jsonwebtoken`, and `JWT_SECRET`, my
plan (phase 2): `/api/auth/register`, `/api/auth/login` (JWT in httpOnly cookie), attach `userId` to `ChatSession`, add `GET /api/chat/sessions` + `GET /api/chat/sessions/:id/messages`.

### 2.5 Chat history
Messages persist to MongoDB, but there is no GET endpoint and the client keeps history only in React state. A page refresh loses everything, and guestToken/sessionId live only in memory. Minimum fix: persist `guestToken` + `sessionId` in `localStorage` and add a history endpoint keyed by guestToken.

### 2.6 ChatPanel remount wipes active conversations (UI bug)
`app/page.tsx` renders `<ChatPanel key={initialTopic ?? "empty-chat"} ...>`. Every call to `openJo(question)` changes the key, which unmounts and remounts the panel — mid-conversation, clicking any suggestion or the hero button erases all messages and the sessionId. Fix: stop keying on `initialTopic`; pass it as a prop and handle it in an effect (or a `seedDraft` callback).

Related nit: `askHeroQuestion()` with an empty input submits the literal placeholder text "Ask JO anything about your rights..." as a question.

### 2.7 Cron routes are spoofable in production
`isAuthorizedCronRequest` accepts any request whose User-Agent contains `vercel-cron/1.0` and has an `x-vercel-cron-schedule` header — both attacker-settable. Anyone can trigger LegiScan syncs (burning your API quota), embedding runs (burning Gemini spend), and cleanup jobs. In production, require `Authorization: Bearer ${CRON_SECRET}` only (Vercel sends it automatically when `CRON_SECRET` is set), and delete the user-agent branch and the `NODE_ENV !== "production"` open-door fallback (keep dev bypass behind an explicit `ALLOW_DEV_CRON=true` if desired).

---

## 3. High-Priority Gaps (works, but not as the vision intends)

### 3.1 Topic-keyword gate blocks valid questions
`retrieveLegalAuthority` returns empty context (→ JO refuses) whenever `detectLegalTopicIds` finds no keyword match. Questions like "Can I get my life back on track after prison?" or misspellings ("expungment") hit the refusal path even when relevant approved content exists. Options, in order of effort:
1. When no topic matches, still run vector retrieval without the topic filter (the embedding itself carries the semantics) and let the score threshold decide.
2. Add a lightweight Gemini topic-classification call as fallback.
Also add a minimum-score threshold so unrelated questions don't retrieve noise.

### 3.2 No response streaming
The route uses `generateText` and the client waits on a spinner ("JO is checking the source database...") for the full answer. With the AI SDK already in place, moving to `streamText` + streamed fetch on the client is a contained change and materially improves perceived speed for a 1500-token answer.

### 3.3 Truncation band-aids instead of fixing the cause
`ensureCompleteAnswer` / `isBrokenGeneratedAnswer` patch answers cut off by `maxOutputTokens: 1500`. Better: raise the cap (Gemini Flash is cheap), keep the repair functions as a last resort, and log whenever they fire so you can see how often truncation still happens.

### 3.4 The ingestion pipeline has no automation past step 1
Only `legiscan-sync` is in `vercel.json`. The chain the README implies — text fetch → chunking → authority ingest → embeddings — must all be triggered by hand. New/changed content will silently sit unembedded (invisible to JO). Add cron entries or make each route chain to the next with small batch limits.

### 3.5 Session hijack / cross-session writes
`findOrCreateSession` trusts any client-supplied `sessionId` without verifying the `guestToken` matches the session. Anyone who learns/guesses a session ObjectId can append to another user's history. Verify `session.guestToken === guestToken` before reuse; otherwise create a new session.

### 3.6 Atlas index prerequisites are unverified at runtime
If the Atlas index lacks the filter fields (`jurisdiction`, `stateCode`, `topicIds`, `reviewStatus`, `sourceType`, `embeddingModel`), `$vectorSearch` throws and the code silently falls back to a 500-doc in-memory cosine scan — correct results, hidden performance cliff. Log the caught error (currently swallowed by an empty `catch {}`) and add a startup/health check (`/api/health`) that validates DB connectivity, index presence, embedding provider reachability, and embedded-chunk counts per state.

---

## 4. Medium Priority

- **Observability wired to nothing:** Sentry env vars exist; neither SDK is installed or initialized. Either integrate (`@sentry/nextjs` at minimum, for the chat route) or remove the vars. Right now production failures are invisible.
- **No tests, no CI:** zero test files in the repo. Priority order: (1) unit tests for `detectLegalTopicIds`, `isHighLevelQuestion`, `ensureCompleteAnswer`, `buildFilter`; (2) integration test for `/api/chat` with a mocked provider + in-memory Mongo; (3) GitHub Actions running lint + tsc + tests on PR. The existing `chat:smoke` script is a good E2E complement — run it against preview deploys.
- **`getConfidence` is citation-count only.** Three weak matches (score 0.4) report "high" confidence. Blend in the top relevance score.
- **Static fallback content can mask real outages:** when `/api/content` fails, the UI silently renders `buildFallbackTopicEntries` — good resilience, but pair it with the `usingFallbackContent` flag actually being shown to the user (it's passed to `TopicsSection`; make sure it renders a notice).
- **Legacy mojibake cleanup in `content.ts` (`cleanLegacyText`)** treats symptoms of double-encoded source data. Fix the data at ingestion and re-run, then delete the shim.
- **`maxDuration = 60`** requires a paid Vercel plan; on Hobby the function caps at 10s–60s depending on config. Confirm plan or trim the retrieval/generation budget.
- **Uncommitted work:** `git status` shows ~20 modified files. Commit in logical units so you can bisect regressions.

---

## 5. Recommended Execution Plan

### Phase 1 — Make it deployable and truthful (1–2 days of work)
1. Decide embedding provider (2.1) and execute the migration (re-embed + new index if Gemini).
2. Fix `.env.local` typo; document required prod env vars.
3. Harden cron auth (2.7).
4. Wrap chat-route retrieval/JSON parsing in error handling (2.2).
5. Fix ChatPanel remount bug + hero placeholder submit (2.6).
6. Verify session ownership by guestToken (3.5).
7. Update guest-banner copy to match reality until quotas/accounts ship.
8. Commit everything; run `npm run build` + `chat:smoke` against a preview deploy.

### Phase 2 — Enforce the product rules (2–4 days)
9. Guest daily limit with Upstash or Mongo counters, 429 handling, live remaining-count in banner (2.3).
10. Persist guestToken/sessionId in localStorage; add chat history GET endpoint (2.5).
11. Remove topic-keyword hard gate; add score threshold (3.1).
12. Add `/api/health` + Sentry on the chat route (3.6, observability).

### Phase 3 — Round out the vision (1–2 weeks)
13. Auth: register/login, JWT cookie, user-owned sessions and history UI (2.4).
14. Streaming responses (3.2).
15. Automate the full ingestion → chunk → embed pipeline via cron (3.4).
16. Test suite + CI (unit → integration → smoke-on-preview).
17. Raise output token cap, log truncation repairs (3.3), blend score into confidence.

### Phase 4 — Content operations (ongoing)
18. Per-state embedded-coverage dashboard (extend `embeddings:stats` into an admin endpoint) so you know which states JO can actually answer for.
19. Review workflow for `LegalAuthorityCandidate` → approved `LegalAuthority` so LegiScan monitoring feeds the answer corpus the way the README describes.
20. Periodic `chat:smoke` runs across all 50 states as a scheduled quality gate.

---

## 6. Quick Reference: Promise vs. Reality

| README / UI promise | Reality | Section |
|---|---|---|
| Works on Vercel with cron | Chat breaks on deploy (local embedder) | 2.1 |
| 5 guest questions per day | Unlimited, unenforced | 2.3 |
| Create an account to keep history | No auth exists | 2.4 |
| Messages stored in MongoDB | Stored but unreadable; lost on refresh | 2.5 |
| Cited answers to rights questions | Refuses anything missing a topic keyword | 3.1 |
| Cron protected by CRON_SECRET | Spoofable via headers | 2.7 |
| Sentry/PostHog optional integrations | Env vars only, no code | 4 |
| Scheduled ingestion pipeline | Only step 1 scheduled | 3.4 |


<!-- All of the above issues were addressed. July 7, 2026 -->