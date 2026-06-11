import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "BTech colleges in Delhi 2026 | Best B.Tech Colleges | Fees & Admission",
  description: "Complete list of BTech colleges in Delhi 2026. Compare fees (₹80K-4.8L/yr), JEE Main cutoffs, placements, and NAAC grades for B.Tech admission in Delhi.",
  path: "/btech-colleges-delhi",
  keywords: ["btech colleges Delhi", "b.tech colleges in Delhi 2026", "btech admission Delhi", "btech fees Delhi", "btech engineering Delhi"],
})

export const revalidate = 300

const colleges = [
  { name: "Delhi Technological University (DTU)", location: "Connaught Place", naac: "A+", fees: "₹80K-1.8L/yr", placement: "₹12 LPA avg", slug: "dtu-delhi-delhi-technological-university" },
  { name: "Indraprastha Institute of Information Technology (IIIT Delhi)", location: "Dwarka Sector 3", naac: "A+", fees: "₹1.6L-2.2L/yr", placement: "₹8.5 LPA avg", slug: "iiit-delhi-indraprastha-institute-of-information-technology" },
  { name: "Symbiosis Institute of Technology (SIT)", location: "Knowledge Park Greater Noida", naac: "A+", fees: "₹3.6L-4.8L/yr", placement: "₹9.8 LPA avg", slug: "nit-delhi-national-institute-of-technology" },
  { name: "Amity University Delhi (Amity University Delhi)", location: "Rohini", naac: "A+", fees: "₹2.0L-3.8L/yr", placement: "₹7.2 LPA avg", slug: "amity-university-noida-delhi-ncr" },
  { name: "Delhi Institute of Computer Technology (NSUT)", location: "Rohini Sector 17", naac: "A", fees: "₹1.4L-1.9L/yr", placement: "₹7.5 LPA avg", slug: "nsut-netaji-subhas-university-of-technology" },
  { name: "NIET Noida", location: "Kennedy Road", naac: "A", fees: "₹1.1L-1.55L/yr", placement: "₹4.8 LPA avg", slug: "NIET Noida-college-of-engineering-Delhi" },
  { name: "Bennett University Delhi Dwarka", location: "Dwarka", naac: "A", fees: "₹1.05L-1.55L/yr", placement: "₹5.1 LPA avg", slug: "dy-patil-college-engineering-Dwarka-Delhi" },
  { name: "Amity University Engineering", location: "Rohini Sector 17", naac: "A", fees: "₹1.45L-1.95L/yr", placement: "₹5.6 LPA avg", slug: "bharati-vidyapeeth-college-engineering-Delhi" },
]

