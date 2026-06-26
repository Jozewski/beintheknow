import type { TopicId } from "@/data/content-data";
import { states } from "@/data/content-data";
import { stateStatuteSources } from "@/data/legal-sources";
import type {
  SourceAccessMethod,
  SourceRole,
} from "@/data/topic-source-strategy";

type ManualTopicId = Extract<TopicId, "police" | "supervision">;

export type ManualSourceTargetKind =
  | "aclu-guidance"
  | "case-law-baseline"
  | "stop-identify-statute"
  | "recording-consent-statute"
  | "supervision-statute"
  | "doc-policy"
  | "parole-board-policy";

export type ManualSourceTarget = {
  id: string;
  topicId: ManualTopicId;
  targetKind: ManualSourceTargetKind;
  stateCode?: string;
  stateName?: string;
  sourceName: string;
  sourceUrl: string;
  sourceRole: SourceRole;
  accessMethod: SourceAccessMethod;
  citationBacked: boolean;
  promotesToLegalAuthority: boolean;
  searchTerms: string[];
  notes: string;
};

const stateSourceByCode = new Map(
  stateStatuteSources
    .filter((source) => source.stateCode)
    .map((source) => [source.stateCode, source]),
);

const federalPoliceTargets: ManualSourceTarget[] = [
  {
    id: "police-aclu-national-know-your-rights",
    topicId: "police",
    targetKind: "aclu-guidance",
    sourceName: "ACLU Know Your Rights",
    sourceUrl: "https://www.aclu.org/know-your-rights",
    sourceRole: "practical-guidance",
    accessMethod: "manual-curation",
    citationBacked: false,
    promotesToLegalAuthority: false,
    searchTerms: ["police stops", "searches", "arrests", "rights"],
    notes:
      "National practical guidance baseline. Use for plain-English police interaction guidance, not as statutory authority.",
  },
  {
    id: "police-fourth-amendment-case-law-baseline",
    topicId: "police",
    targetKind: "case-law-baseline",
    sourceName: "Police Encounter Constitutional Case Law Baseline",
    sourceUrl: "https://www.law.cornell.edu/wex/fourth_amendment",
    sourceRole: "cross-check",
    accessMethod: "manual-curation",
    citationBacked: true,
    promotesToLegalAuthority: false,
    searchTerms: [
      "Fourth Amendment",
      "stop",
      "search",
      "seizure",
      "arrest",
    ],
    notes:
      "Manual curation target for controlling constitutional rules on stops, searches, seizures, and arrests.",
  },
];

function stateStatuteTarget({
  stateCode,
  stateName,
  topicId,
  targetKind,
  sourceName,
  searchTerms,
  notes,
}: {
  stateCode: string;
  stateName: string;
  topicId: ManualTopicId;
  targetKind: ManualSourceTargetKind;
  sourceName: string;
  searchTerms: string[];
  notes: string;
}): ManualSourceTarget {
  const source = stateSourceByCode.get(stateCode);

  return {
    id: `${stateCode.toLowerCase()}-${targetKind}`,
    topicId,
    targetKind,
    stateCode,
    stateName,
    sourceName: source ? `${stateName} ${sourceName}` : `${stateName} ${sourceName}`,
    sourceUrl: source?.url ?? "state-official-statute-sources",
    sourceRole: "primary-official-law",
    accessMethod: "official-statute-adapter",
    citationBacked: true,
    promotesToLegalAuthority: true,
    searchTerms,
    notes,
  };
}

const statePoliceTargets = states.flatMap((state): ManualSourceTarget[] => [
  {
    id: `${state.code.toLowerCase()}-aclu-affiliate-police-guidance`,
    topicId: "police",
    targetKind: "aclu-guidance",
    stateCode: state.code,
    stateName: state.name,
    sourceName: `${state.name} ACLU Affiliate Police Guidance`,
    sourceUrl: "https://www.aclu.org/affiliates",
    sourceRole: "practical-guidance",
    accessMethod: "manual-curation",
    citationBacked: false,
    promotesToLegalAuthority: false,
    searchTerms: ["police stops", "know your rights", state.name],
    notes:
      "Manual target for state-affiliate practical guidance. Use only after confirming the affiliate page and current guidance.",
  },
  stateStatuteTarget({
    stateCode: state.code,
    stateName: state.name,
    topicId: "police",
    targetKind: "stop-identify-statute",
    sourceName: "Stop-and-Identify Statute Search",
    searchTerms: [
      "stop and identify",
      "identify yourself",
      "failure to identify",
      "name address date of birth",
    ],
    notes:
      "Official statute adapter target for whether a person must identify themselves during a police stop.",
  }),
  stateStatuteTarget({
    stateCode: state.code,
    stateName: state.name,
    topicId: "police",
    targetKind: "recording-consent-statute",
    sourceName: "Recording and Consent Statute Search",
    searchTerms: [
      "recording",
      "wiretapping",
      "eavesdropping",
      "one party consent",
      "all party consent",
    ],
    notes:
      "Official statute adapter target for recording consent rules that may affect recording police or conversations.",
  }),
]);

const stateSupervisionTargets = states.flatMap((state): ManualSourceTarget[] => [
  stateStatuteTarget({
    stateCode: state.code,
    stateName: state.name,
    topicId: "supervision",
    targetKind: "supervision-statute",
    sourceName: "Parole and Probation Statute Search",
    searchTerms: [
      "probation",
      "parole",
      "community supervision",
      "revocation",
      "conditions",
    ],
    notes:
      "Official statute adapter target for statutory basics: authority, conditions, revocation, hearings, and release supervision.",
  }),
  {
    id: `${state.code.toLowerCase()}-doc-policy`,
    topicId: "supervision",
    targetKind: "doc-policy",
    stateCode: state.code,
    stateName: state.name,
    sourceName: `${state.name} Department of Corrections Supervision Policy`,
    sourceUrl: "state-agency-sites",
    sourceRole: "agency-policy",
    accessMethod: "manual-curation",
    citationBacked: false,
    promotesToLegalAuthority: false,
    searchTerms: [
      "department of corrections",
      "community supervision",
      "probation conditions",
      state.name,
    ],
    notes:
      "Manual target for practical supervision conditions that may live in agency policy, administrative code, or local practice.",
  },
  {
    id: `${state.code.toLowerCase()}-parole-board-policy`,
    topicId: "supervision",
    targetKind: "parole-board-policy",
    stateCode: state.code,
    stateName: state.name,
    sourceName: `${state.name} Parole Board Policy`,
    sourceUrl: "state-agency-sites",
    sourceRole: "agency-policy",
    accessMethod: "manual-curation",
    citationBacked: false,
    promotesToLegalAuthority: false,
    searchTerms: ["parole board", "parole conditions", "revocation", state.name],
    notes:
      "Manual target for parole-board rules and conditions. Promote only reviewed, dated, source-linked excerpts.",
  },
]);

export const manualSourceTargets: ManualSourceTarget[] = [
  ...federalPoliceTargets,
  ...statePoliceTargets,
  ...stateSupervisionTargets,
];

export function getManualSourceTargets(topicId?: TopicId) {
  if (!topicId) return manualSourceTargets;

  return manualSourceTargets.filter((target) => target.topicId === topicId);
}
