import type { Metadata } from "next"
import Script from "next/script"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Science colleges in Delhi 2026 | BSc, MSc Colleges | Fees & Admissions",
  description: "Top science colleges in Delhi for BSc and MSc 2026. Miranda House College, Hindu College, Amity University Delhi, Symbiosis -- compare fees, NAAC grades, courses, and career options.",
  path: "/science-colleges-delhi",
  keywords: ["science colleges Delhi", "bsc colleges Delhi 2026", "msc colleges Delhi", "best science College Delhi", "physics chemistry biology Delhi"],
})

export const revalidate = 300

const colleges = [
  { name: "Miranda House College (Autonomous)", location: "Connaught Place", naac: "A+", fees: "₹25K-60K/yr", placement: "Research & Govt", slug: "fergusson-college-delhi" },
  { name: "Hindu College of Science & Commerce", location: "Connaught Place", naac: "A+", fees: "₹20K-50K/yr", placement: "Government Aided", slug: "sp-college-delhi" },
  { name: "Kirori Mal College of Arts Science & Commerce", location: "Connaught Place", naac: "A", fees: "₹22K-55K/yr", placement: "Government Aided", slug: "modern-college-delhi" },
  { name: "Wadia College of Science", location: "Delhi", naac: "A", fees: "₹18K-40K/yr", placement: "Government", slug: "wadia-college-science-Delhi" },
  { name: "MIT College of Science - Amity University Delhi", location: "Rohini", naac: "A+", fees: "₹60K-1.2L/yr", placement: "₹4.5 LPA avg", slug: "Amity University Delhi-mit-world-peace-university" },
  { name: "Symbiosis College of Arts & Commerce", location: "Senapati Bapat Road", naac: "A+", fees: "₹45K-80K/yr", placement: "₹5 LPA avg", slug: "symbiosis-college-arts-commerce-Delhi" },
  { name: "Marathwada Mitra Mandal College of Science", location: "South Delhi", naac: "A", fees: "₹20K-50K/yr", placement: "Govt. Aided", slug: "mmmcs-Delhi" },
  { name: "Sir Parashurambhau College (Hindu College)", location: "Connaught Place", naac: "A+", fees: "₹20K-48K/yr", placement: "Research", slug: "sir-parashurambhau-college-delhi" },
]

const faqs = [
  { q: "Which is the best science college in Delhi for BSc?", a: "Miranda House College (NAAC A+, est. 1885) is widely considered the best science college in Delhi for BSc programs in Physics, Chemistry, Mathematics, and Biology. Its government status keeps fees under ₹60,000/year with excellent faculty." },
  { q: "What BSc programs are available in Delhi science colleges?", a: "Delhi science colleges offer BSc in Physics, Chemistry, Mathematics, Biology, Computer Science, Statistics, Microbiology, Biotechnology, Environmental Science, Electronics, and Information Technology. Fergusson and Hindu College have the widest program range." },
  { q: "What is the career scope after BSc from Delhi colleges?", a: "BSc graduates from Delhi can pursue: MSc/MTech (research pathway), MBA (management pivot), B.Ed. (teaching career), government competitive exams (MPSC, UPSC), pharma industry (quality control, R&D), IT industry (BSc CS/IT), and higher studies abroad." },
  { q: "What is the admission process for BSc in Delhi?", a: "BSc admissions in Delhi are based on HSC (12th) merit in Science stream. Apply on the DU online portal after HSC results. Merit cutoffs for top colleges like Fergusson are 85-95% in PCB or PCM. Some autonomous colleges conduct their own entrance tests." },
  { q: "Are there any residential science colleges in Delhi?", a: "Miranda House College has hostel facilities. Most government-aided science colleges in Delhi have hostel facilities for outstation students at ₹30,000-60,000/year. Amity University Delhi's science programs have full campus residential facilities." },
]

