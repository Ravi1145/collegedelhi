import type { Metadata } from "next"
import Script from "next/script"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Colleges in East Delhi 2026 | NSUT East Campus, IP Colleges & More",
  description: "Best colleges in East Delhi 2026 — NSUT East Campus, GGSIP University affiliated colleges in Mayur Vihar, Patparganj, Geeta Colony. Fees, courses, metro access & admission guide.",
  path: "/colleges-east-delhi",
  keywords: [
    "colleges in east delhi",
    "east delhi colleges 2026",
    "NSUT east campus delhi",
    "IP university colleges east delhi",
    "Mayur Vihar colleges delhi",
    "Patparganj colleges delhi",
    "Geeta Colony colleges delhi",
    "colleges near Anand Vihar delhi",
    "east delhi engineering colleges",
    "affordable colleges east delhi",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "NSUT – East Campus (Geeta Colony)", location: "Geeta Colony, East Delhi", naac: "A+", fees: "₹1.5L–2L/yr", placement: "₹14 LPA avg | ₹55 LPA highest", slug: "nsut-east-campus-geeta-colony" },
  { name: "IPEC – IP College of Engineering", location: "Indraprastha University Campus, East Delhi", naac: "A", fees: "₹1.4L–1.9L/yr", placement: "₹7 LPA avg", slug: "ipec-indraprastha-university-engineering" },
  { name: "JIMS – Jagannath International Management School", location: "Rohini / Kalkaji (East Delhi belts)", naac: "A", fees: "₹1.5L–2.5L (MBA)", placement: "₹6.5 LPA avg", slug: "jims-jagannath-management-school-delhi" },
  { name: "Delhi Institute of Advanced Studies", location: "Sector 25, Rohini", naac: "B+", fees: "₹60K–1.5L/yr", placement: "₹4.5 LPA avg", slug: "delhi-institute-advanced-studies" },
  { name: "MAIT – Maharaja Agrasen Institute of Technology", location: "Rohini, Sector 22", naac: "A", fees: "₹1.6L–2.1L/yr", placement: "₹7.5 LPA avg", slug: "mait-maharaja-agrasen-institute-technology" },
  { name: "BPIT – Bhagwan Parshuram Institute of Technology", location: "Rohini, Sector 17", naac: "A", fees: "₹1.5L–2L/yr", placement: "₹7 LPA avg", slug: "bpit-bhagwan-parshuram-institute-technology" },
  { name: "KIET Group of Institutions", location: "NH 58, Near Ghaziabad (NCR East)", naac: "A+", fees: "₹1.2L–1.8L/yr", placement: "₹8 LPA avg", slug: "kiet-group-institutions-delhi-ncr" },
  { name: "HMR Institute of Technology & Management", location: "GT Karnal Road, East Delhi", naac: "B+", fees: "₹1.4L–1.9L/yr", placement: "₹6 LPA avg", slug: "hmr-institute-technology-management-delhi" },
]

const faqs = [
  { q: "What are the best colleges in East Delhi?", a: "NSUT East Campus (Geeta Colony) is the best engineering college in East Delhi — a government institution with NAAC A+, average placements of ₹14 LPA, and JEE Main admission through JAC Delhi. Other strong options: MAIT (Maharaja Agrasen Institute, Rohini), BPIT (Bhagwan Parshuram, Rohini), and IPEC (IP University affiliated). For MBA: JIMS Delhi has good placements at affordable fees." },
  { q: "How is East Delhi connected by metro for college students?", a: "East Delhi is served by the Blue Line (Anand Vihar, Kaushambi, Preet Vihar, Nirman Vihar, Vikas Marg stations) and the Pink Line (Mayur Vihar Phase 1, Phase 2, IP Extension). The Pink Line connects East Delhi to Hazrat Nizamuddin and Lajpat Nagar. The Blue Line provides quick access to Rajiv Chowk (Central Delhi) and Noida. Geeta Colony (NSUT East) is accessible from ITO and near Blue Line stations." },
  { q: "Is NSUT East Campus (Geeta Colony) as good as NSUT Dwarka?", a: "NSUT East Campus (Geeta Colony) and NSUT Dwarka campus are both part of NSUT — the same institution, NIRF 52. Academic quality and faculty are equivalent. However, NSUT Dwarka (West Campus) is the main campus with more infrastructure, hostel facilities, and higher CSE placements (₹16 LPA avg vs ₹14 LPA for East Campus). For specific branches offered at East Campus, the quality is identical to Dwarka." },
  { q: "What is the cost of PG accommodation near East Delhi colleges?", a: "East Delhi accommodation is significantly more affordable than Central or South Delhi: Near NSUT East (Geeta Colony) — PG costs ₹6,000–12,000/month furnished. Near Anand Vihar / Preet Vihar — ₹6,000–11,000/month. Near IP University Campus — ₹7,000–13,000/month. Shared flats in East Delhi average ₹5,000–9,000/person/month. East Delhi is one of the most budget-friendly areas for college students in Delhi." },
  { q: "Which IP University affiliated colleges are in East Delhi?", a: "IP University (GGSIPU) has several affiliated engineering and management colleges in East Delhi and nearby areas: IPEC (IP College of Engineering), HMRIT (HMR Institute of Technology), BPIT (Bhagwan Parshuram IT), MAIT (Maharaja Agrasen IT), JIMS (management), and USICT (University School of ICT at main IP University campus). Admission is through IPU CET or JEE Main scores." },
]

