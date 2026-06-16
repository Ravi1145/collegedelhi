/**
 * SEO Keyword Cluster Map — CollegeDelhi vs Shiksha / CollegeDunia
 *
 * Each cluster has a pillar page + supporting spoke pages + target keywords.
 * Use this to drive new page creation and internal-linking decisions.
 *
 * Monthly search volume (MSV) sourced from Ahrefs / Google Keyword Planner estimates.
 */

export interface KeywordCluster {
  id: string
  pillarPage: string          // canonical URL of the pillar
  pillarKeyword: string       // primary keyword for the pillar
  msv: number                 // estimated monthly searches (India)
  difficulty: "low" | "medium" | "high"
  spokePages: { url: string; keyword: string; msv: number }[]
  interlinks: string[]        // other pillar IDs to cross-link TO
  status: "live" | "planned" | "partial"
}

export const keywordClusters: KeywordCluster[] = [

  // ── ENGINEERING ──────────────────────────────────────────────────────────────
  {
    id: "engineering-delhi",
    pillarPage: "/engineering-colleges-delhi",
    pillarKeyword: "engineering colleges in Delhi",
    msv: 22000,
    difficulty: "high",
    spokePages: [
      { url: "/btech-colleges-delhi",                            keyword: "btech colleges delhi",                    msv: 12000 },
      { url: "/top-engineering-colleges-delhi",                  keyword: "top engineering colleges delhi",          msv: 9500 },
      { url: "/top-10-engineering-colleges-in-delhi",            keyword: "top 10 engineering colleges in delhi",   msv: 7800 },
      { url: "/government-colleges-delhi",                       keyword: "government engineering colleges delhi",   msv: 6200 },
      { url: "/private-engineering-colleges-delhi",              keyword: "private engineering colleges delhi",      msv: 5400 },
      { url: "/jee-colleges-delhi",                              keyword: "jee main colleges delhi",                 msv: 8800 },
      { url: "/engineering-colleges-delhi-placement",            keyword: "engineering colleges delhi placement",    msv: 3200 },
      { url: "/low-fees-engineering-colleges-delhi",             keyword: "low fees engineering colleges delhi",     msv: 4100 },
      { url: "/engineering-admission-delhi-without-jee",         keyword: "engineering admission delhi without jee", msv: 2900 },
      { url: "/direct-admission-engineering-colleges-delhi",     keyword: "direct admission engineering delhi",      msv: 2300 },
      { url: "/computer-engineering-colleges-delhi",             keyword: "computer engineering colleges delhi",     msv: 5600 },
      { url: "/mechanical-engineering-colleges-delhi",           keyword: "mechanical engineering colleges delhi",   msv: 3800 },
      { url: "/ipu-colleges-delhi",                              keyword: "ip university engineering colleges",      msv: 9200 },
      { url: "/mtech-colleges-delhi",                            keyword: "mtech colleges delhi",                    msv: 4000 },
      { url: "/engineering-colleges-noida",                      keyword: "engineering colleges noida",              msv: 7200 },
      { url: "/engineering-colleges-delhi-scholarship",          keyword: "engineering scholarship delhi colleges",  msv: 1800 },
      { url: "/cet-colleges-delhi",                              keyword: "delhi cet colleges list",                 msv: 6100 },
    ],
    interlinks: ["mba-delhi", "government-delhi", "comparison"],
    status: "live",
  },

  // ── MBA / MANAGEMENT ─────────────────────────────────────────────────────────
  {
    id: "mba-delhi",
    pillarPage: "/mba-colleges-delhi",
    pillarKeyword: "MBA colleges in Delhi",
    msv: 18000,
    difficulty: "high",
    spokePages: [
      { url: "/best-mba-colleges-delhi",                keyword: "best mba colleges delhi",                 msv: 14000 },
      { url: "/top-10-mba-colleges-in-delhi",           keyword: "top 10 mba colleges delhi",              msv: 6200 },
      { url: "/pgdm-colleges-delhi",                    keyword: "pgdm colleges delhi",                     msv: 7800 },
      { url: "/cat-colleges-delhi",                     keyword: "cat colleges delhi",                      msv: 9400 },
      { url: "/low-fees-mba-colleges-delhi",            keyword: "low fees mba colleges delhi",             msv: 4200 },
      { url: "/mba-colleges-delhi-placement",           keyword: "mba colleges delhi placement",            msv: 3600 },
      { url: "/mba-admission-delhi-without-cat",        keyword: "mba admission delhi without cat",         msv: 5100 },
      { url: "/private-mba-colleges-delhi",             keyword: "private mba colleges delhi",              msv: 4400 },
      { url: "/direct-admission-mba-colleges-delhi",    keyword: "direct admission mba colleges delhi",     msv: 2800 },
      { url: "/mba-colleges-noida",                     keyword: "mba colleges noida",                      msv: 6100 },
      { url: "/mba-colleges-delhi-scholarship",         keyword: "mba scholarship delhi colleges",          msv: 1600 },
    ],
    interlinks: ["engineering-delhi", "comparison", "fees-tools"],
    status: "live",
  },

  // ── MEDICAL ──────────────────────────────────────────────────────────────────
  {
    id: "medical-delhi",
    pillarPage: "/medical-colleges-delhi",
    pillarKeyword: "medical colleges in Delhi",
    msv: 14000,
    difficulty: "high",
    spokePages: [
      { url: "/mbbs-colleges-delhi",          keyword: "mbbs colleges delhi",           msv: 12000 },
      { url: "/top-10-medical-colleges-in-delhi", keyword: "top 10 medical colleges delhi", msv: 5400 },
      { url: "/neet-colleges-delhi",          keyword: "neet colleges delhi",            msv: 8800 },
      { url: "/nursing-colleges-delhi",       keyword: "nursing colleges delhi",         msv: 3500 },
      { url: "/pharmacy-colleges-delhi",      keyword: "pharmacy colleges delhi",        msv: 4200 },
    ],
    interlinks: ["government-delhi", "medical-comparison"],
    status: "live",
  },

  // ── GOVERNMENT ───────────────────────────────────────────────────────────────
  {
    id: "government-delhi",
    pillarPage: "/government-colleges-delhi",
    pillarKeyword: "government colleges in Delhi",
    msv: 11000,
    difficulty: "medium",
    spokePages: [
      { url: "/du-colleges-delhi",            keyword: "du colleges delhi list",          msv: 12000 },
      { url: "/ipu-colleges-delhi",           keyword: "ip university colleges delhi",    msv: 9200 },
      { url: "/naac-a-plus-colleges-delhi",   keyword: "naac a+ colleges delhi",          msv: 4800 },
      { url: "/nirf-insights",                keyword: "nirf ranked colleges delhi",      msv: 3200 },
      { url: "/colleges-in-delhi-with-hostel",keyword: "colleges delhi with hostel",      msv: 3100 },
      { url: "/low-fee-colleges-delhi",       keyword: "low fee colleges delhi",          msv: 6800 },
    ],
    interlinks: ["engineering-delhi", "mba-delhi", "du-cluster"],
    status: "live",
  },

  // ── DU CLUSTER ───────────────────────────────────────────────────────────────
  {
    id: "du-cluster",
    pillarPage: "/du-colleges-delhi",
    pillarKeyword: "Delhi University colleges list 2026",
    msv: 12000,
    difficulty: "high",
    spokePages: [
      { url: "/girls-colleges-delhi",         keyword: "girls colleges delhi du",         msv: 5500 },
      { url: "/arts-colleges-delhi",          keyword: "arts colleges delhi",              msv: 4100 },
      { url: "/science-colleges-delhi",       keyword: "science colleges delhi",           msv: 3800 },
      { url: "/commerce-colleges-delhi",      keyword: "commerce colleges delhi",          msv: 5200 },
      { url: "/bcom-colleges-delhi",          keyword: "bcom colleges delhi",              msv: 8000 },
      { url: "/bca-colleges-delhi",           keyword: "bca colleges delhi",               msv: 7600 },
      { url: "/bba-colleges-delhi",           keyword: "bba colleges delhi",               msv: 8400 },
      { url: "/bsc-it-colleges-delhi",        keyword: "bsc it colleges delhi",            msv: 3200 },
    ],
    interlinks: ["government-delhi", "comparison", "girls-colleges"],
    status: "live",
  },

  // ── LOCATION: NCR ────────────────────────────────────────────────────────────
  {
    id: "ncr-location",
    pillarPage: "/colleges-in-delhi",
    pillarKeyword: "colleges in Delhi NCR",
    msv: 28000,
    difficulty: "high",
    spokePages: [
      { url: "/colleges-greater-noida",       keyword: "colleges in greater noida",       msv: 9800 },
      { url: "/colleges-gurugram",            keyword: "colleges in gurugram",             msv: 7200 },
      { url: "/engineering-colleges-noida",   keyword: "engineering colleges noida",       msv: 7200 },
      { url: "/mba-colleges-noida",           keyword: "mba colleges noida",               msv: 6100 },
      { url: "/bba-colleges-noida",           keyword: "bba colleges noida",               msv: 3800 },
      { url: "/bca-colleges-noida",           keyword: "bca colleges noida",               msv: 3400 },
    ],
    interlinks: ["engineering-delhi", "mba-delhi", "area-pages"],
    status: "live",
  },

  // ── AREA PAGES (Delhi localities) ────────────────────────────────────────────
  {
    id: "area-pages",
    pillarPage: "/colleges-in-delhi",
    pillarKeyword: "colleges in Delhi by area",
    msv: 5000,
    difficulty: "low",
    spokePages: [
      { url: "/colleges-south-delhi",         keyword: "colleges south delhi",             msv: 2800 },
      { url: "/colleges-north-delhi",         keyword: "colleges north delhi",             msv: 2200 },
      { url: "/colleges-dwarka-delhi",        keyword: "colleges in dwarka delhi",         msv: 3100 },
      { url: "/colleges-rohini-delhi",        keyword: "colleges in rohini delhi",         msv: 2400 },
      { url: "/colleges-east-delhi",          keyword: "colleges east delhi",              msv: 1800 },
      { url: "/colleges-janakpuri-delhi",     keyword: "colleges janakpuri delhi",         msv: 1500 },
      { url: "/colleges-pitampura-delhi",     keyword: "colleges pitampura delhi",         msv: 1200 },
      { url: "/colleges-vasant-kunj-delhi",   keyword: "colleges vasant kunj delhi",       msv: 900 },
    ],
    interlinks: ["ncr-location", "government-delhi"],
    status: "live",
  },

  // ── COMPARISON ───────────────────────────────────────────────────────────────
  {
    id: "comparison",
    pillarPage: "/compare",
    pillarKeyword: "compare colleges Delhi",
    msv: 8000,
    difficulty: "medium",
    spokePages: [
      { url: "/dtu-vs-nsut",                  keyword: "dtu vs nsut",                      msv: 8200 },
      { url: "/dtu-vs-iiit-delhi",            keyword: "dtu vs iiit delhi",                msv: 4800 },
      { url: "/fms-delhi-vs-mdi-gurgaon",     keyword: "fms delhi vs mdi gurgaon",         msv: 3200 },
      { url: "/miranda-house-vs-lsr",         keyword: "miranda house vs lsr",             msv: 4100 },
      { url: "/srcc-vs-hindu-college",        keyword: "srcc vs hindu college",            msv: 5800 },
      { url: "/compare/dtu-delhi-technological-university-vs-nsut-delhi", keyword: "dtu vs nsut comparison", msv: 2000 },
      { url: "/compare/iit-delhi-vs-dtu-delhi-technological-university", keyword: "iit delhi vs dtu",         msv: 5000 },
      { url: "/compare/fms-delhi-faculty-management-studies-vs-mdi-gurgaon-management-development-institute", keyword: "fms vs mdi", msv: 1500 },
    ],
    interlinks: ["engineering-delhi", "mba-delhi", "du-cluster"],
    status: "partial",
  },

  // ── FEES & TOOLS ─────────────────────────────────────────────────────────────
  {
    id: "fees-tools",
    pillarPage: "/colleges-delhi-fees",
    pillarKeyword: "college fees in Delhi 2026",
    msv: 9200,
    difficulty: "medium",
    spokePages: [
      { url: "/delhi-college-fees-calculator",        keyword: "delhi college fees calculator",       msv: 2100 },
      { url: "/delhi-college-placement-comparator",   keyword: "college placement comparator delhi",  msv: 1200 },
      { url: "/roi-calculator",                       keyword: "college roi calculator",              msv: 1400 },
      { url: "/delhi-colleges-comparison-engineering-mba", keyword: "engineering vs mba delhi colleges", msv: 1800 },
      { url: "/low-fee-colleges-delhi",               keyword: "lowest fee colleges delhi",           msv: 6800 },
    ],
    interlinks: ["engineering-delhi", "mba-delhi", "scholarships"],
    status: "live",
  },

  // ── SCHOLARSHIPS ─────────────────────────────────────────────────────────────
  {
    id: "scholarships",
    pillarPage: "/scholarships",
    pillarKeyword: "scholarships for Delhi college students 2026",
    msv: 6400,
    difficulty: "medium",
    spokePages: [
      { url: "/engineering-colleges-delhi-scholarship", keyword: "engineering college scholarship delhi", msv: 1800 },
      { url: "/mba-colleges-delhi-scholarship",         keyword: "mba scholarship delhi",                msv: 1600 },
      { url: "/low-fee-colleges-delhi",                 keyword: "low fee colleges delhi",               msv: 6800 },
    ],
    interlinks: ["government-delhi", "engineering-delhi", "mba-delhi"],
    status: "live",
  },

  // ── ADMISSION GUIDES ─────────────────────────────────────────────────────────
  {
    id: "admission-guides",
    pillarPage: "/delhi-college-admission-calendar-2026",
    pillarKeyword: "Delhi college admission 2026",
    msv: 7200,
    difficulty: "medium",
    spokePages: [
      { url: "/delhi-admission-deadline-tracker-2026", keyword: "delhi admission deadline 2026",       msv: 3100 },
      { url: "/cutoffs",                               keyword: "delhi college cutoffs 2026",          msv: 5400 },
      { url: "/predictor",                             keyword: "college predictor delhi",             msv: 4200 },
    ],
    interlinks: ["engineering-delhi", "mba-delhi", "medical-delhi"],
    status: "live",
  },

  // ── PLANNED: HIGH-VOLUME GAPS ─────────────────────────────────────────────────
  // These are keywords Shiksha/CollegeDunia rank #1 for that we don't have pages for yet.
  {
    id: "placement-rankings",
    pillarPage: "/top-placement-colleges-delhi",
    pillarKeyword: "top placement colleges Delhi 2026",
    msv: 8400,
    difficulty: "medium",
    spokePages: [
      { url: "/engineering-colleges-delhi-placement", keyword: "engineering colleges delhi highest placement", msv: 3200 },
      { url: "/mba-colleges-delhi-placement",         keyword: "mba colleges delhi highest placement",        msv: 3600 },
    ],
    interlinks: ["engineering-delhi", "mba-delhi", "fees-tools"],
    status: "planned",
  },
  {
    id: "exam-wise",
    pillarPage: "/exams",
    pillarKeyword: "Delhi college entrance exams 2026",
    msv: 12000,
    difficulty: "medium",
    spokePages: [
      { url: "/jee-colleges-delhi",   keyword: "jee main colleges delhi 2026",  msv: 8800 },
      { url: "/neet-colleges-delhi",  keyword: "neet colleges delhi 2026",      msv: 8800 },
      { url: "/cat-colleges-delhi",   keyword: "cat mba colleges delhi",        msv: 9400 },
      { url: "/cet-colleges-delhi",   keyword: "delhi cet colleges",            msv: 6100 },
    ],
    interlinks: ["engineering-delhi", "mba-delhi", "medical-delhi"],
    status: "live",
  },
]

