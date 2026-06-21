import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "MBBS colleges in Delhi 2026 | Medical Admission | NEET Cutoffs & Fees",
  description: "Top MBBS colleges in Delhi 2026. Maulana Azad Medical College, AIIMS Delhi, Lady Hardinge Medical - NEET cutoffs, fees (₹1L-1.5Cr), seats & admission guide.",
  path: "/mbbs-colleges-delhi",
  keywords: ["mbbs colleges Delhi", "medical colleges Delhi neet", "mbbs admission Delhi 2026", "neet cutoff Delhi mbbs", "mbbs fees Delhi"],
})

export const revalidate = 300

const colleges = [
  { name: "BJ Government Medical College (MAMC)", location: "Connaught Place", naac: "A+", fees: "₹1L-2L/yr", placement: "100% match rate", slug: "bj-government-medical-college-delhi" },
  { name: "AIIMS Delhi (AFMC)", location: "Delhi Cantonment", naac: "A++", fees: "Fully Sponsored", placement: "Army Medical Service", slug: "afmc-armed-forces-medical-college-delhi" },
  { name: "Lady Hardinge Medical College Pitampura", location: "Pitampura", naac: "A+", fees: "₹18L-22L/yr", placement: "Hospital Residency", slug: "dy-patil-medical-college-Pitampura-Delhi" },
  { name: "Maulana Azad Medical College", location: "Rohini Sector 17", naac: "A", fees: "₹12L-16L/yr", placement: "Hospital Placements", slug: "bharati-vidyapeeth-medical-college-delhi" },
  { name: "Dr. Lady Hardinge Medical College (Nerul)", location: "Nerul/Delhi", naac: "A", fees: "₹14L-18L/yr", placement: "Residency Programs", slug: "dy-patil-medical-college-delhi" },
  { name: "Sharda Institute of Medical Sciences", location: "Greater Noida", naac: "B+", fees: "₹8L-12L/yr", placement: "Hospital Network", slug: "Sharda-institute-medical-sciences-Delhi" },
  { name: "Command Hospital Medical College", location: "Delhi Cantonment", naac: "A", fees: "₹6L-10L/yr", placement: "Armed Forces Priority", slug: "command-hospital-medical-college-delhi" },
  { name: "Datta Meghe Medical College", location: "Hingna/Delhi", naac: "A", fees: "₹10L-14L/yr", placement: "Hospital Residency", slug: "datta-meghe-medical-college-delhi" },
]

