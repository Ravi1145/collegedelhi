import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateCourseSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Commerce colleges in Delhi 2026 | BCom, MCom Colleges",
  description: "Best commerce colleges in Delhi 2026. SRCC, Hindu College, Sri Venkateswara College -- compare BCom government fees, NAAC grades, and career options",
  path: "/commerce-colleges-delhi",
  keywords: ["commerce colleges Delhi", "bcom colleges Delhi 2026", "mcom colleges Delhi", "best commerce College Delhi", "bcom admission Delhi", "SRCC admission"],
})

export const revalidate = 300

const colleges = [
  { name: "Shri Ram College of Commerce (SRCC)", location: "North Campus, Delhi", naac: "A+", fees: "DU government fee structure", placement: "Strong placement record", slug: "shri-ram-college-of-commerce" },
  { name: "Hindu College, University of Delhi", location: "North Campus, Delhi", naac: "A+", fees: "DU government fee structure", placement: "Government Aided", slug: "hindu-college-university-of-delhi" },
  { name: "Sri Venkateswara College", location: "South Campus, Delhi", naac: "A", fees: "DU government fee structure", placement: "Government Aided", slug: "sri-venkateswara-college" },
]

const faqs = [
  { q: "Which is the best commerce college in Delhi?", a: "Shri Ram College of Commerce (SRCC) is widely considered India's top commerce college, a constituent college of University of Delhi with NAAC A+ grade, strong placement record, and a powerful alumni network in banking, CA firms, and corporate finance." },
  { q: "What is the admission process for BCom in Delhi?", a: "BCom admission to University of Delhi constituent colleges, including SRCC and Hindu College, is through CUET (Common University Entrance Test) merit. Apply through the official DU admission portal during the announced application window." },
  { q: "What career options are available after BCom from Delhi?", a: "BCom graduates pursue: CA/CMA/CS (professional accounting), MBA (management career), MCom + NET (academic career), banking & finance jobs (BFSI sector), tax and audit roles in Big 4 firms, and government exams (banking exams, SSC CGL)." },
  { q: "Is BCom a good choice in Delhi in 2026?", a: "Yes. Delhi's growing BFSI (Banking, Financial Services, Insurance) sector creates strong demand for commerce graduates. BCom + CA is particularly powerful in Delhi's business ecosystem." },
  { q: "What specializations are available in BCom in Delhi?", a: "BCom specializations available at Delhi colleges include Honours and general BCom programs, with electives in accounting, finance, and economics. Check each college's official program list for current-year specialization options." },
]

export default function CommerceCollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Commerce colleges in Delhi", url: "/commerce-colleges-Delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Commerce colleges in Delhi 2026",
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
  name: "B.Com / Commerce Courses in Delhi",
  description: "3-year undergraduate commerce degree covering accounting, economics, business studies and taxation. Admitted via CUET for DU colleges including SRCC, Hindu, Hansraj.",
  provider: { '@type': 'Organization', name: 'CollegeDelhi.com', sameAs: 'https://www.collegedelhi.com' },
  timeRequired: "P3Y",
  url: 'https://www.collegedelhi.com' + "/commerce-colleges-delhi",
  offers: { '@type': 'Offer', priceCurrency: 'INR', price: 15000, priceSpecification: { '@type': 'PriceSpecification', minPrice: 15000, maxPrice: 200000, priceCurrency: 'INR' } },
}

