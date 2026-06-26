**Be In The Know — Just Ask JO**  
LegiScan Query Reference Guide  
*All 6 topics · All 50 states · Search operators · State-specific terminology · Budget calculation*

## **Why This Guide Exists**

LegiScan searches full bill text. Legal terminology for expungement alone has 7 different terms across 50 states. Without targeted queries, the sync returns noise and misses the bills that matter. This guide defines the correct query for each topic in each state.

## **LegiScan Search Operators**

| Operator | What it does |
| :---- | :---- |
| ADJ | Words must be adjacent: parole ADJ conditions matches "parole conditions" but not "parole supervision conditions" |
| AND | Both words must appear anywhere in bill: expungement AND felony |
| OR | Either word matches — catches two terms in one query: expungement OR expunction |
| NOT | Excludes word: housing AND criminal NOT immigration |
| \+word / \-word | Required / excluded term (same as AND / NOT for single terms) |

## **Query Budget — Free Tier (30,000 queries / month)**

| Operation | Monthly cost (4 syncs/month) |
| :---- | :---- |
| getSearch — 50 states x 6 topics x 4 syncs | 1,200 queries |
| State overrides (9 states with extra queries) | \~60 extra queries/month |
| getBill — changed bills only (\~75 per sync x 4\) | \~300 queries |
| getBillText — new bills only (\~40 per sync x 4\) | \~160 queries |
| Total estimated monthly usage | \~1,720 queries (5.7% of 30,000) |
| Buffer remaining | \~28,280 queries — substantial headroom |

**TOPIC 1 — VOTING RIGHTS RESTORATION**

## **Primary query — works for all 50 states**

voting AND felony AND restoration

All 50 states use the terms voting, felony, and restoration in relevant legislation. Maine and Vermont have no disenfranchisement law so results will be minimal and correct — the filter will catch zero relevant bills there.

## **State-specific notes**

| State(s) | Note |
| :---- | :---- |
| ME, VT | No disenfranchisement — query returns minimal results, which is correct |
| FL, KY, MS | Historically use restoration of civil rights — modern bills still reference voting in the text |
| VA | 2021 constitutional amendment — modern bills use voting rights restoration directly |

## **Gemini relevance check**

Is this bill about restoring or restricting voting rights for people with felony convictions? YES or NO only.

**TOPIC 2 — EXPUNGEMENT**

## **Primary query — covers 41 of 50 states**

expungement OR expunction

The OR operator catches both expungement (used in most states) and expunction (used in Texas and some Southern states) in a single API call. This is the most important use of the OR operator in the query set.

## **State-specific query overrides — 9 states need different terminology**

| State | Legal term used | Override query |
| :---- | :---- | :---- |
| AZ | Set aside conviction (no true expungement) | set ADJ aside AND conviction |
| NH | Annulment of criminal record (unique to NH) | annulment AND criminal AND record |
| CT | Erasure of criminal record | erasure AND criminal AND record |
| WA | Vacate conviction (alongside sealing) | vacate AND conviction |
| TX (also) | Nondisclosure for deferred adjudication | nondisclosure AND deferred ADJ adjudication |
| MA | Record sealing (primary — very limited expungement) | sealing AND criminal AND record |
| NV | Record sealing (alongside expungement) | Standard query covers — NV also uses expungement |
| OR | Set aside (alongside expungement) | Standard query covers — OR uses both terms |

## **States using standard query**

AL AK AR CA CO DE FL GA HI ID IL IN IA KS KY LA ME MD MI MN MS MO MT NE NJ NM NY NC ND OH OK PA RI SC SD TN UT VT VA WV WI WY

## **Gemini relevance check**

Is this bill about expungement, record sealing, set-aside, vacating, or clearing a criminal record for individuals? YES or NO only.

**TOPIC 3 — HOUSING RIGHTS**

## **Primary query — all 50 states**

fair ADJ chance AND housing

Fair chance housing is the modern legislative standard term. It appears in bill titles and full text across all 50 states for housing-related criminal record legislation introduced since 2018\.

## **Secondary query — add for states with sparse results**

criminal ADJ record AND housing AND tenant

Use this secondary query for TX, FL, AL, MS, and SC where primary results may be fewer than 3 relevant bills.

## **Gemini relevance check**

Is this bill about housing protections or restrictions for people with criminal records, including rental applications or tenant screening? YES or NO only.

**TOPIC 4 — EMPLOYMENT RIGHTS**

## **Primary query — all 50 states**

ban ADJ box

Ban the box is the near-universal legislative shorthand for fair chance hiring legislation. It appears in bill titles consistently across all 50 states. More precise than fair chance employment as a search term because it appears in titles, not just bill bodies.

## **Secondary query — catches laws not titled ban the box**

fair ADJ chance AND employment AND criminal

## **Gemini relevance check**

Is this bill about restricting how employers use criminal records in hiring decisions? YES or NO only.

**TOPIC 5 — POLICE INTERACTIONS**

## **Primary query — all 50 states**

police ADJ accountability

Police accountability is the dominant legislative framing for bills addressing rights during police encounters, use of force, and misconduct. Body camera bills also surface under this query because they are frequently bundled with accountability language.

## **Secondary query — use of force specifically**

use ADJ force AND law ADJ enforcement

## **Gemini relevance check**

Is this bill about police conduct, use of force, officer accountability, or rights of individuals during police encounters? YES or NO only.

**TOPIC 6 — SUPERVISION**

This is the most complex topic. Arizona abolished traditional parole in 1994\. Texas calls probation community supervision. Illinois uses mandatory supervised release. Two queries are required to cover all supervision types across all states.

## **Primary query — parole**

parole AND conditions AND violation

## **Secondary query — probation**

