import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Government MBA Colleges in Delhi 2026 | Low Fees, CAT Cutoff & Placements",
  description: "Best government MBA colleges in Delhi 2026: FMS Delhi (₹55K), IIFT Delhi (₹18.5L), DSE Delhi (₹50K), TERI SAS. Low fees, high placements. Admission via CAT/CUET.",
  path: "/government-mba-colleges-delhi",
  keywords: [
    "government mba colleges in delhi",
    "government mba colleges delhi",
    "low fees mba colleges delhi government",
    "best government mba college in delhi",
    "cheap mba colleges in delhi government",
    "mba government college delhi fees",
    "top government mba colleges delhi ncr",
    "government mba admission delhi 2026",
    "low cost mba delhi",
    "affordable mba colleges delhi",
    "mba colleges delhi low fees",
    "fms delhi government college",
    "iift delhi government college",
    "dse mba delhi",
    "cuet mba government college delhi",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "FMS Delhi — Faculty of Management Studies, University of Delhi", location: "University Enclave, North Campus, Delhi 110007", naac: "A++", fees: "₹55K total (2 years)", placement: "₹32 LPA avg", slug: "fms-delhi-faculty-management-studies" },
  { name: "IIFT Delhi — Indian Institute of Foreign Trade", location: "Qutab Institutional Area, New Delhi 110016", naac: "A++", fees: "₹18.5L total", placement: "₹22 LPA avg", slug: "iift-delhi-indian-institute-foreign-trade" },
  { name: "DSE Delhi — Delhi School of Economics, DU", location: "North Campus, University of Delhi, Delhi 110007", naac: "A++", fees: "₹40K–50K total", placement: "₹10–15 LPA avg", slug: "dse-delhi-school-of-economics" },
  { name: "TERI SAS — TERI School of Advanced Studies", location: "Vasant Kunj, New Delhi 110070", naac: "A", fees: "₹2.5L–3.5L total", placement: "₹8 LPA avg", slug: "teri-school-advanced-studies-delhi" },
  { name: "Jamia Millia Islamia — MBA (Central University)", location: "Okhla, New Delhi 110025", naac: "A+", fees: "₹1.5L–2L total", placement: "₹6–9 LPA avg", slug: "jamia-millia-islamia-delhi" },
  { name: "IP University — MBA via IPU CET (State University)", location: "Sector 16C, Dwarka, New Delhi 110078", naac: "A+", fees: "₹1.8L–2.5L total (IPU colleges)", placement: "₹5–8 LPA avg", slug: "guru-gobind-singh-indraprastha-university-delhi" },
]

const faqs = [
  { q: "Which is the best government MBA college in Delhi with low fees?", a: "FMS Delhi (Faculty of Management Studies, University of Delhi) is the best government MBA college in Delhi with the lowest fees in India — just ₹55,000 total for the 2-year MBA programme. Despite the near-zero fees, FMS delivers ₹32 LPA average placement and is NIRF #13. After FMS, DSE Delhi (₹40K–50K total, Delhi School of Economics) and Jamia Millia Islamia MBA (₹1.5L total) are the next most affordable government MBA options in Delhi." },
  { q: "What is the CAT cutoff for government MBA colleges in Delhi 2026?", a: "CAT 2026 cutoffs for government MBA colleges in Delhi: FMS Delhi — 99+ percentile (General category, 99.5+ for strong profile). IIFT Delhi — own IIFT exam (not CAT), overall ~48 marks out of 100. DSE Delhi — 90–95 percentile for MA Economics (Economics background preferred). Jamia Millia Islamia MBA — 70–75 percentile + JMAT/own test. IP University MBA affiliated colleges — IPU CET score (separate from CAT). The extreme low fees of FMS and DSE make their high CAT cutoffs worth targeting." },
  { q: "Is FMS Delhi better than IIM Ahmedabad for MBA?", a: "FMS Delhi vs IIM Ahmedabad: IIM Ahmedabad ranks #1 in India (NIRF) vs FMS #13 — but FMS offers 400x better ROI. FMS total fees: ₹55K. IIM-A fees: ₹25L. FMS average placement: ₹32 LPA. IIM-A average: ₹35 LPA. For ROI-conscious students, FMS Delhi is arguably the better choice — same elite peer network, same top recruiters (McKinsey, BCG, Goldman Sachs recruit from FMS), nearly identical salary, but zero debt. FMS CAT cutoff (99+%ile) is comparable to IIM-A." },
  { q: "What are the fees for MBA in government colleges in Delhi?", a: "MBA fees at government colleges in Delhi 2026: FMS Delhi ₹55,000 total (2 years) — India's cheapest premier MBA. DSE Delhi (MA Eco) ₹40K–50K total. Jamia Millia Islamia ₹1.5L–2L total. TERI SAS ₹2.5L–3.5L total. IP University affiliated MBA ₹1.8L–2.5L total. IIFT Delhi ₹18.5L total (government-owned but market-rate fees due to international standard programme). Compare this to private MBA colleges in Delhi: IMI ₹19.5L, MDI Gurgaon ₹22.5L — government colleges save ₹15L–22L in fees." },
  { q: "How to get admission in government MBA college in Delhi 2026?", a: "Admission process for government MBA colleges in Delhi 2026: (1) FMS Delhi — CAT 2025 (November), apply at admission.uod.ac.in (January 2026), shortlisting by composite score, GD-PI (February–March 2026). (2) IIFT Delhi — IIFT exam (December 2025), GDPI (February–March 2026). (3) Jamia MBA — JMAT/CAT score + own GD-PI. (4) IP University — IPU CET (May 2026) + counselling. (5) DSE Delhi — DU entrance based on CAT + academic record. For FMS (best option), aim for CAT 99+ percentile and prepare specifically for FMS GD-PI format." },
  { q: "Which Delhi government college gives best placement for MBA?", a: "Government MBA college placement rankings in Delhi 2026: (1) FMS Delhi ₹32 LPA avg, ₹75 LPA highest (McKinsey, BCG, Goldman Sachs, Amazon). (2) IIFT Delhi ₹22 LPA avg, ₹50 LPA highest (Standard Chartered, Citi, HUL, Deloitte). (3) DSE Delhi ₹10–15 LPA (RBI, Finance Ministry, consulting firms). (4) Jamia MBA ₹6–9 LPA (mid-tier corporates, PSUs). (5) TERI SAS ₹8 LPA (sustainability, ESG, energy sector). FMS Delhi placement-to-fees ratio is unmatched anywhere in India." },
]

