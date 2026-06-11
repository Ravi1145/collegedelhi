import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Colleges in North Delhi 2026 | DU North Campus, GTB Nagar & More",
  description: "Top colleges in North Delhi 2026 — Delhi University North Campus (Hindu, Hansraj, Kirori Mal, Miranda House), GTBIT, DTU Rohini. Fees, courses, metro access, and admission guide.",
  path: "/colleges-north-delhi",
  keywords: [
    "colleges in north delhi",
    "north delhi colleges 2026",
    "delhi university north campus colleges",
    "Hindu College north delhi",
    "Hansraj College delhi",
    "Kirori Mal College delhi",
    "Miranda House north delhi",
    "GTB Nagar colleges",
    "Rohini colleges delhi",
    "colleges near university metro station delhi",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "Hindu College – Delhi University", location: "North Campus, Delhi University", naac: "A++", fees: "₹15K–45K/yr", placement: "Govt. jobs + Top corporates", slug: "hindu-college-delhi-university" },
  { name: "Hansraj College – Delhi University", location: "North Campus, Malka Ganj", naac: "A+", fees: "₹15K–40K/yr", placement: "Best for Science & Commerce", slug: "hansraj-college-delhi-university" },
  { name: "Kirori Mal College – Delhi University", location: "North Campus, GTB Nagar", naac: "A+", fees: "₹12K–35K/yr", placement: "Strong in Humanities & Science", slug: "kirori-mal-college-delhi-university" },
  { name: "Miranda House – Delhi University", location: "North Campus, Delhi University", naac: "A++", fees: "₹12K–38K/yr", placement: "India's #1 Women's College (NIRF)", slug: "miranda-house-delhi-university" },
  { name: "Sri Ram College of Commerce (SRCC) – DU", location: "North Campus, Delhi University", naac: "A+", fees: "₹15K–40K/yr", placement: "₹15 LPA avg | Top B-school firms", slug: "srcc-sri-ram-college-commerce-du" },
  { name: "Ramjas College – Delhi University", location: "North Campus, Civil Lines", naac: "A+", fees: "₹12K–35K/yr", placement: "Strong in Arts & Science streams", slug: "ramjas-college-delhi-university" },
  { name: "GTBIT – Guru Tegh Bahadur Institute of Technology", location: "G.T. Karnal Road, Rohini", naac: "B+", fees: "₹1.5L–2L/yr", placement: "₹6.5 LPA avg", slug: "gtbit-guru-tegh-bahadur-institute-technology" },
  { name: "DTU – Delhi Technological University (Main Campus)", location: "Shahbad Daulatpur, Rohini", naac: "A+", fees: "₹1.5L–2L/yr", placement: "₹18 LPA avg | ₹72 LPA highest", slug: "delhi-technological-university-dtu" },
]

const faqs = [
  { q: "What are the best colleges in North Delhi?", a: "North Delhi is home to Delhi University's North Campus — one of India's most prestigious university clusters. The top colleges are Hindu College (NAAC A++), Miranda House (NAAC A++, India's #1 Women's College), SRCC (best for BCom Hons), Hansraj College (NAAC A+), and Kirori Mal College (NAAC A+). For engineering, DTU (NIRF 49) is located in Rohini, North Delhi." },
  { q: "Which metro station is closest to Delhi University North Campus?", a: "Delhi University metro station (Yellow Line) is directly adjacent to North Campus — walking distance to Hindu College, Hansraj, Kirori Mal, Miranda House, and SRCC. GTB Nagar metro station (Yellow Line) is another option for colleges on the northern side of the campus. The Yellow Line connects North Campus to Rajiv Chowk in about 15 minutes." },
  { q: "What CUET score do I need for DU North Campus colleges?", a: "For top North Campus colleges (Hindu, Miranda House, SRCC): General Category students typically need 95-99 percentile in CUET for popular courses like BCom Hons, BA (Hons) Economics, BA (Hons) English. SRCC BCom Hons is the most competitive — requires near-perfect CUET scores. Miranda House popular courses need 97+ percentile. OBC-NCL and SC/ST categories have lower cutoffs." },
  { q: "Is accommodation available near DU North Campus?", a: "Yes — North Delhi has abundant student accommodation. PG options near Hudson Lane, GTB Nagar, and Vijay Nagar (walking distance from campus) cost ₹7,000–15,000/month. DU colleges have limited hostel seats (apply immediately after admission — very competitive). Shared flats near Outram Lane cost ₹5,000–10,000/person/month." },
  { q: "What programs does SRCC Delhi offer and what is the placement?", a: "SRCC offers BCom (Hons) and BA (Hons) Economics at UG level, and MA Economics and MBA at PG level. BCom Hons placements are exceptional — top recruiters include McKinsey, BCG, Deloitte, Goldman Sachs, EY. Average placement is ₹12-15 LPA for BCom Hons graduates. The MBA program average is ₹20+ LPA." },
]

