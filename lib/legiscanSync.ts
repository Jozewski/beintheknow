import { states, type TopicId } from "@/data/content-data";
import {
  getLegiScanBill,
  getLegiScanSearchPageTotal,
  getLegiScanSearchRaw,
  parseLegiScanSearchResults,
} from "@/lib/legiscanClient";
import {
  getStateTopicQueries,
  LEGISCAN_ATTRIBUTION,
  LEGISCAN_SOURCE_RULES,
  type LegiScanTopicQuery,
} from "@/lib/legiscan";
import { LegiScanBillModel } from "@/models/LegiScanBill";

export type LegiScanBillCandidate = {
  billId: number;
  changeHash: string;
  query: string;
  stateCode: string;
  topicId: TopicId;
};

export type StoredLegiScanBillHash = {
  billId: number;
  changeHash: string;
};

export type LegiScanChangedBillPlan = {
  changedBills: GroupedLegiScanBillCandidate[];
  newBills: GroupedLegiScanBillCandidate[];
  unchangedBills: GroupedLegiScanBillCandidate[];
};

export type WeeklyLegiScanSyncPlan = {
  attribution: string;
  plannedSearchQueries: LegiScanTopicQuery[];
  plannedSearchQueryCount: number;
  sourceRules: typeof LEGISCAN_SOURCE_RULES;
  updatePolicy: "replace_changed_only";
};

export type LegiScanIngestOptions = {
  stateCodes?: string[];
  topicIds?: TopicId[];
  searchOffset?: number;
  maxSearchQueries?: number;
  maxPagesPerSearch?: number;
  maxBillFetches?: number;
  year?: number;
  storeRawPayloads?: boolean;
};

export type LegiScanIngestResult = {
  plannedSearchQueryCount: number;
  searchQueries: number;
  billFetches: number;
  newBills: number;
  changedBills: number;
  unchangedBills: number;
  upsertedBills: number;
  candidateBills: number;
};

export type GroupedLegiScanBillCandidate = {
  billId: number;
  changeHash: string;
  stateCode: string;
  matches: Array<{
    topicId: TopicId;
    query: string;
  }>;
};

export function buildChangedBillPlan(
  candidates: GroupedLegiScanBillCandidate[],
  storedHashes: StoredLegiScanBillHash[],
): LegiScanChangedBillPlan {
  const storedHashByBillId = new Map(
    storedHashes.map((storedHash) => [
      storedHash.billId,
      storedHash.changeHash,
    ]),
  );

  return candidates.reduce<LegiScanChangedBillPlan>(
    (plan, candidate) => {
      const storedChangeHash = storedHashByBillId.get(candidate.billId);

      if (!storedChangeHash) {
        plan.newBills.push(candidate);
        return plan;
      }

      if (storedChangeHash !== candidate.changeHash) {
        plan.changedBills.push(candidate);
        return plan;
      }

      plan.unchangedBills.push(candidate);
      return plan;
    },
    {
      changedBills: [],
      newBills: [],
      unchangedBills: [],
    },
  );
}

export function buildWeeklyLegiScanSyncPlan(): WeeklyLegiScanSyncPlan {
  const plannedSearchQueries = states.flatMap((state) =>
    getStateTopicQueries(state.code),
  );

  return {
    attribution: LEGISCAN_ATTRIBUTION,
    plannedSearchQueries,
    plannedSearchQueryCount: plannedSearchQueries.length,
    sourceRules: LEGISCAN_SOURCE_RULES,
    updatePolicy: "replace_changed_only",
  };
}

function normalizeDate(value?: string) {
  return value ? new Date(`${value}T00:00:00.000Z`) : undefined;
}

function groupCandidates(candidates: LegiScanBillCandidate[]) {
  const groupedCandidates = new Map<number, GroupedLegiScanBillCandidate>();

  for (const candidate of candidates) {
    const existingCandidate = groupedCandidates.get(candidate.billId);

    if (existingCandidate) {
      existingCandidate.matches.push({
        topicId: candidate.topicId,
        query: candidate.query,
      });
      continue;
    }

    groupedCandidates.set(candidate.billId, {
      billId: candidate.billId,
      changeHash: candidate.changeHash,
      stateCode: candidate.stateCode,
      matches: [
        {
          topicId: candidate.topicId,
          query: candidate.query,
        },
      ],
    });
  }

  return Array.from(groupedCandidates.values());
}

