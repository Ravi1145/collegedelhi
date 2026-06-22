import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Best Girls Colleges in Delhi 2026",
  description: "Complete list of best girls colleges and women's colleges in Delhi 2026. Miranda House, LSR, Gargi, Indraprastha, IGDTUW — compare fees, NAAC grades, placements",
  path: "/girls-colleges-delhi",
  keywords: ["girls colleges in Delhi", "women's colleges Delhi 2026", "best girls college Delhi", "women only colleges Delhi", "girls college admission Delhi 2026"],
})

export const revalidate = 300

const colleges = [
  { name: "Miranda House (DU)", location: "North Campus, Delhi", naac: "A++", fees: "₹18K/yr", placement: "₹6 LPA avg", slug: "miranda-house-delhi-university" },
  { name: "Lady Shri Ram College (LSR)", location: "Lajpat Nagar, Delhi", naac: "A++", fees: "₹20K/yr", placement: "₹7 LPA avg", slug: "lsr-lsr-delhi" },
  { name: "Gargi College (DU)", location: "South Delhi", naac: "A+", fees: "₹15K/yr", placement: "₹5.5 LPA avg", slug: "gargi-college-delhi-university" },
  { name: "Indraprastha College for Women (DU)", location: "North Campus, Delhi", naac: "A+", fees: "₹14K/yr", placement: "₹5 LPA avg", slug: "indraprastha-college-women-delhi-university" },
  { name: "Daulat Ram College (DU)", location: "North Campus, Delhi", naac: "A+", fees: "₹15K/yr", placement: "₹5 LPA avg", slug: "daulat-ram-college-delhi-university" },
  { name: "IGDTUW (Women's Tech University)", location: "Kashmere Gate, Delhi", naac: "A+", fees: "₹1.4L/yr", placement: "₹9 LPA avg", slug: "igdtuw-delhi" },
  { name: "Lady Irwin College (DU)", location: "Sikandra Road, Delhi", naac: "A+", fees: "₹16K/yr", placement: "₹5 LPA avg", slug: "lady-irwin-college-delhi-university" },
  { name: "Maitreyi College (DU)", location: "South Delhi", naac: "A+", fees: "₹14K/yr", placement: "₹5 LPA avg", slug: "maitreyi-college-delhi-university" },
]

const faqs = [
  { q: "Which is the best girls college in Delhi?", a: "Miranda House is the best girls college in Delhi — ranked #1 college in India by NIRF for 5 consecutive years, NAAC A++ grade. For women's engineering, IGDTUW (Indira Gandhi Delhi Technical University for Women) is India's only dedicated women's technical university with NAAC A+ and placements averaging ₹9 LPA. Lady Shri Ram College (LSR) is best for Economics, English, and Psychology." },
  { q: "How many women's colleges are there in Delhi University?", a: "Delhi University has 16+ women-only colleges including Miranda House, LSR, Gargi College, Indraprastha College for Women, Daulat Ram College, Lady Irwin College, Maitreyi College, Janki Devi Memorial College, Kamala Nehru College, and others. Together they offer 15,000+ seats annually for women students." },
  { q: "What is CUET cutoff for Miranda House and LSR?", a: "CUET 2026 cutoff for Miranda House: BA English Hons 95%+, BA History 93%+, BSc Physics 88%+, BA Psychology 92%+. LSR cutoffs: BA Economics Hons 97%+, BA English 96%+, BA Psychology 94%+. These are among the highest CUET cutoffs in India and require strong preparation in both language and domain subjects." },
  { q: "Is IGDTUW good for engineering?", a: "IGDTUW (Indira Gandhi Delhi Technical University for Women) is India's only technical university exclusively for women. NAAC A+ rated, affiliated to IP University, annual fees ₹1.4L, average placement ₹9 LPA with top packages at ₹45+ LPA. Top recruiters: Microsoft, Amazon, Infosys, TCS, Wipro. Admission through JEE Main score." },
  { q: "Are girls colleges safer and better for women students in Delhi?", a: "Yes — women's colleges in Delhi offer dedicated infrastructure for female students: separate hostel facilities, women-only study groups, women's development cells, and stronger female mentorship networks. Miranda House and LSR have 100% of leadership positions held by women students. IGDTUW has 24/7 security and well-lit campus. Most women's DU colleges are in safe, central Delhi locations." },
]

export default function GirlsCollegesDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Girls Colleges Delhi", url: "/girls-colleges-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Girls Colleges in Delhi 2026",
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
        breadcrumb={[{ label: "Girls Colleges Delhi", href: "/girls-colleges-delhi" }]}
        h1="Best Girls Colleges in Delhi 2026 – Women's Colleges Complete Guide"
        subtitle="Top 30+ women's colleges and girls-only colleges in Delhi with CUET cutoffs, NAAC grades, fees, placements, and hostel facilities for 2026 admissions."
        heroStats={[
          { value: "30+", label: "Women's Colleges" },
          { value: "20K+", label: "Seats/Year" },
          { value: "NIRF #1", label: "Miranda House" },
          { value: "Safe Campus", label: "All Locations" },
        ]}
        introHeading="Women's Colleges in Delhi: Why They're India's Best"
        introParagraphs={[
          "Delhi is home to India's finest women's colleges — Miranda House (NIRF #1 college for 5 years), Lady Shri Ram College (LSR), Gargi College, and India's only women's technical university IGDTUW. Delhi University alone has 16 women-only colleges with 15,000+ seats annually, making it the largest women's higher education ecosystem in India.",
          "Women's colleges in Delhi offer significant advantages: dedicated mentorship networks, women-first leadership opportunities, safer campus environments, and stronger alumnae networks. Miranda House and LSR graduates head Goldman Sachs teams, McKinsey practices, and Supreme Court chambers. The female alumni network from these colleges is unmatched anywhere in India.",
          "Admission to DU women's colleges is through CUET (Common University Entrance Test) — same process as co-ed DU colleges. For IGDTUW (engineering), admission is through JEE Main scores. CUET cutoffs for Miranda House and LSR are among the highest in India, reflecting the intense competition for these prestigious institutions.",
        ]}
        colleges={colleges}
        whyHeading="Why Choose a Women's College in Delhi?"
        whyPoints={[
          { title: "NIRF #1 — Miranda House", description: "Miranda House has been ranked #1 college in India by NIRF for 5 consecutive years. LSR ranks top 5. These are the highest-ranked women's colleges in Asia by academic reputation and placement outcomes." },
          { title: "Leadership & Confidence", description: "Women's colleges give female students 100% of leadership positions — student president, magazine editor, sports captain, cultural head. Research shows women's college graduates are 2x more likely to hold leadership positions in careers." },
          { title: "Safer Campus Environment", description: "Women-only campuses in Delhi have dedicated security, women's complaint committees, and harassment-free environments. Hostels designed exclusively for women with 24/7 security are standard at Miranda House, LSR, and IGDTUW." },
          { title: "Strong Alumnae Network", description: "Miranda House and LSR alumnae include Supreme Court judges, Cabinet Ministers, Bollywood stars, and Fortune 500 executives. The all-female network actively mentors current students with internships, referrals, and career guidance." },
        ]}
        faqs={faqs}
      />
    </>
  )
}
