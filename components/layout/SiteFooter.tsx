import { JoLogo } from "@/components/layout/JoLogo";

const topicLinks = [
  "Voting Rights Restoration",
  "Expungement",
  "Housing Rights",
  "Employment Rights",
  "Police Interactions",
  "Supervision",
];

const resourceLinks = [
  ["LawHelp.org", "https://www.lawhelp.org"],
  ["U.S. Dept. of Justice", "https://www.justice.gov"],
  ["EEOC", "https://www.eeoc.gov"],
  ["HUD - Housing", "https://www.hud.gov/fairhousing"],
  ["ACLU", "https://www.aclu.org/know-your-rights"],
  ["Root & Rebound", "https://www.rootandrebound.org"],
];

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 px-6 py-8 text-gray-300 sm:py-9">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <JoLogo />
            <div>
              <p className="text-sm font-semibold text-white">Be In The Know</p>
              <p className="text-xs font-semibold text-[#1D9E75]">Just Ask JO</p>
            </div>
          </div>
          <p className="max-w-sm text-xs leading-5 text-gray-400">
            Plain-language rights education for people rebuilding their lives and looking for trustworthy next steps.
          </p>
          <p className="mt-4 text-xs text-gray-500">Built by Joanne Liszewski</p>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-white">Topics</h3>
          <ul className="space-y-2 text-xs">
            {topicLinks.map((topic) => (
              <li key={topic}>
                <a href="#topics" className="text-gray-400 hover:text-white">
                  {topic}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-white">Resources</h3>
          <ul className="space-y-2 text-xs">
            {resourceLinks.map(([label, url]) => (
              <li key={label}>
                <a href={url} className="text-gray-400 hover:text-white" target="_blank" rel="noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-4 text-[11px] text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Be In The Know · Just Ask JO · Joanne Liszewski</p>
        <p>Not legal advice · Educational purposes only</p>
      </div>
    </footer>
  );
}
