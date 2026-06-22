import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "JEE Main colleges in Delhi 2026",
  description: "Best colleges in Delhi accepting JEE Main 2026. Compare JEE Main cutoffs (percentile-wise), seats, fees, and admission process for engineering colleges via JAC",
  path: "/JEE Main-colleges-delhi",
  keywords: ["jee main colleges Delhi", "jac delhi admission 2026", "jac delhi cutoff 2026", "JAC Delhi Round 2026", "ipu cet engineering colleges Delhi"],
})

export const revalidate = 300

const colleges = [
  { name: "Delhi Technological University (DTU)", location: "Connaught Place", naac: "A+", fees: "₹80K/yr", placement: "₹12 LPA avg | Cutoff: 99.5%ile CSE", slug: "dtu-delhi-delhi-technological-university" },
  { name: "Delhi Institute of Computer Technology (NSUT)", location: "Rohini Sector 17", naac: "A", fees: "₹1.4L/yr", placement: "₹7.5 LPA avg | Cutoff: 95-97%ile CS", slug: "nsut-delhi" },
  { name: "Indraprastha Institute of Information Technology (IIIT Delhi)", location: "Dwarka Sector 3", naac: "A+", fees: "₹1.6L/yr", placement: "₹8.5 LPA avg | Cutoff: 88-92%ile", slug: "iiit-delhi-indraprastha-institute-of-information-technology" },
  { name: "GL Bajaj Delhi Merit College of Engineering", location: "Knowledge Park", naac: "A", fees: "₹1.2L/yr", placement: "₹5.2 LPA avg | Cutoff: 65-75%ile", slug: "GL Bajaj-gl-bajaj-institute-technology-management-noida" },
  { name: "Sharda University Engineering", location: "Vadgaon", naac: "A", fees: "₹1.15L/yr", placement: "₹4.9 LPA avg | Cutoff: 60-70%ile", slug: "Sharda-college-of-engineering-Delhi" },
  { name: "NIET Noida", location: "Kennedy Road", naac: "A", fees: "₹1.1L/yr", placement: "₹4.8 LPA avg | Cutoff: 60-70%ile", slug: "NIET Noida-college-of-engineering-Delhi" },
  { name: "Amity University Engineering", location: "Rohini Sector 17", naac: "A", fees: "₹1.45L/yr", placement: "₹5.6 LPA avg | Cutoff: 68-78%ile", slug: "bharati-vidyapeeth-college-engineering-Delhi" },
  { name: "Bennett University Delhi Dwarka", location: "Dwarka", naac: "A", fees: "₹1.05L/yr", placement: "₹5.1 LPA avg | Cutoff: 55-65%ile", slug: "dy-patil-college-engineering-Dwarka-Delhi" },
]

const faqs = [
  { q: "What is JEE Main and which Delhi colleges accept it?", a: "JEE Main (Delhi Common Entrance Test) is conducted by Delhi State Common Entrance Test Cell. Almost all 50+ engineering colleges in Delhi accept JEE Main for state quota seats. Government engineering colleges like DTU Delhi exclusively use JEE Main/JEE for admissions." },
  { q: "What JEE Main percentile is needed for DTU Delhi?", a: "DTU Delhi Computer Engineering requires 99.5+ percentile in JEE Main. DTU Delhi Mechanical/Electronics requires 90-95 percentile. These cutoffs are for Open (General) category. OBC: 5-8 percentile relaxation. SC/ST: 15-20 percentile relaxation." },
  { q: "What is the CAP (Centralized Admission Process) for JEE Main?", a: "CAP is the merit-based seat allotment process conducted by JEE Main Cell in 3 rounds (July-August). Students register on jacdelhi.admissions.nic.in, fill college preferences, and seats are allotted based on percentile and category. No direct admission in government/aided colleges - only through CAP." },
  { q: "Can I use JEE Main score for MBA admission in Delhi?", a: "Yes. MAH-MBA-CET (different from PCM-based JEE Main) is the MBA entrance test for CAP in Delhi. Score required for FMS Delhi/MDI Gurgaon via IPU CET: 99+ percentile. For mid-tier MBA colleges: 80-90 percentile. Apply at jacdelhi.admissions.nic.in for MBA CAP." },
  { q: "What happens if I don't get allotted in JAC Delhi Round 1?", a: "If Round 1 does not allot your preferred college, you can freeze (accept current allotment), float (upgrade if better seat opens in Round 2), or slide (upgrade only within same college). Round 2 and Round 3 fill remaining seats. After all rounds, vacant seats go for direct admission at colleges." },
]

