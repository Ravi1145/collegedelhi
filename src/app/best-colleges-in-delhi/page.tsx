import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Best Colleges in Delhi 2026 — All Streams, Fees & Rankings",
  description: "Best colleges in Delhi 2026: IIT Delhi, FMS Delhi, AIIMS Delhi, DTU, Miranda House, SRCC. Compare fees, NAAC grades, and placements across all streams.",
  path: "/best-colleges-in-delhi",
  keywords: [
    "best colleges in delhi",
    "best college in delhi",
    "top colleges in delhi",
    "top college in delhi 2026",
    "best university in delhi",
    "best colleges in delhi for engineering",
    "best colleges in delhi for MBA",
    "best colleges in delhi for arts",
    "best colleges in delhi for commerce",
    "best colleges in delhi for medical",
    "delhi university best colleges",
    "nirf ranked colleges delhi",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "IIT Delhi (Indian Institute of Technology Delhi)", location: "Hauz Khas, South Delhi", naac: "A++", fees: "₹2.24L/yr", placement: "₹28 LPA avg", slug: "iit-delhi" },
  { name: "FMS Delhi (Faculty of Management Studies, DU)", location: "DU North Campus, Delhi", naac: "A++", fees: "₹55K (MBA total)", placement: "₹32 LPA avg", slug: "fms-delhi-faculty-management-studies" },
  { name: "AIIMS Delhi (All India Institute of Medical Sciences)", location: "Ansari Nagar, South Delhi", naac: "A+", fees: "₹1,628/yr (MBBS)", placement: "Best medical", slug: "aiims-delhi" },
  { name: "DTU Delhi (Delhi Technological University)", location: "Rohini, North Delhi", naac: "A+", fees: "₹1.5L/yr", placement: "₹17 LPA avg", slug: "delhi-technological-university-dtu" },
  { name: "NSUT Delhi (Netaji Subhas University of Technology)", location: "Dwarka, West Delhi", naac: "A+", fees: "₹1.4L/yr", placement: "₹14 LPA avg", slug: "nsut-netaji-subhas-university-of-technology" },
  { name: "SRCC (Shri Ram College of Commerce, DU)", location: "DU North Campus, Delhi", naac: "A+", fees: "₹24K/yr", placement: "₹12 LPA avg", slug: "srcc-sri-ram-college-commerce-du" },
  { name: "Miranda House (DU)", location: "DU North Campus, Delhi", naac: "A+", fees: "₹22K/yr", placement: "₹8 LPA avg", slug: "miranda-house-delhi-university" },
  { name: "IIIT Delhi (Indraprastha Institute of Information Technology)", location: "Okhla, South Delhi", naac: "A+", fees: "₹3.5L/yr", placement: "₹22 LPA avg", slug: "iiit-delhi" },
  { name: "MDI Gurgaon (Management Development Institute)", location: "Sector 17, Gurgaon NCR", naac: "A+", fees: "₹22L (MBA total)", placement: "₹24 LPA avg", slug: "mdi-gurgaon-management-development-institute" },
  { name: "Jamia Millia Islamia (JMI) Engineering", location: "Okhla, South Delhi", naac: "A++", fees: "₹42K/yr", placement: "₹9 LPA avg", slug: "jamia-millia-islamia-engineering" },
]

