import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "MBA in Banking & Finance Delhi 2026",
  description: "Best MBA Banking & Finance colleges in Delhi 2026: FMS, IIFT, MDI, FORE, IMI. Investment banking, trade finance, fintech careers. Salary ₹10–35 LPA. Full guide.",
  path: "/mba-in-banking-finance-delhi",
  keywords: [
    "mba in banking and finance colleges in delhi",
    "best mba banking finance delhi",
    "mba in banking delhi",
    "mba finance colleges delhi",
    "mba investment banking delhi",
    "mba banking finance salary delhi",
    "top mba finance colleges in delhi ncr",
    "mba in banking and finance admission delhi",
    "mba finance delhi 2026",
    "mba in financial services delhi",
    "mba banking sector delhi",
    "mba in banking finance fees delhi",
    "best college for mba in finance delhi",
    "mba corporate finance delhi",
    "mba in fintech delhi",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "FMS Delhi — MBA with Finance Specialization", location: "University Enclave, North Delhi", naac: "A++", fees: "₹55K total", placement: "₹32 LPA avg", slug: "fms-delhi-faculty-management-studies" },
  { name: "IIFT Delhi — MBA (International Business) with Trade Finance Track", location: "Qutab Institutional Area, New Delhi", naac: "A++", fees: "₹18.5L total", placement: "₹22 LPA avg", slug: "iift-delhi-indian-institute-foreign-trade" },
  { name: "MDI Gurgaon — PGDM with Finance Specialization", location: "MG Road, Gurgaon, Haryana", naac: "A+", fees: "₹22.5L total", placement: "₹26 LPA avg", slug: "mdi-gurgaon-management-development-institute" },
  { name: "IMT Ghaziabad — PGDM Finance Track", location: "Knowledge Park II, Ghaziabad", naac: "A+", fees: "₹17.6L total", placement: "₹14 LPA avg (Finance)", slug: "imt-ghaziabad-institute-management-technology" },
  { name: "FORE School of Management — PGDM Financial Management", location: "B-18, Qutab Institutional Area, New Delhi", naac: "A+", fees: "₹16.5L total", placement: "₹13.5 LPA avg", slug: "fore-school-of-management-pgdm-fm-delhi" },
  { name: "IMI Delhi — PGDM with Finance Specialization", location: "Qutab Institutional Area, New Delhi", naac: "A+", fees: "₹19.5L total", placement: "₹14 LPA avg", slug: "imi-delhi-international-management-institute" },
]

