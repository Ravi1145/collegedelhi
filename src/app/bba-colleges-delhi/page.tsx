import type { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateCourseSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Best BBA Colleges in Delhi 2026 | Fees, CUET Cutoff & Placements",
  description: "Top BBA colleges in Delhi 2026: SSCBS DU (₹18K/yr), Amity Noida, JIMS, BPIT. CUET & IPU CET cutoffs, fees ₹18K–₹2.5L/yr, placements ₹3.5–15 LPA.",
  path: "/bba-colleges-delhi",
  keywords: [
    "bba colleges in Delhi 2026",
    "best bba college Delhi",
    "bba admission Delhi 2026",
    "bba fees Delhi 2026",
    "bba cutoff Delhi 2026",
    "cuet bba colleges Delhi",
    "ipu cet bba Delhi",
    "sscbs du bba admission",
    "amity university bba Delhi",
    "ip university bba Delhi",
    "du bba colleges Delhi",
    "bba placement Delhi",
    "bba vs bcom Delhi",
    "bachelor of business administration Delhi",
    "bba colleges Delhi NCR 2026",
    "government bba college Delhi",
    "top bba college Delhi ncr",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "SSCBS — Shaheed Sukhdev College of Business Studies, DU", location: "Rohini, North Delhi", naac: "A+", fees: "₹18K–₹25K/yr", placement: "₹8–15 LPA avg", slug: "shaheed-sukhdev-college-business-studies-du" },
  { name: "Deen Dayal Upadhyaya College — BMS, DU", location: "Dwarka, South-West Delhi", naac: "A+", fees: "₹20K–₹30K/yr", placement: "₹6–12 LPA avg", slug: "deen-dayal-upadhyaya-college-du-delhi" },
  { name: "Amity University Noida — BBA", location: "Sector 125, Noida (Delhi NCR)", naac: "A+", fees: "₹1.8L–₹2.5L/yr", placement: "₹5–8 LPA avg", slug: "amity-university-noida-delhi-ncr" },
  { name: "JIMS — Jagan Institute of Management Studies, BBA", location: "Rohini, North Delhi", naac: "A", fees: "₹75K–₹1.1L/yr", placement: "₹4–7 LPA avg", slug: "jims-jagan-institute-management-studies-delhi" },
  { name: "BPIT — Bhagwan Parshuram Institute of Technology, BBA", location: "Rohini, North Delhi", naac: "A", fees: "₹60K–₹90K/yr", placement: "₹3.5–6 LPA avg", slug: "bpit-bhagwan-parshuram-institute-technology" },
  { name: "Rukmini Devi Institute of Advanced Studies — BBA", location: "Pitampura, North Delhi", naac: "A", fees: "₹55K–₹80K/yr", placement: "₹3–5 LPA avg", slug: "rukmini-devi-institute-advanced-studies-delhi" },
]

const faqs = [
  { q: "What is BBA and what is the scope in Delhi 2026?", a: "BBA (Bachelor of Business Administration) is a 3-year undergraduate management degree. In Delhi, BBA has excellent scope — top companies recruit from SSCBS DU at ₹8–15 LPA. Most BBA graduates pursue MBA from FMS Delhi (CAT 99+ %ile) or MDI Gurgaon for ₹18–32 LPA packages. Sectors hiring BBA grads: Banking (HDFC, ICICI), Consulting (Deloitte, KPMG), E-commerce, Marketing, and Startups." },
  { q: "What entrance exam is needed for BBA in Delhi?", a: "BBA entrance exams for Delhi 2026: (1) CUET 2026 — required for Delhi University BBA colleges like SSCBS DU and DDU College. Register at cuet.samarth.ac.in. (2) IPU CET — required for IP University-affiliated BBA colleges like JIMS, BPIT, Rukmini Devi. Register at ipu.ac.in. (3) Own Entrance — Amity University Noida conducts its own AUAT test + Personal Interview. No common entrance required for management quota seats in private colleges." },
  { q: "What is the CUET cutoff for SSCBS DU BBA 2026?", a: "SSCBS Delhi University BBA CUET 2026 cutoff (estimated): Open category — 99+ percentile in CUET Business Studies. OBC-NCL — 97+ percentile. SC — 92+ percentile. ST — 85+ percentile. SSCBS has the highest CUET cutoff among all BBA colleges in India. Only 270 seats are available across all categories. Apply early as CUET 2026 registration closes in March 2026." },
  { q: "What is the eligibility for BBA in Delhi 2026?", a: "BBA eligibility in Delhi 2026: 10+2 (any stream — Science, Commerce, or Arts) with minimum 45–60% aggregate marks. DU colleges require CUET 2026 scores. IP University colleges require IPU CET. No stream restriction — PCM, PCB, Commerce, and Humanities students all eligible for BBA. Minimum age: 17 years. Note: SSCBS DU requires English as a subject in Class 12." },
  { q: "Is BBA better than BCom in Delhi?", a: "BBA vs BCom in Delhi: BBA focuses on management, marketing, and entrepreneurship — better for MBA pathway and corporate management roles. BCom covers accounting, taxation, and finance — better for CA, CPA, and banking careers. BBA fees are higher (₹40K–2.5L/yr vs BCom ₹15K–50K/yr). For MBA aspirants: BBA from SSCBS DU is the strongest foundation. For CA/CFA: BCom from SRCC or Hindu College is preferred." },
  { q: "What are the top recruiters for BBA from Delhi colleges?", a: "Top recruiters for BBA from Delhi colleges: HDFC Bank, ICICI Bank, Axis Bank (Banking), Deloitte, KPMG, EY, PwC (Consulting), Amazon, Flipkart, Meesho (E-commerce), Infosys BPO, Wipro BPS (IT Services), and various FMCG companies (HUL, ITC, P&G). SSCBS DU highest package 2024: ₹28 LPA. Amity Noida BBA average: ₹5–8 LPA." },
]

