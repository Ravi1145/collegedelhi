import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "JEE colleges in Delhi 2026",
  description: "Engineering colleges in Delhi accepting JEE Main 2026. DTU Delhi, NSUT, IIIT Delhi — JEE cutoffs, fees, and admission process for Delhi colleges.",
  path: "/jee-colleges-delhi",
  keywords: ["jee colleges Delhi", "jee main colleges Delhi 2026", "engineering colleges Delhi jee main", "jee cutoff Delhi colleges"],
})

export const revalidate = 300

const colleges = [
  { name: "Delhi Technological University (DTU)", location: "Rohini, Delhi", naac: "A+", fees: "Government fee structure", placement: "Strong placement record", slug: "dtu-delhi" },
  { name: "Netaji Subhas University of Technology (NSUT)", location: "Dwarka, Delhi", naac: "A+", fees: "Government fee structure", placement: "Strong placement record", slug: "nsut-delhi" },
  { name: "Indraprastha Institute of Information Technology Delhi (IIIT Delhi)", location: "Okhla, Delhi", naac: "A", fees: "Government fee structure", placement: "Strong placement record", slug: "indraprastha-institute-of-information-technology-delhi" },
  { name: "Indira Gandhi Delhi Technical University for Women (IGDTUW)", location: "Kashmere Gate, Delhi", naac: "A", fees: "Government fee structure", placement: "Strong placement record", slug: "igdtuw-delhi" },
  { name: "Amity University", location: "Noida", naac: "A+", fees: "₹2.0L-3.8L/yr", placement: "₹7.2 LPA avg", slug: "amity-university-noida-delhi-ncr" },
]

const faqs = [
  { q: "Which Delhi engineering colleges accept JEE Main?", a: "DTU, NSUT, IGDTUW, and IIIT Delhi all accept JEE Main scores through JAC Delhi counselling for their respective seats. Amity University and other private/deemed universities also accept JEE Main scores for direct admission." },
  { q: "What JEE Main percentile is needed for DTU?", a: "DTU's seats require very high JEE Main percentiles, typically 97+ for Computer Science and somewhat lower for other branches — exact cutoffs vary by year and category. Check the official JAC Delhi counselling cutoff data for the current year." },
  { q: "Is JEE Main required for admission to engineering colleges in Delhi?", a: "Yes, JEE Main is the primary entrance exam for government engineering colleges in Delhi (DTU, NSUT, IGDTUW) via JAC Delhi counselling, and is also accepted by many private/deemed universities for direct admission." },
  { q: "Can out-of-state students use JEE Main for Delhi college admission?", a: "Yes. Government colleges (DTU, NSUT, IGDTUW, IIIT Delhi) reserve a portion of seats for All India Quota / outside-Delhi candidates via JAC Delhi counselling, alongside Delhi-domicile state quota seats. Private/deemed universities accept students from all states via JEE Main or their own entrance criteria." },
]

