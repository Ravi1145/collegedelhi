import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Best MBA Colleges in Gurgaon 2026",
  description: "Top MBA colleges in Gurgaon 2026: MDI Gurgaon (₹22.5L), IMT Ghaziabad, Amity, GD Goenka. CAT cutoffs, fees ₹3L–₹22.5L, average placements ₹10–26 LPA.",
  path: "/mba-colleges-gurgaon",
  keywords: [
    "mba colleges in gurgaon",
    "mba colleges in gurugram",
    "best mba college gurgaon 2026",
    "mdi gurgaon mba admission",
    "mdi gurgaon cutoff",
    "mdi gurgaon fees",
    "mdi gurgaon placement",
    "top mba colleges gurgaon ncr",
    "mba gurgaon cat cutoff 2026",
    "mba colleges near gurgaon delhi ncr",
    "pgdm colleges gurgaon",
    "mba fees in mdi gurgaon",
    "mdi gurgaon ranking",
    "executive mba gurgaon",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "MDI Gurgaon — Management Development Institute", location: "MG Road, Gurgaon, Haryana", naac: "A+", fees: "₹22.5L total", placement: "₹26 LPA avg", slug: "mdi-gurgaon-management-development-institute" },
  { name: "IMT Ghaziabad — Institute of Management Technology", location: "Raj Nagar, Ghaziabad (NCR)", naac: "A", fees: "₹17.5L total", placement: "₹14.5 LPA avg", slug: "imt-ghaziabad-institute-management-technology" },
  { name: "Amity Business School — MBA (Noida/NCR)", location: "Sector 125, Noida (Delhi NCR)", naac: "A+", fees: "₹4.5L total", placement: "₹8 LPA avg", slug: "amity-university-noida-delhi-ncr" },
  { name: "GD Goenka University — MBA", location: "Sohna Road, Gurgaon", naac: "B++", fees: "₹3.5L total", placement: "₹6 LPA avg", slug: "gd-goenka-university-gurgaon" },
  { name: "Ansal University — MBA", location: "Sector 55, Gurgaon", naac: "B+", fees: "₹2.8L total", placement: "₹5 LPA avg", slug: "ansal-university-gurgaon" },
  { name: "BIMTECH Greater Noida — MBA/PGDM", location: "Greater Noida, UP (NCR)", naac: "A", fees: "₹9.5L total", placement: "₹10 LPA avg", slug: "bimtech-birla-institute-management-technology-noida" },
]

const faqs = [
  { q: "Which is the best MBA college in Gurgaon?", a: "MDI Gurgaon (Management Development Institute) is the best MBA college in Gurgaon, ranked #9 in India (NIRF 2024). MDI offers PGDM, PGDM-HRM, and PGDM-IB programs with ₹26 LPA average placement and a CAT 97+ percentile cutoff. Recruiters include Amazon, Google, McKinsey, Goldman Sachs, and L'Oreal. Total PGDM fees: ₹22.5L for 2 years." },
  { q: "What is the CAT cutoff for MDI Gurgaon MBA 2026?", a: "MDI Gurgaon CAT 2026 cutoff (estimated): General category — 95–97 percentile for initial shortlist, final admission typically 97+ percentile after GDPI round. OBC-NCL: 90+ percentile. SC/ST: 85+ percentile. MDI Gurgaon also accepts GMAT scores for PGDM-IB (International Business). Applications open in December 2025 after CAT results." },
  { q: "How far are MBA colleges in Gurgaon from Delhi?", a: "MBA colleges in Gurgaon distance from Delhi: MDI Gurgaon is 32 km from Connaught Place Delhi (45 min by metro from Huda City Centre, Gurgaon). GD Goenka University: 48 km from Delhi on NH-8 Sohna Road. Ansal University: 35 km from Delhi. All Gurgaon MBA colleges are well-connected via Delhi Metro Yellow Line to HUDA City Centre station." },
  { q: "What is the total fee for MBA in Gurgaon colleges?", a: "MBA total fees in Gurgaon 2026: MDI Gurgaon — ₹22.5L for 2-year PGDM. BIMTECH Greater Noida — ₹9.5L. Amity Business School Noida — ₹4.5L. GD Goenka University — ₹3.5L. Ansal University — ₹2.8L. Most Gurgaon MBA colleges offer EMI-based fee payment and education loans through partner banks at 8–11% interest rates." },
  { q: "What is MDI Gurgaon PGDM average placement 2024?", a: "MDI Gurgaon PGDM Placement 2024: Average CTC ₹26.14 LPA, Median CTC ₹24 LPA, Highest CTC ₹73 LPA. 100% placement rate. Top recruiters: Amazon (₹37+ LPA), Bain (₹28 LPA), Goldman Sachs (₹30 LPA), McKinsey (₹28 LPA), Nestle, ITC. Finance and Consulting are the top hiring sectors at MDI Gurgaon." },
  { q: "Are MBA colleges in Gurgaon better than Delhi for placement?", a: "MDI Gurgaon (₹26 LPA avg) outperforms most Delhi MBA colleges except FMS Delhi (₹32 LPA avg) and IIM Delhi (₹35+ LPA avg). For industry proximity — Gurgaon is India's largest corporate hub with 250+ Fortune 500 companies having offices, giving MDI students exceptional networking and placement access. For government MBA colleges, Delhi wins with FMS (₹16,000 total fees vs MDI's ₹22.5L)." },
]

