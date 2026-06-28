# Be In The Know - Just Ask JO

Plain-language rights education for people navigating reentry, supervision, housing, employment, voting rights, expungement, and police interactions.

The app is built with Next.js App Router, MongoDB Atlas, Mongoose, Vercel Cron, and a LegiScan-first source data strategy. JO is designed to provide educational information only, not legal advice.

## Current Status

Implemented:

- Root-level Next.js App Router structure.
- Homepage UI with hero, jurisdiction toggle, state selector, topic search, topic cards, guest banner, disclaimer, footer, and working JO chat panel.
- MongoDB connection singleton for serverless reuse.
- Mongoose models for users, chat sessions, chat messages, reviewed legal content, LegiScan source bills, bill text, legal text chunks, authority candidates, authorities, and sync runs.
- LegiScan topic query source-of-truth scaffold.
- Monday Vercel Cron route with LegiScan search, changed-hash comparison, and capped bill ingestion.
- LegiScan bill text extraction, PDF text extraction, legal text chunking, source candidate discovery, curated source ingestion, and Gemini embedding batches.
- RAG chat route with a prompt/tool boundary that embeds user questions, retrieves legal-authority chunks only, generates plain-English JO responses, stores chat history, and returns citations.
- Sample MongoDB seed data for development.

Not implemented yet:

- LegiScan relevance review and draft legal content generation.
- Streaming chat response UI.
- Auth route and auth UI.
- Guest daily limit enforcement.
- Legal review workflow UI.
- Atlas vector index automation and full-corpus embedding backfill.

## Tech Stack

- Framework: Next.js 16 App Router
- Language: TypeScript
- Styling: Tailwind CSS
- UI primitives: shadcn-style components
- Icons: Lucide React
- Animation: Motion
- Database: MongoDB Atlas with Mongoose
- Scheduled jobs: Vercel Cron
- Legislative source: LegiScan
- AI model target: Gemini Flash through Vercel AI SDK

## Project Structure

```text
app/                  Next.js routes, layout, generated app icon
app/api/cron/         Scheduled ingestion, chunking, candidate, and embedding routes
components/           UI components grouped by feature
data/                 Temporary typed topic and state data
docs/                 Project reference docs
lib/                  Shared server/client helpers
models/               Mongoose models
prompts/              Prompt category folders for system, safety, citation, escalation, jurisdiction, and tone rules
scripts/              Local utility and seed scripts
```

Important docs:

- `docs/LegiScan-Query-Reference-Guide.md`

## Environment Variables

Create `.env.local` in the project root.

Required for current MongoDB work:

```bash
MONGODB_URI=
MONGODB_DIRECT_URI=
JWT_SECRET=
GEMINI_API_KEY=
EMBEDDING_PROVIDER=gemini
GEMINI_EMBEDDING_MODEL=gemini-embedding-001
LOCAL_EMBEDDING_URL=http://127.0.0.1:5055
LOCAL_EMBEDDING_MODEL=BAAI/bge-small-en-v1.5
VECTOR_SEARCH_INDEX=legal_text_chunk_embedding
LEGISCAN_API_KEY=
CRON_SECRET=
NEXT_PUBLIC_APP_URL=http://localhost:3000
GUEST_DAILY_LIMIT=5
```

Track 2 placeholders:

