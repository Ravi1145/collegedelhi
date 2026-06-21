import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "IMT Ghaziabad MBA 2026 | Fees, Cutoff, Placement & Admission",
  description: "IMT Ghaziabad PGDM 2026: CAT/XAT cutoff 80-85 percentile, total fees ₹17.6L, average placement ₹12.5 LPA, top package ₹35 LPA. Admission process, ranking & review.",
  path: "/imt-ghaziabad",
  keywords: [
    "imt ghaziabad admission",
    "imt ghaziabad cutoff",
    "imt ghaziabad fees",
    "imt ghaziabad placement",
    "imt ghaziabad pgdm",
    "imt ghaziabad mba",
    "imt ghaziabad review",
    "imt ghaziabad ranking",
    "imt ghaziabad cat cutoff",
    "imt ghaziabad mba fees",
    "imt ghaziabad placement 2024",
    "imt ghaziabad placement 2025",
    "imt ghaziabad vs fore delhi",
    "imt ghaziabad delhi ncr",
    "pgdm imt ghaziabad",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "IMT Ghaziabad — PGDM (2-year Flagship)", location: "Plot No. 20, Knowledge Park II, Ghaziabad, UP", naac: "A+", fees: "₹17.6L total", placement: "₹12.5 LPA avg", slug: "imt-ghaziabad-institute-management-technology" },
  { name: "IMT Ghaziabad — PGDM (Executive)", location: "Plot No. 20, Knowledge Park II, Ghaziabad", naac: "A+", fees: "₹14.5L total", placement: "₹18 LPA avg", slug: "imt-ghaziabad-pgdm-executive" },
  { name: "IMT Ghaziabad — PGDM (Part-time)", location: "Plot No. 20, Knowledge Park II, Ghaziabad", naac: "A+", fees: "₹7.5L total", placement: "₹10 LPA avg", slug: "imt-ghaziabad-pgdm-part-time" },
  { name: "IMT Nagpur — PGDM (IMT Group)", location: "Nagpur, Maharashtra", naac: "A", fees: "₹12.5L total", placement: "₹8.5 LPA avg", slug: "imt-nagpur-institute-management-technology" },
  { name: "IMT Hyderabad — PGDM (IMT Group)", location: "Hyderabad, Telangana", naac: "A", fees: "₹13.5L total", placement: "₹9 LPA avg", slug: "imt-hyderabad-institute-management-technology" },
  { name: "IMT Dubai — MBA (International, IMT Group)", location: "Dubai, UAE", naac: "N/A", fees: "AED 89,000 total", placement: "AED 8,000/month avg", slug: "imt-dubai-international" },
]

const faqs = [
  { q: "What is the CAT cutoff for IMT Ghaziabad 2026?", a: "IMT Ghaziabad CAT cutoff 2026 (expected): Overall 80–85 percentile. Section-wise: Verbal 75+ %ile, DILR 75+ %ile, Quant 75+ %ile. Additionally accepts XAT (75+ %ile), GMAT (600+), and NMAT (215+). IMT Ghaziabad shortlists based on profile: CAT score 40% + academic record 20% + work experience 20% + diversity factors 20%. Engineers from non-metro cities with 80+ %ile have been shortlisted — holistic process, not just cutoff-based." },
  { q: "What are the fees at IMT Ghaziabad PGDM 2026?", a: "IMT Ghaziabad PGDM 2026 total fees: ₹17,60,000 (₹17.6L) for 2-year flagship PGDM. Semester-wise: ₹4,40,000 per semester × 4. Includes tuition, library, tech, and exam fees. Hostel: ₹1.2–1.8L per year additional. Total cost of programme: ₹20–21L with living. Scholarship: merit scholarships up to 25% fee waiver available for top CAT/XAT scorers. Loan: IMT has tie-ups with SBI, HDFC Credila, Avanse for education loans without collateral up to ₹20L." },
  { q: "What is the placement record of IMT Ghaziabad?", a: "IMT Ghaziabad placement 2024–25: Average package ₹12.5 LPA. Median package ₹11 LPA. Top package ₹35 LPA. 100% placement in 2024. Top recruiters: Deloitte, EY, KPMG, BCG (project-based), Accenture, Amazon, Flipkart, HUL, ITC, HDFC Bank, Axis Bank, Goldman Sachs (ops). Finance sector avg: ₹14 LPA. Marketing sector avg: ₹11 LPA. Consulting avg: ₹15 LPA. IMT Ghaziabad is a strong recruiting ground for Big 4 consulting and FMCG sector." },
  { q: "Is IMT Ghaziabad better than FORE School of Management?", a: "IMT Ghaziabad vs FORE Delhi: IMT Ghaziabad wins on brand (older, more recognized), placement (₹12.5 LPA vs ₹12 LPA avg), and alumni network (40,000+ alumni). FORE wins on location (Delhi vs Ghaziabad) and slightly lower CAT cutoff (80-82 vs 82-85 %ile). Both are AICTE-approved, NAAC A+ and offer PGDM. For Finance and consulting: IMT Ghaziabad edge. For Delhi location preference: FORE edge. Both are strong Tier 2 B-schools." },
  { q: "How is campus life at IMT Ghaziabad?", a: "IMT Ghaziabad campus is a fully residential 43-acre campus in Ghaziabad (45 min from Delhi). 100% on-campus hostel accommodation — 6 hostels for 1,500+ students. Bloomberg terminal lab, case method teaching, 60+ student clubs. Annual fest: Udbhav (cultural) and Acumen (business fest). Key clubs: Finance Club (Bloomberg), Marketing Club (brand projects), Consulting Club (case prep). Proximity to Delhi: Anand Vihar metro 15 km, easy weekend Delhi access. Strong alumni return for guest lectures." },
]

