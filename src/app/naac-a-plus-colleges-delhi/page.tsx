import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "NAAC A+ colleges in Delhi 2026 | Top Accredited Institutions",
  description: "NAAC A+ and A++ colleges in Delhi 2026. DTU Delhi, IIIT Delhi, IGDTUW, Miranda House, SRCC — compare fees, programs, and NAAC accreditation grades.",
  path: "/naac-a-plus-colleges-delhi",
  keywords: ["naac a plus colleges Delhi", "naac a++ colleges Delhi", "naac accredited colleges Delhi 2026", "best naac rated colleges Delhi"],
})

export const revalidate = 300

const colleges = [
  { name: "Delhi Technological University (DTU)", location: "Bawana Road, Rohini", naac: "A++", fees: "₹80K-1.8L", placement: "₹12 LPA avg", slug: "dtu-delhi-delhi-technological-university" },
  { name: "Jamia Millia Islamia", location: "Jamia Nagar, Okhla", naac: "A++", fees: "₹15K-1.2L", placement: "₹6.5 LPA avg", slug: "jamia-millia-islamia-delhi" },
  { name: "Miranda House (University of Delhi)", location: "North Campus, Delhi", naac: "A++", fees: "₹20K-55K", placement: "Govt. College", slug: "miranda-house-college-delhi" },
  { name: "SRCC (Shri Ram College of Commerce)", location: "North Campus, Delhi", naac: "A+", fees: "₹25K-60K", placement: "₹8 LPA avg", slug: "srcc-shri-ram-college-of-commerce-delhi" },
  { name: "Hindu College (University of Delhi)", location: "North Campus, Delhi", naac: "A+", fees: "₹20K-55K", placement: "Govt. College", slug: "hindu-college-delhi-university" },
  { name: "IIIT Delhi (Indraprastha Institute of IT)", location: "Okhla Phase III", naac: "A+", fees: "₹1.6L-2.2L", placement: "₹20 LPA avg", slug: "iiit-delhi-indraprastha-institute-of-information-technology" },
  { name: "IGDTUW (Indira Gandhi Delhi Technical University for Women)", location: "Kashmere Gate", naac: "A+", fees: "₹1.3L-1.75L", placement: "₹6.8 LPA avg", slug: "igdtuw-delhi-indira-gandhi-delhi-technical-university" },
  { name: "Amity University Delhi", location: "Sector 125, Noida", naac: "A+", fees: "₹2.0L-3.8L", placement: "₹7.2 LPA avg", slug: "amity-university-noida-delhi-ncr" },
]

const faqs = [
  { q: "What is NAAC A+ grade for colleges?", a: "NAAC (National Assessment and Accreditation Council) A+ is the second-highest accreditation grade (maximum is A++). Colleges scoring 3.26-3.75 on a 4.0 CGPA scale receive A+ grade. A+ grade colleges are considered excellent in teaching, research, governance, and student outcomes." },
  { q: "How many NAAC A+ colleges are there in Delhi?", a: "Delhi has several NAAC A+ and A++ graded institutions across engineering, commerce, and arts streams, including DTU, Jamia Millia Islamia, Miranda House, SRCC, Hindu College, IIIT Delhi, IGDTUW, and Amity University. Always check the official NAAC database for the current accreditation status of any specific institution." },
  { q: "Is NAAC A+ important for college admission?", a: "NAAC grade is an important quality indicator. A+ colleges meet higher standards for faculty qualifications, infrastructure, research output, and examination integrity. For government scholarships and employment, NAAC grade is often checked. It also affects college reputation and placement quality." },
  { q: "Which NAAC A+ college in Delhi has the lowest fees?", a: "Miranda House (NAAC A++, government, University of Delhi) and Hindu College (NAAC A+, University of Delhi) have government-regulated fees among the lowest for their tier. DTU (NAAC A++) has a government fee structure for engineering. Always check the official college portal for the current year's exact fee notification." },
  { q: "What programs are available in NAAC A+ colleges in Delhi?", a: "NAAC A+ and A++ colleges in Delhi offer programs across Engineering (DTU, IIIT Delhi, IGDTUW), Commerce (SRCC), and Arts & Science (Miranda House, Hindu College, Jamia Millia Islamia). Always verify a specific college's current NAAC grade on the official NAAC database." },
]

