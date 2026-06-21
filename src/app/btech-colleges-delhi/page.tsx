import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateCourseSchema, generateSpeakableSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Best BTech Colleges in Delhi 2026 | Fees, JEE Main Cutoff & Placements",
  description: "Top BTech colleges in Delhi 2026: DTU (₹80K/yr, ₹12 LPA), NSUT, IIIT Delhi, NIT Delhi. JEE Main cutoffs, fees ₹80K–4.8L/yr, NAAC grades compared.",
  path: "/btech-colleges-delhi",
  keywords: [
    "btech colleges in Delhi 2026",
    "best btech college Delhi",
    "b.tech colleges Delhi",
    "btech admission Delhi 2026",
    "btech fees Delhi",
    "jee main colleges Delhi",
    "dtu delhi btech admission",
    "nsut btech delhi",
    "iiit delhi btech",
    "nit delhi btech",
    "government btech colleges Delhi",
    "jac delhi btech 2026",
    "btech engineering Delhi",
    "top engineering colleges Delhi 2026",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "Delhi Technological University (DTU)", location: "Bawana Road, Rohini, Delhi", naac: "A++", fees: "₹80K–1.8L/yr", placement: "₹18 LPA avg", slug: "dtu-delhi-delhi-technological-university" },
  { name: "NSUT — Netaji Subhas University of Technology", location: "Dwarka Sector 3, Delhi", naac: "A+", fees: "₹1.4L–1.9L/yr", placement: "₹16 LPA avg", slug: "nsut-delhi" },
  { name: "IIIT Delhi — Indraprastha Institute of Information Technology", location: "Okhla Phase III, Delhi", naac: "A+", fees: "₹1.6L–2.2L/yr", placement: "₹20 LPA avg", slug: "iiit-delhi-indraprastha-institute-of-information-technology" },
  { name: "NIT Delhi — National Institute of Technology", location: "Dwarka Sector 3, Delhi", naac: "A", fees: "₹1.5L–2.0L/yr", placement: "₹10 LPA avg", slug: "nit-delhi-national-institute-of-technology" },
  { name: "IGDTUW — Indira Gandhi Delhi Technical University for Women", location: "Kashmere Gate, Delhi", naac: "A+", fees: "₹1.3L–1.75L/yr", placement: "₹8 LPA avg", slug: "igdtuw-delhi-indira-gandhi-technical-university" },
  { name: "Amity University Noida — BTech Engineering", location: "Sector 125, Noida (Delhi NCR)", naac: "A+", fees: "₹2.0L–3.8L/yr", placement: "₹7.2 LPA avg", slug: "amity-university-noida-delhi-ncr" },
  { name: "Bennett University — BTech (Times Group)", location: "Greater Noida, NCR", naac: "A+", fees: "₹2.8L–3.8L/yr", placement: "₹9.2 LPA avg", slug: "bennett-university-greater-noida" },
  { name: "Jamia Millia Islamia — Faculty of Engineering & Technology", location: "Jamia Nagar, Okhla, Delhi", naac: "A++", fees: "₹60K–1.2L/yr", placement: "₹7 LPA avg", slug: "jamia-millia-islamia-delhi" },
]

