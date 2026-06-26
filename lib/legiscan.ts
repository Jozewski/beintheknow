import type { TopicId } from "@/data/content-data";

export type StateCode = string;

export const LEGISCAN_ATTRIBUTION =
  "Legislative data provided by LegiScan under Creative Commons Attribution 4.0.";

export const LEGISCAN_PUBLIC_MONTHLY_QUERY_LIMIT = 30_000;

export const LEGISCAN_SOURCE_RULES = {
  attributionRequired: true,
  cacheResponses: true,
  compareChangeHashes: true,
  compareDatasetHashes: true,
  prohibitFrontendScraping: true,
  prohibitMultiplePublicKeys: true,
} as const;

export type LegiScanTopicQuery = {
  topicId: TopicId;
  stateCode: StateCode;
  query: string;
};

export const TOPIC_QUERIES: Record<TopicId, string[]> = {
  voting: ["voting AND felony AND restoration"],
  expungement: ["expungement OR expunction"],
  housing: ["fair ADJ chance AND housing"],
  employment: ["ban ADJ box"],
  police: ["police ADJ accountability"],
  supervision: [
    "parole AND conditions AND violation",
    "probation AND conditions AND violation",
  ],
};

export const STATE_TOPIC_OVERRIDES: Record<
  StateCode,
  Partial<Record<TopicId, string[]>>
> = {
  AZ: {
    expungement: ["set ADJ aside AND conviction"],
    supervision: ["community ADJ supervision AND conditions"],
  },
  NH: {
    expungement: ["annulment AND criminal AND record"],
  },
  CT: {
    expungement: ["erasure AND criminal AND record"],
  },
  WA: {
    expungement: ["vacate AND conviction"],
  },
  TX: {
    expungement: [
      "expunction AND criminal",
      "nondisclosure AND deferred ADJ adjudication",
    ],
    housing: [
      "fair ADJ chance AND housing",
      "criminal ADJ record AND housing AND tenant",
    ],
    supervision: ["community ADJ supervision AND conditions"],
  },
  MA: {
    expungement: ["sealing AND criminal AND record"],
  },
  IL: {
    supervision: [
      "parole AND conditions",
      "supervised ADJ release AND conditions",
    ],
  },
  DE: {
    supervision: ["probation AND conditions AND violation"],
  },
  FL: {
    housing: [
      "fair ADJ chance AND housing",
      "criminal ADJ record AND housing AND tenant",
    ],
  },
  AL: {
    housing: [
      "fair ADJ chance AND housing",
      "criminal ADJ record AND housing AND tenant",
    ],
  },
  MS: {
    housing: [
      "fair ADJ chance AND housing",
      "criminal ADJ record AND housing AND tenant",
    ],
  },
  SC: {
    housing: [
      "fair ADJ chance AND housing",
      "criminal ADJ record AND housing AND tenant",
    ],
  },
};

export const TOPIC_RELEVANCE_PROMPTS: Record<TopicId, string> = {
  voting:
    "Is this bill about restoring or restricting voting rights for people with felony convictions? YES or NO only.",
  expungement:
    "Is this bill about expungement, record sealing, set-aside, vacating, or clearing a criminal record for individuals? YES or NO only.",
  housing:
    "Is this bill about housing protections or restrictions for people with criminal records, including rental applications or tenant screening? YES or NO only.",
  employment:
    "Is this bill about restricting how employers use criminal records in hiring decisions? YES or NO only.",
  police:
    "Is this bill about police conduct, use of force, officer accountability, or rights of individuals during police encounters? YES or NO only.",
  supervision:
    "Is this bill about parole, probation, community supervision, or supervised release conditions, violations, or rights of people under supervision? YES or NO only.",
};

export function getTopicQueries(
  topicId: TopicId,
  stateCode: StateCode,
): string[] {
  const normalizedStateCode = stateCode.toUpperCase();
  const override = STATE_TOPIC_OVERRIDES[normalizedStateCode]?.[topicId];

  return override ?? TOPIC_QUERIES[topicId] ?? [];
}

export function getStateTopicQueries(
  stateCode: StateCode,
  topicIds: TopicId[] = Object.keys(TOPIC_QUERIES) as TopicId[],
): LegiScanTopicQuery[] {
  const normalizedStateCode = stateCode.toUpperCase();

  return topicIds.flatMap((topicId) =>
    getTopicQueries(topicId, normalizedStateCode).map((query) => ({
      topicId,
      stateCode: normalizedStateCode,
      query,
    })),
  );
}

export function getTopicRelevancePrompt(topicId: TopicId): string {
  return TOPIC_RELEVANCE_PROMPTS[topicId];
}