const faqs = [
  { q: "Which is the best college for MBA Banking and Finance in Delhi?", a: "FMS Delhi is the best college for MBA Banking and Finance in Delhi — ₹55K total fees, 99+ percentile CAT, ₹32 LPA avg placement, Goldman Sachs and investment banks recruit directly. For banking-focused placement: MDI Gurgaon (₹26 LPA avg, Axis Capital and HDFC AMC recruit) and IMT Ghaziabad (Goldman Sachs ops, Deutsche Bank analytics). FORE School PGDM Financial Management is the best option at 80–85 CAT percentile in Delhi. IIFT Delhi is unmatched for Trade Finance and International Banking careers." },
  { q: "What is the salary after MBA Banking and Finance in Delhi?", a: "MBA Banking and Finance salary in Delhi 2025: Investment Banking Analyst (Goldman Sachs, Morgan Stanley, Barclays) — ₹18–35 LPA. Credit Analyst (HDFC, ICICI, Axis) — ₹8–15 LPA. Equity Research Analyst (IIFL, Motilal Oswal, Emkay) — ₹8–16 LPA. Trade Finance Manager (HSBC, Standard Chartered) — ₹12–22 LPA. Risk Analyst (Big 4, banks) — ₹8–15 LPA. FinTech Product Manager (Razorpay, Paytm, PhonePe) — ₹12–22 LPA. Corporate Finance Manager (large conglomerates) — ₹10–18 LPA. FMS Delhi Finance graduates avg ₹28–35 LPA. MDI Finance avg ₹22–26 LPA." },
  { q: "What are the best MBA Finance careers in Delhi NCR?", a: "Top MBA Banking and Finance career paths in Delhi NCR 2026: Investment Banking (Kotak IB, Edelweiss, JM Financial, Barclays Delhi office) — highest paying, ₹18–35 LPA. Private Equity and Venture Capital (Chrys Capital, Sequoia Delhi office) — ₹15–30 LPA. Asset Management (HDFC AMC, SBI MF, Nippon India) — ₹10–20 LPA. Corporate Treasury (MNC Delhi offices) — ₹12–20 LPA. FinTech (PhonePe, Razorpay, BharatPe — all NCR-based) — ₹12–25 LPA. Banking Operations and Risk (all major banks have NCR ops centers) — ₹8–15 LPA. Delhi is India's second-largest financial center after Mumbai." },
  { q: "Is CFA useful with MBA Banking and Finance from Delhi?", a: "Yes — CFA (Chartered Financial Analyst) is highly valuable alongside MBA Finance from a Delhi B-school. CFA Level 1 alongside MBA Finance increases starting salary by 20–30% in investment banking, equity research, and portfolio management roles. FMS Delhi, MDI Gurgaon, and IMT Ghaziabad all have CFA prep programs integrated into their Finance curriculum. CFA Level 1 (June/December exam) can be completed during Semester 1–2 of MBA — timing aligns well. Investment banking, equity research, and asset management roles strongly prefer candidates with CFA alongside MBA." },
  { q: "What is the difference between MBA Finance and MBA Banking and Finance?", a: "MBA Finance covers general financial management — accounting, corporate finance, financial modelling, capital markets, and derivatives. MBA Banking and Finance is a subset/specialization focused specifically on banking operations, trade finance, credit analysis, and financial services industry. Most top Delhi B-schools (FMS, MDI, IMT, FORE) offer MBA Finance with banking electives — not a separate 'Banking and Finance' track. IIFT Delhi's MBA-IB has a dedicated Trade Finance track. For pure banking roles, MBA Finance from FMS/MDI + CFA is stronger than a dedicated 'Banking' MBA from a lower-ranked college." },
]