const faqs = [
  { q: "Which BTech college in Delhi is best for Computer Science?", a: "IIIT Delhi is the best for CS/IT BTech in Delhi with ₹20 LPA average placement and top recruiters including Google, Microsoft, and Amazon. DTU Delhi (NIRF #49) is best overall — hardest to get into, requiring 99+ percentile for CSE. NSUT is best for CS among government colleges with a lower cutoff (95–97 percentile) and ₹16 LPA average." },
  { q: "What is the duration of BTech in Delhi colleges?", a: "BTech (Bachelor of Technology) is a 4-year full-time program divided into 8 semesters. Semesters typically run from July–November and January–May. Some Delhi colleges also offer integrated BTech + MTech (5-year) programs at DTU and IIIT Delhi." },
  { q: "What is the minimum JEE Main score for BTech in Delhi?", a: "JEE Main cutoffs for BTech in Delhi 2026: DTU Delhi CSE — 99+ percentile. NSUT CSE — 97+ percentile. IIIT Delhi CSE — 98+ percentile. NIT Delhi — 90+ percentile. Jamia Millia Islamia Engineering — 80+ percentile. Amity University Noida — 70+ percentile (management quota available without JEE). Seats are allocated through JAC Delhi counselling." },
  { q: "What is JAC Delhi and how does BTech admission work in Delhi?", a: "JAC Delhi (Joint Admission Counselling Delhi) is the centralized BTech admission process for Delhi government engineering colleges — DTU, NSUT, IIIT Delhi, NIT Delhi, IGDTUW, and Netaji Subhas Institute. JEE Main scores are used for JAC Delhi counselling. Register at jacdelhi.admissions.nic.in. 85% seats are reserved for Delhi domicile students; 15% are All India quota." },
  { q: "What are the top BTech branches in Delhi 2026?", a: "Top BTech branches in Delhi by placement package: (1) CSE/IT at DTU, NSUT, IIIT Delhi — ₹16–45 LPA, (2) Electronics & Communication at DTU — ₹10–30 LPA, (3) Mechanical Engineering at DTU — ₹8–25 LPA, (4) AI & Data Science at IIIT Delhi — ₹18–50 LPA, (5) Civil Engineering at DTU — ₹6–18 LPA. CSE consistently gives the highest packages from Delhi colleges." },
]

const courseSchema = generateCourseSchema({
  name: 'Bachelor of Technology (B.Tech) in Delhi',
  description: '4-year undergraduate engineering degree in CSE, AI, Electronics, Mechanical, Civil and more. Admitted via JEE Main through JAC Delhi for top colleges DTU, NSUT, IIIT Delhi.',
  provider: 'CollegeDelhi.com',
  duration: 'P4Y',
  url: '/btech-colleges-delhi',
  fees: { min: 80000, max: 380000 },
})

