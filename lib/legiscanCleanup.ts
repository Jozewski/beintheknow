import mongoose, { type QueryFilter } from "mongoose";

import {
  LegalAuthorityCandidateModel,
  type LegalAuthorityCandidate,
} from "@/models/LegalAuthorityCandidate";
import { LegalAuthorityModel } from "@/models/LegalAuthority";
import { LegalContentModel } from "@/models/LegalContent";
import { LegalTextChunkModel } from "@/models/LegalTextChunk";
import { LegiScanBillModel } from "@/models/LegiScanBill";
import { LegiScanBillTextModel } from "@/models/LegiScanBillText";
import { LegiScanSyncRunModel } from "@/models/LegiScanSyncRun";

const LEGISCAN_CANDIDATE_FILTER: QueryFilter<LegalAuthorityCandidate> = {
  $or: [
    { candidateType: "statute-citation" },
    { "snippets.sourceType": "legiscan-bill-text" },
  ],
};

const RETAINED_CANDIDATE_FILTER: QueryFilter<LegalAuthorityCandidate> = {
  $nor: [
    { candidateType: "statute-citation" },
    { "snippets.sourceType": "legiscan-bill-text" },
  ],
};

type CollectionStorageStats = {
  count?: number;
  size?: number;
  storageSize?: number;
  totalIndexSize?: number;
} | null;

async function getCollectionStorageStats(
  collectionName: string,
): Promise<CollectionStorageStats> {
  try {
    const stats = await mongoose.connection.db?.command({
      collStats: collectionName,
    });

    return stats
      ? {
          count: stats.count,
          size: stats.size,
          storageSize: stats.storageSize,
          totalIndexSize: stats.totalIndexSize,
        }
      : null;
  } catch {
    return null;
  }
}

export async function getLegiScanCleanupStats() {
  const [
    billMetadata,
    billTexts,
    legiScanChunks,
    legalAuthorityChunks,
    legalContentChunks,
    legalAuthorities,
    legalContent,
    legiScanCandidates,
    retainedCandidates,
    syncRuns,
    collectionStats,
  ] = await Promise.all([
    LegiScanBillModel.countDocuments(),
    LegiScanBillTextModel.countDocuments(),
    LegalTextChunkModel.countDocuments({ sourceType: "legiscan-bill-text" }),
    LegalTextChunkModel.countDocuments({ sourceType: "legal-authority" }),
    LegalTextChunkModel.countDocuments({ sourceType: "legal-content" }),
    LegalAuthorityModel.countDocuments(),
    LegalContentModel.countDocuments(),
    LegalAuthorityCandidateModel.countDocuments(LEGISCAN_CANDIDATE_FILTER),
    LegalAuthorityCandidateModel.countDocuments(RETAINED_CANDIDATE_FILTER),
    LegiScanSyncRunModel.countDocuments(),
    Promise.all([
      getCollectionStorageStats(LegiScanBillModel.collection.name),
      getCollectionStorageStats(LegiScanBillTextModel.collection.name),
      getCollectionStorageStats(LegalTextChunkModel.collection.name),
      getCollectionStorageStats(LegalAuthorityCandidateModel.collection.name),
    ]),
  ]);

  return {
    removable: {
      legiScanBillTexts: billTexts,
      legiScanTextChunks: legiScanChunks,
      legiScanCitationCandidates: legiScanCandidates,
    },
    retained: {
      legiScanBillMetadata: billMetadata,
      legalAuthorityChunks,
      legalContentChunks,
      legalAuthorities,
      legalContent,
      legalAuthorityCandidates: retainedCandidates,
      legiScanSyncRuns: syncRuns,
    },
    storage: {
      [LegiScanBillModel.collection.name]: collectionStats[0],
      [LegiScanBillTextModel.collection.name]: collectionStats[1],
      [LegalTextChunkModel.collection.name]: collectionStats[2],
      [LegalAuthorityCandidateModel.collection.name]: collectionStats[3],
    },
  };
}

export async function cleanupLegiScanBulkData({
  includeSyncRuns = false,
  dropBillTextCollection = true,
  rebuildChunkIndexes = false,
}: {
  includeSyncRuns?: boolean;
  dropBillTextCollection?: boolean;
  rebuildChunkIndexes?: boolean;
} = {}) {
  const [
    deletedTextChunks,
    deletedBillTexts,
    deletedCandidates,
    slimmedBills,
    deletedSyncRuns,
  ] = await Promise.all([
    LegalTextChunkModel.deleteMany({ sourceType: "legiscan-bill-text" }),
    LegiScanBillTextModel.deleteMany({}),
    LegalAuthorityCandidateModel.deleteMany(LEGISCAN_CANDIDATE_FILTER),
    LegiScanBillModel.updateMany(
      {},
      {
        $unset: {
          rawBill: "",
          rawSearchResult: "",
          texts: "",
        },
      },
    ),
    includeSyncRuns
      ? LegiScanSyncRunModel.deleteMany({})
      : Promise.resolve({ deletedCount: 0 }),
  ]);
  let droppedBillTextCollection = false;

  if (dropBillTextCollection) {
    const remainingBillTexts = await LegiScanBillTextModel.countDocuments();

    if (remainingBillTexts === 0) {
      try {
        await LegiScanBillTextModel.collection.drop();
        droppedBillTextCollection = true;
      } catch (error) {
        const message = error instanceof Error ? error.message : "";

        if (!message.includes("ns not found")) {
          throw error;
        }
      }
    }
  }

  const rebuiltIndexes = rebuildChunkIndexes
    ? await rebuildLegalTextChunkIndexes()
    : { dropped: [], created: [] };

  return {
    deleted: {
      legiScanTextChunks: deletedTextChunks.deletedCount,
      legiScanBillTexts: deletedBillTexts.deletedCount,
      legiScanCitationCandidates: deletedCandidates.deletedCount,
      legiScanSyncRuns: deletedSyncRuns.deletedCount,
    },
    slimmed: {
      legiScanBillMetadata: slimmedBills.modifiedCount,
    },
    droppedCollections: {
      legiScanBillTexts: droppedBillTextCollection,
    },
    rebuiltIndexes: {
      legalTextChunks: rebuiltIndexes,
    },
  };
}

async function rebuildLegalTextChunkIndexes() {
  const existingIndexes = await LegalTextChunkModel.collection.indexes();
  const secondaryIndexNames = existingIndexes
    .map((index) => index.name)
    .filter((name): name is string => Boolean(name && name !== "_id_"));

  if (secondaryIndexNames.length > 0) {
    await LegalTextChunkModel.collection.dropIndexes();
  }

  const createdIndexes = await LegalTextChunkModel.createIndexes();

  return {
    dropped: secondaryIndexNames,
    created: createdIndexes,
  };
}
