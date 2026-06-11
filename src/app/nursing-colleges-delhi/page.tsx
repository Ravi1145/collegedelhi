import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Best Nursing Colleges in Delhi 2026 | Top BSc Nursing Delhi",
  description: "Best nursing colleges in Delhi 2026. AIIMS Delhi, MAMC, RML, GTB Hospital — compare BSc Nursing fees, NEET cutoffs, and placement outcomes.",
  path: "/nursing-colleges-delhi",
  keywords: ["nursing colleges Delhi", "BSc nursing colleges Delhi 2026", "NEET nursing cutoff Delhi", "best nursing college Delhi", "GNM nursing Delhi"],
})

export const revalidate = 300

const colleges = [
  { name: "AIIMS Delhi — College of Nursing", location: "Ansari Nagar, Delhi", naac: "A++", fees: "₹6K/yr + stipend", placement: "₹5 LPA avg", slug: "aiims-delhi" },
  { name: "MAMC (Maulana Azad Medical College) — Nursing", location: "Bahadur Shah Zafar Marg, Delhi", naac: "A+", fees: "₹15K/yr", placement: "₹4.5 LPA avg", slug: "mamc-maulana-azad-medical-college-delhi" },
  { name: "RML Hospital Institute of Nursing", location: "Connaught Place, Delhi", naac: "A", fees: "₹20K/yr", placement: "₹4.5 LPA avg", slug: "rml-hospital-nursing-delhi" },
  { name: "GTB Hospital Nursing College", location: "Shahdara, Delhi", naac: "A", fees: "₹18K/yr", placement: "₹4 LPA avg", slug: "gtb-hospital-nursing-college-delhi" },
  { name: "Safdarjung Hospital Nursing School", location: "Ring Road, Delhi", naac: "A", fees: "₹12K/yr", placement: "₹4.5 LPA avg", slug: "safdarjung-hospital-nursing-school-delhi" },
  { name: "VIMS (Venkateshwara Institute of Medical Sciences)", location: "Gajraula / NCR", naac: "B+", fees: "₹80K/yr", placement: "₹3.5 LPA avg", slug: "vims-venkateshwara-institute-medical-sciences" },
  { name: "IIMT College of Nursing, Greater Noida", location: "Greater Noida, NCR", naac: "B+", fees: "₹75K/yr", placement: "₹3.5 LPA avg", slug: "iimt-college-nursing-greater-noida" },
  { name: "AHRCC (Army Hospital Research and Referral)", location: "Dhaula Kuan, Delhi", naac: "A", fees: "₹25K/yr", placement: "₹5 LPA avg", slug: "army-hospital-nursing-college-delhi" },
]

const faqs = [
  { q: "Which is the best nursing college in Delhi?", a: "AIIMS Delhi College of Nursing is the best nursing college in Delhi and India — NAAC A++, fees ₹6,000/year + monthly stipend of ₹1,500. NEET cutoff for AIIMS nursing is extremely high (typically top 1000 NEET ranks for General category). MAMC and RML Hospital nursing schools are the next best government options with NAAC A+ and affordable fees." },
  { q: "What is NEET cutoff for BSc Nursing in Delhi government colleges?", a: "NEET 2026 cutoff for BSc Nursing in Delhi government colleges: AIIMS Delhi Nursing — top 1,000 NEET ranks (General), MAMC Nursing — 450+ marks (General), RML Hospital Nursing — 430+ marks. Private nursing colleges in Delhi-NCR accept lower NEET scores (300-380 marks). Cutoffs vary yearly based on number of applicants." },
  { q: "What is the fee for BSc Nursing in Delhi?", a: "BSc Nursing fees in Delhi 2026: AIIMS Delhi ₹6,000/yr (+ stipend ₹1,500/mo), MAMC ₹15,000/yr, RML Hospital ₹20,000/yr, Government hospital-attached nursing schools ₹12,000–₹25,000/yr. Private nursing colleges in Delhi-NCR charge ₹60,000–₹1.5L/year depending on facilities and infrastructure." },
  { q: "Is BSc Nursing from Delhi good for abroad job?", a: "Yes — BSc Nursing from AIIMS Delhi, MAMC, and government hospital schools is highly valued for abroad jobs. UK, Canada, Australia, and Germany actively recruit Indian nurses. AIIMS Nursing graduates get direct offers from NHS UK (salary ₹4–6L/month). IELTS 6.5+ required for UK registration, NCLEX for USA. Delhi government nursing graduates have 60%+ abroad placement rate." },
  { q: "What are the career options after BSc Nursing from Delhi?", a: "Career options after BSc Nursing from Delhi: Staff Nurse in AIIMS/MAMC/Central Government hospitals (pay scale ₹44,900–₹1.42L/month), Private hospital nursing roles (Fortis, Max, Apollo — ₹25,000–₹50,000/month), Military nursing service (Army/Navy/Air Force), Abroad placements (UK NHS ₹4L+/month, Canada ₹5L+/month), M.Sc Nursing and teaching, and Community health nurse roles under NHPS." },
]