export default function BtechCollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "BTech colleges in Delhi", url: "/btech-colleges-Delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "BTech colleges in Delhi 2026",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <SEOLandingPage
        breadcrumb={[{ label: "BTech colleges in Delhi", href: "/btech-colleges-Delhi" }]}
        h1="Best BTech Colleges in Delhi 2026"
        subtitle="BTech (Bachelor of Technology) is a 4-year engineering degree. Compare top BTech colleges in Delhi — fees ₹80K–4.8L/yr, JEE Main cutoffs, NAAC grades, and placements for 2026 JAC Delhi admission."
        heroStats={[
          { value: "50+", label: "AICTE-Approved BTech Colleges" },
          { value: "₹80K–4.8L", label: "Annual Fees Range" },
          { value: "₹20 LPA", label: "Highest Avg (IIIT Delhi)" },
          { value: "JEE Main", label: "Primary Entrance Exam" },
        ]}
        introHeading="BTech Colleges in Delhi: Complete JAC Delhi Admission Guide 2026"
        introParagraphs={[
          "Delhi is one of India's premier BTech destinations, with 50+ AICTE-approved engineering colleges spanning government, autonomous, and deemed university categories. BTech (Bachelor of Technology) is a 4-year undergraduate engineering degree offered in 30+ specializations including CSE, AI & Data Science, Electronics, Mechanical, Civil, Chemical, and Cyber Security.",
          "BTech admission in Delhi is primarily through JAC Delhi (Joint Admission Counselling) — a centralized merit-based process using JEE Main percentile scores. Top colleges in JAC Delhi include DTU, NSUT, IIIT Delhi, NIT Delhi, and IGDTUW. 85% of JAC Delhi seats are reserved for Delhi-domicile students, making it especially competitive for Delhi students scoring 95+ percentile in JEE Main.",
          "Choosing the right BTech college in Delhi depends on your JEE Main percentile, preferred branch, budget, and career goals. Government colleges (DTU, NSUT, IIIT Delhi) offer exceptional value with fees ₹80K–2.2L/year. Deemed universities (Amity Noida, Bennett University) offer international-style campuses at ₹2.8L–3.8L/year. This guide ranks all major Delhi BTech colleges by placement, fees, NAAC grade, and JEE Main cutoff.",
        ]}
        colleges={colleges}
        whyHeading="Why Pursue BTech in Delhi?"
        whyPoints={[
          { title: "Industry Capital of Delhi", description: "Delhi hosts 600+ manufacturing plants, 500+ IT companies, and 100+ auto sector firms. BTech graduates from Delhi colleges have direct access to campus placements from these industry leaders." },
          { title: "Autonomous & Deemed Status", description: "Top Delhi BTech colleges — DTU, NSUT, IIIT Delhi — are autonomous institutions with their own examination and curriculum systems, not affiliated to a single university. This allows them to adopt industry-relevant syllabi faster." },
          { title: "Specialization Options", description: "Delhi BTech colleges offer 30+ specializations including CSE, AI & ML, Data Science, Cyber Security, Robotics, Mechanical, Civil, Chemical, and Electrical - covering every engineering interest." },
          { title: "Affordable Government Seats", description: "JEE Main CAP merit seats in government-aided colleges have fees capped by the government. DTU Delhi charges just ₹80,000/year for one of India's best engineering educations." },
          { title: "Startup Ecosystem", description: "Delhi's growing startup ecosystem, with incubators at DTU Delhi, IIIT Delhi, and Amity Noida, gives BTech students opportunities to launch ventures during college with mentorship and seed funding access." },
          { title: "Proximity to IT Hubs", description: "Noida Sector 62 Phase 1, 2 & 3 IT parks are within 20 km of most Delhi engineering colleges, enabling students to take up paid internships from second year onwards." },
        ]}
        admissionHeading="BTech Admission Process in Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Appear for JEE Main 2026", description: "Register for JEE Main at jeemain.nta.nic.in (January & April sessions). JEE Main covers Physics, Chemistry, Mathematics at Class 12 level. Target 90+ percentile for mid-tier Delhi colleges, 97+ for DTU/NSUT/IIIT Delhi CSE." },
          { step: "2", title: "Check JEE Main Results", description: "JEE Main 2026 results declared in June 2026. Download your scorecard showing percentile and All India Rank. Use CollegeDelhi's College Predictor to shortlist reachable BTech colleges in Delhi." },
          { step: "3", title: "Register on JAC Delhi Portal", description: "Register on jacdelhi.admissions.nic.in (July 2026). Upload documents: Class 10 & 12 marksheets, Delhi domicile certificate (for 85% state quota), caste certificate, JEE Main scorecard, and Aadhaar." },
          { step: "4", title: "Fill JAC Delhi Preferences", description: "List college-branch combinations in order of priority — DTU CSE first, then NSUT, IIIT Delhi, NIT Delhi, IGDTUW. Fill 20+ preferences. Allotment is strictly merit-based within Delhi state and All India quotas." },
          { step: "5", title: "Accept Allotment & Report to College", description: "Accept your JAC Delhi Round 1 allotment online and pay seat confirmation fees within 3 days. Report to the allotted college with original documents by the reporting deadline (typically late July)." },
        ]}
        faqs={faqs}
        ctaHeading="Get Personalized BTech Admission Guidance for Delhi"
        ctaSubtext="Tell us your JEE Main percentile and branch preference - our counsellors will suggest the best BTech colleges in Delhi matching your profile and budget."
      relatedGuides={[
        { label: "Best Engineering colleges in Delhi 2026", href: "/engineering-colleges-delhi", icon: "" },
        { label: "Top 10 Engineering Colleges — Ranked", href: "/top-10-engineering-colleges-in-delhi", icon: "" },
        { label: "Placement Stats — Avg & Highest LPA", href: "/engineering-colleges-delhi-placement", icon: "" },
        { label: "Low Fees Engineering Colleges", href: "/low-fees-engineering-colleges-delhi", icon: "" },
        { label: "Engineering Scholarships in Delhi", href: "/engineering-colleges-delhi-scholarship", icon: "" },
        { label: "JEE Main Colleges & Cutoffs 2026", href: "/jee-colleges-delhi", icon: "" },
        { label: "JEE Main colleges in Delhi", href: "/jee-colleges-delhi", icon: "" },
        { label: "Computer Engineering Colleges Delhi", href: "/computer-engineering-colleges-delhi", icon: "" },
        { label: "Government colleges in Delhi", href: "/government-colleges-delhi", icon: "" },
      ]}
      />
    </>
  )
}