```bash
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
SENTRY_AUTH_TOKEN=
NEXT_PUBLIC_SENTRY_DSN=
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

`MONGODB_DIRECT_URI` is used locally because Node had trouble resolving the Atlas `mongodb+srv` DNS record in this environment. `lib/mongodb.ts` prefers `MONGODB_DIRECT_URI` when present and falls back to `MONGODB_URI`.

## Development

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Run checks:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Sample Data

Seed development sample data into MongoDB:

```bash
npm run seed:sample
```

The seed creates or updates:

- 3 `LegiScanBill` source records
- 3 approved `LegalContent` records
- 1 `LegiScanSyncRun` audit record each time the seed runs

Bill and legal content records use upserts, so rerunning the seed does not duplicate those records. Sync runs are appended intentionally as audit history.

## LegiScan Strategy

LegiScan is the source of truth for legislative data.

Current query scaffolding lives in:

- `lib/legiscan.ts`
- `lib/legiscanSync.ts`

The weekly cron route lives at:

```text
GET /api/cron/legiscan-sync
```

Vercel cron config:

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

This runs Mondays at 9:00 UTC.

Current behavior:

- Builds the weekly state/topic query plan.
- Records a sync run when MongoDB is configured.
- Supports a limited live ingestion mode for testing.
- Calls `getSearchRaw` to collect `bill_id` and `change_hash` candidates.
- Compares stored `changeHash` values.
- Fetches only new or changed bills with `getBill`.
- Stores fetched source records in `LegiScanBill` with `relevanceStatus: "pending"`.

Run a small local ingestion:

```bash
curl "http://localhost:3000/api/cron/legiscan-sync?run=sample&states=AZ&topics=expungement&maxSearchQueries=1&maxBillFetches=2"
```

Run a full ingestion in resumable batches:

```bash
curl "http://localhost:3000/api/cron/legiscan-sync?run=full&searchOffset=0&maxSearchQueries=25&maxPagesPerSearch=100&maxBillFetches=0"
```

Increase `searchOffset` by `25` until the final partial batch completes. `maxBillFetches=0` means fetch every new or changed bill found in that batch.

Ingest full LegiScan bill text in resumable batches:

```bash
curl "http://localhost:3000/api/cron/legiscan-text?run=batch&billOffset=0&limit=100"
```

Increase `billOffset` by `100` until batches return `scannedBills: 0`. Text documents are skipped when the stored `textHash` is unchanged.

Create legal text chunks from extracted bill text:

```bash
curl "http://localhost:3000/api/cron/legal-chunks?run=batch&offset=0&limit=100"
```

Increase `offset` by `100` until batches return `scannedSources: 0`. Only `LegiScanBillText` records with `textExtractionStatus: "extracted"` are chunked.

Generate Gemini embeddings for legal text chunks:

```bash
curl "http://localhost:3000/api/cron/embeddings?limit=25&reviewStatus=draft&sourceType=legiscan-bill-text"
```

Run this in batches until `scannedChunks: 0`. Local development retrieval can use draft chunks; production retrieval is gated to `reviewStatus: "approved"` by default.

Local/open embedding option:

Gemini is still used for chat answers, but embeddings can be generated locally to avoid API rate limits. Install the local embedding dependency in your Python environment:

```bash
pip install -r requirements-local-embeddings.txt
```

Start the local embedding server:

```bash
npm run embeddings:local -- --model BAAI/bge-small-en-v1.5
```

Set these values in `.env.local` before starting Next.js:

```bash
EMBEDDING_PROVIDER=local
LOCAL_EMBEDDING_URL=http://127.0.0.1:5055
LOCAL_EMBEDDING_MODEL=BAAI/bge-small-en-v1.5
VECTOR_SEARCH_INDEX=legal_text_chunk_embedding_bge_small
```

Then restart the Next.js dev server and run batches:

```bash
npm run embeddings:batch -- --limit=100 --batches=20 --waitMs=500
```

Do not mix Gemini chunk embeddings with local query embeddings. The app uses `embeddingModel` to find chunks that match the active embedding model, and chat uses the same provider for the user question.

Chat endpoint:

```text
POST /api/chat
```

Request body:

```json
{
  "message": "What is expungement?",
  "jurisdiction": "state",
  "stateCode": "AZ"
}
```

The chat route uses a prompt/tool boundary:

- `lib/mcp/legalAuthorityTools.ts` exposes the MCP-shaped `retrieveLegalAuthority()` tool wrapper.
- `lib/chatPrompt.ts` assembles JO's system instructions, user prompt, legal context block, and no-authority fallback.
- The tool retrieves only `sourceType: "legal-authority"` chunks with `reviewStatus` of `approved`.
- LegiScan bill text is excluded from JO's primary chat answers by default. It remains supplemental change-tracking data.
- Questions must match one of JO's supported topic buckets before retrieval runs: voting, expungement, housing, employment, police, or supervision.
- If no matching legal authority exists, JO refuses to answer instead of guessing.

The model is only responsible for explaining retrieved authority in plain English. It should not decide which law exists, search Atlas directly, or cite anything that was not returned by the retrieval tool.

Atlas vector search:

The retrieval layer looks for an Atlas Vector Search index named:

```text
legal_text_chunk_embedding
```

Index path:

```text
embedding
```

Until that index exists, local/dev retrieval falls back to cosine scoring over a capped set of embedded chunks.

If using `BAAI/bge-small-en-v1.5`, create a separate Atlas Vector Search index:

```text
legal_text_chunk_embedding_bge_small
```

Use this JSON:

```json
{
  "fields": [
    {
      "type": "vector",
      "path": "embedding",
      "numDimensions": 384,
      "similarity": "cosine"
    },
    {
      "type": "filter",
      "path": "jurisdiction"
    },
    {
      "type": "filter",
      "path": "stateCode"
    },
    {
      "type": "filter",
      "path": "topicIds"
    },
    {
      "type": "filter",
      "path": "reviewStatus"
    }
  ]
}
```

Future behavior:

- Relevance-check candidate bills.
- Generate draft `LegalContent` from relevant source bills.
- Store raw source data separately from reviewed user-facing content.
- Replace only changed source records.

## Data Model Notes

Raw source layer:

- `LegiScanBill`
- `LegiScanSyncRun`

Reviewed user-facing layer:

- `LegalContent`

JO should eventually answer from reviewed, normalized `LegalContent`, not directly from raw LegiScan bill records.

## Legal Disclaimer

Be In The Know and Just Ask JO provide general educational information. They do not provide legal advice and do not create an attorney-client relationship. Users needing personal legal guidance should contact a qualified legal aid organization or attorney.