export default function CollegesEastDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Colleges", url: "/colleges" },
    { name: "Colleges in East Delhi", url: "/colleges-east-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Colleges in East Delhi 2026",
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
        breadcrumb={[
          { label: "Colleges", href: "/colleges" },
          { label: "Colleges in East Delhi", href: "/colleges-east-delhi" },
        ]}
        h1="Colleges in East Delhi 2026"
        subtitle="East Delhi houses NSUT East Campus (Geeta Colony), multiple IP University affiliated engineering colleges, and affordable MBA institutes. Well-connected by Blue and Pink Metro Lines."
        heroStats={[
          { value: "15+", label: "Colleges in East Delhi" },
          { value: "NSUT East", label: "Best Engineering College" },
          { value: "₹14 LPA", label: "NSUT East Avg Pkg" },
          { value: "₹6K/mo", label: "Budget PG Near Campus" },
        ]}
        introHeading="East Delhi: Affordable Engineering & Management Education"
        introParagraphs={[
          "East Delhi is an emerging education hub anchored by NSUT East Campus (Geeta Colony) — a government engineering college under Netaji Subhas University of Technology (NIRF 52, NAAC A+). The campus offers B.Tech programs through JEE Main (JAC Delhi counselling) with average placements of ₹14 LPA and no geographical disadvantage compared to the Dwarka campus.",
          "The East Delhi and North-East Delhi corridor also hosts multiple IP University (GGSIPU) affiliated engineering and management institutions — MAIT, BPIT, HMRIT, and JIMS — offering B.Tech and MBA programs at ₹1.4L–2.1L/year fees. These colleges collectively serve thousands of Delhi NCR students who prefer proximity to East Delhi and the Noida belt.",
          "For students from Mayur Vihar, Anand Vihar, Preet Vihar, Geeta Colony, IP Extension, and the Ghaziabad-NCR border, East Delhi colleges offer a cost-effective alternative to Central Delhi — with Blue and Pink Line metro connectivity making commuting to internships and jobs in Noida, Connaught Place, and South Delhi straightforward.",
        ]}
        colleges={colleges}
        whyHeading="Why Consider East Delhi Colleges?"
        whyPoints={[
          { title: "NSUT East Campus – Govt. College at Low Fees", description: "NSUT East Campus (Geeta Colony) is a government engineering college with NAAC A+, NIRF 52 standing, and ₹1.5L/year fees — one of the best value engineering options in Delhi." },
          { title: "Affordable Student Living", description: "East Delhi PG accommodation costs ₹6,000–12,000/month — 30-40% cheaper than South Delhi or Hauz Khas. Good for budget-conscious students and those from East Delhi/Noida." },
          { title: "Blue + Pink Line Metro Access", description: "Anand Vihar, Preet Vihar, Nirman Vihar (Blue Line) and Mayur Vihar, IP Extension (Pink Line) connect East Delhi to Noida, Central Delhi and Gurgaon within 30-45 minutes." },
          { title: "IP University Affiliated Colleges", description: "Multiple GGSIPU-affiliated colleges in East Delhi offer B.Tech and MBA at ₹1.4L–2.1L/year fees. IP University CET + JEE Main scores are accepted." },
          { title: "NCR Border Advantage", description: "East Delhi's proximity to Noida, Ghaziabad, and Greater Noida means students have access to internship opportunities at TCS, Infosys, HCL, and 500+ IT companies in the Noida belt." },
          { title: "Growing Infrastructure", description: "East Delhi has seen rapid development with new metro lines, commercial hubs in Preet Vihar and Anand Vihar, and growing residential options for students." },
        ]}
        admissionHeading="Admission to East Delhi Colleges 2026"
        admissionSteps={[
          { step: "1", title: "NSUT East Campus — JEE Main + JAC Delhi", description: "Appear for JEE Main 2026. NSUT East Campus CSE requires approximately 97-98 percentile (General). Register for JAC Delhi counselling at jacdelhi.admissions.nic.in after JEE Main results." },
          { step: "2", title: "IP University Colleges — IPU CET 2026", description: "For MAIT, BPIT, HMRIT, and other GGSIPU affiliated colleges: appear for IPU CET (May 2026) at ipu.ac.in. Many also accept JEE Main scores for lateral allocation." },
          { step: "3", title: "Management Colleges — CAT/MAT/CMAT", description: "For JIMS and other East Delhi MBA colleges: appear for CAT (Nov 2026) or MAT/CMAT. JIMS accepts MAT and CMAT in addition to CAT. Cut-offs are 60-75 percentile for most East Delhi MBA colleges." },
          { step: "4", title: "Document Verification & Fees", description: "After counselling allocation, report to the college within the deadline with original documents: Class 10+12 marksheets, category certificate, admission letter, and passport photos." },
          { step: "5", title: "Arrange Accommodation", description: "Apply for hostels immediately after admission confirmation. Alternatively, explore PG options in Geeta Colony, Preet Vihar, Anand Vihar, Mayur Vihar Phase 1 area for budget accommodation." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free Guidance for East Delhi Colleges"
        ctaSubtext="NSUT East Campus, MAIT, BPIT, or JIMS MBA — our counsellors will guide you through IPU CET, JAC Delhi, and direct admission processes for East Delhi colleges. Free counselling."
        relatedGuides={[
          { label: "NSUT Delhi — Full Profile", href: "/colleges/nsut-netaji-subhas-university-of-technology", icon: "N" },
          { label: "Colleges in North Delhi", href: "/colleges-north-delhi", icon: "N" },
          { label: "DTU vs NSUT Comparison", href: "/dtu-vs-nsut", icon: "=" },
          { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi", icon: "E" },
          { label: "Government Colleges Delhi", href: "/government-colleges-delhi", icon: "G" },
          { label: "Low Fee Colleges Delhi", href: "/low-fee-colleges-delhi", icon: "L" },
        ]}
      />
    </>
  )
}
