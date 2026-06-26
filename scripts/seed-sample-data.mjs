import fs from "node:fs";
import path from "node:path";
import mongoose from "mongoose";

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

const topicMatchSchema = new mongoose.Schema(
  {
    topicId: String,
    queries: [String],
    relevanceStatus: String,
    relevanceCheckedAt: Date,
    relevanceReason: String,
  },
  { _id: false },
);

const billTextSchema = new mongoose.Schema(
  {
    docId: Number,
    mime: String,
    url: String,
    textHash: String,
    fetchedAt: Date,
  },
  { _id: false },
);

const legiScanBillSchema = new mongoose.Schema(
  {
    billId: { type: Number, unique: true },
    changeHash: String,
    stateCode: String,
    sessionId: Number,
    billNumber: String,
    title: String,
    description: String,
    status: Number,
    statusDate: Date,
    url: String,
    stateLink: String,
    topicMatches: [topicMatchSchema],
    texts: [billTextSchema],
    rawSearchResult: mongoose.Schema.Types.Mixed,
    rawBill: mongoose.Schema.Types.Mixed,
    firstSeenAt: Date,
    lastSeenAt: Date,
    lastFetchedAt: Date,
  },
  { timestamps: true },
);

const legalContentSchema = new mongoose.Schema(
  {
    topicId: String,
    jurisdiction: String,
    stateCode: String,
    summary: String,
    resources: [
      new mongoose.Schema(
        {
          label: String,
          url: String,
        },
        { _id: false },
      ),
    ],
    sourceBillIds: [Number],
    sourceAttribution: String,
    sourceUpdatedAt: Date,
    reviewStatus: String,
    reviewedAt: Date,
    reviewedBy: String,
    expiresAt: Date,
    embedding: [Number],
    reviewHistory: [mongoose.Schema.Types.Mixed],
  },
  { timestamps: true },
);

const syncRunQuerySchema = new mongoose.Schema(
  {
    topicId: String,
    stateCode: String,
    query: String,
  },
  { _id: false },
);

const legiScanSyncRunSchema = new mongoose.Schema(
  {
    trigger: String,
    status: String,
    schedule: String,
    startedAt: Date,
    finishedAt: Date,
    plannedSearchQueryCount: Number,
    plannedSearchQueries: [syncRunQuerySchema],
    counts: mongoose.Schema.Types.Mixed,
    error: String,
  },
  { timestamps: true },
);

const LegiScanBill =
  mongoose.models.LegiScanBill ??
  mongoose.model("LegiScanBill", legiScanBillSchema);
const LegalContent =
  mongoose.models.LegalContent ??
  mongoose.model("LegalContent", legalContentSchema);
const LegiScanSyncRun =
  mongoose.models.LegiScanSyncRun ??
  mongoose.model("LegiScanSyncRun", legiScanSyncRunSchema);

const now = new Date();
const reviewedAt = new Date("2026-06-25T12:00:00.000Z");
const expiresAt = new Date("2026-12-25T12:00:00.000Z");

