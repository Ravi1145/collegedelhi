import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Best MBA Colleges in Greater Noida 2026 | Fees, Cutoff & Placements",
  description: "Top MBA colleges in Greater Noida 2026: BIMTECH, Asian Business School, GNIOT, Mangalmay, Sharda, Galgotias, GL Bajaj. CAT/MAT cutoffs, fees ₹1.8L–₹9.5L total, placements ₹5–10 LPA.",
  path: "/mba-colleges-greater-noida",
  keywords: [
    "mba colleges in greater noida",
    "best mba college greater noida 2026",
    "bimtech greater noida admission",
    "mba fees in bimtech greater noida",
    "bimtech greater noida cutoff",
    "pgdm colleges greater noida",
    "mba colleges greater noida ncr",
    "sharda university mba greater noida",
    "galgotias university mba",
    "mba admission greater noida 2026",
    "mba colleges near greater noida delhi",
    "affordable mba greater noida",
    "gniot greater noida mba",
    "asian business school greater noida",
    "mangalmay institute greater noida mba",
    "mba colleges knowledge park greater noida",
    "iilm greater noida mba",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "BIMTECH — Birla Institute of Management Technology", location: "Knowledge Park II, Greater Noida", naac: "A", fees: "₹9.5L total", placement: "₹10 LPA avg", slug: "bimtech-birla-institute-management-technology-noida" },
  { name: "Sharda University — MBA", location: "Knowledge Park III, Greater Noida", naac: "A+", fees: "₹3.2L total", placement: "₹6.5 LPA avg", slug: "sharda-university-greater-noida" },
  { name: "Galgotias University — MBA", location: "Yamuna Expressway, Greater Noida", naac: "A", fees: "₹2.8L total", placement: "₹5.5 LPA avg", slug: "galgotias-university-greater-noida" },
  { name: "Amity University Noida — MBA", location: "Sector 125, Noida (near Greater Noida)", naac: "A+", fees: "₹4.5L total", placement: "₹8 LPA avg", slug: "amity-university-noida-delhi-ncr" },
  { name: "Bennett University — MBA (Times Group)", location: "Greater Noida", naac: "A+", fees: "₹5.5L total", placement: "₹8.5 LPA avg", slug: "bennett-university-greater-noida" },
  { name: "GL Bajaj Group of Institutions — MBA", location: "Knowledge Park III, Greater Noida", naac: "A", fees: "₹2.5L total", placement: "₹5 LPA avg", slug: "gl-bajaj-institute-management-research-greater-noida" },
  { name: "Asian Business School (ABS) — PGDM", location: "Knowledge Park I, Greater Noida", naac: "B++", fees: "₹3.2L total", placement: "₹5.5 LPA avg", slug: "asian-business-school-greater-noida" },
  { name: "GNIOT — Greater Noida Institute of Technology (MBA)", location: "Knowledge Park II, Greater Noida", naac: "B+", fees: "₹2L total", placement: "₹4.5 LPA avg", slug: "gniot-greater-noida-institute-technology" },
  { name: "Mangalmay Institute of Management & Technology — MBA", location: "Greater Noida", naac: "B+", fees: "₹1.8L total", placement: "₹4 LPA avg", slug: "mangalmay-institute-management-technology-greater-noida" },
  { name: "IILM University — MBA (Greater Noida Campus)", location: "Knowledge Park II, Greater Noida", naac: "A", fees: "₹3.5L total", placement: "₹6 LPA avg", slug: "iilm-university-greater-noida" },
]

