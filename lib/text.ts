export function decodeBase64Text(value?: string) {
  if (!value) return "";

  return Buffer.from(value, "base64").toString("utf8");
}

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#x([0-9a-f]+);/gi, (_, hexValue: string) =>
      String.fromCodePoint(Number.parseInt(hexValue, 16)),
    )
    .replace(/&#(\d+);/g, (_, decimalValue: string) =>
      String.fromCodePoint(Number.parseInt(decimalValue, 10)),
    );
}

function stripHtml(value: string) {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ");
}

export function normalizeLegalText(value: string) {
  return stripHtml(decodeHtmlEntities(value))
    .replace(/\u00a0/g, " ")
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
