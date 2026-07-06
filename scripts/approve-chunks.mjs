import fs from "node:fs";
import path from "node:path";
import mongoose from "mongoose";

/**
 * Bulk review-status promotion for legal text chunks.
 *
 * By default this is a DRY RUN: it reports what would change and exits.
 * Add --apply to actually write the new status.
 *
 * Examples:
 *   node scripts/approve-chunks.mjs --sourceType=legal-content
 *   node scripts/approve-chunks.mjs --sourceType=legal-content --apply
 *   node scripts/approve-chunks.mjs --sourceType=legal-content --state=AZ --apply
 *   node scripts/approve-chunks.mjs --sourceType=legal-authority --fromStatus=draft --apply
 */

function loadLocalEnv() {
  const envPath = path.join(process.cwd(), ".env.local");

  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    if (!line || line.trim().startsWith("#")) continue;

    const separatorIndex = line.indexOf("=");
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

loadLocalEnv();

const mongoUri = process.env.MONGODB_DIRECT_URI ?? process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error("Missing MONGODB_DIRECT_URI or MONGODB_URI.");
}

const args = new Map();

for (const arg of process.argv.slice(2)) {
  const [key, value] = arg.replace(/^--/, "").split("=");
  args.set(key, value ?? "true");
}

const sourceType = args.get("sourceType") ?? "legal-content";
const fromStatus = args.get("fromStatus") ?? "legal-review";
const toStatus = args.get("toStatus") ?? "approved";
const stateCode = args.get("state")?.toUpperCase();
const topicId = args.get("topic");
const sourceName = args.get("sourceName");
const apply = args.get("apply") === "true";

const validStatuses = ["draft", "legal-review", "approved", "expired"];
const validSourceTypes = ["legiscan-bill-text", "legal-authority", "legal-content"];

if (!validSourceTypes.includes(sourceType)) {
  throw new Error(`Invalid --sourceType. Use one of: ${validSourceTypes.join(", ")}`);
}
if (!validStatuses.includes(fromStatus) || !validStatuses.includes(toStatus)) {
  throw new Error(`Invalid status. Use one of: ${validStatuses.join(", ")}`);
}

await mongoose.connect(mongoUri, { bufferCommands: false });

const chunks = mongoose.connection.collection("legaltextchunks");

const filter = { sourceType, reviewStatus: fromStatus };
if (stateCode) filter.stateCode = stateCode;
if (topicId) filter.topicIds = topicId;
if (sourceName) filter.sourceName = new RegExp(sourceName, "i");

// Report current status distribution for this sourceType.
const distribution = await chunks
  .aggregate([
    { $match: { sourceType } },
    { $group: { _id: "$reviewStatus", count: { $sum: 1 } } },
    { $sort: { _id: 1 } },
  ])
  .toArray();

console.log(`Status distribution for sourceType=${sourceType}:`);
for (const row of distribution) {
  console.log(`  ${row._id ?? "(none)"}: ${row.count}`);
}

const matching = await chunks.countDocuments(filter);
console.log(
  `\n${matching} chunk(s) match filter`,
  JSON.stringify({ sourceType, fromStatus, stateCode, topicId, sourceName }),
);

if (matching === 0) {
  console.log("Nothing to update.");
} else if (!apply) {
  console.log(
    `\nDRY RUN - no changes written. Re-run with --apply to set reviewStatus="${toStatus}" on these ${matching} chunk(s).`,
  );
} else {
  const result = await chunks.updateMany(filter, {
    $set: { reviewStatus: toStatus, reviewedAt: new Date() },
  });
  console.log(`\nUpdated ${result.modifiedCount} chunk(s) to reviewStatus="${toStatus}".`);
  console.log(
    "Next step: embed them with\n" +
      `  npm run embeddings:batch -- --limit=50 --batches=40 --waitMs=30000 --sourceType=${sourceType} --reviewStatus=${toStatus} --includeOtherModels=true`,
  );
}

await mongoose.disconnect();
