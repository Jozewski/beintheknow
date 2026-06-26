const LEGISCAN_API_URL = "https://api.legiscan.com/";

export type LegiScanStatus = "OK" | "ERROR";

export type LegiScanSearchResult = {
  relevance?: number;
  state?: string;
  bill_number?: string;
  bill_id?: number;
  change_hash?: string;
  url?: string;
  text_url?: string;
  research_url?: string;
  last_action_date?: string;
  last_action?: string;
  title?: string;
  description?: string;
  status?: number;
  status_date?: string;
};

export type LegiScanSearchPayload = {
  status: LegiScanStatus;
  searchresult?: {
    summary?: {
      page_current?: number;
      page_total?: number;
      count?: number;
      [key: string]: unknown;
    };
    results?: LegiScanSearchResult[];
  };
  alert?: {
    message?: string;
  };
};

export type LegiScanBillPayload = {
  status: LegiScanStatus;
  bill?: {
    bill_id?: number;
    change_hash?: string;
    session_id?: number;
    state?: string;
    bill_number?: string;
    title?: string;
    description?: string;
    status?: number;
    status_date?: string;
    url?: string;
    state_link?: string;
    texts?: Array<{
      doc_id?: number;
      mime?: string;
      url?: string;
      text_hash?: string;
    }>;
    [key: string]: unknown;
  };
  alert?: {
    message?: string;
  };
};

export class LegiScanApiError extends Error {
  constructor(
    message: string,
    readonly payload?: unknown,
  ) {
    super(message);
    this.name = "LegiScanApiError";
  }
}

function getLegiScanApiKey() {
  const apiKey = process.env.LEGISCAN_API_KEY;

  if (!apiKey) {
    throw new LegiScanApiError("Missing LEGISCAN_API_KEY.");
  }

  return apiKey;
}

async function requestLegiScan<T>(params: Record<string, string | number>) {
  const url = new URL(LEGISCAN_API_URL);

  url.searchParams.set("key", getLegiScanApiKey());

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, String(value));
  }

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new LegiScanApiError(`LegiScan request failed with HTTP ${response.status}.`);
  }

  const payload = (await response.json()) as T & {
    status?: LegiScanStatus;
    alert?: { message?: string };
  };

  if (payload.status === "ERROR") {
    throw new LegiScanApiError(
      payload.alert?.message ?? "LegiScan returned an error response.",
      payload,
    );
  }

  return payload;
}

export async function getLegiScanSearchRaw({
  state,
  query,
  year,
  page,
}: {
  state: string;
  query: string;
  year?: number;
  page?: number;
}) {
  return requestLegiScan<LegiScanSearchPayload>({
    op: "getSearchRaw",
    state,
    query,
    ...(year ? { year } : {}),
    ...(page ? { page } : {}),
  });
}

export async function getLegiScanBill(billId: number) {
  return requestLegiScan<LegiScanBillPayload>({
    op: "getBill",
    id: billId,
  });
}

export function parseLegiScanSearchResults(payload: LegiScanSearchPayload) {
  const results = payload.searchresult?.results;

  if (Array.isArray(results)) {
    return results.filter(
      (value): value is LegiScanSearchResult =>
        typeof value === "object" && value !== null && typeof value.bill_id === "number",
    );
  }

  return Object.values(payload.searchresult ?? {}).filter(
    (value): value is LegiScanSearchResult =>
      !Array.isArray(value) &&
      typeof value === "object" &&
      value !== null &&
      "bill_id" in value &&
      typeof value.bill_id === "number",
  );
}

export function getLegiScanSearchPageTotal(payload: LegiScanSearchPayload) {
  const pageTotal = payload.searchresult?.summary?.page_total;

  return typeof pageTotal === "number" && pageTotal > 0 ? pageTotal : 1;
}
