"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

type TopicCell = { total: number; embedded: number; thin: number };
type CoverageRow = {
  state: string;
  topics: Record<string, TopicCell>;
  total: number;
  embedded: number;
};
type Coverage = {
  activeEmbeddingModel: string;
  topics: string[];
  totals: { total: number; embedded: number; thin: number };
  statesMissingTopics: string[];
  states: CoverageRow[];
};

type Candidate = {
  id: string;
  stateCode?: string;
  topicId: string;
  citation?: string;
  titleHint?: string;
  sourceName: string;
  sourceUrl: string;
  occurrenceCount: number;
  snippet?: string;
  status: string;
};
type CandidateQueue = {
  status: string;
  counts: Record<string, number>;
  candidates: Candidate[];
};

function cellTone(cell?: TopicCell) {
  if (!cell || cell.total === 0) return "bg-red-50 text-red-700";
  if (cell.embedded < cell.total) return "bg-amber-50 text-amber-700";
  return "bg-[#E1F5EE] text-[#085041]";
}

export default function AdminPage() {
  const [authState, setAuthState] = useState<"checking" | "unauthorized" | "ok">("checking");
  const [coverage, setCoverage] = useState<Coverage>();
  const [queue, setQueue] = useState<CandidateQueue>();
  const [queueStatus, setQueueStatus] = useState("needs-review");
  const [acting, setActing] = useState<string>();
  const [error, setError] = useState<string>();

  const loadQueue = useCallback(async (status: string) => {
    const response = await fetch(`/api/admin/candidates?status=${status}`);
    if (response.ok) setQueue(await response.json());
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const coverageResponse = await fetch("/api/admin/coverage");
        if (coverageResponse.status === 401) {
          setAuthState("unauthorized");
          return;
        }
        if (!coverageResponse.ok) {
          setError("Could not load coverage data.");
          setAuthState("ok");
          return;
        }
        setCoverage(await coverageResponse.json());
        setAuthState("ok");
        await loadQueue("needs-review");
      } catch {
        setError("Could not load the dashboard. Is the database reachable?");
        setAuthState("ok");
      }
    })();
  }, [loadQueue]);

  async function act(id: string, action: "verify" | "reject" | "reopen") {
    setActing(id);
    try {
      const response = await fetch("/api/admin/candidates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, action }),
      });
      if (response.ok) await loadQueue(queueStatus);
    } finally {
      setActing(undefined);
    }
  }

  async function switchQueue(status: string) {
    setQueueStatus(status);
    await loadQueue(status);
  }

  if (authState === "checking") {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-gray-500">
        Checking access...
      </div>
    );
  }

  if (authState === "unauthorized") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 px-4 text-center">
        <h1 className="text-lg font-bold text-[#085041]">Admin access required</h1>
        <p className="max-w-sm text-sm text-gray-600">
          Sign in with an account listed in <code>ADMIN_EMAILS</code> to view
          the content operations dashboard.
        </p>
        <Link href="/auth" className="rounded-lg bg-[#1D9E75] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0F6E56]">
          Go to sign in
        </Link>
      </div>
    );
  }

  const embeddedPct = coverage && coverage.totals.total > 0
    ? Math.round((coverage.totals.embedded / coverage.totals.total) * 100)
    : 0;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#085041]">Content Operations</h1>
          <p className="text-xs text-gray-500">
            Corpus health and law-change review queue
          </p>
        </div>
        <Link href="/" className="text-sm font-semibold text-[#085041] hover:underline">
          Back to site
        </Link>
      </div>

      {error ? (
        <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
      ) : null}

      {coverage ? (
        <>
          <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-lg border border-gray-200 p-3">
              <p className="text-[11px] uppercase tracking-wide text-gray-500">Approved chunks</p>
              <p className="text-xl font-bold text-gray-900">{coverage.totals.total.toLocaleString()}</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-3">
              <p className="text-[11px] uppercase tracking-wide text-gray-500">Embedded (searchable)</p>
              <p className="text-xl font-bold text-gray-900">{embeddedPct}%</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-3">
              <p className="text-[11px] uppercase tracking-wide text-gray-500">Thin chunks (&lt;120 chars)</p>
              <p className="text-xl font-bold text-gray-900">{coverage.totals.thin.toLocaleString()}</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-3">
              <p className="text-[11px] uppercase tracking-wide text-gray-500">States missing a topic</p>
              <p className="text-xl font-bold text-gray-900">{coverage.statesMissingTopics.length}</p>
            </div>
          </div>

          <div className="mb-8 overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-left text-[12px]">
              <thead className="bg-gray-50 text-[11px] uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-3 py-2">State</th>
                  {coverage.topics.map((topic) => (
                    <th key={topic} className="px-3 py-2">{topic}</th>
                  ))}
                  <th className="px-3 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {coverage.states.map((row) => (
                  <tr key={row.state} className="border-t border-gray-100">
                    <td className="px-3 py-1.5 font-semibold text-gray-900">{row.state}</td>
                    {coverage.topics.map((topic) => {
                      const cell = row.topics[topic];
                      return (
                        <td key={topic} className="px-1 py-1">
                          <span className={`inline-block min-w-[52px] rounded px-2 py-0.5 text-center font-medium ${cellTone(cell)}`}>
                            {cell ? `${cell.embedded}/${cell.total}` : "0"}
                          </span>
                        </td>
                      );
                    })}
                    <td className="px-3 py-1.5 text-gray-600">{row.embedded}/{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p className="mb-8 text-sm text-gray-500">Loading coverage...</p>
      )}

      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-bold text-[#085041]">Law-change review queue</h2>
        <div className="flex gap-1 text-[11px] font-semibold">
          {["needs-review", "verified", "rejected"].map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => switchQueue(status)}
              className={`rounded-full px-3 py-1 ${
                queueStatus === status
                  ? "bg-[#1D9E75] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {status}
              {queue?.counts?.[status] ? ` (${queue.counts[status]})` : ""}
            </button>
          ))}
        </div>
      </div>

      {queue && queue.candidates.length === 0 ? (
        <p className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-6 text-center text-sm text-gray-500">
          Nothing in “{queueStatus}”. The weekly pipeline adds items here when
          legislative activity may affect a law JO relies on.
        </p>
      ) : null}

      <div className="space-y-3">
        {queue?.candidates.map((candidate) => (
          <div key={candidate.id} className="rounded-lg border border-gray-200 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {candidate.citation ?? candidate.titleHint ?? "Uncited candidate"}
                </p>
                <p className="text-[11px] text-gray-500">
                  {candidate.stateCode ?? "FEDERAL"} · {candidate.topicId} ·{" "}
                  {candidate.sourceName} · seen {candidate.occurrenceCount}x
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href={candidate.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-gray-300 px-3 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50"
                >
                  Source
                </a>
                {queueStatus === "needs-review" ? (
                  <>
                    <button
                      type="button"
                      disabled={acting === candidate.id}
                      onClick={() => act(candidate.id, "verify")}
                      className="rounded-md bg-[#1D9E75] px-3 py-1 text-[11px] font-semibold text-white hover:bg-[#0F6E56] disabled:opacity-50"
                    >
                      Handled
                    </button>
                    <button
                      type="button"
                      disabled={acting === candidate.id}
                      onClick={() => act(candidate.id, "reject")}
                      className="rounded-md border border-red-200 px-3 py-1 text-[11px] font-semibold text-red-600 hover:bg-red-50 disabled:opacity-50"
                    >
                      Dismiss
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    disabled={acting === candidate.id}
                    onClick={() => act(candidate.id, "reopen")}
                    className="rounded-md border border-gray-300 px-3 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Reopen
                  </button>
                )}
              </div>
            </div>
            {candidate.snippet ? (
              <p className="mt-2 rounded bg-gray-50 px-3 py-2 text-[11px] leading-4 text-gray-600">
                {candidate.snippet}
                {candidate.snippet.length >= 280 ? "..." : ""}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <p className="mt-6 text-[11px] leading-4 text-gray-400">
        Workflow: when the weekly pipeline flags a law, review the source,
        update the LegalAuthority record if the law changed, run{" "}
        <code>npm run chunks:approve</code>, and mark the item Handled. The
        daily pipeline re-chunks and re-embeds approved updates automatically.
      </p>
    </div>
  );
}
