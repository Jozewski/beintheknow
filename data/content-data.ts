import {
  Briefcase,
  FileText,
  Home,
  Landmark,
  Shield,
  Vote,
  type LucideIcon,
} from "lucide-react";

export type Jurisdiction = "federal" | "state";

export type TopicId =
  | "voting"
  | "expungement"
  | "housing"
  | "employment"
  | "police"
  | "supervision";

export type ResourceLink = {
  label: string;
  url: string;
};

export type TopicEntry = {
  id: TopicId;
  title: string;
  badge: string;
  summary: string;
  jurisdiction: Jurisdiction;
  stateCode?: string;
  resources: ResourceLink[];
  learnMoreUrl?: string;
  icon: LucideIcon;
};

export type StateEntry = {
  code: string;
  name: string;
  enabled: boolean;
  reviewStatus: "reviewed" | "pending";
};

export const topicLabels: Record<TopicId, string> = {
  voting: "Voting",
  expungement: "Expungement",
  housing: "Housing",
  employment: "Employment",
  police: "Police",
  supervision: "Supervision",
};

const baseTopics = [
  {
    id: "voting",
    title: "Voting Rights Restoration",
    summary:
      "Learn when voting rights may be restored after a conviction, what deadlines matter, and where to confirm your registration status.",
    resources: [
      { label: "Vote.gov", url: "https://vote.gov" },
      { label: "Can I Vote", url: "https://www.nass.org/can-I-vote" },
    ],
    learnMoreUrl: "https://www.usa.gov/voter-registration",
    icon: Vote,
  },
  {
    id: "expungement",
    title: "Expungement",
    summary:
      "Understand common record clearing terms, eligibility checkpoints, and why court records may require state-specific review.",
    resources: [
      { label: "LawHelp.org", url: "https://www.lawhelp.org" },
      { label: "Clean Slate Clearinghouse", url: "https://cleanslateclearinghouse.org" },
    ],
    learnMoreUrl: "https://www.lawhelp.org",
    icon: FileText,
  },
  {
    id: "housing",
    title: "Housing Rights",
    summary:
      "Review fair housing protections, tenant screening basics, and what to do if a housing provider uses a criminal record unfairly.",
    resources: [
      { label: "HUD Fair Housing", url: "https://www.hud.gov/fairhousing" },
      { label: "LawHelp.org", url: "https://www.lawhelp.org" },
    ],
    learnMoreUrl: "https://www.hud.gov/fairhousing",
    icon: Home,
  },
  {
    id: "employment",
    title: "Employment Rights",
    summary:
      "Find plain-language information about background checks, discrimination protections, and how to respond to job screening issues.",
    resources: [
      { label: "EEOC", url: "https://www.eeoc.gov" },
      { label: "U.S. Department of Labor", url: "https://www.dol.gov" },
    ],
    learnMoreUrl: "https://www.eeoc.gov",
    icon: Briefcase,
  },
  {
    id: "police",
    title: "Police Interactions",
    summary:
      "Learn general rights during stops, searches, questioning, and arrests, including when to ask for a lawyer.",
    resources: [
      { label: "ACLU Know Your Rights", url: "https://www.aclu.org/know-your-rights" },
      { label: "LawHelp.org", url: "https://www.lawhelp.org" },
    ],
    learnMoreUrl: "https://www.aclu.org/know-your-rights",
    icon: Shield,
  },
  {
    id: "supervision",
    title: "Supervision: Parole, Probation & Community",
    summary:
      "Understand common supervision terms, reporting expectations, violation concerns, and why local rules are especially important.",
    resources: [
      { label: "LawHelp.org", url: "https://www.lawhelp.org" },
      { label: "Root & Rebound", url: "https://www.rootandrebound.org" },
    ],
    learnMoreUrl: "https://www.rootandrebound.org",
    icon: Landmark,
  },
] satisfies Omit<TopicEntry, "jurisdiction" | "badge" | "stateCode">[];

export const topicOrder = baseTopics.map((topic) => topic.id);

export const topicMetadataById = Object.fromEntries(
  baseTopics.map((topic) => [topic.id, topic]),
) as Record<TopicId, (typeof baseTopics)[number]>;

export const topics: TopicEntry[] = [
  ...baseTopics.map((topic) => ({
    ...topic,
    jurisdiction: "federal" as const,
    badge: "FEDERAL RIGHTS",
  })),
  ...baseTopics.map((topic) => ({
    ...topic,
    jurisdiction: "state" as const,
    stateCode: "AZ",
    badge: topic.id === "supervision" ? "STATE SUPERVISION LAW" : "STATE LAW",
  })),
];

export const states: StateEntry[] = [
  ["AL", "Alabama"],
  ["AK", "Alaska"],
  ["AZ", "Arizona"],
  ["AR", "Arkansas"],
  ["CA", "California"],
  ["CO", "Colorado"],
  ["CT", "Connecticut"],
  ["DE", "Delaware"],
  ["FL", "Florida"],
  ["GA", "Georgia"],
  ["HI", "Hawaii"],
  ["ID", "Idaho"],
  ["IL", "Illinois"],
  ["IN", "Indiana"],
  ["IA", "Iowa"],
  ["KS", "Kansas"],
  ["KY", "Kentucky"],
  ["LA", "Louisiana"],
  ["ME", "Maine"],
  ["MD", "Maryland"],
  ["MA", "Massachusetts"],
  ["MI", "Michigan"],
  ["MN", "Minnesota"],
  ["MS", "Mississippi"],
  ["MO", "Missouri"],
  ["MT", "Montana"],
  ["NE", "Nebraska"],
  ["NV", "Nevada"],
  ["NH", "New Hampshire"],
  ["NJ", "New Jersey"],
  ["NM", "New Mexico"],
  ["NY", "New York"],
  ["NC", "North Carolina"],
  ["ND", "North Dakota"],
  ["OH", "Ohio"],
  ["OK", "Oklahoma"],
  ["OR", "Oregon"],
  ["PA", "Pennsylvania"],
  ["RI", "Rhode Island"],
  ["SC", "South Carolina"],
  ["SD", "South Dakota"],
  ["TN", "Tennessee"],
  ["TX", "Texas"],
  ["UT", "Utah"],
  ["VT", "Vermont"],
  ["VA", "Virginia"],
  ["WA", "Washington"],
  ["WV", "West Virginia"],
  ["WI", "Wisconsin"],
  ["WY", "Wyoming"],
].map(([code, name]) => ({
  code,
  name,
  enabled: true,
  reviewStatus: "reviewed",
}));
