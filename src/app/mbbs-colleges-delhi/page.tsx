import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "MBBS Colleges in Delhi 2026 | NEET Admission Guide",
  description: "MBBS colleges in Delhi 2026: AIIMS Delhi, Vardhman Mahavir Medical College, ABVIMS — NEET UG admission, fees, and government hospital attachments",
  path: "/mbbs-colleges-delhi",
  keywords: ["mbbs colleges Delhi", "medical colleges Delhi neet", "mbbs admission Delhi 2026", "neet cutoff Delhi mbbs", "mbbs fees Delhi", "AIIMS Delhi MBBS"],
})

export const revalidate = 300

const colleges = [
  { name: "AIIMS Delhi", location: "Ansari Nagar, New Delhi", naac: "A++", fees: "₹1,628–₹50,000 total course", placement: "NEET UG, All India Quota", slug: "aiims-delhi" },
  { name: "Vardhman Mahavir Medical College (Safdarjung Hospital)", location: "Safdarjung, New Delhi", naac: "A", fees: "₹1.15L–₹2.65L/yr", placement: "NEET UG, Delhi government quota", slug: "vardhman-mahavir-medical-college" },
  { name: "Atal Bihari Vajpayee Institute of Medical Sciences (Dr. RML Hospital)", location: "New Delhi", naac: "A", fees: "₹51K–₹3.75L/yr", placement: "NEET UG, Delhi government quota", slug: "atal-bihari-vajpayee-institute-of-medical-sciences-and-dr-ram-manohar-lohia-hospital" },
]

const faqs = [
  { q: "What is the NEET cutoff for MBBS in Delhi government colleges?", a: "NEET cutoffs for government MBBS colleges in Delhi, including AIIMS Delhi, are among the most competitive in India and vary each year based on exam difficulty and applicant pool. Check the official MCC (All India Quota) and Delhi DGHS (state quota) cutoff data for the current year rather than relying on past-year estimates." },
  { q: "What is the fee for MBBS in Delhi?", a: "AIIMS Delhi's MBBS course costs approximately ₹1,628–₹50,000 for the entire program — among the most affordable in India. Vardhman Mahavir Medical College charges roughly ₹1.15L–₹2.65L/year, and Atal Bihari Vajpayee Institute of Medical Sciences charges roughly ₹51K–₹3.75L/year. All three are government institutions with regulated fee structures." },
  { q: "How many MBBS seats are there in Delhi government colleges?", a: "Seat counts at AIIMS Delhi, Vardhman Mahavir Medical College, and Atal Bihari Vajpayee Institute of Medical Sciences are set annually by the National Medical Commission and the respective institutions. Check the official NMC/MCC seat matrix for the current year's exact numbers rather than relying on past-year figures." },
  { q: "Is NEET UG required for all MBBS admissions in Delhi?", a: "Yes. NEET UG is mandatory for MBBS admission to every medical college in India, including AIIMS Delhi and all other government medical colleges in Delhi. AIIMS Delhi seats are filled via the All India Quota counselling conducted by the Medical Counselling Committee (MCC); the others fill through Delhi's state quota counselling." },
  { q: "What is the duration of MBBS in Delhi?", a: "MBBS is a 5.5-year program (4.5 years academic + 1 year compulsory rotating internship), following the National Medical Commission (NMC) curriculum, the same as everywhere else in India. After MBBS, graduates can pursue MD/MS (3 years) through NEET PG." },
]