export default function JeeCollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "JEE colleges in Delhi", url: "/jee-colleges-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "JEE Main colleges in Delhi 2026",
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
        breadcrumb={[{ label: "JEE colleges in Delhi", href: "/jee-colleges-delhi" }]}
        h1="JEE Main colleges in Delhi 2026"
        subtitle="Explore Delhi engineering colleges accepting JEE Main scores for 2026 admission. State quota vs management quota options, JEE cutoffs, fees, and direct admission guidance."
        heroStats={[
          { value: "Verified", label: "Govt & Private Colleges" },
          { value: "75%ile+", label: "Min JEE (Amity and similar)" },
          { value: "97%ile+", label: "JEE for DTU/NSUT CSE" },
          { value: "Jan & Apr", label: "JEE Main Sessions" },
        ]}
        introHeading="JEE Main colleges in Delhi: Your Options for 2026"
        introParagraphs={[
          "JEE Main (Joint Entrance Examination Main) is accepted by a wide range of Delhi engineering colleges for management quota admissions, All India Quota (AIQ) seats, and direct admissions at deemed universities. While JEE Main is the primary route for Delhi state quota seats, JEE Main opens additional pathways - especially for students from outside Delhi or those seeking premium deemed university seats.",
          "For 2026, JEE Main will be conducted in two sessions: January and April. The best of two session scores is used for admission. NTA (National Testing Agency) conducts JEE Main, and scores are accepted by DTU, NSUT, IGDTUW, IIIT Delhi (via JAC Delhi), and many private/deemed universities for direct admission.",
          "A strategic advantage of strong JEE Main performance is access to management quota seats at autonomous colleges and deemed universities, bypassing the JEE Main CAP queue. Students who did not perform well in JEE Main can use JEE Main scores to secure admissions at IIIT Delhi, Amity University Delhi, or IMI Delhi directly through college-level admissions.",
        ]}
        colleges={colleges}
        whyHeading="JEE Main Advantages for Delhi College Admission"
        whyPoints={[
          { title: "Access to Deemed Universities", description: "IMI Delhi and Amity University Delhi accept JEE Main scores for direct admission. These institutions offer competitive placement for qualified JEE students." },
          { title: "Management Quota Flexibility", description: "Private engineering colleges in Delhi fill management quota seats based on JEE Main scores (and sometimes direct payment). This provides a parallel admission route alongside JEE Main CAP." },
          { title: "All India Quota at DTU Delhi", description: "DTU Delhi (India's #49 engineering college) reserves seats for All India Quota filled through JoSAA counselling based on JEE Main scores - giving non-Delhi students access to DTU Delhi's exceptional education." },
          { title: "Two Attempts Per Year", description: "JEE Main in January and April allows students to improve scores. The better of two scores is used. This gives an advantage over JEE Main (one attempt per year) for strategic test-takers." },
          { title: "JEE Advanced Pathway", description: "Top JEE Main performers can appear for JEE Advanced, qualifying for IITs. Delhi engineering college students who clear JEE Advanced from a college (gap year strategy) have successfully transferred to IITs." },
          { title: "National-Level Recognition", description: "JEE Main scores are recognized across all 31 NITs, 25 IIITs, and 28 GFTIs in India. A good JEE Main score gives maximum flexibility in national college choices beyond Delhi." },
        ]}
        admissionHeading="JEE Main to Delhi College: Admission Process 2026"
        admissionSteps={[
          { step: "1", title: "Register for JEE Main January 2026", description: "Register at jeemain.nta.nic.in from October-November 2025. Exam fee: ₹1,000 (general). JEE Main January session is typically held in January 2026, April session in April 2026." },
          { step: "2", title: "Attempt Both Sessions for Best Score", description: "Appear for both January and April sessions. NTA uses the best of two session percentiles. The April session result is typically higher due to additional preparation." },
          { step: "3", title: "Apply Directly to Deemed Universities (May-June)", description: "After JEE April results, apply to IMI Delhi, Amity University Delhi, and other Delhi deemed universities directly on their websites. These colleges have rolling admissions based on JEE scores - apply early for best branch choices." },
          { step: "4", title: "JoSAA Counselling for DTU Delhi AIQ (if eligible)", description: "If JEE Main qualifies for JoSAA, register at josaa.nic.in for DTU Delhi and other technical institutes' All India Quota seats. JoSAA rounds happen in June-July 2026." },
          { step: "5", title: "Parallel JEE Main CAP for Delhi Students", description: "If you're a Delhi resident, simultaneously participate in JEE Main CAP for state quota seats. Having both JEE Main and JEE Main scores maximizes your admission options." },
        ]}
        faqs={faqs}
        ctaHeading="Which Delhi College Can You Get with Your JEE Score?"
        ctaSubtext="Tell us your JEE Main percentile and category. Our AI predictor will show you the exact Delhi engineering colleges where you qualify for direct admission in 2026."
      relatedGuides={[
        { label: "Best Engineering colleges in Delhi 2026", href: "/engineering-colleges-delhi", icon: "" },
        { label: "Top 10 Engineering Colleges — Ranked", href: "/top-10-engineering-colleges-in-delhi", icon: "" },
        { label: "Placement Stats — Avg & Highest LPA", href: "/engineering-colleges-delhi-placement", icon: "" },
        { label: "Low Fees Engineering Colleges", href: "/low-fees-engineering-colleges-delhi", icon: "" },
        { label: "Engineering Scholarships in Delhi", href: "/engineering-colleges-delhi-scholarship", icon: "" },
        { label: "JEE Main Colleges & Cutoffs 2026", href: "/JEE Main-colleges-Delhi", icon: "" },
        { label: "Computer Engineering Colleges Delhi", href: "/computer-engineering-colleges-delhi", icon: "" },
        { label: "Government colleges in Delhi", href: "/government-colleges-delhi", icon: "" },
      ]}
      />
    </>
  )
}

