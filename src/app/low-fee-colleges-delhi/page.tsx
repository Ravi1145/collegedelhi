import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Low Fee colleges in Delhi 2026 | Affordable Colleges Under ₹1L/Year",
  description: "Best affordable colleges in Delhi with low fees under ₹1L per year. Government, aided, and scholarship-eligible colleges for engineering, arts, commerce, and science streams.",
  path: "/low-fee-colleges-delhi",
  keywords: ["low fee colleges Delhi", "affordable colleges Delhi 2026", "cheap colleges Delhi", "colleges under 1 lakh Delhi", "government colleges Delhi fees"],
})

export const revalidate = 300

const colleges = [
  { name: "Delhi Technological University (DTU)", location: "Connaught Place", naac: "A+", fees: "₹80K/yr", placement: "₹12 LPA avg", slug: "dtu-delhi-delhi-technological-university" },
  { name: "Miranda House College (Autonomous)", location: "Connaught Place", naac: "A+", fees: "₹25K-60K/yr", placement: "Govt. College", slug: "miranda-house-college-delhi" },
  { name: "Hindu College of Science & Commerce", location: "Connaught Place", naac: "A+", fees: "₹20K-50K/yr", placement: "Govt. Aided", slug: "sp-college-delhi" },
  { name: "Gargi College of Commerce", location: "Azadpur, Delhi", naac: "A", fees: "₹15K-40K/yr", placement: "Govt. Aided", slug: "garware-college-of-commerce-Delhi" },
  { name: "BMCC (Brihan Delhi College of Commerce)", location: "Connaught Place", naac: "A+", fees: "₹18K-45K/yr", placement: "₹5.5 LPA avg", slug: "bmcc-Delhi" },
  { name: "Kirori Mal College of Arts Science & Commerce", location: "Connaught Place", naac: "A", fees: "₹22K-55K/yr", placement: "Govt. Aided", slug: "modern-college-delhi" },
  { name: "Wadia College of Science", location: "Delhi", naac: "A", fees: "₹18K-40K/yr", placement: "Government", slug: "wadia-college-science-Delhi" },
  { name: "Sharda University Engineering (State Quota Seats)", location: "Vadgaon", naac: "A", fees: "₹1.15L/yr", placement: "₹4.9 LPA avg", slug: "Sharda-college-of-engineering-Delhi" },
]

const faqs = [
  { q: "Which is the cheapest college in Delhi with good quality?", a: "Miranda House College and Hindu College are among the cheapest colleges in Delhi (₹15,000-50,000/year) with NAAC A+ grade and strong academic reputations. For engineering, DTU Delhi offers government-aided seats at ₹80,000/year with India-ranked quality." },
  { q: "Are there free colleges in Delhi?", a: "No completely free colleges, but several government-aided colleges have extremely low fees. Additionally, merit scholarships, EBC scholarships, and central government scholarships can effectively cover 100% fees for eligible students at these low-fee institutions." },
  { q: "What scholarships are available for low-fee colleges in Delhi?", a: "Key scholarships: EBC (Economically Backward Class) scholarship covers full tuition for family income under ₹1L/year. GoM Scholarship for OBC students. Minority scholarships. NSP (National Scholarship Portal) for SC/ST students. Merit scholarships from state government for top HSC scorers." },
  { q: "Can I get good placements from low-fee government colleges in Delhi?", a: "Absolutely. DTU Delhi (₹80K/year) has India's best engineering placements at ₹12 LPA average. Miranda House College and Hindu College alumni hold senior positions in top companies. Government colleges in Delhi consistently outperform many expensive private colleges in academic quality." },
  { q: "How do I apply for low-fee government colleges in Delhi?", a: "For government-aided arts/science/commerce colleges: Apply via online admission portal during June-July after HSC results. Engineering government colleges: Via JEE Main JAC Delhi counselling. All admissions are merit-based. No management quota or donation system in government colleges." },
]

