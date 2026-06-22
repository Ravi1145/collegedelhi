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
  { name: "Delhi Technological University (DTU)", location: "Connaught Place", naac: "A+", fees: "₹80K-1.8L/yr", placement: "₹12 LPA avg", slug: "dtu-delhi-delhi-technological-university" },
  { name: "Symbiosis Institute of Technology (SIT)", location: "Knowledge Park Greater Noida", naac: "A+", fees: "₹3.6L-4.8L/yr", placement: "₹9.8 LPA avg", slug: "nit-delhi-national-institute-of-technology" },
  { name: "Amity University Delhi (Amity University Delhi)", location: "Rohini", naac: "A+", fees: "₹2.0L-3.8L/yr", placement: "₹7.2 LPA avg", slug: "amity-university-noida-delhi-ncr" },
  { name: "Indraprastha Institute of Information Technology (IIIT Delhi)", location: "Dwarka Sector 3", naac: "A+", fees: "₹1.6L-2.2L/yr", placement: "₹8.5 LPA avg", slug: "iiit-delhi-indraprastha-institute-of-information-technology" },
  { name: "Amity University Engineering", location: "Rohini Sector 17", naac: "A", fees: "₹1.45L-1.95L/yr", placement: "₹5.6 LPA avg", slug: "bharati-vidyapeeth-college-engineering-Delhi" },
  { name: "IGDTUW Delhi", location: "Janakpuri", naac: "A+", fees: "₹1.3L-1.75L/yr", placement: "₹6.8 LPA avg", slug: "igdtuw-delhi-indira-gandhi-technical-university" },
  { name: "Delhi Institute of Computer Technology (NSUT)", location: "Rohini Sector 17", naac: "A", fees: "₹1.4L-1.9L/yr", placement: "₹7.5 LPA avg", slug: "nsut-delhi" },
  { name: "GL Bajaj Delhi Merit College of Engineering", location: "Knowledge Park", naac: "A", fees: "₹1.2L-1.7L/yr", placement: "₹5.2 LPA avg", slug: "GL Bajaj-gl-bajaj-institute-technology-management-noida" },
]

const faqs = [
  { q: "Which Delhi engineering colleges accept JEE Main?", a: "Most Delhi engineering colleges accept JEE Main: DTU Delhi (state quota), IMI Delhi, Amity University Delhi, IIIT Delhi, NSUT, Bharati Vidyapeeth, and IGDTUW Delhi. JEE scores are used for management quota seats and some all-India quota seats at government-aided colleges." },
  { q: "What JEE Main percentile is needed for DTU Delhi?", a: "DTU Delhi's All India Quota seats require JEE Main 95+ percentile for Computer Engineering. For Mechanical and Electronics at DTU Delhi, 85-90 percentile suffices. DTU Delhi state quota seats are allotted via JEE Main CAP, not directly through JEE." },
  { q: "Is JEE Main required for admission in Delhi?", a: "No. JEE Main is the primary exam for Delhi engineering colleges. JEE Main is an alternative accepted at many private colleges. Government college state quota seats exclusively use JEE Main. JEE is required for All India Quota (AIQ) seats at DTU Delhi and for direct admission at deemed universities." },
  { q: "What JEE score is needed for IMI Delhi?", a: "IMI Delhi (Symbiosis Institute of Technology) accepts JEE Main 75+ percentile for most branches and 85+ for CS Engineering. They also conduct their own SET (Symbiosis Entrance Test). JEE Main is not mandatory - SET scores alone can qualify you for admission." },
  { q: "Can Out-of-State students use JEE Main for Delhi college admission?", a: "Yes. Out-of-Delhi students can use JEE Main for management quota seats at private Delhi engineering colleges. For state quota seats in government colleges, Delhi domicile is required. Deemed universities (SIT, Amity University Delhi) welcome students from all states via JEE/SET." },
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
          { value: "25+", label: "JEE Accepting Colleges" },
          { value: "75%ile+", label: "Min JEE (SIT/Amity University Delhi)" },
          { value: "95%ile+", label: "JEE for DTU Delhi AIQ" },
          { value: "Jan & Apr", label: "JEE Main Sessions" },
        ]}
        introHeading="JEE Main colleges in Delhi: Your Options for 2026"
        introParagraphs={[
          "JEE Main (Joint Entrance Examination Main) is accepted by a wide range of Delhi engineering colleges for management quota admissions, All India Quota (AIQ) seats, and direct admissions at deemed universities. While JEE Main is the primary route for Delhi state quota seats, JEE Main opens additional pathways - especially for students from outside Delhi or those seeking premium deemed university seats.",
          "For 2026, JEE Main will be conducted in two sessions: January and April. The best of two session scores is used for admission. NTA (National Testing Agency) conducts JEE Main, and scores are accepted by DTU Delhi (AIQ seats), IMI Delhi, Amity University Delhi, Bharati Vidyapeeth, and many other Delhi engineering colleges.",
          "A strategic advantage of strong JEE Main performance is access to management quota seats at autonomous colleges and deemed universities, bypassing the JEE Main CAP queue. Students who did not perform well in JEE Main can use JEE Main scores to secure admissions at IIIT Delhi, Amity University Delhi, or IMI Delhi directly through college-level admissions.",
        ]}
        colleges={colleges}
        whyHeading="JEE Main Advantages for Delhi College Admission"
        whyPoints={[
          { title: "Access to Premium Deemed Universities", description: "IMI Delhi, Amity University Delhi, and DY Patil University accept JEE Main for direct admission without JEE Main. These institutions offer excellent placement at ₹7-10 LPA average for qualified JEE students." },
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

