import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "FMS Delhi vs IIFT Delhi 2026 | Fees, Cutoff, Placement & Which to Choose",
  description: "FMS Delhi vs IIFT Delhi comparison 2026: FMS ₹55K vs IIFT ₹18.5L fees, FMS 99%ile vs IIFT exam cutoff, FMS ₹32 LPA vs IIFT ₹22 LPA avg placement. Which is better?",
  path: "/fms-delhi-vs-iift-delhi",
  keywords: [
    "fms delhi vs iift delhi",
    "fms vs iift comparison",
    "fms delhi vs iift which is better",
    "fms iift comparison 2026",
    "fms delhi placement vs iift placement",
    "fms delhi fees vs iift fees",
    "fms vs iift cutoff",
    "should i choose fms or iift",
    "fms delhi vs iift delhi ranking",
    "iift vs fms salary",
    "fms or iift for mba",
    "fms delhi vs iift delhi review",
    "fms delhi iift delhi difference",
    "best mba college delhi fms or iift",
    "fms vs iift which is better for finance",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "FMS Delhi — Faculty of Management Studies, University of Delhi", location: "University Enclave, Chhatra Marg, North Delhi", naac: "A++", fees: "₹55,000 total (2 years)", placement: "₹32 LPA avg", slug: "fms-delhi-faculty-management-studies" },
  { name: "IIFT Delhi — Indian Institute of Foreign Trade", location: "B-21, Qutab Institutional Area, New Delhi", naac: "A++", fees: "₹18,50,000 total (2 years)", placement: "₹22 LPA avg", slug: "iift-delhi-indian-institute-foreign-trade" },
]

const faqs = [
  { q: "Which is better — FMS Delhi or IIFT Delhi?", a: "FMS Delhi is better than IIFT Delhi for overall MBA quality, placement, and value: FMS avg placement ₹32 LPA vs IIFT ₹22 LPA. FMS total fees ₹55K vs IIFT ₹18.5L — FMS is 33× cheaper. FMS is NIRF #4 in management, IIFT is NIRF #7. However, IIFT is better for International Business specialization — if you specifically want trade finance, EXIM policy, or WTO-related careers, IIFT's dedicated IB curriculum and alumni network in global trade companies is unmatched. Choose FMS if you are open to all career paths (consulting, FMCG, IB, tech). Choose IIFT only if International Business is your definite career target." },
  { q: "What is the cutoff for FMS Delhi vs IIFT Delhi?", a: "FMS Delhi cutoff 2026 (expected): CAT 99+ percentile overall. Section-wise: Verbal 98+ %ile, Quantitative 98+ %ile, DILR 97+ %ile. FMS shortlists ~500 candidates for 220 seats. Selection: CAT score 100% for shortlisting → Written Test + PI at FMS. IIFT Delhi cutoff 2026 (expected): IIFT exam (separate from CAT, December 2025) — Overall 47–50 marks out of 100. Section minimums: Verbal 8–10, Quant 12–15, DILR 10–12, GK 6–8. Negative marking 1/3. CAT equivalent: 97–99 percentile. Both are extremely competitive — FMS requires a higher overall CAT score than IIFT in equivalent terms." },
  { q: "What is the fee difference between FMS Delhi and IIFT Delhi?", a: "FMS Delhi total fees 2026: ₹55,000 for the entire 2-year MBA programme — one of the cheapest MBAs in the world at this quality level. IIFT Delhi total fees 2026: ₹18,50,000 (₹18.5L) for the 2-year MBA-IB programme. Difference: ₹17,95,000 (₹17.95L). FMS is a government-funded institution under Delhi University — fees are subsidized by the government. IIFT is also a government institution (under Ministry of Commerce) but charges market-rate fees for its specialized programme. If shortlisted by both: the fee difference alone would pay for a BMW 3-Series or a flat down payment in Delhi — choose FMS unless IIFT's IB specialization is your definitive career goal." },
  { q: "Which has better placement — FMS Delhi or IIFT Delhi?", a: "FMS Delhi placement 2024–25: Average ₹32 LPA, Median ₹28 LPA, Top package ₹1+ Crore (international roles). Recruiters: McKinsey, BCG, Bain, Goldman Sachs, Amazon, Google, HUL, P&G, Axis Capital. IIFT Delhi placement 2024–25: Average ₹22 LPA, Median ₹20 LPA, Top package ₹50+ LPA (international trade role). Recruiters: Standard Chartered, HSBC, Amazon Global Selling, EXIM Bank, Ministry of Commerce, DHL, Maersk, Olam International. FMS wins on overall placement by avg and median. IIFT wins specifically for international business, trade finance, and global supply chain roles — sectors that don't recruit heavily at FMS." },
  { q: "Can I apply to both FMS Delhi and IIFT Delhi simultaneously?", a: "Yes — you can and should apply to both FMS Delhi and IIFT Delhi if your target is top Delhi MBA. FMS requires CAT 2025 score (apply at fms.edu, December 2025–January 2026). IIFT requires the IIFT 2025 exam (separate registration at iift.ac.in, October–November 2025, exam December 2025). Both exams/applications run on different schedules — there is no overlap. Most top candidates apply to FMS, IIFT, MDI, IIMs (CAT), and 2–3 other programmes simultaneously. If you get both FMS and IIFT offers: choose FMS unless International Business is your definitive 5-year career plan." },
]