export default function LowFeeCollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Low Fee colleges in Delhi", url: "/low-fee-colleges-Delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Low Fee colleges in Delhi 2026",
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
        breadcrumb={[{ label: "Low Fee colleges in Delhi", href: "/low-fee-colleges-Delhi" }]}
        h1="Low Fee colleges in Delhi 2026"
        subtitle="Find the best affordable colleges in Delhi with fees under ₹1 lakh per year. Government-aided institutions with NAAC A+ grades, strong placements, and scholarship eligibility."
        heroStats={[
          { value: "40+", label: "Low-Fee Colleges" },
          { value: "₹15K/yr", label: "Minimum Fees" },
          { value: "NAAC A+", label: "Best Rated" },
          { value: "100%", label: "Scholarship Eligible" },
        ]}
        introHeading="Low Fee colleges in Delhi: Quality Education at Minimal Cost"
        introParagraphs={[
          "Delhi has a remarkable advantage for budget-conscious students: the city's strong network of government-aided colleges delivers world-class education at a fraction of private college costs. Miranda House College, Hindu College, Gargi College, and BMCC -- all with NAAC A or A+ grades -- charge ₹15,000-60,000 per year for undergraduate programs in arts, science, and commerce.",
          "For engineering, DTU (Delhi Technological University) is the crown jewel of low-fee technical education -- with fees around ₹80,000/year, it delivers NIRF #49 ranked education with ₹12 LPA average placements. For budget-conscious engineering students, state-quota seats at private colleges via JEE Main also offer subsidized fees under government regulation.",
          "Financial constraints should never stop you from accessing quality education. In addition to inherently low fees at government colleges, Delhi's scholarship ecosystem -- including EBC scholarships, OBC scholarships, and NSP (National Scholarship Portal) schemes -- can reduce effective fees to near-zero for eligible students at any NAAC-accredited institution.",
        ]}
        colleges={colleges}
        whyHeading="Why Government & Aided colleges in Delhi Are Worth It"
        whyPoints={[
          { title: "NAAC A+ at ₹25K/Year", description: "Miranda House College (NAAC A+) charges just ₹25,000-60,000/year for BSc and BA programs. This is among the best value-for-money education in India -- equivalent academic quality to colleges charging 10x more." },
          { title: "No Donation / Capitation Fees", description: "Government and government-aided colleges strictly prohibit donation or capitation fees. Admissions are purely merit-based, ensuring transparency and equal opportunity for all students." },
          { title: "Full Scholarship Access", description: "Government college students have priority access to state scholarships (EBC, OBC, SC/ST), central government National Scholarship Portal schemes, and merit-cum-means grants from the state government." },
          { title: "Experienced Faculty", description: "Government colleges attract faculty who prioritize teaching careers over industry consulting. Many professors have 20+ years of experience and strong research publication records." },
          { title: "Strong Alumni Networks", description: "Miranda House College (est. 1885) and Hindu College (est. 1916) have 100+ year alumni networks with thousands of successful graduates in government, academics, business, and arts." },
          { title: "Delhi University Degree Value", description: "Degrees from DU-affiliated government colleges in Delhi carry the same university credential as expensive private colleges -- employers see the Savitribai Phule Delhi University degree, not just the college." },
        ]}
        admissionHeading="Admission Process for Low-Fee colleges in Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Check HSC Results (for Arts/Science/Commerce)", description: "Arts, Science, and Commerce colleges in Delhi admit based on HSC (12th) merit. Track results at mahahsscboard.in. Most government colleges publish merit cutoffs in June-July 2026." },
          { step: "2", title: "Apply Online on College/University Portal", description: "DU online admission portal opens after HSC results. Apply to 5-10 government and aided colleges simultaneously. Application fees are minimal (₹50-200 per application)." },
          { step: "3", title: "Engineering: Register for JEE Main CAP", description: "For low-fee engineering seats (DTU Delhi government quota, state quota at private colleges), register on jacdelhi.admissions.nic.in after JEE Main results. Fill college preferences prioritizing government colleges." },
          { step: "4", title: "Apply for Scholarship Simultaneously", description: "Apply for EBC, OBC, and other scholarships on scholarships.gov.in (NSP) and Delhi scholarships portal (mahaeschol.Delhi.gov.in) immediately after admission. Deadlines are strict." },
          { step: "5", title: "Report to College with Documents", description: "After merit list selection, report to the college within the deadline. Bring original documents: HSC marksheet, caste/income certificate, Aadhar, migration certificate, and passport photos." },
        ]}
        faqs={faqs}
        ctaHeading="Find the Best Affordable College in Delhi for Your Budget"
        ctaSubtext="Budget should not limit your education choices. Our counsellors help you find the best low-fee colleges in Delhi matching your stream, scores, and scholarship eligibility."
      relatedGuides={[
        { label: "NAAC A+ colleges in Delhi", href: "/naac-a-plus-colleges-delhi", icon: "â­" },
        { label: "Delhi Colleges Fees Guide 2026", href: "/colleges-Delhi-fees", icon: "📊" },
        { label: "Top Placement colleges in Delhi", href: "/top-placement-colleges-delhi", icon: "💼" },
        { label: "College Fees Calculator", href: "/delhi-college-fees-calculator", icon: "🧮" },
        { label: "Placement Comparator Tool", href: "/delhi-college-placement-comparator", icon: "📈" },
        { label: "Engineering vs MBA Comparison", href: "/delhi-colleges-comparison-engineering-mba", icon: "âš–ï¸" },
        { label: "Admission Deadline Tracker 2026", href: "/delhi-admission-deadline-tracker-2026", icon: "📅" },
      ]}
      />
    </>
  )
}

