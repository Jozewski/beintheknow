const args = new Map();

for (const arg of process.argv.slice(2)) {
  const [key, value] = arg.replace(/^--/, "").split("=");
  args.set(key, value ?? "true");
}

const baseUrl = args.get("baseUrl") ?? "http://localhost:3000";
const reviewStatus = args.get("reviewStatus") ?? "draft";
const sourceType = args.get("sourceType") ?? "legiscan-bill-text";
const state = args.get("state");
const topic = args.get("topic");

const url = new URL("/api/cron/embeddings", baseUrl);
url.searchParams.set("run", "stats");
url.searchParams.set("reviewStatus", reviewStatus);
url.searchParams.set("sourceType", sourceType);
if (state) url.searchParams.set("state", state);
if (topic) url.searchParams.set("topic", topic);

const response = await fetch(url);
const body = await response.json().catch(() => undefined);

console.log(JSON.stringify(body, null, 2));

if (!response.ok) {
  process.exitCode = 1;
}
