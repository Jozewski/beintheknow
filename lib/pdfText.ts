import { execFile } from "node:child_process";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { promisify } from "node:util";

import { normalizeLegalText } from "@/lib/text";

const execFileAsync = promisify(execFile);

export async function extractPdfTextFromBase64(base64Pdf: string) {
  const workDir = await mkdtemp(path.join(tmpdir(), "jo-pdf-"));
  const pdfPath = path.join(workDir, "source.pdf");
  const textPath = path.join(workDir, "source.txt");

  try {
    await writeFile(pdfPath, Buffer.from(base64Pdf, "base64"));
    await execFileAsync("pdftotext", ["-layout", "-enc", "UTF-8", pdfPath, textPath], {
      timeout: 60_000,
      windowsHide: true,
    });

    const text = await readFile(textPath, "utf8");

    return normalizeLegalText(text);
  } finally {
    await rm(workDir, { recursive: true, force: true });
  }
}