export default function MbbsCollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBBS colleges in Delhi", url: "/mbbs-colleges-Delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "MBBS colleges in Delhi 2026",
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
        breadcrumb={[{ label: "MBBS colleges in Delhi", href: "/mbbs-colleges-Delhi" }]}
        h1="MBBS colleges in Delhi 2026"
        subtitle="Guide to MBBS admission in Delhi's verified government medical colleges. Compare NEET admission routes, fees, and hospital attachments for AIIMS Delhi and other Delhi government medical colleges."
        heroStats={[
          { value: "NEET UG", label: "Mandatory for All" },
          { value: "AIQ + State", label: "Counselling Routes" },
          { value: "₹1,628+", label: "AIIMS Delhi Fee (total)" },
          { value: "5.5 Years", label: "Program Duration" },
        ]}
        introHeading="MBBS colleges in Delhi: Admission Guide 2026"
        introParagraphs={[
          "Delhi's government medical colleges are led by AIIMS Delhi, India's top-ranked medical institution (NIRF #1 Medical), alongside Vardhman Mahavir Medical College (attached to Safdarjung Hospital) and Atal Bihari Vajpayee Institute of Medical Sciences (attached to Dr. Ram Manohar Lohia Hospital).",
          "MBBS admission across India, including Delhi, is entirely NEET UG-based, mandated by the National Medical Commission (NMC). AIIMS Delhi seats are filled through the All India Quota counselling conducted by the Medical Counselling Committee (MCC). Vardhman Mahavir Medical College and Atal Bihari Vajpayee Institute of Medical Sciences seats are filled through Delhi's state quota counselling process.",
          "Government medical college fees in Delhi are tightly regulated and among the most affordable in the country. AIIMS Delhi's entire MBBS course costs roughly ₹1,628–₹50,000. Always confirm current-year fees and seat matrices directly with the institutions or official NMC/MCC notifications.",
        ]}
        colleges={colleges}
        whyHeading="Why Study MBBS in Delhi?"
        whyPoints={[
          { title: "Top-Ranked Institution", description: "AIIMS Delhi is consistently ranked NIRF #1 in Medical nationally, giving students access to India's most respected medical training environment." },
          { title: "Major Hospital Attachments", description: "Vardhman Mahavir Medical College and Atal Bihari Vajpayee Institute of Medical Sciences are attached to Safdarjung Hospital and Dr. RML Hospital respectively — two of Delhi's largest government hospitals, offering significant clinical exposure." },
          { title: "Research Opportunities", description: "AIIMS Delhi has an active medical research ecosystem with funding from ICMR and other national bodies, giving students exposure to clinical research during their MBBS." },
          { title: "NEET PG Pathway", description: "Delhi's government medical colleges support strong NEET PG preparation, with graduates pursuing MD/MS at AIIMS and other top institutions nationally." },
          { title: "Regulated, Affordable Fees", description: "As government institutions, all three colleges have NMC-regulated fee structures significantly lower than private medical colleges elsewhere in India." },
        ]}
        admissionHeading="MBBS Admission Process in Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Qualify NEET UG", description: "NEET UG is conducted by NTA, typically in May. Government medical college cutoffs in Delhi are highly competitive — check current-year cutoff data rather than relying on past years. Register on the official NTA NEET portal." },
          { step: "2", title: "All India Quota Counselling (AIIMS Delhi)", description: "AIIMS Delhi seats are filled through All India Quota counselling conducted by the Medical Counselling Committee (MCC) at mcc.nic.in." },
          { step: "3", title: "Delhi State Quota Counselling", description: "Vardhman Mahavir Medical College and Atal Bihari Vajpayee Institute of Medical Sciences seats are allocated through Delhi's state quota counselling process — check the official Delhi DGHS portal for the current year's registration process." },
          { step: "4", title: "Document Verification & Reporting", description: "After seat allotment, report to the college with original documents (NEET scorecard, class 10/12 certificates, category certificate if applicable, migration certificate). Pay fees and begin MBBS." },
        ]}
        faqs={faqs}
        ctaHeading="Need Help with MBBS Admission in Delhi?"
        ctaSubtext="Our medical admission counsellors guide NEET aspirants through AIIMS Delhi and other government MBBS college admissions in Delhi. Get free, expert guidance on All India Quota vs state quota strategy."
      relatedGuides={[
        { label: "All Medical colleges in Delhi 2026", href: "/medical-colleges-delhi", icon: "" },
        { label: "NEET Colleges & Category Cutoffs", href: "/neet-colleges-Delhi", icon: "" },
        { label: "Top 10 Medical Colleges — Ranked", href: "/top-10-medical-colleges-in-delhi", icon: "" },
        { label: "NAAC A+ colleges in Delhi", href: "/naac-a-plus-colleges-delhi", icon: "â­" },
        { label: "Pharmacy colleges in Delhi", href: "/pharmacy-colleges-delhi", icon: "" },
        { label: "Free Medical Counselling", href: "/counselling", icon: "" },
      ]}
      />
    </>
  )
}

