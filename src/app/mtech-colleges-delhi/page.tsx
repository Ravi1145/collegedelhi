import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Best M.Tech Colleges in Delhi 2026 | Top MTech Colleges Delhi",
  description: "Best M.Tech colleges in Delhi 2026. IIT Delhi, DTU, NSUT, IIIT Delhi — compare GATE cutoffs, fees, research output, and placements.",
  path: "/mtech-colleges-delhi",
  keywords: ["mtech colleges Delhi", "best MTech college Delhi 2026", "GATE cutoff Delhi colleges", "M.Tech admission Delhi 2026", "MTech fees Delhi colleges"],
})

export const revalidate = 300

const colleges = [
  { name: "IIT Delhi", location: "Hauz Khas, Delhi", naac: "Institute of Eminence", fees: "₹17K/yr + stipend", placement: "₹22 LPA avg", slug: "iit-delhi" },
  { name: "DTU (Delhi Technological University)", location: "Rohini, Delhi", naac: "A+", fees: "₹1.3L/yr", placement: "₹12 LPA avg", slug: "delhi-technological-university-dtu" },
  { name: "NSUT (Netaji Subhas University of Technology)", location: "Dwarka, Delhi", naac: "A", fees: "₹1.2L/yr", placement: "₹10 LPA avg", slug: "nsut-netaji-subhas-university-of-technology" },
  { name: "IIIT Delhi", location: "Okhla, Delhi", naac: "A+", fees: "₹1.8L/yr", placement: "₹14 LPA avg", slug: "iiit-delhi" },
  { name: "IGDTUW — M.Tech", location: "Kashmere Gate, Delhi", naac: "A+", fees: "₹1.1L/yr", placement: "₹9 LPA avg", slug: "igdtuw-indira-gandhi-delhi-technical-university-women" },
  { name: "NIT Delhi", location: "Narela, Delhi", naac: "A", fees: "₹1.0L/yr", placement: "₹10 LPA avg", slug: "nit-delhi" },
  { name: "Jamia Millia Islamia — M.Tech", location: "Okhla, Delhi", naac: "A+", fees: "₹60K/yr", placement: "₹8 LPA avg", slug: "jamia-millia-islamia-delhi" },
  { name: "MAIT — M.Tech (IPU Affiliated)", location: "Rohini, Delhi", naac: "A+", fees: "₹90K/yr", placement: "₹7 LPA avg", slug: "mait-maharaja-agrasen-institute-technology-delhi" },
]

const faqs = [
  { q: "Which is the best M.Tech college in Delhi?", a: "IIT Delhi is the best M.Tech college in Delhi and one of India's top 3. GATE cutoff for IIT Delhi M.Tech (CS) is 750+ (out of 1000). DTU and NSUT are the best non-IIT M.Tech options with GATE cutoffs of 650+ for CS. IIIT Delhi is best for M.Tech in AI/ML and CS research." },
  { q: "What is the GATE cutoff for DTU M.Tech?", a: "DTU M.Tech GATE cutoff 2026: CS specializations 650+ GATE score, ECE 580+, Mechanical 550+, Civil 520+. For NSUT M.Tech: CS 620+, ECE 560+. NIT Delhi M.Tech: CS 600+. These cutoffs are for general category — OBC/SC/ST cutoffs are typically 15-20% lower." },
  { q: "What is the fee for M.Tech at IIT Delhi?", a: "IIT Delhi M.Tech fees: ₹17,000/semester tuition + stipend of ₹12,400/month for full-time sponsored students. Self-sponsored M.Tech at IIT Delhi costs ₹25,000/semester. DTU M.Tech costs ₹1.3L/year. NSUT M.Tech costs ₹1.2L/year. JMI M.Tech is most affordable at ₹60,000/year." },
  { q: "Can I get M.Tech in Delhi without GATE?", a: "Yes — some M.Tech programs in Delhi accept students without GATE: IGDTUW accepts CUET-PG scores, some private colleges in Delhi-NCR accept university entrance tests. DTU and NSUT require GATE for most seats but have 15% sponsored seats for working professionals from industry. Jamia Millia Islamia accepts both GATE and JMI-entrance for M.Tech admission." },
  { q: "What are the job opportunities after M.Tech from Delhi?", a: "M.Tech from IIT Delhi: avg ₹22 LPA, top packages ₹1.2 Cr from Google/Microsoft/Adobe. DTU M.Tech: avg ₹12 LPA, recruited by TCS, Infosys, Intel, Samsung R&D, DRDO. M.Tech graduates qualify for PSU technical officer roles (DRDO, ISRO, BHEL, NTPC) with stipend ₹60K+/month. Research roles in IITs, NITs post-M.Tech with PhD stipend ₹37,000/month." },
]