// ── PROGRAMMATIC SEO ROUTES ───────────────────────────────────────────────────
// These are route templates that generate 100s of pages automatically.
// Priority order = ROI (traffic × difficulty^-1).

export const programmaticRoutes = [
  {
    route: "/compare/[college1]-vs-[college2]",
    template: "Dynamic comparison page",
    pageCount: "~1,200 (50×48/2 combinations)",
    topKeywords: ["DTU vs NSUT", "IIT Delhi vs DTU", "FMS vs MDI", "Miranda House vs LSR"],
    status: "live",
    priority: 1,
  },
  {
    route: "/colleges/[slug]/fees",
    template: "Per-college fees page",
    pageCount: "~100 pages",
    topKeywords: ["DTU fees 2026", "AIIMS fees structure", "Amity University fees"],
    status: "planned",
    priority: 2,
  },
  {
    route: "/colleges/[slug]/placements",
    template: "Per-college placement page",
    pageCount: "~100 pages",
    topKeywords: ["DTU placement 2026", "FMS placement stats", "IMI Delhi placement"],
    status: "planned",
    priority: 3,
  },
  {
    route: "/colleges/[slug]/cutoff",
    template: "Per-college cutoff page",
    pageCount: "~100 pages",
    topKeywords: ["DTU JEE cutoff 2026", "AIIMS NEET cutoff", "FMS CAT cutoff"],
    status: "planned",
    priority: 4,
  },
  {
    route: "/cutoffs/[exam]/[college]",
    template: "Exam × college cutoff (already exists)",
    pageCount: "~300 pages",
    topKeywords: ["JEE Main DTU cutoff 2026", "NEET AIIMS cutoff 2026"],
    status: "live",
    priority: 5,
  },
  {
    route: "/city/[city]/[stream]",
    template: "City × stream (already exists)",
    pageCount: "~40 pages",
    topKeywords: ["MBA colleges Delhi", "Engineering colleges Noida"],
    status: "live",
    priority: 6,
  },
]

