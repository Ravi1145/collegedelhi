import type { Metadata } from "next"
import Script from "next/script"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Best MBA colleges in Delhi 2026 | Top Ranked MBA Programs",
  description: "Best MBA colleges in Delhi 2026. FMS Delhi, MDI Gurgaon, IIMS Delhi, Flame University -- compare CAT cutoffs, fees (₹4L-18L), placement packages up to ₹28 LPA. Apply now.",
  path: "/best-mba-colleges-delhi",
  keywords: ["best mba colleges Delhi", "top mba colleges in Delhi 2026", "ranked mba colleges Delhi", "mba programs Delhi"],
})

export const revalidate = 300

const colleges = [
  { name: "FMS Delhi (Faculty of Management Studies, DU)", location: "DU North Campus, Delhi", naac: "A++", fees: "₹55K (2yr total)", placement: "₹32 LPA avg", slug: "fms-delhi-faculty-management-studies" },
  { name: "MDI Gurgaon (Management Development Institute)", location: "Sector 17, Gurgaon", naac: "A+", fees: "₹22L (2yr total)", placement: "₹24 LPA avg", slug: "mdi-gurgaon-management-development-institute" },
  { name: "IIFT Delhi (Indian Institute of Foreign Trade)", location: "Qutab Institutional Area, Delhi", naac: "A", fees: "₹20L (2yr total)", placement: "₹22 LPA avg", slug: "iift-delhi-indian-institute-foreign-trade" },
  { name: "IMI Delhi (International Management Institute)", location: "Qutab Institutional Area, Delhi", naac: "A+", fees: "₹14L (2yr total)", placement: "₹14 LPA avg", slug: "imi-delhi-international-management-institute" },
  { name: "FORE School of Management Delhi", location: "Qutab Institutional Area, Delhi", naac: "A+", fees: "₹10.5L (2yr total)", placement: "₹10.5 LPA avg", slug: "fore-school-management-delhi" },
  { name: "BIMTECH Greater Noida (Birla Institute of Management Technology)", location: "Greater Noida", naac: "A+", fees: "₹9.2L (2yr total)", placement: "₹9.2 LPA avg", slug: "bimtech-birla-institute-management-technology-noida" },
  { name: "DSM DTU (Delhi School of Management, DTU)", location: "Rohini, Delhi", naac: "A+", fees: "₹2.5L (2yr total)", placement: "₹8.5 LPA avg", slug: "dsm-dtu-delhi-school-management" },
  { name: "LBSIM Delhi (Lal Bahadur Shastri Institute of Management)", location: "Dwarka Sector 7, Delhi", naac: "A", fees: "₹8.8L (2yr total)", placement: "₹8.8 LPA avg", slug: "lbsim-lal-bahadur-shastri-institute-management-delhi" },
]

const faqs = [
  { q: "Which is the best MBA college in Delhi?", a: "FMS Delhi (Faculty of Management Studies, Delhi University) is the best MBA college in Delhi — India's #1 MBA value with ₹55K total fees and ₹32 LPA average placement. MDI Gurgaon ranks #2 with ₹24 LPA average. IIFT Delhi (₹22 LPA) is best for international business." },
  { q: "What is the CAT cutoff for top MBA colleges in Delhi?", a: "FMS Delhi: 98+ CAT percentile. MDI Gurgaon: 99+ percentile. IIFT Delhi: 95+ percentile. IMI Delhi: 85+ percentile. FORE School: 80+ percentile. BIMTECH: 75+ percentile. DSM DTU: 70+ percentile. LBSIM: 70+ percentile." },
  { q: "What is the fee for MBA in Delhi?", a: "MBA fees in Delhi 2026: FMS Delhi ₹55K total (government), DSM DTU ₹2.5L total (government), LBSIM ₹8.8L, FORE School ₹10.5L, BIMTECH ₹9.2L, IMI Delhi ₹14L, IIFT Delhi ₹20L, MDI Gurgaon ₹22L. Government college FMS Delhi offers India's best MBA ROI." },
  { q: "What is the average placement package from MBA colleges in Delhi?", a: "FMS Delhi: ₹32 LPA avg, ₹72 LPA highest. MDI Gurgaon: ₹24 LPA avg. IIFT Delhi: ₹22 LPA avg. IMI Delhi: ₹14 LPA avg. FORE School: ₹10.5 LPA avg. BIMTECH: ₹9.2 LPA avg. DSM DTU: ₹8.5 LPA avg. Consulting and BFSI roles command highest packages." },
  { q: "Is Delhi a good city for MBA?", a: "Yes. Delhi NCR has India's top MBA value (FMS Delhi), second-best private MBA (MDI Gurgaon), international trade specialist (IIFT Delhi), and 20+ other quality programs. Combined with Delhi's corporate ecosystem (Gurgaon tech hub, Delhi BFSI, Noida IT), it offers unmatched industry exposure." },
]

