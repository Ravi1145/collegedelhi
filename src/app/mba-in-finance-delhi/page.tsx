import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Best MBA in Finance Colleges in Delhi 2026",
  description: "Top MBA Finance colleges in Delhi 2026: FMS Delhi (₹32 LPA), MDI Gurgaon, IIFT, IMI Delhi. CAT cutoffs, fees ₹55K–₹22.5L, finance placements up to ₹45 LPA.",
  path: "/mba-in-finance-delhi",
  keywords: [
    "mba in finance colleges in delhi",
    "best mba in finance in delhi",
    "top mba finance colleges delhi",
    "mba finance delhi 2026",
    "mba finance admission delhi",
    "cat cutoff mba finance delhi",
    "fms delhi mba finance",
    "mdi gurgaon finance mba",
    "mba finance salary delhi",
    "mba finance vs mba marketing delhi",
    "best college for mba finance in delhi ncr",
    "mba finance placement delhi",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "FMS Delhi — Faculty of Management Studies", location: "University Enclave, North Delhi", naac: "A++", fees: "₹55K total (2 yr)", placement: "₹32 LPA avg", slug: "fms-delhi-faculty-management-studies" },
  { name: "MDI Gurgaon — PGDM Finance", location: "MG Road, Gurgaon (NCR)", naac: "A+", fees: "₹22.5L total", placement: "₹26 LPA avg", slug: "mdi-gurgaon-management-development-institute" },
  { name: "IIFT Delhi — MBA International Business (Finance)", location: "Qutab Institutional Area, Delhi", naac: "A++", fees: "₹18.5L total", placement: "₹22 LPA avg", slug: "iift-delhi-indian-institute-foreign-trade" },
  { name: "IMI Delhi — International Management Institute", location: "Qutab Institutional Area, Delhi", naac: "A+", fees: "₹19.5L total", placement: "₹14 LPA avg", slug: "imi-delhi-international-management-institute" },
  { name: "FORE School of Management — PGDM Finance", location: "Qutab Institutional Area, Delhi", naac: "A", fees: "₹16.5L total", placement: "₹12 LPA avg", slug: "fore-school-management-delhi" },
  { name: "BIMTECH Greater Noida — PGDM Finance", location: "Knowledge Park, Greater Noida", naac: "A", fees: "₹9.5L total", placement: "₹10 LPA avg", slug: "bimtech-birla-institute-management-technology-noida" },
]

const faqs = [
  { q: "Which is the best college for MBA in Finance in Delhi?", a: "FMS Delhi (Faculty of Management Studies, DU) is the best MBA Finance college in Delhi — India's most affordable top-ranked B-school at just ₹55,000 total fees with ₹32 LPA average placement. CAT cutoff: 99+ percentile. MDI Gurgaon is second best at ₹26 LPA average (CAT 97+ %ile). IIFT Delhi is best specifically for Finance + International Trade combination at ₹22 LPA (dedicated IIFT exam required)." },
  { q: "What is the CAT cutoff for MBA Finance in Delhi colleges?", a: "CAT 2026 cutoffs for MBA Finance colleges in Delhi NCR: FMS Delhi — 99+ percentile. MDI Gurgaon — 97+ percentile. IIFT Delhi — uses separate IIFT exam (not CAT). IMI Delhi — 85–90 percentile. FORE Delhi — 80–85 percentile. BIMTECH Greater Noida — 75–80 percentile. Finance specialization cutoffs are usually 2–3 percentile higher than general management at the same college." },
  { q: "What is the salary after MBA Finance from Delhi?", a: "Average salary after MBA Finance from Delhi colleges 2024: FMS Delhi ₹32 LPA, MDI Gurgaon ₹26 LPA (Finance roles avg ₹30+ LPA), IIFT Delhi ₹22 LPA, IMI Delhi ₹14 LPA, FORE Delhi ₹12 LPA. Top Finance roles: Investment Banking (₹30–50 LPA), Equity Research (₹12–20 LPA), Corporate Finance (₹10–18 LPA), Financial Consulting (₹15–28 LPA). Goldman Sachs, Morgan Stanley, KPMG, EY are top Finance recruiters." },
  { q: "Is MBA Finance better than MBA Marketing in Delhi?", a: "MBA Finance vs MBA Marketing in Delhi: Finance offers higher peak packages (₹30–50 LPA for IB roles) but is more technical — requires strong Quantitative Aptitude and accounting foundation. Marketing offers more diverse roles (Brand Manager, Digital Marketing, Sales) at ₹8–22 LPA. For students with Commerce/Economics background: Finance is a natural choice. For students from any stream wanting client-facing roles: Marketing is broader. At FMS Delhi and MDI Gurgaon, Finance placements consistently lead in package." },
  { q: "What Finance jobs can I get after MBA from Delhi?", a: "Finance career options after MBA from Delhi 2026: Investment Banking Analyst (Goldman Sachs, JP Morgan) — ₹25–50 LPA. Equity Research (ICICI Securities, Kotak) — ₹12–20 LPA. Financial Analyst (Deloitte, EY, KPMG) — ₹10–18 LPA. Corporate Finance (HUL, ITC, HDFC) — ₹10–16 LPA. Risk Management (Deutsche Bank, HSBC) — ₹12–20 LPA. Private Equity (KKR, Blackstone India) — ₹18–35 LPA. MBA Finance from FMS Delhi opens all these doors." },
  { q: "Can I do MBA Finance without CAT in Delhi?", a: "MBA Finance without CAT in Delhi is possible at: IIFT Delhi (uses separate IIFT 2025 exam — register at iift.ac.in, different from CAT). Amity University Noida (own AUAT entrance). IMT Ghaziabad (XAT / MAT / GMAT). Sharda University Greater Noida (MAT / CMAT). Executive MBA Finance at MDI, IMI, FORE (GMAT accepted for working professionals with 5+ years experience, no CAT needed)." },
]

