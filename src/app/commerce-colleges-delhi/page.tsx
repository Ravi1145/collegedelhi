import type { Metadata } from "next"
import Script from "next/script"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Commerce colleges in Delhi 2026 | BCom, MCom Colleges | Fees & Admissions",
  description: "Best commerce colleges in Delhi 2026. BMCC, Gargi College, Hindu College, Symbiosis -- compare BCom fees (₹15K-80K/yr), NAAC grades, and career options after BCom.",
  path: "/commerce-colleges-delhi",
  keywords: ["commerce colleges Delhi", "bcom colleges Delhi 2026", "mcom colleges Delhi", "best commerce College Delhi", "bcom admission Delhi"],
})

export const revalidate = 300

const colleges = [
  { name: "Brihan Delhi College of Commerce (BMCC)", location: "Connaught Place", naac: "A+", fees: "₹18K-45K/yr", placement: "₹5.5 LPA avg", slug: "bmcc-Delhi" },
  { name: "Gargi College of Commerce", location: "Karve Road", naac: "A", fees: "₹15K-40K/yr", placement: "Govt. Aided", slug: "garware-college-of-commerce-Delhi" },
  { name: "Hindu College (Science & Commerce)", location: "Connaught Place", naac: "A+", fees: "₹20K-50K/yr", placement: "Government", slug: "sp-college-delhi" },
  { name: "Symbiosis College of Arts & Commerce (SCAC)", location: "Senapati Bapat Road", naac: "A+", fees: "₹45K-80K/yr", placement: "₹5 LPA avg", slug: "symbiosis-college-arts-commerce-Delhi" },
  { name: "Kirori Mal College of Arts Science & Commerce", location: "Connaught Place", naac: "A", fees: "₹22K-55K/yr", placement: "Govt. Aided", slug: "modern-college-delhi" },
  { name: "Nowrosjee Wadia College", location: "Delhi", naac: "A", fees: "₹18K-45K/yr", placement: "Government", slug: "nowrosjee-wadia-college-delhi" },
  { name: "MIT College of Commerce - Amity University Delhi", location: "Rohini", naac: "A+", fees: "₹55K-1L/yr", placement: "₹4.8 LPA avg", slug: "Amity University Delhi-mit-world-peace-university" },
  { name: "Abhinav Education Society's College of Commerce", location: "Narayan Peth", naac: "A", fees: "₹18K-38K/yr", placement: "Govt. Aided", slug: "abhinav-college-commerce-Delhi" },
]