return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <SEOLandingPage
        breadcrumb={[{ label: "Commerce colleges in Delhi", href: "/commerce-colleges-Delhi" }]}
        h1="Commerce colleges in Delhi 2026"
        subtitle="Find the best BCom and MCom colleges in Delhi. Compare fees, HSC cutoffs, NAAC grades, CA institute ties, and career opportunities for 2026 admission."
        heroStats={[
          { value: "Verified", label: "DU Commerce Colleges" },
          { value: "Govt Fees", label: "Affordable" },
          { value: "NAAC A+", label: "SRCC Grade" },
          { value: "BFSI Jobs", label: "Top Career Path" },
        ]}
        introHeading="Commerce colleges in Delhi: Your 2026 Admission Guide"
        introParagraphs={[
          "Delhi has a rich tradition of commerce education, anchored by Shri Ram College of Commerce (SRCC) — widely regarded as India's top commerce college — and other University of Delhi constituent colleges that have produced thousands of Chartered Accountants, senior bankers, and corporate finance leaders.",
          "Students who pair BCom with CA/CMA professional qualifications have the strongest career outcomes in Delhi's BFSI sector.",
          "Delhi's growing financial services sector creates strong demand for commerce graduates. Delhi's position as India's political and economic capital further expands career opportunities, with access to RBI, SEBI, and national financial institutions for BCom graduates.",
        ]}
        colleges={colleges}
        whyHeading="Why Study Commerce in Delhi?"
        whyPoints={[
          { title: "BFSI Industry Hub", description: "Delhi hosts major banks, NBFCs, and insurance companies. BCom graduates with CA/CMA have direct placement pathways into financial services firms." },
          { title: "CA Preparation Culture", description: "Delhi's commerce colleges have strong CA coaching ecosystems with ICAI study centers across the city. Many BCom students simultaneously prepare for CA while completing their degree." },
          { title: "Affordable Government Colleges", description: "SRCC and Hindu College follow the University of Delhi's regulated, affordable government fee structure for BCom education." },
          { title: "MCom & Research Pathway", description: "Top BCom students can pursue MCom at DU's Department of Commerce or apply for UGC-NET to become college lecturers — a stable career path for academic-minded students." },
          { title: "BBA & MBA Bridge", description: "BCom provides an excellent foundation for MBA entrance exams (CAT, IPU CET). Many FMS Delhi and MDI Gurgaon students come from BCom + work experience backgrounds, leveraging their commerce foundation." },
          { title: "Government Job Opportunities", description: "BCom graduates are eligible for banking exams (IBPS PO/Clerk, SBI PO), SSC CGL, state revenue exams, and UPSC — all high-competition but stable career paths." },
        ]}
        admissionHeading="BCom Admission Process in Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Complete Class 12 Commerce", description: "BCom admission to University of Delhi colleges is through CUET. Subjects like Accounts and Economics are core to BCom curriculum — strong Class 12 marks in these help in the first year." },
          { step: "2", title: "Apply on the DU Admission Portal", description: "After CUET results, register on DU's online admission portal. Fill in personal details, upload your CUET scorecard, and select preferred colleges and BCom program variants in priority order." },
          { step: "3", title: "Check Merit/CSAS Lists", description: "DU publishes admission rounds through its Common Seat Allocation System (CSAS). Check your rank and confirm admission before the deadline passes." },
          { step: "4", title: "Register for ICAI CA Foundation (Parallel)", description: "If pursuing CA alongside BCom, register for ICAI CA Foundation immediately after admission. The preparation window before the first CA exam allows studying while settling into college." },
          { step: "5", title: "Complete Document Verification", description: "Report to college with: Class 12 marksheet, passing certificate, transfer certificate, category certificate (if applicable), Aadhar, and passport photos. Pay fees and complete admission formalities." },
        ]}
        faqs={faqs}
        ctaHeading="Choose the Right Commerce College in Delhi"
        ctaSubtext="Get personalized advice on the best BCom college in Delhi based on your HSC scores, career goals (CA, MBA, BFSI), and budget. Free counselling from commerce education experts."
      relatedGuides={[
        { label: "Arts & Science colleges in Delhi", href: "/arts-colleges-delhi", icon: "" },
        { label: "Science colleges in Delhi", href: "/science-colleges-Delhi", icon: "" },
        { label: "BCA colleges in Delhi", href: "/bca-colleges-delhi", icon: "" },
        { label: "BBA colleges in Delhi", href: "/bba-colleges-delhi", icon: "" },
        { label: "BSc IT colleges in Delhi", href: "/bsc-it-colleges-Delhi", icon: "" },
        { label: "Law colleges in Delhi", href: "/law-colleges-delhi", icon: "âš–ï¸" },
        { label: "Design colleges in Delhi", href: "/design-colleges-delhi", icon: "" },
      ]}
      />
    </>
  )
}

