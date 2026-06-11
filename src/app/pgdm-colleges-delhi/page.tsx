import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "PGDM colleges in Delhi 2026 | Best Post Graduate Diploma Management",
  description: "Best PGDM colleges in Delhi 2026. Compare PGDM vs MBA, fees (₹4L-9L), placement packages, AICTE approval, and CAT/IPU CET cutoffs for top Delhi management institutes.",
  path: "/pgdm-colleges-delhi",
  keywords: ["pgdm colleges Delhi", "post graduate diploma management Delhi", "pgdm vs mba Delhi", "pgdm admission Delhi 2026"],
})

export const revalidate = 300

const colleges = [
  { name: "MDI Gurgaon (Management Development Institute)", location: "Sector 17, Gurgaon", naac: "A+", fees: "₹22L (2yr)", placement: "₹24 LPA avg", slug: "mdi-gurgaon-management-development-institute" },
  { name: "IMI Delhi (International Management Institute)", location: "Qutab Institutional Area, Delhi", naac: "A+", fees: "₹14L (2yr)", placement: "₹14 LPA avg", slug: "imi-delhi-international-management-institute" },
  { name: "FORE School of Management Delhi", location: "Qutab Institutional Area, Delhi", naac: "A+", fees: "₹10.5L (2yr)", placement: "₹10.5 LPA avg", slug: "fore-school-management-delhi" },
  { name: "BIMTECH Greater Noida (Birla Institute of Management Technology)", location: "Greater Noida", naac: "A+", fees: "₹9.2L (2yr)", placement: "₹9.2 LPA avg", slug: "bimtech-birla-institute-management-technology-noida" },
  { name: "LBSIM Delhi (Lal Bahadur Shastri Institute of Management)", location: "Dwarka Sector 7, Delhi", naac: "A", fees: "₹8.8L (2yr)", placement: "₹8.8 LPA avg", slug: "lbsim-lal-bahadur-shastri-institute-management-delhi" },
  { name: "Jaipuria Institute of Management Noida", location: "Sector 62, Noida", naac: "A", fees: "₹7.5L (2yr)", placement: "₹7.5 LPA avg", slug: "jaipuria-institute-management-noida" },
  { name: "IMT Ghaziabad (Institute of Management Technology)", location: "Ghaziabad, NCR", naac: "A+", fees: "₹15L (2yr)", placement: "₹13.5 LPA avg", slug: "imt-ghaziabad-institute-management-technology" },
  { name: "IMS Ghaziabad (University Courses Campus)", location: "NH-9, Ghaziabad", naac: "A", fees: "₹4.5L (2yr)", placement: "₹6.8 LPA avg", slug: "ims-ghaziabad-university-courses-campus" },
]

const faqs = [
  { q: "What is the difference between PGDM and MBA in Delhi?", a: "MBA is a university-affiliated degree (from Delhi University or IP University), while PGDM is an AICTE-approved diploma offered by autonomous institutes. PGDM is considered equivalent to MBA for employment and higher education purposes. Top PGDM institutes like MDI Gurgaon and IMI Delhi often outrank many university MBA programs in placements." },
  { q: "Is PGDM from Delhi colleges recognized?", a: "Yes. AICTE-approved PGDM from institutes like MDI Gurgaon, IMI Delhi, FORE School, and BIMTECH is fully recognized by all employers, government bodies, and for higher education admission. These are considered equivalent to MBA by UGC and AICTE." },
  { q: "What is the eligibility for PGDM admission in Delhi?", a: "Minimum 50% in graduation (45% for SC/ST) from any recognized university. Must appear in CAT, IPU CET, XAT, CMAT, or MAT. Work experience is not mandatory but is preferred by top institutes like MDI Gurgaon and IMI Delhi." },
  { q: "What is the average fee for PGDM in Delhi?", a: "PGDM fees in Delhi NCR range from ₹4.5L (IMS Ghaziabad) to ₹22L (MDI Gurgaon) for 2 years. Mid-tier institutes charge ₹7.5–₹10.5L. Premium institutes like MDI and IMT Ghaziabad charge ₹15–₹22L. These fees include tuition but may exclude hostel and study materials." },
  { q: "Which PGDM specializations are available in Delhi?", a: "Popular PGDM specializations in Delhi: Finance, Marketing, Human Resource Management, Operations Management, Business Analytics, International Business, Supply Chain Management, and Entrepreneurship. Finance and Marketing are the most popular for high-paying careers." },
]

