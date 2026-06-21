import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "FORE School of Management Delhi 2026 | PGDM Fees, Cutoff & Placement",
  description: "FORE School of Management Delhi PGDM 2026: CAT cutoff 80-85 percentile, total fees ₹16.5L, average placement ₹12 LPA. Admission process, ranking, review & comparison.",
  path: "/fore-school-management-delhi",
  keywords: [
    "fore school of management delhi admission",
    "fore school of management delhi cutoff",
    "fore school of management fees",
    "fore school of management placement",
    "fore school of management review",
    "fore school pgdm delhi",
    "fore school of management ranking",
    "fore delhi mba",
    "fore school of management pgdm fees",
    "fore school of management cat cutoff",
    "fore school placement 2024",
    "fore school placement 2025",
    "fore school of management delhi ncr",
    "fore delhi vs lbsim",
    "pgdm fore delhi",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "FORE School of Management — PGDM (2-Year Flagship)", location: "B-18, Qutab Institutional Area, New Delhi", naac: "A+", fees: "₹16.5L total", placement: "₹12 LPA avg", slug: "fore-school-of-management-delhi" },
  { name: "FORE School of Management — PGDM (International Business)", location: "B-18, Qutab Institutional Area, New Delhi", naac: "A+", fees: "₹16.5L total", placement: "₹12.5 LPA avg", slug: "fore-school-of-management-pgdm-ib-delhi" },
  { name: "FORE School of Management — PGDM (Big Data Analytics)", location: "B-18, Qutab Institutional Area, New Delhi", naac: "A+", fees: "₹16.5L total", placement: "₹13 LPA avg", slug: "fore-school-of-management-pgdm-bda-delhi" },
  { name: "FORE School of Management — PGDM (Financial Management)", location: "B-18, Qutab Institutional Area, New Delhi", naac: "A+", fees: "₹16.5L total", placement: "₹13.5 LPA avg", slug: "fore-school-of-management-pgdm-fm-delhi" },
]

const faqs = [
  { q: "What is the CAT cutoff for FORE School of Management 2026?", a: "FORE School of Management CAT cutoff 2026 (expected): Overall 80–85 percentile. Section-wise: Verbal Ability 75+ %ile, Quantitative Aptitude 75+ %ile, DILR 75+ %ile. FORE also accepts XAT (75+ %ile), GMAT (600+), and CMAT (90+ %ile). FORE shortlisting is holistic — work experience, academic diversity, and gender balance matter. Female candidates and non-engineers with 78–80 percentile have been shortlisted. FORE is one of the few B-schools in Delhi that explicitly values academic diversity in shortlisting." },
  { q: "What are the FORE School of Management fees 2026?", a: "FORE School of Management total PGDM fees 2026: ₹16,50,000 (₹16.5L) for all 4 PGDM programmes. Semester-wise: ₹4,12,500 per semester × 4. Includes tuition, IT, library, placement. Hostel: ₹1.5–2L per year additional (FORE has limited on-campus hostel — most students take PG accommodation near Qutab area). Total cost of programme: ₹19–21L with living. Scholarship: merit-based up to 50% fee waiver for top CAT/XAT scorers. Loan: HDFC Credila, Avanse tie-ups." },
  { q: "What is the placement record of FORE School of Management?", a: "FORE School of Management placement 2024–25: Average package ₹12 LPA. Median package ₹10.8 LPA. Top package ₹28 LPA. 100% placement (batch of ~240 students). Top recruiters: Deloitte, EY, KPMG, Accenture, Amazon, HDFC Bank, Axis Bank, HUL, ITC, Asian Paints, Samsung, Wipro, TCS Digital. Finance sector avg: ₹13.5 LPA. Marketing: ₹11 LPA. Consulting: ₹13 LPA. Analytics: ₹14 LPA. FORE's location in Qutab Institutional Area (South Delhi) attracts quality Delhi-based recruiters." },
  { q: "Is FORE School of Management good for MBA in Delhi?", a: "FORE School of Management is an excellent choice for MBA in Delhi for candidates with 80–85 CAT percentile. Key strengths: Location in South Delhi's academic hub (near IIT Delhi, JNU, AIIMS) — strong recruiter access. NAAC A+ and AICTE approved. 4 specialized PGDM tracks including Analytics and International Business. Smaller batch size (240 students) means better individual attention and higher placement-to-batch ratio. Weakness: Less recognized brand than IMT Ghaziabad or LBSIM in certain sectors. Recommendation: FORE is the #1 choice in Delhi for candidates with 80–85 CAT percentile who want a Delhi campus." },
  { q: "How does FORE compare to LBSIM Delhi and IMT Ghaziabad?", a: "FORE vs LBSIM vs IMT Ghaziabad comparison 2026: Fees — FORE ₹16.5L, LBSIM ₹12.5L, IMT ₹17.6L. Placement avg — FORE ₹12 LPA, LBSIM ₹10.5 LPA, IMT ₹12.5 LPA. CAT cutoff — FORE 80–85 %ile, LBSIM 70–75 %ile, IMT 82–87 %ile. Location — FORE South Delhi, LBSIM North Delhi, IMT Ghaziabad. NIRF rank — FORE (unranked/50+), LBSIM (unranked), IMT #14. Verdict: IMT Ghaziabad > FORE > LBSIM by brand and placement. Choose FORE over IMT if Delhi location is non-negotiable." },
]