const faqs = [
  { q: "Which BTech college in Delhi is best for Computer Science?", a: "NSUT (Delhi Institute of Computer Technology) is considered the best for CS/IT BTech in Delhi with ₹7.5 LPA average placement and 98%+ placement rate. DTU Delhi is best for overall CS but harder to get into (99.5+ percentile)." },
  { q: "What is the duration of BTech in Delhi colleges?", a: "BTech (Bachelor of Technology) is a 4-year full-time program. Semesters run from June-November and December-May. Some colleges also offer integrated BTech + MTech (5-year) programs." },
  { q: "What is the minimum JEE Main score for BTech in Delhi?", a: "For top BTech colleges like DTU Delhi, you need 95+ percentile. For mid-tier autonomous colleges (IIIT Delhi, Amity University Delhi), 80-90 percentile suffices. Private unaided colleges accept 60-70 percentile for most branches." },
  { q: "Can I do BTech in Delhi without JEE Main?", a: "Yes. Several Delhi BTech colleges accept JEE Main, SET (Symbiosis), or direct admission under management quota without JEE Main. Deemed universities like IMI Delhi and Amity University Delhi have their own entrance routes." },
  { q: "What are the top BTech branches in Delhi?", a: "Computer Science Engineering (CSE) and Information Technology (IT) are the most popular and highest-paying BTech branches in Delhi. Mechanical Engineering is popular for Delhi's auto sector. Electronics & Telecommunication (E&TC) is strong at DTU Delhi and IIIT Delhi." },
]

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
      <SEOLandingPage
        breadcrumb={[{ label: "BTech colleges in Delhi", href: "/btech-colleges-Delhi" }]}
        h1="BTech colleges in Delhi 2026"
        subtitle="Explore top B.Tech colleges in Delhi. Compare fees, JEE Main cutoffs, branch options, placement packages, and NAAC ratings for 2026 admission."
        heroStats={[
          { value: "50+", label: "BTech Colleges" },
          { value: "₹80K-4.8L", label: "Annual Fees Range" },
          { value: "30+", label: "Specializations" },
          { value: "JEE Main/JEE", label: "Entrance Exams" },
        ]}
        introHeading="BTech colleges in Delhi: Complete Admission Guide 2026"
        introParagraphs={[
          "Delhi is one of India's top cities for BTech education, offering over 50 AICTE-approved colleges across government, autonomous, private, and deemed university categories. The Bachelor of Technology (BTech) is a 4-year degree program offered in branches ranging from Computer Science and Mechanical Engineering to Civil, Electronics, Chemical, and emerging fields like AI & Data Science.",
          "The primary admission route for BTech in Delhi is through JEE Main (Delhi Common Entrance Test), followed by a centralized admission process managed by JEE Main Cell. JEE Main scores are also accepted at several colleges for management quota and some state-level seats. The 2026 batch admissions will follow the same CAP (Centralized Admission Process) structure.",
          "Selecting the right BTech college in Delhi depends on your preferred branch, budget, JEE Main percentile, and career goals. Government colleges offer excellent value with fees starting at ₹80,000/year, while deemed universities like IMI Delhi and Amity University Delhi offer premium infrastructure at ₹3.6L-4.8L/year. This guide covers all key parameters to help you choose wisely.",
        ]}
        colleges={colleges}
        whyHeading="Why Pursue BTech in Delhi?"
        whyPoints={[
          { title: "Industry Capital of Delhi", description: "Delhi hosts 600+ manufacturing plants, 500+ IT companies, and 100+ auto sector firms. BTech graduates from Delhi colleges have direct access to campus placements from these industry leaders." },
          { title: "DU Affiliation", description: "Most Delhi BTech colleges are affiliated to Savitribai Phule Delhi University (DU), one of India's top technical universities, ensuring nationally recognized degrees and examination standards." },
          { title: "Specialization Options", description: "Delhi BTech colleges offer 30+ specializations including CSE, AI & ML, Data Science, Cyber Security, Robotics, Mechanical, Civil, Chemical, and Electrical - covering every engineering interest." },
          { title: "Affordable Government Seats", description: "JEE Main CAP merit seats in government-aided colleges have fees capped by the government. DTU Delhi charges just ₹80,000/year for one of India's best engineering educations." },
          { title: "Startup Ecosystem", description: "Delhi's growing startup ecosystem, incubated at DTU Delhi, Amity University Delhi, and SIT, gives BTech students opportunities to launch ventures during college with mentorship and seed funding access." },
          { title: "Proximity to IT Hubs", description: "Noida Sector 62 Phase 1, 2 & 3 IT parks are within 20 km of most Delhi engineering colleges, enabling students to take up paid internships from second year onwards." },
        ]}
        admissionHeading="BTech Admission Process in Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Appear for JEE Main / JEE Main 2026", description: "Register and appear for JEE Main (April-May 2026) or JEE Main (January & April 2026). JEE Main is based on PCM at Class 12 level. Aim for 90+ percentile for mid-tier colleges, 95+ for top colleges." },
          { step: "2", title: "Check Results & Merit Position", description: "JEE Main results are declared in June 2026. Check your percentile and category rank. Use CollegeDelhi's College Predictor to see which BTech colleges you can target." },
          { step: "3", title: "Register on CAP Portal", description: "Register on jacdelhi.admissions.nic.in, fill in personal details, upload documents (10th/12th marksheets, caste certificate, Aadhar), and get eligibility verified." },
          { step: "4", title: "Fill College Preferences", description: "Fill preferences for BTech colleges in Delhi in order of priority. You can list 50+ college-branch combinations. Seat allotment is strictly merit-based within category." },
          { step: "5", title: "Accept Allotment & Pay Fees", description: "Once a seat is allotted in JAC Delhi Round 1 (July), accept it online and pay seat confirmation fees. Collect original documents and report to the college within the specified deadline." },
        ]}
        faqs={faqs}
        ctaHeading="Get Personalized BTech Admission Guidance for Delhi"
        ctaSubtext="Tell us your JEE Main percentile and branch preference - our counsellors will suggest the best BTech colleges in Delhi matching your profile and budget."
      relatedGuides={[
        { label: "Best Engineering colleges in Delhi 2026", href: "/engineering-colleges-delhi", icon: "🏛️" },
        { label: "Top 10 Engineering Colleges — Ranked", href: "/top-10-engineering-colleges-in-delhi", icon: "🏆" },
        { label: "Placement Stats — Avg & Highest LPA", href: "/engineering-colleges-delhi-placement", icon: "💼" },
        { label: "Low Fees Engineering Colleges", href: "/low-fees-engineering-colleges-delhi", icon: "💰" },
        { label: "Engineering Scholarships in Delhi", href: "/engineering-colleges-delhi-scholarship", icon: "🎓" },
        { label: "JEE Main Colleges & Cutoffs 2026", href: "/JEE Main-colleges-Delhi", icon: "📝" },
        { label: "JEE Main colleges in Delhi", href: "/jee-colleges-delhi", icon: "📚" },
        { label: "Computer Engineering Colleges Delhi", href: "/computer-engineering-colleges-delhi", icon: "💻" },
        { label: "Government colleges in Delhi", href: "/government-colleges-delhi", icon: "🏛️" },
      ]}
      />
    </>
  )
}

