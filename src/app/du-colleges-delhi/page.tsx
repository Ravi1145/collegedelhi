import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "DU Colleges List 2026 | Delhi University Colleges – Fees, Cutoffs & Courses",
  description: "Complete list of Delhi University (DU) colleges 2026. Miranda House, SRCC, LSR, Hindu, Hansraj — compare CUET cutoffs, fees, placements, NAAC grades. 90+ DU colleges ranked.",
  path: "/du-colleges-delhi",
  keywords: ["DU colleges", "Delhi University colleges list 2026", "best DU college", "CUET cutoff DU 2026", "Delhi University admission 2026"],
})

export const revalidate = 300

const colleges = [
  { name: "Miranda House, Delhi University", location: "North Campus, Delhi", naac: "A++", fees: "₹18K/yr", placement: "₹6 LPA avg", slug: "miranda-house-delhi-university" },
  { name: "Lady Shri Ram College (LSR)", location: "Lajpat Nagar, Delhi", naac: "A++", fees: "₹20K/yr", placement: "₹7 LPA avg", slug: "lsr-lady-shri-ram-college-delhi" },
  { name: "SRCC (Shri Ram College of Commerce)", location: "North Campus, Delhi", naac: "A++", fees: "₹23K/yr", placement: "₹12 LPA avg", slug: "srcc-sri-ram-college-commerce-du" },
  { name: "Hindu College, Delhi University", location: "North Campus, Delhi", naac: "A+", fees: "₹16K/yr", placement: "₹5.5 LPA avg", slug: "hindu-college-delhi-university" },
  { name: "Hansraj College, Delhi University", location: "North Campus, Delhi", naac: "A+", fees: "₹17K/yr", placement: "₹5 LPA avg", slug: "hansraj-college-delhi-university" },
  { name: "St. Stephen's College, Delhi", location: "North Campus, Delhi", naac: "A", fees: "₹15K/yr", placement: "₹6 LPA avg", slug: "st-stephens-college-delhi-university" },
  { name: "Kirori Mal College, Delhi University", location: "North Campus, Delhi", naac: "A+", fees: "₹14K/yr", placement: "₹5 LPA avg", slug: "kirori-mal-college-delhi-university" },
  { name: "Daulat Ram College, Delhi University", location: "North Campus, Delhi", naac: "A+", fees: "₹15K/yr", placement: "₹5 LPA avg", slug: "daulat-ram-college-delhi-university" },
]

const faqs = [
  { q: "How many colleges are there in Delhi University?", a: "Delhi University (DU) has 91 affiliated colleges across North Campus, South Campus, and East Campus. The most prestigious include Miranda House (NIRF #1 college), SRCC (top commerce college), LSR, Hindu College, and Hansraj College. DU admits over 70,000 students annually through CUET." },
  { q: "Which is the best college in Delhi University?", a: "Miranda House is the best college in Delhi University — ranked #1 in India by NIRF for 5 consecutive years, NAAC A++ grade, best for BA Honours programs. For commerce, SRCC is the best DU college with average placements of ₹12 LPA. For science, Hindu College and Hansraj College are top choices." },
  { q: "What is the CUET cutoff for top DU colleges 2026?", a: "CUET cutoffs for top DU colleges 2026: Miranda House (BA English) 95%+, SRCC (B.Com Hons) 98%+, LSR (Economics Hons) 96%+, Hindu College (BA History) 92%+, Hansraj College (BSc Physics) 90%+. Cutoffs vary by program — science streams require separate CUET Science scores." },
  { q: "What is the fee for Delhi University colleges?", a: "DU college fees are regulated: most DU colleges charge ₹10,000–₹25,000 per year for UG programs. SRCC charges ₹23,000/yr, Miranda House ₹18,000/yr, LSR ₹20,000/yr, Hindu College ₹16,000/yr. Hostel fees extra: ₹50,000–₹80,000/yr. Total 3-year B.Com/BA cost is ₹60K–₹1.5L (government-regulated)." },
  { q: "How to get admission in Delhi University 2026?", a: "DU admission 2026 is through CUET (Common University Entrance Test) conducted by NTA. Steps: 1) Register for CUET at cuet.samarth.ac.in by March 2026, 2) Appear for CUET in May 2026, 3) Fill DU preferences in CSAS portal by June 2026, 4) Multiple allocation rounds July-August 2026. No Class 12 marks used — only CUET score matters." },
]

export default function DUCollegesDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "DU Colleges Delhi", url: "/du-colleges-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Delhi University Colleges List 2026",
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
        breadcrumb={[{ label: "DU Colleges Delhi", href: "/du-colleges-delhi" }]}
        h1="Delhi University Colleges List 2026 – Complete DU Colleges Guide"
        subtitle="Complete list of all 91 Delhi University colleges with CUET cutoffs, fees, NAAC grades, placements, and admission process for 2026."
        heroStats={[
          { value: "91", label: "DU Colleges" },
          { value: "70K+", label: "Seats/Year" },
          { value: "CUET", label: "Admission Mode" },
          { value: "₹10K–25K", label: "Annual Fees" },
        ]}
        introHeading="Delhi University Colleges: Complete List & Rankings 2026"
        introParagraphs={[
          "Delhi University (DU) is India's most sought-after central university with 91 affiliated colleges, 300,000+ students, and 750+ programs across arts, commerce, science, law, and management. DU colleges dominate NIRF rankings — Miranda House has been ranked #1 college in India for 5 consecutive years. SRCC is India's top commerce college. LSR and Hindu College are among India's elite liberal arts institutions.",
          "DU admission 2026 is entirely through CUET (Common University Entrance Test) — Class 12 marks no longer determine college allocation. Students must appear for CUET in May 2026 and fill preferences in the CSAS (Common Seat Allocation System) portal. Understanding CUET subject combinations is critical: Commerce stream needs CUET English + any language + any domain subject. Science stream needs CUET Physics/Chemistry/Maths or Biology.",
          "DU college fees are among India's lowest for quality education — government-regulated at ₹10,000–₹25,000 per year. Compare this to private universities charging ₹1–4L per year for similar programs. The ROI from a DU degree (Miranda House, SRCC, LSR) is exceptional given the brand recognition, alumni network, and placement outcomes.",
        ]}
        colleges={colleges}
        whyHeading="Why Choose a Delhi University College?"
        whyPoints={[
          { title: "NIRF #1 College in India", description: "Miranda House (DU) has been NIRF's #1 college for 5 years. 4 of India's top 10 colleges are DU colleges — Miranda House, LSR, Hindu College, and SRCC." },
          { title: "Lowest Fees, Highest ROI", description: "DU college fees ₹10,000–₹25,000/yr (government regulated). Graduates from SRCC, Miranda House, and LSR get placed at Goldman Sachs, McKinsey, Google, and top MNCs. Unbeatable ROI." },
          { title: "CUET Admission — Merit Based", description: "DU admission is purely through CUET score — no Class 12 board bias. Students from CBSE, state boards, and ICSE compete equally. One exam, 91 college options." },
          { title: "Legacy Alumni Network", description: "DU alumni include Prime Ministers, Supreme Court judges, Nobel laureates, Bollywood stars, and Fortune 500 CEOs. The alumni network opens doors across India and globally." },
        ]}
        faqs={faqs}
      />
    </>
  )
}
