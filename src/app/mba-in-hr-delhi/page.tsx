import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Best MBA in HR Colleges in Delhi 2026",
  description: "Top MBA HR colleges in Delhi 2026: MDI Gurgaon PGDM-HRM, FMS Delhi, XLRI (Delhi campus), IMI Delhi. CAT cutoffs, fees ₹55K–₹21L, HR placements ₹8–22 LPA.",
  path: "/mba-in-hr-delhi",
  keywords: [
    "mba in hr colleges in delhi",
    "best mba in hr in delhi",
    "top mba hr colleges delhi",
    "mba human resource management delhi",
    "mba hr admission delhi 2026",
    "mdi gurgaon pgdm hrm",
    "xlri delhi mba hr",
    "mba hr salary delhi",
    "mba in human resource management colleges in delhi",
    "best college for mba hr in delhi ncr",
    "mba hr vs mba finance delhi",
    "mba hr placement delhi 2026",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "MDI Gurgaon — PGDM-HRM (Human Resource Management)", location: "MG Road, Gurgaon, Haryana", naac: "A+", fees: "₹21L total", placement: "₹20 LPA avg", slug: "mdi-gurgaon-management-development-institute" },
  { name: "FMS Delhi — MBA (HR Elective Track)", location: "University Enclave, North Delhi", naac: "A++", fees: "₹55K total", placement: "₹32 LPA avg (all tracks)", slug: "fms-delhi-faculty-management-studies" },
  { name: "IMI Delhi — PGDM (HR Specialization)", location: "Qutab Institutional Area, Delhi", naac: "A+", fees: "₹19.5L total", placement: "₹14 LPA avg", slug: "imi-delhi-international-management-institute" },
  { name: "LBSIM Delhi — PGDM (HR)", location: "Rohini, North Delhi", naac: "A", fees: "₹12.5L total", placement: "₹10.5 LPA avg", slug: "lbsim-lal-bahadur-shastri-institute-management" },
  { name: "BIMTECH Greater Noida — PGDM (HR)", location: "Knowledge Park, Greater Noida", naac: "A", fees: "₹9.5L total", placement: "₹10 LPA avg", slug: "bimtech-birla-institute-management-technology-noida" },
  { name: "Amity University Noida — MBA HR", location: "Sector 125, Noida (Delhi NCR)", naac: "A+", fees: "₹4.5L total", placement: "₹7 LPA avg", slug: "amity-university-noida-delhi-ncr" },
]

const faqs = [
  { q: "Which is the best college for MBA HR in Delhi?", a: "MDI Gurgaon PGDM-HRM is the best dedicated MBA in Human Resource Management in Delhi NCR — NIRF #9, NAAC A+, ₹20 LPA average placement with top HR recruiters including Hindustan Unilever, Deloitte, Accenture, and Amazon. FMS Delhi is the best overall MBA with excellent HR elective track at just ₹55K total fees. For dedicated HR programmes with accessible CAT cutoff: LBSIM Delhi (70–75 percentile) and BIMTECH Greater Noida (75+ percentile) are strong options." },
  { q: "What is the CAT cutoff for MBA HR in Delhi 2026?", a: "CAT 2026 cutoffs for MBA HR colleges in Delhi NCR: MDI Gurgaon PGDM-HRM — 92–95 percentile shortlist, 95+ final admission. FMS Delhi — 99+ percentile (all tracks combined). IMI Delhi — 85–90 percentile. LBSIM Delhi — 70–75 percentile. BIMTECH Greater Noida — 72–78 percentile. Amity Noida — own AUAT entrance (no CAT required). MDI PGDM-HRM has slightly lower CAT cutoff than MDI flagship PGDM." },
  { q: "What is the salary after MBA HR from Delhi colleges?", a: "Average salary after MBA HR from Delhi colleges 2024: MDI Gurgaon PGDM-HRM ₹20 LPA avg, IMI Delhi HR ₹12 LPA, LBSIM Delhi HR ₹9.5 LPA, BIMTECH HR ₹9 LPA. Top HR roles: HR Business Partner (MNC/Tech) ₹12–22 LPA, Talent Acquisition Manager ₹8–15 LPA, L&D Manager ₹10–18 LPA, CHRO track (10 years post MBA) ₹40–80 LPA. Tech companies (Google, Amazon, Microsoft) and FMCG (HUL, P&G) offer highest HR packages." },
  { q: "Is MBA HR better than MBA Finance or Marketing?", a: "MBA HR vs Finance/Marketing: HR offers stable, people-focused roles with ₹8–22 LPA range at mid-career. Finance peaks higher (₹25–50 LPA in IB) but is more volatile. Marketing is broader (any stream eligible) at ₹8–28 LPA. Choose HR if you want to work with people strategy, talent, and organizational culture — not financial models or brand campaigns. HR is the best MBA track for those targeting MNC Chief People Officer or HRBP roles. At MDI Gurgaon, PGDM-HRM is equally prestigious as the flagship PGDM." },
  { q: "What HR jobs can I get after MBA from Delhi?", a: "HR career options after MBA from Delhi 2026: HR Business Partner (Google, Amazon, Microsoft) ₹14–22 LPA. Talent Acquisition Manager (RPO firms, tech) ₹8–15 LPA. Learning & Development Manager (Deloitte, Accenture) ₹10–18 LPA. Compensation & Benefits Analyst (FMCG, pharma) ₹8–12 LPA. HR Consulting (KPMG, Mercer, AON) ₹10–18 LPA. Organizational Development Specialist ₹10–15 LPA. MDI Gurgaon PGDM-HRM alumni consistently place in senior HR roles at Fortune 500 companies within 5 years." },
]

