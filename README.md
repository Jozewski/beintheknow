# Be In The Know - Just Ask JO

Plain-language rights education for people navigating reentry, supervision, housing, employment, voting rights, expungement, and police interactions.

The app is built with Next.js App Router, MongoDB Atlas, Mongoose, Vercel Cron, and a LegiScan-first source data strategy. JO is designed to provide educational information only, not legal advice.

## Current Status

Implemented:

- Root-level Next.js App Router structure.
- Homepage UI with hero, jurisdiction toggle, state selector, topic search, topic cards, guest banner, disclaimer, footer, and JO chat panel shell.
- MongoDB connection singleton for serverless reuse.
- Mongoose models for users, chat sessions, chat messages, reviewed legal content, LegiScan source bills, and LegiScan sync runs.
- LegiScan topic query source-of-truth scaffold.
- Monday Vercel Cron route with LegiScan search, changed-hash comparison, and capped bill ingestion.
- Sample MongoDB seed data for development.

Not implemented yet:

- LegiScan relevance review and draft legal content generation.
- Gemini streaming chat route.
- Auth route and auth UI.
- Guest daily limit enforcement.
- Legal review workflow UI.
- Vector search / embeddings.

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
app/api/cron/         Scheduled LegiScan sync route
components/           UI components grouped by feature
data/                 Temporary typed topic and state data
docs/                 Project reference docs
lib/                  Shared server/client helpers
models/               Mongoose models
prompts/              Future prompt modules
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
