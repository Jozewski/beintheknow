<p align="center">
  <img src="public/jo-logo.svg" alt="JO shield logo" width="96" height="96" />
</p>

# Be In The Know - Just Ask JO

Be In The Know is a legal rights education platform built to make complex federal and state rights information easier to understand, verify, and act on. Its assistant, JO, translates approved legal source material into plain-English guidance for people navigating reentry, supervision, housing, employment, voting rights, record clearing, and police interactions.

The project is designed around a simple principle: people should not have to read legal code alone to understand the basic rights and barriers that may affect their future. JO gives users a more approachable starting point while keeping citations, source boundaries, and legal disclaimers visible.

## Product Purpose

Be In The Know focuses on the gap between raw legal information and real user comprehension. Statutes, agency pages, and public resources are often scattered across different websites, written at a high reading level, and difficult to compare across states. This app brings that information into a structured experience where users can:

- choose federal or state-specific rights information,
- browse topic cards with state-relevant resources,
- ask JO plain-language questions,
- receive cited educational answers, and
- verify answers against official source links.

JO is intentionally conservative. It answers from approved legal authority records, returns citations with each response, and avoids guessing when source text is missing. The primary answer corpus is official statute and authority text that has been normalized, chunked, embedded, and marked approved. Legislative tracking data from LegiScan is maintained separately as supplemental change-monitoring data.

JO is an educational tool only. It does not provide legal advice, does not predict outcomes, and does not create an attorney-client relationship.

## What Makes It Different

Be In The Know is not a generic chatbot placed on top of legal content. The system is built around source discipline, jurisdiction awareness, and plain-language delivery.

- Source-grounded answers: JO retrieves both approved legal authorities (official statutes) and curated summaries (plain-English guidance with resource links) before answering. All responses include citations users can inspect.
- Intelligent retrieval: Question type detection adapts retrieval strategy—"What is expungement?" gets more summaries, while "Can I vote in Texas?" gets more statutes.
- State-aware experience: topic cards and chat retrieval respond to the state selected by the user.
- Separate monitoring layer: LegiScan data helps track legal changes without being treated as final authority.
- Plain-language guardrails: JO is prompted to explain rights at about a sixth-grade reading level and avoid unsupported promises.
- Operational transparency: source type, review status, current-as-of labels, embedding model, and citation metadata are preserved with the corpus.

## Core Topics

- Voting rights restoration
- Expungement, sealing, set-aside, and record clearing
- Housing rights
- Employment and occupational licensing
- Police interactions
- Probation, parole, and supervision

## Tech Stack

- Framework: Next.js 16 App Router
- Language: TypeScript
- UI: React, Tailwind CSS, Lucide React, Motion
- Database: MongoDB Atlas with Mongoose
- AI: Gemini through the Vercel AI SDK
- Embeddings: Gemini 
- Vector search: MongoDB Atlas Vector Search
- Scheduled jobs: Vercel Cron
- Legislative monitoring: LegiScan Public API

## Application Structure

```text
app/                  Next.js app routes, API routes, layout, and generated icon
app/api/chat/         JO chat endpoint
app/api/content/      Topic-card content endpoint
app/api/cron/         Scheduled and manual ingestion/maintenance endpoints
components/           UI components grouped by feature
data/                 Typed topic, state, legal source, and resource data
docs/                 Project reference documentation
lib/                  Server/client helpers, retrieval, prompt, ingestion, and embedding logic
models/               Mongoose models
scripts/              Local utility scripts
```

Reference documentation:

- `docs/LegiScan-Query-Reference-Guide.md`

## Data Architecture

The application uses a layered legal information architecture so user-facing answers remain grounded in approved authority rather than raw legislative noise.

Primary answer corpus:

- `LegalAuthority` - Official statutes, regulations, and enacted bills
- `LegalContent` - Curated plain-English summaries with resource links
- `LegalTextChunk` with `sourceType: "legal-authority"` OR `"legal-content"`
- `reviewStatus: "approved"`
- active embedding model metadata
- official source URL, citation, jurisdiction, state code, topic IDs, and current-as-of metadata

Supplemental monitoring data:

- `LegiScanBill`
- `LegiScanBillText`
- `LegalAuthorityCandidate`
- `LegiScanSyncRun`

JO's chat retrieval uses both legal-authority (official statutes) and legal-content (curated summaries) chunks. The retrieval strategy adapts based on question type: high-level definitional questions prioritize plain-English summaries, while specific factual questions prioritize statute text. LegiScan bill text is not used as the primary answer source.