export default function MBAHRDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "MBA in HR Delhi", url: "/mba-in-hr-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best MBA HR Colleges in Delhi 2026",
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
          { label: "MBA Colleges Delhi", href: "/mba-colleges-delhi" },
          { label: "MBA in HR Delhi", href: "/mba-in-hr-delhi" },
        ]}
        h1="Best MBA in HR Colleges in Delhi 2026"
        subtitle="MBA Human Resource Management is a people-strategy specialization covering Talent Acquisition, L&D, HRBP, and Organizational Development. MDI Gurgaon's PGDM-HRM is India's top dedicated HR MBA. Compare HR MBA colleges in Delhi NCR — CAT cutoffs, fees ₹55K–₹21L, placements ₹7–20 LPA."
        heroStats={[
          { value: "15+", label: "MBA HR Colleges Delhi NCR" },
          { value: "₹55K–₹21L", label: "Total Fees" },
          { value: "₹20 LPA", label: "MDI HRM Avg Placement" },
          { value: "92+ %ile", label: "MDI HRM CAT Cutoff" },
        ]}
        introHeading="MBA HR Colleges in Delhi 2026 — MDI PGDM-HRM & Admission Guide"
        introParagraphs={[
          "MBA in Human Resource Management (HRM) equips students for people-strategy roles — HR Business Partner, Talent Acquisition, Learning & Development, Compensation & Benefits, and Organizational Development. Delhi NCR is an ideal location for HR MBA students, with Google India, Amazon, Microsoft, Deloitte, Accenture, and HUL all having major HR teams within the NCR catchment.",
          "The best MBA HR college in Delhi NCR is MDI Gurgaon's PGDM-HRM — a dedicated 2-year programme with 60 seats, ₹21L total fees, and ₹20 LPA average placement. Unlike general MBA programmes where HR is one of many tracks, MDI PGDM-HRM is fully focused on people-management curriculum including Organizational Behaviour, Strategic HRM, Labour Law, and HR Analytics. CAT cutoff: 92–95 percentile.",
          "For students targeting HR with a lower CAT score, LBSIM Delhi (70–75 percentile, ₹12.5L) and BIMTECH Greater Noida (72–78 percentile, ₹9.5L) offer strong HR PGDM programmes. FMS Delhi (₹55K total, CAT 99+ %ile) is the best overall MBA in Delhi where choosing HR electives in Year 2 still delivers ₹32 LPA average placement.",
        ]}
        colleges={colleges}
        whyHeading="Why MBA HR in Delhi?"
        whyPoints={[
          { title: "MDI PGDM-HRM — India's Top HR Programme", description: "MDI Gurgaon's PGDM-HRM is consistently ranked India's #1 dedicated HR programme. Alumni include CHROs at HUL, Tata Steel, and Infosys. Unique HR curriculum: Strategic HRM, HR Analytics, Organizational Development, Labour Law, and International HRM." },
          { title: "MNC HR Hub", description: "Delhi NCR hosts India offices of Google, Microsoft, Amazon, Accenture, Deloitte, EY, and 100+ MNCs — all with large HR teams. MBA HR graduates from Delhi colleges get direct access to HR BP, TA Manager, and L&D roles at these organizations." },
          { title: "Any Stream Eligible", description: "Unlike Finance or Operations, MBA HR is accessible to students from Engineering, Science, Commerce, Humanities, and Arts backgrounds. Strong communication, empathy, and analytical thinking are the core competencies — not technical domain knowledge." },
          { title: "Growing HR Technology Sector", description: "People Analytics, HRIS (Workday, SAP SuccessFactors), AI in Recruitment, and HR Tech startups are creating new HR roles at ₹12–22 LPA. Delhi MBA HR graduates are entering Product HR, Data-driven TA, and People Analytics roles at tech firms." },
          { title: "SHRM & HRCI Certification", description: "FMS Delhi and MDI Gurgaon MBA HR students regularly pursue SHRM-CP and HRCI PHR certifications alongside their MBA — creating the most competitive HR professional profile for global MNC roles at ₹18–25 LPA." },
          { title: "Stable, Purpose-Driven Career", description: "HR careers are more recession-resilient than Finance or Marketing roles. Senior HR (CHRO, VP-HR) positions at MNCs command ₹50–80 LPA after 10–15 years. MBA HR from MDI or FMS gives a fast track to these leadership roles." },
        ]}
        admissionHeading="MBA HR Admission Process in Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Appear for CAT 2025 / XAT / GMAT", description: "MDI PGDM-HRM: CAT 2025 (November) or GMAT 650+. FMS Delhi: CAT 99+ percentile. IMI Delhi: CAT/XAT 85+ percentile. LBSIM, BIMTECH: CAT 70–78 percentile. For HR programmes specifically: XAT (Xavier Aptitude Test, January 2026) is important — XLRI conducts India's top HR programme and XAT score opens multiple HR MBA doors." },
          { step: "2", title: "Apply to Target HR MBA Colleges", description: "MDI Gurgaon PGDM-HRM: mdi.ac.in (December 2025). FMS Delhi: admission.uod.ac.in (January 2026). IMI Delhi: imi.edu (December 2025–February 2026). LBSIM Delhi: lbsim.ac.in. Clearly select HR/HRM as your preferred specialization in the application form where applicable." },
          { step: "3", title: "GD/WAT + HR-Focused PI", description: "For HR MBA programmes, interviews specifically test: empathy and people orientation, conflict resolution scenarios, understanding of labour law basics, HR metrics (attrition rate, cost per hire), and organisational culture awareness. MDI PGDM-HRM PI often includes roleplay scenarios about employee management." },
          { step: "4", title: "Choose HR Specialization / Electives", description: "At FMS Delhi and IMI Delhi, HR specialization is chosen in Year 2 Semester 3. Core HR electives: Strategic HRM, Talent Management, Compensation & Benefits, HR Analytics, Labour Laws, OD & Change Management. HR thesis projects typically involve partnering with a company's HR team for live data analysis." },
          { step: "5", title: "Summer Internship in HR Role", description: "MBA HR Summer Internship (SIP) is crucial — target Deloitte HR Consulting, Aon Hewitt, Mercer (HR Consulting), or HR BP roles at Google/Amazon/Microsoft. MDI PGDM-HRM Day 0 placements: Hindustan Unilever and Deloitte Consulting are top HR hirers. Prepare for SIP with HR case studies and HR metrics frameworks." },
        ]}
        faqs={faqs}
        ctaHeading="Get Personalized MBA HR Admission Guidance for Delhi"
        ctaSubtext="Tell us your CAT percentile and target HR role (HRBP / Consulting / TA) — our counsellors will shortlist the best MBA HR colleges in Delhi NCR for your profile."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
          { label: "FMS Delhi — ₹55K MBA", href: "/fms-delhi", icon: "" },
          { label: "MDI Gurgaon — PGDM-HRM", href: "/mdi-gurgaon", icon: "" },
          { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi", icon: "" },
          { label: "MBA in Marketing Delhi", href: "/mba-in-marketing-delhi", icon: "" },
          { label: "MBA in Operations Delhi", href: "/mba-in-operations-delhi", icon: "" },
          { label: "Executive MBA Delhi", href: "/executive-mba-delhi", icon: "" },
          { label: "Government MBA Colleges Delhi", href: "/government-mba-colleges-delhi", icon: "" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "" },
          { label: "MBA Colleges Gurgaon", href: "/mba-colleges-gurgaon", icon: "" },
        ]}
      />
    </>
  )
}
