# Operations Reference - Be In The Know

Read this when the task involves deploying, operating the admin dashboard,
reviewing law changes, or diagnosing production issues.

## Deployment (Vercel)

1. Merge to `main` and push. CI (lint -> tsc -> tests -> build) must be green.
2. Vercel: import the GitHub repo; Next.js defaults are fine.
3. Environment variables (Production + Preview): MONGODB_URI, JWT_SECRET,
   GEMINI_API_KEY, LEGISCAN_API_KEY, CRON_SECRET, EMBEDDING_PROVIDER=gemini,
   GEMINI_EMBEDDING_DIMENSIONS=768,
   VECTOR_SEARCH_INDEX=legal_text_chunk_embedding_gemini_768,
   GUEST_DAILY_LIMIT=5, REGISTERED_DAILY_LIMIT=25, ADMIN_EMAILS,
   NEXT_PUBLIC_SENTRY_DSN, NEXT_PUBLIC_APP_URL (after first deploy).
   Production uses GUEST_DAILY_LIMIT=5 even if local dev uses 100.
4. Atlas Network Access must allow Vercel (0.0.0.0/0 is the standard
   serverless setting; credentials still protect the DB).
5. Verify after deploy: GET /api/health returns "healthy" with corpus counts;
   ask JO a question on the live site; sign up; check /admin.
6. GitHub repo secrets for the weekly smoke workflow: SMOKE_BASE_URL
   (the production URL), MONGODB_URI, CRON_SECRET. Run the workflow manually
   once from the Actions tab to confirm.
7. Vercel -> Settings -> Cron Jobs should show /api/cron/pipeline daily 9:00
   UTC. Vercel sends the CRON_SECRET bearer automatically.

## Admin dashboard (/admin)

Access: signed-in account whose email is in ADMIN_EMAILS. Scripts can use the
CRON_SECRET bearer against /api/admin/* directly.

Coverage grid: rows = states (FEDERAL first), columns = the six topics.
Cell shows embedded/total for approved chunks. Green = fully embedded
(answerable), amber = some chunks not embedded with the ACTIVE model (run the
pipeline or embeddings batch), red = no approved content (JO declines there).
Summary cards: total approved, embedded %, thin chunks (<120 chars -
boilerplate candidates for editorial cleanup), states missing a topic.

Review queue: items arrive from the Monday pipeline (statute-citation
extraction). Statuses: needs-review -> verified ("Handled") / rejected
("Dismiss"), with reopen. Workflow per item: open Source link, read the bill,
decide if it changed a law JO relies on. If yes: edit that LegalAuthority
record's text, run `npm run chunks:approve` after re-chunking, mark Handled.
If noise: Dismiss.

## Diagnosing problems

- JO gives 503 "could not search": embedding provider or vector search
  failure. Check /api/health, then Sentry (tag stage:retrieval), then the
  Atlas index name/dims vs env.
- JO answers with the "What the official sources say:" template: generation
  failed or was flagged broken - check Sentry stage:generation and the
  dev/Vercel logs for "JO chat generation failed".
- Answers appear all at once instead of streaming: check that thinkingBudget
  0 and smoothStream are still on the streamText call.
- Quota 429s during testing: use the CRON_SECRET bearer header or raise
  GUEST_DAILY_LIMIT locally.
- coverage shows amber everywhere after a corpus change: run
  `npm run embeddings:batch ... --includeOtherModels=true` until
  embeddedChunks reports 0.
- Gemini 429 quota errors: wait for the reported retryDelay; verify billing
  tier if persistent.
- A cron route 404s in dev: stale .next build cache - stop the server,
  delete .next, restart.

## History documents (in the repo)

- docs/Gap-Analysis-and-Remediation-Plan.md - the original audit; explains
  WHY each subsystem exists.
- docs/Embedding-Migration-Gemini.md - the local->Gemini embedding migration
  runbook with troubleshooting (404/401/429 cases).
- Be-In-The-Know-Product-Proposal.docx - the evidence-based proposal with
  cited statistics about the reentry audience.
