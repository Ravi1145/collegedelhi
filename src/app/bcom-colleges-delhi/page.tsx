import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Best B.Com Colleges in Delhi 2026",
  description: "Complete list of best B.Com colleges in Delhi 2026. SRCC, LSR, Hansraj, Shri Ram, Kamala Nehru — compare CUET cutoffs, fees, CA placements",
  path: "/bcom-colleges-delhi",
  keywords: ["bcom colleges Delhi", "best commerce colleges Delhi 2026", "BCom admission Delhi 2026", "CUET commerce cutoff DU", "top BCom college Delhi"],
})

export const revalidate = 300

const colleges = [
  { name: "SRCC (Shri Ram College of Commerce)", location: "North Campus, Delhi", naac: "A++", fees: "₹23K/yr", placement: "₹12 LPA avg", slug: "srcc-sri-ram-college-commerce-du" },
  { name: "Lady Shri Ram College (LSR) — Commerce", location: "Lajpat Nagar, Delhi", naac: "A++", fees: "₹20K/yr", placement: "₹8 LPA avg", slug: "lsr-lsr-delhi" },
  { name: "Hansraj College — B.Com Hons", location: "North Campus, Delhi", naac: "A+", fees: "₹17K/yr", placement: "₹6 LPA avg", slug: "hansraj-college-delhi-university" },
  { name: "Kamala Nehru College — B.Com", location: "South Delhi", naac: "A+", fees: "₹14K/yr", placement: "₹5.5 LPA avg", slug: "kamala-nehru-college-delhi-university" },
  { name: "Dyal Singh College — B.Com Hons", location: "Lodhi Road, Delhi", naac: "A+", fees: "₹14K/yr", placement: "₹5 LPA avg", slug: "dyal-singh-college-delhi-university" },
  { name: "Shyam Lal College — B.Com Hons", location: "Shahdara, Delhi", naac: "A", fees: "₹12K/yr", placement: "₹4.5 LPA avg", slug: "shyam-lal-college-delhi-university" },
  { name: "Ramjas College — B.Com Hons", location: "North Campus, Delhi", naac: "A+", fees: "₹16K/yr", placement: "₹5.5 LPA avg", slug: "ramjas-college-delhi-university" },
  { name: "Shaheed Bhagat Singh College — B.Com", location: "South Delhi", naac: "A+", fees: "₹13K/yr", placement: "₹5 LPA avg", slug: "shaheed-bhagat-singh-college-delhi-university" },
]

const faqs = [
  { q: "Which is the best B.Com college in Delhi?", a: "SRCC (Shri Ram College of Commerce) is the best B.Com college in Delhi and India — ranked #1 commerce college by NIRF, NAAC A++, placements averaging ₹12 LPA with top packages from Goldman Sachs, McKinsey, and Deloitte. SRCC's B.Com Hons is the most competitive DU program with CUET cutoff of 98%+. LSR is best for women students." },
  { q: "What is CUET cutoff for B.Com Hons at SRCC?", a: "SRCC B.Com Hons CUET cutoff 2026: 98%+ percentile in CUET (Business Studies/Accountancy domain). SRCC allocates seats purely through CUET scores. For LSR B.Com: 96%+. For Hansraj B.Com Hons: 90%+. Kamala Nehru and Dyal Singh are more accessible at 82-88% CUET range." },
  { q: "Is B.Com from Delhi University good for CA?", a: "Yes — B.Com from DU (especially SRCC and Hansraj) is excellent for CA (Chartered Accountancy). Many SRCC and Hansraj students clear CA Foundation and Intermediate during their B.Com. DU's semester-based system allows time for CA coaching alongside degree studies. SRCC has 200+ CA qualifiers each year. Most CA firms prefer DU commerce graduates." },
  { q: "What subjects are in B.Com Hons at Delhi University?", a: "B.Com Hons at DU (3-year program) covers: Financial Accounting, Business Mathematics, Microeconomics, Company Law, Cost Accounting, Income Tax, Auditing, Financial Management, Business Statistics, Corporate Governance, and electives in Banking, Insurance, or E-Commerce. SRCC's B.Com Hons is more rigorous with additional Finance electives in Year 3." },
  { q: "What are the career options after B.Com from Delhi University?", a: "Career options after B.Com from Delhi University: CA (Chartered Accountant) — via ICAI exams, MBA (Finance/Marketing) — top IIMs accept DU commerce graduates, Investment Banking (Goldman Sachs, JP Morgan hire from SRCC), Big 4 Accounting (Deloitte, PwC, EY, KPMG), Corporate Finance roles, Government jobs (UPSC, Banking PSU), and M.Com/PhD for academia. SRCC B.Com graduates average ₹12 LPA in first jobs." },
]

