import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "NEET Colleges in Delhi 2026 | Medical Admission",
  description: "Medical colleges in Delhi accepting NEET 2026: AIIMS Delhi, Vardhman Mahavir Medical College, ABVIMS — admission routes, fees, and Delhi state quota",
  path: "/neet-colleges-delhi",
  keywords: ["neet colleges Delhi", "medical colleges Delhi neet 2026", "neet cutoff Delhi mbbs", "neet admission Delhi", "mbbs neet Delhi", "AIIMS Delhi NEET"],
})

export const revalidate = 300

const colleges = [
  { name: "AIIMS Delhi", location: "Ansari Nagar, New Delhi", naac: "A++", fees: "₹1,628–₹50,000 total course", placement: "NEET UG, All India Quota", slug: "aiims-delhi" },
  { name: "Vardhman Mahavir Medical College (Safdarjung Hospital)", location: "Safdarjung, New Delhi", naac: "A", fees: "₹1.15L–₹2.65L/yr", placement: "NEET UG, Delhi government quota", slug: "vardhman-mahavir-medical-college" },
  { name: "Atal Bihari Vajpayee Institute of Medical Sciences (Dr. RML Hospital)", location: "New Delhi", naac: "A", fees: "₹51K–₹3.75L/yr", placement: "NEET UG, Delhi government quota", slug: "atal-bihari-vajpayee-institute-of-medical-sciences-and-dr-ram-manohar-lohia-hospital" },
]

const faqs = [
  { q: "What NEET score is required for MBBS at Delhi government medical colleges?", a: "NEET cutoffs for AIIMS Delhi, Vardhman Mahavir Medical College, and Atal Bihari Vajpayee Institute of Medical Sciences are among the most competitive in India and vary each year. Check the official MCC (for AIIMS Delhi's All India Quota) and Delhi DGHS (for state quota) cutoff data for the current year." },
  { q: "How many MBBS seats are available in Delhi via NEET?", a: "Seat counts at AIIMS Delhi, Vardhman Mahavir Medical College, and Atal Bihari Vajpayee Institute of Medical Sciences are set annually by the National Medical Commission. Check the official NMC/MCC seat matrix published each year for exact, current numbers." },
  { q: "What is the process for NEET to MBBS admission in Delhi?", a: "Step 1: Qualify NEET UG. Step 2: For AIIMS Delhi, register for MCC All India Quota counselling at mcc.nic.in. Step 3: For Vardhman Mahavir Medical College and Atal Bihari Vajpayee Institute of Medical Sciences, register for Delhi's state quota counselling through the official Delhi DGHS portal." },
  { q: "Is there a private MBBS option in Delhi for lower NEET scores?", a: "Delhi's verified medical colleges (AIIMS Delhi, Vardhman Mahavir Medical College, Atal Bihari Vajpayee Institute of Medical Sciences) are all government institutions admitting strictly through NEET UG merit — there is no management quota at these colleges. For lower NEET scores, private medical colleges in other states may have management quota options; verify any such college's accreditation and fee structure carefully before applying." },
  { q: "Does AIIMS Delhi require only NEET?", a: "Yes. AIIMS Delhi MBBS admission is entirely through NEET UG All India Quota counselling conducted by the Medical Counselling Committee (MCC) — there is no separate entrance test for the MBBS program." },
]

