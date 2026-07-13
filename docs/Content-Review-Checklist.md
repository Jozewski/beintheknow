# Content Review Checklist

Use this checklist every time content moves from `draft`/`legal-review` to
`approved` (`npm run chunks:approve`), and when handling items in the
law-change review queue at `/admin`. The human review gate is the project's
core safety control: JO cites whatever is approved as legal authority, so
approval is a statement that a person verified the text.

## Before approving any chunk

1. **Source verification.** Open the `sourceUrl` and confirm it is an
   official source (state legislature, secretary of state, court system, or
   an established legal aid organization). No blogs, news articles, or
   AI-generated summaries.
2. **Text accuracy.** Compare the chunk text against the source. The chunk
   must faithfully represent the source - no paraphrase that changes
   meaning, no truncation that drops a condition or exception.
3. **Citation correctness.** The `citation` field matches the statute or
   rule the text actually comes from (correct title, section, subsection).
4. **Jurisdiction match.** `stateCode` and `jurisdiction` are correct.
   Text about one state's law must never be filed under another state.
5. **Topic fit.** `topicIds` reflect what the text is about. Wrong topics
   skew retrieval toward irrelevant answers.
6. **Currency.** Set or confirm `currentAsOf`/`currentAsOfLabel`. If the
   law was recently amended, verify the text reflects the current version,
   not a superseded one.
7. **Completeness of conditions.** If the text states an eligibility rule,
   confirm the chunk includes the conditions and exceptions, not just the
   headline rule. A rule stripped of its exceptions is incomplete information
   and will not be helpful to the user.
8. **Reading-level risk.** Flag text so dense that JO is likely to
   oversimplify it; consider adding a curated summary (LegalContent) next
   to the authority text.

## For law-change queue items (weekly)

1. Read the flagged bill's status: is it enacted, or still pending?
   Pending bills change nothing yet - note and keep monitoring.
2. If enacted: locate the affected LegalAuthority record(s), compare the
   new statute text with ours, and edit the record if the law changed.
3. Update `currentAsOf` even when the text did not change - that verifies
   freshness.
4. Run `npm run chunks:approve` (dry-run first, then `--apply`) and mark
   the queue item Handled. The daily pipeline re-chunks and re-embeds.

## High-impact states

For states with large reentry populations or recent legal changes (at
minimum: TX, CA, FL, NY, IL, AZ), a second reviewer should confirm steps
1-6 before approval. Record who reviewed in the approval commit message or
the record's notes field.

## After any approval batch

- Spot-check retrieval: `npm run chat:smoke -- --state=XX` for the state
  you touched.
- If the prompt or model changed since the last check, also run
  `npm run chat:redteam`.
