import { execFile } from "node:child_process";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { promisify } from "node:util";

import { normalizeLegalText } from "@/lib/text";

const execFileAsync = promisify(execFile);

function isMissingExecutableError(error: unknown) {
  return (
    error &&
    typeof error === "object" &&
    "code" in error &&
    error.code === "ENOENT"
  );
}

export async function extractPdfTextFromBase64(base64Pdf: string) {
  const workDir = await mkdtemp(path.join(tmpdir(), "jo-pdf-"));
  const pdfPath = path.join(workDir, "source.pdf");
  const textPath = path.join(workDir, "source.txt");

  try {
    await writeFile(pdfPath, Buffer.from(base64Pdf, "base64"));
    try {
      await execFileAsync("pdftotext", ["-layout", "-enc", "UTF-8", pdfPath, textPath], {
        timeout: 60_000,
        windowsHide: true,
      });
    } catch (error) {
      if (isMissingExecutableError(error)) {
        throw new Error(
          "PDF extraction requires the pdftotext binary on PATH. Install Poppler or configure the runtime image before running PDF extraction.",
        );
      }

      throw error;
    }

    const text = await readFile(textPath, "utf8");

    return normalizeLegalText(text);
  } finally {
    await rm(workDir, { recursive: true, force: true });
  }
}
