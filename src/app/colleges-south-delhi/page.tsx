import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Colleges in South Delhi 2026 | IIT Delhi, FMS, AIIMS, JNU & More",
  description: "Best colleges in South Delhi 2026 — IIT Delhi, AIIMS Delhi, JNU, FMS Delhi, Lady Shri Ram College, Gargi College. Fees, metro access, and admission guide.",
  path: "/colleges-south-delhi",
  keywords: [
    "colleges in south delhi",
    "south delhi colleges 2026",
    "IIT Delhi south campus",
    "AIIMS Delhi location",
    "JNU Delhi colleges",
    "Lady Shri Ram College south delhi",
    "Gargi College delhi",
    "FMS delhi south campus",
    "colleges near hauz khas metro",
    "colleges near lodi road delhi",
    "south delhi engineering colleges",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "IIT Delhi – Indian Institute of Technology", location: "Hauz Khas, South Delhi", naac: "A++", fees: "₹2.2L/yr", placement: "₹25 LPA avg | ₹2.5 Cr highest", slug: "iit-delhi" },
  { name: "AIIMS Delhi – All India Institute of Medical Sciences", location: "Ansari Nagar, South Delhi", naac: "A++", fees: "₹6K/yr (subsidised)", placement: "Top govt. hospitals + global opportunities", slug: "aiims-delhi" },
  { name: "JNU – Jawaharlal Nehru University", location: "New Mehrauli Road, South Delhi", naac: "A++", fees: "₹5K–20K/yr", placement: "Strong in research, civil services, academia", slug: "jnu-jawaharlal-nehru-university" },
  { name: "FMS Delhi – Faculty of Management Studies", location: "Chhatra Marg, DU South Campus", naac: "A+", fees: "₹30K/yr (MBA)", placement: "₹32 LPA avg | Top MBA in India", slug: "fms-delhi-faculty-management-studies" },
  { name: "Lady Shri Ram College – Delhi University", location: "Lajpat Nagar IV, South Delhi", naac: "A++", fees: "₹12K–35K/yr", placement: "Ranked #1 Women's College in Social Sciences", slug: "lsr-delhi-university" },
  { name: "Gargi College – Delhi University", location: "Siri Fort Road, South Delhi", naac: "A+", fees: "₹12K–35K/yr", placement: "Strong in Science, Commerce, Humanities", slug: "gargi-college-delhi-university" },
  { name: "Indraprastha College for Women – DU", location: "Mall Road / South Campus", naac: "A+", fees: "₹10K–30K/yr", placement: "Good for DU arts and science programs", slug: "indraprastha-college-women-delhi-university" },
  { name: "Sri Venkateswara College – Delhi University", location: "Benito Juarez Road, Dhaula Kuan", naac: "A+", fees: "₹12K–35K/yr", placement: "Strong in Science programs", slug: "sri-venkateswara-college-delhi-university" },
]

const faqs = [
  { q: "What are the best colleges in South Delhi?", a: "South Delhi has some of India's most prestigious institutions: IIT Delhi (NIRF #2, Hauz Khas), AIIMS Delhi (NIRF #1 Medical, Ansari Nagar), JNU (NIRF #2 University, New Mehrauli Rd), FMS Delhi (best value MBA in India, ₹30K/yr), Lady Shri Ram College (NAAC A++, best women's social sciences), and Gargi College. South Delhi is the most elite educational corridor in India." },
  { q: "How is South Delhi connected by Delhi Metro?", a: "South Delhi has excellent Yellow Line coverage: Hauz Khas station (near IIT Delhi), AIIMS station (near AIIMS Delhi), JNU station (near JNU), IIT station (IIT Delhi), Lajpat Nagar station (near LSR College). The Yellow Line connects South Delhi to Central Delhi (Rajiv Chowk) in 10-20 minutes. Green Line and Pink Line also serve parts of South Delhi." },
  { q: "What is the fee at FMS Delhi and how do I get admitted?", a: "FMS Delhi's MBA fee is approximately ₹30,000/year — making it the best ROI MBA program in India (average placement: ₹32 LPA). Admission requires CAT score (99+ percentile for General category). The process: CAT application (Aug), exam (Nov), FMS GD/PI (Feb-March), results (April). Only about 200 seats are available each year." },
  { q: "Can I live near IIT Delhi or AIIMS as a student?", a: "South Delhi student accommodation: near IIT Delhi — Hauz Khas Village (PG ₹10K–20K/month), Munirka (₹7K–14K/month), Green Park (₹9K–18K/month). Near AIIMS — Safdarjung (₹8K–15K/month), R.K. Puram (₹7K–13K/month). IIT Delhi provides excellent hostel facilities for its students. AIIMS has attached residential facilities for medical students." },
  { q: "What CUET score do I need for LSR and Gargi College?", a: "Lady Shri Ram College (LSR) is highly competitive: BA (Hons) English and BA (Hons) Political Science require 99+ CUET percentile for General category. Gargi College requires 96-99 percentile for popular courses. Both are DU South Campus women's colleges. For unconventional courses (BCom Hons at LSR), cutoffs may be slightly lower. Check DU CSAS portal for exact CUET cutoffs after results." },
]