export default function NeetCollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "NEET colleges in Delhi", url: "/neet-colleges-Delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "NEET Medical colleges in Delhi 2026",
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
        breadcrumb={[{ label: "NEET colleges in Delhi", href: "/neet-colleges-Delhi" }]}
        h1="NEET colleges in Delhi 2026"
        subtitle="Guide to Delhi's verified government medical colleges accepting NEET UG. Covers AIIMS Delhi, Vardhman Mahavir Medical College, and Atal Bihari Vajpayee Institute of Medical Sciences — admission routes, fees, and counselling strategy."
        heroStats={[
          { value: "NEET UG", label: "Only Admission Route" },
          { value: "AIQ + State", label: "Counselling Routes" },
          { value: "₹1,628+", label: "AIIMS Delhi Fee (total)" },
          { value: "May", label: "Typical NEET UG Month" },
        ]}
        introHeading="NEET colleges in Delhi: MBBS Admission Guide 2026"
        introParagraphs={[
          "NEET UG is the only pathway to MBBS admission anywhere in India, including Delhi. AIIMS Delhi, Vardhman Mahavir Medical College, and Atal Bihari Vajpayee Institute of Medical Sciences all mandatorily use NEET UG scores for MBBS seat allotment. The exam covers Physics, Chemistry, and Biology from the Class 11 and 12 curricula and is conducted annually by NTA.",
          "AIIMS Delhi is India's top-ranked medical college (NIRF #1 Medical). Vardhman Mahavir Medical College is attached to Safdarjung Hospital, and Atal Bihari Vajpayee Institute of Medical Sciences is attached to Dr. Ram Manohar Lohia Hospital — both among Delhi's largest government hospitals.",
          "Delhi's government medical seat allocation works through two main routes: AIIMS Delhi seats are filled via the All India Quota (AIQ), allotted by the Medical Counselling Committee (MCC). Vardhman Mahavir Medical College and Atal Bihari Vajpayee Institute of Medical Sciences seats are filled through Delhi's state quota counselling process.",
        ]}
        colleges={colleges}
        whyHeading="Why Study Medicine in Delhi?"
        whyPoints={[
          { title: "India's Top-Ranked Medical College", description: "AIIMS Delhi is consistently ranked NIRF #1 in Medical nationally, offering an unmatched academic and clinical training environment." },
          { title: "Major Government Hospital Training", description: "Vardhman Mahavir Medical College and Atal Bihari Vajpayee Institute of Medical Sciences give students hands-on training at Safdarjung Hospital and Dr. RML Hospital — both large, high-volume government hospitals." },
          { title: "Strong NEET PG Preparation", description: "Delhi's academic and coaching ecosystem supports NEET PG preparation, with many graduates from these colleges going on to MD/MS programs at top institutions." },
          { title: "Research Opportunities", description: "AIIMS Delhi has an active research ecosystem with national funding bodies, giving students exposure to clinical research during MBBS." },
          { title: "Affordable Government Medical Education", description: "All three colleges are government institutions with NMC-regulated fee structures — AIIMS Delhi's entire MBBS course costs roughly ₹1,628–₹50,000, among the most affordable in India." },
        ]}
        admissionHeading="NEET to MBBS Admission in Delhi: Step-by-Step 2026"
        admissionSteps={[
          { step: "1", title: "Register for NEET UG at NTA", description: "Register on the official NTA NEET UG portal. The exam is typically conducted in May. Prepare using the NCERT syllabus for Physics, Chemistry, and Biology." },
          { step: "2", title: "Check NEET Results & Rank", description: "NEET UG results are published on the official NTA portal. Your rank determines eligibility for All India Quota (AIIMS Delhi) and Delhi state quota (Vardhman Mahavir Medical College, Atal Bihari Vajpayee Institute of Medical Sciences) counselling." },
          { step: "3", title: "MCC Counselling for AIIMS Delhi (All India Quota)", description: "Register on mcc.nic.in after NEET UG results for All India Quota counselling, which fills AIIMS Delhi seats." },
          { step: "4", title: "Delhi State Quota Counselling", description: "Register on the official Delhi DGHS state quota counselling portal for Vardhman Mahavir Medical College and Atal Bihari Vajpayee Institute of Medical Sciences seats. Domicile requirements may apply — check the current year's notification." },
        ]}
        faqs={faqs}
        ctaHeading="Need NEET Admission Guidance for Delhi Medical Colleges?"
        ctaSubtext="Our medical admission counsellors can guide you through Delhi's All India Quota and state quota counselling process for AIIMS Delhi and other government medical colleges."
      relatedGuides={[
        { label: "All Medical colleges in Delhi 2026", href: "/medical-colleges-delhi", icon: "" },
        { label: "MBBS Colleges — NEET Cutoffs & Fees", href: "/mbbs-colleges-Delhi", icon: "" },
        { label: "Top 10 Medical Colleges — Ranked", href: "/top-10-medical-colleges-in-delhi", icon: "" },
        { label: "NAAC A+ colleges in Delhi", href: "/naac-a-plus-colleges-delhi", icon: "â­" },
        { label: "Pharmacy colleges in Delhi", href: "/pharmacy-colleges-delhi", icon: "" },
        { label: "Free Medical Counselling", href: "/counselling", icon: "" },
      ]}
      />
    </>
  )
}