const faqs = [
  {
    question: "Which is the best college in Delhi?",
    answer: "IIT Delhi is the best overall college in Delhi for engineering and research — it ranks #2 in India in NIRF 2024 with ₹28 LPA average placement. For MBA, FMS Delhi (Faculty of Management Studies, DU) is India's best value MBA with ₹55K fees and ₹32 LPA placement. For medical, AIIMS Delhi is the best medical college in India. For arts and humanities, Miranda House (DU) ranks #1 among autonomous colleges in NIRF 2024.",
  },
  {
    question: "What are the top 10 colleges in Delhi across all streams?",
    answer: "Top 10 colleges in Delhi 2026: 1. IIT Delhi (Engineering, NIRF #2), 2. AIIMS Delhi (Medical, NIRF #1 in Medicine), 3. FMS Delhi (MBA, India's best value), 4. Miranda House DU (Arts, NIRF #1 College), 5. SRCC DU (Commerce, NIRF #3 College), 6. DTU Delhi (Engineering, NIRF #36), 7. IIIT Delhi (CS/IT, NIRF top 50), 8. MDI Gurgaon (MBA, NIRF top 10 B-school), 9. NSUT Delhi (Engineering), 10. Jamia Millia Islamia (Multi-stream, A++ NAAC).",
  },
  {
    question: "Which is the best college in Delhi University (DU)?",
    answer: "The best colleges in Delhi University (DU) for 2026 are: Miranda House (NIRF #1 among colleges, Arts/Science), SRCC (Commerce, best for CA/Finance careers), LSR — Lady Shri Ram College (Arts/Humanities), Hindu College (Science/Arts), Kirori Mal College (Science), Hans Raj College (Science/Commerce). Admission to all DU colleges is through CUET 2026 — higher CUET scores open better colleges.",
  },
  {
    question: "What is the admission process for best colleges in Delhi?",
    answer: "Admission to best colleges in Delhi 2026 depends on the stream: Engineering — JEE Advanced for IIT Delhi, JEE Main + Delhi seat for DTU/NSUT/IIIT Delhi via JAC Delhi. MBA — CAT exam (98+ percentile for FMS Delhi, 99+ for MDI Gurgaon). Medical — NEET UG for AIIMS Delhi (top 50 AIR required) and all Delhi medical colleges. Arts/Commerce/Science — CUET for Delhi University colleges (Miranda House, SRCC, Hindu College). Private colleges have their own admission processes via management quota.",
  },
  {
    question: "What is the fee structure of best colleges in Delhi?",
    answer: "Fees at best Delhi colleges 2026: IIT Delhi ₹2.24L/year (BTech), DTU Delhi ₹1.5L/year, NSUT Delhi ₹1.4L/year, IIIT Delhi ₹3.5L/year. For DU colleges — Miranda House/SRCC ₹20K–₹30K/year (government colleges). FMS Delhi MBA ₹55K total (2 years). AIIMS Delhi MBBS ₹1,628/year (central government). MDI Gurgaon MBA ₹22L total. Government colleges are significantly cheaper than private alternatives.",
  },
  {
    question: "Which stream has the best colleges in Delhi — Engineering, MBA, or Medical?",
    answer: "Delhi has top-tier colleges in all three streams. Engineering: IIT Delhi is India's #2, DTU/NSUT/IIIT Delhi rank in NIRF top 50. MBA: FMS Delhi is India's best MBA value, MDI Gurgaon is top 10 private B-school. Medical: AIIMS Delhi is India's #1 medical college. Delhi is uniquely strong across all streams, unlike cities that specialize in one area (e.g., Bengaluru for engineering). The best stream depends on your career goal and entrance exam strengths.",
  },
]

