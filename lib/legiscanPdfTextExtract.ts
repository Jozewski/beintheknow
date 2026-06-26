import { getLegiScanBillText } from "@/lib/legiscanClient";
import { extractPdfTextFromBase64 } from "@/lib/pdfText";
import { LegiScanBillTextModel } from "@/models/LegiScanBillText";

const MAX_NORMALIZED_TEXT_BYTES = 12_000_000;

type PendingPdfText = {
  docId: number;
  textHash?: string;
  mime?: string;
};

export type LegiScanPdfTextExtractOptions = {
  limit?: number;
  force?: boolean;
};

export type LegiScanPdfTextExtractResult = {
  scannedTexts: number;
  fetchedTexts: number;
  extractedTexts: number;
  failedTexts: number;
  skippedTexts: number;
};

export async function extractPendingLegiScanPdfTexts({
  limit = 25,
  force = false,
}: LegiScanPdfTextExtractOptions = {}): Promise<LegiScanPdfTextExtractResult> {
  const filter: { mime: RegExp; textExtractionStatus?: "pending" } = force
    ? { mime: /pdf/i }
    : { mime: /pdf/i, textExtractionStatus: "pending" };
  const pendingTexts = await LegiScanBillTextModel.find(filter)
    .select({ docId: 1, textHash: 1, mime: 1 })
    .sort({ docId: 1 })
    .limit(limit)
    .lean<PendingPdfText[]>()
    .exec();
  let fetchedTexts = 0;
  let extractedTexts = 0;
  let failedTexts = 0;
  let skippedTexts = 0;

  for (const pendingText of pendingTexts) {
    try {
      const payload = await getLegiScanBillText(pendingText.docId);
      const text = payload.text;

      fetchedTexts += 1;

      if (!text?.doc_id || !text.doc || !text.text_hash) {
        failedTexts += 1;
        await LegiScanBillTextModel.updateOne(
          { docId: pendingText.docId },
          {
            $set: {
              textExtractionStatus: "failed",
              textExtractionError: "LegiScan getBillText response did not include PDF document data.",
              fetchedAt: new Date(),
            },
          },
        );
        continue;
      }

      if (!force && pendingText.textHash && pendingText.textHash !== text.text_hash) {
        skippedTexts += 1;
        await LegiScanBillTextModel.updateOne(
          { docId: pendingText.docId },
          {
            $set: {
              textExtractionStatus: "failed",
              textExtractionError:
                "Stored text hash differed from LegiScan response during PDF extraction.",
              fetchedAt: new Date(),
            },
          },
        );
        continue;
      }

      const normalizedText = await extractPdfTextFromBase64(text.doc);

      if (!normalizedText) {
        failedTexts += 1;
        await LegiScanBillTextModel.updateOne(
          { docId: text.doc_id },
          {
            $set: {
              normalizedText: "",
              textExtractionStatus: "failed",
              textExtractionError: "PDF text extraction produced no text.",
              fetchedAt: new Date(),
            },
          },
        );
        continue;
      }

      if (Buffer.byteLength(normalizedText, "utf8") > MAX_NORMALIZED_TEXT_BYTES) {
        failedTexts += 1;
        await LegiScanBillTextModel.updateOne(
          { docId: text.doc_id },
          {
            $set: {
              normalizedText: "",
              textExtractionStatus: "failed",
              textExtractionError:
                "Extracted PDF text exceeds safe MongoDB document size; requires chunk-first storage.",
              fetchedAt: new Date(),
            },
          },
        );
        continue;
      }

      await LegiScanBillTextModel.updateOne(
        { docId: text.doc_id },
        {
          $set: {
            normalizedText,
            rawText: "",
            contentEncoding: "utf8",
            textExtractionStatus: "extracted",
            textExtractionError: undefined,
            fetchedAt: new Date(),
          },
        },
      );

      extractedTexts += 1;
    } catch (error) {
      failedTexts += 1;
      await LegiScanBillTextModel.updateOne(
        { docId: pendingText.docId },
        {
          $set: {
            textExtractionStatus: "failed",
            textExtractionError:
              error instanceof Error ? error.message : "Unknown PDF extraction error.",
            fetchedAt: new Date(),
          },
        },
      );
    }
  }

  return {
    scannedTexts: pendingTexts.length,
    fetchedTexts,
    extractedTexts,
    failedTexts,
    skippedTexts,
  };
}
