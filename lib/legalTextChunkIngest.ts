import { chunkText } from "@/lib/chunkText";
import { LegalTextChunkModel } from "@/models/LegalTextChunk";
import { LegiScanBillTextModel } from "@/models/LegiScanBillText";

type LegiScanBillTextLean = {
  _id: unknown;
  docId: number;
  billId: number;
  stateCode: string;
  billNumber?: string;
  topicIds?: string[];
  type?: string;
  url?: string;
  stateLink?: string;
  textHash?: string;
  normalizedText?: string;
};

export type LegalTextChunkIngestOptions = {
  sourceType?: "legiscan-bill-text";
  offset?: number;
  limit?: number;
  force?: boolean;
  missingOnly?: boolean;
};

export type LegalTextChunkIngestResult = {
  scannedSources: number;
  skippedSources: number;
  chunkedSources: number;
  chunksWritten: number;
};

function buildCitation(source: LegiScanBillTextLean) {
  const parts = [source.stateCode, source.billNumber, source.type].filter(Boolean);

  return parts.join(" ");
}

export async function ingestLegalTextChunks({
  offset = 0,
  limit = 100,
  force = false,
  missingOnly = false,
}: LegalTextChunkIngestOptions = {}): Promise<LegalTextChunkIngestResult> {
  const query: {
    textExtractionStatus: "extracted";
    normalizedText: { $ne: string };
    docId?: { $nin: number[] };
  } = {
    textExtractionStatus: "extracted",
    normalizedText: { $ne: "" },
  };

  if (missingOnly) {
    const existingSourceIds = await LegalTextChunkModel.distinct("sourceId", {
      sourceType: "legiscan-bill-text",
    });
    const existingDocIds = existingSourceIds
      .map((sourceId) => Number(sourceId))
      .filter(Number.isFinite);

    query.docId = { $nin: existingDocIds };
  }

  const sources = await LegiScanBillTextModel.find(query)
    .select({
      docId: 1,
      billId: 1,
      stateCode: 1,
      billNumber: 1,
      topicIds: 1,
      type: 1,
      url: 1,
      stateLink: 1,
      textHash: 1,
      normalizedText: 1,
    })
    .sort({ docId: 1 })
    .skip(offset)
    .limit(limit)
    .lean<LegiScanBillTextLean[]>()
    .exec();
  let skippedSources = 0;
  let chunkedSources = 0;
  let chunksWritten = 0;

  for (const source of sources) {
    const sourceId = String(source.docId);
    const existingChunk = await LegalTextChunkModel.findOne({
      sourceType: "legiscan-bill-text",
      sourceId,
      sourceHash: source.textHash,
    })
      .select({ _id: 1 })
      .lean()
      .exec();

    if (existingChunk && !force) {
      skippedSources += 1;
      continue;
    }

    const chunks = chunkText(source.normalizedText ?? "");

    await LegalTextChunkModel.deleteMany({
      sourceType: "legiscan-bill-text",
      sourceId,
    });

    if (chunks.length > 0) {
      await LegalTextChunkModel.insertMany(
        chunks.map((chunk) => ({
          sourceType: "legiscan-bill-text",
          sourceId,
          sourceHash: source.textHash,
          chunkIndex: chunk.chunkIndex,
          jurisdiction: "state",
          stateCode: source.stateCode,
          topicIds: source.topicIds ?? [],
          citation: buildCitation(source),
          title: source.billNumber,
          sourceUrl: source.stateLink ?? source.url,
          chunkText: chunk.chunkText,
          tokenEstimate: chunk.tokenEstimate,
          reviewStatus: "draft",
        })),
      );
    }

    chunkedSources += 1;
    chunksWritten += chunks.length;
  }

  return {
    scannedSources: sources.length,
    skippedSources,
    chunkedSources,
    chunksWritten,
  };
}
