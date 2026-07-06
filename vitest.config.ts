import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
    // Reset any vi.stubEnv changes between tests.
    unstubEnvs: true,
  },
  resolve: {
    alias: {
      "@": rootDir,
    },
  },
});