export default function FORESchoolManagementDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "FORE School of Management Delhi", url: "/fore-school-management-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "FORE School of Management PGDM Programmes 2026",
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
          { label: "FORE School of Management", href: "/fore-school-management-delhi" },
        ]}
        h1="FORE School of Management Delhi 2026 — PGDM Fees, Cutoff & Placement"
        subtitle="FORE School of Management (FSM) is one of Delhi's top PGDM colleges — NAAC A+, located in Qutab Institutional Area (South Delhi). CAT cutoff 80–85 percentile, total fees ₹16.5L, average placement ₹12 LPA. 4 PGDM tracks: General, International Business, Big Data Analytics, Financial Management."
        heroStats={[
          { value: "NAAC A+", label: "Accreditation" },
          { value: "₹16.5L", label: "Total PGDM Fees" },
          { value: "₹12 LPA", label: "Average Placement 2025" },
          { value: "80–85 %ile", label: "CAT Cutoff" },
        ]}
        introHeading="FORE School of Management Delhi 2026 — Complete PGDM Guide"
        introParagraphs={[
          "FORE School of Management (Foundation for Organisational Research and Education) was established in 1981 in New Delhi. Located in Qutab Institutional Area — South Delhi's prestigious academic belt (near IIT Delhi, JNU, AIIMS) — FORE is one of Delhi's most respected PGDM institutes. NAAC A+ accredited, AICTE approved, and SAP University Alliance member. Four 2-year PGDM programmes: PGDM (General), PGDM-International Business, PGDM-Big Data Analytics, and PGDM-Financial Management.",
          "FORE School's placement strength lies in its Delhi location and alumni network. Average package 2025: ₹12 LPA with 100% placement for a batch of 240 students. Top recruiters: Deloitte, EY, KPMG, Amazon, HDFC Bank, HUL, ITC, Samsung, and Asian Paints. Finance specialization places at ₹13.5 LPA avg — making FORE Financial Management PGDM a strong choice for Finance-focused candidates with 80–85 percentile CAT who don't get into FMS or MDI.",
          "Admission: CAT/XAT scores + academic record + work experience. Shortlist is holistic — FORE actively recruits female candidates and non-engineers to maintain diversity (40% female target). GD (Group Discussion) + Essay + Personal Interview. No WAT at FORE — group discussion is the second-stage filter. Application through forecollege.com (December 2025–February 2026). FORE accepts CAT, XAT, GMAT, and CMAT scores.",
        ]}
        colleges={colleges}
        whyHeading="Why Choose FORE School of Management Delhi?"
        whyPoints={[
          { title: "South Delhi Premium Location", description: "Qutab Institutional Area is Delhi's most prestigious academic zone — IIT Delhi, JNU, AIIMS, and IHC all within 3 km. Companies like Deloitte, EY, BCG, and McKinsey have offices in the nearby Aerocity-Saket-Mehrauli corridor. 15 minutes from Cyber City Gurgaon — the corporate hub. FORE's location gives students direct access to internship and placement opportunities unavailable to Noida/Ghaziabad-based colleges." },
          { title: "4 Specialized PGDM Tracks", description: "Unlike most Delhi B-schools that offer a single MBA with specialization electives, FORE offers 4 distinct PGDM programmes from Day 1: General Management, International Business (focused on trade and global markets), Big Data Analytics (Python, R, ML for management), and Financial Management. Each has a tailored curriculum and separate placement pool. Analytics and Finance tracks place 10–15% higher than general track." },
          { title: "SAP University Alliance", description: "FORE is a SAP University Alliance member — students get SAP training in ERP (Enterprise Resource Planning) as part of Operations and Supply Chain courses. SAP certification alongside PGDM makes operations students 20% more competitive for supply chain and consulting roles. Analytics track students additionally get R and Python training through Bloomberg and SAS partnerships." },
          { title: "Strong Alumni Network in Delhi NCR", description: "FORE alumni hold senior positions at companies across Delhi NCR — Deloitte India partner, HDFC Bank regional head, Amazon India supply chain director. The FORE Alumni Association (FOREA) hosts quarterly networking events in Delhi where students can connect with 7,000+ alumni. Alumni mentorship programme formally pairs each student with an industry mentor." },
          { title: "Academic Diversity Focus", description: "FORE actively maintains academic diversity — target 40% female students (vs 25–30% at IIMs), arts and science graduates alongside engineers, and students from Tier 2/3 cities. This creates a diverse cohort that recruiters value. FMCG companies (HUL, P&G) specifically prefer FORE for diversity in candidate backgrounds." },
          { title: "Lower CAT Cutoff than FMS/MDI", description: "With CAT 80–85 percentile cutoff, FORE is accessible for strong candidates who don't crack FMS (99+ %ile) or MDI Gurgaon (95+ %ile). For candidates targeting Delhi campus specifically, FORE is the best PGDM option at 80–85 percentile — above LBSIM (70–75 %ile) and below MDI (95+ %ile)." },
        ]}
        admissionHeading="FORE School of Management Admission Process 2026"
        admissionSteps={[
          { step: "1", title: "Appear for CAT 2025 / XAT / GMAT", description: "FORE accepts CAT 2025 (November), XAT 2026 (January), GMAT (600+), and CMAT (90+ %ile). Target CAT 80–85+ percentile. FORE's shortlisting considers all sections — no single-section cutoff published, but maintain 75+ %ile in each section. Apply at forecollege.com (December 2025–February 2026). Application fee: ₹1,500. Apply for all 4 PGDM programmes in a single application." },
          { step: "2", title: "Shortlisting for GD-PI Round", description: "FORE shortlist is announced February 2026. Shortlisting factors: CAT/XAT/GMAT score (60% weight), academic record — 10th/12th/graduation percentages (20%), work experience 0–10 points (1 point per 6 months, max 10) (10%), gender and academic diversity (10%). Female candidates and non-engineers have slightly relaxed score cutoffs (78–80 percentile accepted for diversity). Interview call letter downloadable from forecollege.com." },
          { step: "3", title: "Group Discussion + Essay + Personal Interview", description: "FORE GD-PI rounds in March 2026 at Delhi campus (B-18, Qutab Institutional Area) and outstation centres. GD: 8–10 candidates, 20 minutes on a business/current affairs topic. Essay: 300 words in 20 minutes (same or related topic). PI: 20–25 minutes with 2-person panel. Finance PI tests basic accounting, DCF, P&L concepts. Marketing PI tests brand case studies. All tracks: current affairs in India and global economy." },
          { step: "4", title: "Merit List & Offer Letter", description: "FORE merit list: CAT 50% + GD 10% + Essay 10% + PI 25% + profile 5%. Merit list April 2026. 3 lists: selected, waitlist 1, waitlist 2. Accept offer within 10 days — pay ₹1,00,000 seat acceptance (adjusted against fees). Choose PGDM track preference in acceptance form. Specialization within PGDM General is chosen in Semester 3 based on CGPA." },
          { step: "5", title: "Join FORE & Campus Induction", description: "FORE 2026 batch begins June 2026. 5-day induction: campus orientation, faculty introductions, club presentations, and peer team-building. Hostel: limited on-campus (apply immediately on admission). Most students take PG/flat accommodation near Qutab area — ₹10,000–18,000/month sharing. Bus service from key Delhi metro stations. Join student committees in first week — Marketing, Finance, HR, and Analytics clubs are most competitive." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free FORE School of Management Admission Guidance 2026"
        ctaSubtext="Tell us your CAT percentile and target specialization (Analytics / Finance / IB / General) — our counsellors will assess your FORE shortlist probability and prepare you for GD-PI."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
          { label: "FMS Delhi — ₹55K MBA", href: "/fms-delhi", icon: "" },
          { label: "IIFT Delhi — MBA IB", href: "/iift-delhi", icon: "" },
          { label: "MDI Gurgaon — PGDM", href: "/mdi-gurgaon", icon: "" },
          { label: "IMT Ghaziabad — PGDM", href: "/imt-ghaziabad", icon: "" },
          { label: "PGDM Colleges Delhi", href: "/pgdm-colleges-delhi", icon: "" },
          { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi", icon: "" },
          { label: "MBA in International Business Delhi", href: "/mba-in-international-business-delhi", icon: "" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "" },
          { label: "MBA Colleges Delhi Placement", href: "/mba-colleges-delhi-placement", icon: "" },
        ]}
      />
    </>
  )
}
