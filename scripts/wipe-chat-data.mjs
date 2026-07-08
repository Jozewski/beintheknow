import fs from "node:fs";
import mongoose from "mongoose";

/**
 * DEV UTILITY: deletes all chat sessions and messages so testing can start
 * from a clean slate. Does NOT touch the legal corpus, users, or LegiScan
 * data. Dry-run by default; add --apply to actually delete.
 *
 *   node scripts/wipe-chat-data.mjs            # shows counts, deletes nothing
 *   node scripts/wipe-chat-data.mjs --apply    # deletes chat sessions+messages
 */

const apply = process.argv.includes("--apply");

if (fs.existsSync(".env.local")) {
  for (const line of fs.readFileSync(".env.local", "utf8").split(/\r?\n/)) {
    if (!line || line.trim().startsWith("#")) continue;
    const i = line.indexOf("=");
    if (i === -1) continue;
    const k = line.slice(0, i).trim();
    const v = line.slice(i + 1).trim();
    if (!process.env[k]) process.env[k] = v;
  }
}

const uri = process.env.MONGODB_DIRECT_URI ?? process.env.MONGODB_URI;
if (!uri) throw new Error("Missing MONGODB_URI / MONGODB_DIRECT_URI.");

await mongoose.connect(uri, { bufferCommands: false });
const db = mongoose.connection;

const sessionCount = await db.collection("chatsessions").countDocuments({});
const messageCount = await db.collection("chatmessages").countDocuments({});

console.log(`chat sessions: ${sessionCount}`);
console.log(`chat messages: ${messageCount}`);

if (!apply) {
  console.log("\nDry run - nothing deleted. Re-run with --apply to delete both.");
} else {
  const s = await db.collection("chatsessions").deleteMany({});
  const m = await db.collection("chatmessages").deleteMany({});
  console.log(`\nDeleted ${s.deletedCount} sessions and ${m.deletedCount} messages.`);
  console.log("The legal corpus, user accounts, and LegiScan data were untouched.");
}

await mongoose.disconnect();