const faqs = [
  { q: "Which is the best commerce college in Delhi?", a: "BMCC (Brihan Delhi College of Commerce) is widely considered the best commerce college in Delhi with NAAC A+ grade, excellent CA coaching infrastructure, and strong alumni network in banking, CA firms, and corporate finance." },
  { q: "What is the admission process for BCom in Delhi?", a: "BCom admissions in Delhi are based on HSC (12th Commerce) merit. Apply on DU online portal after HSC results in June. Merit cutoffs for BMCC are typically 80-90% in HSC Commerce. Symbiosis College conducts its own entrance/aptitude test." },
  { q: "What career options are available after BCom from Delhi?", a: "BCom graduates from Delhi pursue: CA/CMA/CS (professional accounting), MBA (management career), MCom + NET (academic career), banking & finance jobs (BFSI sector), tax and audit roles in Big 4 firms, and government exams (banking exams, SSC CGL)." },
  { q: "Is BCom a good choice in Delhi in 2026?", a: "Yes. Delhi's growing BFSI (Banking, Financial Services, Insurance) sector and presence of companies like HDFC, ICICI, Deutsche Bank, and BNY Mellon create strong demand for commerce graduates. BCom + CA is particularly powerful in Delhi's business ecosystem." },
  { q: "What specializations are available in BCom in Delhi?", a: "BCom specializations in Delhi: Banking & Finance, Accounting, Computer Applications, Management Studies, Financial Markets, and International Business. BMCC and Gargi College offer BCom (Banking), which is popular for BFSI careers." },
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
      url: `https://collegedelhi.com/colleges/${c.slug}`,
    })),
  }

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <SEOLandingPage
        breadcrumb={[{ label: "Commerce colleges in Delhi", href: "/commerce-colleges-Delhi" }]}
        h1="Commerce colleges in Delhi 2026"
        subtitle="Find the best BCom and MCom colleges in Delhi. Compare fees, HSC cutoffs, NAAC grades, CA institute ties, and career opportunities for 2026 admission."
        heroStats={[
          { value: "25+", label: "Commerce Colleges" },
          { value: "₹15K/yr", label: "Min Fees (Govt)" },
          { value: "NAAC A+", label: "Best BMCC Grade" },
          { value: "BFSI Jobs", label: "Top Career Path" },
        ]}
        introHeading="Commerce colleges in Delhi: Your 2026 Admission Guide"
        introParagraphs={[
          "Delhi has a rich tradition of commerce education, anchored by historic institutions like BMCC (established 1943) and Gargi College (established 1955) -- both government-aided institutions that have produced thousands of Chartered Accountants, senior bankers, and corporate finance leaders. These colleges combine affordable education with strong academic foundations.",
          "The commerce education ecosystem in Delhi has evolved significantly, with Kirori Mal Colleges offering BCom in Banking & Finance, BCom Computer Applications, and BCom International Business alongside traditional BCom (General). Students who pair BCom with CA/CMA professional qualifications have the strongest career outcomes in Delhi's BFSI sector.",
          "Delhi's growing financial services sector -- Deutsche Bank's India operations, BNY Mellon technology center, Concentrix, and hundreds of CA firms -- creates strong demand for commerce graduates. Delhi's position as India's political and economic capital further expands career opportunities, with direct access to SEBI, RBI regional office, and national financial institutions for BCom graduates.",
        ]}
        colleges={colleges}
        whyHeading="Why Study Commerce in Delhi?"
        whyPoints={[
          { title: "BFSI Industry Hub", description: "Delhi hosts Deutsche Bank, BNY Mellon, HSBC, Citi, and hundreds of NBFCs and insurance companies. BCom graduates with CA/CMA have direct placement pathways into these globally operating financial services firms." },
          { title: "CA Preparation Culture", description: "Delhi's commerce colleges have strong CA coaching ecosystems with ICAI study centers in Connaught Place and Rohini. Many BCom students simultaneously prepare for CA while completing their degree." },
          { title: "Affordable Government Colleges", description: "BMCC, Garware, and Hindu College charge ₹15,000-50,000/year for excellent BCom education. These government-aided colleges provide the same DU degree at a fraction of private college costs." },
          { title: "MCom & Research Pathway", description: "Top BCom students can pursue MCom at DU's Department of Commerce or apply for SET/NET to become college lecturers -- a stable, well-paying career path for academic-minded students." },
          { title: "BBA & MBA Bridge", description: "BCom provides an excellent foundation for MBA entrance exams (CAT, IPU CET). Many FMS Delhi and MDI Gurgaon students come from BCom + work experience backgrounds, leveraging their commerce foundation." },
          { title: "Government Job Opportunities", description: "BCom graduates are eligible for banking exams (IBPS PO/Clerk, SBI PO), SSC CGL, state revenue exams, and Delhi Public Service Commission (MPSC) -- all high-competition but stable career paths." },
        ]}
        admissionHeading="BCom Admission Process in Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Complete HSC Commerce (12th)", description: "BCom admission is based on HSC Commerce marks. Aim for 80%+ for top colleges. Subjects like Accounts and Economics are core to BCom curriculum -- strong 12th marks in these help in the first year." },
          { step: "2", title: "Apply on DU Online Portal Post-Results", description: "After HSC results (May-June 2026), register on DU's online admission portal. Fill in personal details, upload mark sheet, and select preferred colleges and BCom program variants in priority order." },
          { step: "3", title: "Check Merit Lists", description: "Colleges publish 1st, 2nd, and 3rd merit lists. BMCC first merit list typically requires 85-90% for BCom Banking. Check your rank and confirm admission before the deadline passes." },
          { step: "4", title: "Register for ICAI CA Foundation (Parallel)", description: "If pursuing CA alongside BCom, register for ICAI CA Foundation immediately after admission. The 4-month window before first CA exam allows preparation while settling into college." },
          { step: "5", title: "Complete Document Verification", description: "Report to college with: HSC marksheet, passing certificate, transfer certificate, caste/income certificate (if applicable), Aadhar, and passport photos. Pay fees and complete admission formalities." },
        ]}
        faqs={faqs}
        ctaHeading="Choose the Right Commerce College in Delhi"
        ctaSubtext="Get personalized advice on the best BCom college in Delhi based on your HSC scores, career goals (CA, MBA, BFSI), and budget. Free counselling from commerce education experts."
      relatedGuides={[
        { label: "Arts & Science colleges in Delhi", href: "/arts-colleges-delhi", icon: "📚" },
        { label: "Science colleges in Delhi", href: "/science-colleges-Delhi", icon: "🔬" },
        { label: "BCA colleges in Delhi", href: "/bca-colleges-delhi", icon: "💻" },
        { label: "BBA colleges in Delhi", href: "/bba-colleges-delhi", icon: "📈" },
        { label: "BSc IT colleges in Delhi", href: "/bsc-it-colleges-Delhi", icon: "🖥️" },
        { label: "Law colleges in Delhi", href: "/law-colleges-delhi", icon: "âš–ï¸" },
        { label: "Design colleges in Delhi", href: "/design-colleges-delhi", icon: "🎨" },
      ]}
      />
    </>
  )
}

