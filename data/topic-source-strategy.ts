import type { TopicId } from "@/data/content-data";

export type SourceCorpusGroup =
  | "collateral-consequences"
  | "manual-guidance"
  | "supervision";

export type SourceAccessMethod =
  | "structured-scrape"
  | "official-statute-adapter"
  | "manual-curation"
  | "api-or-bulk"
  | "citation-verification";

export type SourceRole =
  | "primary-curated-index"
  | "primary-official-law"
  | "cross-check"
  | "federal-layer"
  | "practical-guidance"
  | "agency-policy";

export type TopicSource = {
  id: string;
  label: string;
  url: string;
  role: SourceRole;
  accessMethod: SourceAccessMethod;
  stateScoped: boolean;
  citationBacked: boolean;
  promotesToLegalAuthority: boolean;
  notes?: string;
};

export type TopicSourceStrategy = {
  topicId: TopicId;
  corpusGroup: SourceCorpusGroup;
  mvpPriority: "ship-first" | "ship-with-limits" | "defer-full-coverage";
  primarySources: TopicSource[];
  statuteVerificationRequired: boolean;
  requiredChunkMetadata: string[];
  answerCaveats: string[];
};

const requiredMetadata = [
  "jurisdiction",
  "stateCode",
  "topicId",
  "sourceId",
  "sourceName",
  "sourceUrl",
  "citation",
  "currentAsOf",
  "sourceFetchedAt",
  "reviewStatus",
];

