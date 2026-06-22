import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "MBA in Operations Management Delhi 2026",
  description: "Best MBA in Operations colleges in Delhi 2026: MDI Gurgaon, IMI Delhi, FORE, BIMTECH. Supply chain & logistics roles. Fees Rs55K-Rs22.5L, placements Rs8-26 LPA.",
  path: "/mba-in-operations-delhi",
  keywords: [
    "mba in operations management delhi",
    "best mba in operations in delhi",
    "mba operations colleges delhi ncr",
    "mba supply chain management delhi",
    "mba in logistics delhi 2026",
    "mba operations admission delhi",
    "mba operations salary delhi",
    "pgdm operations management delhi",
    "best college for mba operations delhi",
    "mba operations placement delhi 2026",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "FMS Delhi — MBA (Operations Elective)", location: "University Enclave, North Delhi", naac: "A++", fees: "Rs55K total", placement: "Rs32 LPA avg", slug: "fms-delhi-faculty-management-studies" },
  { name: "MDI Gurgaon — PGDM (Operations & SCM)", location: "MG Road, Gurgaon, Haryana", naac: "A+", fees: "Rs22.5L total", placement: "Rs26 LPA avg", slug: "mdi-gurgaon-management-development-institute" },
  { name: "IMI Delhi — PGDM (Operations Management)", location: "Qutab Institutional Area, New Delhi", naac: "A+", fees: "Rs19.5L total", placement: "Rs14 LPA avg", slug: "imi-delhi-international-management-institute" },
  { name: "FORE School — PGDM (Operations)", location: "B-18, Qutab Institutional Area, Delhi", naac: "A", fees: "Rs16.5L total", placement: "Rs12 LPA avg", slug: "fore-school-of-management-delhi" },
  { name: "BIMTECH Greater Noida — PGDM (Operations)", location: "Knowledge Park, Greater Noida", naac: "A", fees: "Rs9.5L total", placement: "Rs10 LPA avg", slug: "bimtech-birla-institute-management-technology-noida" },
  { name: "Amity University Noida — MBA Operations", location: "Sector 125, Noida (Delhi NCR)", naac: "A+", fees: "Rs4.5L total", placement: "Rs7 LPA avg", slug: "amity-university-noida-delhi-ncr" },
]

const faqs = [
  { q: "Which is the best college for MBA Operations in Delhi?", a: "MDI Gurgaon is the best for MBA Operations and Supply Chain in Delhi NCR — NIRF #9, NAAC A+, Rs26 LPA average placement. Amazon, Flipkart, Maersk, and McKinsey Operations Practice recruit from MDI. FMS Delhi (Rs55K total fees) is the best overall MBA with excellent Operations electives delivering Rs32 LPA avg. For lower CAT scores: BIMTECH Greater Noida (75+ percentile, Rs9.5L) has a strong PGDM Operations programme." },
  { q: "What is the salary after MBA Operations in Delhi?", a: "Average salary after MBA Operations from Delhi colleges 2024: MDI Gurgaon Rs22-26 LPA avg. IMI Delhi Rs12-14 LPA. FORE School Rs10-12 LPA. BIMTECH Rs9-10 LPA. Top roles: Supply Chain Head (e-commerce) Rs18-30 LPA. Logistics Director Rs20-35 LPA. Operations Consultant (McKinsey/BCG/Kearney) Rs20-40 LPA. Amazon, Flipkart, Maersk, Mahindra Logistics, and DHL actively hire MBA Operations from Delhi colleges." },
  { q: "What jobs after MBA Operations in Delhi?", a: "MBA Operations career options in Delhi NCR 2026: Supply Chain Manager (Amazon, Flipkart) Rs12-22 LPA. Procurement Manager (L&T, BHEL, Maruti) Rs10-18 LPA. Operations Consultant (McKinsey, BCG, Kearney) Rs15-25 LPA. Plant Manager (Hero MotoCorp, Maruti, Samsung) Rs12-20 LPA. Logistics Manager (DHL, FedEx, Maersk) Rs10-18 LPA. Delhi NCR has India's largest e-commerce operations and manufacturing hub." },
  { q: "What CAT cutoff for MBA Operations Delhi 2026?", a: "CAT 2026 cutoffs: MDI Gurgaon — 92-97 percentile. FMS Delhi — 99+ percentile. IMI Delhi — 85-90 percentile. FORE School — 80-85 percentile. BIMTECH Greater Noida — 72-78 percentile. Amity Noida — own AUAT test. Engineering background is an advantage for Operations — quantitative strength and process-thinking are tested in GD-PI." },
  { q: "Is MBA Operations worth it in 2026?", a: "MBA Operations is excellent in 2026: E-commerce boom has created thousands of Operations Manager roles at Rs12-22 LPA. Manufacturing PLI scheme driving new factories in Delhi NCR. Green supply chain roles growing 40% YoY. AI in operations creating hybrid roles at Rs18-28 LPA for candidates with analytics skills. ROI is strongest at MDI Gurgaon and FMS Delhi." },
]