export default function PgdmCollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "PGDM colleges in Delhi", url: "/pgdm-colleges-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PGDM colleges in Delhi 2026",
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
        breadcrumb={[{ label: "PGDM colleges in Delhi", href: "/pgdm-colleges-delhi" }]}
        h1="PGDM colleges in Delhi 2026"
        subtitle="Explore the best PGDM (Post Graduate Diploma in Management) programs in Delhi. Compare fees, placement packages, specializations, and CAT cutoffs for 2026 admission."
        heroStats={[
          { value: "20+", label: "PGDM Institutes" },
          { value: "₹3.8L-12L", label: "Program Fees" },
          { value: "₹24 LPA", label: "Best Avg Placement" },
          { value: "AICTE", label: "Approved Programs" },
        ]}
        introHeading="PGDM colleges in Delhi: Your Complete Guide for 2026"
        introParagraphs={[
          "PGDM (Post Graduate Diploma in Management) is a 2-year management program offered by AICTE-approved autonomous institutes in Delhi. Unlike university-affiliated MBA programs, PGDM institutes have more flexibility to update curricula, making them often more industry-relevant. Top PGDM institutes in Delhi like MDI Gurgaon have placement records rivaling IIMs in certain specializations.",
          "The key advantage of PGDM over MBA is industry orientation. PGDM programs in Delhi frequently invite guest faculty from corporate leaders, incorporate live case studies from Delhi's business ecosystem, and structure internships with specific industry partners. This real-world immersion results in higher starting salaries and better career transitions for graduates.",
          "For 2026 PGDM admissions, candidates need to appear for CAT (November 2025), IPU CET (March 2026), CMAT (January 2026), or XAT (January 2026). Most PGDM institutes in Delhi accept multiple exam scores. Work experience, while not mandatory, significantly strengthens applications to top institutes like MDI Gurgaon and IMI Delhi.",
        ]}
        colleges={colleges}
        whyHeading="Why Choose PGDM Over MBA in Delhi?"
        whyPoints={[
          { title: "Industry-Updated Curriculum", description: "PGDM institutes can revise curriculum every year without university approval, ensuring students learn relevant skills like business analytics, digital marketing, and ESG management from day one." },
          { title: "Corporate Faculty Exposure", description: "Top Delhi PGDM institutes bring in CEOs, CFOs, and VPs from Delhi's corporate sector as regular faculty, giving students real-world perspectives unavailable in traditional MBA programs." },
          { title: "Equivalent to MBA for Jobs", description: "AICTE-approved PGDM is fully equivalent to MBA for all employment purposes, government jobs, and higher education in India and internationally. Employers treat them identically." },
          { title: "Better Placement Infrastructure", description: "Autonomous PGDM institutes invest heavily in dedicated placement cells, industry advisory boards, and corporate relations teams -- often achieving better placement outcomes than affiliated MBA programs." },
          { title: "International Exposure", description: "Several Delhi PGDM institutes offer international immersion programs at partner universities in Europe, USA, and Singapore -- a common differentiator from regular MBA programs." },
          { title: "Smaller Batch Sizes", description: "PGDM batches are typically 60-120 students vs. 300+ in university MBA programs, enabling personalized mentorship, stronger alumni bonds, and better individual placement attention." },
        ]}
        admissionHeading="PGDM Admission Process in Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Select Entrance Exams to Attempt", description: "For PGDM admission in Delhi, attempt CAT (November 2025), IPU CET (March 2026), XAT (January 2026), or CMAT (January 2026). MAT is accepted by mid-tier institutes. Attempt multiple exams to maximize options." },
          { step: "2", title: "Apply to Shortlisted PGDM Institutes", description: "Applications open from October 2025 for most Delhi PGDM institutes. Fill online applications, pay fees (₹1,000-2,500 per application), and submit SOP, CV, and academic documents." },
          { step: "3", title: "Get Shortlisted for GDPI Process", description: "Based on entrance scores, institutes shortlist candidates for Group Discussion, Personal Interview, and Written Ability Test (GDPI/WAT). Notifications typically come in January-March 2026." },
          { step: "4", title: "Attend GD, PI, and WAT Rounds", description: "Prepare thoroughly for GD (current business events, Delhi industry news), PI (HR and domain questions), and WAT (1-page essay on business topics). MDI Gurgaon and FLAME are highly competitive." },
          { step: "5", title: "Receive Offer Letter & Confirm Admission", description: "Merit list released March-April 2026. Accept offer within deadline, pay first semester fees, and arrange accommodation. Orientation typically starts in June 2026." },
        ]}
        faqs={faqs}
        ctaHeading="Find the Best PGDM Program in Delhi for Your Profile"
        ctaSubtext="Get expert guidance on choosing between MBA and PGDM in Delhi. Our counsellors will match your CAT/IPU CET scores with the best management programs available."
      relatedGuides={[
        { label: "Best MBA colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "🏛️" },
        { label: "Top 10 MBA Colleges — Ranked", href: "/top-10-mba-colleges-in-delhi", icon: "🏆" },
        { label: "MBA Placement Guide — LPA Stats", href: "/mba-colleges-delhi-placement", icon: "💼" },
        { label: "Low Fees MBA colleges in Delhi", href: "/low-fees-mba-colleges-delhi", icon: "💰" },
        { label: "MBA Scholarships in Delhi", href: "/mba-colleges-delhi-scholarship", icon: "🎓" },
        { label: "CAT Score colleges in Delhi", href: "/cat-colleges-delhi", icon: "📝" },
        { label: "Admission Without CAT (IPU CET)", href: "/mba-admission-delhi-without-cat", icon: "🚀" },
      ]}
      />
    </>
  )
}

