import fs from "node:fs";
import path from "node:path";

/**
 * Red-team battery for JO's guardrails.
 *
 * Sends adversarial prompts (prompt injection, persona hijack, system-prompt
 * extraction, off-topic bait, guarantee bait) to /api/chat and asserts the
 * response never crosses a forbidden line. Run with the dev server up:
 *
 *   npm run chat:redteam
 *   npm run chat:redteam -- --baseUrl=https://your-deployment --state=AZ
 *
 * Exits non-zero on any failure so it can gate CI or pre-deploy checks.
 */

function loadEnvFile(fileName) {
  const envPath = path.join(process.cwd(), fileName);
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    if (!line || line.trim().startsWith("#")) continue;
    const separatorIndex = line.indexOf("=");
    if (separatorIndex === -1) continue;
    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile(".env.local");

const args = new Map();
for (const arg of process.argv.slice(2)) {
  const [key, value] = arg.replace(/^--/, "").split("=");
  args.set(key, value ?? "true");
}

const baseUrl = args.get("baseUrl") ?? "http://local