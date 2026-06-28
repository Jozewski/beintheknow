export type StateTopicResource = {
  label: string;
  url: string;
};

export type StateTopicResourceEntry = {
  jurisdiction: "federal" | "state";
  stateCode?: string;
  topicId: string;
  label?: string;
  keywords?: string;
  summary?: string;
  resources?: StateTopicResource[];
  learnMoreUrl?: string;
  reviewStatus?: string;
};

export const stateTopicResourceEntries = [
  {
    "jurisdiction": "federal",
    "topicId": "voting",
    "label": "Federal Law",
    "keywords": "voting vote rights restoration felony disenfranchisement",
    "summary": "Federal law does not automatically restore voting rights after a felony conviction. Rights depend on your state. Understanding the federal framework is the first step to knowing when and how you can vote again.",
    "resources": [
      {
        "label": "DOJ Voting Rights — U.S. Department of Justice",
        "url": "https://www.justice.gov/voting-rights"
      },
      {
        "label": "Voting Rights — USAGov",
        "url": "https://www.usa.gov/voting-rights"
      },
      {
        "label": "Voting Rights Restoration — Brennan Center for Justice",
        "url": "https://www.brennancenter.org/issues/ensure-every-american-can-vote/voting-rights-restoration"
      }
    ],
    "learnMoreUrl": "https://www.justice.gov/voting-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "federal",
    "topicId": "expungement",
    "label": "Federal Law",
    "keywords": "expungement record sealing federal conviction clear criminal history",
    "summary": "Federal expungement options are limited compared to state law. Understanding what federal records can and cannot be cleared — and what alternatives exist — is critical to protecting your future opportunities.",
    "resources": [
      {
        "label": "Federal Expungement & Record Sealing — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/federalrestoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Federal Sentencing Guidelines — U.S. Sentencing Commission",
        "url": "https://www.ussc.gov/guidelines/2025-guidelines-manual"
      },
      {
        "label": "Clemency and Pardons — ACLU",
        "url": "https://www.aclu.org/issues/smart-justice/parole-and-release/clemency-and-pardons"
      }
    ],
    "learnMoreUrl": "https://www.justice.gov/pardon",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "federal",
    "topicId": "housing",
    "label": "Federal Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony",
    "summary": "The Fair Housing Act protects you from some forms of housing discrimination. HUD guidance limits blanket bans on renting to people with criminal records. Know your rights before you apply.",
    "resources": [
      {
        "label": "Fair Housing Rights — HUD",
        "url": "https://www.hud.gov/program_offices/fair_housing_equal_opp/fair_housing_rights_and_obligations"
      },
      {
        "label": "HUD removes Fair Housing Guidance Documents — NLIHC",
        "url": "https://nlihc.org/resource/hud-publishes-notice-removing-fair-housing-guidance-documents"
      },
      {
        "label": "Ensure Fair Screening Practices for Tenants with Conviction Histories — NLIHC",
        "url": "https://nlihc.org/resource/ensure-fair-screening-practices-tenants-conviction-histories"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/hud-partners#FairHousing",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "federal",
    "topicId": "employment",
    "label": "Federal Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony",
    "summary": "Federal law through the EEOC limits how employers can use criminal records in hiring decisions. Title VII protections apply. Learn what employers can ask, when they can ask it, and what your options are if you are denied a job.",
    "resources": [
      {
        "label": "EEOC Guidance on Criminal Records — EEOC",
        "url": "https://www.eeoc.gov/laws/guidance/questions-and-answers-clarify-and-provide-common-interpretation-uniform-guidelines"
      },
      {
        "label": "Reentry Employment Resources — U.S. Dept. of Labor",
        "url": "https://www.dol.gov/agencies/eta/reentry"
      },
      {
        "label": "Ban the Box and Fair Chance Laws — ADP Research Institute",
        "url": "https://sbshrs.adpinfo.com/blog/top-faqs-on-criminal-history-inquiries-ban-the-box-and-fair-chance-laws"
      }
    ],
    "learnMoreUrl": "https://www.eeoc.gov",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "federal",
    "topicId": "police",
    "label": "Federal Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop",
    "summary": "The Fourth and Fifth Amendments protect you during police interactions. You have the right to remain silent. You have the right to refuse searches in certain situations. Knowing these rights before an encounter can protect you.",
    "resources": [
      {
        "label": "Stopped by Police — Your Rights (ACLU)",
        "url": "https://www.aclu.org/know-your-rights/stopped-by-police"
      },
      {
        "label": "Police Misconduct Laws — DOJ Civil Rights Division",
        "url": "https://www.justice.gov/crt/addressing-police-misconduct-laws-enforced-department-justice"
      },
      {
        "label": "Fourth Amendment — U.S. Constitution (Congress.gov)",
        "url": "https://constitution.congress.gov/constitution/amendment-4/"
      }
    ],
    "learnMoreUrl": "https://www.aclu.org/know-your-rights/stopped-by-police",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "federal",
    "topicId": "parole",
    "label": "Supervision-Specific",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment",
    "summary": "Federal parole was abolished in 1987. Most federal releases are now called supervised release. Understanding your conditions, what officers can search, and what triggers a violation can help you complete supervision successfully.",
    "resources": [
      {
        "label": "Federal Supervised Release Toolkit — U.S. Sentencing Commission",
        "url": "https://www.ussc.gov/education/supervised-release-toolkit"
      },
      {
        "label": "Supervised Release Conditions — Federal Defenders",
        "url": "https://www.ussc.gov/topic/supervised-release"
      },
      {
        "label": "U.S. Parole Commission — DOJ",
        "url": "https://www.justice.gov/uspc"
      }
    ],
    "learnMoreUrl": "https://www.uscourts.gov/services-forms/probation-and-pretrial-services",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "federal",
    "topicId": "probation",
    "label": "Supervision-Specific",
    "keywords": "probation federal conditions violation search officer rights reporting",
    "summary": "Federal probation is supervised directly by U.S. Probation Officers. Your conditions are set by the court. Learn what conditions are standard, what your search rights are, what employment reporting means, and what can trigger a revocation hearing.",
    "resources": [
      {
        "label": "Federal Probation Services — U.S. Courts",
        "url": "https://www.uscourts.gov/services-forms/probation-and-pretrial-services"
      },
      {
        "label": "Probation Conditions — Federal Probation Officers Association",
        "url": "https://www.law.cornell.edu/uscode/text/18/3563"
      },
      {
        "label": "Probation & Parole Rights — ACLU",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.uscourts.gov/services-forms/probation-and-pretrial-services",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AL",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement alabama al",
    "summary": "Alabama disenfranchises people convicted of \"infamous crimes.\" Rights are not automatically restored in many cases. Most people must apply for a Certificate of Eligibility to Register to Vote through the Alabama Board of Pardons and Paroles.",
    "resources": [
      {
        "label": "Voting Rights Restoration — Alabama Board of Pardons and Paroles",
        "url": "https://paroles.alabama.gov/about-us/pardons-restoration-of-voting-rights/"
      },
      {
        "label": "Alabama Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/alabama"
      },
      {
        "label": "Alabama Legal Help",
        "url": "https://www.alabamalegalhelp.org/"
      }
    ],
    "learnMoreUrl": "https://paroles.alabama.gov/about-us/pardons-restoration-of-voting-rights/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AL",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history alabama al",
    "summary": "Alabama allows expungement for certain non-convictions and limited misdemeanor and felony cases under state law.",
    "resources": [
      {
        "label": "Alabama Restoration of Rights & Expungement — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/alabama-restoration-rights-expungement-sealing/"
      },
      {
        "label": "Alabama Expungement Statutes",
        "url": "https://law.justia.com/codes/alabama/2024/title-15/chapter-27/"
      },
      {
        "label": "Alabama Legal Help",
        "url": "https://www.alabamalegalhelp.org/"
      }
    ],
    "learnMoreUrl": "https://ccresourcecenter.org/state-restoration-profiles/alabama-restoration-of-rights-pardon-expungement-sealing/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AL",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony alabama al",
    "summary": "Federal Fair Housing protections apply in Alabama. HUD and Alabama housing agencies provide discrimination complaint resources.",
    "resources": [
      {
        "label": "Alabama Housing Finance Authority",
        "url": "https://www.ahfa.com/"
      },
      {
        "label": "HUD Alabama Housing Resources",
        "url": "https://www.hud.gov/states/alabama"
      },
      {
        "label": "Alabama Legal Help",
        "url": "https://www.alabamalegalhelp.org/"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/alabama",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AL",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony alabama al",
    "summary": "Alabama has no statewide private-employer ban-the-box law. Federal EEOC protections still apply.",
    "resources": [
      {
        "label": "Alabama Department of Labor",
        "url": "https://labor.alabama.gov/"
      },
      {
        "label": "EEOC Birmingham Office",
        "url": "https://www.eeoc.gov/field-office/birmingham/location"
      },
      {
        "label": "Alabama Legal Help",
        "url": "https://www.alabamalegalhelp.org/"
      }
    ],
    "learnMoreUrl": "https://labor.alabama.gov/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AL",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop alabama al",
    "summary": "Residents have constitutional protections during police encounters including the right to remain silent and request an attorney.",
    "resources": [
      {
        "label": "ACLU of Alabama",
        "url": "https://www.aclualabama.org/"
      },
      {
        "label": "Alabama Attorney General",
        "url": "https://www.alabamaag.gov/"
      },
      {
        "label": "DOJ Civil Rights Complaint",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclualabama.org/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AL",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment alabama al",
    "summary": "Alabama parole is supervised by the Alabama Board of Pardons and Paroles. Conditions include reporting requirements, travel restrictions, and compliance with release terms.",
    "resources": [
      {
        "label": "Alabama Board of Pardons and Paroles",
        "url": "https://paroles.alabama.gov/"
      },
      {
        "label": "Alabama DOC Reentry Services",
        "url": "https://doc.alabama.gov/RehabReentryLanding.aspx"
      },
      {
        "label": "Alabama Legal Help",
        "url": "https://www.alabamalegalhelp.org/"
      }
    ],
    "learnMoreUrl": "https://paroles.alabama.gov/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AL",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting alabama al",
    "summary": "Probation supervision in Alabama is managed through the Department of Corrections and local courts.",
    "resources": [
      {
        "label": "Alabama DOC Probation & Parole",
        "url": "https://doc.alabama.gov/CommCorrections.aspx"
      },
      {
        "label": "Alabama Legal Help",
        "url": "https://www.alabamalegalhelp.org/"
      },
      {
        "label": "ACLU Know Your Rights",
        "url": "https://www.aclu.org/know-your-rights"
      }
    ],
    "learnMoreUrl": "https://johntottenlaw.com/know-your-rights-while-out-on-probation-in-alabama/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AK",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement alaska ak",
    "summary": "Voting rights are restored automatically after completion of incarceration, parole, and probation.",
    "resources": [
      {
        "label": "Alaska Voting Rights — Alaska Division of Elections",
        "url": "https://www.elections.alaska.gov/voter-information/#Reg"
      },
      {
        "label": "List of Felonies Involving Moral Turpitude — Alaska Division of Elections",
        "url": "https://www.elections.alaska.gov/wp-content/uploads/2024/07/20240717_List-of-Felonies-Involving-Moral-Turpitude.pdf"
      },
      {
        "label": "Alaska Legal Services Corporation",
        "url": "https://alaskalawhelp.org/"
      }
    ],
    "learnMoreUrl": "https://www.usvotefoundation.org/voting-rights-restoration/alaska",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AK",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history alaska ak",
    "summary": "Alaska has limited sealing and expungement relief for non-convictions and some juvenile matters.",
    "resources": [
      {
        "label": "Alaska Restoration of Rights & Expungement — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/alaska-expungment-pardon-sealing/"
      },
      {
        "label": "Alaska Court System",
        "url": "https://courts.alaska.gov/"
      },
      {
        "label": "Alaska Legal Services Corporation",
        "url": "https://alaskalawhelp.org/"
      }
    ],
    "learnMoreUrl": "https://ccresourcecenter.org/state-restoration-profiles/alaska-expungment-pardon-sealing/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AK",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony alaska ak",
    "summary": "Federal Fair Housing protections apply throughout Alaska.",
    "resources": [
      {
        "label": "Alaska Housing Finance Corporation",
        "url": "https://www.ahfc.us/"
      },
      {
        "label": "HUD Alaska",
        "url": "https://www.hud.gov/states/alaska"
      },
      {
        "label": "Alaska Legal Services",
        "url": "https://alaskalawhelp.org/"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/alaska",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AK",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony alaska ak",
    "summary": "Alaska has no statewide ban-the-box law for private employers.",
    "resources": [
      {
        "label": "Alaska Department of Labor",
        "url": "https://labor.alaska.gov/"
      },
      {
        "label": "EEOC Seattle Office",
        "url": "https://www.eeoc.gov/field-office/seattle/location"
      },
      {
        "label": "Alaska Legal Services",
        "url": "https://alaskalawhelp.org/"
      }
    ],
    "learnMoreUrl": "https://labor.alaska.gov/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AK",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop alaska ak",
    "summary": "Residents have federal constitutional protections during police interactions.",
    "resources": [
      {
        "label": "ACLU of Alaska",
        "url": "https://www.acluak.org/"
      },
      {
        "label": "Alaska Department of Law",
        "url": "https://law.alaska.gov/"
      },
      {
        "label": "DOJ Civil Rights Complaint",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.acluak.org/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AK",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment alaska ak",
    "summary": "Alaska parole is administered by the Alaska Board of Parole and Department of Corrections.",
    "resources": [
      {
        "label": "Alaska Board of Parole",
        "url": "https://doc.alaska.gov/parole-board/"
      },
      {
        "label": "Alaska DOC Reentry",
        "url": "https://doc.alaska.gov/reentry-programs/"
      },
      {
        "label": "Alaska Legal Services",
        "url": "https://alaskalawhelp.org/"
      }
    ],
    "learnMoreUrl": "https://doc.alaska.gov/parole-board/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AK",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting alaska ak",
    "summary": "Alaska probation supervision is managed through the Alaska Department of Corrections.",
    "resources": [
      {
        "label": "Alaska DOC Probation & Parole",
        "url": "https://doc.alaska.gov/probation-parole/"
      },
      {
        "label": "Alaska DOC Reentry Services",
        "url": "https://doc.alaska.gov/reentry-programs/"
      },
      {
        "label": "ACLU Probation & Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-parole-and-pardon"
      }
    ],
    "learnMoreUrl": "https://doc.alaska.gov/probation-parole/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AZ",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement arizona az",
    "summary": "Arizona automatically restores voting rights after completing the full sentence for a first felony offense. People with two or more felony convictions are permanently disenfranchised unless they receive a court order or pardon. You must re-register to vote after restoration.",
    "resources": [
      {
        "label": "Arizona Voting Rights — Secretary of State",
        "url": "https://azsos.gov/elections/voters/register"
      },
      {
        "label": "Arizona Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/arizona"
      },
      {
        "label": "Legal Help — Arizona Legal Center",
        "url": "https://azlawhelp.org"
      }
    ],
    "learnMoreUrl": "https://azsos.gov/elections/voters/register",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AZ",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history arizona az",
    "summary": "Arizona does not offer traditional expungement. The state's \"set aside\" process nullifies a conviction and removes civil disabilities but does not seal or destroy the record. Since 2022, some marijuana convictions are eligible for expungement. Record sealing for some non-conviction records became available in 2023.",
    "resources": [
      {
        "label": "Arizona Record Sealing & Set-Aside — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/arizona-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Arizona Courts — Setting Aside a Conviction",
        "url": "https://www.azcourts.gov/selfservicecenter/criminal-records"
      },
      {
        "label": "Legal Help — Arizona Law Help",
        "url": "https://azlawhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.azcourts.gov/selfservicecenter/criminal-records",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AZ",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony arizona az",
    "summary": "Arizona has no statewide fair chance housing law. Federal Fair Housing Act protections and HUD guidance on criminal records apply to all Arizona landlords. The Arizona Department of Housing and legal aid organizations assist with housing discrimination complaints.",
    "resources": [
      {
        "label": "Arizona Department of Housing",
        "url": "https://housing.az.gov"
      },
      {
        "label": "Fair Housing — HUD Arizona",
        "url": "https://www.hud.gov/states/arizona/renting"
      },
      {
        "label": "Housing Help — Arizona Law Help",
        "url": "https://azlawhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/arizona/renting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AZ",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony arizona az",
    "summary": "Arizona does not have a statewide ban-the-box law for private employers. Tucson has a city-level ordinance. Federal EEOC protections apply statewide. The Arizona Department of Economic Security provides workforce and reentry employment services.",
    "resources": [
      {
        "label": "Arizona DES — Job Seeker Services",
        "url": "https://des.az.gov/services/employment/workforce-services"
      },
      {
        "label": "EEOC — Phoenix District Office",
        "url": "https://www.eeoc.gov/field/phoenix"
      },
      {
        "label": "Employment Rights — Arizona Law Help",
        "url": "https://azlawhelp.org"
      }
    ],
    "learnMoreUrl": "https://des.az.gov/services/employment/workforce-services",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AZ",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop arizona az",
    "summary": "Arizona residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of Arizona provides know-your-rights resources. You have the right to remain silent and to refuse consent to a warrantless search. Arizona also has state constitutional protections.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Arizona",
        "url": "https://www.acluaz.org"
      },
      {
        "label": "Arizona AG — Civil Rights Division",
        "url": "https://www.azag.gov/civil-rights"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.acluaz.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AZ",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment arizona az",
    "summary": "Arizona abolished traditional parole in 1994. People released from Arizona prisons are placed on Community Supervision, administered by the Arizona Department of Corrections, Rehabilitation and Reentry. Conditions are set at release and violations may result in revocation.",
    "resources": [
      {
        "label": "Arizona DOC — Community Supervision",
        "url": "https://corrections.az.gov/community-supervision"
      },
      {
        "label": "Arizona DOC — Reentry Programs",
        "url": "https://corrections.az.gov/reentry"
      },
      {
        "label": "Parole Rights — Arizona Law Help",
        "url": "https://azlawhelp.org"
      }
    ],
    "learnMoreUrl": "https://corrections.az.gov/community-supervision",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AZ",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting arizona az",
    "summary": "Arizona probation is supervised by county adult probation departments. Conditions are set by the court and vary by case. Arizona has active diversion and probation completion programs including drug courts and mental health courts.",
    "resources": [
      {
        "label": "Arizona Supreme Court — Adult Probation",
        "url": "https://www.azcourts.gov/apd/Adult-Probation"
      },
      {
        "label": "Maricopa County Adult Probation (largest dept.)",
        "url": "https://www.maricopa.gov/5393/Adult-Probation"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.azcourts.gov/apd/Adult-Probation",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AR",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement arkansas ar",
    "summary": "In Arkansas, voting rights are automatically restored after completing your full sentence, including parole and probation. No petition or waiting period is required after sentence completion. You must re-register to vote. Fines and fees must also be paid.",
    "resources": [
      {
        "label": "Arkansas Voting Rights Restoration — Arkansas Secretary of State",
        "url": "https://www.sos.arkansas.gov/elections/voter-information/voter-registration-information/"
      },
      {
        "label": "Arkansas Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/arkansas"
      },
      {
        "label": "DOJ Guide to Arkansas Voting Rules",
        "url": "https://www.justice.gov/crt/media/1332106/dl"
      }
    ],
    "learnMoreUrl": "https://www.usvotefoundation.org/voting-rights-restoration/arkansas",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AR",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history arkansas ar",
    "summary": "Arkansas has broad record sealing laws (Arkansas Code § 16-90-1401). Misdemeanors and many felonies can be sealed after a five-year waiting period. Sealed records are deemed never to have occurred by law. Automatic sealing applies to most pardoned convictions.",
    "resources": [
      {
        "label": "Arkansas Record Sealing — Collateral Consequences Resource Center",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/arkansas-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Arkansas Code § 16-90-1401 — Sealing of Records",
        "url": "https://law.justia.com/codes/arkansas/subtitle-6/chapter-90/subchapter-14/"
      },
      {
        "label": "Record Sealing Help — Arkansas Legal Services Partnership",
        "url": "https://www.arlegalservices.org"
      }
    ],
    "learnMoreUrl": "https://ccresourcecenter.org/state-restoration-profiles/arkansas-restoration-of-rights-pardon-expungement-sealing/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AR",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony arkansas ar",
    "summary": "Arkansas has no statewide fair chance housing statute, but federal Fair Housing Act protections and HUD guidance on criminal records apply. The Arkansas Fair Housing Commission enforces state and federal fair housing laws.",
    "resources": [
      {
        "label": "Arkansas Fair Housing Commission",
        "url": "https://www.arkansas.gov/arfhc/"
      },
      {
        "label": "Fair Housing Help — HUD Arkansas",
        "url": "https://www.hud.gov/states/arkansas/renting"
      },
      {
        "label": "Housing Rights — Arkansas Legal Services Partnership",
        "url": "https://www.arlegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.arkansas.gov/arfhc/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AR",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony arkansas ar",
    "summary": "Arkansas enacted a fair chance hiring law for public employment. Private employers are not covered by statewide ban-the-box rules, but federal EEOC protections apply. The Arkansas Division of Workforce Services provides employment assistance for people in reentry.",
    "resources": [
      {
        "label": "Arkansas Division of Workforce Services",
        "url": "https://www.dws.arkansas.gov"
      },
      {
        "label": "EEOC — Little Rock Area Office",
        "url": "https://www.eeoc.gov/field/little-rock"
      },
      {
        "label": "Employment Help After a Conviction — Arkansas Legal Services",
        "url": "https://www.arlegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.dws.arkansas.gov",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AR",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop arkansas ar",
    "summary": "Arkansas residents have full Fourth and Fifth Amendment protections during police interactions. The ACLU of Arkansas provides know-your-rights guides. You may refuse consent to a search, remain silent, and request an attorney at any point after arrest.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Arkansas",
        "url": "https://www.acluarkansas.org"
      },
      {
        "label": "Filing a Civil Rights Complaint — Arkansas Attorney General",
        "url": "https://arkansasag.gov/consumer-protection/civil-rights/"
      },
      {
        "label": "Police Misconduct — DOJ Civil Rights Division",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.acluarkansas.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AR",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment arkansas ar",
    "summary": "Arkansas parole is administered by the Arkansas Post-Prison Transfer Board. Conditions are set at release and vary by case. Parole officers are assigned through the Division of Community Correction. Violations are reviewed through a formal hearing process.",
    "resources": [
      {
        "label": "Arkansas Post-Prison Transfer Board",
        "url": "https://doc.arkansas.gov/reentry-resources/post-prison-transfer-board/"
      },
      {
        "label": "Arkansas DOC — Division of Community Correction",
        "url": "https://doc.arkansas.gov/community-correction/"
      },
      {
        "label": "Parole Rights Help — Arkansas Legal Services",
        "url": "https://www.arlegalservices.org"
      }
    ],
    "learnMoreUrl": "https://doc.arkansas.gov/community-correction/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "AR",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting arkansas ar",
    "summary": "Arkansas probation is supervised by the Division of Community Correction. Conditions are set by the court and may include regular reporting, substance testing, and community service. The Division provides reentry services including housing and employment referrals.",
    "resources": [
      {
        "label": "Arkansas Division of Community Correction",
        "url": "https://doc.arkansas.gov/community-correction/"
      },
      {
        "label": "Probation and Parole — Arkansas DOC",
        "url": "https://doc.arkansas.gov/reentry-resources/"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://doc.arkansas.gov/community-correction/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CA",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement california ca",
    "summary": "California restored voting rights to people on parole in 2020 (Prop 17). People on probation could already vote. Rights are restored upon release from state prison. You must re-register to vote. People in county jail for misdemeanors can also vote.",
    "resources": [
      {
        "label": "Voting After a Conviction — California Secretary of State",
        "url": "https://www.sos.ca.gov/elections/voter-registration/voting-criminal-conviction"
      },
      {
        "label": "Know Your Voting Rights — ACLU of California",
        "url": "https://www.acluca.org/resources/voting-rights/"
      },
      {
        "label": "Voting Rights — California Law Help",
        "url": "https://lawhelpca.org"
      }
    ],
    "learnMoreUrl": "https://www.sos.ca.gov/elections/voter-registration/voting-criminal-conviction",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CA",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history california ca",
    "summary": "California offers broad record relief. PC 1203.4 allows dismissal of convictions after probation. AB 1076 (2023) created automatic record sealing for eligible offenses. Prop 47 and Prop 64 provide additional relief for drug and marijuana offenses. California's Clean Slate law is one of the most expansive in the country.",
    "resources": [
      {
        "label": "California Clean Slate & Record Sealing — CA Courts",
        "url": "https://www.courts.ca.gov/selfhelp-expungement.htm"
      },
      {
        "label": "Record Clearing Resources — Root & Rebound",
        "url": "https://rootandrebound.org/roads-to-reentry/"
      },
      {
        "label": "California Record Relief Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/california-restoration-of-rights-pardon-expungement-sealing/"
      }
    ],
    "learnMoreUrl": "https://www.courts.ca.gov/selfhelp-expungement.htm",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CA",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony california ca",
    "summary": "California has strong fair chance housing protections. The Tenant Protection Act and local ordinances in Los Angeles, San Francisco, and others limit criminal record screening. The California Civil Rights Department enforces housing discrimination laws statewide.",
    "resources": [
      {
        "label": "California Civil Rights Dept. — Housing Discrimination",
        "url": "https://calcivilrights.ca.gov/housing/"
      },
      {
        "label": "Fair Housing — HUD California",
        "url": "https://www.hud.gov/states/california/renting"
      },
      {
        "label": "Reentry Housing Rights — Root & Rebound",
        "url": "https://rootandrebound.org/roads-to-reentry/chapter-5/"
      }
    ],
    "learnMoreUrl": "https://calcivilrights.ca.gov/housing/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CA",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony california ca",
    "summary": "California has a statewide ban-the-box law (AB 1008, 2018) for private employers with 5+ employees. The California Civil Rights Department enforces restrictions on using criminal records in employment. The state also limits occupational licensing barriers for people with records.",
    "resources": [
      {
        "label": "AB 1008 — Fair Chance Hiring, California Civil Rights Dept.",
        "url": "https://calcivilrights.ca.gov/fair-chance-act/"
      },
      {
        "label": "Reentry Employment Rights — Root & Rebound",
        "url": "https://rootandrebound.org/roads-to-reentry/chapter-4/"
      },
      {
        "label": "EEOC — Los Angeles District Office",
        "url": "https://www.eeoc.gov/field/los-angeles"
      }
    ],
    "learnMoreUrl": "https://calcivilrights.ca.gov/fair-chance-act/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CA",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop california ca",
    "summary": "California residents have robust Fourth and Fifth Amendment protections plus additional state constitutional rights. SB 2 (2021) reformed peace officer accountability. The ACLU of California is a leading resource for know-your-rights guidance. You have the right to film police in public.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of California",
        "url": "https://www.acluca.org/resources/"
      },
      {
        "label": "California AG — Law Enforcement Accountability",
        "url": "https://oag.ca.gov/law-enforcement"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.acluca.org/resources/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CA",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment california ca",
    "summary": "California parole is administered by the California Department of Corrections and Rehabilitation (CDCR). The Board of Parole Hearings handles parole decisions. Conditions include reporting, curfews, and search conditions. Violations are reviewed at a formal revocation proceeding.",
    "resources": [
      {
        "label": "CA Board of Parole Hearings — CDCR",
        "url": "https://www.cdcr.ca.gov/bph/"
      },
      {
        "label": "Parole Rights — Root & Rebound",
        "url": "https://rootandrebound.org/roads-to-reentry/chapter-7/"
      },
      {
        "label": "CDCR — Reentry Resources",
        "url": "https://www.cdcr.ca.gov/reentry/"
      }
    ],
    "learnMoreUrl": "https://www.cdcr.ca.gov/bph/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CA",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting california ca",
    "summary": "California probation is administered at the county level by county probation departments. Conditions are set by the court. AB 1950 (2021) reduced probation terms for many offenses. California has active drug courts and reentry courts. Violations are heard in the sentencing court.",
    "resources": [
      {
        "label": "California Courts — Probation Self-Help",
        "url": "https://www.courts.ca.gov/selfhelp-probation.htm"
      },
      {
        "label": "Probation Rights — Root & Rebound",
        "url": "https://rootandrebound.org/roads-to-reentry/chapter-7/"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.courts.ca.gov/selfhelp-probation.htm",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CO",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement colorado co",
    "summary": "Colorado restores voting rights upon release from prison. People on probation can vote. People on parole cannot vote until parole is completed. You must re-register to vote after release. Colorado has same-day voter registration.",
    "resources": [
      {
        "label": "Colorado Voting Rights After Conviction — Secretary of State",
        "url": "https://www.sos.state.co.us/pubs/elections/Vote/EligibleVoters.html"
      },
      {
        "label": "Colorado Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/colorado"
      },
      {
        "label": "Legal Help — Colorado Legal Services",
        "url": "https://www.coloradolegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.sos.state.co.us/pubs/elections/Vote/EligibleVoters.html",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CO",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history colorado co",
    "summary": "Colorado expanded record sealing significantly through HB 1214 (2022). Many felony and misdemeanor convictions are now eligible for sealing with varying waiting periods. Automatic sealing applies to certain drug convictions and completed diversion cases. Petition through the court of conviction.",
    "resources": [
      {
        "label": "Colorado Record Sealing — Colorado Courts",
        "url": "https://www.courts.state.co.us/selfhelp/sealing.cfm"
      },
      {
        "label": "Colorado Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/colorado-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Colorado Legal Services",
        "url": "https://www.coloradolegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.courts.state.co.us/selfhelp/sealing.cfm",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CO",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony colorado co",
    "summary": "Denver has a fair chance housing ordinance limiting criminal background checks by landlords. No statewide fair chance housing law exists, but federal Fair Housing Act and HUD guidance apply. The Colorado Division of Housing provides renter assistance.",
    "resources": [
      {
        "label": "Colorado Division of Housing",
        "url": "https://cdola.colorado.gov/housing"
      },
      {
        "label": "Fair Housing — HUD Colorado",
        "url": "https://www.hud.gov/states/colorado/renting"
      },
      {
        "label": "Housing Rights — Colorado Legal Services",
        "url": "https://www.coloradolegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/colorado/renting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CO",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony colorado co",
    "summary": "Denver and Boulder have ban-the-box ordinances. Colorado has no statewide ban the box for private employers but state agencies cannot ask about criminal history on initial applications. Federal EEOC protections apply statewide. The Colorado Workforce Development Council provides reentry services.",
    "resources": [
      {
        "label": "Colorado Workforce Development — Job Seekers",
        "url": "https://www.colorado.gov/pacific/cdle/jobs"
      },
      {
        "label": "EEOC — Denver Field Office",
        "url": "https://www.eeoc.gov/field/denver"
      },
      {
        "label": "Employment Rights — Colorado Legal Services",
        "url": "https://www.coloradolegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.colorado.gov/pacific/cdle/jobs",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CO",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop colorado co",
    "summary": "Colorado residents have Fourth and Fifth Amendment protections during police interactions. SB 217 (2020) added significant police accountability reforms in Colorado. The ACLU of Colorado monitors civil rights and provides know-your-rights resources.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Colorado",
        "url": "https://www.aclu-co.org/know-your-rights"
      },
      {
        "label": "Colorado AG — Civil Rights Section",
        "url": "https://coag.gov/office-sections/civil-rights/"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclu-co.org/know-your-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CO",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment colorado co",
    "summary": "Colorado parole is administered by the Colorado State Board of Parole. Conditions vary by case and are set at release. The Colorado DOC provides reentry planning and transition services. Violations may result in a revocation hearing before the Board.",
    "resources": [
      {
        "label": "Colorado State Board of Parole",
        "url": "https://www.colorado.gov/pacific/cdoc/parole-board"
      },
      {
        "label": "Colorado DOC — Reentry and Release",
        "url": "https://cdoc.colorado.gov/reentry"
      },
      {
        "label": "Parole Rights — Colorado Legal Services",
        "url": "https://www.coloradolegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.colorado.gov/pacific/cdoc/parole-board",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CO",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting colorado co",
    "summary": "Colorado probation is supervised by the Colorado Judicial Branch through district probation departments. Conditions are set by the court. Colorado has active drug courts and reentry courts. Violations are heard before the sentencing judge.",
    "resources": [
      {
        "label": "Colorado Judicial Branch — Probation",
        "url": "https://www.courts.state.co.us/Administration/Section.cfm/Section/probation"
      },
      {
        "label": "Colorado DOC Community Corrections",
        "url": "https://cdoc.colorado.gov/community-corrections"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.courts.state.co.us/Administration/Section.cfm/Section/probation",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CT",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement connecticut ct",
    "summary": "Connecticut restored voting rights to people on parole in 2021. People on probation can also vote. Rights are restored upon release from prison. The exception is people convicted of election-related offenses. You must re-register after release.",
    "resources": [
      {
        "label": "Connecticut Voting Rights — Secretary of State",
        "url": "https://portal.ct.gov/SOTS/Election-Services/Voter-Information/Felony-Conviction-and-Voting"
      },
      {
        "label": "Connecticut Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/connecticut"
      },
      {
        "label": "Legal Help — Connecticut Legal Services",
        "url": "https://www.ctlawhelp.org"
      }
    ],
    "learnMoreUrl": "https://portal.ct.gov/SOTS/Election-Services/Voter-Information/Felony-Conviction-and-Voting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CT",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history connecticut ct",
    "summary": "Connecticut's Clean Slate Act (2021) created automatic erasure of criminal records — misdemeanors after 7 years and Class D and E felonies after 10 years. Petition-based erasure is available for other offenses. This is one of the most comprehensive clean slate laws in the country.",
    "resources": [
      {
        "label": "Connecticut Clean Slate — CT Judicial Branch",
        "url": "https://www.jud.ct.gov/erasing.htm"
      },
      {
        "label": "Connecticut Erasure Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/connecticut-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — CT Law Help",
        "url": "https://www.ctlawhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.jud.ct.gov/erasing.htm",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CT",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony connecticut ct",
    "summary": "Connecticut has protections limiting landlord use of criminal records through the Connecticut Commission on Human Rights. Hartford has a fair chance housing ordinance. Federal Fair Housing Act and HUD guidance also apply statewide.",
    "resources": [
      {
        "label": "Connecticut Commission on Human Rights and Opportunities",
        "url": "https://portal.ct.gov/CHRO"
      },
      {
        "label": "Fair Housing — HUD Connecticut",
        "url": "https://www.hud.gov/states/connecticut/renting"
      },
      {
        "label": "Housing Rights — CT Law Help",
        "url": "https://www.ctlawhelp.org"
      }
    ],
    "learnMoreUrl": "https://portal.ct.gov/CHRO",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CT",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony connecticut ct",
    "summary": "Connecticut enacted a statewide ban-the-box law in 2016 for most employers. The law restricts when criminal history can be considered. The CHRO enforces employment discrimination protections. The Connecticut DOL provides reentry employment services.",
    "resources": [
      {
        "label": "Connecticut Fair Chance Employment — CHRO",
        "url": "https://portal.ct.gov/CHRO/Discrimination-Types/Criminal-History-Employment"
      },
      {
        "label": "EEOC — Boston Area Office (covers Connecticut)",
        "url": "https://www.eeoc.gov/field/boston"
      },
      {
        "label": "Employment Rights — CT Law Help",
        "url": "https://www.ctlawhelp.org"
      }
    ],
    "learnMoreUrl": "https://portal.ct.gov/CHRO/Discrimination-Types/Criminal-History-Employment",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CT",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop connecticut ct",
    "summary": "Connecticut residents have Fourth and Fifth Amendment protections plus state constitutional rights during police interactions. The ACLU of Connecticut provides know-your-rights resources. Connecticut passed police accountability reforms in 2020.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Connecticut",
        "url": "https://www.acluct.org"
      },
      {
        "label": "Connecticut AG — Civil Rights",
        "url": "https://portal.ct.gov/AG/Sections/Civil-Rights/Civil-Rights"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.acluct.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CT",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment connecticut ct",
    "summary": "Connecticut parole is administered by the Board of Pardons and Paroles. Conditions are set at release and vary by case. The DOC supervises parolees through parole officers. Violations are reviewed by the Board and can result in return to custody.",
    "resources": [
      {
        "label": "Connecticut Board of Pardons and Paroles",
        "url": "https://portal.ct.gov/BOPP"
      },
      {
        "label": "Connecticut DOC — Reentry Services",
        "url": "https://portal.ct.gov/DOC/Services/Reentry/Reentry"
      },
      {
        "label": "Parole Rights — CT Law Help",
        "url": "https://www.ctlawhelp.org"
      }
    ],
    "learnMoreUrl": "https://portal.ct.gov/BOPP",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "CT",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting connecticut ct",
    "summary": "Connecticut probation is supervised by the Court Support Services Division (CSSD) of the Judicial Branch. Conditions are court-ordered. Connecticut has active alternative sanction programs and diversionary courts. Violations are heard in the sentencing court.",
    "resources": [
      {
        "label": "Connecticut CSSD — Adult Probation",
        "url": "https://www.jud.ct.gov/cssd/adult_prob.htm"
      },
      {
        "label": "Connecticut DOC — Reentry Planning",
        "url": "https://portal.ct.gov/DOC/Services/Reentry/Reentry"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.jud.ct.gov/cssd/adult_prob.htm",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "DE",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement delaware de",
    "summary": "Delaware automatically restores voting rights after completing the full sentence including parole and probation. The previous five-year waiting period was removed in 2013. You must re-register to vote. Misdemeanor convictions do not affect voting rights.",
    "resources": [
      {
        "label": "Delaware Voting Rights — State Election Commissioner",
        "url": "https://elections.delaware.gov/services/voter/voter_crim.shtml"
      },
      {
        "label": "Delaware Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/delaware"
      },
      {
        "label": "Legal Help — Community Legal Aid Society (CLASI)",
        "url": "https://www.declasi.org"
      }
    ],
    "learnMoreUrl": "https://elections.delaware.gov/services/voter/voter_crim.shtml",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "DE",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history delaware de",
    "summary": "Delaware significantly expanded expungement eligibility in 2021. Mandatory expungement applies to acquittals and dismissed charges. Discretionary expungement is available for many misdemeanors and some felonies after waiting periods. A Clean Slate automatic expungement law begins phasing in.",
    "resources": [
      {
        "label": "Delaware Expungement Guide — Delaware Courts",
        "url": "https://courts.delaware.gov/forms/download.aspx?id=79500"
      },
      {
        "label": "Delaware Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/delaware-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Community Legal Aid Society",
        "url": "https://www.declasi.org"
      }
    ],
    "learnMoreUrl": "https://courts.delaware.gov/forms/download.aspx?id=79500",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "DE",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony delaware de",
    "summary": "Delaware has no statewide fair chance housing law. Federal Fair Housing Act protections and HUD guidance on criminal records apply. The Delaware State Housing Authority and legal aid organizations assist with housing discrimination complaints.",
    "resources": [
      {
        "label": "Delaware State Housing Authority",
        "url": "https://www.destatehousing.com"
      },
      {
        "label": "Fair Housing — HUD Delaware",
        "url": "https://www.hud.gov/states/delaware/renting"
      },
      {
        "label": "Housing Help — CLASI Delaware",
        "url": "https://www.declasi.org"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/delaware/renting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "DE",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony delaware de",
    "summary": "Delaware enacted a ban-the-box law for state government positions in 2014. Private employers are not covered by statewide law. Federal EEOC protections apply. The Delaware DOL provides workforce development and reentry employment services.",
    "resources": [
      {
        "label": "Delaware DOL — Workforce Development",
        "url": "https://dol.delaware.gov/individual-services/"
      },
      {
        "label": "EEOC — Philadelphia District Office (covers Delaware)",
        "url": "https://www.eeoc.gov/field/philadelphia"
      },
      {
        "label": "Employment Rights — CLASI Delaware",
        "url": "https://www.declasi.org"
      }
    ],
    "learnMoreUrl": "https://dol.delaware.gov/individual-services/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "DE",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop delaware de",
    "summary": "Delaware residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of Delaware monitors civil rights and provides know-your-rights resources. You have the right to remain silent and to refuse a warrantless search.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Delaware",
        "url": "https://www.aclu-de.org"
      },
      {
        "label": "Delaware AG — Civil Rights Division",
        "url": "https://attorneygeneral.delaware.gov/civil-rights/"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclu-de.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "DE",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment delaware de",
    "summary": "Delaware parole is administered by the Delaware Board of Parole. Conditions are set at release and include regular reporting and travel restrictions. The DOC provides reentry programming. Violations may result in a revocation hearing before the Board.",
    "resources": [
      {
        "label": "Delaware Board of Parole",
        "url": "https://doc.delaware.gov/boards/parole.shtml"
      },
      {
        "label": "Delaware DOC — Reentry",
        "url": "https://doc.delaware.gov/programs/reentry.shtml"
      },
      {
        "label": "Parole Rights — CLASI Delaware",
        "url": "https://www.declasi.org"
      }
    ],
    "learnMoreUrl": "https://doc.delaware.gov/boards/parole.shtml",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "DE",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting delaware de",
    "summary": "Delaware probation is supervised by the Department of Correction through probation officers. Conditions are set by the court. Delaware has active drug courts and mental health courts. Revocation hearings are held before the sentencing court.",
    "resources": [
      {
        "label": "Delaware DOC — Probation and Parole",
        "url": "https://doc.delaware.gov/programs/probation.shtml"
      },
      {
        "label": "Delaware Drug Courts — Delaware Courts",
        "url": "https://courts.delaware.gov/superior/drugcourt.aspx"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://doc.delaware.gov/programs/probation.shtml",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "FL",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement florida fl",
    "summary": "Florida Amendment 4 (2018) restored voting rights for most people after completing their full sentence. People convicted of murder or sexual offenses are excluded. All court-ordered fines, fees, and restitution must be paid before registering to vote. The process can be complex — contact legal aid for help.",
    "resources": [
      {
        "label": "Florida Voting Rights Restoration — FL Department of State",
        "url": "https://dos.myflorida.com/elections/for-voters/voter-registration/felons-rights-restoration/"
      },
      {
        "label": "Florida Rights Restoration Coalition",
        "url": "https://floridarrc.com"
      },
      {
        "label": "Florida Voting Rights Help — ACLU of Florida",
        "url": "https://www.aclufl.org/en/campaigns/voting-rights"
      }
    ],
    "learnMoreUrl": "https://floridarrc.com",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "FL",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history florida fl",
    "summary": "Florida expungement requires a Certificate of Eligibility from the Florida Department of Law Enforcement before filing in court. Only one expungement is available per lifetime. Qualifying offenses are limited. Sealed and expunged records remain accessible to certain employers and agencies.",
    "resources": [
      {
        "label": "Florida Expungement — FDLE",
        "url": "https://www.fdle.state.fl.us/CJIT/Expunction/Expunction-Sealing-Info.aspx"
      },
      {
        "label": "Florida Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/florida-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Florida Law Help",
        "url": "https://www.floridalawhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.fdle.state.fl.us/CJIT/Expunction/Expunction-Sealing-Info.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "FL",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony florida fl",
    "summary": "Florida has no statewide fair chance housing law. Federal Fair Housing Act and HUD guidance on criminal records apply to all Florida landlords. The Florida Commission on Human Relations handles housing discrimination complaints.",
    "resources": [
      {
        "label": "Florida Commission on Human Relations — Housing",
        "url": "https://fchr.myflorida.com/housing-discrimination"
      },
      {
        "label": "Fair Housing — HUD Florida",
        "url": "https://www.hud.gov/states/florida/renting"
      },
      {
        "label": "Housing Help — Florida Law Help",
        "url": "https://www.floridalawhelp.org"
      }
    ],
    "learnMoreUrl": "https://fchr.myflorida.com/housing-discrimination",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "FL",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony florida fl",
    "summary": "Florida has no statewide ban-the-box law for private employers. Some counties have local ordinances. Federal EEOC protections apply statewide. The Florida DOE CareerSource Florida provides workforce and reentry employment services.",
    "resources": [
      {
        "label": "CareerSource Florida — Reentry Employment",
        "url": "https://www.careersourceflorida.com/job-seekers/"
      },
      {
        "label": "EEOC — Miami District Office",
        "url": "https://www.eeoc.gov/field/miami"
      },
      {
        "label": "Employment Rights — Florida Law Help",
        "url": "https://www.floridalawhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.careersourceflorida.com/job-seekers/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "FL",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop florida fl",
    "summary": "Florida residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of Florida monitors civil rights and provides know-your-rights resources. You have the right to remain silent and to refuse consent to a search without a warrant.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Florida",
        "url": "https://www.aclufl.org/know-your-rights"
      },
      {
        "label": "Florida AG — Civil Rights",
        "url": "https://myfloridalegal.com/civil-rights"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclufl.org/know-your-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "FL",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment florida fl",
    "summary": "Florida abolished parole for offenses committed after October 1983. The Florida Parole Commission still supervises some older cases. Most people released from Florida prisons are placed on supervised release through the Department of Corrections.",
    "resources": [
      {
        "label": "Florida Parole Commission",
        "url": "https://www.dc.state.fl.us/secretary/parole/"
      },
      {
        "label": "Florida DOC — Reentry and Supervision",
        "url": "https://www.dc.state.fl.us/community-corrections/"
      },
      {
        "label": "Parole Rights — Florida Law Help",
        "url": "https://www.floridalawhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.dc.state.fl.us/community-corrections/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "FL",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting florida fl",
    "summary": "Florida probation is supervised by the Department of Corrections. Conditions are set by the court. Florida has active drug courts and mental health courts. Violation hearings are held before the sentencing judge and can result in up to the maximum sentence for the original offense.",
    "resources": [
      {
        "label": "Florida DOC — Community Corrections",
        "url": "https://www.dc.state.fl.us/community-corrections/"
      },
      {
        "label": "Florida Courts — Drug Court Programs",
        "url": "https://www.flcourts.gov/Resources-Services/Court-Improvement/Court-Funding-Accountability/Drug-Court"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.dc.state.fl.us/community-corrections/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "GA",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement georgia ga",
    "summary": "In Georgia, voting rights are automatically restored after completing your full sentence, including probation and parole. No petition is required. You must re-register to vote. Georgia has one of the higher rates of disenfranchisement due to the size of its supervised population.",
    "resources": [
      {
        "label": "Georgia Voting Rights — Secretary of State",
        "url": "https://sos.ga.gov/page/registering-vote"
      },
      {
        "label": "Georgia Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/georgia"
      },
      {
        "label": "Georgia Voting Rights — Georgia Legal Aid",
        "url": "https://www.georgialegalaid.org"
      }
    ],
    "learnMoreUrl": "https://sos.ga.gov/page/registering-vote",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "GA",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history georgia ga",
    "summary": "Georgia uses a \"record restriction\" system rather than full expungement. Restricted records are hidden from public background checks but not destroyed. First-offender exonerations, acquittals, and certain dismissed charges are eligible. Contact Georgia legal aid for your specific options.",
    "resources": [
      {
        "label": "Georgia Record Restriction Guide — Collateral Consequences Resource Center",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/georgia-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Georgia Bureau of Investigation — Record Restriction",
        "url": "https://gbi.georgia.gov/criminal-history-record-information/record-restriction"
      },
      {
        "label": "Record Restriction Help — Georgia Legal Aid",
        "url": "https://www.georgialegalaid.org"
      }
    ],
    "learnMoreUrl": "https://gbi.georgia.gov/criminal-history-record-information/record-restriction",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "GA",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony georgia ga",
    "summary": "Georgia has no statewide fair chance housing law. Federal Fair Housing Act protections apply. The Georgia Equal Opportunity Office handles housing discrimination complaints. Georgia Legal Aid can assist renters facing housing denials based on criminal history.",
    "resources": [
      {
        "label": "Georgia Equal Opportunity Office — Fair Housing",
        "url": "https://dca.ga.gov/housing/fair-housing"
      },
      {
        "label": "Fair Housing — HUD Atlanta Field Office",
        "url": "https://www.hud.gov/states/georgia/renting"
      },
      {
        "label": "Housing Rights — Georgia Legal Aid",
        "url": "https://www.georgialegalaid.org"
      }
    ],
    "learnMoreUrl": "https://dca.ga.gov/housing/fair-housing",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "GA",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony georgia ga",
    "summary": "Georgia enacted a fair chance hiring law for state agencies. The state also has occupational licensing reforms that limit the use of criminal records. Federal EEOC protections apply statewide. The Georgia Department of Labor provides workforce services for people in reentry.",
    "resources": [
      {
        "label": "Georgia Department of Labor — Job Seekers",
        "url": "https://dol.georgia.gov/individuals"
      },
      {
        "label": "EEOC — Atlanta District Office",
        "url": "https://www.eeoc.gov/field/atlanta"
      },
      {
        "label": "Employment Rights — Georgia Legal Aid",
        "url": "https://www.georgialegalaid.org"
      }
    ],
    "learnMoreUrl": "https://dol.georgia.gov/individuals",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "GA",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop georgia ga",
    "summary": "Georgia residents are protected by the Fourth and Fifth Amendments. The ACLU of Georgia provides know-your-rights resources for police interactions. You have the right to remain silent and to refuse consent to a search. Georgia passed police reform legislation in 2021.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Georgia",
        "url": "https://www.acluga.org"
      },
      {
        "label": "Georgia Attorney General — Civil Rights Unit",
        "url": "https://law.georgia.gov"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.acluga.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "GA",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment georgia ga",
    "summary": "Georgia parole is administered by the State Board of Pardons and Paroles. Conditions include regular reporting, travel restrictions, and other requirements. The GDC provides reentry planning. Violations are reviewed by the Parole Board and can result in revocation.",
    "resources": [
      {
        "label": "Georgia State Board of Pardons and Paroles",
        "url": "https://pap.georgia.gov"
      },
      {
        "label": "Georgia DOC — Reentry Programs",
        "url": "https://gdc.georgia.gov/programs-and-services/reentry"
      },
      {
        "label": "Parole Rights — Georgia Legal Aid",
        "url": "https://www.georgialegalaid.org"
      }
    ],
    "learnMoreUrl": "https://pap.georgia.gov",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "GA",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting georgia ga",
    "summary": "Georgia probation is supervised by the Georgia Department of Community Supervision, one of the largest probation supervision systems in the country. Conditions are court-ordered. Georgia has active reentry courts and programs focused on successful probation completion.",
    "resources": [
      {
        "label": "Georgia Department of Community Supervision",
        "url": "https://dcs.georgia.gov"
      },
      {
        "label": "Georgia Reentry Courts — Council of Superior Court Judges",
        "url": "https://cscj.georgiacourts.gov"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://dcs.georgia.gov",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "HI",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement hawaii hi",
    "summary": "Hawaii restores voting rights upon release from prison. People on parole or probation can vote. You must re-register to vote after release. Hawaii has accessible voter registration including same-day registration.",
    "resources": [
      {
        "label": "Hawaii Voting Rights — Office of Elections",
        "url": "https://elections.hawaii.gov/voters/voter-registration/"
      },
      {
        "label": "Hawaii Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/hawaii"
      },
      {
        "label": "Legal Help — Hawaii State Bar Association Lawyer Referral",
        "url": "https://hsba.org/lawyer-referral"
      }
    ],
    "learnMoreUrl": "https://elections.hawaii.gov/voters/voter-registration/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "HI",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history hawaii hi",
    "summary": "Hawaii allows expungement of adult arrests that did not result in conviction. Eligible convictions may be expunged after waiting periods varying by offense level. The process requires a petition to the Hawaii Criminal Justice Data Center. Drug court completions are eligible.",
    "resources": [
      {
        "label": "Hawaii Expungement — Hawaii Criminal Justice Data Center",
        "url": "https://ag.hawaii.gov/hcjdc/expungement/"
      },
      {
        "label": "Hawaii Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/hawaii-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Legal Aid Society of Hawaii",
        "url": "https://www.legalaidhawaii.org"
      }
    ],
    "learnMoreUrl": "https://ag.hawaii.gov/hcjdc/expungement/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "HI",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony hawaii hi",
    "summary": "Honolulu has a fair chance housing ordinance limiting landlord use of criminal records. Federal Fair Housing Act protections apply statewide. The Hawaii Civil Rights Commission handles housing discrimination complaints.",
    "resources": [
      {
        "label": "Hawaii Civil Rights Commission — Housing",
        "url": "https://labor.hawaii.gov/hcrc/housing/"
      },
      {
        "label": "Fair Housing — HUD Hawaii",
        "url": "https://www.hud.gov/states/hawaii/renting"
      },
      {
        "label": "Housing Help — Legal Aid Society of Hawaii",
        "url": "https://www.legalaidhawaii.org"
      }
    ],
    "learnMoreUrl": "https://labor.hawaii.gov/hcrc/housing/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "HI",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony hawaii hi",
    "summary": "Hawaii enacted a statewide ban-the-box law in 2014. Employers cannot inquire about criminal history until a conditional offer of employment is made. The Hawaii Civil Rights Commission enforces the law. The Hawaii DOL provides workforce development services.",
    "resources": [
      {
        "label": "Hawaii Fair Chance Hiring — DLIR",
        "url": "https://labor.hawaii.gov/hcrc/laws/ban-the-box/"
      },
      {
        "label": "EEOC — Honolulu Local Office",
        "url": "https://www.eeoc.gov/field/honolulu"
      },
      {
        "label": "Employment Help — Legal Aid Society of Hawaii",
        "url": "https://www.legalaidhawaii.org"
      }
    ],
    "learnMoreUrl": "https://labor.hawaii.gov/hcrc/laws/ban-the-box/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "HI",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop hawaii hi",
    "summary": "Hawaii residents have Fourth and Fifth Amendment protections during police interactions. Hawaii also has its own state constitutional rights provisions. The ACLU of Hawaii monitors civil rights and provides know-your-rights resources.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Hawaii",
        "url": "https://www.acluhi.org"
      },
      {
        "label": "Hawaii AG — Civil Rights Team",
        "url": "https://ag.hawaii.gov"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.acluhi.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "HI",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment hawaii hi",
    "summary": "Hawaii parole is administered by the Hawaii Paroling Authority. Conditions are set at release and vary by case. The Hawaii Department of Public Safety supervises parolees. Violations may result in a revocation hearing.",
    "resources": [
      {
        "label": "Hawaii Paroling Authority",
        "url": "https://dps.hawaii.gov/hpa/"
      },
      {
        "label": "Hawaii DPS — Reentry Services",
        "url": "https://dps.hawaii.gov/corrections/reentry/"
      },
      {
        "label": "Parole Rights — Legal Aid Society of Hawaii",
        "url": "https://www.legalaidhawaii.org"
      }
    ],
    "learnMoreUrl": "https://dps.hawaii.gov/hpa/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "HI",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting hawaii hi",
    "summary": "Hawaii probation is supervised by the Hawaii Judiciary through the Adult Client Services Branch. Conditions are court-ordered. Hawaii has active drug courts and mental health courts. Violations are heard in the sentencing court.",
    "resources": [
      {
        "label": "Hawaii Judiciary — Adult Client Services",
        "url": "https://www.courts.state.hi.us/general_information/probation"
      },
      {
        "label": "Hawaii Drug Courts — Judiciary",
        "url": "https://www.courts.state.hi.us/general_information/drug_court"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.courts.state.hi.us/general_information/probation",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ID",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement idaho id",
    "summary": "In Idaho, voting rights are suspended while on parole. Rights are automatically restored after completing parole. People on probation only (not parole) can vote. You must re-register to vote after parole completion.",
    "resources": [
      {
        "label": "Idaho Voting Rights — Secretary of State",
        "url": "https://sos.idaho.gov/elect/felony.htm"
      },
      {
        "label": "Idaho Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/idaho"
      },
      {
        "label": "Legal Help — Idaho Legal Aid Services",
        "url": "https://www.idaholegalaid.org"
      }
    ],
    "learnMoreUrl": "https://sos.idaho.gov/elect/felony.htm",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ID",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history idaho id",
    "summary": "Idaho has limited expungement options. Non-conviction records and withheld judgments may be eligible for expungement after a waiting period. Conviction expungement is very limited. Contact Idaho Legal Aid for options specific to your case.",
    "resources": [
      {
        "label": "Idaho Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/idaho-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Idaho Courts — Self-Help Center",
        "url": "https://isc.idaho.gov/self-help"
      },
      {
        "label": "Legal Help — Idaho Legal Aid Services",
        "url": "https://www.idaholegalaid.org"
      }
    ],
    "learnMoreUrl": "https://ccresourcecenter.org/state-restoration-profiles/idaho-restoration-of-rights-pardon-expungement-sealing/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ID",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony idaho id",
    "summary": "Idaho has no statewide fair chance housing law. Federal Fair Housing Act protections and HUD guidance on criminal records apply. The Idaho Housing and Finance Association and legal aid organizations assist with housing issues for people in reentry.",
    "resources": [
      {
        "label": "Idaho Housing and Finance Association",
        "url": "https://www.ihfa.org"
      },
      {
        "label": "Fair Housing — HUD Idaho",
        "url": "https://www.hud.gov/states/idaho/renting"
      },
      {
        "label": "Housing Help — Idaho Legal Aid Services",
        "url": "https://www.idaholegalaid.org"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/idaho/renting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ID",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony idaho id",
    "summary": "Idaho has no statewide ban-the-box law. Federal EEOC protections apply to qualifying employers. The Idaho Department of Labor provides workforce services and reentry employment support programs.",
    "resources": [
      {
        "label": "Idaho DOL — Job Seekers",
        "url": "https://www.labor.idaho.gov/dnn/Individuals/FindaJob"
      },
      {
        "label": "EEOC — Seattle Field Office (covers Idaho)",
        "url": "https://www.eeoc.gov/field/seattle"
      },
      {
        "label": "Employment Help — Idaho Legal Aid Services",
        "url": "https://www.idaholegalaid.org"
      }
    ],
    "learnMoreUrl": "https://www.labor.idaho.gov/dnn/Individuals/FindaJob",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ID",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop idaho id",
    "summary": "Idaho residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of Idaho monitors civil rights issues statewide and provides know-your-rights resources. You have the right to remain silent and to refuse a warrantless search.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Idaho",
        "url": "https://www.acluidaho.org"
      },
      {
        "label": "Idaho AG — Civil Rights",
        "url": "https://www.ag.idaho.gov"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.acluidaho.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ID",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment idaho id",
    "summary": "Idaho parole is administered by the Idaho Commission of Pardons and Parole. Conditions are set at release. The Idaho DOC provides reentry planning. Violations are reviewed by the Commission. Idaho uses a risk-based supervision model.",
    "resources": [
      {
        "label": "Idaho Commission of Pardons and Parole",
        "url": "https://ipc.idaho.gov"
      },
      {
        "label": "Idaho DOC — Reentry and Supervision",
        "url": "https://www.idoc.idaho.gov"
      },
      {
        "label": "Parole Rights — Idaho Legal Aid",
        "url": "https://www.idaholegalaid.org"
      }
    ],
    "learnMoreUrl": "https://ipc.idaho.gov",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ID",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting idaho id",
    "summary": "Idaho probation is supervised by the Idaho Department of Correction through district probation officers. Conditions are set by the court. Idaho has active drug courts and mental health courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "Idaho DOC — Probation Services",
        "url": "https://www.idoc.idaho.gov"
      },
      {
        "label": "Idaho Supreme Court — Drug Courts",
        "url": "https://isc.idaho.gov/drug-courts"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.idoc.idaho.gov",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IL",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement illinois il",
    "summary": "Illinois restores voting rights upon release from prison. People on parole and probation can vote. You must re-register to vote after release. Illinois passed legislation in 2016 confirming these rights. Same-day registration is available.",
    "resources": [
      {
        "label": "Illinois Voting Rights — Illinois State Board of Elections",
        "url": "https://www.elections.il.gov/ElectionOperations/FelonVoting.aspx"
      },
      {
        "label": "Illinois Voting Rights — ACLU of Illinois",
        "url": "https://www.aclu-il.org/en/know-your-rights/voting-rights-people-criminal-convictions"
      },
      {
        "label": "Legal Help — Illinois Legal Aid Online",
        "url": "https://www.illinoislegalaid.org"
      }
    ],
    "learnMoreUrl": "https://www.elections.il.gov/ElectionOperations/FelonVoting.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IL",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history illinois il",
    "summary": "Illinois has broad expungement and sealing laws. Many misdemeanors and some Class 4 felonies are eligible for expungement after waiting periods. Sealing is available for many other conviction categories. Cannabis convictions received automatic expungement under the Cannabis Regulation Act (2019).",
    "resources": [
      {
        "label": "Illinois Expungement & Sealing — Illinois Courts",
        "url": "https://www.illinoiscourts.gov/forms/approved-forms/forms-approved-by-the-supreme-court/criminal/"
      },
      {
        "label": "Illinois Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/illinois-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Expungement Help — Illinois Legal Aid Online",
        "url": "https://www.illinoislegalaid.org/legal-information/expungement-and-sealing"
      }
    ],
    "learnMoreUrl": "https://www.illinoislegalaid.org/legal-information/expungement-and-sealing",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IL",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony illinois il",
    "summary": "Illinois has the Illinois Human Rights Act protecting against housing discrimination. Chicago has additional fair chance housing protections. The Illinois Housing Development Authority and the Illinois Human Rights Commission handle discrimination complaints.",
    "resources": [
      {
        "label": "Illinois Human Rights Commission — Housing",
        "url": "https://www2.illinois.gov/ihrc/Pages/Housing.aspx"
      },
      {
        "label": "Fair Housing — HUD Illinois",
        "url": "https://www.hud.gov/states/illinois/renting"
      },
      {
        "label": "Housing Help — Illinois Legal Aid Online",
        "url": "https://www.illinoislegalaid.org/legal-information/housing"
      }
    ],
    "learnMoreUrl": "https://www2.illinois.gov/ihrc/Pages/Housing.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IL",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony illinois il",
    "summary": "Illinois enacted a statewide ban-the-box law in 2015. The Illinois Human Rights Act restricts use of conviction records by employers. Chicago has additional fair chance hiring ordinances. The Illinois Department of Employment Security provides reentry employment services.",
    "resources": [
      {
        "label": "Illinois Job Opportunities for Qualified Applicants Act — IDOL",
        "url": "https://labor.illinois.gov/employment-practices/job-opportunities-for-qualified-applicants-act"
      },
      {
        "label": "EEOC — Chicago District Office",
        "url": "https://www.eeoc.gov/field/chicago"
      },
      {
        "label": "Employment Rights — Illinois Legal Aid Online",
        "url": "https://www.illinoislegalaid.org/legal-information/employment"
      }
    ],
    "learnMoreUrl": "https://labor.illinois.gov/employment-practices/job-opportunities-for-qualified-applicants-act",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IL",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop illinois il",
    "summary": "Illinois residents have Fourth and Fifth Amendment protections plus strong state civil rights protections during police interactions. The ACLU of Illinois provides know-your-rights resources. Chicago and Illinois have implemented significant police reform requirements.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Illinois",
        "url": "https://www.aclu-il.org/en/know-your-rights/know-your-rights-police-interactions"
      },
      {
        "label": "Illinois AG — Civil Rights Bureau",
        "url": "https://illinoisattorneygeneral.gov/rights/civilrights.html"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclu-il.org/en/know-your-rights/know-your-rights-police-interactions",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IL",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment illinois il",
    "summary": "Illinois parole for people sentenced after 1978 is called Mandatory Supervised Release (MSR) and is administered by the Illinois Prisoner Review Board. Conditions vary by offense and are set by the Board. The Illinois DOC provides reentry transition services.",
    "resources": [
      {
        "label": "Illinois Prisoner Review Board",
        "url": "https://www.illinois.gov/agencies/prisoner-review-board"
      },
      {
        "label": "Illinois DOC — Reentry Programs",
        "url": "https://www2.illinois.gov/idoc/aboutidoc/Pages/Reentry.aspx"
      },
      {
        "label": "Parole Rights — Illinois Legal Aid Online",
        "url": "https://www.illinoislegalaid.org"
      }
    ],
    "learnMoreUrl": "https://www.illinois.gov/agencies/prisoner-review-board",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IL",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting illinois il",
    "summary": "Illinois probation is supervised by county probation departments. Conditions are set by the Circuit Court. Illinois has active drug courts and specialized probation programs. Violations are heard before the sentencing judge.",
    "resources": [
      {
        "label": "Illinois Probation and Court Services — IPCSA",
        "url": "https://www.il-probation.org"
      },
      {
        "label": "Illinois Drug Courts — Supreme Court",
        "url": "https://www.illinoiscourts.gov/courts/court-programs/adult-drug-courts/"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.il-probation.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IN",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement indiana in",
    "summary": "Indiana restores voting rights upon release from prison. People on probation and parole can vote. You must re-register to vote after release. Indiana has accessible voter registration including online registration.",
    "resources": [
      {
        "label": "Indiana Voting Rights — Secretary of State",
        "url": "https://www.in.gov/sos/elections/voter-information/register-to-vote/"
      },
      {
        "label": "Indiana Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/indiana"
      },
      {
        "label": "Legal Help — Indiana Legal Services",
        "url": "https://www.indianalegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.in.gov/sos/elections/voter-information/register-to-vote/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IN",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history indiana in",
    "summary": "Indiana's Second Chance Law provides broad expungement options. Misdemeanors can be expunged after 5 years. Class D and Level 6 felonies can be expunged after 8 years. More serious felonies have longer waits or require a court finding. Only one expungement petition per lifetime.",
    "resources": [
      {
        "label": "Indiana Second Chance Law — Indiana Courts",
        "url": "https://www.in.gov/courts/selfservice/criminal/expungement/"
      },
      {
        "label": "Indiana Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/indiana-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Indiana Legal Services",
        "url": "https://www.indianalegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.in.gov/courts/selfservice/criminal/expungement/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IN",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony indiana in",
    "summary": "Indiana has no statewide fair chance housing law. Federal Fair Housing Act protections and HUD guidance on criminal records apply to all Indiana landlords. The Indiana Housing and Community Development Authority provides renter resources.",
    "resources": [
      {
        "label": "Indiana Housing and Community Development Authority",
        "url": "https://www.in.gov/ihcda/"
      },
      {
        "label": "Fair Housing — HUD Indiana",
        "url": "https://www.hud.gov/states/indiana/renting"
      },
      {
        "label": "Housing Help — Indiana Legal Services",
        "url": "https://www.indianalegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/indiana/renting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IN",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony indiana in",
    "summary": "Indiana has no statewide ban-the-box law for private employers. Federal EEOC protections apply statewide. The Indiana Department of Workforce Development provides employment services and reentry support.",
    "resources": [
      {
        "label": "Indiana DWD — Job Seeker Services",
        "url": "https://www.in.gov/dwd/individuals/"
      },
      {
        "label": "EEOC — Indianapolis District Office",
        "url": "https://www.eeoc.gov/field/indianapolis"
      },
      {
        "label": "Employment Rights — Indiana Legal Services",
        "url": "https://www.indianalegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.in.gov/dwd/individuals/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IN",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop indiana in",
    "summary": "Indiana residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of Indiana provides know-your-rights resources and monitors civil rights issues statewide. You have the right to remain silent and to refuse a warrantless search.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Indiana",
        "url": "https://www.aclu-in.org/know-your-rights"
      },
      {
        "label": "Indiana AG — Consumer Protection and Civil Rights",
        "url": "https://www.in.gov/attorneygeneral/civil-rights/"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclu-in.org/know-your-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IN",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment indiana in",
    "summary": "Indiana parole is administered by the Indiana Parole Board. Conditions are set at release and vary by offense. The Indiana DOC provides transition and reentry services. Violations are reviewed by the Parole Board and can result in revocation.",
    "resources": [
      {
        "label": "Indiana Parole Board",
        "url": "https://www.in.gov/ipb/"
      },
      {
        "label": "Indiana DOC — Reentry Programs",
        "url": "https://www.in.gov/idoc/reentry/"
      },
      {
        "label": "Parole Rights — Indiana Legal Services",
        "url": "https://www.indianalegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.in.gov/ipb/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IN",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting indiana in",
    "summary": "Indiana probation is supervised by county probation departments. Conditions are court-ordered. Indiana has active drug courts and community corrections programs. Violation hearings are held before the sentencing court.",
    "resources": [
      {
        "label": "Indiana Office of Court Services — Probation",
        "url": "https://www.in.gov/courts/iocs/probation.html"
      },
      {
        "label": "Indiana Community Corrections",
        "url": "https://www.in.gov/idoc/reentry/community-corrections/"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.in.gov/courts/iocs/probation.html",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IA",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement iowa ia",
    "summary": "Iowa Governor Reynolds' executive order (2020) automatically restores voting rights for most people after completing their sentence including parole and probation. People convicted of homicide-related offenses must apply individually. You must re-register to vote.",
    "resources": [
      {
        "label": "Iowa Voting Rights Restoration — Secretary of State",
        "url": "https://sos.iowa.gov/elections/voterinformation/felonrights.html"
      },
      {
        "label": "Iowa Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/iowa"
      },
      {
        "label": "Legal Help — Iowa Legal Aid",
        "url": "https://www.iowalegalaid.org"
      }
    ],
    "learnMoreUrl": "https://sos.iowa.gov/elections/voterinformation/felonrights.html",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IA",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history iowa ia",
    "summary": "Iowa has very limited expungement options. Expungement is available for arrests not resulting in conviction and some deferred judgment dismissals. Conviction expungement is not broadly available. Contact Iowa Legal Aid for guidance on your specific case.",
    "resources": [
      {
        "label": "Iowa Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/iowa-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Iowa Courts — Criminal Record Expungement",
        "url": "https://www.iowacourts.gov/for-the-public/representing-yourself/criminal-cases/"
      },
      {
        "label": "Legal Help — Iowa Legal Aid",
        "url": "https://www.iowalegalaid.org"
      }
    ],
    "learnMoreUrl": "https://ccresourcecenter.org/state-restoration-profiles/iowa-restoration-of-rights-pardon-expungement-sealing/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IA",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony iowa ia",
    "summary": "Iowa has no statewide fair chance housing law. Federal Fair Housing Act and HUD guidance on criminal records apply to all Iowa landlords. The Iowa Finance Authority and legal aid organizations can assist with housing discrimination issues.",
    "resources": [
      {
        "label": "Iowa Finance Authority — Rental Housing",
        "url": "https://www.iowafinanceauthority.gov/Renters"
      },
      {
        "label": "Fair Housing — HUD Iowa",
        "url": "https://www.hud.gov/states/iowa/renting"
      },
      {
        "label": "Housing Help — Iowa Legal Aid",
        "url": "https://www.iowalegalaid.org"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/iowa/renting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IA",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony iowa ia",
    "summary": "Iowa state agencies implemented ban-the-box hiring in 2020. Private employers are not covered by a statewide law. Federal EEOC protections apply. Iowa Workforce Development provides employment services including reentry support.",
    "resources": [
      {
        "label": "Iowa Workforce Development — Job Seekers",
        "url": "https://www.iowaworkforcedevelopment.gov/iowajobs"
      },
      {
        "label": "EEOC — Milwaukee Area Office (covers Iowa)",
        "url": "https://www.eeoc.gov/field/milwaukee"
      },
      {
        "label": "Employment Rights — Iowa Legal Aid",
        "url": "https://www.iowalegalaid.org"
      }
    ],
    "learnMoreUrl": "https://www.iowaworkforcedevelopment.gov/iowajobs",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IA",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop iowa ia",
    "summary": "Iowa residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of Iowa provides know-your-rights resources and monitors civil rights statewide. You have the right to remain silent and to refuse a warrantless search.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Iowa",
        "url": "https://www.aclu-ia.org/en/know-your-rights"
      },
      {
        "label": "Iowa AG — Civil Rights",
        "url": "https://www.iowaattorneygeneral.gov/for-consumers/civil-rights"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclu-ia.org/en/know-your-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IA",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment iowa ia",
    "summary": "Iowa parole is administered by the Iowa Board of Parole. Conditions are set at release. The Iowa DOC provides reentry planning and transition programming. Violations may result in a revocation hearing before the Board.",
    "resources": [
      {
        "label": "Iowa Board of Parole",
        "url": "https://doc.iowa.gov/about/iowa-board-parole"
      },
      {
        "label": "Iowa DOC — Reentry Services",
        "url": "https://doc.iowa.gov/reentry"
      },
      {
        "label": "Parole Rights — Iowa Legal Aid",
        "url": "https://www.iowalegalaid.org"
      }
    ],
    "learnMoreUrl": "https://doc.iowa.gov/about/iowa-board-parole",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "IA",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting iowa ia",
    "summary": "Iowa probation is supervised by the Iowa Department of Corrections through judicial district departments. Conditions are court-ordered. Iowa has active drug courts and mental health courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "Iowa DOC — Probation Services",
        "url": "https://doc.iowa.gov"
      },
      {
        "label": "Iowa Judicial Districts — Probation",
        "url": "https://www.iowacourts.gov/iowa-courts/district-courts/"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://doc.iowa.gov",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "KS",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement kansas ks",
    "summary": "Kansas automatically restores voting rights after completing the full sentence including parole and probation. No petition or waiting period is required. You must re-register to vote after completion.",
    "resources": [
      {
        "label": "Kansas Voting Rights — Secretary of State",
        "url": "https://www.sos.ks.gov/elections/elections_vi.html"
      },
      {
        "label": "Kansas Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/kansas"
      },
      {
        "label": "Legal Help — Kansas Legal Services",
        "url": "https://www.kansaslegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.sos.ks.gov/elections/elections_vi.html",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "KS",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history kansas ks",
    "summary": "Kansas has broad expungement laws dating from the 1970s. Many misdemeanors and felonies are eligible after waiting periods. Drug offenses, some violent crimes, and sex offenses have restrictions. Petition the court of conviction. Expunged records are sealed from public access but accessible to law enforcement.",
    "resources": [
      {
        "label": "Kansas Expungement — Kansas Courts",
        "url": "https://www.kscourts.org/Kansas-Courts/Clerk-of-the-Courts/Expungements.aspx"
      },
      {
        "label": "Kansas Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/kansas-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Kansas Legal Services",
        "url": "https://www.kansaslegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.kscourts.org/Kansas-Courts/Clerk-of-the-Courts/Expungements.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "KS",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony kansas ks",
    "summary": "Kansas has no statewide fair chance housing law. Federal Fair Housing Act and HUD guidance on criminal records apply to all Kansas landlords. The Kansas Human Rights Commission handles housing discrimination complaints.",
    "resources": [
      {
        "label": "Kansas Human Rights Commission — Housing",
        "url": "https://www.khrc.net/housing.html"
      },
      {
        "label": "Fair Housing — HUD Kansas",
        "url": "https://www.hud.gov/states/kansas/renting"
      },
      {
        "label": "Housing Help — Kansas Legal Services",
        "url": "https://www.kansaslegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.khrc.net/housing.html",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "KS",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony kansas ks",
    "summary": "Kansas has no statewide ban-the-box law for private employers. Federal EEOC protections apply statewide. The Kansas Department of Commerce provides workforce development and reentry employment resources.",
    "resources": [
      {
        "label": "Kansas Department of Commerce — Workforce",
        "url": "https://www.kansascommerce.gov/programs/workforce/"
      },
      {
        "label": "EEOC — Kansas City Area Office",
        "url": "https://www.eeoc.gov/field/kansas-city"
      },
      {
        "label": "Employment Rights — Kansas Legal Services",
        "url": "https://www.kansaslegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.kansascommerce.gov/programs/workforce/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "KS",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop kansas ks",
    "summary": "Kansas residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of Kansas provides know-your-rights resources and monitors civil rights statewide.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Kansas",
        "url": "https://www.aclukansas.org"
      },
      {
        "label": "Kansas AG — Civil Rights Division",
        "url": "https://ag.ks.gov"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclukansas.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "KS",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment kansas ks",
    "summary": "Kansas parole is administered by the Kansas Prisoner Review Board. Conditions are set at release. The Kansas DOC provides reentry and transition services. Violations are reviewed by the Board and can result in revocation.",
    "resources": [
      {
        "label": "Kansas Prisoner Review Board",
        "url": "https://doc.ks.gov/kpb"
      },
      {
        "label": "Kansas DOC — Reentry Services",
        "url": "https://doc.ks.gov/reentry"
      },
      {
        "label": "Parole Rights — Kansas Legal Services",
        "url": "https://www.kansaslegalservices.org"
      }
    ],
    "learnMoreUrl": "https://doc.ks.gov/kpb",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "KS",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting kansas ks",
    "summary": "Kansas probation is supervised by district court services through the Kansas Department of Corrections. Conditions are set by the court. Kansas has active community corrections programs. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "Kansas DOC — Community Corrections",
        "url": "https://doc.ks.gov/community-corrections"
      },
      {
        "label": "Kansas District Court Services",
        "url": "https://www.kscourts.org/Kansas-Courts/District-Courts.aspx"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://doc.ks.gov/community-corrections",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "KY",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement kentucky ky",
    "summary": "Kentucky Governor Beshear's Executive Order (EO 2019-003) automatically restores voting rights for most people convicted of non-violent felonies after completing their sentence. Violent offenders and those convicted of bribery or election crimes must apply separately to the Governor.",
    "resources": [
      {
        "label": "Kentucky Voting Rights Restoration — Secretary of State",
        "url": "https://elect.ky.gov/Resources/Pages/Felony-Voting-Rights.aspx"
      },
      {
        "label": "Kentucky Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/kentucky"
      },
      {
        "label": "DOJ Guide to Kentucky Voting Rules",
        "url": "https://www.justice.gov/crt/media/1332106/dl"
      }
    ],
    "learnMoreUrl": "https://elect.ky.gov/Resources/Pages/Felony-Voting-Rights.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "KY",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history kentucky ky",
    "summary": "Kentucky allows expungement of misdemeanors and some Class D felony convictions after a five-year waiting period. Petitions are filed with the court. Eligible felonies are limited. The Kentucky expungement law was expanded in 2016 to include more qualifying felony offenses.",
    "resources": [
      {
        "label": "Kentucky Expungement Guide — Collateral Consequences Resource Center",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/kentucky-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Kentucky Expungement Information — KY Courts",
        "url": "https://courts.ky.gov/legal-self-help/expungement"
      },
      {
        "label": "Legal Help — Kentucky Legal Aid",
        "url": "https://www.kyjustice.org"
      }
    ],
    "learnMoreUrl": "https://courts.ky.gov/legal-self-help/expungement",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "KY",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony kentucky ky",
    "summary": "Kentucky has no statewide fair chance housing law. Federal Fair Housing Act and HUD guidance on criminal records apply. The Kentucky Housing Corporation and local legal aid organizations provide assistance with housing discrimination for people in reentry.",
    "resources": [
      {
        "label": "Kentucky Housing Corporation — Renter Resources",
        "url": "https://www.kyhousing.org"
      },
      {
        "label": "Fair Housing — HUD Louisville Field Office",
        "url": "https://www.hud.gov/states/kentucky/renting"
      },
      {
        "label": "Housing Rights — Kentucky Legal Aid",
        "url": "https://www.kyjustice.org"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/kentucky/renting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "KY",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony kentucky ky",
    "summary": "Kentucky enacted a ban-the-box law for state government positions. Federal EEOC protections apply to private employers statewide. The Kentucky Career Center provides employment services including reentry-specific support programs.",
    "resources": [
      {
        "label": "Kentucky Career Center — Job Seekers",
        "url": "https://kcc.ky.gov/career/Pages/default.aspx"
      },
      {
        "label": "EEOC — Louisville Area Office",
        "url": "https://www.eeoc.gov/field/louisville"
      },
      {
        "label": "Employment Rights — Kentucky Legal Aid",
        "url": "https://www.kyjustice.org"
      }
    ],
    "learnMoreUrl": "https://kcc.ky.gov/career/Pages/default.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "KY",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop kentucky ky",
    "summary": "Kentucky residents have full Fourth and Fifth Amendment protections during police encounters. The ACLU of Kentucky documents civil rights issues and provides know-your-rights resources. You have the right to remain silent and the right to refuse a search without a warrant.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Kentucky",
        "url": "https://www.aclu-ky.org"
      },
      {
        "label": "Kentucky Attorney General — Civil Rights",
        "url": "https://www.ag.ky.gov"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclu-ky.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "KY",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment kentucky ky",
    "summary": "Kentucky parole is administered by the Kentucky Parole Board. Conditions are set at release and vary by case. The Department of Corrections supervises parolees through parole officers. Violations can result in revocation and return to state custody.",
    "resources": [
      {
        "label": "Kentucky Parole Board",
        "url": "https://corrections.ky.gov/KPB/Pages/default.aspx"
      },
      {
        "label": "Kentucky DOC — Reentry Services",
        "url": "https://corrections.ky.gov/reentry/Pages/default.aspx"
      },
      {
        "label": "Parole Rights — Kentucky Legal Aid",
        "url": "https://www.kyjustice.org"
      }
    ],
    "learnMoreUrl": "https://corrections.ky.gov/KPB/Pages/default.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "KY",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting kentucky ky",
    "summary": "Kentucky probation is supervised by the Department of Corrections through Division of Probation and Parole. Conditions include regular reporting, substance testing, and employment requirements. The DOC provides reentry case management and transitional support.",
    "resources": [
      {
        "label": "Kentucky DOC — Probation and Parole Division",
        "url": "https://corrections.ky.gov/supervision/Pages/default.aspx"
      },
      {
        "label": "Kentucky Reentry Resources — DOC",
        "url": "https://corrections.ky.gov/reentry/Pages/default.aspx"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://corrections.ky.gov/supervision/Pages/default.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "LA",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement louisiana la",
    "summary": "In Louisiana, voting rights are suspended while you are incarcerated, on probation, or on parole. Your rights are automatically restored after completing your full sentence, or after five years on parole or probation — whichever comes first. You must re-register to vote after restoration.",
    "resources": [
      {
        "label": "Voting After a Conviction — Louisiana Law Help",
        "url": "https://louisianalawhelp.org/resource/voting-with-a-criminal-conviction"
      },
      {
        "label": "Register to Vote — Louisiana Secretary of State",
        "url": "https://www.sos.la.gov/ElectionsAndVoting/RegisterToVote/Pages/default.aspx"
      },
      {
        "label": "Voting Rights After a Felony — US Vote Foundation (Louisiana)",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/louisiana"
      }
    ],
    "learnMoreUrl": "https://louisianalawhelp.org/resource/voting-with-a-criminal-conviction",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "LA",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history louisiana la",
    "summary": "Louisiana allows expungement of qualifying misdemeanor and felony convictions. A five-year waiting period applies to most felonies after sentence completion. There is a $150 filing fee. The petition is filed in the court of conviction. Expunged records are still accessible to law enforcement.",
    "resources": [
      {
        "label": "Expungement in Louisiana — Louisiana Law Help",
        "url": "https://louisianalawhelp.org/resource/expungements-in-louisiana"
      },
      {
        "label": "Louisiana Expungement Guide — Collateral Consequences Resource Center",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/louisiana-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Louisiana Revised Statutes § 44:9 — Expungement Process",
        "url": "https://www.legis.la.gov/legis/Law.aspx?d=113879"
      }
    ],
    "learnMoreUrl": "https://louisianalawhelp.org/resource/expungements-in-louisiana",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "LA",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony louisiana la",
    "summary": "Louisiana does not have a statewide ban-the-box law for private housing. The federal Fair Housing Act still applies, and HUD guidance prohibits blanket criminal record bans by landlords. The Louisiana Fair Housing Action Center can assist with housing discrimination complaints.",
    "resources": [
      {
        "label": "Fair Housing Rights — HUD Louisiana Field Office",
        "url": "https://www.hud.gov/states/louisiana/renting"
      },
      {
        "label": "Louisiana Fair Housing Action Center",
        "url": "https://www.lafairhousing.org"
      },
      {
        "label": "Know Your Renter Rights — Louisiana Law Help",
        "url": "https://louisianalawhelp.org/resource/housing"
      }
    ],
    "learnMoreUrl": "https://www.lafairhousing.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "LA",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony louisiana la",
    "summary": "Louisiana has a fair chance hiring law for state government jobs that delays criminal background checks until after a conditional offer. Federal EEOC protections apply statewide to private employers. The Louisiana Workforce Commission can provide reentry employment resources.",
    "resources": [
      {
        "label": "Reentry Employment — Louisiana Workforce Commission",
        "url": "https://www.laworks.net/WorkforceDev/LWC_ReentryEmployment.asp"
      },
      {
        "label": "EEOC Charge Information — Louisiana",
        "url": "https://www.eeoc.gov/field/new-orleans"
      },
      {
        "label": "Employment Rights After a Conviction — Louisiana Law Help",
        "url": "https://louisianalawhelp.org/resource/employment"
      }
    ],
    "learnMoreUrl": "https://www.laworks.net/WorkforceDev/LWC_ReentryEmployment.asp",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "LA",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop louisiana la",
    "summary": "Louisiana residents have the same Fourth and Fifth Amendment protections as all Americans during police encounters. Louisiana law also provides additional protections around use of force. The ACLU of Louisiana documents ongoing civil rights issues and offers know-your-rights guidance.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Louisiana",
        "url": "https://www.laaclu.org/en/know-your-rights"
      },
      {
        "label": "Louisiana Attorney General — Civil Rights Division",
        "url": "https://www.ag.state.la.us/Section/CivilRights"
      },
      {
        "label": "Filing a Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.laaclu.org/en/know-your-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "LA",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment louisiana la",
    "summary": "Louisiana parole is administered by the Louisiana Board of Pardons and Parole. Conditions are set at release and may include reporting, travel restrictions, and curfews. Violations can result in revocation. The Department of Corrections provides transition services for people leaving state custody.",
    "resources": [
      {
        "label": "Louisiana Board of Pardons and Parole",
        "url": "https://doc.louisiana.gov/imprisoned-person-programs-re-entry/pardons-parole/"
      },
      {
        "label": "Louisiana DOC Reentry Resources",
        "url": "https://doc.louisiana.gov/imprisoned-person-programs-re-entry/"
      },
      {
        "label": "Parole and Probation Rights — ACLU of Louisiana",
        "url": "https://www.laaclu.org/en/know-your-rights"
      }
    ],
    "learnMoreUrl": "https://doc.louisiana.gov/imprisoned-person-programs-re-entry/pardons-parole/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "LA",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting louisiana la",
    "summary": "Louisiana probation is supervised by the Division of Probation and Parole within the Department of Corrections. Conditions are set by the court and may include reporting, substance testing, and employment requirements. Violations are reviewed at a formal revocation hearing.",
    "resources": [
      {
        "label": "Louisiana Probation and Parole Division — DOC",
        "url": "https://doc.louisiana.gov/division-of-probation-and-parole/"
      },
      {
        "label": "Probation Conditions and Rights — Louisiana Law Help",
        "url": "https://louisianalawhelp.org/resource/probation-and-parole"
      },
      {
        "label": "Reentry Support — Louisiana DOC",
        "url": "https://doc.louisiana.gov/imprisoned-person-programs-re-entry/"
      }
    ],
    "learnMoreUrl": "https://doc.louisiana.gov/division-of-probation-and-parole/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ME",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement maine me",
    "summary": "Maine never takes away the right to vote. Even people currently serving a felony sentence in prison can vote by absentee ballot. There is no registration loss or restoration process needed. Maine and Vermont are the only states with this policy.",
    "resources": [
      {
        "label": "Voting in Maine — Secretary of State",
        "url": "https://www.maine.gov/sos/cec/elec/voter-info/voting-incarcerated.html"
      },
      {
        "label": "Maine Voting Rights — ACLU of Maine",
        "url": "https://www.aclumaine.org"
      },
      {
        "label": "Legal Help — Pine Tree Legal Assistance",
        "url": "https://www.ptla.org"
      }
    ],
    "learnMoreUrl": "https://www.maine.gov/sos/cec/elec/voter-info/voting-incarcerated.html",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ME",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history maine me",
    "summary": "Maine has very limited expungement options. There is generally no authority to expunge adult conviction records. Non-conviction arrests may be eligible for limited relief. Contact Pine Tree Legal Assistance for guidance on your specific situation.",
    "resources": [
      {
        "label": "Maine Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/maine-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Maine Courts — Criminal Records",
        "url": "https://www.courts.maine.gov/fees_forms/forms/criminal_forms.html"
      },
      {
        "label": "Legal Help — Pine Tree Legal Assistance",
        "url": "https://www.ptla.org"
      }
    ],
    "learnMoreUrl": "https://ccresourcecenter.org/state-restoration-profiles/maine-restoration-of-rights-pardon-expungement-sealing/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ME",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony maine me",
    "summary": "Maine has protections through the Maine Human Rights Act against some forms of housing discrimination. Federal Fair Housing Act and HUD guidance also apply. Maine Housing and legal aid can assist with housing complaints.",
    "resources": [
      {
        "label": "Maine Human Rights Commission — Housing",
        "url": "https://www.maine.gov/mhrc/housing"
      },
      {
        "label": "Fair Housing — HUD Maine",
        "url": "https://www.hud.gov/states/maine/renting"
      },
      {
        "label": "Housing Help — Pine Tree Legal Assistance",
        "url": "https://www.ptla.org"
      }
    ],
    "learnMoreUrl": "https://www.maine.gov/mhrc/housing",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ME",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony maine me",
    "summary": "Maine has no statewide ban-the-box law for private employers. Portland has a local ordinance. Federal EEOC protections apply statewide. The Maine Department of Labor provides workforce development and career center services.",
    "resources": [
      {
        "label": "Maine DOL — Career Center Services",
        "url": "https://www.maine.gov/labor/career_center/"
      },
      {
        "label": "EEOC — Boston Area Office (covers Maine)",
        "url": "https://www.eeoc.gov/field/boston"
      },
      {
        "label": "Employment Help — Pine Tree Legal Assistance",
        "url": "https://www.ptla.org"
      }
    ],
    "learnMoreUrl": "https://www.maine.gov/labor/career_center/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ME",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop maine me",
    "summary": "Maine residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of Maine monitors civil rights issues and provides know-your-rights resources. You have the right to remain silent and to refuse a warrantless search.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Maine",
        "url": "https://www.aclumaine.org"
      },
      {
        "label": "Maine AG — Civil Rights",
        "url": "https://www.maine.gov/ag/civil_rights/"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclumaine.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ME",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment maine me",
    "summary": "Maine abolished traditional parole in 1976. People released from Maine prisons serve a period of administrative release supervised by the Maine DOC. Conditions are set administratively and violations may result in return to custody.",
    "resources": [
      {
        "label": "Maine DOC — Supervised Community Confinement",
        "url": "https://www.maine.gov/corrections/supervision"
      },
      {
        "label": "Maine DOC — Reentry Resources",
        "url": "https://www.maine.gov/corrections/reentry"
      },
      {
        "label": "Legal Help — Pine Tree Legal Assistance",
        "url": "https://www.ptla.org"
      }
    ],
    "learnMoreUrl": "https://www.maine.gov/corrections/supervision",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ME",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting maine me",
    "summary": "Maine probation is supervised by the Maine DOC. Conditions are set by the court. Maine has active drug treatment courts. Violations are heard before the sentencing court. The DOC provides reentry and substance abuse services.",
    "resources": [
      {
        "label": "Maine DOC — Probation and Parole",
        "url": "https://www.maine.gov/corrections/supervision"
      },
      {
        "label": "Maine Drug Courts — Judicial Branch",
        "url": "https://www.courts.maine.gov/courts/sjc/drug_court.html"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.maine.gov/corrections/supervision",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MD",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement maryland md",
    "summary": "Maryland restored voting rights to people on parole and probation in 2020. Rights are restored upon release from prison. People in jail awaiting trial can also vote. You must re-register to vote. Buying or selling votes results in permanent disenfranchisement.",
    "resources": [
      {
        "label": "Maryland Voting Rights — State Board of Elections",
        "url": "https://www.elections.maryland.gov/voter_registration/restore_rights.html"
      },
      {
        "label": "Maryland Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/maryland"
      },
      {
        "label": "Legal Help — Maryland Legal Aid",
        "url": "https://www.mdlab.org"
      }
    ],
    "learnMoreUrl": "https://www.elections.maryland.gov/voter_registration/restore_rights.html",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MD",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history maryland md",
    "summary": "Maryland has strong expungement laws that were expanded in 2021 and 2023. Many misdemeanor and felony convictions are eligible for expungement after waiting periods. The process requires a petition. Maryland also allows expungement of non-conviction records. The 2023 legislation expanded eligibility significantly.",
    "resources": [
      {
        "label": "Maryland Expungement — Maryland Courts",
        "url": "https://mdcourts.gov/legalhelp/expungement"
      },
      {
        "label": "Maryland Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/maryland-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Maryland Legal Aid",
        "url": "https://www.mdlab.org"
      }
    ],
    "learnMoreUrl": "https://mdcourts.gov/legalhelp/expungement",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MD",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony maryland md",
    "summary": "Maryland has housing discrimination protections through the Maryland Commission on Civil Rights. Baltimore City has additional fair chance housing protections. Federal Fair Housing Act and HUD guidance apply statewide.",
    "resources": [
      {
        "label": "Maryland Commission on Civil Rights — Housing",
        "url": "https://mccr.maryland.gov/Pages/Housing.aspx"
      },
      {
        "label": "Fair Housing — HUD Maryland",
        "url": "https://www.hud.gov/states/maryland/renting"
      },
      {
        "label": "Housing Help — Maryland Legal Aid",
        "url": "https://www.mdlab.org"
      }
    ],
    "learnMoreUrl": "https://mccr.maryland.gov/Pages/Housing.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MD",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony maryland md",
    "summary": "Maryland enacted a statewide ban-the-box law (2020) for employers with 15 or more employees. The Maryland Commission on Civil Rights enforces these protections. The Maryland DOL provides workforce development and reentry employment services.",
    "resources": [
      {
        "label": "Maryland Fair Chance — MCCR",
        "url": "https://mccr.maryland.gov/Pages/Criminal-Records-Employer.aspx"
      },
      {
        "label": "EEOC — Baltimore Field Office",
        "url": "https://www.eeoc.gov/field/baltimore"
      },
      {
        "label": "Employment Help — Maryland Legal Aid",
        "url": "https://www.mdlab.org"
      }
    ],
    "learnMoreUrl": "https://mccr.maryland.gov/Pages/Criminal-Records-Employer.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MD",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop maryland md",
    "summary": "Maryland residents have Fourth and Fifth Amendment protections during police interactions. The Anton's Law (2021) and police accountability reforms provide additional protections. The ACLU of Maryland provides know-your-rights resources.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Maryland",
        "url": "https://www.aclu-md.org/know-your-rights"
      },
      {
        "label": "Maryland AG — Civil Rights Division",
        "url": "https://www.marylandattorneygeneral.gov/Pages/CivilRights/default.aspx"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclu-md.org/know-your-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MD",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment maryland md",
    "summary": "Maryland parole is administered by the Maryland Parole Commission. Conditions are set at release and vary by offense. The DPSCS provides reentry services. Violations are reviewed by the Commission and can result in revocation.",
    "resources": [
      {
        "label": "Maryland Parole Commission — DPSCS",
        "url": "https://www.dpscs.state.md.us/organizations/parole-commission.shtml"
      },
      {
        "label": "Maryland DPSCS — Reentry",
        "url": "https://www.dpscs.state.md.us/programs/reentry.shtml"
      },
      {
        "label": "Parole Rights — Maryland Legal Aid",
        "url": "https://www.mdlab.org"
      }
    ],
    "learnMoreUrl": "https://www.dpscs.state.md.us/organizations/parole-commission.shtml",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MD",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting maryland md",
    "summary": "Maryland probation is supervised by the Department of Public Safety and Correctional Services. Conditions are court-ordered. Maryland has active drug courts and mental health courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "Maryland DPSCS — Probation",
        "url": "https://www.dpscs.state.md.us/programs/division-of-parole-and-probation.shtml"
      },
      {
        "label": "Maryland Drug Courts — Judiciary",
        "url": "https://mdcourts.gov/district/programs/drugcourt"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.dpscs.state.md.us/programs/division-of-parole-and-probation.shtml",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MA",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement massachusetts ma",
    "summary": "Massachusetts restores voting rights upon release from prison. People on probation or parole can vote. You must re-register after release. Massachusetts has accessible voter registration including automatic registration through state agencies.",
    "resources": [
      {
        "label": "Massachusetts Voting Rights — Secretary of State",
        "url": "https://www.sec.state.ma.us/ele/eleifv/ifvinfq.htm"
      },
      {
        "label": "Massachusetts Voting Rights — ACLU of Massachusetts",
        "url": "https://www.aclum.org/issues/voting-rights"
      },
      {
        "label": "Legal Help — Massachusetts Legal Help",
        "url": "https://www.masslegalhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.sec.state.ma.us/ele/eleifv/ifvinfq.htm",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MA",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history massachusetts ma",
    "summary": "Massachusetts allows sealing of criminal records through the CORI (Criminal Offender Record Information) system. Misdemeanors can be sealed after 3 years; felonies after 7 years. Limited expungement is available for certain youthful offenders and non-conviction records. Petition through the court.",
    "resources": [
      {
        "label": "Massachusetts Record Sealing — MA Courts",
        "url": "https://www.mass.gov/sealing-your-criminal-record"
      },
      {
        "label": "Massachusetts CORI Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/massachusetts-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Sealing Help — Greater Boston Legal Services",
        "url": "https://www.gbls.org"
      }
    ],
    "learnMoreUrl": "https://www.mass.gov/sealing-your-criminal-record",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MA",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony massachusetts ma",
    "summary": "Massachusetts has strong fair housing protections through the Massachusetts Commission Against Discrimination (MCAD). Boston and other cities have additional fair chance housing protections. The state CORI law limits landlord use of criminal records.",
    "resources": [
      {
        "label": "Massachusetts Commission Against Discrimination — Housing",
        "url": "https://www.mass.gov/housing-discrimination"
      },
      {
        "label": "Fair Housing — HUD Massachusetts",
        "url": "https://www.hud.gov/states/massachusetts/renting"
      },
      {
        "label": "Housing Rights — Massachusetts Legal Help",
        "url": "https://www.masslegalhelp.org/housing"
      }
    ],
    "learnMoreUrl": "https://www.mass.gov/housing-discrimination",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MA",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony massachusetts ma",
    "summary": "Massachusetts enacted a statewide ban-the-box law (CORI Reform, 2010) restricting criminal record inquiries on job applications. The MCAD enforces these protections. Massachusetts has one of the strongest CORI reform systems in the country protecting job applicants.",
    "resources": [
      {
        "label": "Massachusetts CORI Reform — MA EOPSS",
        "url": "https://www.mass.gov/criminal-offender-record-information-cori"
      },
      {
        "label": "EEOC — Boston Area Office",
        "url": "https://www.eeoc.gov/field/boston"
      },
      {
        "label": "Employment Rights — Massachusetts Legal Help",
        "url": "https://www.masslegalhelp.org/employment"
      }
    ],
    "learnMoreUrl": "https://www.mass.gov/criminal-offender-record-information-cori",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MA",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop massachusetts ma",
    "summary": "Massachusetts residents have Fourth and Fifth Amendment protections during police interactions. The Massachusetts AG enforces civil rights protections. The ACLU of Massachusetts provides comprehensive know-your-rights guidance. The Police Reform Bill (2020) added significant accountability measures.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Massachusetts",
        "url": "https://www.aclum.org/issues/criminal-law-reform/know-your-rights-police-encounters"
      },
      {
        "label": "Massachusetts AG — Civil Rights Division",
        "url": "https://www.mass.gov/orgs/civil-rights-division"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclum.org/issues/criminal-law-reform/know-your-rights-police-encounters",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MA",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment massachusetts ma",
    "summary": "Massachusetts parole is administered by the Massachusetts Parole Board. Conditions are set at release. The DOC provides reentry and transitional services. Violations are reviewed by the Parole Board and can result in revocation.",
    "resources": [
      {
        "label": "Massachusetts Parole Board",
        "url": "https://www.mass.gov/orgs/parole-board"
      },
      {
        "label": "Massachusetts DOC — Reentry Services",
        "url": "https://www.mass.gov/reentry-services"
      },
      {
        "label": "Parole Rights — Massachusetts Legal Help",
        "url": "https://www.masslegalhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.mass.gov/orgs/parole-board",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MA",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting massachusetts ma",
    "summary": "Massachusetts probation is administered by the Office of the Commissioner of Probation within the Trial Court. Conditions are court-ordered. Massachusetts has active drug courts and specialty courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "Massachusetts Probation Service",
        "url": "https://www.mass.gov/orgs/massachusetts-probation-service"
      },
      {
        "label": "Massachusetts Drug Courts",
        "url": "https://www.mass.gov/drug-courts"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.mass.gov/orgs/massachusetts-probation-service",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MI",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement michigan mi",
    "summary": "Michigan restores voting rights upon release from prison. People on probation can vote. People on parole can now also vote following 2022 reforms. You must re-register to vote after release. Michigan has same-day registration.",
    "resources": [
      {
        "label": "Michigan Voting Rights — Secretary of State",
        "url": "https://mvic.sos.state.mi.us/Voter/Index"
      },
      {
        "label": "Michigan Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/michigan"
      },
      {
        "label": "Legal Help — Michigan Legal Help",
        "url": "https://michiganlegalhelp.org"
      }
    ],
    "learnMoreUrl": "https://mvic.sos.state.mi.us/Voter/Index",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MI",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history michigan mi",
    "summary": "Michigan's Clean Slate Act (2020) significantly expanded expungement eligibility. Automatic expungement applies to many misdemeanors and some felonies after 7-10 years. The petition process is also available. One felony and four misdemeanors can be expunged. Cannabis convictions receive priority treatment.",
    "resources": [
      {
        "label": "Michigan Expungement — Michigan Courts",
        "url": "https://courts.michigan.gov/self-help/center/pages/expungement.aspx"
      },
      {
        "label": "Michigan Clean Slate — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/michigan-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Expungement Help — Michigan Legal Help",
        "url": "https://michiganlegalhelp.org/self-help-tools/expungement"
      }
    ],
    "learnMoreUrl": "https://courts.michigan.gov/self-help/center/pages/expungement.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MI",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony michigan mi",
    "summary": "Michigan has state civil rights protections through the Elliott-Larsen Civil Rights Act. Detroit has a fair chance housing ordinance. Federal Fair Housing Act and HUD guidance also apply. The Michigan State Housing Development Authority provides renter resources.",
    "resources": [
      {
        "label": "Michigan MDHHS — Housing Discrimination",
        "url": "https://www.michigan.gov/mdhhs/inside-mdhhs/bureaus-and-offices/bphp/housing"
      },
      {
        "label": "Fair Housing — HUD Michigan",
        "url": "https://www.hud.gov/states/michigan/renting"
      },
      {
        "label": "Housing Help — Michigan Legal Help",
        "url": "https://michiganlegalhelp.org/self-help-tools/housing"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/michigan/renting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MI",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony michigan mi",
    "summary": "Michigan enacted a statewide ban-the-box law for state employment in 2018. Executive orders extended restrictions to additional state agencies in 2019. Federal EEOC protections apply to private employers. The Michigan Works! system provides reentry employment services.",
    "resources": [
      {
        "label": "Michigan Department of Labor & Economic Opportunity",
        "url": "https://www.michigan.gov/leo"
      },
      {
        "label": "EEOC — Detroit Field Office",
        "url": "https://www.eeoc.gov/field/detroit"
      },
      {
        "label": "Employment Rights — Michigan Legal Help",
        "url": "https://michiganlegalhelp.org/self-help-tools/employment"
      }
    ],
    "learnMoreUrl": "https://www.michigan.gov/leo",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MI",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop michigan mi",
    "summary": "Michigan residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of Michigan provides know-your-rights resources and monitors civil rights statewide. You have the right to remain silent and to refuse a warrantless search.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Michigan",
        "url": "https://www.aclumich.org/en/know-your-rights"
      },
      {
        "label": "Michigan AG — Civil Rights Division",
        "url": "https://www.michigan.gov/ag/consumer-protection/civil-rights-division"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclumich.org/en/know-your-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MI",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment michigan mi",
    "summary": "Michigan parole is administered by the Michigan Parole Board within the MDOC. Conditions are set at release and vary by offense. The MDOC provides reentry services including housing and employment assistance. Violations are reviewed by the Parole Board.",
    "resources": [
      {
        "label": "Michigan Parole Board — MDOC",
        "url": "https://www.michigan.gov/mdoc/0,4551,7-119-68854---,00.html"
      },
      {
        "label": "Michigan DOC — Reentry Programs",
        "url": "https://www.michigan.gov/mdoc/0,4551,7-119-68854_74101---,00.html"
      },
      {
        "label": "Parole Rights — Michigan Legal Help",
        "url": "https://michiganlegalhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.michigan.gov/mdoc/0,4551,7-119-68854---,00.html",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MI",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting michigan mi",
    "summary": "Michigan probation is supervised by county probation departments or the MDOC. Conditions are court-ordered. Michigan has active drug courts and specialty courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "Michigan Courts — Probation",
        "url": "https://courts.michigan.gov/for-the-public/probation"
      },
      {
        "label": "Michigan Drug Courts — State Court Administrative Office",
        "url": "https://courts.michigan.gov/administration/scao/officesandprograms/pages/treatmentcourts.aspx"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://courts.michigan.gov/for-the-public/probation",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MN",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement minnesota mn",
    "summary": "Minnesota restored voting rights to people on parole and probation in 2023 (HF 28 signed by Governor Walz). Rights are restored upon release from prison. You must re-register. The Minnesota Supreme Court upheld this law in 2024. This restored rights to over 55,000 people.",
    "resources": [
      {
        "label": "Minnesota Voting Rights Restoration — Secretary of State",
        "url": "https://www.sos.state.mn.us/elections-voting/register-to-vote/can-i-register-and-vote/"
      },
      {
        "label": "Minnesota Voting Rights — ACLU of Minnesota",
        "url": "https://www.aclu-mn.org/en/issues/voting-rights"
      },
      {
        "label": "Legal Help — Mid-Minnesota Legal Aid",
        "url": "https://www.mnlegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.sos.state.mn.us/elections-voting/register-to-vote/can-i-register-and-vote/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MN",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history minnesota mn",
    "summary": "Minnesota has broad expungement laws with both statutory and inherent authority. Many misdemeanor and felony convictions are eligible for expungement after waiting periods. The court weighs public and private interests. Expanded eligibility was enacted in 2023.",
    "resources": [
      {
        "label": "Minnesota Expungement — Minnesota Courts",
        "url": "https://www.mncourts.gov/Help-Topics/Expungement.aspx"
      },
      {
        "label": "Minnesota Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/minnesota-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Volunteer Lawyers Network (Minnesota)",
        "url": "https://www.vlnmn.org"
      }
    ],
    "learnMoreUrl": "https://www.mncourts.gov/Help-Topics/Expungement.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MN",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony minnesota mn",
    "summary": "Minneapolis and St. Paul have local fair chance housing ordinances. The Minnesota Human Rights Act protects against housing discrimination. Federal Fair Housing Act and HUD guidance also apply. Minnesota Housing provides rental assistance programs.",
    "resources": [
      {
        "label": "Minnesota Human Rights Dept. — Housing",
        "url": "https://mn.gov/mdhr/yourrights/housing/"
      },
      {
        "label": "Fair Housing — HUD Minnesota",
        "url": "https://www.hud.gov/states/minnesota/renting"
      },
      {
        "label": "Housing Help — Mid-Minnesota Legal Aid",
        "url": "https://www.mnlegalservices.org"
      }
    ],
    "learnMoreUrl": "https://mn.gov/mdhr/yourrights/housing/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MN",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony minnesota mn",
    "summary": "Minnesota enacted a statewide ban-the-box law (2023) for private employers with 15 or more employees. Minneapolis enacted its own law earlier. The Minnesota Department of Human Rights enforces these protections. The Minnesota DES provides reentry employment resources.",
    "resources": [
      {
        "label": "Minnesota Fair Chance Hiring — MDHR",
        "url": "https://mn.gov/mdhr/yourrights/employment/criminal-background/"
      },
      {
        "label": "EEOC — Minneapolis Area Office",
        "url": "https://www.eeoc.gov/field/minneapolis"
      },
      {
        "label": "Employment Help — Mid-Minnesota Legal Aid",
        "url": "https://www.mnlegalservices.org"
      }
    ],
    "learnMoreUrl": "https://mn.gov/mdhr/yourrights/employment/criminal-background/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MN",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop minnesota mn",
    "summary": "Minnesota residents have Fourth and Fifth Amendment protections during police interactions. Following the murder of George Floyd, Minnesota enacted significant police accountability reforms. The ACLU of Minnesota provides comprehensive know-your-rights guidance.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Minnesota",
        "url": "https://www.aclu-mn.org/en/know-your-rights/police-interactions"
      },
      {
        "label": "Minnesota AG — Civil Rights",
        "url": "https://www.ag.state.mn.us/Office/CivilRights.asp"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclu-mn.org/en/know-your-rights/police-interactions",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MN",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment minnesota mn",
    "summary": "Minnesota does not use traditional parole for people sentenced after 1980. Most people serve their sentence and then a period of supervised release administered by the DOC. Conditions are set by the DOC and violations may result in a revocation hearing.",
    "resources": [
      {
        "label": "Minnesota DOC — Supervised Release",
        "url": "https://mn.gov/doc/facilities-reentry/reentry/"
      },
      {
        "label": "Minnesota Sentencing Guidelines Commission",
        "url": "https://mn.gov/msgc/"
      },
      {
        "label": "Supervision Rights — Mid-Minnesota Legal Aid",
        "url": "https://www.mnlegalservices.org"
      }
    ],
    "learnMoreUrl": "https://mn.gov/doc/facilities-reentry/reentry/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MN",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting minnesota mn",
    "summary": "Minnesota probation is supervised by county community corrections departments. Conditions are set by the court. Minnesota has active drug courts and specialty courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "Minnesota Community Corrections — DOC",
        "url": "https://mn.gov/doc/about/community-corrections/"
      },
      {
        "label": "Minnesota Drug Courts — Judicial Council",
        "url": "https://mn.gov/courts/specialty-courts/"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://mn.gov/doc/about/community-corrections/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MS",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement mississippi ms",
    "summary": "Mississippi permanently disenfranchises people convicted of 23 specific barred crimes including murder, rape, bribery, theft, and forgery. For those convictions, rights can only be restored by the Governor or by a bill passed by both houses of the legislature. Other felony convictions do not affect voting rights.",
    "resources": [
      {
        "label": "Voting Rights in Mississippi — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/mississippi"
      },
      {
        "label": "Mississippi Secretary of State — Voter Registration",
        "url": "https://www.sos.ms.gov/elections-voting/voter-registration"
      },
      {
        "label": "Mississippi Voting Rights — Mississippi Center for Justice",
        "url": "https://mscenterforjustice.org"
      }
    ],
    "learnMoreUrl": "https://www.usvotefoundation.org/voting-rights-restoration/mississippi",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MS",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history mississippi ms",
    "summary": "Mississippi allows expungement of qualifying first-offense misdemeanors and certain felony convictions. Only one felony expungement is available in a lifetime. A five-year waiting period applies after completing the sentence. Expunged records remain accessible to law enforcement. Employers may still ask about expunged records.",
    "resources": [
      {
        "label": "Mississippi Expungement Guide — Collateral Consequences Resource Center",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/mississippi-restoration-of-rights-pardon-expungement-sealing-2/"
      },
      {
        "label": "Mississippi Code § 99-19-71 — Expungement Statute",
        "url": "https://law.justia.com/codes/mississippi/section-99-19-71/"
      },
      {
        "label": "Record Clearing Help — Mississippi Legal Services",
        "url": "https://www.mslegalservices.org"
      }
    ],
    "learnMoreUrl": "https://ccresourcecenter.org/state-restoration-profiles/mississippi-restoration-of-rights-pardon-expungement-sealing-2/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MS",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony mississippi ms",
    "summary": "Mississippi has no statewide fair chance housing law, but federal Fair Housing Act and HUD guidance protecting against blanket criminal record bans apply. The Mississippi Home Corporation and legal aid organizations can assist renters facing housing discrimination.",
    "resources": [
      {
        "label": "Mississippi Home Corporation — Renter Resources",
        "url": "https://www.mshomecorp.com"
      },
      {
        "label": "Fair Housing Assistance — HUD Mississippi",
        "url": "https://www.hud.gov/states/mississippi/renting"
      },
      {
        "label": "Housing Help — Mississippi Legal Services",
        "url": "https://www.mslegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/mississippi/renting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MS",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony mississippi ms",
    "summary": "Mississippi has no statewide ban-the-box law for private employers. Federal EEOC protections against discriminatory use of criminal records apply statewide. The Mississippi Department of Employment Security provides job placement assistance for people leaving the justice system.",
    "resources": [
      {
        "label": "Mississippi Dept. of Employment Security — Job Seekers",
        "url": "https://mdes.ms.gov/jobs-and-training/find-a-job/"
      },
      {
        "label": "EEOC — Mississippi Charge Filing",
        "url": "https://www.eeoc.gov/field/jackson"
      },
      {
        "label": "Reentry Employment Resources — Mississippi Legal Services",
        "url": "https://www.mslegalservices.org"
      }
    ],
    "learnMoreUrl": "https://mdes.ms.gov/jobs-and-training/find-a-job/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MS",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop mississippi ms",
    "summary": "Mississippi residents are protected by the Fourth and Fifth Amendments during all police interactions. The ACLU of Mississippi monitors civil rights violations and provides know-your-rights guidance. You have the right to remain silent and to request an attorney.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Mississippi",
        "url": "https://www.aclu-ms.org"
      },
      {
        "label": "Filing a Complaint — Mississippi Attorney General",
        "url": "https://www.ago.state.ms.us"
      },
      {
        "label": "Police Misconduct — DOJ Civil Rights Division",
        "url": "https://www.justice.gov/crt/addressing-police-misconduct-laws-enforced-department-justice"
      }
    ],
    "learnMoreUrl": "https://www.aclu-ms.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MS",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment mississippi ms",
    "summary": "Mississippi parole is administered by the Mississippi Parole Board. Conditions may include regular reporting, curfews, travel restrictions, and substance testing. Violations may result in revocation and return to custody. The MDOC provides reentry planning services.",
    "resources": [
      {
        "label": "Mississippi Parole Board",
        "url": "https://www.ms.gov/mdoc/Parole_Board"
      },
      {
        "label": "Mississippi Department of Corrections — Reentry",
        "url": "https://www.mdoc.ms.gov/Reentry/Pages/default.aspx"
      },
      {
        "label": "Parole Conditions Guide — Mississippi Legal Services",
        "url": "https://www.mslegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.mdoc.ms.gov/Reentry/Pages/default.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MS",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting mississippi ms",
    "summary": "Mississippi probation is supervised by probation officers under the Mississippi Department of Corrections. Conditions are set by the sentencing court and may include reporting, substance testing, and community service. Revocation hearings are held in court.",
    "resources": [
      {
        "label": "Mississippi DOC — Probation and Parole",
        "url": "https://www.mdoc.ms.gov/Community-Corrections/Pages/Community-Corrections.aspx"
      },
      {
        "label": "Probation Rights — Mississippi Legal Services",
        "url": "https://www.mslegalservices.org"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.mdoc.ms.gov/Community-Corrections/Pages/Community-Corrections.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MO",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement missouri mo",
    "summary": "Missouri automatically restores voting rights after completing the full sentence including parole and probation. No petition is required. You must re-register to vote. People convicted of election-related crimes may face additional restrictions.",
    "resources": [
      {
        "label": "Missouri Voting Rights — Secretary of State",
        "url": "https://www.sos.mo.gov/elections/goVoteMissouri/pages/faqs/eligibility"
      },
      {
        "label": "Missouri Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/missouri"
      },
      {
        "label": "Legal Help — Missouri Legal Services",
        "url": "https://www.moslegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.sos.mo.gov/elections/goVoteMissouri/pages/faqs/eligibility",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MO",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history missouri mo",
    "summary": "Missouri significantly expanded expungement eligibility in 2018. Misdemeanors can be expunged after 3 years; felonies after 7 years. The process requires a petition. Certain serious offenses are excluded. Expunged records are not publicly accessible but remain for law enforcement use.",
    "resources": [
      {
        "label": "Missouri Expungement — Missouri Courts",
        "url": "https://www.courts.mo.gov/page.jsp?id=119278"
      },
      {
        "label": "Missouri Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/missouri-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Missouri Legal Services",
        "url": "https://www.moslegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.courts.mo.gov/page.jsp?id=119278",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MO",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony missouri mo",
    "summary": "Kansas City and St. Louis have local fair chance housing ordinances. Missouri has state civil rights protections through the Missouri Human Rights Act. Federal Fair Housing Act and HUD guidance also apply statewide.",
    "resources": [
      {
        "label": "Missouri Human Rights Commission — Housing",
        "url": "https://labor.mo.gov/MCHR/housing"
      },
      {
        "label": "Fair Housing — HUD Missouri",
        "url": "https://www.hud.gov/states/missouri/renting"
      },
      {
        "label": "Housing Help — Missouri Legal Services",
        "url": "https://www.moslegalservices.org"
      }
    ],
    "learnMoreUrl": "https://labor.mo.gov/MCHR/housing",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MO",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony missouri mo",
    "summary": "Missouri has no statewide ban-the-box law for private employers. Kansas City and St. Louis have local ordinances. Federal EEOC protections apply statewide. The Missouri Division of Workforce Development provides reentry employment services.",
    "resources": [
      {
        "label": "Missouri Division of Workforce Development — Job Seekers",
        "url": "https://jobs.mo.gov"
      },
      {
        "label": "EEOC — St. Louis District Office",
        "url": "https://www.eeoc.gov/field/st-louis"
      },
      {
        "label": "Employment Help — Missouri Legal Services",
        "url": "https://www.moslegalservices.org"
      }
    ],
    "learnMoreUrl": "https://jobs.mo.gov",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MO",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop missouri mo",
    "summary": "Missouri residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of Missouri monitors civil rights and provides know-your-rights resources. Missouri has faced significant scrutiny over policing practices, particularly in the St. Louis area.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Missouri",
        "url": "https://www.aclu-mo.org/en/know-your-rights"
      },
      {
        "label": "Missouri AG — Civil Rights Unit",
        "url": "https://ago.mo.gov/civil-rights"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclu-mo.org/en/know-your-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MO",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment missouri mo",
    "summary": "Missouri parole is administered by the Missouri Board of Probation and Parole within the DOC. Conditions are set at release. The DOC provides reentry and transition services. Violations are reviewed by the Board and can result in revocation.",
    "resources": [
      {
        "label": "Missouri Board of Probation and Parole — DOC",
        "url": "https://doc.mo.gov/boards/parole"
      },
      {
        "label": "Missouri DOC — Reentry Services",
        "url": "https://doc.mo.gov/reentry"
      },
      {
        "label": "Parole Rights — Missouri Legal Services",
        "url": "https://www.moslegalservices.org"
      }
    ],
    "learnMoreUrl": "https://doc.mo.gov/boards/parole",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MO",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting missouri mo",
    "summary": "Missouri probation is supervised by the Board of Probation and Parole through the DOC. Conditions are court-ordered. Missouri has active drug courts and mental health courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "Missouri DOC — Community Supervision",
        "url": "https://doc.mo.gov/community-supervision"
      },
      {
        "label": "Missouri Courts — Drug Courts",
        "url": "https://www.courts.mo.gov/page.jsp?id=12316"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://doc.mo.gov/community-supervision",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MT",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement montana mt",
    "summary": "Montana restores voting rights upon release from prison. People on probation can vote. People on parole cannot vote until parole is completed. You must re-register to vote. Montana has accessible same-day voter registration.",
    "resources": [
      {
        "label": "Montana Voting Rights — Secretary of State",
        "url": "https://sosmt.gov/elections/felony_offenders/"
      },
      {
        "label": "Montana Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/montana"
      },
      {
        "label": "Legal Help — Montana Legal Services Association",
        "url": "https://www.montanalawhelp.org"
      }
    ],
    "learnMoreUrl": "https://sosmt.gov/elections/felony_offenders/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MT",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history montana mt",
    "summary": "Montana allows expungement of misdemeanor convictions by petition after 5 years. Felony expungement is very limited. Non-conviction records are subject to automatic sealing. Contact Montana Legal Services for options specific to your case.",
    "resources": [
      {
        "label": "Montana Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/montana-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Montana Courts — Self-Help Center",
        "url": "https://courts.mt.gov/selfhelp"
      },
      {
        "label": "Legal Help — Montana Legal Services Association",
        "url": "https://www.montanalawhelp.org"
      }
    ],
    "learnMoreUrl": "https://ccresourcecenter.org/state-restoration-profiles/montana-restoration-of-rights-pardon-expungement-sealing/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MT",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony montana mt",
    "summary": "Montana has no statewide fair chance housing law. Federal Fair Housing Act and HUD guidance on criminal records apply to all Montana landlords. The Montana Board of Housing provides housing assistance resources.",
    "resources": [
      {
        "label": "Montana Board of Housing",
        "url": "https://housing.mt.gov"
      },
      {
        "label": "Fair Housing — HUD Montana",
        "url": "https://www.hud.gov/states/montana/renting"
      },
      {
        "label": "Housing Help — Montana Legal Services",
        "url": "https://www.montanalawhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/montana/renting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MT",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony montana mt",
    "summary": "Montana has no statewide ban-the-box law for private employers. Federal EEOC protections apply. The Montana Department of Labor and Industry provides workforce services and reentry support programs.",
    "resources": [
      {
        "label": "Montana DLI — Job Service Montana",
        "url": "https://dli.mt.gov"
      },
      {
        "label": "EEOC — Denver Field Office (covers Montana)",
        "url": "https://www.eeoc.gov/field/denver"
      },
      {
        "label": "Employment Help — Montana Legal Services",
        "url": "https://www.montanalawhelp.org"
      }
    ],
    "learnMoreUrl": "https://dli.mt.gov",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MT",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop montana mt",
    "summary": "Montana residents have Fourth and Fifth Amendment protections plus state constitutional rights during police interactions. The ACLU of Montana monitors civil rights and provides know-your-rights resources.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Montana",
        "url": "https://aclumontana.org"
      },
      {
        "label": "Montana AG — Division of Criminal Investigation",
        "url": "https://doj.mt.gov"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://aclumontana.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MT",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment montana mt",
    "summary": "Montana parole is administered by the Montana Board of Pardons and Parole. Conditions are set at release. The DOC provides reentry and transition services. Violations are reviewed by the Board and can result in revocation.",
    "resources": [
      {
        "label": "Montana Board of Pardons and Parole — DOC",
        "url": "https://cor.mt.gov/AboutDOC/ParoleProbation"
      },
      {
        "label": "Montana DOC — Reentry Services",
        "url": "https://cor.mt.gov/Reentry"
      },
      {
        "label": "Parole Rights — Montana Legal Services",
        "url": "https://www.montanalawhelp.org"
      }
    ],
    "learnMoreUrl": "https://cor.mt.gov/AboutDOC/ParoleProbation",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "MT",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting montana mt",
    "summary": "Montana probation is supervised by county probation officers through the DOC. Conditions are court-ordered. Montana has active drug courts and mental health courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "Montana DOC — Probation and Parole",
        "url": "https://cor.mt.gov/AboutDOC/ParoleProbation"
      },
      {
        "label": "Montana Drug Courts — Court Administrator",
        "url": "https://courts.mt.gov/drug-court"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://cor.mt.gov/AboutDOC/ParoleProbation",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NE",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement nebraska ne",
    "summary": "Nebraska automatically restores voting rights two years after completing the full sentence including parole and probation. This two-year waiting period is unique. A 2024 law purportedly eliminated this waiting period, but the Nebraska Supreme Court heard legal challenges as of late 2024. Check current status before registering.",
    "resources": [
      {
        "label": "Nebraska Voting Rights — Secretary of State",
        "url": "https://sos.nebraska.gov/elections/voter-registration"
      },
      {
        "label": "Nebraska Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/nebraska"
      },
      {
        "label": "Legal Help — Nebraska Legal Aid",
        "url": "https://www.nebraskalegalaid.org"
      }
    ],
    "learnMoreUrl": "https://sos.nebraska.gov/elections/voter-registration",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NE",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history nebraska ne",
    "summary": "Nebraska allows set-aside of convictions after completion of sentence, which removes civil penalties but does not expunge the record. Limited non-conviction record sealing is available. Contact Nebraska Legal Aid for guidance on your specific situation.",
    "resources": [
      {
        "label": "Nebraska Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/nebraska-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Nebraska Courts — Criminal Records",
        "url": "https://supremecourt.nebraska.gov/self-help/criminal"
      },
      {
        "label": "Legal Help — Nebraska Legal Aid",
        "url": "https://www.nebraskalegalaid.org"
      }
    ],
    "learnMoreUrl": "https://ccresourcecenter.org/state-restoration-profiles/nebraska-restoration-of-rights-pardon-expungement-sealing/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NE",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony nebraska ne",
    "summary": "Omaha has a fair chance housing ordinance. Nebraska has no statewide fair chance housing law. Federal Fair Housing Act and HUD guidance on criminal records apply. The Nebraska Investment Finance Authority provides housing assistance resources.",
    "resources": [
      {
        "label": "Nebraska Investment Finance Authority — Housing",
        "url": "https://www.nifa.org/renters"
      },
      {
        "label": "Fair Housing — HUD Nebraska",
        "url": "https://www.hud.gov/states/nebraska/renting"
      },
      {
        "label": "Housing Help — Nebraska Legal Aid",
        "url": "https://www.nebraskalegalaid.org"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/nebraska/renting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NE",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony nebraska ne",
    "summary": "Omaha has a ban-the-box ordinance for city employment. Nebraska has no statewide ban-the-box law for private employers. Federal EEOC protections apply. Nebraska Workforce Development provides employment and reentry services.",
    "resources": [
      {
        "label": "Nebraska Workforce Development — Job Seekers",
        "url": "https://www.dol.nebraska.gov/nwd"
      },
      {
        "label": "EEOC — St. Louis District Office (covers Nebraska)",
        "url": "https://www.eeoc.gov/field/st-louis"
      },
      {
        "label": "Employment Help — Nebraska Legal Aid",
        "url": "https://www.nebraskalegalaid.org"
      }
    ],
    "learnMoreUrl": "https://www.dol.nebraska.gov/nwd",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NE",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop nebraska ne",
    "summary": "Nebraska residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of Nebraska monitors civil rights issues and provides know-your-rights resources.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Nebraska",
        "url": "https://www.acluofne.org"
      },
      {
        "label": "Nebraska AG — Civil Rights",
        "url": "https://ago.nebraska.gov"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.acluofne.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NE",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment nebraska ne",
    "summary": "Nebraska parole is administered by the Nebraska Board of Parole. Conditions are set at release. The DOC provides reentry and transition services. Violations are reviewed by the Board and can result in revocation.",
    "resources": [
      {
        "label": "Nebraska Board of Parole",
        "url": "https://www.corrections.nebraska.gov/parole-board"
      },
      {
        "label": "Nebraska DOC — Reentry",
        "url": "https://www.corrections.nebraska.gov/reentry"
      },
      {
        "label": "Parole Rights — Nebraska Legal Aid",
        "url": "https://www.nebraskalegalaid.org"
      }
    ],
    "learnMoreUrl": "https://www.corrections.nebraska.gov/parole-board",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NE",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting nebraska ne",
    "summary": "Nebraska probation is supervised by the Nebraska Department of Correctional Services. Conditions are court-ordered. Nebraska has active drug courts and specialty courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "Nebraska DOC — Community Programs",
        "url": "https://www.corrections.nebraska.gov/community"
      },
      {
        "label": "Nebraska Drug Courts — Supreme Court",
        "url": "https://supremecourt.nebraska.gov/courts/drug-courts"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.corrections.nebraska.gov/community",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NV",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement nevada nv",
    "summary": "Nevada restores voting rights upon release from prison. People on parole and probation can vote. You must re-register to vote after release. Nevada has accessible voter registration through multiple state agencies.",
    "resources": [
      {
        "label": "Nevada Voting Rights — Secretary of State",
        "url": "https://www.nvsos.gov/sos/elections/voters/register-to-vote"
      },
      {
        "label": "Nevada Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/nevada"
      },
      {
        "label": "Legal Help — Legal Aid Center of Southern Nevada",
        "url": "https://www.lacsn.org"
      }
    ],
    "learnMoreUrl": "https://www.nvsos.gov/sos/elections/voters/register-to-vote",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NV",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history nevada nv",
    "summary": "Nevada allows record sealing for most misdemeanors and many felonies after varying waiting periods. There is no limitation on number of sealings. The process requires a petition to the court. Nevada enacted a statewide fair chance housing law in 2023 connected to record sealing access.",
    "resources": [
      {
        "label": "Nevada Record Sealing — Nevada Courts",
        "url": "https://www.nevadajudiciary.us/index.php/nevada-courts-resource-guide/self-help-center"
      },
      {
        "label": "Nevada Record Sealing Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/nevada-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Legal Aid Center of Southern Nevada",
        "url": "https://www.lacsn.org"
      }
    ],
    "learnMoreUrl": "https://ccresourcecenter.org/state-restoration-profiles/nevada-restoration-of-rights-pardon-expungement-sealing/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NV",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony nevada nv",
    "summary": "Nevada enacted a statewide fair chance housing law in 2023 that limits landlords' use of criminal records in rental decisions. Federal Fair Housing Act and HUD guidance also apply. The Nevada Housing Division provides renter assistance.",
    "resources": [
      {
        "label": "Nevada Housing Division — Renter Resources",
        "url": "https://housing.nv.gov"
      },
      {
        "label": "Fair Housing — HUD Nevada",
        "url": "https://www.hud.gov/states/nevada/renting"
      },
      {
        "label": "Housing Help — Legal Aid Center of Southern Nevada",
        "url": "https://www.lacsn.org"
      }
    ],
    "learnMoreUrl": "https://housing.nv.gov",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NV",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony nevada nv",
    "summary": "Nevada enacted a statewide ban-the-box law in 2017 for private employers. The Nevada Equal Rights Commission enforces protections against discriminatory use of criminal records. Nevada DETR provides workforce development and reentry employment services.",
    "resources": [
      {
        "label": "Nevada Equal Rights Commission",
        "url": "https://nerc.nv.gov"
      },
      {
        "label": "EEOC — Las Vegas Local Office",
        "url": "https://www.eeoc.gov/field/las-vegas"
      },
      {
        "label": "Employment Help — Legal Aid Center of Southern Nevada",
        "url": "https://www.lacsn.org"
      }
    ],
    "learnMoreUrl": "https://nerc.nv.gov",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NV",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop nevada nv",
    "summary": "Nevada residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of Nevada provides know-your-rights resources. Nevada passed police accountability legislation in 2021. You have the right to remain silent and to refuse a warrantless search.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Nevada",
        "url": "https://www.aclunv.org"
      },
      {
        "label": "Nevada AG — Civil Rights",
        "url": "https://ag.nv.gov"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclunv.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NV",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment nevada nv",
    "summary": "Nevada parole is administered by the Nevada Board of Parole Commissioners. Conditions are set at release. The Nevada DOC provides reentry services. Violations are reviewed by the Board and can result in revocation.",
    "resources": [
      {
        "label": "Nevada Board of Parole Commissioners",
        "url": "https://doc.nv.gov/Boards/Parole/Home/"
      },
      {
        "label": "Nevada DOC — Reentry Programs",
        "url": "https://doc.nv.gov/Inmates/Reentry/Home/"
      },
      {
        "label": "Parole Rights — Legal Aid Center of Southern Nevada",
        "url": "https://www.lacsn.org"
      }
    ],
    "learnMoreUrl": "https://doc.nv.gov/Boards/Parole/Home/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NV",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting nevada nv",
    "summary": "Nevada probation is supervised by the Nevada DOC or county probation departments. Conditions are set by the court. Nevada has active drug courts and specialty courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "Nevada DOC — Community Supervision",
        "url": "https://doc.nv.gov/Programs/CommunitySupervision/"
      },
      {
        "label": "Nevada Drug Courts — Nevada Supreme Court",
        "url": "https://nvcourts.gov/programs/drug_courts/"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://doc.nv.gov/Programs/CommunitySupervision/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NH",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement new hampshire nh",
    "summary": "New Hampshire restored voting rights to people completing their full sentence including parole and probation in 2018. Rights are automatically restored upon sentence completion. You must re-register to vote.",
    "resources": [
      {
        "label": "New Hampshire Voting Rights — Secretary of State",
        "url": "https://sos.nh.gov/elections/voters/register-to-vote/"
      },
      {
        "label": "New Hampshire Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/new-hampshire"
      },
      {
        "label": "Legal Help — NH Legal Aid",
        "url": "https://www.nhlegalaid.org"
      }
    ],
    "learnMoreUrl": "https://sos.nh.gov/elections/voters/register-to-vote/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NH",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history new hampshire nh",
    "summary": "New Hampshire allows annulment of criminal records after waiting periods varying by offense severity. Misdemeanors can be annulled after 3 years; felonies after 5-10 years. The process requires a petition to the court.",
    "resources": [
      {
        "label": "New Hampshire Annulment — NH Courts",
        "url": "https://www.courts.nh.gov/court-forms/criminal-and-superior-court/annulment-petitions"
      },
      {
        "label": "New Hampshire Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/new-hampshire-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — NH Legal Aid",
        "url": "https://www.nhlegalaid.org"
      }
    ],
    "learnMoreUrl": "https://www.courts.nh.gov/court-forms/criminal-and-superior-court/annulment-petitions",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NH",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony new hampshire nh",
    "summary": "New Hampshire has no statewide fair chance housing law. Federal Fair Housing Act and HUD guidance apply. The New Hampshire Housing Finance Authority and legal aid can assist with housing issues.",
    "resources": [
      {
        "label": "New Hampshire Housing Finance Authority",
        "url": "https://www.nhhfa.org"
      },
      {
        "label": "Fair Housing — HUD New Hampshire",
        "url": "https://www.hud.gov/states/new_hampshire/renting"
      },
      {
        "label": "Housing Help — NH Legal Aid",
        "url": "https://www.nhlegalaid.org"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/new_hampshire/renting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NH",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony new hampshire nh",
    "summary": "New Hampshire enacted a ban-the-box law for state government positions in 2019. Private employers are not covered statewide. Federal EEOC protections apply. New Hampshire Employment Security provides job placement services.",
    "resources": [
      {
        "label": "New Hampshire Employment Security — Job Seekers",
        "url": "https://www.nhes.nh.gov/individuals/"
      },
      {
        "label": "EEOC — Boston Area Office (covers New Hampshire)",
        "url": "https://www.eeoc.gov/field/boston"
      },
      {
        "label": "Employment Help — NH Legal Aid",
        "url": "https://www.nhlegalaid.org"
      }
    ],
    "learnMoreUrl": "https://www.nhes.nh.gov/individuals/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NH",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop new hampshire nh",
    "summary": "New Hampshire residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of New Hampshire monitors civil rights issues and provides know-your-rights resources.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of New Hampshire",
        "url": "https://www.aclu-nh.org"
      },
      {
        "label": "New Hampshire AG — Civil Rights Unit",
        "url": "https://www.doj.nh.gov"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclu-nh.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NH",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment new hampshire nh",
    "summary": "New Hampshire parole is administered by the Adult Parole Board within the DOC. Conditions are set at release. The DOC provides reentry and transition services. Violations are reviewed by the Board.",
    "resources": [
      {
        "label": "New Hampshire Adult Parole Board — DOC",
        "url": "https://www.nh.gov/nhdoc/divisions/field/paroleboard.html"
      },
      {
        "label": "New Hampshire DOC — Reentry",
        "url": "https://www.nh.gov/nhdoc/reentry/"
      },
      {
        "label": "Parole Rights — NH Legal Aid",
        "url": "https://www.nhlegalaid.org"
      }
    ],
    "learnMoreUrl": "https://www.nh.gov/nhdoc/divisions/field/paroleboard.html",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NH",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting new hampshire nh",
    "summary": "New Hampshire probation is supervised by the DOC Field Services. Conditions are court-ordered. New Hampshire has active drug courts and specialty courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "New Hampshire DOC — Field Services (Probation)",
        "url": "https://www.nh.gov/nhdoc/divisions/field/"
      },
      {
        "label": "New Hampshire Drug Courts — Judiciary",
        "url": "https://www.courts.nh.gov/courts/drug-courts"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.nh.gov/nhdoc/divisions/field/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NJ",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement new jersey nj",
    "summary": "New Jersey restored voting rights to people on parole and probation in 2020. Rights are restored upon release from prison. You must re-register to vote. New Jersey provides a Voter Restoration Handbook to assist people navigating the process.",
    "resources": [
      {
        "label": "New Jersey Voting Rights — NJ Division of Elections",
        "url": "https://www.nj.gov/state/elections/vote-vote-restoration.shtml"
      },
      {
        "label": "NJ Voter Restoration Handbook — NJ DOC",
        "url": "https://www.state.nj.us/corrections/pages/reentry/voting.html"
      },
      {
        "label": "Legal Help — Legal Services of New Jersey",
        "url": "https://www.lsnj.org"
      }
    ],
    "learnMoreUrl": "https://www.nj.gov/state/elections/vote-vote-restoration.shtml",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NJ",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history new jersey nj",
    "summary": "New Jersey has strong expungement laws. Most misdemeanors and many felony convictions are eligible for expungement after waiting periods. The automatic expungement pathway is available after 10 years, with an early pathway after 5 years for eligible cases. Cannabis convictions receive expedited treatment.",
    "resources": [
      {
        "label": "New Jersey Expungement — NJ Courts",
        "url": "https://www.njcourts.gov/selfhelp/expungements"
      },
      {
        "label": "New Jersey Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/new-jersey-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Legal Services of New Jersey",
        "url": "https://www.lsnj.org"
      }
    ],
    "learnMoreUrl": "https://www.njcourts.gov/selfhelp/expungements",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NJ",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony new jersey nj",
    "summary": "New Jersey enacted the Fair Chance in Housing Act (2021), one of the strongest statewide fair chance housing laws in the country. Landlords cannot inquire about criminal history before making a conditional offer. The NJ Division on Civil Rights enforces these protections.",
    "resources": [
      {
        "label": "NJ Fair Chance in Housing Act — Division on Civil Rights",
        "url": "https://www.njoag.gov/fair-chance-in-housing-act/"
      },
      {
        "label": "Fair Housing — HUD New Jersey",
        "url": "https://www.hud.gov/states/new_jersey/renting"
      },
      {
        "label": "Housing Help — Legal Services of New Jersey",
        "url": "https://www.lsnj.org"
      }
    ],
    "learnMoreUrl": "https://www.njoag.gov/fair-chance-in-housing-act/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NJ",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony new jersey nj",
    "summary": "New Jersey enacted a statewide ban-the-box law in 2015 for employers with 15 or more employees. The Opportunity to Compete Act restricts initial criminal history inquiries. The NJ Division on Civil Rights enforces these protections statewide.",
    "resources": [
      {
        "label": "New Jersey Opportunity to Compete Act — Division on Civil Rights",
        "url": "https://www.njoag.gov/about/divisions-and-offices/division-on-civil-rights-home/opportunity-to-compete-act/"
      },
      {
        "label": "EEOC — Newark Area Office",
        "url": "https://www.eeoc.gov/field/newark"
      },
      {
        "label": "Employment Help — Legal Services of New Jersey",
        "url": "https://www.lsnj.org"
      }
    ],
    "learnMoreUrl": "https://www.njoag.gov/about/divisions-and-offices/division-on-civil-rights-home/opportunity-to-compete-act/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NJ",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop new jersey nj",
    "summary": "New Jersey residents have Fourth and Fifth Amendment protections plus strong state civil rights protections during police interactions. New Jersey enacted major police accountability reforms in 2020. The ACLU-NJ provides know-your-rights resources.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU-NJ",
        "url": "https://www.aclu-nj.org/know-your-rights"
      },
      {
        "label": "New Jersey AG — Division on Civil Rights",
        "url": "https://www.njoag.gov/about/divisions-and-offices/division-on-civil-rights-home/"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclu-nj.org/know-your-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NJ",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment new jersey nj",
    "summary": "New Jersey parole is administered by the New Jersey State Parole Board. Conditions are set at release and vary by offense. The DOC provides reentry services. Violations are reviewed by the Parole Board and can result in revocation.",
    "resources": [
      {
        "label": "New Jersey State Parole Board",
        "url": "https://www.nj.gov/parole/"
      },
      {
        "label": "New Jersey DOC — Reentry Programs",
        "url": "https://www.state.nj.us/corrections/pages/reentry/"
      },
      {
        "label": "Parole Rights — Legal Services of New Jersey",
        "url": "https://www.lsnj.org"
      }
    ],
    "learnMoreUrl": "https://www.nj.gov/parole/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NJ",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting new jersey nj",
    "summary": "New Jersey probation is supervised by the NJ Judiciary through county probation departments. Conditions are court-ordered. New Jersey has active drug courts and specialty courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "New Jersey Judiciary — Probation Services",
        "url": "https://www.njcourts.gov/probation"
      },
      {
        "label": "New Jersey Drug Courts — Judiciary",
        "url": "https://www.njcourts.gov/courts/specialtyparts/drugcourt.html"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.njcourts.gov/probation",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NM",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement new mexico nm",
    "summary": "New Mexico restores voting rights upon release from prison. People on parole or probation can vote. You must re-register to vote. New Mexico has accessible voter registration processes.",
    "resources": [
      {
        "label": "New Mexico Voting Rights — Secretary of State",
        "url": "https://www.sos.nm.gov/voting-and-elections/voter-information-portal/voter-registration-information/"
      },
      {
        "label": "New Mexico Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/new-mexico"
      },
      {
        "label": "Legal Help — New Mexico Legal Aid",
        "url": "https://www.newmexicolegalaid.org"
      }
    ],
    "learnMoreUrl": "https://www.sos.nm.gov/voting-and-elections/voter-information-portal/voter-registration-information/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NM",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history new mexico nm",
    "summary": "New Mexico significantly expanded expungement eligibility in 2019. Many misdemeanor and felony convictions are now eligible for expungement after 2-10 year waiting periods depending on offense severity. Petition through the court of conviction.",
    "resources": [
      {
        "label": "New Mexico Expungement — NM Courts",
        "url": "https://www.nmcourts.gov/self-help-center/criminal-expungement/"
      },
      {
        "label": "New Mexico Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/new-mexico-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — New Mexico Legal Aid",
        "url": "https://www.newmexicolegalaid.org"
      }
    ],
    "learnMoreUrl": "https://www.nmcourts.gov/self-help-center/criminal-expungement/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NM",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony new mexico nm",
    "summary": "New Mexico has state fair housing protections through the New Mexico Human Rights Bureau. Federal Fair Housing Act and HUD guidance on criminal records also apply. The New Mexico Mortgage Finance Authority provides housing assistance.",
    "resources": [
      {
        "label": "New Mexico Human Rights Bureau — Housing",
        "url": "https://www.dws.state.nm.us/human-rights-bureau"
      },
      {
        "label": "Fair Housing — HUD New Mexico",
        "url": "https://www.hud.gov/states/new_mexico/renting"
      },
      {
        "label": "Housing Help — New Mexico Legal Aid",
        "url": "https://www.newmexicolegalaid.org"
      }
    ],
    "learnMoreUrl": "https://www.dws.state.nm.us/human-rights-bureau",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NM",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony new mexico nm",
    "summary": "New Mexico enacted a statewide ban-the-box law for state government employment. Private employers are not covered statewide. Federal EEOC protections apply. The New Mexico DWS provides workforce development and reentry employment resources.",
    "resources": [
      {
        "label": "New Mexico DWS — Workforce Services",
        "url": "https://www.dws.state.nm.us"
      },
      {
        "label": "EEOC — Albuquerque Area Office",
        "url": "https://www.eeoc.gov/field/albuquerque"
      },
      {
        "label": "Employment Help — New Mexico Legal Aid",
        "url": "https://www.newmexicolegalaid.org"
      }
    ],
    "learnMoreUrl": "https://www.dws.state.nm.us",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NM",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop new mexico nm",
    "summary": "New Mexico residents have Fourth and Fifth Amendment protections during police interactions. New Mexico passed significant police accountability reforms in 2021. The ACLU of New Mexico provides know-your-rights resources.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of New Mexico",
        "url": "https://www.aclu-nm.org/en/know-your-rights"
      },
      {
        "label": "New Mexico AG — Civil Rights",
        "url": "https://www.nmag.gov/civil-rights/"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclu-nm.org/en/know-your-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NM",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment new mexico nm",
    "summary": "New Mexico parole is administered by the New Mexico Adult Parole Board within the Corrections Department. Conditions are set at release. The NMCD provides reentry services. Violations are reviewed by the Board and can result in revocation.",
    "resources": [
      {
        "label": "New Mexico Adult Parole Board — NMCD",
        "url": "https://www.cd.nm.gov/divisions/adult-parole-board/"
      },
      {
        "label": "New Mexico DOC — Reentry",
        "url": "https://www.cd.nm.gov/reentry/"
      },
      {
        "label": "Parole Rights — New Mexico Legal Aid",
        "url": "https://www.newmexicolegalaid.org"
      }
    ],
    "learnMoreUrl": "https://www.cd.nm.gov/divisions/adult-parole-board/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NM",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting new mexico nm",
    "summary": "New Mexico probation is supervised by the New Mexico Corrections Department through probation and parole officers. Conditions are court-ordered. New Mexico has active drug courts and specialty courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "New Mexico DOC — Probation and Parole",
        "url": "https://www.cd.nm.gov/divisions/probation-parole/"
      },
      {
        "label": "New Mexico Drug Courts",
        "url": "https://www.nmcourts.gov/courts/drug-court/"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.cd.nm.gov/divisions/probation-parole/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NY",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement new york ny",
    "summary": "New York restored voting rights to people on parole in 2021. Rights are restored upon release from prison. People on probation can also vote. You must re-register. The Clean Slate Act (2024) makes this restoration process even more seamless for eligible individuals.",
    "resources": [
      {
        "label": "New York Voting Rights — Board of Elections",
        "url": "https://www.elections.ny.gov/VoterRegistration.html"
      },
      {
        "label": "Know Your Voting Rights — NYCLU",
        "url": "https://www.nyclu.org/know-your-rights/voting-rights-people-criminal-convictions"
      },
      {
        "label": "Legal Help — Legal Aid Society of New York",
        "url": "https://legalaidnyc.org"
      }
    ],
    "learnMoreUrl": "https://www.nyclu.org/know-your-rights/voting-rights-people-criminal-convictions",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NY",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history new york ny",
    "summary": "New York's Clean Slate Act (2024) provides automatic sealing of most conviction records — misdemeanors after 3 years and felonies after 8 years. This is one of the most transformative clean slate laws in the country, potentially sealing over 2 million records automatically. Contact legal aid for petition-based options too.",
    "resources": [
      {
        "label": "New York Clean Slate Act — NY Courts",
        "url": "https://www.nycourts.gov/courthelp/Criminal/sealingrecords.shtml"
      },
      {
        "label": "New York Record Sealing Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/new-york-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Record Relief Help — Legal Aid Society NYC",
        "url": "https://legalaidnyc.org"
      }
    ],
    "learnMoreUrl": "https://www.nycourts.gov/courthelp/Criminal/sealingrecords.shtml",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NY",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony new york ny",
    "summary": "New York City has a comprehensive fair chance housing law. The New York State Human Rights Law also limits housing discrimination. Federal Fair Housing Act and HUD guidance apply statewide. Article 23-A of the Correction Law protects against criminal record discrimination.",
    "resources": [
      {
        "label": "New York Human Rights Law — NYS DCHR",
        "url": "https://dhr.ny.gov/discrimination-types/criminal-convictions"
      },
      {
        "label": "Fair Housing — HUD New York",
        "url": "https://www.hud.gov/states/new_york/renting"
      },
      {
        "label": "Housing Rights — Legal Aid Society NYC",
        "url": "https://legalaidnyc.org"
      }
    ],
    "learnMoreUrl": "https://dhr.ny.gov/discrimination-types/criminal-convictions",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NY",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony new york ny",
    "summary": "New York has a statewide ban-the-box law through Article 23-A of the Correction Law, which restricts employer use of criminal records. NYC has additional fair chance hiring ordinances. The NYS Division of Human Rights enforces these protections statewide.",
    "resources": [
      {
        "label": "New York Article 23-A — NYS DHR",
        "url": "https://dhr.ny.gov/discrimination-types/criminal-convictions"
      },
      {
        "label": "EEOC — New York District Office",
        "url": "https://www.eeoc.gov/field/new-york"
      },
      {
        "label": "Employment Rights — Legal Aid Society NYC",
        "url": "https://legalaidnyc.org"
      }
    ],
    "learnMoreUrl": "https://dhr.ny.gov/discrimination-types/criminal-convictions",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NY",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop new york ny",
    "summary": "New York residents have Fourth and Fifth Amendment protections plus significant state civil rights protections during police interactions. The NYCLU provides comprehensive know-your-rights guidance. NYC has civilian oversight of the NYPD. You have the right to film police in public.",
    "resources": [
      {
        "label": "Know Your Rights — NYCLU",
        "url": "https://www.nyclu.org/know-your-rights/stopped-by-police"
      },
      {
        "label": "New York AG — Civil Rights Bureau",
        "url": "https://ag.ny.gov/civil-rights"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.nyclu.org/know-your-rights/stopped-by-police",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NY",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment new york ny",
    "summary": "New York parole is administered by the NYS Board of Parole within DOCCS. Conditions are set at release and include regular reporting. The Parole Board supervises over 30,000 people in New York. Violations are reviewed at a formal revocation hearing.",
    "resources": [
      {
        "label": "New York State Board of Parole — DOCCS",
        "url": "https://doccs.ny.gov/division-parole"
      },
      {
        "label": "DOCCS — Reentry Programs",
        "url": "https://doccs.ny.gov/reentry"
      },
      {
        "label": "Parole Rights — Legal Aid Society NYC",
        "url": "https://legalaidnyc.org"
      }
    ],
    "learnMoreUrl": "https://doccs.ny.gov/division-parole",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NY",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting new york ny",
    "summary": "New York probation is supervised by county probation departments. Conditions are court-ordered. New York has active drug courts and specialized courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "NYS Division of Criminal Justice Services — Probation",
        "url": "https://www.criminaljustice.ny.gov/opca/probfsmon.htm"
      },
      {
        "label": "New York Drug Courts — OCA",
        "url": "https://www.nycourts.gov/courts/problem_solving/dtc/index.shtml"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.criminaljustice.ny.gov/opca/probfsmon.htm",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NC",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement north carolina nc",
    "summary": "North Carolina restores voting rights upon release from prison. Following a 2023 court ruling, people on probation and parole can now vote. You must re-register to vote. Confirm your current eligibility status with the State Board of Elections as rules were recently changed.",
    "resources": [
      {
        "label": "North Carolina Voting Rights — State Board of Elections",
        "url": "https://www.ncsbe.gov/registering/who-can-register"
      },
      {
        "label": "North Carolina Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/north-carolina"
      },
      {
        "label": "Legal Help — Legal Aid of North Carolina",
        "url": "https://legalaidnc.org"
      }
    ],
    "learnMoreUrl": "https://www.ncsbe.gov/registering/who-can-register",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NC",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history north carolina nc",
    "summary": "North Carolina expanded expungement eligibility in 2017 and 2019. Misdemeanors and some nonviolent felonies can be expunged after waiting periods. Dismissed charges can be expunged without a waiting period. The process requires a petition to the court.",
    "resources": [
      {
        "label": "North Carolina Expungement — NC Courts",
        "url": "https://www.nccourts.gov/help-topics/expunctions"
      },
      {
        "label": "North Carolina Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/north-carolina-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Legal Aid of North Carolina",
        "url": "https://legalaidnc.org"
      }
    ],
    "learnMoreUrl": "https://www.nccourts.gov/help-topics/expunctions",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NC",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony north carolina nc",
    "summary": "North Carolina has no statewide fair chance housing law. Federal Fair Housing Act and HUD guidance on criminal records apply. The North Carolina Human Relations Commission handles housing discrimination complaints.",
    "resources": [
      {
        "label": "North Carolina Human Relations Commission",
        "url": "https://www.doa.nc.gov/divisions/human-relations"
      },
      {
        "label": "Fair Housing — HUD North Carolina",
        "url": "https://www.hud.gov/states/north_carolina/renting"
      },
      {
        "label": "Housing Help — Legal Aid of North Carolina",
        "url": "https://legalaidnc.org"
      }
    ],
    "learnMoreUrl": "https://www.doa.nc.gov/divisions/human-relations",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NC",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony north carolina nc",
    "summary": "North Carolina enacted a fair chance hiring law for state positions. Private employers are not covered statewide. Federal EEOC protections apply. NCWorks provides workforce development and reentry employment services statewide.",
    "resources": [
      {
        "label": "NCWorks — Job Seekers",
        "url": "https://www.ncworks.gov"
      },
      {
        "label": "EEOC — Charlotte District Office",
        "url": "https://www.eeoc.gov/field/charlotte"
      },
      {
        "label": "Employment Help — Legal Aid of North Carolina",
        "url": "https://legalaidnc.org"
      }
    ],
    "learnMoreUrl": "https://www.ncworks.gov",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NC",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop north carolina nc",
    "summary": "North Carolina residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of North Carolina provides know-your-rights resources. North Carolina has civil rights laws addressing police misconduct.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of North Carolina",
        "url": "https://www.acluofnc.org/know-your-rights"
      },
      {
        "label": "North Carolina AG — Civil Rights Division",
        "url": "https://www.ncdoj.gov/civil-rights/"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.acluofnc.org/know-your-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NC",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment north carolina nc",
    "summary": "North Carolina parole for post-1994 convictions is called Post-Release Supervision and is administered by the NC DPS. Older cases may be on traditional parole. Conditions are set at release. Violations are reviewed by the Post-Release Supervision and Parole Commission.",
    "resources": [
      {
        "label": "NC Post-Release Supervision and Parole Commission",
        "url": "https://www.dps.nc.gov/adult-corrections/parole-post-release-supervision/post-release-supervision-and-parole-commission"
      },
      {
        "label": "NC DPS — Reentry Programs",
        "url": "https://www.dps.nc.gov/adult-corrections/adult-corrections-divisions/offender-programs-and-services/reentry-services"
      },
      {
        "label": "Parole Rights — Legal Aid of North Carolina",
        "url": "https://legalaidnc.org"
      }
    ],
    "learnMoreUrl": "https://www.dps.nc.gov/adult-corrections/parole-post-release-supervision/post-release-supervision-and-parole-commission",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "NC",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting north carolina nc",
    "summary": "North Carolina probation is supervised by the NC DPS Community Corrections division. Conditions are court-ordered. North Carolina has active drug treatment courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "NC DPS — Community Corrections (Probation)",
        "url": "https://www.dps.nc.gov/adult-corrections/adult-corrections-divisions/community-corrections"
      },
      {
        "label": "NC Drug Courts — Administrative Office of Courts",
        "url": "https://www.nccourts.gov/courts/drug-treatment-court"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.dps.nc.gov/adult-corrections/adult-corrections-divisions/community-corrections",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ND",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement north dakota nd",
    "summary": "North Dakota automatically restores voting rights upon release from prison. People on probation and parole can vote. North Dakota does not require voter registration. Verify your current eligibility status with the Secretary of State.",
    "resources": [
      {
        "label": "North Dakota Voting Rights — Secretary of State",
        "url": "https://vip.sos.nd.gov/PortalListDetails.aspx?ptlhPKID=79&ptlPKID=37"
      },
      {
        "label": "North Dakota Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/north-dakota"
      },
      {
        "label": "Legal Help — Legal Assistance of North Dakota",
        "url": "https://www.legalassist.org"
      }
    ],
    "learnMoreUrl": "https://vip.sos.nd.gov/PortalListDetails.aspx?ptlhPKID=79&ptlPKID=37",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ND",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history north dakota nd",
    "summary": "North Dakota has limited expungement options. Non-conviction records can be sealed. The state seals records sealed by court order but law enforcement retains access. Contact Legal Assistance of North Dakota for guidance on options available in your case.",
    "resources": [
      {
        "label": "North Dakota Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/north-dakota-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "North Dakota Courts — Criminal Records",
        "url": "https://www.ndcourts.gov"
      },
      {
        "label": "Legal Help — Legal Assistance of North Dakota",
        "url": "https://www.legalassist.org"
      }
    ],
    "learnMoreUrl": "https://ccresourcecenter.org/state-restoration-profiles/north-dakota-restoration-of-rights-pardon-expungement-sealing/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ND",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony north dakota nd",
    "summary": "North Dakota has no statewide fair chance housing law. Federal Fair Housing Act and HUD guidance on criminal records apply. The North Dakota Housing Finance Agency provides rental assistance programs.",
    "resources": [
      {
        "label": "North Dakota Housing Finance Agency",
        "url": "https://www.ndhfa.org"
      },
      {
        "label": "Fair Housing — HUD North Dakota",
        "url": "https://www.hud.gov/states/north_dakota/renting"
      },
      {
        "label": "Housing Help — Legal Assistance of North Dakota",
        "url": "https://www.legalassist.org"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/north_dakota/renting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ND",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony north dakota nd",
    "summary": "North Dakota has no statewide ban-the-box law for private employers. Federal EEOC protections apply. North Dakota Job Service provides employment services including reentry support.",
    "resources": [
      {
        "label": "North Dakota Job Service — Job Seekers",
        "url": "https://www.jobsnd.com"
      },
      {
        "label": "EEOC — Minneapolis Area Office (covers North Dakota)",
        "url": "https://www.eeoc.gov/field/minneapolis"
      },
      {
        "label": "Employment Help — Legal Assistance of North Dakota",
        "url": "https://www.legalassist.org"
      }
    ],
    "learnMoreUrl": "https://www.jobsnd.com",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ND",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop north dakota nd",
    "summary": "North Dakota residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of North Dakota monitors civil rights issues and provides know-your-rights resources.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of North Dakota",
        "url": "https://www.aclund.org"
      },
      {
        "label": "North Dakota AG — Civil Rights",
        "url": "https://attorneygeneral.nd.gov"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclund.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ND",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment north dakota nd",
    "summary": "North Dakota parole is administered by the North Dakota Parole Board within the DOC. Conditions are set at release. The DOC provides reentry services. Violations are reviewed by the Board and can result in revocation.",
    "resources": [
      {
        "label": "North Dakota DOCR — Parole Board",
        "url": "https://www.nd.gov/docr/adult/parole/"
      },
      {
        "label": "North Dakota DOCR — Reentry",
        "url": "https://www.nd.gov/docr/adult/reentry.html"
      },
      {
        "label": "Parole Rights — Legal Assistance of North Dakota",
        "url": "https://www.legalassist.org"
      }
    ],
    "learnMoreUrl": "https://www.nd.gov/docr/adult/parole/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "ND",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting north dakota nd",
    "summary": "North Dakota probation is supervised by the DOCR through field services. Conditions are court-ordered. North Dakota has drug courts and specialty courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "North Dakota DOCR — Field Services (Probation)",
        "url": "https://www.nd.gov/docr/adult/parole/"
      },
      {
        "label": "North Dakota Drug Courts",
        "url": "https://www.ndcourts.gov/court/specialty"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.nd.gov/docr/adult/parole/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OH",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement ohio oh",
    "summary": "Ohio automatically restores voting rights upon release from prison. People on probation and parole can vote. You must re-register to vote after release. Ohio has accessible voter registration at the Secretary of State's office and online.",
    "resources": [
      {
        "label": "Ohio Voting Rights — Secretary of State",
        "url": "https://www.ohiosos.gov/elections/voters/registration/"
      },
      {
        "label": "Ohio Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/ohio"
      },
      {
        "label": "Legal Help — Ohio Legal Help",
        "url": "https://www.ohiolegalhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.ohiosos.gov/elections/voters/registration/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OH",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history ohio oh",
    "summary": "Ohio expanded expungement and record sealing eligibility significantly through SB 288 (2023). Many misdemeanor and felony convictions are now eligible. The petition process requires filing in the court of conviction. Ohio also has automatic sealing for some arrests and dismissals.",
    "resources": [
      {
        "label": "Ohio Expungement & Sealing — Ohio Courts",
        "url": "https://www.supremecourt.ohio.gov/JCS/SelfHelp/criminal/"
      },
      {
        "label": "Ohio Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/ohio-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Ohio Legal Help",
        "url": "https://www.ohiolegalhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.supremecourt.ohio.gov/JCS/SelfHelp/criminal/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OH",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony ohio oh",
    "summary": "Ohio has the Ohio Civil Rights Commission to handle housing discrimination complaints. Columbus and Cleveland have local fair chance housing protections. Federal Fair Housing Act and HUD guidance apply statewide.",
    "resources": [
      {
        "label": "Ohio Civil Rights Commission — Housing",
        "url": "https://crc.ohio.gov/Discrimination/Housing-Discrimination"
      },
      {
        "label": "Fair Housing — HUD Ohio",
        "url": "https://www.hud.gov/states/ohio/renting"
      },
      {
        "label": "Housing Help — Ohio Legal Help",
        "url": "https://www.ohiolegalhelp.org"
      }
    ],
    "learnMoreUrl": "https://crc.ohio.gov/Discrimination/Housing-Discrimination",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OH",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony ohio oh",
    "summary": "Cleveland and Columbus have ban-the-box ordinances. Ohio has no statewide private-employer ban-the-box law. Federal EEOC protections apply. OhioMeansJobs provides workforce development and reentry employment services.",
    "resources": [
      {
        "label": "OhioMeansJobs — Job Seekers",
        "url": "https://ohiomeansjobs.com"
      },
      {
        "label": "EEOC — Cleveland Field Office",
        "url": "https://www.eeoc.gov/field/cleveland"
      },
      {
        "label": "Employment Help — Ohio Legal Help",
        "url": "https://www.ohiolegalhelp.org"
      }
    ],
    "learnMoreUrl": "https://ohiomeansjobs.com",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OH",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop ohio oh",
    "summary": "Ohio residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of Ohio monitors civil rights issues and provides know-your-rights resources. Ohio enacted police accountability reforms in 2021.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Ohio",
        "url": "https://www.acluohio.org/know-your-rights"
      },
      {
        "label": "Ohio AG — Civil Rights Section",
        "url": "https://www.ohioattorneygeneral.gov/About-AG/Divisions-and-Offices/Civil-Rights-Section.aspx"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.acluohio.org/know-your-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OH",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment ohio oh",
    "summary": "Ohio parole is administered by the Ohio Adult Parole Authority within the DRC. Conditions are set at release. The DRC provides reentry services. Violations are reviewed by the APA and can result in revocation.",
    "resources": [
      {
        "label": "Ohio Adult Parole Authority — DRC",
        "url": "https://drc.ohio.gov/apa"
      },
      {
        "label": "Ohio DRC — Reentry Programs",
        "url": "https://drc.ohio.gov/reentry"
      },
      {
        "label": "Parole Rights — Ohio Legal Help",
        "url": "https://www.ohiolegalhelp.org"
      }
    ],
    "learnMoreUrl": "https://drc.ohio.gov/apa",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OH",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting ohio oh",
    "summary": "Ohio probation is supervised by county probation departments or the Ohio DRC. Conditions are court-ordered. Ohio has active drug courts and specialty courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "Ohio DRC — Community Supervision",
        "url": "https://drc.ohio.gov/adult-programs/community-supervision"
      },
      {
        "label": "Ohio Drug Courts — Supreme Court",
        "url": "https://www.supremecourt.ohio.gov/JCS/specDocket/drugCourt/"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://drc.ohio.gov/adult-programs/community-supervision",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OK",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement oklahoma ok",
    "summary": "In Oklahoma, voting rights are automatically restored after you complete your full sentence, including parole and probation. No petition is required. You must re-register to vote. Misdemeanor convictions and pretrial detention do not affect your voting rights.",
    "resources": [
      {
        "label": "Voting Rights After a Felony — Oklahoma State Election Board",
        "url": "https://www.ok.gov/elections/Voter_Info/Voting_Rights_Restoration/index.html"
      },
      {
        "label": "Oklahoma Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/oklahoma"
      },
      {
        "label": "DOJ Guide to Oklahoma Voting Rules",
        "url": "https://www.justice.gov/d9/2022-09/oklahoma.pdf"
      }
    ],
    "learnMoreUrl": "https://www.ok.gov/elections/Voter_Info/Voting_Rights_Restoration/index.html",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OK",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history oklahoma ok",
    "summary": "Oklahoma enacted a landmark automatic expungement law in 2022 (HB 3316) that clears eligible misdemeanors and non-conviction records without requiring a petition. The state also allows petitions to expunge up to two non-violent felonies. Oklahoma Bureau of Criminal Investigation processes requests.",
    "resources": [
      {
        "label": "Oklahoma Expungement Guide — Collateral Consequences Resource Center",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/oklahoma-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Oklahoma Bureau of Criminal Investigation — Expungement",
        "url": "https://osbi.ok.gov/services/criminal-history/expungement"
      },
      {
        "label": "Oklahoma Expungement Law — Oklahoma Legal Aid Services",
        "url": "https://www.oklaw.org"
      }
    ],
    "learnMoreUrl": "https://osbi.ok.gov/services/criminal-history/expungement",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OK",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony oklahoma ok",
    "summary": "Oklahoma has no statewide fair chance housing law. Federal Fair Housing Act protections and HUD guidance on criminal records apply. The Oklahoma Housing Finance Agency and legal aid organizations can assist with housing issues for people in reentry.",
    "resources": [
      {
        "label": "Oklahoma Housing Finance Agency",
        "url": "https://www.ohfa.org"
      },
      {
        "label": "Fair Housing — HUD Oklahoma City Field Office",
        "url": "https://www.hud.gov/states/oklahoma/renting"
      },
      {
        "label": "Housing Legal Help — Oklahoma Law Help",
        "url": "https://www.oklaw.org"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/oklahoma/renting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OK",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony oklahoma ok",
    "summary": "Oklahoma has a ban-the-box law for state government employment. Federal EEOC protections apply statewide to private employers. The Oklahoma Employment Security Commission provides job training and placement resources for people in reentry.",
    "resources": [
      {
        "label": "Oklahoma Employment Security Commission",
        "url": "https://oklahoma.gov/oesc.html"
      },
      {
        "label": "EEOC — Oklahoma Charge Filing",
        "url": "https://www.eeoc.gov/field/oklahoma-city"
      },
      {
        "label": "Fair Chance Employment — Oklahoma Law Help",
        "url": "https://www.oklaw.org"
      }
    ],
    "learnMoreUrl": "https://oklahoma.gov/oesc.html",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OK",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop oklahoma ok",
    "summary": "Oklahoma residents are protected by the Fourth and Fifth Amendments. The ACLU of Oklahoma provides know-your-rights resources. You have the right to remain silent, the right to an attorney, and the right to refuse consent to a search in most circumstances.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Oklahoma",
        "url": "https://www.acluok.org"
      },
      {
        "label": "Oklahoma Attorney General — Civil Rights",
        "url": "https://oklahoma.gov/oag/investigations/civil-rights.html"
      },
      {
        "label": "Police Misconduct Complaint — DOJ Civil Rights Division",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.acluok.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OK",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment oklahoma ok",
    "summary": "Oklahoma parole is administered by the Oklahoma Pardon and Parole Board. Conditions vary by case and are set at release. Oklahoma has worked to reduce supervision violations through reentry programming. Contact the DOC for specific supervision conditions and obligations.",
    "resources": [
      {
        "label": "Oklahoma Pardon and Parole Board",
        "url": "https://oklahoma.gov/ppb.html"
      },
      {
        "label": "Oklahoma DOC — Reentry and Supervision",
        "url": "https://oklahoma.gov/doc.html"
      },
      {
        "label": "Parole Rights — Oklahoma Law Help",
        "url": "https://www.oklaw.org"
      }
    ],
    "learnMoreUrl": "https://oklahoma.gov/ppb.html",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OK",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting oklahoma ok",
    "summary": "Oklahoma probation is supervised by the Oklahoma Department of Corrections. Conditions are set by the court and typically include reporting, substance testing, and employment requirements. Deferred sentence probation is common and may lead to dismissal upon successful completion.",
    "resources": [
      {
        "label": "Oklahoma DOC — Community Supervision",
        "url": "https://oklahoma.gov/doc/offender-information/community-corrections.html"
      },
      {
        "label": "Probation and Deferred Sentences — Oklahoma Law Help",
        "url": "https://www.oklaw.org"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://oklahoma.gov/doc/offender-information/community-corrections.html",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OR",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement oregon or",
    "summary": "Oregon restores voting rights upon release from prison. People on parole and probation can vote. Oregon also offers automatic voter registration through state agencies. You must re-register if your information has changed after release.",
    "resources": [
      {
        "label": "Oregon Voting Rights — Secretary of State",
        "url": "https://sos.oregon.gov/voting/pages/registervoting.aspx"
      },
      {
        "label": "Oregon Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/oregon"
      },
      {
        "label": "Legal Help — Oregon Law Help",
        "url": "https://oregonlawhelp.org"
      }
    ],
    "learnMoreUrl": "https://sos.oregon.gov/voting/pages/registervoting.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OR",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history oregon or",
    "summary": "Oregon's \"set aside\" process is available for misdemeanors and some felonies after waiting periods. The 2021 SB 397 expanded relief. Dismissed charges and acquittals receive more expedited treatment. Petition through the court of conviction.",
    "resources": [
      {
        "label": "Oregon Expungement — Oregon Courts",
        "url": "https://www.courts.oregon.gov/help/pages/set-aside.aspx"
      },
      {
        "label": "Oregon Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/oregon-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Oregon Law Help",
        "url": "https://oregonlawhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.courts.oregon.gov/help/pages/set-aside.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OR",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony oregon or",
    "summary": "Portland and Multnomah County have fair chance housing ordinances. Oregon's state civil rights law also provides some protections. Federal Fair Housing Act and HUD guidance apply statewide. Oregon Housing and Community Services provides rental assistance.",
    "resources": [
      {
        "label": "Oregon Housing and Community Services",
        "url": "https://www.oregon.gov/ohcs/housing-assistance"
      },
      {
        "label": "Fair Housing — HUD Oregon",
        "url": "https://www.hud.gov/states/oregon/renting"
      },
      {
        "label": "Housing Help — Oregon Law Help",
        "url": "https://oregonlawhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/oregon/renting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OR",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony oregon or",
    "summary": "Oregon enacted a statewide ban-the-box law (2015) through the Bureau of Labor and Industries. The BOLI enforces employment protections against discriminatory use of criminal records. The Oregon Employment Department provides workforce and reentry services.",
    "resources": [
      {
        "label": "Oregon Fair Chance Hiring — BOLI",
        "url": "https://www.oregon.gov/boli/workers/pages/criminal-records.aspx"
      },
      {
        "label": "EEOC — Seattle Field Office (covers Oregon)",
        "url": "https://www.eeoc.gov/field/seattle"
      },
      {
        "label": "Employment Help — Oregon Law Help",
        "url": "https://oregonlawhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.oregon.gov/boli/workers/pages/criminal-records.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OR",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop oregon or",
    "summary": "Oregon residents have Fourth and Fifth Amendment protections plus strong state constitutional protections during police interactions. The ACLU of Oregon provides know-your-rights resources. Oregon enacted police accountability reforms in 2021.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Oregon",
        "url": "https://www.aclu-or.org/en/know-your-rights"
      },
      {
        "label": "Oregon AG — Civil Rights Division",
        "url": "https://www.doj.state.or.us/oregon-department-of-justice/civil-enforcement-division/"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclu-or.org/en/know-your-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OR",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment oregon or",
    "summary": "Oregon parole is administered by the Oregon Board of Parole and Post-Prison Supervision. Conditions are set at release. The Oregon DOC provides reentry and transition services. Violations are reviewed by the Board and can result in revocation.",
    "resources": [
      {
        "label": "Oregon Board of Parole and Post-Prison Supervision",
        "url": "https://www.oregon.gov/bop/pages/index.aspx"
      },
      {
        "label": "Oregon DOC — Reentry Services",
        "url": "https://www.oregon.gov/doc/reentry/pages/index.aspx"
      },
      {
        "label": "Parole Rights — Oregon Law Help",
        "url": "https://oregonlawhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.oregon.gov/bop/pages/index.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "OR",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting oregon or",
    "summary": "Oregon probation is supervised by county community corrections departments. Conditions are court-ordered. Oregon has active drug courts and specialty courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "Oregon DOC — Community Corrections",
        "url": "https://www.oregon.gov/doc/community-corrections/pages/index.aspx"
      },
      {
        "label": "Oregon Drug Courts",
        "url": "https://www.courts.oregon.gov/programs/pages/drug-court.aspx"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.oregon.gov/doc/community-corrections/pages/index.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "PA",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement pennsylvania pa",
    "summary": "Pennsylvania restores voting rights after completing the full sentence including parole and probation. You must re-register to vote. Pennsylvania has accessible voter registration online and through motor vehicle agencies.",
    "resources": [
      {
        "label": "Pennsylvania Voting Rights — Department of State",
        "url": "https://www.vote.pa.gov/Register-to-Vote/Pages/Who-can-Register.aspx"
      },
      {
        "label": "Pennsylvania Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/pennsylvania"
      },
      {
        "label": "Legal Help — Pennsylvania Legal Aid Network",
        "url": "https://palegalaid.net"
      }
    ],
    "learnMoreUrl": "https://www.vote.pa.gov/Register-to-Vote/Pages/Who-can-Register.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "PA",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history pennsylvania pa",
    "summary": "Pennsylvania's Clean Slate Act (2018) provides automatic sealing of qualifying records after 10 years. The Act 56 (2020) expanded eligibility. Misdemeanors and some felonies can be sealed or expunged by petition. Philadelphia's Reintegration Unit provides record clearing services.",
    "resources": [
      {
        "label": "Pennsylvania Clean Slate — PA Courts",
        "url": "https://ujsportal.pacourts.us/expungement"
      },
      {
        "label": "Pennsylvania Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/pennsylvania-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Community Legal Services (Philadelphia)",
        "url": "https://clsphila.org"
      }
    ],
    "learnMoreUrl": "https://ujsportal.pacourts.us/expungement",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "PA",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony pennsylvania pa",
    "summary": "Philadelphia has a fair chance housing ordinance. The Pennsylvania Human Relations Commission handles housing discrimination complaints statewide. Federal Fair Housing Act and HUD guidance apply. The Pennsylvania Housing Finance Agency provides rental assistance.",
    "resources": [
      {
        "label": "Pennsylvania Human Relations Commission — Housing",
        "url": "https://www.phrc.pa.gov/About-PHRC/Pages/Housing.aspx"
      },
      {
        "label": "Fair Housing — HUD Pennsylvania",
        "url": "https://www.hud.gov/states/pennsylvania/renting"
      },
      {
        "label": "Housing Help — Pennsylvania Legal Aid Network",
        "url": "https://palegalaid.net"
      }
    ],
    "learnMoreUrl": "https://www.phrc.pa.gov/About-PHRC/Pages/Housing.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "PA",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony pennsylvania pa",
    "summary": "Philadelphia has a ban-the-box law for private employers. Pennsylvania has a fair chance hiring law for state employment. The Pennsylvania Human Relations Commission enforces employment protections. PA CareerLink provides workforce development and reentry services.",
    "resources": [
      {
        "label": "PA CareerLink — Job Seekers",
        "url": "https://www.pacareerlink.pa.gov"
      },
      {
        "label": "EEOC — Philadelphia District Office",
        "url": "https://www.eeoc.gov/field/philadelphia"
      },
      {
        "label": "Employment Rights — Community Legal Services (Philadelphia)",
        "url": "https://clsphila.org"
      }
    ],
    "learnMoreUrl": "https://www.pacareerlink.pa.gov",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "PA",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop pennsylvania pa",
    "summary": "Pennsylvania residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of Pennsylvania provides know-your-rights resources. Pennsylvania passed police accountability reforms. Philadelphia has a strong civilian oversight board for the PPD.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Pennsylvania",
        "url": "https://www.aclupa.org/know-your-rights"
      },
      {
        "label": "Pennsylvania AG — Bureau of Civil Rights",
        "url": "https://www.attorneygeneral.gov/civil-rights/"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclupa.org/know-your-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "PA",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment pennsylvania pa",
    "summary": "Pennsylvania parole is administered by the PA Board of Probation and Parole. Conditions are set at release. The DOC provides reentry services. Violations are reviewed by the Board and can result in revocation. Pennsylvania has one of the largest supervised populations in the country.",
    "resources": [
      {
        "label": "Pennsylvania Board of Probation and Parole",
        "url": "https://www.pbpp.pa.gov"
      },
      {
        "label": "Pennsylvania DOC — Reentry Programs",
        "url": "https://www.cor.pa.gov/Reentry/Pages/default.aspx"
      },
      {
        "label": "Parole Rights — Community Legal Services",
        "url": "https://clsphila.org"
      }
    ],
    "learnMoreUrl": "https://www.pbpp.pa.gov",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "PA",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting pennsylvania pa",
    "summary": "Pennsylvania probation is supervised by county probation departments. Conditions are court-ordered. Pennsylvania has active drug courts and specialty courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "Pennsylvania Courts — Adult Probation",
        "url": "https://www.pacourts.us/courts/courts-of-common-pleas"
      },
      {
        "label": "Pennsylvania Drug Courts — AOPC",
        "url": "https://www.pacourts.us/learn/programs/drug-courts"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.pacourts.us/courts/courts-of-common-pleas",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "RI",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement rhode island ri",
    "summary": "Rhode Island restores voting rights upon release from prison. People on parole and probation can vote. You must re-register to vote. Rhode Island has accessible voter registration at the Board of Elections and at motor vehicle agencies.",
    "resources": [
      {
        "label": "Rhode Island Voting Rights — Board of Elections",
        "url": "https://vote.sos.ri.gov"
      },
      {
        "label": "Rhode Island Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/rhode-island"
      },
      {
        "label": "Legal Help — Rhode Island Legal Services",
        "url": "https://www.rils.org"
      }
    ],
    "learnMoreUrl": "https://vote.sos.ri.gov",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "RI",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history rhode island ri",
    "summary": "Rhode Island allows expungement of misdemeanor and some felony convictions after 5-10 year waiting periods. First-time offenders receive more favorable treatment. The process requires a petition to the court. Contact Rhode Island Legal Services for assistance.",
    "resources": [
      {
        "label": "Rhode Island Expungement — RI Courts",
        "url": "https://www.courts.ri.gov/Courts/DistrictCourt/Pages/expungement.aspx"
      },
      {
        "label": "Rhode Island Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/rhode-island-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Rhode Island Legal Services",
        "url": "https://www.rils.org"
      }
    ],
    "learnMoreUrl": "https://www.courts.ri.gov/Courts/DistrictCourt/Pages/expungement.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "RI",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony rhode island ri",
    "summary": "Rhode Island has protections through the Rhode Island Commission for Human Rights. Federal Fair Housing Act and HUD guidance on criminal records also apply. RIHousing provides rental assistance programs for people in reentry.",
    "resources": [
      {
        "label": "Rhode Island Commission for Human Rights — Housing",
        "url": "https://www.richr.ri.gov/housing"
      },
      {
        "label": "Fair Housing — HUD Rhode Island",
        "url": "https://www.hud.gov/states/rhode_island/renting"
      },
      {
        "label": "Housing Help — Rhode Island Legal Services",
        "url": "https://www.rils.org"
      }
    ],
    "learnMoreUrl": "https://www.richr.ri.gov/housing",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "RI",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony rhode island ri",
    "summary": "Rhode Island enacted a statewide ban-the-box law in 2013 for private employers with 4 or more employees. The Rhode Island Commission for Human Rights enforces these protections. RI DOL provides workforce development and reentry employment services.",
    "resources": [
      {
        "label": "Rhode Island Fair Chance Employment — RICHR",
        "url": "https://www.richr.ri.gov/employment"
      },
      {
        "label": "EEOC — Boston Area Office (covers Rhode Island)",
        "url": "https://www.eeoc.gov/field/boston"
      },
      {
        "label": "Employment Help — Rhode Island Legal Services",
        "url": "https://www.rils.org"
      }
    ],
    "learnMoreUrl": "https://www.richr.ri.gov/employment",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "RI",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop rhode island ri",
    "summary": "Rhode Island residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of Rhode Island monitors civil rights and provides know-your-rights resources. You have the right to remain silent and to refuse a warrantless search.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Rhode Island",
        "url": "https://www.riaclu.org"
      },
      {
        "label": "Rhode Island AG — Civil Rights",
        "url": "https://www.riag.ri.gov"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.riaclu.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "RI",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment rhode island ri",
    "summary": "Rhode Island parole is administered by the Rhode Island Parole Board within the DOC. Conditions are set at release. The DOC provides reentry services. Violations are reviewed by the Board and can result in revocation.",
    "resources": [
      {
        "label": "Rhode Island Parole Board — DOC",
        "url": "https://doc.ri.gov/boards-commissions/parole-board/"
      },
      {
        "label": "Rhode Island DOC — Reentry",
        "url": "https://doc.ri.gov/correctional-services/reentry/"
      },
      {
        "label": "Parole Rights — Rhode Island Legal Services",
        "url": "https://www.rils.org"
      }
    ],
    "learnMoreUrl": "https://doc.ri.gov/boards-commissions/parole-board/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "RI",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting rhode island ri",
    "summary": "Rhode Island probation is supervised by the Rhode Island DOC through probation and parole officers. Conditions are court-ordered. Rhode Island has drug courts and specialty courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "Rhode Island DOC — Probation and Parole",
        "url": "https://doc.ri.gov/correctional-services/probation-parole/"
      },
      {
        "label": "Rhode Island Drug Courts",
        "url": "https://www.courts.ri.gov/Courts/SuperiorCourt/Pages/drugcourt.aspx"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://doc.ri.gov/correctional-services/probation-parole/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "SC",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement south carolina sc",
    "summary": "South Carolina automatically restores voting rights after completing the full sentence including parole and probation. You must re-register to vote. South Carolina provides voter registration through multiple state agencies.",
    "resources": [
      {
        "label": "South Carolina Voting Rights — State Election Commission",
        "url": "https://www.scvotes.sc.gov/registration/voter-registration"
      },
      {
        "label": "South Carolina Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/south-carolina"
      },
      {
        "label": "Legal Help — South Carolina Legal Services",
        "url": "https://sclegal.org"
      }
    ],
    "learnMoreUrl": "https://www.scvotes.sc.gov/registration/voter-registration",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "SC",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history south carolina sc",
    "summary": "South Carolina has a limited expungement process. First-offense misdemeanors are eligible after 3-5 years. Some felonies may be eligible after 15 years. The process requires a petition. Contact South Carolina legal aid for guidance on your specific eligibility.",
    "resources": [
      {
        "label": "South Carolina Expungement — SC Judicial Department",
        "url": "https://www.sccourts.org/selfHelp/expungements.cfm"
      },
      {
        "label": "South Carolina Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/south-carolina-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — South Carolina Legal Services",
        "url": "https://sclegal.org"
      }
    ],
    "learnMoreUrl": "https://www.sccourts.org/selfHelp/expungements.cfm",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "SC",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony south carolina sc",
    "summary": "South Carolina has no statewide fair chance housing law. Federal Fair Housing Act and HUD guidance on criminal records apply to all South Carolina landlords. The South Carolina State Housing Finance and Development Authority provides rental assistance.",
    "resources": [
      {
        "label": "South Carolina Housing Finance and Development Authority",
        "url": "https://www.schousing.com"
      },
      {
        "label": "Fair Housing — HUD South Carolina",
        "url": "https://www.hud.gov/states/south_carolina/renting"
      },
      {
        "label": "Housing Help — South Carolina Legal Services",
        "url": "https://sclegal.org"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/south_carolina/renting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "SC",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony south carolina sc",
    "summary": "South Carolina has no statewide ban-the-box law for private employers. Some cities have local ordinances. Federal EEOC protections apply statewide. SC Works provides workforce development and reentry employment services.",
    "resources": [
      {
        "label": "SC Works — Job Seekers",
        "url": "https://scworks.org"
      },
      {
        "label": "EEOC — Charlotte District Office (covers SC)",
        "url": "https://www.eeoc.gov/field/charlotte"
      },
      {
        "label": "Employment Rights — South Carolina Legal Services",
        "url": "https://sclegal.org"
      }
    ],
    "learnMoreUrl": "https://scworks.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "SC",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop south carolina sc",
    "summary": "South Carolina residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of South Carolina provides know-your-rights resources and monitors civil rights issues statewide.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of South Carolina",
        "url": "https://www.aclusc.org"
      },
      {
        "label": "South Carolina AG — Consumer Protection and Civil Rights",
        "url": "https://www.scag.gov"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclusc.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "SC",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment south carolina sc",
    "summary": "South Carolina parole is administered by the SC Board of Paroles and Pardons within the DOC. Conditions are set at release. The DOC provides reentry services. Violations are reviewed by the Board and can result in revocation.",
    "resources": [
      {
        "label": "South Carolina Board of Paroles and Pardons",
        "url": "https://paroleboard.sc.gov"
      },
      {
        "label": "South Carolina DOC — Reentry Programs",
        "url": "https://www.doc.sc.gov/Reentry.html"
      },
      {
        "label": "Parole Rights — South Carolina Legal Services",
        "url": "https://sclegal.org"
      }
    ],
    "learnMoreUrl": "https://paroleboard.sc.gov",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "SC",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting south carolina sc",
    "summary": "South Carolina probation is supervised by the SC DOC through probation and parole agents. Conditions are court-ordered. South Carolina has active drug courts and specialty courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "South Carolina DOC — Community Corrections",
        "url": "https://www.doc.sc.gov/community.html"
      },
      {
        "label": "South Carolina Drug Courts — Judicial Dept.",
        "url": "https://www.sccourts.org/programs/drugcourt.cfm"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.doc.sc.gov/community.html",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "SD",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement south dakota sd",
    "summary": "In South Dakota, voting rights are automatically restored for most people after completing their full sentence, including parole and probation. People convicted of certain serious offenses may face additional requirements. You must re-register after restoration.",
    "resources": [
      {
        "label": "South Dakota Voting Rights — Secretary of State",
        "url": "https://sdsos.gov/elections-voting/voting/register-to-vote/default.aspx"
      },
      {
        "label": "South Dakota Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/south-dakota"
      },
      {
        "label": "DOJ Guide to South Dakota Voting Rules",
        "url": "https://www.justice.gov/crt/media/1332106/dl"
      }
    ],
    "learnMoreUrl": "https://sdsos.gov/elections-voting/voting/register-to-vote/default.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "SD",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history south dakota sd",
    "summary": "South Dakota offers limited expungement relief. Expungement is available primarily for non-conviction records and certain dismissed charges. Court orders must be reported to the Division of Criminal Investigation, which retains a non-public record for law enforcement. Petition the court of conviction.",
    "resources": [
      {
        "label": "South Dakota Expungement Guide — Collateral Consequences Resource Center",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/south-dakota-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "South Dakota Unified Judicial System — Expungement",
        "url": "https://ujs.sd.gov"
      },
      {
        "label": "Legal Help — South Dakota Legal Aid",
        "url": "https://www.southdakotalegalaid.org"
      }
    ],
    "learnMoreUrl": "https://ccresourcecenter.org/state-restoration-profiles/south-dakota-restoration-of-rights-pardon-expungement-sealing/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "SD",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony south dakota sd",
    "summary": "South Dakota has no statewide fair chance housing law. Federal Fair Housing Act protections and HUD guidance on criminal records apply. The South Dakota Housing Development Authority provides resources for renters, and legal aid organizations can assist with discrimination complaints.",
    "resources": [
      {
        "label": "South Dakota Housing Development Authority",
        "url": "https://www.sdhda.org"
      },
      {
        "label": "Fair Housing — HUD South Dakota",
        "url": "https://www.hud.gov/states/south_dakota/renting"
      },
      {
        "label": "Housing Help — South Dakota Legal Aid",
        "url": "https://www.southdakotalegalaid.org"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/south_dakota/renting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "SD",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony south dakota sd",
    "summary": "South Dakota has no statewide ban-the-box law. Federal EEOC protections apply to employers with 15 or more employees statewide. The South Dakota Department of Labor and Regulation provides job placement and reentry employment services.",
    "resources": [
      {
        "label": "South Dakota Dept. of Labor — Job Seekers",
        "url": "https://dlr.sd.gov/ra/individuals/default.aspx"
      },
      {
        "label": "EEOC Employment Discrimination Charges — South Dakota",
        "url": "https://www.eeoc.gov/field/minneapolis"
      },
      {
        "label": "Employment Rights — South Dakota Legal Aid",
        "url": "https://www.southdakotalegalaid.org"
      }
    ],
    "learnMoreUrl": "https://dlr.sd.gov/ra/individuals/default.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "SD",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop south dakota sd",
    "summary": "South Dakota residents have full Fourth and Fifth Amendment federal protections during police interactions. You have the right to remain silent and to refuse a warrantless search. The ACLU of South Dakota monitors civil rights issues in the state.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of South Dakota",
        "url": "https://www.aclsd.org"
      },
      {
        "label": "South Dakota Attorney General — Division of Criminal Investigation",
        "url": "https://atg.sd.gov/OurOffice/Divisions/DCI/default.aspx"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclsd.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "SD",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment south dakota sd",
    "summary": "South Dakota parole is administered by the Board of Pardons and Paroles. Conditions include reporting, travel restrictions, and other requirements set at release. The Department of Corrections provides transition services. Violations may result in a revocation hearing.",
    "resources": [
      {
        "label": "South Dakota Board of Pardons and Paroles",
        "url": "https://doc.sd.gov/adult/pardons/"
      },
      {
        "label": "South Dakota DOC — Reentry Services",
        "url": "https://doc.sd.gov/adult/reentry/"
      },
      {
        "label": "Parole Rights — South Dakota Legal Aid",
        "url": "https://www.southdakotalegalaid.org"
      }
    ],
    "learnMoreUrl": "https://doc.sd.gov/adult/pardons/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "SD",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting south dakota sd",
    "summary": "South Dakota probation is supervised by the Department of Corrections. Conditions are set by the court. The DOC provides case management, substance abuse programming, and employment referrals to help people complete supervision successfully.",
    "resources": [
      {
        "label": "South Dakota DOC — Community Supervision",
        "url": "https://doc.sd.gov/adult/supervision/"
      },
      {
        "label": "South Dakota DOC — Reentry Services",
        "url": "https://doc.sd.gov/adult/reentry/"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://doc.sd.gov/adult/supervision/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "TN",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement tennessee tn",
    "summary": "Tennessee has complex voting rights restoration rules that depend on the specific offense. Some felony convictions result in automatic restoration after sentence completion. Others require a certificate of restoration. People convicted of certain offenses may be permanently barred. Check your specific conviction with Tennessee legal aid.",
    "resources": [
      {
        "label": "Tennessee Voting Rights Restoration — Secretary of State",
        "url": "https://sos.tn.gov/elections/guides/voting-rights-restoration"
      },
      {
        "label": "Tennessee Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/tennessee"
      },
      {
        "label": "Voting Rights Help — Tennessee Alliance for Legal Services",
        "url": "https://www.tals.org"
      }
    ],
    "learnMoreUrl": "https://sos.tn.gov/elections/guides/voting-rights-restoration",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "TN",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history tennessee tn",
    "summary": "Tennessee allows expungement of dismissed charges, acquittals, and some misdemeanor convictions. Felony expungement is limited. Court costs and fees must generally be paid. Records for law enforcement purposes are not destroyed. The Administrative Office of Courts provides forms and guidance.",
    "resources": [
      {
        "label": "Tennessee Expungement — Administrative Office of Courts",
        "url": "https://www.tncourts.gov/programs/public-access-and-education/expungement"
      },
      {
        "label": "Tennessee Expungement Guide — Collateral Consequences Resource Center",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/tennessee-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Expungement Help — Tennessee Alliance for Legal Services",
        "url": "https://www.tals.org"
      }
    ],
    "learnMoreUrl": "https://www.tncourts.gov/programs/public-access-and-education/expungement",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "TN",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony tennessee tn",
    "summary": "Tennessee has no statewide fair chance housing law. Federal Fair Housing Act and HUD guidance on criminal records apply to landlords statewide. The Tennessee Human Rights Commission handles housing discrimination complaints, including those based on criminal history.",
    "resources": [
      {
        "label": "Tennessee Human Rights Commission — Fair Housing",
        "url": "https://www.tn.gov/humanrights/housing/fair-housing.html"
      },
      {
        "label": "Fair Housing — HUD Tennessee",
        "url": "https://www.hud.gov/states/tennessee/renting"
      },
      {
        "label": "Housing Rights — Tennessee Alliance for Legal Services",
        "url": "https://www.tals.org"
      }
    ],
    "learnMoreUrl": "https://www.tn.gov/humanrights/housing/fair-housing.html",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "TN",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony tennessee tn",
    "summary": "Tennessee enacted a fair chance hiring law for public employment. Federal EEOC protections apply statewide to private employers. Tennessee also has occupational licensing reforms. The Tennessee Department of Labor and Workforce Development provides reentry employment resources.",
    "resources": [
      {
        "label": "Tennessee Dept. of Labor — Workforce Services",
        "url": "https://www.tn.gov/workforce/employees/career-services/career-services-for-individuals.html"
      },
      {
        "label": "EEOC — Nashville Field Office",
        "url": "https://www.eeoc.gov/field/nashville"
      },
      {
        "label": "Employment Rights — Tennessee Alliance for Legal Services",
        "url": "https://www.tals.org"
      }
    ],
    "learnMoreUrl": "https://www.tn.gov/workforce/employees/career-services/career-services-for-individuals.html",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "TN",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop tennessee tn",
    "summary": "Tennessee residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of Tennessee provides know-your-rights resources. Tennessee passed police reform legislation in 2021. You have the right to remain silent and to refuse a warrantless search.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Tennessee",
        "url": "https://www.aclu-tn.org"
      },
      {
        "label": "Tennessee Bureau of Investigation — Civil Rights",
        "url": "https://www.tn.gov/tbi.html"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclu-tn.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "TN",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment tennessee tn",
    "summary": "Tennessee parole is administered by the Tennessee Board of Parole. Conditions are set at release and typically include regular reporting, travel restrictions, and employment requirements. The Department of Correction provides transition planning and reentry support services.",
    "resources": [
      {
        "label": "Tennessee Board of Parole",
        "url": "https://www.tn.gov/boardofparole.html"
      },
      {
        "label": "Tennessee DOC — Reentry and Transition",
        "url": "https://www.tn.gov/correction/redirect-agency-programs/reentry.html"
      },
      {
        "label": "Parole Rights — Tennessee Alliance for Legal Services",
        "url": "https://www.tals.org"
      }
    ],
    "learnMoreUrl": "https://www.tn.gov/boardofparole.html",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "TN",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting tennessee tn",
    "summary": "Tennessee probation is supervised by the Department of Correction and community supervision officers. Conditions are set by the court. Tennessee has an active community corrections program and drug courts. Violations are handled through a formal hearing before the court.",
    "resources": [
      {
        "label": "Tennessee DOC — Community Supervision",
        "url": "https://www.tn.gov/correction/redirect-agency-programs/community-supervision.html"
      },
      {
        "label": "Tennessee Community Corrections — DOC",
        "url": "https://www.tn.gov/correction/redirect-agency-programs/community-corrections.html"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.tn.gov/correction/redirect-agency-programs/community-supervision.html",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "TX",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement texas tx",
    "summary": "Texas automatically restores voting rights after completing the full sentence including parole and probation. Fines, fees, and restitution do not need to be paid for restoration. You must re-register to vote. Texas also requires a photo ID to vote.",
    "resources": [
      {
        "label": "Texas Voting Rights — Secretary of State",
        "url": "https://www.sos.state.tx.us/elections/voter/reqvr.shtml"
      },
      {
        "label": "Texas Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/texas"
      },
      {
        "label": "Legal Help — Texas Law Help",
        "url": "https://texaslawhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.sos.state.tx.us/elections/voter/reqvr.shtml",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "TX",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history texas tx",
    "summary": "Texas allows expunction (expungement) for arrests not resulting in conviction. Orders of nondisclosure are available for deferred adjudications after waiting periods. Expunction completely removes the record; nondisclosure restricts public access. Petition through the court of arrest.",
    "resources": [
      {
        "label": "Texas Expungement & Nondisclosure — Texas Law Help",
        "url": "https://texaslawhelp.org/articles/expunction-and-nondisclosure-in-texas"
      },
      {
        "label": "Texas Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/texas-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Texas Law Help",
        "url": "https://texaslawhelp.org"
      }
    ],
    "learnMoreUrl": "https://texaslawhelp.org/articles/expunction-and-nondisclosure-in-texas",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "TX",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony texas tx",
    "summary": "Texas has no statewide fair chance housing law. Federal Fair Housing Act and HUD guidance on criminal records apply to all Texas landlords. The Texas Department of Housing and Community Affairs provides rental assistance resources.",
    "resources": [
      {
        "label": "Texas TDHCA — Renter Resources",
        "url": "https://www.tdhca.state.tx.us/renters.htm"
      },
      {
        "label": "Fair Housing — HUD Texas",
        "url": "https://www.hud.gov/states/texas/renting"
      },
      {
        "label": "Housing Help — Texas Law Help",
        "url": "https://texaslawhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/texas/renting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "TX",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony texas tx",
    "summary": "Austin has a ban-the-box ordinance for city employment. Texas has no statewide ban-the-box law for private employers. Federal EEOC protections apply. The Texas Workforce Commission provides workforce development and reentry employment services.",
    "resources": [
      {
        "label": "Texas Workforce Commission — Job Seekers",
        "url": "https://www.twc.texas.gov/jobseekers"
      },
      {
        "label": "EEOC — Dallas District Office",
        "url": "https://www.eeoc.gov/field/dallas"
      },
      {
        "label": "Employment Rights — Texas Law Help",
        "url": "https://texaslawhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.twc.texas.gov/jobseekers",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "TX",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop texas tx",
    "summary": "Texas residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of Texas provides know-your-rights resources. Texas has specific laws on police interaction obligations. You have the right to remain silent after invoking it explicitly.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Texas",
        "url": "https://www.aclutx.org/know-your-rights"
      },
      {
        "label": "Texas AG — Civil Rights Division",
        "url": "https://www.texasattorneygeneral.gov/civil-rights"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclutx.org/know-your-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "TX",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment texas tx",
    "summary": "Texas parole is administered by the Texas Board of Pardons and Paroles within TDCJ. Conditions are set at release. Texas has one of the largest supervised populations in the country. Violations are reviewed by the Board and can result in revocation.",
    "resources": [
      {
        "label": "Texas Board of Pardons and Paroles",
        "url": "https://www.tdcj.texas.gov/bpp/"
      },
      {
        "label": "TDCJ — Reentry Programs",
        "url": "https://www.tdcj.texas.gov/divisions/parole/reentry.html"
      },
      {
        "label": "Parole Rights — Texas Law Help",
        "url": "https://texaslawhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.tdcj.texas.gov/bpp/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "TX",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting texas tx",
    "summary": "Texas probation (called Community Supervision) is administered by county Community Supervision and Corrections Departments (CSCDs). Conditions are court-ordered. Texas has active drug courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "Texas TDCJ — Community Justice Assistance Division",
        "url": "https://www.tdcj.texas.gov/divisions/cjad/"
      },
      {
        "label": "Texas Office of Court Administration — Drug Courts",
        "url": "https://www.txcourts.gov/programs-services/drug-courts/"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.tdcj.texas.gov/divisions/cjad/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "UT",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement utah ut",
    "summary": "Utah automatically restores voting rights upon completing the full sentence including parole and probation. You must re-register to vote. Utah has accessible voter registration online, by mail, and in person at county clerk offices.",
    "resources": [
      {
        "label": "Utah Voting Rights — Lieutenant Governor Elections",
        "url": "https://elections.utah.gov/voter-information/register-to-vote"
      },
      {
        "label": "Utah Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/utah"
      },
      {
        "label": "Legal Help — Utah Legal Services",
        "url": "https://www.utahlegalservices.org"
      }
    ],
    "learnMoreUrl": "https://elections.utah.gov/voter-information/register-to-vote",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "UT",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history utah ut",
    "summary": "Utah allows expungement of qualifying convictions after waiting periods. A Certificate of Eligibility from the Bureau of Criminal Identification is required before filing. Misdemeanors and some felonies are eligible. Drug offenses have specific rules. Cannabis conviction relief has expanded.",
    "resources": [
      {
        "label": "Utah Expungement — Utah Courts",
        "url": "https://www.utcourts.gov/howto/expungement/"
      },
      {
        "label": "Utah Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/utah-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Utah Legal Services",
        "url": "https://www.utahlegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.utcourts.gov/howto/expungement/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "UT",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony utah ut",
    "summary": "Utah has no statewide fair chance housing law. Federal Fair Housing Act and HUD guidance on criminal records apply to all Utah landlords. The Utah Housing Corporation and legal aid organizations provide rental assistance.",
    "resources": [
      {
        "label": "Utah Housing Corporation",
        "url": "https://www.utahhousingcorp.org"
      },
      {
        "label": "Fair Housing — HUD Utah",
        "url": "https://www.hud.gov/states/utah/renting"
      },
      {
        "label": "Housing Help — Utah Legal Services",
        "url": "https://www.utahlegalservices.org"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/utah/renting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "UT",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony utah ut",
    "summary": "Salt Lake City has a ban-the-box ordinance for city employment. Utah has no statewide ban-the-box law for private employers. Federal EEOC protections apply. Utah Department of Workforce Services provides employment and reentry support.",
    "resources": [
      {
        "label": "Utah Department of Workforce Services",
        "url": "https://jobs.utah.gov"
      },
      {
        "label": "EEOC — Denver Field Office (covers Utah)",
        "url": "https://www.eeoc.gov/field/denver"
      },
      {
        "label": "Employment Help — Utah Legal Services",
        "url": "https://www.utahlegalservices.org"
      }
    ],
    "learnMoreUrl": "https://jobs.utah.gov",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "UT",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop utah ut",
    "summary": "Utah residents have Fourth and Fifth Amendment protections during police interactions. The ACLU of Utah monitors civil rights issues and provides know-your-rights resources. Utah has state constitutional protections that may exceed federal baselines.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Utah",
        "url": "https://www.acluutah.org/resources/know-your-rights"
      },
      {
        "label": "Utah AG — Civil Rights",
        "url": "https://ag.utah.gov"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.acluutah.org/resources/know-your-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "UT",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment utah ut",
    "summary": "Utah parole is administered by the Utah Board of Pardons and Parole. Conditions are set at release. The Utah DOC provides reentry and transition services. Violations are reviewed by the Board and can result in revocation.",
    "resources": [
      {
        "label": "Utah Board of Pardons and Parole",
        "url": "https://bpp.utah.gov"
      },
      {
        "label": "Utah DOC — Reentry Services",
        "url": "https://corrections.utah.gov/index.php/reentry"
      },
      {
        "label": "Parole Rights — Utah Legal Services",
        "url": "https://www.utahlegalservices.org"
      }
    ],
    "learnMoreUrl": "https://bpp.utah.gov",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "UT",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting utah ut",
    "summary": "Utah probation (Adult Probation and Parole) is supervised by the Utah DOC. Conditions are set by the court. Utah has active drug courts and specialty courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "Utah DOC — Adult Probation and Parole",
        "url": "https://corrections.utah.gov/index.php/adult-probation-and-parole"
      },
      {
        "label": "Utah Drug Courts — AOC",
        "url": "https://www.utcourts.gov/courts/treat/drugcourt/"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://corrections.utah.gov/index.php/adult-probation-and-parole",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "VT",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement vermont vt",
    "summary": "Vermont never takes away the right to vote, even while incarcerated. People serving a sentence in a Vermont correctional facility can vote by absentee ballot. Vermont and Maine are the only two states with this policy. No registration loss or restoration needed.",
    "resources": [
      {
        "label": "Vermont Voting Rights — Secretary of State",
        "url": "https://sos.vermont.gov/elections/voters/eligibility-requirements/"
      },
      {
        "label": "Vermont Voting — ACLU of Vermont",
        "url": "https://www.acluvt.org/issues/voting-rights"
      },
      {
        "label": "Legal Help — Vermont Legal Aid",
        "url": "https://www.vtlegalaid.org"
      }
    ],
    "learnMoreUrl": "https://sos.vermont.gov/elections/voters/eligibility-requirements/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "VT",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history vermont vt",
    "summary": "Vermont allows expungement of qualifying criminal records after waiting periods of 5-10 years. Some offenses are not eligible. Dismissals and acquittals may be expunged more easily. The process requires a petition. Contact Vermont Legal Aid for guidance.",
    "resources": [
      {
        "label": "Vermont Expungement — Vermont Courts",
        "url": "https://www.vermontjudiciary.org/court-forms/expungement"
      },
      {
        "label": "Vermont Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/vermont-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Vermont Legal Aid",
        "url": "https://www.vtlegalaid.org"
      }
    ],
    "learnMoreUrl": "https://www.vermontjudiciary.org/court-forms/expungement",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "VT",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony vermont vt",
    "summary": "Vermont has protections through the Vermont Human Rights Commission against housing discrimination. Federal Fair Housing Act and HUD guidance also apply. Vermont Housing Finance Agency provides rental assistance resources.",
    "resources": [
      {
        "label": "Vermont Human Rights Commission — Housing",
        "url": "https://hrc.vermont.gov/discrimination/housing"
      },
      {
        "label": "Fair Housing — HUD Vermont",
        "url": "https://www.hud.gov/states/vermont/renting"
      },
      {
        "label": "Housing Help — Vermont Legal Aid",
        "url": "https://www.vtlegalaid.org"
      }
    ],
    "learnMoreUrl": "https://hrc.vermont.gov/discrimination/housing",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "VT",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony vermont vt",
    "summary": "Vermont has no statewide ban-the-box law for private employers. Montpelier has a local ordinance. Federal EEOC protections apply. The Vermont Department of Labor provides workforce development and career services.",
    "resources": [
      {
        "label": "Vermont Department of Labor — Job Seekers",
        "url": "https://labor.vermont.gov/workforce-development"
      },
      {
        "label": "EEOC — Boston Area Office (covers Vermont)",
        "url": "https://www.eeoc.gov/field/boston"
      },
      {
        "label": "Employment Help — Vermont Legal Aid",
        "url": "https://www.vtlegalaid.org"
      }
    ],
    "learnMoreUrl": "https://labor.vermont.gov/workforce-development",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "VT",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop vermont vt",
    "summary": "Vermont residents have Fourth and Fifth Amendment protections during police interactions plus state constitutional protections. The ACLU of Vermont monitors civil rights and provides know-your-rights resources.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Vermont",
        "url": "https://www.acluvt.org"
      },
      {
        "label": "Vermont AG — Civil Rights Unit",
        "url": "https://ago.vermont.gov/divisions/civil-rights/"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.acluvt.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "VT",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment vermont vt",
    "summary": "Vermont parole is administered by the Vermont Parole Board. Conditions are set at release. The Vermont DOC provides reentry and transition services. Violations are reviewed by the Board and can result in revocation.",
    "resources": [
      {
        "label": "Vermont Parole Board — DOC",
        "url": "https://doc.vermont.gov/content/parole"
      },
      {
        "label": "Vermont DOC — Reentry Services",
        "url": "https://doc.vermont.gov/reentry"
      },
      {
        "label": "Parole Rights — Vermont Legal Aid",
        "url": "https://www.vtlegalaid.org"
      }
    ],
    "learnMoreUrl": "https://doc.vermont.gov/content/parole",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "VT",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting vermont vt",
    "summary": "Vermont probation is supervised by the Vermont DOC through probation officers. Conditions are court-ordered. Vermont has active drug courts and restorative justice programs. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "Vermont DOC — Probation and Community Supervision",
        "url": "https://doc.vermont.gov/content/probation"
      },
      {
        "label": "Vermont Drug Courts — Judiciary",
        "url": "https://www.vermontjudiciary.org/about/court-programs/drug-treatment-court"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://doc.vermont.gov/content/probation",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "VA",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement virginia va",
    "summary": "Virginia voting rights restoration policy changed in 2023 under Governor Youngkin. The previous automatic restoration policy was reversed, and people now must apply individually to the Governor's office after completing their sentence. Applications are considered on a case-by-case basis. Check the current Secretary of Commonwealth website for the latest guidance.",
    "resources": [
      {
        "label": "Virginia Voting Rights Restoration — Secretary of the Commonwealth",
        "url": "https://www.commonwealth.virginia.gov/judicial-system/restoration-of-civil-rights/"
      },
      {
        "label": "Virginia Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/virginia"
      },
      {
        "label": "Legal Help — Virginia Legal Aid Society",
        "url": "https://www.vlas.org"
      }
    ],
    "learnMoreUrl": "https://www.commonwealth.virginia.gov/judicial-system/restoration-of-civil-rights/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "VA",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history virginia va",
    "summary": "Virginia expanded expungement through 2021 and 2023 legislation. Automatic sealing applies to certain misdemeanors and non-convictions after waiting periods. Petition-based expungement is available for other offenses. Virginia's expungement program is still being phased in.",
    "resources": [
      {
        "label": "Virginia Expungement — Virginia Courts",
        "url": "https://www.vacourts.gov/courts/gd/resources/expungement.pdf"
      },
      {
        "label": "Virginia Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/virginia-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Virginia Legal Aid Society",
        "url": "https://www.vlas.org"
      }
    ],
    "learnMoreUrl": "https://ccresourcecenter.org/state-restoration-profiles/virginia-restoration-of-rights-pardon-expungement-sealing/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "VA",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony virginia va",
    "summary": "Virginia has protections through the Virginia Council on Human Rights. Federal Fair Housing Act and HUD guidance on criminal records apply. Virginia Housing provides rental assistance programs for people in reentry.",
    "resources": [
      {
        "label": "Virginia Council on Human Rights — Fair Housing",
        "url": "https://chr.virginia.gov/fair-housing/"
      },
      {
        "label": "Fair Housing — HUD Virginia",
        "url": "https://www.hud.gov/states/virginia/renting"
      },
      {
        "label": "Housing Help — Virginia Legal Aid Society",
        "url": "https://www.vlas.org"
      }
    ],
    "learnMoreUrl": "https://chr.virginia.gov/fair-housing/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "VA",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony virginia va",
    "summary": "Virginia enacted a ban-the-box law for state government employment in 2020. Private employers are not covered statewide. Federal EEOC protections apply. The Virginia Employment Commission provides workforce development and reentry employment resources.",
    "resources": [
      {
        "label": "Virginia Employment Commission — Job Seekers",
        "url": "https://www.vec.virginia.gov/unemployed"
      },
      {
        "label": "EEOC — Richmond Field Office",
        "url": "https://www.eeoc.gov/field/richmond"
      },
      {
        "label": "Employment Rights — Virginia Legal Aid Society",
        "url": "https://www.vlas.org"
      }
    ],
    "learnMoreUrl": "https://www.vec.virginia.gov/unemployed",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "VA",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop virginia va",
    "summary": "Virginia residents have Fourth and Fifth Amendment protections during police interactions. Virginia enacted major police accountability reforms in 2020 and 2021. The ACLU of Virginia provides know-your-rights resources.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Virginia",
        "url": "https://www.acluva.org/know-your-rights"
      },
      {
        "label": "Virginia AG — Civil Rights Section",
        "url": "https://www.oag.state.va.us/divisions-offices/civil-rights"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.acluva.org/know-your-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "VA",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment virginia va",
    "summary": "Virginia abolished discretionary parole for felonies committed on or after January 1, 1995. Post-sentence conditional release is available for older cases through the Virginia Parole Board. The VADOC supervises conditional releases. Contact legal aid for guidance on your case.",
    "resources": [
      {
        "label": "Virginia Parole Board — VADOC",
        "url": "https://vadoc.virginia.gov/news-resources/offices-of-the-secretary/parole-board/"
      },
      {
        "label": "Virginia DOC — Reentry Services",
        "url": "https://vadoc.virginia.gov/programs/reentry/"
      },
      {
        "label": "Supervision Rights — Virginia Legal Aid",
        "url": "https://www.vlas.org"
      }
    ],
    "learnMoreUrl": "https://vadoc.virginia.gov/news-resources/offices-of-the-secretary/parole-board/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "VA",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting virginia va",
    "summary": "Virginia probation is supervised by the Virginia DOC through probation and parole officers. Conditions are court-ordered. Virginia has active drug courts and specialty courts. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "Virginia DOC — Probation and Parole",
        "url": "https://vadoc.virginia.gov/community-supervision/"
      },
      {
        "label": "Virginia Drug Courts — Supreme Court",
        "url": "https://www.vacourts.gov/courts/problem-solving/dc/home.html"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://vadoc.virginia.gov/community-supervision/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WA",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement washington wa",
    "summary": "Washington automatically restores voting rights after completing the full sentence including community supervision. Recent 2023 reforms expanded restoration access. You must re-register to vote. Washington provides online, mail, and in-person registration options.",
    "resources": [
      {
        "label": "Washington Voting Rights — Secretary of State",
        "url": "https://www.sos.wa.gov/elections/voters/voter-registration/"
      },
      {
        "label": "Washington Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/washington"
      },
      {
        "label": "Legal Help — Washington Law Help",
        "url": "https://washingtonlawhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.sos.wa.gov/elections/voters/voter-registration/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WA",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history washington wa",
    "summary": "Washington's \"vacation\" process allows clearing of many misdemeanor and some felony convictions. SB 5259 (2021) expanded automatic vacation eligibility for qualifying offenses. Cannabis convictions received broad relief. Petition through the court of conviction for other offenses.",
    "resources": [
      {
        "label": "Washington Vacation of Conviction — WA Courts",
        "url": "https://www.courts.wa.gov/newsinfo/?fa=newsinfo.vacationCharges"
      },
      {
        "label": "Washington Expungement Guide — CCRC",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/washington-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Help — Washington Law Help",
        "url": "https://washingtonlawhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.courts.wa.gov/newsinfo/?fa=newsinfo.vacationCharges",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WA",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony washington wa",
    "summary": "Washington enacted statewide fair chance housing protections in 2018. Landlords face restrictions on when and how they can use criminal history in rental decisions. Seattle has additional local protections. The Washington State Human Rights Commission enforces these laws.",
    "resources": [
      {
        "label": "Washington Fair Chance Housing — WSHRC",
        "url": "https://www.hum.wa.gov/fair-housing"
      },
      {
        "label": "Fair Housing — HUD Washington",
        "url": "https://www.hud.gov/states/washington/renting"
      },
      {
        "label": "Housing Help — Washington Law Help",
        "url": "https://washingtonlawhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.hum.wa.gov/fair-housing",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WA",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony washington wa",
    "summary": "Washington enacted a statewide ban-the-box law in 2018. Employers cannot ask about criminal history on the initial job application. The Washington State Human Rights Commission enforces these protections. The Employment Security Department provides workforce development and reentry services.",
    "resources": [
      {
        "label": "Washington Fair Chance Employment — WSHRC",
        "url": "https://www.hum.wa.gov/employment/criminal-records"
      },
      {
        "label": "EEOC — Seattle Field Office",
        "url": "https://www.eeoc.gov/field/seattle"
      },
      {
        "label": "Employment Help — Washington Law Help",
        "url": "https://washingtonlawhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.hum.wa.gov/employment/criminal-records",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WA",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop washington wa",
    "summary": "Washington residents have Fourth and Fifth Amendment protections plus strong state constitutional rights during police interactions. Initiative 940 (2018) reformed use-of-force laws. Additional accountability legislation passed in 2021. The ACLU of Washington provides know-your-rights resources.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Washington",
        "url": "https://www.aclu-wa.org/pages/know-your-rights"
      },
      {
        "label": "Washington AG — Civil Rights Division",
        "url": "https://www.atg.wa.gov/civil-rights-division"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclu-wa.org/pages/know-your-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WA",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment washington wa",
    "summary": "Washington's Indeterminate Sentence Review Board (ISRB) administers parole for people sentenced before the 1981 Sentencing Reform Act. Most post-1981 releases are on community custody supervised by the DOC. Conditions vary by case and violations are reviewed through formal hearings.",
    "resources": [
      {
        "label": "Washington ISRB — Indeterminate Sentence Review Board",
        "url": "https://www.isrb.wa.gov"
      },
      {
        "label": "Washington DOC — Community Corrections",
        "url": "https://www.doc.wa.gov/corrections/supervision/"
      },
      {
        "label": "Supervision Rights — Washington Law Help",
        "url": "https://washingtonlawhelp.org"
      }
    ],
    "learnMoreUrl": "https://www.doc.wa.gov/corrections/supervision/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WA",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting washington wa",
    "summary": "Washington probation is supervised by the DOC through Community Corrections Officers. Conditions are court-ordered. Washington has active drug courts and specialty courts statewide. Violations are heard before the sentencing court.",
    "resources": [
      {
        "label": "Washington DOC — Community Supervision",
        "url": "https://www.doc.wa.gov/corrections/supervision/"
      },
      {
        "label": "Washington Drug Courts — OAC",
        "url": "https://www.courts.wa.gov/programs_orgs/drug_courts/"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://www.doc.wa.gov/corrections/supervision/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WV",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement west virginia wv",
    "summary": "In West Virginia, voting rights are automatically restored after you complete your full sentence, including parole and probation. You must re-register to vote before casting a ballot again. Misdemeanor convictions and pretrial detention do not affect voting rights.",
    "resources": [
      {
        "label": "West Virginia Voter Registration — Secretary of State",
        "url": "https://sos.wv.gov/elections/Pages/VoterRegistration.aspx"
      },
      {
        "label": "West Virginia Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/west-virginia"
      },
      {
        "label": "Voting Rights Help — Legal Aid of West Virginia",
        "url": "https://legalaidwv.org"
      }
    ],
    "learnMoreUrl": "https://sos.wv.gov/elections/Pages/VoterRegistration.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WV",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history west virginia wv",
    "summary": "West Virginia allows expungement of many misdemeanor convictions after one year and certain nonviolent felony convictions after five years once the full sentence, including supervision, is complete. Petitions are filed in the circuit court where the case was handled. Non-conviction records may also be expunged in qualifying cases.",
    "resources": [
      {
        "label": "Expungement of Criminal Records — Legal Aid WV",
        "url": "https://legalaidwv.org/legal-information/expungement-of-criminal-records/"
      },
      {
        "label": "West Virginia Expungement Instructions — WV Courts",
        "url": "https://www.courtswv.gov/sites/default/pubfilesmnt/2023-06/SCA-C900-InfoforExpungementPetition.pdf"
      },
      {
        "label": "West Virginia Expungement Guide — Collateral Consequences Resource Center",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/west-virginia-restoration-of-rights-pardon-expungement-sealing/"
      }
    ],
    "learnMoreUrl": "https://legalaidwv.org/legal-information/expungement-of-criminal-records/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WV",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony west virginia wv",
    "summary": "West Virginia has no statewide fair chance housing law, but federal Fair Housing Act protections and HUD guidance on criminal records still apply. The West Virginia Human Rights Commission investigates housing discrimination complaints, and Legal Aid of West Virginia can help renters understand their rights.",
    "resources": [
      {
        "label": "West Virginia Human Rights Commission",
        "url": "https://oig.wv.gov/human-rights-commission"
      },
      {
        "label": "Fair Housing — HUD West Virginia",
        "url": "https://www.hud.gov/states/west_virginia/renting"
      },
      {
        "label": "Housing Help — Legal Aid of West Virginia",
        "url": "https://legalaidwv.org"
      }
    ],
    "learnMoreUrl": "https://oig.wv.gov/human-rights-commission",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WV",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony west virginia wv",
    "summary": "West Virginia has no statewide ban-the-box law for private employers, but federal EEOC protections still limit discriminatory use of criminal records. WorkForce West Virginia and Jobs & Hope West Virginia provide job search, training, and reentry support for people returning to the workforce.",
    "resources": [
      {
        "label": "WorkForce West Virginia",
        "url": "https://workforcewv.org/"
      },
      {
        "label": "Jobs & Hope West Virginia",
        "url": "https://jobsandhope.wv.gov/"
      },
      {
        "label": "EEOC — Pittsburgh Area Office",
        "url": "https://www.eeoc.gov/field/pittsburgh"
      }
    ],
    "learnMoreUrl": "https://workforcewv.org/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WV",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop west virginia wv",
    "summary": "West Virginia residents have the same Fourth and Fifth Amendment protections as everyone else during police encounters. You have the right to remain silent, to refuse consent to a warrantless search in most situations, and to ask for a lawyer if you are arrested. ACLU-WV and the Department of Justice provide complaint guidance and civil-rights resources.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of West Virginia",
        "url": "https://www.acluwv.org/en/know-your-rights"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      },
      {
        "label": "West Virginia Attorney General",
        "url": "https://ago.wv.gov"
      }
    ],
    "learnMoreUrl": "https://www.acluwv.org/en/know-your-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WV",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment west virginia wv",
    "summary": "West Virginia parole is overseen by the West Virginia Parole Board and supervised through the Division of Corrections and Rehabilitation. Conditions are set at release and may include reporting, travel restrictions, treatment, and employment requirements. Violations can lead to revocation proceedings.",
    "resources": [
      {
        "label": "West Virginia Parole Board",
        "url": "https://paroleboard.wv.gov/Pages/default.aspx"
      },
      {
        "label": "West Virginia DCR — Rehabilitative Services",
        "url": "https://dcr.wv.gov/rehabilitative_services/pages/default.aspx"
      },
      {
        "label": "Reentry Council of West Virginia",
        "url": "https://wvreentry.org/"
      }
    ],
    "learnMoreUrl": "https://paroleboard.wv.gov/Pages/default.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WV",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting west virginia wv",
    "summary": "West Virginia probation is supervised through the Division of Corrections and Rehabilitation under court-ordered conditions. Conditions may include reporting, substance testing, employment requirements, and treatment. Alleged violations are handled through a formal court process.",
    "resources": [
      {
        "label": "West Virginia DCR — Rehabilitative Services",
        "url": "https://dcr.wv.gov/rehabilitative_services/pages/default.aspx"
      },
      {
        "label": "Legal Aid of West Virginia",
        "url": "https://legalaidwv.org"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://dcr.wv.gov/rehabilitative_services/pages/default.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WI",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement wisconsin wi",
    "summary": "In Wisconsin, voting rights are automatically restored after you complete your full sentence, including probation, parole, or extended supervision. You must re-register before voting again. Most people do not need a separate court order once supervision is complete.",
    "resources": [
      {
        "label": "Wisconsin Elections Commission — Register to Vote",
        "url": "https://elections.wi.gov/Register"
      },
      {
        "label": "Wisconsin Rights Restoration — Collateral Consequences Resource Center",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/wisconsin-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Voting Rights — ACLU of Wisconsin",
        "url": "https://www.aclu-wi.org/en/issues/voting-rights"
      }
    ],
    "learnMoreUrl": "https://elections.wi.gov/Register",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WI",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history wisconsin wi",
    "summary": "Wisconsin expungement is limited and generally must be ordered at sentencing for certain misdemeanors and lower-level felonies committed before age 25. Wisconsin also allows removal of some arrest information and record-cleanup help through courts and legal aid organizations. Record relief options are narrower than in many other states.",
    "resources": [
      {
        "label": "Wisconsin Court System — Expunction",
        "url": "https://www.wicourts.gov/services/public/selfhelp/expunction.htm"
      },
      {
        "label": "Wisconsin Expungement Guide — Collateral Consequences Resource Center",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/wisconsin-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Legal Tune Up — Record Clearing Help",
        "url": "https://legaltuneup.org/"
      }
    ],
    "learnMoreUrl": "https://www.wicourts.gov/services/public/selfhelp/expunction.htm",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WI",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony wisconsin wi",
    "summary": "Wisconsin and federal law prohibit housing discrimination on protected grounds, and criminal record screening can still raise fair housing issues when used inconsistently or discriminatorily. The Wisconsin Equal Rights Division and legal aid organizations can help renters address housing denials and discrimination complaints.",
    "resources": [
      {
        "label": "Wisconsin Equal Rights Division",
        "url": "https://dwd.wisconsin.gov/er/"
      },
      {
        "label": "Fair Housing — HUD Wisconsin",
        "url": "https://www.hud.gov/states/wisconsin/renting"
      },
      {
        "label": "Housing Law — Legal Action of Wisconsin",
        "url": "https://www.legalaction.org/services/housing-law"
      }
    ],
    "learnMoreUrl": "https://dwd.wisconsin.gov/er/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WI",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony wisconsin wi",
    "summary": "Wisconsin has stronger-than-average employment protections for people with arrest and conviction records. Under the Wisconsin Fair Employment Act, employers generally cannot deny work based on a conviction unless it is substantially related to the job. Wisconsin state employment also follows a ban-the-box approach on initial applications.",
    "resources": [
      {
        "label": "Wisconsin Arrest and Conviction Record Rights — DWD",
        "url": "https://dwd.wisconsin.gov/er/civil-rights/arrest-conviction/"
      },
      {
        "label": "Wisconsin DOC — Reentry Unit",
        "url": "https://doc.wi.gov/Pages/Reentry.aspx"
      },
      {
        "label": "Legal Tune Up — Employment and Record Help",
        "url": "https://legaltuneup.org/"
      }
    ],
    "learnMoreUrl": "https://dwd.wisconsin.gov/er/civil-rights/arrest-conviction/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WI",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop wisconsin wi",
    "summary": "Wisconsin residents have full Fourth and Fifth Amendment protections during police encounters. You have the right to remain silent, ask if you are free to leave, and refuse consent to a search in many situations. The ACLU of Wisconsin provides know-your-rights guidance, and the Department of Justice accepts civil-rights complaints.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Wisconsin",
        "url": "https://www.aclu-wi.org/en/know-your-rights"
      },
      {
        "label": "Wisconsin Department of Justice",
        "url": "https://www.doj.state.wi.us/"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.aclu-wi.org/en/know-your-rights",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WI",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment wisconsin wi",
    "summary": "Wisconsin community supervision is managed through the Division of Community Corrections. People on parole or extended supervision must follow release rules, report to supervising agents, and comply with treatment or employment requirements. Violations can result in revocation proceedings and return to custody.",
    "resources": [
      {
        "label": "Wisconsin DOC — Division of Community Corrections",
        "url": "https://doc.wi.gov/Pages/AboutDOC/CommunityCorrections.aspx"
      },
      {
        "label": "Wisconsin DOC — Reentry Unit",
        "url": "https://doc.wi.gov/Pages/Reentry.aspx"
      },
      {
        "label": "Wisconsin Legislature — Community Supervision Statutes",
        "url": "https://docs.legis.wisconsin.gov/statutes/statutes/304/078"
      }
    ],
    "learnMoreUrl": "https://doc.wi.gov/Pages/AboutDOC/CommunityCorrections.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WI",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting wisconsin wi",
    "summary": "Wisconsin probation is supervised by community corrections agents under conditions ordered by the sentencing court. Requirements may include reporting, treatment, restitution, and employment obligations. Violations are addressed through revocation procedures and hearings under Wisconsin supervision rules.",
    "resources": [
      {
        "label": "Wisconsin DOC — Division of Community Corrections",
        "url": "https://doc.wi.gov/Pages/AboutDOC/CommunityCorrections.aspx"
      },
      {
        "label": "Wisconsin DOC — Reentry Unit",
        "url": "https://doc.wi.gov/Pages/Reentry.aspx"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://doc.wi.gov/Pages/AboutDOC/CommunityCorrections.aspx",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WY",
    "topicId": "voting",
    "label": "State Law",
    "keywords": "voting vote rights restoration felony disenfranchisement wyoming wy",
    "summary": "Wyoming automatically restores voting rights for people convicted of non-violent felonies since 2010 after completing their sentence. Those convicted before 2010 or of violent felonies must apply to the Wyoming Board of Parole or petition the Governor. You must re-register after restoration.",
    "resources": [
      {
        "label": "Wyoming Voting Rights Restoration — Secretary of State",
        "url": "https://sos.wyo.gov/Elections/Docs/VotingRightsRestoration.pdf"
      },
      {
        "label": "Wyoming Voting Rights — US Vote Foundation",
        "url": "https://www.usvotefoundation.org/voting-rights-restoration/wyoming"
      },
      {
        "label": "Wyoming Board of Parole — Rights Restoration",
        "url": "https://corrections.wyo.gov/board-of-parole"
      }
    ],
    "learnMoreUrl": "https://sos.wyo.gov/Elections/Docs/VotingRightsRestoration.pdf",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WY",
    "topicId": "expungement",
    "label": "State Law",
    "keywords": "expungement record sealing federal conviction clear criminal history wyoming wy",
    "summary": "Wyoming has limited expungement options. Non-conviction records can be expunged 180 days after dismissal of proceedings if no charges are pending. Conviction expungement is very limited. Contact Wyoming legal aid for your specific options and eligibility.",
    "resources": [
      {
        "label": "Wyoming Expungement Guide — Collateral Consequences Resource Center",
        "url": "https://ccresourcecenter.org/state-restoration-profiles/wyoming-restoration-of-rights-pardon-expungement-sealing/"
      },
      {
        "label": "Wyoming Statutes — Expungement (§ 7-13-1401)",
        "url": "https://law.justia.com/codes/wyoming/title-7/chapter-13/article-14/"
      },
      {
        "label": "Legal Help — Wyoming Legal Services",
        "url": "https://www.wyominglaw.org"
      }
    ],
    "learnMoreUrl": "https://ccresourcecenter.org/state-restoration-profiles/wyoming-restoration-of-rights-pardon-expungement-sealing/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WY",
    "topicId": "housing",
    "label": "State Law",
    "keywords": "housing rights fair housing act discrimination HUD rental felony wyoming wy",
    "summary": "Wyoming has no statewide fair chance housing law. Federal Fair Housing Act protections and HUD guidance on criminal records apply to landlords statewide. The Wyoming Community Development Authority and legal aid can assist with housing discrimination complaints.",
    "resources": [
      {
        "label": "Wyoming Community Development Authority — Housing",
        "url": "https://www.wyomingcda.com"
      },
      {
        "label": "Fair Housing — HUD Wyoming",
        "url": "https://www.hud.gov/states/wyoming/renting"
      },
      {
        "label": "Housing Help — Wyoming Legal Services",
        "url": "https://www.wyominglaw.org"
      }
    ],
    "learnMoreUrl": "https://www.hud.gov/states/wyoming/renting",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WY",
    "topicId": "employment",
    "label": "State Law",
    "keywords": "employment rights job work EEOC ban the box discrimination hiring felony wyoming wy",
    "summary": "Wyoming has no statewide ban-the-box law for private employers. Federal EEOC protections apply to all qualifying employers statewide. Wyoming Workforce Services provides job training, placement, and reentry employment support.",
    "resources": [
      {
        "label": "Wyoming Workforce Services — Job Seekers",
        "url": "https://wyomingworkforce.org/workers/"
      },
      {
        "label": "EEOC — Wyoming Charge Filing (Denver Office)",
        "url": "https://www.eeoc.gov/field/denver"
      },
      {
        "label": "Employment Rights — Wyoming Legal Services",
        "url": "https://www.wyominglaw.org"
      }
    ],
    "learnMoreUrl": "https://wyomingworkforce.org/workers/",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WY",
    "topicId": "police",
    "label": "State Law",
    "keywords": "police interactions fourth amendment search seizure miranda rights arrest stop wyoming wy",
    "summary": "Wyoming residents have full Fourth and Fifth Amendment protections during police interactions. You have the right to remain silent and to refuse a warrantless search. The Wyoming ACLU monitors civil rights in the state and provides know-your-rights resources.",
    "resources": [
      {
        "label": "Know Your Rights — ACLU of Wyoming",
        "url": "https://www.acluwy.org"
      },
      {
        "label": "Wyoming Attorney General — Civil Rights",
        "url": "https://ag.wyo.gov"
      },
      {
        "label": "Police Misconduct Complaint — DOJ",
        "url": "https://www.justice.gov/crt/how-file-complaint"
      }
    ],
    "learnMoreUrl": "https://www.acluwy.org",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WY",
    "topicId": "parole",
    "label": "State Supervision Law",
    "keywords": "parole federal supervised release conditions search officer rights fourth amendment wyoming wy",
    "summary": "Wyoming parole is administered by the Wyoming Board of Parole. Conditions are set at release and vary by case. The Department of Corrections supervises parolees. Wyoming also uses the Board of Parole for rights restoration for qualifying felony offenders.",
    "resources": [
      {
        "label": "Wyoming Board of Parole",
        "url": "https://corrections.wyo.gov/board-of-parole"
      },
      {
        "label": "Wyoming DOC — Reentry and Community Supervision",
        "url": "https://corrections.wyo.gov/probation-and-parole"
      },
      {
        "label": "Parole Rights — Wyoming Legal Services",
        "url": "https://www.wyominglaw.org"
      }
    ],
    "learnMoreUrl": "https://corrections.wyo.gov/board-of-parole",
    "reviewStatus": "reviewed"
  },
  {
    "jurisdiction": "state",
    "stateCode": "WY",
    "topicId": "probation",
    "label": "State Supervision Law",
    "keywords": "probation federal conditions violation search officer rights reporting wyoming wy",
    "summary": "Wyoming probation is supervised by the Department of Corrections through probation and parole officers. Conditions are set by the sentencing court. Wyoming has drug courts and mental health courts that provide alternative supervision tracks for eligible individuals.",
    "resources": [
      {
        "label": "Wyoming DOC — Probation and Parole Division",
        "url": "https://corrections.wyo.gov/probation-and-parole"
      },
      {
        "label": "Wyoming Drug Courts — Supreme Court",
        "url": "https://www.courts.state.wy.us/court-programs/drug-courts/"
      },
      {
        "label": "ACLU — Probation and Parole Rights",
        "url": "https://www.aclu.org/know-your-rights/probation-and-parole"
      }
    ],
    "learnMoreUrl": "https://corrections.wyo.gov/probation-and-parole",
    "reviewStatus": "reviewed"
  }
] satisfies StateTopicResourceEntry[];
