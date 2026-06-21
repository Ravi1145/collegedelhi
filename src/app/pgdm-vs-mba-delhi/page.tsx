import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const revalidate = 300

export const metadata: Metadata = genMeta({
  title: "PGDM vs MBA in Delhi 2026 — Which is Better? Key Differences",
  description: "PGDM vs MBA: difference in eligibility, fees, ROI, top colleges in Delhi NCR. FMS, IMI, FORE, LBSIM compared. Which one should you choose in 2026?",
  path: "/pgdm-vs-mba-delhi",
  keywords: [
    "pgdm vs mba", "pgdm vs mba which is better", "pgdm vs mba in delhi",
    "difference between pgdm and mba", "pgdm colleges delhi", "mba vs pgdm fees",
    "pgdm vs mba salary", "pgdm vs mba placements delhi",
  ],
})

const faqs = [
  { q: "What is the difference between PGDM and MBA?", a: "MBA (Master of Business Administration) is a degree awarded by UGC-recognised universities like FMS Delhi or DSM DTU. PGDM (Post Graduate Diploma in Management) is a diploma awarded by autonomous AICTE-approved institutes like IMI Delhi or FORE School. Both are two-year programs, equally valued by most employers. The key difference: MBAs can carry 'university degree' status while PGDMs are institute-specific diplomas — but top PGDM colleges (IMI, FORE, LBSIM) are EQUIS/AMBA accredited, making them highly credible." },
  { q: "Which has better ROI — PGDM or MBA?", a: "FMS Delhi MBA offers India's best ROI: fees ₹16–22L total with ₹28 LPA average placement. Top PGDM colleges like IMI Delhi charge ₹18–22L with ₹18 LPA placement. For pure ROI, government MBA (FMS, DSM DTU) beats PGDM unless you're targeting top PGDM like IMI/FORE." },
  { q: "Is PGDM valid for government jobs?", a: "PGDM is generally not valid for government jobs that require a 'degree'. However, AICTE has been working on PGDM equivalency. For private sector, PSU banking, and management consulting, PGDM from top institutes is fully accepted." },
  { q: "What are the top PGDM colleges in Delhi NCR?", a: "Top PGDM colleges in Delhi NCR (2026): IMI Delhi (NIRF #24, ₹18 LPA), FORE School of Management (NIRF #43, ₹14.6 LPA), LBSIM Dwarka (NIRF #56, ₹12 LPA), BIMTECH Greater Noida (NIRF #61, ₹11.8 LPA), IMT Ghaziabad (NIRF #29, ₹14.5 LPA). All require CAT/XAT/MAT scores." },
  { q: "Which entrance exam is needed for PGDM vs MBA in Delhi?", a: "For MBA: CAT (FMS Delhi, DSM DTU, IMT), GMAT (select programmes). For PGDM: CAT/XAT (IMI, FORE, LBSIM), MAT/CMAT (IMT, BIMTECH). Government MBA colleges (FMS) are more selective with CAT 99%ile typically required." },
]

