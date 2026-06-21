 import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "College Fees in Delhi 2026 | Fee Structure for Engineering, MBA & Medical",
  description: "Complete fee structure for colleges in Delhi 2026. Engineering fees ₹80K-4.8L/yr, MBA ₹4L-18L total, MBBS ₹1L-22L/yr. Government vs private college fee comparison.",
  path: "/colleges-delhi-fees",
  keywords: ["college fees Delhi", "Delhi college fee structure 2026", "engineering fees Delhi", "mba fees Delhi", "mbbs fees Delhi", "college fees comparison Delhi"],
})

export const revalidate = 300

const colleges = [
  { name: "DTU (Delhi Technological University) — Engineering Govt", location: "Rohini, Delhi", naac: "A+", fees: "₹80K–₹1.8L/yr", placement: "₹12 LPA avg", slug: "dtu-delhi" },
  { name: "Miranda House College — Arts/Science (DU Govt)", location: "North Delhi", naac: "A++", fees: "₹20K–₹50K/yr", placement: "₹5–8 LPA avg", slug: "miranda-house-delhi-university" },
  { name: "FMS Delhi (Faculty of Management Studies) — MBA Govt", location: "DU North Campus, Delhi", naac: "A++", fees: "₹55K (2yr total)", placement: "₹32 LPA avg", slug: "fms-delhi-faculty-management-studies" },
  { name: "IIIT Delhi (Indraprastha Institute of IT) — Engineering Autonomous", location: "Okhla Phase III, Delhi", naac: "A+", fees: "₹1.6L–₹2.2L/yr", placement: "₹18 LPA avg", slug: "iiit-delhi" },
  { name: "IMI Delhi (International Management Institute) — MBA Private", location: "Qutab Institutional Area, Delhi", naac: "A+", fees: "₹6.5L–₹8L/yr", placement: "₹14 LPA avg", slug: "imi-delhi-international-management-institute" },
  { name: "Maulana Azad Medical College — MBBS Govt", location: "BSZ Marg, Delhi", naac: "A", fees: "₹60K–₹1.2L/yr", placement: "Doctor Residency", slug: "mamc-maulana-azad-medical-college-delhi" },
  { name: "Lady Hardinge Medical College — MBBS Govt", location: "Connaught Place, Delhi", naac: "A+", fees: "₹60K–₹1.2L/yr", placement: "Hospital Residency", slug: "lady-hardinge-medical-college-delhi" },
  { name: "Amity University Noida — Engineering/MBA Deemed", location: "Sector 125, Noida", naac: "A+", fees: "₹2L–₹3.8L/yr", placement: "₹7.2 LPA avg", slug: "amity-university-noida-engineering" },
]

const faqs = [
  { q: "What is the average fee for engineering colleges in Delhi?", a: "Engineering fees in Delhi: Government colleges (DTU, IGDTUW): ₹80K–₹1.8L/year. Autonomous private colleges (IIIT Delhi, NSUT): ₹1.4L–₹2.2L/year. Deemed universities (Amity, Bennett): ₹2L–₹4.8L/year. The average across all engineering colleges is approximately ₹1.5–₹2L/year." },
  { q: "What is the fee for MBA in Delhi colleges?", a: "MBA fees in Delhi for 2 years: Government colleges (FMS Delhi): ₹55K total (extremely affordable). Mid-tier private (FORE, BIMTECH): ₹9–₹13L total. Premium private (IMI Delhi): ₹14L total. Top institute (MDI Gurgaon): ₹22L total. IIFT Delhi: ₹20L total." },
  { q: "Can I get a fee waiver or scholarship for Delhi colleges?", a: "Yes. EBC (Economically Backward Class) scholarship covers 100% tuition for family income under ₹2.5L/year. NSP (National Scholarship Portal) merit scholarship covers ₹15,000–₹25,000/year. SC/ST scholarships from Ministry of Social Justice cover full tuition + maintenance. Apply via scholarships.gov.in." },
  { q: "Are there hidden fees in Delhi private colleges?", a: "Private colleges in Delhi may charge additional fees beyond tuition: development fees (₹5,000–₹20,000/yr), exam fees, library fees, sports fees, and activity fees. Always ask for the all-inclusive fee breakup and check with current students before admission. AICTE prohibits arbitrary fee hikes." },
  { q: "What is the fee refund policy if I cancel admission in Delhi?", a: "UGC/AICTE rules mandate refund of fees (minus processing fee of ₹1,000) if you cancel before the last date of admission. For DU/IP University seats, refund applies until October 31. Always check the specific college refund policy and keep a copy of all fee receipts." },
]