export default function BestMbaCollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Best MBA colleges in Delhi", url: "/best-mba-colleges-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best MBA colleges in Delhi 2026",
    numberOfItems: colleges.length,
    itemListElement: colleges.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `https://collegedelhi.com/colleges/${c.slug}`,
    })),
  }

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <SEOLandingPage
        breadcrumb={[{ label: "Best MBA colleges in Delhi", href: "/best-mba-colleges-delhi" }]}
        h1="Best MBA colleges in Delhi 2026"
        subtitle="The definitive ranking of Delhi's top MBA programs. Compare CAT cutoffs, total fees, placement packages, specializations, and admission processes for 2026."
        heroStats={[
          { value: "30+", label: "MBA Colleges" },
          { value: "₹28 LPA", label: "Best Avg Package" },
          { value: "₹1.8L-18L", label: "Total Fees Range" },
          { value: "CAT/IPU CET", label: "Primary Entrance" },
        ]}
        introHeading="Best MBA colleges in Delhi: Complete Rankings 2026"
        introParagraphs={[
          "Delhi NCR is India's premier MBA education destination, home to FMS Delhi (India's best MBA value at ₹55K fees with ₹32 LPA placements), MDI Gurgaon (India's top 10 private B-school), IIFT Delhi (best international business MBA), and 20+ other quality programs. The region's corporate hub status — Gurgaon tech corridor, Delhi BFSI sector, Noida IT hub — provides unmatched industry exposure for MBA students.",
          "The best MBA colleges in Delhi are ranked on NIRF ranking, CAT cutoff percentile, total program fees, average and median placement packages, employer quality (McKinsey, BCG, Goldman Sachs vs. regional companies), NAAC grade, batch size, alumni network, and specialization depth. This guide provides transparent data on all parameters to help you make an informed decision.",
          "For 2026 MBA admissions in Delhi, the primary entrance exams are CAT (November 2025 — for FMS Delhi, MDI Gurgaon, IIFT, IMI Delhi, FORE, BIMTECH), IPU CET (March 2026 — for IP University affiliated colleges), XAT (January 2026 — accepted at many Delhi colleges), and CMAT/MAT (for budget options). GMAT is accepted for NRI/international applicants.",
        ]}
        colleges={colleges}
        whyHeading="Why Pursue MBA from Delhi?"
        whyPoints={[
          { title: "India's Corporate Hub", description: "Delhi NCR hosts HQs of Maruti Suzuki, Hero MotoCorp, HCL Technologies, Bharti Airtel, and regional offices of Goldman Sachs, JP Morgan, BCG, and McKinsey — giving MBA graduates direct access to top-tier placements." },
          { title: "FMS Delhi — Best MBA Value", description: "FMS Delhi (Faculty of Management Studies, DU) has ₹55K total fees and ₹32 LPA average placement — the best ROI MBA in India. MDI Gurgaon and IIFT Delhi offer world-class MBA education at competitive fees." },
          { title: "Lower Cost of Living", description: "Compared to Bengaluru and Hyderabad, Delhi offers 30–40% lower living costs with equivalent MBA quality. Students save ₹3–5L over 2 years on accommodation and daily expenses vs. tier-1 south India cities." },
          { title: "Diverse Industry Exposure", description: "Delhi NCR's industry diversity (IT in Noida/Gurgaon, auto in Gurgaon, pharma in Delhi, BFSI in Connaught Place) means MBA students experience multiple sectors during internships and final placements." },
          { title: "Strong Alumni Network", description: "FMS Delhi, MDI Gurgaon, and IIFT Delhi alumni hold C-suite and VP positions at top MNCs globally. These networks actively participate in placements, mentorship, and guest lectures at college campuses." },
          { title: "Startup & Entrepreneurship Culture", description: "Delhi NCR has 5,000+ active startups and accelerators like Startup India Hub, T-Hub Delhi, and Amity Innovation Hub — supporting MBA graduates wanting to launch ventures." },
        ]}
        admissionHeading="MBA Admission Process in Delhi's Best Colleges 2026"
        admissionSteps={[
          { step: "1", title: "Appear for CAT 2025 / IPU CET 2026", description: "CAT is conducted in November 2025. Target 85+ percentile for FMS Delhi/MDI Gurgaon, 75+ for FLAME, 60+ for mid-tier colleges. IPU CET (March 2026) is required for state-level MBA CAP in Delhi." },
          { step: "2", title: "Apply to IIFT Exam (for IIFT Delhi)", description: "IIFT Delhi conducts its own entrance exam (IIFT CAT-equivalent) in December 2025, in addition to accepting CAT scores. Register on iift.ac.in. IIFT Exam tests English, Quantitative Ability, Data Interpretation, and General Awareness." },
          { step: "3", title: "Submit Applications to Target Colleges", description: "After entrance exams, apply to shortlisted colleges (January-February 2026). Most colleges require a Statement of Purpose (SOP), updated CV, academic records, and work experience details." },
          { step: "4", title: "Appear for GD/PI/WAT Rounds", description: "Group Discussion, Personal Interview, and Written Ability Test rounds are conducted February-April 2026. FMS Delhi and MDI Gurgaon are highly competitive at this stage -- prepare current affairs, business cases, and leadership examples." },
          { step: "5", title: "Accept Offer & Pay Fees", description: "Merit list is released in April-May 2026. Accept admission offer and pay first installment of fees within the deadline. Arrange accommodation before June orientation." },
        ]}
        faqs={faqs}
        ctaHeading="Get Into the Best MBA College in Delhi"
        ctaSubtext="Our MBA admission counsellors have helped 2,000+ students crack FMS Delhi, MDI Gurgaon, and FLAME admissions. Free guidance on test prep, SOP writing, and GD/PI preparation."
      relatedGuides={[
        { label: "Best MBA colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "🏛️" },
        { label: "Top 10 MBA Colleges — Ranked", href: "/top-10-mba-colleges-in-delhi", icon: "🏆" },
        { label: "MBA Placement Guide — LPA Stats", href: "/mba-colleges-delhi-placement", icon: "💼" },
        { label: "Low Fees MBA colleges in Delhi", href: "/low-fees-mba-colleges-delhi", icon: "💰" },
        { label: "MBA Scholarships in Delhi", href: "/mba-colleges-delhi-scholarship", icon: "🎓" },
        { label: "CAT Score colleges in Delhi", href: "/cat-colleges-delhi", icon: "📝" },
        { label: "PGDM colleges in Delhi", href: "/pgdm-colleges-delhi", icon: "📊" },
        { label: "Admission Without CAT (IPU CET)", href: "/mba-admission-delhi-without-cat", icon: "🚀" },
      ]}
      />
    </>
  )
}

