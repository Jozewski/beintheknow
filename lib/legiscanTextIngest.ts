import { getLegiScanBillText } from "@/lib/legiscanClient";
import { decodeBase64Text, normalizeLegalText } from "@/lib/text";
import { LegiScanBillModel } from "@/models/LegiScanBill";
import { LegiScanBillTextModel } from "@/models/LegiScanBillText";

type BillTextMetadata = {
  docId?: number;
  mime?: string;
  url?: string;
  textHash?: string;
};

type BillWithTextMetadata = {
  billId: number;
  stateCode: string;
  billNumber?: string;
  topicMatches?: Array<{
    topicId?: string;
  }>;
  texts?: BillTextMetadata[];
};

export type LegiScanBillTextIngestOptions = {
  stateCodes?: string[];
  limit?: number;
  billOffset?: number;
  includeChanged?: boolean;
  force?: boolean;
};

export type LegiScanBillTextIngestResult = {
  scannedBills: number;
  candidateTexts: number;
  fetchedTexts: number;
  skippedTexts: number;
  upsertedTexts: number;
  pendingExtractionTexts: number;
  failedTexts: number;
};

function parseDocDate(value?: string) {
  if (!value) return undefined;

  const date = new Date(`${value}T00:00:00.000Z`);

  return Number.isNaN(date.getTime()) ? undefined : date;
}

function getTopicIds(bill: BillWithTextMetadata) {
  return Array.from(
    new Set(
      bill.topicMatches
        ?.map((match) => match.topicId)
        .filter((topicId): topicId is string => Boolean(topicId)) ?? [],
    ),
  );
}

function isDirectTextMime(mime?: string) {
  return Boolean(
    mime &&
      (mime.includes("text/") ||
        mime.includes("html") ||
        mime.includes("xml") ||
        mime.includes("json")),
  );
}

const MAX_NORMALIZED_TEXT_BYTES = 12_000_000;

export async function ingestLegiScanBillTexts({
  stateCodes,
  limit = 100,
  billOffset = 0,
  includeChanged = true,
  force = false,
}: LegiScanBillTextIngestOptions = {}): Promise<LegiScanBillTextIngestResult> {
  const billFilter: Record<string, unknown> = {
    "texts.0.docId": { $exists: true },
  };

  if (stateCodes?.length) {
    billFilter.stateCode = { $in: stateCodes.map((stateCode) => stateCode.toUpperCase()) };
  }

  const bills = await LegiScanBillModel.find(billFilter)
    .select({
      billId: 1,
      stateCode: 1,
      billNumber: 1,
      topicMatches: 1,
      texts: 1,
    })
    .sort({ billId: 1 })
    .skip(billOffset)
    .limit(limit)
    .lean<BillWithTextMetadata[]>()
    .exec();
  const candidates = bills.flatMap((bill) =>
    (bill.texts ?? [])
      .filter((text): text is Required<Pick<BillTextMetadata, "docId" | "textHash">> & BillTextMetadata =>
        typeof text.docId === "number" && Boolean(text.textHash),
      )
      .map((text) => ({
        bill,
        text,
      })),
  );
  const existingTexts = candidates.length
    ? await LegiScanBillTextModel.find({
        docId: { $in: candidates.map((candidate) => candidate.text.docId) },
      })
        .select({ docId: 1, textHash: 1 })
        .lean<Array<{ docId: number; textHash?: string }>>()
        .exec()
    : [];
  const existingHashByDocId = new Map(
    existingTexts.map((text) => [text.docId, text.textHash]),
  );
  let fetchedTexts = 0;
  let skippedTexts = 0;
  let upsertedTexts = 0;
  let pendingExtractionTexts = 0;
  let failedTexts = 0;

  for (const candidate of candidates) {
    const existingHash = existingHashByDocId.get(candidate.text.docId);

    if (!force && existingHash && (!includeChanged || existingHash === candidate.text.textHash)) {
      skippedTexts += 1;
      continue;
    }

    const payload = await getLegiScanBillText(candidate.text.docId);
    const text = payload.text;

    fetchedTexts += 1;

    if (!text?.doc_id || !text.bill_id || !text.text_hash || !text.doc) {
      continue;
    }

    const canNormalizeDirectly = isDirectTextMime(text.mime);
    const decodedText = canNormalizeDirectly ? decodeBase64Text(text.doc) : "";
    let normalizedText = canNormalizeDirectly ? normalizeLegalText(decodedText) : "";
    let textExtractionStatus = canNormalizeDirectly ? "extracted" : "pending";
    let textExtractionError: string | undefined;

    if (Buffer.byteLength(normalizedText, "utf8") > MAX_NORMALIZED_TEXT_BYTES) {
      normalizedText = "";
      textExtractionStatus = "pending";
      textExtractionError =
        "Normalized text exceeds safe MongoDB document size; requires chunk-first extraction.";
    }

    if (textExtractionStatus === "pending") {
      pendingExtractionTexts += 1;
    }

    try {
      await LegiScanBillTextModel.updateOne(
        { docId: text.doc_id },
        {
          $set: {
            docId: text.doc_id,
            billId: text.bill_id,
            stateCode: candidate.bill.stateCode,
            billNumber: candidate.bill.billNumber,
            topicIds: getTopicIds(candidate.bill),
            docDate: parseDocDate(text.date),
            type: text.type,
            typeId: text.type_id,
            mime: text.mime,
            mimeId: text.mime_id,
            url: text.url,
            stateLink: text.state_link,
            textSize: text.text_size,
            textHash: text.text_hash,
            rawText: "",
            normalizedText,
            contentEncoding: canNormalizeDirectly ? "utf8" : "external",
            textExtractionStatus,
            textExtractionError,
            altText: text.alt_bill_text
              ? {
                  mime: text.alt_mime,
                  mimeId: text.alt_mime_id,
                  stateLink: text.alt_state_link,
                  textSize: text.alt_text_size,
                  textHash: text.alt_text_hash,
                }
              : undefined,
            fetchedAt: new Date(),
          },
        },
        { upsert: true },
      );
    } catch {
      failedTexts += 1;
      continue;
    }

    await LegiScanBillModel.updateOne(
      { billId: candidate.bill.billId, "texts.docId": text.doc_id },
      {
        $set: {
          "texts.$.fetchedAt": new Date(),
        },
      },
    );

    upsertedTexts += 1;
  }

  return {
    scannedBills: bills.length,
    candidateTexts: candidates.length,
    fetchedTexts,
    skippedTexts,
    upsertedTexts,
    pendingExtractionTexts,
    failedTexts,
  };
}