export default function MBAOperationsDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "MBA in Operations Delhi", url: "/mba-in-operations-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best MBA Operations Colleges in Delhi 2026",
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
          { label: "MBA in Operations Delhi", href: "/mba-in-operations-delhi" },
        ]}
        h1="Best MBA in Operations Colleges in Delhi 2026"
        subtitle="MBA in Operations Management covers Supply Chain, Logistics, Procurement, Manufacturing, and Project Management. Delhi NCR is India's largest e-commerce operations and manufacturing hub. MDI Gurgaon, IMI Delhi, FORE, and BIMTECH place students at Rs7-26 LPA in Operations roles."
        heroStats={[
          { value: "12+", label: "MBA Operations Colleges NCR" },
          { value: "Rs55K-Rs22.5L", label: "Total Fees Range" },
          { value: "Rs26 LPA", label: "MDI Gurgaon Avg Placement" },
          { value: "Rs40 LPA", label: "Top Operations Consultant" },
        ]}
        introHeading="MBA Operations Management in Delhi 2026 — Career & College Guide"
        introParagraphs={[
          "MBA in Operations Management is one of the three core MBA specializations alongside Finance and Marketing. It covers Supply Chain Management, Procurement, Logistics, Production Planning, Quality Management, and Project Management. Delhi NCR's industrial spine — Gurgaon, Manesar, Faridabad, and Noida — makes it India's best location for Operations MBA placement.",
          "MDI Gurgaon is the top Operations MBA in Delhi NCR, consistently recruiting from Amazon Supply Chain, McKinsey Operations Practice, Mahindra Logistics, Maersk, and DHL. BIMTECH Greater Noida offers PGDM Operations at Rs9.5L with strong manufacturing and logistics placements at Rs10 LPA avg. Both accept CAT scores.",
          "E-commerce has transformed Operations as a career track. Amazon India, Flipkart, Swiggy, Zomato, and BigBasket collectively employ thousands of Operations MBAs in Delhi NCR. Starting package: Rs12-18 LPA. 5-year trajectory: Rs25-35 LPA as Regional Operations Head.",
        ]}
        colleges={colleges}
        whyHeading="Why MBA Operations in Delhi NCR?"
        whyPoints={[
          { title: "E-Commerce Operations Capital", description: "Amazon, Flipkart, Meesho, BigBasket and 50+ e-commerce companies have major fulfilment centres in Delhi NCR. MBA Operations graduates from MDI Gurgaon and IMI Delhi get direct campus recruitment access to Rs14-22 LPA Supply Chain Manager and Operations Head roles." },
          { title: "Manufacturing Hub — Gurgaon, Manesar, Faridabad", description: "Maruti Suzuki, Hero MotoCorp, Honda, JCB, and 500+ MSME manufacturers in Faridabad/Bahadurgarh employ Operations MBA graduates in Plant Operations, Procurement, and Production Planning at Rs10-18 LPA." },
          { title: "Logistics & SCM Companies", description: "Delhi NCR hosts DHL, FedEx, Mahindra Logistics, Delhivery, Gati-KWE, and Blue Dart India HQs. MBA Operations graduates enter as Logistics Manager or SCM Analyst at Rs10-18 LPA, growing to Rs25-30 LPA in 5 years." },
          { title: "Operations Consulting Practice", description: "McKinsey, BCG, Kearney, Deloitte, and Accenture Operations Practices in Delhi-Gurgaon hire MBA Operations specialists from MDI and IMI Delhi for Rs20-35 LPA in supply chain restructuring and logistics cost optimization projects." },
          { title: "Six Sigma & PMP Certification", description: "Operations MBA programmes at BIMTECH and IMI Delhi integrate Six Sigma Green Belt and PMP prep. Dual credential (PGDM + Six Sigma GB) makes candidates 20-30% more competitive for manufacturing and project management roles." },
          { title: "AI & Analytics in Operations", description: "Operations Analytics, Demand Forecasting, Warehouse Automation, and RPA are creating hybrid Operations + Analytics roles at Rs18-28 LPA. MBA Operations graduates with SQL/Python skills get a Rs4-6 LPA premium at Amazon, Flipkart, and Accenture Operations." },
        ]}
        admissionHeading="MBA Operations Admission Process Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Appear for CAT 2025", description: "CAT 2025 (November 2025) is the primary entrance. Target scores: MDI Gurgaon 92-97 percentile, IMI Delhi 85-90 percentile, FORE School 80-85 percentile, BIMTECH 72-78 percentile. Engineering background is an advantage — quantitative strength helps in Operations Analytics and impresses Operations-track interviewers." },
          { step: "2", title: "Apply to Target Colleges", description: "MDI Gurgaon: mdi.ac.in (December 2025). IMI Delhi: imi.edu (December 2025). FORE School: fsm.ac.in (December-February 2026). BIMTECH: bimtech.ac.in (December 2025). Highlight prior work experience in manufacturing, logistics, e-commerce, or supply chain — Operations colleges value domain experience." },
          { step: "3", title: "GD/WAT + Operations-Focused PI", description: "Operations MBA interviews test: analytical thinking with numbers, supply chain basics (lead time, inventory turnover, EOQ, Lean manufacturing), problem-solving under constraints, and awareness of e-commerce logistics, Industry 4.0, and green supply chain trends." },
          { step: "4", title: "Choose Operations Electives in Year 2", description: "Core electives: Supply Chain Management, Operations Research, Quality Management (Six Sigma), Project Management, ERP Systems (SAP/Oracle), Lean Manufacturing, Demand Forecasting and Analytics. Six Sigma Green Belt is often integrated into the PGDM Operations curriculum at BIMTECH and IMI Delhi." },
          { step: "5", title: "Operations Summer Internship (SIP)", description: "Target SIP companies: Amazon Logistics, Flipkart Supply Chain, Mahindra Logistics, Maruti Suzuki, DHL India, McKinsey/BCG Operations Practice. SIP stipend: Rs30K-60K/month. Strong SIP projects with measurable cost reduction or process improvement results directly convert to Pre-Placement Offers (PPOs) at Rs12-18 LPA." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free MBA Operations Guidance for Delhi"
        ctaSubtext="Tell us your CAT percentile and target sector (E-commerce / Manufacturing / Consulting) — we'll shortlist the best MBA Operations college in Delhi NCR for your profile."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
          { label: "FMS Delhi — ₹55K MBA", href: "/fms-delhi", icon: "" },
          { label: "MDI Gurgaon — PGDM", href: "/mdi-gurgaon", icon: "" },
          { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi", icon: "" },
          { label: "MBA in Marketing Delhi", href: "/mba-in-marketing-delhi", icon: "" },
          { label: "MBA in HR Delhi", href: "/mba-in-hr-delhi", icon: "" },
          { label: "Executive MBA Delhi", href: "/executive-mba-delhi", icon: "" },
          { label: "Government MBA Colleges Delhi", href: "/government-mba-colleges-delhi", icon: "" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "" },
          { label: "MBA Colleges Gurgaon", href: "/mba-colleges-gurgaon", icon: "" },
        ]}
      />
    </>
  )
}
