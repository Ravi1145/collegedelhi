import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "CAT colleges in Delhi 2026 | MBA Colleges Accepting CAT | Cutoffs & Fees",
  description: "Top MBA colleges in Delhi accepting CAT 2025 scores. FMS Delhi, MDI Gurgaon, IMI Delhi — CAT cutoffs, fees, and placement packages for 2026 admission.",
  path: "/cat-colleges-delhi",
  keywords: ["cat colleges Delhi", "mba colleges Delhi cat 2025", "cat cutoff Delhi mba", "cat accepting colleges Delhi 2026"],
})

export const revalidate = 300

const colleges = [
  { name: "FMS Delhi (Faculty of Management Studies, DU)", location: "DU North Campus, Delhi", naac: "A++", fees: "₹55K (2yr)", placement: "₹32 LPA avg | CAT: 98%ile", slug: "fms-delhi-faculty-management-studies" },
  { name: "MDI Gurgaon (Management Development Institute)", location: "Sector 17, Gurgaon", naac: "A+", fees: "₹22L (2yr)", placement: "₹24 LPA avg | CAT: 99%ile", slug: "mdi-gurgaon-management-development-institute" },
  { name: "IIFT Delhi (Indian Institute of Foreign Trade)", location: "Qutab Institutional Area, Delhi", naac: "A", fees: "₹20L (2yr)", placement: "₹22 LPA avg | CAT: 95%ile", slug: "iift-delhi-indian-institute-foreign-trade" },
  { name: "IMI Delhi (International Management Institute)", location: "Qutab Institutional Area, Delhi", naac: "A+", fees: "₹14L (2yr)", placement: "₹14 LPA avg | CAT: 85%ile", slug: "imi-delhi-international-management-institute" },
  { name: "FORE School of Management Delhi", location: "Qutab Institutional Area, Delhi", naac: "A+", fees: "₹10.5L (2yr)", placement: "₹10.5 LPA avg | CAT: 80%ile", slug: "fore-school-management-delhi" },
  { name: "BIMTECH Greater Noida", location: "Greater Noida", naac: "A+", fees: "₹9.2L (2yr)", placement: "₹9.2 LPA avg | CAT: 75%ile", slug: "bimtech-birla-institute-management-technology-noida" },
  { name: "LBSIM Delhi", location: "Dwarka Sector 7, Delhi", naac: "A", fees: "₹8.8L (2yr)", placement: "₹8.8 LPA avg | CAT: 70%ile", slug: "lbsim-lal-bahadur-shastri-institute-management-delhi" },
  { name: "DSM DTU (Delhi School of Management)", location: "Rohini, Delhi", naac: "A+", fees: "₹2.5L (2yr)", placement: "₹8.5 LPA avg | CAT: 70%ile", slug: "dsm-dtu-delhi-school-management" },
]

const faqs = [
  { q: "Which Delhi MBA colleges accept CAT 2025 scores?", a: "Top Delhi MBA colleges accepting CAT 2025: FMS Delhi (cutoff 98+ percentile), MDI Gurgaon (99+), IIFT Delhi (95+), IMI Delhi (85+), FORE School (80+), BIMTECH (75+), LBSIM (70+), DSM DTU (70+). Note: SNAP (Symbiosis Entrance Test) is NOT required for any of these colleges — all are CAT-based." },
  { q: "What CAT percentile is needed for top MBA colleges in Delhi?", a: "FMS Delhi: 98+ CAT percentile. MDI Gurgaon: 99+ percentile. IIFT Delhi: 95+ percentile. IMI Delhi: 85+ percentile. FORE School: 80+ percentile. BIMTECH: 75+ percentile. DSM DTU: 70+ percentile. These are indicative cutoffs — actual selection also includes GD/PI/WAT performance." },
  { q: "Is CAT mandatory for MBA admission in Delhi?", a: "For top colleges (FMS Delhi, MDI Gurgaon, IIFT), CAT is strongly recommended. However, many other MBA colleges accept MAT, XAT, CMAT, or GMAT as alternatives. IPU CET is required for IP University affiliated MBA programs in Delhi. SNAP is only for Symbiosis colleges (Pune), not Delhi colleges." },
  { q: "What is the difference between FMS Delhi and MDI Gurgaon?", a: "FMS Delhi (Faculty of Management Studies, Delhi University) has ₹55K total fees and ₹32 LPA average placement — best value MBA. MDI Gurgaon has ₹22L total fees and ₹24 LPA average — top private MBA. Both are CAT-based. FMS is far more affordable; MDI has slightly lower CAT cutoff (99%ile vs 98%ile for FMS)." },
  { q: "Can I get MBA in FMS Delhi with 95 CAT percentile?", a: "FMS Delhi (Faculty of Management Studies, DU) typically requires 98+ CAT percentile for shortlisting, making it one of India's most competitive MBA programs despite the low fees. A 95 percentile might be borderline — focus on exceptional PI performance, strong academics, and relevant work experience to compensate." },
]