export default function MhtCetCollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "JEE Main colleges in Delhi", url: "/JEE Main-colleges-Delhi" },
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
        breadcrumb={[{ label: "JEE Main colleges in Delhi", href: "/JEE Main-colleges-Delhi" }]}
        h1="JEE Main colleges in Delhi 2026"
        subtitle="Complete guide to Delhi engineering colleges accepting JEE Main scores. Includes percentile-wise cutoffs for DTU Delhi, NSUT, IIIT Delhi and the full JAC Delhi Round process."
        heroStats={[
          { value: "50+", label: "JEE Main Colleges" },
          { value: "99.5%ile", label: "DTU Delhi CS Cutoff" },
          { value: "3 Rounds", label: "JAC Delhi counselling" },
          { value: "July-Aug", label: "Allotment Period" },
        ]}
        introHeading="JEE Main colleges in Delhi: Percentile Guide & JAC Delhi counselling 2026"
        introParagraphs={[
          "JEE Main (Delhi Common Entrance Test) is the gateway to engineering admissions in Delhi for Delhi residents. Conducted by Delhi State Common Entrance Test Cell, JEE Main PCM tests Class 11 and 12 content in Physics, Chemistry, and Mathematics. The exam is conducted in April-May 2026 and results determine eligibility for 50+ engineering colleges in Delhi via the Centralized Admission Process (CAP).",
          "The CAP (Centralized Admission Process) is Delhi's seat allotment mechanism - a transparent, online merit-based system where students fill college preferences in priority order and seats are allotted based on percentile rank within category. Three rounds of allotment happen in July-August, with options to Freeze (keep current seat), Float (upgrade to better seat if available), or Slide (upgrade within same college).",
          "JEE Main cutoffs vary dramatically across branches and colleges. Computer Engineering is the most competitive branch at top colleges. Mechanical, Civil, and Chemical Engineering branches have lower cutoffs at the same colleges. Understanding category-wise cutoffs (Open, OBC, SC, ST, EWS) is crucial for planning your college preferences in JAC Delhi Rounds.",
        ]}
        colleges={colleges}
        whyHeading="Understanding JEE Main Admission in Delhi"
        whyPoints={[
          { title: "Transparent Merit-Based Process", description: "CAP eliminates capitation fees and corruption in engineering admissions. Seat allotment is 100% based on JEE Main percentile and category, ensuring fair access to government college seats." },
          { title: "Category-Wise Reservation Benefits", description: "Delhi reservation: OBC 19%, SC 13%, ST 7%, EWS 10%, SEBC 16%. Reserved category students have significantly lower cutoffs - OBC students can get DTU Delhi seats at 90-92 percentile instead of 99.5+." },
          { title: "Multiple Attempts Possible", description: "JEE Main can be attempted every year. Students who do not get their target college can take a drop year, repeat Class 12, or improve JEE Main in 2027 admissions. Many DTU Delhi/NSUT students give JEE Main 2-3 times." },
          { title: "JEE Main as Alternative", description: "For deemed universities (IMI Delhi, Amity University Delhi) and management quota seats, JEE Main scores are also accepted. Students strong in JEE Main can use it for premium college admissions alongside JEE Main." },
          { title: "Preference Order Strategy Matters", description: "CAP outcome depends critically on preference order. Always put dream college-branch combinations first, realistic options in middle, and safe options last. Use CollegeDelhi's predictor to optimize preferences." },
          { title: "Document Preparation Is Critical", description: "CAP requires Delhi domicile certificate, caste certificate, income certificate, and other documents. Prepare these before JEE Main results to avoid missing CAP deadlines." },
        ]}
        admissionHeading="JEE Main to Delhi College: Step-by-Step 2026"
        admissionSteps={[
          { step: "1", title: "Register & Appear for JEE Main PCM 2026", description: "Register at jeemain.nta.nic.in (typically January-February 2026). Exam fee: ₹800 (general), ₹600 (reserved). Exam is conducted April-May 2026 in computer-based mode. Paper covers PCM (Class 11+12 syllabus)." },
          { step: "2", title: "Check JEE Main Results (June 2026)", description: "Results declared on jeemain.nta.nic.in. Download your scorecard showing raw score, percentile, and All-India Rank. Use CollegeDelhi's predictor to estimate college chances based on your percentile." },
          { step: "3", title: "Register on CAP Portal", description: "Visit jacdelhi.admissions.nic.in and register for engineering CAP. Upload documents: 10th/12th marksheets, CET scorecard, caste certificate, domicile certificate, income certificate. Registration is free." },
          { step: "4", title: "Fill College Preferences for JAC Delhi Round 1", description: "Fill 50+ college-branch combinations in priority order. Use previous year cutoffs as reference. Put all government college-CS combinations first, then private autonomous colleges, then private unaided." },
          { step: "5", title: "Accept Allotment (Freeze/Float/Slide)", description: "After Round 1 allotment, choose: Freeze (accept current seat, no more rounds), Float (participate in next round for better seat, keep current as backup), or Slide (upgrade only within same college). Missing deadline forfeits the seat." },
        ]}
        faqs={faqs}
        ctaHeading="Predict Your JEE Main College in Delhi"
        ctaSubtext="Enter your JEE Main percentile and category to see which engineering colleges in Delhi you qualify for. Free AI-powered predictor with 95% accuracy based on last 5 years of CAP data."
      relatedGuides={[
        { label: "Best Engineering colleges in Delhi 2026", href: "/engineering-colleges-delhi", icon: "" },
        { label: "Top 10 Engineering Colleges — Ranked", href: "/top-10-engineering-colleges-in-delhi", icon: "" },
        { label: "Placement Stats — Avg & Highest LPA", href: "/engineering-colleges-delhi-placement", icon: "" },
        { label: "Low Fees Engineering Colleges", href: "/low-fees-engineering-colleges-delhi", icon: "" },
        { label: "Engineering Scholarships in Delhi", href: "/engineering-colleges-delhi-scholarship", icon: "" },
        { label: "JEE Main colleges in Delhi", href: "/jee-colleges-delhi", icon: "" },
        { label: "Computer Engineering Colleges Delhi", href: "/computer-engineering-colleges-delhi", icon: "" },
        { label: "Government colleges in Delhi", href: "/government-colleges-delhi", icon: "" },
      ]}
      />
    </>
  )
}