export default function BBACollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "BBA Colleges in Delhi", url: "/bba-colleges-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best BBA Colleges in Delhi 2026",
    numberOfItems: colleges.length,
    itemListElement: colleges.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `https://www.collegedelhi.com/colleges/${c.slug}`,
    })),
  }

  const courseSchemaData = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: "Bachelor of Business Administration (BBA) in Delhi",
  description: "3-year undergraduate management program covering business fundamentals, marketing, HR, and finance. Admits via IPU CET, DU JAT, or direct admission.",
  provider: { '@type': 'Organization', name: 'CollegeDelhi.com', sameAs: 'https://www.collegedelhi.com' },
  timeRequired: "P3Y",
  url: 'https://www.collegedelhi.com' + "/bba-colleges-delhi",
  offers: { '@type': 'Offer', priceCurrency: 'INR', price: 30000, priceSpecification: { '@type': 'PriceSpecification', minPrice: 30000, maxPrice: 350000, priceCurrency: 'INR' } },
}

return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <SEOLandingPage
        breadcrumb={[{ label: "BBA Colleges in Delhi", href: "/bba-colleges-delhi" }]}
        h1="Best BBA Colleges in Delhi 2026"
        subtitle="BBA (Bachelor of Business Administration) is a 3-year management degree. Compare top BBA colleges in Delhi — fees ₹18K–₹2.5L/yr, CUET & IPU CET cutoffs, NAAC grades, and placements up to ₹15 LPA for 2026 admission."
        heroStats={[
          { value: "30+", label: "BBA Colleges in Delhi NCR" },
          { value: "₹18K–₹2.5L", label: "Annual Fees Range" },
          { value: "₹15 LPA", label: "Highest Avg (SSCBS DU)" },
          { value: "CUET / IPU CET", label: "Entrance Exams" },
        ]}
        introHeading="BBA Colleges in Delhi: CUET & IPU CET Admission Guide 2026"
        introParagraphs={[
          "Delhi offers India's best BBA colleges, from the highly sought-after SSCBS Delhi University (India's #1 BBA college) to affordable IP University-affiliated colleges like JIMS and BPIT. BBA (Bachelor of Business Administration) is a 3-year undergraduate degree covering management, marketing, finance, human resources, and entrepreneurship across 6 semesters.",
          "BBA admission in Delhi runs through two main routes: (1) CUET 2026 for Delhi University colleges — SSCBS DU requires 99+ percentile, the highest cutoff in India. (2) IPU CET for Guru Gobind Singh Indraprastha University-affiliated colleges like JIMS Rohini, BPIT, and Rukmini Devi Institute. Deemed universities like Amity Noida conduct their own entrance tests.",
          "Choosing the right BBA college in Delhi depends on your CUET/IPU CET score, budget, and MBA goals. Government-aided DU colleges (SSCBS, DDU) offer unmatched value at ₹18K–30K/year and exceptional placement. Private GGSIPU colleges offer industry-linked programmes at ₹55K–1.1L/year. Deemed universities (Amity) offer modern campuses and strong placement cells at ₹1.8L–2.5L/year.",
        ]}
        colleges={colleges}
        whyHeading="Why Pursue BBA in Delhi?"
        whyPoints={[
          { title: "India's Best BBA College", description: "SSCBS Delhi University is consistently ranked India's #1 BBA college (NIRF Management) with ₹8–28 LPA placements. Getting a BBA from Delhi is equivalent to a top MBA from tier-2 cities in terms of industry recognition." },
          { title: "Strong MBA Gateway", description: "BBA from Delhi's top colleges gives an excellent foundation for CAT-based MBA programs. SSCBS DU alumni regularly crack FMS Delhi (₹32 LPA avg), MDI Gurgaon (₹24 LPA avg), and IIM-Calcutta through CAT." },
          { title: "Dual Admission Routes", description: "CUET 2026 for DU colleges and IPU CET for GGSIPU-affiliated colleges offer structured merit-based admission. Any stream (Science, Commerce, Arts) students are eligible — no stream restriction for BBA." },
          { title: "Industry Capital Access", description: "Delhi's position as India's business capital means BBA students intern and get placed at headquarters of top banks, FMCG companies, consulting firms, and startups — giving unmatched real-world exposure." },
          { title: "Specialization Options", description: "Delhi BBA colleges offer specializations in Marketing, Finance, HR, International Business, Digital Marketing, Retail, and Entrepreneurship — letting students build domain expertise from Year 2." },
          { title: "Affordable Government Option", description: "SSCBS DU charges just ₹18,000–25,000/year for India's best BBA programme. DDU College charges ₹20,000–30,000/year. These government-aided colleges deliver exceptional ROI compared to private universities." },
        ]}
        admissionHeading="BBA Admission Process in Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Register for CUET 2026 / IPU CET", description: "For DU BBA colleges (SSCBS, DDU): Register for CUET 2026 at cuet.samarth.ac.in (December 2025–March 2026). Choose BBA/BMS as your programme. For IP University BBA colleges (JIMS, BPIT): Register for IPU CET at ipu.ac.in. For Amity Noida: Register for AUAT at amity.edu." },
          { step: "2", title: "Appear for Entrance Exam", description: "CUET 2026 exam: April–May 2026. The test covers English, General Awareness, Quantitative Aptitude, and domain subjects. For BBA, Business Studies or Economics as domain subject helps. IPU CET: May 2026. Prepare with mock tests — IPU CET covers English, Logical Reasoning, GK, and Mathematics." },
          { step: "3", title: "Check Merit Lists & Apply", description: "CUET results declared in June 2026. DU BBA merit lists published at admission.uod.ac.in. Apply for your preferred DU college — SSCBS first, DDU next. For IPU CET: Results in June 2026. Apply at ipu.ac.in for your preferred IP University BBA college." },
          { step: "4", title: "Complete Document Verification", description: "Shortlisted candidates must submit Class 10 & 12 marksheets, Delhi domicile certificate (for reservation), CUET/IPU CET scorecard, category certificate (SC/OBC/EWS), Aadhaar, and 4 passport photos. Physical document verification at college." },
          { step: "5", title: "Pay Fees & Confirm Admission", description: "Pay semester fees online within the specified window (typically 3 days after allotment). SSCBS DU fees: ₹18,000–25,000/year. JIMS/BPIT: ₹75,000–1.1L/year. Amity Noida: ₹1.8L–2.5L/year. Collect your admission letter and report for orientation in late July 2026." },
        ]}
        faqs={faqs}
        ctaHeading="Get Personalized BBA Admission Guidance for Delhi"
        ctaSubtext="Tell us your CUET/IPU CET score and budget — our counsellors will shortlist the best BBA colleges in Delhi matching your profile and MBA goals."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "🎓" },
          { label: "BCA Colleges in Delhi 2026", href: "/bca-colleges-delhi", icon: "💻" },
          { label: "BTech Colleges in Delhi 2026", href: "/btech-colleges-delhi", icon: "⚙️" },
          { label: "Commerce Colleges in Delhi", href: "/commerce-colleges-Delhi", icon: "📊" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "🏆" },
          { label: "CAT Colleges Delhi", href: "/cat-colleges-delhi", icon: "📝" },
          { label: "Government Colleges Delhi", href: "/government-colleges-delhi", icon: "🏛️" },
          { label: "Best Colleges in Delhi 2026", href: "/best-colleges-in-delhi", icon: "⭐" },
        ]}
      />
    </>
  )
}