This separation matters. Legislative bills can signal what may be changing, but enacted statutes and official authority records are the stronger foundation for user-facing education. Be In The Know treats LegiScan as a monitoring layer and official authority as the answer layer.

## Chat Flow

JO uses a retrieval-first workflow. The model does not independently decide what the law is, search the database directly, or cite sources that were not retrieved.

1. The user submits a question with jurisdiction and optional state code.
2. The chat route detects the supported legal topic.
3. The retrieval tool embeds the question using the active embedding provider.
4. MongoDB Atlas Vector Search retrieves approved chunks from both legal-authority (statutes) and legal-content (summaries) sources. High-level questions prioritize summaries; specific questions prioritize statutes. Falls back to any approved content if primary sources are missing.
5. Legal-content chunks are enriched with their resource links (LawHelp.org, state agencies, etc.).
6. `lib/chatPrompt.ts` builds JO's prompt with source context, resources, and safety rules.
7. Gemini writes a plain-English response with citations and resource recommendations.
8. The app stores the user and assistant messages in MongoDB.

If Gemini generation fails but approved source context exists, JO returns a source-based fallback response grounded in the retrieved citations.

The prompt is tuned for plain language. JO is instructed to write at about a sixth-grade reading level, use short sentences, explain legal terms when needed, and avoid making eligibility or deadline promises unless the retrieved source text supports them.

## Retrieval Strategy

JO uses an intelligent multi-source retrieval strategy to balance authoritative legal citations with accessible plain-English guidance.

**Question Type Detection:**

- **High-level questions** ("What is expungement?", "Explain voting rights"): Retrieves 3 statute chunks + 5 curated summary chunks
- **Specific questions** ("Can I vote in Texas?", "How do I seal my record?"): Retrieves 5 statute chunks + 2 curated summary chunks

**Three-Tier Fallback:**

1. If no legal-authority chunks exist but legal-content chunks are found, retrieve up to 6 legal-content chunks
2. If neither source has content, remove sourceType filter and retrieve any approved chunks
3. Otherwise, combine and sort both sources by relevance score

**Resource Enrichment:**

Legal-content chunks automatically include their resource links (e.g., LawHelp.org, state legal aid, government agencies). JO can reference these in responses to help users find additional support.

## Environment Variables

Create `.env.local` in the project root.

```bash
MONGODB_URI=
MONGODB_DIRECT_URI=
JWT_SECRET=
GEMINI_API_KEY=
LEGISCAN_API_KEY=
CRON_SECRET=
NEXT_PUBLIC_APP_URL=http://localhost:3000
GUEST_DAILY_LIMIT=5

EMBEDDING_PROVIDER=gemini
GEMINI_EMBEDDING_MODEL=gemini-embedding-001
GEMINI_EMBEDDING_DIMENSIONS=768
VECTOR_SEARCH_INDEX=legal_text_chunk_embedding_gemini_768
```

`CRON_SECRET` is required in production: cron routes reject any request without `Authorization: Bearer ${CRON_SECRET}`. Vercel sends this header automatically when the env var is set. See `docs/Embedding-Migration-Gemini.md` for the Gemini embedding setup.

`GUEST_DAILY_LIMIT` (default 5) caps guest questions per day, enforced server-side per guest token and IP hash. `REGISTERED_DAILY_LIMIT` (default 25) is the higher cap for signed-in accounts. `RETRIEVAL_MIN_SCORE` (default 0.62) sets the minimum similarity score for citing sources when a question matches no known topic keywords. `GET /api/health` reports database, corpus, and configuration readiness for deploy checks.

Accounts: `POST /api/auth/register`, `POST /api/auth/login`, `POST /api/auth/logout`, `GET /api/auth/me` (JWT in an httpOnly cookie, signed with `JWT_SECRET`). Signing up or in adopts the device's guest sessions into the account. `GET /api/chat/sessions` lists the signed-in user's conversations; `GET /api/chat/history` accepts either the auth cookie or a guest token.

Content operations: `/admin` is the operator dashboard - per-state/topic corpus coverage (approved chunks, embedded share, thin-content counts) and the law-change review queue fed by the weekly pipeline. Access requires a signed-in account whose email is listed in `ADMIN_EMAILS` (comma-separated). The underlying endpoints are `GET /api/admin/coverage` and `GET/POST /api/admin/candidates` (also accessible to scripts via the `CRON_SECRET` bearer token). A weekly GitHub Actions smoke test (`.github/workflows/smoke.yml`) exercises chat across six states against the deployed app.