export default function CollegesSouthDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Colleges", url: "/colleges" },
    { name: "Colleges in South Delhi", url: "/colleges-south-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Colleges in South Delhi 2026",
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
        breadcrumb={[
          { label: "Colleges", href: "/colleges" },
          { label: "Colleges in South Delhi", href: "/colleges-south-delhi" },
        ]}
        h1="Colleges in South Delhi 2026"
        subtitle="South Delhi is home to India's most elite institutions — IIT Delhi, AIIMS Delhi, JNU, FMS Delhi, Lady Shri Ram College, and Gargi College. All connected by the Yellow Line Metro."
        heroStats={[
          { value: "IIT Delhi", label: "NIRF #2 Engineering" },
          { value: "AIIMS", label: "NIRF #1 Medical" },
          { value: "₹32 LPA", label: "FMS Delhi Avg Pkg" },
          { value: "₹6K/yr", label: "AIIMS Subsidised Fees" },
        ]}
        introHeading="South Delhi: India's Most Elite Education Corridor"
        introParagraphs={[
          "South Delhi hosts the highest concentration of top-ranked institutions in India. Within a 10 km stretch from Hauz Khas to Lajpat Nagar, you find IIT Delhi (NIRF #2 Engineering, globally ranked), AIIMS Delhi (NIRF #1 Medical, world-class research hospital), JNU (NIRF #2 University, leading research institution), and FMS Delhi (best value MBA in India at ₹30K/year with ₹32 LPA average placement).",
          "The Delhi University South Campus adds Lady Shri Ram College (NAAC A++, India's best women's social sciences college), Gargi College, Sri Venkateswara College, and several other NAAC A+ institutions. Together with Indraprastha College for Women, DU South Campus is a hub for arts, science, and commerce programs.",
          "South Delhi's advantages for students include excellent Yellow Line metro connectivity (AIIMS station, Hauz Khas, IIT, JNU stations), proximity to South Delhi's job market, premium student accommodation in areas like Hauz Khas, Munirka, Safdarjung, and Lajpat Nagar, and access to Delhi's diplomatic and corporate hubs.",
        ]}
        colleges={colleges}
        whyHeading="Why Choose South Delhi for College?"
        whyPoints={[
          { title: "IIT Delhi in the Heart of South Delhi", description: "IIT Delhi is located in Hauz Khas — NIRF #2, globally ranked, with ₹25 LPA average placement and recruiting from Google, Microsoft, Amazon, and Goldman Sachs." },
          { title: "AIIMS — World-Class Medical Education", description: "AIIMS Delhi is India's premier medical institution, NIRF #1, with near-free education (₹6,000/year subsidised). Requires NEET 690+ for General category." },
          { title: "FMS Delhi — Best MBA ROI in India", description: "FMS Delhi charges only ₹30,000/year for MBA with ₹32 LPA average placement — the highest return-on-investment MBA program in India. Requires CAT 99+ percentile." },
          { title: "Yellow Line Metro Coverage", description: "AIIMS, IIT, Hauz Khas, JNU, and Lajpat Nagar metro stations on Yellow Line connect South Delhi to all of NCR within 20-40 minutes." },
          { title: "Premium Student Areas", description: "Hauz Khas Village, Munirka, Safdarjung, and Green Park offer vibrant student life with cafes, co-working spaces, and social networking opportunities." },
          { title: "Lady Shri Ram & Gargi College", description: "LSR (NAAC A++) and Gargi College (NAAC A+) on DU South Campus are among India's best women's colleges for arts, science, and commerce programs at ₹12K–35K/year." },
        ]}
        admissionHeading="Admission to South Delhi Colleges 2026"
        admissionSteps={[
          { step: "1", title: "IIT Delhi — JEE Advanced + JOSAA", description: "Appear for JEE Advanced 2026 (only top 2.5L JEE Main qualifiers eligible). Registration at jeeadv.ac.in. IIT Delhi CSE requires rank under 200 (General). JOSAA counselling in June-July 2026." },
          { step: "2", title: "AIIMS Delhi — NEET 2026", description: "AIIMS Delhi admission is through NEET 2026. Requires 690+ score (General). AIIMS runs separate admission portal (aiimsexams.ac.in). Only 100 MBBS seats — highly competitive." },
          { step: "3", title: "FMS Delhi — CAT 2026", description: "CAT 2026 exam in November. FMS requires 99+ percentile (General). Apply on FMS website after CAT results (Jan 2027). GD/PI process in Feb-March 2027 for 2027 batch." },
          { step: "4", title: "DU Colleges (LSR, Gargi) — CUET 2026", description: "For Lady Shri Ram, Gargi, Sri Venkateswara, and Indraprastha College — appear for CUET 2026 (May). Register on DU CSAS portal after results (June-July 2026)." },
          { step: "5", title: "JNU — CUET PG / Entrance Tests", description: "JNU admissions for most programs are through CUET PG. Specific programs have JNU entrance tests. Apply at jnu.ac.in. JNU is known for its subsidised hostel and mess facilities." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free Guidance for South Delhi Colleges"
        ctaSubtext="IIT Delhi, AIIMS, FMS, LSR, or Gargi — our counsellors will guide you through JEE, NEET, CAT, and CUET processes for South Delhi colleges. 100% free."
        relatedGuides={[
          { label: "Colleges in North Delhi", href: "/colleges-north-delhi", icon: "N" },
          { label: "AIIMS Delhi Admission Guide", href: "/medical-colleges-delhi", icon: "M" },
          { label: "FMS Delhi MBA Admission", href: "/best-mba-colleges-delhi", icon: "B" },
          { label: "IIT Delhi Engineering", href: "/engineering-colleges-delhi", icon: "E" },
          { label: "Low Fee Colleges Delhi", href: "/low-fee-colleges-delhi", icon: "L" },
          { label: "Government Colleges Delhi", href: "/government-colleges-delhi", icon: "G" },
        ]}
      />
    </>
  )
}