const faqs = [
  { q: "What is the NEET cutoff for MBBS in Delhi government colleges?", a: "BJ Government Medical College (MAMC) requires 630-650+ NEET score for general category students. SC/ST candidates require 560-590. AFMC has its own selection process - NEET + AFMC written test + SSB interview. Government MBBS seats in Delhi are extremely competitive." },
  { q: "What is the fee for MBBS in Delhi?", a: "Government MBBS (MAMC) costs ₹1-2L/year (₹5-10L total). AFMC is fully sponsored by the Army. Private MBBS colleges charge ₹8-22L/year (₹40L-1.5Cr total for 5.5 years). Government-aided private colleges offer some subsidized seats via MCC/State Quota." },
  { q: "How many MBBS seats are there in Delhi government colleges?", a: "BJ Government Medical College has 150 MBBS seats per year. 85 seats are under All India Quota (MCC), remaining 65 under State Quota (Delhi DMER). AFMC has 150 seats per year reserved for Armed Forces and civilian candidates." },
  { q: "Can I get MBBS in Delhi with 600 NEET score?", a: "With 600 NEET score, government colleges like MAMC are unlikely unless you're in SC/ST/OBC category. Private MBBS colleges in Delhi (DY Patil, Bharati Vidyapeeth) accept 530-580 NEET scores for management quota seats. NRI seats have no NEET score requirement but cost ₹80L-1.5Cr." },
  { q: "What is the duration of MBBS in Delhi?", a: "MBBS is a 5.5-year program (4.5 years academic + 1 year compulsory rotating internship). All Delhi MBBS colleges follow the National Medical Commission (NMC) approved curriculum. After MBBS, most graduates pursue MD/MS (3 years) through NEET PG." },
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
        subtitle="Complete guide to MBBS admission in Delhi. Compare NEET cutoffs, fees, seats, and hospitals attached to Delhi's government and private MBBS colleges for 2026 admission."
        heroStats={[
          { value: "10+", label: "MBBS Colleges" },
          { value: "NEET 630+", label: "Govt College Cutoff" },
          { value: "₹1L-22L/yr", label: "Annual Fees Range" },
          { value: "5.5 Years", label: "Program Duration" },
        ]}
        introHeading="MBBS colleges in Delhi: Complete Admission Guide 2026"
        introParagraphs={[
          "Delhi is home to some of India's most prestigious MBBS colleges, led by the historic BJ Government Medical College (MAMC) established in 1946 and the AIIMS Delhi (AFMC), one of only three Army medical colleges in India. These institutions are supplemented by several private medical colleges under deemed universities, offering 1,500+ MBBS seats annually.",
          "MBBS admission in Delhi is entirely NEET-based. The National Medical Commission (NMC) mandates NEET scores for all MBBS admissions. 15% of seats in government colleges go through All India Quota (controlled by MCC, New Delhi), while 85% go through State Quota (controlled by Delhi DMER, New Delhi). Private colleges split seats into Government Quota, Management Quota, and NRI Quota.",
          "The fee structure for MBBS in Delhi varies dramatically: BJ Government Medical College charges just ₹1-2L/year for government quota seats, while private medical colleges like DY Patil Pitampura charge ₹18-22L/year for management quota seats. AFMC is unique - the Army fully sponsors MBBS with stipend, in exchange for 7 years of Army medical service commitment.",
        ]}
        colleges={colleges}
        whyHeading="Why Study MBBS in Delhi?"
        whyPoints={[
          { title: "World-Class Hospital Exposure", description: "Delhi MBBS students get clinical training at KEM Hospital, Sassoon General Hospital, DY Patil Hospital, and Jehangir Hospital - exposing them to 1,000+ bed multi-specialty hospitals with diverse patient cases." },
          { title: "Medical Research Culture", description: "MAMC and AFMC have active medical research programs funded by ICMR and DST. Students can participate in clinical trials, publish papers, and gain research experience during MBBS itself." },
          { title: "NEET PG Preparation Support", description: "Delhi's medical coaching ecosystem and college libraries support intensive NEET PG preparation. Hundreds of Delhi MBBS graduates qualify NEET PG annually for MD/MS admissions at AIIMS and top medical institutions." },
          { title: "PG & Specialization Opportunities", description: "After MBBS from Delhi, graduates can pursue MD/MS at MAMC, Armed Forces Medical Center, or private medical colleges in Delhi - making it a complete medical education ecosystem." },
          { title: "Strong Medical Community", description: "The Delhi Indian Medical Association (IMA) chapter, medical conferences at MAMC, and Delhi Medical Council events give Delhi MBBS students strong professional networking from college days." },
          { title: "Affordable City for Medical Students", description: "Compared to private medical colleges in other metros, Delhi offers 30-40% lower accommodation costs. Private medical coaching institutes in Delhi for NEET PG preparation are also more affordable." },
        ]}
        admissionHeading="MBBS Admission Process in Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Qualify NEET UG 2026", description: "NEET UG is conducted in May 2026. Target 650+ for government MBBS colleges in Delhi. AFMC requires NEET + separate AFMC written exam. Register on nta.ac.in for NEET and afmc.nic.in for AFMC." },
          { step: "2", title: "Register for MCC Counselling (All India Quota)", description: "15% seats in MAMC fall under All India Quota, counselled by Medical Counselling Committee (MCC) at mcc.nic.in. Register, pay fees, and lock choices during Round 1 counselling (July 2026)." },
          { step: "3", title: "Delhi DMER State Quota (85% Seats)", description: "85% of government MBBS seats are allocated by Delhi DMER (Directorate of Medical Education and Research). Register on jacdelhi.admissions.nic.in. Domicile certificate is required for state quota." },
          { step: "4", title: "Private College Direct/Management Quota", description: "If state quota NEET cutoff is too high, apply to private MBBS colleges like DY Patil, Bharati Vidyapeeth directly. Management quota seats cost more but have lower NEET cutoffs (530-580)." },
          { step: "5", title: "Document Verification & Reporting", description: "After seat allotment, report to the college with original documents (NEET scorecard, class 10/12 certificates, caste certificate, medical fitness certificate, migration certificate). Pay fees and begin MBBS." },
        ]}
        faqs={faqs}
        ctaHeading="Need Help with MBBS Admission in Delhi?"
        ctaSubtext="Our medical admission counsellors guide NEET aspirants through MAMC, AFMC, and private MBBS college admissions in Delhi. Get free, expert guidance on state quota vs management quota strategy."
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