probation AND conditions AND violation

Conditions and violation together target bills about the actual rights and obligations of people under supervision — not administrative department budget bills.

## **State-specific overrides**

| State | Issue | Override query |
| :---- | :---- | :---- |
| AZ | No traditional parole since 1994 — uses community supervision administered by ADCRR | community ADJ supervision AND conditions |
| TX | Probation is officially called community supervision in Texas statute | community ADJ supervision AND conditions |
| IL | Uses mandatory supervised release (MSR) instead of parole as the post-prison term | supervised ADJ release AND conditions |
| DE | Probation is primary — limited parole exists | Use secondary query only: probation AND conditions AND violation |

## **Gemini relevance check**

Is this bill about parole, probation, community supervision, or supervised release conditions, violations, or rights of people under supervision? YES or NO only.

**UPDATED CODE — lib/legiscan.ts**

Replace TOPIC\_QUERIES and add STATE\_TOPIC\_OVERRIDES and getTopicQueries helper:

// Default queries — used for all states unless overridden below  
export const TOPIC\_QUERIES: Record\<string, string\[\]\> \= {  
  voting:      \['voting AND felony AND restoration'\],  
  expungement: \['expungement OR expunction'\],  
  housing:     \['fair ADJ chance AND housing'\],  
  employment:  \['ban ADJ box'\],  
  police:      \['police ADJ accountability'\],  
  supervision: \[  
    'parole AND conditions AND violation',  
    'probation AND conditions AND violation',  
  \],  
};  
   
// State-specific overrides — replaces default when present  
export const STATE\_TOPIC\_OVERRIDES:  
  Record\<string, Partial\<Record\<string, string\[\]\>\>\> \= {  
  AZ: {  
    expungement: \['set ADJ aside AND conviction'\],  
    supervision: \['community ADJ supervision AND conditions'\],  
  },  
  NH: { expungement: \['annulment AND criminal AND record'\] },  
  CT: { expungement: \['erasure AND criminal AND record'\] },  
  WA: { expungement: \['vacate AND conviction'\] },  
  TX: {  
    expungement: \['expunction AND criminal',  
                  'nondisclosure AND deferred ADJ adjudication'\],  
    supervision: \['community ADJ supervision AND conditions'\],  
    housing:     \['fair ADJ chance AND housing',  
                  'criminal ADJ record AND housing AND tenant'\],  
  },  
  MA: { expungement: \['sealing AND criminal AND record'\] },  
  IL: {  
    supervision: \['parole AND conditions',  
                  'supervised ADJ release AND conditions'\],  
  },  
  DE: { supervision: \['probation AND conditions AND violation'\] },  
  FL: {  
    housing: \['fair ADJ chance AND housing',  
              'criminal ADJ record AND housing AND tenant'\],  
  },  
};  
   
// Helper: returns the correct queries for any state \+ topic combination  
export function getTopicQueries(  
  topicId: string,  
  stateCode: string  
): string\[\] {  
  const override \= STATE\_TOPIC\_OVERRIDES\[stateCode\]?.\[topicId\];  
  return override ?? TOPIC\_QUERIES\[topicId\] ?? \[\];  
}

**50-STATE QUERY MATRIX**

| State | Uses standard queries for | State override active for |
| :---- | :---- | :---- |
| AL | All 6 topics | None |
| AK | All 6 topics | None |
| AZ | Voting · Housing · Employment · Police | Expungement (set aside) · Supervision (community) |
| AR | All 6 topics | None |
| CA | All 6 topics | None |
| CO | All 6 topics | None |
| CT | Voting · Housing · Employment · Police · Supervision | Expungement (erasure) |
| DE | Voting · Expungement · Housing · Employment · Police | Supervision (probation primary) |
| FL | Voting · Expungement · Employment · Police · Supervision | Housing (secondary added) |
| GA | All 6 topics | None |
| HI | All 6 topics | None |
| ID | All 6 topics | None |
| IL | Voting · Expungement · Housing · Employment · Police | Supervision (supervised release added) |
| IN | All 6 topics | None |
| IA | All 6 topics | None |
| KS | All 6 topics | None |
| KY | All 6 topics | None |
| LA | All 6 topics | None |
| ME | All 6 topics | None |
| MD | All 6 topics | None |
| MA | Voting · Housing · Employment · Police · Supervision | Expungement (sealing primary) |
| MI | All 6 topics | None |
| MN | All 6 topics | None |
| MS | All 6 topics | None |
| MO | All 6 topics | None |
| MT | All 6 topics | None |
| NE | All 6 topics | None |
| NV | All 6 topics | None |
| NH | Voting · Housing · Employment · Police · Supervision | Expungement (annulment — unique to NH) |
| NJ | All 6 topics | None |
| NM | All 6 topics | None |
| NY | All 6 topics | None |
| NC | All 6 topics | None |
| ND | All 6 topics | None |
| OH | All 6 topics | None |
| OK | All 6 topics | None |
| OR | All 6 topics | None |
| PA | All 6 topics | None |
| RI | All 6 topics | None |
| SC | All 6 topics | None |
| SD | All 6 topics | None |
| TN | All 6 topics | None |
| TX | Voting · Police · Employment | Expungement (expunction \+ nondisclosure) · Housing (secondary) · Supervision (community) |
| UT | All 6 topics | None |
| VT | All 6 topics | None |
| VA | All 6 topics | None |
| WA | Voting · Housing · Employment · Police · Supervision | Expungement (vacate) |
| WV | All 6 topics | None |
| WI | All 6 topics | None |
| WY | All 6 topics | None |

*Be In The Know — Just Ask JO  ·  LegiScan Query Reference Guide  ·  beintheknowjustaskjo.com  ·  2026*