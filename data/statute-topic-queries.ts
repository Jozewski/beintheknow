import type { TopicId } from "@/data/content-data";

export type StatuteTopicQuery = {
  topicId: TopicId;
  label: string;
  terms: string[];
};

export const statuteTopicQueries: StatuteTopicQuery[] = [
  {
    topicId: "voting",
    label: "Voting rights after conviction",
    terms: [
      "felony conviction voting rights restoration",
      "voter eligibility criminal conviction",
      "restoration of civil rights voting",
    ],
  },
  {
    topicId: "expungement",
    label: "Record clearing and expungement",
    terms: [
      "expungement criminal record",
      "record sealing conviction",
      "set aside conviction",
      "vacate conviction",
      "annulment criminal record",
    ],
  },
  {
    topicId: "housing",
    label: "Housing access and criminal records",
    terms: [
      "tenant screening criminal record",
      "housing discrimination criminal history",
      "fair chance housing",
      "public housing criminal record",
    ],
  },
  {
    topicId: "employment",
    label: "Employment background checks",
    terms: [
      "employment criminal history",
      "background check conviction",
      "ban the box",
      "occupational licensing criminal conviction",
    ],
  },
  {
    topicId: "police",
    label: "Police encounters and accountability",
    terms: [
      "search and seizure",
      "stop and frisk",
      "use of force law enforcement",
      "custodial interrogation right to counsel",
    ],
  },
  {
    topicId: "supervision",
    label: "Probation parole and supervision",
    terms: [
      "probation conditions violation",
      "parole conditions violation",
      "community supervision",
      "revocation hearing",
    ],
  },
];

export function getStatuteTopicQueries(topicId?: TopicId) {
  if (!topicId) return statuteTopicQueries;

  return statuteTopicQueries.filter((query) => query.topicId === topicId);
}