export default function MBAFinanceDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "MBA in Finance Delhi", url: "/mba-in-finance-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best MBA Finance Colleges in Delhi 2026",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <SEOLandingPage
        breadcrumb={[
          { label: "MBA Colleges Delhi", href: "/mba-colleges-delhi" },
          { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi" },
        ]}
        h1="Best MBA in Finance Colleges in Delhi 2026"
        subtitle="MBA Finance is the highest-paying MBA specialization in Delhi. FMS Delhi offers MBA Finance at ₹55K total fees with ₹32 LPA average. Compare top MBA Finance colleges in Delhi NCR — CAT cutoffs, fees, and finance sector placements up to ₹50 LPA."
        heroStats={[
          { value: "20+", label: "MBA Finance Colleges Delhi NCR" },
          { value: "₹55K–₹22.5L", label: "Total Fee Range" },
          { value: "₹32 LPA", label: "FMS Delhi Avg Placement" },
          { value: "₹50 LPA", label: "Highest Finance Package" },
        ]}
        introHeading="MBA Finance Colleges in Delhi 2026 — FMS, MDI, IIFT Admission Guide"
        introParagraphs={[
          "MBA in Finance is the most sought-after specialization in Delhi, offering access to Investment Banking, Equity Research, Corporate Finance, and Financial Consulting careers. Delhi NCR's financial ecosystem — with NSE, BSE offices, 40+ global banks, and 200+ PE/VC firms — makes it India's best location for Finance MBA placement.",
          "The top MBA Finance colleges in Delhi 2026 are FMS Delhi (₹55K total, ₹32 LPA avg), MDI Gurgaon (₹22.5L, ₹26 LPA avg), IIFT Delhi (₹18.5L, ₹22 LPA avg — Finance + International Trade focus), and IMI Delhi (₹19.5L, ₹14 LPA avg). All require CAT 80–99+ percentile. Finance roles at FMS Delhi command the highest packages nationally — Goldman Sachs, Morgan Stanley, and JP Morgan are regular recruiters.",
          "Choosing the right MBA Finance college in Delhi depends on your CAT percentile and target Finance sector. FMS Delhi and MDI Gurgaon are ideal for Investment Banking and Consulting. IIFT Delhi is best for Finance + International Trade (EXIM banking, international financial services). FORE Delhi and BIMTECH are strong choices for Corporate Finance roles at ₹10–14 LPA with more accessible CAT cutoffs (75–85 percentile).",
        ]}
        colleges={colleges}
        whyHeading="Why MBA Finance in Delhi?"
        whyPoints={[
          { title: "India's Financial Hub", description: "Delhi NCR hosts NSE/BSE regional offices, 40+ global investment banks (Goldman Sachs, Deutsche, JP Morgan, Citi), 200+ PE/VC funds, and India's largest NBFC ecosystem. No other city offers this density of Finance sector employers." },
          { title: "FMS Delhi — Best ROI in India", description: "FMS Delhi (₹55K total fees, ₹32 LPA avg placement) delivers the best return on investment among all MBA Finance programmes in India. Finance specialization at FMS regularly places students at ₹25–45 LPA in IB and consulting roles." },
          { title: "IIFT Delhi — Finance + Trade", description: "IIFT Delhi is unique — the only B-school combining Finance with International Business. EXIM banking, trade finance, and global treasury roles are IIFT specialties. Recruiters: Standard Chartered, DBS, Citibank, ICICI international divisions." },
          { title: "CFA/FRM Synergy", description: "Delhi's Finance MBA students routinely pursue CFA Level 1 & 2 alongside their MBA (FMS Delhi has a CFA preparation cell). CFA + MBA Finance from FMS or MDI is the most competitive combination for IB roles at ₹30+ LPA." },
          { title: "Corporate Finance Access", description: "HUL, ITC, Reliance, Tata Steel, and 500+ listed companies have Delhi NCR offices offering CFO-track Finance roles for MBA graduates. Campus placement drives include Corporate Finance, Treasury, and M&A roles alongside IB." },
          { title: "Startup & VC Finance", description: "Delhi's startup ecosystem (100+ funded startups in Gurgaon/Noida) offers Finance MBA graduates roles in Startup CFO offices, VC fund analysis, and fintech (Paytm, MobiKwik, Razorpay have Delhi NCR presence)." },
        ]}
        admissionHeading="MBA Finance Admission Process in Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Appear for CAT 2025 / IIFT Exam", description: "For FMS Delhi, MDI Gurgaon, IMI, FORE, BIMTECH: Appear for CAT 2025 (November). Target 80–99+ percentile depending on target college. For IIFT Delhi: Appear for IIFT 2025 exam (December 2025) — separate registration at iift.ac.in, not CAT. IIFT Finance track selection is done post-admission in Year 1." },
          { step: "2", title: "Apply Before Deadlines", description: "FMS Delhi applications: January 2026 (cuet.samarth.ac.in via DU MBA route). MDI Gurgaon: December 2025–January 2026 at mdi.ac.in. IIFT Delhi: December 2025 at iift.ac.in. IMI Delhi: December 2025–February 2026. FORE Delhi: December–February. Apply to all matching your CAT percentile." },
          { step: "3", title: "GD/WAT + Personal Interview", description: "FMS Delhi: Direct PI based on CAT score (no GD). Focuses on Finance concepts, current affairs, and past experience. MDI: WAT + PI. IIFT: Essay + PI focused on India's trade policy and global markets. Strong Finance knowledge (CAPM, DCF, P&L reading) helps in PI rounds." },
          { step: "4", title: "Choose Finance Specialization", description: "At most Delhi MBA colleges, specialization is chosen at end of Year 1 after foundational courses. FMS Delhi offers Finance as one of 4 major elective areas. BIMTECH offers dedicated PGDM in Banking & Finance. IIFT is inherently Finance-International Business combined." },
          { step: "5", title: "Leverage Delhi's Finance Network", description: "Once admitted, register for Bloomberg Terminal access (FMS, MDI, BIMTECH all have terminals). Join college Finance clubs — FMS Finance Forum, MDI Finance Committee. Apply for Summer Internship (SIP) at IB firms through Day 1 campus process in January of Year 2." },
        ]}
        faqs={faqs}
        ctaHeading="Get Personalized MBA Finance Admission Guidance for Delhi"
        ctaSubtext="Tell us your CAT percentile and target Finance role (IB vs Corporate Finance vs Consulting) — our counsellors will shortlist the best MBA Finance colleges in Delhi NCR for your profile."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
          { label: "FMS Delhi — ₹55K MBA", href: "/fms-delhi", icon: "" },
          { label: "IIFT Delhi — MBA IB", href: "/iift-delhi", icon: "" },
          { label: "MDI Gurgaon — PGDM", href: "/mdi-gurgaon", icon: "" },
          { label: "MBA in Marketing Delhi", href: "/mba-in-marketing-delhi", icon: "" },
          { label: "MBA in HR Delhi", href: "/mba-in-hr-delhi", icon: "" },
          { label: "MBA in Operations Delhi", href: "/mba-in-operations-delhi", icon: "" },
          { label: "Government MBA Colleges Delhi", href: "/government-mba-colleges-delhi", icon: "" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "" },
          { label: "FMS Delhi vs MDI Gurgaon", href: "/fms-delhi-vs-mdi-gurgaon", icon: "" },
          { label: "MBA Colleges Gurgaon", href: "/mba-colleges-gurgaon", icon: "" },
          { label: "MBA Placement Rankings", href: "/mba-colleges-delhi-placement", icon: "" },
        ]}
      />
    </>
  )
}
