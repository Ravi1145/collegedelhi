import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "IP University Colleges List 2026 | Best GGSIPU Affiliated Colleges Delhi",
  description: "Complete list of IP University (GGSIPU) affiliated colleges in Delhi 2026. Compare IPU CET cutoffs, fees, placements for Engineering, MBA, Law, Medical colleges. 150+ IPU colleges ranked.",
  path: "/ipu-colleges-delhi",
  keywords: ["IP University colleges", "GGSIPU affiliated colleges 2026", "IPU CET colleges Delhi", "best IP university college Delhi", "IP university admission 2026"],
})

export const revalidate = 300

const colleges = [
  { name: "DTU (Delhi Technological University)", location: "Rohini, Delhi", naac: "A+", fees: "₹1.6L/yr", placement: "₹12 LPA avg", slug: "dtu-delhi" },
  { name: "NSUT (Netaji Subhas University of Technology)", location: "Dwarka, Delhi", naac: "A", fees: "₹1.5L/yr", placement: "₹10 LPA avg", slug: "nsut-delhi" },
  { name: "IGDTUW (Indira Gandhi Delhi Technical University for Women)", location: "Kashmere Gate, Delhi", naac: "A+", fees: "₹1.4L/yr", placement: "₹9 LPA avg", slug: "igdtuw-delhi" },
  { name: "Bharati Vidyapeeth College of Engineering", location: "Paschim Vihar, Delhi", naac: "A", fees: "₹1.3L/yr", placement: "₹7 LPA avg", slug: "bharati-vidyapeeth-college-engineering-delhi" },
  { name: "VIPS (Vivekananda Institute of Professional Studies)", location: "Pitampura, Delhi", naac: "A+", fees: "₹1.2L/yr", placement: "₹6.5 LPA avg", slug: "vips-vivekananda-institute-professional-studies-delhi" },
  { name: "Maharaja Agrasen Institute of Technology", location: "Rohini, Delhi", naac: "A+", fees: "₹1.4L/yr", placement: "₹7 LPA avg", slug: "mait-maharaja-agrasen-institute-technology-delhi" },
  { name: "MSIT (Maharaja Surajmal Institute of Technology)", location: "Janakpuri, Delhi", naac: "A", fees: "₹1.3L/yr", placement: "₹7 LPA avg", slug: "msit-maharaja-surajmal-institute-technology-delhi" },
  { name: "BPIT (Bhagwan Parshuram Institute of Technology)", location: "Rohini, Delhi", naac: "A", fees: "₹1.2L/yr", placement: "₹6 LPA avg", slug: "bpit-bhagwan-parshuram-institute-technology-delhi" },
]

const faqs = [
  { q: "How many colleges are affiliated to IP University (GGSIPU)?", a: "IP University (Guru Gobind Singh Indraprastha University) has 150+ affiliated colleges in Delhi NCR offering Engineering, MBA, Law, Medical, Nursing, Architecture, and other programs. Major affiliates include DTU, NSUT, IGDTUW, and 100+ private engineering and management institutes." },
  { q: "What is IPU CET cutoff for top colleges 2026?", a: "IPU CET 2026 cutoffs for top engineering colleges: DTU CS — 99%ile (JEE Main), NSUT CS — 98%ile, IGDTUW CS — 95%ile. For MBA colleges: top IPU MBA colleges require IPU CET 200+ score (out of 400). For law: IPU CET Law 160+ for top colleges." },
  { q: "Which is the best IP University college for engineering?", a: "DTU (Delhi Technological University) is the best IP University affiliated engineering college — NIRF top 50, NAAC A+, avg placement ₹12 LPA, highest package ₹1.2 Cr. NSUT is #2 with ₹10 LPA avg. IGDTUW is best women's engineering college in Delhi." },
  { q: "What is the fee for IP University colleges?", a: "IP University college fees 2026: Government colleges (DTU, NSUT, IGDTUW) charge ₹1.4L–₹1.8L/yr. Private affiliated colleges charge ₹1.0L–₹1.8L/yr for engineering. MBA colleges charge ₹80K–₹1.5L/yr. Law colleges charge ₹60K–₹1.2L/yr." },
  { q: "How to apply for IP University admission 2026?", a: "IP University admission 2026: Register at ipu.admissions.nic.in. For engineering: JEE Main score used directly. For MBA: IPU CET MBA (May 2026). For law: IPU CET Law (May 2026). For other programs: IPU CET subject-specific exams. Counselling is centralized through IPU portal after results." },
]

export default function IPUCollegesDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "IP University Colleges Delhi", url: "/ipu-colleges-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "IP University (GGSIPU) Affiliated Colleges List 2026",
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
        breadcrumb={[{ label: "IP University Colleges Delhi", href: "/ipu-colleges-delhi" }]}
        h1="IP University (GGSIPU) Colleges List 2026 – Complete Guide"
        subtitle="All 150+ IP University affiliated colleges in Delhi with IPU CET cutoffs, fees, placements, and admission process for Engineering, MBA, Law & Medical 2026."
        heroStats={[
          { value: "150+", label: "IPU Colleges" },
          { value: "40K+", label: "Seats/Year" },
          { value: "IPU CET", label: "Entrance Exam" },
          { value: "₹80K–1.8L", label: "Annual Fees" },
        ]}
        introHeading="IP University Affiliated Colleges: Complete List 2026"
        introParagraphs={[
          "Guru Gobind Singh Indraprastha University (GGSIPU / IP University) is Delhi's largest affiliating university with 150+ colleges offering 40,000+ seats across Engineering, MBA, Law, Medical, Nursing, Architecture, Mass Communication, and Education programs. The university's engineering colleges are especially strong — DTU and NSUT consistently rank in NIRF's top 50 engineering colleges nationally.",
          "IP University admission 2026 uses two routes: JEE Main scores directly for engineering colleges (no separate IPU CET for B.Tech), and IPU CET for MBA, Law, BCA, BBA, and other programs. The centralized counselling system ensures transparency — seats are allocated strictly by merit and preference order.",
          "Key advantage of IP University colleges over DU colleges: practical industry exposure. IPU engineering colleges like DTU, NSUT, MAIT, and VIPS have strong industry tie-ups with Microsoft, Google, Infosys, and Wipro. MBA colleges have corporate mentorship programs. Law colleges partner with Delhi High Court for moot courts.",
        ]}
        colleges={colleges}
        whyHeading="Why Choose an IP University College?"
        whyPoints={[
          { title: "Government University — Low Fees", description: "IP University is a Delhi Government university. Affiliated colleges charge regulated fees — ₹1.4L–1.8L/yr for engineering vs ₹3–5L/yr at private universities. Same quality, 60% cost saving." },
          { title: "Strong Placement Record", description: "DTU (IPU flagship) averages ₹12 LPA with top packages at ₹1.2 Cr from Google, Microsoft, Goldman Sachs. NSUT averages ₹10 LPA. Even mid-tier IPU colleges average ₹5–7 LPA." },
          { title: "JEE Main Direct Admission", description: "No separate IPU CET for B.Tech — JEE Main score used directly. Less exam stress. Students with JEE Main 95+ percentile get DTU CS. 85+ percentile gets NSUT CS." },
          { title: "Delhi Location Advantage", description: "All IPU colleges are in Delhi — students access Delhi's corporate ecosystem, internships in Gurgaon/Noida tech parks, and Delhi High Court for law students, without relocating." },
        ]}
        faqs={faqs}
      />
    </>
  )
}