export default function CatCollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "CAT colleges in Delhi", url: "/cat-colleges-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "CAT MBA colleges in Delhi 2026",
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
        breadcrumb={[{ label: "CAT colleges in Delhi", href: "/cat-colleges-delhi" }]}
        h1="CAT MBA colleges in Delhi 2026"
        subtitle="MBA colleges in Delhi accepting CAT 2025 scores. Compare CAT cutoffs (percentile-wise), total fees, placement packages, and GD/PI requirements for 2026 admission."
        heroStats={[
          { value: "15+", label: "CAT MBA Colleges" },
          { value: "₹28 LPA", label: "Best Avg Package" },
          { value: "55-85%ile", label: "CAT Cutoff Range" },
          { value: "Nov 2025", label: "CAT 2025 Date" },
        ]}
        introHeading="CAT MBA colleges in Delhi: Percentile Guide for 2026"
        introParagraphs={[
          "CAT (Common Admission Test) conducted by IIMs is India's most prestigious MBA entrance exam, accepted by hundreds of B-schools including top Delhi management colleges. While IIMs require 98+ percentile, Delhi's best MBA colleges - FMS Delhi, MDI Gurgaon, and FLAME University - accept CAT scores starting at 75-85 percentile, making them realistic aspirations for strong CAT performers.",
          "Delhi's MBA ecosystem is CAT-centric. FMS Delhi (Faculty of Management Studies, Delhi University), MDI Gurgaon, IIFT Delhi, and IMI Delhi all use CAT as their primary shortlisting criterion. Unlike Symbiosis colleges in Pune (which use SNAP), Delhi's top MBA programs require only CAT — making it possible to access multiple top programs with a single exam.",
          "The 2026 MBA admission season begins with CAT 2025 (November 2025). After results (January 2026), Delhi MBA colleges issue shortlists for GD/PI/WAT rounds (February-April 2026). Merit lists follow in April-May 2026, with programs starting June 2026. Preparing a strong profile - work experience, leadership activities, SOP - is as crucial as CAT score for top Delhi B-schools.",
        ]}
        colleges={colleges}
        whyHeading="CAT MBA in Delhi vs Other Cities"
        whyPoints={[
          { title: "FMS Delhi as IIM Alternative", description: "FMS Delhi consistently ranks in India's top 15 B-schools and is often called 'the best non-IIM MBA' by recruiters. With a 85+ CAT percentile, FMS Delhi offers IIM-comparable placements at significantly lower fees." },
          { title: "Industry-Integrated Learning", description: "Delhi's MBA colleges leverage the city's corporate density for live projects with Bajaj, Infosys, and Whirlpool. Students apply classroom learning to real business challenges, creating stronger career-ready graduates." },
          { title: "CAT Alone Opens Multiple Doors", description: "A single CAT score gives access to FMS Delhi (₹32 LPA avg), MDI Gurgaon (₹24 LPA avg), IIFT Delhi (₹22 LPA avg), IMI Delhi (₹14 LPA avg), FORE School (₹10.5 LPA avg), and 10+ more Delhi MBA programs." },
          { title: "Unbeatable Value at FMS Delhi", description: "FMS Delhi offers India's best MBA ROI: ₹55K total fees with ₹32 LPA average placement. It requires 98+ CAT percentile but the investment-to-return ratio is unmatched by any other program in India." },
          { title: "Finance & Consulting Roles", description: "Delhi MBA graduates access finance roles at Goldman Sachs, Deutsche Bank, and HSBC; consulting roles at McKinsey, BCG, and Bain; and product management roles at Amazon, Flipkart, and tech startups." },
          { title: "CAT + CMAT/XAT Backup Strategy", description: "Prepare primarily for CAT while attempting XAT (January) and CMAT (January) as backup options. XAT is accepted by IMT Ghaziabad, XLRI programs. CMAT opens mid-tier Delhi MBA programs. Triple exam strategy maximizes options." },
        ]}
        admissionHeading="CAT to Delhi MBA: Complete Admission Timeline 2026"
        admissionSteps={[
          { step: "1", title: "Register for CAT 2025 (August-September 2025)", description: "Register at iimcat.ac.in from August-September 2025. Exam fee: ₹2,200 (general). Prepare 6 months in advance. Target: 80+ for MDI Gurgaon, 85+ for FMS Delhi. Focus on Verbal, DI/LR, and Quantitative Ability." },
          { step: "2", title: "Register for XAT/CMAT Backup (Jan 2026)", description: "Register for XAT (January 2026 — accepted by IMT Ghaziabad, BIMTECH) and CMAT (January 2026 — accepted by LBSIM, IMS Ghaziabad). These backup exams add minimal prep effort. SNAP is only for Symbiosis Pune, NOT required for Delhi colleges." },
          { step: "3", title: "Apply to Delhi MBA Colleges (Jan-Feb 2026)", description: "After CAT results (January 2026), apply to shortlisted colleges. Submit: SOP, updated CV, academic transcripts, work experience certificates. Application fees range from ₹1,500-2,500 per college." },
          { step: "4", title: "Attend GD/PI/WAT Rounds (Feb-April 2026)", description: "Prepare for: Group Discussion (current business events, Delhi industry context), Personal Interview (HR questions, career story, MBA goal clarity), Written Ability Test (structured essay on business topics). FMS Delhi and MDI Gurgaon are very competitive at this stage." },
          { step: "5", title: "Accept Offer & Plan Finances", description: "Final merit lists released April-May 2026. Accept offer within 7 days to secure seat. Arrange education loan or fees payment. Orientation begins June 2026 at most Delhi MBA colleges." },
        ]}
        faqs={faqs}
        ctaHeading="Maximize Your CAT Score for the Best Delhi MBA College"
        ctaSubtext="Get personalized college shortlisting based on your CAT percentile, work experience, and academic profile. Our MBA counsellors have placed 1,000+ students in top Delhi B-schools."
      relatedGuides={[
        { label: "Best MBA colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
        { label: "Top 10 MBA Colleges — Ranked", href: "/top-10-mba-colleges-in-delhi", icon: "" },
        { label: "MBA Placement Guide — LPA Stats", href: "/mba-colleges-delhi-placement", icon: "" },
        { label: "Low Fees MBA colleges in Delhi", href: "/low-fees-mba-colleges-delhi", icon: "" },
        { label: "MBA Scholarships in Delhi", href: "/mba-colleges-delhi-scholarship", icon: "" },
        { label: "PGDM colleges in Delhi", href: "/pgdm-colleges-delhi", icon: "" },
        { label: "Admission Without CAT (IPU CET)", href: "/mba-admission-delhi-without-cat", icon: "" },
      ]}
      />
    </>
  )
}