const faqs = [
  { q: "Which is the best MBA college in Greater Noida?", a: "BIMTECH (Birla Institute of Management Technology) is the best MBA college in Greater Noida — NAAC A, NIRF Top 50, ₹10 LPA average placement, CAT cutoff 75+ percentile. Next tier: IILM University (NAAC A, ₹3.5L fees), Asian Business School/ABS (PGDM, ₹3.2L), and Sharda University (NAAC A+, ₹3.2L). For budget-conscious students, GNIOT MBA (₹2L) and Mangalmay Institute (₹1.8L) offer AICTE-approved programmes with decent local company placements at ₹4–4.5 LPA avg." },
  { q: "What is the CAT cutoff for BIMTECH Greater Noida?", a: "BIMTECH Greater Noida CAT 2026 cutoff: General — 75–80 percentile shortlist, 80+ for strong admit chance. OBC: 70+ percentile. SC/ST: 60+ percentile. BIMTECH also accepts XAT, MAT, CMAT, and ATMA. For other Greater Noida colleges: IILM — CAT 60–70 percentile or MAT 500+. Asian Business School (ABS) — MAT/CMAT, no strict CAT cutoff. GNIOT MBA and Mangalmay — MAT/own test, very accessible." },
  { q: "What are the MBA fees in Greater Noida colleges?", a: "MBA total fees in Greater Noida 2026: BIMTECH PGDM ₹9.5L. Bennett University MBA ₹5.5L. IILM University MBA ₹3.5L. Amity Noida MBA ₹4.5L. Asian Business School (ABS) PGDM ₹3.2L. Sharda University MBA ₹3.2L. GL Bajaj MBA ₹2.5L. Galgotias University MBA ₹2.8L. GNIOT MBA ₹2L. Mangalmay Institute MBA ₹1.8L — the most affordable AICTE-approved MBA in Greater Noida. Education loans available via SBI Scholar Loan and HDFC Credila." },
  { q: "Is Asian Business School (ABS) Greater Noida good for MBA?", a: "Asian Business School (ABS) in Knowledge Park I, Greater Noida offers a 2-year PGDM approved by AICTE. NAAC B++ accredited. Fees: ₹3.2L total. Average placement: ₹5.5 LPA with recruiters including HDFC Bank, Axis Bank, Bajaj Finance, and local retail/FMCG companies. ABS is a good option for students with MAT 400–500 or low CAT scores (below 60 percentile) seeking an affordable PGDM in Greater Noida with decent banking and finance sector placements." },
  { q: "Is MBA from GNIOT or Mangalmay good?", a: "GNIOT (Greater Noida Institute of Technology) MBA and Mangalmay Institute MBA are budget options (₹1.8L–₹2L total fees) for students who cannot access BIMTECH or Sharda due to lower entrance scores. Placements are primarily local — IT support, banking (HDFC, ICICI DSA roles), insurance sales, and retail management at ₹3.5–4.5 LPA. Both are AICTE-approved and affiliated to AKTU (Dr. APJ Abdul Kalam Technical University, Lucknow). Best suited for students targeting local Greater Noida/Noida job markets rather than MNC placements." },
]

export default function MBACollegesGreaterNoidaPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi NCR", url: "/mba-colleges-delhi" },
    { name: "MBA Colleges Greater Noida", url: "/mba-colleges-greater-noida" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best MBA Colleges in Greater Noida 2026",
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
          { label: "MBA Colleges Delhi", href: "/mba-colleges-delhi" },
          { label: "MBA Colleges Greater Noida", href: "/mba-colleges-greater-noida" },
        ]}
        h1="Best MBA Colleges in Greater Noida 2026"
        subtitle="Greater Noida is a major education hub in Delhi NCR with 20+ MBA colleges — from BIMTECH (NIRF Top 50) to Asian Business School, GNIOT, Mangalmay, IILM, GL Bajaj, Sharda, and Galgotias. Fees ₹1.8L–₹9.5L total. Compare CAT/MAT cutoffs and placements for 2026 admission."
        heroStats={[
          { value: "20+", label: "MBA Colleges in Greater Noida" },
          { value: "₹1.8L–₹9.5L", label: "Total Fee Range" },
          { value: "₹10 LPA", label: "BIMTECH Avg Placement" },
          { value: "75+ %ile", label: "CAT Cutoff (BIMTECH)" },
        ]}
        introHeading="MBA Colleges in Greater Noida 2026 — BIMTECH, ABS, GNIOT, Mangalmay & More"
        introParagraphs={[
          "Greater Noida's Knowledge Park corridor — Knowledge Park I, II, and III — is home to 20+ MBA and PGDM colleges covering every budget from ₹1.8L (Mangalmay Institute) to ₹9.5L (BIMTECH). The Aqua Line Metro connecting Noida to Greater Noida, and the Yamuna Expressway giving 45-minute access to Delhi, make Greater Noida one of the most convenient MBA destinations in NCR.",
          "The MBA college landscape in Greater Noida can be divided into three tiers: Tier 1 — BIMTECH (NIRF Top 50, CAT 75+ %ile, ₹10 LPA placement). Tier 2 — IILM University, Asian Business School (ABS), Bennett University, Amity Noida, Sharda University (₹3.2–5.5L fees, ₹5.5–8.5 LPA placement, MAT/lower CAT). Tier 3 — GNIOT MBA, Mangalmay Institute, GL Bajaj (₹1.8–2.5L fees, ₹4–5 LPA placement, AKTU-affiliated, MAT/own test).",
          "Key point for 2026 applicants: BIMTECH is the only Greater Noida MBA college that regularly places students at MNCs (Deloitte, KPMG, Amazon, Tata). Asian Business School (ABS) and IILM are strong second-tier options for banking/finance careers. GNIOT and Mangalmay are best for students targeting local Noida-Greater Noida job markets at ₹3.5–4.5 LPA entry level.",
        ]}
        colleges={colleges}
        whyHeading="Why MBA in Greater Noida?"
        whyPoints={[
          { title: "BIMTECH — India's Top 50 B-School", description: "BIMTECH (Birla Institute of Management Technology) is NAAC A accredited, NIRF-ranked, and offers PGDM in General Management, IB, IBM (Insurance), and Retail Management. Alumni at top firms including McKinsey, Amazon, and ICICI Bank." },
          { title: "Affordable Quality Education", description: "Greater Noida offers top-ranked MBA at ₹2.5L–₹9.5L total — significantly cheaper than Delhi private colleges (₹8–15L) while matching in placement quality. GL Bajaj offers solid placement at just ₹2.5L total." },
          { title: "Yamuna Expressway & Metro Access", description: "Aqua Line Metro connects Noida to Greater Noida with Knowledge Park II station near BIMTECH. Yamuna Expressway provides fast road access to Delhi (45 min) and Agra. Far quieter campus environment than central Delhi." },
          { title: "Tech & Manufacturing Sector Exposure", description: "Greater Noida houses Samsung India HQ, Honda Cars, LG Electronics, and Yamaha India — giving Operations and Supply Chain MBA students unique industry access for projects, internships, and placements." },
          { title: "Diverse Specializations", description: "Greater Noida MBA colleges offer specializations in Finance, Marketing, HR, International Business, Insurance (BIMTECH's unique IB programme), and Retail Management — covering every career aspiration." },
          { title: "Lower Competition for Admission", description: "Compared to FMS Delhi (CAT 99+ %ile) or MDI Gurgaon (CAT 97+ %ile), Greater Noida MBA colleges are accessible at 70–80 percentile CAT while still delivering ₹8–10 LPA average placements." },
        ]}
        admissionHeading="MBA Admission Process for Greater Noida Colleges 2026"
        admissionSteps={[
          { step: "1", title: "Appear for CAT / MAT / CMAT 2025", description: "BIMTECH: Appear for CAT 2025 (November) or XAT 2026 (January). Target 75+ percentile. Sharda, Galgotias, GL Bajaj: MAT (multiple sessions: February, May, September, December) or CMAT 2026. Amity/Bennett: own entrance AUAT. All results needed by January 2026." },
          { step: "2", title: "Apply to Target Colleges", description: "BIMTECH Greater Noida: Apply at bimtech.ac.in (December 2025–February 2026). Application fee: ₹1,500. Bennett University: apply at bennett.edu.in. Sharda University: sharda.ac.in. Most colleges accept applications until February-March 2026." },
          { step: "3", title: "Group Discussion + Personal Interview", description: "BIMTECH conducts GD + PI at multiple centers including Delhi, Mumbai, Chennai. GD topic is typically a current business/management scenario. PI focuses on career goals, industry awareness, and past academics/work experience." },
          { step: "4", title: "Merit List & Offer Letter", description: "BIMTECH final selection considers CAT/XAT score (50%), GD-PI (30%), academic record (10%), work experience (10%). Results declared March 2026. Sharda and Galgotias directly admit on MAT/12th merit with PI." },
          { step: "5", title: "Accept Offer & Report to Campus", description: "Pay admission fee within 15 days of offer. BIMTECH first installment: ₹2.5L. Classes begin July 2026. Greater Noida campuses offer on-campus hostel accommodation at ₹60,000–1.2L/year — significantly cheaper than Delhi PG options." },
        ]}
        faqs={faqs}
        ctaHeading="Get Personalized MBA Admission Guidance for Greater Noida Colleges"
        ctaSubtext="Tell us your CAT/MAT percentile and target salary — our counsellors will shortlist the best Greater Noida MBA colleges matching your budget and career goals."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
          { label: "FMS Delhi — ₹55K MBA", href: "/fms-delhi", icon: "" },
          { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi", icon: "" },
          { label: "MBA in HR Delhi", href: "/mba-in-hr-delhi", icon: "" },
          { label: "MBA Colleges in Noida", href: "/mba-colleges-noida", icon: "" },
          { label: "MBA Colleges in Gurgaon", href: "/mba-colleges-gurgaon", icon: "" },
          { label: "Top 10 MBA Colleges Delhi NCR", href: "/top-10-mba-colleges-in-delhi", icon: "" },
          { label: "PGDM Colleges Delhi NCR", href: "/pgdm-colleges-delhi", icon: "" },
          { label: "Low Fees MBA Colleges Delhi", href: "/low-fees-mba-colleges-delhi", icon: "" },
          { label: "MBA Placement Colleges Delhi", href: "/mba-colleges-delhi-placement", icon: "" },
        ]}
      />
    </>
  )
}