const sampleBills = [
  {
    billId: 900001,
    changeHash: "sample-voting-az-001",
    stateCode: "AZ",
    sessionId: 202601,
    billNumber: "HB 2401",
    title: "Voting Rights Restoration After Felony Conviction",
    description:
      "Sample bill record about restoration of voting rights for people with felony convictions.",
    status: 1,
    statusDate: new Date("2026-02-12T00:00:00.000Z"),
    url: "https://legiscan.com/AZ/bill/HB2401/2026",
    stateLink: "https://www.azleg.gov/",
    topicMatches: [
      {
        topicId: "voting",
        queries: ["voting AND felony AND restoration"],
        relevanceStatus: "relevant",
        relevanceCheckedAt: reviewedAt,
        relevanceReason:
          "Sample relevant bill about felony conviction voting rights restoration.",
      },
    ],
    texts: [
      {
        docId: 990001,
        mime: "text/html",
        url: "https://legiscan.com/AZ/text/HB2401/id/990001",
        textHash: "sample-text-voting-az-001",
        fetchedAt: reviewedAt,
      },
    ],
    rawSearchResult: {
      bill_id: 900001,
      number: "HB 2401",
      title: "Voting Rights Restoration After Felony Conviction",
      change_hash: "sample-voting-az-001",
    },
    rawBill: {
      bill_id: 900001,
      state: "AZ",
      bill_number: "HB 2401",
      status: 1,
    },
    firstSeenAt: reviewedAt,
    lastSeenAt: now,
    lastFetchedAt: reviewedAt,
  },
  {
    billId: 900002,
    changeHash: "sample-expungement-az-001",
    stateCode: "AZ",
    sessionId: 202601,
    billNumber: "SB 1150",
    title: "Set Aside Conviction Eligibility",
    description:
      "Sample bill record about setting aside convictions and record relief eligibility.",
    status: 2,
    statusDate: new Date("2026-03-04T00:00:00.000Z"),
    url: "https://legiscan.com/AZ/bill/SB1150/2026",
    stateLink: "https://www.azleg.gov/",
    topicMatches: [
      {
        topicId: "expungement",
        queries: ["set ADJ aside AND conviction"],
        relevanceStatus: "relevant",
        relevanceCheckedAt: reviewedAt,
        relevanceReason:
          "Sample relevant bill about conviction set-aside record relief.",
      },
    ],
    texts: [
      {
        docId: 990002,
        mime: "text/html",
        url: "https://legiscan.com/AZ/text/SB1150/id/990002",
        textHash: "sample-text-expungement-az-001",
        fetchedAt: reviewedAt,
      },
    ],
    rawSearchResult: {
      bill_id: 900002,
      number: "SB 1150",
      title: "Set Aside Conviction Eligibility",
      change_hash: "sample-expungement-az-001",
    },
    rawBill: {
      bill_id: 900002,
      state: "AZ",
      bill_number: "SB 1150",
      status: 2,
    },
    firstSeenAt: reviewedAt,
    lastSeenAt: now,
    lastFetchedAt: reviewedAt,
  },
  {
    billId: 900003,
    changeHash: "sample-housing-tx-001",
    stateCode: "TX",
    sessionId: 202601,
    billNumber: "HB 3010",
    title: "Fair Chance Housing Applications",
    description:
      "Sample bill record about tenant screening and criminal record use in housing applications.",
    status: 1,
    statusDate: new Date("2026-04-18T00:00:00.000Z"),
    url: "https://legiscan.com/TX/bill/HB3010/2026",
    stateLink: "https://capitol.texas.gov/",
    topicMatches: [
      {
        topicId: "housing",
        queries: [
          "fair ADJ chance AND housing",
          "criminal ADJ record AND housing AND tenant",
        ],
        relevanceStatus: "relevant",
        relevanceCheckedAt: reviewedAt,
        relevanceReason:
          "Sample relevant bill about criminal record screening in rental housing.",
      },
    ],
    texts: [
      {
        docId: 990003,
        mime: "text/html",
        url: "https://legiscan.com/TX/text/HB3010/id/990003",
        textHash: "sample-text-housing-tx-001",
        fetchedAt: reviewedAt,
      },
    ],
    rawSearchResult: {
      bill_id: 900003,
      number: "HB 3010",
      title: "Fair Chance Housing Applications",
      change_hash: "sample-housing-tx-001",
    },
    rawBill: {
      bill_id: 900003,
      state: "TX",
      bill_number: "HB 3010",
      status: 1,
    },
    firstSeenAt: reviewedAt,
    lastSeenAt: now,
    lastFetchedAt: reviewedAt,
  },
];