export default function CollegesDELHIFeesPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "College Fees in Delhi", url: "/colleges-Delhi-fees" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "College Fees in Delhi 2026 -- Stream-wise Comparison",
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
        breadcrumb={[{ label: "College Fees in Delhi", href: "/colleges-Delhi-fees" }]}
        h1="College Fees in Delhi 2026"
        subtitle="Complete fee structure comparison for engineering, MBA, medical, arts, and commerce colleges in Delhi. Government vs private vs deemed university fees, scholarships, and payment options."
        heroStats={[
          { value: "₹15K-22L/yr", label: "Total Fees Range" },
          { value: "₹80K", label: "Cheapest Engg (DTU Delhi)" },
          { value: "100%", label: "Scholarship Available" },
          { value: "EMI", label: "Payment Options" },
        ]}
        introHeading="College Fees in Delhi 2026: The Complete Breakdown"
        introParagraphs={[
          "Understanding the fee structure of Delhi colleges is essential for financial planning before admission. Fees vary dramatically by stream, institution type, and quota: from ₹15,000/year at government arts colleges to ₹22L/year at private medical colleges. This comprehensive guide breaks down fees for all major streams and institution types in Delhi.",
          "The Delhi government regulates fees for all government and government-aided colleges. AICTE regulates engineering college fees for state-quota seats. For management quota and deemed university seats, fees are set by the Fee Regulation Authority (FRA) in Delhi, which prevents arbitrary fee hikes. This regulatory framework protects students from exploitative pricing.",
          "Beyond base tuition, students should budget for additional expenses: examination fees (₹1,000-5,000/semester), library and laboratory fees (₹2,000-10,000/year), development fees (allowed up to ₹5,000/year in aided colleges), hostel fees (₹60,000-1.5L/year), and living expenses (₹8,000-15,000/month in Delhi depending on area and lifestyle).",
        ]}
        colleges={colleges}
        whyHeading="Key Fee Facts for Delhi College Admission 2026"
        whyPoints={[
          { title: "Government College Fees Are Fixed", description: "Delhi government fixes fees for government and government-aided colleges. DTU Delhi engineering: ₹80K/year. Arts/Science government colleges: ₹15K-60K/year. These fees are non-negotiable and include all statutory fees." },
          { title: "Private College Fees Are FRA-Regulated", description: "Private engineering colleges in Delhi cannot charge more than FRA (Fee Regulation Authority) approved fees for JEE Main seats. Management quota seats have higher fees but are also regulated." },
          { title: "EMI & Education Loans Available", description: "All major banks (SBI, Canara, Union Bank) offer education loans up to ₹75L for Delhi colleges with no collateral for loans up to ₹7.5L. Interest rates are 8.5-10.5% with moratorium during study period." },
          { title: "Scholarship Can Cover Full Fees", description: "EBC scholarship, state merit scholarship, and National Scholarship Portal (NSP) schemes can effectively cover 100% tuition fees for eligible students across government-aided colleges in Delhi." },
          { title: "Deemed University Fee Premiums", description: "Deemed universities (Symbiosis, Amity University Delhi, DY Patil) set their own fees above government regulation. However, they offer premium placements, infrastructure, and international exposure justifying the cost." },
          { title: "Hidden Fees to Watch For", description: "Always request a complete fee breakup including development fees, refundable deposits, activity fees, and study tour costs. AICTE prohibits certain fees -- report violations to Delhi Fee Regulation Cell." },
        ]}
        admissionHeading="Fees Planning for Delhi College Admission 2026"
        admissionSteps={[
          { step: "1", title: "Calculate Total 4-Year Cost", description: "Estimate total cost: tuition fees x 4 years + hostel/PG + food + books/materials + exam fees + one-time deposits. Add 10% buffer for miscellaneous expenses. Government college total: ₹5-10L. Private: ₹10-20L. Deemed: ₹15-25L." },
          { step: "2", title: "Check Scholarship Eligibility Early", description: "Before admission, check your EBC/OBC/SC/ST scholarship eligibility. Apply simultaneously on NSP (scholarships.gov.in) and Delhi Scholarships Portal. Income certificates should be prepared in advance." },
          { step: "3", title: "Apply for Education Loan Pre-Admission", description: "Apply for education loan pre-admission at SBI/Canara Bank with provisionally allotted seat letter. Vidya Lakshmi Portal (vidyalakshmi.co.in) connects you to all bank education loan schemes." },
          { step: "4", title: "Verify Fee Details with College Directly", description: "Before confirming admission, get written fee breakup from the college's fee office. Verify that fees match FRA-approved amounts for regulated programs. Cross-check on the Delhi Fee Regulation Cell website." },
          { step: "5", title: "Keep Receipts & Track Scholarships", description: "After admission, keep all fee receipts for scholarship claims and income tax education deduction under Section 80C. Track scholarship disbursement dates to ensure timely credits to your bank account." },
        ]}
        faqs={faqs}
        ctaHeading="Plan Your College Budget with Our Free Fee Calculator"
        ctaSubtext="Use CollegeDelhi's fee calculator to estimate your 4-year education cost including scholarships, loans, and living expenses for any Delhi college."
      relatedGuides={[
        { label: "NAAC A+ colleges in Delhi", href: "/naac-a-plus-colleges-delhi", icon: "â­" },
        { label: "Low Fee colleges in Delhi", href: "/low-fee-colleges-Delhi", icon: "" },
        { label: "Top Placement colleges in Delhi", href: "/top-placement-colleges-delhi", icon: "" },
        { label: "College Fees Calculator", href: "/delhi-college-fees-calculator", icon: "" },
        { label: "Placement Comparator Tool", href: "/delhi-college-placement-comparator", icon: "" },
        { label: "Engineering vs MBA Comparison", href: "/delhi-colleges-comparison-engineering-mba", icon: "âš–ï¸" },
        { label: "Admission Deadline Tracker 2026", href: "/delhi-admission-deadline-tracker-2026", icon: "" },
      ]}
      />
    </>
  )
}
