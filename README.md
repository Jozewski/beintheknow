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

- Source-grounded answers: JO retrieves approved legal authority before answering and returns citations users can inspect.
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
- Embeddings: Gemini or local embedding server
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

- `LegalAuthority`
- `LegalTextChunk` with `sourceType: "legal-authority"`
- `reviewStatus: "approved"`
- active embedding model metadata
- official source URL, citation, jurisdiction, state code, topic IDs, and current-as-of metadata

Supplemental monitoring data:

- `LegiScanBill`
- `LegiScanBillText`
- `LegalAuthorityCandidate`
- `LegiScanSyncRun`

JO's chat retrieval is scoped to approved legal-authority chunks. LegiScan bill text is not used as the primary answer source.

This separation matters. Legislative bills can signal what may be changing, but enacted statutes and official authority records are the stronger foundation for user-facing education. Be In The Know treats LegiScan as a monitoring layer and official authority as the answer layer.

## Chat Flow

JO uses a retrieval-first workflow. The model does not independently decide what the law is, search the database directly, or cite sources that were not retrieved.

1. The user submits a question with jurisdiction and optional state code.
2. The chat route detects the supported legal topic.
3. The retrieval tool embeds the question using the active embedding provider.
4. MongoDB Atlas Vector Search retrieves approved legal-authority chunks.
5. `lib/chatPrompt.ts` builds JO's prompt with source context and safety rules.
6. Gemini writes a plain-English response with citations.
7. The app stores the user and assistant messages in MongoDB.

If Gemini generation fails but approved source context exists, JO returns a source-based fallback response grounded in the retrieved citations.

The prompt is tuned for plain language. JO is instructed to write at about a sixth-grade reading level, use short sentences, explain legal terms when needed, and avoid making eligibility or deadline promises unless the retrieved source text supports them.

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

EMBEDDING_PROVIDER=local
LOCAL_EMBEDDING_URL=http://127.0.0.1:5055
LOCAL_EMBEDDING_MODEL=BAAI/bge-small-en-v1.5
GEMINI_EMBEDDING_MODEL=gemini-embedding-001
VECTOR_SEARCH_INDEX=legal_text_chunk_embedding_bge_small
```

`MONGODB_DIRECT_URI` is optional but useful locally when `mongodb+srv` DNS resolution is unreliable. `lib/mongodb.ts` prefers `MONGODB_DIRECT_URI` when present and falls back to `MONGODB_URI`.

Optional integrations:

```bash
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
SENTRY_AUTH_TOKEN=
NEXT_PUBLIC_SENTRY_DSN=
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
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
npm run embeddings:local -- --model BAAI/bge-small-en-v1.5
```

Starts the local embedding server.

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

Checks approved legal-authority coverage for a selected state and runs core chat questions through the local API.

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
      "path": "/api/cron/legiscan-sync",
      "schedule": "0 9 * * 1"
    }
  ]
}
```

This runs the LegiScan monitoring sync every Monday at 9:00 UTC.

## Embeddings and Vector Search

The app supports both Gemini embeddings and a local embedding pipeline. The active provider is controlled by `EMBEDDING_PROVIDER`.

Do not mix embedding providers for the same search path. Stored chunks include `embeddingModel`, and retrieval only searches chunks that match the active embedding model.

For `BAAI/bge-small-en-v1.5`, create an Atlas Vector Search index with:

- index name: `legal_text_chunk_embedding_bge_small`
- vector path: `embedding`
- dimensions: `384`
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