export default function PGDMvsMBAPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "PGDM vs MBA Delhi", url: "/pgdm-vs-mba-delhi" },
  ])
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SEOLandingPage
        breadcrumb={[{ label: "MBA Colleges Delhi", href: "/mba-colleges-delhi" }, { label: "PGDM vs MBA", href: "/pgdm-vs-mba-delhi" }]}
        h1="PGDM vs MBA in Delhi 2026 — Which is Better?"
        subtitle="Everything you need to choose between a PGDM and an MBA in Delhi NCR: fees, ROI, top colleges, entrance exams, and career outcomes compared."
        heroStats={[
          { value: "₹16–28L", label: "MBA Fees (total)" },
          { value: "₹14–22L", label: "PGDM Fees (total)" },
          { value: "₹28 LPA", label: "Best MBA Placement (FMS)" },
          { value: "₹18 LPA", label: "Best PGDM Placement (IMI)" },
        ]}
        introHeading="PGDM vs MBA: The Key Differences Explained"
        introParagraphs={[
          "The PGDM vs MBA debate confuses thousands of Delhi NCR students every year. Both are two-year full-time management programs. Both are accepted by top employers like McKinsey, BCG, Amazon, and Deloitte. The difference is legal and institutional: MBA is a university degree, PGDM is an autonomous institute diploma.",
          "In Delhi NCR, the top MBA colleges are government-affiliated (FMS Delhi, DSM DTU, Jamia) with fees as low as ₹1–1.8L/yr. The top PGDM colleges are private autonomous institutes (IMI Delhi, FORE, LBSIM) with fees of ₹14–22L total. PGDM institutes generally offer stronger industry exposure and corporate connections.",
          "For pure ROI, FMS Delhi MBA wins (₹16–22L fees, ₹28 LPA placement). If your CAT score isn't FMS-level, the next best ROI comes from top PGDM programmes like IMI Delhi or FORE School, both NIRF-ranked.",
        ]}
        colleges={[
          { name: "FMS Delhi — Faculty of Management Studies", location: "North Delhi", naac: "A+", fees: "₹16–22L total", placement: "₹28 LPA avg", slug: "fms-delhi-faculty-management-studies" },
          { name: "DMS IIT Delhi", location: "South Delhi", naac: "A++", fees: "₹8–12L total", placement: "₹26 LPA avg", slug: "dms-iit-delhi-management-studies" },
          { name: "IMT Ghaziabad", location: "Ghaziabad NCR", naac: "A+", fees: "₹17–22L total", placement: "₹14.5 LPA avg", slug: "imt-ghaziabad" },
          { name: "IMI Delhi", location: "South Delhi", naac: "A+", fees: "₹18–22L total", placement: "₹18 LPA avg", slug: "imi-delhi-international-management-institute" },
          { name: "MDI Gurgaon", location: "Gurugram", naac: "A", fees: "₹22–28L total", placement: "₹26 LPA avg", slug: "mdi-gurgaon-management-development-institute" },
          { name: "FORE School of Management", location: "South Delhi", naac: "A+", fees: "₹16–20L total", placement: "₹14.6 LPA avg", slug: "fore-school-management-delhi" },
          { name: "LBSIM Delhi", location: "Dwarka", naac: "A", fees: "₹14–18L total", placement: "₹12 LPA avg", slug: "lbsim-lal-bahadur-shastri-institute-management" },
          { name: "DSM DTU (Govt MBA)", location: "Rohini", naac: "A+", fees: "₹1–1.8L/yr", placement: "₹10 LPA avg", slug: "delhi-school-of-management-dtu" },
        ]}
        whyHeading="Why the PGDM vs MBA Choice Matters in Delhi"
        whyPoints={[
          { title: "Government MBA = Best ROI", description: "FMS Delhi charges ₹16–22L total and places graduates at ₹28 LPA. DSM DTU charges ₹1L/yr. No PGDM college in India matches this fee-to-placement ratio." },
          { title: "PGDM = Better Industry Network", description: "IMI, FORE, LBSIM run corporate leadership programmes, live projects with companies, and industry mentorship. Their alumni networks in private sector are often stronger than university MBA programmes." },
          { title: "Accreditation Matters", description: "PGDM value depends heavily on accreditation: EQUIS, AMBA, NBA. IMI Delhi and FORE hold AACSB candidacy. BIMTECH holds NBA accreditation. Always check before applying." },
          { title: "Government Jobs: MBA Wins", description: "For PSU and government management roles, MBA (university degree) is typically required. PGDM holders may face eligibility issues unless AICTE equivalency is confirmed." },
        ]}
        faqs={faqs}
        relatedGuides={[
          { label: "Best MBA Colleges Delhi", href: "/best-mba-colleges-delhi", icon: "" },
          { label: "PGDM Colleges Delhi", href: "/pgdm-colleges-delhi", icon: "" },
          { label: "CAT Colleges Delhi", href: "/cat-colleges-delhi", icon: "" },
          { label: "MBA without CAT Delhi", href: "/mba-admission-delhi-without-cat", icon: "" },
          { label: "FMS Delhi vs MDI", href: "/fms-delhi-vs-mdi-gurgaon", icon: "" },
          { label: "Low Fees MBA Delhi", href: "/low-fees-mba-colleges-delhi", icon: "" },
        ]}
      />
    </>
  )
}
