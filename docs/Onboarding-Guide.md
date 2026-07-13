# Onboarding Guide - Backup Maintainer / Reviewer

This guide exists to reduce key-person risk: if the primary maintainer is
unavailable, someone with basic web-development experience should be able to
keep Be In The Know safe and current using this document alone.

## What this project is

A legal rights education platform for people navigating reentry. The
assistant, JO, answers questions about voting, expungement, housing,
employment, police interactions, and supervision - for all fifty states plus
federal - ONLY from human-approved legal source chunks, with citations.

Read these, in order:

1. `README.md` - architecture, deployment, environment variables
2. `docs/Gap-Analysis-and-Remediation-Plan.md` - why everything was built
3. `docs/Content-Review-Checklist.md` - how to review and approve content
4. `docs/Risk-Mitigation-Audit-2026-07-12.md` - the risk register's state
5. `AGENTS.md` / `CLAUDE.md` - rules for AI-assisted development

## The five rules you must never break

1. JO answers only from retrieved, approved chunks. Nothing enters the
   answer corpus without a human approving it (`npm run chunks:approve`).
2. LegiScan is monitoring only - bill text is never an answer source.
3. This is education, not legal advice. Disclaimers stay; no eligibility or
   deadline promises beyond what a source states.
4. Never ship UI copy promising features that are not enforced server-side.
5. Minimal data: no raw IPs, no tracking, deletion stays self-service.

## Weekly duties (about 30 minutes)

1. **Check the admin dashboard** (`/admin`, requires your email in
   `ADMIN_EMAILS`): work the law-change review queue per the checklist, and
   review the Message review section (flagged messages = likely
   prompt-injection attempts; negative feedback = answers users said were
   wrong or unhelpful).
2. **Check the weekly smoke test** (GitHub Actions "Weekly smoke test",
   Tuesdays): six states are tested against production. Investigate any
   failure before touching anything else.
3. **Glance at Sentry** for new errors, and the Vercel/Atlas/Google AI
   consoles for quota or billing anomalies.

## When a law changes

Pipeline flags it Monday -> appears in `/admin` queue -> you verify against
the official source -> edit the LegalAuthority record if needed -> dry-run
then `--apply` `npm run chunks:approve` -> mark Handled. The daily pipeline
re-chunks and re-embeds automatically.

## Making code changes

```bash
npm run dev          # local server (needs .env.local - see README)
npm run lint         # must pass
npx tsc --noEmit     # must pass
npm test             # must pass
npm run build        # must pass
```

CI runs all four; nothing merges red. After ANY change to the prompt
(`lib/chatPrompt.ts`) or the model, run `npm run chat:redteam` against a
deployed preview and confirm every guardrail holds.

## Access you need

- GitHub repository (code + Actions)
- Vercel project (deployment, env vars, cron)
- MongoDB Atlas (database; use the least-privilege app user, not the owner)
- Google AI Studio (Gemini API key + billing)
- LegiScan account (API key)
- Sentry (error tracking)
- Your email added to `ADMIN_EMAILS` in Vercel env vars

## Emergency: something is answering wrongly

1. Reproduce with `npm run chat:smoke -- --state=XX --baseUrl=<prod>`.
2. If a source is wrong, demote it: `npm run chunks:approve` with
   `--toStatus=legal-review` on that source, which removes it from
   retrieval immediately.
3. If the model is misbehaving despite good sources, check the output
   guard and prompt in `app/api/chat/route.ts` / `lib/chatPrompt.ts`, and
   run the red-team battery.
4. Worst case: JO fails safe - if retrieval returns nothing, users get an
   honest "I do not have enough trusted source text" response, so removing
   bad sources is always safe.