export default function FMSvsIIFTPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "FMS Delhi vs IIFT Delhi", url: "/fms-delhi-vs-iift-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "FMS Delhi vs IIFT Delhi — Head to Head Comparison 2026",
    numberOfItems: colleges.length,
    itemListElement: colleges.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `https://www.collegedelhi.com/colleges/${c.slug}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <SEOLandingPage
        breadcrumb={[
          { label: "MBA Colleges Delhi", href: "/mba-colleges-delhi" },
          { label: "FMS Delhi vs IIFT Delhi", href: "/fms-delhi-vs-iift-delhi" },
        ]}
        h1="FMS Delhi vs IIFT Delhi 2026 — Fees, Cutoff, Placement & Which to Choose"
        subtitle="FMS Delhi (NIRF #4, ₹55K fees, ₹32 LPA avg) vs IIFT Delhi (NIRF #7, ₹18.5L fees, ₹22 LPA avg). Both are government-funded, NAAC A++ rated Delhi B-schools. FMS wins on value and overall placement. IIFT wins on International Business specialization. Full head-to-head comparison."
        heroStats={[
          { value: "FMS ₹32 LPA", label: "vs IIFT ₹22 LPA Avg Placement" },
          { value: "FMS ₹55K", label: "vs IIFT ₹18.5L Total Fees" },
          { value: "FMS NIRF #4", label: "vs IIFT NIRF #7" },
          { value: "Both NAAC A++", label: "Government Institutions, Delhi" },
        ]}
        introHeading="FMS Delhi vs IIFT Delhi 2026 — Complete Comparison Guide"
        introParagraphs={[
          "FMS Delhi and IIFT Delhi are Delhi's two most prestigious government-funded B-schools — both NAAC A++, both in top-10 NIRF management rankings, both with exceptional alumni networks. The choice between them comes down to one fundamental question: do you have a definitive interest in International Business? If yes, IIFT's specialized MBA-IB curriculum, EXIM policy connections, and trade finance alumni network are unmatched in India. If your career interests are broader (consulting, FMCG, general management, finance, tech), FMS Delhi's superior placement (₹32 LPA avg vs ₹22 LPA) and 33× lower fees (₹55K vs ₹18.5L) make it a clear winner.",
          "The entrance routes are completely different. FMS requires CAT 2025 (99+ percentile) — the hardest single-exam cutoff in India. IIFT requires the separate IIFT exam (December 2025) — 110 questions in 120 minutes with GK as a differentiating section. Most top candidates prepare for both simultaneously: appearing for CAT in November and IIFT in December. If you clear both, you'll have 4–6 weeks to decide — a genuinely enviable problem.",
          "Campus experience also differs significantly. FMS is a department of Delhi University — no dedicated B-school campus, classes held in North Campus buildings. Strong academic culture, close proximity to Delhi University's broader intellectual ecosystem. IIFT Delhi is a standalone campus in Qutab Institutional Area — residential hostel, dedicated B-school feel, cohort of 220 students exclusively focused on international business. Campus life at IIFT is more immersive; academic experience at FMS is more diverse.",
        ]}
        colleges={colleges}
        whyHeading="FMS Delhi vs IIFT Delhi — Head-to-Head on Key Factors"
        whyPoints={[
          { title: "Fees: FMS Wins Decisively (33× Cheaper)", description: "FMS Delhi total MBA fees: ₹55,000 for 2 years — one of the cheapest top-MBA programmes in the world. IIFT Delhi total MBA-IB fees: ₹18,50,000 (₹18.5L). The ₹17.95L difference is enormous. At an average pre-MBA salary of ₹8 LPA, ₹18L represents 2.25 years of gross salary. Even accounting for FMS's higher placement (₹32 LPA vs ₹22 LPA avg), the fee difference takes years to recover at IIFT unless you immediately land a top international role. If you receive both offers, FMS is the financially dominant choice in almost all scenarios." },
          { title: "Placement: FMS Leads Overall, IIFT Leads in IB", description: "FMS Delhi 2025: avg ₹32 LPA, median ₹28 LPA, top ₹1+ Cr. McKinsey, BCG, Bain, Goldman Sachs, Google, Amazon, HUL, P&G recruit. IIFT Delhi 2025: avg ₹22 LPA, median ₹20 LPA, top ₹50+ LPA. Standard Chartered, HSBC, Amazon Global Selling, EXIM Bank, Olam, Maersk, DHL recruit. FMS leads in overall placement by ₹10 LPA avg. IIFT leads in international trade and trade finance placement — sectors that simply don't recruit at FMS. If your target is Morgan Stanley trade finance Singapore or Standard Chartered trade finance London, IIFT alumni will help you more than FMS alumni." },
          { title: "Specialization: IIFT Wins for International Business", description: "FMS Delhi offers a general MBA with Finance, Marketing, HR, Operations specializations selected in Semester 3. No dedicated International Business track. IIFT Delhi's entire MBA-IB curriculum is International Business — EXIM policy, WTO, country studies (China, US, EU), forex and treasury, trade finance, customs law. If your 5-year career plan involves working in global trade, international banking, or cross-border e-commerce: IIFT's curriculum specificity is a genuine advantage that FMS cannot replicate." },
          { title: "NIRF Ranking: FMS #4, IIFT #7", description: "NIRF Management Rankings 2024: FMS Delhi #4 (after IIM-A, IIM-B, IIM-C). IIFT Delhi #7 (after IIM-L, IIM-K). FMS consistently ranks higher than IIFT in NIRF, QS, and Outlook rankings. However, for International Business-specific rankings (no official India IB ranking), IIFT is universally considered #1 in India — its specialized IB focus gives it an unchallenged position in that domain." },
          { title: "Entrance Exam: Different Paths", description: "FMS: CAT 2025 (November) — requires 99+ percentile for shortlisting. Written test (90 minutes, English focus) + Personal Interview at FMS. Most selective in India by CAT cutoff. IIFT: IIFT exam (December 2025, iift.ac.in, October registration) — 110 MCQs, 120 minutes, GK section differentiates. CAT is not used for IIFT. Many candidates prepare for both simultaneously. If you score 99+ CAT: prioritize FMS application. If CAT is 95–98 %ile: IIFT (IIFT exam route) may be more accessible." },
          { title: "Campus & Culture: Different Vibes", description: "FMS Delhi: DU North Campus location, no dedicated B-school campus, shares facilities with Delhi University. Classes in FMS building (relatively small campus). Large Delhi University social ecosystem. FMS students integrate with DU's broader academic culture — law school, science faculty, arts faculty events. IIFT Delhi: standalone B-school campus in Qutab Institutional Area, residential hostel, cohort of 220 students only. More immersive B-school experience. Research centres (China Studies, ASEAN Studies, WTO Studies) on campus. Quieter, more academic environment." },
        ]}
        admissionHeading="How to Apply to Both FMS Delhi and IIFT Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Register for IIFT Exam First (October 2025)", description: "IIFT exam registration opens October 2025 at iift.ac.in. Register and pay ₹2,000 application fee. IIFT exam date: December 2025 (1–2 weeks before CAT). Start GK preparation specifically for IIFT from September 2025 — international trade news, WTO updates, India's FTAs, RBI forex policy. GK cutoff at IIFT (6–8 marks) eliminates many otherwise strong candidates. Prepare GK daily with Economic Times and Financial Express international trade coverage." },
          { step: "2", title: "Write CAT 2025 (November 2025) for FMS", description: "CAT 2025 registration: July–August 2025 at iimcat.ac.in. Exam: November 2025. For FMS: target 99+ percentile overall with 98+ in each section. FMS shortlisting is pure CAT score — no profile consideration at this stage. Write IIFT exam in December 2025 (2–3 weeks after CAT). Apply to FMS at fms.edu (December 2025–January 2026) using CAT score. Apply to IIFT through the IIFT exam portal simultaneously." },
          { step: "3", title: "FMS Selection Process — Written Test + PI", description: "FMS shortlist (January–February 2026): 500 candidates for 220 seats. Written Test at FMS Delhi campus: 90 minutes, English language comprehension and analytical essay. Personal Interview: 20–25 minutes with FMS faculty panel. PI covers: why FMS, career goals, work experience (if any), current affairs and business news, academic background. FMS PI is known for depth — expect follow-up questions on every answer. Prepare deeply on 2–3 work/academic projects you can discuss at length." },
          { step: "4", title: "IIFT Selection Process — GD + Essay + PI", description: "IIFT shortlist (January 2026): based on IIFT exam score with section-wise minimums. GD-Essay + PI at IIFT Delhi campus (February–March 2026). GD: 10–12 candidates, international business/current affairs topic (India's trade policy, WTO disputes, bilateral FTAs). Essay: 250 words in 15 minutes. PI: 20–25 minutes with IIFT faculty + industry expert. PI specifically tests: India's trade data, EXIM policy awareness, global economic geography, and motivation for International Business." },
          { step: "5", title: "Decision If You Receive Both Offers", description: "If you receive both FMS and IIFT offers (a realistic outcome for 99+ CAT scorers who also clear IIFT): choose FMS unless you have a specific International Business career plan. Decision framework: (1) Do you want to work in global trade, trade finance, or international marketing specifically? → IIFT. (2) Are you open to consulting, FMCG, investment banking, tech, or general management? → FMS (₹32 LPA avg, ₹17.95L cheaper). (3) Is cost a significant consideration? → FMS (₹55K vs ₹18.5L). The consensus among Delhi MBA alumni: if you're undecided about IB, FMS is the safer and better choice." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free FMS vs IIFT Guidance for Your Profile 2026"
        ctaSubtext="Tell us your CAT percentile, IIFT exam score (if taken), and target career — our counsellors will tell you which programme fits better and how to maximize your admission chances at both."
        relatedGuides={[
          { label: "FMS Delhi — ₹55K MBA Guide", href: "/fms-delhi", icon: "🎓" },
          { label: "IIFT Delhi — MBA International Business", href: "/iift-delhi", icon: "🌐" },
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "🏛️" },
          { label: "MDI Gurgaon — PGDM", href: "/mdi-gurgaon", icon: "📍" },
          { label: "FMS Delhi vs MDI Gurgaon", href: "/fms-delhi-vs-mdi-gurgaon", icon: "⚖️" },
          { label: "MBA in International Business Delhi", href: "/mba-in-international-business-delhi", icon: "🌐" },
          { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi", icon: "💹" },
          { label: "Government MBA Colleges Delhi", href: "/government-mba-colleges-delhi", icon: "🏛️" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "🏆" },
          { label: "MBA Colleges Delhi Placement", href: "/mba-colleges-delhi-placement", icon: "📈" },
        ]}
      />
    </>
  )
}
