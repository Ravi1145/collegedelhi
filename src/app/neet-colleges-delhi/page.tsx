import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "NEET colleges in Delhi 2026 | Medical Colleges | NEET Cutoffs & Seats",
  description: "Medical colleges in Delhi accepting NEET 2026. MAMC, AFMC, DY Patil, Bharati Vidyapeeth - NEET cutoffs (score-wise), MBBS seats, fees, and Delhi state quota admission.",
  path: "/neet-colleges-delhi",
  keywords: ["neet colleges Delhi", "medical colleges Delhi neet 2026", "neet cutoff Delhi mbbs", "neet admission Delhi", "mbbs neet Delhi"],
})

export const revalidate = 300

const colleges = [
  { name: "BJ Government Medical College (MAMC)", location: "Connaught Place", naac: "A+", fees: "₹1L-2L/yr", placement: "NEET Cutoff: 630+ (General)", slug: "bj-government-medical-college-delhi" },
  { name: "AIIMS Delhi (AFMC)", location: "Delhi Cantonment", naac: "A++", fees: "Fully Sponsored", placement: "NEET + AFMC Test Required", slug: "afmc-armed-forces-medical-college-delhi" },
  { name: "Lady Hardinge Medical College Pitampura", location: "Pitampura", naac: "A+", fees: "₹18L-22L/yr", placement: "NEET Cutoff: 540+ (Mgmt)", slug: "dy-patil-medical-college-Pitampura-Delhi" },
  { name: "Maulana Azad Medical College", location: "Rohini Sector 17", naac: "A", fees: "₹12L-16L/yr", placement: "NEET Cutoff: 530+ (Mgmt)", slug: "bharati-vidyapeeth-medical-college-delhi" },
  { name: "Sharda Institute of Medical Sciences", location: "Greater Noida", naac: "B+", fees: "₹8L-12L/yr", placement: "NEET Cutoff: 510+ (Mgmt)", slug: "Sharda-institute-medical-sciences-Delhi" },
  { name: "Command Hospital Medical College", location: "Delhi Cantonment", naac: "A", fees: "₹6L-10L/yr", placement: "Armed Forces Priority", slug: "command-hospital-medical-college-delhi" },
  { name: "Dr. Lady Hardinge Medical College (DYPMC)", location: "Nerul/DY Patil Campus", naac: "A", fees: "₹14L-18L/yr", placement: "NEET Cutoff: 520+ (Mgmt)", slug: "dy-patil-medical-college-delhi" },
  { name: "Dr. Vithalrao Vikhe Patil College of Medicine", location: "AhmedNoida Road", naac: "A", fees: "₹10L-15L/yr", placement: "NEET Cutoff: 520+", slug: "vvpmc-Delhi" },
]