export default function NaacAPlusCollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "NAAC A+ colleges in Delhi", url: "/naac-a-plus-colleges-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "NAAC A+ colleges in Delhi 2026",
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
        breadcrumb={[{ label: "NAAC A+ colleges in Delhi", href: "/naac-a-plus-colleges-delhi" }]}
        h1="NAAC A+ colleges in Delhi 2026"
        subtitle="Complete list of NAAC A+ and A++ accredited colleges in Delhi. These institutions meet the highest educational quality standards for teaching, research, and student outcomes."
        heroStats={[
          { value: "15+", label: "NAAC A+ Colleges" },
          { value: "A++ to A+", label: "Top Grades" },
          { value: "₹25K-18L", label: "Fees Range" },
          { value: "All Streams", label: "Programs Available" },
        ]}
        introHeading="NAAC A+ colleges in Delhi: Quality Education Guaranteed"
        introParagraphs={[
          "NAAC (National Assessment and Accreditation Council) accreditation is India's premier higher education quality certification. The A+ grade indicates that a college scores between 3.26 and 3.75 on a 4.0 scale across 7 criteria: Curricular Aspects, Teaching-Learning, Research, Infrastructure, Student Support, Governance, and Institutional Values. A+ is the second-highest grade after A++.",
          "Delhi has several highly-rated NAAC A+ and A++ colleges spanning major disciplines: DTU and IIIT Delhi for engineering, SRCC for commerce, and Miranda House and Hindu College for arts and science — all constituent colleges of the University of Delhi.",
          "For students choosing a college in Delhi, NAAC A+ accreditation serves as a quality guarantee. These colleges have better-qualified faculty, more research publications, superior infrastructure, and stronger placement records compared to non-accredited or lower-graded institutions. Government scholarship programs also often prioritize NAAC-accredited institutions.",
        ]}
        colleges={colleges}
        whyHeading="Benefits of Studying at NAAC A+ colleges in Delhi"
        whyPoints={[
          { title: "Higher Educational Standards", description: "NAAC A+ colleges undergo rigorous peer review every 5 years, ensuring faculty qualifications, infrastructure, examinations, and student outcomes consistently meet national quality benchmarks." },
          { title: "Better Placement Outcomes", description: "Companies specifically target NAAC-accredited colleges for campus placements. Employers use NAAC grade as a quick quality filter when visiting campuses for hiring." },
          { title: "Government Scholarship Eligibility", description: "Many central and state government scholarships (EBC, merit-cum-means, SC/ST scholarships) require students to be enrolled in NAAC-accredited institutions. A+ grade ensures maximum scholarship eligibility." },
          { title: "Research & Publication Culture", description: "NAAC assessment includes research output in its scoring. A+ colleges have active research programs, funded projects, and publication expectations that expose students to cutting-edge academic work." },
          { title: "International Partnerships", description: "NAAC A+ grade makes Delhi colleges eligible for international academic partnerships, student exchange programs, and joint degree offerings with foreign universities." },
          { title: "Higher Education Credibility", description: "For PG admissions (MTech, MBA, MS), NAAC-accredited undergraduate degrees carry more weight. Foreign universities and GATE boards also recognize accredited degrees more readily." },
        ]}
        admissionHeading="How to Get Admission in NAAC A+ colleges in Delhi"
        admissionSteps={[
          { step: "1", title: "Identify Your Stream & Target College", description: "Choose your preferred program (Engineering, MBA, Arts, Science, Medical) and identify which NAAC A+ colleges offer it. Each stream has different entrance requirements." },
          { step: "2", title: "Appear for Relevant Entrance Exam", description: "Engineering: JEE Main/JEE. MBA: CAT/SNAP/IPU CET. Medical: NEET. Arts/Science: College entrance or HSC merit. Each NAAC A+ college specifies accepted entrance scores." },
          { step: "3", title: "Register on JAC Delhi Portal or Apply Directly", description: "For JEE Main engineering seats at DTU, IGDTUW, and similar government colleges, register on the official JAC Delhi counselling portal. For private/deemed universities like Amity, apply directly on the college's website." },
          { step: "4", title: "Verify NAAC Grade Certificate", description: "Always verify a college's current NAAC grade at the official NAAC website (naac.gov.in). Grades have validity periods; check that the A+ grade is current for the 2026 admission cycle." },
          { step: "5", title: "Complete Admission & Document Verification", description: "Upon allotment or offer letter, complete document verification at the college. Pay fees within the deadline. NAAC A+ colleges have structured orientation programs to welcome new students." },
        ]}
        faqs={faqs}
        ctaHeading="Get Admitted to a NAAC A+ College in Delhi"
        ctaSubtext="Our counsellors help you navigate admissions to Delhi's best NAAC-accredited colleges. Free guidance based on your scores, budget, and stream preferences."
      relatedGuides={[
        { label: "Low Fee colleges in Delhi", href: "/low-fee-colleges-Delhi", icon: "" },
        { label: "Delhi Colleges Fees Guide 2026", href: "/colleges-Delhi-fees", icon: "" },
        { label: "Top Placement colleges in Delhi", href: "/top-placement-colleges-delhi", icon: "" },
        { label: "College Fees Calculator", href: "/delhi-college-fees-calculator", icon: "" },
        { label: "Placement Comparator Tool", href: "/delhi-college-placement-comparator", icon: "" },
        { label: "Engineering vs MBA Comparison", href: "/delhi-colleges-comparison-engineering-mba", icon: "âš–ï¸" },
        { label: "Admission Deadline Tracker 2026", href: "/delhi-admission-deadline-tracker-2026", icon: "" },
      ]}
      />
    </>
  )
}

