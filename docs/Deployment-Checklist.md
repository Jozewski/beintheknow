# Deployment Checklist

One place for everything deployment day needs. Work top to bottom; nothing
here requires code changes. Steps reference the operator docs where deeper
detail exists (README, Onboarding-Guide, Content-Review-Checklist).

## 1. Pre-flight (before touching Vercel)

- [ ] `main` is green: CI passed on the latest commit (lint, typecheck,
      tests, build).
- [ ] Local validation matches: `npm run lint && npx tsc --noEmit && npm test && npm run build`
- [ ] Corpus is ready: `/admin` coverage shows approved + embedded content
      for the states you intend to launch with, and the FEDERAL row is
      green across all six topics.
- [ ] MongoDB Atlas checks:
  - [ ] Vector Search index `legal_text_chunk_embedding_gemini_768` exists
        (768 dims, cosine, filter fields per README).
  - [ ] Network access allows Vercel (0.0.0.0/0 or the Vercel integration).
  - [ ] The connection string user is least-privilege (readWrite on the app
        database only - not an Atlas admin).
- [ ] Google AI Studio: billing enabled on the Gemini key; set a budget
      alert in the console.

## 2. Vercel environment variables

Set for the Production environment. Server-only values (everything except
`NEXT_PUBLIC_*`) must NOT be prefixed `NEXT_PUBLIC_`.

Required:

- [ ] `MONGODB_URI`
- [ ] `JWT_SECRET` - long random string; signs auth cookies and peppers IP
      hashes. Generate fresh for production; never reuse the dev value.
- [ ] `GEMINI_API_KEY`
- [ ] `LEGISCAN_API_KEY`
- [ ] `CRON_SECRET` - long random string. Vercel automatically sends it as
      the bearer token on cron invocations; cron and admin script access
      401 without it.
- [ ] `NEXT_PUBLIC_APP_URL` - the production URL
- [ ] `GEMINI_EMBEDDING_MODEL=gemini-embedding-001`
- [ ] `GEMINI_EMBEDDING_DIMENSIONS=768`
- [ ] `VECTOR_SEARCH_INDEX=legal_text_chunk_embedding_gemini_768`
- [ ] `ADMIN_EMAILS` - comma-separated admin account emails
- [ ] `RESEND_API_KEY` - Resend API key; sends password-reset emails.
      Without it (and `EMAIL_FROM`) the forgot-password endpoint errors in
      production instead of silently dropping mail.
- [ ] `EMAIL_FROM` - verified sender on the Resend domain, e.g.
      `Be In The Know <no-reply@yourdomain.org>`

Behavior (defaults exist; set explicitly so production intent is recorded):

- [ ] `GUEST_DAILY_LIMIT=5`
- [ ] `REGISTERED_DAILY_LIMIT=25`
- [ ] `GUEST_RETENTION_DAYS=90`
- [ ] `RETRIEVAL_MIN_SCORE=0.62`

Observability:

- [ ] `NEXT_PUBLIC_SENTRY_DSN` - Sentry only reports when
      NODE_ENV=production, so dev sessions stay silent.

## 3. Deploy and verify

- [ ] Deploy `main` on Vercel; build completes.
- [ ] `GET /api/health` returns 200 with `status: "healthy"` (database
      connected, corpus ready, config present).
- [ ] Homepage loads; pick a state; topic cards render.
- [ ] Ask JO a state question ("Can I vote?" with TX selected) - cited
      answer with current-as-of dates on citations.
- [ ] Ask JO a federal question ("Can my record be expunged?" with Federal
      selected) - cited answer (18 U.S.C. § 3607 should appear).
- [ ] Privacy notice is visible at the chat input; feedback thumbs appear
      on answers.
- [ ] Register a test account, ask a question, delete the account - all
      self-service.
- [ ] Sign in with an `ADMIN_EMAILS` account and open `/admin` - coverage
      table, law-change queue, and message review all load; LegiScan
      attribution line is visible.

## 4. Guardrail verification against production

- [ ] `npm run chat:redteam -- --baseUrl=https://YOUR-URL --state=AZ`
      (with `CRON_SECRET` in the environment so quota is bypassed):
      expect 7/7 guardrails held.
- [ ] `npm run chat:smoke -- --state=AZ --baseUrl=https://YOUR-URL`:
      expect cited answers.
- [ ] As a guest, ask 6 questions - the 6th must be refused with the
      friendly limit message (server-enforced quota matches UI copy).

## 5. GitHub Actions

- [ ] Add repository secrets (Settings → Secrets and variables → Actions):
      `SMOKE_BASE_URL`, `MONGODB_URI`, `CRON_SECRET`.
- [ ] Re-enable the weekly smoke schedule in
      `.github/workflows/smoke.yml`: add under `on:`
      `schedule:` / `- cron: "0 12 * * 2"` (exact lines are in the file's
      header comment), and rename the workflow back to
      `Weekly smoke test`.
- [ ] Trigger the workflow once manually (Actions → Run workflow) and
      confirm all six states pass.

## 6. Pipeline first run

- [ ] The daily pipeline (9:00 UTC, from vercel.json) should appear in
      Vercel's cron logs after the first scheduled run. To exercise it
      immediately:
      `curl -H "Authorization: Bearer $CRON_SECRET" "https://YOUR-URL/api/cron/pipeline?weekly=true"`
- [ ] Check the response: stages succeeded or skipped, none failed.
- [ ] Next Monday, confirm the LegiScan stages ran and anything flagged
      appears in the `/admin` review queue.

## 7. First-week watch

- [ ] Sentry: only production events, ideally none. Resolve anything from
      pre-launch testing.
- [ ] Google AI + Atlas consoles: usage in line with expectations; billing
      alerts armed.
- [ ] LegiScan query spend (recorded per sync run) stays a few hundred per
      month against the 30,000 limit.
- [ ] Begin the weekly operator routine in docs/Onboarding-Guide.md
      (review queue, message review, smoke test results).