export default function NursingCollegesDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Nursing Colleges Delhi", url: "/nursing-colleges-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Nursing Colleges in Delhi 2026",
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
        breadcrumb={[{ label: "Nursing Colleges Delhi", href: "/nursing-colleges-delhi" }]}
        h1="Best Nursing Colleges in Delhi 2026 – BSc Nursing Complete Guide"
        subtitle="Top 15 nursing colleges in Delhi with NEET cutoffs, fees, clinical training facilities, and abroad placement records. AIIMS, MAMC, RML Hospital — complete 2026 guide."
        heroStats={[
          { value: "15+", label: "Nursing Colleges" },
          { value: "NEET", label: "Admission Mode" },
          { value: "₹6K/yr", label: "AIIMS Fees" },
          { value: "60%+", label: "Abroad Placements" },
        ]}
        introHeading="Nursing Colleges in Delhi: AIIMS to Private Hospitals"
        introParagraphs={[
          "Delhi is India's medical education capital with AIIMS (India's #1 hospital), MAMC (Asia's largest hospital), RML Hospital, Safdarjung Hospital, and GTB Hospital — all offering BSc Nursing programs. AIIMS Delhi Nursing is India's most prestigious nursing program at ₹6,000/year with a monthly stipend. Government hospital-attached nursing schools in Delhi provide unmatched clinical exposure with thousands of patient cases daily.",
          "BSc Nursing admission in Delhi 2026 is through NEET scores. AIIMS Delhi Nursing requires top 1,000 NEET ranks nationally. MAMC and RML require 430+ NEET marks. Delhi government nursing colleges follow a centralized counselling process through DGHS Delhi. Private nursing colleges in Delhi-NCR accept NEET scores 300+ with a more accessible admission process.",
          "Career outcomes from Delhi nursing colleges are exceptional for abroad placements. AIIMS Nursing graduates have near-100% placement, with 60%+ going to UK NHS, Canada, or Australia. Delhi's nursing schools are INC (Indian Nursing Council) approved and recognized by UK NMC, USA NCLEX, and Canadian nursing bodies — critical for international registration.",
        ]}
        colleges={colleges}
        whyHeading="Why Study Nursing in Delhi?"
        whyPoints={[
          { title: "AIIMS Delhi — World-Class Clinical Training", description: "AIIMS Delhi is a 2,478-bed hospital with 15,000+ patient admissions/year. Nursing students get clinical exposure to rare cases seen nowhere else in India. AIIMS Nursing certificate is recognized by UK NMC, USA NCLEX, and Canadian nursing boards for overseas registration." },
          { title: "Government Jobs — Secure Career", description: "Delhi nursing graduates qualify for Central Government Staff Nurse roles (AIIMS, ESIC, Railway, Army hospitals) with pay scale ₹44,900–₹1.42L/month plus house rent allowance, medical benefits, and pension. Job security unmatched in private sector." },
          { title: "Best Abroad Placement Gateway", description: "UK NHS actively recruits from AIIMS, MAMC, and Delhi government nursing schools. Average NHS UK salary ₹4–6L/month. Canada and Australia nursing salary ₹5–8L/month. Delhi nursing graduates have highest abroad placement rates in India." },
          { title: "Lowest Fees, Best Training", description: "AIIMS Nursing ₹6,000/yr (plus stipend — effectively earning while studying). MAMC/RML ₹12,000–₹20,000/yr. Clinical training quality at these government hospitals exceeds ₹1L+/yr private colleges with corporate hospital ties." },
        ]}
        faqs={faqs}
      />
    </>
  )
}