export default function BComCollegesDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "B.Com Colleges Delhi", url: "/bcom-colleges-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best B.Com Colleges in Delhi 2026",
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
        breadcrumb={[{ label: "B.Com Colleges Delhi", href: "/bcom-colleges-delhi" }]}
        h1="Best B.Com Colleges in Delhi 2026 – Commerce College Complete Guide"
        subtitle="Top 20 B.Com colleges in Delhi with CUET cutoffs, fees, CA placement records, and career outcomes. SRCC, LSR, Hansraj, Kamala Nehru and more — complete 2026 guide."
        heroStats={[
          { value: "20+", label: "B.Com Colleges" },
          { value: "15K+", label: "Commerce Seats" },
          { value: "₹12 LPA", label: "SRCC Avg Placement" },
          { value: "CUET", label: "Admission Mode" },
        ]}
        introHeading="B.Com Colleges in Delhi: India's Commerce Capital"
        introParagraphs={[
          "Delhi is India's commerce education capital. SRCC (Shri Ram College of Commerce) is India's #1 commerce college — NIRF ranked, NAAC A++, with placements averaging ₹12 LPA from Goldman Sachs, McKinsey, KPMG, and Deloitte. LSR, Hansraj, and Ramjas are among India's top 20 B.Com colleges. No other city comes close to Delhi's concentration of elite commerce education.",
          "B.Com admission in Delhi 2026 is through CUET — the same exam used for all DU programs. Commerce students appear for CUET with Business Studies, Accountancy, or Economics as domain subjects. SRCC's B.Com Hons is India's most competitive commerce program with a CUET cutoff above 98%ile.",
          "Career outcomes from Delhi's B.Com colleges are exceptional. SRCC graduates join Goldman Sachs, McKinsey, JP Morgan, and the Big 4 firms. DU B.Com is the preferred background for IIM MBA aspirants in Finance — IIM Ahmedabad's class consistently has 15-20% DU commerce graduates. For students targeting CA, B.Com from Hansraj or Ramjas alongside CA coaching is a proven combination.",
        ]}
        colleges={colleges}
        whyHeading="Why B.Com from Delhi?"
        whyPoints={[
          { title: "SRCC — India's #1 Commerce College", description: "SRCC's B.Com Hons is India's most prestigious commerce program. Avg placement ₹12 LPA, highest package ₹65 LPA from Goldman Sachs. SRCC alumni run finance departments at Fortune 500 companies worldwide." },
          { title: "Best for CA Preparation", description: "DU B.Com semester system leaves time for CA coaching. SRCC, Hansraj, and Ramjas have 200+ CA qualifiers annually. Big 4 firms (Deloitte, PwC, EY, KPMG) have formal partnerships with SRCC for campus recruitment." },
          { title: "Gateway to Top MBA Programs", description: "IIM Ahmedabad, IIM Calcutta, and FMS Delhi preference candidates with strong commerce backgrounds. DU B.Com + CAT 99%ile is the most common profile at top IIM Finance cohorts." },
          { title: "Government Regulated Fees", description: "DU B.Com fees ₹12,000–₹25,000/yr — fraction of private universities charging ₹1–3L/yr. Same or better placement outcomes. World-class education at 1/10th the cost of private alternatives." },
        ]}
        admissionHeading="B.Com Admission in Delhi 2026: Complete Process"
        admissionSteps={[
          { step: "1", title: "Appear for CUET 2026", description: "Take the Common University Entrance Test (CUET) with Business Studies or Accountancy as your domain subject. CUET is the only admission mode for all Delhi University B.Com programs." },
          { step: "2", title: "Check Merit List & Cutoffs", description: "CUET scores published by June 15, 2026. DU releases merit lists by college and program. SRCC cutoff typically 98%+, Hansraj 90%+, others 82-88%. Prepare for multiple rounds." },
          { step: "3", title: "Register & Choose College", description: "DU conducts choice filling through online portal. Shortlist colleges by CUET score. SRCC and Hansraj fill fast — apply strategic choices to maximize admission probability." },
          { step: "4", title: "Complete Admission Formalities", description: "Document verification, fee payment (₹12-25K/yr), hostel allotment (if eligible). Admission finalized by August 2026. Classes typically start in September." },
        ]}
        ctaHeading="Find Your Perfect B.Com College"
        ctaSubtext="Get personalized college recommendations based on your CUET score. Compare admission odds, cutoffs, placements, and fees. Chat with our college advisors for free guidance."
        faqs={faqs}
      />
    </>
  )
}