export default function MTechCollegesDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "M.Tech Colleges Delhi", url: "/mtech-colleges-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best M.Tech Colleges in Delhi 2026",
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
        breadcrumb={[{ label: "M.Tech Colleges Delhi", href: "/mtech-colleges-delhi" }]}
        h1="Best M.Tech Colleges in Delhi 2026 – GATE Cutoffs, Fees & Placements"
        subtitle="Top 15 M.Tech colleges in Delhi with GATE cutoffs, fees, research facilities, and placement records. IIT Delhi, DTU, NSUT, IIIT Delhi complete 2026 guide."
        heroStats={[
          { value: "15+", label: "M.Tech Colleges" },
          { value: "GATE", label: "Admission Mode" },
          { value: "₹22 LPA", label: "IIT Delhi Avg CTC" },
          { value: "₹60K–1.8L", label: "Annual Fees" },
        ]}
        introHeading="M.Tech Colleges in Delhi: IIT Delhi to DTU Guide"
        introParagraphs={[
          "Delhi is home to India's most prestigious M.Tech institutions: IIT Delhi (Institute of Eminence, NIRF #2 engineering), IIIT Delhi (top AI/ML research), DTU (NIRF top 50), NSUT, and NIT Delhi. The concentration of research labs, DRDO facilities, PSU offices, and tech MNCs in Delhi-NCR makes it India's best location for M.Tech — internships and pre-placement offers are abundant.",
          "M.Tech admission in Delhi 2026 is primarily through GATE (Graduate Aptitude Test in Engineering) conducted by IITs. IIT Delhi M.Tech requires GATE 750+ for CS. DTU and NSUT require GATE 620-650+ for CS. IIIT Delhi uses both GATE and its own research aptitude test for M.Tech (CS) in AI/ML specializations.",
          "IIT Delhi M.Tech students receive a monthly stipend of ₹12,400 — effectively free education plus income. DTU and NSUT M.Tech fees are ₹1.2–1.3L/year, comparable to good B.Tech colleges. Jamia Millia Islamia offers the most affordable M.Tech in Delhi at ₹60,000/year with NAAC A+ accreditation.",
        ]}
        colleges={colleges}
        whyHeading="Why M.Tech from Delhi?"
        whyPoints={[
          { title: "IIT Delhi — India's Top M.Tech", description: "IIT Delhi M.Tech (Institute of Eminence) offers stipend-based education. GATE 750+ gets you India's #2 engineering research institution. Average placement ₹22 LPA. Access to 30+ research centers including AI, photonics, and materials science." },
          { title: "PSU & DRDO Access", description: "Delhi has DRDO HQ, BEL, NTPC HQ, and BHEL plants — M.Tech graduates from DTU and NSUT get direct PSU recruitment through GATE scores. DRDO offers M.Tech + PhD fellowships to top GATE scorers." },
          { title: "Tech MNC Proximity", description: "Google, Microsoft, Adobe, and Samsung R&D have major Delhi-NCR offices. DTU and IIT Delhi M.Tech students access these campuses for live projects and pre-placement internships during second semester." },
          { title: "Affordable Fee Structure", description: "IIT Delhi M.Tech is stipend-based (negative cost). DTU/NSUT charge ₹1.2–1.3L/yr. JMI charges ₹60K/yr. Compare with private M.Tech colleges at ₹2–4L/yr for inferior research infrastructure." },
        ]}
        faqs={faqs}
      />
    </>
  )
}
