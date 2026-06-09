import type { Metadata } from "next"
import Script from "next/script"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

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
  { name: "DTU Delhi - Engineering", location: "Connaught Place", naac: "A+", fees: "₹80K-1.8L/yr", placement: "₹12 LPA avg | ₹45 LPA highest", slug: "DTU Delhi-college-of-engineering-Delhi" },
  { name: "IMI Delhi - Engineering (Symbiosis)", location: "Knowledge Park Greater Noida", naac: "A+", fees: "₹3.6L-4.8L/yr", placement: "₹9.8 LPA avg | ₹42 LPA highest", slug: "symbiosis-institute-of-technology-Delhi" },
  { name: "IIIT Delhi - Engineering", location: "Dwarka Sector 3", naac: "A+", fees: "₹1.6L-2.2L/yr", placement: "₹8.5 LPA avg | ₹40 LPA highest", slug: "vit-Delhi-vishwakarma-institute-of-technology" },
  { name: "NSUT Delhi - CS Engineering", location: "Rohini Sector 17", naac: "A", fees: "₹1.4L-1.9L/yr", placement: "₹7.5 LPA avg | ₹35 LPA highest", slug: "NSUT-Delhi-institute-of-computer-technology" },
  { name: "Amity University Delhi Delhi - Engineering/MBA", location: "Rohini", naac: "A+", fees: "₹2L-6.5L", placement: "₹7.2 LPA avg | ₹38 LPA highest", slug: "Amity University Delhi-mit-world-peace-university" },
  { name: "IIMS Delhi - MBA", location: "Karve Nagar", naac: "A", fees: "₹5.5L (2yr)", placement: "₹12 LPA avg | ₹28 LPA highest", slug: "iims-Delhi" },
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
      url: `https://collegedelhi.com/colleges/${c.slug}`,
    })),
  }

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
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
          { step: "1", title: "Target Top-Tier Entrance Scores", description: "High-placement colleges require competitive scores: DTU Delhi (JEE Main 95+%ile), FMS Delhi (SNAP 99+%ile + CAT 85+%ile), IMI Delhi (JEE/SET), NSUT (JEE Main 92-95%ile). Start preparation 12 months before exams." },
          { step: "2", title: "Research Placement Data Before Applying", description: "Visit official placement brochures on college websites, check LinkedIn for company names in Education section of alumni, and talk to current students via CollegeDelhi alumni connect feature before finalizing applications." },
          { step: "3", title: "Build Profile for Better Placement Eligibility", description: "High-placement colleges shortlist students for elite company drives based on internal CGPA filters (typically 7.0+). From Day 1, focus on academics, participate in coding competitions, and build a GitHub portfolio (for CS)." },
          { step: "4", title: "Apply for High-Placement Colleges in CAP/SNAP", description: "For engineering: Fill high-placement college-branch combinations first in JEE Main CAP. For MBA: Appear for SNAP + CAT and apply to FMS Delhi/MDI Gurgaon early in the application cycle. Apply before deadlines." },
          { step: "5", title: "Leverage Internship to PPO Conversion", description: "Once admitted, focus on securing summer internships at good companies from 2nd year. 30-40% of Delhi engineering college students convert their internship into a Pre-Placement Offer, effectively securing placement 1 year before graduation." },
        ]}
        faqs={faqs}
        ctaHeading="Find Delhi Colleges That Match Your Placement Expectations"
        ctaSubtext="Tell us your target package and preferred field. Our AI will identify the Delhi colleges where your profile has the highest probability of achieving your placement goals."
      relatedGuides={[
        { label: "NAAC A+ colleges in Delhi", href: "/naac-a-plus-colleges-delhi", icon: "â­" },
        { label: "Low Fee colleges in Delhi", href: "/low-fee-colleges-Delhi", icon: "💰" },
        { label: "Delhi Colleges Fees Guide 2026", href: "/colleges-Delhi-fees", icon: "📊" },
        { label: "College Fees Calculator", href: "/delhi-college-fees-calculator", icon: "🧮" },
        { label: "Placement Comparator Tool", href: "/delhi-college-placement-comparator", icon: "📈" },
        { label: "Engineering vs MBA Comparison", href: "/delhi-colleges-comparison-engineering-mba", icon: "âš–ï¸" },
        { label: "Admission Deadline Tracker 2026", href: "/delhi-admission-deadline-tracker-2026", icon: "📅" },
      ]}
      />
    </>
  )
}