// ── INTERNAL LINK HUB MAP ────────────────────────────────────────────────────
// For each URL, which pages should be in its "Related Guides" section.

export const internalLinkHub: Record<string, string[]> = {
  "/engineering-colleges-delhi": ["/btech-colleges-delhi", "/jee-colleges-delhi", "/ipu-colleges-delhi", "/top-10-engineering-colleges-in-delhi", "/computer-engineering-colleges-delhi", "/government-colleges-delhi", "/low-fees-engineering-colleges-delhi", "/dtu-vs-nsut"],
  "/mba-colleges-delhi": ["/best-mba-colleges-delhi", "/cat-colleges-delhi", "/pgdm-colleges-delhi", "/low-fees-mba-colleges-delhi", "/mba-admission-delhi-without-cat", "/fms-delhi-vs-mdi-gurgaon"],
  "/medical-colleges-delhi": ["/mbbs-colleges-delhi", "/neet-colleges-delhi", "/nursing-colleges-delhi", "/pharmacy-colleges-delhi", "/top-10-medical-colleges-in-delhi"],
  "/du-colleges-delhi": ["/girls-colleges-delhi", "/bcom-colleges-delhi", "/arts-colleges-delhi", "/science-colleges-delhi", "/miranda-house-vs-lsr", "/srcc-vs-hindu-college"],
  "/ipu-colleges-delhi": ["/engineering-colleges-delhi", "/btech-colleges-delhi", "/mba-colleges-delhi", "/bca-colleges-delhi", "/bba-colleges-delhi"],
  "/colleges-greater-noida": ["/engineering-colleges-noida", "/mba-colleges-noida", "/bba-colleges-noida", "/bca-colleges-noida"],
  "/compare": ["/dtu-vs-nsut", "/dtu-vs-iiit-delhi", "/fms-delhi-vs-mdi-gurgaon", "/miranda-house-vs-lsr", "/srcc-vs-hindu-college"],
}
