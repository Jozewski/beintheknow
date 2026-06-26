import type { ContentJurisdiction } from "@/lib/content";
import { getApprovedContent } from "@/lib/content";

export const dynamic = "force-dynamic";

function parseJurisdiction(value: string | null): ContentJurisdiction {
  return value === "state" ? "state" : "federal";
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const jurisdiction = parseJurisdiction(url.searchParams.get("jurisdiction"));
  const stateCode = url.searchParams.get("stateCode")?.trim().toUpperCase();
  const q = url.searchParams.get("q")?.trim();

  try {
    const entries = await getApprovedContent({
      jurisdiction,
      stateCode: jurisdiction === "state" ? stateCode : undefined,
      q,
    });

    return Response.json({
      entries,
      meta: {
        jurisdiction,
        stateCode: jurisdiction === "state" ? stateCode : undefined,
        count: entries.length,
      },
    });
  } catch (error) {
    console.error("Failed to load legal content", error);

    return Response.json(
      { error: "Unable to load legal content right now." },
      { status: 500 },
    );
  }
}
