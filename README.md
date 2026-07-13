<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![AGPL-3.0 License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Jozewski/beintheknow">
    <img src="public/jo-logo.svg" alt="JO shield logo" width="96" height="96">
  </a>

  <h3 align="center">Be In The Know &middot; Just Ask JO</h3>

  <p align="center">
    Plain-English legal rights education for people navigating reentry - grounded in cited, human-reviewed sources.
    <br />
    <strong>Built by Jozewski Enterprises</strong>
    <br />
    <br />
    <a href="https://github.com/Jozewski/beintheknow/issues/new?labels=bug">Report Bug</a>
    &middot;
    <a href="https://github.com/Jozewski/beintheknow/issues/new?labels=enhancement">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#how-jo-answers">How JO Answers</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#content-operations">Content Operations</a></li>
    <li><a href="#privacy-and-safety">Privacy and Safety</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Be In The Know is a legal rights education platform for people navigating reentry. Its assistant, JO, translates approved legal source material into plain-English guidance across six topics - voting rights, expungement and record clearing, housing, employment, police interactions, and probation/parole/supervision - for all fifty states plus federal law.

The project is built on a simple principle: people should not have to read legal code alone to understand the rights and barriers that affect their future. JO gives them an approachable starting point while keeping citations, source boundaries, and legal disclaimers visible.

What makes it different:

* **Source discipline.** JO answers only from human-approved legal source chunks, cites every answer, and declines when no approved source exists. It never answers from model memory.
* **Human review gate.** New content enters as a draft and is invisible to JO until a person reviews and approves it. Automation detects, fetches, and embeds - it never approves.
* **State-aware.** Topic cards and retrieval respond to the user's selected state, and every source carries a current-as-of date shown with its citation.
* **Plain language.** Answers target a sixth-grade reading level, short sentences, no jargon.
* **Education, not advice.** Disclaimers throughout; individual situations are routed to legal aid.

JO is an educational tool only. It does not provide legal advice, does not predict outcomes, and does not create an attorney-client relationship.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### How JO Answers

JO uses a retrieval-first workflow - the model never decides on its own what the law is:

1. The user asks a question with a jurisdiction and optional state.
2. The question is embedded (Gemini, 768 dimensions) and MongoDB Atlas Vector Search retrieves approved chunks: official statutes (`legal-authority`) and curated plain-English summaries (`legal-content`). Definitional questions weight summaries; specific questions weight statutes.
3. The prompt is built from the retrieved sources plus layered security and plain-language rules; user input is delimited as data, never instructions.
4. Gemini streams a cited answer. An output guard replaces any substantive answer that cites none of its sources with a source-grounded fallback, and if generation fails entirely JO falls back to quoting the sources directly.
5. If no approved source exists, JO says so and points to legal aid - no guessing.

A separate monitoring layer (LegiScan) watches legislative activity and flags laws that may need review. Bill text is never used as an answer source.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![TailwindCSS][TailwindCSS]][Tailwind-url]
* [![MongoDB][MongoDB]][MongoDB-url]
* [![Google Gemini][Gemini]][Gemini-url]
* [![Vercel][Vercel]][Vercel-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

* Node.js 22+ and npm
* A MongoDB Atlas cluster (vector search requires Atlas)
* A Google AI Studio API key (Gemini)
* A LegiScan API key (only needed for the legislative monitoring pipeline)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Jozewski/beintheknow.git
   cd beintheknow
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Create `.env.local` in the project root
   ```sh
   MONGODB_URI=            # Atlas connection string
   JWT_SECRET=             # long random string; signs auth cookies and peppers IP hashes
   GEMINI_API_KEY=
   LEGISCAN_API_KEY=
   CRON_SECRET=            # required in production; protects /api/cron/* and /api/admin/*
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   GUEST_DAILY_LIMIT=5
   GUEST_RETENTION_DAYS=90
   GEMINI_EMBEDDING_MODEL=gemini-embedding-001
   GEMINI_EMBEDDING_DIMENSIONS=768
   VECTOR_SEARCH_INDEX=legal_text_chunk_embedding_gemini_768
   ADMIN_EMAILS=you@example.com
   ```
4. Create the Atlas Vector Search index on the `legaltextchunks` collection
   * name: `legal_text_chunk_embedding_gemini_768`
   * vector path: `embedding`, dimensions: `768`, similarity: `cosine`
   * filter fields: `jurisdiction`, `stateCode`, `topicIds`, `reviewStatus`, `sourceType`, `embeddingModel`
5. Run the dev server
   ```sh
   npm run dev
   ```

Optional: `MONGODB_DIRECT_URI` (when `mongodb+srv` DNS is unreliable), `NEXT_PUBLIC_SENTRY_DSN` and `SENTRY_AUTH_TOKEN` (error tracking), `REGISTERED_DAILY_LIMIT` (default 25), `RETRIEVAL_MIN_SCORE` (default 0.62).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE -->
## Usage

Open `http://localhost:3000`, pick federal or a state, and ask JO a question - or call the API directly:

```sh
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"What is expungement?","jurisdiction":"state","stateCode":"AZ","stream":false}'
```

Useful commands:

```sh
npm run dev                 # dev server
npm run lint                # eslint
npx tsc --noEmit            # typecheck
npm test                    # unit tests (vitest)
npm run build               # production build
npm run seed:sample         # seed sample development records
npm run chat:smoke -- --state=AZ        # end-to-end chat smoke test
npm run chat:redteam        # prompt-injection guardrail battery
npm run chunks:approve -- --sourceType=legal-content          # dry run
npm run chunks:approve -- --sourceType=legal-content --apply  # promote to approved
npm run embeddings:stats -- --sourceType=legal-authority --reviewStatus=approved
npm run embeddings:batch -- --limit=50
```

`GET /api/health` reports database, corpus, and configuration readiness for deploy checks.

_For the full admin handbook and review workflow, see [docs/Onboarding-Guide.md](docs/Onboarding-Guide.md) and [docs/Content-Review-Checklist.md](docs/Content-Review-Checklist.md)._

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTENT OPERATIONS -->
## Content Operations

A single Vercel cron entry runs `/api/cron/pipeline` daily at 9:00 UTC:

* **Mondays (weekly change detection):** LegiScan sync → bill text fetch → PDF extraction → statute-citation extraction → a report of which of our laws may be affected (the candidate queue).
* **Every day:** re-chunk authority records edited after review, embed anything newly approved, and purge guest conversations past the retention window.

The human stays in the loop by design. When the pipeline flags a law, a person reviews it at `/admin`, updates the `LegalAuthority` record if the law changed, and approves with `npm run chunks:approve`. Automation never rewrites the source of truth, and unreviewed text can never enter JO's answers.

The `/admin` dashboard (access via `ADMIN_EMAILS`) shows per-state corpus coverage, the law-change review queue, and the message review queue (flagged prompt-injection attempts and user feedback on answers).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- PRIVACY AND SAFETY -->
## Privacy and Safety

Built for a vulnerable population, so data collection is minimal by design:

* No raw IP addresses stored - only salted SHA-256 hashes for quota enforcement. No tracking cookies or analytics.
* The stored copy of every user message is PII-redacted (SSNs, phone numbers, emails, street addresses) before it touches the database.
* Guest conversations auto-purge after `GUEST_RETENTION_DAYS` (default 90) of inactivity. Account holders get self-service deletion of their account and all conversations.
* Server-enforced daily question quotas (guests 5, accounts 25) are checked before any model spend.
* Layered prompt security, suspicious-message flagging with admin review, an uncited-answer output guard, and a repeatable red-team battery protect against prompt injection.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- TESTING -->
## Testing

CI (GitHub Actions) runs lint → typecheck → unit tests → build on every push. A second workflow smoke-tests chat across six states against the deployed app every Tuesday. Run everything locally with:

```sh
npm run lint && npx tsc --noEmit && npm test && npm run build
```

After any prompt or model change, re-run `npm run chat:redteam` and confirm every guardrail holds.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Retrieval-first chat with citations and output guards
- [x] Weekly LegiScan monitoring with human review queue
- [x] Admin dashboard: coverage, law-change queue, message review
- [x] PII redaction, guest retention auto-purge, feedback on answers
- [ ] Periodic per-state answer audits
- [ ] User acceptance testing with reentry users
- [ ] Second reviewer for high-impact states
- [ ] Expanded red-team attack patterns

See the [open issues](https://github.com/Jozewski/beintheknow/issues) for a full list of proposed features and known issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are welcome, with one non-negotiable rule: nothing may weaken JO's source discipline or the human review gate. Read [docs/Content-Review-Checklist.md](docs/Content-Review-Checklist.md) before touching content, and run the full validation suite before opening a pull request. By contributing, you agree that your contributions are licensed under the AGPL-3.0 like the rest of the project.

1. Fork the project
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a pull request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the GNU Affero General Public License v3.0. See `LICENSE.txt` for the full text.

In short: you are free to use, study, modify, and share this code - but if you run a modified version as a network service, you must make your modified source code available to its users under the same license. Copyright (C) 2026 Joanne Liszewski / Jozewski Enterprises. The Be In The Know and Just Ask JO names and logo are not licensed for use in derived projects.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Joanne Liszewski - beintheknowjustaskjo@gmail.com

Project link: [https://github.com/Jozewski/beintheknow](https://github.com/Jozewski/beintheknow)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [LegiScan](https://legiscan.com) - legislative monitoring API
* [LawHelp.org](https://www.lawhelp.org) and state legal aid organizations
* [Img Shields](https://shields.io)

**Legal disclaimer:** Be In The Know and Just Ask JO provide general educational information. They are not a law firm, do not provide legal advice, and do not create an attorney-client relationship. For help with your own situation, contact a qualified legal aid organization or an attorney licensed in your jurisdiction.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/Jozewski/beintheknow.svg?style=for-the-badge
[contributors-url]: https://github.com/Jozewski/beintheknow/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Jozewski/beintheknow.svg?style=for-the-badge
[forks-url]: https://github.com/Jozewski/beintheknow/network/members
[stars-shield]: https://img.shields.io/github/stars/Jozewski/beintheknow.svg?style=for-the-badge
[stars-url]: https://github.com/Jozewski/beintheknow/stargazers
[issues-shield]: https://img.shields.io/github/issues/Jozewski/beintheknow.svg?style=for-the-badge
[issues-url]: https://github.com/Jozewski/beintheknow/issues
[license-shield]: https://img.shields.io/badge/License-AGPL--3.0-blue.svg?style=for-the-badge
[license-url]: https://github.com/Jozewski/beintheknow/blob/main/LICENSE.txt
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/atlas
[Gemini]: https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white
[Gemini-url]: https://ai.google.dev/
[Vercel]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: https://vercel.com/