export default function GovernmentMBADelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "Government MBA Colleges Delhi", url: "/government-mba-colleges-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Government MBA Colleges in Delhi 2026",
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
          { label: "Government MBA Colleges Delhi", href: "/government-mba-colleges-delhi" },
        ]}
        h1="Government MBA Colleges in Delhi 2026 — Low Fees, High Placements"
        subtitle="Delhi has India's most exceptional government MBA colleges — from FMS Delhi at just ₹55K total fees with ₹32 LPA placements to IIFT Delhi for International Business. Compare all government MBA colleges in Delhi — fees, CAT cutoffs, placements, and admission process."
        heroStats={[
          { value: "6+", label: "Govt MBA Colleges Delhi" },
          { value: "₹55K", label: "FMS Delhi Total Fees" },
          { value: "₹32 LPA", label: "FMS Avg Placement" },
          { value: "99+ %ile", label: "FMS CAT Cutoff" },
        ]}
        introHeading="Government MBA Colleges in Delhi 2026 — Complete Guide"
        introParagraphs={[
          "Government MBA colleges in Delhi offer India's best MBA ROI — FMS Delhi charges just ₹55,000 total fees for a 2-year MBA while placing students at ₹32 LPA average. Compare this to private MBA colleges (₹19L–₹22.5L fees) and the financial advantage is clear: FMS Delhi graduates enter the workforce with near-zero debt versus ₹10–15L EMIs for private B-school graduates.",
          "The key government MBA colleges in Delhi are: FMS Delhi (University of Delhi, NIRF #13), IIFT Delhi (Ministry of Commerce, NIRF #28), DSE Delhi (Delhi School of Economics), Jamia Millia Islamia (Central University), TERI SAS, and IP University affiliated MBA colleges. Each caters to a different CAT score range and career objective.",
          "FMS Delhi is the crown jewel — 99+ CAT percentile required, but the placements match IIM-A (McKinsey, BCG, Goldman Sachs all recruit). For students with 70–85 percentile, Jamia Millia Islamia MBA and IPU-affiliated MBA colleges offer government-quality education at ₹1.5–2.5L total fees.",
        ]}
        colleges={colleges}
        whyHeading="Why Choose Government MBA Colleges in Delhi?"
        whyPoints={[
          { title: "Unbeatable ROI — ₹55K vs ₹22.5L", description: "FMS Delhi total MBA fees: ₹55,000. MDI Gurgaon total fees: ₹22.5L. FMS average placement: ₹32 LPA. MDI placement: ₹26 LPA. FMS graduates start their careers 400x ahead on ROI. Even at 10 LPA lower salary, FMS graduates recover ₹22L in savings within 3 months of starting their first job." },
          { title: "Same Recruiters as IIMs", description: "McKinsey, BCG, Bain, Goldman Sachs, Deutsche Bank, Amazon, Microsoft, and ITC actively recruit from FMS Delhi — the same firms that visit IIM-A and IIM-B. IIFT Delhi has exclusive access to EXIM Banking (Standard Chartered, Citi, DBS) and International Trade roles. Government college brand name does not limit placement quality." },
          { title: "UGC/AICTE Recognized Degrees", description: "All government MBA colleges in Delhi award recognized MBA/PGDM degrees — FMS awards an MBA from University of Delhi (India's oldest central university). IIFT awards an MBA from a Deemed University. Jamia awards MBA from Jamia Millia Islamia (Central University). All degrees are recognized by UGC, AICTE, and AIU for higher studies abroad." },
          { title: "Hostel & Infrastructure", description: "Government colleges in Delhi maintain subsidized hostel facilities. FMS Delhi: hostel ₹40K–60K/year (all-inclusive). IIFT Delhi: on-campus hostel. DSE Delhi: DU hostel facilities. Compare this to private B-school hostel costs of ₹1.5L–2.5L/year. Total savings across 2 years: ₹2L–5L on accommodation alone." },
          { title: "PSU Recruitment Bonus", description: "Government MBA college graduates are eligible for PSU MBA recruitment (ONGC, BHEL, NTPC, Power Grid, Banks) alongside private sector. IIFT Delhi has a specific advantage: Ministry of Commerce and Trade-related PSUs (MMTC, STC) actively recruit IIFT graduates. Jamia MBA graduates are often targeted by PSUs for their Urdu/Persian language skills for Middle East operations." },
          { title: "No Donation / Management Quota", description: "Government MBA colleges in Delhi have zero management quota seats or donation-based admissions. Every seat is purely merit-based through CAT/entrance exam + GD-PI. This ensures high peer quality in the classroom — all batchmates are genuinely meritorious, making the peer learning environment comparable to IIMs." },
        ]}
        admissionHeading="Government MBA Admission Process Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Identify Target & Appear for Right Exam", description: "CAT 2025 (November): required for FMS Delhi, DSE Delhi, Jamia MBA (along with their own test). IIFT exam (December 2025): separate exam for IIFT Delhi — not CAT. IPU CET (May 2026): for IP University MBA affiliated colleges. XAT (January 2026): accepted by some DU affiliated MBA colleges. Strategy: if targeting FMS, focus on CAT (99+ percentile needed). If targeting IIFT, prepare specifically for IIFT GK section (trade policy, WTO)." },
          { step: "2", title: "Apply to Government MBA Colleges", description: "FMS Delhi: admission.uod.ac.in (January–February 2026, form fee ₹300). IIFT Delhi: iift.ac.in (September–October 2025, form fee ₹2,000). Jamia MBA: ajmas.jmi.ac.in (February–March 2026). DSE Delhi: du.ac.in (March–April 2026). TERI SAS: terisas.ac.in (January–March 2026). IPU CET: ipu.ac.in (February–March 2026). Keep all deadlines in a tracker — each college has different windows." },
          { step: "3", title: "Prepare for GD/PI (Government College Style)", description: "Government MBA college interviews focus on: intellectual curiosity, academic excellence justification (they check 10th/12th/graduation marks), national/social awareness, current affairs (especially economic policy, government schemes, budget), and career clarity. FMS PI specifically asks about Delhi/DU campus life fit. IIFT PI asks extensive GK on trade and commerce. DSE PI tests Economics fundamentals." },
          { step: "4", title: "Document Verification & Fee Payment", description: "After selection, attend document verification: 10th, 12th, graduation marksheets and certificates, CAT/entrance exam scorecard, category certificates (SC/ST/OBC/EWS), identity proof, domicile certificate (if applicable). Fee payment: FMS Delhi ₹27,500 per semester (₹55K total). IIFT ₹9.25L per year. Jamia ₹75K–1L per year. Bank loan (education loan) available at all government institutions under SBI Scholar Loan / Bank of Baroda Baroda Vidya at 8–9% p.a." },
          { step: "5", title: "Joining & Campus Life", description: "FMS Delhi campus (North Campus, DU) is within walking distance of Delhi University metro station. IIFT campus (Qutab Institutional Area) is near Qutab Minar metro. Both have excellent libraries, computer labs, and seminar halls. FMS batch starts July 2026. IIFT batch starts July 2026. Register for placement committee and club activities in the first week — these build your professional profile throughout the programme." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free Counselling for Government MBA Colleges in Delhi"
        ctaSubtext="Tell us your CAT percentile and budget — our counsellors will map you to the best government MBA college in Delhi that matches your profile."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
          { label: "FMS Delhi MBA Admission 2026", href: "/fms-delhi", icon: "" },
          { label: "IIFT Delhi MBA 2026", href: "/iift-delhi", icon: "" },
          { label: "MDI Gurgaon — PGDM", href: "/mdi-gurgaon", icon: "" },
          { label: "MBA in HR Delhi", href: "/mba-in-hr-delhi", icon: "" },
          { label: "Executive MBA Delhi", href: "/executive-mba-delhi", icon: "" },
          { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi", icon: "" },
          { label: "Low Fees MBA Delhi", href: "/low-fees-mba-colleges-delhi", icon: "" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "" },
          { label: "MBA Colleges Gurgaon", href: "/mba-colleges-gurgaon", icon: "" },
          { label: "CAT Colleges Delhi", href: "/cat-colleges-delhi", icon: "" },
        ]}
      />
    </>
  )
}
