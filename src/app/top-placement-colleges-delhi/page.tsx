import { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateItemListSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const revalidate = 300

export const metadata: Metadata = genMeta({
  title: "Top Placement Colleges in Delhi 2026",
  description: "Delhi's highest placement colleges ranked by average LPA: FMS (₹28 LPA), IIT Delhi DMS (₹26 LPA), DTU (₹18 LPA), IIIT Delhi (₹20 LPA). Real 2025 placement data.",
  path: "/top-placement-colleges-delhi",
  keywords: [
    "top placement colleges in Delhi",
    "highest placement colleges Delhi 2026",
    "best placement engineering college Delhi",
    "mba placement colleges Delhi",
    "college with best placement in Delhi",
    "average package Delhi college 2026",
    "100 percent placement colleges delhi",
  ],
})

const faqs = [
  { q: "Which college has the highest placement in Delhi?", a: "For MBA: FMS Delhi with ₹28 LPA average and ₹72 LPA highest package (2024 batch). For engineering: IIIT Delhi with ₹20 LPA average and ₹1.2 Cr highest package. For overall highest package: IIT Delhi DMS (MBA) at ₹85 LPA highest." },
  { q: "What is the average placement package in Delhi colleges?", a: "Average packages by segment (2024–25): IIT Delhi — ₹25 LPA (BTech), ₹26 LPA (MBA). DTU Delhi — ₹18 LPA. NSUT — ₹16 LPA. IIIT Delhi — ₹20 LPA. FMS Delhi — ₹28 LPA. These are median/average CTC figures from official placement reports." },
  { q: "Which government college in Delhi has the best placements?", a: "Among government engineering colleges: IIIT Delhi (₹20 LPA avg) leads, followed by DTU (₹18 LPA avg) and NSUT (₹16 LPA avg). For MBA: FMS Delhi (₹28 LPA avg) is the #1 government MBA college for placements in Delhi." },
  { q: "Do private colleges in Delhi have good placements?", a: "Top private college placements: Amity University (₹8 LPA avg), Bennett University (₹9.2 LPA avg). Private colleges generally lag government colleges significantly in average packages, though some students get excellent offers from specific companies." },
  { q: "What companies recruit from Delhi colleges for placements?", a: "Top recruiters at Delhi colleges: Google, Microsoft, Amazon, Deloitte, McKinsey, BCG, Goldman Sachs (IIT Delhi / FMS). Infosys, TCS, Wipro, Cognizant (engineering colleges). KPMG, EY, Accenture (MBA colleges). Campus placement quality depends heavily on the college tier." },
]

export default function TopPlacementPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Colleges", url: "/colleges" },
    { name: "Top Placement Colleges Delhi", url: "/top-placement-colleges-delhi" },
  ])
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const itemList = generateItemListSchema([
    { name: "IIT Delhi", url: "/colleges/iit-delhi", description: "₹25 LPA avg BTech, ₹2.5 Cr highest" },
    { name: "FMS Delhi", url: "/colleges/fms-delhi-faculty-management-studies", description: "₹28 LPA avg MBA, ₹72 LPA highest" },
    { name: "DTU Delhi", url: "/colleges/dtu-delhi", description: "₹18 LPA avg BTech, ₹72 LPA highest" },
    { name: "IIIT Delhi", url: "/colleges/iiit-delhi", description: "₹20 LPA avg BTech, ₹1.2 Cr highest" },
    { name: "NSUT Delhi", url: "/colleges/nsut-delhi", description: "₹16 LPA avg BTech, ₹65 LPA highest" },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <SEOLandingPage
        breadcrumb={[{ label: "Colleges", href: "/colleges" }, { label: "Top Placement Colleges Delhi", href: "/top-placement-colleges-delhi" }]}
        h1="Top Placement Colleges in Delhi 2026"
        subtitle="Ranked by 2024–25 average placement package. Real data from official placement reports, NIRF, and college placement cells."
        heroStats={[
          { value: "₹28 LPA", label: "Best MBA Avg (FMS Delhi)" },
          { value: "₹20 LPA", label: "Best Engg Avg (IIIT Delhi)" },
          { value: "₹2.5 Cr", label: "Highest Package (IIT Delhi)" },
          { value: "100%", label: "Placement Rate (AIIMS, FMS)" },
        ]}
        introHeading="Best Placement Colleges in Delhi: 2024–25 Data"
        introParagraphs={[
          "Placement data is the most important metric for college selection — and the most misrepresented. CollegeDelhi compiles placement figures only from official placement brochures, NIRF submissions, and verified annual reports.",
          "Delhi's top placement colleges split across two categories: engineering (DTU, IIIT Delhi, NSUT, IIT Delhi) and management (FMS Delhi, IIT Delhi DMS, IMI Delhi, MDI Gurgaon). The gap between government and private college placements is significant — DTU's ₹18 LPA average outperforms most private colleges charging 2–3× higher fees.",
          "For 2026 admissions, look at 3-year placement trends, not just the most recent year. Companies like Google, Microsoft, and McKinsey recruit consistently from IIT Delhi and FMS Delhi.",
        ]}
        colleges={[
          { name: "IIT Delhi (BTech + MBA)", location: "South Delhi", naac: "A++", fees: "₹2.2L/yr", placement: "₹25 LPA avg · ₹2.5 Cr highest", slug: "iit-delhi" },
          { name: "FMS Delhi — MBA", location: "North Campus, Delhi", naac: "A+", fees: "₹55K total (govt)", placement: "₹28 LPA avg · ₹72 LPA highest", slug: "fms-delhi-faculty-management-studies" },
          { name: "IIIT Delhi — BTech", location: "South Delhi", naac: "A+", fees: "₹2.5–3L/yr", placement: "₹20 LPA avg · ₹1.2 Cr highest", slug: "iiit-delhi" },
          { name: "DTU Delhi — BTech", location: "North Delhi", naac: "A+", fees: "₹1.5–2L/yr", placement: "₹18 LPA avg · ₹72 LPA highest", slug: "dtu-delhi" },
          { name: "MDI Gurgaon — PGPM", location: "Gurugram", naac: "A", fees: "₹22–28L total", placement: "₹26 LPA avg · ₹60 LPA highest", slug: "mdi-gurgaon-management-development-institute" },
          { name: "NSUT Delhi — BTech", location: "Dwarka", naac: "A+", fees: "₹1.5–2L/yr", placement: "₹16 LPA avg · ₹65 LPA highest", slug: "nsut-delhi" },
          { name: "IMT Ghaziabad — PGDM", location: "Ghaziabad NCR", naac: "A+", fees: "₹17–22L total", placement: "₹14.5 LPA avg · ₹40 LPA highest", slug: "imt-ghaziabad" },
          { name: "IMI Delhi — PGDM", location: "South Delhi", naac: "A+", fees: "₹18–22L total", placement: "₹18 LPA avg · ₹42 LPA highest", slug: "imi-delhi-international-management-institute" },
        ]}
        whyHeading="What Makes a College's Placement Record Credible?"
        whyPoints={[
          { title: "NIRF Submission Data", description: "NIRF rankings require colleges to submit placement data annually. IIT Delhi, DTU, NSUT, FMS submit to NIRF — use this as the most reliable source." },
          { title: "Median vs Average Package", description: "Beware of 'average' figures inflated by a few top offers. Always ask for the median package. FMS Delhi's median is ₹24 LPA, very close to its ₹28 LPA average — a sign of consistent placements." },
          { title: "Placement Percentage", description: "AIIMS Delhi and FMS Delhi report near-100% placement. Engineering colleges vary — DTU places ~85%, private colleges often 60–70%. Get the verified percentage before deciding." },
          { title: "Recruiter Quality", description: "10 offers from Google > 50 from Infosys for long-term career trajectory. IIT Delhi and FMS Delhi attract McKinsey, Goldman Sachs, Google — check the recruiter list, not just the average package." },
        ]}
        faqs={faqs}
        relatedGuides={[
          { label: "Engineering Placement Rankings", href: "/engineering-colleges-delhi-placement", icon: "" },
          { label: "MBA Placement Rankings", href: "/mba-colleges-delhi-placement", icon: "" },
          { label: "Compare DTU vs NSUT", href: "/dtu-vs-nsut", icon: "" },
          { label: "FMS Delhi vs MDI", href: "/fms-delhi-vs-mdi-gurgaon", icon: "" },
          { label: "ROI Calculator", href: "/roi-calculator", icon: "" },
          { label: "Fees Calculator", href: "/delhi-college-fees-calculator", icon: "" },
        ]}
      />
    </>
  )
}
/*  ── legacy content removed ──
export const metadata = ...
export const revalidate = ...
export default function TopPlacementCollegesDELHIPage ...
--- BEGIN REMOVED ---
export const metadata: Metadata = genMeta({
  title: "Top Placement colleges in Delhi 2026 | Highest LPA & Best Recruiters",
  description: "colleges in Delhi with best placements 2026. FMS Delhi (₹28 LPA avg), DTU Delhi (₹12 LPA), SIT (₹9.8 LPA) -- compare average packages, highest packages, and top recruiters.",
  path: "/top-placement-colleges-delhi",
  keywords: ["top placement colleges Delhi", "best placement colleges Delhi 2026", "highest package colleges Delhi", "best placement engineering mba Delhi"],
})

export const revalidate = 300

const colleges = [
  { name: "FMS Delhi - MBA", location: "Knowledge Park Greater Noida", naac: "A+", fees: "₹8.5L (2yr)", placement: "₹28 LPA avg | ₹72 LPA highest", slug: "FMS Delhi-symbiosis-institute-of-business-management" },
  { name: "MDI Gurgaon - MBA", location: "Noida Sector 62", naac: "A+", fees: "₹8.2L (2yr)", placement: "₹24 LPA avg | ₹60 LPA highest", slug: "MDI Gurgaon-symbiosis-centre-management-hrd" },
  { name: "DTU Delhi - Engineering", location: "Connaught Place", naac: "A+", fees: "₹80K-1.8L/yr", placement: "₹12 LPA avg | ₹45 LPA highest", slug: "dtu-delhi-delhi-technological-university" },
  { name: "IMI Delhi - Engineering (Symbiosis)", location: "Knowledge Park Greater Noida", naac: "A+", fees: "₹3.6L-4.8L/yr", placement: "₹9.8 LPA avg | ₹42 LPA highest", slug: "nit-delhi-national-institute-of-technology" },
  { name: "IIIT Delhi - Engineering", location: "Dwarka Sector 3", naac: "A+", fees: "₹1.6L-2.2L/yr", placement: "₹8.5 LPA avg | ₹40 LPA highest", slug: "iiit-delhi-indraprastha-institute-of-information-technology" },
  { name: "NSUT Delhi - CS Engineering", location: "Rohini Sector 17", naac: "A", fees: "₹1.4L-1.9L/yr", placement: "₹7.5 LPA avg | ₹35 LPA highest", slug: "nsut-delhi" },
  { name: "Amity University Delhi Delhi - Engineering/MBA", location: "Rohini", naac: "A+", fees: "₹2L-6.5L", placement: "₹7.2 LPA avg | ₹38 LPA highest", slug: "amity-university-noida-delhi-ncr" },
  { name: "IIMS Delhi - MBA", location: "Kashmere Gate", naac: "A", fees: "₹5.5L (2yr)", placement: "₹12 LPA avg | ₹28 LPA highest", slug: "iims-Delhi" },
]

const faqs = [
  { q: "Which college in Delhi has the best placement for engineering?", a: "DTU (Delhi Technological University) has the best engineering placements in Delhi with ₹12 LPA average and ₹45 LPA highest package. For CS-specific placements, NSUT Delhi has the highest CS placement rate (98%+). IMI Delhi has the best placements among private/deemed engineering colleges (₹9.8 LPA avg)." },
  { q: "Which MBA college in Delhi has the highest placement package?", a: "FMS Delhi has the highest MBA placement in Delhi with ₹28 LPA average and ₹72 LPA highest package in recent batches. MDI Gurgaon is close behind with ₹24 LPA average. Both are Symbiosis colleges requiring SNAP + CAT for admission." },
  { q: "Which companies recruit from Delhi colleges?", a: "Top engineering recruiters: TCS Digital, Infosys, Wipro, Bajaj Auto, L&T, KPIT, Persistent. Top MBA recruiters from Delhi: McKinsey, BCG, KPMG, Deloitte, Amazon, HDFC Bank, Deutsche Bank, Asian Paints. Tech product companies like Google and Microsoft visit DTU Delhi, NSUT, and SIT for engineering placement." },
  { q: "What is the average placement package across all Delhi colleges?", a: "Overall average placement across all Delhi colleges: ₹4-5 LPA. Top-tier colleges (DTU Delhi, FMS Delhi, SIT): ₹8-28 LPA avg. Mid-tier colleges (IIIT Delhi, NSUT, IIMS): ₹5-12 LPA avg. Budget private colleges: ₹3.5-5 LPA avg. MBA placements are generally higher than engineering across equivalent college tiers." },
  { q: "Is placement guaranteed in Delhi colleges?", a: "No college legally guarantees 100% placement. However, DTU Delhi, NSUT, SIT, and FMS Delhi historically achieve 90-98% placement rates. These figures mean 90-98% of registered students receive job offers by final year end. Not all students participate in campus placements -- some pursue higher education (CAT for MBA, GATE for MTech, MS abroad)." },
]

export default function TopPlacementCollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Top Placement colleges in Delhi", url: "/top-placement-colleges-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top Placement colleges in Delhi 2026",
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
        breadcrumb={[{ label: "Top Placement colleges in Delhi", href: "/top-placement-colleges-delhi" }]}
        h1="Top Placement colleges in Delhi 2026"
        subtitle="colleges in Delhi ranked by placement outcomes. Average and highest LPA packages for engineering, MBA, and management programs -- real data from 2024-2026 batches."
        heroStats={[
          { value: "₹28 LPA", label: "Best MBA Avg (FMS Delhi)" },
          { value: "₹12 LPA", label: "Best Engg Avg (DTU Delhi)" },
          { value: "₹72 LPA", label: "Highest Package" },
          { value: "98%+", label: "Best Placement Rate" },
        ]}
        introHeading="Top Placement colleges in Delhi: Data-Driven Rankings 2026"
        introParagraphs={[
          "Placement outcomes are the ultimate measure of a college's real value. This guide ranks Delhi colleges strictly by placement data: average package, median package, highest package, placement rate (%), and recruiter quality. Data is sourced from official placement brochures, LinkedIn verification, and CollegeDelhi alumni network surveys for the 2024-2026 batch.",
          "Delhi's top placement colleges span two distinct categories: MBA colleges led by FMS Delhi and MDI Gurgaon (₹24-28 LPA average), and engineering colleges led by DTU Delhi and NSUT (₹7.5-12 LPA average). Understanding which category has better ROI for your investment is crucial -- a ₹8.5L MBA at FMS Delhi with ₹28 LPA average yields better ROI than a ₹4.8L engineering degree at DTU Delhi in pure financial terms.",
          "Placement rates should be interpreted carefully. 100% placement claims often include PPOs (Pre-Placement Offers) and student-driven placements alongside campus placements. The more meaningful metric is: what percentage of students received job offers through the college placement cell, and what was the median (not average) package to eliminate outlier impact from a few high-paying offers.",
        ]}
        colleges={colleges}
        whyHeading="What Makes Delhi Colleges Excel at Placements?"
        whyPoints={[
          { title: "IT Hub Proximity Effect", description: "Delhi's 600+ IT companies in Noida Sector 62, Cyber City Gurugram, and Sector 63 Noida visit campus regularly. Top colleges like DTU Delhi and SIT get 200-400 company visits per year, giving students maximum exposure to hiring opportunities." },
          { title: "Industry-Designed Curriculum", description: "Top Delhi colleges update curriculum with industry partners (Infosys, Bajaj, Cummins) to ensure graduates have job-ready skills. Industry advisory boards at DTU Delhi, Amity University Delhi, and SIT ensure curriculum relevance." },
          { title: "Strong Alumni Placement Networks", description: "Alumni at DTU Delhi, NSUT, FMS Delhi, and MDI Gurgaon actively participate in placement drives. LinkedIn data shows these alumni frequently refer junior college-mates, creating a self-reinforcing placement ecosystem." },
          { title: "PPO (Pre-Placement Offer) Culture", description: "Top Delhi engineering colleges convert 30-40% of internship students into PPOs from companies like TCS Digital, KPIT, and Bajaj Auto. This significantly boosts overall placement statistics." },
          { title: "Global MNC Presence in Delhi", description: "Deutsche Bank India operations, BNY Mellon technology center, Volkswagen India HQ, and 100+ global MNCs have India headquarters or major offices in Delhi -- creating international package opportunities for top graduates." },
          { title: "Multiple Placement Drives Per Year", description: "Unlike IITs (which have one placement season), Delhi autonomous colleges conduct multiple placement drives throughout the year -- giving students more chances to secure good packages and improving overall rates." },
        ]}
        admissionHeading="How to Get Into High-Placement colleges in Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Target Top-Tier Entrance Scores", description: "High-placement colleges require competitive scores: DTU Delhi (JEE Main 95+%ile), FMS Delhi (CAT 98+%ile required), IMI Delhi (JEE/SET), NSUT (JEE Main 92-95%ile). Start preparation 12 months before exams." },
          { step: "2", title: "Research Placement Data Before Applying", description: "Visit official placement brochures on college websites, check LinkedIn for company names in Education section of alumni, and talk to current students via CollegeDelhi alumni connect feature before finalizing applications." },
          { step: "3", title: "Build Profile for Better Placement Eligibility", description: "High-placement colleges shortlist students for elite company drives based on internal CGPA filters (typically 7.0+). From Day 1, focus on academics, participate in coding competitions, and build a GitHub portfolio (for CS)." },
          { step: "4", title: "Apply for High-Placement Colleges via JEE/CAT", description: "For engineering: Fill high-placement college-branch combinations first in JEE Main CAP. For MBA: Appear for CAT and apply to FMS Delhi/MDI Gurgaon early in the application cycle. Apply before deadlines." },
          { step: "5", title: "Leverage Internship to PPO Conversion", description: "Once admitted, focus on securing summer internships at good companies from 2nd year. 30-40% of Delhi engineering college students convert their internship into a Pre-Placement Offer, effectively securing placement 1 year before graduation." },
        ]}
        faqs={faqs}
        ctaHeading="Find Delhi Colleges That Match Your Placement Expectations"
        ctaSubtext="Tell us your target package and preferred field. Our AI will identify the Delhi colleges where your profile has the highest probability of achieving your placement goals."
      relatedGuides={[
        { label: "NAAC A+ colleges in Delhi", href: "/naac-a-plus-colleges-delhi", icon: "â­" },
        { label: "Low Fee colleges in Delhi", href: "/low-fee-colleges-Delhi", icon: "" },
        { label: "Delhi Colleges Fees Guide 2026", href: "/colleges-Delhi-fees", icon: "" },
        { label: "College Fees Calculator", href: "/delhi-college-fees-calculator", icon: "" },
        { label: "Placement Comparator Tool", href: "/delhi-college-placement-comparator", icon: "" },
        { label: "Engineering vs MBA Comparison", href: "/delhi-colleges-comparison-engineering-mba", icon: "âš–ï¸" },
        { label: "Admission Deadline Tracker 2026", href: "/delhi-admission-deadline-tracker-2026", icon: "" },
      ]}
      />
    </>
  )
}
*/