function buildTopicMatches(candidate: GroupedLegiScanBillCandidate) {
  const queriesByTopicId = new Map<TopicId, Set<string>>();

  for (const match of candidate.matches) {
    const queries = queriesByTopicId.get(match.topicId) ?? new Set<string>();

    queries.add(match.query);
    queriesByTopicId.set(match.topicId, queries);
  }

  return Array.from(queriesByTopicId.entries()).map(([topicId, queries]) => ({
    topicId,
    queries: Array.from(queries),
    relevanceStatus: "pending" as const,
  }));
}

export async function ingestLegiScanBills({
  stateCodes,
  topicIds,
  searchOffset = 0,
  maxSearchQueries = 10,
  maxPagesPerSearch = 1,
  maxBillFetches = 25,
  year,
  storeRawPayloads = false,
}: LegiScanIngestOptions = {}): Promise<LegiScanIngestResult> {
  const selectedStates = stateCodes?.length
    ? states.filter((state) => stateCodes.includes(state.code))
    : states;
  const plannedSearchQueries = selectedStates
    .flatMap((state) => getStateTopicQueries(state.code, topicIds))
    .slice(searchOffset)
    .slice(0, maxSearchQueries);

  const candidates: LegiScanBillCandidate[] = [];

  for (const plannedQuery of plannedSearchQueries) {
    let page = 1;
    let pageTotal = 1;

    do {
      const payload = await getLegiScanSearchRaw({
        state: plannedQuery.stateCode,
        query: plannedQuery.query,
        year,
        page,
      });

      pageTotal = Math.min(getLegiScanSearchPageTotal(payload), maxPagesPerSearch);

      const results = parseLegiScanSearchResults(payload);

      for (const result of results) {
        if (!result.bill_id || !result.change_hash) continue;

        candidates.push({
          billId: result.bill_id,
          changeHash: result.change_hash,
          query: plannedQuery.query,
          stateCode: plannedQuery.stateCode,
          topicId: plannedQuery.topicId,
        });
      }

      page += 1;
    } while (page <= pageTotal);
  }

  const uniqueCandidates = groupCandidates(candidates);
  const storedHashes = uniqueCandidates.length
    ? await LegiScanBillModel.find({
        billId: { $in: uniqueCandidates.map((candidate) => candidate.billId) },
      })
        .select({ billId: 1, changeHash: 1 })
        .lean<StoredLegiScanBillHash[]>()
        .exec()
    : [];
  const changedPlan = buildChangedBillPlan(uniqueCandidates, storedHashes);
  const billsToFetch =
    maxBillFetches <= 0
      ? [...changedPlan.newBills, ...changedPlan.changedBills]
      : [...changedPlan.newBills, ...changedPlan.changedBills].slice(0, maxBillFetches);
  let upsertedBills = 0;

  for (const candidate of billsToFetch) {
    const payload = await getLegiScanBill(candidate.billId);
    const bill = payload.bill;

    if (!bill?.bill_id || !bill.change_hash) continue;

    const update = {
      $set: {
        billId: bill.bill_id,
        changeHash: bill.change_hash,
        stateCode: (bill.state ?? candidate.stateCode).toUpperCase(),
        sessionId: bill.session_id,
        billNumber: bill.bill_number,
        title: bill.title,
        description: bill.description,
        status: bill.status,
        statusDate: normalizeDate(bill.status_date),
        url: bill.url,
        stateLink: bill.state_link,
        lastSeenAt: new Date(),
        lastFetchedAt: new Date(),
        topicMatches: buildTopicMatches(candidate),
        ...(storeRawPayloads
          ? {
              rawBill: bill,
              texts:
                bill.texts?.map((text) => ({
                  docId: text.doc_id,
                  mime: text.mime,
                  url: text.url,
                  textHash: text.text_hash,
                })) ?? [],
            }
          : {}),
      },
      $setOnInsert: {
        firstSeenAt: new Date(),
      },
      ...(storeRawPayloads
        ? {}
        : {
            $unset: {
              rawBill: "",
              rawSearchResult: "",
              texts: "",
            },
          }),
    };

    await LegiScanBillModel.updateOne({ billId: bill.bill_id }, update, {
      upsert: true,
    });

    upsertedBills += 1;
  }

  return {
    plannedSearchQueryCount: plannedSearchQueries.length,
    searchQueries: plannedSearchQueries.length,
    billFetches: billsToFetch.length,
    newBills: changedPlan.newBills.length,
    changedBills: changedPlan.changedBills.length,
    unchangedBills: changedPlan.unchangedBills.length,
    upsertedBills,
    candidateBills: uniqueCandidates.length,
  };
}
