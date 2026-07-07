<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project guide — read before any work

Before writing or changing ANY code in this repository, read
`.claude/skills/beintheknow-dev/SKILL.md`. It contains this project's
non-negotiable principles (source discipline, human review gates, truthful
UI), the architecture map, embedding rules that silently break retrieval if
violated, the streaming protocol, commands, and known gotchas. For
deployment, admin operations, or production debugging, also read
`.claude/skills/beintheknow-dev/references/operations.md`.

Validate before proposing a commit: `npm run lint && npx tsc --noEmit && npm test`.