export default function MBACollegesGurgaonPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi NCR", url: "/mba-colleges-delhi" },
    { name: "MBA Colleges Gurgaon", url: "/mba-colleges-gurgaon" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best MBA Colleges in Gurgaon 2026",
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
          { label: "MBA Colleges Gurgaon", href: "/mba-colleges-gurgaon" },
        ]}
        h1="Best MBA Colleges in Gurgaon 2026"
        subtitle="Gurgaon (Gurugram) is India's corporate capital — home to MDI Gurgaon, one of India's top 10 MBA colleges. Compare MBA colleges in Gurgaon by CAT cutoff, fees ₹2.8L–₹22.5L total, and average placements ₹6–26 LPA."
        heroStats={[
          { value: "10+", label: "MBA Colleges in Gurgaon NCR" },
          { value: "₹2.8L–₹22.5L", label: "Total Fees" },
          { value: "₹26 LPA", label: "MDI Gurgaon Avg Placement" },
          { value: "97+ %ile", label: "MDI CAT Cutoff" },
        ]}
        introHeading="MBA Colleges in Gurgaon 2026 — CAT Cutoff, Fees & MDI Admission Guide"
        introParagraphs={[
          "Gurgaon (officially Gurugram) is home to MDI Gurgaon, one of India's premier MBA institutions ranked #9 in NIRF 2024. With 250+ Fortune 500 companies having headquarters or regional offices in Gurgaon's Cyber City, Udyog Vihar, and DLF Cyber Hub, MBA graduates from Gurgaon colleges have unmatched access to corporate placements, internships, and networking events.",
          "MBA admission in Gurgaon is primarily through CAT (Common Admission Test) for MDI Gurgaon and BIMTECH, and through MAT/CMAT for other colleges. MDI Gurgaon requires 95–97+ percentile in CAT, making it the most competitive MBA college in Gurgaon. IMT Ghaziabad (10 km from Gurgaon on the NH-58 corridor) is another top choice with ₹17.5L fees and ₹14.5 LPA average.",
          "Choosing an MBA college in Gurgaon depends on your CAT percentile, target sector (Finance/Consulting vs Marketing/Operations), and budget. MDI Gurgaon is ideal for Finance and Consulting aspirants (Goldman Sachs, McKinsey, Bain are top recruiters). GD Goenka and Ansal University offer MBA at under ₹4L with good corporate exposure given Gurgaon's industry environment.",
        ]}
        colleges={colleges}
        whyHeading="Why MBA in Gurgaon?"
        whyPoints={[
          { title: "India's Corporate Capital", description: "Gurgaon hosts 250+ Fortune 500 companies including Google, Microsoft, Amazon, HSBC, and Deloitte. No other city in India offers this density of corporate headquarters within 5 km of MBA college campuses." },
          { title: "MDI Gurgaon — Top 10 Nationally", description: "MDI Gurgaon (NIRF #9, NAAC A+) is the only B-school outside IIM network to consistently feature in national top 10. Alumni network includes CFOs, CEOs and partners at top consulting firms globally." },
          { title: "Metro Connectivity", description: "Gurgaon is directly connected to Delhi via Yellow Line metro (from HUDA City Centre). Students can attend corporate events, networking sessions, and guest lectures across Delhi NCR easily." },
          { title: "Finance & Consulting Hub", description: "Gurgaon hosts KPMG, EY, Deloitte India HQ, Goldman Sachs operations, and 40+ hedge funds. For MBA students targeting Finance and Consulting, Gurgaon provides live case studies and part-time project opportunities." },
          { title: "Startup Ecosystem", description: "Beyond corporates, Gurgaon's Sector 29 and DLF Cyber City host 200+ funded startups including Zomato, PolicyBazaar, OYO and IndiaMart HQs — giving entrepreneurship-track MBA students real-world exposure." },
          { title: "Diverse MBA Options", description: "Gurgaon offers MBA, PGDM, and Executive MBA options across budget ranges — from MDI's flagship PGDM (₹22.5L) to GD Goenka's affordable MBA (₹3.5L) — covering every career goal and financial bracket." },
        ]}
        admissionHeading="MBA Admission Process for Gurgaon Colleges 2026"
        admissionSteps={[
          { step: "1", title: "Appear for CAT 2025 / GMAT / MAT", description: "MDI Gurgaon: Appear for CAT 2025 (November 2025). Target 95+ percentile. MDI also accepts GMAT for PGDM-IB. BIMTECH: CAT / MAT / XAT. GD Goenka & Ansal: MAT / CMAT. Register for CAT at iimcat.ac.in. CAT results declared in January 2026." },
          { step: "2", title: "Apply to MDI Gurgaon / Target Colleges", description: "MDI Gurgaon applications open December 2025 at mdi.ac.in. Application fee: ₹2,000. Fill academic, work experience, and essay sections. For IMT Ghaziabad: apply at imt.edu. Early application recommended — December-January window." },
          { step: "3", title: "Shortlisting & WAT-PI Call", description: "MDI Gurgaon shortlists candidates above 95 percentile (CAT) for WAT (Written Ability Test) + Personal Interview rounds held February-March 2026 on campus. Work experience (15–30 months) significantly improves shortlisting chances at MDI." },
          { step: "4", title: "WAT-PI & Final Selection", description: "MDI Gurgaon WAT-PI conducted on campus in Gurgaon. PI panel focuses on current affairs, career goals, and past work experience. Final merit list considers CAT score (50%), WAT-PI (35%), academics (10%), diversity (5%)." },
          { step: "5", title: "Accept Offer & Pay Fees", description: "MDI Gurgaon final results declared April 2026. Accept offer within 10 days. First semester fees: ₹5.6L due at admission. Total PGDM fees: ₹22.5L (education loans available via HDFC Credila, Avanse at 10–12% p.a.)." },
        ]}
        faqs={faqs}
        ctaHeading="Get Personalized MBA Admission Guidance for Gurgaon Colleges"
        ctaSubtext="Tell us your CAT percentile and target sector — our counsellors will shortlist Gurgaon MBA colleges matching your profile and help you prepare for MDI Gurgaon WAT-PI."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
          { label: "FMS Delhi — ₹55K MBA", href: "/fms-delhi", icon: "" },
          { label: "IIFT Delhi — MBA IB", href: "/iift-delhi", icon: "" },
          { label: "MDI Gurgaon — PGDM", href: "/mdi-gurgaon", icon: "" },
          { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi", icon: "" },
          { label: "MBA in HR Delhi", href: "/mba-in-hr-delhi", icon: "" },
          { label: "Executive MBA Delhi", href: "/executive-mba-delhi", icon: "" },
          { label: "FMS Delhi vs MDI Gurgaon", href: "/fms-delhi-vs-mdi-gurgaon", icon: "" },
          { label: "Top 10 MBA Colleges Delhi NCR", href: "/top-10-mba-colleges-in-delhi", icon: "" },
          { label: "MBA Colleges Noida", href: "/mba-colleges-noida", icon: "" },
          { label: "MBA Colleges Greater Noida", href: "/mba-colleges-greater-noida", icon: "" },
          { label: "PGDM Colleges Delhi NCR", href: "/pgdm-colleges-delhi", icon: "" },
        ]}
      />
    </>
  )
}