export default function ScienceCollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Science colleges in Delhi", url: "/science-colleges-Delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Science colleges in Delhi 2026",
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
        breadcrumb={[{ label: "Science colleges in Delhi", href: "/science-colleges-Delhi" }]}
        h1="Science colleges in Delhi 2026"
        subtitle="Find the best BSc and MSc science colleges in Delhi. Compare fees, NAAC grades, research facilities, and career pathways for Physics, Chemistry, Biology, and more."
        heroStats={[
          { value: "30+", label: "Science Colleges" },
          { value: "₹18K/yr", label: "Min Fees (Govt)" },
          { value: "NAAC A+", label: "Top Rating" },
          { value: "HSC Merit", label: "Admission Basis" },
        ]}
        introHeading="Science colleges in Delhi: Academic Excellence Since 1885"
        introParagraphs={[
          "Delhi has one of India's most distinguished science education traditions, anchored by Miranda House College (established 1885) and Hindu College (established 1916) -- both NAAC A+ institutions that have produced distinguished scientists, Nobel laureate researchers, and senior government officials. These institutions continue to offer world-class science education at government-aided fees.",
          "BSc programs in Delhi cover the full spectrum of natural and applied sciences: Physics, Chemistry, Mathematics, Biology, Computer Science, Statistics, Microbiology, Biotechnology, and Environmental Science. Delhi's proximity to pharmaceutical companies (Sun Pharma, Serum Institute, Emcure), research institutes (NCL, IISER Delhi, NCCS), and IT companies creates excellent pathways for science graduates.",
          "The science education landscape in Delhi has been enhanced by modern institutions like Amity University Delhi's science programs and Symbiosis's interdisciplinary science courses. Students who want infrastructure and placement support beyond traditional government college offerings can choose these institutions at slightly higher fees.",
        ]}
        colleges={colleges}
        whyHeading="Why Study Science in Delhi?"
        whyPoints={[
          { title: "World-Class Research Institutes Nearby", description: "Delhi hosts IISER (Institute of Science Education and Research), NCL (National Chemical Laboratory), NCCS, CSIR-NCL, and TIFR -- offering BSc students internship and project work opportunities at national research centers." },
          { title: "Pharmaceutical Industry Access", description: "Delhi's pharma belt (Rohini, Hauz Khas) hosts Sun Pharma, Serum Institute, Emcure, and 500+ pharma companies -- creating direct career pathways for Chemistry, Microbiology, and Biotechnology graduates." },
          { title: "IISER Delhi Pathway", description: "High-performing BSc students from Delhi colleges can qualify for IISER Delhi integrated PhD programs, one of India's most prestigious science research pathways, through IISER aptitude test (IAT)." },
          { title: "Affordable Quality Education", description: "Government science colleges in Delhi charge ₹18,000-60,000/year for undergraduate programs with NAAC A+ quality -- making quality science education accessible to all income groups." },
          { title: "GRE & Abroad Opportunities", description: "Science graduates from Delhi colleges routinely pursue MS/PhD programs in USA, Europe, and Australia. The strong research culture at Fergusson and Hindu College prepares students for competitive GRE scores." },
          { title: "IT & Data Science Crossover", description: "BSc Computer Science and Statistics graduates from Delhi colleges are increasingly hired by IT companies (Infosys, TCS, Wipro) and data analytics firms at ₹4-8 LPA -- comparable to engineering graduates." },
        ]}
        admissionHeading="BSc Admission Process in Delhi Science Colleges 2026"
        admissionSteps={[
          { step: "1", title: "Clear HSC (12th) Science with Good Marks", description: "BSc admissions are based on HSC Science stream marks. Aim for 85%+ for top colleges like Fergusson. PCM/PCB stream with Mathematics for BSc CS/Statistics. Biology for BSc Microbiology/Biotechnology." },
          { step: "2", title: "Track HSC Results (May-June 2026)", description: "HSC results are published by Delhi Board in May-June 2026. Calculate your percentage in best-of-five subjects. This percentage determines your merit rank for BSc admissions." },
          { step: "3", title: "Apply on DU Online Admission Portal", description: "DU opens online admission portal after HSC results. Register, fill form, upload mark sheet, and select preferred colleges and courses in order. Application is free for most government colleges." },
          { step: "4", title: "Check Merit List & Confirm Admission", description: "Colleges publish merit lists (1st, 2nd, 3rd) on their websites. If selected, confirm admission by paying fees within the deadline (usually 3-5 days). Bring original documents for verification." },
          { step: "5", title: "Explore MSc Options Early", description: "Plan your MSc pathway from BSc year 1. Research IIT-JAM, IISER IAT, GATE (for MTech), and state CET for MSc admissions. Maintaining 70%+ in BSc opens multiple prestigious PG pathways." },
        ]}
        faqs={faqs}
        ctaHeading="Find the Best Science College in Delhi for Your Interests"
        ctaSubtext="Whether you want research, pharma careers, or IT crossover -- our counsellors will help you find the right science college in Delhi matching your HSC scores and career goals."
      relatedGuides={[
        { label: "Arts & Science colleges in Delhi", href: "/arts-colleges-delhi", icon: "📚" },
        { label: "Commerce colleges in Delhi", href: "/commerce-colleges-Delhi", icon: "📊" },
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