`MONGODB_DIRECT_URI` is optional but useful locally when `mongodb+srv` DNS resolution is unreliable. `lib/mongodb.ts` prefers `MONGODB_DIRECT_URI` when present and falls back to `MONGODB_URI`.

Optional integrations:

```bash

SENTRY_AUTH_TOKEN=
NEXT_PUBLIC_SENTRY_DSN=

```

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Run validation:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Scripts

```bash
npm run seed:sample
```

Seeds sample development records into MongoDB.

```bash
npm run embeddings:batch -- --limit=100 --batches=20 --waitMs=500
```

Runs embedding batches against the configured embedding provider.

```bash
npm run embeddings:stats -- --sourceType=legal-authority --reviewStatus=approved
```

Reports embedding coverage for matching chunks.

```bash
npm run chat:smoke -- --state=AZ
```

Checks approved legal-authority and legal-content coverage for a selected state and runs core chat questions through the local API to verify multi-source retrieval.

## API Routes

```text
POST /api/chat
```

Runs JO chat retrieval, prompt construction, Gemini response generation, message persistence, and citation return.

Example body:

```json
{
  "message": "What is expungement?",
  "jurisdiction": "state",
  "stateCode": "AZ"
}
```

```text
GET /api/content
```

Returns approved topic-card content for federal or state mode.

Example:

```text
/api/content?jurisdiction=state&stateCode=TX
```

The response merges approved content, official legal authority links, and curated state resource links from `data/state-topic-resources.ts`.

## Cron and Maintenance Routes

Cron routes live under `app/api/cron/`. They can be called manually in development and protected with `CRON_SECRET` in deployed environments.

Key routes:

- `/api/cron/legiscan-sync`
- `/api/cron/legiscan-text`
- `/api/cron/legiscan-pdf-text`
- `/api/cron/legal-chunks`
- `/api/cron/legal-authorities`
- `/api/cron/statute-candidates`
- `/api/cron/embeddings`
- `/api/cron/legiscan-cleanup`

Vercel cron configuration:

```json
{
  "crons": [
    {
      "path": "/api/cron/pipeline",
      "schedule": "0 9 * * *"
    }
  ]
}
```

`/api/cron/pipeline` runs daily at 9:00 UTC with two jobs. On Mondays it performs weekly change detection: LegiScan sync, bill text fetch, PDF extraction, statute-citation extraction, and a report of which of our authority records may be affected by legislative activity (the candidate queue). Every day it performs cheap corpus maintenance: re-chunking any authority records edited after review (hash-skipped when unchanged) and embedding anything newly chunked and approved. Add `?weekly=true` to force the Monday stages when running manually.

The human stays in the loop by design: LegiScan is monitoring only. When the candidate queue flags one of our laws, a person reviews it, updates the `LegalAuthority` record, and approves (`npm run chunks:approve`); the daily stages then re-chunk and re-embed automatically. Automation never rewrites the source of truth, and unreviewed text can never enter JO's answers. `legiscan-cleanup` (destructive) also stays manual.

## Embeddings and Vector Search

The app supports both Gemini embeddings and a local embedding pipeline. The active provider is controlled by `EMBEDDING_PROVIDER`.

Do not mix embedding providers for the same search path. Stored chunks include `embeddingModel`, and retrieval only searches chunks that match the active embedding model.

For Gemini embeddings (the production default), create an Atlas Vector Search index with:

- index name: `legal_text_chunk_embedding_gemini_768`
- vector path: `embedding`
- dimensions: `768`
- similarity: `cosine`

Recommended filter fields:

- `jurisdiction`
- `stateCode`
- `topicIds`
- `reviewStatus`
- `sourceType`
- `embeddingModel`

## Source Policy

JO's primary answers should be grounded in approved legal authority records. Each chunk should include:

- jurisdiction
- state code when applicable
- topic ID
- citation
- official source URL
- current-as-of metadata
- review status
- embedding model

LegiScan is used to monitor legislative changes and identify candidate authority updates. It is not treated as final legal authority for user-facing answers.

## Legal Disclaimer

Be In The Know and Just Ask JO provide general educational information. They are not a law firm, do not provide legal advice, and do not create an attorney-client relationship. Users who need help with their own situation should contact a qualified legal aid organization or attorney licensed in their jurisdiction.
