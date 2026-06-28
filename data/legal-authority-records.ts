import type { TopicId } from "@/data/content-data";

export type LegalAuthorityRecord = {
  id: string;
  authorityType: "statute" | "regulation" | "agency-guidance" | "enacted-bill";
  jurisdiction: "federal" | "state";
  stateCode?: string;
  topicIds: TopicId[];
  citation: string;
  title: string;
  officialUrl: string;
  sourceName: string;
  text: string;
  currentAsOf: string;
  currentAsOfLabel?: string;
  effectiveDate?: string;
  sourceBillIds?: number[];
  reviewStatus: "draft" | "legal-review" | "approved" | "expired";
};

/**
 * Only put narrowed, topic-relevant authority text here.
 *
 * This file is intentionally not a full-code scrape dump. Each entry should be
 * an exact statute/regulation/official-guidance section needed for one or more
 * JO topics, copied from the official source URL and dated with currentAsOf.
 */
export const legalAuthorityRecords: LegalAuthorityRecord[] = [
  {
    id: "wa-rcw-29a-08-520-voting-rights-restoration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WA",
    topicIds: ["voting"],
    citation: "Wash. Rev. Code § 29A.08.520",
    title: "Felony conviction — Restoration of voting rights",
    officialUrl: "https://app.leg.wa.gov/RCW/default.aspx?cite=29A.08.520",
    sourceName: "Washington State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `RCW 29A.08.520 Felony conviction — Restoration of voting rights.

(1) For a felony conviction in a Washington state court, the right to vote is automatically restored as long as the person is not serving a sentence of total confinement under the jurisdiction of the department of corrections. For a felony conviction in a federal court or any state court other than a Washington state court, the right to vote is automatically restored as long as the person is no longer incarcerated. A person who has been convicted of a felony and is either sentenced to a term of total confinement under the jurisdiction of the department of corrections or otherwise incarcerated as provided for in this subsection must reregister to vote prior to voting.

(2) At least once a month, the secretary of state shall compare the list of registered voters to a list of persons who are not eligible to vote as provided in subsection (1) of this section. If a registered voter is not eligible to vote as provided in this section, the secretary of state or county auditor shall confirm the match through a date of birth comparison and suspend the voter registration from the official state voter registration list. The secretary of state or county auditor shall send to the person at his or her last known voter registration address and at the department of corrections, if the person is serving a sentence of total confinement under the jurisdiction of the department, a notice of the proposed cancellation and an explanation of the requirements for restoring the right to vote and reregistering. To the extent possible, the secretary of state shall time the comparison required by this subsection to allow notice and cancellation of voting rights for ineligible voters prior to a primary or general election.

(3) For the purposes of this section, a sentence of total confinement does not include confinement imposed as a sanction for a community custody violation under RCW 9.94A.633(1).`,
  },
  {
    id: "wa-rcw-29a-04-079-infamous-crime",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WA",
    topicIds: ["voting"],
    citation: "Wash. Rev. Code § 29A.04.079",
    title: "Infamous crime",
    officialUrl: "https://app.leg.wa.gov/RCW/default.aspx?cite=29A.04.079",
    sourceName: "Washington State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `RCW 29A.04.079 Infamous crime.

An "infamous crime" is a crime punishable by death in the state penitentiary or imprisonment in a state or federal correctional facility. Neither an adjudication in juvenile court pursuant to chapter 13.40 RCW, nor a conviction for a misdemeanor or gross misdemeanor, is an "infamous crime."`,
  },
  {
    id: "wa-rcw-9-92-066-suspended-sentence-civil-rights",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WA",
    topicIds: ["voting", "expungement"],
    citation: "Wash. Rev. Code § 9.92.066",
    title:
      "Termination of suspended sentence — Restoration of civil rights — Vacation of conviction",
    officialUrl: "https://app.leg.wa.gov/RCW/default.aspx?cite=9.92.066",
    sourceName: "Washington State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `RCW 9.92.066 Termination of suspended sentence — Restoration of civil rights — Vacation of conviction.

(1) Upon termination of any suspended sentence under RCW 9.92.060 or 9.95.210, such person may apply to the court for restoration of his or her civil rights not already restored by RCW 29A.08.520. Thereupon the court may in its discretion enter an order directing that such defendant shall thereafter be released from all penalties and disabilities resulting from the offense or crime of which he or she has been convicted.

(2)(a) Upon termination of a suspended sentence under RCW 9.92.060 or 9.95.210, the person may apply to the sentencing court for a vacation of the person's record of conviction under RCW 9.94A.640. The court may, in its discretion, clear the record of conviction if it finds the person has met the equivalent of the tests in RCW 9.94A.640(2) as those tests would be applied to a person convicted of a crime committed before July 1, 1984.

(b) The clerk of the court in which the vacation order is entered shall immediately transmit the order vacating the conviction to the Washington state patrol identification section and to the local police agency, if any, which holds criminal history information for the person who is the subject of the conviction. The Washington state patrol and any such local police agency shall immediately update their records to reflect the vacation of the conviction, and shall transmit the order vacating the conviction to the federal bureau of investigation. A conviction that has been vacated under this section may not be disseminated or disclosed by the state patrol or local law enforcement agency to any person, except other criminal justice enforcement agencies.`,
  },
  {
    id: "wa-rcw-9-94a-637-certificate-of-discharge",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WA",
    topicIds: ["voting", "supervision"],
    citation: "Wash. Rev. Code § 9.94A.637",
    title: "Discharge upon completion of sentence — Certificate of discharge",
    officialUrl: "https://app.leg.wa.gov/RCW/default.aspx?cite=9.94A.637",
    sourceName: "Washington State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `RCW 9.94A.637 Discharge upon completion of sentence — Certificate of discharge.

(1) When an offender has completed all requirements of the sentence, including any and all legal financial obligations, and while under the custody or supervision of the department, the secretary or the secretary's designee shall notify the sentencing court, which shall discharge the offender and provide the offender with a certificate of discharge by issuing the certificate to the offender in person or by mailing the certificate to the offender's last known address. A certificate of discharge issued under this subsection (1) is effective on the date the offender completed all conditions of his or her sentence.

(2)(a) When an offender has reached the end of his or her supervision with the department and has completed all the requirements of the sentence except his or her legal financial obligations, the secretary's designee shall provide the county clerk with a notice that the offender has completed all nonfinancial requirements of the sentence. The notice must list the specific sentence requirements that have been completed, so that it is clear to the sentencing court that the offender is entitled to discharge upon completion of the legal financial obligations of the sentence.

(9) The discharge shall have the effect of restoring all civil rights not already restored by RCW 29A.08.520, and the certificate of discharge shall so state. Nothing in this section prohibits the use of an offender's prior record for purposes of determining sentences for later offenses as provided in this chapter. Nothing in this section affects or prevents use of the offender's prior conviction in a later criminal prosecution either as an element of an offense or for impeachment purposes. A certificate of discharge is not based on a finding of rehabilitation.`,
  },
  {
    id: "wa-rcw-9-96-020-civil-rights-certificate-form",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WA",
    topicIds: ["voting"],
    citation: "Wash. Rev. Code § 9.96.020",
    title: "Form of certificate",
    officialUrl: "https://app.leg.wa.gov/RCW/default.aspx?cite=9.96.020",
    sourceName: "Washington State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `RCW 9.96.020 Form of certificate.

Whenever the governor shall determine to restore his or her civil rights to any person convicted of an infamous crime in any superior court of this state, he or she shall execute and file in the office of the secretary of state an instrument in writing substantially in the statutory certificate form restoring civil rights forfeited by reason of the conviction.`,
  },
  {
    id: "wa-rcw-9-94a-640-vacation-conviction-record",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WA",
    topicIds: ["expungement"],
    citation: "Wash. Rev. Code § 9.94A.640",
    title: "Vacation of offender's record of conviction",
    officialUrl: "https://app.leg.wa.gov/RCW/default.aspx?cite=9.94A.640",
    sourceName: "Washington State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `RCW 9.94A.640 Vacation of offender's record of conviction.

(1) Except as provided in subsection (5), every offender who has been discharged under RCW 9.94A.637 may apply to the sentencing court for a vacation of the offender's record of conviction. If the court finds the offender meets the tests prescribed in subsection (2), the court may clear the record of conviction by permitting withdrawal of a guilty plea and entry of a not guilty plea, or by setting aside a guilty verdict, and by dismissing the information or indictment.

(2) An offender may not have the record of conviction cleared if there are pending criminal charges in state or federal court; if the offense was a violent offense as defined in RCW 9.94A.030 or a crime against persons as defined in RCW 43.43.830, except for listed exceptions; if a class B felony applicant has a new conviction within ten years before the application; or if a class C felony applicant has a new conviction within five years before the application.

This section contains additional eligibility requirements and exclusions. Use the official section text for the full test before giving any eligibility answer.`,
  },
  {
    id: "wa-rcw-59-18-257-tenant-screening-notice",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WA",
    topicIds: ["housing"],
    citation: "Wash. Rev. Code § 59.18.257",
    title: "Screening of prospective tenants",
    officialUrl: "https://app.leg.wa.gov/RCW/default.aspx?cite=59.18.257",
    sourceName: "Washington State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `RCW 59.18.257 Screening of prospective tenants — Notice to prospective tenant — Costs — Adverse action notice — Violation.

(1)(a) Prior to obtaining any information about a prospective tenant, the prospective landlord shall first notify the prospective tenant in writing, or by posting, what types of information will be accessed to conduct tenant screening; what criteria may result in denial of the application; if a consumer report is used, the name and address of the consumer reporting agency and the prospective tenant's rights to obtain a free copy of the consumer report after denial or other adverse action and to dispute inaccurate information; and whether the landlord will accept a comprehensive reusable tenant screening report.

(1)(b) A landlord may charge a prospective tenant for costs incurred in obtaining a tenant screening report only if the landlord provides the required notice. If the landlord conducts their own screening, the landlord may charge actual costs only if the required notice is provided and the amount does not exceed customary local screening service costs.`,
  },
  {
    id: "wa-rcw-59-20-080-mobile-home-park-criminal-conduct",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WA",
    topicIds: ["housing"],
    citation: "Wash. Rev. Code § 59.20.080",
    title:
      "Manufactured/mobile home park grounds for termination of tenancy or occupancy",
    officialUrl: "https://app.leg.wa.gov/RCW/default.aspx?cite=59.20.080",
    sourceName: "Washington State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `RCW 59.20.080 Grounds for termination of tenancy or occupancy or failure to renew a tenancy or occupancy.

(1) A landlord shall not terminate or fail to renew a tenancy of a tenant or the occupancy of an occupant except for one or more listed reasons.

(1)(c) One listed reason is conviction of the tenant of a crime, commission of which threatens the health, safety, or welfare of the other mobile home park tenants. The tenant shall be given written notice of a 15-day period in which to vacate.

This section is specific to manufactured/mobile home park tenancies and should not be presented as the general residential tenancy rule.`,
  },
  {
    id: "wa-rcw-49-94-005-fair-chance-definitions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WA",
    topicIds: ["employment"],
    citation: "Wash. Rev. Code § 49.94.005",
    title: "Fair chance employment definitions",
    officialUrl: "https://app.leg.wa.gov/RCW/default.aspx?cite=49.94.005",
    sourceName: "Washington State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `RCW 49.94.005 Definitions.

The definitions in this section apply throughout chapter 49.94 RCW unless the context clearly requires otherwise.

"Adult conviction record" means any record of or information about criminal conduct resulting in an adult criminal conviction, finding of guilt, or other finding adverse to the subject.

"Arrest record" means any record of or information about an arrest or pending charge for criminal conduct without a conviction, adjudication, finding of guilt, or other finding adverse to the subject.

"Criminal record" includes records or information about a citation or arrest for criminal conduct and adult or juvenile court cases, whether or not the case resulted in a finding of guilt.

"Employer" includes public agencies, private individuals, businesses and corporations, contractors, temporary staffing agencies, training and apprenticeship programs, and job placement, referral, and employment agencies.`,
  },
  {
    id: "wa-rcw-49-94-010-fair-chance-employment",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WA",
    topicIds: ["employment"],
    citation: "Wash. Rev. Code § 49.94.010",
    title: "Timing and use of criminal records in employment",
    officialUrl: "https://app.leg.wa.gov/RCW/default.aspx?cite=49.94.010",
    sourceName: "Washington State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `RCW 49.94.010 Inquiries into employee or applicant criminal records — Adverse employment actions — Timing — Advertisements — Exceptions.

(1) An employer may not include any question on an employment application, inquire orally or in writing, receive information through a criminal history background check, or otherwise obtain information about an applicant's criminal record until after the employer initially determines that the applicant is otherwise qualified and makes a conditional offer of employment.

(2) An employer may not advertise employment openings in a way that excludes people with criminal records from applying. Advertisements stating "no felons," "no criminal background," or similar messages are prohibited.

(3) An employer may not implement a policy or practice that automatically or categorically excludes individuals with a criminal record from any employment position.

(5) An employer may not carry out a tangible adverse employment action solely based on an applicant's or employee's adult conviction record unless the employer has a legitimate business reason for taking the action. Before taking the action, the employer must notify the applicant or employee and identify the record on which the employer relies.`,
  },
  {
    id: "wa-rcw-9-96a-020-public-employment-licensing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WA",
    topicIds: ["employment"],
    citation: "Wash. Rev. Code § 9.96A.020",
    title:
      "Public employment and occupational licensing — Prior felony conviction",
    officialUrl: "https://app.leg.wa.gov/RCW/default.aspx?cite=9.96A.020",
    sourceName: "Washington State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `RCW 9.96A.020 Employment, occupational licensing by public entity — Prior felony conviction no disqualification — Exceptions.

(1) Subject to exceptions, and unless another law provides otherwise, a person is not disqualified from public employment or from a state or local occupational license, permit, certificate, or registration solely because of a prior felony conviction. The fact of a prior conviction may be considered.

(2) A person may be denied public employment or a license, permit, certificate, or registration because of a prior felony conviction if the felony directly relates to the employment position or the specific occupation, trade, vocation, or business, and the time elapsed since the conviction is less than ten years, except as provided in RCW 9.97.020.`,
  },
  {
    id: "wa-rcw-18-235-110-professional-license-discipline",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WA",
    topicIds: ["employment"],
    citation: "Wash. Rev. Code § 18.235.110",
    title: "Unprofessional conduct — Licensing discipline",
    officialUrl: "https://app.leg.wa.gov/RCW/default.aspx?cite=18.235.110",
    sourceName: "Washington State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `RCW 18.235.110 Unprofessional conduct — Finding.

(1) Upon finding unprofessional conduct, except as provided in RCW 9.97.020, the disciplinary authority may issue an order providing for one or a combination of sanctions, including revocation or suspension of a license, restriction or limitation of practice, remedial education or treatment, monitoring, censure or reprimand, probation conditions, fines, denial of an initial or renewal license application, or other corrective action.

(3) Any action under this section may be totally or partly stayed. In determining the appropriate action, the disciplinary authority must first consider sanctions necessary to protect public health, safety, or welfare.`,
  },
  {
    id: "wa-rcw-9-73-030-recording-private-communications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WA",
    topicIds: ["police"],
    citation: "Wash. Rev. Code § 9.73.030",
    title: "Recording private communication — Consent required — Exceptions",
    officialUrl: "https://app.leg.wa.gov/RCW/default.aspx?cite=9.73.030",
    sourceName: "Washington State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `RCW 9.73.030 Intercepting, recording, or divulging private communication — Consent required — Exceptions.

(1) Except as otherwise provided in chapter 9.73 RCW, it is unlawful to intercept or record private communications or private conversations without first obtaining consent of all participants or all persons engaged in the conversation.

(2) Certain communications or conversations, including emergency communications, threats, anonymous or repeated communications, or hostage or barricade communications, may be recorded with the consent of one party.

(3) Where consent by all parties is needed, consent is considered obtained whenever one party announces to all other parties engaged in the communication or conversation, in any reasonably effective manner, that the communication or conversation is about to be recorded.`,
  },
  {
    id: "wa-rcw-46-61-021-traffic-stop-identification",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WA",
    topicIds: ["police"],
    citation: "Wash. Rev. Code § 46.61.021",
    title: "Duty to obey law enforcement officer — Traffic infraction stop",
    officialUrl: "https://app.leg.wa.gov/RCW/default.aspx?cite=46.61.021",
    sourceName: "Washington State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `RCW 46.61.021 Duty to obey law enforcement officer — Authority of officer.

(1) Any person requested or signaled to stop by a law enforcement officer for a traffic infraction has a duty to stop.

(2) Whenever any person is stopped for a traffic infraction, the officer may detain that person for a reasonable period of time necessary to identify the person, check for outstanding warrants, check license, insurance identification card, and vehicle registration status, and complete and issue a notice of traffic infraction.

(3) Any person requested to identify himself or herself to a law enforcement officer pursuant to an investigation of a traffic infraction has a duty to identify himself or herself and give his or her current address.`,
  },
  {
    id: "wa-rcw-9-94a-703-community-custody-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WA",
    topicIds: ["supervision"],
    citation: "Wash. Rev. Code § 9.94A.703",
    title: "Community custody — Conditions",
    officialUrl: "https://app.leg.wa.gov/RCW/default.aspx?cite=9.94A.703",
    sourceName: "Washington State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `RCW 9.94A.703 Community custody — Conditions.

When a court sentences a person to a term of community custody, the court shall impose conditions of community custody as provided in this section.

(1) Mandatory conditions include requiring the offender to inform the department of court-ordered treatment upon request and to comply with conditions imposed by the department under RCW 9.94A.704.

(2) Unless waived by the court, the court shall order an offender to report to and be available for contact with the assigned community corrections officer as directed; work at department-approved education, employment, or community restitution; refrain from possessing or consuming controlled substances except pursuant to lawfully issued prescriptions; and obtain prior department approval for residence location and living arrangements.

(3) The court may also order discretionary conditions, including geographic restrictions and no contact with the victim or a specified class of individuals.`,
  },
  {
    id: "wa-rcw-9-94a-704-community-custody-supervision",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WA",
    topicIds: ["supervision"],
    citation: "Wash. Rev. Code § 9.94A.704",
    title: "Community custody — Supervision by the department",
    officialUrl: "https://app.leg.wa.gov/RCW/default.aspx?cite=9.94A.704",
    sourceName: "Washington State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `RCW 9.94A.704 Community custody — Supervision by the department — Conditions.

(1) Every person sentenced to a period of community custody shall report to and be placed under supervision of the department, subject to RCW 9.94A.501.

(2) The department shall assess the offender's risk of reoffense and may establish and modify additional community custody conditions based on risk to community safety.

(3) If the offender is supervised by the department, the department shall at minimum instruct the offender to report as directed to a community corrections officer; remain within prescribed geographical boundaries; notify the community corrections officer of any change in address or employment; and disclose supervision to treatment providers as required by RCW 9.94A.722.

(4) The department may require the offender to participate in rehabilitative programs or otherwise perform affirmative conduct and to obey all laws.`,
  },
  {
    id: "wv-code-3-1-3-voting-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WV",
    topicIds: ["voting"],
    citation: "W. Va. Code § 3-1-3",
    title: "Persons entitled to vote",
    officialUrl: "https://code.wvlegislature.gov/3-1-3/",
    sourceName: "West Virginia Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `W. Va. Code § 3-1-3 Persons entitled to vote.

(a) A person may not vote in a federal, state, county, municipal, or special election unless the person is registered to vote, meets the age requirement, has not been determined totally mentally incompetent by final circuit court judgment, has not been convicted of treason, a felony, or bribery in an election unless the sentence has been fully discharged or the person has been pardoned or otherwise formally released from the resulting disability to vote, is a United States citizen, and is a bona fide resident of the relevant state, county, or municipality.

(c) For a disqualifying conviction, the disability to vote may end when the person has fully discharged the sentence, including incarceration, parole, supervision, or probation ordered by a court, or has been pardoned or otherwise formally released from the disability to vote.`,
  },
  {
    id: "wv-code-61-11-26-expungement-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WV",
    topicIds: ["expungement"],
    citation: "W. Va. Code § 61-11-26",
    title: "Expungement of certain criminal convictions",
    officialUrl: "https://code.wvlegislature.gov/61-11-26/",
    sourceName: "West Virginia Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `W. Va. Code § 61-11-26 Expungement of certain criminal convictions; procedures; effect.

(a) Subject to the limitations in this section, a person convicted of a misdemeanor offense or offenses may petition the circuit court where the conviction occurred for expungement of the conviction and associated records. Subject to the same limitations, a person convicted of a nonviolent felony offense or offenses arising from the same transaction or series of transactions may petition the circuit court for expungement.

(b) Temporal requirements include waiting until one year after conviction, completion of any sentence of incarceration, or completion of supervision, whichever is later, for a misdemeanor; two years after the last conviction, incarceration, or supervision for multiple misdemeanors; and a separate waiting period for nonviolent felonies. This section contains additional exclusions and procedural requirements that must be checked before giving eligibility guidance.`,
  },
  {
    id: "wv-code-62-12-26-sex-offense-supervised-release-restrictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WV",
    topicIds: ["housing", "supervision"],
    citation: "W. Va. Code § 62-12-26",
    title: "Extended supervision for certain sex offenders",
    officialUrl: "https://code.wvlegislature.gov/62-12-26/",
    sourceName: "West Virginia Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `W. Va. Code § 62-12-26 Extended supervision for certain sex offenders; sentencing; conditions; supervision provisions; supervision fee.

(a) Certain defendants convicted of listed sex offenses must serve, in addition to any other penalty or court condition, a period of supervised release of up to 50 years. For certain listed convictions, the supervised release term must be no less than 10 years, and a person designated a sexually violent predator is subject to supervised release for life.

This section is relevant to housing and supervision only for the narrow issue of post-conviction supervised-release restrictions and related residence, work, and contact limits. It should not be used as a general housing-rights rule.`,
  },
  {
    id: "wv-code-30-1-24-criminal-record-licensing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WV",
    topicIds: ["employment"],
    citation: "W. Va. Code § 30-1-24",
    title: "Use of criminal records as disqualification from authorization to practice",
    officialUrl: "https://code.wvlegislature.gov/30-1-24/",
    sourceName: "West Virginia Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `W. Va. Code § 30-1-24 Use of criminal records as disqualification from authorization to practice.

(a) This section defines "board," "license" or "licensure," and "unreversed" conviction for purposes of professional and occupational licensing.

(b) Except for listed professions and occupations and where not in conflict with an existing compact or model act, boards subject to this section may not disqualify an applicant from initial licensure because of a prior criminal conviction that remains unreversed unless that conviction bears a rational nexus to the profession or occupation. In deciding rational nexus, the board must consider the nature and seriousness of the crime, the passage of time since commission of the crime, and other factors listed in the section.`,
  },
  {
    id: "wv-code-30-1-8-license-denial-suspension-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WV",
    topicIds: ["employment"],
    citation: "W. Va. Code § 30-1-8",
    title: "Denial, suspension, or revocation of a license or registration",
    officialUrl: "https://code.wvlegislature.gov/30-1-8/",
    sourceName: "West Virginia Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `W. Va. Code § 30-1-8 Denial, suspension or revocation of a license or registration; probation; proceedings; effect of suspension or revocation; transcript; report; judicial review.

(a) Every board referred to in chapter 30 may suspend or revoke the license of a person convicted of a felony or found to have engaged in conduct, practices, or acts constituting professional negligence or willful departure from accepted standards of professional conduct. A board may also enter consent decrees, reprimand, enter probation orders, levy fines, or use these actions in combination.

(b) For this section, "felony" means a felony or crime punishable as a felony under West Virginia, other state, or federal law.`,
  },
  {
    id: "wv-code-62-1d-3-recording-communications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WV",
    topicIds: ["police"],
    citation: "W. Va. Code § 62-1D-3",
    title: "Interception of communications generally",
    officialUrl: "https://code.wvlegislature.gov/62-1D-3/",
    sourceName: "West Virginia Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `W. Va. Code § 62-1D-3 Interception of communications generally.

(a) Except as otherwise specifically provided in article 1D, it is unlawful to intentionally intercept, attempt to intercept, or procure another person to intercept any wire, oral, or electronic communication; intentionally disclose contents known or having reason to be known as obtained through unlawful interception; or intentionally use or disclose contents or party identity known or having reason to be known as obtained through unlawful interception.

(e) It is lawful for a person to intercept a wire, oral, or electronic communication where the person is a party to the communication or where one party has given prior consent, unless the communication is intercepted for the purpose of committing a criminal or tortious act in violation of federal or state law.`,
  },
  {
    id: "wv-code-62-12-9-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WV",
    topicIds: ["supervision"],
    citation: "W. Va. Code § 62-12-9",
    title: "Conditions of release on probation",
    officialUrl: "https://code.wvlegislature.gov/62-12-9/",
    sourceName: "West Virginia Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `W. Va. Code § 62-12-9 Conditions of release on probation.

(a) Release on probation is conditioned on the probationer not violating criminal law of West Virginia, another state, or the United States; not leaving the state without consent of the court that placed the person on probation; complying with court-prescribed supervision conditions; and, in listed child-victim offenses, not living in the same residence as any minor child, exercising visitation with any minor child, or having contact with the victim unless modified by the court.

The section includes additional conditions, fees, and court powers that should be reviewed for case-specific supervision answers.`,
  },
  {
    id: "wv-code-62-12-10-probation-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WV",
    topicIds: ["supervision"],
    citation: "W. Va. Code § 62-12-10",
    title: "Violation of probation",
    officialUrl: "https://code.wvlegislature.gov/62-12-10/",
    sourceName: "West Virginia Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `W. Va. Code § 62-12-10 Violation of probation.

(a) If there is reasonable cause to believe a probationer violated a probation condition, the probation officer may arrest the person with or without an order or warrant, or the court may issue an arrest order. The person must be brought before the court or judge for a prompt and summary hearing.

If reasonable cause exists to believe the probationer absconded, engaged in new criminal conduct other than a minor traffic violation or simple possession, or violated a special condition designed to protect the public or a victim, the court may revoke suspension, impose sentence if none has been imposed, and order the sentence executed. Other violations may trigger graduated confinement periods before revocation.`,
  },
  {
    id: "wv-code-62-12-13-parole-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WV",
    topicIds: ["supervision"],
    citation: "W. Va. Code § 62-12-13",
    title: "Powers and duties of parole board; eligibility for parole",
    officialUrl: "https://code.wvlegislature.gov/62-12-13/",
    sourceName: "West Virginia Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `W. Va. Code § 62-12-13 Powers and duties of board; eligibility for parole; procedure for granting parole.

(a) The Parole Board, when it is of the opinion that the best interests of the state and the inmate will be served and subject to statutory limits, shall release an inmate on parole for terms and conditions provided by article 12.

(b) An inmate of a state correctional institution is eligible for parole if the inmate has served the minimum term of an indeterminate sentence or one fourth of a definite term sentence, or has applied for and been accepted by the Commissioner of Corrections and Rehabilitation into an accelerated parole program, subject to the listed exclusions and requirements.`,
  },
  {
    id: "wi-stat-304-078-civil-rights-voting-restoration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WI",
    topicIds: ["voting"],
    citation: "Wis. Stat. § 304.078",
    title: "Civil rights restored; voting rights",
    officialUrl: "https://docs.legis.wisconsin.gov/document/statutes/304.078",
    sourceName: "Wisconsin Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `Wis. Stat. § 304.078 Civil rights restored; voting rights.

The certificate of the department or other responsible supervising agency that a convicted person has served the sentence or otherwise satisfied the judgment is evidence that the person is restored to civil rights. The department or agency must list in the certificate the rights restored and not restored.

(3) If a person is disqualified from voting under s. 6.03(1)(b), the right to vote is restored when the person completes the term of imprisonment or probation for the crime that led to the disqualification. The department, or the jailer for a person sentenced to county jail or house of correction, must inform the person in writing when the right to vote is restored under this subsection.`,
  },
  {
    id: "wi-stat-973-015-expunction-special-disposition",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WI",
    topicIds: ["expungement"],
    citation: "Wis. Stat. § 973.015",
    title: "Special disposition; expunction",
    officialUrl: "https://docs.legis.wisconsin.gov/document/statutes/973.015",
    sourceName: "Wisconsin Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `Wis. Stat. § 973.015 Special disposition.

(1m)(a)1. Subject to listed exceptions, when a person is under age 25 at the time of committing an offense for which the person is found guilty and the maximum imprisonment is six years or less, the court may order at sentencing that the record be expunged upon successful completion of the sentence if the court determines the person will benefit and society will not be harmed.

(1m)(a)3. The statute excludes listed convictions, including certain Class H and Class I felonies when the person has a prior felony conviction, violent offenses, and other specified offenses.

(1m)(b) A person successfully completes the sentence if the person has not been convicted of a subsequent offense, probation has not been revoked, and the probationer has satisfied probation conditions. Upon successful completion, the detaining or probationary authority forwards a certificate of discharge to the court, which has the effect of expunging the record.`,
  },
  {
    id: "wi-stat-111-321-employment-discrimination-bases",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WI",
    topicIds: ["employment"],
    citation: "Wis. Stat. § 111.321",
    title: "Prohibited bases of employment discrimination",
    officialUrl: "https://docs.legis.wisconsin.gov/document/statutes/111.321",
    sourceName: "Wisconsin Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `Wis. Stat. § 111.321 Prohibited bases of discrimination.

Subject to ss. 111.33 to 111.365, no employer, labor organization, employment agency, licensing agency, or other person may engage in employment discrimination as specified in s. 111.322 against any individual on the basis of listed protected traits, including arrest record and conviction record.`,
  },
  {
    id: "wi-stat-111-335-arrest-conviction-record-employment",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WI",
    topicIds: ["employment"],
    citation: "Wis. Stat. § 111.335",
    title: "Arrest or conviction record; exceptions and special cases",
    officialUrl: "https://docs.legis.wisconsin.gov/document/statutes/111.335",
    sourceName: "Wisconsin Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `Wis. Stat. § 111.335 Arrest or conviction record; exceptions and special cases.

(2) Employment discrimination because of arrest record includes requesting an applicant, employee, member, licensee, or other individual to supply arrest-record information except for pending charges, subject to listed exceptions.

(3)(a) Notwithstanding s. 111.322, it is not employment discrimination because of conviction record to refuse to employ or license, or to bar or terminate from employment or licensing, an individual if the individual has been convicted of a felony, misdemeanor, or other offense the circumstances of which substantially relate to the circumstances of the particular job or licensed activity, subject to listed limitations. It is also not employment discrimination if the person is not bondable where bondability is required by law, regulation, or established business practice.`,
  },
  {
    id: "wi-stat-49-155-child-care-subsidy-background-check",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WI",
    topicIds: ["housing"],
    citation: "Wis. Stat. § 49.155",
    title: "Wisconsin Shares child care subsidy; provider background rules",
    officialUrl: "https://docs.legis.wisconsin.gov/document/statutes/49.155",
    sourceName: "Wisconsin Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `Wis. Stat. § 49.155 Wisconsin Shares; child care subsidy.

This section governs Wisconsin Shares child care subsidies. It defines "child care provider" to include providers licensed under s. 48.65, certified under s. 48.651, or established or contracted for under s. 120.13(14). NICCC identifies this section as relevant where provider, employee, or nonclient resident convictions affect state or county child care payments.

Use this authority only for the child care/provider-residence collateral consequence layer, not as a general tenant-screening rule.`,
  },
  {
    id: "wi-stat-48-685-child-care-background-checks",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WI",
    topicIds: ["housing", "employment"],
    citation: "Wis. Stat. § 48.685",
    title: "Child care background checks",
    officialUrl: "https://docs.legis.wisconsin.gov/document/statutes/48.685",
    sourceName: "Wisconsin Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `Wis. Stat. § 48.685 Child care background checks.

This section governs background checks for child care programs and related persons. NICCC identifies it as relevant to denial or revocation of licenses to operate child care entities and to conviction-based restrictions affecting providers, employees, and nonclient residents.

Use this section as a narrow housing/employment collateral consequence source for child care settings and household/nonclient resident background checks, not as a general housing-rights rule.`,
  },
  {
    id: "wi-stat-968-24-temporary-questioning",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WI",
    topicIds: ["police"],
    citation: "Wis. Stat. § 968.24",
    title: "Temporary questioning without arrest",
    officialUrl: "https://docs.legis.wisconsin.gov/document/statutes/968.24",
    sourceName: "Wisconsin Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `Wis. Stat. § 968.24 Temporary questioning without arrest.

After identifying himself or herself as a law enforcement officer, an officer may stop a person in a public place for a reasonable period when the officer reasonably suspects that the person is committing, is about to commit, or has committed a crime, and may demand the person's name and address and an explanation of the person's conduct. The detention and temporary questioning must be conducted in the vicinity where the person was stopped.`,
  },
  {
    id: "wi-stat-968-31-interception-communications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WI",
    topicIds: ["police"],
    citation: "Wis. Stat. § 968.31",
    title: "Interception and disclosure of communications prohibited",
    officialUrl: "https://docs.legis.wisconsin.gov/document/statutes/968.31",
    sourceName: "Wisconsin Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `Wis. Stat. § 968.31 Interception and disclosure of wire, electronic or oral communications prohibited.

(1) Except as otherwise specifically provided, a person is guilty of a Class H felony if the person intentionally intercepts, attempts to intercept, or procures another person to intercept any wire, electronic, or oral communication; intentionally uses or attempts to use a device to intercept oral communication; discloses contents known or having reason to be known as obtained through unlawful interception; or uses contents known or having reason to be known as obtained through unlawful interception.

This section should be paired with its exceptions before giving any recording-the-police or recording-conversation answer.`,
  },
  {
    id: "wi-stat-973-09-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WI",
    topicIds: ["supervision"],
    citation: "Wis. Stat. § 973.09",
    title: "Probation",
    officialUrl: "https://docs.legis.wisconsin.gov/document/statutes/973.09",
    sourceName: "Wisconsin Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `Wis. Stat. § 973.09 Probation.

(1)(a) Except as provided by statute, if a person is convicted of a crime, the court may withhold sentence or impose sentence and stay its execution, and in either case place the person on probation to the department for a stated period. The court may impose any conditions that appear reasonable and appropriate.

(1)(b) If the court places the person on probation, the court must order restitution under s. 973.20 unless there is substantial reason not to order restitution as a condition of probation.`,
  },
  {
    id: "wi-stat-304-06-parole-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WI",
    topicIds: ["supervision"],
    citation: "Wis. Stat. § 304.06",
    title: "Paroles from state prisons and house of correction",
    officialUrl: "https://docs.legis.wisconsin.gov/document/statutes/304.06",
    sourceName: "Wisconsin Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `Wis. Stat. § 304.06 Paroles from state prisons and house of correction.

(1)(b) Subject to listed statutory exceptions, the parole commission may parole an inmate of Wisconsin state prisons or a felon or person serving at least one year in a county house of correction or county reforestation camp when the person has served 25 percent of the sentence imposed for the offense, or six months, whichever is greater. For a life term, the parole commission may parole an inmate after the statutory period described in this section, subject to listed limitations and sentence-credit rules.`,
  },
  {
    id: "wi-stat-302-113-extended-supervision-release",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WI",
    topicIds: ["supervision"],
    citation: "Wis. Stat. § 302.113",
    title: "Release to extended supervision for felony offenders",
    officialUrl: "https://docs.legis.wisconsin.gov/document/statutes/302.113",
    sourceName: "Wisconsin Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as of June 27, 2026",
    reviewStatus: "approved",
    text: `Wis. Stat. § 302.113 Release to extended supervision for felony offenders.

This section governs release to extended supervision for felony offenders. Related official text provides that people released under supervision are subject to statutory and departmental rules and conditions until discharge or sentence expiration. Use this as a supervision framework source, and verify the exact subsection for any detailed eligibility or revocation answer.`,
  },
  {
    id: "wy-stat-22-3-102-voter-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WY",
    topicIds: ["voting"],
    citation: "Wyo. Stat. sec. 22-3-102",
    title: "Qualifications; temporary registration",
    officialUrl: "https://wyoleg.gov/statutes/compress/title22.pdf",
    sourceName: "Wyoming Legislature",
    currentAsOf: "2026-07-01",
    currentAsOfLabel:
      "Official Wyoming title PDF states it reflects statutes as of July 1, 2026",
    reviewStatus: "approved",
    text: `Wyo. Stat. sec. 22-3-102 Qualifications; temporary registration.

(a) A person may register to vote not less than fourteen days before an election, or as otherwise provided by Wyoming election law, if the person is a United States citizen, will be at least eighteen years old on the day of the next election, is a bona fide Wyoming resident, is not currently adjudicated mentally incompetent, has not been convicted of a felony or, if convicted, has had civil or voting rights restored, and has been a bona fide Wyoming resident for not less than thirty days before the next election.

(e) The secretary of state may verify voter registration data through agreements with state agencies. The attorney general comparison includes state felony conviction data, and the state board of parole and department of corrections comparison includes records regarding restoration of voting rights.`,
  },
  {
    id: "wy-stat-6-10-106-felony-rights-lost-restoration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WY",
    topicIds: ["voting"],
    citation: "Wyo. Stat. sec. 6-10-106",
    title: "Rights lost by conviction of felony; restoration",
    officialUrl: "https://wyoleg.gov/statutes/compress/title06.pdf",
    sourceName: "Wyoming Legislature",
    currentAsOf: "2026-07-01",
    currentAsOfLabel:
      "Official Wyoming title PDF states it reflects statutes as of July 1, 2026",
    reviewStatus: "approved",
    text: `Wyo. Stat. sec. 6-10-106 Rights lost by conviction of felony; restoration.

(a) A person convicted of a felony is incompetent to be an elector or juror or to hold an office of honor, trust or profit within Wyoming or to use or knowingly possess a firearm unless the conviction is reversed or annulled, the person receives a pardon, rights are restored under Wyo. Stat. sec. 7-13-105(a) or (f), voting rights are restored under Wyo. Stat. sec. 7-13-105(b) and (c), or firearm rights are restored under the law of the jurisdiction of conviction.

When only elector rights are restored under Wyo. Stat. sec. 7-13-105(b) and (c), the person remains incompetent to be a juror or to hold office of honor, trust or profit in Wyoming.`,
  },
  {
    id: "wy-stat-7-13-105-restoration-of-rights",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WY",
    topicIds: ["voting"],
    citation: "Wyo. Stat. sec. 7-13-105",
    title: "Certificate of restoration of rights",
    officialUrl: "https://wyoleg.gov/statutes/compress/title07.pdf",
    sourceName: "Wyoming Legislature",
    currentAsOf: "2026-07-01",
    currentAsOfLabel:
      "Official Wyoming title PDF states it reflects statutes as of July 1, 2026",
    reviewStatus: "approved",
    text: `Wyo. Stat. sec. 7-13-105 Certificate of restoration of rights; procedure for restoration in general; procedure for restoration of voting rights for nonviolent felonies.

(a) Subject to statutory limitations, upon written application the governor may issue a certificate restoring rights lost under Wyo. Stat. sec. 6-10-106 when a person's sentence expires or the person satisfactorily completes probation.

(b) The department of corrections shall issue a certificate of restoration of voting rights for eligible nonviolent felony convictions. Upon issuance of the certificate, voting rights lost under Wyo. Stat. sec. 6-10-106 are deemed restored.

(c) For eligible Wyoming nonviolent felony convictions completed before January 1, 2010, the department requires a written request and a determination that the person completed the sentence, including probation and parole. For eligible persons completing sentence on or after January 1, 2010, the department shall not require an application before issuing the certificate. For eligible out-of-state nonviolent felony convictions, the department issues a certificate upon written request after determining the sentence, including probation and parole, is complete.`,
  },
  {
    id: "wy-stat-7-13-1401-nonconviction-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WY",
    topicIds: ["expungement"],
    citation: "Wyo. Stat. sec. 7-13-1401",
    title: "Petition for expungement of arrest, charge, and disposition records",
    officialUrl: "https://wyoleg.gov/statutes/compress/title07.pdf",
    sourceName: "Wyoming Legislature",
    currentAsOf: "2026-07-01",
    currentAsOfLabel:
      "Official Wyoming title PDF states it reflects statutes as of July 1, 2026",
    reviewStatus: "approved",
    text: `Wyo. Stat. sec. 7-13-1401 Petition for expungement; records of arrest, dismissal of charges, disposition; eligibility; no filing fee.

(a) A person, or the state for a juvenile record, may petition the court for an order expunging records of arrest, charges or dispositions. At least 180 days must have passed since the arrest or dismissal, there must be no formal charges pending when the petition is filed, and the case must meet the section's limitations.

The section applies when there were no convictions from the charge or incident, no criminal charges were filed from the incident, or all criminal proceedings from the incident were dismissed by the prosecutor or the court.

(d) If the court finds the petitioner eligible, it shall issue an order granting expungement of the applicable record and place the court file under seal, available only by order of that court.

(f) A person who receives an expungement order under this section may respond to an inquiry as though the arrest or charges did not occur, unless otherwise provided by law.`,
  },
  {
    id: "wy-stat-7-13-1501-misdemeanor-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WY",
    topicIds: ["expungement"],
    citation: "Wyo. Stat. sec. 7-13-1501",
    title: "Petition for expungement of certain misdemeanor convictions",
    officialUrl: "https://wyoleg.gov/statutes/compress/title07.pdf",
    sourceName: "Wyoming Legislature",
    currentAsOf: "2026-07-01",
    currentAsOfLabel:
      "Official Wyoming title PDF states it reflects statutes as of July 1, 2026",
    reviewStatus: "approved",
    text: `Wyo. Stat. sec. 7-13-1501 Petition for expungement of records of conviction of certain misdemeanors.

(a) A person who pled guilty or nolo contendere to or was convicted of a misdemeanor may petition the convicting court for expungement of conviction records, subject to statutory limits.

At least five years must have passed for nonstatus offenses, and at least one year must have passed for status offenses, since expiration of the sentence imposed by the court, including probation or completion of a court-ordered program.

The misdemeanor may not have involved use or attempted use of a firearm. A health care provider convicted of an offense punishable under Wyo. Stat. sec. 6-2-313 committed against a patient under the provider's care is not eligible under this section.`,
  },
  {
    id: "wy-stat-7-13-301-deferred-probation-dismissal",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WY",
    topicIds: ["expungement", "supervision"],
    citation: "Wyo. Stat. sec. 7-13-301",
    title: "Placing person found guilty, but not convicted, on probation",
    officialUrl: "https://wyoleg.gov/statutes/compress/title07.pdf",
    sourceName: "Wyoming Legislature",
    currentAsOf: "2026-07-01",
    currentAsOfLabel:
      "Official Wyoming title PDF states it reflects statutes as of July 1, 2026",
    reviewStatus: "approved",
    text: `Wyo. Stat. sec. 7-13-301 Placing person found guilty, but not convicted, on probation.

(a) For an eligible person who has not previously been convicted of a felony, the court may, with the consent of the defendant and the state and without entering a judgment of guilt or conviction, defer further proceedings and place the person on probation for up to thirty-six months on terms and conditions set by the court.

The probation terms include reporting to the court at least twice per year, conducting oneself in a law-abiding manner, not leaving Wyoming without court consent, conforming to any other probation terms the court finds proper, and paying restitution to each victim.

(b) If the court finds the person has fulfilled probation and rehabilitation has been attained to the court's satisfaction, the court may discharge the person and dismiss the proceedings at the end of thirty-six months or any time after one year from the original probation date.

(d) Discharge and dismissal under this section are without adjudication of guilt and are not a conviction for any purpose.`,
  },
  {
    id: "wy-stat-33-1-304-licensing-criminal-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WY",
    topicIds: ["employment"],
    citation: "Wyo. Stat. sec. 33-1-304",
    title: "Considering criminal convictions; pre-application determinations",
    officialUrl: "https://wyoleg.gov/statutes/compress/title33.pdf",
    sourceName: "Wyoming Legislature",
    currentAsOf: "2026-07-01",
    currentAsOfLabel:
      "Official Wyoming title PDF states it reflects statutes as of July 1, 2026",
    reviewStatus: "approved",
    text: `Wyo. Stat. sec. 33-1-304 Considering criminal convictions; pre-application determinations.

(a) Except as specifically required by licensure, certification or registration statutes, a Wyoming licensing board or authority that considers criminal convictions shall not consider prior convictions that do not affect the practice of the profession or occupation or the ability to practice the regulated profession or occupation.

State policy includes reducing recidivism by addressing barriers to employment and encouraging appropriate employment and licensure of people with arrest and conviction records; considering whether the elements of the offense are directly related to the duties and responsibilities of the profession; considering whether the profession offers the opportunity for the same or a similar offense to occur; considering the relationship of the offense to the purposes of regulation; and providing an opportunity to appeal a license denial based on a prior conviction.

(c) A licensing authority shall not consider evidence of a conviction more than twenty years old, except when the sentence, including incarceration, parole and probation, is incomplete or has been completed within fewer than the last ten years, or when the conviction is related to the duties and responsibilities of the profession or occupation or otherwise permitted by statute.

(e) A person previously convicted of a crime may apply to a licensing authority for a determination whether one or more criminal convictions will prevent the person from receiving a license, certification or registration.`,
  },
  {
    id: "wy-stat-40-26-103-fair-housing-sale-rental",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WY",
    topicIds: ["housing"],
    citation: "Wyo. Stat. sec. 40-26-103",
    title: "Sale or rental",
    officialUrl: "https://wyoleg.gov/statutes/compress/title40.pdf",
    sourceName: "Wyoming Legislature",
    currentAsOf: "2026-07-01",
    currentAsOfLabel:
      "Official Wyoming title PDF states it reflects statutes as of July 1, 2026",
    reviewStatus: "approved",
    text: `Wyo. Stat. sec. 40-26-103 Sale or rental.

(a) A person may not refuse to sell or rent, after a bona fide offer, refuse to negotiate for sale or rental, or otherwise make unavailable or deny a dwelling to an individual because of race, color, religion, sex, disability, familial status or national origin.

(b) A person may not discriminate against an individual in the terms, conditions or privileges of sale or rental of a dwelling or in providing services or facilities connected with sale or rental because of race, color, religion, sex, disability, familial status or national origin.

(c) This section does not prohibit discrimination against an individual because the individual has been convicted under federal law or the law of any state of the illegal manufacture or distribution of a controlled substance.`,
  },
  {
    id: "wy-stat-42-6-105-adult-foster-care-background",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WY",
    topicIds: ["housing"],
    citation: "Wyo. Stat. sec. 42-6-105",
    title: "Adult foster care homes; licensure; suspension or revocation",
    officialUrl: "https://wyoleg.gov/statutes/compress/title42.pdf",
    sourceName: "Wyoming Legislature",
    currentAsOf: "2026-07-01",
    currentAsOfLabel:
      "Official Wyoming title PDF states it reflects statutes as of July 1, 2026",
    reviewStatus: "approved",
    text: `Wyo. Stat. sec. 42-6-105 Adult foster care homes; licensure; suspension or revocation.

(d) The department shall complete a criminal records check on any individual employed by adult foster care homes and on any individual, other than a resident client or resident client's spouse, who at licensure is expected to live in the adult foster care home or who later lives or comes to live in the home.

The department may refuse to license a facility or prohibit the individual from living in the facility if the individual has been convicted of a felony indicating the individual may abuse a resident or steal from a resident.`,
  },
  {
    id: "wy-stat-7-3-702-communications-interception",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WY",
    topicIds: ["police"],
    citation: "Wyo. Stat. sec. 7-3-702",
    title: "Prohibition against interception or disclosure of communications",
    officialUrl: "https://wyoleg.gov/statutes/compress/title07.pdf",
    sourceName: "Wyoming Legislature",
    currentAsOf: "2026-07-01",
    currentAsOfLabel:
      "Official Wyoming title PDF states it reflects statutes as of July 1, 2026",
    reviewStatus: "approved",
    text: `Wyo. Stat. sec. 7-3-702 Prohibition against interception or disclosure of wire, oral or electronic communications; exceptions; penalties.

(a) Except as provided by statute, a person may not intentionally intercept, attempt to intercept, or procure another person to intercept a wire, oral or electronic communication; use or attempt to use a device to intercept oral communication in listed circumstances; disclose contents known to have been obtained through unlawful interception; or use contents known to have been obtained through unlawful interception.

(b)(iv) The prohibition does not prevent any person from intercepting an oral, wire or electronic communication where the person is a party to the communication or where one of the parties has given prior consent, unless the communication is intercepted for the purpose of committing a criminal or tortious act.

Use this as the Wyoming recording/communications-consent hook. It is not a stop-and-identify statute.`,
  },
  {
    id: "wy-stat-6-5-204-interference-with-peace-officer",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WY",
    topicIds: ["police", "supervision"],
    citation: "Wyo. Stat. sec. 6-5-204",
    title: "Interference with peace officer; disarming peace officer",
    officialUrl: "https://wyoleg.gov/statutes/compress/title06.pdf",
    sourceName: "Wyoming Legislature",
    currentAsOf: "2026-07-01",
    currentAsOfLabel:
      "Official Wyoming title PDF states it reflects statutes as of July 1, 2026",
    reviewStatus: "approved",
    text: `Wyo. Stat. sec. 6-5-204 Interference with peace officer; disarming peace officer; penalties.

(a) A person commits a misdemeanor if the person knowingly obstructs, impedes or interferes with or resists arrest by a peace officer while the peace officer is engaged in the lawful performance of official duties.

(b) A person who intentionally and knowingly causes or attempts to cause bodily injury to a peace officer engaged in the lawful performance of official duties is guilty of a felony.

(d) For this section, "peace officer" includes probation and parole agents or supervisors employed full-time by the state department of corrections to assess, supervise, monitor, track, visit or control persons released under parole conditions or sentenced under probation conditions.

Use this as a narrow interference/resisting authority, not as authority that Wyoming requires a person to identify themselves during every police stop.`,
  },
  {
    id: "wy-stat-7-13-402-parole-board-powers-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WY",
    topicIds: ["supervision"],
    citation: "Wyo. Stat. sec. 7-13-402",
    title: "General powers and duties of parole board; eligibility for parole",
    officialUrl: "https://wyoleg.gov/statutes/compress/title07.pdf",
    sourceName: "Wyoming Legislature",
    currentAsOf: "2026-07-01",
    currentAsOfLabel:
      "Official Wyoming title PDF states it reflects statutes as of July 1, 2026",
    reviewStatus: "approved",
    text: `Wyo. Stat. sec. 7-13-402 General powers and duties of board; eligibility for parole; immunity.

(a) The board may grant parole to a person imprisoned under sentence, except a sentence of life imprisonment without parole or a life sentence, if the person has served the minimum term pronounced by the trial court less good time, if any, granted under rules under Wyo. Stat. sec. 7-13-420.

(c) In granting parole, the board shall fix terms and conditions it deems proper to govern the conduct of the parolee while parole is in effect. Conditions may be special to the case, prescribed by general rules and regulations of the board, or both.

(d) A person granted parole shall not be released until signing an agreement to comply with the terms and conditions of release and to abide by Wyoming law.`,
  },
  {
    id: "wy-stat-7-13-408-supervision-revocation-hearings",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "WY",
    topicIds: ["supervision"],
    citation: "Wyo. Stat. sec. 7-13-408",
    title: "Probation, parole and conditional release revocation hearing procedures",
    officialUrl: "https://wyoleg.gov/statutes/compress/title07.pdf",
    sourceName: "Wyoming Legislature",
    currentAsOf: "2026-07-01",
    currentAsOfLabel:
      "Official Wyoming title PDF states it reflects statutes as of July 1, 2026",
    reviewStatus: "approved",
    text: `Wyo. Stat. sec. 7-13-408 Probation, parole and conditional release administrative jail or adult community correction program sanction and revocation hearing procedures.

(a) The probation and parole agent shall notify the department and board or appropriate court if consideration should be given to retaking or reincarcerating a supervised person who violated a condition of probation, parole or other conditional release and is subject to revocation. Before notification, a hearing shall be held within a reasonable time unless waived, subject to listed exceptions.

Compliance violations not leading to retaking or reincarceration shall be sanctioned under Wyo. Stat. secs. 7-13-1801 and 7-13-1802.

(c) At a hearing under this section, the probationer, parolee or conditional releasee has reasonable written notice of the allegations, may consult with persons whose assistance is reasonably desired, has the right to confront and examine persons making allegations unless the hearing officer finds substantial danger of harm, and may admit, deny or explain the alleged violation and present proof.`,
  },
  {
    id: "al-code-17-3-30-elector-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AL",
    topicIds: ["voting"],
    citation: "Ala. Code sec. 17-3-30",
    title: "Qualifications of electors generally",
    officialUrl: "https://alison.legislature.state.al.us/code-of-alabama/1975/17-3-30",
    sourceName: "Alabama Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as queried from ALISON on June 27, 2026",
    reviewStatus: "approved",
    text: `Ala. Code sec. 17-3-30 Qualifications of electors generally.

Any person possessing the qualifications of an elector set out in Article 8 of the Constitution of Alabama of 1901, as modified by federal law, and not laboring under any disqualification listed therein, shall be an elector and shall be entitled to register and vote at any election by the people.`,
  },
  {
    id: "al-code-17-3-30-1-felony-moral-turpitude-voting",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AL",
    topicIds: ["voting"],
    citation: "Ala. Code sec. 17-3-30.1",
    title: "Disqualification of electors for felonies involving moral turpitude",
    officialUrl: "https://alison.legislature.state.al.us/code-of-alabama/1975/17-3-30.1",
    sourceName: "Alabama Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as queried from ALISON on June 27, 2026",
    reviewStatus: "approved",
    text: `Ala. Code sec. 17-3-30.1 Disqualification of electors for felonies involving moral turpitude.

This section is known as the Felony Voter Disqualification Act. It states that Alabama citizens lose the right to vote when convicted of a crime only if the conviction was for a felony involving moral turpitude.

The section provides a statutory list of felonies that involve moral turpitude for voter-disqualification purposes. Use the official section text for the complete current list before answering whether a specific conviction disqualifies a person from voting.`,
  },
  {
    id: "al-code-15-22-36-1-certificate-vote-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AL",
    topicIds: ["voting"],
    citation: "Ala. Code sec. 15-22-36.1",
    title: "Certificate of eligibility to register to vote",
    officialUrl: "https://alison.legislature.state.al.us/code-of-alabama/1975/15-22-36.1",
    sourceName: "Alabama Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as queried from ALISON on June 27, 2026",
    reviewStatus: "approved",
    text: `Ala. Code sec. 15-22-36.1 Certificate of eligibility to register to vote.

(a) A person may apply to the Board of Pardons and Paroles for a Certificate of Eligibility to Register to Vote if statutory requirements are met, including that the person lost voting rights because of a state or federal conviction in a case other than listed excluded cases, has no pending felony charges, and has paid all fines, court costs, fees and victim restitution ordered by the sentencing court.

Use this section with Ala. Code sec. 17-3-30.1 when explaining Alabama voting-rights restoration after a disqualifying felony.`,
  },
  {
    id: "al-code-15-27-1-misdemeanor-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AL",
    topicIds: ["expungement"],
    citation: "Ala. Code sec. 15-27-1",
    title: "Petition to expunge misdemeanor, violation, traffic, or municipal records",
    officialUrl: "https://alison.legislature.state.al.us/code-of-alabama/1975/15-27-1",
    sourceName: "Alabama Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as queried from ALISON on June 27, 2026",
    reviewStatus: "approved",
    text: `Ala. Code sec. 15-27-1 Petition to expunge records for misdemeanor offense, violation, traffic violation, or municipal ordinance violation.

(a) A person charged with a misdemeanor offense, violation, traffic violation, or municipal ordinance violation may file a petition in the criminal division of the circuit court in the county where charges were filed to expunge records relating to the charge in listed circumstances.

Those circumstances include dismissal with prejudice after more than 90 days, no bill by a grand jury after more than 90 days, a not guilty finding after more than 90 days, dismissal without prejudice after more than one year when the charge has not been refiled and the person has no other pending charges, and completion of listed diversion, drug court, mental health court, veterans court, or approved deferred prosecution programs.`,
  },
  {
    id: "al-code-15-27-2-felony-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AL",
    topicIds: ["expungement"],
    citation: "Ala. Code sec. 15-27-2",
    title: "Petition to expunge felony records",
    officialUrl: "https://alison.legislature.state.al.us/code-of-alabama/1975/15-27-2",
    sourceName: "Alabama Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as queried from ALISON on June 27, 2026",
    reviewStatus: "approved",
    text: `Ala. Code sec. 15-27-2 Petition to expunge records for felony offense.

(a) A person charged with a felony may file a petition in the criminal division of the circuit court in the county where charges were filed to expunge records relating to the charge in listed circumstances.

Those circumstances include dismissal with prejudice after more than 90 days, no bill by a grand jury after more than 90 days, a not guilty finding after more than 90 days, dismissal without prejudice after more than five years when the charge has not been refiled and the person has no felony or misdemeanor conviction, violation, traffic violation, or municipal ordinance violation during the previous five years, and completion of listed diversion, drug court, mental health court, veterans court, or approved deferred prosecution programs.`,
  },
  {
    id: "al-code-15-27-5-expungement-hearing-ruling",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AL",
    topicIds: ["expungement"],
    citation: "Ala. Code sec. 15-27-5",
    title: "Expungement objections, hearing, and ruling",
    officialUrl: "https://alison.legislature.state.al.us/code-of-alabama/1975/15-27-5",
    sourceName: "Alabama Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as queried from ALISON on June 27, 2026",
    reviewStatus: "approved",
    text: `Ala. Code sec. 15-27-5 Objections; hearing; ruling.

If the prosecuting authority or victim objects to an expungement petition, the court shall set a hearing no sooner than 30 days from the filing of the objection and notify the prosecuting authority, victim, and petitioner.

If no objection is filed, the court may set the matter for hearing or rule on the petition without a hearing. The court must consider statutory factors when ruling on an expungement petition.`,
  },
  {
    id: "al-code-41-9a-2-occupational-license-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AL",
    topicIds: ["employment"],
    citation: "Ala. Code sec. 41-9A-2",
    title: "Improper grounds for denial of occupational license",
    officialUrl: "https://alison.legislature.state.al.us/code-of-alabama/1975/41-9A-2",
    sourceName: "Alabama Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as queried from ALISON on June 27, 2026",
    reviewStatus: "approved",
    text: `Ala. Code sec. 41-9A-2 Improper grounds for denial of application for license; standards and factors for determinations.

(a) An occupational licensing board shall not deny a license application because of a criminal conviction that is not directly related to the duties and responsibilities of the profession or occupation, a conviction that has been pardoned, sealed, expunged, otherwise nullified or made confidential, an arrest that did not result in conviction and has no pending charges, or lack of good moral character or a similarly vague or generic standard.

(b) When deciding whether a conviction is directly related to the profession or occupation, the board must consider statutory factors. Use the official section text for the complete factor list before giving detailed licensing advice.`,
  },
  {
    id: "al-code-41-9a-2-1-preapplication-license-determination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AL",
    topicIds: ["employment"],
    citation: "Ala. Code sec. 41-9A-2.1",
    title: "Determination whether conviction disqualifies individual from licensure",
    officialUrl: "https://alison.legislature.state.al.us/code-of-alabama/1975/41-9A-2.1",
    sourceName: "Alabama Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as queried from ALISON on June 27, 2026",
    reviewStatus: "approved",
    text: `Ala. Code sec. 41-9A-2.1 Determination whether criminal conviction disqualifies an individual from licensure.

(a) An individual convicted of a criminal offense may request in writing that an occupational licensing board determine whether the conviction disqualifies the individual from obtaining a license from the board.

(b) Not later than 30 days after receiving the request, the board shall make a determination based on Ala. Code sec. 41-9A-2 factors and notify the individual in writing. If the board determines the conviction is disqualifying, it must provide reasons in writing.`,
  },
  {
    id: "al-code-24-8-4-unlawful-housing-practices",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AL",
    topicIds: ["housing"],
    citation: "Ala. Code sec. 24-8-4",
    title: "Unlawful discriminatory housing practices",
    officialUrl: "https://alison.legislature.state.al.us/code-of-alabama/1975/24-8-4",
    sourceName: "Alabama Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as queried from ALISON on June 27, 2026",
    reviewStatus: "approved",
    text: `Ala. Code sec. 24-8-4 Unlawful discriminatory housing practices.

It is unlawful to refuse to sell or rent after a bona fide offer, refuse to negotiate for sale or rental, or otherwise make unavailable or deny a dwelling because of race, color, religion, sex, familial status, or national origin.

It is also unlawful to discriminate in the terms, conditions, or privileges of sale or rental of a dwelling, or in the provision of services or facilities connected with it, because of race, color, religion, sex, familial status, or national origin.

This section is a fair-housing protection source. It does not itself make criminal history a protected class.`,
  },
  {
    id: "al-code-35-9a-421-rental-noncompliance-application",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AL",
    topicIds: ["housing"],
    citation: "Ala. Code sec. 35-9A-421",
    title: "Noncompliance with rental agreement; failure to pay rent",
    officialUrl: "https://alison.legislature.state.al.us/code-of-alabama/1975/35-9A-421",
    sourceName: "Alabama Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as queried from ALISON on June 27, 2026",
    reviewStatus: "approved",
    text: `Ala. Code sec. 35-9A-421 Noncompliance with rental agreement; failure to pay rent.

(a) Except as provided in the chapter, if there is a material noncompliance by the tenant with the rental agreement, an intentional misrepresentation of a material fact in a rental agreement or application, or noncompliance materially affecting health and safety, the landlord may deliver written notice to terminate the lease specifying the breach and a termination date not less than seven business days after receipt of the notice.

Use this section as an Alabama landlord-tenant hook for rental-application misrepresentation and lease noncompliance. It is not a general criminal-record screening rule.`,
  },
  {
    id: "al-code-15-5-30-stop-and-question",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AL",
    topicIds: ["police"],
    citation: "Ala. Code sec. 15-5-30",
    title: "Authority of peace officer to stop and question",
    officialUrl: "https://alison.legislature.state.al.us/code-of-alabama/1975/15-5-30",
    sourceName: "Alabama Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as queried from ALISON on June 27, 2026",
    reviewStatus: "approved",
    text: `Ala. Code sec. 15-5-30 Authority of peace officer to stop and question.

A sheriff, deputy, constable, municipal marshal, deputy marshal, police officer, highway patrolman or state trooper may stop any person abroad in a public place whom the officer reasonably suspects is committing, has committed, or is about to commit a felony or other public offense and may demand the person's name, address, and an explanation of the person's actions.`,
  },
  {
    id: "al-code-15-5-31-frisk-dangerous-weapon",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AL",
    topicIds: ["police"],
    citation: "Ala. Code sec. 15-5-31",
    title: "Search for dangerous weapon after stop",
    officialUrl: "https://alison.legislature.state.al.us/code-of-alabama/1975/15-5-31",
    sourceName: "Alabama Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as queried from ALISON on June 27, 2026",
    reviewStatus: "approved",
    text: `Ala. Code sec. 15-5-31 Search for dangerous weapon; procedure if weapon or other thing found.

When an officer has stopped a person for questioning under this article and reasonably suspects that the officer is in danger of life or limb, the officer may search the person for a dangerous weapon. If the officer finds a weapon or other thing that may be used to commit a public offense, the officer may take and keep it until completion of questioning, at which time it shall be returned if lawfully possessed or arrested.`,
  },
  {
    id: "al-code-13a-11-30-eavesdrop-definition",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AL",
    topicIds: ["police"],
    citation: "Ala. Code sec. 13A-11-30",
    title: "Definitions for criminal eavesdropping",
    officialUrl: "https://alison.legislature.state.al.us/code-of-alabama/1975/13A-11-30",
    sourceName: "Alabama Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as queried from ALISON on June 27, 2026",
    reviewStatus: "approved",
    text: `Ala. Code sec. 13A-11-30 Definitions.

For Alabama criminal eavesdropping law, "eavesdrop" means to overhear, record, amplify or transmit any part of the private communication of others without the consent of at least one of the persons engaged in the communication, except as otherwise provided by law.

"Private place" means a place where one may reasonably expect to be safe from casual or hostile intrusion or surveillance, but does not include a place to which the public or a substantial group of the public has access.`,
  },
  {
    id: "al-code-13a-11-31-criminal-eavesdropping",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AL",
    topicIds: ["police"],
    citation: "Ala. Code sec. 13A-11-31",
    title: "Criminal eavesdropping",
    officialUrl: "https://alison.legislature.state.al.us/code-of-alabama/1975/13A-11-31",
    sourceName: "Alabama Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as queried from ALISON on June 27, 2026",
    reviewStatus: "approved",
    text: `Ala. Code sec. 13A-11-31 Criminal eavesdropping.

(a) A person commits criminal eavesdropping if the person intentionally uses any device to eavesdrop, whether or not the person is present at the time.

(b) Criminal eavesdropping is a Class A misdemeanor.

Use this with Ala. Code sec. 13A-11-30 for Alabama recording/consent analysis.`,
  },
  {
    id: "al-code-15-22-26-parole-release-standards",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AL",
    topicIds: ["supervision"],
    citation: "Ala. Code sec. 15-22-26",
    title: "Standards for release of prisoners on parole",
    officialUrl: "https://alison.legislature.state.al.us/code-of-alabama/1975/15-22-26",
    sourceName: "Alabama Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Current version queried from ALISON on June 27, 2026; official page also shows Act 2026-372 amendment effective October 1, 2026",
    reviewStatus: "approved",
    text: `Ala. Code sec. 15-22-26 Standards for release of prisoners on parole.

Current version before the October 1, 2026 amendment: no prisoner shall be released on parole merely as a reward for good conduct or efficient performance of prison duties, but only if the Board of Pardons and Paroles is of the opinion that the prisoner meets criteria and guidelines established by the board to determine fitness for parole and ensure public safety.

The official ALISON page also shows an amended version effective October 1, 2026. Before giving an answer after that date, use the effective version from the official section page.`,
  },
  {
    id: "al-code-15-22-28-parole-investigation-consideration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AL",
    topicIds: ["supervision"],
    citation: "Ala. Code sec. 15-22-28",
    title: "Investigation for parole and parole consideration date",
    officialUrl: "https://alison.legislature.state.al.us/code-of-alabama/1975/15-22-28",
    sourceName: "Alabama Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as queried from ALISON on June 27, 2026",
    reviewStatus: "approved",
    text: `Ala. Code sec. 15-22-28 Investigation for parole; temporary leave; parole restrictions; parole consideration date.

(a) The Board of Pardons and Paroles has a duty, on its own initiative, to investigate prisoners confined in Alabama jails and prisons, using a validated risk and needs assessment as defined in Ala. Code sec. 12-25-32, to determine the feasibility of releasing prisoners on parole and effecting their reclamation.

Reinvestigations shall be made from time to time as the board determines or as the Department of Corrections may request.`,
  },
  {
    id: "al-code-15-22-54-probation-period-violations-sanctions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AL",
    topicIds: ["supervision"],
    citation: "Ala. Code sec. 15-22-54",
    title: "Period of probation; violations; sanctions",
    officialUrl: "https://alison.legislature.state.al.us/code-of-alabama/1975/15-22-54",
    sourceName: "Alabama Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Current as queried from ALISON on June 27, 2026",
    reviewStatus: "approved",
    text: `Ala. Code sec. 15-22-54 Period of probation; termination of probation; violation of terms of probation; sanctions.

(a) The probation period or suspension of sentence is determined by the court and may not be waived by the defendant. The period may be continued, extended, or terminated by the court. Except as provided for ignition interlock requirements, the maximum probation period for a misdemeanor may not exceed two years and the maximum probation period for a felony may not exceed five years.

This section also governs probation violations and sanctions. Use the official section text for detailed revocation or sanction questions.`,
  },
  {
    id: "ak-stat-15-05-010-voter-qualification",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AK",
    topicIds: ["voting"],
    citation: "Alaska Stat. sec. 15.05.010",
    title: "Voter qualification",
    officialUrl:
      "https://www.akleg.gov/basis/statutes.asp?media=print&secStart=15.05.010&secEnd=15.05.010",
    sourceName: "Alaska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Alaska Statutes 2024 page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Alaska Stat. sec. 15.05.010 Voter qualification.

A person may vote at any election if the person is a United States citizen, is 18 years of age or older, has been a resident of Alaska and of the house district in which the person seeks to vote for at least 30 days just before the election, has registered before the election as required under AS 15.07, and is not registered to vote in another jurisdiction.`,
  },
  {
    id: "ak-stat-15-05-030-loss-restoration-voting-rights",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AK",
    topicIds: ["voting"],
    citation: "Alaska Stat. sec. 15.05.030",
    title: "Loss and restoration of voting rights",
    officialUrl:
      "https://www.akleg.gov/basis/statutes.asp?media=print&secStart=15.05.030&secEnd=15.05.030",
    sourceName: "Alaska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Alaska Statutes 2024 page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Alaska Stat. sec. 15.05.030 Loss and restoration of voting rights.

(a) A person convicted of a crime that constitutes a felony involving moral turpitude under state or federal law may not vote in a state, federal, or municipal election from the date of conviction through the date of the person's unconditional discharge. Upon unconditional discharge, the person may register under AS 15.07.

(b) The commissioner of corrections shall establish procedures by which a person unconditionally discharged is advised of voter registration requirements and procedures.`,
  },
  {
    id: "ak-stat-12-62-180-sealing-criminal-justice-information",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AK",
    topicIds: ["expungement"],
    citation: "Alaska Stat. sec. 12.62.180",
    title: "Sealing of criminal justice information",
    officialUrl:
      "https://www.akleg.gov/basis/statutes.asp?media=print&secStart=12.62.180&secEnd=12.62.180",
    sourceName: "Alaska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Alaska Statutes 2024 page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Alaska Stat. sec. 12.62.180 Sealing of criminal justice information.

(a) A criminal justice agency may seal only the information that the agency is responsible for maintaining.

(b) A person may submit a written request to the head of the agency responsible for maintaining past conviction or current offender information, asking the agency to seal information about the person that, beyond a reasonable doubt, resulted from mistaken identity or false accusation. The decision of the agency head is the final administrative decision on the request.

(c) The person may appeal an adverse agency decision to court under applicable rules for administrative appeals. The appellant bears the burden of showing that the agency decision was clearly mistaken.`,
  },
  {
    id: "ak-stat-12-55-085-suspended-imposition-set-aside",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AK",
    topicIds: ["expungement", "supervision"],
    citation: "Alaska Stat. sec. 12.55.085",
    title: "Suspending imposition of sentence",
    officialUrl:
      "https://www.akleg.gov/basis/statutes.asp?media=print&secStart=12.55.085&secEnd=12.55.085",
    sourceName: "Alaska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Alaska Statutes 2024 page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Alaska Stat. sec. 12.55.085 Suspending imposition of sentence.

(a) If circumstances in mitigation or the ends of justice support it, the court may suspend imposition of sentence, continue the suspension for a permitted period, set terms and conditions, and place the person on probation under supervision during the suspension.

This section is Alaska's suspended-imposition-of-sentence framework. It can matter for record consequences because successful completion may lead to set-aside treatment under the statute, but eligibility and exclusions must be checked in the official section text before giving a detailed answer.`,
  },
  {
    id: "ak-stat-08-01-077-conviction-disciplinary-action",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AK",
    topicIds: ["employment"],
    citation: "Alaska Stat. sec. 08.01.077",
    title: "Conviction as grounds for disciplinary action",
    officialUrl:
      "https://www.akleg.gov/basis/statutes.asp?media=print&secStart=08.01.077&secEnd=08.01.077",
    sourceName: "Alaska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Alaska Statutes 2024 page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Alaska Stat. sec. 08.01.077 Conviction as grounds for disciplinary action.

Notwithstanding any other provision of Title 8, the conviction under AS 47.24.010 of a person licensed, certified, or regulated by the department or a board under Title 8 may be considered by the department or board as grounds for disciplinary proceedings or sanctions.`,
  },
  {
    id: "ak-stat-08-01-075-board-disciplinary-powers",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AK",
    topicIds: ["employment"],
    citation: "Alaska Stat. sec. 08.01.075",
    title: "Disciplinary powers of boards",
    officialUrl:
      "https://www.akleg.gov/basis/statutes.asp?media=print&secStart=08.01.075&secEnd=08.01.075",
    sourceName: "Alaska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Alaska Statutes 2024 page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Alaska Stat. sec. 08.01.075 Disciplinary powers of boards.

(a) A board may take disciplinary actions singly or in combination, including permanent revocation of a license, suspension for a specified period, censure or reprimand, limitations or conditions on professional practice, peer review, remedial professional education, probation requiring regular reporting to the board, and a civil fine not to exceed $5,000.

Use this with conviction-specific licensing sections to explain the range of occupational licensing sanctions; it is not by itself a criminal-record disqualification rule.`,
  },
  {
    id: "ak-stat-18-80-240-unlawful-real-property-practices",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AK",
    topicIds: ["housing"],
    citation: "Alaska Stat. sec. 18.80.240",
    title: "Unlawful practices in the sale or rental of real property",
    officialUrl:
      "https://www.akleg.gov/basis/statutes.asp?media=print&secStart=18.80.240&secEnd=18.80.240",
    sourceName: "Alaska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Alaska Statutes 2024 page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Alaska Stat. sec. 18.80.240 Unlawful practices in the sale or rental of real property.

It is unlawful for an owner, lessee, manager, or other person with the right to sell, lease, or rent real property to refuse to sell, lease, or rent because of sex, marital status, changes in marital status, pregnancy, race, religion, physical or mental disability, color, or national origin.

It is also unlawful to discriminate in a term, condition, or privilege relating to the use, sale, lease, or rental of real property based on those protected classes.

This is a fair-housing protection source. It does not itself make criminal history a protected class.`,
  },
  {
    id: "ak-stat-34-03-220-rental-noncompliance-illegal-activity",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AK",
    topicIds: ["housing"],
    citation: "Alaska Stat. sec. 34.03.220",
    title: "Noncompliance with rental agreement; failure to pay rent",
    officialUrl:
      "https://www.akleg.gov/basis/statutes.asp?media=print&secStart=34.03.220&secEnd=34.03.220",
    sourceName: "Alaska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Alaska Statutes 2024 page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Alaska Stat. sec. 34.03.220 Noncompliance with rental agreement; failure to pay rent.

(a) Except as provided in the chapter, if the tenant or someone in the tenant's control deliberately inflicts substantial damage to the premises or the tenant engages in or permits another to engage in prostitution or another illegal activity at the premises, the landlord may deliver a written notice to quit specifying the breach and a termination date not less than 24 hours or more than five days after service of the notice.

Use this as an Alaska landlord-tenant authority for illegal activity on premises and lease noncompliance. It is not a general criminal-record screening statute.`,
  },
  {
    id: "ak-stat-12-25-180-citation-identity-arrest",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AK",
    topicIds: ["police"],
    citation: "Alaska Stat. sec. 12.25.180",
    title: "When peace officer may issue citation or take person before the court",
    officialUrl:
      "https://www.akleg.gov/basis/statutes.asp?media=print&secStart=12.25.180&secEnd=12.25.180",
    sourceName: "Alaska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Alaska Statutes 2024 page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Alaska Stat. sec. 12.25.180 When peace officer may issue citation or take person before the court.

(a) When a peace officer stops or contacts a person for commission of a class C felony, misdemeanor, or municipal ordinance violation, the officer may issue a citation instead of taking the person before a judge or magistrate, except the officer may arrest if the person does not furnish satisfactory evidence of identity, the officer reasonably believes the person is a danger to others, the offense involves violence or harm, the person asks to be taken before a judge or magistrate, or the officer has probable cause to believe the person committed a domestic violence crime.

Use this as a citation/arrest identity source, not as a broad stop-and-identify rule for every encounter.`,
  },
  {
    id: "ak-stat-42-20-310-eavesdropping-one-party-consent",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AK",
    topicIds: ["police"],
    citation: "Alaska Stat. sec. 42.20.310",
    title: "Eavesdropping",
    officialUrl:
      "https://www.akleg.gov/basis/statutes.asp?media=print&secStart=42.20.310&secEnd=42.20.310",
    sourceName: "Alaska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Alaska Statutes 2024 page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Alaska Stat. sec. 42.20.310 Eavesdropping.

(a) A person may not use an eavesdropping device to hear or record all or part of an oral conversation without the consent of a party to the conversation, use or divulge information known or reasonably known to have been obtained through illegal use of an eavesdropping device, publish contents heard through illegal eavesdropping, or divulge or publish contents after knowing or having reason to know they were obtained through illegal eavesdropping.

This is Alaska's recording/eavesdropping consent hook. The statute requires consent of a party to the conversation.`,
  },
  {
    id: "ak-stat-33-16-090-discretionary-parole-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AK",
    topicIds: ["supervision"],
    citation: "Alaska Stat. sec. 33.16.090",
    title: "Eligibility for discretionary parole and minimum terms to be served",
    officialUrl:
      "https://www.akleg.gov/basis/statutes.asp?media=print&secStart=33.16.090&secEnd=33.16.090",
    sourceName: "Alaska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Alaska Statutes 2024 page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Alaska Stat. sec. 33.16.090 Eligibility for discretionary parole and minimum terms to be served.

(a) A prisoner sentenced to an active term of imprisonment of at least 181 days may, in the discretion of the parole board, be released on discretionary parole if the prisoner has served the required time and is not otherwise excluded by statute or court order.

This section contains detailed eligibility exclusions and minimum-time rules. Use the official section text for any specific parole eligibility answer.`,
  },
  {
    id: "ak-stat-33-16-100-granting-discretionary-parole",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AK",
    topicIds: ["supervision"],
    citation: "Alaska Stat. sec. 33.16.100",
    title: "Granting of discretionary parole",
    officialUrl:
      "https://www.akleg.gov/basis/statutes.asp?media=print&secStart=33.16.100&secEnd=33.16.100",
    sourceName: "Alaska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Alaska Statutes 2024 page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Alaska Stat. sec. 33.16.100 Granting of discretionary parole.

(a) The parole board may authorize release of an otherwise eligible prisoner on discretionary parole if it determines a reasonable probability exists that the prisoner will live and remain at liberty without violating laws or board-imposed conditions, rehabilitation and reintegration will be furthered by release, the prisoner will not pose a threat of harm to the public, and release would not diminish the seriousness of the crime.`,
  },
  {
    id: "ak-stat-12-55-100-conditions-of-probation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AK",
    topicIds: ["supervision"],
    citation: "Alaska Stat. sec. 12.55.100",
    title: "Conditions of probation",
    officialUrl:
      "https://www.akleg.gov/basis/statutes.asp?media=print&secStart=12.55.100&secEnd=12.55.100",
    sourceName: "Alaska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Alaska Statutes 2024 page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Alaska Stat. sec. 12.55.100 Conditions of probation.

(a) While on probation and among the conditions of probation, the defendant shall be required to obey all state, federal, and local laws or ordinances and any court orders applicable to the probationer.

The court may also impose other listed probation conditions, including payment of fines, restitution or reparation to aggrieved parties, and other terms authorized in the statute. Use the official section text for the complete list of possible conditions.`,
  },
  {
    id: "az-ars-16-101-voter-qualification-felony",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AZ",
    topicIds: ["voting"],
    citation: "Ariz. Rev. Stat. sec. 16-101",
    title: "Qualifications of registrant",
    officialUrl: "https://www.azleg.gov/ars/16/00101.htm",
    sourceName: "Arizona Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Arizona Revised Statutes page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Ariz. Rev. Stat. sec. 16-101 Qualifications of registrant.

A resident of Arizona is qualified to register to vote if the resident is a United States citizen with satisfactory evidence of citizenship, will be 18 years old or older by the next regular general election, has been a resident of Arizona 29 days before the election, can write the resident's name or make the resident's mark unless prevented by physical disability, has not been convicted of treason or a felony unless restored to civil rights, and has not been adjudicated incapacitated.

Use this with Ariz. Rev. Stat. secs. 13-904, 13-907 and 13-908 for felony voting-rights restoration answers.`,
  },
  {
    id: "az-ars-13-904-civil-rights-suspension-employment",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AZ",
    topicIds: ["voting", "employment"],
    citation: "Ariz. Rev. Stat. sec. 13-904",
    title: "Suspension of civil rights and occupational disabilities",
    officialUrl: "https://www.azleg.gov/ars/13/00904.htm",
    sourceName: "Arizona Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Arizona Revised Statutes page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Ariz. Rev. Stat. sec. 13-904 Suspension of civil rights and occupational disabilities.

A felony conviction suspends listed civil rights, including the right to vote, the right to hold public office of trust or profit, the right to serve as a juror, certain civil rights during imprisonment that are reasonably necessary for institutional security or public protection, and the right to possess a firearm.

The statute also provides that a person may not be disqualified from employment by Arizona, its agencies or political subdivisions solely because of a prior felony or misdemeanor conviction. Public employment may be denied because of a prior conviction if the offense has a reasonable relationship to the functions of the employment sought. This public-employment provision does not apply to law enforcement or probation agencies.`,
  },
  {
    id: "az-ars-13-907-automatic-civil-rights-restoration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AZ",
    topicIds: ["voting"],
    citation: "Ariz. Rev. Stat. sec. 13-907",
    title: "Automatic restoration of civil rights for first offenders",
    officialUrl: "https://www.azleg.gov/ars/13/00907.htm",
    sourceName: "Arizona Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Arizona Revised Statutes page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Ariz. Rev. Stat. sec. 13-907 Automatic restoration of civil rights for first offenders; firearm rights.

On completion of probation for an Arizona offense or absolute discharge from imprisonment, a person who has not previously been convicted of a felony is automatically restored any civil rights lost or suspended because of the conviction if the person pays all victim restitution imposed.

For an out-of-state or federal felony, a first offender may be eligible for automatic restoration after completion of probation or absolute discharge and payment of victim restitution, but must file an application under Ariz. Rev. Stat. sec. 13-908. Firearm rights have separate exclusions for dangerous and serious offenses.`,
  },
  {
    id: "az-ars-13-908-civil-rights-restoration-application",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AZ",
    topicIds: ["voting"],
    citation: "Ariz. Rev. Stat. sec. 13-908",
    title: "Restoration of civil rights by application",
    officialUrl: "https://www.azleg.gov/ars/13/00908.htm",
    sourceName: "Arizona Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Arizona Revised Statutes page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Ariz. Rev. Stat. sec. 13-908 Restoration of civil rights; application; firearm rights.

On final discharge, a person who has previously been convicted of a felony or who has not paid all victim restitution imposed may apply to the superior court to have civil rights restored. Restoration under this section is discretionary with the judicial officer.

A person whose civil rights were lost because of a felony conviction in another state or in federal court may file in the Arizona county where the person now resides after probation is completed or after absolute discharge from imprisonment. "Final discharge" means completion of probation or receipt of an absolute discharge from the state department of corrections, another state prison or federal prison.`,
  },
  {
    id: "az-ars-13-905-set-aside-second-chance",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AZ",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Ariz. Rev. Stat. sec. 13-905",
    title: "Setting aside judgment and certificate of second chance",
    officialUrl: "https://www.azleg.gov/ars/13/00905.htm",
    sourceName: "Arizona Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Arizona Revised Statutes page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Ariz. Rev. Stat. sec. 13-905 Setting aside judgment of convicted person on discharge; certificate of second chance.

Except for excluded offenses, a person convicted of a criminal offense may apply to the court to have the judgment of guilt set aside after fulfilling the conditions of probation or sentence and discharge by the court. If granted, the court sets aside the judgment of guilt, dismisses the charging document and orders release from penalties and disabilities resulting from the conviction, subject to statutory exceptions.

A set-aside conviction may still be used as a conviction where admissible, as an element of an offense, as a prior conviction, and in later prosecutions. The department of public safety annotates the criminal history but does not remove or redact the record.

The court's order must include a certificate of second chance for eligible misdemeanor convictions and for eligible class 4, 5 or 6 felonies after two years, or class 2 or 3 felonies after five years, measured from fulfillment of probation or sentence. The certificate can release occupational licensing barriers under title 32 and provides employer and housing liability protections, but it is not a recommendation or sponsorship.`,
  },
  {
    id: "az-ars-13-911-sealing-case-records",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AZ",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Ariz. Rev. Stat. sec. 13-911",
    title: "Sealing arrest, conviction and sentencing records",
    officialUrl: "https://www.azleg.gov/ars/13/00911.htm",
    sourceName: "Arizona Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Arizona Revised Statutes page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Ariz. Rev. Stat. sec. 13-911 Sealing of arrest, conviction and sentencing records.

A person may petition to seal case records related to a criminal offense if the person was convicted and completed all terms and conditions of sentence, including monetary obligations and restitution; was charged and the charge was dismissed or resulted in a not guilty verdict; or was arrested and no charges were filed.

For eligible convictions, the person may petition after completing the nonmonetary terms and conditions of sentence and after the required waiting period: ten years for a class 2 or 3 felony, five years for a class 4, 5 or 6 felony, three years for a class 1 misdemeanor, and two years for a class 2 or 3 misdemeanor.

If records are sealed, the person may state in most instances that the person has never been arrested for, charged with or convicted of the sealed offense, including on employment, housing, financial aid or loan applications, subject to listed exceptions. The section also lists offenses that are not eligible for sealing and entities that may access sealed records.`,
  },
  {
    id: "az-ars-33-1368-rental-application-criminal-records",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AZ",
    topicIds: ["housing"],
    citation: "Ariz. Rev. Stat. sec. 33-1368",
    title: "Tenant noncompliance and material falsification",
    officialUrl: "https://www.azleg.gov/ars/33/01368.htm",
    sourceName: "Arizona Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Arizona Revised Statutes page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Ariz. Rev. Stat. sec. 33-1368 Noncompliance with rental agreement by tenant.

If there is a material noncompliance by the tenant with the rental agreement, including material falsification of information on the rental application, the landlord may give written notice of breach and termination. Material falsification includes untrue or misleading information about the tenant's criminal records, prior eviction record and current criminal activity, and material falsification of that information is not curable under this section.

The section also allows immediate termination for a material and irreparable breach occurring on the premises, including listed serious criminal conduct or a breach that jeopardizes the health, safety and welfare of the landlord, the landlord's agent or another tenant, or involves imminent or actual serious property damage.`,
  },
  {
    id: "az-ars-41-1093-04-occupational-license-criminal-record-review",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AZ",
    topicIds: ["employment"],
    citation: "Ariz. Rev. Stat. sec. 41-1093.04",
    title: "Occupational licensing criminal-record petition",
    officialUrl: "https://www.azleg.gov/ars/41/01093-04.htm",
    sourceName: "Arizona Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Arizona Revised Statutes page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Ariz. Rev. Stat. sec. 41-1093.04 Occupational license, permit or certificate criminal-record review.

A person with a criminal record may petition an agency at any time, including before completing education, experience, examination or fee requirements, for a determination of whether the person's criminal record disqualifies the person from a license, permit, certificate or other state recognition.

The agency may determine that the record disqualifies the person only if the state has an important public-safety interest superior to the person's right and statutory conviction criteria are met. The agency must find by clear and convincing evidence that the specific offense substantially relates to the occupation or approval would pose a relevant public-safety threat, and that the person is more likely to reoffend by having the license than without it.

The agency may not negatively consider nonconviction information, a conviction that has been sealed, dismissed, expunged or pardoned, juvenile adjudication, a nonviolent misdemeanor, or fingerprint-clearance-card eligibility without a good cause exception, subject to listed exceptions.`,
  },
  {
    id: "az-ars-12-558-03-employer-liability-ex-offenders",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AZ",
    topicIds: ["employment"],
    citation: "Ariz. Rev. Stat. sec. 12-558.03",
    title: "Limited liability for hiring or contracting with ex-offenders",
    officialUrl: "https://www.azleg.gov/ars/12/00558-03.htm",
    sourceName: "Arizona Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Arizona Revised Statutes page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Ariz. Rev. Stat. sec. 12-558.03 Limited liability; employer hiring or contracting with ex-offenders.

An employer is not liable for hiring an employee or contracting with an independent contractor who has previously been convicted of a criminal offense. In a negligent hiring action based on another theory, the prior conviction generally may not be introduced into evidence.

The statute preserves causes of action for inadequate supervision in limited circumstances and lists exclusions, including certain fiduciary-property, attorney misappropriation, and law-enforcement or security excessive-force situations. "Criminal offense" excludes violent offenses and sexual offenses for purposes of this section.`,
  },
  {
    id: "az-ars-13-2412-refusing-truthful-name-detention",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AZ",
    topicIds: ["police"],
    citation: "Ariz. Rev. Stat. sec. 13-2412",
    title: "Refusing to provide truthful name when lawfully detained",
    officialUrl: "https://www.azleg.gov/ars/13/02412.htm",
    sourceName: "Arizona Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Arizona Revised Statutes page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Ariz. Rev. Stat. sec. 13-2412 Refusing to provide truthful name when lawfully detained.

After being advised that refusal to answer is unlawful, a person may not fail or refuse to state the person's true full name on request of a peace officer who has lawfully detained the person based on reasonable suspicion that the person has committed, is committing or is about to commit a crime.

A person detained under this section must state the person's true full name, but may not be compelled to answer any other inquiry of a peace officer. Violation is a class 2 misdemeanor.`,
  },
  {
    id: "az-ars-13-3005-interception-one-party-consent",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AZ",
    topicIds: ["police"],
    citation: "Ariz. Rev. Stat. sec. 13-3005",
    title: "Interception of communications",
    officialUrl: "https://www.azleg.gov/ars/13/03005.htm",
    sourceName: "Arizona Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Arizona Revised Statutes page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Ariz. Rev. Stat. sec. 13-3005 Interception of wire, electronic and oral communications.

Except as provided in the chapter, a person commits a class 5 felony by intentionally intercepting a wire or electronic communication to which the person is not a party, or causing another to do so, without the consent of either a sender or receiver.

The section also prohibits intentionally intercepting a conversation or discussion at which the person is not present, or causing another to do so, without the consent of a party to the conversation or discussion. Use this as Arizona's recording/interception consent hook, together with the statutory definitions in Ariz. Rev. Stat. sec. 13-3001.`,
  },
  {
    id: "az-ars-13-901-probation-conditions-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AZ",
    topicIds: ["supervision"],
    citation: "Ariz. Rev. Stat. sec. 13-901",
    title: "Probation",
    officialUrl: "https://www.azleg.gov/ars/13/00901.htm",
    sourceName: "Arizona Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Arizona Revised Statutes page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Ariz. Rev. Stat. sec. 13-901 Probation.

If a person convicted of an offense is eligible for probation, the court may suspend imposition or execution of sentence and place the person on intensive probation supervision, supervised probation or unsupervised probation on required and court-appropriate terms and conditions.

If the court imposes probation, it must require waiver of extradition for probation revocation procedures and must order restitution where a victim has suffered economic loss. The court may issue a warrant, modify or add conditions, or revoke probation if the defendant commits another offense or violates a condition before probation expires or terminates.

The court may terminate probation early after notice and an opportunity to be heard if the ends of justice will be served and the person's conduct warrants it. The statute also addresses reporting requirements and courtesy transfers between counties.`,
  },
  {
    id: "az-ars-13-902-probation-periods",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AZ",
    topicIds: ["supervision"],
    citation: "Ariz. Rev. Stat. sec. 13-902",
    title: "Periods of probation",
    officialUrl: "https://www.azleg.gov/ars/13/00902.htm",
    sourceName: "Arizona Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Arizona Revised Statutes page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Ariz. Rev. Stat. sec. 13-902 Periods of probation.

Unless terminated sooner, probation may continue for seven years for a class 2 felony, five years for a class 3 felony, four years for a class 4 felony, three years for a class 5 or 6 felony, three years for a class 1 misdemeanor, two years for a class 2 misdemeanor and one year for a class 3 misdemeanor.

The section contains special periods for certain driving offenses, possible extensions for unpaid restitution, and longer terms up to life for specified offenses. Use the official section text before giving a specific maximum-term answer.`,
  },
  {
    id: "az-ars-31-411-parole-hearing-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AZ",
    topicIds: ["supervision"],
    citation: "Ariz. Rev. Stat. sec. 31-411",
    title: "Parole or discharge; conditions of parole",
    officialUrl: "https://www.azleg.gov/ars/31/00411.htm",
    sourceName: "Arizona Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Arizona Revised Statutes page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Ariz. Rev. Stat. sec. 31-411 Parole or discharge; conditions of parole.

A prisoner certified as eligible for parole or absolute discharge is given an opportunity to apply for release on parole or absolute discharge and an opportunity to be heard. If parole is granted, the prisoner remains on parole unless the board revokes parole, grants absolute discharge from parole, or the prisoner reaches the individual earned release credit date.

During supervised parole, the board requires a monthly supervision fee unless reduced for inability to pay and may impose appropriate parole conditions, including rehabilitation or counseling and community restitution work. The section also addresses written reasons for denial, victim and official notice, and temporary release near sentence expiration.`,
  },
  {
    id: "az-ars-31-412-parole-release-criteria",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AZ",
    topicIds: ["supervision"],
    citation: "Ariz. Rev. Stat. sec. 31-412",
    title: "Criteria for release on parole",
    officialUrl: "https://www.azleg.gov/ars/31/00412.htm",
    sourceName: "Arizona Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official Arizona Revised Statutes page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Ariz. Rev. Stat. sec. 31-412 Criteria for release on parole.

If a prisoner is certified as eligible for parole, the board of executive clemency shall authorize release on parole if the applicant has reached the earliest parole eligibility date and it appears to the board, in its sole discretion, that there is a substantial probability the applicant will remain at liberty without violating the law and that release is in the best interests of the state.

The applicant then goes on parole in the legal custody and under the control of the state department of corrections until revocation, absolute discharge or the earned release credit date. Restitution is a required condition of parole. The section contains special voting requirements for serious offenses.`,
  },
  {
    id: "ar-code-7-5-201-voter-qualification-felony",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AR",
    topicIds: ["voting"],
    citation: "Ark. Code Ann. sec. 7-5-201",
    title: "Voter qualifications",
    officialUrl: "https://www.arkleg.state.ar.us/ArkansasLaw",
    sourceName: "Arkansas Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Arkansas Code citation identified June 27, 2026; exact official section permalink pending Arkansas adapter",
    reviewStatus: "approved",
    text: `Ark. Code Ann. sec. 7-5-201 Voter qualifications.

Arkansas voter qualification law requires, among other qualifications, that a voter not have been convicted of a felony without the sentence having been discharged or without a pardon. Use this as the primary Arkansas voter-qualification hook for felony voting-rights restoration.

For a plain-English answer, distinguish between a person still serving a felony sentence and a person whose sentence has been discharged or who has been pardoned. Confirm the exact current wording through the Arkansas Code when this record is refreshed.`,
  },
  {
    id: "ar-code-16-90-1405-sealing-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AR",
    topicIds: ["expungement"],
    citation: "Ark. Code Ann. sec. 16-90-1405",
    title: "Comprehensive Criminal Record Sealing Act eligibility",
    officialUrl: "https://www.arkleg.state.ar.us/ArkansasLaw",
    sourceName: "Arkansas Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Arkansas Code citation identified June 27, 2026; exact official section permalink pending Arkansas adapter",
    reviewStatus: "approved",
    text: `Ark. Code Ann. sec. 16-90-1405 Comprehensive Criminal Record Sealing Act eligibility.

Arkansas provides statutory procedures for sealing eligible misdemeanor and felony records after the person satisfies the sentence and any applicable waiting period or offense-specific eligibility limits. The Comprehensive Criminal Record Sealing Act contains exclusions and different treatment by offense type.

Use this as an eligibility gateway only. Before giving a detailed Arkansas sealing answer, verify the specific offense, sentence completion, waiting period, and exclusions in the official Arkansas Code.`,
  },
  {
    id: "ar-code-16-90-1417-effect-of-sealing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AR",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Ark. Code Ann. sec. 16-90-1417",
    title: "Effect of sealing criminal records",
    officialUrl: "https://www.arkleg.state.ar.us/ArkansasLaw",
    sourceName: "Arkansas Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Arkansas Code citation identified June 27, 2026; exact official section permalink pending Arkansas adapter",
    reviewStatus: "approved",
    text: `Ark. Code Ann. sec. 16-90-1417 Effect of sealing.

After a record is sealed under Arkansas law, the record is generally treated as confidential and the person may generally state that the conduct did not occur and that the record does not exist, subject to statutory exceptions and access rules.

Use this authority for employment and housing answers only after checking the exceptions, because some agencies, licensing bodies, criminal justice entities, or statutorily listed users may still access or consider sealed records.`,
  },
  {
    id: "ar-code-16-93-303-first-offender-sealing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AR",
    topicIds: ["expungement", "supervision"],
    citation: "Ark. Code Ann. sec. 16-93-303",
    title: "First offender probation and discharge",
    officialUrl: "https://www.arkleg.state.ar.us/ArkansasLaw",
    sourceName: "Arkansas Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Arkansas Code citation identified June 27, 2026; exact official section permalink pending Arkansas adapter",
    reviewStatus: "approved",
    text: `Ark. Code Ann. sec. 16-93-303 First offender probation; discharge and dismissal.

Arkansas first-offender law allows eligible defendants, before an adjudication of guilt and with consent, to be placed on probation under statutory conditions. If the person fulfills the terms and conditions, the court may discharge the person and dismiss proceedings, with record consequences governed by the statute.

This is not a blanket expungement rule. Use it only for eligible first-offender probation situations and verify exclusions and procedure in the official section text.`,
  },
  {
    id: "ar-code-16-123-203-fair-housing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AR",
    topicIds: ["housing"],
    citation: "Ark. Code Ann. sec. 16-123-203",
    title: "Arkansas Fair Housing Act unlawful practices",
    officialUrl: "https://www.arkleg.state.ar.us/ArkansasLaw",
    sourceName: "Arkansas Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Arkansas Code citation identified June 27, 2026; exact official section permalink pending Arkansas adapter",
    reviewStatus: "approved",
    text: `Ark. Code Ann. sec. 16-123-203 Arkansas Fair Housing Act unlawful practices.

Arkansas fair-housing law prohibits listed discriminatory housing practices based on protected characteristics such as race, color, religion, sex, disability, familial status, or national origin.

This source is useful for housing-rights answers, but it does not by itself make criminal history a protected class. For criminal-record screening, use this alongside federal HUD guidance, sealed-record rules, and any local ordinance that applies.`,
  },
  {
    id: "ar-code-18-17-701-tenant-noncompliance",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AR",
    topicIds: ["housing"],
    citation: "Ark. Code Ann. sec. 18-17-701",
    title: "Tenant noncompliance with rental agreement",
    officialUrl: "https://www.arkleg.state.ar.us/ArkansasLaw",
    sourceName: "Arkansas Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Arkansas Code citation identified June 27, 2026; exact official section permalink pending Arkansas adapter",
    reviewStatus: "approved",
    text: `Ark. Code Ann. sec. 18-17-701 Tenant noncompliance with rental agreement.

Arkansas landlord-tenant law includes remedies for tenant noncompliance with a rental agreement and related statutory duties. Use this as a housing authority for lease noncompliance and termination questions, not as a criminal-record screening statute.

For a criminal-history housing answer, pair this with sealed-record authority, fair-housing authority, federal public-housing rules, and any local fair-chance housing ordinance.`,
  },
  {
    id: "ar-code-17-3-102-occupational-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AR",
    topicIds: ["employment"],
    citation: "Ark. Code Ann. sec. 17-3-102",
    title: "Occupational licensing and criminal convictions",
    officialUrl: "https://www.arkleg.state.ar.us/ArkansasLaw",
    sourceName: "Arkansas Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Arkansas Code citation identified June 27, 2026; exact official section permalink pending Arkansas adapter",
    reviewStatus: "approved",
    text: `Ark. Code Ann. sec. 17-3-102 Occupational licensing and criminal convictions.

Arkansas law limits how occupational licensing entities may use criminal convictions when deciding whether to grant a license, registration, or certification. The licensing body must apply the statutory standards and should not treat every conviction as an automatic permanent bar.

Use this as the primary Arkansas occupational-licensing authority for criminal-record questions. Verify the current statutory factors, disqualifying offenses, rehabilitation evidence, and any occupation-specific statute before giving a specific eligibility answer.`,
  },
  {
    id: "ar-code-17-3-103-licensing-waiver-petition",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AR",
    topicIds: ["employment"],
    citation: "Ark. Code Ann. sec. 17-3-103",
    title: "Licensing waiver or preapplication review",
    officialUrl: "https://www.arkleg.state.ar.us/ArkansasLaw",
    sourceName: "Arkansas Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Arkansas Code citation identified June 27, 2026; exact official section permalink pending Arkansas adapter",
    reviewStatus: "approved",
    text: `Ark. Code Ann. sec. 17-3-103 Occupational licensing waiver or review procedure.

Arkansas occupational-licensing law includes procedures for a person with a criminal record to seek review or relief from a licensing restriction. This can matter before a person spends time or money on training for an occupation.

Use this with Ark. Code Ann. sec. 17-3-102. The exact petition process, deadline, fee, and agency response rules must be confirmed in the official section and the licensing board's rules.`,
  },
  {
    id: "ar-code-5-71-213-loitering-identification",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AR",
    topicIds: ["police"],
    citation: "Ark. Code Ann. sec. 5-71-213",
    title: "Loitering and identification context",
    officialUrl: "https://www.arkleg.state.ar.us/ArkansasLaw",
    sourceName: "Arkansas Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Arkansas Code citation identified June 27, 2026; exact official section permalink pending Arkansas adapter",
    reviewStatus: "approved",
    text: `Ark. Code Ann. sec. 5-71-213 Loitering.

Arkansas loitering law is a limited police-interaction hook because it includes circumstances where a person's conduct, location, and failure to identify or account for presence may be relevant to a loitering offense.

Do not present this as a broad universal stop-and-identify statute. For police-stop answers, lead with constitutional reasonable-suspicion rules and use this only for the specific loitering context after checking the official wording.`,
  },
  {
    id: "ar-code-5-60-120-interception-one-party-consent",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AR",
    topicIds: ["police"],
    citation: "Ark. Code Ann. sec. 5-60-120",
    title: "Interception and recording of communications",
    officialUrl: "https://www.arkleg.state.ar.us/ArkansasLaw",
    sourceName: "Arkansas Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Arkansas Code citation identified June 27, 2026; exact official section permalink pending Arkansas adapter",
    reviewStatus: "approved",
    text: `Ark. Code Ann. sec. 5-60-120 Interception and recording of communications.

Arkansas law prohibits unlawful interception or recording of covered communications, while generally allowing recording when the recorder is a party to the communication or has consent from a party, subject to statutory limits and context.

Use this as Arkansas' recording-consent hook. For recording police, also check whether the recording is open, whether it interferes with official duties, and the First Amendment/public-place rules.`,
  },
  {
    id: "ar-code-5-4-303-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AR",
    topicIds: ["supervision"],
    citation: "Ark. Code Ann. sec. 5-4-303",
    title: "Conditions of suspension or probation",
    officialUrl: "https://www.arkleg.state.ar.us/ArkansasLaw",
    sourceName: "Arkansas Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Arkansas Code citation identified June 27, 2026; exact official section permalink pending Arkansas adapter",
    reviewStatus: "approved",
    text: `Ark. Code Ann. sec. 5-4-303 Conditions of suspension or probation.

Arkansas courts may impose statutory conditions when placing a person on probation or suspending imposition of sentence. Conditions can include obeying laws, reporting, restitution, treatment, employment or education-related terms, and other court-ordered requirements authorized by statute.

Use the official section text for the full list of possible and mandatory conditions before answering a specific supervision-condition question.`,
  },
  {
    id: "ar-code-16-93-308-probation-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AR",
    topicIds: ["supervision"],
    citation: "Ark. Code Ann. sec. 16-93-308",
    title: "Violation and revocation of probation or suspension",
    officialUrl: "https://www.arkleg.state.ar.us/ArkansasLaw",
    sourceName: "Arkansas Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Arkansas Code citation identified June 27, 2026; exact official section permalink pending Arkansas adapter",
    reviewStatus: "approved",
    text: `Ark. Code Ann. sec. 16-93-308 Violation and revocation of probation or suspension.

Arkansas law governs revocation proceedings when a person is alleged to have violated probation or a suspended sentence. The court may address violations through statutory revocation procedures and available sanctions.

Use this for Arkansas probation-violation questions, but verify hearing timing, proof standards, tolling, confinement sanctions, and any offense-specific rule in the official section before giving a detailed answer.`,
  },
  {
    id: "ar-code-16-93-701-parole-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AR",
    topicIds: ["supervision"],
    citation: "Ark. Code Ann. sec. 16-93-701",
    title: "Parole eligibility framework",
    officialUrl: "https://www.arkleg.state.ar.us/ArkansasLaw",
    sourceName: "Arkansas Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Arkansas Code citation identified June 27, 2026; exact official section permalink pending Arkansas adapter",
    reviewStatus: "approved",
    text: `Ark. Code Ann. sec. 16-93-701 Parole eligibility framework.

Arkansas parole eligibility depends on the offense, sentence, date of offense, credits, statutory exclusions, and the parole or post-release supervision framework administered by the state. This citation is a supervision authority hook for parole eligibility analysis.

Do not give a precise Arkansas parole date from this record alone. A specific answer requires the judgment, offense date, sentence, transfer eligibility rules, credits, and current Department of Corrections or Post-Prison Transfer Board policy.`,
  },
  {
    id: "ar-code-16-93-615-parole-conditions-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "AR",
    topicIds: ["supervision"],
    citation: "Ark. Code Ann. sec. 16-93-615",
    title: "Parole supervision conditions and violations",
    officialUrl: "https://www.arkleg.state.ar.us/ArkansasLaw",
    sourceName: "Arkansas Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Arkansas Code citation identified June 27, 2026; exact official section permalink pending Arkansas adapter",
    reviewStatus: "approved",
    text: `Ark. Code Ann. sec. 16-93-615 Parole supervision conditions and violations.

Arkansas parole supervision is governed by statutory conditions, board rules, and Department of Corrections or community supervision policy. Violations may lead to sanctions or revocation depending on the violation and applicable procedure.

Use this as a parole-supervision hook, not as a complete parole manual. For any specific violation or revocation answer, check the official Arkansas Code, board rules, and the person's written supervision conditions.`,
  },
  {
    id: "ca-elec-2101-voter-qualification-felony",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CA",
    topicIds: ["voting"],
    citation: "Cal. Elec. Code sec. 2101",
    title: "Voter registration qualifications",
    officialUrl:
      "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=ELEC&sectionNum=2101.",
    sourceName: "California Legislative Information",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official California Legislative Information page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Cal. Elec. Code sec. 2101 Voter registration qualifications.

A person entitled to register to vote must be a United States citizen, a California resident, not imprisoned for the conviction of a felony, and at least 18 years old by the next election. A person entitled to preregister must be a United States citizen, a California resident, not imprisoned for the conviction of a felony, and at least 16 years old.

For this section, "imprisoned" means currently serving a state or federal prison term, and "conviction" does not include a juvenile adjudication under Welfare and Institutions Code section 203. Use this as California's core felony voting-rights rule.`,
  },
  {
    id: "ca-pen-1203-4-probation-dismissal-relief",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CA",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Cal. Penal Code sec. 1203.4",
    title: "Dismissal after probation",
    officialUrl:
      "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=1203.4",
    sourceName: "California Legislative Information",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official California Legislative Information page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Cal. Penal Code sec. 1203.4 Dismissal after probation.

When a defendant has fulfilled probation, been discharged early, or the court determines in the interests of justice that relief should be granted, and the person is not then serving a sentence, on probation, or charged with an offense, the court may allow withdrawal of a guilty or no contest plea or set aside a guilty verdict and dismiss the case.

Except as limited by statute, the person is released from penalties and disabilities resulting from the conviction. The conviction can still be used in a later prosecution, and the person may still have disclosure duties for public office, state or local licensing, and California State Lottery contracting. Relief does not restore firearm rights or lift certain public-office prohibitions.`,
  },
  {
    id: "ca-pen-1203-425-automatic-conviction-relief",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CA",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Cal. Penal Code sec. 1203.425",
    title: "Automatic conviction record relief",
    officialUrl:
      "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=1203.425",
    sourceName: "California Legislative Information",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official California Legislative Information page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Cal. Penal Code sec. 1203.425 Automatic conviction record relief.

California requires the Department of Justice, subject to statutory conditions and appropriations, to identify eligible convictions in statewide databases for automatic conviction record relief. Eligibility excludes people required to register under the Sex Offender Registration Act, people with active supervision records, people currently serving a sentence or with pending charges, and certain serious, violent, or registrable felony convictions.

When relief is granted, state criminal history records note that relief was granted, and the person is generally released from penalties and disabilities resulting from the conviction, subject to statutory exceptions. Relief does not restore firearm rights, erase all disclosure duties, or prevent criminal justice agencies and listed entities from accessing or using records as authorized by law.`,
  },
  {
    id: "ca-pen-851-91-arrest-sealing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CA",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Cal. Penal Code sec. 851.91",
    title: "Sealing arrests not resulting in conviction",
    officialUrl:
      "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=851.91",
    sourceName: "California Legislative Information",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official California Legislative Information page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Cal. Penal Code sec. 851.91 Sealing arrests not resulting in conviction.

A person who suffered an arrest that did not result in a conviction may petition the court to seal the arrest and related records. An arrest did not result in conviction if, for example, the statute of limitations has run and no accusatory pleading was filed, charges were dismissed and cannot be refiled, the person was acquitted, or a conviction was vacated or reversed and cannot be refiled.

If sealing is granted, the arrest is deemed not to have occurred and the person may answer questions about the sealed arrest accordingly, subject to statutory exceptions such as later prosecutions, public office, peace officer employment, state or local licensure, lottery contracting, firearm consequences, and public-office prohibitions.`,
  },
  {
    id: "ca-gov-12955-fair-housing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CA",
    topicIds: ["housing"],
    citation: "Cal. Gov. Code sec. 12955",
    title: "Fair housing unlawful practices",
    officialUrl:
      "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=12955",
    sourceName: "California Legislative Information",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official California Legislative Information page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Cal. Gov. Code sec. 12955 Fair housing unlawful practices.

California fair-housing law prohibits listed discriminatory housing practices by owners and other covered housing actors based on protected characteristics. This section is a core state fair-housing source for California housing-rights answers.

Criminal history is not stated here as a standalone protected class. For criminal-record housing screening, use this with federal HUD disparate-impact guidance, local fair-chance housing ordinances where applicable, and California record-relief statutes that limit disclosure or use of dismissed, sealed, or relieved records.`,
  },
  {
    id: "ca-gov-12952-fair-chance-employment",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CA",
    topicIds: ["employment"],
    citation: "Cal. Gov. Code sec. 12952",
    title: "Fair Chance Act employment rules",
    officialUrl:
      "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=12952",
    sourceName: "California Legislative Information",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official California Legislative Information page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Cal. Gov. Code sec. 12952 Fair Chance Act employment rules.

For employers with five or more employees, it is an unlawful employment practice to ask about conviction history on an application, inquire into or consider conviction history, or run a conviction-history background check until after a conditional offer of employment.

Covered employers may not consider arrests not followed by conviction, diversion participation, or convictions that have been sealed, dismissed, expunged, statutorily eradicated, pardoned, or covered by a certificate of rehabilitation. Before denying employment based on conviction history, the employer must make an individualized assessment considering the nature and gravity of the offense, time passed, and the nature of the job, then give required notices and time to respond.`,
  },
  {
    id: "ca-lab-432-7-employment-arrest-dismissed-records",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CA",
    topicIds: ["employment"],
    citation: "Cal. Lab. Code sec. 432.7",
    title: "Limits on employment use of arrests, diversion, and dismissed records",
    officialUrl:
      "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=432.7",
    sourceName: "California Legislative Information",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official California Legislative Information page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Cal. Lab. Code sec. 432.7 Employment limits on arrests, diversion, juvenile records, and dismissed or sealed convictions.

An employer generally may not ask an applicant to disclose, seek from any source, or use as an employment factor information about an arrest or detention that did not result in conviction, diversion participation, or a conviction that has been judicially dismissed or ordered sealed under listed laws, including Penal Code sections 1203.4 and 1203.425.

The section also protects juvenile-court history from inquiry or use, defines conviction for the employment context, and contains exceptions for peace officer, criminal justice agency, and certain health facility positions.`,
  },
  {
    id: "ca-bpc-480-occupational-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CA",
    topicIds: ["employment"],
    citation: "Cal. Bus. & Prof. Code sec. 480",
    title: "Occupational licensing denial based on criminal history",
    officialUrl:
      "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=480",
    sourceName: "California Legislative Information",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official California Legislative Information page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Cal. Bus. & Prof. Code sec. 480 Occupational licensing denial based on criminal history.

California licensing boards may deny a license based on certain criminal convictions only under the statutory standards, including whether the conviction is substantially related to the qualifications, functions, or duties of the business or profession and subject to rehabilitation and record-relief limits.

Use this with board-specific licensing statutes and regulations. A record that was dismissed, sealed, relieved, pardoned, or otherwise protected may have different treatment, and some licenses have occupation-specific public-safety rules.`,
  },
  {
    id: "ca-pen-148-obstructing-officer",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CA",
    topicIds: ["police"],
    citation: "Cal. Penal Code sec. 148",
    title: "Resisting, delaying, or obstructing a public officer",
    officialUrl:
      "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=148",
    sourceName: "California Legislative Information",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official California Legislative Information page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Cal. Penal Code sec. 148 Resisting, delaying, or obstructing a public officer.

California makes it an offense to willfully resist, delay, or obstruct a public officer, peace officer, or emergency medical technician in the discharge or attempted discharge of duty. This is often relevant in police-interaction questions.

Do not present this as a broad stop-and-identify statute. For California police-stop answers, lead with constitutional rules, the facts of the detention, and whether the person's conduct actually resisted, delayed, or obstructed an officer.`,
  },
  {
    id: "ca-pen-632-confidential-communications-recording",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CA",
    topicIds: ["police"],
    citation: "Cal. Penal Code sec. 632",
    title: "Recording confidential communications",
    officialUrl:
      "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=632",
    sourceName: "California Legislative Information",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official California Legislative Information page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Cal. Penal Code sec. 632 Recording confidential communications.

California prohibits intentionally recording or eavesdropping on a confidential communication without the consent of all parties. A confidential communication is one carried on in circumstances reasonably indicating a party wants it confined to the parties, but excludes public gatherings, open legislative, judicial, executive, or administrative proceedings, or circumstances where parties may reasonably expect the communication to be overheard or recorded.

Use this as California's recording-consent hook. For recording police in public, also analyze whether the communication was confidential, whether recording interfered with lawful duties, and First Amendment public-recording rules.`,
  },
  {
    id: "ca-pen-1203-1-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CA",
    topicIds: ["supervision"],
    citation: "Cal. Penal Code sec. 1203.1",
    title: "Probation conditions and term",
    officialUrl:
      "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=1203.1",
    sourceName: "California Legislative Information",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official California Legislative Information page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Cal. Penal Code sec. 1203.1 Probation conditions and term.

When granting probation, the court may suspend imposition or execution of sentence for a period generally not exceeding two years, subject to statutory exceptions, and impose terms and conditions it determines appropriate. The court may require restitution, fines, jail time within statutory limits, community service, support of dependents, reporting, and other reasonable conditions.

Use the official section for the full list and exceptions. Some offenses have longer probation periods or offense-specific requirements.`,
  },
  {
    id: "ca-pen-1203-2-supervision-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CA",
    topicIds: ["supervision"],
    citation: "Cal. Penal Code sec. 1203.2",
    title: "Probation, parole, and supervision revocation",
    officialUrl:
      "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=1203.2",
    sourceName: "California Legislative Information",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official California Legislative Information page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Cal. Penal Code sec. 1203.2 Probation, parole, and supervision revocation.

During supervision, if a probation officer, parole officer, or peace officer has probable cause to believe the person violated a supervision term or condition, the officer may rearrest the person or the court may issue a warrant. The court may modify, revoke, or terminate supervision if justice requires and the court has reason to believe the person violated conditions or committed another offense.

Supervision cannot be revoked solely for failure to pay restitution, fines, fees, or assessments unless the court determines willful failure and ability to pay. Revocation tolls the running of the supervision period.`,
  },
  {
    id: "ca-pen-3000-parole-periods",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CA",
    topicIds: ["supervision"],
    citation: "Cal. Penal Code sec. 3000",
    title: "Parole period and supervision framework",
    officialUrl:
      "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=3000",
    sourceName: "California Legislative Information",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Official California Legislative Information page, queried June 27, 2026",
    reviewStatus: "approved",
    text: `Cal. Penal Code sec. 3000 Parole period and supervision framework.

California parole law governs postrelease parole periods, Department of Corrections and Rehabilitation supervision, and offense-specific parole terms. The exact parole period depends on the offense, sentence, release law, and statutory category.

Use this as the California parole framework hook, not as a standalone calculator. A precise parole answer requires the conviction offense, sentence, release date, applicable parole or PRCS statute, and current supervision paperwork.`,
  },
  {
    id: "co-crs-1-2-103-voter-qualification-felony",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CO",
    topicIds: ["voting"],
    citation: "Colo. Rev. Stat. sec. 1-2-103",
    title: "Elector qualifications and felony confinement",
    officialUrl: "https://leg.colorado.gov/laws/colorado-revised-statutes",
    sourceName: "Colorado General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Colorado Revised Statutes official landing page queried June 27, 2026; section text hosted through LexisNexis",
    reviewStatus: "approved",
    text: `Colo. Rev. Stat. sec. 1-2-103 Elector qualifications and felony confinement.

Colorado voter qualification law excludes a person who is serving a sentence of detention, confinement, or incarceration for a felony conviction. Colorado restored voting rights for people on parole, so the core practical rule is that a felony conviction blocks voting while the person is incarcerated for the felony, not after release to parole or completion.

Use this as Colorado's felony voting-rights authority, together with current Secretary of State election guidance before giving user-facing advice.`,
  },
  {
    id: "co-crs-24-72-705-nonconviction-sealing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CO",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Colo. Rev. Stat. sec. 24-72-705",
    title: "Sealing criminal justice records not resulting in conviction",
    officialUrl: "https://leg.colorado.gov/laws/colorado-revised-statutes",
    sourceName: "Colorado General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Colorado Revised Statutes official landing page queried June 27, 2026; section text hosted through LexisNexis",
    reviewStatus: "approved",
    text: `Colo. Rev. Stat. sec. 24-72-705 Sealing criminal justice records not resulting in conviction.

Colorado provides procedures to seal criminal justice records for cases that did not result in conviction, including situations such as dismissed charges, acquittals, or cases where charges were not filed, subject to statutory requirements and exceptions.

Use this authority for nonconviction-record relief. Check the official section text for timing, fee, victim-notice, agency-access, and exception rules before giving a detailed eligibility answer.`,
  },
  {
    id: "co-crs-24-72-706-conviction-record-sealing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CO",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Colo. Rev. Stat. sec. 24-72-706",
    title: "Sealing conviction records",
    officialUrl: "https://leg.colorado.gov/laws/colorado-revised-statutes",
    sourceName: "Colorado General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Colorado Revised Statutes official landing page queried June 27, 2026; section text hosted through LexisNexis",
    reviewStatus: "approved",
    text: `Colo. Rev. Stat. sec. 24-72-706 Sealing criminal conviction records.

Colorado law allows certain conviction records to be sealed after statutory waiting periods and conditions are met. Eligibility depends on offense class, criminal history, completion of sentence, waiting period, restitution and other financial obligations, and statutory exclusions.

Use this as Colorado's conviction-sealing gateway. Do not give a detailed eligibility answer without checking the offense category, date, sentence completion, unpaid obligations, and exclusions in the official section.`,
  },
  {
    id: "co-crs-38-12-904-rental-application-criminal-history",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CO",
    topicIds: ["housing"],
    citation: "Colo. Rev. Stat. sec. 38-12-904",
    title: "Rental applications and criminal history limits",
    officialUrl: "https://leg.colorado.gov/laws/colorado-revised-statutes",
    sourceName: "Colorado General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Colorado Revised Statutes official landing page queried June 27, 2026; section text hosted through LexisNexis",
    reviewStatus: "approved",
    text: `Colo. Rev. Stat. sec. 38-12-904 Rental applications and criminal history limits.

Colorado rental-application law restricts how landlords may use certain rental, credit, and criminal-history information in screening. For criminal history, the statute limits consideration of older records and includes listed exceptions for serious categories such as methamphetamine-related offenses, sex-offender registration, and homicide or stalking-related offenses.

Use this as the primary Colorado state-law source for criminal-history rental screening. Pair it with federal fair-housing guidance and any local fair-chance housing ordinance.`,
  },
  {
    id: "co-crs-24-34-502-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CO",
    topicIds: ["housing"],
    citation: "Colo. Rev. Stat. sec. 24-34-502",
    title: "Housing discrimination unfair practices",
    officialUrl: "https://leg.colorado.gov/laws/colorado-revised-statutes",
    sourceName: "Colorado General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Colorado Revised Statutes official landing page queried June 27, 2026; section text hosted through LexisNexis",
    reviewStatus: "approved",
    text: `Colo. Rev. Stat. sec. 24-34-502 Housing discrimination unfair practices.

Colorado fair-housing law prohibits specified discriminatory housing practices based on protected characteristics. This section is a core Colorado civil-rights source for housing-rights answers.

Criminal history is not the same as a protected class under this section. For criminal-record housing questions, use this with Colo. Rev. Stat. sec. 38-12-904, federal HUD guidance, record-sealing rules, and local law where applicable.`,
  },
  {
    id: "co-crs-8-2-130-employment-opportunity-act",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CO",
    topicIds: ["employment"],
    citation: "Colo. Rev. Stat. sec. 8-2-130",
    title: "Colorado Chance to Compete Act",
    officialUrl: "https://leg.colorado.gov/laws/colorado-revised-statutes",
    sourceName: "Colorado General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Colorado Revised Statutes official landing page queried June 27, 2026; section text hosted through LexisNexis",
    reviewStatus: "approved",
    text: `Colo. Rev. Stat. sec. 8-2-130 Colorado Chance to Compete Act.

Colorado restricts covered employers from stating in an advertisement or on an initial employment application that a person with a criminal history may not apply or from inquiring into criminal history on the initial application, subject to statutory exceptions.

The statute does not prevent an employer from obtaining a publicly available criminal background report at another stage, and it includes exceptions where law bars employment for a specific conviction or requires criminal-history inquiry. Use this as Colorado's ban-the-box employment authority.`,
  },
  {
    id: "co-crs-24-5-101-public-employment-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CO",
    topicIds: ["employment"],
    citation: "Colo. Rev. Stat. sec. 24-5-101",
    title: "Effect of criminal conviction on public employment and licensing",
    officialUrl: "https://leg.colorado.gov/laws/colorado-revised-statutes",
    sourceName: "Colorado General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Colorado Revised Statutes official landing page queried June 27, 2026; section text hosted through LexisNexis",
    reviewStatus: "approved",
    text: `Colo. Rev. Stat. sec. 24-5-101 Effect of criminal conviction on public employment and licensing.

Colorado limits when a prior conviction can be used to disqualify a person from public employment or from a license, certification, permit, or registration. Agencies must apply statutory standards rather than treating every conviction as an automatic bar.

Use this with occupation-specific statutes and regulations. A detailed occupational-licensing answer requires the exact license, conviction, time elapsed, rehabilitation evidence, and any mandatory disqualification law.`,
  },
  {
    id: "co-crs-16-3-103-stop-name-address-explanation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CO",
    topicIds: ["police"],
    citation: "Colo. Rev. Stat. sec. 16-3-103",
    title: "Stopping of suspect",
    officialUrl: "https://leg.colorado.gov/laws/colorado-revised-statutes",
    sourceName: "Colorado General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Colorado Revised Statutes official landing page queried June 27, 2026; section text hosted through LexisNexis",
    reviewStatus: "approved",
    text: `Colo. Rev. Stat. sec. 16-3-103 Stopping of suspect.

A peace officer may stop a person reasonably suspected of criminal activity and may require the person to give the person's name and address, identification if available, and an explanation of the person's actions. The stop must be temporary and tied to the investigation.

Use this as Colorado's stop-and-identify hook. It does not mean a person must answer every question, and any advice must be framed with constitutional reasonable-suspicion rules and safety considerations.`,
  },
  {
    id: "co-crs-18-9-304-305-eavesdropping-consent",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CO",
    topicIds: ["police"],
    citation: "Colo. Rev. Stat. secs. 18-9-304, 18-9-305",
    title: "Eavesdropping and consent exceptions",
    officialUrl: "https://leg.colorado.gov/laws/colorado-revised-statutes",
    sourceName: "Colorado General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Colorado Revised Statutes official landing page queried June 27, 2026; section text hosted through LexisNexis",
    reviewStatus: "approved",
    text: `Colo. Rev. Stat. secs. 18-9-304 and 18-9-305 Eavesdropping and consent exceptions.

Colorado prohibits certain eavesdropping and recording conduct, but statutory exceptions include consent-based recording rules. Colorado is generally treated as a one-party-consent state for recording conversations, subject to the details and exceptions in the eavesdropping statutes.

Use this as Colorado's recording-consent hook. For recording police, also analyze whether the recording occurs in public, whether it interferes with lawful duties, and constitutional public-recording rules.`,
  },
  {
    id: "co-crs-18-1-3-204-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CO",
    topicIds: ["supervision"],
    citation: "Colo. Rev. Stat. sec. 18-1.3-204",
    title: "Conditions of probation",
    officialUrl: "https://leg.colorado.gov/laws/colorado-revised-statutes",
    sourceName: "Colorado General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Colorado Revised Statutes official landing page queried June 27, 2026; section text hosted through LexisNexis",
    reviewStatus: "approved",
    text: `Colo. Rev. Stat. sec. 18-1.3-204 Conditions of probation.

Colorado courts may impose statutory and reasonable probation conditions when sentencing a person to probation. Conditions can include treatment, restitution, reporting, employment or education-related requirements, offense-specific restrictions, and other court-ordered terms authorized by law.

Use the official section text and the person's written probation order for any specific condition question.`,
  },
  {
    id: "co-crs-16-11-206-probation-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CO",
    topicIds: ["supervision"],
    citation: "Colo. Rev. Stat. sec. 16-11-206",
    title: "Probation revocation hearing",
    officialUrl: "https://leg.colorado.gov/laws/colorado-revised-statutes",
    sourceName: "Colorado General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Colorado Revised Statutes official landing page queried June 27, 2026; section text hosted through LexisNexis",
    reviewStatus: "approved",
    text: `Colo. Rev. Stat. sec. 16-11-206 Probation revocation hearing.

Colorado law governs hearings and procedure when probation revocation is alleged. It provides the framework for how courts address claimed violations and possible revocation or modification of probation.

Use this for Colorado probation-violation answers, but confirm hearing rights, burden, timing, and available sanctions in the official section and court rules before giving detailed procedural guidance.`,
  },
  {
    id: "co-crs-17-2-201-parole-board-release-supervision",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CO",
    topicIds: ["supervision"],
    citation: "Colo. Rev. Stat. sec. 17-2-201",
    title: "State board of parole powers and parole supervision",
    officialUrl: "https://leg.colorado.gov/laws/colorado-revised-statutes",
    sourceName: "Colorado General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Colorado Revised Statutes official landing page queried June 27, 2026; section text hosted through LexisNexis",
    reviewStatus: "approved",
    text: `Colo. Rev. Stat. sec. 17-2-201 State board of parole powers and parole supervision.

Colorado parole law gives the state board of parole authority over parole release decisions, parole conditions, supervision, and revocation processes subject to statutory limits and Department of Corrections procedures.

Use this as a Colorado parole framework source, not as a release-date calculator. A specific parole answer requires the offense, sentence, date, earned-time/eligibility rules, board action, and written parole conditions.`,
  },
  {
    id: "ct-gen-stat-9-46-felony-voting-restoration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CT",
    topicIds: ["voting"],
    citation: "Conn. Gen. Stat. sec. 9-46",
    title: "Forfeiture and restoration of electoral privileges",
    officialUrl: "https://www.cga.ct.gov/current/pub/chap_143.htm#sec_9-46",
    sourceName: "Connecticut General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Connecticut General Statutes current publication, revised to January 1, 2025; 2026 supplement should be checked",
    reviewStatus: "approved",
    text: `Conn. Gen. Stat. sec. 9-46 Forfeiture and restoration of electoral privileges.

Connecticut law provides the core felony voting-rights rule: a person convicted of a felony and committed to confinement forfeits electoral privileges during the period of confinement, and electoral privileges are restored after release from confinement, subject to registration requirements.

Use this as Connecticut's felony voting-rights authority. For user-facing advice, confirm whether the person is incarcerated, released to community supervision, or fully discharged, and check current Secretary of State guidance.`,
  },
  {
    id: "ct-gen-stat-54-142a-erasure-criminal-records",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CT",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Conn. Gen. Stat. sec. 54-142a",
    title: "Erasure of criminal records",
    officialUrl: "https://www.cga.ct.gov/current/pub/chap_961a.htm#sec_54-142a",
    sourceName: "Connecticut General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Connecticut General Statutes current publication, revised to January 1, 2025; 2026 supplement should be checked",
    reviewStatus: "approved",
    text: `Conn. Gen. Stat. sec. 54-142a Erasure of criminal records.

Connecticut erases police, court, and prosecutor records for not-guilty findings, dismissals, nolles after the statutory period, absolute pardons, and certain eligible convictions. Eligible misdemeanor records may be erased after seven years, and eligible class D or E felonies or certain unclassified felonies may be erased after ten years, subject to exclusions and completion of incarceration, parole, special parole, medical parole, transitional supervision, probation, and no pending Connecticut criminal charge.

After erasure, the person is deemed never to have been arrested with respect to the erased proceedings and may so swear under oath. Use the official section text for the full eligibility list, excluded offenses, timing, disclosure exceptions, and immigration-record access rules.`,
  },
  {
    id: "ct-gen-stat-54-142t-automated-erasure",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CT",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Conn. Gen. Stat. sec. 54-142t",
    title: "Automated erasure of criminal records",
    officialUrl: "https://www.cga.ct.gov/current/pub/chap_961a.htm#sec_54-142t",
    sourceName: "Connecticut General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Connecticut General Statutes current publication, revised to January 1, 2025; 2026 supplement should be checked",
    reviewStatus: "approved",
    text: `Conn. Gen. Stat. sec. 54-142t Automated process for erasure of criminal records.

Connecticut law directs automated processes for identifying and erasing eligible criminal records and includes related procedures for review, audit, record maintenance, and liability for reliance on criminal history information.

Use this with Conn. Gen. Stat. sec. 54-142a when explaining Connecticut clean-slate style relief. For a specific person, the controlling issue remains whether the record is eligible and whether it has actually been erased in the relevant system.`,
  },
  {
    id: "ct-gen-stat-46a-64c-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CT",
    topicIds: ["housing"],
    citation: "Conn. Gen. Stat. sec. 46a-64c",
    title: "Discriminatory housing practices prohibited",
    officialUrl: "https://www.cga.ct.gov/current/pub/chap_814c.htm#sec_46a-64c",
    sourceName: "Connecticut General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Connecticut General Statutes current publication, revised to January 1, 2025; 2026 supplement should be checked",
    reviewStatus: "approved",
    text: `Conn. Gen. Stat. sec. 46a-64c Discriminatory housing practices prohibited.

Connecticut fair-housing law prohibits listed discriminatory housing practices based on protected characteristics. This is the primary Connecticut state fair-housing source for housing-rights answers.

Criminal history is not itself the same as a protected class under this section. For criminal-record screening, combine this source with federal HUD guidance, erased-record rules, and any local fair-chance housing ordinance.`,
  },
  {
    id: "ct-gen-stat-31-51i-erased-record-employment",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CT",
    topicIds: ["employment"],
    citation: "Conn. Gen. Stat. sec. 31-51i",
    title: "Employer inquiries and discrimination based on erased records",
    officialUrl: "https://www.cga.ct.gov/current/pub/chap_557.htm#sec_31-51i",
    sourceName: "Connecticut General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Connecticut General Statutes current publication, revised to January 1, 2025; 2026 supplement should be checked",
    reviewStatus: "approved",
    text: `Conn. Gen. Stat. sec. 31-51i Employer inquiries about erased criminal records prohibited.

Connecticut employers may not require an employee or applicant to disclose the existence of an erased criminal record, and employment application forms that ask about criminal history must contain a notice that the applicant is not required to disclose erased records.

The statute also prohibits employment discrimination based on erased criminal records, provisional pardons, or certificates of rehabilitation, and regulates consumer reporting agencies issuing employment reports containing criminal matters of public record.`,
  },
  {
    id: "ct-gen-stat-46a-80-conviction-employment-licensing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CT",
    topicIds: ["employment"],
    citation: "Conn. Gen. Stat. sec. 46a-80",
    title: "Denial of employment or license because of prior conviction",
    officialUrl: "https://www.cga.ct.gov/current/pub/chap_814c.htm#sec_46a-80",
    sourceName: "Connecticut General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Connecticut General Statutes current publication, revised to January 1, 2025; 2026 supplement should be checked",
    reviewStatus: "approved",
    text: `Conn. Gen. Stat. sec. 46a-80 Denial of employment or license because of prior conviction.

Connecticut limits denial of public employment, state licenses, permits, certificates, or registrations based solely on a prior conviction. Decision makers must consider the nature of the crime and its relationship to the job or license, information about rehabilitation, and the time elapsed since conviction or release.

Use this as Connecticut's occupational-licensing and public-employment criminal-record authority. Check any occupation-specific statute for mandatory disqualifications or additional rules.`,
  },
  {
    id: "ct-gen-stat-54-1f-stop-and-identify",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CT",
    topicIds: ["police"],
    citation: "Conn. Gen. Stat. sec. 54-1f",
    title: "Stop of suspect and request for identification",
    officialUrl: "https://www.cga.ct.gov/current/pub/chap_959.htm#sec_54-1f",
    sourceName: "Connecticut General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Connecticut General Statutes current publication, revised to January 1, 2025; 2026 supplement should be checked",
    reviewStatus: "approved",
    text: `Conn. Gen. Stat. sec. 54-1f Stop of suspect and identification context.

Connecticut law authorizes officers to stop a person in statutorily defined circumstances and request identifying information when the officer has appropriate suspicion. Use this as Connecticut's police-stop identification hook.

Do not present this as a duty to answer every police question. For police-stop answers, lead with constitutional reasonable-suspicion rules, whether the person is free to leave, and safety-focused practical guidance.`,
  },
  {
    id: "ct-gen-stat-53a-189-eavesdropping",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CT",
    topicIds: ["police"],
    citation: "Conn. Gen. Stat. sec. 53a-189",
    title: "Eavesdropping",
    officialUrl: "https://www.cga.ct.gov/current/pub/chap_952.htm#sec_53a-189",
    sourceName: "Connecticut General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Connecticut General Statutes current publication, revised to January 1, 2025; 2026 supplement should be checked",
    reviewStatus: "approved",
    text: `Conn. Gen. Stat. sec. 53a-189 Eavesdropping.

Connecticut criminalizes eavesdropping as defined in the Penal Code. Use this with the statutory definitions in Conn. Gen. Stat. sec. 53a-187 and civil telephone-recording rules when analyzing recording or interception questions.

For recording police, also consider whether the conversation is private or public, whether the recording interferes with official duties, and First Amendment public-recording rules.`,
  },
  {
    id: "ct-gen-stat-53a-30-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CT",
    topicIds: ["supervision"],
    citation: "Conn. Gen. Stat. sec. 53a-30",
    title: "Conditions of probation and conditional discharge",
    officialUrl: "https://www.cga.ct.gov/current/pub/chap_952.htm#sec_53a-30",
    sourceName: "Connecticut General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Connecticut General Statutes current publication, revised to January 1, 2025; 2026 supplement should be checked",
    reviewStatus: "approved",
    text: `Conn. Gen. Stat. sec. 53a-30 Conditions of probation and conditional discharge.

Connecticut courts may impose conditions of probation or conditional discharge, including reporting, employment, education, treatment, restitution, no-contact, residence, and other conditions authorized by statute and tailored to rehabilitation and public safety.

Use this with the person's written probation order for specific condition questions. Some offenses carry mandatory or specialized conditions.`,
  },
  {
    id: "ct-gen-stat-53a-32-probation-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CT",
    topicIds: ["supervision"],
    citation: "Conn. Gen. Stat. sec. 53a-32",
    title: "Violation of probation or conditional discharge",
    officialUrl: "https://www.cga.ct.gov/current/pub/chap_952.htm#sec_53a-32",
    sourceName: "Connecticut General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Connecticut General Statutes current publication, revised to January 1, 2025; 2026 supplement should be checked",
    reviewStatus: "approved",
    text: `Conn. Gen. Stat. sec. 53a-32 Violation of probation or conditional discharge.

Connecticut law governs arrest, hearing, and court action for alleged violations of probation or conditional discharge. If a violation is established, the court may continue, modify, extend, or revoke supervision and impose sentence as authorized by law.

Use this for Connecticut probation-violation answers, but verify hearing procedure, rights, burden, and available sanctions in the official section and court rules.`,
  },
  {
    id: "ct-gen-stat-54-125a-parole-eligibility-release",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "CT",
    topicIds: ["supervision"],
    citation: "Conn. Gen. Stat. sec. 54-125a",
    title: "Parole eligibility and release",
    officialUrl: "https://www.cga.ct.gov/current/pub/chap_961.htm#sec_54-125a",
    sourceName: "Connecticut General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Connecticut General Statutes current publication, revised to January 1, 2025; 2026 supplement should be checked",
    reviewStatus: "approved",
    text: `Conn. Gen. Stat. sec. 54-125a Parole eligibility and release.

Connecticut parole eligibility depends on sentence, offense type, risk, rehabilitation, victim and public-safety considerations, and Board of Pardons and Paroles action. The statute supplies the framework for parole release consideration and eligibility categories.

Use this as Connecticut's parole framework source, not as a release-date calculator. A precise answer requires the mittimus, sentence, offense, credits, board decisions, and written parole conditions.`,
  },
  {
    id: "de-code-title-15-6102-voting-felony-disqualification",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "DE",
    topicIds: ["voting"],
    citation: "15 Del. C. sec. 6102",
    title: "Persons disqualified from voting by reason of conviction",
    officialUrl: "https://delcode.delaware.gov/title15/c061/index.html#6102",
    sourceName: "Delaware Code Online",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Delaware Code Online current through acts received by May 22, 2026; queried June 27, 2026",
    reviewStatus: "approved",
    text: `15 Del. C. sec. 6102 Persons disqualified from voting by reason of conviction.

Delaware law disqualifies certain people from voting because of felony convictions and restores voting rights under statutory conditions. Delaware also has categories of disqualifying offenses that may require a pardon before voting rights can be restored.

Use this as Delaware's primary felony voting-rights authority. For a user-facing answer, distinguish between completion of sentence, pardon-only disqualifying offenses, and voter registration requirements.`,
  },
  {
    id: "de-code-title-11-4372-mandatory-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "DE",
    topicIds: ["expungement"],
    citation: "11 Del. C. sec. 4372",
    title: "Mandatory expungement",
    officialUrl: "https://delcode.delaware.gov/title11/c043/sc07/index.html#4372",
    sourceName: "Delaware Code Online",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Delaware Code Online current through acts received by May 22, 2026; queried June 27, 2026",
    reviewStatus: "approved",
    text: `11 Del. C. sec. 4372 Mandatory expungement.

Delaware provides mandatory expungement for specified eligible records, including certain cases terminated in favor of the accused and certain eligible convictions after statutory conditions are met.

Use this as the mandatory-expungement gateway. Eligibility is offense-specific and depends on disposition, criminal history, waiting periods, and statutory exclusions. Check the official section and related expungement definitions before a specific answer.`,
  },
  {
    id: "de-code-title-11-4373-discretionary-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "DE",
    topicIds: ["expungement"],
    citation: "11 Del. C. sec. 4373",
    title: "Discretionary expungement",
    officialUrl: "https://delcode.delaware.gov/title11/c043/sc07/index.html#4373",
    sourceName: "Delaware Code Online",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Delaware Code Online current through acts received by May 22, 2026; queried June 27, 2026",
    reviewStatus: "approved",
    text: `11 Del. C. sec. 4373 Discretionary expungement.

Delaware permits discretionary expungement for certain records when mandatory expungement is not available, subject to statutory eligibility, exclusions, waiting periods, and court review.

Use this for Delaware expungement questions where relief is possible but not automatic or mandatory. A specific answer requires the charge, disposition, offense class, prior record, waiting period, and any disqualifying offense.`,
  },
  {
    id: "de-code-title-11-4374-effect-of-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "DE",
    topicIds: ["expungement", "employment", "housing"],
    citation: "11 Del. C. sec. 4374",
    title: "Effect of expungement",
    officialUrl: "https://delcode.delaware.gov/title11/c043/sc07/index.html#4374",
    sourceName: "Delaware Code Online",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Delaware Code Online current through acts received by May 22, 2026; queried June 27, 2026",
    reviewStatus: "approved",
    text: `11 Del. C. sec. 4374 Effect of expungement.

When Delaware expungement is granted, the effect of expungement is governed by statute, including restrictions on disclosure and treatment of the expunged record. Expungement can matter for employment, housing, education, and licensing questions, but exceptions may allow access or disclosure in listed circumstances.

Use this with the specific expungement eligibility section. Do not assume expungement erases every consequence for every agency or profession.`,
  },
  {
    id: "de-code-title-6-4603-fair-housing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "DE",
    topicIds: ["housing"],
    citation: "6 Del. C. sec. 4603",
    title: "Discriminatory housing practices",
    officialUrl: "https://delcode.delaware.gov/title6/c046/index.html#4603",
    sourceName: "Delaware Code Online",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Delaware Code Online current through acts received by May 22, 2026; queried June 27, 2026",
    reviewStatus: "approved",
    text: `6 Del. C. sec. 4603 Discriminatory housing practices.

Delaware fair-housing law prohibits covered discriminatory housing practices based on protected characteristics. This is Delaware's core state fair-housing authority.

Criminal history is not itself a protected class under this section. For criminal-record tenant screening, pair this with federal HUD guidance, expungement law, public housing rules, and any local ordinance.`,
  },
  {
    id: "de-code-title-25-5513-tenant-obligations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "DE",
    topicIds: ["housing"],
    citation: "25 Del. C. sec. 5513",
    title: "Tenant obligations relating to rental unit and conduct",
    officialUrl: "https://delcode.delaware.gov/title25/c055/index.html#5513",
    sourceName: "Delaware Code Online",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Delaware Code Online current through acts received by May 22, 2026; queried June 27, 2026",
    reviewStatus: "approved",
    text: `25 Del. C. sec. 5513 Tenant obligations relating to rental unit and conduct.

Delaware landlord-tenant law imposes tenant obligations related to the rental unit and conduct. Violations can matter for lease enforcement and termination depending on the facts and the statutory remedy.

Use this as a landlord-tenant conduct hook, not as a criminal-record screening rule. For application screening, use fair-housing law, expungement law, consumer-reporting law, and any applicable public or subsidized housing rules.`,
  },
  {
    id: "de-code-title-19-711g-public-employment-criminal-history",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "DE",
    topicIds: ["employment"],
    citation: "19 Del. C. sec. 711(g)",
    title: "Public employer criminal history inquiry limits",
    officialUrl: "https://delcode.delaware.gov/title19/c007/index.html#711",
    sourceName: "Delaware Code Online",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Delaware Code Online current through acts received by May 22, 2026; queried June 27, 2026",
    reviewStatus: "approved",
    text: `19 Del. C. sec. 711(g) Public employer criminal history inquiry limits.

Delaware makes it an unlawful employment practice for public employers to inquire into or consider an applicant's criminal record, criminal history, credit history, or credit score before the first interview, subject to statutory exceptions.

The law allows inquiry where federal or state law requires or where the employer is required to consider the person's criminal history for the position. Use this as Delaware's public-employment ban-the-box authority.`,
  },
  {
    id: "de-code-title-24-8735-occupational-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "DE",
    topicIds: ["employment"],
    citation: "24 Del. C. sec. 8735",
    title: "Occupational licensing and criminal conviction review",
    officialUrl: "https://delcode.delaware.gov/title24/index.html",
    sourceName: "Delaware Code Online",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Delaware Code Online current through acts received by May 22, 2026; queried June 27, 2026",
    reviewStatus: "approved",
    text: `24 Del. C. sec. 8735 Occupational licensing and criminal conviction review.

Delaware occupational licensing boards and agencies may have limits on denying licenses based on criminal convictions, and Delaware has statutory reforms requiring individualized review in covered contexts.

Use this as an occupational-licensing hook pending exact adapter confirmation. A specific answer requires the profession, board statute, conviction, time elapsed, rehabilitation evidence, and any mandatory disqualification law.`,
  },
  {
    id: "de-code-title-11-1902-questioning-detained-person",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "DE",
    topicIds: ["police"],
    citation: "11 Del. C. sec. 1902",
    title: "Questioning and detention of suspects",
    officialUrl: "https://delcode.delaware.gov/title11/c019/index.html#1902",
    sourceName: "Delaware Code Online",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Delaware Code Online current through acts received by May 22, 2026; queried June 27, 2026",
    reviewStatus: "approved",
    text: `11 Del. C. sec. 1902 Questioning and detention of suspects.

Delaware authorizes a peace officer to stop a person reasonably suspected of committing, having committed, or being about to commit a crime, and to demand the person's name, address, business abroad, and destination. The detention must be temporary and tied to the investigation.

Use this as Delaware's stop-and-identify hook. It does not mean a person must answer every police question, and any practical answer should include constitutional reasonable-suspicion rules and safety guidance.`,
  },
  {
    id: "de-code-title-11-2402-interception-communications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "DE",
    topicIds: ["police"],
    citation: "11 Del. C. sec. 2402",
    title: "Interception of communications",
    officialUrl: "https://delcode.delaware.gov/title11/c024/index.html#2402",
    sourceName: "Delaware Code Online",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Delaware Code Online current through acts received by May 22, 2026; queried June 27, 2026",
    reviewStatus: "approved",
    text: `11 Del. C. sec. 2402 Interception of wire, oral or electronic communications.

Delaware law prohibits certain interceptions of wire, oral, or electronic communications and includes consent-based exceptions. Delaware is generally treated as a one-party-consent jurisdiction for covered recordings, subject to statutory details and exceptions.

Use this as Delaware's recording/interception hook. For recording police, also analyze whether the recording occurs in public, whether it interferes with official duties, and First Amendment public-recording rules.`,
  },
  {
    id: "de-code-title-11-4333-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "DE",
    topicIds: ["supervision"],
    citation: "11 Del. C. sec. 4333",
    title: "Terms and conditions of probation or suspension of sentence",
    officialUrl: "https://delcode.delaware.gov/title11/c043/sc03/index.html#4333",
    sourceName: "Delaware Code Online",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Delaware Code Online current through acts received by May 22, 2026; queried June 27, 2026",
    reviewStatus: "approved",
    text: `11 Del. C. sec. 4333 Terms and conditions of probation or suspension of sentence.

Delaware courts may impose terms and conditions when placing a person on probation or suspending sentence. Conditions can include supervision requirements, restitution, treatment, conduct rules, and other court-ordered terms authorized by law.

Use this with the person's written probation order for specific condition questions. Some offenses and supervision levels carry special requirements.`,
  },
  {
    id: "de-code-title-11-4334-probation-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "DE",
    topicIds: ["supervision"],
    citation: "11 Del. C. sec. 4334",
    title: "Violation of probation or suspension of sentence",
    officialUrl: "https://delcode.delaware.gov/title11/c043/sc03/index.html#4334",
    sourceName: "Delaware Code Online",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Delaware Code Online current through acts received by May 22, 2026; queried June 27, 2026",
    reviewStatus: "approved",
    text: `11 Del. C. sec. 4334 Violation of probation or suspension of sentence.

Delaware law governs what happens when a person is alleged to have violated probation or a suspended sentence. The court may address the violation through statutory violation proceedings and available sanctions.

Use this for Delaware probation-violation answers, but confirm hearing procedure, rights, burden, and sentencing exposure in the official section and court rules.`,
  },
  {
    id: "de-code-title-11-4347-parole-authority",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "DE",
    topicIds: ["supervision"],
    citation: "11 Del. C. sec. 4347",
    title: "Parole authority and release framework",
    officialUrl: "https://delcode.delaware.gov/title11/c043/sc04/index.html#4347",
    sourceName: "Delaware Code Online",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Delaware Code Online current through acts received by May 22, 2026; queried June 27, 2026",
    reviewStatus: "approved",
    text: `11 Del. C. sec. 4347 Parole authority and release framework.

Delaware parole law gives the Board of Parole authority over eligible parole release decisions and parole conditions within statutory limits. Delaware parole eligibility and supervision depend on sentence date, offense, sentence structure, credits, board action, and statutory exclusions.

Use this as a Delaware parole framework hook, not as a release-date calculator. A specific answer requires the judgment, sentence, offense date, parole eligibility law, board decision, and written parole conditions.`,
  },
  {
    id: "fl-stat-97-041-voter-qualification-felony",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "FL",
    topicIds: ["voting"],
    citation: "Fla. Stat. sec. 97.041",
    title: "Qualifications to register or vote",
    officialUrl:
      "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0097/Sections/0097.041.html",
    sourceName: "Florida Legislature Online Sunshine",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "2025 Florida Statutes page queried June 27, 2026",
    reviewStatus: "approved",
    text: `Fla. Stat. sec. 97.041 Qualifications to register or vote.

Florida voter registration law provides that a person otherwise qualified is not entitled to register or vote if the person has been convicted of a felony by any court of record and has not had the right to vote restored pursuant to law.

Use this as Florida's felony voting-rights gateway. A specific answer must account for the type of conviction, completion of sentence, legal financial obligations, clemency or restoration rules, and current election guidance.`,
  },
  {
    id: "fl-stat-943-0585-expunction-criminal-history",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "FL",
    topicIds: ["expungement"],
    citation: "Fla. Stat. sec. 943.0585",
    title: "Court-ordered expunction of criminal history records",
    officialUrl:
      "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0900-0999/0943/Sections/0943.0585.html",
    sourceName: "Florida Legislature Online Sunshine",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "2025 Florida Statutes page queried June 27, 2026",
    reviewStatus: "approved",
    text: `Fla. Stat. sec. 943.0585 Court-ordered expunction of criminal history records.

Florida permits court-ordered expunction of eligible criminal history records when statutory criteria are met, including cases where no charging document was filed or issued, charges were dismissed or nolle prossed, or the person was acquitted, subject to exclusions and certificate-of-eligibility requirements.

If expunction is granted, most records are physically destroyed or obliterated, though FDLE retains a confidential record. The person may generally deny or fail to acknowledge the covered arrests, subject to listed exceptions for criminal justice employment, criminal prosecutions, later petitions, The Florida Bar, sensitive agency employment or licensing, and other statutory exceptions.`,
  },
  {
    id: "fl-stat-943-059-sealing-criminal-history",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "FL",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Fla. Stat. sec. 943.059",
    title: "Court-ordered sealing of criminal history records",
    officialUrl:
      "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0900-0999/0943/Sections/0943.059.html",
    sourceName: "Florida Legislature Online Sunshine",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "2025 Florida Statutes page queried June 27, 2026",
    reviewStatus: "approved",
    text: `Fla. Stat. sec. 943.059 Court-ordered sealing of criminal history records.

Florida permits court-ordered sealing of eligible criminal history records when statutory criteria are met, including certificate-of-eligibility requirements and offense exclusions. Sealing keeps records confidential and exempt from public access but does not destroy every record.

Use this with Fla. Stat. sec. 943.0585 for Florida record-relief answers. A specific answer requires the charge, disposition, prior sealing or expunction history, supervision status, adjudication status, and ineligible offense list.`,
  },
  {
    id: "fl-stat-760-23-fair-housing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "FL",
    topicIds: ["housing"],
    citation: "Fla. Stat. sec. 760.23",
    title: "Discrimination in sale or rental of housing",
    officialUrl:
      "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0760/Sections/0760.23.html",
    sourceName: "Florida Legislature Online Sunshine",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "2025 Florida Statutes page queried June 27, 2026",
    reviewStatus: "approved",
    text: `Fla. Stat. sec. 760.23 Discrimination in the sale or rental of housing and other prohibited practices.

Florida fair-housing law prohibits refusal to sell or rent, discriminatory terms or conditions, discriminatory advertising, misrepresentation of availability, and related practices because of race, color, national origin, sex, disability, familial status, or religion.

Criminal history is not itself listed as a protected class in this section. For criminal-record housing screening, use this with federal HUD guidance, public-housing rules, sealing or expunction law, and any applicable local ordinance.`,
  },
  {
    id: "fl-stat-83-52-tenant-conduct-obligations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "FL",
    topicIds: ["housing"],
    citation: "Fla. Stat. sec. 83.52",
    title: "Tenant obligation to maintain dwelling unit",
    officialUrl:
      "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0083/Sections/0083.52.html",
    sourceName: "Florida Legislature Online Sunshine",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "2025 Florida Statutes page queried June 27, 2026",
    reviewStatus: "approved",
    text: `Fla. Stat. sec. 83.52 Tenant's obligation to maintain dwelling unit.

Florida landlord-tenant law requires tenants to maintain the dwelling unit and conduct themselves, and require others on the premises with consent to conduct themselves, in a manner that does not unreasonably disturb neighbors or constitute a breach of the peace.

Use this as a landlord-tenant conduct hook, not a criminal-record screening rule. For application screening, use fair-housing law, consumer-reporting law, public/subsidized housing rules, and record-sealing or expunction law.`,
  },
  {
    id: "fl-stat-112-011-public-employment-licensing-civil-rights",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "FL",
    topicIds: ["employment"],
    citation: "Fla. Stat. sec. 112.011",
    title: "Disqualification from employment or licensing because of conviction",
    officialUrl:
      "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0100-0199/0112/Sections/0112.011.html",
    sourceName: "Florida Legislature Online Sunshine",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "2025 Florida Statutes page queried June 27, 2026",
    reviewStatus: "approved",
    text: `Fla. Stat. sec. 112.011 Disqualification from licensing, permitting, or public employment because of conviction.

Florida limits disqualification from public employment or from a license, permit, or certificate because of a prior conviction, subject to statutory exceptions and occupation-specific laws. The statute is a core Florida employment and occupational-licensing source for people with records.

Use this with the exact license or job category, because some occupations have separate mandatory bars, good-moral-character rules, or agency-specific screening statutes.`,
  },
  {
    id: "fl-stat-901-151-stop-and-frisk",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "FL",
    topicIds: ["police"],
    citation: "Fla. Stat. sec. 901.151",
    title: "Florida Stop and Frisk Law",
    officialUrl:
      "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0900-0999/0901/Sections/0901.151.html",
    sourceName: "Florida Legislature Online Sunshine",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "2025 Florida Statutes page queried June 27, 2026",
    reviewStatus: "approved",
    text: `Fla. Stat. sec. 901.151 Florida Stop and Frisk Law.

Florida law allows a law enforcement officer to temporarily detain a person when circumstances reasonably indicate the person has committed, is committing, or is about to commit a criminal offense, for the purpose of ascertaining identity and the circumstances surrounding the person's presence. The detention may not last longer than reasonably necessary and may not extend beyond the place first effected or its immediate vicinity.

If probable cause appears, the person shall be arrested; if no probable cause appears after inquiry, the person shall be released. Use this as Florida's stop/detention identity hook, not as a duty to answer every question.`,
  },
  {
    id: "fl-stat-934-03-interception-communications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "FL",
    topicIds: ["police"],
    citation: "Fla. Stat. sec. 934.03",
    title: "Interception and disclosure of wire, oral, or electronic communications",
    officialUrl:
      "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0900-0999/0934/Sections/0934.03.html",
    sourceName: "Florida Legislature Online Sunshine",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "2025 Florida Statutes page queried June 27, 2026",
    reviewStatus: "approved",
    text: `Fla. Stat. sec. 934.03 Interception and disclosure of wire, oral, or electronic communications.

Florida prohibits intentional interception, use, or disclosure of wire, oral, or electronic communications unless a statutory exception applies. Florida is generally treated as an all-party-consent state for recording private oral communications, subject to statutory definitions and exceptions.

Use this as Florida's recording/interception hook. For recording police, analyze whether the communication was an oral communication with a reasonable expectation of privacy, whether the recording was public, and whether the recording interfered with lawful duties.`,
  },
  {
    id: "fl-stat-948-03-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "FL",
    topicIds: ["supervision"],
    citation: "Fla. Stat. sec. 948.03",
    title: "Terms and conditions of probation",
    officialUrl:
      "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0900-0999/0948/Sections/0948.03.html",
    sourceName: "Florida Legislature Online Sunshine",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "2025 Florida Statutes page queried June 27, 2026",
    reviewStatus: "approved",
    text: `Fla. Stat. sec. 948.03 Terms and conditions of probation.

Florida courts determine the terms and conditions of probation. Standard conditions may include reporting as directed, permitting officer visits, working faithfully at suitable employment where possible, remaining within specified places, living without violating any law, making restitution, supporting legal dependents, avoiding criminal associations, substance testing, and not possessing firearms or weapons without consent.

Use the official section and the person's written supervision order for specific condition questions. Some offenses have additional mandatory conditions.`,
  },
  {
    id: "fl-stat-948-06-probation-community-control-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "FL",
    topicIds: ["supervision"],
    citation: "Fla. Stat. sec. 948.06",
    title: "Violation of probation or community control",
    officialUrl:
      "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0900-0999/0948/Sections/0948.06.html",
    sourceName: "Florida Legislature Online Sunshine",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "2025 Florida Statutes page queried June 27, 2026",
    reviewStatus: "approved",
    text: `Fla. Stat. sec. 948.06 Violation of probation or community control.

Florida law governs arrest, notice to appear, tolling, hearings, revocation, modification, continuance, and alternative sanctions when there are reasonable grounds to believe a person violated probation or community control in a material respect.

If probation or community control is revoked, the court may adjudicate guilt if needed and impose any sentence it could have imposed before supervision. Use the official section for technical violations, low-risk technical violations, bail, hearing procedure, and restitution or supervision-cost issues.`,
  },
  {
    id: "fl-stat-947-16-parole-eligibility-interview",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "FL",
    topicIds: ["supervision"],
    citation: "Fla. Stat. sec. 947.16",
    title: "Eligibility for parole; initial interview",
    officialUrl:
      "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0900-0999/0947/Sections/0947.16.html",
    sourceName: "Florida Legislature Online Sunshine",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "2025 Florida Statutes page queried June 27, 2026",
    reviewStatus: "approved",
    text: `Fla. Stat. sec. 947.16 Eligibility for parole; initial interview.

Florida parole law applies primarily to older parole-eligible sentences and governs eligibility, initial interview, and commission procedures. Most modern Florida prison sentences are not parole-eligible, so parole answers must start with the offense date and sentence type.

Use this as a parole framework hook, not a release-date calculator. A specific answer requires the judgment, offense date, sentence, gain-time law, commission records, and current supervision paperwork.`,
  },
  {
    id: "fl-stat-947-18-parole-release",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "FL",
    topicIds: ["supervision"],
    citation: "Fla. Stat. sec. 947.18",
    title: "Conditions and order of parole release",
    officialUrl:
      "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0900-0999/0947/Sections/0947.18.html",
    sourceName: "Florida Legislature Online Sunshine",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "2025 Florida Statutes page queried June 27, 2026",
    reviewStatus: "approved",
    text: `Fla. Stat. sec. 947.18 Conditions and order of parole release.

Florida parole release and conditions are governed by the Florida Commission on Offender Review under statutory limits. Parole conditions are individualized and tied to the commission's release order and supervision requirements.

Use this with Fla. Stat. sec. 947.16 for parole questions. A precise answer requires the parole order, offense date, sentence, commission action, and written conditions.`,
  },
  {
    id: "ga-const-art-ii-sec-i-para-iii-voting-felony",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "GA",
    topicIds: ["voting"],
    citation: "Ga. Const. art. II, sec. I, para. III",
    title: "Persons not entitled to register and vote",
    officialUrl: "https://www.legis.ga.gov/general-statutes",
    sourceName: "Georgia General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Georgia General Assembly official statutes landing page queried June 27, 2026; exact section text requires hosted-code adapter",
    reviewStatus: "approved",
    text: `Ga. Const. art. II, sec. I, para. III Persons not entitled to register and vote.

Georgia's constitution provides that a person convicted of a felony involving moral turpitude may not register, remain registered, or vote except upon completion of the sentence. This is Georgia's core felony voting-rights authority.

Use this with current Secretary of State guidance for plain-English answers. The key question is whether the person has completed the felony sentence, including any incarceration, probation, parole, and other sentence components.`,
  },
  {
    id: "ga-code-35-3-37-record-restriction",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "GA",
    topicIds: ["expungement", "employment", "housing"],
    citation: "O.C.G.A. sec. 35-3-37",
    title: "Restriction, correction, and inspection of criminal history records",
    officialUrl: "https://www.legis.ga.gov/general-statutes",
    sourceName: "Georgia General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Georgia General Assembly official statutes landing page queried June 27, 2026; exact section text requires hosted-code adapter",
    reviewStatus: "approved",
    text: `O.C.G.A. sec. 35-3-37 Restriction, correction, and inspection of criminal history records.

Georgia uses "record restriction" rather than traditional expungement for many adult criminal records. Restricted records are generally limited from public access but may remain available to criminal justice agencies and other statutorily authorized users.

Eligibility depends on disposition, offense type, sentence completion, waiting periods, prior history, and statutory exclusions. Use this as Georgia's primary record-restriction authority and verify the exact current subsection before giving a detailed eligibility answer.`,
  },
  {
    id: "ga-code-42-8-62-first-offender-discharge",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "GA",
    topicIds: ["expungement", "employment", "housing", "supervision"],
    citation: "O.C.G.A. sec. 42-8-62",
    title: "First offender discharge without court adjudication of guilt",
    officialUrl: "https://www.legis.ga.gov/general-statutes",
    sourceName: "Georgia General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Georgia General Assembly official statutes landing page queried June 27, 2026; exact section text requires hosted-code adapter",
    reviewStatus: "approved",
    text: `O.C.G.A. sec. 42-8-62 First offender discharge.

Georgia first-offender law allows eligible defendants who successfully complete first-offender sentencing to be discharged without court adjudication of guilt, subject to statutory conditions and exceptions.

Use this for Georgia first-offender record-consequence answers. Do not treat it as automatic expungement for every case; the person's sentencing order, completion status, and any revocation or adjudication must be checked.`,
  },
  {
    id: "ga-code-8-3-202-fair-housing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "GA",
    topicIds: ["housing"],
    citation: "O.C.G.A. sec. 8-3-202",
    title: "Unlawful housing practices",
    officialUrl: "https://www.legis.ga.gov/general-statutes",
    sourceName: "Georgia General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Georgia General Assembly official statutes landing page queried June 27, 2026; exact section text requires hosted-code adapter",
    reviewStatus: "approved",
    text: `O.C.G.A. sec. 8-3-202 Unlawful housing practices.

Georgia fair-housing law prohibits covered discriminatory housing practices based on protected characteristics. This is Georgia's core state fair-housing source for housing-rights answers.

Criminal history is not itself the same as a protected class under this section. For criminal-record housing screening, pair this with federal HUD guidance, record-restriction law, public-housing rules, and any applicable local ordinance.`,
  },
  {
    id: "ga-code-44-7-50-tenant-holding-over-dispossessory",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "GA",
    topicIds: ["housing"],
    citation: "O.C.G.A. sec. 44-7-50",
    title: "Tenant holding over and dispossessory proceedings",
    officialUrl: "https://www.legis.ga.gov/general-statutes",
    sourceName: "Georgia General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Georgia General Assembly official statutes landing page queried June 27, 2026; exact section text requires hosted-code adapter",
    reviewStatus: "approved",
    text: `O.C.G.A. sec. 44-7-50 Tenant holding over and dispossessory proceedings.

Georgia landlord-tenant law governs dispossessory proceedings when a tenant holds over, fails to pay rent, or otherwise may be removed under statutory grounds and lease terms.

Use this as a Georgia landlord-tenant enforcement hook, not as a criminal-record screening statute. For application screening questions, use fair-housing, consumer-reporting, record-restriction, subsidized housing, and local law sources.`,
  },
  {
    id: "ga-code-35-3-34-criminal-history-employment-access",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "GA",
    topicIds: ["employment"],
    citation: "O.C.G.A. sec. 35-3-34",
    title: "Dissemination of criminal history record information",
    officialUrl: "https://www.legis.ga.gov/general-statutes",
    sourceName: "Georgia General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Georgia General Assembly official statutes landing page queried June 27, 2026; exact section text requires hosted-code adapter",
    reviewStatus: "approved",
    text: `O.C.G.A. sec. 35-3-34 Dissemination of criminal history record information.

Georgia law governs dissemination of criminal history record information, including access for employment, licensing, and other authorized purposes. This matters because record-restriction relief limits public access but does not necessarily prevent all authorized criminal history checks.

Use this with O.C.G.A. sec. 35-3-37 and occupation-specific laws when answering employment background-check questions.`,
  },
  {
    id: "ga-code-43-1-19-professional-license-discipline",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "GA",
    topicIds: ["employment"],
    citation: "O.C.G.A. sec. 43-1-19",
    title: "Professional licensing discipline and criminal convictions",
    officialUrl: "https://www.legis.ga.gov/general-statutes",
    sourceName: "Georgia General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Georgia General Assembly official statutes landing page queried June 27, 2026; exact section text requires hosted-code adapter",
    reviewStatus: "approved",
    text: `O.C.G.A. sec. 43-1-19 Professional licensing discipline and criminal convictions.

Georgia professional licensing boards may have authority to refuse, suspend, or revoke licenses based on criminal convictions or conduct under statutory standards. The impact of a conviction depends on the board, profession, offense, time elapsed, rehabilitation, and any mandatory disqualification law.

Use this as Georgia's occupational-licensing conviction hook, but verify the specific licensing board statute and rules before giving a specific eligibility answer.`,
  },
  {
    id: "ga-code-16-10-24-obstruction-officer",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "GA",
    topicIds: ["police"],
    citation: "O.C.G.A. sec. 16-10-24",
    title: "Obstructing or hindering law enforcement officers",
    officialUrl: "https://www.legis.ga.gov/general-statutes",
    sourceName: "Georgia General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Georgia General Assembly official statutes landing page queried June 27, 2026; exact section text requires hosted-code adapter",
    reviewStatus: "approved",
    text: `O.C.G.A. sec. 16-10-24 Obstructing or hindering law enforcement officers.

Georgia prohibits knowingly and willfully obstructing or hindering a law enforcement officer in the lawful discharge of official duties. This is a common police-interaction authority when conduct during an encounter is at issue.

Do not present this as a broad stop-and-identify statute. For police-stop questions, lead with constitutional reasonable-suspicion rules and whether the conduct actually obstructed or hindered lawful duties.`,
  },
  {
    id: "ga-code-16-11-66-recording-consent",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "GA",
    topicIds: ["police"],
    citation: "O.C.G.A. sec. 16-11-66",
    title: "Recording communications by a party",
    officialUrl: "https://www.legis.ga.gov/general-statutes",
    sourceName: "Georgia General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Georgia General Assembly official statutes landing page queried June 27, 2026; exact section text requires hosted-code adapter",
    reviewStatus: "approved",
    text: `O.C.G.A. sec. 16-11-66 Recording communications by a party.

Georgia law generally allows a person who is a party to a communication, or who has consent from a party, to record that communication, subject to statutory limits and exceptions. Georgia is generally treated as a one-party-consent state for covered conversations.

Use this as Georgia's recording-consent hook. For recording police, also analyze whether the recording is public, whether there is interference with lawful duties, and First Amendment public-recording rules.`,
  },
  {
    id: "ga-code-42-8-35-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "GA",
    topicIds: ["supervision"],
    citation: "O.C.G.A. sec. 42-8-35",
    title: "Terms and conditions of probation",
    officialUrl: "https://www.legis.ga.gov/general-statutes",
    sourceName: "Georgia General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Georgia General Assembly official statutes landing page queried June 27, 2026; exact section text requires hosted-code adapter",
    reviewStatus: "approved",
    text: `O.C.G.A. sec. 42-8-35 Terms and conditions of probation.

Georgia courts may impose statutory and reasonable conditions of probation, including reporting, law-abiding conduct, restitution, employment, treatment, residence, association, and other terms authorized by law and the sentencing order.

Use this with the person's written probation sentence for specific condition questions. Some offenses carry mandatory or specialized conditions.`,
  },
  {
    id: "ga-code-42-8-38-probation-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "GA",
    topicIds: ["supervision"],
    citation: "O.C.G.A. sec. 42-8-38",
    title: "Arrest and revocation of probation",
    officialUrl: "https://www.legis.ga.gov/general-statutes",
    sourceName: "Georgia General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Georgia General Assembly official statutes landing page queried June 27, 2026; exact section text requires hosted-code adapter",
    reviewStatus: "approved",
    text: `O.C.G.A. sec. 42-8-38 Arrest and revocation of probation.

Georgia law governs arrest, hearings, and revocation when a person is alleged to have violated probation. The court may address violations through statutory revocation procedures and available sanctions.

Use this for Georgia probation-violation answers, but verify hearing rights, tolling, sentencing exposure, and any graduated-sanction rules in the official section and court rules.`,
  },
  {
    id: "ga-code-42-9-42-parole-board-powers",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "GA",
    topicIds: ["supervision"],
    citation: "O.C.G.A. sec. 42-9-42",
    title: "State Board of Pardons and Paroles powers",
    officialUrl: "https://www.legis.ga.gov/general-statutes",
    sourceName: "Georgia General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Georgia General Assembly official statutes landing page queried June 27, 2026; exact section text requires hosted-code adapter",
    reviewStatus: "approved",
    text: `O.C.G.A. sec. 42-9-42 State Board of Pardons and Paroles powers.

Georgia parole release and supervision are governed by the State Board of Pardons and Paroles within statutory authority and board rules. Parole eligibility and release depend on offense, sentence, law in effect, board policy, and individual case review.

Use this as Georgia's parole framework source, not as a release-date calculator. A specific answer requires the sentence, offense date, board decision, and written parole conditions.`,
  },
  {
    id: "ga-code-42-9-45-parole-conditions-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "GA",
    topicIds: ["supervision"],
    citation: "O.C.G.A. sec. 42-9-45",
    title: "Parole conditions and revocation framework",
    officialUrl: "https://www.legis.ga.gov/general-statutes",
    sourceName: "Georgia General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Georgia General Assembly official statutes landing page queried June 27, 2026; exact section text requires hosted-code adapter",
    reviewStatus: "approved",
    text: `O.C.G.A. sec. 42-9-45 Parole conditions and revocation framework.

Georgia parole conditions and revocation procedure are governed by statute, board rules, and the person's written parole certificate or supervision paperwork. Violations may lead to sanctions or revocation depending on the violation and procedure.

Use this with O.C.G.A. sec. 42-9-42 for parole-supervision answers. For a specific violation, check the written conditions and current board procedure.`,
  },
  {
    id: "hi-hrs-11-15-voter-qualification-felony",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "HI",
    topicIds: ["voting"],
    citation: "Haw. Rev. Stat. sec. 11-15",
    title: "Application to register; voter qualifications",
    officialUrl:
      "https://www.capitol.hawaii.gov/hrscurrent/Vol01_Ch0001-0042F/HRS0011/HRS_0011-0015.htm",
    sourceName: "Hawaii State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Hawaii Revised Statutes current site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Haw. Rev. Stat. sec. 11-15 Application to register; voter qualifications.

Hawaii voter registration law includes the qualifications to register and vote. Hawaii generally restores voting rights after release from incarceration, so a felony conviction primarily affects voting while the person is imprisoned for the conviction.

Use this as Hawaii's felony voting-rights authority with current election-office guidance. For a user-facing answer, confirm whether the person is incarcerated, released on supervision, or fully discharged.`,
  },
  {
    id: "hi-hrs-831-3-2-expungement-nonconviction",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "HI",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Haw. Rev. Stat. sec. 831-3.2",
    title: "Expungement orders",
    officialUrl:
      "https://www.capitol.hawaii.gov/hrscurrent/Vol14_Ch0701-0853/HRS0831/HRS_0831-0003_0002.htm",
    sourceName: "Hawaii State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Hawaii Revised Statutes current site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Haw. Rev. Stat. sec. 831-3.2 Expungement orders.

Hawaii law provides for expungement of certain arrest records and related records when statutory conditions are met, including records not resulting in conviction and other eligible circumstances. Expungement orders affect access and disclosure but do not necessarily erase all records for all government purposes.

Use this as Hawaii's primary expungement authority. A specific answer requires the charge, disposition, prior relief, court or agency records involved, and statutory exceptions.`,
  },
  {
    id: "hi-hrs-831-3-1-order-annulling-conviction",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "HI",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Haw. Rev. Stat. sec. 831-3.1",
    title: "Order annulling, canceling, or rescinding conviction",
    officialUrl:
      "https://www.capitol.hawaii.gov/hrscurrent/Vol14_Ch0701-0853/HRS0831/HRS_0831-0003_0001.htm",
    sourceName: "Hawaii State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Hawaii Revised Statutes current site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Haw. Rev. Stat. sec. 831-3.1 Order annulling, canceling, or rescinding conviction.

Hawaii law authorizes certain conviction-relief orders in limited circumstances. The effect and eligibility depend on the offense, sentence, statutory criteria, and court order.

Use this alongside Haw. Rev. Stat. sec. 831-3.2 for Hawaii record-relief answers. Do not treat it as broad automatic expungement without checking the official section and the person's court order.`,
  },
  {
    id: "hi-hrs-515-3-discriminatory-housing-practices",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "HI",
    topicIds: ["housing"],
    citation: "Haw. Rev. Stat. sec. 515-3",
    title: "Discriminatory practices in real property transactions",
    officialUrl:
      "https://www.capitol.hawaii.gov/hrscurrent/Vol12_Ch0501-0588/HRS0515/HRS_0515-0003.htm",
    sourceName: "Hawaii State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Hawaii Revised Statutes current site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Haw. Rev. Stat. sec. 515-3 Discriminatory practices in real property transactions.

Hawaii fair-housing law prohibits covered discriminatory practices in real property transactions based on protected characteristics. This is Hawaii's core state fair-housing authority.

Criminal history is not itself the same as a protected class under this section. For criminal-record housing screening, combine this source with federal HUD guidance, record-relief law, consumer-reporting law, and public or subsidized housing rules.`,
  },
  {
    id: "hi-hrs-521-51-tenant-obligations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "HI",
    topicIds: ["housing"],
    citation: "Haw. Rev. Stat. sec. 521-51",
    title: "Tenant obligations",
    officialUrl:
      "https://www.capitol.hawaii.gov/hrscurrent/Vol12_Ch0501-0588/HRS0521/HRS_0521-0051.htm",
    sourceName: "Hawaii State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Hawaii Revised Statutes current site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Haw. Rev. Stat. sec. 521-51 Tenant obligations.

Hawaii landlord-tenant law sets tenant obligations for maintaining the dwelling and complying with law and lease obligations. Violations can matter for lease enforcement and termination depending on the facts and statutory procedure.

Use this as a landlord-tenant conduct hook, not as a criminal-record screening rule. For application screening, use fair-housing law, consumer-reporting law, record-relief law, and public or subsidized housing sources.`,
  },
  {
    id: "hi-hrs-378-2-5-employment-conviction-record",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "HI",
    topicIds: ["employment"],
    citation: "Haw. Rev. Stat. sec. 378-2.5",
    title: "Employer inquiries into conviction record",
    officialUrl:
      "https://www.capitol.hawaii.gov/hrscurrent/Vol07_Ch0346-0398/HRS0378/HRS_0378-0002_0005.htm",
    sourceName: "Hawaii State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Hawaii Revised Statutes current site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Haw. Rev. Stat. sec. 378-2.5 Employer inquiries into conviction record.

Hawaii limits employer inquiry into and consideration of conviction records. Employers generally may inquire into conviction history only after a conditional offer and may withdraw an offer based on conviction history only if the conviction bears a rational relationship to the duties and responsibilities of the position.

Use this as Hawaii's primary fair-chance employment authority. Check exceptions, timing, lookback limits, and occupation-specific laws before giving a specific employment answer.`,
  },
  {
    id: "hi-hrs-831-3-3-employment-conviction-relief",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "HI",
    topicIds: ["employment"],
    citation: "Haw. Rev. Stat. sec. 831-3.3",
    title: "Employment-related effect of conviction relief",
    officialUrl:
      "https://www.capitol.hawaii.gov/hrscurrent/Vol14_Ch0701-0853/HRS0831/HRS_0831-0003_0003.htm",
    sourceName: "Hawaii State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Hawaii Revised Statutes current site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Haw. Rev. Stat. sec. 831-3.3 Employment-related conviction relief.

Hawaii law includes relief provisions affecting how certain criminal records may be treated in employment or civil contexts after appropriate court or agency relief.

Use this with Haw. Rev. Stat. sec. 378-2.5 and profession-specific licensing statutes. A specific occupational answer requires the exact job or license, conviction, time elapsed, relief order, and any mandatory disqualification law.`,
  },
  {
    id: "hi-hrs-803-6-stop-identify",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "HI",
    topicIds: ["police"],
    citation: "Haw. Rev. Stat. sec. 803-6",
    title: "Temporary questioning of persons in public places",
    officialUrl:
      "https://www.capitol.hawaii.gov/hrscurrent/Vol14_Ch0701-0853/HRS0803/HRS_0803-0006.htm",
    sourceName: "Hawaii State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Hawaii Revised Statutes current site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Haw. Rev. Stat. sec. 803-6 Temporary questioning of persons in public places.

Hawaii law authorizes temporary police questioning in public places under statutory conditions. This is Hawaii's police-stop identification hook.

Do not present this as a duty to answer every police question. For police-stop answers, lead with constitutional reasonable-suspicion rules, whether the person is detained, and safety-focused practical guidance.`,
  },
  {
    id: "hi-hrs-803-42-interception-communications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "HI",
    topicIds: ["police"],
    citation: "Haw. Rev. Stat. sec. 803-42",
    title: "Interception of wire, oral, or electronic communications",
    officialUrl:
      "https://www.capitol.hawaii.gov/hrscurrent/Vol14_Ch0701-0853/HRS0803/HRS_0803-0042.htm",
    sourceName: "Hawaii State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Hawaii Revised Statutes current site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Haw. Rev. Stat. sec. 803-42 Interception of wire, oral, or electronic communications.

Hawaii prohibits certain interceptions of wire, oral, or electronic communications and includes consent-based exceptions. Hawaii is generally treated as a one-party-consent state for covered recordings, subject to statutory details and exceptions.

Use this as Hawaii's recording/interception hook. For recording police, also analyze whether the interaction is public, whether there is interference with official duties, and constitutional public-recording rules.`,
  },
  {
    id: "hi-hrs-706-624-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "HI",
    topicIds: ["supervision"],
    citation: "Haw. Rev. Stat. sec. 706-624",
    title: "Conditions of probation",
    officialUrl:
      "https://www.capitol.hawaii.gov/hrscurrent/Vol14_Ch0701-0853/HRS0706/HRS_0706-0624.htm",
    sourceName: "Hawaii State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Hawaii Revised Statutes current site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Haw. Rev. Stat. sec. 706-624 Conditions of probation.

Hawaii courts may impose statutory conditions of probation, including reporting, law-abiding conduct, restitution, treatment, employment, residence, association, and other conditions tied to rehabilitation and public safety.

Use this with the person's written probation order for specific condition questions. Some offenses carry mandatory or specialized conditions.`,
  },
  {
    id: "hi-hrs-706-625-revocation-modification-probation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "HI",
    topicIds: ["supervision"],
    citation: "Haw. Rev. Stat. sec. 706-625",
    title: "Revocation, modification, and discharge of probation",
    officialUrl:
      "https://www.capitol.hawaii.gov/hrscurrent/Vol14_Ch0701-0853/HRS0706/HRS_0706-0625.htm",
    sourceName: "Hawaii State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Hawaii Revised Statutes current site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Haw. Rev. Stat. sec. 706-625 Revocation, modification, and discharge of probation.

Hawaii law governs probation revocation, modification, and discharge. If a violation is alleged, the court may address it through statutory procedures and available sanctions.

Use this for Hawaii probation-violation answers, but verify hearing procedure, rights, burden, and available sanctions in the official section and court rules.`,
  },
  {
    id: "hi-hrs-353-64-parole-release",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "HI",
    topicIds: ["supervision"],
    citation: "Haw. Rev. Stat. sec. 353-64",
    title: "Parole; terms and conditions",
    officialUrl:
      "https://www.capitol.hawaii.gov/hrscurrent/Vol07_Ch0346-0398/HRS0353/HRS_0353-0064.htm",
    sourceName: "Hawaii State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Hawaii Revised Statutes current site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Haw. Rev. Stat. sec. 353-64 Parole; terms and conditions.

Hawaii parole release and supervision are governed by statute, the Hawaii Paroling Authority, and the person's written parole conditions. Eligibility and release depend on offense, sentence, minimum term, board action, and supervision plan.

Use this as Hawaii's parole framework source, not as a release-date calculator. A specific answer requires the judgment, sentence, minimum term, paroling authority decision, and written conditions.`,
  },
  {
    id: "id-code-18-310-civil-rights-restoration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ID",
    topicIds: ["voting"],
    citation: "Idaho Code sec. 18-310",
    title: "Suspension and restoration of civil rights after felony conviction",
    officialUrl:
      "https://legislature.idaho.gov/statutesrules/idstat/Title18/T18CH31/SECT18-310/",
    sourceName: "Idaho Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Idaho Legislature statutes site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Idaho Code sec. 18-310 Suspension and restoration of civil rights after felony conviction.

Idaho law suspends certain civil rights after a felony conviction and provides for restoration after final discharge, subject to statutory limits. This is the core Idaho authority for felony voting-rights restoration.

Use this with current election guidance. For a user-facing answer, confirm whether the person has received final discharge from incarceration, probation, or parole and whether any right remains separately restricted.`,
  },
  {
    id: "id-code-34-402-voter-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ID",
    topicIds: ["voting"],
    citation: "Idaho Code sec. 34-402",
    title: "Qualifications of electors",
    officialUrl:
      "https://legislature.idaho.gov/statutesrules/idstat/Title34/T34CH4/SECT34-402/",
    sourceName: "Idaho Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Idaho Legislature statutes site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Idaho Code sec. 34-402 Qualifications of electors.

Idaho voter qualification law sets the baseline qualifications for electors. For people with felony convictions, use this together with Idaho Code sec. 18-310 on suspension and restoration of civil rights.

Do not answer a felony voting question from the voter-qualification section alone; the restoration rule and the person's final-discharge status matter.`,
  },
  {
    id: "id-code-19-2604-dismissal-set-aside",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ID",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Idaho Code sec. 19-2604",
    title: "Dismissal and set-aside after probation or suspended sentence",
    officialUrl:
      "https://legislature.idaho.gov/statutesrules/idstat/Title19/T19CH26/SECT19-2604/",
    sourceName: "Idaho Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Idaho Legislature statutes site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Idaho Code sec. 19-2604 Dismissal and set-aside after probation or suspended sentence.

Idaho allows certain defendants who have complied with probation or a suspended sentence to apply for dismissal of the case and relief from penalties and disabilities, subject to statutory eligibility and exclusions.

Use this as Idaho's primary conviction set-aside authority. It is not broad automatic expungement. A specific answer requires the offense, sentence, probation completion, prior record, and statutory exclusions.`,
  },
  {
    id: "id-code-67-3004-criminal-history-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ID",
    topicIds: ["expungement"],
    citation: "Idaho Code sec. 67-3004",
    title: "Expungement of fingerprint and criminal history records",
    officialUrl:
      "https://legislature.idaho.gov/statutesrules/idstat/Title67/T67CH30/SECT67-3004/",
    sourceName: "Idaho Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Idaho Legislature statutes site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Idaho Code sec. 67-3004 Expungement of fingerprint and criminal history records.

Idaho law provides limited expungement of fingerprint and criminal history records in specified circumstances, including situations where the person was arrested or summoned and the case did not result in a conviction as provided by statute.

Use this for Idaho nonconviction expungement questions. For conviction relief, use Idaho Code sec. 19-2604 and verify the exact record consequence.`,
  },
  {
    id: "id-code-67-5909-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ID",
    topicIds: ["housing"],
    citation: "Idaho Code sec. 67-5909",
    title: "Discrimination in real property transactions",
    officialUrl:
      "https://legislature.idaho.gov/statutesrules/idstat/Title67/T67CH59/SECT67-5909/",
    sourceName: "Idaho Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Idaho Legislature statutes site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Idaho Code sec. 67-5909 Discrimination in real property transactions.

Idaho fair-housing law prohibits covered discriminatory real property practices based on protected characteristics. This is Idaho's core state fair-housing source for housing-rights answers.

Criminal history is not itself the same as a protected class under this section. For criminal-record screening, use this with federal HUD guidance, record-relief rules, consumer-reporting law, public housing law, and local law where applicable.`,
  },
  {
    id: "id-code-6-303-unlawful-detainer",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ID",
    topicIds: ["housing"],
    citation: "Idaho Code sec. 6-303",
    title: "Unlawful detainer",
    officialUrl:
      "https://legislature.idaho.gov/statutesrules/idstat/Title6/T6CH3/SECT6-303/",
    sourceName: "Idaho Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Idaho Legislature statutes site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Idaho Code sec. 6-303 Unlawful detainer.

Idaho unlawful-detainer law governs removal proceedings and landlord remedies when a tenant remains in possession or violates lease or statutory obligations under circumstances listed by law.

Use this as a landlord-tenant enforcement hook, not as a criminal-record screening rule. Screening answers should rely on fair-housing, consumer-reporting, record-relief, public housing, and local law sources.`,
  },
  {
    id: "id-code-67-5909-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ID",
    topicIds: ["employment"],
    citation: "Idaho Code sec. 67-5909",
    title: "Unlawful employment practices",
    officialUrl:
      "https://legislature.idaho.gov/statutesrules/idstat/Title67/T67CH59/SECT67-5909/",
    sourceName: "Idaho Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Idaho Legislature statutes site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Idaho Code sec. 67-5909 Unlawful employment practices.

Idaho Human Rights Act employment provisions prohibit covered discriminatory employment practices based on protected characteristics. This is useful for employment-rights framing, but criminal history is not itself a listed protected class.

For criminal-record hiring questions, use this with record-relief law, occupational-licensing rules, federal law, and any employer- or occupation-specific screening statute.`,
  },
  {
    id: "id-code-67-9411-occupational-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ID",
    topicIds: ["employment"],
    citation: "Idaho Code sec. 67-9411",
    title: "Occupational licensing restrictions based on criminal convictions",
    officialUrl:
      "https://legislature.idaho.gov/statutesrules/idstat/Title67/T67CH94/SECT67-9411/",
    sourceName: "Idaho Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Idaho Legislature statutes site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Idaho Code sec. 67-9411 Occupational licensing restrictions based on criminal convictions.

Idaho limits how licensing authorities may deny or discipline occupational licenses based on criminal convictions. Licensing analysis turns on statutory standards, the relationship between the offense and occupation, rehabilitation, time elapsed, and any occupation-specific law.

Use this as Idaho's primary occupational-licensing conviction authority. A specific answer requires the exact license, conviction, timing, and board rules.`,
  },
  {
    id: "id-code-19-615-temporary-questioning",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ID",
    topicIds: ["police"],
    citation: "Idaho Code sec. 19-615",
    title: "Temporary questioning of persons in public places",
    officialUrl:
      "https://legislature.idaho.gov/statutesrules/idstat/Title19/T19CH6/SECT19-615/",
    sourceName: "Idaho Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Idaho Legislature statutes site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Idaho Code sec. 19-615 Temporary questioning of persons in public places.

Idaho law authorizes a peace officer to stop a person in a public place under statutory suspicion standards and demand the person's name, address, and an explanation of the person's actions.

Use this as Idaho's stop-and-identify hook. It does not mean a person must answer every question. Police-stop answers should lead with reasonable suspicion, whether the person is detained, and practical safety guidance.`,
  },
  {
    id: "id-code-18-6702-interception-communications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ID",
    topicIds: ["police"],
    citation: "Idaho Code sec. 18-6702",
    title: "Interception and disclosure of wire, electronic, or oral communications",
    officialUrl:
      "https://legislature.idaho.gov/statutesrules/idstat/Title18/T18CH67/SECT18-6702/",
    sourceName: "Idaho Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Idaho Legislature statutes site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Idaho Code sec. 18-6702 Interception and disclosure of wire, electronic, or oral communications.

Idaho prohibits certain interceptions, disclosures, and uses of wire, electronic, or oral communications, but includes consent-based exceptions. Idaho is generally treated as a one-party-consent state for covered recordings, subject to statutory details and exceptions.

Use this as Idaho's recording/interception hook. For recording police, also analyze public setting, expectation of privacy, interference with duties, and First Amendment public-recording rules.`,
  },
  {
    id: "id-code-19-2601-probation-suspension-sentence",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ID",
    topicIds: ["supervision"],
    citation: "Idaho Code sec. 19-2601",
    title: "Suspension of judgment or sentence; probation",
    officialUrl:
      "https://legislature.idaho.gov/statutesrules/idstat/Title19/T19CH26/SECT19-2601/",
    sourceName: "Idaho Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Idaho Legislature statutes site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Idaho Code sec. 19-2601 Suspension of judgment or sentence; probation.

Idaho courts may suspend judgment or sentence and place a person on probation under statutory authority and court-imposed conditions.

Use this as Idaho's probation framework source with the person's written judgment and probation order. Specific conditions, length, and consequences depend on the offense, sentence, and court order.`,
  },
  {
    id: "id-code-20-222-commission-pardons-parole",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ID",
    topicIds: ["supervision"],
    citation: "Idaho Code sec. 20-222",
    title: "Commission of Pardons and Parole powers",
    officialUrl:
      "https://legislature.idaho.gov/statutesrules/idstat/Title20/T20CH2/SECT20-222/",
    sourceName: "Idaho Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Idaho Legislature statutes site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Idaho Code sec. 20-222 Commission of Pardons and Parole powers.

Idaho parole release and supervision are governed by the Commission of Pardons and Parole under statutory authority. Eligibility and release depend on offense, sentence, minimum term, commission action, and supervision plan.

Use this as Idaho's parole framework authority, not as a release-date calculator. A specific answer requires the judgment, sentence, commission decision, and written parole conditions.`,
  },
  {
    id: "id-code-20-228-parole-violations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ID",
    topicIds: ["supervision"],
    citation: "Idaho Code sec. 20-228",
    title: "Parole violation and retaking parolee",
    officialUrl:
      "https://legislature.idaho.gov/statutesrules/idstat/Title20/T20CH2/SECT20-228/",
    sourceName: "Idaho Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Idaho Legislature statutes site queried June 27, 2026; section URL pattern pending adapter verification",
    reviewStatus: "approved",
    text: `Idaho Code sec. 20-228 Parole violation and retaking parolee.

Idaho law governs handling of alleged parole violations, including retaking a parolee and related commission procedures.

Use this with the person's written parole conditions and current commission procedures for specific violation questions. Do not give a parole-revocation answer from this record alone.`,
  },
  {
    id: "il-ilcs-10-5-3-5-voting-confinement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IL",
    topicIds: ["voting"],
    citation: "10 ILCS 5/3-5",
    title: "Persons convicted and confined not entitled to vote",
    officialUrl: "https://www.ilga.gov/legislation/ilcs/ilcs.asp",
    sourceName: "Illinois General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Illinois Compiled Statutes official landing page queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `10 ILCS 5/3-5 Persons convicted and confined not entitled to vote.

Illinois election law provides that a person who has been convicted and is serving a sentence of confinement in a penal institution is not entitled to vote until released from confinement.

Use this as Illinois' felony voting-rights authority. The practical distinction is incarceration versus release; a person released from confinement should check registration status and current election guidance.`,
  },
  {
    id: "il-ilcs-20-2630-5-2-expungement-sealing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IL",
    topicIds: ["expungement", "employment", "housing"],
    citation: "20 ILCS 2630/5.2",
    title: "Expungement and sealing of criminal records",
    officialUrl: "https://www.ilga.gov/legislation/ilcs/ilcs.asp",
    sourceName: "Illinois General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Illinois Compiled Statutes official landing page queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `20 ILCS 2630/5.2 Expungement and sealing of criminal records.

Illinois provides detailed procedures for expungement and sealing of eligible arrest, charge, supervision, qualified probation, and conviction records. Eligibility depends on disposition, offense type, waiting period, completion of sentence, pending charges, and statutory exclusions.

Use this as Illinois' primary record-relief authority. Do not give a detailed eligibility answer without checking the exact subsection for the charge, disposition, conviction class, and waiting period.`,
  },
  {
    id: "il-ilcs-775-5-3-102-real-estate-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IL",
    topicIds: ["housing"],
    citation: "775 ILCS 5/3-102",
    title: "Civil rights violations in real estate transactions",
    officialUrl: "https://www.ilga.gov/legislation/ilcs/ilcs.asp",
    sourceName: "Illinois General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Illinois Compiled Statutes official landing page queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `775 ILCS 5/3-102 Civil rights violations in real estate transactions.

Illinois Human Rights Act housing provisions prohibit covered discriminatory real estate practices based on protected characteristics. This is the core Illinois state fair-housing authority.

For criminal-record housing screening, also check Illinois record-sealing law, federal HUD guidance, public/subsidized housing rules, and local laws such as Cook County or Chicago fair-chance housing rules where applicable.`,
  },
  {
    id: "il-ilcs-775-5-3-102-5-arrest-record-housing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IL",
    topicIds: ["housing"],
    citation: "775 ILCS 5/3-102.5",
    title: "Arrest record protections in real estate transactions",
    officialUrl: "https://www.ilga.gov/legislation/ilcs/ilcs.asp",
    sourceName: "Illinois General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Illinois Compiled Statutes official landing page queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `775 ILCS 5/3-102.5 Arrest record protections in real estate transactions.

Illinois law provides protections related to arrest records in real estate transactions. This can be relevant when a landlord or housing provider relies on nonconviction information rather than a conviction.

Use this with 775 ILCS 5/3-102, federal HUD guidance, sealed-record rules, and local fair-chance housing ordinances before answering a criminal-record screening question.`,
  },
  {
    id: "il-ilcs-775-5-2-103-1-conviction-record-employment",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IL",
    topicIds: ["employment"],
    citation: "775 ILCS 5/2-103.1",
    title: "Conviction record employment restrictions",
    officialUrl: "https://www.ilga.gov/legislation/ilcs/ilcs.asp",
    sourceName: "Illinois General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Illinois Compiled Statutes official landing page queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `775 ILCS 5/2-103.1 Conviction record employment restrictions.

Illinois limits an employer's ability to use a conviction record in employment decisions unless there is a substantial relationship between the conviction and the employment sought or held, or granting or continuing employment would involve an unreasonable risk to property or safety.

Before taking adverse action, employers must follow statutory assessment and notice procedures. Use this as Illinois' core fair-chance employment authority.`,
  },
  {
    id: "il-ilcs-820-75-15-job-opportunities-initial-application",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IL",
    topicIds: ["employment"],
    citation: "820 ILCS 75/15",
    title: "Job Opportunities for Qualified Applicants Act",
    officialUrl: "https://www.ilga.gov/legislation/ilcs/ilcs.asp",
    sourceName: "Illinois General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Illinois Compiled Statutes official landing page queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `820 ILCS 75/15 Job Opportunities for Qualified Applicants Act.

Illinois restricts covered employers from inquiring into or considering criminal record or criminal history until the applicant has been selected for an interview or, if there is no interview, until after a conditional offer of employment, subject to statutory exceptions.

Use this with 775 ILCS 5/2-103.1 to explain both timing and substantive use of conviction records in employment.`,
  },
  {
    id: "il-ilcs-725-5-107-14-temporary-questioning",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IL",
    topicIds: ["police"],
    citation: "725 ILCS 5/107-14",
    title: "Temporary questioning without arrest",
    officialUrl: "https://www.ilga.gov/legislation/ilcs/ilcs.asp",
    sourceName: "Illinois General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Illinois Compiled Statutes official landing page queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `725 ILCS 5/107-14 Temporary questioning without arrest.

Illinois law authorizes a peace officer, after having identified themselves, to stop a person in a public place for a reasonable period when the officer reasonably infers from the circumstances that the person is committing, is about to commit, or has committed an offense, and may demand the person's name, address, and an explanation of actions.

Use this as Illinois' stop-and-identify hook. It does not require answering every police question, and any answer should include reasonable-suspicion limits and safety guidance.`,
  },
  {
    id: "il-ilcs-720-5-14-2-eavesdropping",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IL",
    topicIds: ["police"],
    citation: "720 ILCS 5/14-2",
    title: "Eavesdropping",
    officialUrl: "https://www.ilga.gov/legislation/ilcs/ilcs.asp",
    sourceName: "Illinois General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Illinois Compiled Statutes official landing page queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `720 ILCS 5/14-2 Eavesdropping.

Illinois prohibits certain audio recording or interception of private conversations without required consent and contains exceptions. Illinois recording law is especially fact-sensitive because the statute turns on private conversations and statutory definitions.

Use this as Illinois' recording/eavesdropping hook. For recording police, analyze whether the interaction is public or private, whether audio is being recorded, whether there is interference with duties, and First Amendment public-recording rules.`,
  },
  {
    id: "il-ilcs-730-5-5-6-3-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IL",
    topicIds: ["supervision"],
    citation: "730 ILCS 5/5-6-3",
    title: "Conditions of probation and conditional discharge",
    officialUrl: "https://www.ilga.gov/legislation/ilcs/ilcs.asp",
    sourceName: "Illinois General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Illinois Compiled Statutes official landing page queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `730 ILCS 5/5-6-3 Conditions of probation and conditional discharge.

Illinois courts may impose mandatory and discretionary conditions of probation or conditional discharge, including reporting, law-abiding conduct, restitution, treatment, employment or education-related requirements, and other court-ordered terms authorized by law.

Use this with the person's written sentencing order for specific condition questions. Some offenses have additional mandatory conditions.`,
  },
  {
    id: "il-ilcs-730-5-5-6-4-probation-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IL",
    topicIds: ["supervision"],
    citation: "730 ILCS 5/5-6-4",
    title: "Violation, modification, or revocation of probation",
    officialUrl: "https://www.ilga.gov/legislation/ilcs/ilcs.asp",
    sourceName: "Illinois General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Illinois Compiled Statutes official landing page queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `730 ILCS 5/5-6-4 Violation, modification, or revocation of probation.

Illinois law governs allegations that a person violated probation, conditional discharge, or supervision. The court may continue, modify, revoke, or resentence as authorized after statutory procedures.

Use this for Illinois probation-violation answers, but check the official section and court rules for hearing rights, burden, timing, and available sanctions.`,
  },
  {
    id: "il-ilcs-730-5-3-3-7-parole-msr-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IL",
    topicIds: ["supervision"],
    citation: "730 ILCS 5/3-3-7",
    title: "Conditions of parole or mandatory supervised release",
    officialUrl: "https://www.ilga.gov/legislation/ilcs/ilcs.asp",
    sourceName: "Illinois General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Illinois Compiled Statutes official landing page queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `730 ILCS 5/3-3-7 Conditions of parole or mandatory supervised release.

Illinois law governs conditions of parole and mandatory supervised release, including mandatory conditions and additional conditions imposed by the Prisoner Review Board.

Use this as Illinois' parole/MSR condition framework. Specific answers require the offense, sentence, release type, PRB order, and written conditions.`,
  },
  {
    id: "il-ilcs-730-5-3-3-8-parole-msr-violations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IL",
    topicIds: ["supervision"],
    citation: "730 ILCS 5/3-3-8",
    title: "Violations and revocation of parole or mandatory supervised release",
    officialUrl: "https://www.ilga.gov/legislation/ilcs/ilcs.asp",
    sourceName: "Illinois General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Illinois Compiled Statutes official landing page queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `730 ILCS 5/3-3-8 Violations and revocation of parole or mandatory supervised release.

Illinois law governs alleged parole or mandatory supervised release violations and the Prisoner Review Board's revocation process and sanctions.

Use this with the person's written MSR or parole conditions. A specific violation answer requires the violation type, hearing status, PRB action, and current Department of Corrections or PRB procedure.`,
  },
  {
    id: "in-code-3-7-13-4-voting-imprisoned",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IN",
    topicIds: ["voting"],
    citation: "Ind. Code sec. 3-7-13-4",
    title: "Persons imprisoned after conviction not entitled to vote",
    officialUrl: "https://iga.in.gov/laws",
    sourceName: "Indiana General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Indiana General Assembly laws portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Ind. Code sec. 3-7-13-4 Persons imprisoned after conviction not entitled to vote.

Indiana law provides that a person imprisoned following conviction of a crime is not entitled to vote during imprisonment. The practical rule is that a felony conviction affects voting while the person is incarcerated, and voting rights are restored after release from imprisonment.

Use this as Indiana's felony voting-rights authority. For a user-facing answer, confirm whether the person is incarcerated or released, and check voter registration status and current election guidance.`,
  },
  {
    id: "in-code-35-38-9-1-nonconviction-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IN",
    topicIds: ["expungement"],
    citation: "Ind. Code sec. 35-38-9-1",
    title: "Expungement of arrests, charges, or juvenile delinquency allegations not resulting in conviction",
    officialUrl: "https://iga.in.gov/laws",
    sourceName: "Indiana General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Indiana General Assembly laws portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Ind. Code sec. 35-38-9-1 Expungement of records not resulting in conviction.

Indiana provides expungement for certain arrests, charges, or juvenile delinquency allegations that did not result in conviction or adjudication, subject to statutory requirements and exceptions.

Use this for Indiana nonconviction expungement questions. For conviction relief, use the later sections in Ind. Code chapter 35-38-9 based on offense level and waiting period.`,
  },
  {
    id: "in-code-35-38-9-2-through-5-conviction-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IN",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Ind. Code secs. 35-38-9-2 through 35-38-9-5",
    title: "Expungement of misdemeanor and felony conviction records",
    officialUrl: "https://iga.in.gov/laws",
    sourceName: "Indiana General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Indiana General Assembly laws portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Ind. Code secs. 35-38-9-2 through 35-38-9-5 Expungement of conviction records.

Indiana's Second Chance expungement law provides separate pathways for misdemeanors, lower-level felonies, more serious felonies, and certain elected official or public servant offenses. Eligibility depends on offense type, waiting period, no pending charges, subsequent conviction history, sentence completion, and in some cases prosecutor consent.

Use this as Indiana's conviction-expungement gateway. A specific answer requires the conviction level, offense, sentence completion date, subsequent history, pending charges, and whether any statutory exclusion applies.`,
  },
  {
    id: "in-code-35-38-9-10-effect-of-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IN",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Ind. Code sec. 35-38-9-10",
    title: "Effect of expungement order",
    officialUrl: "https://iga.in.gov/laws",
    sourceName: "Indiana General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Indiana General Assembly laws portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Ind. Code sec. 35-38-9-10 Effect of expungement order.

Indiana law governs the effect of an expungement order, including how records are treated and when a person may be protected from discrimination or disclosure based on an expunged conviction or record.

Use this with the eligibility section that produced the expungement. Do not assume expungement removes every record from every agency or eliminates every occupation-specific consequence.`,
  },
  {
    id: "in-code-22-9-1-3-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IN",
    topicIds: ["housing"],
    citation: "Ind. Code sec. 22-9-1-3",
    title: "Civil rights policy and discriminatory practices",
    officialUrl: "https://iga.in.gov/laws",
    sourceName: "Indiana General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Indiana General Assembly laws portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Ind. Code sec. 22-9-1-3 Civil rights policy and discriminatory practices.

Indiana civil-rights law includes protections against discrimination in covered contexts, including housing-related discrimination through Indiana's civil rights framework and related fair-housing provisions.

Criminal history is not itself the same as a protected class under this source. For criminal-record housing screening, pair Indiana civil-rights law with federal HUD guidance, expungement law, public/subsidized housing rules, and any applicable local ordinance.`,
  },
  {
    id: "in-code-32-31-7-5-tenant-obligations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IN",
    topicIds: ["housing"],
    citation: "Ind. Code sec. 32-31-7-5",
    title: "Tenant obligations",
    officialUrl: "https://iga.in.gov/laws",
    sourceName: "Indiana General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Indiana General Assembly laws portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Ind. Code sec. 32-31-7-5 Tenant obligations.

Indiana landlord-tenant law sets tenant duties, including compliance with health and housing codes, keeping the rental premises reasonably clean, using systems reasonably, and complying with reasonable rules and regulations.

Use this as a landlord-tenant conduct hook, not a criminal-record screening rule. For application screening, use fair-housing, consumer-reporting, expungement, public housing, and local law sources.`,
  },
  {
    id: "in-code-22-2-17-3-restricted-criminal-history-employment",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IN",
    topicIds: ["employment"],
    citation: "Ind. Code sec. 22-2-17-3",
    title: "Employment discrimination based on restricted criminal history",
    officialUrl: "https://iga.in.gov/laws",
    sourceName: "Indiana General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Indiana General Assembly laws portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Ind. Code sec. 22-2-17-3 Employment discrimination based on restricted criminal history.

Indiana law restricts employers from asking about or discriminating based on restricted criminal history information. This is a key employment protection after a record has been restricted or expunged under Indiana law.

Use this with Ind. Code chapter 35-38-9. The protection depends on whether the record is legally restricted or expunged and whether an exception applies.`,
  },
  {
    id: "in-code-25-1-1-1-occupational-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IN",
    topicIds: ["employment"],
    citation: "Ind. Code sec. 25-1-1.1",
    title: "Occupational licensing and criminal convictions",
    officialUrl: "https://iga.in.gov/laws",
    sourceName: "Indiana General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Indiana General Assembly laws portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Ind. Code sec. 25-1-1.1 Occupational licensing and criminal convictions.

Indiana occupational licensing law limits how licensing boards may use criminal convictions and sets standards for when a conviction can be considered in licensing decisions, subject to occupation-specific statutes and public-safety exceptions.

Use this as Indiana's occupational-licensing criminal-record hook. A specific answer requires the exact license, conviction, time elapsed, rehabilitation evidence, and board rules.`,
  },
  {
    id: "in-code-34-28-5-3-5-refusal-identify",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IN",
    topicIds: ["police"],
    citation: "Ind. Code sec. 34-28-5-3.5",
    title: "Refusal to identify self",
    officialUrl: "https://iga.in.gov/laws",
    sourceName: "Indiana General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Indiana General Assembly laws portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Ind. Code sec. 34-28-5-3.5 Refusal to identify self.

Indiana law makes it an offense in specified circumstances to knowingly or intentionally refuse to provide name, address, and date of birth, or driver's license if in possession, to a law enforcement officer who has stopped the person for an infraction or ordinance violation.

Use this as Indiana's stop-and-identify hook. Do not present it as a duty to answer every question; the context of the stop and the officer's lawful authority matter.`,
  },
  {
    id: "in-code-35-33-5-5-interception-communications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IN",
    topicIds: ["police"],
    citation: "Ind. Code sec. 35-33.5-5-5",
    title: "Interception of communications",
    officialUrl: "https://iga.in.gov/laws",
    sourceName: "Indiana General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Indiana General Assembly laws portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Ind. Code sec. 35-33.5-5-5 Interception of communications.

Indiana law prohibits certain interceptions of communications and contains consent-based exceptions. Indiana is generally treated as a one-party-consent state for covered recordings, subject to statutory definitions and exceptions.

Use this as Indiana's recording/interception hook. For recording police, analyze public setting, expectation of privacy, interference with duties, and First Amendment public-recording rules.`,
  },
  {
    id: "in-code-35-38-2-2-3-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IN",
    topicIds: ["supervision"],
    citation: "Ind. Code sec. 35-38-2-2.3",
    title: "Conditions of probation",
    officialUrl: "https://iga.in.gov/laws",
    sourceName: "Indiana General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Indiana General Assembly laws portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Ind. Code sec. 35-38-2-2.3 Conditions of probation.

Indiana courts may impose probation conditions authorized by statute and tailored to the person and offense, including reporting, law-abiding conduct, restitution, treatment, employment, residence, and other court-ordered terms.

Use this with the person's written probation order for specific condition questions. Some offenses have mandatory or specialized conditions.`,
  },
  {
    id: "in-code-35-38-2-3-probation-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IN",
    topicIds: ["supervision"],
    citation: "Ind. Code sec. 35-38-2-3",
    title: "Probation violation; revocation",
    officialUrl: "https://iga.in.gov/laws",
    sourceName: "Indiana General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Indiana General Assembly laws portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Ind. Code sec. 35-38-2-3 Probation violation; revocation.

Indiana law governs probation violation allegations, hearings, sanctions, modification, and revocation. If a violation is proven, the court may continue probation, extend probation, modify conditions, order execution of suspended sentence, or impose other authorized sanctions.

Use this for Indiana probation-violation answers, but verify notice, hearing rights, burden, tolling, and sentencing exposure in the official section and court rules.`,
  },
  {
    id: "in-code-11-13-3-4-parole-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IN",
    topicIds: ["supervision"],
    citation: "Ind. Code sec. 11-13-3-4",
    title: "Conditions of parole",
    officialUrl: "https://iga.in.gov/laws",
    sourceName: "Indiana General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Indiana General Assembly laws portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Ind. Code sec. 11-13-3-4 Conditions of parole.

Indiana parole conditions are governed by statute, parole authority rules, and the person's written parole order. Conditions may include reporting, law-abiding conduct, residence, employment, treatment, restitution, and other supervision requirements.

Use this as Indiana's parole condition framework. A specific answer requires the written parole conditions and current parole authority procedure.`,
  },
  {
    id: "in-code-11-13-3-10-parole-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IN",
    topicIds: ["supervision"],
    citation: "Ind. Code sec. 11-13-3-10",
    title: "Parole violation procedure",
    officialUrl: "https://iga.in.gov/laws",
    sourceName: "Indiana General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Indiana General Assembly laws portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Ind. Code sec. 11-13-3-10 Parole violation procedure.

Indiana law governs alleged parole violations and parole revocation procedure. Violations may result in sanctions, modification, or revocation depending on the violation and applicable procedure.

Use this with the person's written parole conditions and parole authority notices. Do not give a specific revocation answer from this record alone.`,
  },
  {
    id: "ia-code-48a-6-voter-qualification-infamous-crime",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IA",
    topicIds: ["voting"],
    citation: "Iowa Code sec. 48A.6",
    title: "Voter registration qualifications and infamous crime disqualification",
    officialUrl: "https://www.legis.iowa.gov/law/iowaCode",
    sourceName: "Iowa Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Iowa Legislature Code portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Iowa Code sec. 48A.6 Voter registration qualifications and infamous crime disqualification.

Iowa voter registration law includes baseline elector qualifications and disqualifies a person convicted of an infamous crime unless the person's rights have been restored. Iowa felony voting-rights answers must account for the Iowa Constitution, current executive restoration policy, and any sentence or rights-restoration requirements.

Use this as Iowa's statutory voting-rights hook. For a user-facing answer, verify whether the person has completed incarceration and whether voting rights have been restored under current state policy.`,
  },
  {
    id: "ia-code-901c-2-expungement-nonconviction",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IA",
    topicIds: ["expungement"],
    citation: "Iowa Code sec. 901C.2",
    title: "Expungement of criminal records for dismissed charges and acquittals",
    officialUrl: "https://www.legis.iowa.gov/law/iowaCode",
    sourceName: "Iowa Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Iowa Legislature Code portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Iowa Code sec. 901C.2 Expungement of criminal records for dismissed charges and acquittals.

Iowa law allows expungement of certain criminal records when charges are dismissed or the person is acquitted, subject to statutory timing, case-status, and exclusion rules.

Use this for Iowa nonconviction expungement questions. A specific answer requires the disposition, waiting period, costs/financial obligations, pending charges, and statutory exceptions.`,
  },
  {
    id: "ia-code-901c-3-expungement-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IA",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Iowa Code sec. 901C.3",
    title: "Expungement of certain misdemeanor convictions",
    officialUrl: "https://www.legis.iowa.gov/law/iowaCode",
    sourceName: "Iowa Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Iowa Legislature Code portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Iowa Code sec. 901C.3 Expungement of certain misdemeanor convictions.

Iowa law allows expungement of certain misdemeanor convictions when statutory eligibility requirements are met. Eligibility depends on offense type, waiting period, completion of sentence, criminal history, and exclusions.

Use this as Iowa's conviction-expungement gateway. Do not give a detailed eligibility answer without checking the exact offense, date, sentence completion, prior record, and statutory exclusions.`,
  },
  {
    id: "ia-code-907-9-deferred-judgment-discharge",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IA",
    topicIds: ["expungement", "supervision"],
    citation: "Iowa Code sec. 907.9",
    title: "Deferred judgment discharge and record consequences",
    officialUrl: "https://www.legis.iowa.gov/law/iowaCode",
    sourceName: "Iowa Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Iowa Legislature Code portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Iowa Code sec. 907.9 Deferred judgment discharge and record consequences.

Iowa deferred judgment law can allow discharge without entry of judgment if the person fulfills probation conditions. The record consequences depend on the deferred judgment statute and related expungement or court-record rules.

Use this for Iowa deferred-judgment questions, not as a general conviction expungement rule. Confirm the deferred judgment order, completion, discharge, and any remaining public-record consequence.`,
  },
  {
    id: "ia-code-216-8-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IA",
    topicIds: ["housing"],
    citation: "Iowa Code sec. 216.8",
    title: "Unfair or discriminatory housing practices",
    officialUrl: "https://www.legis.iowa.gov/law/iowaCode",
    sourceName: "Iowa Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Iowa Legislature Code portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Iowa Code sec. 216.8 Unfair or discriminatory housing practices.

Iowa civil-rights law prohibits covered discriminatory housing practices based on protected characteristics. This is Iowa's core state fair-housing authority.

Criminal history is not itself the same as a protected class under this section. For criminal-record tenant screening, use this with federal HUD guidance, expungement law, public/subsidized housing rules, and local ordinances where applicable.`,
  },
  {
    id: "ia-code-562a-17-tenant-obligations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IA",
    topicIds: ["housing"],
    citation: "Iowa Code sec. 562A.17",
    title: "Tenant obligations",
    officialUrl: "https://www.legis.iowa.gov/law/iowaCode",
    sourceName: "Iowa Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Iowa Legislature Code portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Iowa Code sec. 562A.17 Tenant obligations.

Iowa landlord-tenant law sets tenant duties related to compliance with obligations, maintaining the dwelling, using facilities reasonably, and conducting themselves and guests appropriately.

Use this as a landlord-tenant conduct hook, not as a criminal-record screening rule. Screening answers should rely on fair-housing, consumer-reporting, expungement, public housing, and local law sources.`,
  },
  {
    id: "ia-code-216-6-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IA",
    topicIds: ["employment"],
    citation: "Iowa Code sec. 216.6",
    title: "Unfair employment practices",
    officialUrl: "https://www.legis.iowa.gov/law/iowaCode",
    sourceName: "Iowa Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Iowa Legislature Code portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Iowa Code sec. 216.6 Unfair employment practices.

Iowa civil-rights law prohibits covered discriminatory employment practices based on protected characteristics. This is useful for employment-rights framing but does not itself make criminal history a protected class.

For criminal-record hiring questions, use this with expungement law, criminal-history dissemination rules, occupational-licensing standards, federal law, and any employer-specific background-check statute.`,
  },
  {
    id: "ia-code-272c-15-occupational-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IA",
    topicIds: ["employment"],
    citation: "Iowa Code sec. 272C.15",
    title: "Occupational licensing and criminal convictions",
    officialUrl: "https://www.legis.iowa.gov/law/iowaCode",
    sourceName: "Iowa Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Iowa Legislature Code portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Iowa Code sec. 272C.15 Occupational licensing and criminal convictions.

Iowa occupational licensing law limits how licensing boards may deny, revoke, or discipline a license based on a criminal conviction and requires analysis under statutory standards and occupation-specific law.

Use this as Iowa's occupational-licensing conviction authority. A specific answer requires the exact license, conviction, time elapsed, rehabilitation evidence, and any mandatory disqualification law.`,
  },
  {
    id: "ia-code-692-2-criminal-history-dissemination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IA",
    topicIds: ["employment"],
    citation: "Iowa Code sec. 692.2",
    title: "Dissemination of criminal history data",
    officialUrl: "https://www.legis.iowa.gov/law/iowaCode",
    sourceName: "Iowa Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Iowa Legislature Code portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Iowa Code sec. 692.2 Dissemination of criminal history data.

Iowa law governs dissemination of criminal history data. This matters for employment and licensing because some records may remain available to authorized users even after other relief or restrictions.

Use this with expungement and occupational-licensing law when explaining what an employer or agency may see or use.`,
  },
  {
    id: "ia-code-804-7-arrest-and-stop-context",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IA",
    topicIds: ["police"],
    citation: "Iowa Code sec. 804.7",
    title: "Arrest by peace officer",
    officialUrl: "https://www.legis.iowa.gov/law/iowaCode",
    sourceName: "Iowa Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Iowa Legislature Code portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Iowa Code sec. 804.7 Arrest by peace officer.

Iowa law defines when a peace officer may make an arrest. Iowa does not have the same broad stop-and-identify style statute as some states, so police-stop answers should lead with constitutional reasonable-suspicion and arrest rules.

Use this as an Iowa arrest-authority hook, not as a duty to answer every question. For identification questions, analyze whether the person is detained, arrested, driving, or subject to another specific legal duty.`,
  },
  {
    id: "ia-code-808b-2-interception-communications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IA",
    topicIds: ["police"],
    citation: "Iowa Code sec. 808B.2",
    title: "Interception of communications",
    officialUrl: "https://www.legis.iowa.gov/law/iowaCode",
    sourceName: "Iowa Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Iowa Legislature Code portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Iowa Code sec. 808B.2 Interception of communications.

Iowa law prohibits certain interceptions, disclosures, and uses of wire, oral, or electronic communications but includes consent-based exceptions. Iowa is generally treated as a one-party-consent state for covered recordings, subject to statutory definitions and exceptions.

Use this as Iowa's recording/interception hook. For recording police, analyze public setting, expectation of privacy, interference with duties, and First Amendment public-recording rules.`,
  },
  {
    id: "ia-code-907-6-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IA",
    topicIds: ["supervision"],
    citation: "Iowa Code sec. 907.6",
    title: "Probation conditions",
    officialUrl: "https://www.legis.iowa.gov/law/iowaCode",
    sourceName: "Iowa Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Iowa Legislature Code portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Iowa Code sec. 907.6 Probation conditions.

Iowa courts may impose probation conditions authorized by law and tailored to rehabilitation and public safety. Conditions may include supervision, treatment, restitution, employment or education requirements, residence, and other court-ordered terms.

Use this with the person's written probation order for specific condition questions.`,
  },
  {
    id: "ia-code-908-11-probation-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IA",
    topicIds: ["supervision"],
    citation: "Iowa Code sec. 908.11",
    title: "Probation violation and revocation procedure",
    officialUrl: "https://www.legis.iowa.gov/law/iowaCode",
    sourceName: "Iowa Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Iowa Legislature Code portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Iowa Code sec. 908.11 Probation violation and revocation procedure.

Iowa law governs alleged probation violations and related revocation or modification proceedings. If a violation is established, the court may impose sanctions authorized by law.

Use this for Iowa probation-violation answers, but verify hearing rights, burden, timing, and available sanctions in the official section and court rules.`,
  },
  {
    id: "ia-code-906-4-board-of-parole",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "IA",
    topicIds: ["supervision"],
    citation: "Iowa Code sec. 906.4",
    title: "Board of parole powers and duties",
    officialUrl: "https://www.legis.iowa.gov/law/iowaCode",
    sourceName: "Iowa Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Iowa Legislature Code portal queried June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Iowa Code sec. 906.4 Board of parole powers and duties.

Iowa parole release and supervision are governed by the Board of Parole under statutory authority. Parole eligibility and release depend on offense, sentence, board action, risk and rehabilitation factors, and written conditions.

Use this as Iowa's parole framework source, not as a release-date calculator. A specific answer requires the judgment, sentence, board decision, and written parole conditions.`,
  },
  {
    id: "ks-stat-21-6613-civil-rights-restoration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KS",
    topicIds: ["voting"],
    citation: "Kan. Stat. Ann. sec. 21-6613",
    title: "Loss and restoration of civil rights after felony conviction",
    officialUrl: "https://www.ksrevisor.gov/statutes/chapters/ch21/021_066_0013.html",
    sourceName: "Kansas Office of Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kansas Revisor of Statutes official site queried June 27, 2026",
    reviewStatus: "approved",
    text: `Kan. Stat. Ann. sec. 21-6613 Loss and restoration of civil rights after felony conviction.

Kansas law suspends certain civil rights after felony conviction and provides for restoration when the person has completed the authorized sentence, including any postrelease supervision.

Use this as Kansas' core felony voting-rights restoration authority. For a user-facing answer, verify sentence completion, postrelease supervision status, and current voter registration requirements.`,
  },
  {
    id: "ks-stat-25-2302-voter-registration-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KS",
    topicIds: ["voting"],
    citation: "Kan. Stat. Ann. sec. 25-2302",
    title: "Voter registration qualifications",
    officialUrl: "https://www.ksrevisor.gov/statutes/chapters/ch25/025_023_0002.html",
    sourceName: "Kansas Office of Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kansas Revisor of Statutes official site queried June 27, 2026",
    reviewStatus: "approved",
    text: `Kan. Stat. Ann. sec. 25-2302 Voter registration qualifications.

Kansas voter registration law sets the baseline qualifications for registration and voting. For people with felony convictions, use this with Kan. Stat. Ann. sec. 21-6613 on civil-rights restoration.

Do not answer a felony voting question from this section alone; sentence completion and restoration rules matter.`,
  },
  {
    id: "ks-stat-21-6614-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KS",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Kan. Stat. Ann. sec. 21-6614",
    title: "Expungement of arrest, conviction, diversion, or related records",
    officialUrl: "https://www.ksrevisor.gov/statutes/chapters/ch21/021_066_0014.html",
    sourceName: "Kansas Office of Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kansas Revisor of Statutes official site queried June 27, 2026",
    reviewStatus: "approved",
    text: `Kan. Stat. Ann. sec. 21-6614 Expungement of arrest, conviction, diversion, or related records.

Kansas provides expungement procedures for eligible arrest, conviction, diversion, and related records after statutory waiting periods and conditions are met. Eligibility depends on offense type, time elapsed, completion of sentence or diversion, pending matters, and statutory exclusions.

Use this as Kansas' primary record-relief authority. A specific answer requires the offense, disposition, sentence completion date, waiting period, and exclusion analysis.`,
  },
  {
    id: "ks-stat-44-1016-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KS",
    topicIds: ["housing"],
    citation: "Kan. Stat. Ann. sec. 44-1016",
    title: "Discriminatory housing practices",
    officialUrl: "https://www.ksrevisor.gov/statutes/chapters/ch44/044_010_0016.html",
    sourceName: "Kansas Office of Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kansas Revisor of Statutes official site queried June 27, 2026",
    reviewStatus: "approved",
    text: `Kan. Stat. Ann. sec. 44-1016 Discriminatory housing practices.

Kansas fair-housing law prohibits covered discriminatory housing practices based on protected characteristics. This is Kansas' core state fair-housing authority.

Criminal history is not itself the same as a protected class under this section. For criminal-record screening, use this with federal HUD guidance, expungement law, consumer-reporting law, public housing rules, and local ordinances where applicable.`,
  },
  {
    id: "ks-stat-58-2555-tenant-obligations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KS",
    topicIds: ["housing"],
    citation: "Kan. Stat. Ann. sec. 58-2555",
    title: "Tenant obligations",
    officialUrl: "https://www.ksrevisor.gov/statutes/chapters/ch58/058_025_0055.html",
    sourceName: "Kansas Office of Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kansas Revisor of Statutes official site queried June 27, 2026",
    reviewStatus: "approved",
    text: `Kan. Stat. Ann. sec. 58-2555 Tenant obligations.

Kansas landlord-tenant law sets tenant obligations for compliance with law, maintenance, use of the premises, and conduct. Violations can matter for lease enforcement and termination depending on the facts and statutory procedure.

Use this as a landlord-tenant conduct hook, not as a criminal-record screening rule.`,
  },
  {
    id: "ks-stat-44-1009-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KS",
    topicIds: ["employment"],
    citation: "Kan. Stat. Ann. sec. 44-1009",
    title: "Unlawful employment practices",
    officialUrl: "https://www.ksrevisor.gov/statutes/chapters/ch44/044_010_0009.html",
    sourceName: "Kansas Office of Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kansas Revisor of Statutes official site queried June 27, 2026",
    reviewStatus: "approved",
    text: `Kan. Stat. Ann. sec. 44-1009 Unlawful employment practices.

Kansas civil-rights law prohibits covered discriminatory employment practices based on protected characteristics. This is useful employment-rights context, but criminal history is not itself a protected class under this source.

For criminal-record employment questions, use this with expungement law, occupational-licensing standards, federal law, and job-specific background-check statutes.`,
  },
  {
    id: "ks-stat-74-120-occupational-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KS",
    topicIds: ["employment"],
    citation: "Kan. Stat. Ann. sec. 74-120",
    title: "Occupational licensing and criminal history",
    officialUrl: "https://www.ksrevisor.gov/statutes/chapters/ch74/074_001_0020.html",
    sourceName: "Kansas Office of Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kansas Revisor of Statutes official site queried June 27, 2026",
    reviewStatus: "approved",
    text: `Kan. Stat. Ann. sec. 74-120 Occupational licensing and criminal history.

Kansas law limits how licensing bodies may use criminal history when deciding whether to grant, deny, suspend, or revoke occupational licenses. Analysis depends on the profession, conviction, relationship to duties, rehabilitation, and any occupation-specific statute.

Use this as Kansas' occupational-licensing criminal-record authority. Verify the exact board law before giving a specific eligibility answer.`,
  },
  {
    id: "ks-stat-22-2402-stop-and-identify",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KS",
    topicIds: ["police"],
    citation: "Kan. Stat. Ann. sec. 22-2402",
    title: "Stopping of suspect",
    officialUrl: "https://www.ksrevisor.gov/statutes/chapters/ch22/022_024_0002.html",
    sourceName: "Kansas Office of Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kansas Revisor of Statutes official site queried June 27, 2026",
    reviewStatus: "approved",
    text: `Kan. Stat. Ann. sec. 22-2402 Stopping of suspect.

Kansas law allows a law enforcement officer to stop a person in a public place when the officer reasonably suspects the person is committing, has committed, or is about to commit a crime, and to demand the person's name, address, and an explanation of actions.

Use this as Kansas' stop-and-identify hook. It does not mean a person must answer every police question; reasonable suspicion and the scope of detention matter.`,
  },
  {
    id: "ks-stat-21-6101-breach-privacy-recording",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KS",
    topicIds: ["police"],
    citation: "Kan. Stat. Ann. sec. 21-6101",
    title: "Breach of privacy",
    officialUrl: "https://www.ksrevisor.gov/statutes/chapters/ch21/021_061_0001.html",
    sourceName: "Kansas Office of Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kansas Revisor of Statutes official site queried June 27, 2026",
    reviewStatus: "approved",
    text: `Kan. Stat. Ann. sec. 21-6101 Breach of privacy.

Kansas breach-of-privacy law governs certain recording, interception, and privacy-invading conduct. Kansas is generally treated as a one-party-consent state for recording conversations, subject to statutory details and privacy expectations.

Use this as Kansas' recording/privacy hook. For recording police, analyze public setting, expectation of privacy, interference with duties, and First Amendment public-recording rules.`,
  },
  {
    id: "ks-stat-21-6607-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KS",
    topicIds: ["supervision"],
    citation: "Kan. Stat. Ann. sec. 21-6607",
    title: "Conditions of probation or assignment to community correctional services",
    officialUrl: "https://www.ksrevisor.gov/statutes/chapters/ch21/021_066_0007.html",
    sourceName: "Kansas Office of Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kansas Revisor of Statutes official site queried June 27, 2026",
    reviewStatus: "approved",
    text: `Kan. Stat. Ann. sec. 21-6607 Conditions of probation or assignment to community correctional services.

Kansas courts may impose conditions of probation or community correctional services authorized by statute, including reporting, law-abiding conduct, restitution, treatment, employment, residence, and other court-ordered terms.

Use this with the person's written supervision order for specific condition questions.`,
  },
  {
    id: "ks-stat-22-3716-probation-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KS",
    topicIds: ["supervision"],
    citation: "Kan. Stat. Ann. sec. 22-3716",
    title: "Probation violation and sanctions",
    officialUrl: "https://www.ksrevisor.gov/statutes/chapters/ch22/022_037_0016.html",
    sourceName: "Kansas Office of Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kansas Revisor of Statutes official site queried June 27, 2026",
    reviewStatus: "approved",
    text: `Kan. Stat. Ann. sec. 22-3716 Probation violation and sanctions.

Kansas law governs alleged probation, assignment, or postrelease violations and available sanctions. The statute includes procedures and graduated sanction rules that can affect whether a violation leads to jail, prison, modification, or revocation.

Use this for Kansas supervision-violation answers, but verify the current subsection, violation type, hearing status, and sentencing exposure.`,
  },
  {
    id: "ks-stat-22-3717-parole-postrelease",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KS",
    topicIds: ["supervision"],
    citation: "Kan. Stat. Ann. sec. 22-3717",
    title: "Parole, conditional release, and postrelease supervision",
    officialUrl: "https://www.ksrevisor.gov/statutes/chapters/ch22/022_037_0017.html",
    sourceName: "Kansas Office of Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kansas Revisor of Statutes official site queried June 27, 2026",
    reviewStatus: "approved",
    text: `Kan. Stat. Ann. sec. 22-3717 Parole, conditional release, and postrelease supervision.

Kansas parole, conditional release, and postrelease supervision depend on offense date, sentence, risk rules, board action, credits, and statutory eligibility. The section provides the framework for release and supervision terms.

Use this as Kansas' parole/postrelease framework source, not as a release-date calculator. A precise answer requires the sentence, offense date, board decision, and written supervision conditions.`,
  },
  {
    id: "ky-krs-116-025-voter-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KY",
    topicIds: ["voting"],
    citation: "Ky. Rev. Stat. sec. 116.025",
    title: "Voter registration qualifications",
    officialUrl: "https://apps.legislature.ky.gov/law/statutes/",
    sourceName: "Kentucky Legislative Research Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kentucky Legislative Research Commission statutes site checked June 27, 2026; service alert prevented exact section URL verification",
    reviewStatus: "approved",
    text: `Ky. Rev. Stat. sec. 116.025 Voter registration qualifications.

Kentucky voter-registration law sets baseline qualifications for registration and voting. For people with felony convictions, Kentucky voting rights also depend on constitutional disqualification rules and whether civil rights have been restored by pardon, executive action, or other applicable restoration authority.

Use this as Kentucky's voter-qualification statute. Do not answer a felony voting question from this source alone; verify conviction type, sentence status, restoration status, and current executive restoration rules.`,
  },
  {
    id: "ky-krs-196-045-civil-rights-restoration-assistance",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KY",
    topicIds: ["voting"],
    citation: "Ky. Rev. Stat. sec. 196.045",
    title: "Civil rights restoration assistance for eligible felony offenders",
    officialUrl: "https://apps.legislature.ky.gov/law/statutes/",
    sourceName: "Kentucky Legislative Research Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kentucky Legislative Research Commission statutes site checked June 27, 2026; service alert prevented exact section URL verification",
    reviewStatus: "approved",
    text: `Ky. Rev. Stat. sec. 196.045 Civil rights restoration assistance for eligible felony offenders.

Kentucky law includes procedures related to assisting eligible felony offenders with restoration of civil rights. This source is a restoration-process hook and should be read together with Kentucky voter-qualification law, constitutional disqualification rules, and any current executive orders governing restoration.

Use this for Kentucky felony voting-rights restoration context, not as a complete eligibility answer by itself.`,
  },
  {
    id: "ky-krs-431-073-felony-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KY",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Ky. Rev. Stat. sec. 431.073",
    title: "Felony conviction expungement",
    officialUrl: "https://apps.legislature.ky.gov/law/statutes/",
    sourceName: "Kentucky Legislative Research Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kentucky Legislative Research Commission statutes site checked June 27, 2026; service alert prevented exact section URL verification",
    reviewStatus: "approved",
    text: `Ky. Rev. Stat. sec. 431.073 Felony conviction expungement.

Kentucky provides a process to expunge certain eligible felony convictions after statutory waiting periods and conditions are met. Eligibility depends on offense classification, offense exclusions, completion of sentence, pending charges, prior record, waiting period, and court procedure.

Use this as Kentucky's primary felony expungement authority. A specific answer requires the exact offense, disposition, sentence completion date, and exclusion analysis.`,
  },
  {
    id: "ky-krs-431-076-dismissal-acquittal-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KY",
    topicIds: ["expungement"],
    citation: "Ky. Rev. Stat. sec. 431.076",
    title: "Expungement after acquittal, dismissal, or failure to indict",
    officialUrl: "https://apps.legislature.ky.gov/law/statutes/",
    sourceName: "Kentucky Legislative Research Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kentucky Legislative Research Commission statutes site checked June 27, 2026; service alert prevented exact section URL verification",
    reviewStatus: "approved",
    text: `Ky. Rev. Stat. sec. 431.076 Expungement after acquittal, dismissal, or failure to indict.

Kentucky separately addresses expungement when charges end without conviction, including acquittal, dismissal, and failure to indict. Timing, notice, and procedural requirements matter.

Use this alongside Kentucky conviction-expungement statutes so JO distinguishes conviction record relief from nonconviction record relief.`,
  },
  {
    id: "ky-krs-344-360-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KY",
    topicIds: ["housing"],
    citation: "Ky. Rev. Stat. sec. 344.360",
    title: "Discriminatory housing practices",
    officialUrl: "https://apps.legislature.ky.gov/law/statutes/",
    sourceName: "Kentucky Legislative Research Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kentucky Legislative Research Commission statutes site checked June 27, 2026; service alert prevented exact section URL verification",
    reviewStatus: "approved",
    text: `Ky. Rev. Stat. sec. 344.360 Discriminatory housing practices.

Kentucky fair-housing law prohibits covered discriminatory housing practices based on protected characteristics. This is Kentucky's core state fair-housing source.

Criminal history is not itself the same as a protected class under this statute. For criminal-record screening questions, use this with federal HUD guidance, consumer-reporting law, expungement law, public housing rules, and local ordinances where applicable.`,
  },
  {
    id: "ky-krs-383-595-tenant-obligations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KY",
    topicIds: ["housing"],
    citation: "Ky. Rev. Stat. sec. 383.595",
    title: "Tenant obligations",
    officialUrl: "https://apps.legislature.ky.gov/law/statutes/",
    sourceName: "Kentucky Legislative Research Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kentucky Legislative Research Commission statutes site checked June 27, 2026; service alert prevented exact section URL verification",
    reviewStatus: "approved",
    text: `Ky. Rev. Stat. sec. 383.595 Tenant obligations.

Kentucky landlord-tenant law sets tenant duties involving compliance with law, maintenance, use of the premises, and conduct. These duties can matter for lease enforcement, termination, and eviction depending on local adoption and the facts.

Use this as a landlord-tenant conduct hook, not as a rule about criminal-record screening by landlords.`,
  },
  {
    id: "ky-krs-344-040-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KY",
    topicIds: ["employment"],
    citation: "Ky. Rev. Stat. sec. 344.040",
    title: "Unlawful employment practices",
    officialUrl: "https://apps.legislature.ky.gov/law/statutes/",
    sourceName: "Kentucky Legislative Research Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kentucky Legislative Research Commission statutes site checked June 27, 2026; service alert prevented exact section URL verification",
    reviewStatus: "approved",
    text: `Ky. Rev. Stat. sec. 344.040 Unlawful employment practices.

Kentucky civil-rights law prohibits covered employment discrimination based on protected characteristics. It is useful for employment-rights context, but criminal history is not itself a protected class under this source.

For criminal-record employment questions, use this with expungement law, occupational-licensing rules, federal law, and job-specific background-check statutes.`,
  },
  {
    id: "ky-krs-335b-020-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KY",
    topicIds: ["employment"],
    citation: "Ky. Rev. Stat. sec. 335B.020",
    title: "Criminal conviction and occupational licensing",
    officialUrl: "https://apps.legislature.ky.gov/law/statutes/",
    sourceName: "Kentucky Legislative Research Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kentucky Legislative Research Commission statutes site checked June 27, 2026; service alert prevented exact section URL verification",
    reviewStatus: "approved",
    text: `Ky. Rev. Stat. sec. 335B.020 Criminal conviction and occupational licensing.

Kentucky law limits when a public agency may deny, suspend, or revoke an occupational license because of a criminal conviction. The analysis depends on the occupation, the conviction, relationship to the licensed activity, rehabilitation, time elapsed, and any occupation-specific statute.

Use this as Kentucky's occupational-licensing criminal-record authority. Verify the specific licensing board statute before giving an eligibility answer.`,
  },
  {
    id: "ky-krs-431-005-warrantless-arrest",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KY",
    topicIds: ["police"],
    citation: "Ky. Rev. Stat. sec. 431.005",
    title: "Arrest by peace officers",
    officialUrl: "https://apps.legislature.ky.gov/law/statutes/",
    sourceName: "Kentucky Legislative Research Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kentucky Legislative Research Commission statutes site checked June 27, 2026; service alert prevented exact section URL verification",
    reviewStatus: "approved",
    text: `Ky. Rev. Stat. sec. 431.005 Arrest by peace officers.

Kentucky law defines when peace officers may make arrests, including warrantless arrests under specified circumstances. This is a state statutory arrest-power hook and should be used with constitutional search-and-seizure rules.

Use this for Kentucky police-stop and arrest questions only as statutory context. Detention, questioning, search, and arrest analysis often turns on federal and state constitutional law, not this statute alone.`,
  },
  {
    id: "ky-krs-526-020-eavesdropping-recording",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KY",
    topicIds: ["police"],
    citation: "Ky. Rev. Stat. sec. 526.020",
    title: "Eavesdropping",
    officialUrl: "https://apps.legislature.ky.gov/law/statutes/",
    sourceName: "Kentucky Legislative Research Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kentucky Legislative Research Commission statutes site checked June 27, 2026; service alert prevented exact section URL verification",
    reviewStatus: "approved",
    text: `Ky. Rev. Stat. sec. 526.020 Eavesdropping.

Kentucky eavesdropping law governs certain interception or recording of oral communications. Kentucky is generally treated as a one-party-consent state for recording conversations, subject to statutory details and reasonable expectations of privacy.

Use this as Kentucky's recording/privacy hook. For recording police, also analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "ky-krs-533-030-probation-conditional-discharge",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KY",
    topicIds: ["supervision"],
    citation: "Ky. Rev. Stat. sec. 533.030",
    title: "Conditions of probation and conditional discharge",
    officialUrl: "https://apps.legislature.ky.gov/law/statutes/",
    sourceName: "Kentucky Legislative Research Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kentucky Legislative Research Commission statutes site checked June 27, 2026; service alert prevented exact section URL verification",
    reviewStatus: "approved",
    text: `Ky. Rev. Stat. sec. 533.030 Conditions of probation and conditional discharge.

Kentucky courts may impose statutory and court-ordered conditions of probation or conditional discharge. Conditions can include law-abiding conduct, reporting, treatment, restitution, employment, residence, and other case-specific requirements.

Use this with the person's written supervision order for specific condition questions.`,
  },
  {
    id: "ky-krs-533-050-probation-revocation-modification",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KY",
    topicIds: ["supervision"],
    citation: "Ky. Rev. Stat. sec. 533.050",
    title: "Modification or revocation of probation or conditional discharge",
    officialUrl: "https://apps.legislature.ky.gov/law/statutes/",
    sourceName: "Kentucky Legislative Research Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kentucky Legislative Research Commission statutes site checked June 27, 2026; service alert prevented exact section URL verification",
    reviewStatus: "approved",
    text: `Ky. Rev. Stat. sec. 533.050 Modification or revocation of probation or conditional discharge.

Kentucky law governs modification and revocation of probation or conditional discharge after alleged violations. Consequences depend on the violation, hearing process, court findings, sentencing exposure, and available alternatives.

Use this for Kentucky probation violation answers, but verify the current subsection, hearing posture, and written order before giving specific guidance.`,
  },
  {
    id: "ky-krs-439-340-parole",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "KY",
    topicIds: ["supervision"],
    citation: "Ky. Rev. Stat. sec. 439.340",
    title: "Parole eligibility and release",
    officialUrl: "https://apps.legislature.ky.gov/law/statutes/",
    sourceName: "Kentucky Legislative Research Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Kentucky Legislative Research Commission statutes site checked June 27, 2026; service alert prevented exact section URL verification",
    reviewStatus: "approved",
    text: `Ky. Rev. Stat. sec. 439.340 Parole eligibility and release.

Kentucky parole depends on offense, sentence, statutory eligibility, board action, risk and needs factors, credits, and written conditions. This statute provides the framework for parole consideration and release authority.

Use this as Kentucky's parole framework source, not as a release-date calculator. A precise answer requires the judgment, sentence, offense date, parole board decision, and written supervision conditions.`,
  },
  {
    id: "la-rs-18-101-voter-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "LA",
    topicIds: ["voting"],
    citation: "La. Rev. Stat. sec. 18:101",
    title: "Registration to vote; qualifications",
    officialUrl: "https://legis.la.gov/legis/Laws_Toc.aspx",
    sourceName: "Louisiana State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Louisiana State Legislature laws portal checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `La. Rev. Stat. sec. 18:101 Registration to vote; qualifications.

Louisiana voter-registration law sets the baseline qualifications for registering and voting. For people with felony convictions, this source must be read with Louisiana's suspension-of-voting-rights statute and any sentence, custody, probation, parole, or supervision status facts.

Use this as Louisiana's voter-qualification source. Do not answer felony voting questions from this section alone.`,
  },
  {
    id: "la-rs-18-102-suspension-voting-rights",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "LA",
    topicIds: ["voting"],
    citation: "La. Rev. Stat. sec. 18:102",
    title: "Suspension of voting rights after felony conviction",
    officialUrl: "https://legis.la.gov/legis/Laws_Toc.aspx",
    sourceName: "Louisiana State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Louisiana State Legislature laws portal checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `La. Rev. Stat. sec. 18:102 Suspension of voting rights after felony conviction.

Louisiana law addresses when a person's right to register and vote is suspended because of felony conviction and confinement or an order of imprisonment. Louisiana felony voting analysis depends on the person's current custody and supervision status and any statutory restoration rule.

Use this as Louisiana's core felony voting-rights authority. A specific answer requires conviction status, current incarceration or supervision status, and current registration eligibility.`,
  },
  {
    id: "la-ccrp-art-977-misdemeanor-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "LA",
    topicIds: ["expungement"],
    citation: "La. Code Crim. Proc. art. 977",
    title: "Misdemeanor conviction expungement",
    officialUrl: "https://legis.la.gov/legis/Laws_Toc.aspx",
    sourceName: "Louisiana State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Louisiana State Legislature laws portal checked June 27, 2026; exact article URL pending adapter verification",
    reviewStatus: "approved",
    text: `La. Code Crim. Proc. art. 977 Misdemeanor conviction expungement.

Louisiana provides expungement procedures for certain eligible misdemeanor convictions. Eligibility depends on the offense, sentence completion, waiting period, prior expungements or convictions, pending matters, and statutory exclusions.

Use this for Louisiana misdemeanor conviction record relief. A specific answer requires the exact offense, disposition, sentence completion date, and exclusion analysis.`,
  },
  {
    id: "la-ccrp-art-978-felony-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "LA",
    topicIds: ["expungement", "employment", "housing"],
    citation: "La. Code Crim. Proc. art. 978",
    title: "Felony conviction expungement",
    officialUrl: "https://legis.la.gov/legis/Laws_Toc.aspx",
    sourceName: "Louisiana State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Louisiana State Legislature laws portal checked June 27, 2026; exact article URL pending adapter verification",
    reviewStatus: "approved",
    text: `La. Code Crim. Proc. art. 978 Felony conviction expungement.

Louisiana provides expungement procedures for certain eligible felony convictions after statutory conditions are met. Eligibility depends on offense type, exclusions, sentence completion, waiting period, pending matters, prior record, and whether the conviction is statutorily eligible.

Use this as Louisiana's primary felony expungement authority. A specific answer requires the exact offense, grade, disposition, completion date, and exclusion analysis.`,
  },
  {
    id: "la-rs-51-2606-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "LA",
    topicIds: ["housing"],
    citation: "La. Rev. Stat. sec. 51:2606",
    title: "Discriminatory housing practices",
    officialUrl: "https://legis.la.gov/legis/Laws_Toc.aspx",
    sourceName: "Louisiana State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Louisiana State Legislature laws portal checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `La. Rev. Stat. sec. 51:2606 Discriminatory housing practices.

Louisiana fair-housing law prohibits covered discriminatory housing practices based on protected characteristics. This is Louisiana's core state fair-housing source.

Criminal history is not itself the same as a protected class under this statute. For criminal-record screening, use this with federal HUD guidance, consumer-reporting law, expungement law, public housing rules, and local ordinances where applicable.`,
  },
  {
    id: "la-civ-code-art-2683-lessee-obligations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "LA",
    topicIds: ["housing"],
    citation: "La. Civ. Code art. 2683",
    title: "Obligations of the lessee",
    officialUrl: "https://legis.la.gov/legis/Laws_Toc.aspx",
    sourceName: "Louisiana State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Louisiana State Legislature laws portal checked June 27, 2026; exact article URL pending adapter verification",
    reviewStatus: "approved",
    text: `La. Civ. Code art. 2683 Obligations of the lessee.

Louisiana lease law sets basic obligations of a lessee, including payment of rent, prudent use according to the lease, and returning the thing at the end of the lease. These duties can matter for lease enforcement and eviction depending on the facts and lease terms.

Use this as a landlord-tenant obligations hook, not as a criminal-record screening rule.`,
  },
  {
    id: "la-rs-23-332-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "LA",
    topicIds: ["employment"],
    citation: "La. Rev. Stat. sec. 23:332",
    title: "Intentional discrimination in employment",
    officialUrl: "https://legis.la.gov/legis/Laws_Toc.aspx",
    sourceName: "Louisiana State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Louisiana State Legislature laws portal checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `La. Rev. Stat. sec. 23:332 Intentional discrimination in employment.

Louisiana employment-discrimination law prohibits covered intentional employment discrimination based on protected characteristics. It is useful employment-rights context, but criminal history is not itself a protected class under this source.

For criminal-record employment questions, use this with expungement law, occupational-licensing rules, federal law, and job-specific background-check statutes.`,
  },
  {
    id: "la-rs-37-2950-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "LA",
    topicIds: ["employment"],
    citation: "La. Rev. Stat. sec. 37:2950",
    title: "Occupational licensing and criminal convictions",
    officialUrl: "https://legis.la.gov/legis/Laws_Toc.aspx",
    sourceName: "Louisiana State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Louisiana State Legislature laws portal checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `La. Rev. Stat. sec. 37:2950 Occupational licensing and criminal convictions.

Louisiana law limits how licensing entities may use criminal convictions when making occupational licensing decisions. Analysis depends on the profession, the conviction, relationship to the occupation, rehabilitation evidence, time elapsed, and any occupation-specific statute.

Use this as Louisiana's occupational-licensing criminal-record authority. Verify the specific board statute before giving a precise eligibility answer.`,
  },
  {
    id: "la-ccrp-art-215-1-stop-frisk-questioning",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "LA",
    topicIds: ["police"],
    citation: "La. Code Crim. Proc. art. 215.1",
    title: "Temporary questioning of persons in public places; frisk and search",
    officialUrl: "https://legis.la.gov/legis/Laws_Toc.aspx",
    sourceName: "Louisiana State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Louisiana State Legislature laws portal checked June 27, 2026; exact article URL pending adapter verification",
    reviewStatus: "approved",
    text: `La. Code Crim. Proc. art. 215.1 Temporary questioning of persons in public places; frisk and search.

Louisiana law authorizes temporary questioning when an officer reasonably suspects a person is committing, has committed, or is about to commit an offense, and it addresses frisk or search limits for officer safety. Constitutional limits still control the scope of the encounter.

Use this as Louisiana's stop-and-frisk statutory hook. It does not mean a person must answer every police question or consent to a search.`,
  },
  {
    id: "la-rs-15-1303-interception-recording",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "LA",
    topicIds: ["police"],
    citation: "La. Rev. Stat. sec. 15:1303",
    title: "Interception and disclosure of wire, electronic, or oral communications",
    officialUrl: "https://legis.la.gov/legis/Laws_Toc.aspx",
    sourceName: "Louisiana State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Louisiana State Legislature laws portal checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `La. Rev. Stat. sec. 15:1303 Interception and disclosure of wire, electronic, or oral communications.

Louisiana law governs interception and disclosure of wire, electronic, and oral communications. Louisiana is generally treated as a one-party-consent state for recording conversations, subject to statutory details and privacy expectations.

Use this as Louisiana's recording/privacy hook. For recording police, also analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "la-ccrp-art-895-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "LA",
    topicIds: ["supervision"],
    citation: "La. Code Crim. Proc. art. 895",
    title: "Conditions of probation",
    officialUrl: "https://legis.la.gov/legis/Laws_Toc.aspx",
    sourceName: "Louisiana State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Louisiana State Legislature laws portal checked June 27, 2026; exact article URL pending adapter verification",
    reviewStatus: "approved",
    text: `La. Code Crim. Proc. art. 895 Conditions of probation.

Louisiana courts may impose statutory and court-ordered probation conditions. Conditions can include reporting, law-abiding conduct, payment obligations, treatment, employment, residence, and other case-specific terms.

Use this with the person's written probation order for specific condition questions.`,
  },
  {
    id: "la-ccrp-art-900-probation-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "LA",
    topicIds: ["supervision"],
    citation: "La. Code Crim. Proc. art. 900",
    title: "Arrest or summons for violation of probation; hearing; revocation",
    officialUrl: "https://legis.la.gov/legis/Laws_Toc.aspx",
    sourceName: "Louisiana State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Louisiana State Legislature laws portal checked June 27, 2026; exact article URL pending adapter verification",
    reviewStatus: "approved",
    text: `La. Code Crim. Proc. art. 900 Arrest or summons for violation of probation; hearing; revocation.

Louisiana law governs the process and consequences for alleged probation violations, including hearing and revocation procedures. Outcomes depend on the violation, sentence, hearing posture, court findings, and available sanctions.

Use this for Louisiana probation violation answers, but verify the current subsection and written supervision order before giving specific guidance.`,
  },
  {
    id: "la-rs-15-574-4-parole-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "LA",
    topicIds: ["supervision"],
    citation: "La. Rev. Stat. sec. 15:574.4",
    title: "Parole eligibility",
    officialUrl: "https://legis.la.gov/legis/Laws_Toc.aspx",
    sourceName: "Louisiana State Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Louisiana State Legislature laws portal checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `La. Rev. Stat. sec. 15:574.4 Parole eligibility.

Louisiana parole eligibility depends on offense, sentence, offense date, credits, statutory exclusions, parole board authority, risk factors, and written conditions. This statute provides the framework for parole eligibility and release analysis.

Use this as Louisiana's parole framework source, not as a release-date calculator. A precise answer requires the sentence, offense date, credits, board decision, and written supervision conditions.`,
  },
  {
    id: "me-mrs-21a-111-voter-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ME",
    topicIds: ["voting"],
    citation: "21-A M.R.S. sec. 111",
    title: "General voter qualifications",
    officialUrl: "https://legislature.maine.gov/statutes/21-A/title21-Asec111.html",
    sourceName: "Maine Legislature",
    currentAsOf: "2025-10-01",
    currentAsOfLabel:
      "Maine Revised Statutes current through October 1, 2025; official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `21-A M.R.S. sec. 111 General voter qualifications.

Maine voter eligibility is based on United States citizenship, age, residence, registration, and party enrollment for party caucus or convention voting. The statute does not create a felony-conviction disqualification.

Use this as Maine's core voter-qualification authority. For people with convictions, verify registration and residence rather than assuming felony disenfranchisement.`,
  },
  {
    id: "me-mrs-21a-112-voting-residence-incarcerated",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ME",
    topicIds: ["voting"],
    citation: "21-A M.R.S. sec. 112",
    title: "Residence for voting purposes",
    officialUrl: "https://legislature.maine.gov/statutes/21-A/title21-Asec112.html",
    sourceName: "Maine Legislature",
    currentAsOf: "2025-10-01",
    currentAsOfLabel:
      "Maine Revised Statutes current through October 1, 2025; official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `21-A M.R.S. sec. 112 Residence for voting purposes.

Maine law defines voting residence and specifically addresses people incarcerated in correctional facilities or county jails. Incarceration does not make the correctional facility municipality the person's voting residence unless the person previously resided there, and an incarcerated person may register in a municipality where the person previously established a fixed and principal home to which the person intends to return.

Use this with section 111 for Maine conviction-related voting questions.`,
  },
  {
    id: "me-mrs-15-2261-sealing-definitions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ME",
    topicIds: ["expungement"],
    citation: "15 M.R.S. sec. 2261",
    title: "Definitions for post-judgment sealing of criminal history records",
    officialUrl: "https://legislature.maine.gov/statutes/15/title15sec2261.html",
    sourceName: "Maine Legislature",
    currentAsOf: "2025-10-01",
    currentAsOfLabel:
      "Maine Revised Statutes current through October 1, 2025; official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `15 M.R.S. sec. 2261 Definitions for post-judgment sealing of criminal history records.

Maine's record-relief chapter defines key terms for sealing criminal history record information, including eligible criminal conviction and sealed record. Eligibility is narrower than a general expungement remedy and depends on statutory offense categories and exclusions.

Use this as the definition source for Maine record sealing. Do not describe Maine relief as broad expungement without checking the eligibility definitions.`,
  },
  {
    id: "me-mrs-15-2262-sealing-prerequisites",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ME",
    topicIds: ["expungement", "employment", "housing"],
    citation: "15 M.R.S. sec. 2262",
    title: "Statutory prerequisites for sealing criminal history record information",
    officialUrl: "https://legislature.maine.gov/statutes/15/title15sec2262.html",
    sourceName: "Maine Legislature",
    currentAsOf: "2025-10-01",
    currentAsOfLabel:
      "Maine Revised Statutes current through October 1, 2025; official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `15 M.R.S. sec. 2262 Statutory prerequisites for sealing criminal history record information.

Maine allows sealing of specific eligible conviction records only when statutory prerequisites are met, including an eligible conviction, passage of time after the sentence is fully satisfied, no disqualifying later convictions, and no pending criminal charges.

Use this as Maine's main conviction record-sealing eligibility source. A specific answer requires the offense class, sentence completion date, later record, pending charges, and any special eligibility rule.`,
  },
  {
    id: "me-mrs-15-2264-sealing-process",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ME",
    topicIds: ["expungement"],
    citation: "15 M.R.S. sec. 2264",
    title: "Motion and hearing process for sealing criminal history records",
    officialUrl: "https://legislature.maine.gov/statutes/15/title15sec2264.html",
    sourceName: "Maine Legislature",
    currentAsOf: "2025-10-01",
    currentAsOfLabel:
      "Maine Revised Statutes current through October 1, 2025; official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `15 M.R.S. sec. 2264 Motion and hearing process for sealing criminal history records.

Maine record sealing requires a motion in the underlying criminal proceeding, a hearing, and a court finding that the statutory prerequisites are met. The person filing may have counsel but is not entitled to appointed counsel at state expense for the sealing motion.

Use this as Maine's process source after eligibility is checked under sections 2261 and 2262.`,
  },
  {
    id: "me-mrs-5-4581-housing-civil-right",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ME",
    topicIds: ["housing"],
    citation: "5 M.R.S. sec. 4581",
    title: "Right to freedom from discrimination in housing",
    officialUrl: "https://legislature.maine.gov/statutes/5/title5sec4581.html",
    sourceName: "Maine Legislature",
    currentAsOf: "2025-10-01",
    currentAsOfLabel:
      "Maine Revised Statutes current through October 1, 2025; official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `5 M.R.S. sec. 4581 Right to freedom from discrimination in housing.

Maine recognizes the opportunity to secure housing without discrimination based on protected characteristics as a civil right, subject to statutory exceptions. This is the framework source for Maine fair-housing rights.

Criminal history is not itself the same as a protected class under this section. Use this with federal HUD guidance, consumer-reporting law, public housing rules, record-sealing law, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "me-mrs-5-4581a-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ME",
    topicIds: ["housing"],
    citation: "5 M.R.S. sec. 4581-A",
    title: "Unlawful housing discrimination",
    officialUrl: "https://legislature.maine.gov/statutes/5/title5sec4581-A.html",
    sourceName: "Maine Legislature",
    currentAsOf: "2025-10-01",
    currentAsOfLabel:
      "Maine Revised Statutes current through October 1, 2025; official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `5 M.R.S. sec. 4581-A Unlawful housing discrimination.

Maine law prohibits covered discriminatory housing practices, including discriminatory inquiries, refusals, terms, advertising, eviction, brokerage conduct, and housing-related financial assistance discrimination based on protected characteristics.

Use this as Maine's operative fair-housing statute. For criminal-record screening, pair this with federal disparate-impact guidance and any local or program-specific housing rules.`,
  },
  {
    id: "me-mrs-5-4582a-disability-housing-accommodations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ME",
    topicIds: ["housing"],
    citation: "5 M.R.S. sec. 4582-A",
    title: "Unlawful housing discrimination on the basis of disability",
    officialUrl: "https://legislature.maine.gov/statutes/5/title5sec4582-A.html",
    sourceName: "Maine Legislature",
    currentAsOf: "2025-10-01",
    currentAsOfLabel:
      "Maine Revised Statutes current through October 1, 2025; official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `5 M.R.S. sec. 4582-A Unlawful housing discrimination on the basis of disability.

Maine law requires reasonable modifications and reasonable accommodations in housing when necessary for equal use and enjoyment, and addresses assistance animals. This is relevant when a housing issue overlaps with disability, treatment, recovery, or accommodation needs.

Use this for disability-related housing-rights questions, including where criminal history intersects with disability accommodation analysis.`,
  },
  {
    id: "me-mrs-5-4572-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ME",
    topicIds: ["employment"],
    citation: "5 M.R.S. sec. 4572",
    title: "Unlawful employment discrimination",
    officialUrl: "https://legislature.maine.gov/statutes/5/title5sec4572.html",
    sourceName: "Maine Legislature",
    currentAsOf: "2025-10-01",
    currentAsOfLabel:
      "Maine Revised Statutes current through October 1, 2025; official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `5 M.R.S. sec. 4572 Unlawful employment discrimination.

Maine employment law prohibits covered employment discrimination based on protected characteristics. It is useful employment-rights context, but criminal history is not itself a protected class under this source.

For criminal-record employment questions, use this with Maine record-sealing law, occupational-license disqualification statutes, federal law, and job-specific background-check rules.`,
  },
  {
    id: "me-mrs-5-5301-occupational-license-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ME",
    topicIds: ["employment"],
    citation: "5 M.R.S. sec. 5301",
    title: "Eligibility for occupational license, registration or permit",
    officialUrl: "https://legislature.maine.gov/statutes/5/title5sec5301.html",
    sourceName: "Maine Legislature",
    currentAsOf: "2025-10-01",
    currentAsOfLabel:
      "Maine Revised Statutes current through October 1, 2025; official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `5 M.R.S. sec. 5301 Eligibility for occupational license, registration or permit.

Maine allows licensing agencies to consider certain criminal history record information, but the existence of that information does not operate as an automatic bar to an occupational license, registration, or permit. The statute limits the categories of convictions agencies may consider.

Use this as Maine's main occupational-licensing criminal-record eligibility source.`,
  },
  {
    id: "me-mrs-5-5302-license-denial-discipline-criminal-record",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ME",
    topicIds: ["employment"],
    citation: "5 M.R.S. sec. 5302",
    title: "Denial, suspension, revocation or discipline because of criminal record",
    officialUrl: "https://legislature.maine.gov/statutes/5/title5sec5302.html",
    sourceName: "Maine Legislature",
    currentAsOf: "2025-10-01",
    currentAsOfLabel:
      "Maine Revised Statutes current through October 1, 2025; official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `5 M.R.S. sec. 5302 Denial, suspension, revocation or discipline because of criminal record.

Maine licensing agencies may deny, refuse to renew, suspend, revoke, or discipline a license based on covered conviction history only if the agency determines the person has not been sufficiently rehabilitated to warrant public trust. The agency must state reasons in writing if the decision is based in whole or in part on a covered conviction.

Use this with section 5301 for Maine occupational-licensing questions involving criminal records.`,
  },
  {
    id: "me-mrs-5-5303-license-conviction-time-limits",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ME",
    topicIds: ["employment"],
    citation: "5 M.R.S. sec. 5303",
    title: "Time limit on consideration of prior criminal conviction",
    officialUrl: "https://legislature.maine.gov/statutes/5/title5sec5303.html",
    sourceName: "Maine Legislature",
    currentAsOf: "2025-10-01",
    currentAsOfLabel:
      "Maine Revised Statutes current through October 1, 2025; official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `5 M.R.S. sec. 5303 Time limit on consideration of prior criminal conviction.

Maine limits how long many prior convictions may be considered in occupational licensing decisions, with different periods for certain health, safety, and regulated professions. After the applicable period, applicants with no additional convictions generally must be considered like applicants with no prior criminal record for licensing purposes.

Use this as Maine's time-limit source for occupational licensing and criminal history.`,
  },
  {
    id: "me-mrs-17a-15-warrantless-arrests",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ME",
    topicIds: ["police"],
    citation: "17-A M.R.S. sec. 15",
    title: "Warrantless arrests by a law enforcement officer",
    officialUrl: "https://legislature.maine.gov/statutes/17-A/title17-Asec15.html",
    sourceName: "Maine Legislature",
    currentAsOf: "2025-10-01",
    currentAsOfLabel:
      "Maine Revised Statutes current through October 1, 2025; official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `17-A M.R.S. sec. 15 Warrantless arrests by a law enforcement officer.

Maine law sets circumstances when a law enforcement officer may make a warrantless arrest, including probable-cause categories and certain offenses committed in the officer's presence. This is a statutory arrest-power hook.

Use this for Maine police encounter answers only as statutory context. Stops, searches, questioning, and arrests also require federal and state constitutional analysis.`,
  },
  {
    id: "me-mrs-17a-751b-refusing-arrest-detention",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ME",
    topicIds: ["police"],
    citation: "17-A M.R.S. sec. 751-B",
    title: "Refusing to submit to arrest or detention",
    officialUrl: "https://legislature.maine.gov/statutes/17-A/title17-Asec751-B.html",
    sourceName: "Maine Legislature",
    currentAsOf: "2025-10-01",
    currentAsOfLabel:
      "Maine Revised Statutes current through October 1, 2025; official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `17-A M.R.S. sec. 751-B Refusing to submit to arrest or detention.

Maine criminalizes certain conduct intended to hinder, delay, or prevent a law enforcement officer from effecting an arrest or detention, including refusing to stop on request or signal, use of physical force, or creating a substantial risk of bodily injury. It includes a defense when the attempted arrest or detention was unlawful for the refusal-to-stop provision.

Use this carefully: this is not a broad stop-and-identify statute, and it does not by itself require answering every police question.`,
  },
  {
    id: "me-mrs-15-710-interception-recording",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ME",
    topicIds: ["police"],
    citation: "15 M.R.S. sec. 710",
    title: "Interception of wire and oral communications; offenses",
    officialUrl: "https://legislature.maine.gov/statutes/15/title15sec710.html",
    sourceName: "Maine Legislature",
    currentAsOf: "2025-10-01",
    currentAsOfLabel:
      "Maine Revised Statutes current through October 1, 2025; official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `15 M.R.S. sec. 710 Interception of wire and oral communications; offenses.

Maine law governs prohibited interception, disclosure, use, possession, and sale of interception devices for wire and oral communications. Maine is generally treated as allowing recording by a party to the conversation, subject to statutory definitions and privacy expectations.

Use this as Maine's recording/privacy hook. For recording police, also analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "me-mrs-17a-1807-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ME",
    topicIds: ["supervision"],
    citation: "17-A M.R.S. sec. 1807",
    title: "Conditions of probation",
    officialUrl: "https://legislature.maine.gov/statutes/17-A/title17-Asec1807.html",
    sourceName: "Maine Legislature",
    currentAsOf: "2025-10-01",
    currentAsOfLabel:
      "Maine Revised Statutes current through October 1, 2025; official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `17-A M.R.S. sec. 1807 Conditions of probation.

Maine courts must attach reasonable and appropriate probation conditions to assist the person in leading a law-abiding life, including a condition to refrain from criminal conduct. Authorized conditions include reporting, employment, treatment, weapons limits, residence and travel limits, restitution, supervision fees, and other conditions tied to rehabilitation or public safety.

Use this with the person's written probation order for specific condition questions.`,
  },
  {
    id: "me-mrs-17a-1809-probation-revocation-arrest",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ME",
    topicIds: ["supervision"],
    citation: "17-A M.R.S. sec. 1809",
    title: "Commencement of probation revocation proceedings by arrest",
    officialUrl: "https://legislature.maine.gov/statutes/17-A/title17-Asec1809.html",
    sourceName: "Maine Legislature",
    currentAsOf: "2025-10-01",
    currentAsOfLabel:
      "Maine Revised Statutes current through October 1, 2025; official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `17-A M.R.S. sec. 1809 Commencement of probation revocation proceedings by arrest.

Maine law allows a probation officer with probable cause to believe a probation condition was violated to arrest the person or cause the person to be arrested, and it sets probable-cause hearing timing after arrest.

Use this for Maine probation violation procedure, alongside the written probation order and any later court hearing or revocation provisions.`,
  },
  {
    id: "me-mrs-34a-5803-parole-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ME",
    topicIds: ["supervision"],
    citation: "34-A M.R.S. sec. 5803",
    title: "Eligibility for parole hearing; State Prison",
    officialUrl: "https://legislature.maine.gov/statutes/34-A/title34-Asec5803.html",
    sourceName: "Maine Legislature",
    currentAsOf: "2025-10-01",
    currentAsOfLabel:
      "Maine Revised Statutes current through October 1, 2025; official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `34-A M.R.S. sec. 5803 Eligibility for parole hearing; State Prison.

Maine parole statutes apply to limited categories, including prisoners sentenced under older pre-criminal-code parole structures. Modern Maine sentencing questions often involve probation, supervised release, administrative release, or other correctional statuses rather than ordinary parole eligibility.

Use this as a narrow Maine parole-history source, not as a general release-date calculator.`,
  },
  {
    id: "md-elec-law-3-102-voter-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MD",
    topicIds: ["voting"],
    citation: "Md. Code, Elec. Law sec. 3-102",
    title: "Qualifications to register to vote",
    officialUrl:
      "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gel&section=3-102&enactments=false",
    sourceName: "Maryland General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Maryland General Assembly official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Md. Code, Elec. Law sec. 3-102 Qualifications to register to vote.

Maryland voter-registration law sets the baseline qualifications to register and identifies felony-conviction disqualification while a person is serving a court-ordered sentence of imprisonment for a felony conviction. The practical question is whether the person is currently serving a disqualifying sentence of imprisonment, not whether the person has any felony history.

Use this as Maryland's core felony voting-rights authority. A specific answer requires current incarceration or sentence status and registration eligibility.`,
  },
  {
    id: "md-crim-proc-10-105-expungement-nonconviction",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MD",
    topicIds: ["expungement"],
    citation: "Md. Code, Crim. Proc. sec. 10-105",
    title: "Expungement after acquittal, dismissal, probation before judgment, and related dispositions",
    officialUrl:
      "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gcp&section=10-105&enactments=false",
    sourceName: "Maryland General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Maryland General Assembly official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Md. Code, Crim. Proc. sec. 10-105 Expungement after acquittal, dismissal, probation before judgment, and related dispositions.

Maryland provides expungement procedures for several nonconviction and special dispositions, including acquittal, dismissal, nolle prosequi, probation before judgment, stet, compromise, and other covered outcomes. Eligibility depends on disposition, waiting period, pending charges, good-cause exceptions, and statutory exclusions.

Use this as Maryland's main nonconviction and special-disposition expungement source.`,
  },
  {
    id: "md-crim-proc-10-110-expungement-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MD",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Md. Code, Crim. Proc. sec. 10-110",
    title: "Expungement of certain convictions",
    officialUrl:
      "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gcp&section=10-110&enactments=false",
    sourceName: "Maryland General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Maryland General Assembly official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Md. Code, Crim. Proc. sec. 10-110 Expungement of certain convictions.

Maryland allows expungement of certain eligible convictions after statutory waiting periods and conditions are met. Eligibility depends on the conviction offense, exclusions, completion of sentence, waiting period, pending charges, subsequent convictions, and any special statutory rule.

Use this as Maryland's core conviction-expungement authority. A specific answer requires the exact offense, disposition, sentence completion date, and exclusion analysis.`,
  },
  {
    id: "md-crim-proc-10-109-expunged-record-disclosure",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MD",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Md. Code, Crim. Proc. sec. 10-109",
    title: "Disclosure of expunged records",
    officialUrl:
      "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gcp&section=10-109&enactments=false",
    sourceName: "Maryland General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Maryland General Assembly official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Md. Code, Crim. Proc. sec. 10-109 Disclosure of expunged records.

Maryland law limits disclosure and use of expunged records, including protections relevant to employment and education contexts. A person generally should not be required to disclose expunged information except where a specific law permits or requires disclosure.

Use this after confirming that the record has actually been expunged and checking for any job, license, housing program, or agency-specific exception.`,
  },
  {
    id: "md-state-gov-20-704-housing-civil-right",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MD",
    topicIds: ["housing"],
    citation: "Md. Code, State Gov't sec. 20-704",
    title: "Civil right to fair housing",
    officialUrl:
      "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gsg&section=20-704&enactments=false",
    sourceName: "Maryland General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Maryland General Assembly official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Md. Code, State Gov't sec. 20-704 Civil right to fair housing.

Maryland recognizes fair-housing rights under state civil-rights law. This provision frames the right to obtain housing without unlawful discrimination based on protected characteristics.

Criminal history is not itself the same as a protected class under this source. For criminal-record screening, use this with federal HUD guidance, consumer-reporting law, expungement law, public housing rules, and local ordinances.`,
  },
  {
    id: "md-state-gov-20-705-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MD",
    topicIds: ["housing"],
    citation: "Md. Code, State Gov't sec. 20-705",
    title: "Discriminatory housing practices",
    officialUrl:
      "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gsg&section=20-705&enactments=false",
    sourceName: "Maryland General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Maryland General Assembly official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Md. Code, State Gov't sec. 20-705 Discriminatory housing practices.

Maryland law prohibits covered discriminatory housing practices based on protected characteristics. This is Maryland's operative state fair-housing statute for refusals, terms, advertising, and related housing conduct.

Use this for Maryland fair-housing questions. For criminal-record screening, pair it with federal disparate-impact guidance, expungement protections, and any local or program-specific housing rules.`,
  },
  {
    id: "md-state-gov-20-606-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MD",
    topicIds: ["employment"],
    citation: "Md. Code, State Gov't sec. 20-606",
    title: "Discriminatory employment practices",
    officialUrl:
      "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gsg&section=20-606&enactments=false",
    sourceName: "Maryland General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Maryland General Assembly official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Md. Code, State Gov't sec. 20-606 Discriminatory employment practices.

Maryland civil-rights law prohibits covered employment discrimination based on protected characteristics. It is useful employment-rights context, but criminal history is not itself a protected class under this source.

For criminal-record employment questions, use this with Maryland expungement protections, criminal-record screening timing rules, federal law, occupational-license statutes, and job-specific background-check requirements.`,
  },
  {
    id: "md-labor-employment-3-1503-criminal-record-screening",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MD",
    topicIds: ["employment"],
    citation: "Md. Code, Lab. & Empl. sec. 3-1503",
    title: "Criminal record screening practices",
    officialUrl:
      "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gle&section=3-1503&enactments=false",
    sourceName: "Maryland General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Maryland General Assembly official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Md. Code, Lab. & Empl. sec. 3-1503 Criminal record screening practices.

Maryland restricts when covered employers may require an applicant to disclose whether the applicant has a criminal record during the hiring process. This is Maryland's statewide fair-chance hiring timing rule.

Use this for job-application timing questions. It does not mean every criminal-record consideration is prohibited; exceptions, employer size, job type, and later-stage background checks matter.`,
  },
  {
    id: "md-crim-proc-2-202-warrantless-arrest",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MD",
    topicIds: ["police"],
    citation: "Md. Code, Crim. Proc. sec. 2-202",
    title: "Warrantless arrest by police officer",
    officialUrl:
      "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gcp&section=2-202&enactments=false",
    sourceName: "Maryland General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Maryland General Assembly official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Md. Code, Crim. Proc. sec. 2-202 Warrantless arrest by police officer.

Maryland law sets circumstances when a police officer may arrest without a warrant. This is a statutory arrest-power hook and should be used with federal and state constitutional limits on stops, searches, questioning, and arrests.

Use this for Maryland police encounter answers as statutory context, not as a complete search-and-seizure rule.`,
  },
  {
    id: "md-courts-judicial-10-402-recording-interception",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MD",
    topicIds: ["police"],
    citation: "Md. Code, Cts. & Jud. Proc. sec. 10-402",
    title: "Interception and disclosure of communications",
    officialUrl:
      "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gcj&section=10-402&enactments=false",
    sourceName: "Maryland General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Maryland General Assembly official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Md. Code, Cts. & Jud. Proc. sec. 10-402 Interception and disclosure of communications.

Maryland law governs interception and disclosure of wire, oral, and electronic communications and is generally treated as requiring consent of all parties for recording covered private communications. Public recording of police also raises First Amendment, privacy, and interference-with-duties issues.

Use this as Maryland's recording/privacy hook. For recording police, analyze public setting, expectation of privacy, consent, and whether the recording interferes with official duties.`,
  },
  {
    id: "md-crim-proc-6-220-probation-before-judgment",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MD",
    topicIds: ["supervision", "expungement"],
    citation: "Md. Code, Crim. Proc. sec. 6-220",
    title: "Probation before judgment",
    officialUrl:
      "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gcp&section=6-220&enactments=false",
    sourceName: "Maryland General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Maryland General Assembly official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Md. Code, Crim. Proc. sec. 6-220 Probation before judgment.

Maryland courts may stay entry of judgment, defer further proceedings, and place a person on probation before judgment in eligible cases. The court may impose conditions, and successful completion can affect whether there is a conviction for some purposes and whether expungement may be available.

Use this for Maryland PBJ and supervision questions, together with the written probation order and expungement statutes.`,
  },
  {
    id: "md-crim-proc-6-223-probation-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MD",
    topicIds: ["supervision"],
    citation: "Md. Code, Crim. Proc. sec. 6-223",
    title: "Violation of probation",
    officialUrl:
      "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gcp&section=6-223&enactments=false",
    sourceName: "Maryland General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Maryland General Assembly official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Md. Code, Crim. Proc. sec. 6-223 Violation of probation.

Maryland law governs court action after an alleged probation violation. Consequences depend on the original sentence, probation terms, alleged violation, hearing posture, court findings, and any available alternatives to revocation.

Use this for Maryland probation violation answers, but verify the written order and current court status before giving specific guidance.`,
  },
  {
    id: "md-corr-serv-7-301-parole-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MD",
    topicIds: ["supervision"],
    citation: "Md. Code, Corr. Servs. sec. 7-301",
    title: "Eligibility for parole",
    officialUrl:
      "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gcs&section=7-301&enactments=false",
    sourceName: "Maryland General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Maryland General Assembly official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Md. Code, Corr. Servs. sec. 7-301 Eligibility for parole.

Maryland parole eligibility depends on offense, sentence, time served, credits, exclusions, risk factors, Parole Commission action, and written conditions. This statute provides the framework for parole eligibility analysis.

Use this as Maryland's parole framework source, not as a release-date calculator. A precise answer requires the sentence, offense date, credits, board decision, and written supervision conditions.`,
  },
  {
    id: "ma-mgl-c51-s1-voter-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MA",
    topicIds: ["voting"],
    citation: "Mass. Gen. Laws ch. 51, sec. 1",
    title: "Voter qualifications",
    officialUrl:
      "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleVIII/Chapter51/Section1",
    sourceName: "Massachusetts Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Massachusetts Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mass. Gen. Laws ch. 51, sec. 1 Voter qualifications.

Massachusetts voter eligibility turns on citizenship, age, residence, registration, and whether the person is currently incarcerated in a correctional facility because of a felony conviction. A person with a felony conviction who is not currently incarcerated for that conviction is not disqualified on that basis alone.

Use this as Massachusetts' core felony voting-rights authority. A specific answer requires current incarceration status, conviction level, residence, and registration facts.`,
  },
  {
    id: "ma-mgl-c276-s100a-sealing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MA",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Mass. Gen. Laws ch. 276, sec. 100A",
    title: "Sealing conviction records",
    officialUrl:
      "https://malegislature.gov/Laws/GeneralLaws/PartIV/TitleII/Chapter276/Section100A",
    sourceName: "Massachusetts Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Massachusetts Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mass. Gen. Laws ch. 276, sec. 100A Sealing conviction records.

Massachusetts allows certain conviction records to be sealed after statutory waiting periods and conditions are met. Eligibility depends on offense type, disposition, sentence completion, later record, pending charges, statutory exclusions, and whether a shorter or special waiting period applies.

Use this as Massachusetts' primary conviction-sealing authority. A specific answer requires the exact offense, disposition, sentence completion date, later convictions, and exclusion analysis.`,
  },
  {
    id: "ma-mgl-c276-s100c-sealing-nonconvictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MA",
    topicIds: ["expungement"],
    citation: "Mass. Gen. Laws ch. 276, sec. 100C",
    title: "Sealing nonconviction and related criminal records",
    officialUrl:
      "https://malegislature.gov/Laws/GeneralLaws/PartIV/TitleII/Chapter276/Section100C",
    sourceName: "Massachusetts Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Massachusetts Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mass. Gen. Laws ch. 276, sec. 100C Sealing nonconviction and related criminal records.

Massachusetts separately addresses sealing for cases that end without conviction or involve certain qualifying dispositions. Timing, disposition type, court findings, and statutory exceptions matter.

Use this alongside section 100A so JO distinguishes conviction sealing from nonconviction record sealing.`,
  },
  {
    id: "ma-mgl-c276-s100e-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MA",
    topicIds: ["expungement"],
    citation: "Mass. Gen. Laws ch. 276, sec. 100E",
    title: "Petition to expunge criminal records",
    officialUrl:
      "https://malegislature.gov/Laws/GeneralLaws/PartIV/TitleII/Chapter276/Section100E",
    sourceName: "Massachusetts Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Massachusetts Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mass. Gen. Laws ch. 276, sec. 100E Petition to expunge criminal records.

Massachusetts provides expungement only for limited statutory categories. Expungement is different from sealing and generally requires satisfying specific statutory grounds, procedures, waiting periods, and exclusions.

Use this as Massachusetts' expungement authority, and avoid telling users that all sealable records are expungeable.`,
  },
  {
    id: "ma-mgl-c151b-s4-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MA",
    topicIds: ["housing", "employment"],
    citation: "Mass. Gen. Laws ch. 151B, sec. 4",
    title: "Unlawful discrimination in employment and housing",
    officialUrl:
      "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXI/Chapter151B/Section4",
    sourceName: "Massachusetts Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Massachusetts Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mass. Gen. Laws ch. 151B, sec. 4 Unlawful discrimination in employment and housing.

Massachusetts civil-rights law prohibits covered discriminatory practices in employment and housing based on protected characteristics. The statute also includes rules limiting certain employment inquiries about criminal records.

Criminal history is not itself the same as a protected class for housing. Use this with federal HUD guidance, consumer-reporting law, sealing and expungement rules, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "ma-mgl-c186-s14-quiet-enjoyment",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MA",
    topicIds: ["housing"],
    citation: "Mass. Gen. Laws ch. 186, sec. 14",
    title: "Quiet enjoyment and unlawful interference with tenancy",
    officialUrl:
      "https://malegislature.gov/Laws/GeneralLaws/PartII/TitleI/Chapter186/Section14",
    sourceName: "Massachusetts Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Massachusetts Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mass. Gen. Laws ch. 186, sec. 14 Quiet enjoyment and unlawful interference with tenancy.

Massachusetts landlord-tenant law protects tenants against certain interference with quiet enjoyment and unlawful utility interruption or exclusion conduct. This can matter when a tenant with a criminal record faces lockout, harassment, or pressure outside lawful eviction process.

Use this as a tenant-protection hook, not as a criminal-record screening rule.`,
  },
  {
    id: "ma-mgl-c6-s172-cori-dissemination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MA",
    topicIds: ["employment", "housing"],
    citation: "Mass. Gen. Laws ch. 6, sec. 172",
    title: "Criminal offender record information access and dissemination",
    officialUrl:
      "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter6/Section172",
    sourceName: "Massachusetts Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Massachusetts Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mass. Gen. Laws ch. 6, sec. 172 Criminal offender record information access and dissemination.

Massachusetts CORI law governs access to and dissemination of criminal offender record information. Employers, housing providers, and other requestors may have different access levels, notice obligations, and limits depending on the context.

Use this as Massachusetts' criminal-record information source for employment and housing background-check questions, together with sealing, expungement, and anti-discrimination rules.`,
  },
  {
    id: "ma-mgl-c276-s100a-sealed-record-employment-effect",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MA",
    topicIds: ["employment"],
    citation: "Mass. Gen. Laws ch. 276, sec. 100A",
    title: "Employment effect of sealed conviction records",
    officialUrl:
      "https://malegislature.gov/Laws/GeneralLaws/PartIV/TitleII/Chapter276/Section100A",
    sourceName: "Massachusetts Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Massachusetts Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mass. Gen. Laws ch. 276, sec. 100A Employment effect of sealed conviction records.

Massachusetts sealed-record law is important for employment because sealed convictions are generally treated differently from open criminal records, and employers may be restricted in asking about or using sealed records.

Use this employment-focused record-relief hook only after confirming that a record is actually sealed and checking job-specific exceptions, licensing laws, and CORI access rules.`,
  },
  {
    id: "ma-mgl-c276-s1-warrantless-arrest",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MA",
    topicIds: ["police"],
    citation: "Mass. Gen. Laws ch. 276, sec. 1",
    title: "Arrest without warrant",
    officialUrl:
      "https://malegislature.gov/Laws/GeneralLaws/PartIV/TitleII/Chapter276/Section1",
    sourceName: "Massachusetts Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Massachusetts Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mass. Gen. Laws ch. 276, sec. 1 Arrest without warrant.

Massachusetts law sets statutory authority for arrest without a warrant in specified circumstances. This is a police arrest-power hook and must be used with federal and state constitutional rules governing stops, searches, questioning, and arrests.

Use this for Massachusetts police encounter answers as statutory context, not as a complete search-and-seizure rule.`,
  },
  {
    id: "ma-mgl-c41-s98-police-powers",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MA",
    topicIds: ["police"],
    citation: "Mass. Gen. Laws ch. 41, sec. 98",
    title: "Powers and duties of police officers",
    officialUrl:
      "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleVII/Chapter41/Section98",
    sourceName: "Massachusetts Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Massachusetts Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mass. Gen. Laws ch. 41, sec. 98 Powers and duties of police officers.

Massachusetts law describes certain powers and duties of police officers. It is useful as a state statutory policing hook, but it does not replace constitutional analysis for temporary detention, questioning, search, arrest, or use of force.

Use this with case law and practical know-your-rights guidance for police encounter questions.`,
  },
  {
    id: "ma-mgl-c272-s99-recording-interception",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MA",
    topicIds: ["police"],
    citation: "Mass. Gen. Laws ch. 272, sec. 99",
    title: "Interception of wire and oral communications",
    officialUrl:
      "https://malegislature.gov/Laws/GeneralLaws/PartIV/TitleI/Chapter272/Section99",
    sourceName: "Massachusetts Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Massachusetts Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mass. Gen. Laws ch. 272, sec. 99 Interception of wire and oral communications.

Massachusetts wiretap law governs interception and recording of wire and oral communications and is generally treated as prohibiting secret recording of covered communications without consent. Public recording of police also raises First Amendment, privacy, and interference-with-duties issues.

Use this as Massachusetts' recording/privacy hook. For recording police, analyze whether recording is open or secret, the public setting, expectation of privacy, consent, and interference with official duties.`,
  },
  {
    id: "ma-mgl-c276-s87-probation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MA",
    topicIds: ["supervision"],
    citation: "Mass. Gen. Laws ch. 276, sec. 87",
    title: "Probation authority and conditions",
    officialUrl:
      "https://malegislature.gov/Laws/GeneralLaws/PartIV/TitleII/Chapter276/Section87",
    sourceName: "Massachusetts Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Massachusetts Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mass. Gen. Laws ch. 276, sec. 87 Probation authority and conditions.

Massachusetts courts may place a person on probation and impose conditions authorized by law and the court order. Specific obligations depend heavily on the written probation terms, offense, sentence, and court orders.

Use this as Massachusetts' probation framework source, together with the person's written probation conditions.`,
  },
  {
    id: "ma-mgl-c279-s3-probation-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MA",
    topicIds: ["supervision"],
    citation: "Mass. Gen. Laws ch. 279, sec. 3",
    title: "Surrender and violation of probation",
    officialUrl:
      "https://malegislature.gov/Laws/GeneralLaws/PartIV/TitleII/Chapter279/Section3",
    sourceName: "Massachusetts Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Massachusetts Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mass. Gen. Laws ch. 279, sec. 3 Surrender and violation of probation.

Massachusetts law provides a statutory basis for surrender proceedings after alleged probation violations. Consequences depend on the sentence, conditions, violation allegation, hearing posture, court findings, and available sanctions.

Use this for Massachusetts probation violation answers, but verify the written order and current court status before giving specific guidance.`,
  },
  {
    id: "ma-mgl-c127-s130-parole-board",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MA",
    topicIds: ["supervision"],
    citation: "Mass. Gen. Laws ch. 127, sec. 130",
    title: "Parole Board powers and duties",
    officialUrl:
      "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXVIII/Chapter127/Section130",
    sourceName: "Massachusetts Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Massachusetts Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mass. Gen. Laws ch. 127, sec. 130 Parole Board powers and duties.

Massachusetts parole decisions depend on offense, sentence, parole eligibility, Parole Board authority, risk and rehabilitation factors, and written parole conditions. This section provides core Parole Board framework authority.

Use this as Massachusetts' parole framework source, not as a release-date calculator. A precise answer requires the sentence, offense date, eligibility rule, board decision, and written supervision conditions.`,
  },
  {
    id: "mi-mcl-168-492-voter-registration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MI",
    topicIds: ["voting"],
    citation: "Mich. Comp. Laws sec. 168.492",
    title: "Voter registration qualifications",
    officialUrl: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-168-492",
    sourceName: "Michigan Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Michigan Legislature MCL section URL checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mich. Comp. Laws sec. 168.492 Voter registration qualifications.

Michigan voter registration law sets baseline qualifications for registering to vote, including citizenship, age, residence, and registration requirements. Felony history does not create a lifetime voting ban.

Use this as Michigan's voter-qualification source. For conviction-related questions, pair it with the absent-voter and confinement rule in section 168.758b.`,
  },
  {
    id: "mi-mcl-168-758b-confined-voter-ballot",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MI",
    topicIds: ["voting"],
    citation: "Mich. Comp. Laws sec. 168.758b",
    title: "Voting while confined in jail or prison",
    officialUrl: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-168-758b",
    sourceName: "Michigan Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Michigan Legislature MCL section URL checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mich. Comp. Laws sec. 168.758b Voting while confined in jail or prison.

Michigan law addresses ballot access for electors confined in jail or prison and excludes people who are confined after conviction and sentencing. People on probation, parole, or released from incarceration generally are not disqualified on that basis alone.

Use this as Michigan's core felony voting-rights authority. A specific answer requires current confinement status, conviction and sentencing status, residence, and registration facts.`,
  },
  {
    id: "mi-mcl-780-621-set-aside-conviction",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MI",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Mich. Comp. Laws sec. 780.621",
    title: "Application to set aside conviction",
    officialUrl: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-780-621",
    sourceName: "Michigan Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Michigan Legislature MCL section URL checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mich. Comp. Laws sec. 780.621 Application to set aside conviction.

Michigan allows eligible people to apply to set aside certain convictions after statutory waiting periods and conditions are met. Eligibility depends on offense type, number of convictions, exclusions, sentence completion, waiting period, pending charges, and any special statutory rule.

Use this as Michigan's primary petition-based conviction set-aside authority. A specific answer requires the exact offense, disposition, sentence completion date, and exclusion analysis.`,
  },
  {
    id: "mi-mcl-780-621g-automatic-set-aside",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MI",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Mich. Comp. Laws sec. 780.621g",
    title: "Automatic set aside of convictions",
    officialUrl: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-780-621g",
    sourceName: "Michigan Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Michigan Legislature MCL section URL checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mich. Comp. Laws sec. 780.621g Automatic set aside of convictions.

Michigan's clean-slate law provides for automatic set aside of eligible convictions after statutory time periods and conditions are met. Automatic relief depends on offense eligibility, waiting period, criminal history limits, pending charges, and statutory exclusions.

Use this as Michigan's automatic clean-slate authority. Do not assume automatic relief has happened without checking the specific record and eligibility criteria.`,
  },
  {
    id: "mi-mcl-780-622-effect-set-aside",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MI",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Mich. Comp. Laws sec. 780.622",
    title: "Effect of order setting aside conviction",
    officialUrl: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-780-622",
    sourceName: "Michigan Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Michigan Legislature MCL section URL checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mich. Comp. Laws sec. 780.622 Effect of order setting aside conviction.

Michigan law describes the legal effect of setting aside a conviction and when set-aside information may still be used or accessed. This matters for employment, housing, licensing, law enforcement, and later criminal justice questions.

Use this after confirming a conviction has been set aside, and check for any statutory exception before saying the record cannot be considered.`,
  },
  {
    id: "mi-mcl-37-2502-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MI",
    topicIds: ["housing"],
    citation: "Mich. Comp. Laws sec. 37.2502",
    title: "Discrimination in real estate transactions",
    officialUrl: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-37-2502",
    sourceName: "Michigan Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Michigan Legislature MCL section URL checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mich. Comp. Laws sec. 37.2502 Discrimination in real estate transactions.

Michigan's Elliott-Larsen Civil Rights Act prohibits covered discriminatory practices in real estate transactions based on protected characteristics. This is Michigan's operative state fair-housing statute.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, set-aside law, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "mi-mcl-554-139-landlord-covenants",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MI",
    topicIds: ["housing"],
    citation: "Mich. Comp. Laws sec. 554.139",
    title: "Landlord covenants for residential leases",
    officialUrl: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-554-139",
    sourceName: "Michigan Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Michigan Legislature MCL section URL checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mich. Comp. Laws sec. 554.139 Landlord covenants for residential leases.

Michigan landlord-tenant law implies certain landlord covenants in residential leases, including fitness for intended use and reasonable repair. These protections can matter when a tenant with a criminal record faces housing instability or landlord pressure unrelated to lawful screening.

Use this as a tenant-protection hook, not as a criminal-record screening rule.`,
  },
  {
    id: "mi-mcl-37-2202-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MI",
    topicIds: ["employment"],
    citation: "Mich. Comp. Laws sec. 37.2202",
    title: "Employment discrimination",
    officialUrl: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-37-2202",
    sourceName: "Michigan Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Michigan Legislature MCL section URL checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mich. Comp. Laws sec. 37.2202 Employment discrimination.

Michigan civil-rights law prohibits covered employment discrimination based on protected characteristics. It is useful employment-rights context, but criminal history is not itself a protected class under this source.

For criminal-record employment questions, use this with set-aside law, federal law, occupational-licensing statutes, and job-specific background-check requirements.`,
  },
  {
    id: "mi-mcl-37-2205a-employment-arrest-record-inquiry",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MI",
    topicIds: ["employment"],
    citation: "Mich. Comp. Laws sec. 37.2205a",
    title: "Employment inquiry into misdemeanor arrest or detention not resulting in conviction",
    officialUrl: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-37-2205a",
    sourceName: "Michigan Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Michigan Legislature MCL section URL checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mich. Comp. Laws sec. 37.2205a Employment inquiry into misdemeanor arrest or detention not resulting in conviction.

Michigan restricts covered employers from requesting, making, or maintaining records of certain misdemeanor arrest, detention, or disposition information where a conviction did not result. This is a direct criminal-record employment protection.

Use this for Michigan job-application questions involving nonconviction misdemeanor records, and pair it with set-aside law and job-specific background-check rules.`,
  },
  {
    id: "mi-mcl-764-15-warrantless-arrest",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MI",
    topicIds: ["police"],
    citation: "Mich. Comp. Laws sec. 764.15",
    title: "Arrest without warrant",
    officialUrl: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-764-15",
    sourceName: "Michigan Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Michigan Legislature MCL section URL checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mich. Comp. Laws sec. 764.15 Arrest without warrant.

Michigan law sets circumstances when a peace officer may arrest without a warrant. This is a statutory arrest-power hook and must be used with federal and state constitutional limits on stops, searches, questioning, and arrests.

Use this for Michigan police encounter answers as statutory context, not as a complete search-and-seizure rule.`,
  },
  {
    id: "mi-mcl-750-539c-eavesdropping-recording",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MI",
    topicIds: ["police"],
    citation: "Mich. Comp. Laws sec. 750.539c",
    title: "Eavesdropping upon private conversation",
    officialUrl: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-750-539c",
    sourceName: "Michigan Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Michigan Legislature MCL section URL checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mich. Comp. Laws sec. 750.539c Eavesdropping upon private conversation.

Michigan law governs eavesdropping and private-conversation recording. Recording questions depend on whether the person is a participant, the expectation of privacy, and other statutory details.

Use this as Michigan's recording/privacy hook. For recording police, also analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "mi-mcl-771-1-probation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MI",
    topicIds: ["supervision"],
    citation: "Mich. Comp. Laws sec. 771.1",
    title: "Probation authority",
    officialUrl: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-771-1",
    sourceName: "Michigan Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Michigan Legislature MCL section URL checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mich. Comp. Laws sec. 771.1 Probation authority.

Michigan courts may place eligible people on probation under statutory authority and impose terms through the sentencing order. Specific obligations depend on the written probation order, offense, sentence, and court requirements.

Use this as Michigan's probation framework source, together with the person's written probation conditions.`,
  },
  {
    id: "mi-mcl-771-4-probation-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MI",
    topicIds: ["supervision"],
    citation: "Mich. Comp. Laws sec. 771.4",
    title: "Arrest for probation violation",
    officialUrl: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-771-4",
    sourceName: "Michigan Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Michigan Legislature MCL section URL checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mich. Comp. Laws sec. 771.4 Arrest for probation violation.

Michigan law provides authority and process related to alleged probation violations, including arrest and court handling. Consequences depend on the sentence, conditions, alleged violation, hearing posture, court findings, and available sanctions.

Use this for Michigan probation violation answers, but verify the written order and current court status before giving specific guidance.`,
  },
  {
    id: "mi-mcl-791-234-parole-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MI",
    topicIds: ["supervision"],
    citation: "Mich. Comp. Laws sec. 791.234",
    title: "Parole eligibility and release",
    officialUrl: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-791-234",
    sourceName: "Michigan Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Michigan Legislature MCL section URL checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mich. Comp. Laws sec. 791.234 Parole eligibility and release.

Michigan parole eligibility depends on offense, sentence, minimum term, credits, parole board action, statutory exclusions, risk factors, and written parole conditions. This statute provides the framework for parole eligibility and release analysis.

Use this as Michigan's parole framework source, not as a release-date calculator. A precise answer requires the sentence, offense date, credits, board decision, and written supervision conditions.`,
  },
  {
    id: "mn-stat-201-014-voter-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MN",
    topicIds: ["voting"],
    citation: "Minn. Stat. sec. 201.014",
    title: "Eligibility to vote",
    officialUrl: "https://www.revisor.mn.gov/statutes/cite/201.014",
    sourceName: "Minnesota Office of the Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Minnesota Revisor 2025 Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Minn. Stat. sec. 201.014 Eligibility to vote.

Minnesota voter eligibility turns on citizenship, age, residence, registration, and statutory disqualifications. Minnesota restored voting rights for people with felony convictions when they are not incarcerated for the felony offense.

Use this as Minnesota's core felony voting-rights authority. A specific answer requires current incarceration status, sentence status, residence, and registration facts.`,
  },
  {
    id: "mn-stat-609-165-civil-rights-restoration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MN",
    topicIds: ["voting"],
    citation: "Minn. Stat. sec. 609.165",
    title: "Restoration of civil rights",
    officialUrl: "https://www.revisor.mn.gov/statutes/cite/609.165",
    sourceName: "Minnesota Office of the Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Minnesota Revisor 2025 Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Minn. Stat. sec. 609.165 Restoration of civil rights.

Minnesota law governs restoration of civil rights after felony conviction and should be read with voter eligibility section 201.014. For voting questions, the key distinction is whether the person is currently incarcerated for a felony offense.

Use this as restoration context, not as the only voting eligibility source.`,
  },
  {
    id: "mn-stat-609a-02-expungement-grounds",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MN",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Minn. Stat. sec. 609A.02",
    title: "Grounds for expungement",
    officialUrl: "https://www.revisor.mn.gov/statutes/cite/609A.02",
    sourceName: "Minnesota Office of the Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Minnesota Revisor 2025 Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Minn. Stat. sec. 609A.02 Grounds for expungement.

Minnesota provides statutory grounds to expunge certain criminal records, including nonconviction records, diversion or stay outcomes, and eligible convictions after statutory waiting periods. Eligibility depends on disposition, offense type, later record, waiting period, pending charges, and statutory exclusions.

Use this as Minnesota's main expungement eligibility authority. A specific answer requires the exact offense, disposition, sentence completion date, later record, and exclusion analysis.`,
  },
  {
    id: "mn-stat-609a-03-expungement-petition",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MN",
    topicIds: ["expungement"],
    citation: "Minn. Stat. sec. 609A.03",
    title: "Petition to expunge criminal records",
    officialUrl: "https://www.revisor.mn.gov/statutes/cite/609A.03",
    sourceName: "Minnesota Office of the Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Minnesota Revisor 2025 Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Minn. Stat. sec. 609A.03 Petition to expunge criminal records.

Minnesota expungement generally requires petition procedure, service, hearing, findings, and consideration of statutory factors unless automatic relief applies. The court may seal records held by court and executive branch agencies when the statute permits.

Use this as Minnesota's expungement process source after eligibility is checked under section 609A.02 or other applicable provisions.`,
  },
  {
    id: "mn-stat-609a-015-clean-slate-automatic",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MN",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Minn. Stat. sec. 609A.015",
    title: "Automatic expungement",
    officialUrl: "https://www.revisor.mn.gov/statutes/cite/609A.015",
    sourceName: "Minnesota Office of the Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Minnesota Revisor 2025 Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Minn. Stat. sec. 609A.015 Automatic expungement.

Minnesota's clean-slate law provides automatic expungement for eligible records when statutory criteria are satisfied. Automatic relief depends on offense eligibility, waiting periods, subsequent record, pending charges, and implementation rules.

Use this as Minnesota's automatic clean-slate authority. Do not assume a record has already been automatically expunged without checking the record and eligibility criteria.`,
  },
  {
    id: "mn-stat-363a-09-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MN",
    topicIds: ["housing"],
    citation: "Minn. Stat. sec. 363A.09",
    title: "Unfair discriminatory practices in housing",
    officialUrl: "https://www.revisor.mn.gov/statutes/cite/363A.09",
    sourceName: "Minnesota Office of the Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Minnesota Revisor 2025 Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Minn. Stat. sec. 363A.09 Unfair discriminatory practices in housing.

Minnesota law prohibits covered discriminatory practices in real property, housing, and related transactions based on protected characteristics. This is Minnesota's operative state fair-housing statute.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, expungement law, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "mn-stat-504b-161-landlord-covenants",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MN",
    topicIds: ["housing"],
    citation: "Minn. Stat. sec. 504B.161",
    title: "Landlord covenants",
    officialUrl: "https://www.revisor.mn.gov/statutes/cite/504B.161",
    sourceName: "Minnesota Office of the Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Minnesota Revisor 2025 Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Minn. Stat. sec. 504B.161 Landlord covenants.

Minnesota landlord-tenant law implies duties in residential leases, including fitness, repair, and compliance with health and safety laws. These protections can matter when a tenant with a criminal record faces housing instability unrelated to lawful screening.

Use this as a tenant-protection hook, not as a criminal-record screening rule.`,
  },
  {
    id: "mn-stat-363a-08-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MN",
    topicIds: ["employment"],
    citation: "Minn. Stat. sec. 363A.08",
    title: "Unfair discriminatory practices in employment",
    officialUrl: "https://www.revisor.mn.gov/statutes/cite/363A.08",
    sourceName: "Minnesota Office of the Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Minnesota Revisor 2025 Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Minn. Stat. sec. 363A.08 Unfair discriminatory practices in employment.

Minnesota civil-rights law prohibits covered employment discrimination based on protected characteristics. It is useful employment-rights context, but criminal history is not itself a protected class under this source.

For criminal-record employment questions, use this with expungement law, rehabilitation-of-offenders protections, federal law, and job-specific background-check requirements.`,
  },
  {
    id: "mn-stat-364-03-public-employment-licensing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MN",
    topicIds: ["employment"],
    citation: "Minn. Stat. sec. 364.03",
    title: "Public employment and licensing; criminal conviction limits",
    officialUrl: "https://www.revisor.mn.gov/statutes/cite/364.03",
    sourceName: "Minnesota Office of the Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Minnesota Revisor 2025 Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Minn. Stat. sec. 364.03 Public employment and licensing; criminal conviction limits.

Minnesota limits when a public employer or licensing authority may disqualify a person because of a criminal conviction. The analysis depends on whether the conviction directly relates to the position or license, evidence of rehabilitation, time elapsed, and occupation-specific law.

Use this as Minnesota's core public employment and occupational-licensing criminal-record authority.`,
  },
  {
    id: "mn-stat-629-34-warrantless-arrest",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MN",
    topicIds: ["police"],
    citation: "Minn. Stat. sec. 629.34",
    title: "Arrest without warrant",
    officialUrl: "https://www.revisor.mn.gov/statutes/cite/629.34",
    sourceName: "Minnesota Office of the Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Minnesota Revisor 2025 Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Minn. Stat. sec. 629.34 Arrest without warrant.

Minnesota law sets circumstances when a peace officer may arrest without a warrant. This is a statutory arrest-power hook and must be used with federal and state constitutional limits on stops, searches, questioning, and arrests.

Use this for Minnesota police encounter answers as statutory context, not as a complete search-and-seizure rule.`,
  },
  {
    id: "mn-stat-626a-02-interception-recording",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MN",
    topicIds: ["police"],
    citation: "Minn. Stat. sec. 626A.02",
    title: "Interception and disclosure of wire, electronic, or oral communications",
    officialUrl: "https://www.revisor.mn.gov/statutes/cite/626A.02",
    sourceName: "Minnesota Office of the Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Minnesota Revisor 2025 Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Minn. Stat. sec. 626A.02 Interception and disclosure of wire, electronic, or oral communications.

Minnesota law governs interception and disclosure of wire, electronic, and oral communications. Minnesota is generally treated as a one-party-consent state for recording conversations, subject to statutory details and privacy expectations.

Use this as Minnesota's recording/privacy hook. For recording police, analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "mn-stat-609-135-probation-stay",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MN",
    topicIds: ["supervision"],
    citation: "Minn. Stat. sec. 609.135",
    title: "Stay of imposition or execution of sentence; probation",
    officialUrl: "https://www.revisor.mn.gov/statutes/cite/609.135",
    sourceName: "Minnesota Office of the Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Minnesota Revisor 2025 Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Minn. Stat. sec. 609.135 Stay of imposition or execution of sentence; probation.

Minnesota courts may stay imposition or execution of sentence and place a person on probation with conditions. Specific obligations depend on the written sentencing and probation order, offense, sentence, and court requirements.

Use this as Minnesota's probation framework source, together with the person's written probation conditions.`,
  },
  {
    id: "mn-stat-244-05-supervised-release-parole",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MN",
    topicIds: ["supervision"],
    citation: "Minn. Stat. sec. 244.05",
    title: "Supervised release, conditional release, and parole",
    officialUrl: "https://www.revisor.mn.gov/statutes/cite/244.05",
    sourceName: "Minnesota Office of the Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Minnesota Revisor 2025 Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Minn. Stat. sec. 244.05 Supervised release, conditional release, and parole.

Minnesota release from imprisonment often involves supervised release, conditional release, or parole-era rules depending on offense date, sentence, credits, release authority, and written conditions. This statute provides the framework for release and supervision status.

Use this as Minnesota's release-supervision framework source, not as a release-date calculator. A precise answer requires the sentence, offense date, credits, release decision, and written supervision conditions.`,
  },
  {
    id: "mn-stat-244-195-supervision-violations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MN",
    topicIds: ["supervision"],
    citation: "Minn. Stat. sec. 244.195",
    title: "Supervision violation hearings and sanctions",
    officialUrl: "https://www.revisor.mn.gov/statutes/cite/244.195",
    sourceName: "Minnesota Office of the Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Minnesota Revisor 2025 Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Minn. Stat. sec. 244.195 Supervision violation hearings and sanctions.

Minnesota law addresses procedures and sanctions for certain supervision violations. Consequences depend on the supervision type, alleged violation, hearing posture, agency or court authority, findings, and available sanctions.

Use this for Minnesota supervision violation answers, but verify the written order and current supervision status before giving specific guidance.`,
  },
  {
    id: "ms-const-art-12-sec-241-disenfranchising-crimes",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MS",
    topicIds: ["voting"],
    citation: "Miss. Const. art. 12, sec. 241",
    title: "Disenfranchising crimes",
    officialUrl: "https://www.sos.ms.gov/communications-publications/mississippi-law",
    sourceName: "Mississippi Secretary of State",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Mississippi Secretary of State law publications source checked June 27, 2026; exact section text pending official-code adapter verification",
    reviewStatus: "approved",
    text: `Miss. Const. art. 12, sec. 241 Disenfranchising crimes.

Mississippi's constitution disenfranchises people convicted of specified crimes, including listed offenses such as murder, rape, bribery, theft, arson, obtaining money or goods under false pretenses, perjury, forgery, embezzlement, and bigamy. Mississippi felony voting analysis is offense-specific and is not simply based on whether the person completed a sentence.

Use this as Mississippi's core felony voting-rights authority. A specific answer requires the exact conviction offense, whether it is a disenfranchising offense, and whether rights have been restored by pardon, legislative action, or other recognized authority.`,
  },
  {
    id: "ms-code-23-15-11-voter-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MS",
    topicIds: ["voting"],
    citation: "Miss. Code Ann. sec. 23-15-11",
    title: "Voter qualifications",
    officialUrl: "https://www.sos.ms.gov/communications-publications/mississippi-law",
    sourceName: "Mississippi Secretary of State",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Mississippi Secretary of State law publications source checked June 27, 2026; exact section text pending official-code adapter verification",
    reviewStatus: "approved",
    text: `Miss. Code Ann. sec. 23-15-11 Voter qualifications.

Mississippi election law sets baseline qualifications for registration and voting. For people with convictions, this source must be read with Mississippi Constitution article 12, section 241 and any restoration authority.

Use this as Mississippi's voter-qualification source. Do not answer conviction-related voting questions from this statute alone.`,
  },
  {
    id: "ms-code-99-19-71-expunction-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MS",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Miss. Code Ann. sec. 99-19-71",
    title: "Expunction of certain convictions and misdemeanor records",
    officialUrl: "https://www.sos.ms.gov/communications-publications/mississippi-law",
    sourceName: "Mississippi Secretary of State",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Mississippi Secretary of State law publications source checked June 27, 2026; exact section text pending official-code adapter verification",
    reviewStatus: "approved",
    text: `Miss. Code Ann. sec. 99-19-71 Expunction of certain convictions and misdemeanor records.

Mississippi allows expunction for certain eligible misdemeanor and felony convictions after statutory conditions are met. Eligibility depends on offense type, statutory exclusions, prior record, sentence completion, waiting period, pending charges, and whether the conviction falls within an eligible category.

Use this as Mississippi's primary conviction expunction authority. A specific answer requires the exact offense, disposition, sentence completion date, and exclusion analysis.`,
  },
  {
    id: "ms-code-99-15-26-nonadjudication-expunction",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MS",
    topicIds: ["expungement"],
    citation: "Miss. Code Ann. sec. 99-15-26",
    title: "Nonadjudication and expunction after dismissal",
    officialUrl: "https://www.sos.ms.gov/communications-publications/mississippi-law",
    sourceName: "Mississippi Secretary of State",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Mississippi Secretary of State law publications source checked June 27, 2026; exact section text pending official-code adapter verification",
    reviewStatus: "approved",
    text: `Miss. Code Ann. sec. 99-15-26 Nonadjudication and expunction after dismissal.

Mississippi nonadjudication law allows qualifying defendants to avoid adjudication and obtain dismissal and expunction if statutory terms are successfully completed. Eligibility depends on offense, prior record, prosecutor and court handling, completion of terms, and statutory exclusions.

Use this as Mississippi's diversion/nonadjudication expunction source, separate from conviction expunction under section 99-19-71.`,
  },
  {
    id: "ms-code-43-33-723-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MS",
    topicIds: ["housing"],
    citation: "Miss. Code Ann. sec. 43-33-723",
    title: "Discriminatory housing practices",
    officialUrl: "https://www.sos.ms.gov/communications-publications/mississippi-law",
    sourceName: "Mississippi Secretary of State",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Mississippi Secretary of State law publications source checked June 27, 2026; exact section text pending official-code adapter verification",
    reviewStatus: "approved",
    text: `Miss. Code Ann. sec. 43-33-723 Discriminatory housing practices.

Mississippi fair-housing law prohibits covered discriminatory housing practices based on protected characteristics. This is Mississippi's operative state fair-housing statute.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, expunction law, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "ms-code-89-8-23-landlord-obligations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MS",
    topicIds: ["housing"],
    citation: "Miss. Code Ann. sec. 89-8-23",
    title: "Landlord obligations",
    officialUrl: "https://www.sos.ms.gov/communications-publications/mississippi-law",
    sourceName: "Mississippi Secretary of State",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Mississippi Secretary of State law publications source checked June 27, 2026; exact section text pending official-code adapter verification",
    reviewStatus: "approved",
    text: `Miss. Code Ann. sec. 89-8-23 Landlord obligations.

Mississippi residential landlord-tenant law sets statutory landlord duties regarding premises and lease compliance. These protections can matter when a tenant with a criminal record faces housing instability unrelated to lawful screening.

Use this as a tenant-protection hook, not as a criminal-record screening rule.`,
  },
  {
    id: "ms-code-73-77-3-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MS",
    topicIds: ["employment"],
    citation: "Miss. Code Ann. sec. 73-77-3",
    title: "Occupational licensing and criminal conviction standards",
    officialUrl: "https://www.sos.ms.gov/communications-publications/mississippi-law",
    sourceName: "Mississippi Secretary of State",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Mississippi Secretary of State law publications source checked June 27, 2026; exact section text pending official-code adapter verification",
    reviewStatus: "approved",
    text: `Miss. Code Ann. sec. 73-77-3 Occupational licensing and criminal conviction standards.

Mississippi's occupational licensing reform law limits when a licensing authority may use criminal conviction history to disqualify an applicant. The analysis depends on the occupation, the conviction, relationship to duties, rehabilitation, time elapsed, and any occupation-specific statute.

Use this as Mississippi's core occupational-licensing criminal-record authority.`,
  },
  {
    id: "ms-code-73-77-5-licensing-petition",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MS",
    topicIds: ["employment"],
    citation: "Miss. Code Ann. sec. 73-77-5",
    title: "Predetermination petition for occupational licensing",
    officialUrl: "https://www.sos.ms.gov/communications-publications/mississippi-law",
    sourceName: "Mississippi Secretary of State",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Mississippi Secretary of State law publications source checked June 27, 2026; exact section text pending official-code adapter verification",
    reviewStatus: "approved",
    text: `Miss. Code Ann. sec. 73-77-5 Predetermination petition for occupational licensing.

Mississippi allows people with criminal records to seek a predetermination from a licensing authority about whether their criminal history would disqualify them from a license. This can help a person avoid spending time and money on training for a license they cannot obtain.

Use this with section 73-77-3 for Mississippi occupational-licensing questions involving criminal records.`,
  },
  {
    id: "ms-code-99-3-7-warrantless-arrest",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MS",
    topicIds: ["police"],
    citation: "Miss. Code Ann. sec. 99-3-7",
    title: "Arrest without warrant",
    officialUrl: "https://www.sos.ms.gov/communications-publications/mississippi-law",
    sourceName: "Mississippi Secretary of State",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Mississippi Secretary of State law publications source checked June 27, 2026; exact section text pending official-code adapter verification",
    reviewStatus: "approved",
    text: `Miss. Code Ann. sec. 99-3-7 Arrest without warrant.

Mississippi law sets circumstances when an officer may arrest without a warrant. This is a statutory arrest-power hook and must be used with federal and state constitutional limits on stops, searches, questioning, and arrests.

Use this for Mississippi police encounter answers as statutory context, not as a complete search-and-seizure rule.`,
  },
  {
    id: "ms-code-41-29-531-interception-recording",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MS",
    topicIds: ["police"],
    citation: "Miss. Code Ann. sec. 41-29-531",
    title: "Interception and disclosure of wire, oral, or other communications",
    officialUrl: "https://www.sos.ms.gov/communications-publications/mississippi-law",
    sourceName: "Mississippi Secretary of State",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Mississippi Secretary of State law publications source checked June 27, 2026; exact section text pending official-code adapter verification",
    reviewStatus: "approved",
    text: `Miss. Code Ann. sec. 41-29-531 Interception and disclosure of wire, oral, or other communications.

Mississippi law governs interception and disclosure of wire, oral, and other communications. Mississippi is generally treated as a one-party-consent state for recording conversations, subject to statutory details and privacy expectations.

Use this as Mississippi's recording/privacy hook. For recording police, analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "ms-code-47-7-33-probation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MS",
    topicIds: ["supervision"],
    citation: "Miss. Code Ann. sec. 47-7-33",
    title: "Probation and suspension of sentence",
    officialUrl: "https://www.sos.ms.gov/communications-publications/mississippi-law",
    sourceName: "Mississippi Secretary of State",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Mississippi Secretary of State law publications source checked June 27, 2026; exact section text pending official-code adapter verification",
    reviewStatus: "approved",
    text: `Miss. Code Ann. sec. 47-7-33 Probation and suspension of sentence.

Mississippi courts may suspend sentence and place a person on probation under statutory authority. Specific obligations depend on the written probation order, offense, sentence, court requirements, and Department of Corrections supervision terms.

Use this as Mississippi's probation framework source, together with the person's written probation conditions.`,
  },
  {
    id: "ms-code-47-7-37-probation-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MS",
    topicIds: ["supervision"],
    citation: "Miss. Code Ann. sec. 47-7-37",
    title: "Probation violation, arrest, and revocation",
    officialUrl: "https://www.sos.ms.gov/communications-publications/mississippi-law",
    sourceName: "Mississippi Secretary of State",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Mississippi Secretary of State law publications source checked June 27, 2026; exact section text pending official-code adapter verification",
    reviewStatus: "approved",
    text: `Miss. Code Ann. sec. 47-7-37 Probation violation, arrest, and revocation.

Mississippi law governs proceedings and sanctions after alleged probation violations. Consequences depend on the sentence, conditions, violation allegation, hearing posture, court findings, and available sanctions.

Use this for Mississippi probation violation answers, but verify the written order and current court status before giving specific guidance.`,
  },
  {
    id: "ms-code-47-7-3-parole-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MS",
    topicIds: ["supervision"],
    citation: "Miss. Code Ann. sec. 47-7-3",
    title: "Parole eligibility",
    officialUrl: "https://www.sos.ms.gov/communications-publications/mississippi-law",
    sourceName: "Mississippi Secretary of State",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Mississippi Secretary of State law publications source checked June 27, 2026; exact section text pending official-code adapter verification",
    reviewStatus: "approved",
    text: `Miss. Code Ann. sec. 47-7-3 Parole eligibility.

Mississippi parole eligibility depends on offense, sentence, time served, credits, statutory exclusions, parole board authority, risk factors, and written parole conditions. This statute provides the framework for parole eligibility analysis.

Use this as Mississippi's parole framework source, not as a release-date calculator. A precise answer requires the sentence, offense date, credits, board decision, and written supervision conditions.`,
  },
  {
    id: "mo-rsmo-115-133-voter-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MO",
    topicIds: ["voting"],
    citation: "Mo. Rev. Stat. sec. 115.133",
    title: "Qualifications of voters",
    officialUrl: "https://revisor.mo.gov/main/OneSection.aspx?section=115.133",
    sourceName: "Missouri Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Missouri Revisor of Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mo. Rev. Stat. sec. 115.133 Qualifications of voters.

Missouri voter-qualification law sets who may register and vote and includes conviction-related disqualifications. For felony conviction questions, the key issues include whether the person is confined under sentence, on probation or parole after a felony conviction, or convicted of an election-related offense.

Use this as Missouri's core felony voting-rights authority. A specific answer requires conviction type, current confinement, probation or parole status, discharge status, and registration facts.`,
  },
  {
    id: "mo-rsmo-561-026-civil-rights-conviction",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MO",
    topicIds: ["voting"],
    citation: "Mo. Rev. Stat. sec. 561.026",
    title: "Civil rights affected by conviction",
    officialUrl: "https://revisor.mo.gov/main/OneSection.aspx?section=561.026",
    sourceName: "Missouri Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Missouri Revisor of Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mo. Rev. Stat. sec. 561.026 Civil rights affected by conviction.

Missouri law addresses civil disabilities resulting from conviction and restoration after sentence completion or discharge. This source is useful context for rights affected by conviction, including voting questions when read with section 115.133.

Use this as restoration context, not as the only voter eligibility source.`,
  },
  {
    id: "mo-rsmo-610-140-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MO",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Mo. Rev. Stat. sec. 610.140",
    title: "Expungement of arrest, plea, trial, or conviction records",
    officialUrl: "https://revisor.mo.gov/main/OneSection.aspx?section=610.140",
    sourceName: "Missouri Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Missouri Revisor of Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mo. Rev. Stat. sec. 610.140 Expungement of arrest, plea, trial, or conviction records.

Missouri allows expungement of eligible arrest, plea, trial, or conviction records after statutory waiting periods and conditions are met. Eligibility depends on offense type, exclusions, number of expungements, completion of sentence, waiting period, pending charges, and later convictions.

Use this as Missouri's primary expungement authority. A specific answer requires the exact offense, disposition, sentence completion date, waiting period, and exclusion analysis.`,
  },
  {
    id: "mo-rsmo-610-122-arrest-record-closure",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MO",
    topicIds: ["expungement"],
    citation: "Mo. Rev. Stat. sec. 610.122",
    title: "Closure of arrest records",
    officialUrl: "https://revisor.mo.gov/main/OneSection.aspx?section=610.122",
    sourceName: "Missouri Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Missouri Revisor of Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mo. Rev. Stat. sec. 610.122 Closure of arrest records.

Missouri separately provides for closure of certain arrest records when statutory conditions are met. This is distinct from broader expungement of conviction and court records.

Use this for Missouri arrest-record relief questions, and pair it with section 610.140 when a case involves a plea, trial, or conviction record.`,
  },
  {
    id: "mo-rsmo-213-040-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MO",
    topicIds: ["housing"],
    citation: "Mo. Rev. Stat. sec. 213.040",
    title: "Discrimination in housing",
    officialUrl: "https://revisor.mo.gov/main/OneSection.aspx?section=213.040",
    sourceName: "Missouri Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Missouri Revisor of Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mo. Rev. Stat. sec. 213.040 Discrimination in housing.

Missouri law prohibits covered discriminatory housing practices based on protected characteristics. This is Missouri's operative state fair-housing statute.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, expungement law, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "mo-rsmo-441-234-landlord-tenant-abuse-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MO",
    topicIds: ["housing"],
    citation: "Mo. Rev. Stat. sec. 441.234",
    title: "Tenant protections related to domestic violence and related calls",
    officialUrl: "https://revisor.mo.gov/main/OneSection.aspx?section=441.234",
    sourceName: "Missouri Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Missouri Revisor of Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mo. Rev. Stat. sec. 441.234 Tenant protections related to domestic violence and related calls.

Missouri landlord-tenant law includes protections for tenants connected to domestic violence, sexual assault, stalking, and emergency assistance calls. This can matter where housing instability overlaps with public-safety contact or criminal legal involvement.

Use this as a tenant-protection hook, not as a general criminal-record screening rule.`,
  },
  {
    id: "mo-rsmo-213-055-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MO",
    topicIds: ["employment"],
    citation: "Mo. Rev. Stat. sec. 213.055",
    title: "Unlawful employment practices",
    officialUrl: "https://revisor.mo.gov/main/OneSection.aspx?section=213.055",
    sourceName: "Missouri Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Missouri Revisor of Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mo. Rev. Stat. sec. 213.055 Unlawful employment practices.

Missouri civil-rights law prohibits covered employment discrimination based on protected characteristics. It is useful employment-rights context, but criminal history is not itself a protected class under this source.

For criminal-record employment questions, use this with expungement law, occupational-licensing rules, federal law, and job-specific background-check requirements.`,
  },
  {
    id: "mo-rsmo-324-012-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MO",
    topicIds: ["employment"],
    citation: "Mo. Rev. Stat. sec. 324.012",
    title: "Occupational licensing and criminal convictions",
    officialUrl: "https://revisor.mo.gov/main/OneSection.aspx?section=324.012",
    sourceName: "Missouri Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Missouri Revisor of Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mo. Rev. Stat. sec. 324.012 Occupational licensing and criminal convictions.

Missouri limits how licensing authorities may consider criminal convictions when determining occupational licensing eligibility. The analysis depends on the occupation, conviction, relationship to duties, rehabilitation, time elapsed, and any occupation-specific statute.

Use this as Missouri's core occupational-licensing criminal-record authority.`,
  },
  {
    id: "mo-rsmo-544-216-warrantless-arrest",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MO",
    topicIds: ["police"],
    citation: "Mo. Rev. Stat. sec. 544.216",
    title: "Arrest without warrant",
    officialUrl: "https://revisor.mo.gov/main/OneSection.aspx?section=544.216",
    sourceName: "Missouri Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Missouri Revisor of Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mo. Rev. Stat. sec. 544.216 Arrest without warrant.

Missouri law sets circumstances when a law enforcement officer may arrest without a warrant. This is a statutory arrest-power hook and must be used with federal and state constitutional limits on stops, searches, questioning, and arrests.

Use this for Missouri police encounter answers as statutory context, not as a complete search-and-seizure rule.`,
  },
  {
    id: "mo-rsmo-542-402-interception-recording",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MO",
    topicIds: ["police"],
    citation: "Mo. Rev. Stat. sec. 542.402",
    title: "Interception and disclosure of wire, oral, or electronic communications",
    officialUrl: "https://revisor.mo.gov/main/OneSection.aspx?section=542.402",
    sourceName: "Missouri Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Missouri Revisor of Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mo. Rev. Stat. sec. 542.402 Interception and disclosure of wire, oral, or electronic communications.

Missouri law governs interception and disclosure of wire, oral, and electronic communications. Missouri is generally treated as a one-party-consent state for recording conversations, subject to statutory details and privacy expectations.

Use this as Missouri's recording/privacy hook. For recording police, analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "mo-rsmo-559-021-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MO",
    topicIds: ["supervision"],
    citation: "Mo. Rev. Stat. sec. 559.021",
    title: "Conditions of probation",
    officialUrl: "https://revisor.mo.gov/main/OneSection.aspx?section=559.021",
    sourceName: "Missouri Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Missouri Revisor of Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mo. Rev. Stat. sec. 559.021 Conditions of probation.

Missouri courts may impose probation conditions authorized by statute and the court order. Specific obligations depend on the written probation terms, offense, sentence, and court requirements.

Use this as Missouri's probation framework source, together with the person's written probation conditions.`,
  },
  {
    id: "mo-rsmo-559-036-probation-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MO",
    topicIds: ["supervision"],
    citation: "Mo. Rev. Stat. sec. 559.036",
    title: "Probation violation and revocation",
    officialUrl: "https://revisor.mo.gov/main/OneSection.aspx?section=559.036",
    sourceName: "Missouri Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Missouri Revisor of Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mo. Rev. Stat. sec. 559.036 Probation violation and revocation.

Missouri law governs court action after alleged probation violations. Consequences depend on the sentence, conditions, violation allegation, hearing posture, court findings, and available sanctions.

Use this for Missouri probation violation answers, but verify the written order and current court status before giving specific guidance.`,
  },
  {
    id: "mo-rsmo-217-690-parole-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MO",
    topicIds: ["supervision"],
    citation: "Mo. Rev. Stat. sec. 217.690",
    title: "Parole eligibility and release",
    officialUrl: "https://revisor.mo.gov/main/OneSection.aspx?section=217.690",
    sourceName: "Missouri Revisor of Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Missouri Revisor of Statutes official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Mo. Rev. Stat. sec. 217.690 Parole eligibility and release.

Missouri parole eligibility depends on offense, sentence, time served, credits, statutory exclusions, parole board authority, risk factors, and written parole conditions. This statute provides the framework for parole eligibility and release analysis.

Use this as Missouri's parole framework source, not as a release-date calculator. A precise answer requires the sentence, offense date, credits, board decision, and written supervision conditions.`,
  },
  {
    id: "mt-mca-13-1-111-voter-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MT",
    topicIds: ["voting"],
    citation: "Mont. Code Ann. sec. 13-1-111",
    title: "Qualifications of elector",
    officialUrl: "https://mca.legmt.gov/",
    sourceName: "Montana Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Montana Code Annotated official source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Mont. Code Ann. sec. 13-1-111 Qualifications of elector.

Montana voter eligibility turns on citizenship, age, residence, registration, and statutory disqualifications. For people with felony convictions, the key issue is whether the person is currently serving a sentence in a penal institution.

Use this as Montana's core felony voting-rights authority. A specific answer requires current incarceration status, sentence status, residence, and registration facts.`,
  },
  {
    id: "mt-mca-46-18-801-civil-rights-restoration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MT",
    topicIds: ["voting"],
    citation: "Mont. Code Ann. sec. 46-18-801",
    title: "Restoration of civil rights",
    officialUrl: "https://mca.legmt.gov/",
    sourceName: "Montana Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Montana Code Annotated official source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Mont. Code Ann. sec. 46-18-801 Restoration of civil rights.

Montana law addresses restoration of civil rights after conviction. For voting questions, this restoration framework should be read with the voter-qualification rule in section 13-1-111.

Use this as Montana civil-rights restoration context, not as the only voter eligibility source.`,
  },
  {
    id: "mt-mca-46-18-1101-misdemeanor-expungement-definitions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MT",
    topicIds: ["expungement"],
    citation: "Mont. Code Ann. sec. 46-18-1101",
    title: "Misdemeanor expungement definitions",
    officialUrl: "https://mca.legmt.gov/",
    sourceName: "Montana Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Montana Code Annotated official source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Mont. Code Ann. sec. 46-18-1101 Misdemeanor expungement definitions.

Montana's misdemeanor expungement chapter defines key terms and eligibility concepts for expungement of qualifying misdemeanor records. Montana does not provide the same broad expungement remedy for all felony convictions.

Use this as the definition source for Montana misdemeanor expungement. A specific answer requires checking the exact offense, disposition, prior record, waiting period, and statutory exclusions.`,
  },
  {
    id: "mt-mca-46-18-1103-misdemeanor-expungement-petition",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MT",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Mont. Code Ann. sec. 46-18-1103",
    title: "Petition for misdemeanor expungement",
    officialUrl: "https://mca.legmt.gov/",
    sourceName: "Montana Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Montana Code Annotated official source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Mont. Code Ann. sec. 46-18-1103 Petition for misdemeanor expungement.

Montana allows a person to petition for expungement of eligible misdemeanor records when statutory criteria are met. Eligibility depends on offense type, number of prior expungements, waiting period, pending charges, later convictions, and statutory exclusions.

Use this as Montana's primary misdemeanor expungement authority. Do not represent it as a broad felony expungement statute.`,
  },
  {
    id: "mt-mca-49-2-305-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MT",
    topicIds: ["housing"],
    citation: "Mont. Code Ann. sec. 49-2-305",
    title: "Discrimination in housing",
    officialUrl: "https://mca.legmt.gov/",
    sourceName: "Montana Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Montana Code Annotated official source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Mont. Code Ann. sec. 49-2-305 Discrimination in housing.

Montana law prohibits covered discriminatory housing practices based on protected characteristics. This is Montana's operative state fair-housing statute.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, expungement law, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "mt-mca-70-24-303-landlord-maintenance",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MT",
    topicIds: ["housing"],
    citation: "Mont. Code Ann. sec. 70-24-303",
    title: "Landlord to maintain premises",
    officialUrl: "https://mca.legmt.gov/",
    sourceName: "Montana Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Montana Code Annotated official source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Mont. Code Ann. sec. 70-24-303 Landlord to maintain premises.

Montana landlord-tenant law sets landlord duties to maintain residential premises. These protections can matter when a tenant with a criminal record faces housing instability unrelated to lawful screening.

Use this as a tenant-protection hook, not as a criminal-record screening rule.`,
  },
  {
    id: "mt-mca-49-2-303-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MT",
    topicIds: ["employment"],
    citation: "Mont. Code Ann. sec. 49-2-303",
    title: "Discrimination in employment",
    officialUrl: "https://mca.legmt.gov/",
    sourceName: "Montana Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Montana Code Annotated official source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Mont. Code Ann. sec. 49-2-303 Discrimination in employment.

Montana civil-rights law prohibits covered employment discrimination based on protected characteristics. It is useful employment-rights context, but criminal history is not itself a protected class under this source.

For criminal-record employment questions, use this with misdemeanor expungement law, licensing rules, federal law, and job-specific background-check requirements.`,
  },
  {
    id: "mt-mca-37-1-203-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MT",
    topicIds: ["employment"],
    citation: "Mont. Code Ann. sec. 37-1-203",
    title: "Criminal conviction and professional licensing",
    officialUrl: "https://mca.legmt.gov/",
    sourceName: "Montana Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Montana Code Annotated official source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Mont. Code Ann. sec. 37-1-203 Criminal conviction and professional licensing.

Montana law limits how professional and occupational licensing authorities may use criminal conviction history when making licensing decisions. The analysis depends on the occupation, conviction, relationship to duties, rehabilitation, time elapsed, and any profession-specific statute.

Use this as Montana's core occupational-licensing criminal-record authority.`,
  },
  {
    id: "mt-mca-46-6-311-warrantless-arrest",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MT",
    topicIds: ["police"],
    citation: "Mont. Code Ann. sec. 46-6-311",
    title: "Arrest without warrant",
    officialUrl: "https://mca.legmt.gov/",
    sourceName: "Montana Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Montana Code Annotated official source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Mont. Code Ann. sec. 46-6-311 Arrest without warrant.

Montana law sets circumstances when a peace officer may arrest without a warrant. This is a statutory arrest-power hook and must be used with federal and state constitutional limits on stops, searches, questioning, and arrests.

Use this for Montana police encounter answers as statutory context, not as a complete search-and-seizure rule.`,
  },
  {
    id: "mt-mca-45-8-213-privacy-communications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MT",
    topicIds: ["police"],
    citation: "Mont. Code Ann. sec. 45-8-213",
    title: "Violation of privacy in communications",
    officialUrl: "https://mca.legmt.gov/",
    sourceName: "Montana Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Montana Code Annotated official source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Mont. Code Ann. sec. 45-8-213 Violation of privacy in communications.

Montana law governs certain privacy violations involving recording or intercepting communications. Recording analysis depends on consent, privacy expectations, whether the person is a party, and statutory exceptions.

Use this as Montana's recording/privacy hook. For recording police, analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "mt-mca-46-18-201-sentencing-probation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MT",
    topicIds: ["supervision"],
    citation: "Mont. Code Ann. sec. 46-18-201",
    title: "Sentences that may be imposed; probation conditions",
    officialUrl: "https://mca.legmt.gov/",
    sourceName: "Montana Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Montana Code Annotated official source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Mont. Code Ann. sec. 46-18-201 Sentences that may be imposed; probation conditions.

Montana courts may impose suspended or deferred sentences and supervision conditions authorized by statute and the written judgment. Specific obligations depend on the sentence, offense, court requirements, and supervision order.

Use this as Montana's probation and deferred-sentence framework source, together with the person's written supervision conditions.`,
  },
  {
    id: "mt-mca-46-18-203-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MT",
    topicIds: ["supervision"],
    citation: "Mont. Code Ann. sec. 46-18-203",
    title: "Revocation of suspended or deferred sentence",
    officialUrl: "https://mca.legmt.gov/",
    sourceName: "Montana Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Montana Code Annotated official source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Mont. Code Ann. sec. 46-18-203 Revocation of suspended or deferred sentence.

Montana law governs proceedings and consequences after alleged violations of suspended or deferred sentence conditions. Outcomes depend on the sentence, alleged violation, hearing posture, court findings, and available sanctions.

Use this for Montana supervision violation answers, but verify the written order and current court status before giving specific guidance.`,
  },
  {
    id: "mt-mca-46-23-201-parole-board-powers",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "MT",
    topicIds: ["supervision"],
    citation: "Mont. Code Ann. sec. 46-23-201",
    title: "Board of pardons and parole powers",
    officialUrl: "https://mca.legmt.gov/",
    sourceName: "Montana Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Montana Code Annotated official source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Mont. Code Ann. sec. 46-23-201 Board of pardons and parole powers.

Montana parole decisions depend on offense, sentence, eligibility, board authority, risk and rehabilitation factors, and written parole conditions. This statute provides core board authority for parole-related questions.

Use this as Montana's parole framework source, not as a release-date calculator. A precise answer requires the sentence, offense date, eligibility rule, board decision, and written supervision conditions.`,
  },
  {
    id: "ne-rev-stat-32-313-voter-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NE",
    topicIds: ["voting"],
    citation: "Neb. Rev. Stat. sec. 32-313",
    title: "Qualifications of elector; felony convictions",
    officialUrl: "https://nebraskalegislature.gov/laws/statutes.php?statute=32-313",
    sourceName: "Nebraska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nebraska Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Neb. Rev. Stat. sec. 32-313 Qualifications of elector; felony convictions.

Nebraska law provides that a person convicted of a felony is not qualified to vote or register until the sentence is completed, including any parole term. The disqualification is automatically removed when the sentence is completed. The section reflects 2024 LB20 and Nebraska Supreme Court interpretation.

Use this as Nebraska's core felony voting-rights authority. A specific answer requires sentence completion, parole status, registration status, and whether any treason or other distinct disqualification applies.`,
  },
  {
    id: "ne-rev-stat-29-112-civil-rights-restoration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NE",
    topicIds: ["voting"],
    citation: "Neb. Rev. Stat. sec. 29-112",
    title: "Civil rights after felony conviction",
    officialUrl: "https://nebraskalegislature.gov/laws/statutes.php?statute=29-112",
    sourceName: "Nebraska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nebraska Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Neb. Rev. Stat. sec. 29-112 Civil rights after felony conviction.

Nebraska law addresses civil disabilities and restoration after felony conviction. For voting questions, read this restoration context with section 32-313, which now controls the felony voting disqualification and automatic removal after sentence completion including parole.

Use this as civil-rights restoration context, not as the only voter eligibility source.`,
  },
  {
    id: "ne-rev-stat-29-2264-set-aside",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NE",
    topicIds: ["expungement", "employment", "housing", "voting"],
    citation: "Neb. Rev. Stat. sec. 29-2264",
    title: "Set aside of conviction after probation or qualifying sentence",
    officialUrl: "https://nebraskalegislature.gov/laws/statutes.php?statute=29-2264",
    sourceName: "Nebraska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nebraska Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Neb. Rev. Stat. sec. 29-2264 Set aside of conviction after probation or qualifying sentence.

Nebraska allows a person to petition to set aside a conviction after satisfactory completion of probation or certain qualifying sentences. A set-aside order can nullify the conviction and remove civil disabilities and disqualifications imposed because of the conviction, subject to statutory limits and exceptions.

Use this as Nebraska's primary conviction set-aside authority. A specific answer requires the sentence type, completion status, pending charges, offense exclusions, and court findings.`,
  },
  {
    id: "ne-rev-stat-29-3523-criminal-history-set-aside-effect",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NE",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Neb. Rev. Stat. sec. 29-3523",
    title: "Criminal history information and set-aside effect",
    officialUrl: "https://nebraskalegislature.gov/laws/statutes.php?statute=29-3523",
    sourceName: "Nebraska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nebraska Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Neb. Rev. Stat. sec. 29-3523 Criminal history information and set-aside effect.

Nebraska criminal history law governs how criminal history information is handled and may interact with set-aside relief. Set-aside relief is not the same as broad expungement or complete deletion of all records.

Use this with section 29-2264 when answering employment or housing questions about what a Nebraska set aside does and does not hide.`,
  },
  {
    id: "ne-rev-stat-20-318-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NE",
    topicIds: ["housing"],
    citation: "Neb. Rev. Stat. sec. 20-318",
    title: "Discriminatory housing practices",
    officialUrl: "https://nebraskalegislature.gov/laws/statutes.php?statute=20-318",
    sourceName: "Nebraska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nebraska Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Neb. Rev. Stat. sec. 20-318 Discriminatory housing practices.

Nebraska fair-housing law prohibits covered discriminatory housing practices based on protected characteristics. This is Nebraska's operative state fair-housing statute.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, set-aside law, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "ne-rev-stat-76-1419-landlord-obligations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NE",
    topicIds: ["housing"],
    citation: "Neb. Rev. Stat. sec. 76-1419",
    title: "Landlord obligations",
    officialUrl: "https://nebraskalegislature.gov/laws/statutes.php?statute=76-1419",
    sourceName: "Nebraska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nebraska Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Neb. Rev. Stat. sec. 76-1419 Landlord obligations.

Nebraska landlord-tenant law sets statutory landlord duties regarding compliance with housing codes, repairs, common areas, services, and habitable premises. These protections can matter when a tenant with a criminal record faces housing instability unrelated to lawful screening.

Use this as a tenant-protection hook, not as a criminal-record screening rule.`,
  },
  {
    id: "ne-rev-stat-48-1104-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NE",
    topicIds: ["employment"],
    citation: "Neb. Rev. Stat. sec. 48-1104",
    title: "Unlawful employment practice",
    officialUrl: "https://nebraskalegislature.gov/laws/statutes.php?statute=48-1104",
    sourceName: "Nebraska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nebraska Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Neb. Rev. Stat. sec. 48-1104 Unlawful employment practice.

Nebraska fair employment law prohibits covered employment discrimination based on protected characteristics. It is useful employment-rights context, but criminal history is not itself a protected class under this source.

For criminal-record employment questions, use this with set-aside law, licensing rules, federal law, and job-specific background-check requirements.`,
  },
  {
    id: "ne-rev-stat-38-1-141-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NE",
    topicIds: ["employment"],
    citation: "Neb. Rev. Stat. sec. 38-1,141",
    title: "Licensure and criminal convictions",
    officialUrl: "https://nebraskalegislature.gov/laws/statutes.php?statute=38-1,141",
    sourceName: "Nebraska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nebraska Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Neb. Rev. Stat. sec. 38-1,141 Licensure and criminal convictions.

Nebraska health and occupational credentialing law includes standards for disciplinary action or denial based on criminal conviction and related conduct. Licensing consequences depend on the profession, conviction, relationship to duties, rehabilitation, time elapsed, and profession-specific law.

Use this as a Nebraska occupational or professional licensing criminal-record hook, and verify the board-specific statute before giving a precise eligibility answer.`,
  },
  {
    id: "ne-rev-stat-29-404-02-warrantless-arrest",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NE",
    topicIds: ["police"],
    citation: "Neb. Rev. Stat. sec. 29-404.02",
    title: "Arrest without warrant",
    officialUrl: "https://nebraskalegislature.gov/laws/statutes.php?statute=29-404.02",
    sourceName: "Nebraska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nebraska Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Neb. Rev. Stat. sec. 29-404.02 Arrest without warrant.

Nebraska law sets circumstances when a law enforcement officer may arrest without a warrant. This is a statutory arrest-power hook and must be used with federal and state constitutional limits on stops, searches, questioning, and arrests.

Use this for Nebraska police encounter answers as statutory context, not as a complete search-and-seizure rule.`,
  },
  {
    id: "ne-rev-stat-86-290-interception-recording",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NE",
    topicIds: ["police"],
    citation: "Neb. Rev. Stat. sec. 86-290",
    title: "Interception and disclosure of wire, electronic, or oral communications",
    officialUrl: "https://nebraskalegislature.gov/laws/statutes.php?statute=86-290",
    sourceName: "Nebraska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nebraska Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Neb. Rev. Stat. sec. 86-290 Interception and disclosure of wire, electronic, or oral communications.

Nebraska law governs interception and disclosure of wire, electronic, and oral communications. Nebraska is generally treated as a one-party-consent state for recording conversations, subject to statutory details and privacy expectations.

Use this as Nebraska's recording/privacy hook. For recording police, analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "ne-rev-stat-29-2262-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NE",
    topicIds: ["supervision"],
    citation: "Neb. Rev. Stat. sec. 29-2262",
    title: "Conditions of probation",
    officialUrl: "https://nebraskalegislature.gov/laws/statutes.php?statute=29-2262",
    sourceName: "Nebraska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nebraska Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Neb. Rev. Stat. sec. 29-2262 Conditions of probation.

Nebraska courts may impose probation conditions authorized by statute and the court order. Specific obligations depend on the written probation terms, offense, sentence, and court requirements.

Use this as Nebraska's probation framework source, together with the person's written probation conditions.`,
  },
  {
    id: "ne-rev-stat-29-2266-probation-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NE",
    topicIds: ["supervision"],
    citation: "Neb. Rev. Stat. sec. 29-2266",
    title: "Probation violation and revocation",
    officialUrl: "https://nebraskalegislature.gov/laws/statutes.php?statute=29-2266",
    sourceName: "Nebraska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nebraska Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Neb. Rev. Stat. sec. 29-2266 Probation violation and revocation.

Nebraska law governs court action after alleged probation violations. Consequences depend on the sentence, conditions, violation allegation, hearing posture, court findings, and available sanctions.

Use this for Nebraska probation violation answers, but verify the written order and current court status before giving specific guidance.`,
  },
  {
    id: "ne-rev-stat-83-1-110-parole-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NE",
    topicIds: ["supervision"],
    citation: "Neb. Rev. Stat. sec. 83-1,110",
    title: "Parole eligibility",
    officialUrl: "https://nebraskalegislature.gov/laws/statutes.php?statute=83-1,110",
    sourceName: "Nebraska Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nebraska Legislature official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Neb. Rev. Stat. sec. 83-1,110 Parole eligibility.

Nebraska parole eligibility depends on offense, sentence, minimum term, credits, statutory exclusions, parole board authority, risk factors, and written parole conditions. This statute provides the framework for parole eligibility analysis.

Use this as Nebraska's parole framework source, not as a release-date calculator. A precise answer requires the sentence, offense date, credits, board decision, and written supervision conditions.`,
  },
  {
    id: "nv-nrs-293-540-voter-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NV",
    topicIds: ["voting"],
    citation: "Nev. Rev. Stat. sec. 293.540",
    title: "Qualifications of electors",
    officialUrl: "https://www.leg.state.nv.us/NRS/NRS-293.html#NRS293Sec540",
    sourceName: "Nevada Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nevada Revised Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Nev. Rev. Stat. sec. 293.540 Qualifications of electors.

Nevada voter eligibility turns on citizenship, age, residence, registration, and statutory disqualifications. For people with felony convictions, Nevada generally restores voting rights when the person is released from prison.

Use this as Nevada's voter-qualification source, and pair it with section 213.157 for felony civil-rights restoration questions.`,
  },
  {
    id: "nv-nrs-213-157-rights-restoration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NV",
    topicIds: ["voting"],
    citation: "Nev. Rev. Stat. sec. 213.157",
    title: "Restoration of civil rights after felony release",
    officialUrl: "https://www.leg.state.nv.us/NRS/NRS-213.html#NRS213Sec157",
    sourceName: "Nevada Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nevada Revised Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Nev. Rev. Stat. sec. 213.157 Restoration of civil rights after felony release.

Nevada law restores certain civil rights to people convicted of felonies upon release from prison, including the right to vote. The practical issue is whether the person is currently incarcerated or has been released.

Use this as Nevada's core felony voting-rights restoration authority. A specific answer requires current incarceration or release status, registration facts, and any conviction-specific exception.`,
  },
  {
    id: "nv-nrs-179-245-record-sealing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NV",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Nev. Rev. Stat. sec. 179.245",
    title: "Petition to seal records of conviction",
    officialUrl: "https://www.leg.state.nv.us/NRS/NRS-179.html#NRS179Sec245",
    sourceName: "Nevada Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nevada Revised Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Nev. Rev. Stat. sec. 179.245 Petition to seal records of conviction.

Nevada allows eligible conviction records to be sealed after statutory waiting periods and conditions are met. Eligibility depends on offense category, exclusions, sentence completion or release date, waiting period, pending charges, and later convictions.

Use this as Nevada's primary conviction record-sealing authority. A specific answer requires the exact offense, disposition, completion date, and exclusion analysis.`,
  },
  {
    id: "nv-nrs-179-255-record-sealing-dismissal-acquittal",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NV",
    topicIds: ["expungement"],
    citation: "Nev. Rev. Stat. sec. 179.255",
    title: "Sealing records after dismissal, acquittal, or declined prosecution",
    officialUrl: "https://www.leg.state.nv.us/NRS/NRS-179.html#NRS179Sec255",
    sourceName: "Nevada Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nevada Revised Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Nev. Rev. Stat. sec. 179.255 Sealing records after dismissal, acquittal, or declined prosecution.

Nevada separately provides for sealing when a case ends without conviction, including dismissal, acquittal, or no charges filed. Timing, case posture, and statutory exceptions matter.

Use this with section 179.245 so JO distinguishes conviction record sealing from nonconviction record sealing.`,
  },
  {
    id: "nv-nrs-179-285-effect-sealed-records",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NV",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Nev. Rev. Stat. sec. 179.285",
    title: "Effect of sealing records",
    officialUrl: "https://www.leg.state.nv.us/NRS/NRS-179.html#NRS179Sec285",
    sourceName: "Nevada Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nevada Revised Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Nev. Rev. Stat. sec. 179.285 Effect of sealing records.

Nevada law describes the effect of sealing criminal records, including when sealed proceedings may be treated as if they did not occur and when exceptions may allow access or use.

Use this after confirming a Nevada record has been sealed, and check for job, license, housing, agency, or law-enforcement exceptions before giving a specific answer.`,
  },
  {
    id: "nv-nrs-118-100-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NV",
    topicIds: ["housing"],
    citation: "Nev. Rev. Stat. sec. 118.100",
    title: "Discriminatory housing practices",
    officialUrl: "https://www.leg.state.nv.us/NRS/NRS-118.html#NRS118Sec100",
    sourceName: "Nevada Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nevada Revised Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Nev. Rev. Stat. sec. 118.100 Discriminatory housing practices.

Nevada fair-housing law prohibits covered discriminatory housing practices based on protected characteristics. This is Nevada's operative state fair-housing statute.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, record-sealing law, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "nv-nrs-118a-290-landlord-maintenance",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NV",
    topicIds: ["housing"],
    citation: "Nev. Rev. Stat. sec. 118A.290",
    title: "Landlord obligations to maintain dwelling unit",
    officialUrl: "https://www.leg.state.nv.us/NRS/NRS-118A.html#NRS118ASec290",
    sourceName: "Nevada Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nevada Revised Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Nev. Rev. Stat. sec. 118A.290 Landlord obligations to maintain dwelling unit.

Nevada landlord-tenant law requires landlords to maintain dwelling units in habitable condition and comply with statutory duties. These protections can matter when a tenant with a criminal record faces housing instability unrelated to lawful screening.

Use this as a tenant-protection hook, not as a criminal-record screening rule.`,
  },
  {
    id: "nv-nrs-613-330-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NV",
    topicIds: ["employment"],
    citation: "Nev. Rev. Stat. sec. 613.330",
    title: "Unlawful employment practices",
    officialUrl: "https://www.leg.state.nv.us/NRS/NRS-613.html#NRS613Sec330",
    sourceName: "Nevada Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nevada Revised Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Nev. Rev. Stat. sec. 613.330 Unlawful employment practices.

Nevada civil-rights law prohibits covered employment discrimination based on protected characteristics. It is useful employment-rights context, but criminal history is not itself a protected class under this source.

For criminal-record employment questions, use this with record-sealing law, occupational-licensing rules, federal law, and job-specific background-check requirements.`,
  },
  {
    id: "nv-nrs-622-085-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NV",
    topicIds: ["employment"],
    citation: "Nev. Rev. Stat. sec. 622.085",
    title: "Occupational licensing and criminal history",
    officialUrl: "https://www.leg.state.nv.us/NRS/NRS-622.html#NRS622Sec085",
    sourceName: "Nevada Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nevada Revised Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Nev. Rev. Stat. sec. 622.085 Occupational licensing and criminal history.

Nevada law limits how regulatory bodies may use criminal history in occupational licensing decisions. The analysis depends on the occupation, conviction, relationship to duties, rehabilitation, time elapsed, and any occupation-specific statute.

Use this as Nevada's core occupational-licensing criminal-record authority.`,
  },
  {
    id: "nv-nrs-171-123-temporary-detention",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NV",
    topicIds: ["police"],
    citation: "Nev. Rev. Stat. sec. 171.123",
    title: "Temporary detention by peace officer",
    officialUrl: "https://www.leg.state.nv.us/NRS/NRS-171.html#NRS171Sec123",
    sourceName: "Nevada Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nevada Revised Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Nev. Rev. Stat. sec. 171.123 Temporary detention by peace officer.

Nevada law authorizes temporary detention when an officer reasonably suspects a person has committed, is committing, or is about to commit a crime, and addresses identifying information during the detention. Constitutional limits still control the scope and duration of the encounter.

Use this as Nevada's stop-and-identify statutory hook. It does not mean a person must answer every police question or consent to a search.`,
  },
  {
    id: "nv-nrs-200-620-recording-interception",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NV",
    topicIds: ["police"],
    citation: "Nev. Rev. Stat. sec. 200.620",
    title: "Interception and recording of wire communications",
    officialUrl: "https://www.leg.state.nv.us/NRS/NRS-200.html#NRS200Sec620",
    sourceName: "Nevada Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nevada Revised Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Nev. Rev. Stat. sec. 200.620 Interception and recording of wire communications.

Nevada law governs interception and recording of communications. Consent analysis can differ for oral, wire, and electronic communications and may depend on privacy expectations and statutory exceptions.

Use this as Nevada's recording/privacy hook. For recording police, analyze public setting, interference with official duties, privacy expectations, consent, and First Amendment public-recording principles.`,
  },
  {
    id: "nv-nrs-176a-400-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NV",
    topicIds: ["supervision"],
    citation: "Nev. Rev. Stat. sec. 176A.400",
    title: "Terms and conditions of probation",
    officialUrl: "https://www.leg.state.nv.us/NRS/NRS-176A.html#NRS176ASec400",
    sourceName: "Nevada Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nevada Revised Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Nev. Rev. Stat. sec. 176A.400 Terms and conditions of probation.

Nevada courts may impose probation terms and conditions authorized by statute and the court order. Specific obligations depend on the written probation terms, offense, sentence, and court requirements.

Use this as Nevada's probation framework source, together with the person's written probation conditions.`,
  },
  {
    id: "nv-nrs-176a-630-probation-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NV",
    topicIds: ["supervision"],
    citation: "Nev. Rev. Stat. sec. 176A.630",
    title: "Probation violation and revocation",
    officialUrl: "https://www.leg.state.nv.us/NRS/NRS-176A.html#NRS176ASec630",
    sourceName: "Nevada Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nevada Revised Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Nev. Rev. Stat. sec. 176A.630 Probation violation and revocation.

Nevada law governs court action after alleged probation violations. Consequences depend on the sentence, conditions, violation allegation, hearing posture, court findings, and available sanctions.

Use this for Nevada probation violation answers, but verify the written order and current court status before giving specific guidance.`,
  },
  {
    id: "nv-nrs-213-1099-parole-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NV",
    topicIds: ["supervision"],
    citation: "Nev. Rev. Stat. sec. 213.1099",
    title: "Parole eligibility and standards",
    officialUrl: "https://www.leg.state.nv.us/NRS/NRS-213.html#NRS213Sec1099",
    sourceName: "Nevada Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Nevada Revised Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Nev. Rev. Stat. sec. 213.1099 Parole eligibility and standards.

Nevada parole eligibility depends on offense, sentence, time served, credits, parole board authority, risk factors, statutory exclusions, and written parole conditions. This statute provides the framework for parole eligibility analysis.

Use this as Nevada's parole framework source, not as a release-date calculator. A precise answer requires the sentence, offense date, credits, board decision, and written supervision conditions.`,
  },
  {
    id: "nh-rsa-654-1-voter-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NH",
    topicIds: ["voting"],
    citation: "N.H. Rev. Stat. Ann. sec. 654:1",
    title: "Voter qualifications",
    officialUrl: "https://gc.nh.gov/rsa/html/LXIII/654/654-1.htm",
    sourceName: "New Hampshire General Court",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Hampshire RSA official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `N.H. Rev. Stat. Ann. sec. 654:1 Voter qualifications.

New Hampshire voter eligibility turns on citizenship, age, domicile, and registration requirements. For people with felony convictions, New Hampshire generally disqualifies voting only while a person is actually incarcerated for a felony conviction.

Use this as New Hampshire's voter-qualification source, and verify current incarceration status before answering a felony voting-rights question.`,
  },
  {
    id: "nh-rsa-607a-2-felony-rights",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NH",
    topicIds: ["voting"],
    citation: "N.H. Rev. Stat. Ann. sec. 607-A:2",
    title: "Rights affected by felony sentence",
    officialUrl: "https://gc.nh.gov/rsa/html/LXII/607-A/607-A-2.htm",
    sourceName: "New Hampshire General Court",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Hampshire RSA official source checked June 27, 2026; exact chapter rendering pending adapter verification",
    reviewStatus: "approved",
    text: `N.H. Rev. Stat. Ann. sec. 607-A:2 Rights affected by felony sentence.

New Hampshire law addresses civil rights affected by felony sentence. For voting questions, use this restoration context with the voter-qualification provisions in RSA 654 and current incarceration status.

Use this as felony-rights context, not as the only voter eligibility source.`,
  },
  {
    id: "nh-rsa-651-5-annulment",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NH",
    topicIds: ["expungement", "employment", "housing"],
    citation: "N.H. Rev. Stat. Ann. sec. 651:5",
    title: "Annulment of criminal records",
    officialUrl: "https://gc.nh.gov/rsa/html/LXII/651/651-5.htm",
    sourceName: "New Hampshire General Court",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Hampshire RSA official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `N.H. Rev. Stat. Ann. sec. 651:5 Annulment of criminal records.

New Hampshire allows eligible criminal records to be annulled after statutory waiting periods and conditions are met. Eligibility depends on offense type, sentence completion, waiting period, later convictions, pending charges, and statutory exclusions.

Use this as New Hampshire's primary record-annulment authority. A specific answer requires the exact offense, disposition, completion date, waiting period, and exclusion analysis.`,
  },
  {
    id: "nh-rsa-651-5b-annulment-marijuana",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NH",
    topicIds: ["expungement"],
    citation: "N.H. Rev. Stat. Ann. sec. 651:5-b",
    title: "Annulment of certain cannabis offenses",
    officialUrl: "https://gc.nh.gov/rsa/html/LXII/651/651-5-b.htm",
    sourceName: "New Hampshire General Court",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Hampshire RSA official section URL listed for adapter verification June 27, 2026",
    reviewStatus: "approved",
    text: `N.H. Rev. Stat. Ann. sec. 651:5-b Annulment of certain cannabis offenses.

New Hampshire has special annulment treatment for certain cannabis-related offenses. Eligibility depends on the specific offense, disposition, amount or conduct, sentence completion, and statutory criteria.

Use this as a special cannabis-annulment hook alongside the general annulment statute in section 651:5.`,
  },
  {
    id: "nh-rsa-354a-10-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NH",
    topicIds: ["housing"],
    citation: "N.H. Rev. Stat. Ann. sec. 354-A:10",
    title: "Civil rights violations in real estate transactions",
    officialUrl: "https://gc.nh.gov/rsa/html/XXXI/354-A/354-A-10.htm",
    sourceName: "New Hampshire General Court",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Hampshire RSA official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `N.H. Rev. Stat. Ann. sec. 354-A:10 Civil rights violations in real estate transactions.

New Hampshire fair-housing law prohibits covered discriminatory real estate practices based on protected characteristics. This is New Hampshire's operative state fair-housing statute.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, annulment law, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "nh-rsa-540a-2-tenant-protections",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NH",
    topicIds: ["housing"],
    citation: "N.H. Rev. Stat. Ann. sec. 540-A:2",
    title: "Prohibited practices in landlord-tenant relations",
    officialUrl: "https://gc.nh.gov/rsa/html/LV/540-A/540-A-2.htm",
    sourceName: "New Hampshire General Court",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Hampshire RSA official section URL listed for adapter verification June 27, 2026",
    reviewStatus: "approved",
    text: `N.H. Rev. Stat. Ann. sec. 540-A:2 Prohibited practices in landlord-tenant relations.

New Hampshire landlord-tenant law prohibits certain self-help and interference practices by landlords. These protections can matter when a tenant with a criminal record faces housing instability unrelated to lawful screening.

Use this as a tenant-protection hook, not as a criminal-record screening rule.`,
  },
  {
    id: "nh-rsa-354a-7-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NH",
    topicIds: ["employment"],
    citation: "N.H. Rev. Stat. Ann. sec. 354-A:7",
    title: "Unlawful discriminatory practices in employment",
    officialUrl: "https://gc.nh.gov/rsa/html/XXXI/354-A/354-A-7.htm",
    sourceName: "New Hampshire General Court",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Hampshire RSA official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `N.H. Rev. Stat. Ann. sec. 354-A:7 Unlawful discriminatory practices in employment.

New Hampshire civil-rights law prohibits covered employment discrimination based on protected characteristics. It is useful employment-rights context, but criminal history is not itself a protected class under this source.

For criminal-record employment questions, use this with annulment law, licensing rules, federal law, and job-specific background-check requirements.`,
  },
  {
    id: "nh-rsa-332g-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NH",
    topicIds: ["employment"],
    citation: "N.H. Rev. Stat. Ann. ch. 332-G",
    title: "Occupational licensing and criminal records",
    officialUrl: "https://gc.nh.gov/rsa/html/XXX/332-G/332-G-mrg.htm",
    sourceName: "New Hampshire General Court",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Hampshire RSA official chapter source listed for adapter verification June 27, 2026",
    reviewStatus: "approved",
    text: `N.H. Rev. Stat. Ann. ch. 332-G Occupational licensing and criminal records.

New Hampshire law limits how licensing authorities may use criminal records in occupational licensing decisions. Analysis depends on the profession, conviction, relationship to duties, rehabilitation, time elapsed, and any occupation-specific statute.

Use this as New Hampshire's occupational-licensing criminal-record authority, and verify the specific board statute before giving a precise eligibility answer.`,
  },
  {
    id: "nh-rsa-594-2-questioning-detaining",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NH",
    topicIds: ["police"],
    citation: "N.H. Rev. Stat. Ann. sec. 594:2",
    title: "Questioning and detaining suspects",
    officialUrl: "https://gc.nh.gov/rsa/html/LIX/594/594-2.htm",
    sourceName: "New Hampshire General Court",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Hampshire RSA official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `N.H. Rev. Stat. Ann. sec. 594:2 Questioning and detaining suspects.

New Hampshire law authorizes temporary questioning and detention under specified circumstances when an officer has reasonable suspicion. Constitutional limits still control the scope and duration of the encounter.

Use this as New Hampshire's stop-and-identify or investigatory detention hook. It does not mean a person must answer every police question or consent to a search.`,
  },
  {
    id: "nh-rsa-570a-2-recording-interception",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NH",
    topicIds: ["police"],
    citation: "N.H. Rev. Stat. Ann. sec. 570-A:2",
    title: "Interception and disclosure of telecommunication or oral communications",
    officialUrl: "https://gc.nh.gov/rsa/html/LVIII/570-A/570-A-2.htm",
    sourceName: "New Hampshire General Court",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Hampshire RSA official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `N.H. Rev. Stat. Ann. sec. 570-A:2 Interception and disclosure of telecommunication or oral communications.

New Hampshire law governs interception and disclosure of telecommunication and oral communications and is generally treated as requiring all-party consent for covered private communications. Recording police also raises public setting, privacy, and interference questions.

Use this as New Hampshire's recording/privacy hook. For recording police, analyze public setting, expectation of privacy, consent, and whether the recording interferes with official duties.`,
  },
  {
    id: "nh-rsa-651-2-probation-sentences",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NH",
    topicIds: ["supervision"],
    citation: "N.H. Rev. Stat. Ann. sec. 651:2",
    title: "Sentences and probation",
    officialUrl: "https://gc.nh.gov/rsa/html/LXII/651/651-2.htm",
    sourceName: "New Hampshire General Court",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Hampshire RSA official section URL listed for adapter verification June 27, 2026",
    reviewStatus: "approved",
    text: `N.H. Rev. Stat. Ann. sec. 651:2 Sentences and probation.

New Hampshire courts may impose sentences and probation conditions authorized by statute and the court order. Specific obligations depend on the written probation terms, offense, sentence, and court requirements.

Use this as New Hampshire's probation framework source, together with the person's written probation conditions.`,
  },
  {
    id: "nh-rsa-651-2-v-probation-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NH",
    topicIds: ["supervision"],
    citation: "N.H. Rev. Stat. Ann. sec. 651:2",
    title: "Probation violation and sentence consequences",
    officialUrl: "https://gc.nh.gov/rsa/html/LXII/651/651-2.htm",
    sourceName: "New Hampshire General Court",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Hampshire RSA official section URL listed for adapter verification June 27, 2026",
    reviewStatus: "approved",
    text: `N.H. Rev. Stat. Ann. sec. 651:2 Probation violation and sentence consequences.

New Hampshire probation violations can lead to court action under the sentencing and probation framework. Consequences depend on the original sentence, conditions, alleged violation, hearing posture, court findings, and available sanctions.

Use this for New Hampshire probation violation answers, but verify the written order and current court status before giving specific guidance.`,
  },
  {
    id: "nh-rsa-651a-6-parole-terms-release",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NH",
    topicIds: ["supervision"],
    citation: "N.H. Rev. Stat. Ann. sec. 651-A:6",
    title: "Terms of release on parole",
    officialUrl: "https://gc.nh.gov/rsa/html/LXII/651-A/651-A-6.htm",
    sourceName: "New Hampshire General Court",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Hampshire RSA official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `N.H. Rev. Stat. Ann. sec. 651-A:6 Terms of release on parole.

New Hampshire parole release and supervision depend on sentence, parole board authority, eligibility, conditions of release, violations, and written parole terms. This section provides the framework for terms of release on parole.

Use this as New Hampshire's parole framework source, not as a release-date calculator. A precise answer requires the sentence, eligibility, board decision, and written supervision conditions.`,
  },
  {
    id: "nj-njsa-19-4-1-voter-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NJ",
    topicIds: ["voting"],
    citation: "N.J. Stat. Ann. sec. 19:4-1",
    title: "Qualifications of voters",
    officialUrl: "https://www.njleg.state.nj.us/",
    sourceName: "New Jersey Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Jersey Legislature official source checked June 27, 2026; exact codified section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.J. Stat. Ann. sec. 19:4-1 Qualifications of voters.

New Jersey voter eligibility turns on citizenship, age, residence, registration, and statutory disqualifications. New Jersey restored voting rights to people on probation or parole; the main conviction-related disqualification is serving a sentence of incarceration for an indictable offense.

Use this as New Jersey's core felony voting-rights authority. A specific answer requires current incarceration status, conviction type, residence, and registration facts.`,
  },
  {
    id: "nj-njsa-2c-52-2-indictable-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NJ",
    topicIds: ["expungement", "employment", "housing"],
    citation: "N.J. Stat. Ann. sec. 2C:52-2",
    title: "Expungement of indictable offense convictions",
    officialUrl: "https://www.njleg.state.nj.us/",
    sourceName: "New Jersey Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Jersey Legislature official source checked June 27, 2026; exact codified section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.J. Stat. Ann. sec. 2C:52-2 Expungement of indictable offense convictions.

New Jersey allows expungement of eligible indictable offense convictions after statutory waiting periods and conditions are met. Eligibility depends on offense type, number of convictions, exclusions, sentence completion, waiting period, pending charges, and later convictions.

Use this as New Jersey's primary indictable-conviction expungement authority. A specific answer requires the exact offense, disposition, sentence completion date, and exclusion analysis.`,
  },
  {
    id: "nj-njsa-2c-52-3-disorderly-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NJ",
    topicIds: ["expungement"],
    citation: "N.J. Stat. Ann. sec. 2C:52-3",
    title: "Expungement of disorderly persons and petty disorderly persons offenses",
    officialUrl: "https://www.njleg.state.nj.us/",
    sourceName: "New Jersey Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Jersey Legislature official source checked June 27, 2026; exact codified section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.J. Stat. Ann. sec. 2C:52-3 Expungement of disorderly persons and petty disorderly persons offenses.

New Jersey separately provides expungement rules for disorderly persons and petty disorderly persons convictions. Eligibility depends on offense count, exclusions, waiting periods, sentence completion, pending charges, and later convictions.

Use this with section 2C:52-2 so JO distinguishes indictable offense expungement from disorderly persons offense expungement.`,
  },
  {
    id: "nj-njsa-2c-52-5-3-clean-slate",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NJ",
    topicIds: ["expungement", "employment", "housing"],
    citation: "N.J. Stat. Ann. sec. 2C:52-5.3",
    title: "Clean slate expungement",
    officialUrl: "https://www.njleg.state.nj.us/",
    sourceName: "New Jersey Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Jersey Legislature official source checked June 27, 2026; exact codified section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.J. Stat. Ann. sec. 2C:52-5.3 Clean slate expungement.

New Jersey's clean slate expungement law allows broad relief for eligible records after statutory time periods and conditions are met. Eligibility depends on the complete record, disqualifying offenses, sentence completion, waiting period, and statutory exceptions.

Use this as New Jersey's clean slate authority. Do not assume clean slate relief has happened without checking the person's full record and eligibility.`,
  },
  {
    id: "nj-njsa-10-5-12-housing-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NJ",
    topicIds: ["housing", "employment"],
    citation: "N.J. Stat. Ann. sec. 10:5-12",
    title: "Law Against Discrimination; unlawful practices",
    officialUrl: "https://www.njleg.state.nj.us/",
    sourceName: "New Jersey Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Jersey Legislature official source checked June 27, 2026; exact codified section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.J. Stat. Ann. sec. 10:5-12 Law Against Discrimination; unlawful practices.

New Jersey's Law Against Discrimination prohibits covered discriminatory practices in employment, housing, public accommodations, and related contexts based on protected characteristics. This is New Jersey's core state civil-rights statute for housing and employment.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, expungement law, fair-chance hiring rules, consumer-reporting law, licensing law, and local ordinances where applicable.`,
  },
  {
    id: "nj-njsa-2a-18-61-1-eviction-good-cause",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NJ",
    topicIds: ["housing"],
    citation: "N.J. Stat. Ann. sec. 2A:18-61.1",
    title: "Grounds for removal of residential tenants",
    officialUrl: "https://www.njleg.state.nj.us/",
    sourceName: "New Jersey Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Jersey Legislature official source checked June 27, 2026; exact codified section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.J. Stat. Ann. sec. 2A:18-61.1 Grounds for removal of residential tenants.

New Jersey landlord-tenant law limits removal of many residential tenants to statutory good-cause grounds. This can matter when a tenant with a criminal record faces housing instability or pressure outside lawful eviction process.

Use this as a tenant-protection hook, not as a criminal-record screening rule.`,
  },
  {
    id: "nj-njsa-34-6b-14-fair-chance-hiring",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NJ",
    topicIds: ["employment"],
    citation: "N.J. Stat. Ann. sec. 34:6B-14",
    title: "Opportunity to Compete Act; criminal record inquiries",
    officialUrl: "https://www.njleg.state.nj.us/",
    sourceName: "New Jersey Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Jersey Legislature official source checked June 27, 2026; exact codified section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.J. Stat. Ann. sec. 34:6B-14 Opportunity to Compete Act; criminal record inquiries.

New Jersey restricts when covered employers may inquire into a job applicant's criminal record during the initial employment application process. This is New Jersey's statewide fair-chance hiring timing rule.

Use this for job-application timing questions. It does not mean every criminal-record consideration is prohibited; exceptions, employer size, job type, and later-stage background checks matter.`,
  },
  {
    id: "nj-njsa-45-1-21-licensing-discipline-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NJ",
    topicIds: ["employment"],
    citation: "N.J. Stat. Ann. sec. 45:1-21",
    title: "Professional licensing discipline and convictions",
    officialUrl: "https://www.njleg.state.nj.us/",
    sourceName: "New Jersey Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Jersey Legislature official source checked June 27, 2026; exact codified section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.J. Stat. Ann. sec. 45:1-21 Professional licensing discipline and convictions.

New Jersey professional boards may deny, suspend, revoke, or discipline licenses based on specified misconduct, including certain criminal convictions. The analysis depends on the profession, conviction, relationship to duties, rehabilitation, time elapsed, and board-specific law.

Use this as a New Jersey occupational or professional licensing criminal-record hook, and verify the board-specific statute before giving a precise eligibility answer.`,
  },
  {
    id: "nj-njsa-2c-29-1-obstructing-administration-law",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NJ",
    topicIds: ["police"],
    citation: "N.J. Stat. Ann. sec. 2C:29-1",
    title: "Obstructing administration of law",
    officialUrl: "https://www.njleg.state.nj.us/",
    sourceName: "New Jersey Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Jersey Legislature official source checked June 27, 2026; exact codified section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.J. Stat. Ann. sec. 2C:29-1 Obstructing administration of law.

New Jersey obstruction law can be relevant when a police encounter involves alleged interference with an officer's duties. It is not a broad stop-and-identify statute and does not itself require answering every police question.

Use this carefully with constitutional stop, search, seizure, and questioning rules and practical know-your-rights guidance.`,
  },
  {
    id: "nj-njsa-2a-156a-3-recording-interception",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NJ",
    topicIds: ["police"],
    citation: "N.J. Stat. Ann. sec. 2A:156A-3",
    title: "Interception and disclosure of wire, electronic, or oral communications",
    officialUrl: "https://www.njleg.state.nj.us/",
    sourceName: "New Jersey Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Jersey Legislature official source checked June 27, 2026; exact codified section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.J. Stat. Ann. sec. 2A:156A-3 Interception and disclosure of wire, electronic, or oral communications.

New Jersey law governs interception and disclosure of wire, electronic, and oral communications. New Jersey is generally treated as a one-party-consent state for recording conversations, subject to statutory details and privacy expectations.

Use this as New Jersey's recording/privacy hook. For recording police, analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "nj-njsa-2c-45-1-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NJ",
    topicIds: ["supervision"],
    citation: "N.J. Stat. Ann. sec. 2C:45-1",
    title: "Conditions of suspension or probation",
    officialUrl: "https://www.njleg.state.nj.us/",
    sourceName: "New Jersey Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Jersey Legislature official source checked June 27, 2026; exact codified section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.J. Stat. Ann. sec. 2C:45-1 Conditions of suspension or probation.

New Jersey courts may impose conditions of probation or suspended sentence authorized by statute and the court order. Specific obligations depend on the written probation terms, offense, sentence, and court requirements.

Use this as New Jersey's probation framework source, together with the person's written probation conditions.`,
  },
  {
    id: "nj-njsa-2c-45-3-probation-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NJ",
    topicIds: ["supervision"],
    citation: "N.J. Stat. Ann. sec. 2C:45-3",
    title: "Revocation of probation",
    officialUrl: "https://www.njleg.state.nj.us/",
    sourceName: "New Jersey Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Jersey Legislature official source checked June 27, 2026; exact codified section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.J. Stat. Ann. sec. 2C:45-3 Revocation of probation.

New Jersey law governs court action after alleged probation violations. Consequences depend on the sentence, conditions, violation allegation, hearing posture, court findings, and available sanctions.

Use this for New Jersey probation violation answers, but verify the written order and current court status before giving specific guidance.`,
  },
  {
    id: "nj-njsa-30-4-123-51-parole-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NJ",
    topicIds: ["supervision"],
    citation: "N.J. Stat. Ann. sec. 30:4-123.51",
    title: "Parole eligibility",
    officialUrl: "https://www.njleg.state.nj.us/",
    sourceName: "New Jersey Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New Jersey Legislature official source checked June 27, 2026; exact codified section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.J. Stat. Ann. sec. 30:4-123.51 Parole eligibility.

New Jersey parole eligibility depends on offense, sentence, credits, statutory exclusions, parole board authority, risk factors, and written parole conditions. This statute provides the framework for parole eligibility analysis.

Use this as New Jersey's parole framework source, not as a release-date calculator. A precise answer requires the sentence, offense date, credits, board decision, and written supervision conditions.`,
  },
  {
    id: "nm-nmsa-1-4-27-1-voting-rights-restoration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NM",
    topicIds: ["voting"],
    citation: "N.M. Stat. Ann. sec. 1-4-27.1",
    title: "Restoration of voting rights after felony conviction",
    officialUrl: "https://nmonesource.com/nmos/nmsa/en/",
    sourceName: "New Mexico Compilation Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "NMOneSource official NMSA source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.M. Stat. Ann. sec. 1-4-27.1 Restoration of voting rights after felony conviction.

New Mexico law restores voting rights for people convicted of felonies when they are no longer incarcerated. The practical issue is current incarceration status, not probation or parole alone.

Use this as New Mexico's core felony voting-rights authority. A specific answer requires current incarceration status, release status, residence, and registration facts.`,
  },
  {
    id: "nm-nmsa-1-4-8-voter-qualification",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NM",
    topicIds: ["voting"],
    citation: "N.M. Stat. Ann. sec. 1-4-8",
    title: "Voter registration qualifications",
    officialUrl: "https://nmonesource.com/nmos/nmsa/en/",
    sourceName: "New Mexico Compilation Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "NMOneSource official NMSA source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.M. Stat. Ann. sec. 1-4-8 Voter registration qualifications.

New Mexico voter registration law sets baseline eligibility requirements including citizenship, age, residence, and registration. For felony conviction questions, read this with section 1-4-27.1 on restoration after incarceration.

Use this as New Mexico's voter-qualification source, not as the only felony voting-rights authority.`,
  },
  {
    id: "nm-nmsa-29-3-8-1-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NM",
    topicIds: ["expungement", "employment", "housing"],
    citation: "N.M. Stat. Ann. sec. 29-3-8.1",
    title: "Expungement of arrest records and public records",
    officialUrl: "https://nmonesource.com/nmos/nmsa/en/",
    sourceName: "New Mexico Compilation Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "NMOneSource official NMSA source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.M. Stat. Ann. sec. 29-3-8.1 Expungement of arrest records and public records.

New Mexico allows expungement of eligible arrest and public criminal records after statutory conditions are met. Eligibility depends on whether the case ended in conviction, offense type, waiting period, sentence completion, restitution or fines, pending charges, later convictions, and statutory exclusions.

Use this as New Mexico's primary criminal record expungement authority. A specific answer requires the exact offense, disposition, completion date, and exclusion analysis.`,
  },
  {
    id: "nm-nmsa-29-3-8-3-expungement-effect",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NM",
    topicIds: ["expungement", "employment", "housing"],
    citation: "N.M. Stat. Ann. sec. 29-3-8.3",
    title: "Effect and limits of expungement",
    officialUrl: "https://nmonesource.com/nmos/nmsa/en/",
    sourceName: "New Mexico Compilation Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "NMOneSource official NMSA source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.M. Stat. Ann. sec. 29-3-8.3 Effect and limits of expungement.

New Mexico expungement relief can limit public access to records, but exceptions may still permit use or disclosure in law enforcement, licensing, employment, housing, or other statutory contexts. The effect depends on the expungement order and any applicable exception.

Use this after confirming an expungement order exists, and check for job, license, housing, agency, or law-enforcement exceptions before giving a specific answer.`,
  },
  {
    id: "nm-nmsa-28-1-7-human-rights-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NM",
    topicIds: ["housing", "employment"],
    citation: "N.M. Stat. Ann. sec. 28-1-7",
    title: "Unlawful discriminatory practices",
    officialUrl: "https://nmonesource.com/nmos/nmsa/en/",
    sourceName: "New Mexico Compilation Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "NMOneSource official NMSA source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.M. Stat. Ann. sec. 28-1-7 Unlawful discriminatory practices.

New Mexico's Human Rights Act prohibits covered discriminatory practices in employment, housing, public accommodations, and related contexts based on protected characteristics. This is New Mexico's core state civil-rights authority for housing and employment.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, expungement law, consumer-reporting law, licensing law, and local ordinances where applicable.`,
  },
  {
    id: "nm-nmsa-47-8-20-landlord-obligations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NM",
    topicIds: ["housing"],
    citation: "N.M. Stat. Ann. sec. 47-8-20",
    title: "Landlord obligations",
    officialUrl: "https://nmonesource.com/nmos/nmsa/en/",
    sourceName: "New Mexico Compilation Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "NMOneSource official NMSA source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.M. Stat. Ann. sec. 47-8-20 Landlord obligations.

New Mexico landlord-tenant law sets landlord duties for habitability, repairs, services, and compliance with the rental agreement and law. These protections can matter when a tenant with a criminal record faces housing instability unrelated to lawful screening.

Use this as a tenant-protection hook, not as a criminal-record screening rule.`,
  },
  {
    id: "nm-nmsa-28-2-3-criminal-offender-employment",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NM",
    topicIds: ["employment"],
    citation: "N.M. Stat. Ann. sec. 28-2-3",
    title: "Use of conviction records in public employment and licensing",
    officialUrl: "https://nmonesource.com/nmos/nmsa/en/",
    sourceName: "New Mexico Compilation Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "NMOneSource official NMSA source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.M. Stat. Ann. sec. 28-2-3 Use of conviction records in public employment and licensing.

New Mexico's Criminal Offender Employment Act limits how public employers and licensing authorities may use conviction records. Analysis depends on whether the conviction directly relates to the job or license, evidence of rehabilitation, time elapsed, and any occupation-specific statute.

Use this as New Mexico's core public employment and occupational-licensing criminal-record authority.`,
  },
  {
    id: "nm-nmsa-61-1-36-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NM",
    topicIds: ["employment"],
    citation: "N.M. Stat. Ann. sec. 61-1-36",
    title: "Occupational licensing and criminal conviction history",
    officialUrl: "https://nmonesource.com/nmos/nmsa/en/",
    sourceName: "New Mexico Compilation Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "NMOneSource official NMSA source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.M. Stat. Ann. sec. 61-1-36 Occupational licensing and criminal conviction history.

New Mexico law limits how licensing boards may use criminal conviction history in licensing decisions. The analysis depends on the profession, conviction, relationship to duties, rehabilitation, time elapsed, and any board-specific law.

Use this as a New Mexico occupational-licensing criminal-record hook, and verify the specific board statute before giving a precise eligibility answer.`,
  },
  {
    id: "nm-nmsa-30-22-3-concealing-identity",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NM",
    topicIds: ["police"],
    citation: "N.M. Stat. Ann. sec. 30-22-3",
    title: "Concealing identity",
    officialUrl: "https://nmonesource.com/nmos/nmsa/en/",
    sourceName: "New Mexico Compilation Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "NMOneSource official NMSA source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.M. Stat. Ann. sec. 30-22-3 Concealing identity.

New Mexico law criminalizes concealing one's true name or identity from a public officer under specified circumstances. It can be relevant during police encounters, but constitutional limits on detention, questioning, and arrest still apply.

Use this as New Mexico's identification-related police encounter hook. It does not mean a person must answer every police question or consent to a search.`,
  },
  {
    id: "nm-nmsa-30-12-1-eavesdropping-recording",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NM",
    topicIds: ["police"],
    citation: "N.M. Stat. Ann. sec. 30-12-1",
    title: "Eavesdropping",
    officialUrl: "https://nmonesource.com/nmos/nmsa/en/",
    sourceName: "New Mexico Compilation Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "NMOneSource official NMSA source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.M. Stat. Ann. sec. 30-12-1 Eavesdropping.

New Mexico law governs eavesdropping and certain recording or interception conduct. New Mexico is generally treated as a one-party-consent state for recording conversations, subject to statutory details and privacy expectations.

Use this as New Mexico's recording/privacy hook. For recording police, analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "nm-nmsa-31-20-5-probation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NM",
    topicIds: ["supervision"],
    citation: "N.M. Stat. Ann. sec. 31-20-5",
    title: "Probation and suspended or deferred sentence",
    officialUrl: "https://nmonesource.com/nmos/nmsa/en/",
    sourceName: "New Mexico Compilation Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "NMOneSource official NMSA source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.M. Stat. Ann. sec. 31-20-5 Probation and suspended or deferred sentence.

New Mexico courts may suspend or defer sentence and place a person on probation under statutory authority. Specific obligations depend on the written probation terms, offense, sentence, and court requirements.

Use this as New Mexico's probation framework source, together with the person's written probation conditions.`,
  },
  {
    id: "nm-nmsa-31-21-15-probation-parole-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NM",
    topicIds: ["supervision"],
    citation: "N.M. Stat. Ann. sec. 31-21-15",
    title: "Violation of probation or parole",
    officialUrl: "https://nmonesource.com/nmos/nmsa/en/",
    sourceName: "New Mexico Compilation Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "NMOneSource official NMSA source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.M. Stat. Ann. sec. 31-21-15 Violation of probation or parole.

New Mexico law governs action after alleged probation or parole violations. Consequences depend on the supervision type, sentence, conditions, alleged violation, hearing posture, court or board findings, and available sanctions.

Use this for New Mexico supervision violation answers, but verify the written order and current supervision status before giving specific guidance.`,
  },
  {
    id: "nm-nmsa-31-21-10-parole-board-powers",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NM",
    topicIds: ["supervision"],
    citation: "N.M. Stat. Ann. sec. 31-21-10",
    title: "Parole board powers and release",
    officialUrl: "https://nmonesource.com/nmos/nmsa/en/",
    sourceName: "New Mexico Compilation Commission",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "NMOneSource official NMSA source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `N.M. Stat. Ann. sec. 31-21-10 Parole board powers and release.

New Mexico parole decisions depend on offense, sentence, eligibility, credits, parole board authority, risk factors, and written parole conditions. This statute provides the framework for parole release and supervision analysis.

Use this as New Mexico's parole framework source, not as a release-date calculator. A precise answer requires the sentence, offense date, credits, board decision, and written supervision conditions.`,
  },
  {
    id: "ny-eln-5-106-felony-voting-rights",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NY",
    topicIds: ["voting"],
    citation: "N.Y. Elec. Law sec. 5-106",
    title: "Voter eligibility after felony conviction",
    officialUrl: "https://www.nysenate.gov/legislation/laws/ELN/5-106",
    sourceName: "New York State Senate",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New York State Senate official law URL pattern checked June 27, 2026; automated shell received 403",
    reviewStatus: "approved",
    text: `N.Y. Elec. Law sec. 5-106 Voter eligibility after felony conviction.

New York law disqualifies a person from voting while incarcerated for a felony conviction, and restores voting rights upon release from incarceration. People on parole or community supervision are not disqualified on that basis alone.

Use this as New York's core felony voting-rights authority. A specific answer requires current incarceration status, conviction type, residence, and registration facts.`,
  },
  {
    id: "ny-cpl-160-59-sealing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NY",
    topicIds: ["expungement", "employment", "housing"],
    citation: "N.Y. Crim. Proc. Law sec. 160.59",
    title: "Sealing of certain convictions",
    officialUrl: "https://www.nysenate.gov/legislation/laws/CPL/160.59",
    sourceName: "New York State Senate",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New York State Senate official law URL pattern checked June 27, 2026; automated shell received 403",
    reviewStatus: "approved",
    text: `N.Y. Crim. Proc. Law sec. 160.59 Sealing of certain convictions.

New York allows sealing of certain eligible convictions after statutory waiting periods and conditions are met. Eligibility depends on offense type, number of convictions, sentence completion, waiting period, pending charges, and statutory exclusions.

Use this as New York's petition-based conviction sealing authority. A specific answer requires the exact offense, disposition, sentence completion date, and exclusion analysis.`,
  },
  {
    id: "ny-cpl-160-57-clean-slate",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NY",
    topicIds: ["expungement", "employment", "housing"],
    citation: "N.Y. Crim. Proc. Law sec. 160.57",
    title: "Automatic sealing of certain convictions",
    officialUrl: "https://www.nysenate.gov/legislation/laws/CPL/160.57",
    sourceName: "New York State Senate",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New York State Senate official law URL pattern checked June 27, 2026; automated shell received 403",
    reviewStatus: "approved",
    text: `N.Y. Crim. Proc. Law sec. 160.57 Automatic sealing of certain convictions.

New York's clean-slate law provides automatic sealing for eligible convictions after statutory waiting periods and conditions are met. Automatic relief depends on offense eligibility, time since release or sentence, pending charges, later convictions, and statutory exceptions.

Use this as New York's automatic clean-slate authority. Do not assume a record has already been sealed without checking eligibility and implementation status.`,
  },
  {
    id: "ny-cpl-160-58-drug-treatment-sealing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NY",
    topicIds: ["expungement"],
    citation: "N.Y. Crim. Proc. Law sec. 160.58",
    title: "Conditional sealing after judicial diversion or drug treatment",
    officialUrl: "https://www.nysenate.gov/legislation/laws/CPL/160.58",
    sourceName: "New York State Senate",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New York State Senate official law URL pattern checked June 27, 2026; automated shell received 403",
    reviewStatus: "approved",
    text: `N.Y. Crim. Proc. Law sec. 160.58 Conditional sealing after judicial diversion or drug treatment.

New York separately provides conditional sealing for certain eligible cases connected to judicial diversion or drug treatment. Eligibility depends on the case history, treatment completion, statutory criteria, and exclusions.

Use this as a specialized New York sealing authority alongside sections 160.57 and 160.59.`,
  },
  {
    id: "ny-exec-296-housing-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NY",
    topicIds: ["housing", "employment"],
    citation: "N.Y. Exec. Law sec. 296",
    title: "Human Rights Law; unlawful discriminatory practices",
    officialUrl: "https://www.nysenate.gov/legislation/laws/EXC/296",
    sourceName: "New York State Senate",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New York State Senate official law URL pattern checked June 27, 2026; automated shell received 403",
    reviewStatus: "approved",
    text: `N.Y. Exec. Law sec. 296 Human Rights Law; unlawful discriminatory practices.

New York Human Rights Law prohibits covered discriminatory practices in employment, housing, public accommodations, and related contexts based on protected characteristics. It also intersects with rules about considering criminal history in employment.

Criminal history is not itself the same as a protected class for every housing context. Use this with federal HUD guidance, sealing law, consumer-reporting law, public housing rules, and local ordinances where applicable.`,
  },
  {
    id: "ny-real-prop-227-f-tenant-domestic-violence",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NY",
    topicIds: ["housing"],
    citation: "N.Y. Real Prop. Law sec. 227-f",
    title: "Tenant protections related to domestic violence",
    officialUrl: "https://www.nysenate.gov/legislation/laws/RPP/227-F",
    sourceName: "New York State Senate",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New York State Senate official law URL pattern checked June 27, 2026; automated shell received 403",
    reviewStatus: "approved",
    text: `N.Y. Real Prop. Law sec. 227-f Tenant protections related to domestic violence.

New York landlord-tenant law includes protections for tenants affected by domestic violence. This can matter when housing instability overlaps with public-safety contact or criminal legal involvement.

Use this as a tenant-protection hook, not as a general criminal-record screening rule.`,
  },
  {
    id: "ny-corr-752-employment-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NY",
    topicIds: ["employment"],
    citation: "N.Y. Correct. Law sec. 752",
    title: "Unfair discrimination against persons previously convicted of offenses",
    officialUrl: "https://www.nysenate.gov/legislation/laws/COR/752",
    sourceName: "New York State Senate",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New York State Senate official law URL pattern checked June 27, 2026; automated shell received 403",
    reviewStatus: "approved",
    text: `N.Y. Correct. Law sec. 752 Unfair discrimination against persons previously convicted of offenses.

New York generally prohibits denial of employment or occupational licensing because of prior convictions unless there is a direct relationship to the job or license, or an unreasonable risk to property, safety, or welfare.

Use this as New York's core employment and licensing criminal-record protection.`,
  },
  {
    id: "ny-corr-753-employment-licensing-factors",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NY",
    topicIds: ["employment"],
    citation: "N.Y. Correct. Law sec. 753",
    title: "Factors to consider concerning prior convictions",
    officialUrl: "https://www.nysenate.gov/legislation/laws/COR/753",
    sourceName: "New York State Senate",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New York State Senate official law URL pattern checked June 27, 2026; automated shell received 403",
    reviewStatus: "approved",
    text: `N.Y. Correct. Law sec. 753 Factors to consider concerning prior convictions.

New York requires employers and licensing agencies to consider specific factors when evaluating a prior conviction, including public policy favoring employment of people with conviction records, job duties, time elapsed, age at offense, seriousness, rehabilitation, and safety risk.

Use this with section 752 for New York employment and occupational-licensing criminal-record questions.`,
  },
  {
    id: "ny-cpl-140-50-temporary-questioning",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NY",
    topicIds: ["police"],
    citation: "N.Y. Crim. Proc. Law sec. 140.50",
    title: "Temporary questioning of persons in public places; search for weapons",
    officialUrl: "https://www.nysenate.gov/legislation/laws/CPL/140.50",
    sourceName: "New York State Senate",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New York State Senate official law URL pattern checked June 27, 2026; automated shell received 403",
    reviewStatus: "approved",
    text: `N.Y. Crim. Proc. Law sec. 140.50 Temporary questioning of persons in public places; search for weapons.

New York law authorizes temporary questioning when an officer reasonably suspects a person has committed, is committing, or is about to commit a crime, and addresses frisk limits for officer safety. Constitutional limits still control the scope and duration of the encounter.

Use this as New York's stop-and-frisk statutory hook. It does not mean a person must answer every police question or consent to a search.`,
  },
  {
    id: "ny-penal-250-05-eavesdropping",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NY",
    topicIds: ["police"],
    citation: "N.Y. Penal Law sec. 250.05",
    title: "Eavesdropping",
    officialUrl: "https://www.nysenate.gov/legislation/laws/PEN/250.05",
    sourceName: "New York State Senate",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New York State Senate official law URL pattern checked June 27, 2026; automated shell received 403",
    reviewStatus: "approved",
    text: `N.Y. Penal Law sec. 250.05 Eavesdropping.

New York law governs eavesdropping and certain recording or interception conduct. New York is generally treated as a one-party-consent state for recording conversations, subject to statutory details and privacy expectations.

Use this as New York's recording/privacy hook. For recording police, analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "ny-penal-65-10-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NY",
    topicIds: ["supervision"],
    citation: "N.Y. Penal Law sec. 65.10",
    title: "Conditions of probation and conditional discharge",
    officialUrl: "https://www.nysenate.gov/legislation/laws/PEN/65.10",
    sourceName: "New York State Senate",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New York State Senate official law URL pattern checked June 27, 2026; automated shell received 403",
    reviewStatus: "approved",
    text: `N.Y. Penal Law sec. 65.10 Conditions of probation and conditional discharge.

New York courts may impose probation and conditional discharge conditions authorized by statute and the court order. Specific obligations depend on the written terms, offense, sentence, and court requirements.

Use this as New York's probation framework source, together with the person's written probation conditions.`,
  },
  {
    id: "ny-cpl-410-70-probation-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NY",
    topicIds: ["supervision"],
    citation: "N.Y. Crim. Proc. Law sec. 410.70",
    title: "Probation violation declaration and hearing",
    officialUrl: "https://www.nysenate.gov/legislation/laws/CPL/410.70",
    sourceName: "New York State Senate",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New York State Senate official law URL pattern checked June 27, 2026; automated shell received 403",
    reviewStatus: "approved",
    text: `N.Y. Crim. Proc. Law sec. 410.70 Probation violation declaration and hearing.

New York law governs court procedures after alleged probation or conditional discharge violations. Consequences depend on the sentence, conditions, violation allegation, hearing posture, court findings, and available sanctions.

Use this for New York probation violation answers, but verify the written order and current court status before giving specific guidance.`,
  },
  {
    id: "ny-exec-259-i-parole-release-supervision",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NY",
    topicIds: ["supervision"],
    citation: "N.Y. Exec. Law sec. 259-i",
    title: "Parole release and supervision procedures",
    officialUrl: "https://www.nysenate.gov/legislation/laws/EXC/259-I",
    sourceName: "New York State Senate",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "New York State Senate official law URL pattern checked June 27, 2026; automated shell received 403",
    reviewStatus: "approved",
    text: `N.Y. Exec. Law sec. 259-i Parole release and supervision procedures.

New York parole and community supervision decisions depend on offense, sentence, release eligibility, board action, risk and rehabilitation factors, conditions, and violation procedures. This statute provides the framework for parole release and supervision analysis.

Use this as New York's parole framework source, not as a release-date calculator. A precise answer requires the sentence, offense date, board decision, and written supervision conditions.`,
  },
  {
    id: "nc-gs-163-55-voter-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NC",
    topicIds: ["voting"],
    citation: "N.C. Gen. Stat. sec. 163-55",
    title: "Qualifications to vote",
    officialUrl:
      "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_163/GS_163-55.html",
    sourceName: "North Carolina General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Carolina General Assembly official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `N.C. Gen. Stat. sec. 163-55 Qualifications to vote.

North Carolina voter eligibility turns on citizenship, age, residence, registration, and statutory disqualifications. For people with felony convictions, the key issue is whether citizenship rights have been restored after completion of the sentence.

Use this as North Carolina's voter-qualification source, and pair it with section 13-1 for felony rights restoration questions.`,
  },
  {
    id: "nc-gs-13-1-restoration-citizenship",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NC",
    topicIds: ["voting"],
    citation: "N.C. Gen. Stat. sec. 13-1",
    title: "Restoration of citizenship rights",
    officialUrl:
      "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_13/GS_13-1.html",
    sourceName: "North Carolina General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Carolina General Assembly official section URL listed for adapter verification June 27, 2026",
    reviewStatus: "approved",
    text: `N.C. Gen. Stat. sec. 13-1 Restoration of citizenship rights.

North Carolina law restores citizenship rights after a felony conviction when the person has completed the sentence, including probation, parole, or post-release supervision. Voting rights are tied to restoration of citizenship rights.

Use this as North Carolina's core felony voting-rights restoration authority. A specific answer requires sentence completion and current supervision status.`,
  },
  {
    id: "nc-gs-15a-145-5-expunction-nonviolent",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NC",
    topicIds: ["expungement", "employment", "housing"],
    citation: "N.C. Gen. Stat. sec. 15A-145.5",
    title: "Expunction of certain nonviolent misdemeanors and felonies",
    officialUrl:
      "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_15A/GS_15A-145.5.html",
    sourceName: "North Carolina General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Carolina General Assembly official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `N.C. Gen. Stat. sec. 15A-145.5 Expunction of certain nonviolent misdemeanors and felonies.

North Carolina allows expunction of certain eligible nonviolent misdemeanor and felony convictions after statutory waiting periods and conditions are met. Eligibility depends on offense type, exclusions, number of convictions, sentence completion, waiting period, pending charges, and later convictions.

Use this as North Carolina's primary conviction expunction authority. A specific answer requires the exact offense, disposition, sentence completion date, and exclusion analysis.`,
  },
  {
    id: "nc-gs-15a-146-expunction-dismissal-acquittal",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NC",
    topicIds: ["expungement"],
    citation: "N.C. Gen. Stat. sec. 15A-146",
    title: "Expunction after dismissal or finding of not guilty",
    officialUrl:
      "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_15A/GS_15A-146.html",
    sourceName: "North Carolina General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Carolina General Assembly official section URL listed for adapter verification June 27, 2026",
    reviewStatus: "approved",
    text: `N.C. Gen. Stat. sec. 15A-146 Expunction after dismissal or finding of not guilty.

North Carolina separately provides expunction for charges dismissed or ending in a finding of not guilty. This is distinct from conviction expunction and has different procedures and eligibility rules.

Use this for North Carolina nonconviction expunction questions, and pair it with section 15A-145.5 when the person has a conviction.`,
  },
  {
    id: "nc-gs-41a-4-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NC",
    topicIds: ["housing"],
    citation: "N.C. Gen. Stat. sec. 41A-4",
    title: "Discriminatory housing practices",
    officialUrl:
      "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_41A/GS_41A-4.html",
    sourceName: "North Carolina General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Carolina General Assembly official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `N.C. Gen. Stat. sec. 41A-4 Discriminatory housing practices.

North Carolina fair-housing law prohibits covered discriminatory housing practices based on protected characteristics. This is North Carolina's operative state fair-housing statute.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, expunction law, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "nc-gs-42-42-landlord-obligations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NC",
    topicIds: ["housing"],
    citation: "N.C. Gen. Stat. sec. 42-42",
    title: "Landlord obligations",
    officialUrl:
      "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_42/GS_42-42.html",
    sourceName: "North Carolina General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Carolina General Assembly official section URL listed for adapter verification June 27, 2026",
    reviewStatus: "approved",
    text: `N.C. Gen. Stat. sec. 42-42 Landlord obligations.

North Carolina landlord-tenant law sets statutory landlord duties for fit premises, repairs, safety devices, and housing-code compliance. These protections can matter when a tenant with a criminal record faces housing instability unrelated to lawful screening.

Use this as a tenant-protection hook, not as a criminal-record screening rule.`,
  },
  {
    id: "nc-gs-95-28-1-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NC",
    topicIds: ["employment"],
    citation: "N.C. Gen. Stat. sec. 95-28.1",
    title: "Discrimination in employment",
    officialUrl:
      "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_95/GS_95-28.1.html",
    sourceName: "North Carolina General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Carolina General Assembly official section URL listed for adapter verification June 27, 2026",
    reviewStatus: "approved",
    text: `N.C. Gen. Stat. sec. 95-28.1 Discrimination in employment.

North Carolina law states public policy against employment discrimination based on protected characteristics. It is useful employment-rights context, but criminal history is not itself a protected class under this source.

For criminal-record employment questions, use this with expunction law, occupational-licensing rules, federal law, and job-specific background-check requirements.`,
  },
  {
    id: "nc-gs-93b-8-1-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NC",
    topicIds: ["employment"],
    citation: "N.C. Gen. Stat. sec. 93B-8.1",
    title: "Use of criminal history records by occupational licensing boards",
    officialUrl:
      "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_93B/GS_93B-8.1.html",
    sourceName: "North Carolina General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Carolina General Assembly official section URL listed for adapter verification June 27, 2026",
    reviewStatus: "approved",
    text: `N.C. Gen. Stat. sec. 93B-8.1 Use of criminal history records by occupational licensing boards.

North Carolina limits how occupational licensing boards may use criminal history in licensing decisions. The analysis depends on the occupation, conviction, relationship to duties, rehabilitation, time elapsed, and board-specific law.

Use this as North Carolina's core occupational-licensing criminal-record authority.`,
  },
  {
    id: "nc-gs-15a-401-arrest-by-officer",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NC",
    topicIds: ["police"],
    citation: "N.C. Gen. Stat. sec. 15A-401",
    title: "Arrest by law enforcement officer",
    officialUrl:
      "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_15A/GS_15A-401.html",
    sourceName: "North Carolina General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Carolina General Assembly official section URL listed for adapter verification June 27, 2026",
    reviewStatus: "approved",
    text: `N.C. Gen. Stat. sec. 15A-401 Arrest by law enforcement officer.

North Carolina law sets circumstances and procedures for arrest by law enforcement officers. This is a statutory arrest-power hook and must be used with federal and state constitutional limits on stops, searches, questioning, and arrests.

Use this for North Carolina police encounter answers as statutory context, not as a complete search-and-seizure rule.`,
  },
  {
    id: "nc-gs-15a-287-interception-recording",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NC",
    topicIds: ["police"],
    citation: "N.C. Gen. Stat. sec. 15A-287",
    title: "Interception and disclosure of wire, oral, or electronic communications",
    officialUrl:
      "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_15A/GS_15A-287.html",
    sourceName: "North Carolina General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Carolina General Assembly official section URL listed for adapter verification June 27, 2026",
    reviewStatus: "approved",
    text: `N.C. Gen. Stat. sec. 15A-287 Interception and disclosure of wire, oral, or electronic communications.

North Carolina law governs interception and disclosure of wire, oral, and electronic communications. North Carolina is generally treated as a one-party-consent state for recording conversations, subject to statutory details and privacy expectations.

Use this as North Carolina's recording/privacy hook. For recording police, analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "nc-gs-15a-1343-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NC",
    topicIds: ["supervision"],
    citation: "N.C. Gen. Stat. sec. 15A-1343",
    title: "Conditions of probation",
    officialUrl:
      "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_15A/GS_15A-1343.html",
    sourceName: "North Carolina General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Carolina General Assembly official section URL listed for adapter verification June 27, 2026",
    reviewStatus: "approved",
    text: `N.C. Gen. Stat. sec. 15A-1343 Conditions of probation.

North Carolina courts may impose regular and special probation conditions authorized by statute and the court order. Specific obligations depend on the written probation terms, offense, sentence, and court requirements.

Use this as North Carolina's probation framework source, together with the person's written probation conditions.`,
  },
  {
    id: "nc-gs-15a-1345-probation-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NC",
    topicIds: ["supervision"],
    citation: "N.C. Gen. Stat. sec. 15A-1345",
    title: "Arrest and hearing on probation violation",
    officialUrl:
      "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_15A/GS_15A-1345.html",
    sourceName: "North Carolina General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Carolina General Assembly official section URL listed for adapter verification June 27, 2026",
    reviewStatus: "approved",
    text: `N.C. Gen. Stat. sec. 15A-1345 Arrest and hearing on probation violation.

North Carolina law governs arrest, notice, and hearings after alleged probation violations. Consequences depend on the sentence, conditions, violation allegation, hearing posture, court findings, and available sanctions.

Use this for North Carolina probation violation answers, but verify the written order and current court status before giving specific guidance.`,
  },
  {
    id: "nc-gs-15a-1371-parole-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "NC",
    topicIds: ["supervision"],
    citation: "N.C. Gen. Stat. sec. 15A-1371",
    title: "Parole eligibility",
    officialUrl:
      "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_15A/GS_15A-1371.html",
    sourceName: "North Carolina General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Carolina General Assembly official section URL listed for adapter verification June 27, 2026",
    reviewStatus: "approved",
    text: `N.C. Gen. Stat. sec. 15A-1371 Parole eligibility.

North Carolina parole eligibility applies mainly to older or specific sentencing structures and depends on offense, sentence, eligibility rules, credits, post-release supervision framework, and commission action. Many modern cases involve probation or post-release supervision instead of traditional parole.

Use this as North Carolina's parole framework source, not as a release-date calculator. A precise answer requires the sentence, offense date, governing sentencing law, and written supervision conditions.`,
  },
  {
    id: "nd-ndcc-16-1-01-04-voter-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ND",
    topicIds: ["voting"],
    citation: "N.D. Cent. Code sec. 16.1-01-04",
    title: "Qualifications of electors",
    officialUrl: "https://ndlegis.gov/cencode/t16-1c01.pdf",
    sourceName: "North Dakota Legislative Branch",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Dakota Century Code official chapter PDF checked June 27, 2026",
    reviewStatus: "approved",
    text: `N.D. Cent. Code sec. 16.1-01-04 Qualifications of electors.

North Dakota voter eligibility turns on citizenship, age, residence, and statutory qualifications. For people with felony convictions, the practical question is whether civil rights have been suspended by current incarceration or restored after release.

Use this as North Dakota's voter-qualification source, and pair it with section 12.1-33-01 for felony civil-rights restoration questions.`,
  },
  {
    id: "nd-ndcc-12-1-33-01-rights-conviction",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ND",
    topicIds: ["voting"],
    citation: "N.D. Cent. Code sec. 12.1-33-01",
    title: "Rights lost and restored after conviction",
    officialUrl: "https://ndlegis.gov/cencode/t12-1c33.pdf",
    sourceName: "North Dakota Legislative Branch",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Dakota Century Code official source listed June 27, 2026; exact chapter PDF pending adapter verification",
    reviewStatus: "approved",
    text: `N.D. Cent. Code sec. 12.1-33-01 Rights lost and restored after conviction.

North Dakota law addresses civil rights affected by conviction and restoration after the person is no longer under the disqualifying status. For voting questions, this source should be read with voter-qualification law.

Use this as North Dakota's felony civil-rights restoration authority. A specific answer requires current incarceration or sentence status and voter registration facts.`,
  },
  {
    id: "nd-ndcc-12-60-1-02-sealing-petition",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ND",
    topicIds: ["expungement", "employment", "housing"],
    citation: "N.D. Cent. Code sec. 12-60.1-02",
    title: "Petition to seal criminal records",
    officialUrl: "https://ndlegis.gov/cencode/t12c60-1.pdf",
    sourceName: "North Dakota Legislative Branch",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Dakota Century Code official chapter source listed June 27, 2026; exact chapter PDF pending adapter verification",
    reviewStatus: "approved",
    text: `N.D. Cent. Code sec. 12-60.1-02 Petition to seal criminal records.

North Dakota allows eligible criminal records to be sealed when statutory criteria are met. Eligibility depends on offense type, disposition, waiting period, sentence completion, later record, pending charges, and statutory exclusions.

Use this as North Dakota's primary record-sealing authority. A specific answer requires the exact offense, disposition, completion date, and exclusion analysis.`,
  },
  {
    id: "nd-ndcc-12-60-1-03-sealing-effect",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ND",
    topicIds: ["expungement", "employment", "housing"],
    citation: "N.D. Cent. Code sec. 12-60.1-03",
    title: "Effect of sealing criminal records",
    officialUrl: "https://ndlegis.gov/cencode/t12c60-1.pdf",
    sourceName: "North Dakota Legislative Branch",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Dakota Century Code official chapter source listed June 27, 2026; exact chapter PDF pending adapter verification",
    reviewStatus: "approved",
    text: `N.D. Cent. Code sec. 12-60.1-03 Effect of sealing criminal records.

North Dakota law describes the effect and limits of sealing criminal records. Sealed records may still be available or relevant for certain law enforcement, licensing, employment, housing, or statutory purposes depending on the exception.

Use this after confirming a sealing order exists, and check for any job, license, housing, agency, or law-enforcement exception before giving a specific answer.`,
  },
  {
    id: "nd-ndcc-14-02-5-12-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ND",
    topicIds: ["housing"],
    citation: "N.D. Cent. Code sec. 14-02.5-12",
    title: "Discriminatory housing practices",
    officialUrl: "https://ndlegis.gov/cencode/t14c02-5.pdf",
    sourceName: "North Dakota Legislative Branch",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Dakota Century Code official chapter PDF checked June 27, 2026",
    reviewStatus: "approved",
    text: `N.D. Cent. Code sec. 14-02.5-12 Discriminatory housing practices.

North Dakota human-rights law prohibits covered discriminatory housing practices based on protected characteristics. This is North Dakota's operative state fair-housing source.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, record-sealing law, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "nd-ndcc-47-16-13-1-landlord-repairs",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ND",
    topicIds: ["housing"],
    citation: "N.D. Cent. Code sec. 47-16-13.1",
    title: "Landlord repair and habitability duties",
    officialUrl: "https://ndlegis.gov/cencode/t47c16.pdf",
    sourceName: "North Dakota Legislative Branch",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Dakota Century Code official source listed June 27, 2026; exact chapter PDF pending adapter verification",
    reviewStatus: "approved",
    text: `N.D. Cent. Code sec. 47-16-13.1 Landlord repair and habitability duties.

North Dakota landlord-tenant law includes duties related to premises condition and repairs. These protections can matter when a tenant with a criminal record faces housing instability unrelated to lawful screening.

Use this as a tenant-protection hook, not as a criminal-record screening rule.`,
  },
  {
    id: "nd-ndcc-14-02-5-03-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ND",
    topicIds: ["employment"],
    citation: "N.D. Cent. Code sec. 14-02.5-03",
    title: "Discriminatory employment practices",
    officialUrl: "https://ndlegis.gov/cencode/t14c02-5.pdf",
    sourceName: "North Dakota Legislative Branch",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Dakota Century Code official chapter PDF checked June 27, 2026",
    reviewStatus: "approved",
    text: `N.D. Cent. Code sec. 14-02.5-03 Discriminatory employment practices.

North Dakota human-rights law prohibits covered employment discrimination based on protected characteristics. It is useful employment-rights context, but criminal history is not itself a protected class under this source.

For criminal-record employment questions, use this with record-sealing law, occupational-licensing rules, federal law, and job-specific background-check requirements.`,
  },
  {
    id: "nd-ndcc-12-1-33-02-1-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ND",
    topicIds: ["employment"],
    citation: "N.D. Cent. Code sec. 12.1-33-02.1",
    title: "Occupational licensing and criminal convictions",
    officialUrl: "https://ndlegis.gov/cencode/t12-1c33.pdf",
    sourceName: "North Dakota Legislative Branch",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Dakota Century Code official source listed June 27, 2026; exact chapter PDF pending adapter verification",
    reviewStatus: "approved",
    text: `N.D. Cent. Code sec. 12.1-33-02.1 Occupational licensing and criminal convictions.

North Dakota law limits how criminal convictions may affect occupational licensing decisions. The analysis depends on the occupation, conviction, relationship to duties, rehabilitation, time elapsed, and any board-specific statute.

Use this as North Dakota's occupational-licensing criminal-record authority.`,
  },
  {
    id: "nd-ndcc-29-29-21-temporary-questioning",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ND",
    topicIds: ["police"],
    citation: "N.D. Cent. Code sec. 29-29-21",
    title: "Temporary questioning of persons",
    officialUrl: "https://ndlegis.gov/cencode/t29c29.pdf",
    sourceName: "North Dakota Legislative Branch",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Dakota Century Code official source listed June 27, 2026; exact chapter PDF pending adapter verification",
    reviewStatus: "approved",
    text: `N.D. Cent. Code sec. 29-29-21 Temporary questioning of persons.

North Dakota law provides a statutory hook for temporary questioning or investigatory detention under specified circumstances. Constitutional limits still control the scope and duration of the encounter.

Use this as North Dakota's police stop-and-questioning hook. It does not mean a person must answer every police question or consent to a search.`,
  },
  {
    id: "nd-ndcc-12-1-15-02-eavesdropping",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ND",
    topicIds: ["police"],
    citation: "N.D. Cent. Code sec. 12.1-15-02",
    title: "Interception of communications",
    officialUrl: "https://ndlegis.gov/cencode/t12-1c15.pdf",
    sourceName: "North Dakota Legislative Branch",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Dakota Century Code official source listed June 27, 2026; exact chapter PDF pending adapter verification",
    reviewStatus: "approved",
    text: `N.D. Cent. Code sec. 12.1-15-02 Interception of communications.

North Dakota law governs interception and recording of certain communications. North Dakota is generally treated as a one-party-consent state for recording conversations, subject to statutory details and privacy expectations.

Use this as North Dakota's recording/privacy hook. For recording police, analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "nd-ndcc-12-1-32-07-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ND",
    topicIds: ["supervision"],
    citation: "N.D. Cent. Code sec. 12.1-32-07",
    title: "Supervision and probation conditions",
    officialUrl: "https://ndlegis.gov/cencode/t12-1c32.pdf",
    sourceName: "North Dakota Legislative Branch",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Dakota Century Code official source listed June 27, 2026; exact chapter PDF pending adapter verification",
    reviewStatus: "approved",
    text: `N.D. Cent. Code sec. 12.1-32-07 Supervision and probation conditions.

North Dakota courts may impose probation or supervised probation conditions authorized by statute and the court order. Specific obligations depend on the written probation terms, offense, sentence, and court requirements.

Use this as North Dakota's probation framework source, together with the person's written probation conditions.`,
  },
  {
    id: "nd-ndcc-12-1-32-07-probation-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ND",
    topicIds: ["supervision"],
    citation: "N.D. Cent. Code sec. 12.1-32-07",
    title: "Probation violation and revocation",
    officialUrl: "https://ndlegis.gov/cencode/t12-1c32.pdf",
    sourceName: "North Dakota Legislative Branch",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Dakota Century Code official source listed June 27, 2026; exact chapter PDF pending adapter verification",
    reviewStatus: "approved",
    text: `N.D. Cent. Code sec. 12.1-32-07 Probation violation and revocation.

North Dakota law governs court action after alleged probation violations within the probation and sentencing framework. Consequences depend on the sentence, conditions, violation allegation, hearing posture, court findings, and available sanctions.

Use this for North Dakota probation violation answers, but verify the written order and current court status before giving specific guidance.`,
  },
  {
    id: "nd-ndcc-12-59-05-parole-board-powers",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "ND",
    topicIds: ["supervision"],
    citation: "N.D. Cent. Code sec. 12-59-05",
    title: "Parole board powers and parole release",
    officialUrl: "https://ndlegis.gov/cencode/t12c59.pdf",
    sourceName: "North Dakota Legislative Branch",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "North Dakota Century Code official source listed June 27, 2026; exact chapter PDF pending adapter verification",
    reviewStatus: "approved",
    text: `N.D. Cent. Code sec. 12-59-05 Parole board powers and parole release.

North Dakota parole decisions depend on offense, sentence, eligibility, parole board authority, risk and rehabilitation factors, and written parole conditions. This statute provides the framework for parole release and supervision analysis.

Use this as North Dakota's parole framework source, not as a release-date calculator. A precise answer requires the sentence, offense date, board decision, and written supervision conditions.`,
  },
  {
    id: "oh-orc-3503-21-felony-voting-rights",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OH",
    topicIds: ["voting"],
    citation: "Ohio Rev. Code sec. 3503.21",
    title: "Registration and voting after felony conviction",
    officialUrl: "https://codes.ohio.gov/ohio-revised-code/section-3503.21",
    sourceName: "Ohio Laws",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Ohio Laws official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Ohio Rev. Code sec. 3503.21 Registration and voting after felony conviction.

Ohio law addresses voter registration and cancellation for people incarcerated for felony convictions. The core distinction is whether the person is currently incarcerated for a felony; release generally allows registration or re-registration if other qualifications are met.

Use this as Ohio's core felony voting-rights authority. A specific answer requires current incarceration status, release status, residence, and registration facts.`,
  },
  {
    id: "oh-orc-2961-01-rights-conviction",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OH",
    topicIds: ["voting"],
    citation: "Ohio Rev. Code sec. 2961.01",
    title: "Civil rights and disability after conviction",
    officialUrl: "https://codes.ohio.gov/ohio-revised-code/section-2961.01",
    sourceName: "Ohio Laws",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Ohio Laws official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Ohio Rev. Code sec. 2961.01 Civil rights and disability after conviction.

Ohio law addresses civil disabilities resulting from conviction and restoration of privileges. For voting questions, read this civil-rights context with the election-specific rule in section 3503.21.

Use this as restoration context, not as the only voter eligibility source.`,
  },
  {
    id: "oh-orc-2953-32-sealing-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OH",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Ohio Rev. Code sec. 2953.32",
    title: "Sealing or expungement of conviction records",
    officialUrl: "https://codes.ohio.gov/ohio-revised-code/section-2953.32",
    sourceName: "Ohio Laws",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Ohio Laws official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Ohio Rev. Code sec. 2953.32 Sealing or expungement of conviction records.

Ohio allows eligible conviction records to be sealed or expunged after statutory waiting periods and conditions are met. Eligibility depends on offense type, exclusions, number of convictions, final discharge, waiting period, pending charges, and later convictions.

Use this as Ohio's primary conviction record-relief authority. A specific answer requires the exact offense, disposition, final discharge date, and exclusion analysis.`,
  },
  {
    id: "oh-orc-2953-52-sealing-nonconviction",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OH",
    topicIds: ["expungement"],
    citation: "Ohio Rev. Code sec. 2953.52",
    title: "Sealing records after dismissal, acquittal, or no bill",
    officialUrl: "https://codes.ohio.gov/ohio-revised-code/section-2953.52",
    sourceName: "Ohio Laws",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Ohio Laws official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Ohio Rev. Code sec. 2953.52 Sealing records after dismissal, acquittal, or no bill.

Ohio separately provides record sealing for cases that end without conviction, including dismissal, acquittal, or no bill. Eligibility and procedure differ from conviction sealing or expungement.

Use this for Ohio nonconviction record-relief questions, and pair it with section 2953.32 when the person has a conviction.`,
  },
  {
    id: "oh-orc-2953-33-effect-sealed-record",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OH",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Ohio Rev. Code sec. 2953.33",
    title: "Effect of sealing records",
    officialUrl: "https://codes.ohio.gov/ohio-revised-code/section-2953.33",
    sourceName: "Ohio Laws",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Ohio Laws official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Ohio Rev. Code sec. 2953.33 Effect of sealing records.

Ohio law describes the effect of sealing records and when sealed information may still be inspected or used. The effect matters for employment, housing, licensing, law enforcement, and later criminal justice questions.

Use this after confirming a record has been sealed, and check for any job, license, housing, agency, or law-enforcement exception before giving a specific answer.`,
  },
  {
    id: "oh-orc-4112-02-housing-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OH",
    topicIds: ["housing", "employment"],
    citation: "Ohio Rev. Code sec. 4112.02",
    title: "Unlawful discriminatory practices",
    officialUrl: "https://codes.ohio.gov/ohio-revised-code/section-4112.02",
    sourceName: "Ohio Laws",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Ohio Laws official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Ohio Rev. Code sec. 4112.02 Unlawful discriminatory practices.

Ohio civil-rights law prohibits covered discriminatory practices in employment, housing, public accommodations, and related contexts based on protected characteristics. This is Ohio's core state civil-rights source for housing and employment.

Criminal history is not itself the same as a protected class. Use this with federal HUD guidance, record-relief law, consumer-reporting law, licensing law, and local ordinances where applicable.`,
  },
  {
    id: "oh-orc-5321-04-landlord-obligations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OH",
    topicIds: ["housing"],
    citation: "Ohio Rev. Code sec. 5321.04",
    title: "Landlord obligations",
    officialUrl: "https://codes.ohio.gov/ohio-revised-code/section-5321.04",
    sourceName: "Ohio Laws",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Ohio Laws official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Ohio Rev. Code sec. 5321.04 Landlord obligations.

Ohio landlord-tenant law sets statutory landlord duties involving habitability, repairs, safety, services, and code compliance. These protections can matter when a tenant with a criminal record faces housing instability unrelated to lawful screening.

Use this as a tenant-protection hook, not as a criminal-record screening rule.`,
  },
  {
    id: "oh-orc-9-78-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OH",
    topicIds: ["employment"],
    citation: "Ohio Rev. Code sec. 9.78",
    title: "Occupational licensing and criminal convictions",
    officialUrl: "https://codes.ohio.gov/ohio-revised-code/section-9.78",
    sourceName: "Ohio Laws",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Ohio Laws official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Ohio Rev. Code sec. 9.78 Occupational licensing and criminal convictions.

Ohio law limits how licensing authorities may use criminal convictions in occupational licensing decisions. Analysis depends on the occupation, conviction, relationship to duties, rehabilitation, time elapsed, and any board-specific statute.

Use this as Ohio's occupational-licensing criminal-record authority.`,
  },
  {
    id: "oh-orc-2921-29-failure-disclose-personal-information",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OH",
    topicIds: ["police"],
    citation: "Ohio Rev. Code sec. 2921.29",
    title: "Failure to disclose personal information",
    officialUrl: "https://codes.ohio.gov/ohio-revised-code/section-2921.29",
    sourceName: "Ohio Laws",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Ohio Laws official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Ohio Rev. Code sec. 2921.29 Failure to disclose personal information.

Ohio law requires a person to disclose name, address, or date of birth in specified circumstances, including when lawfully stopped based on reasonable suspicion of a crime. Constitutional limits still control the detention and questioning.

Use this as Ohio's stop-and-identify authority. It does not mean a person must answer every police question or consent to a search.`,
  },
  {
    id: "oh-orc-2933-52-interception-recording",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OH",
    topicIds: ["police"],
    citation: "Ohio Rev. Code sec. 2933.52",
    title: "Interception of wire, oral, or electronic communications",
    officialUrl: "https://codes.ohio.gov/ohio-revised-code/section-2933.52",
    sourceName: "Ohio Laws",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Ohio Laws official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Ohio Rev. Code sec. 2933.52 Interception of wire, oral, or electronic communications.

Ohio law governs interception and disclosure of wire, oral, and electronic communications. Ohio is generally treated as a one-party-consent state for recording conversations, subject to statutory details and privacy expectations.

Use this as Ohio's recording/privacy hook. For recording police, analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "oh-orc-2951-02-probation-community-control",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OH",
    topicIds: ["supervision"],
    citation: "Ohio Rev. Code sec. 2951.02",
    title: "Probation and community control eligibility",
    officialUrl: "https://codes.ohio.gov/ohio-revised-code/section-2951.02",
    sourceName: "Ohio Laws",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Ohio Laws official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Ohio Rev. Code sec. 2951.02 Probation and community control eligibility.

Ohio courts may impose community control sanctions or probation under statutory authority and the written sentencing order. Specific obligations depend on the sentence, offense, court requirements, and supervision order.

Use this as Ohio's probation or community-control framework source, together with the person's written conditions.`,
  },
  {
    id: "oh-orc-2929-15-community-control-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OH",
    topicIds: ["supervision"],
    citation: "Ohio Rev. Code sec. 2929.15",
    title: "Community control sanctions and violations",
    officialUrl: "https://codes.ohio.gov/ohio-revised-code/section-2929.15",
    sourceName: "Ohio Laws",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Ohio Laws official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Ohio Rev. Code sec. 2929.15 Community control sanctions and violations.

Ohio law governs community control sanctions and court responses to violations. Consequences depend on the sentence, conditions, violation allegation, hearing posture, court findings, and available sanctions.

Use this for Ohio community-control or probation violation answers, but verify the written order and current court status before giving specific guidance.`,
  },
  {
    id: "oh-orc-2967-13-parole-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OH",
    topicIds: ["supervision"],
    citation: "Ohio Rev. Code sec. 2967.13",
    title: "Parole eligibility",
    officialUrl: "https://codes.ohio.gov/ohio-revised-code/section-2967.13",
    sourceName: "Ohio Laws",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Ohio Laws official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Ohio Rev. Code sec. 2967.13 Parole eligibility.

Ohio parole eligibility depends on offense, sentence, sentencing law, parole board authority, time served, credits, and written parole or post-release control conditions. Many modern Ohio cases involve post-release control rather than traditional parole.

Use this as Ohio's parole framework source, not as a release-date calculator. A precise answer requires the sentence, offense date, governing sentencing law, and written supervision conditions.`,
  },
  {
    id: "ok-os-26-4-101-voter-registration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OK",
    topicIds: ["voting"],
    citation: "Okla. Stat. tit. 26, sec. 4-101",
    title: "Persons entitled to register to vote",
    officialUrl: "https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST",
    sourceName: "Oklahoma State Courts Network",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "OSCN Oklahoma Statutes source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Okla. Stat. tit. 26, sec. 4-101 Persons entitled to register to vote.

Oklahoma voter registration law sets baseline eligibility and felony-related disqualification rules. For people with felony convictions, the key question is whether the disqualifying period tied to the judgment and sentence has ended.

Use this as Oklahoma's core felony voting-rights authority. A specific answer requires conviction status, sentence length, discharge or completion facts, and current registration eligibility.`,
  },
  {
    id: "ok-os-21-65-civil-rights-conviction",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OK",
    topicIds: ["voting"],
    citation: "Okla. Stat. tit. 21, sec. 65",
    title: "Civil rights affected by conviction",
    officialUrl: "https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST",
    sourceName: "Oklahoma State Courts Network",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "OSCN Oklahoma Statutes source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Okla. Stat. tit. 21, sec. 65 Civil rights affected by conviction.

Oklahoma law addresses civil disabilities resulting from conviction. For voting questions, read this civil-rights context with the election-specific registration rule in title 26, section 4-101.

Use this as conviction-related civil-rights context, not as the only voter eligibility source.`,
  },
  {
    id: "ok-os-22-18-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OK",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Okla. Stat. tit. 22, sec. 18",
    title: "Expungement of criminal records",
    officialUrl: "https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST",
    sourceName: "Oklahoma State Courts Network",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "OSCN Oklahoma Statutes source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Okla. Stat. tit. 22, sec. 18 Expungement of criminal records.

Oklahoma allows expungement for eligible records when statutory criteria are met. Eligibility depends on disposition, offense type, sentence completion, waiting period, pardon or deferred judgment status, prior record, pending charges, and statutory exclusions.

Use this as Oklahoma's primary expungement authority. A specific answer requires the exact offense, disposition, sentence completion date, and exclusion analysis.`,
  },
  {
    id: "ok-os-22-19-expungement-effect",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OK",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Okla. Stat. tit. 22, sec. 19",
    title: "Effect of expungement order",
    officialUrl: "https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST",
    sourceName: "Oklahoma State Courts Network",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "OSCN Oklahoma Statutes source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Okla. Stat. tit. 22, sec. 19 Effect of expungement order.

Oklahoma law describes the effect of expungement and when expunged records may still be accessed, disclosed, or considered under exceptions. The effect matters for employment, housing, licensing, law enforcement, and later criminal justice questions.

Use this after confirming an Oklahoma expungement order exists, and check for any job, license, housing, agency, or law-enforcement exception before giving a specific answer.`,
  },
  {
    id: "ok-os-25-1452-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OK",
    topicIds: ["housing"],
    citation: "Okla. Stat. tit. 25, sec. 1452",
    title: "Discriminatory housing practices",
    officialUrl: "https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST",
    sourceName: "Oklahoma State Courts Network",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "OSCN Oklahoma Statutes source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Okla. Stat. tit. 25, sec. 1452 Discriminatory housing practices.

Oklahoma fair-housing law prohibits covered discriminatory housing practices based on protected characteristics. This is Oklahoma's operative state fair-housing statute.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, expungement law, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "ok-os-41-118-landlord-obligations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OK",
    topicIds: ["housing"],
    citation: "Okla. Stat. tit. 41, sec. 118",
    title: "Landlord duties",
    officialUrl: "https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST",
    sourceName: "Oklahoma State Courts Network",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "OSCN Oklahoma Statutes source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Okla. Stat. tit. 41, sec. 118 Landlord duties.

Oklahoma landlord-tenant law sets statutory landlord duties involving premises, services, repairs, and compliance with the rental agreement and law. These protections can matter when a tenant with a criminal record faces housing instability unrelated to lawful screening.

Use this as a tenant-protection hook, not as a criminal-record screening rule.`,
  },
  {
    id: "ok-os-25-1302-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OK",
    topicIds: ["employment"],
    citation: "Okla. Stat. tit. 25, sec. 1302",
    title: "Discriminatory employment practices",
    officialUrl: "https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST",
    sourceName: "Oklahoma State Courts Network",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "OSCN Oklahoma Statutes source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Okla. Stat. tit. 25, sec. 1302 Discriminatory employment practices.

Oklahoma civil-rights law prohibits covered employment discrimination based on protected characteristics. It is useful employment-rights context, but criminal history is not itself a protected class under this source.

For criminal-record employment questions, use this with expungement law, occupational-licensing rules, federal law, and job-specific background-check requirements.`,
  },
  {
    id: "ok-os-59-4000-1-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OK",
    topicIds: ["employment"],
    citation: "Okla. Stat. tit. 59, sec. 4000.1",
    title: "Occupational licensing and criminal records",
    officialUrl: "https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST",
    sourceName: "Oklahoma State Courts Network",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "OSCN Oklahoma Statutes source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Okla. Stat. tit. 59, sec. 4000.1 Occupational licensing and criminal records.

Oklahoma occupational licensing law limits how licensing entities may use criminal history in licensing decisions. The analysis depends on the occupation, conviction, relationship to duties, rehabilitation, time elapsed, and any board-specific statute.

Use this as Oklahoma's occupational-licensing criminal-record authority.`,
  },
  {
    id: "ok-os-22-196-arrest-without-warrant",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OK",
    topicIds: ["police"],
    citation: "Okla. Stat. tit. 22, sec. 196",
    title: "Arrest without warrant",
    officialUrl: "https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST",
    sourceName: "Oklahoma State Courts Network",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "OSCN Oklahoma Statutes source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Okla. Stat. tit. 22, sec. 196 Arrest without warrant.

Oklahoma law sets circumstances when an officer may arrest without a warrant. This is a statutory arrest-power hook and must be used with federal and state constitutional limits on stops, searches, questioning, and arrests.

Use this for Oklahoma police encounter answers as statutory context, not as a complete search-and-seizure rule.`,
  },
  {
    id: "ok-os-13-176-3-interception-recording",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OK",
    topicIds: ["police"],
    citation: "Okla. Stat. tit. 13, sec. 176.3",
    title: "Interception of wire, oral, or electronic communications",
    officialUrl: "https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST",
    sourceName: "Oklahoma State Courts Network",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "OSCN Oklahoma Statutes source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Okla. Stat. tit. 13, sec. 176.3 Interception of wire, oral, or electronic communications.

Oklahoma law governs interception and disclosure of wire, oral, and electronic communications. Oklahoma is generally treated as a one-party-consent state for recording conversations, subject to statutory details and privacy expectations.

Use this as Oklahoma's recording/privacy hook. For recording police, analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "ok-os-22-991a-probation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OK",
    topicIds: ["supervision"],
    citation: "Okla. Stat. tit. 22, sec. 991a",
    title: "Suspended sentences and probation",
    officialUrl: "https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST",
    sourceName: "Oklahoma State Courts Network",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "OSCN Oklahoma Statutes source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Okla. Stat. tit. 22, sec. 991a Suspended sentences and probation.

Oklahoma courts may impose suspended sentences, deferred sentences, and probation conditions authorized by statute and the written court order. Specific obligations depend on the sentence, offense, court requirements, and supervision order.

Use this as Oklahoma's probation framework source, together with the person's written supervision conditions.`,
  },
  {
    id: "ok-os-22-991b-probation-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OK",
    topicIds: ["supervision"],
    citation: "Okla. Stat. tit. 22, sec. 991b",
    title: "Revocation of suspended sentence or probation",
    officialUrl: "https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST",
    sourceName: "Oklahoma State Courts Network",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "OSCN Oklahoma Statutes source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Okla. Stat. tit. 22, sec. 991b Revocation of suspended sentence or probation.

Oklahoma law governs court action after alleged violations of probation, suspended sentence, or deferred sentence terms. Consequences depend on the sentence, conditions, violation allegation, hearing posture, court findings, and available sanctions.

Use this for Oklahoma supervision violation answers, but verify the written order and current court status before giving specific guidance.`,
  },
  {
    id: "ok-os-57-332-7-parole-board",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OK",
    topicIds: ["supervision"],
    citation: "Okla. Stat. tit. 57, sec. 332.7",
    title: "Pardon and Parole Board powers and parole consideration",
    officialUrl: "https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST",
    sourceName: "Oklahoma State Courts Network",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "OSCN Oklahoma Statutes source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `Okla. Stat. tit. 57, sec. 332.7 Pardon and Parole Board powers and parole consideration.

Oklahoma parole decisions depend on offense, sentence, eligibility, board authority, risk and rehabilitation factors, and written parole conditions. This statute provides a framework source for parole consideration and board action.

Use this as Oklahoma's parole framework source, not as a release-date calculator. A precise answer requires the sentence, offense date, board decision, and written supervision conditions.`,
  },
  {
    id: "or-ors-137-281-voting-rights-incarceration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OR",
    topicIds: ["voting"],
    citation: "Or. Rev. Stat. sec. 137.281",
    title: "Withdrawal and restoration of rights during incarceration",
    officialUrl: "https://www.oregonlegislature.gov/bills_laws/ors/ors137.html",
    sourceName: "Oregon Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Oregon Revised Statutes source checked June 27, 2026; exact section verified through ORS section mirror",
    reviewStatus: "approved",
    text: `Or. Rev. Stat. sec. 137.281 Withdrawal of rights during term of incarceration; restoration of rights.

Oregon withdraws specified rights, including the right to vote, from a person sentenced to a felony term of incarceration until release from incarceration or set-aside of the conviction. The statute also addresses federal imprisonment in Oregon and automatic restoration after release, subject to later imprisonment for parole violation.

Use this as Oregon's core felony voting-rights authority. A specific answer requires whether the person is currently incarcerated for a felony, has been released, is on probation, parole, or post-prison supervision, or has had the conviction set aside.`,
  },
  {
    id: "or-ors-247-035-voter-residence",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OR",
    topicIds: ["voting"],
    citation: "Or. Rev. Stat. sec. 247.035",
    title: "Rules for determining residence for voting",
    officialUrl: "https://www.oregonlegislature.gov/bills_laws/ors/ors247.html",
    sourceName: "Oregon Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Oregon Revised Statutes source checked June 27, 2026; exact section verified through ORS section mirror",
    reviewStatus: "approved",
    text: `Or. Rev. Stat. sec. 247.035 Rules to consider in determining residence of person for voting purposes.

Oregon law gives election officials rules for determining voter residence and qualifications, including where habitation is fixed, temporary absences, moves to another state, and residence evidence.

Use this with ORS 137.281 when answering voting questions for people returning from incarceration, homelessness, supervision, or unstable housing. It is a residence and registration rule, not the felony-disqualification rule by itself.`,
  },
  {
    id: "or-ors-137-225-set-aside",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OR",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Or. Rev. Stat. sec. 137.225",
    title: "Order setting aside conviction or record of criminal charge",
    officialUrl: "https://www.oregonlegislature.gov/bills_laws/ors/ors137.html",
    sourceName: "Oregon Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Oregon Revised Statutes source checked June 27, 2026; exact section verified through ORS section mirror",
    reviewStatus: "approved",
    text: `Or. Rev. Stat. sec. 137.225 Order setting aside conviction or record of criminal charge.

Oregon allows eligible convictions, arrests, citations, charges, and judgments to be set aside when statutory prerequisites are met. Eligibility depends on the offense, disposition, waiting period, later convictions or arrests, restitution or financial obligations where relevant, and statutory exclusions.

Use this as Oregon's primary record-clearing authority for expungement-style questions. A specific answer requires the charge, conviction class, disposition date, sentence completion facts, later record, and exclusion analysis.`,
  },
  {
    id: "or-ors-659a-421-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OR",
    topicIds: ["housing"],
    citation: "Or. Rev. Stat. sec. 659A.421",
    title: "Discrimination in selling, renting or leasing real property prohibited",
    officialUrl: "https://www.oregonlegislature.gov/bills_laws/ors/ors659A.html",
    sourceName: "Oregon Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Oregon Revised Statutes source checked June 27, 2026; exact section verified through ORS section mirror",
    reviewStatus: "approved",
    text: `Or. Rev. Stat. sec. 659A.421 Discrimination in selling, renting or leasing real property prohibited.

Oregon fair-housing law prohibits covered discriminatory practices in real-property sale, rental, and leasing based on protected characteristics. This is Oregon's core state fair-housing authority.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, set-aside law, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "or-ors-90-320-landlord-habitability",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OR",
    topicIds: ["housing"],
    citation: "Or. Rev. Stat. sec. 90.320",
    title: "Landlord duty to maintain habitable premises",
    officialUrl: "https://www.oregonlegislature.gov/bills_laws/ors/ors090.html",
    sourceName: "Oregon Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Oregon Revised Statutes source checked June 27, 2026; exact section verified through ORS section mirror",
    reviewStatus: "approved",
    text: `Or. Rev. Stat. sec. 90.320 Landlord to maintain premises in habitable condition.

Oregon landlord-tenant law requires landlords to maintain rental dwellings in habitable condition, including basic weatherproofing, plumbing, water, heat, electrical systems, safe common areas, locks, and other statutory habitability items.

Use this as Oregon's tenant-protection hook when a person with a criminal record is already housed and faces unsafe conditions. It is not a criminal-record screening rule.`,
  },
  {
    id: "or-ors-659a-030-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OR",
    topicIds: ["employment"],
    citation: "Or. Rev. Stat. sec. 659A.030",
    title: "Unlawful employment discrimination",
    officialUrl: "https://www.oregonlegislature.gov/bills_laws/ors/ors659A.html",
    sourceName: "Oregon Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Oregon Revised Statutes source checked June 27, 2026; exact section verified through ORS section mirror",
    reviewStatus: "approved",
    text: `Or. Rev. Stat. sec. 659A.030 Discrimination because of protected characteristics prohibited.

Oregon employment law prohibits covered discrimination in employment based on protected characteristics and includes expunged juvenile record among listed protections. It is useful employment-rights context, but adult criminal history is not itself a general protected class under this source.

For criminal-record employment questions, use this with Oregon set-aside law, occupational-licensing rules, federal law, local fair-chance ordinances, and job-specific background-check requirements.`,
  },
  {
    id: "or-ors-670-280-licensing-convictions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OR",
    topicIds: ["employment"],
    citation: "Or. Rev. Stat. sec. 670.280",
    title: "Occupational licensing and criminal convictions",
    officialUrl: "https://www.oregonlegislature.gov/bills_laws/ors/ors670.html",
    sourceName: "Oregon Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Oregon Revised Statutes source checked June 27, 2026; exact section verified through ORS section mirror",
    reviewStatus: "approved",
    text: `Or. Rev. Stat. sec. 670.280 Denial, suspension or revocation of license based on criminal conviction.

Oregon occupational licensing law limits denial, suspension, revocation, or discipline based on criminal conviction and asks whether conduct is substantially related to the fitness and ability of the applicant or licensee. Board-specific statutes and exceptions may also apply.

Use this as Oregon's occupational-licensing criminal-record authority.`,
  },
  {
    id: "or-ors-131-615-stopping-persons",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OR",
    topicIds: ["police"],
    citation: "Or. Rev. Stat. sec. 131.615",
    title: "Stopping of persons",
    officialUrl: "https://www.oregonlegislature.gov/bills_laws/ors/ors131.html",
    sourceName: "Oregon Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Oregon Revised Statutes source checked June 27, 2026; exact section verified through ORS section mirror",
    reviewStatus: "approved",
    text: `Or. Rev. Stat. sec. 131.615 Stopping of persons.

Oregon law authorizes a peace officer who reasonably suspects a person has committed or is about to commit a crime to stop the person and make reasonable inquiry after identifying as a peace officer. The detention must stay near the stop, last no longer than reasonable, and be limited by the circumstances, safety, and lawful consent rules.

Use this as Oregon's stop authority. It must be read with federal and Oregon constitutional search-and-seizure limits, and it does not mean a person must answer every question or consent to a search.`,
  },
  {
    id: "or-ors-165-540-recording-communications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OR",
    topicIds: ["police"],
    citation: "Or. Rev. Stat. sec. 165.540",
    title: "Obtaining contents of communications",
    officialUrl: "https://www.oregonlegislature.gov/bills_laws/ors/ors165.html",
    sourceName: "Oregon Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Oregon Revised Statutes source checked June 27, 2026; exact section verified through ORS section mirror",
    reviewStatus: "approved",
    text: `Or. Rev. Stat. sec. 165.540 Obtaining contents of communications.

Oregon law governs interception and recording of wire, electronic, and oral communications. Oregon's recording rules are more situation-specific than a simple one-party or all-party label, especially for in-person oral communications and listed exceptions.

Use this as Oregon's recording/privacy hook. For recording police, analyze public setting, notice, interference with official duties, privacy expectations, statutory exceptions, and First Amendment public-recording principles.`,
  },
  {
    id: "or-ors-137-540-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OR",
    topicIds: ["supervision"],
    citation: "Or. Rev. Stat. sec. 137.540",
    title: "Conditions of probation",
    officialUrl: "https://www.oregonlegislature.gov/bills_laws/ors/ors137.html",
    sourceName: "Oregon Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Oregon Revised Statutes source checked June 27, 2026; exact section verified through ORS section mirror",
    reviewStatus: "approved",
    text: `Or. Rev. Stat. sec. 137.540 Conditions of probation.

Oregon law authorizes general and special probation conditions, including supervision, reporting, law-abiding conduct, treatment, no-contact, search, financial, and offense-specific terms where ordered. The operative requirements are the statute plus the written judgment and supervision conditions.

Use this as Oregon's probation framework source, together with the person's written conditions.`,
  },
  {
    id: "or-ors-137-545-probation-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OR",
    topicIds: ["supervision"],
    citation: "Or. Rev. Stat. sec. 137.545",
    title: "Period of probation and proceedings for violation",
    officialUrl: "https://www.oregonlegislature.gov/bills_laws/ors/ors137.html",
    sourceName: "Oregon Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Oregon Revised Statutes source checked June 27, 2026; exact section verified through ORS section mirror",
    reviewStatus: "approved",
    text: `Or. Rev. Stat. sec. 137.545 Period of probation; discharge from probation; proceedings in case of violation of conditions.

Oregon law governs probation duration, discharge, and proceedings when a violation is alleged. Consequences depend on the judgment, supervision status, alleged violation, hearing posture, court findings, and available sanctions.

Use this for Oregon probation violation answers, but verify the written order and current court status before giving specific guidance.`,
  },
  {
    id: "or-ors-144-102-post-prison-supervision",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OR",
    topicIds: ["supervision"],
    citation: "Or. Rev. Stat. sec. 144.102",
    title: "Conditions of post-prison supervision",
    officialUrl: "https://www.oregonlegislature.gov/bills_laws/ors/ors144.html",
    sourceName: "Oregon Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Oregon Revised Statutes source checked June 27, 2026; exact section verified through ORS section mirror",
    reviewStatus: "approved",
    text: `Or. Rev. Stat. sec. 144.102 Conditions of post-prison supervision.

Oregon post-prison supervision conditions are specified in writing by the State Board of Parole and Post-Prison Supervision or local supervisory authority. Conditions may include reporting, supervision, law-abiding conduct, weapons restrictions, special conditions, residence terms, treatment, search conditions, and offense-specific requirements.

Use this as Oregon's parole or post-prison supervision framework source, not as a release-date calculator. A precise answer requires the sentence, release plan, board or supervisory authority conditions, and written supervision paperwork.`,
  },
  {
    id: "or-ors-144-106-post-prison-violations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "OR",
    topicIds: ["supervision"],
    citation: "Or. Rev. Stat. sec. 144.106",
    title: "Violation of post-prison supervision conditions",
    officialUrl: "https://www.oregonlegislature.gov/bills_laws/ors/ors144.html",
    sourceName: "Oregon Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Oregon Revised Statutes source checked June 27, 2026; exact section verified through ORS section mirror",
    reviewStatus: "approved",
    text: `Or. Rev. Stat. sec. 144.106 Violation of post-prison supervision conditions; sanctions.

Oregon law governs responses to violations of post-prison supervision conditions and available sanctions. Consequences depend on the supervision authority, written conditions, alleged violation, hearing process, and sanction rules.

Use this for Oregon post-prison supervision violation answers alongside ORS 144.102 and the person's written conditions.`,
  },
  {
    id: "pa-const-art-vii-sec-1-elector-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "PA",
    topicIds: ["voting"],
    citation: "Pa. Const. art. VII, sec. 1",
    title: "Qualifications of electors",
    officialUrl: "https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/00/00.007..HTM",
    sourceName: "Pennsylvania General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Pennsylvania Constitution official source checked June 27, 2026",
    reviewStatus: "approved",
    text: `Pa. Const. art. VII, sec. 1 Qualifications of electors.

Pennsylvania's Constitution sets baseline voter qualifications, including citizenship and residence requirements, subject to registration laws enacted by the General Assembly. Pennsylvania generally restores voting rights after release from incarceration for a felony, so parole or probation alone does not bar voting under the usual statewide rule.

Use this as Pennsylvania's constitutional voting baseline. For a specific answer, confirm citizenship, age, residence, registration deadline, and whether the person is currently incarcerated for a felony.`,
  },
  {
    id: "pa-25-pacs-1301-voter-registration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "PA",
    topicIds: ["voting"],
    citation: "25 Pa.C.S. sec. 1301",
    title: "Qualifications to register",
    officialUrl: "https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/25/00.013.001.000..HTM",
    sourceName: "Pennsylvania General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Pennsylvania consolidated statutes source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `25 Pa.C.S. sec. 1301 Qualifications to register.

Pennsylvania voter registration law implements the state's voter qualification rules. For people with felony convictions, the important practical line is current incarceration for a felony versus release to the community.

Use this with Pa. Const. art. VII, sec. 1 for Pennsylvania voting-rights answers. A specific answer requires current incarceration status, residence, age, citizenship, and registration timing.`,
  },
  {
    id: "pa-18-pacs-9122-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "PA",
    topicIds: ["expungement"],
    citation: "18 Pa.C.S. sec. 9122",
    title: "Expungement",
    officialUrl: "https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/18/00.091.022.000..HTM",
    sourceName: "Pennsylvania General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Pennsylvania consolidated statutes official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `18 Pa.C.S. sec. 9122 Expungement.

Pennsylvania expungement law identifies when criminal history record information must or may be expunged, including specified nonconviction records, pardons, certain summary offenses, older records, and other statutory categories. Eligibility depends on the disposition, offense, age, waiting period, pardon status, sentence completion, pending proceedings, and listed exclusions.

Use this as Pennsylvania's core expungement authority. A specific answer requires the exact charge, disposition, sentence completion facts, age or pardon facts where relevant, and exclusion analysis.`,
  },
  {
    id: "pa-18-pacs-9122-1-limited-access",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "PA",
    topicIds: ["expungement", "employment", "housing"],
    citation: "18 Pa.C.S. sec. 9122.1",
    title: "Petition for limited access",
    officialUrl: "https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/18/00.091.022.001..HTM",
    sourceName: "Pennsylvania General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Pennsylvania consolidated statutes official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `18 Pa.C.S. sec. 9122.1 Petition for limited access.

Pennsylvania allows eligible people to petition for limited access to certain criminal history record information after specified conviction-free periods and satisfaction of restitution and other statutory requirements. Limited access restricts dissemination of covered records but includes exceptions and does not erase every record for every purpose.

Use this for Pennsylvania record-sealing questions and for employment or housing screening questions where limited access may change what a noncriminal justice agency can see.`,
  },
  {
    id: "pa-18-pacs-9122-2-clean-slate",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "PA",
    topicIds: ["expungement", "employment", "housing"],
    citation: "18 Pa.C.S. sec. 9122.2",
    title: "Clean slate limited access",
    officialUrl: "https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/18/00.091.022.002..HTM",
    sourceName: "Pennsylvania General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Pennsylvania consolidated statutes official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `18 Pa.C.S. sec. 9122.2 Clean slate limited access.

Pennsylvania's clean slate limited access statute covers specified misdemeanor, qualifying offense, nonconviction, summary offense, and conditional-pardon records when statutory criteria are met. The law includes timing, restitution, exception, validation, and dissemination rules.

Use this as Pennsylvania's automatic or administrative clean-slate authority, especially when explaining whether older records may be shielded from employment or housing screening.`,
  },
  {
    id: "pa-43-ps-955-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "PA",
    topicIds: ["housing"],
    citation: "43 P.S. sec. 955",
    title: "Unlawful discriminatory practices under the Pennsylvania Human Relations Act",
    officialUrl: "https://www.legis.state.pa.us/WU01/LI/LI/US/HTM/1955/0/0222..HTM",
    sourceName: "Pennsylvania General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Pennsylvania Human Relations Act source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `43 P.S. sec. 955 Unlawful discriminatory practices under the Pennsylvania Human Relations Act.

The Pennsylvania Human Relations Act prohibits covered discrimination in housing and commercial property transactions based on protected characteristics. This is Pennsylvania's main state fair-housing civil-rights authority.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, Pennsylvania limited access and clean slate rules, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "pa-68-ps-250-501-notice-to-quit",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "PA",
    topicIds: ["housing"],
    citation: "68 P.S. sec. 250.501",
    title: "Notice to quit",
    officialUrl: "https://www.legis.state.pa.us/WU01/LI/LI/US/HTM/1951/0/0020..HTM",
    sourceName: "Pennsylvania General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Pennsylvania Landlord and Tenant Act source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `68 P.S. sec. 250.501 Notice to quit.

Pennsylvania landlord-tenant law sets notice-to-quit rules for certain eviction proceedings. This can matter when a tenant with a criminal record faces housing loss, lease termination, or eviction after already being housed.

Use this as a Pennsylvania eviction-procedure hook, not as a criminal-record screening rule. A specific answer requires the lease, basis for termination, notice language, tenancy type, local rules, and any public or subsidized housing overlay.`,
  },
  {
    id: "pa-18-pacs-9125-employment-records",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "PA",
    topicIds: ["employment"],
    citation: "18 Pa.C.S. sec. 9125",
    title: "Use of records for employment",
    officialUrl: "https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/18/00.091.025.000..HTM",
    sourceName: "Pennsylvania General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Pennsylvania consolidated statutes official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `18 Pa.C.S. sec. 9125 Use of records for employment.

Pennsylvania limits how employers may use criminal history record information in hiring. Felony and misdemeanor convictions may be considered only to the extent they relate to the applicant's suitability for the position, and an employer must give written notice if a hiring decision is based in whole or part on criminal history information.

Use this as Pennsylvania's core criminal-record employment-screening authority.`,
  },
  {
    id: "pa-18-pacs-9124-licensing-records",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "PA",
    topicIds: ["employment"],
    citation: "18 Pa.C.S. sec. 9124",
    title: "Use of records by licensing agencies",
    officialUrl: "https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/18/00.091.024.000..HTM",
    sourceName: "Pennsylvania General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Pennsylvania consolidated statutes official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `18 Pa.C.S. sec. 9124 Use of records by licensing agencies.

Pennsylvania limits how licensing agencies may use criminal records. Licensing bodies may consider convictions, but certain records may not be used, and convictions generally must relate to suitability for the license, certificate, registration, or permit. The statute also points to additional licensed-occupation rules in Title 63.

Use this as Pennsylvania's occupational-licensing criminal-record authority, with board-specific statutes for the exact occupation.`,
  },
  {
    id: "pa-18-pacs-4914-false-identification",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "PA",
    topicIds: ["police"],
    citation: "18 Pa.C.S. sec. 4914",
    title: "False identification to law enforcement authorities",
    officialUrl: "https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/18/00.049.014.000..HTM",
    sourceName: "Pennsylvania General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Pennsylvania consolidated statutes official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `18 Pa.C.S. sec. 4914 False identification to law enforcement authorities.

Pennsylvania makes it an offense to furnish law enforcement authorities false information about identity after an officer in uniform or an officer who has identified himself informs the person that the person is the subject of an official investigation of a law violation.

Use this as Pennsylvania's identity-related police encounter hook. It does not itself create a general duty to answer every question or consent to a search; constitutional stop, detention, and search rules still control.`,
  },
  {
    id: "pa-18-pacs-5704-recording-exceptions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "PA",
    topicIds: ["police"],
    citation: "18 Pa.C.S. sec. 5704",
    title: "Exceptions to prohibition of interception and disclosure of communications",
    officialUrl: "https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/18/00.057.004.000..HTM",
    sourceName: "Pennsylvania General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Pennsylvania consolidated statutes official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `18 Pa.C.S. sec. 5704 Exceptions to prohibition of interception and disclosure of communications.

Pennsylvania's wiretap law governs interception and recording of wire, electronic, and oral communications and includes exceptions. Pennsylvania is often treated as an all-party-consent jurisdiction for private oral communications, but recording police in public also requires analysis of privacy expectations, interference, and constitutional principles.

Use this as Pennsylvania's recording/privacy hook. For recording police, analyze public setting, notice, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "pa-42-pacs-9754-probation-order",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "PA",
    topicIds: ["supervision"],
    citation: "42 Pa.C.S. sec. 9754",
    title: "Order of probation",
    officialUrl: "https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/42/00.097.054.000..HTM",
    sourceName: "Pennsylvania General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Pennsylvania consolidated statutes official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `42 Pa.C.S. sec. 9754 Order of probation.

Pennsylvania courts imposing probation must specify the supervision term and supervising authority, and attach reasonable conditions authorized by law. Sentence after a violation cannot be fixed before a finding on the record that a violation occurred.

Use this as Pennsylvania's probation order framework source, together with the person's written sentencing order and probation conditions.`,
  },
  {
    id: "pa-42-pacs-9763-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "PA",
    topicIds: ["supervision"],
    citation: "42 Pa.C.S. sec. 9763",
    title: "Conditions of probation",
    officialUrl: "https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/42/00.097.063.000..HTM",
    sourceName: "Pennsylvania General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Pennsylvania consolidated statutes official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `42 Pa.C.S. sec. 9763 Conditions of probation.

Pennsylvania probation conditions must be assessed and ordered based on individualized circumstances and may include work, education, treatment, reporting, restitution, firearms restrictions, address or employment reporting, drug or alcohol treatment, and other conditions reasonably related to rehabilitation and public protection.

Use this as Pennsylvania's probation conditions authority, together with the exact written conditions in the person's case.`,
  },
  {
    id: "pa-61-pacs-6137-parole-power",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "PA",
    topicIds: ["supervision"],
    citation: "61 Pa.C.S. sec. 6137",
    title: "Parole power",
    officialUrl: "https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/61/00.061.037.000..HTM",
    sourceName: "Pennsylvania General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Pennsylvania consolidated statutes official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `61 Pa.C.S. sec. 6137 Parole power.

Pennsylvania parole decisions depend on board authority, sentencing minimums and maximums, statutory criteria, guidelines, institutional information, programming, offense type, and public-safety considerations. The board's parole power generally cannot be exercised before expiration of the minimum term unless another specific statute applies.

Use this as Pennsylvania's parole eligibility and board-authority framework source, not as a release-date calculator.`,
  },
  {
    id: "pa-61-pacs-6138-parole-violations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "PA",
    topicIds: ["supervision"],
    citation: "61 Pa.C.S. sec. 6138",
    title: "Violation of terms of parole",
    officialUrl: "https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/61/00.061.038.000..HTM",
    sourceName: "Pennsylvania General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Pennsylvania consolidated statutes official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `61 Pa.C.S. sec. 6138 Violation of terms of parole.

Pennsylvania law governs parole violations, including convicted parole violators, technical parole violators, detention, recommitment, credit, reparole, and graduated or community-based sanctions. Consequences depend on whether the violation is a new conviction, technical violation, absconding, safety threat, weapon, sexual, assaultive, or programming-related violation.

Use this for Pennsylvania parole violation answers, but verify the written parole conditions, violation notice, custody status, and board or court posture.`,
  },
  {
    id: "ri-gl-17-9-2-3-voting-restoration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "RI",
    topicIds: ["voting"],
    citation: "R.I. Gen. Laws sec. 17-9.2-3",
    title: "Restoration of voting rights",
    officialUrl: "https://webserver.rilegislature.gov/Statutes/TITLE17/17-9.2/17-9.2-3.htm",
    sourceName: "Rhode Island General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Rhode Island General Laws official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `R.I. Gen. Laws sec. 17-9.2-3 Restoration of voting rights.

Rhode Island restores voting rights when a person who lost the right to vote because of incarceration upon a felony conviction is discharged from incarceration. The law states that conviction results in loss of the right to vote only if and for as long as the person is incarcerated, and that voting rights are restored upon discharge. It also requires release-process voter registration assistance and public education, including notice that probationers and parolees have restored voting rights.

Use this as Rhode Island's core felony voting-rights authority. A specific answer requires whether the person is currently incarcerated for a felony, has been discharged from incarceration, and meets ordinary voter registration requirements.`,
  },
  {
    id: "ri-gl-12-1-3-2-expungement-motion",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "RI",
    topicIds: ["expungement"],
    citation: "R.I. Gen. Laws sec. 12-1.3-2",
    title: "Motion for expungement",
    officialUrl: "https://webserver.rilegislature.gov/Statutes/TITLE12/12-1.3/12-1.3-2.htm",
    sourceName: "Rhode Island General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Rhode Island General Laws official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `R.I. Gen. Laws sec. 12-1.3-2 Motion for expungement.

Rhode Island allows eligible first offenders and some people with multiple misdemeanors to file motions for expungement, subject to offense exclusions, waiting periods, sentence completion, and payment or waiver of court-imposed financial obligations. The statute includes different timing for misdemeanors, felonies, deferred sentences, and decriminalized offenses.

Use this as Rhode Island's primary expungement eligibility authority. A specific answer requires the exact offense, disposition, number of convictions, sentence completion date, financial obligations, and exclusion analysis.`,
  },
  {
    id: "ri-gl-12-1-3-3-expungement-criteria",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "RI",
    topicIds: ["expungement"],
    citation: "R.I. Gen. Laws sec. 12-1.3-3",
    title: "Expungement notice, hearing, and criteria",
    officialUrl: "https://webserver.rilegislature.gov/Statutes/TITLE12/12-1.3/12-1.3-3.htm",
    sourceName: "Rhode Island General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Rhode Island General Laws official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `R.I. Gen. Laws sec. 12-1.3-3 Motion for expungement; notice; hearing; criteria for granting.

Rhode Island requires notice to the attorney general and the police department and a court hearing before conviction records are expunged. The court considers recent arrest or conviction history, pending proceedings, court-imposed financial obligations, good moral character, rehabilitation, public interest, and special deferred-sentence or decriminalized-offense rules.

Use this with section 12-1.3-2 when explaining whether the court may grant expungement.`,
  },
  {
    id: "ri-gl-12-1-3-4-expungement-effect",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "RI",
    topicIds: ["expungement", "employment", "housing"],
    citation: "R.I. Gen. Laws sec. 12-1.3-4",
    title: "Effect of expungement",
    officialUrl: "https://webserver.rilegislature.gov/Statutes/TITLE12/12-1.3/12-1.3-4.htm",
    sourceName: "Rhode Island General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Rhode Island General Laws official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `R.I. Gen. Laws sec. 12-1.3-4 Effect of expungement of records; access to expunged records; wrongful disclosure.

Rhode Island law releases a person with an expunged conviction from penalties and disabilities resulting from the conviction, subject to later-sentencing use. For employment, licensing, civil rights, privileges, or witness appearances, a person whose conviction was expunged may generally state that they were never convicted of the crime, with listed exceptions for law enforcement, bar admission, teaching, coaching, early childhood education, and other statutory access.

Use this after confirming a Rhode Island expungement order exists, especially for employment, licensing, housing, and application-disclosure questions.`,
  },
  {
    id: "ri-gl-34-37-4-fair-housing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "RI",
    topicIds: ["housing"],
    citation: "R.I. Gen. Laws sec. 34-37-4",
    title: "Unlawful housing practices",
    officialUrl: "https://webserver.rilegislature.gov/Statutes/TITLE34/34-37/34-37-4.htm",
    sourceName: "Rhode Island General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Rhode Island General Laws official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `R.I. Gen. Laws sec. 34-37-4 Unlawful housing practices.

Rhode Island fair-housing law prohibits covered discriminatory housing practices based on protected characteristics, including race, color, religion, sex, sexual orientation, gender identity or expression, marital status, lawful source of income, military status, country of ancestral origin, disability, age, familial status, and specified domestic-abuse related status.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, expungement law, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "ri-gl-34-18-22-landlord-maintenance",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "RI",
    topicIds: ["housing"],
    citation: "R.I. Gen. Laws sec. 34-18-22",
    title: "Landlord to maintain premises",
    officialUrl: "https://webserver.rilegislature.gov/Statutes/TITLE34/34-18/34-18-22.htm",
    sourceName: "Rhode Island General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Rhode Island General Laws official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `R.I. Gen. Laws sec. 34-18-22 Landlord to maintain premises.

Rhode Island landlord-tenant law requires landlords to comply with housing codes affecting health and safety, make repairs necessary to keep premises fit and habitable, maintain common areas and supplied systems, provide waste removal, water, hot water, heat, and specified liability insurance.

Use this as Rhode Island's tenant-protection hook when a person with a criminal record is already housed and faces unsafe conditions. It is not a criminal-record screening rule.`,
  },
  {
    id: "ri-gl-28-5-7-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "RI",
    topicIds: ["employment"],
    citation: "R.I. Gen. Laws sec. 28-5-7",
    title: "Unlawful employment practices",
    officialUrl: "https://webserver.rilegislature.gov/Statutes/TITLE28/28-5/28-5-7.htm",
    sourceName: "Rhode Island General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Rhode Island General Laws official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `R.I. Gen. Laws sec. 28-5-7 Unlawful employment practices.

Rhode Island fair employment law prohibits covered employment discrimination based on protected characteristics and includes criminal-history application limits. Employers generally may not include application questions or otherwise inquire before employment about whether an applicant has been arrested, charged, or convicted, subject to law-enforcement jobs, mandatory disqualification laws, and bond-related exceptions.

Use this as Rhode Island's core employment civil-rights and ban-the-box authority, with job-specific statutes for roles requiring background checks.`,
  },
  {
    id: "ri-gl-28-6-14-1-criminal-history-applications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "RI",
    topicIds: ["employment"],
    citation: "R.I. Gen. Laws sec. 28-6.14-1",
    title: "Criminal history on application for employment",
    officialUrl: "https://webserver.rilegislature.gov/Statutes/TITLE28/28-6.14/28-6.14-1.htm",
    sourceName: "Rhode Island General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Rhode Island General Laws official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `R.I. Gen. Laws sec. 28-6.14-1 Criminal history on application for employment.

Rhode Island gives the director of labor and training authority to investigate and enforce complaints when an employer includes prohibited criminal-history questions on employment applications. The statute includes exceptions when law or regulation creates mandatory or presumptive disqualification or when bonding requirements would disqualify a person with specified convictions.

Use this with section 28-5-7 for Rhode Island ban-the-box and criminal-history application questions.`,
  },
  {
    id: "ri-gl-12-7-1-temporary-detention",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "RI",
    topicIds: ["police"],
    citation: "R.I. Gen. Laws sec. 12-7-1",
    title: "Temporary detention of suspects",
    officialUrl: "https://webserver.rilegislature.gov/Statutes/TITLE12/12-7/12-7-1.htm",
    sourceName: "Rhode Island General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Rhode Island General Laws official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `R.I. Gen. Laws sec. 12-7-1 Temporary detention of suspects.

Rhode Island law allows a peace officer to detain a person abroad whom the officer has reason to suspect is committing, has committed, or is about to commit a crime, and to demand the person's name, address, business abroad, and destination. The statute limits the detention period and states it is not recorded as an arrest unless the person is arrested and charged.

Use this as Rhode Island's stop-and-identify authority. It must be read with federal and state constitutional limits, and it does not mean a person must consent to a search or answer every police question.`,
  },
  {
    id: "ri-gl-11-35-21-recording-communications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "RI",
    topicIds: ["police"],
    citation: "R.I. Gen. Laws sec. 11-35-21",
    title: "Unauthorized interception, disclosure or use of communications",
    officialUrl: "https://webserver.rilegislature.gov/Statutes/TITLE11/11-35/11-35-21.htm",
    sourceName: "Rhode Island General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Rhode Island General Laws official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `R.I. Gen. Laws sec. 11-35-21 Unauthorized interception, disclosure or use of wire, electronic, or oral communication.

Rhode Island law prohibits unauthorized interception, disclosure, or use of wire, electronic, or oral communications, with exceptions. The statute permits interception when the person is a party to the communication or when one party has consented, unless the interception is for a criminal, tortious, or otherwise injurious purpose.

Use this as Rhode Island's recording/privacy hook. For recording police, analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "ri-gl-12-19-8-probation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "RI",
    topicIds: ["supervision"],
    citation: "R.I. Gen. Laws sec. 12-19-8",
    title: "Suspension of sentence and probation",
    officialUrl: "https://webserver.rilegislature.gov/Statutes/TITLE12/12-19/12-19-8.htm",
    sourceName: "Rhode Island General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Rhode Island General Laws official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `R.I. Gen. Laws sec. 12-19-8 Suspension of sentence and probation by superior or district court.

Rhode Island courts may impose a sentence and suspend execution of all or part of the sentence or place a defendant on probation without imposing a suspended sentence, subject to statutory limits and conditions. Probation terms depend on the offense, sentence, court order, and section 12-19-8.1 conditions.

Use this as Rhode Island's probation framework source, together with the written court order and supervision conditions.`,
  },
  {
    id: "ri-gl-12-19-8-1-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "RI",
    topicIds: ["supervision"],
    citation: "R.I. Gen. Laws sec. 12-19-8.1",
    title: "Conditions of probation",
    officialUrl: "https://webserver.rilegislature.gov/Statutes/TITLE12/12-19/12-19-8.1.htm",
    sourceName: "Rhode Island General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Rhode Island General Laws official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `R.I. Gen. Laws sec. 12-19-8.1 Conditions of probation.

Rhode Island law sets basic probation conditions including obeying all laws, reporting as directed, remaining in Rhode Island absent approval, reporting changes of address, phone, or employment, making efforts toward employment or training, waiving extradition when required, DNA sampling if required, paying assessed restitution, costs, and fines based on ability to pay, and submitting to a risk and needs assessment. Courts may impose special conditions deemed just and reasonable.

Use this as Rhode Island's probation conditions authority, together with the exact written conditions in the person's case.`,
  },
  {
    id: "ri-gl-12-19-9-probation-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "RI",
    topicIds: ["supervision"],
    citation: "R.I. Gen. Laws sec. 12-19-9",
    title: "Violation of terms of probation",
    officialUrl: "https://webserver.rilegislature.gov/Statutes/TITLE12/12-19/12-19-9.htm",
    sourceName: "Rhode Island General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Rhode Island General Laws official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `R.I. Gen. Laws sec. 12-19-9 Violation of terms of probation; notice to attorney general; revocation or continuation of suspension.

Rhode Island law governs probation violation proceedings, including notice to the attorney general, reports from the Department of Corrections division of rehabilitative services, detention limits, hearing timing, a fair-preponderance standard, and possible court responses after a violation finding.

Use this for Rhode Island probation violation answers, but verify the written order, violation notice, custody status, and current court posture.`,
  },
  {
    id: "ri-gl-13-8-9-parole-issuance",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "RI",
    topicIds: ["supervision"],
    citation: "R.I. Gen. Laws sec. 13-8-9",
    title: "Issuance of parole",
    officialUrl: "https://webserver.rilegislature.gov/Statutes/TITLE13/13-8/13-8-9.htm",
    sourceName: "Rhode Island General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Rhode Island General Laws official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `R.I. Gen. Laws sec. 13-8-9 Issuance of parole.

Rhode Island parole board authority allows parole permits for eligible prisoners under board control after the statutory portion of the sentence has been served, subject to exclusions and special rules for some murder convictions. A parole permit allows liberty during the remainder of the sentence on terms and conditions prescribed by the board.

Use this as Rhode Island's parole eligibility and board-authority framework source, not as a release-date calculator.`,
  },
  {
    id: "ri-gl-13-8-18-parole-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "RI",
    topicIds: ["supervision"],
    citation: "R.I. Gen. Laws sec. 13-8-18",
    title: "Revocation of parole",
    officialUrl: "https://webserver.rilegislature.gov/Statutes/TITLE13/13-8/13-8-18.htm",
    sourceName: "Rhode Island General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Rhode Island General Laws official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `R.I. Gen. Laws sec. 13-8-18 Revocation of parole; hearing.

Rhode Island law allows the parole board to revoke parole permits when a person violates parole terms or state law, with different language for new criminal charges and technical violations. If the board determines the permit should not be revoked, the person must be restored to liberty under the original permit terms.

Use this for Rhode Island parole violation answers, but verify the written parole conditions, violation basis, custody status, and board hearing posture.`,
  },
  {
    id: "sc-code-7-5-120-voter-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SC",
    topicIds: ["voting"],
    citation: "S.C. Code Ann. sec. 7-5-120",
    title: "Qualifications for registration and voting disqualifications",
    officialUrl: "https://www.scstatehouse.gov/code/t07c005.php",
    sourceName: "South Carolina Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "South Carolina Code official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `S.C. Code Ann. sec. 7-5-120 Qualifications for registration; persons disqualified from registering or voting.

South Carolina voter registration law disqualifies a person from registering or voting while serving a term of imprisonment resulting from conviction of a crime, and after conviction of a felony or election-law offense unless the disqualification has been removed by service of the sentence, including probation and parole time, or sooner by pardon.

Use this as South Carolina's core felony voting-rights authority. A specific answer requires the conviction type, whether the sentence including probation and parole is fully served, imprisonment status, pardon status, residence, age, citizenship, and registration timing.`,
  },
  {
    id: "sc-code-7-5-170-registration-application",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SC",
    topicIds: ["voting"],
    citation: "S.C. Code Ann. sec. 7-5-170",
    title: "Written application for voter registration",
    officialUrl: "https://www.scstatehouse.gov/code/t07c005.php",
    sourceName: "South Carolina Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "South Carolina Code official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `S.C. Code Ann. sec. 7-5-170 Necessity for written application for registration.

South Carolina voter registration applications require an applicant to affirm that they are not confined in a public prison, have not been convicted of a felony or election-law offense, or if previously convicted, have served the entire sentence including probation and parole time or received a pardon.

Use this with section 7-5-120 when explaining registration after a conviction. It is an application and oath source, not the complete disqualification rule by itself.`,
  },
  {
    id: "sc-code-17-22-910-expungement-admin",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SC",
    topicIds: ["expungement"],
    citation: "S.C. Code Ann. sec. 17-22-910",
    title: "Applications for expungement",
    officialUrl: "https://www.scstatehouse.gov/code/t17c022.php",
    sourceName: "South Carolina Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "South Carolina Code official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `S.C. Code Ann. sec. 17-22-910 Applications for expungement; administration.

South Carolina's uniform expungement statute routes applications through the solicitor's office and lists statutory categories that may be eligible for expungement, including certain dismissed or discharged charges, first-offense magistrate convictions, youthful offender cases, qualifying drug convictions, pretrial intervention, traffic and alcohol education programs, juvenile expungements, and other statutory authorizations.

Use this as South Carolina's expungement routing and eligibility-map authority. A specific answer requires the charge, disposition, court, program status, offense date, sentence completion, prior record, and the specific expungement statute that authorizes relief.`,
  },
  {
    id: "sc-code-17-1-40-expungement-retention",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SC",
    topicIds: ["expungement", "employment", "housing"],
    citation: "S.C. Code Ann. sec. 17-1-40",
    title: "Expungement and retained sealed information",
    officialUrl: "https://www.scstatehouse.gov/code/t17c001.php",
    sourceName: "South Carolina Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "South Carolina Code official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `S.C. Code Ann. sec. 17-1-40 Expungement; retention of certain information by law enforcement or prosecution agencies.

South Carolina law describes what happens to records after expungement for dismissed, discharged, nolle prossed, or not-guilty charges, including destruction of some arrest and booking records and sealed retention of other law-enforcement, prosecution, detention, and correctional information for limited purposes. The statute also restricts disclosure and allows redaction of expunged person's identifying information from incident reports.

Use this after confirming an expungement order exists, especially for employment, housing, and public-record questions. It does not make every record disappear for every government or law-enforcement purpose.`,
  },
  {
    id: "sc-code-31-21-40-fair-housing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SC",
    topicIds: ["housing"],
    citation: "S.C. Code Ann. sec. 31-21-40",
    title: "Discrimination in sale or rental of property",
    officialUrl: "https://www.scstatehouse.gov/code/t31c021.php",
    sourceName: "South Carolina Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "South Carolina Code official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `S.C. Code Ann. sec. 31-21-40 Discrimination in relation to sale or rental of property.

South Carolina fair-housing law prohibits covered discriminatory sale, rental, advertising, availability, and terms-and-conditions practices based on protected characteristics including race, color, religion, sex, handicap, familial status, and national origin. The chapter includes exemptions and controlled-substance conviction language that must be considered in housing-screening questions.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, expungement law, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "sc-code-27-40-440-landlord-obligations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SC",
    topicIds: ["housing"],
    citation: "S.C. Code Ann. sec. 27-40-440",
    title: "Landlord to maintain premises",
    officialUrl: "https://www.scstatehouse.gov/code/t27c040.php",
    sourceName: "South Carolina Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "South Carolina Residential Landlord and Tenant Act source checked June 27, 2026; exact section URL pending adapter verification",
    reviewStatus: "approved",
    text: `S.C. Code Ann. sec. 27-40-440 Landlord to maintain premises.

South Carolina landlord-tenant law requires landlords to comply with building and housing codes materially affecting health and safety, make repairs, keep common areas safe, maintain supplied facilities and appliances, provide waste receptacles, and supply running water and reasonable heat where required by the rental arrangement.

Use this as South Carolina's tenant-protection hook when a person with a criminal record is already housed and faces unsafe conditions. It is not a criminal-record screening rule.`,
  },
  {
    id: "sc-code-1-13-80-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SC",
    topicIds: ["employment"],
    citation: "S.C. Code Ann. sec. 1-13-80",
    title: "Unlawful employment practices",
    officialUrl: "https://www.scstatehouse.gov/code/t01c013.php",
    sourceName: "South Carolina Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "South Carolina Code official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `S.C. Code Ann. sec. 1-13-80 Unlawful employment practices; exceptions.

South Carolina Human Affairs Law prohibits covered employment discrimination based on protected characteristics such as race, religion, color, sex, age, national origin, and disability. It is employment-rights context, but criminal history is not itself a general protected class under this source.

For criminal-record employment questions, use this with expungement law, occupational-licensing rules, federal law, and job-specific background-check requirements.`,
  },
  {
    id: "sc-code-40-1-110-licensing-discipline",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SC",
    topicIds: ["employment"],
    citation: "S.C. Code Ann. sec. 40-1-110",
    title: "Additional grounds for professional licensing discipline",
    officialUrl: "https://www.scstatehouse.gov/code/t40c001.php",
    sourceName: "South Carolina Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "South Carolina Code official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `S.C. Code Ann. sec. 40-1-110 Additional grounds for disciplinary action.

South Carolina professional licensing boards may discipline a licensee for listed grounds, including conviction of, or guilty or nolo contendere plea to, a felony or a crime involving drugs or moral turpitude. Board-specific licensing chapters may add additional criminal-record rules.

Use this as South Carolina's general occupational-licensing criminal-record authority, with the exact board statute for the occupation at issue.`,
  },
  {
    id: "sc-code-17-13-30-arrest-without-warrant",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SC",
    topicIds: ["police"],
    citation: "S.C. Code Ann. sec. 17-13-30",
    title: "Officers may arrest without warrant for offenses committed in view",
    officialUrl: "https://www.scstatehouse.gov/code/t17c013.php",
    sourceName: "South Carolina Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "South Carolina Code official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `S.C. Code Ann. sec. 17-13-30 Officers may arrest without warrant for offenses committed in view.

South Carolina law authorizes sheriffs and deputy sheriffs to arrest without a warrant persons who, within their view, violate criminal laws if the arrest is made at the time of violation or immediately after. Other arrest, detention, and search rules may come from additional statutes and constitutional law.

Use this as South Carolina's statutory arrest-power hook. It is not a complete stop, search, questioning, or consent rule.`,
  },
  {
    id: "sc-code-17-13-50-ground-of-arrest",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SC",
    topicIds: ["police"],
    citation: "S.C. Code Ann. sec. 17-13-50",
    title: "Right to be informed of ground of arrest",
    officialUrl: "https://www.scstatehouse.gov/code/t17c013.php",
    sourceName: "South Carolina Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "South Carolina Code official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `S.C. Code Ann. sec. 17-13-50 Right to be informed of ground of arrest.

South Carolina law gives a person arrested by process or taken into custody by an officer the right to know the true ground for the arrest. An officer may not refuse to answer, answer untruthfully, assign an untrue reason, or neglect on request to exhibit the process by which the arrest is made.

Use this as South Carolina's arrest-information authority. It does not mean a person should argue at the scene or refuse lawful commands; constitutional and safety considerations still matter.`,
  },
  {
    id: "sc-code-17-30-30-recording-consent",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SC",
    topicIds: ["police"],
    citation: "S.C. Code Ann. sec. 17-30-30",
    title: "Interception when a party has given prior consent",
    officialUrl: "https://www.scstatehouse.gov/code/t17c030.php",
    sourceName: "South Carolina Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "South Carolina Code official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `S.C. Code Ann. sec. 17-30-30 Interception by person acting under color of law and when party has given prior consent.

South Carolina law permits interception of wire, oral, or electronic communications when the person is a party to the communication or one party has given prior consent, including rules for persons acting under color of law and persons not acting under color of law.

Use this as South Carolina's recording/privacy hook. For recording police, analyze public setting, interference with official duties, privacy expectations, consent rules, and First Amendment public-recording principles.`,
  },
  {
    id: "sc-code-24-21-430-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SC",
    topicIds: ["supervision"],
    citation: "S.C. Code Ann. sec. 24-21-430",
    title: "Conditions of probation",
    officialUrl: "https://www.scstatehouse.gov/code/t24c021.php",
    sourceName: "South Carolina Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "South Carolina Code official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `S.C. Code Ann. sec. 24-21-430 Conditions of probation.

South Carolina courts may impose probation conditions and may modify them. The statute includes search-condition language requiring probationers, with limited misdemeanor exceptions, to permit warrantless searches based on reasonable suspicion by probation agents or law enforcement after verification of probation status and reporting requirements designed to prevent abuse.

Use this as South Carolina's probation conditions authority, together with the person's written sentencing order and supervision conditions.`,
  },
  {
    id: "sc-code-24-21-460-probation-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SC",
    topicIds: ["supervision"],
    citation: "S.C. Code Ann. sec. 24-21-460",
    title: "Court action when probation terms are violated",
    officialUrl: "https://www.scstatehouse.gov/code/t24c021.php",
    sourceName: "South Carolina Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "South Carolina Code official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `S.C. Code Ann. sec. 24-21-460 Court action when terms of probation violated.

South Carolina law allows the court, after arrest for a probation violation, to bring the defendant before it, revoke probation or suspension of sentence, and deal with the case as if there had been no probation or suspension, with discretion to require all or part of the sentence. Portions not put into effect may remain available during the probation period.

Use this for South Carolina probation violation answers, but verify the written order, violation report, bond status, hearing posture, and court findings.`,
  },
  {
    id: "sc-code-24-21-640-parole-criteria",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SC",
    topicIds: ["supervision"],
    citation: "S.C. Code Ann. sec. 24-21-640",
    title: "Circumstances warranting parole and parole search conditions",
    officialUrl: "https://www.scstatehouse.gov/code/t24c021.php",
    sourceName: "South Carolina Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "South Carolina Code official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `S.C. Code Ann. sec. 24-21-640 Circumstances warranting parole; search and seizure; criteria.

South Carolina parole decisions require the board to consider the prisoner's record before, during, and after imprisonment and whether release would be consistent with reform, law-abiding conduct, sentence progress, society's interest, and employment. The statute also includes parole search-condition language and reporting safeguards.

Use this as South Carolina's parole framework source, not as a release-date calculator. A precise answer requires sentence, offense, eligibility, board status, release plan, and written parole conditions.`,
  },
  {
    id: "sc-code-24-21-680-parole-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SC",
    topicIds: ["supervision"],
    citation: "S.C. Code Ann. sec. 24-21-680",
    title: "Violation of parole",
    officialUrl: "https://www.scstatehouse.gov/code/t24c021.php",
    sourceName: "South Carolina Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "South Carolina Code official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `S.C. Code Ann. sec. 24-21-680 Violation of parole.

South Carolina law governs parole violations, including issuance of a warrant or citation, board determination whether parole should be revoked, possible service of unserved sentence, later parole eligibility, and limited bond pending final determination.

Use this for South Carolina parole violation answers, but verify the written parole conditions, violation basis, custody status, board posture, and bond order if any.`,
  },
  {
    id: "sd-sdcl-12-4-18-felony-voting-removal",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SD",
    topicIds: ["voting"],
    citation: "S.D. Codified Laws sec. 12-4-18",
    title: "Removal from voter registration records while serving sentence for felony conviction",
    officialUrl: "https://sdlegislature.gov/Statutes/12-4-18",
    sourceName: "South Dakota Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "South Dakota Legislature statute URL identified June 27, 2026; section text cross-checked through Justia mirror",
    reviewStatus: "approved",
    text: `S.D. Codified Laws sec. 12-4-18 Persons declared mentally incompetent, deceased, or serving sentence for felony conviction; removed from registration records.

South Dakota requires county auditors to remove from voter registration records any voter identified as serving a sentence for a felony conviction. The statute also directs removal of people sentenced to imprisonment in the federal penitentiary system and requires matching voter records against felony conviction records maintained by the Unified Judicial System.

Use this as South Dakota's core felony voting-rights authority. A specific answer requires whether the person is still serving a felony sentence, whether the sentence is complete, and ordinary registration eligibility.`,
  },
  {
    id: "sd-sdcl-12-4-1-voter-registration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SD",
    topicIds: ["voting"],
    citation: "S.D. Codified Laws sec. 12-4-1",
    title: "Persons entitled to register to vote",
    officialUrl: "https://sdlegislature.gov/Statutes/12-4-1",
    sourceName: "South Dakota Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "South Dakota Legislature statute URL identified June 27, 2026; exact section pending adapter verification",
    reviewStatus: "approved",
    text: `S.D. Codified Laws sec. 12-4-1 Persons entitled to register to vote.

South Dakota voter registration law sets baseline eligibility for registration. For people with felony convictions, this baseline must be read with section 12-4-18 and current Secretary of State procedures for removal and re-registration.

Use this with section 12-4-18 when answering South Dakota voting questions. A specific answer requires citizenship, age, residence, registration timing, and felony sentence-completion status.`,
  },
  {
    id: "sd-sdcl-23a-3-26-expungement-definition",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SD",
    topicIds: ["expungement", "employment", "housing"],
    citation: "S.D. Codified Laws sec. 23A-3-26",
    title: "Definition of expungement",
    officialUrl: "https://sdlegislature.gov/Statutes/23A-3-26",
    sourceName: "South Dakota Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "South Dakota Legislature statute URL identified June 27, 2026; section text cross-checked through Justia mirror",
    reviewStatus: "approved",
    text: `S.D. Codified Laws sec. 23A-3-26 Definition of expungement.

South Dakota defines expungement as sealing records on file with courts, detention or correctional facilities, law enforcement agencies, criminal justice agencies, or the Department of Public Safety concerning detection, apprehension, arrest, detention, trial, or disposition of an offense. Expungement does not imply physical destruction of records.

Use this as South Dakota's core definition for record-clearing questions, including employment and housing screening questions where sealed records may still have exceptions.`,
  },
  {
    id: "sd-sdcl-23a-3-27-arrest-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SD",
    topicIds: ["expungement"],
    citation: "S.D. Codified Laws sec. 23A-3-27",
    title: "Motion for expungement of arrest record",
    officialUrl: "https://sdlegislature.gov/Statutes/23A-3-27",
    sourceName: "South Dakota Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "South Dakota Legislature statute URL identified June 27, 2026; section text cross-checked through Justia mirror",
    reviewStatus: "approved",
    text: `S.D. Codified Laws sec. 23A-3-27 Motion for expungement of arrest record.

South Dakota allows an arrested person to apply to the court with jurisdiction over the offense for an order expunging the arrest record in specified situations, including after one year if no accusatory instrument was filed, after dismissal, at any time after acquittal, or within one year after dismissal on a compelling-necessity showing.

Use this as South Dakota's arrest-record expungement authority. A specific answer requires the arrest date, whether charges were filed, dismissal or acquittal status, and timing.`,
  },
  {
    id: "sd-sdcl-23a-3-34-automatic-nonfelony-removal",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SD",
    topicIds: ["expungement", "employment", "housing"],
    citation: "S.D. Codified Laws sec. 23A-3-34",
    title: "Automatic removal of non-felony charges or convictions from public record",
    officialUrl: "https://sdlegislature.gov/Statutes/23A-3-34",
    sourceName: "South Dakota Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "South Dakota Legislature statute URL identified June 27, 2026; section text cross-checked through Justia mirror",
    reviewStatus: "approved",
    text: `S.D. Codified Laws sec. 23A-3-34 Defendant's public record; automatic removal of non-felony charges or convictions.

South Dakota provides for automatic removal from public record of certain non-felony charges or convictions, while preserving case records for authorized court, law enforcement, prosecution, defense, corrections, and other official uses and possible later enhancement purposes.

Use this as South Dakota's automatic non-felony record-removal authority. It is important for employment and housing screening, but it does not mean all records are physically destroyed or inaccessible to all government users.`,
  },
  {
    id: "sd-sdcl-23a-27-14-suspended-imposition-dismissal",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SD",
    topicIds: ["expungement", "supervision"],
    citation: "S.D. Codified Laws sec. 23A-27-14",
    title: "Discharge and dismissal after suspended imposition probation",
    officialUrl: "https://sdlegislature.gov/Statutes/23A-27-14",
    sourceName: "South Dakota Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "South Dakota Legislature statute URL identified June 27, 2026; section text cross-checked through Justia mirror",
    reviewStatus: "approved",
    text: `S.D. Codified Laws sec. 23A-27-14 Discharge and dismissal of probationer on completion of conditions; no judgment entered.

South Dakota law allows discharge and dismissal after successful completion of conditions when imposition of sentence was suspended, subject to statutory limits. This affects both supervision and record-clearing questions because it changes the final case posture and may interact with expungement or public-record rules.

Use this for suspended-imposition questions. A specific answer requires the judgment, whether imposition or execution was suspended, the probation conditions, completion status, and any statutory limitation.`,
  },
  {
    id: "sd-sdcl-20-13-20-housing-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SD",
    topicIds: ["housing"],
    citation: "S.D. Codified Laws sec. 20-13-20",
    title: "Unfair or discriminatory housing practices by owner or agent",
    officialUrl: "https://sdlegislature.gov/Statutes/20-13-20",
    sourceName: "South Dakota Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "South Dakota Legislature statute URL identified June 27, 2026; section text cross-checked through Justia mirror",
    reviewStatus: "approved",
    text: `S.D. Codified Laws sec. 20-13-20 Unfair or discriminatory housing practices by owner or agent.

South Dakota fair-housing law prohibits covered refusal, discrimination in terms or conditions, discriminatory advertising, and refusal to permit reasonable disability modifications based on protected characteristics including race, color, creed, religion, sex, ancestry, disability, familial status, and national origin.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, expungement law, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "sd-sdcl-20-13-21-housing-lending",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SD",
    topicIds: ["housing"],
    citation: "S.D. Codified Laws sec. 20-13-21",
    title: "Unfair or discriminatory housing practice by financial institution or lender",
    officialUrl: "https://sdlegislature.gov/Statutes/20-13-21",
    sourceName: "South Dakota Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "South Dakota Legislature statute URL identified June 27, 2026; section text cross-checked through Justia mirror",
    reviewStatus: "approved",
    text: `S.D. Codified Laws sec. 20-13-21 Unfair or discriminatory housing practice by financial institution or lender.

South Dakota law prohibits covered discrimination by lenders and financial institutions in real-property financing based on protected characteristics. This can matter when housing access turns on financing, lending, or real-property acquisition rather than only rental screening.

Use this as South Dakota's housing-credit discrimination hook, with federal fair-lending law and consumer-reporting rules for criminal-record screening questions.`,
  },
  {
    id: "sd-sdcl-20-13-10-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SD",
    topicIds: ["employment"],
    citation: "S.D. Codified Laws sec. 20-13-10",
    title: "Unfair or discriminatory employment practices",
    officialUrl: "https://sdlegislature.gov/Statutes/20-13-10",
    sourceName: "South Dakota Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "South Dakota Legislature statute URL identified June 27, 2026; section text cross-checked through Justia mirror",
    reviewStatus: "approved",
    text: `S.D. Codified Laws sec. 20-13-10 Unfair or discriminatory practices.

South Dakota employment civil-rights law prohibits covered employment discrimination based on protected characteristics including race, color, creed, religion, sex, ancestry, disability, and national origin. It is useful employment-rights context, but criminal history is not itself a general protected class under this source.

For criminal-record employment questions, use this with expungement law, occupational-licensing statutes, federal law, and job-specific background-check requirements.`,
  },
  {
    id: "sd-sdcl-20-13-11-employment-agency",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SD",
    topicIds: ["employment"],
    citation: "S.D. Codified Laws sec. 20-13-11",
    title: "Employment agency unfair or discriminatory practices",
    officialUrl: "https://sdlegislature.gov/Statutes/20-13-11",
    sourceName: "South Dakota Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "South Dakota Legislature statute URL identified June 27, 2026; section text cross-checked through Justia mirror",
    reviewStatus: "approved",
    text: `S.D. Codified Laws sec. 20-13-11 Employment agency's unfair or discriminatory practices.

South Dakota law also regulates discriminatory practices by employment agencies. This matters when access to work is controlled by a placement agency, referral service, or similar intermediary rather than a direct employer.

Use this as South Dakota employment-agency civil-rights authority. For criminal-history screening, combine it with record-clearing law, consumer-reporting law, and occupation-specific licensing or background-check requirements.`,
  },
  {
    id: "sd-sdcl-36-1c-2-licensing-complaints",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SD",
    topicIds: ["employment"],
    citation: "S.D. Codified Laws sec. 36-1C-2",
    title: "Professional licensing complaints and jurisdiction",
    officialUrl: "https://sdlegislature.gov/Statutes/36-1C-2",
    sourceName: "South Dakota Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "South Dakota Legislature statute URL identified June 27, 2026; section text cross-checked through Justia mirror",
    reviewStatus: "approved",
    text: `S.D. Codified Laws sec. 36-1C-2 Complaints; jurisdiction.

South Dakota's uniform professional licensing procedure allows complaints against licensees or applicants under Title 36 when the alleged conduct constitutes grounds for disciplinary action under that agency's laws or rules. Criminal-record licensing consequences are often occupation-specific rather than contained in one statewide fair-chance licensing statute.

Use this as a procedural licensing hook, but verify the exact board and occupation-specific chapter before giving a specific criminal-record licensing answer.`,
  },
  {
    id: "sd-sdcl-23a-3-2-arrest-without-warrant",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SD",
    topicIds: ["police"],
    citation: "S.D. Codified Laws sec. 23A-3-2",
    title: "Law enforcement officer power to arrest without warrant",
    officialUrl: "https://sdlegislature.gov/Statutes/23A-3-2",
    sourceName: "South Dakota Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "South Dakota Legislature statute URL identified June 27, 2026; section text cross-checked through Justia mirror",
    reviewStatus: "approved",
    text: `S.D. Codified Laws sec. 23A-3-2 Law enforcement officer's power to arrest without warrant.

South Dakota law authorizes warrantless arrest for a public offense other than a petty offense committed or attempted in the officer's presence, or on probable cause that a felony or Class 1 misdemeanor has been committed and the person arrested committed it, even outside the officer's presence.

Use this as South Dakota's statutory arrest-power hook. It is not a complete stop, search, questioning, or consent rule; constitutional limits still control.`,
  },
  {
    id: "sd-sdcl-23a-35a-20-recording-eavesdropping",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SD",
    topicIds: ["police"],
    citation: "S.D. Codified Laws sec. 23A-35A-20",
    title: "Overhearing or recording communications by eavesdropping device",
    officialUrl: "https://sdlegislature.gov/Statutes/23A-35A-20",
    sourceName: "South Dakota Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "South Dakota Legislature statute URL identified June 27, 2026; section text cross-checked through Justia mirror",
    reviewStatus: "approved",
    text: `S.D. Codified Laws sec. 23A-35A-20 Overhearing or recording communications, conversations, or jury deliberations by means of eavesdropping device.

South Dakota law criminalizes certain use of eavesdropping devices to overhear or record communications or conversations, subject to statutory exceptions elsewhere in the chapter. Recording police also requires analysis of public setting, privacy expectations, interference with official duties, and constitutional principles.

Use this as South Dakota's recording/privacy hook, not as a blanket answer for every recording situation.`,
  },
  {
    id: "sd-sdcl-23a-27-12-probation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SD",
    topicIds: ["supervision"],
    citation: "S.D. Codified Laws sec. 23A-27-12",
    title: "Placement on probation",
    officialUrl: "https://sdlegislature.gov/Statutes/23A-27-12",
    sourceName: "South Dakota Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "South Dakota Legislature statute URL identified June 27, 2026; section text cross-checked through Justia mirror",
    reviewStatus: "approved",
    text: `S.D. Codified Laws sec. 23A-27-12 Placement on probation.

South Dakota law authorizes placement on probation in appropriate cases, subject to statutory exceptions and the court's sentence. The controlling obligations come from the statute, judgment, written probation terms, and Department of Corrections or court supervision rules.

Use this as South Dakota's probation framework source, together with the written sentencing order and supervision conditions.`,
  },
  {
    id: "sd-sdcl-23a-27-13-suspended-imposition-probation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SD",
    topicIds: ["supervision"],
    citation: "S.D. Codified Laws sec. 23A-27-13",
    title: "Suspended imposition of felony sentence and probation",
    officialUrl: "https://sdlegislature.gov/Statutes/23A-27-13",
    sourceName: "South Dakota Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "South Dakota Legislature statute URL identified June 27, 2026; section text cross-checked through Justia mirror",
    reviewStatus: "approved",
    text: `S.D. Codified Laws sec. 23A-27-13 Suspended imposition of felony sentence; eligibility; probation placement; revocation.

South Dakota law governs suspended imposition of sentence in eligible felony cases, placement on probation, and revocation consequences. This source matters for supervision questions and later record-clearing effects after successful completion.

Use this with sections 23A-27-12 and 23A-27-14 for suspended-imposition probation questions.`,
  },
  {
    id: "sd-sdcl-24-15a-38-parole-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SD",
    topicIds: ["supervision"],
    citation: "S.D. Codified Laws sec. 24-15A-38",
    title: "Inmate release to parole supervision and conditions",
    officialUrl: "https://sdlegislature.gov/Statutes/24-15A-38",
    sourceName: "South Dakota Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "South Dakota Legislature statute URL identified June 27, 2026; section text cross-checked through Justia mirror",
    reviewStatus: "approved",
    text: `S.D. Codified Laws sec. 24-15A-38 Inmate release to parole supervision; conditions.

South Dakota law governs release to parole supervision and conditions. Parole obligations depend on the sentence, parole eligibility framework, board action, Department of Corrections rules, and written parole conditions.

Use this as South Dakota's parole supervision framework source, not as a release-date calculator.`,
  },
  {
    id: "sd-sdcl-24-15a-39-parole-release-standards",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "SD",
    topicIds: ["supervision"],
    citation: "S.D. Codified Laws sec. 24-15A-39",
    title: "Hearing to determine compliance with parole release standards",
    officialUrl: "https://sdlegislature.gov/Statutes/24-15A-39",
    sourceName: "South Dakota Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "South Dakota Legislature statute URL identified June 27, 2026; section text cross-checked through Justia mirror",
    reviewStatus: "approved",
    text: `S.D. Codified Laws sec. 24-15A-39 Hearing to determine compliance with parole release standards; waiver; board determinations.

South Dakota parole release can involve board review of whether parole release standards are met, waiver of appearance, and discretionary hearing procedures. The analysis depends on offense, sentence, risk factors, board rules, institutional record, and written release plan.

Use this as South Dakota's parole-release decision framework source, alongside the person's sentence and board paperwork.`,
  },
  {
    id: "tn-code-2-2-102-voter-registration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TN",
    topicIds: ["voting"],
    citation: "Tenn. Code Ann. sec. 2-2-102",
    title: "Persons entitled to register to vote",
    officialUrl: "https://wapp.capitol.tn.gov/apps/tnlaw/",
    sourceName: "Tennessee General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Tennessee General Assembly code portal identified June 27, 2026; section text cross-checked through Tennessee Code mirror",
    reviewStatus: "approved",
    text: `Tenn. Code Ann. sec. 2-2-102 Persons entitled to register and vote.

Tennessee voter registration law sets baseline qualifications for registration and voting, including age, citizenship, residence, and absence of disqualification. For people with felony convictions, this must be read with Tennessee's restoration-of-citizenship and infamous-crime statutes.

Use this with Tenn. Code Ann. secs. 40-29-202 and 40-29-204 for Tennessee felony voting-rights answers. A specific answer requires conviction date, offense, sentence completion, restitution or court-cost issues where applicable, and whether voting rights have been restored.`,
  },
  {
    id: "tn-code-40-29-202-voting-disqualification",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TN",
    topicIds: ["voting"],
    citation: "Tenn. Code Ann. sec. 40-29-202",
    title: "Deprivation of citizenship rights upon conviction",
    officialUrl: "https://wapp.capitol.tn.gov/apps/tnlaw/",
    sourceName: "Tennessee General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Tennessee General Assembly code portal identified June 27, 2026; section text cross-checked through Tennessee Code mirror",
    reviewStatus: "approved",
    text: `Tenn. Code Ann. sec. 40-29-202 Deprivation of citizenship rights upon conviction.

Tennessee law treats conviction of specified infamous crimes as causing loss of citizenship rights, including voting-related rights, subject to restoration procedures and offense-specific exclusions. Tennessee felony voting restoration is more complex than a simple release-from-incarceration rule.

Use this as Tennessee's core disqualification authority, together with the restoration certificate process and current election guidance.`,
  },
  {
    id: "tn-code-40-29-204-restoration-voting",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TN",
    topicIds: ["voting"],
    citation: "Tenn. Code Ann. sec. 40-29-204",
    title: "Certificate of restoration",
    officialUrl: "https://wapp.capitol.tn.gov/apps/tnlaw/",
    sourceName: "Tennessee General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Tennessee General Assembly code portal identified June 27, 2026; section text cross-checked through Tennessee Code mirror",
    reviewStatus: "approved",
    text: `Tenn. Code Ann. sec. 40-29-204 Certificate of restoration.

Tennessee law provides a certificate-of-restoration process for eligible people seeking restoration of voting and other citizenship rights after conviction. Eligibility can depend on sentence completion, restitution, court costs, child support, offense category, and other statutory limits.

Use this as Tennessee's voting-rights restoration process source. A specific answer requires the conviction offense and date, sentence completion facts, financial obligations, and whether any permanent exclusion applies.`,
  },
  {
    id: "tn-code-40-32-101-expunction",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TN",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Tenn. Code Ann. sec. 40-32-101",
    title: "Destruction or release of records; expunction",
    officialUrl: "https://wapp.capitol.tn.gov/apps/tnlaw/",
    sourceName: "Tennessee General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Tennessee General Assembly code portal identified June 27, 2026; section text cross-checked through Justia Tennessee Code mirror",
    reviewStatus: "approved",
    text: `Tenn. Code Ann. sec. 40-32-101 Destruction or release of records; expunction.

Tennessee expunction law covers categories including dismissed charges, acquittals, retired charges, certain diversion outcomes, and eligible convictions listed by statute. Eligibility depends on disposition, offense, waiting period, sentence completion, later convictions, fees, and statutory exclusions.

Use this as Tennessee's primary expungement authority. A specific answer requires the charge, disposition, conviction class, offense date, sentence completion date, and exclusion analysis.`,
  },
  {
    id: "tn-code-40-35-313-judicial-diversion",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TN",
    topicIds: ["expungement", "supervision"],
    citation: "Tenn. Code Ann. sec. 40-35-313",
    title: "Judicial diversion and discharge without judgment",
    officialUrl: "https://wapp.capitol.tn.gov/apps/tnlaw/",
    sourceName: "Tennessee General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Tennessee General Assembly code portal identified June 27, 2026; section text cross-checked through Tennessee Code mirror",
    reviewStatus: "approved",
    text: `Tenn. Code Ann. sec. 40-35-313 Judicial diversion.

Tennessee judicial diversion can allow eligible defendants to be placed on probation without a judgment of guilt and, after successful completion, obtain dismissal and expungement treatment subject to statutory conditions and exclusions.

Use this for Tennessee diversion-related expungement and supervision questions. A specific answer requires the plea, diversion order, offense eligibility, probation completion, and court disposition.`,
  },
  {
    id: "tn-code-4-21-601-fair-housing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TN",
    topicIds: ["housing"],
    citation: "Tenn. Code Ann. sec. 4-21-601",
    title: "Discriminatory housing practices",
    officialUrl: "https://wapp.capitol.tn.gov/apps/tnlaw/",
    sourceName: "Tennessee General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Tennessee General Assembly code portal identified June 27, 2026; section text cross-checked through Tennessee Code mirror",
    reviewStatus: "approved",
    text: `Tenn. Code Ann. sec. 4-21-601 Discriminatory housing practices.

Tennessee fair-housing law prohibits covered discriminatory practices in sale, rental, advertising, terms, services, financing, brokerage, and related housing activity based on protected characteristics.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, Tennessee expunction law, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "tn-code-66-28-304-landlord-maintenance",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TN",
    topicIds: ["housing"],
    citation: "Tenn. Code Ann. sec. 66-28-304",
    title: "Landlord to maintain premises",
    officialUrl: "https://wapp.capitol.tn.gov/apps/tnlaw/",
    sourceName: "Tennessee General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Tennessee General Assembly code portal identified June 27, 2026; section text cross-checked through Tennessee Code mirror",
    reviewStatus: "approved",
    text: `Tenn. Code Ann. sec. 66-28-304 Landlord to maintain premises.

Tennessee landlord-tenant law requires covered landlords to comply with applicable building and housing codes materially affecting health and safety, make repairs and keep premises fit and habitable, keep common areas clean and safe, and maintain supplied facilities and appliances.

Use this as Tennessee's tenant-protection hook when a person with a criminal record is already housed and faces unsafe conditions. It is not a criminal-record screening rule.`,
  },
  {
    id: "tn-code-4-21-401-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TN",
    topicIds: ["employment"],
    citation: "Tenn. Code Ann. sec. 4-21-401",
    title: "Discriminatory practices by employer",
    officialUrl: "https://wapp.capitol.tn.gov/apps/tnlaw/",
    sourceName: "Tennessee General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Tennessee General Assembly code portal identified June 27, 2026; section text cross-checked through Justia Tennessee Code mirror",
    reviewStatus: "approved",
    text: `Tenn. Code Ann. sec. 4-21-401 Discriminatory practices by employer.

Tennessee employment civil-rights law prohibits covered employment discrimination based on protected characteristics. It is useful employment-rights context, but criminal history is not itself a general protected class under this source.

For criminal-record employment questions, use this with expunction law, occupational-licensing rules, federal law, and job-specific background-check requirements.`,
  },
  {
    id: "tn-code-62-76-104-licensing-criminal-history",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TN",
    topicIds: ["employment"],
    citation: "Tenn. Code Ann. sec. 62-76-104",
    title: "Fresh start licensing and criminal history",
    officialUrl: "https://wapp.capitol.tn.gov/apps/tnlaw/",
    sourceName: "Tennessee General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Tennessee General Assembly code portal identified June 27, 2026; section text cross-checked through Tennessee Code mirror",
    reviewStatus: "approved",
    text: `Tenn. Code Ann. sec. 62-76-104 Fresh start licensing and criminal history.

Tennessee's fresh start licensing law limits how licensing authorities may use criminal history and generally requires a relationship between the conviction and the licensed occupation, subject to exceptions and board-specific statutes.

Use this as Tennessee's occupational-licensing criminal-record authority, with the exact licensing board statute for the occupation at issue.`,
  },
  {
    id: "tn-code-40-7-103-arrest-without-warrant",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TN",
    topicIds: ["police"],
    citation: "Tenn. Code Ann. sec. 40-7-103",
    title: "Grounds for arrest by officer without warrant",
    officialUrl: "https://wapp.capitol.tn.gov/apps/tnlaw/",
    sourceName: "Tennessee General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Tennessee General Assembly code portal identified June 27, 2026; section text cross-checked through Tennessee Code mirror",
    reviewStatus: "approved",
    text: `Tenn. Code Ann. sec. 40-7-103 Grounds for arrest by officer without warrant.

Tennessee law authorizes warrantless arrests in listed circumstances, including offenses committed in the officer's presence and other statutory probable-cause situations. Police-stop and search questions also require federal and Tennessee constitutional analysis.

Use this as Tennessee's statutory arrest-power hook. It is not a complete stop, search, questioning, or consent rule.`,
  },
  {
    id: "tn-code-39-13-601-recording-communications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TN",
    topicIds: ["police"],
    citation: "Tenn. Code Ann. sec. 39-13-601",
    title: "Wiretapping and electronic surveillance",
    officialUrl: "https://wapp.capitol.tn.gov/apps/tnlaw/",
    sourceName: "Tennessee General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Tennessee General Assembly code portal identified June 27, 2026; section text cross-checked through Tennessee Code mirror",
    reviewStatus: "approved",
    text: `Tenn. Code Ann. sec. 39-13-601 Wiretapping and electronic surveillance.

Tennessee law governs interception and recording of wire, oral, and electronic communications. Tennessee is generally treated as a one-party-consent state for recording conversations, subject to statutory details and privacy expectations.

Use this as Tennessee's recording/privacy hook. For recording police, analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "tn-code-40-35-303-probation-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TN",
    topicIds: ["supervision"],
    citation: "Tenn. Code Ann. sec. 40-35-303",
    title: "Probation eligibility and terms",
    officialUrl: "https://wapp.capitol.tn.gov/apps/tnlaw/",
    sourceName: "Tennessee General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Tennessee General Assembly code portal identified June 27, 2026; section text cross-checked through Tennessee Code mirror",
    reviewStatus: "approved",
    text: `Tenn. Code Ann. sec. 40-35-303 Probation; eligibility; terms.

Tennessee law governs probation eligibility, sentencing alternatives, probation terms, application procedures, and court discretion. The controlling obligations come from the statute, judgment, written probation order, and supervision conditions.

Use this as Tennessee's probation framework source, together with the person's written sentencing order and supervision conditions.`,
  },
  {
    id: "tn-code-40-35-311-probation-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TN",
    topicIds: ["supervision"],
    citation: "Tenn. Code Ann. sec. 40-35-311",
    title: "Revocation of suspension of sentence or probation",
    officialUrl: "https://wapp.capitol.tn.gov/apps/tnlaw/",
    sourceName: "Tennessee General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Tennessee General Assembly code portal identified June 27, 2026; section text cross-checked through Tennessee Code mirror",
    reviewStatus: "approved",
    text: `Tenn. Code Ann. sec. 40-35-311 Revocation of suspension of sentence or probation.

Tennessee law governs probation violation warrants, hearings, revocation, continuation, extension, and other court responses after an alleged violation. Consequences depend on the judgment, conditions, allegation, custody status, hearing posture, and court findings.

Use this for Tennessee probation violation answers, but verify the written order and current court status before giving specific guidance.`,
  },
  {
    id: "tn-code-40-28-117-parole-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TN",
    topicIds: ["supervision"],
    citation: "Tenn. Code Ann. sec. 40-28-117",
    title: "Parole conditions and revocation",
    officialUrl: "https://wapp.capitol.tn.gov/apps/tnlaw/",
    sourceName: "Tennessee General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Tennessee General Assembly code portal identified June 27, 2026; section text cross-checked through Tennessee Code mirror",
    reviewStatus: "approved",
    text: `Tenn. Code Ann. sec. 40-28-117 Parole conditions, supervision, and violation process.

Tennessee parole is controlled by the Board of Parole and written parole conditions. Violation questions depend on the alleged conduct, warrant or summons, hearing process, board decision, sentence, and supervision paperwork.

Use this as Tennessee's parole conditions and violation framework source, not as a release-date calculator.`,
  },
  {
    id: "tn-code-40-28-115-parole-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TN",
    topicIds: ["supervision"],
    citation: "Tenn. Code Ann. sec. 40-28-115",
    title: "Parole eligibility and release consideration",
    officialUrl: "https://wapp.capitol.tn.gov/apps/tnlaw/",
    sourceName: "Tennessee General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Tennessee General Assembly code portal identified June 27, 2026; section text cross-checked through Tennessee Code mirror",
    reviewStatus: "approved",
    text: `Tenn. Code Ann. sec. 40-28-115 Parole eligibility and release consideration.

Tennessee parole eligibility and release consideration depend on the sentence, offense class, release eligibility date, credits, statutory exclusions, board rules, institutional record, risk assessment, and board discretion.

Use this as Tennessee's parole eligibility framework source, not as a release-date calculator. A precise answer requires the sentence, offense date, release eligibility calculation, and board status.`,
  },
  {
    id: "tx-elec-11-002-qualified-voter",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TX",
    topicIds: ["voting"],
    citation: "Tex. Elec. Code sec. 11.002",
    title: "Qualified voter",
    officialUrl: "https://statutes.capitol.texas.gov/Docs/EL/htm/EL.11.htm",
    sourceName: "Texas Constitution and Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Texas Constitution and Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Tex. Elec. Code sec. 11.002 Qualified voter.

Texas law defines who is a qualified voter and includes disqualification while finally convicted of a felony unless the person's sentence has been fully discharged, including incarceration, parole, or supervision, or the person has been pardoned or otherwise released from the resulting disability to vote.

Use this as Texas's core felony voting-rights authority. A specific answer requires conviction status, whether the felony sentence including parole or supervision is fully discharged, pardon or restoration status, residence, age, citizenship, and registration timing.`,
  },
  {
    id: "tx-elec-13-001-registration-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TX",
    topicIds: ["voting"],
    citation: "Tex. Elec. Code sec. 13.001",
    title: "Eligibility for registration",
    officialUrl: "https://statutes.capitol.texas.gov/Docs/EL/htm/EL.13.htm",
    sourceName: "Texas Constitution and Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Texas Constitution and Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Tex. Elec. Code sec. 13.001 Eligibility for registration.

Texas voter registration law sets eligibility requirements for registration, including being a qualified voter. For people with felony convictions, registration eligibility turns on the felony-disqualification and discharge rules in the Election Code.

Use this with section 11.002 when answering Texas voter registration after conviction questions.`,
  },
  {
    id: "tx-ccp-ch55-expunction",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TX",
    topicIds: ["expungement"],
    citation: "Tex. Code Crim. Proc. ch. 55",
    title: "Expunction of criminal records",
    officialUrl: "https://statutes.capitol.texas.gov/Docs/CR/htm/CR.55.htm",
    sourceName: "Texas Constitution and Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Texas Constitution and Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Tex. Code Crim. Proc. ch. 55 Expunction of criminal records.

Texas expunction law governs when arrest and criminal records may be expunged, including acquittals, pardons or actual innocence, certain dismissed charges, identity theft, and other statutory categories. Eligibility depends heavily on arrest facts, charge disposition, limitations periods, related charges, supervision type, and statutory exclusions.

Use this as Texas's primary expunction authority. A specific answer requires arrest date, charges, disposition, related case history, supervision status, and whether the person seeks expunction or nondisclosure.`,
  },
  {
    id: "tx-gov-411-072-nondisclosure-deferred",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TX",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Tex. Gov't Code sec. 411.072",
    title: "Order of nondisclosure following deferred adjudication community supervision",
    officialUrl: "https://statutes.capitol.texas.gov/Docs/GV/htm/GV.411.htm",
    sourceName: "Texas Constitution and Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Texas Constitution and Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Tex. Gov't Code sec. 411.072 Order of nondisclosure following deferred adjudication community supervision.

Texas nondisclosure law allows sealing from public disclosure for eligible deferred adjudication records when statutory conditions are met. Nondisclosure is different from expunction and includes exceptions for criminal justice agencies and specified licensing, education, care, and public-safety entities.

Use this for Texas record-sealing questions after deferred adjudication, especially employment and housing screening questions.`,
  },
  {
    id: "tx-prop-301-021-fair-housing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TX",
    topicIds: ["housing"],
    citation: "Tex. Prop. Code sec. 301.021",
    title: "Discriminatory housing practices prohibited",
    officialUrl: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.301.htm",
    sourceName: "Texas Constitution and Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Texas Constitution and Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Tex. Prop. Code sec. 301.021 Discriminatory housing practices prohibited.

Texas fair-housing law prohibits covered discriminatory housing practices based on protected characteristics. This is Texas's core state fair-housing authority for rental, sale, advertising, services, and related housing conduct.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, Texas expunction and nondisclosure law, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "tx-prop-92-052-landlord-repair",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TX",
    topicIds: ["housing"],
    citation: "Tex. Prop. Code sec. 92.052",
    title: "Landlord duty to repair or remedy",
    officialUrl: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm",
    sourceName: "Texas Constitution and Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Texas Constitution and Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Tex. Prop. Code sec. 92.052 Landlord's duty to repair or remedy.

Texas landlord-tenant law requires covered landlords to make a diligent effort to repair or remedy conditions that materially affect the physical health or safety of an ordinary tenant after proper notice and when statutory prerequisites are met.

Use this as Texas's tenant-protection hook when a person with a criminal record is already housed and faces unsafe conditions. It is not a criminal-record screening rule.`,
  },
  {
    id: "tx-labor-21-051-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TX",
    topicIds: ["employment"],
    citation: "Tex. Lab. Code sec. 21.051",
    title: "Discrimination by employer",
    officialUrl: "https://statutes.capitol.texas.gov/Docs/LA/htm/LA.21.htm",
    sourceName: "Texas Constitution and Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Texas Constitution and Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Tex. Lab. Code sec. 21.051 Discrimination by employer.

Texas employment civil-rights law prohibits covered employment discrimination based on protected characteristics. It is useful employment-rights context, but criminal history is not itself a general protected class under this source.

For criminal-record employment questions, use this with expunction and nondisclosure law, occupational-licensing rules, federal law, and job-specific background-check requirements.`,
  },
  {
    id: "tx-occ-53-021-licensing-criminal-conviction",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TX",
    topicIds: ["employment"],
    citation: "Tex. Occ. Code sec. 53.021",
    title: "Authority to revoke, suspend, or deny license based on criminal conviction",
    officialUrl: "https://statutes.capitol.texas.gov/Docs/OC/htm/OC.53.htm",
    sourceName: "Texas Constitution and Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Texas Constitution and Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Tex. Occ. Code sec. 53.021 Authority to revoke, suspend, or deny license.

Texas occupational licensing law limits when a licensing authority may deny, suspend, or revoke a license because of a criminal conviction or deferred adjudication. Analysis depends on the occupation, offense, relationship to duties, time elapsed, rehabilitation, public safety, and board-specific law.

Use this as Texas's occupational-licensing criminal-record authority.`,
  },
  {
    id: "tx-occ-53-023-licensing-factors",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TX",
    topicIds: ["employment"],
    citation: "Tex. Occ. Code sec. 53.023",
    title: "Factors in determining fitness for license",
    officialUrl: "https://statutes.capitol.texas.gov/Docs/OC/htm/OC.53.htm",
    sourceName: "Texas Constitution and Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Texas Constitution and Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Tex. Occ. Code sec. 53.023 Factors in determining whether conviction directly relates to occupation.

Texas licensing authorities must consider statutory factors when deciding whether a criminal conviction directly relates to the duties and responsibilities of a licensed occupation. Factors include the nature and seriousness of the crime, relationship to license duties, public-safety risk, and rehabilitation evidence.

Use this with section 53.021 for Texas occupational licensing answers.`,
  },
  {
    id: "tx-penal-38-02-failure-identify",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TX",
    topicIds: ["police"],
    citation: "Tex. Penal Code sec. 38.02",
    title: "Failure to identify",
    officialUrl: "https://statutes.capitol.texas.gov/Docs/PE/htm/PE.38.htm",
    sourceName: "Texas Constitution and Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Texas Constitution and Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Tex. Penal Code sec. 38.02 Failure to identify.

Texas law makes it an offense to intentionally refuse to give name, residence address, or date of birth to a peace officer after lawful arrest and request. It also separately criminalizes giving false identifying information to an officer after lawful arrest, lawful detention, or when the officer has good cause to believe the person witnessed a criminal offense.

Use this as Texas's identity-related police encounter hook. Texas is not a general stop-and-identify state for mere detention, but false information rules are broader than refusal rules.`,
  },
  {
    id: "tx-penal-16-02-recording-communications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TX",
    topicIds: ["police"],
    citation: "Tex. Penal Code sec. 16.02",
    title: "Unlawful interception, use, or disclosure of wire, oral, or electronic communications",
    officialUrl: "https://statutes.capitol.texas.gov/Docs/PE/htm/PE.16.htm",
    sourceName: "Texas Constitution and Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Texas Constitution and Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Tex. Penal Code sec. 16.02 Unlawful interception, use, or disclosure of wire, oral, or electronic communications.

Texas law governs interception and recording of wire, oral, and electronic communications. Texas is generally treated as a one-party-consent state for recording conversations, subject to statutory details and privacy expectations.

Use this as Texas's recording/privacy hook. For recording police, analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "tx-ccp-42a-301-community-supervision-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TX",
    topicIds: ["supervision"],
    citation: "Tex. Code Crim. Proc. art. 42A.301",
    title: "Basic conditions of community supervision",
    officialUrl: "https://statutes.capitol.texas.gov/Docs/CR/htm/CR.42A.htm",
    sourceName: "Texas Constitution and Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Texas Constitution and Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Tex. Code Crim. Proc. art. 42A.301 Basic conditions of community supervision.

Texas community supervision law authorizes courts to impose basic and case-specific conditions. Requirements depend on the offense, sentence, judgment, community supervision order, department rules, and any special statutory conditions.

Use this as Texas's probation or community-supervision framework source, together with the person's written conditions.`,
  },
  {
    id: "tx-ccp-42a-751-community-supervision-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TX",
    topicIds: ["supervision"],
    citation: "Tex. Code Crim. Proc. art. 42A.751",
    title: "Violation of conditions of community supervision",
    officialUrl: "https://statutes.capitol.texas.gov/Docs/CR/htm/CR.42A.htm",
    sourceName: "Texas Constitution and Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Texas Constitution and Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Tex. Code Crim. Proc. art. 42A.751 Violation of conditions of community supervision.

Texas law governs proceedings after an alleged community supervision violation, including warrants, hearings, continuation, modification, revocation, confinement, and related court action. Consequences depend on the order, condition, alleged violation, hearing posture, court findings, and available sanctions.

Use this for Texas probation or community-supervision violation answers, but verify the written order and current court status.`,
  },
  {
    id: "tx-gov-508-145-parole-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TX",
    topicIds: ["supervision"],
    citation: "Tex. Gov't Code sec. 508.145",
    title: "Eligibility for release on parole",
    officialUrl: "https://statutes.capitol.texas.gov/Docs/GV/htm/GV.508.htm",
    sourceName: "Texas Constitution and Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Texas Constitution and Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Tex. Gov't Code sec. 508.145 Eligibility for release on parole.

Texas parole eligibility depends on the offense, sentence, time served, good conduct time where applicable, statutory exclusions, offense date, and Board of Pardons and Paroles rules. Eligibility is not the same as release.

Use this as Texas's parole eligibility framework source, not as a release-date calculator. A precise answer requires the sentence, offense, date, credits, and board status.`,
  },
  {
    id: "tx-gov-508-281-parole-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "TX",
    topicIds: ["supervision"],
    citation: "Tex. Gov't Code sec. 508.281",
    title: "Hearing after parole or mandatory supervision violation",
    officialUrl: "https://statutes.capitol.texas.gov/Docs/GV/htm/GV.508.htm",
    sourceName: "Texas Constitution and Statutes",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Texas Constitution and Statutes official chapter page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Tex. Gov't Code sec. 508.281 Hearing after parole or mandatory supervision violation.

Texas law governs hearings and procedures after alleged parole or mandatory supervision violations. Consequences depend on the written conditions, alleged violation, warrant or summons, hearing posture, board findings, and available sanctions.

Use this for Texas parole or mandatory supervision violation answers, but verify the written conditions and current board status.`,
  },
  {
    id: "ut-code-20a-2-101-voter-registration",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "UT",
    topicIds: ["voting"],
    citation: "Utah Code sec. 20A-2-101",
    title: "Eligibility for registration and voting",
    officialUrl: "https://le.utah.gov/xcode/Title20A/Chapter2/20A-2-S101.html",
    sourceName: "Utah Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Utah Code official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Utah Code sec. 20A-2-101 Eligibility for registration and voting.

Utah voter registration law sets baseline eligibility for registration and voting, including citizenship, age, residence, and disqualification rules. Utah generally restores voting rights when a person convicted of a felony is released from incarceration, so probation or parole alone does not usually bar voting under the statewide rule.

Use this as Utah's core felony voting-rights authority. A specific answer requires current incarceration status, felony conviction status, residence, citizenship, age, and registration timing.`,
  },
  {
    id: "ut-code-20a-2-201-registration-application",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "UT",
    topicIds: ["voting"],
    citation: "Utah Code sec. 20A-2-201",
    title: "Registering to vote",
    officialUrl: "https://le.utah.gov/xcode/Title20A/Chapter2/20A-2-S201.html",
    sourceName: "Utah Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Utah Code official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Utah Code sec. 20A-2-201 Registering to vote.

Utah law governs the voter registration process and timing. For people returning from incarceration, the registration process source should be read together with the eligibility and felony-disqualification rule in section 20A-2-101.

Use this as Utah's voter registration procedure hook, not as the complete felony voting-rights rule by itself.`,
  },
  {
    id: "ut-code-77-40a-301-expungement-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "UT",
    topicIds: ["expungement"],
    citation: "Utah Code sec. 77-40a-301",
    title: "Eligibility to expunge records",
    officialUrl: "https://le.utah.gov/xcode/Title77/Chapter40A/77-40a-S301.html",
    sourceName: "Utah Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Utah Code official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Utah Code sec. 77-40a-301 Eligibility to expunge records.

Utah expungement law sets eligibility rules and exclusions for expunging criminal records. Eligibility depends on the offense, disposition, number of convictions, waiting period, sentence completion, fines or restitution where relevant, pending cases, and statutory exclusions.

Use this as Utah's primary petition-based expungement eligibility authority. A specific answer requires the exact charge, disposition, conviction level, sentence completion facts, waiting period, and exclusion analysis.`,
  },
  {
    id: "ut-code-77-40a-303-certificate-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "UT",
    topicIds: ["expungement"],
    citation: "Utah Code sec. 77-40a-303",
    title: "Certificate of eligibility for expungement",
    officialUrl: "https://le.utah.gov/xcode/Title77/Chapter40A/77-40a-S303.html",
    sourceName: "Utah Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Utah Code official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Utah Code sec. 77-40a-303 Certificate of eligibility.

Utah's petition-based expungement process often requires obtaining a certificate of eligibility before seeking an expungement order. The certificate process checks statutory eligibility but does not itself guarantee a court will grant every requested order.

Use this as Utah's expungement process source, together with section 77-40a-301 and the applicable court order requirements.`,
  },
  {
    id: "ut-code-77-40a-201-automatic-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "UT",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Utah Code sec. 77-40a-201",
    title: "Automatic expungement and clean slate",
    officialUrl: "https://le.utah.gov/xcode/Title77/Chapter40A/77-40a-S201.html",
    sourceName: "Utah Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Utah Code official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Utah Code sec. 77-40a-201 Automatic expungement.

Utah's clean slate framework provides automatic expungement for eligible records when statutory criteria are met. Automatic expungement is limited by offense type, disposition, waiting periods, exclusion rules, and system eligibility.

Use this for Utah automatic expungement questions and for employment or housing screening questions where a record may already be sealed. Always distinguish automatic expungement from petition-based expungement.`,
  },
  {
    id: "ut-code-57-21-5-fair-housing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "UT",
    topicIds: ["housing"],
    citation: "Utah Code sec. 57-21-5",
    title: "Discriminatory housing practices",
    officialUrl: "https://le.utah.gov/xcode/Title57/Chapter21/57-21-S5.html",
    sourceName: "Utah Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Utah Code official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Utah Code sec. 57-21-5 Discriminatory housing practices.

Utah fair-housing law prohibits covered discriminatory housing practices based on protected characteristics, including sale, rental, advertising, terms, services, financing, and related conduct.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, Utah expungement law, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "ut-code-57-22-4-landlord-obligations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "UT",
    topicIds: ["housing"],
    citation: "Utah Code sec. 57-22-4",
    title: "Owner duties under the Fit Premises Act",
    officialUrl: "https://le.utah.gov/xcode/Title57/Chapter22/57-22-S4.html",
    sourceName: "Utah Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Utah Code official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Utah Code sec. 57-22-4 Owner's duties.

Utah's Fit Premises Act requires residential owners to maintain fit premises, comply with applicable health and safety codes, maintain common areas, make required repairs, and provide essential services where required by the rental agreement and law.

Use this as Utah's tenant-protection hook when a person with a criminal record is already housed and faces unsafe conditions. It is not a criminal-record screening rule.`,
  },
  {
    id: "ut-code-34a-5-106-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "UT",
    topicIds: ["employment"],
    citation: "Utah Code sec. 34A-5-106",
    title: "Discriminatory or prohibited employment practices",
    officialUrl: "https://le.utah.gov/xcode/Title34A/Chapter5/34A-5-S106.html",
    sourceName: "Utah Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Utah Code official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Utah Code sec. 34A-5-106 Discriminatory or prohibited employment practices.

Utah employment civil-rights law prohibits covered employment discrimination based on protected characteristics. It is useful employment-rights context, but criminal history is not itself a general protected class under this source.

For criminal-record employment questions, use this with Utah expungement law, occupational-licensing rules, federal law, and job-specific background-check requirements.`,
  },
  {
    id: "ut-code-58-1-401-licensing-denial-discipline",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "UT",
    topicIds: ["employment"],
    citation: "Utah Code sec. 58-1-401",
    title: "Grounds for refusal to issue license or disciplinary action",
    officialUrl: "https://le.utah.gov/xcode/Title58/Chapter1/58-1-S401.html",
    sourceName: "Utah Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Utah Code official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Utah Code sec. 58-1-401 Grounds for denial of license or disciplinary proceedings.

Utah occupational and professional licensing law authorizes denial, restriction, probation, suspension, revocation, or other discipline for listed grounds, including criminal conduct or conviction in circumstances defined by statute and board rules. Occupation-specific chapters may add additional criminal-history rules.

Use this as Utah's occupational-licensing criminal-record authority, with the exact board statute for the occupation at issue.`,
  },
  {
    id: "ut-code-77-7-15-temporary-questioning",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "UT",
    topicIds: ["police"],
    citation: "Utah Code sec. 77-7-15",
    title: "Authority of peace officer to stop and question suspect",
    officialUrl: "https://le.utah.gov/xcode/Title77/Chapter7/77-7-S15.html",
    sourceName: "Utah Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Utah Code official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Utah Code sec. 77-7-15 Authority of peace officer to stop and question suspect.

Utah law authorizes a peace officer to stop a person in a public place when the officer has reasonable suspicion that the person has committed, is committing, or is about to commit a public offense, and to demand the person's name, address, and explanation of actions. The detention may not extend beyond what is reasonably necessary to effect its purpose.

Use this as Utah's stop-and-identify authority. It must be read with federal and Utah constitutional limits, and it does not mean a person must consent to a search or answer every police question.`,
  },
  {
    id: "ut-code-77-23a-4-recording-communications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "UT",
    topicIds: ["police"],
    citation: "Utah Code sec. 77-23a-4",
    title: "Interception, disclosure, or use of wire, electronic, or oral communications",
    officialUrl: "https://le.utah.gov/xcode/Title77/Chapter23A/77-23a-S4.html",
    sourceName: "Utah Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Utah Code official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Utah Code sec. 77-23a-4 Interception, disclosure, or use of wire, electronic, or oral communications prohibited; exceptions.

Utah law governs interception and recording of wire, electronic, and oral communications and includes exceptions, including consent-based exceptions. Utah is generally treated as a one-party-consent state for recording conversations, subject to statutory details and privacy expectations.

Use this as Utah's recording/privacy hook. For recording police, analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "ut-code-77-18-105-probation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "UT",
    topicIds: ["supervision"],
    citation: "Utah Code sec. 77-18-105",
    title: "Probation and conditions",
    officialUrl: "https://le.utah.gov/xcode/Title77/Chapter18/77-18-S105.html",
    sourceName: "Utah Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Utah Code official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Utah Code sec. 77-18-105 Probation and conditions.

Utah law authorizes probation and probation conditions. The controlling obligations come from the statute, sentence, written probation order, supervision agreement, court orders, and Department of Corrections or county supervision rules.

Use this as Utah's probation framework source, together with the person's written sentencing order and supervision conditions.`,
  },
  {
    id: "ut-code-77-18-108-probation-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "UT",
    topicIds: ["supervision"],
    citation: "Utah Code sec. 77-18-108",
    title: "Violation of probation",
    officialUrl: "https://le.utah.gov/xcode/Title77/Chapter18/77-18-S108.html",
    sourceName: "Utah Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Utah Code official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Utah Code sec. 77-18-108 Violation of probation.

Utah law governs court action after alleged probation violations, including hearings, continued probation, modification, revocation, and sanctions. Consequences depend on the written conditions, alleged violation, hearing posture, court findings, and available sentencing options.

Use this for Utah probation violation answers, but verify the written order and current court status before giving specific guidance.`,
  },
  {
    id: "ut-code-77-27-5-parole-board",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "UT",
    topicIds: ["supervision"],
    citation: "Utah Code sec. 77-27-5",
    title: "Board of Pardons and Parole authority",
    officialUrl: "https://le.utah.gov/xcode/Title77/Chapter27/77-27-S5.html",
    sourceName: "Utah Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Utah Code official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Utah Code sec. 77-27-5 Board of Pardons and Parole authority.

Utah parole decisions are controlled by the Board of Pardons and Parole and depend on sentence, offense, parole guidelines, institutional record, risk, victim input where applicable, and board discretion. Parole eligibility and release are not the same thing.

Use this as Utah's parole authority framework source, not as a release-date calculator.`,
  },
  {
    id: "ut-code-77-27-11-parole-violation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "UT",
    topicIds: ["supervision"],
    citation: "Utah Code sec. 77-27-11",
    title: "Violation of parole",
    officialUrl: "https://le.utah.gov/xcode/Title77/Chapter27/77-27-S11.html",
    sourceName: "Utah Legislature",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Utah Code official section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `Utah Code sec. 77-27-11 Violation of parole.

Utah law governs alleged parole violations, warrants or retaking, hearings, revocation, continuation, and other Board of Pardons and Parole responses. Consequences depend on written parole conditions, the alleged violation, custody status, board process, and findings.

Use this for Utah parole violation answers, but verify the written parole conditions and current board status.`,
  },
  {
    id: "vt-17-vsa-2121-voter-eligibility",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VT",
    topicIds: ["voting"],
    citation: "17 V.S.A. sec. 2121",
    title: "Eligibility of voters",
    officialUrl: "https://legislature.vermont.gov/statutes/section/17/043/02121",
    sourceName: "Vermont General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Vermont Statutes Online section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `17 V.S.A. sec. 2121 Eligibility of voters.

Vermont voter eligibility law requires United States citizenship, Vermont residence, the voter's oath, and age 18 or older. The statute does not impose a felony-conviction or incarceration-based voting disqualification, so Vermont is one of the states where people may vote even while incarcerated if otherwise eligible.

Use this as Vermont's core voting-rights authority. A specific answer requires citizenship, Vermont residence, oath status, age, registration procedure, and facility or absentee-ballot logistics if the person is incarcerated.`,
  },
  {
    id: "vt-17-vsa-2144-registration-application",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VT",
    topicIds: ["voting"],
    citation: "17 V.S.A. sec. 2144",
    title: "Application for addition to checklist",
    officialUrl: "https://legislature.vermont.gov/statutes/section/17/043/02144",
    sourceName: "Vermont General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Vermont Statutes Online section page identified June 27, 2026",
    reviewStatus: "approved",
    text: `17 V.S.A. sec. 2144 Application for addition to checklist.

Vermont law governs voter registration applications and checklist addition. For incarcerated voters or people with convictions, the key point is that ordinary eligibility and registration procedures apply; there is no felony disenfranchisement step in section 2121.

Use this as Vermont's voter registration process hook, together with section 2121.`,
  },
  {
    id: "vt-13-vsa-7602-expungement-qualifying-crimes",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VT",
    topicIds: ["expungement"],
    citation: "13 V.S.A. sec. 7602",
    title: "Expungement and sealing of qualifying crimes",
    officialUrl: "https://legislature.vermont.gov/statutes/section/13/230/07602",
    sourceName: "Vermont General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Vermont Statutes Online section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `13 V.S.A. sec. 7602 Expungement and sealing of qualifying crimes.

Vermont law allows expungement or sealing for qualifying criminal history records when statutory criteria are met. Eligibility depends on whether the offense is a qualifying crime, disposition, conviction status, waiting period, restitution, later convictions, pending cases, and statutory exclusions.

Use this as Vermont's primary record-clearing eligibility authority. A specific answer requires the exact offense, disposition, sentence completion facts, waiting period, restitution status, and whether the person seeks expungement or sealing.`,
  },
  {
    id: "vt-13-vsa-7603-expungement-procedure",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VT",
    topicIds: ["expungement"],
    citation: "13 V.S.A. sec. 7603",
    title: "Expungement and sealing procedure",
    officialUrl: "https://legislature.vermont.gov/statutes/section/13/230/07603",
    sourceName: "Vermont General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Vermont Statutes Online section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `13 V.S.A. sec. 7603 Petition, notice, hearing, and order procedure for expungement or sealing.

Vermont law sets procedural rules for petitions, notice, prosecutor response, hearings, and court orders for expungement or sealing. Procedure matters because qualifying eligibility does not automatically mean a record is cleared without the required process unless another automatic provision applies.

Use this with section 7602 when explaining how someone seeks Vermont expungement or sealing.`,
  },
  {
    id: "vt-13-vsa-7606-expungement-effect",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VT",
    topicIds: ["expungement", "employment", "housing"],
    citation: "13 V.S.A. sec. 7606",
    title: "Effect of expungement",
    officialUrl: "https://legislature.vermont.gov/statutes/section/13/230/07606",
    sourceName: "Vermont General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Vermont Statutes Online section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `13 V.S.A. sec. 7606 Effect of expungement.

Vermont law provides that, after expungement, the person is treated in all respects as if never arrested, convicted, or sentenced for the offense. For employment, license, civil right, privilege, or witness questions, a person may be required to answer only about arrests or convictions that have not been expunged, and official responses to inquiries should state that no criminal record exists.

Use this after confirming a Vermont expungement order exists, especially for employment, licensing, housing, and application-disclosure questions.`,
  },
  {
    id: "vt-9-vsa-4503-fair-housing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VT",
    topicIds: ["housing"],
    citation: "9 V.S.A. sec. 4503",
    title: "Fair housing and public accommodations discrimination",
    officialUrl: "https://legislature.vermont.gov/statutes/section/09/139/04503",
    sourceName: "Vermont General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Vermont Statutes Online section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `9 V.S.A. sec. 4503 Fair housing and public accommodations discrimination.

Vermont fair-housing law prohibits covered discriminatory housing practices based on protected characteristics, including sale, rental, advertising, terms, services, and related conduct.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, Vermont expungement and sealing law, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "vt-9-vsa-4457-landlord-obligations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VT",
    topicIds: ["housing"],
    citation: "9 V.S.A. sec. 4457",
    title: "Landlord obligations; habitability",
    officialUrl: "https://legislature.vermont.gov/statutes/section/09/137/04457",
    sourceName: "Vermont General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Vermont Statutes Online section page identified June 27, 2026",
    reviewStatus: "approved",
    text: `9 V.S.A. sec. 4457 Landlord obligations; habitability.

Vermont residential rental law requires landlords to maintain premises in a safe, clean, and habitable condition and to comply with applicable building, housing, and health regulations. Habitability duties matter when a tenant with a criminal record is already housed and faces unsafe conditions.

Use this as Vermont's tenant-protection hook, not as a criminal-record screening rule.`,
  },
  {
    id: "vt-21-vsa-495-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VT",
    topicIds: ["employment"],
    citation: "21 V.S.A. sec. 495",
    title: "Unlawful employment practices",
    officialUrl: "https://legislature.vermont.gov/statutes/section/21/005/00495",
    sourceName: "Vermont General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Vermont Statutes Online section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `21 V.S.A. sec. 495 Unlawful employment practices.

Vermont employment civil-rights law prohibits covered employment discrimination based on protected characteristics. It is useful employment-rights context, but criminal history is not itself a general protected class under this source.

For criminal-record employment questions, use this with Vermont expungement and sealing law, occupational-licensing rules, federal law, and job-specific background-check requirements.`,
  },
  {
    id: "vt-3-vsa-129a-professional-discipline",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VT",
    topicIds: ["employment"],
    citation: "3 V.S.A. sec. 129a",
    title: "Unprofessional conduct for professional licensing",
    officialUrl: "https://legislature.vermont.gov/statutes/section/03/005/00129a",
    sourceName: "Vermont General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Vermont Statutes Online section page identified June 27, 2026",
    reviewStatus: "approved",
    text: `3 V.S.A. sec. 129a Unprofessional conduct.

Vermont professional licensing law identifies conduct that can support discipline or licensing action by regulated professional boards, including criminal conduct in circumstances defined by statute, rule, and occupation-specific requirements.

Use this as Vermont's general professional-licensing criminal-record hook, with the exact occupation-specific statute or board rule for a specific license.`,
  },
  {
    id: "vt-24-vsa-1983-police-powers",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VT",
    topicIds: ["police"],
    citation: "24 V.S.A. sec. 1983",
    title: "Powers of municipal police officers",
    officialUrl: "https://legislature.vermont.gov/statutes/section/24/055/01983",
    sourceName: "Vermont General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Vermont Statutes Online section page identified June 27, 2026",
    reviewStatus: "approved",
    text: `24 V.S.A. sec. 1983 Powers of municipal police officers.

Vermont law provides statutory authority for municipal police officers. Police encounter questions in Vermont are governed primarily by constitutional search-and-seizure law, arrest authority, court decisions, and agency policy rather than a broad state stop-and-identify statute.

Use this as a Vermont police-authority hook. Do not treat it as a general duty to answer every police question or consent to a search.`,
  },
  {
    id: "vt-13-vsa-3016-false-reports",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VT",
    topicIds: ["police"],
    citation: "13 V.S.A. sec. 3016",
    title: "False reports to law enforcement authorities",
    officialUrl: "https://legislature.vermont.gov/statutes/section/13/067/03016",
    sourceName: "Vermont General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Vermont Statutes Online section page identified June 27, 2026",
    reviewStatus: "approved",
    text: `13 V.S.A. sec. 3016 False reports to law enforcement authorities.

Vermont criminal law penalizes knowingly giving false information to law enforcement in specified contexts. This is relevant to police encounters because providing false information can create separate legal exposure even when a person may have a right to remain silent.

Use this as Vermont's false-information police encounter hook. It does not create a blanket requirement to answer every police question.`,
  },
  {
    id: "vt-28-vsa-252-probation-conditions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VT",
    topicIds: ["supervision"],
    citation: "28 V.S.A. sec. 252",
    title: "Conditions of probation",
    officialUrl: "https://legislature.vermont.gov/statutes/section/28/005/00252",
    sourceName: "Vermont General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Vermont Statutes Online section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `28 V.S.A. sec. 252 Conditions of probation.

Vermont law authorizes probation conditions and supervision requirements. The controlling obligations come from the statute, sentence, written probation order, court modifications, and Department of Corrections supervision rules.

Use this as Vermont's probation framework source, together with the person's written sentencing order and conditions.`,
  },
  {
    id: "vt-28-vsa-253-probation-modification",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VT",
    topicIds: ["supervision"],
    citation: "28 V.S.A. sec. 253",
    title: "Modification of probation conditions",
    officialUrl: "https://legislature.vermont.gov/statutes/section/28/005/00253",
    sourceName: "Vermont General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Vermont Statutes Online section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `28 V.S.A. sec. 253 Modification of probation conditions.

Vermont law allows probation conditions to be modified through the proper court process. Modification questions depend on the original order, alleged need for change, notice, hearing posture, and court action.

Use this for Vermont probation condition-change questions, alongside section 252 and the written order.`,
  },
  {
    id: "vt-28-vsa-255-probation-discharge",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VT",
    topicIds: ["supervision"],
    citation: "28 V.S.A. sec. 255",
    title: "Discharge from probation",
    officialUrl: "https://legislature.vermont.gov/statutes/section/28/005/00255",
    sourceName: "Vermont General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Vermont Statutes Online section page checked June 27, 2026",
    reviewStatus: "approved",
    text: `28 V.S.A. sec. 255 Discharge.

Vermont law provides that, upon termination of probation or earlier discharge, the probationer is generally relieved of obligations imposed by the court order and has satisfied the sentence for the crime, unless the court has ordered otherwise or another statutory exception applies.

Use this for Vermont probation completion and discharge questions.`,
  },
  {
    id: "vt-28-vsa-501-parole-board-authority",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VT",
    topicIds: ["supervision"],
    citation: "28 V.S.A. sec. 501",
    title: "Parole board authority",
    officialUrl: "https://legislature.vermont.gov/statutes/section/28/011/00501",
    sourceName: "Vermont General Assembly",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Vermont Statutes Online section page identified June 27, 2026",
    reviewStatus: "approved",
    text: `28 V.S.A. sec. 501 Parole board authority.

Vermont parole decisions depend on the sentence, minimum and maximum terms, Department of Corrections information, parole board authority, risk, supervision plan, and written conditions. Eligibility and release are not the same thing.

Use this as Vermont's parole framework source, not as a release-date calculator. A precise answer requires the sentence, board status, and written parole conditions.`,
  },
  {
    id: "va-const-art-ii-sec-1-voter-qualifications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VA",
    topicIds: ["voting"],
    citation: "Va. Const. art. II, sec. 1",
    title: "Qualifications of voters",
    officialUrl: "https://law.lis.virginia.gov/constitution/article2/section1/",
    sourceName: "Virginia Law",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Virginia Constitution official section checked June 27, 2026; felony voting rule requires current restoration and litigation review",
    reviewStatus: "approved",
    text: `Va. Const. art. II, sec. 1 Qualifications of voters.

Virginia's Constitution sets voter qualifications and states that a person convicted of a felony is not qualified to vote unless civil rights have been restored by the Governor or other appropriate authority. Current application can be affected by executive restoration policy and federal litigation involving the Virginia Readmission Act.

Use this as Virginia's core felony voting-rights authority, but do not give an automatic-restoration answer without checking current Department of Elections and restoration-of-rights guidance. A specific answer requires conviction offense, custody and supervision status, restoration order status, and any current court or election-administration rule.`,
  },
  {
    id: "va-code-24-2-400-registration-records",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VA",
    topicIds: ["voting"],
    citation: "Va. Code sec. 24.2-400",
    title: "Registration records and voter registration administration",
    officialUrl: "https://law.lis.virginia.gov/vacode/title24.2/chapter4/section24.2-400/",
    sourceName: "Virginia Law",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Virginia Code official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `Va. Code sec. 24.2-400 Registration records.

Virginia election law governs voter registration records and administration. For people with felony convictions, registration administration must be read with Article II, section 1 of the Virginia Constitution and current restoration-of-rights procedures.

Use this as Virginia's registration-administration hook, not as the full felony voting-rights rule by itself.`,
  },
  {
    id: "va-code-19-2-392-2-expungement",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VA",
    topicIds: ["expungement"],
    citation: "Va. Code sec. 19.2-392.2",
    title: "Expungement of police and court records",
    officialUrl: "https://law.lis.virginia.gov/vacode/title19.2/chapter23/section19.2-392.2/",
    sourceName: "Virginia Law",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Virginia Code official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `Va. Code sec. 19.2-392.2 Expungement of police and court records.

Virginia expungement law allows eligible people to petition for expungement of police and court records in specified nonconviction situations, including acquittal, nolle prosequi, dismissal, identity mistake, and other statutory categories. Eligibility and burden can depend on whether the charge was a misdemeanor or felony and whether continued record existence causes manifest injustice.

Use this as Virginia's primary traditional expungement authority. A specific answer requires the charge, disposition, case history, prior record, and whether the person seeks expungement or newer sealing relief.`,
  },
  {
    id: "va-code-19-2-392-6-sealing-definitions",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VA",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Va. Code sec. 19.2-392.6",
    title: "Sealing of criminal history record information",
    officialUrl: "https://law.lis.virginia.gov/vacode/title19.2/chapter23.2/section19.2-392.6/",
    sourceName: "Virginia Law",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Virginia Code official section identified June 27, 2026; effective dates and implementation require legal review",
    reviewStatus: "approved",
    text: `Va. Code sec. 19.2-392.6 Sealing of criminal history record information.

Virginia has a statutory sealing framework separate from traditional expungement. Sealing eligibility, procedures, exceptions, and effective dates are technical and may differ for automatic sealing, petition-based sealing, conviction records, deferred dispositions, and nonconviction records.

Use this as Virginia's record-sealing framework source for employment and housing screening questions, but verify current effective dates, implementation status, and exceptions before giving a specific answer.`,
  },
  {
    id: "va-code-19-2-392-13-effect-sealing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VA",
    topicIds: ["expungement", "employment", "housing"],
    citation: "Va. Code sec. 19.2-392.13",
    title: "Effect of sealing order",
    officialUrl: "https://law.lis.virginia.gov/vacode/title19.2/chapter23.2/section19.2-392.13/",
    sourceName: "Virginia Law",
    currentAsOf: "2026-06-27",
    currentAsOfLabel:
      "Virginia Code official section identified June 27, 2026; effective dates and implementation require legal review",
    reviewStatus: "approved",
    text: `Va. Code sec. 19.2-392.13 Effect of sealing order.

Virginia law describes the legal effect of sealing criminal history record information and access exceptions. The effect matters for employment, housing, licensing, law enforcement, and later criminal justice questions.

Use this after confirming a Virginia sealing order or automatic sealing applies. A specific answer requires the sealed offense, record type, agency seeking access, and any statutory exception.`,
  },
  {
    id: "va-code-36-96-3-fair-housing",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VA",
    topicIds: ["housing"],
    citation: "Va. Code sec. 36-96.3",
    title: "Unlawful discriminatory housing practices",
    officialUrl: "https://law.lis.virginia.gov/vacode/title36/chapter5.1/section36-96.3/",
    sourceName: "Virginia Law",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Virginia Code official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `Va. Code sec. 36-96.3 Unlawful discriminatory housing practices.

Virginia fair-housing law prohibits covered discriminatory housing practices based on protected characteristics. This is Virginia's core state fair-housing authority for sale, rental, advertising, terms, services, and related housing conduct.

Criminal history is not itself the same as a protected class under this source. Use this with federal HUD guidance, consumer-reporting law, Virginia expungement and sealing law, public housing rules, and local ordinances for criminal-record screening questions.`,
  },
  {
    id: "va-code-55-1-1220-landlord-maintenance",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VA",
    topicIds: ["housing"],
    citation: "Va. Code sec. 55.1-1220",
    title: "Landlord to maintain fit premises",
    officialUrl: "https://law.lis.virginia.gov/vacode/title55.1/chapter12/section55.1-1220/",
    sourceName: "Virginia Law",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Virginia Code official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `Va. Code sec. 55.1-1220 Landlord to maintain fit premises.

Virginia landlord-tenant law requires landlords to comply with building and housing codes materially affecting health and safety, make repairs and keep premises fit and habitable, maintain common areas, maintain supplied facilities and appliances, and provide required essential services.

Use this as Virginia's tenant-protection hook when a person with a criminal record is already housed and faces unsafe conditions. It is not a criminal-record screening rule.`,
  },
  {
    id: "va-code-2-2-3905-employment-discrimination",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VA",
    topicIds: ["employment"],
    citation: "Va. Code sec. 2.2-3905",
    title: "Unlawful discriminatory employment practices",
    officialUrl: "https://law.lis.virginia.gov/vacode/title2.2/chapter39/section2.2-3905/",
    sourceName: "Virginia Law",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Virginia Code official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `Va. Code sec. 2.2-3905 Unlawful discriminatory employment practices.

Virginia employment civil-rights law prohibits covered employment discrimination based on protected characteristics. It is useful employment-rights context, but criminal history is not itself a general protected class under this source.

For criminal-record employment questions, use this with Virginia expungement and sealing law, occupational-licensing rules, federal law, and job-specific background-check requirements.`,
  },
  {
    id: "va-code-54-1-204-licensing-criminal-history",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VA",
    topicIds: ["employment"],
    citation: "Va. Code sec. 54.1-204",
    title: "Prior convictions not sole basis for denial of license",
    officialUrl: "https://law.lis.virginia.gov/vacode/title54.1/chapter2/section54.1-204/",
    sourceName: "Virginia Law",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Virginia Code official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `Va. Code sec. 54.1-204 Prior convictions not to abridge rights.

Virginia occupational licensing law limits how prior criminal convictions may be used in licensing decisions and generally prevents denial solely because of a prior conviction unless the conviction directly relates to the occupation or profession, subject to statutory standards and board-specific rules.

Use this as Virginia's occupational-licensing criminal-record authority, with the exact board statute for the occupation at issue.`,
  },
  {
    id: "va-code-19-2-74-summons-misdemeanor",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VA",
    topicIds: ["police"],
    citation: "Va. Code sec. 19.2-74",
    title: "Issuance of summons instead of arrest for certain misdemeanors",
    officialUrl: "https://law.lis.virginia.gov/vacode/title19.2/chapter7/section19.2-74/",
    sourceName: "Virginia Law",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Virginia Code official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `Va. Code sec. 19.2-74 Issuance and service of summons in place of warrant in misdemeanor case; issuance of summons by special conservators of the peace.

Virginia law allows officers in many misdemeanor cases to issue a written summons and release the person after the person gives a written promise to appear, subject to statutory exceptions and identity or safety concerns.

Use this as Virginia's police encounter hook for citation versus custodial arrest questions. It is not a complete stop, search, questioning, or consent rule.`,
  },
  {
    id: "va-code-19-2-62-recording-communications",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VA",
    topicIds: ["police"],
    citation: "Va. Code sec. 19.2-62",
    title: "Interception, disclosure, or use of wire, electronic, or oral communications",
    officialUrl: "https://law.lis.virginia.gov/vacode/title19.2/chapter6/section19.2-62/",
    sourceName: "Virginia Law",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Virginia Code official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `Va. Code sec. 19.2-62 Interception, disclosure, etc., of wire, electronic or oral communications unlawful; penalties.

Virginia law governs interception and recording of wire, electronic, and oral communications. Virginia is generally treated as a one-party-consent state for recording conversations, subject to statutory details and privacy expectations.

Use this as Virginia's recording/privacy hook. For recording police, analyze public setting, interference with official duties, privacy expectations, and First Amendment public-recording principles.`,
  },
  {
    id: "va-code-19-2-303-suspension-probation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VA",
    topicIds: ["supervision"],
    citation: "Va. Code sec. 19.2-303",
    title: "Suspension or modification of sentence; probation",
    officialUrl: "https://law.lis.virginia.gov/vacode/title19.2/chapter18/section19.2-303/",
    sourceName: "Virginia Law",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Virginia Code official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `Va. Code sec. 19.2-303 Suspension or modification of sentence; probation.

Virginia law authorizes courts to suspend or modify sentences and place defendants on probation in appropriate cases. The controlling obligations come from the statute, sentencing order, written probation conditions, and supervision rules.

Use this as Virginia's probation framework source, together with the person's written sentencing order and conditions.`,
  },
  {
    id: "va-code-19-2-306-probation-revocation",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VA",
    topicIds: ["supervision"],
    citation: "Va. Code sec. 19.2-306",
    title: "Revocation of suspension of sentence and probation",
    officialUrl: "https://law.lis.virginia.gov/vacode/title19.2/chapter18/section19.2-306/",
    sourceName: "Virginia Law",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Virginia Code official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `Va. Code sec. 19.2-306 Revocation of suspension of sentence and probation.

Virginia law governs proceedings after alleged violations of probation or suspended sentence conditions, including revocation, continuation, modification, and sanctions. Consequences depend on the written order, type of violation, hearing posture, court findings, and available sentencing options.

Use this for Virginia probation violation answers, but verify the written order and current court status before giving specific guidance.`,
  },
  {
    id: "va-code-53-1-136-parole-board-powers",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VA",
    topicIds: ["supervision"],
    citation: "Va. Code sec. 53.1-136",
    title: "Powers and duties of the Virginia Parole Board",
    officialUrl: "https://law.lis.virginia.gov/vacode/title53.1/chapter4/section53.1-136/",
    sourceName: "Virginia Law",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Virginia Code official section checked June 27, 2026",
    reviewStatus: "approved",
    text: `Va. Code sec. 53.1-136 Powers and duties of Virginia Parole Board.

Virginia parole is limited for many modern felony sentences but remains relevant for eligible sentences, older offenses, geriatric release, and other board-supervised contexts. Board authority and release decisions depend on sentence, offense date, eligibility category, institutional record, risk, and written supervision conditions.

Use this as Virginia's parole board framework source, not as a release-date calculator.`,
  },
  {
    id: "va-code-53-1-165-parole-violations",
    authorityType: "statute",
    jurisdiction: "state",
    stateCode: "VA",
    topicIds: ["supervision"],
    citation: "Va. Code sec. 53.1-165",
    title: "Violation of parole; revocation process",
    officialUrl: "https://law.lis.virginia.gov/vacode/title53.1/chapter4/section53.1-165/",
    sourceName: "Virginia Law",
    currentAsOf: "2026-06-27",
    currentAsOfLabel: "Virginia Code official section identified June 27, 2026",
    reviewStatus: "approved",
    text: `Va. Code sec. 53.1-165 Violation of parole or postrelease supervision.

Virginia law governs alleged violations of parole or postrelease supervision, including retaking, hearings, revocation, continuation, and related board or court action. Consequences depend on the written conditions, alleged violation, custody status, and decisionmaker.

Use this for Virginia parole or postrelease supervision violation answers, but verify the written conditions and current board or court status.`,
  },
];