export default function BestCollegesInDelhiPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Best Colleges in Delhi", url: "/best-colleges-in-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Colleges in Delhi 2026",
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
        breadcrumb={[{ label: "Best Colleges in Delhi", href: "/best-colleges-in-delhi" }]}
        h1="Best Colleges in Delhi 2026"
        subtitle="India's most complete ranking of Delhi's best colleges across all streams — Engineering, MBA, Medical, Arts, Commerce, Law and Science. Compare fees, NAAC grades, placements and admission cutoffs."
        heroStats={[
          { value: "900+", label: "Colleges in Delhi" },
          { value: "₹32 LPA", label: "Best Avg Package" },
          { value: "15+", label: "Top Universities" },
          { value: "NIRF A++", label: "Top NAAC Grade" },
        ]}
        introHeading="Best Colleges in Delhi 2026: Complete Rankings by Stream"
        introParagraphs={[
          "Delhi is India's most diverse higher education hub, home to IIT Delhi (engineering, NIRF #2), AIIMS Delhi (medical, India's #1), FMS Delhi (MBA, India's best value), Miranda House and SRCC (arts and commerce, NIRF #1 and #3 among colleges), and Jamia Millia Islamia, Delhi University, and Guru Gobind Singh Indraprastha University — all within one city. No other city offers this breadth of top-tier institutions across so many disciplines.",
          "The best colleges in Delhi for 2026 are ranked on NIRF 2024 rankings, NAAC grade (A++ being the highest), placement statistics, fee structure, faculty quality, infrastructure, and alumni outcomes. Government and central university colleges offer the best value — IIT Delhi, AIIMS, FMS Delhi, and DU colleges charge a fraction of private college fees while delivering superior outcomes.",
          "For students from outside Delhi, getting into IIT Delhi requires JEE Advanced top 2000 rank. AIIMS Delhi requires NEET UG top 50 AIR. FMS Delhi MBA requires 98+ CAT percentile. DU colleges (Miranda House, SRCC, Hindu College) require high CUET 2026 scores. DTU, NSUT, and IIIT Delhi accept JEE Main scores via JAC Delhi counselling with separate Delhi and outside-Delhi seat categories.",
          "Private colleges in Delhi — Amity University, IP University affiliated institutes, Sharda University (Greater Noida) — offer easier admission but at significantly higher fees (₹1.5L–₹5L/year). The government college vs. private college trade-off in Delhi strongly favors government institutions for most streams given the quality difference and ROI advantage.",
        ]}
        colleges={colleges}
        whyHeading="Why Delhi Has India's Best Colleges Across Every Stream"
        whyPoints={[
          { title: "IIT Delhi — Engineering Excellence", description: "IIT Delhi ranks #2 in India (NIRF 2024) and top-200 globally (QS 2025). With ₹28 LPA average placement and recruiters like Google, Microsoft, McKinsey, and Goldman Sachs, it delivers the best BTech outcomes in North India." },
          { title: "AIIMS Delhi — Best Medical College", description: "AIIMS Delhi has been India's #1 medical college for 10+ consecutive years. With ₹1,628/year MBBS fees and clinical exposure across 60+ specialties, it is every medical aspirant's dream college." },
          { title: "FMS Delhi — MBA Value Champion", description: "FMS Delhi (Faculty of Management Studies, Delhi University) charges just ₹55K for the full MBA program — 400x cheaper than IIM Ahmedabad — while placing 90% of students at ₹32 LPA average. No MBA college anywhere offers better ROI." },
          { title: "NAAC A++ Universities", description: "Delhi has multiple NAAC A++ institutions — IIT Delhi, Jamia Millia Islamia, Delhi University system — the highest grade in India's accreditation system, indicating world-class academic standards and infrastructure." },
          { title: "Corporate Ecosystem & Placements", description: "Delhi NCR hosts 500+ Fortune 500 company offices, 5,000+ startups, and India's largest BFSI and IT corridors (Gurgaon, Noida). This translates into summer internships and final placements that are unmatched outside Mumbai." },
          { title: "All-India Rank Diversity", description: "Unlike IITs (JEE Advanced only) or IIMs (CAT only), Delhi's college ecosystem accepts JEE Main, NEET, CAT, CUET, and state-level exams — giving students from all academic backgrounds a path to quality education in the capital." },
        ]}
        admissionHeading="How to Get Admission in Best Colleges in Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Identify Your Stream & Target Entrance Exam", description: "Engineering → JEE Advanced (IIT Delhi) or JEE Main (DTU/NSUT/IIIT Delhi via JAC Delhi). Medical → NEET UG (AIIMS Delhi, Maulana Azad Medical College). MBA → CAT 2025 (FMS Delhi, MDI Gurgaon). Arts/Commerce → CUET 2026 (all DU colleges including Miranda House, SRCC, Hindu College). Law → CLAT (NLU Delhi) or AILET (NLU Delhi)." },
          { step: "2", title: "Register for CUET / JEE / NEET / CAT 2025–26", description: "JEE Main 2026: January and April sessions (NTA). NEET UG 2026: May 2026 (NTA). CAT 2025: November 2025 (IIMs). CUET UG 2026: May 2026 (NTA) for DU colleges. JAC Delhi counselling happens post JEE Main results for DTU/NSUT/IIIT seats." },
          { step: "3", title: "Check Delhi-Specific Reservation & Seat Categories", description: "DTU, NSUT, IIIT Delhi reserve 85% seats for Delhi domicile students in JAC Delhi counselling. For DU colleges (Miranda House, SRCC), CUET scores are the sole criterion — no domicile reservation. Government of NCT Delhi scheme provides fee reimbursement for students scoring 60%+ in Class 12 from Delhi government schools." },
          { step: "4", title: "Apply Online & Submit Documents", description: "Collect all required documents: Class 10 and 12 mark sheets, category certificate (SC/ST/OBC/EWS), Delhi domicile certificate, passport photos, and Aadhaar. Apply on the official college portals or centralized counselling portals (JAC Delhi, JOSAA for IITs, MCC for AIIMS)." },
          { step: "5", title: "Participate in Counselling & Secure Admission", description: "Participate in seat allotment rounds (JOSAA/JAC/MCC/CSAB). Accept your allotted seat within the deadline, pay the fee, and report for physical verification. Many top Delhi colleges fill seats in round 1 itself — respond quickly." },
        ]}
        faqs={faqs.map(f => ({ q: f.question, a: f.answer }))}
        ctaHeading="Get Expert Guidance for Delhi College Admissions 2026"
        ctaSubtext="Our admission counsellors have helped 5,000+ students get into IIT Delhi, FMS Delhi, AIIMS, DTU, Miranda House, and SRCC. Free counselling on JEE, NEET, CAT, CUET strategy and college selection."
        relatedGuides={[
          { label: "Engineering Colleges in Delhi", href: "/engineering-colleges-delhi", icon: "⚙️" },
          { label: "Best MBA Colleges in Delhi", href: "/best-mba-colleges-delhi", icon: "🏛️" },
          { label: "Medical Colleges in Delhi", href: "/medical-colleges-delhi", icon: "🏥" },
          { label: "Top 10 Colleges in Delhi", href: "/top-colleges-in-delhi", icon: "🏆" },
          { label: "Delhi University Colleges", href: "/du-colleges-list", icon: "📚" },
          { label: "Government Colleges in Delhi", href: "/government-colleges-delhi", icon: "🏛️" },
          { label: "Private Colleges in Delhi", href: "/private-colleges-delhi", icon: "🎓" },
          { label: "College Fees in Delhi", href: "/college-fees-delhi", icon: "💰" },
        ]}
      />
    </>
  )
}