export default function CollegesNorthDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Colleges", url: "/colleges" },
    { name: "Colleges in North Delhi", url: "/colleges-north-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Colleges in North Delhi 2026",
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
          { label: "Colleges in North Delhi", href: "/colleges-north-delhi" },
        ]}
        h1="Colleges in North Delhi 2026"
        subtitle="North Delhi hosts Delhi University's iconic North Campus — Miranda House, Hindu College, Hansraj, Kirori Mal, and SRCC — plus engineering giant DTU in Rohini. All metro-accessible via Yellow Line."
        heroStats={[
          { value: "30+", label: "Colleges in North Delhi" },
          { value: "Miranda House", label: "India's #1 Women's College" },
          { value: "₹12K/yr", label: "DU College Min. Fees" },
          { value: "NAAC A++", label: "Hindu & Miranda House" },
        ]}
        introHeading="North Delhi: Home of DU North Campus & DTU"
        introParagraphs={[
          "North Delhi is the academic heart of Delhi University, housing the prestigious North Campus cluster along the Yellow Metro Line. Institutions like Hindu College (est. 1899), Miranda House (India's #1 Women's College, NAAC A++), SRCC (best commerce college), Hansraj College, and Kirori Mal College form one of India's densest concentrations of elite undergraduate education.",
          "Beyond the DU cluster, North Delhi includes Rohini and Shahbad Daulatpur — home to DTU (Delhi Technological University), NIRF Rank 49, one of India's best government engineering colleges. DTU's main campus is in North Delhi and is accessible via Rohini metro stations on the Red Line.",
          "For students seeking affordable, world-class undergraduate education, North Delhi's DU colleges charge ₹12,000–45,000 per year — among the lowest fees for top-ranked colleges in India. The area also offers dense student accommodation options near GTB Nagar, Hudson Lane, and Vijay Nagar.",
        ]}
        colleges={colleges}
        whyHeading="Why Study in North Delhi?"
        whyPoints={[
          { title: "Delhi University North Campus", description: "The North Campus cluster is one of India's most prestigious academic hubs with Miranda House, Hindu College, SRCC, Hansraj, and Kirori Mal all within walking distance of each other." },
          { title: "Yellow Line Metro Access", description: "Delhi University and GTB Nagar metro stations (Yellow Line) make the entire North Campus area directly accessible from Central Delhi, Gurgaon, Noida, and Faridabad." },
          { title: "Ultra-Affordable DU Fees", description: "DU colleges on North Campus charge ₹12,000–45,000/year — among the best value education in India. SC/ST students get near-zero fees through central government scholarships." },
          { title: "DTU for Engineering", description: "Delhi Technological University (formerly DCE) in Rohini is NIRF-ranked #49 in India with average placements of ₹18 LPA. One of India's best government engineering colleges." },
          { title: "Student Life & Culture", description: "North Campus has India's most vibrant college culture — annual fests (Mecca, Aaroha, Udbhav), numerous clubs, cultural societies, debate competitions, and sports activities." },
          { title: "Accommodation Hub", description: "Areas like Hudson Lane, Vijay Nagar, GTB Nagar, and Outram Lane offer dense student PG and hostel options within 0.5–2 km of all North Campus colleges." },
        ]}
        admissionHeading="Admission to North Delhi Colleges 2026"
        admissionSteps={[
          { step: "1", title: "Appear for CUET 2026", description: "For Delhi University colleges (Hindu, Miranda, SRCC, Hansraj, Kirori Mal) — CUET (Common University Entrance Test) is mandatory. Register at cuet.nta.nic.in. Exam in May 2026." },
          { step: "2", title: "Check DU CSAS Portal", description: "After CUET results (June 2026), register on DU's CSAS (Common Seat Allocation System) portal. Fill in your program-college preferences in merit order." },
          { step: "3", title: "Wait for Allocation Rounds", description: "DU conducts 3-4 CSAS rounds in July-August 2026. Accept your seat within the deadline of each round. Missing a deadline forfeits your seat." },
          { step: "4", title: "For DTU/Engineering — JEE Main + JAC Delhi", description: "For DTU, NSUT, IGDTUW engineering admission — appear for JEE Main 2026 and register for JAC Delhi counselling. DTU CSE requires 99+ JEE Main percentile." },
          { step: "5", title: "Apply for DU Hostels Immediately", description: "DU college hostel seats are extremely limited — apply on the first day hostel registration opens after admission confirmation. Popular hostels fill within hours." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free Guidance for North Delhi Colleges"
        ctaSubtext="Whether it's SRCC BCom Hons, Miranda House, or DTU engineering — our counsellors will guide you through CUET, CSAS, and JAC Delhi processes for free."
        relatedGuides={[
          { label: "DU College Admission 2026 Guide", href: "/colleges-in-delhi", icon: "U" },
          { label: "Colleges in South Delhi", href: "/colleges-south-delhi", icon: "S" },
          { label: "SRCC vs Hindu College Comparison", href: "/srcc-vs-hindu-college", icon: "=" },
          { label: "Government Colleges Delhi", href: "/government-colleges-delhi", icon: "G" },
          { label: "DTU vs NSUT Comparison", href: "/dtu-vs-nsut", icon: "=" },
          { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi", icon: "E" },
          { label: "Low Fee Colleges Delhi", href: "/low-fee-colleges-delhi", icon: "L" },
        ]}
      />
    </>
  )
}
