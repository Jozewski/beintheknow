# Migration: Local bge-small → Gemini Embeddings

Why: production (Vercel) cannot reach `http://127.0.0.1:5055`, so chat retrieval failed on deploy. Gemini embeddings work everywhere your `GEMINI_API_KEY` works.

## What changed in code

- `lib/embeddings.ts`
  - Gemini embeds now pass `outputDimensionality` (env `GEMINI_EMBEDDING_DIMENSIONS`, default **768**) and proper task types (`RETRIEVAL_DOCUMENT` for chunks, `RETRIEVAL_QUERY` for questions).
  - The stored/filtered model label is now `gemini-embedding-001@768`, so chunks embedded at different dimensions can never mix in one search path.
- `.env.local`: `EMBEDDING_PROVIDER=gemini`, `GEMINI_EMBEDDING_DIMENSIONS=768`, `VECTOR_SEARCH_INDEX=legal_text_chunk_embedding_gemini_768`, and fixed the `LOCAL_EMBEDDIN_URL` typo.
- Cron auth hardened (`lib/cronAuth.ts`): production requires `Authorization: Bearer ${CRON_SECRET}`.

## One-time steps you must run

### 1. Create the new Atlas Vector Search index

On the `legaltextchunks` collection, create a Vector Search index:

- Name: `legal_text_chunk_embedding_gemini_768`
- Definition:

```json
{
  "fields": [
    { "type": "vector", "path": "embedding", "numDimensions": 768, "similarity": "cosine" },
    { "type": "filter", "path": "jurisdiction" },
    { "type": "filter", "path": "stateCode" },
    { "type": "filter", "path": "topicIds" },
    { "type": "filter", "path": "reviewStatus" },
    { "type": "filter", "path": "sourceType" },
    { "type": "filter", "path": "embeddingModel" }
  ]
}
```

This single index covers BOTH source types (`legal-authority` statutes and `legal-content` curated summaries) — they share the `legaltextchunks` collection, and retrieval filters by the `sourceType` field at query time. You do not need a separate index per source type.

Keep the old `legal_text_chunk_embedding_bge_small` index until migration is verified, then delete it.

### 2. Re-embed the corpus with Gemini

Start the dev server (`npm run dev`) and wait for it to report ready, then re-embed everything previously embedded with bge-small:

```bash
npm run embeddings:batch -- --limit=50 --batches=40 --waitMs=1000 --sourceType=legal-authority --reviewStatus=approved --includeOtherModels=true
npm run embeddings:batch -- --limit=50 --batches=40 --waitMs=1000 --sourceType=legal-content --reviewStatus=approved --includeOtherModels=true
```

`includeOtherModels=true` targets chunks whose `embeddingModel` differs from the active one. Repeat batches until `embeddedChunks` reports 0.

**Troubleshooting:**

- `"status": 404` from the batch script → the dev server is serving a stale build cache. Stop it, delete the `.next` folder (`Remove-Item -Recurse -Force .next` on Windows), restart `npm run dev`, and verify with `curl.exe "http://localhost:3000/api/cron/embeddings?run=stats"` before retrying.
- Dev server on a different port (Next falls back to 3001 when 3000 is busy) → add `--baseUrl=http://localhost:3001` to each batch command.
- `"status": 401` → you are hitting a production build; run against the dev server, or send the header `Authorization: Bearer $CRON_SECRET`.
- `"status": 429` (`rate_limited`) → Gemini embedding quota hit. Wait for the reported `retryDelay`, then resume with a smaller `--limit` such as 5.

### 3. Verify

```bash
npm run embeddings:stats -- --sourceType=legal-authority --reviewStatus=approved
npm run embeddings:stats -- --sourceType=legal-content --reviewStatus=approved
npm run chat:smoke -- --state=AZ
```

Coverage should show `gemini-embedding-001@768` for all approved chunks.

### 4. Vercel environment variables

Set on the project (Production + Preview):

```
MONGODB_URI            (Atlas SRV string)
GEMINI_API_KEY
LEGISCAN_API_KEY
CRON_SECRET            ← REQUIRED now; cron routes 401 without it. Generate: openssl rand -hex 32
EMBEDDING_PROVIDER=gemini
GEMINI_EMBEDDING_DIMENSIONS=768
VECTOR_SEARCH_INDEX=legal_text_chunk_embedding_gemini_768
GUEST_DAILY_LIMIT=5
NEXT_PUBLIC_APP_URL=https://<your-domain>
```

Note: your local `CRON_SECRET` is currently empty — set it in `.env.local` too if you want to test the auth path locally.

## Cost note

`gemini-embedding-001` pricing is per input token; the corpus (~29k lines of source data producing the chunk set) is a one-time re-embed, and each chat question is a single short embed call. At current Gemini embedding pricing this is negligible relative to chat generation.

## Rolling back

Set `EMBEDDING_PROVIDER=local`, `VECTOR_SEARCH_INDEX=legal_text_chunk_embedding_bge_small`, and run the local server (`npm run embeddings:local`). Old bge-small vectors remain on chunks until overwritten, so rollback is instant while both indexes exist.