export const topicSourceStrategies: TopicSourceStrategy[] = [
  {
    topicId: "voting",
    corpusGroup: "collateral-consequences",
    mvpPriority: "ship-first",
    statuteVerificationRequired: true,
    requiredChunkMetadata: requiredMetadata,
    primarySources: [
      {
        id: "rrp-voting",
        label: "Restoration of Rights Project - Voting Rights",
        url: "https://ccresourcecenter.org/restoration/",
        role: "primary-curated-index",
        accessMethod: "structured-scrape",
        stateScoped: true,
        citationBacked: true,
        promotesToLegalAuthority: false,
        notes:
          "Use per-state profiles and 50-state comparison content to capture incarceration, parole, probation, and sentence-completion distinctions.",
      },
      {
        id: "sentencing-project-voting",
        label: "The Sentencing Project - Felony Disenfranchisement",
        url: "https://www.sentencingproject.org/",
        role: "cross-check",
        accessMethod: "manual-curation",
        stateScoped: true,
        citationBacked: false,
        promotesToLegalAuthority: false,
      },
      {
        id: "campaign-legal-center-voting",
        label: "Campaign Legal Center - Restore Your Vote",
        url: "https://campaignlegal.org/restoreyourvote",
        role: "cross-check",
        accessMethod: "manual-curation",
        stateScoped: true,
        citationBacked: false,
        promotesToLegalAuthority: false,
      },
    ],
    answerCaveats: [
      "Voting answers must distinguish loss/restoration during incarceration, parole, probation, and after full sentence completion.",
      "Verify cited statutes against the state's official code before promoting content to approved answers.",
    ],
  },
  {
    topicId: "expungement",
    corpusGroup: "collateral-consequences",
    mvpPriority: "ship-first",
    statuteVerificationRequired: true,
    requiredChunkMetadata: requiredMetadata,
    primarySources: [
      {
        id: "rrp-record-clearance",
        label: "Restoration of Rights Project - Record Relief",
        url: "https://ccresourcecenter.org/restoration/",
        role: "primary-curated-index",
        accessMethod: "structured-scrape",
        stateScoped: true,
        citationBacked: true,
        promotesToLegalAuthority: false,
      },
      {
        id: "clean-slate-clearinghouse",
        label: "Clean Slate Clearinghouse",
        url: "https://nationalreentryresourcecenter.org/cleanslate",
        role: "primary-curated-index",
        accessMethod: "structured-scrape",
        stateScoped: true,
        citationBacked: true,
        promotesToLegalAuthority: false,
        notes:
          "Use for record clearance policies, automatic clean slate status, waiting periods, offense exclusions, and petition requirements.",
      },
    ],
    answerCaveats: [
      "Eligibility depends on offense type, disposition, waiting period, sentence completion, pending charges, and petition versus automatic clearance.",
      "Every chunk should include a current-as-of date because clean slate laws change frequently.",
    ],
  },
  {
    topicId: "housing",
    corpusGroup: "collateral-consequences",
    mvpPriority: "ship-with-limits",
    statuteVerificationRequired: true,
    requiredChunkMetadata: requiredMetadata,
    primarySources: [
      {
        id: "niccc-housing",
        label: "NICCC - Housing Consequences",
        url: "https://niccc.nationalreentryresourcecenter.org/",
        role: "primary-curated-index",
        accessMethod: "structured-scrape",
        stateScoped: true,
        citationBacked: true,
        promotesToLegalAuthority: false,
      },
      {
        id: "hud-fair-housing",
        label: "HUD Fair Housing",
        url: "https://www.hud.gov/fairhousing",
        role: "federal-layer",
        accessMethod: "manual-curation",
        stateScoped: false,
        citationBacked: true,
        promotesToLegalAuthority: false,
      },
    ],
    answerCaveats: [
      "Housing barriers may come from federal law, public housing rules, local ordinances, or housing-authority policy, not only state statute.",
      "State statute coverage should be presented as the state-law layer, not a complete housing-rights answer.",
    ],
  },
  {
    topicId: "employment",
    corpusGroup: "collateral-consequences",
    mvpPriority: "ship-with-limits",
    statuteVerificationRequired: true,
    requiredChunkMetadata: requiredMetadata,
    primarySources: [
      {
        id: "niccc-employment",
        label: "NICCC - Employment Consequences",
        url: "https://niccc.nationalreentryresourcecenter.org/",
        role: "primary-curated-index",
        accessMethod: "structured-scrape",
        stateScoped: true,
        citationBacked: true,
        promotesToLegalAuthority: false,
      },
      {
        id: "niccc-occupational-licensing",
        label: "NICCC - Occupational Licensing Consequences",
        url: "https://niccc.nationalreentryresourcecenter.org/",
        role: "primary-curated-index",
        accessMethod: "structured-scrape",
        stateScoped: true,
        citationBacked: true,
        promotesToLegalAuthority: false,
      },
      {
        id: "csg-fair-chance-licensing",
        label: "CSG Fair Chance Licensing Project",
        url: "https://csgjusticecenter.org/projects/fair-chance-licensing/",
        role: "cross-check",
        accessMethod: "structured-scrape",
        stateScoped: true,
        citationBacked: true,
        promotesToLegalAuthority: false,
      },
    ],
    answerCaveats: [
      "Occupational licensing is spread across many boards and agencies; state general law is only part of the picture.",
      "City and county fair-chance hiring rules may apply even when state law is limited.",
    ],
  },
  {
    topicId: "police",
    corpusGroup: "manual-guidance",
    mvpPriority: "defer-full-coverage",
    statuteVerificationRequired: true,
    requiredChunkMetadata: requiredMetadata,
    primarySources: [
      {
        id: "aclu-know-your-rights",
        label: "ACLU Know Your Rights",
        url: "https://www.aclu.org/know-your-rights",
        role: "practical-guidance",
        accessMethod: "manual-curation",
        stateScoped: false,
        citationBacked: false,
        promotesToLegalAuthority: false,
      },
      {
        id: "state-stop-identify-laws",
        label: "State Stop-and-Identify Statutes",
        url: "state-official-statute-sources",
        role: "primary-official-law",
        accessMethod: "official-statute-adapter",
        stateScoped: true,
        citationBacked: true,
        promotesToLegalAuthority: true,
      },
      {
        id: "state-recording-police-laws",
        label: "State Recording and Consent Statutes",
        url: "state-official-statute-sources",
        role: "primary-official-law",
        accessMethod: "official-statute-adapter",
        stateScoped: true,
        citationBacked: true,
        promotesToLegalAuthority: true,
      },
    ],
    answerCaveats: [
      "Most police interaction rules come from constitutional case law and local practice, not clean state-by-state statutory text.",
      "State-specific police answers should be scoped to statutory hooks such as stop-and-identify and recording consent unless manually reviewed.",
    ],
  },
  {
    topicId: "supervision",
    corpusGroup: "supervision",
    mvpPriority: "defer-full-coverage",
    statuteVerificationRequired: true,
    requiredChunkMetadata: requiredMetadata,
    primarySources: [
      {
        id: "state-supervision-statutes",
        label: "State Parole and Probation Statutes",
        url: "state-official-statute-sources",
        role: "primary-official-law",
        accessMethod: "official-statute-adapter",
        stateScoped: true,
        citationBacked: true,
        promotesToLegalAuthority: true,
        notes:
          "Covers statutory basics for parole, probation, revocation, hearings, and supervision authority.",
      },
      {
        id: "state-doc-parole-board-policy",
        label: "State DOC and Parole Board Policy",
        url: "state-agency-sites",
        role: "agency-policy",
        accessMethod: "manual-curation",
        stateScoped: true,
        citationBacked: false,
        promotesToLegalAuthority: false,
        notes:
          "Practical supervision conditions often live in agency policy, administrative code, or county-level practice.",
      },
      {
        id: "rrp-supervision-rights-restoration",
        label: "Restoration of Rights Project - Supervision Impacts",
        url: "https://ccresourcecenter.org/restoration/",
        role: "cross-check",
        accessMethod: "structured-scrape",
        stateScoped: true,
        citationBacked: true,
        promotesToLegalAuthority: false,
      },
    ],
    answerCaveats: [
      "Supervision answers should be scoped narrowly for MVP: statutory basics plus a pointer to the supervising agency.",
      "Conditions and violation responses may be discretionary, agency-specific, or local.",
    ],
  },
];

export function getTopicSourceStrategy(topicId: TopicId) {
  return topicSourceStrategies.find((strategy) => strategy.topicId === topicId);
}