const faqs = [
  { q: "What NEET score is required for MBBS at MAMC Delhi?", a: "BJ Government Medical College (MAMC) requires 630-650+ NEET score for General category via All India Quota. State Quota (Delhi residents) requires approximately 600-640 NEET score. OBC requires 580-620. SC/ST requires 550-590. Exact cutoffs vary yearly based on total candidates." },
  { q: "How many MBBS seats are available in Delhi via NEET 2026?", a: "Delhi medical colleges have approximately 1,200+ MBBS seats total: MAMC (150 seats), AFMC (150 seats), DY Patil Pitampura (250 seats), Bharati Vidyapeeth (150 seats), Sharda Medical (150 seats), Command Hospital (100 seats), DYPMC (150 seats). Actual seat matrix varies by year." },
  { q: "What is the process for NEET to MBBS admission in Delhi?", a: "Step 1: Qualify NEET UG (May 2026). Step 2: Apply for MCC counselling for 15% AIQ seats at MAMC. Step 3: Register for Delhi DMER State Quota counselling (85% seats). Step 4: Apply directly to private medical colleges for management quota." },
  { q: "Can I get MBBS in Delhi with 500 NEET score?", a: "Government MBBS at MAMC is not possible with 500 score (requires 600-640). Private management quota seats at lower-tier Delhi medical colleges (Sharda Medical, DYPMC) may be possible with 500+ score but cost ₹8-18L/year. NRI quota seats have no minimum NEET score requirement but cost ₹80L-1.5Cr total." },
  { q: "Does AIIMS Delhi require only NEET?", a: "No. AFMC admission requires: NEET UG score (600+) + AFMC written exam (conducted separately by AFMC) + SSB (Services Selection Board) interview. It's the most competitive medical college in Delhi, with less than 150 seats for civilian candidates. Army commitments apply post-graduation." },
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
        subtitle="Complete guide to medical colleges in Delhi accepting NEET 2026. Includes MAMC, AFMC, Lady Hardinge Medical - NEET cutoffs, MBBS seats, fees, and state quota vs management quota strategy."
        heroStats={[
          { value: "10+", label: "NEET Medical Colleges" },
          { value: "1,200+", label: "MBBS Seats" },
          { value: "NEET 630+", label: "Govt College Cutoff" },
          { value: "May 2026", label: "NEET UG Date" },
        ]}
        introHeading="NEET colleges in Delhi: MBBS Admission Guide 2026"
        introParagraphs={[
          "NEET UG (National Eligibility cum Entrance Test) is the only pathway to MBBS admission in Delhi. All 10+ medical colleges in Delhi mandatorily use NEET scores for MBBS seat allotment since 2020. The test covers Physics, Chemistry, and Biology (Botany + Zoology) from Class 11 and 12 curricula and is conducted by NTA annually in May.",
          "Delhi's medical colleges range from the historic BJ Government Medical College (est. 1946) - one of Delhi's premier MBBS institutions - to modern private colleges under DY Patil University and Bharati Vidyapeeth. The spectrum of fee structures (₹1L/year at MAMC to ₹22L/year at private colleges) creates options across different NEET score ranges.",
          "Delhi's medical seat allocation follows a dual-track system: 15% All India Quota (AIQ) allotted by Medical Counselling Committee (MCC) at New Delhi through josaa counselling, and 85% State Quota managed by Delhi DMER (Directorate of Medical Education and Research), New Delhi. Private college management quota seats are filled directly through college-level counselling.",
        ]}
        colleges={colleges}
        whyHeading="Why Study Medicine in Delhi?"
        whyPoints={[
          { title: "Prestigious MAMC Hospital Training", description: "MAMC students train at Sassoon General Hospital (1,400+ beds) - one of Delhi's largest public hospitals with enormous patient diversity, creating unparalleled clinical training exposure." },
          { title: "AFMC - Army Medical College", description: "AIIMS Delhi is India's premier AIIMS Delhi. Graduates serve as Army Medical Corps officers with excellent career progression, travel opportunities, and post-service civilian careers." },
          { title: "Strong NEET PG Preparation", description: "Delhi's medical coaching ecosystem (coaching institutes in Connaught Place, South Delhi) and college libraries are excellent for NEET PG preparation. Delhi consistently produces NEET PG qualifiers for MD/MS admissions." },
          { title: "Research & Specialization Hub", description: "Delhi's medical colleges collaborate with Aga Khan University Hospital, Ruby Hall Clinic, and Jehangir Hospital for specialty training. These teaching hospital attachments enhance clinical skills during MBBS." },
          { title: "Post-MBBS Career Options", description: "MBBS from Delhi qualifies you for: MD/MS (specialization), MBBS government job (PHC, civil hospital), private practice, medical research, pharmaceutical industry, hospital management MBA, and international medical licensing exams (USMLE, PLAB)." },
          { title: "Affordable Government Medical Education", description: "Government medical college fees in Delhi are among the lowest in India. MAMC fee is ₹1-2L/year for top-quality education, far below private medical colleges anywhere in India." },
        ]}
        admissionHeading="NEET to MBBS Admission in Delhi: Step-by-Step 2026"
        admissionSteps={[
          { step: "1", title: "Register for NEET UG 2026 at NTA", description: "Register at nta.ac.in from January-February 2026. NEET exam fee: ₹1,700 (general). Exam date: typically May 2026 (Sunday). Prepare with NCERT Biology (60% weightage), Physics and Chemistry (40% combined). Target 600+ for government MBBS." },
          { step: "2", title: "AFMC Aspirants: Register Separately", description: "AFMC has a separate application at afmc.nic.in. Along with NEET, candidates must qualify AFMC's own written test and SSB interview. Applications typically open March-April 2026. Limited to Indian nationals." },
          { step: "3", title: "Check NEET Results & Rank (June 2026)", description: "NEET results published at nta.ac.in. Download your scorecard. Your rank determines AIQ (All India Quota) eligibility via MCC and Delhi State Quota eligibility via DMER." },
          { step: "4", title: "MCC Counselling for AIQ (15% MAMC Seats)", description: "Register on mcc.nic.in after NEET results. AIQ counselling happens in 2 rounds (July 2026). 15% MAMC seats are allotted here. Requires NEET 630+ for general category at MAMC." },
          { step: "5", title: "Delhi DMER State Quota (85% Seats)", description: "Register on Delhi DMER portal for state quota counselling (85% seats). Requires Delhi domicile. Slightly lower cutoffs than AIQ. Private college management quota: apply directly to colleges - fees are higher but NEET cutoffs are lower." },
        ]}
        faqs={faqs}
        ctaHeading="Need NEET Admission Guidance for Delhi Medical Colleges?"
        ctaSubtext="Our medical admission counsellors specialize in Delhi NEET quotas. Get free guidance on state quota vs management quota strategy, MAMC vs private college trade-offs, and scholarship options."
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