export default function IMTGhaziabadPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "IMT Ghaziabad", url: "/imt-ghaziabad" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "IMT Group PGDM Programmes 2026",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <SEOLandingPage
        breadcrumb={[
          { label: "MBA Colleges Delhi NCR", href: "/mba-colleges-delhi" },
          { label: "IMT Ghaziabad", href: "/imt-ghaziabad" },
        ]}
        h1="IMT Ghaziabad PGDM 2026 — Fees, Cutoff, Placement & Admission"
        subtitle="IMT Ghaziabad (Institute of Management Technology) is one of India's top-15 B-schools — NAAC A+, NIRF ranked, CAT 80–85 percentile, ₹17.6L total fees, ₹12.5 LPA average placement. Located in Ghaziabad (Delhi NCR), 45 minutes from central Delhi."
        heroStats={[
          { value: "NIRF #14", label: "Management Ranking 2024" },
          { value: "₹17.6L", label: "Total PGDM Fees" },
          { value: "₹12.5 LPA", label: "Average Placement 2025" },
          { value: "80–85 %ile", label: "CAT Cutoff" },
        ]}
        introHeading="IMT Ghaziabad 2026 — PGDM Admission, Fees & Placement Guide"
        introParagraphs={[
          "IMT Ghaziabad (Institute of Management Technology) was established in 1980 and is one of India's oldest and most recognized B-schools. NAAC A+ accredited, AICTE-approved, and NIRF #14 in management (2024), IMT Ghaziabad offers a 2-year PGDM programme accepted by the CAT, XAT, and GMAT scores. The flagship PGDM has 360 seats and covers specializations in Finance, Marketing, HR, and Operations.",
          "IMT Ghaziabad's strength is its Big 4 consulting and FMCG placement track — Deloitte, EY, KPMG, Accenture, HUL, and ITC are consistent recruiters. Average package 2025: ₹12.5 LPA, top package ₹35 LPA. The campus is fully residential with Bloomberg terminal access, case method teaching, and a 40,000+ alumni network across India and globally. CAT cutoff 80–85 percentile — accessible for strong candidates who miss FMS or MDI cutoffs.",
          "IMT Ghaziabad vs Delhi colleges: compared to Delhi-based FORE (₹16.5L, ₹12 LPA avg) and LBSIM (₹12.5L, ₹10.5 LPA avg), IMT Ghaziabad offers a slightly better placement record and brand recognition but requires commuting from Ghaziabad. For candidates choosing between IMT Ghaziabad and Delhi's Tier 2 B-schools, IMT Ghaziabad's PGDM is the stronger programme by NIRF ranking, placement, and recruiter brand.",
        ]}
        colleges={colleges}
        whyHeading="Why Choose IMT Ghaziabad for PGDM 2026?"
        whyPoints={[
          { title: "Big 4 & FMCG Placement Track", description: "Deloitte, EY, KPMG, Accenture, HUL, ITC, Nestle, and Marico are regular Day 1–2 recruiters at IMT Ghaziabad. Consulting and FMCG are the highest-paying sectors at IMT — ₹14–22 LPA. Goldman Sachs Operations and Deutsche Bank also recruit for analytics roles." },
          { title: "Bloomberg Terminal Lab", description: "IMT Ghaziabad has one of the best Bloomberg terminal labs among Indian B-schools — 20+ terminals with full Bloomberg Professional access. Finance students use Bloomberg daily for equity research, portfolio management, and fixed income courses. CFA Level 1 prep is integrated into the Finance curriculum." },
          { title: "Fully Residential Campus", description: "43-acre campus with 6 hostels — 100% residential. All students live on campus, building a tight-knit cohort. Case method teaching is heavily used (HBS-style). 60+ student committees and clubs. Annual business festival Acumen attracts companies for B-plan competitions." },
          { title: "Holistic Admission Process", description: "IMT Ghaziabad's shortlisting is holistic — CAT score + academic record + work experience + diversity. Candidates with 80+ percentile but strong profiles (non-engineering, women, rural backgrounds) are shortlisted over 90+ percentile candidates with weak profiles. GD-PI is a 2-stage process: Written Ability Test + Personal Interview." },
          { title: "International Exchange Programme", description: "IMT Ghaziabad has exchange agreements with 50+ international universities — ESCP Europe, Rennes School of Business, University of Groningen, Bocconi University. 20% of students participate in exchange semesters. IMT Dubai (same group) allows lateral mobility for international business track students." },
          { title: "Strong Alumni Network", description: "40,000+ IMT Ghaziabad alumni across 100+ countries. Alumni in senior positions at McKinsey, Goldman Sachs, Unilever, Google, and major Indian conglomerates. Alumni mentorship programme connects current students with industry leaders for guidance and referrals during placement season." },
        ]}
        admissionHeading="IMT Ghaziabad PGDM Admission Process 2026"
        admissionSteps={[
          { step: "1", title: "Write CAT 2025 / XAT / GMAT", description: "IMT Ghaziabad accepts CAT 2025 (November), XAT 2026 (January), GMAT (600+), and NMAT (215+). Target: CAT 80–85+ percentile overall with balanced sectionals. XAT decision-making section is important if applying via XAT route. Apply at imt.edu (December 2025–January 2026). Application fee: ₹2,000." },
          { step: "2", title: "Shortlisting & Written Ability Test", description: "IMT Ghaziabad releases shortlist in January–February 2026. Shortlist criteria: CAT score 40% weightage + 10th/12th/graduation marks 20% + work experience 20% + gender/academic diversity 20%. Shortlisted candidates appear for WAT (Written Ability Test, 30 min, 300-word essay on current affairs/business topic) followed by Personal Interview (20–30 min)." },
          { step: "3", title: "Personal Interview", description: "IMT Ghaziabad PI is structured — 2 panelists, 20–30 minutes. Topics: past academic background, work experience projects, current affairs, and subject matter (Finance/Marketing depending on specialization choice). Freshers: expect questions on graduation projects and why MBA. Experienced: detailed questions on role, industry, and career goals. Prepare 3–4 STAR (Situation-Task-Action-Result) work stories." },
          { step: "4", title: "Merit List & Offer Letter", description: "Final selection at IMT Ghaziabad: CAT score 40% + WAT 10% + PI 40% + profile 10%. Merit list released March 2026. Waiting list maintained — conversion rates 60–70% for waitlist. Accept offer within 7 days with ₹1,50,000 seat acceptance fee (adjusted against first semester). Specialization selection is done in Semester 3 based on CGPA and specialization GD." },
          { step: "5", title: "Join Campus & Orientation", description: "IMT Ghaziabad 2026 batch starts June 2026. 7-day pre-induction orientation covers campus tour, committee introduction, and industry immersion. Hostel allotment on first-come basis (single/double occupancy). All students receive HP/Dell laptops at discounted rates through college tie-up. First-year finance core covers Accounting, Economics, Statistics, and OB — no prior finance knowledge required." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free IMT Ghaziabad Admission Guidance 2026"
        ctaSubtext="Tell us your CAT score, graduation marks, and work experience — our counsellors will assess your IMT Ghaziabad shortlist probability and help you prepare for WAT-PI."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
          { label: "FORE School of Management Delhi", href: "/fore-school-management-delhi", icon: "" },
          { label: "FMS Delhi — ₹55K MBA", href: "/fms-delhi", icon: "" },
          { label: "MDI Gurgaon — PGDM", href: "/mdi-gurgaon", icon: "" },
          { label: "PGDM Colleges Delhi", href: "/pgdm-colleges-delhi", icon: "" },
          { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi", icon: "" },
          { label: "MBA in Operations Delhi", href: "/mba-in-operations-delhi", icon: "" },
          { label: "MBA Colleges Greater Noida", href: "/mba-colleges-greater-noida", icon: "" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "" },
          { label: "MBA Colleges Delhi Placement", href: "/mba-colleges-delhi-placement", icon: "" },
        ]}
      />
    </>
  )
}