const sampleLegalContent = [
  {
    topicId: "voting",
    jurisdiction: "state",
    stateCode: "AZ",
    summary:
      "Sample reviewed summary: Arizona voting rights restoration rules can depend on conviction history, sentence completion, and court obligations. People should confirm their status with official election resources or legal aid before relying on any general rule.",
    resources: [
      { label: "LegiScan sample source", url: "https://legiscan.com/AZ/bill/HB2401/2026" },
      { label: "LawHelp.org", url: "https://www.lawhelp.org" },
    ],
    sourceBillIds: [900001],
    sourceAttribution:
      "Legislative data provided by LegiScan under Creative Commons Attribution 4.0.",
    sourceUpdatedAt: reviewedAt,
    reviewStatus: "approved",
    reviewedAt,
    reviewedBy: "sample-seed",
    expiresAt,
    embedding: [],
    reviewHistory: [
      {
        status: "approved",
        reviewedAt,
        reviewer: "sample-seed",
        notes: "Sample content for development only.",
      },
    ],
  },
  {
    topicId: "expungement",
    jurisdiction: "state",
    stateCode: "AZ",
    summary:
      "Sample reviewed summary: Arizona uses set-aside relief rather than traditional expungement for many convictions. Eligibility and effect depend on offense type, sentence completion, and court review.",
    resources: [
      { label: "LegiScan sample source", url: "https://legiscan.com/AZ/bill/SB1150/2026" },
      { label: "LawHelp.org", url: "https://www.lawhelp.org" },
    ],
    sourceBillIds: [900002],
    sourceAttribution:
      "Legislative data provided by LegiScan under Creative Commons Attribution 4.0.",
    sourceUpdatedAt: reviewedAt,
    reviewStatus: "approved",
    reviewedAt,
    reviewedBy: "sample-seed",
    expiresAt,
    embedding: [],
    reviewHistory: [
      {
        status: "approved",
        reviewedAt,
        reviewer: "sample-seed",
        notes: "Sample content for development only.",
      },
    ],
  },
  {
    topicId: "housing",
    jurisdiction: "state",
    stateCode: "TX",
    summary:
      "Sample reviewed summary: Fair chance housing proposals may limit how rental housing providers use criminal records during tenant screening. People facing denial should keep notices and seek local legal aid.",
    resources: [
      { label: "LegiScan sample source", url: "https://legiscan.com/TX/bill/HB3010/2026" },
      { label: "HUD Fair Housing", url: "https://www.hud.gov/fairhousing" },
    ],
    sourceBillIds: [900003],
    sourceAttribution:
      "Legislative data provided by LegiScan under Creative Commons Attribution 4.0.",
    sourceUpdatedAt: reviewedAt,
    reviewStatus: "approved",
    reviewedAt,
    reviewedBy: "sample-seed",
    expiresAt,
    embedding: [],
    reviewHistory: [
      {
        status: "approved",
        reviewedAt,
        reviewer: "sample-seed",
        notes: "Sample content for development only.",
      },
    ],
  },
];

const syncRun = {
  trigger: "manual",
  status: "succeeded",
  schedule: "sample-seed",
  startedAt: reviewedAt,
  finishedAt: now,
  plannedSearchQueryCount: 353,
  plannedSearchQueries: [
    {
      topicId: "voting",
      stateCode: "AZ",
      query: "voting AND felony AND restoration",
    },
    {
      topicId: "expungement",
      stateCode: "AZ",
      query: "set ADJ aside AND conviction",
    },
    {
      topicId: "housing",
      stateCode: "TX",
      query: "fair ADJ chance AND housing",
    },
  ],
  counts: {
    searchQueries: 3,
    billFetches: 3,
    billTextFetches: 3,
    newBills: 3,
    changedBills: 0,
    unchangedBills: 0,
    relevantBills: 3,
    irrelevantBills: 0,
  },
};

await mongoose.connect(mongoUri, {
  bufferCommands: false,
});

const billResults = await Promise.all(
  sampleBills.map((bill) =>
    LegiScanBill.updateOne(
      { billId: bill.billId },
      { $set: bill },
      { upsert: true },
    ),
  ),
);

const contentResults = await Promise.all(
  sampleLegalContent.map((content) =>
    LegalContent.updateOne(
      {
        topicId: content.topicId,
        jurisdiction: content.jurisdiction,
        stateCode: content.stateCode,
        reviewedBy: "sample-seed",
      },
      { $set: content },
      { upsert: true },
    ),
  ),
);

const syncRunResult = await LegiScanSyncRun.create(syncRun);

await mongoose.disconnect();

console.log(
  JSON.stringify(
    {
      connected: true,
      database: mongoose.connection.name,
      legiScanBillsUpserted: billResults.length,
      legalContentUpserted: contentResults.length,
      syncRunId: syncRunResult._id.toString(),
    },
    null,
    2,
  ),
);