export default function MBABankingFinanceDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "MBA in Banking & Finance Delhi", url: "/mba-in-banking-finance-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best MBA Banking & Finance Colleges in Delhi 2026",
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
          { label: "MBA in Banking & Finance Delhi", href: "/mba-in-banking-finance-delhi" },
        ]}
        h1="Best MBA in Banking & Finance Colleges in Delhi 2026"
        subtitle="MBA Banking and Finance in Delhi opens doors to investment banking, trade finance, equity research, asset management, and FinTech careers. FMS Delhi (₹55K fees), MDI Gurgaon (₹26 LPA avg), and IIFT Delhi (Trade Finance) are the top picks. Compare colleges by cutoff, salary, and banking sector placement."
        heroStats={[
          { value: "₹32 LPA", label: "FMS Delhi Finance Avg Placement" },
          { value: "₹10–35 LPA", label: "Banking & Finance Salary Range" },
          { value: "6+", label: "Top Delhi B-Schools with Finance Tracks" },
          { value: "CAT 80–99%", label: "Cutoff Range by College" },
        ]}
        introHeading="MBA Banking & Finance in Delhi 2026 — Careers, Colleges & Admission"
        introParagraphs={[
          "MBA in Banking and Finance is one of the most sought-after specializations at Delhi B-schools — with India's second-largest financial center (after Mumbai) headquartered in Delhi NCR, the demand for finance MBA graduates is consistently high. Investment banks (Kotak IB, Edelweiss, Barclays), commercial banks (HDFC, ICICI, Axis, SBI), asset managers (HDFC AMC, SBI MF), and FinTech unicorns (Razorpay, PhonePe, Paytm — all NCR-based) recruit actively from Delhi B-schools.",
          "The best MBA Banking and Finance options in Delhi vary by target role: FMS Delhi (99+ CAT, ₹55K fees) is the top pick for investment banking and buy-side finance — Goldman Sachs, Barclays, and Kotak IB recruit from FMS. MDI Gurgaon (95+ CAT) offers the best structured Finance curriculum with Bloomberg terminal access. IIFT Delhi is unmatched for trade finance and international banking careers. For candidates with 80–85 CAT percentile, FORE Financial Management PGDM and IMT Ghaziabad Finance track are strong alternatives.",
          "Key differentiator in Delhi's finance job market: CFA alongside MBA Finance increases starting packages by 20–30% and opens investment banking and equity research roles that are otherwise competitive. All top Delhi B-schools — FMS, MDI, IMT, FORE — integrate CFA Level 1 preparation into their Finance curriculum. Candidates who complete CFA Level 1 by the end of MBA Semester 2 are significantly more competitive in finance placements.",
        ]}
        colleges={colleges}
        whyHeading="Why MBA Banking & Finance in Delhi NCR 2026?"
        whyPoints={[
          { title: "India's Second Financial Hub", description: "Delhi NCR is India's second-largest financial center — all major banks have large Delhi operations (SBI, HDFC, ICICI, Axis HQs or north India HQs in Delhi NCR). NSE and BSE have Delhi dealing rooms. 200+ NBFCs and FinTechs are based in Noida/Gurgaon. MBA Finance graduates have a 100+ company placement ecosystem within 30 km of Delhi B-schools." },
          { title: "FinTech Boom in Delhi NCR", description: "Delhi NCR's FinTech ecosystem rivals Bangalore: Paytm (Noida HQ), PhonePe (Gurgaon operations), Razorpay (Bangalore + Gurgaon), BharatPe (Delhi), MobiKwik (Gurgaon). FinTech Product Manager and Finance roles pay ₹12–25 LPA — comparable to traditional banking with faster growth. MBA Finance graduates from MDI and IMT Ghaziabad increasingly place in FinTech product roles." },
          { title: "Investment Banking Access", description: "Kotak Investment Banking, Edelweiss Financial Services, JM Financial, and ICICI Securities all have significant Delhi presence. International IBs (Goldman Sachs, Barclays, Deutsche Bank) have Delhi operations for analytics and risk. FMS Delhi and MDI Gurgaon's Finance placements include 10–15% investment banking roles annually — the best IB access in North India." },
          { title: "Bloomberg Terminal Training", description: "MDI Gurgaon and IMT Ghaziabad have Bloomberg terminal labs used daily by Finance students. Bloomberg training covers equity valuation (DCF, comparable), fixed income (duration, yield curves), commodities, and FX markets. Bloomberg certification (Bloomberg Market Concepts — BMC) is highly valued by asset managers and sell-side firms hiring MBA Finance graduates." },
          { title: "CFA Integration in Curriculum", description: "All top Delhi Finance MBA programmes integrate CFA Level 1 preparation — FMS (Finance elective covers CFA Level 1 topics), MDI (dedicated CFA prep sessions by faculty who are CFA charterholders), IMT Ghaziabad (Finance Club runs CFA prep). Students who complete CFA Level 1 by MBA Semester 2 receive 10–15% higher starting offers in investment banking and portfolio management roles." },
          { title: "Private Equity & Venture Capital Access", description: "Delhi NCR has a growing PE/VC ecosystem: ChrysCapital (Delhi HQ), Sequoia Capital India (Gurgaon), Blume Ventures, Matrix Partners India (Bangalore + Delhi). PE/VC analyst and associate roles are the highest-paying finance exit from Delhi MBA programmes — ₹20–40 LPA. FMS Delhi places 5–8% of Finance graduates in PE/VC annually, the highest among Delhi B-schools." },
        ]}
        admissionHeading="MBA Banking & Finance Admission Process Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Target the Right College by CAT Percentile", description: "CAT 99+ %ile → FMS Delhi (₹55K, ₹32 LPA avg). CAT 97+ %ile → IIFT Delhi (IIFT exam, ₹22 LPA avg trade finance). CAT 95+ %ile → MDI Gurgaon (₹26 LPA avg, strong Finance placement). CAT 82–87 %ile → IMT Ghaziabad (₹14 LPA Finance avg, Bloomberg training). CAT 80–85 %ile → FORE PGDM Financial Management (₹13.5 LPA avg, Delhi campus). Apply to multiple colleges — Finance track available at all." },
          { step: "2", title: "Prepare Your Finance Profile for PI", description: "Finance Personal Interview at Delhi B-schools tests: basic accounting (P&L, balance sheet, cash flow), corporate finance (NPV, DCF, WACC, capital structure), financial ratios (P/E, EV/EBITDA, ROE, ROA), and current financial news (RBI policy, inflation, banking sector developments). Read Prasanna Chandra 'Financial Management' basics. Follow RBI monetary policy decisions. Prepare 1–2 stock picks with valuation rationale for investment banking-targeted PIs." },
          { step: "3", title: "Apply for Finance-Specific Programmes", description: "FORE PGDM Financial Management: separate application at forecollege.com (December 2025–February 2026). IMT Ghaziabad Finance track: indicated in imt.edu application (Finance selected as primary specialization preference). MDI Gurgaon and FMS Delhi: Finance is a Semester 3 specialization — no separate application needed. IIFT Delhi Trade Finance track: implicit in MBA-IB curriculum — no separate application. Apply to 3–4 colleges to maximize options." },
          { step: "4", title: "Start CFA Level 1 Preparation Alongside MBA Applications", description: "Register for CFA Level 1 (June 2026 or August 2026 exam — register by February 2026 at cfainstitute.org). Study 300 hours across Ethics, Quantitative Methods, Economics, Financial Reporting, Corporate Finance, Equity, Fixed Income, Derivatives, Alternative Investments, and Portfolio Management. CFA Level 1 pass rate is 40–45% — start early. Complete CFA Level 1 before or during MBA Semester 2 for maximum placement impact." },
          { step: "5", title: "Plan Your Finance Career Track During MBA", description: "Choose Finance career track by MBA Semester 2: Investment Banking (need strong Excel/Financial Modelling, networking with Kotak/Edelweiss alumni, CFA Level 1). Asset Management (CFA Level 1 + portfolio management course, Bloomberg terminal skills). Risk/Credit (FRM Part 1 alongside MBA, credit analysis fundamentals). FinTech Finance (Python basics + Excel + product thinking). Join Finance Club in Week 1 at your B-school — Finance Club membership determines who gets the best finance internships and placement opportunities." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free MBA Banking & Finance Admission Guidance Delhi 2026"
        ctaSubtext="Tell us your CAT percentile and target finance role (investment banking / asset management / risk / FinTech) — our counsellors will shortlist the best MBA Finance college in Delhi for you."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
          { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi", icon: "" },
          { label: "FMS Delhi — ₹55K MBA", href: "/fms-delhi", icon: "" },
          { label: "MDI Gurgaon — PGDM", href: "/mdi-gurgaon", icon: "" },
          { label: "IIFT Delhi — MBA IB", href: "/iift-delhi", icon: "" },
          { label: "FORE School of Management Delhi", href: "/fore-school-management-delhi", icon: "" },
          { label: "IMT Ghaziabad — PGDM", href: "/imt-ghaziabad", icon: "" },
          { label: "MBA in International Business Delhi", href: "/mba-in-international-business-delhi", icon: "" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "" },
          { label: "MBA Colleges Delhi Placement", href: "/mba-colleges-delhi-placement", icon: "" },
        ]}
      />
    </>
  )
}
