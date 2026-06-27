const args = new Map();

for (const arg of process.argv.slice(2)) {
  const [key, value] = arg.replace(/^--/, "").split("=");
  args.set(key, value ?? "true");
}

const baseUrl = args.get("baseUrl") ?? "http://localhost:3000";
const limit = Number(args.get("limit") || "100");
const waitMs = Number(args.get("waitMs") || "1500");
const maxBatchesPerQueue = Number(args.get("maxBatchesPerQueue") || "100");

const queues = [
  { sourceType: "legal-content", reviewStatus: "legal-review" },
  { sourceType: "legal-content", reviewStatus: "approved" },
  { sourceType: "legal-content", reviewStatus: "draft" },
  { sourceType: "legal-content", reviewStatus: "expired" },
  { sourceType: "legal-authority", reviewStatus: "approved" },
  { sourceType: "legal-authority", reviewStatus: "legal-review" },
  { sourceType: "legal-authority", reviewStatus: "draft" },
  { sourceType: "legal-authority", reviewStatus: "expired" },
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runQueue(queue) {
  for (let batch = 1; batch <= maxBatchesPerQueue; batch += 1) {
    const url = new URL("/api/cron/embeddings", baseUrl);
    url.searchParams.set("limit", String(limit));
    url.searchParams.set("sourceType", queue.sourceType);
    url.searchParams.set("reviewStatus", queue.reviewStatus);

    const response = await fetch(url);
    const body = await response.json().catch(() => undefined);

    console.log(
      JSON.stringify({
        at: new Date().toISOString(),
        queue,
        batch,
        status: response.status,
        body,
      }),
    );

    if (!response.ok) {
      process.exitCode = 1;
      return;
    }

    if (!body?.counts?.scannedChunks) return;

    await sleep(waitMs);
  }
}

for (const queue of queues) {
  await runQueue(queue);
  if (process.exitCode) break;
}
