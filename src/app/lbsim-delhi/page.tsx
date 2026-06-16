import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "LBSIM Delhi 2026 | Lal Bahadur Shastri Institute — PGDM Fees, Cutoff & Placement",
  description: "LBSIM Delhi (Lal Bahadur Shastri Institute of Management) PGDM 2026: CAT cutoff 70-75 percentile, total fees ₹12.5L, average placement ₹10.5 LPA. Admission process & review.",
  path: "/lbsim-delhi",
  keywords: [
    "lbsim delhi",
    "lal bahadur shastri institute of management delhi",
    "lbsim pgdm admission",
    "lbsim delhi cutoff",
    "lbsim fees",
    "lbsim delhi placement",
    "lbsim review",
    "lbsim ranking",
    "lal bahadur shastri institute management pgdm",
    "lbsim delhi mba",
    "lbsim cat cutoff",
    "lbsim placement 2024",
    "lbsim placement 2025",
    "lbsim vs fore delhi",
    "pgdm lbsim delhi",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "LBSIM — PGDM (2-Year General Management)", location: "Plot No. 11/7, Sector-11, Dwarka, New Delhi", naac: "A", fees: "₹12.5L total", placement: "₹10.5 LPA avg", slug: "lbsim-lal-bahadur-shastri-institute-management-delhi" },
  { name: "LBSIM — PGDM (Information Management — IT Focus)", location: "Plot No. 11/7, Sector-11, Dwarka, New Delhi", naac: "A", fees: "₹12.5L total", placement: "₹11 LPA avg", slug: "lbsim-pgdm-information-management-delhi" },
]

const faqs = [
  { q: "What is the CAT cutoff for LBSIM Delhi 2026?", a: "LBSIM Delhi CAT cutoff 2026 (expected): Overall 70–75 percentile. Section-wise minimum: Verbal 65+ %ile, Quantitative 65+ %ile, DILR 65+ %ile. LBSIM also accepts XAT (65+ %ile), GMAT (550+), CMAT (85+ %ile), and MAT (700+ score). LBSIM's shortlisting is holistic — academic record and work experience carry significant weight. Candidates with 65–70 percentile but strong graduation marks (75%+) and 2+ years work experience have been shortlisted. LBSIM is one of the most accessible PGDM colleges in South Delhi with a recognized brand." },
  { q: "What are the LBSIM Delhi fees 2026?", a: "LBSIM Delhi total PGDM fees 2026: ₹12,50,000 (₹12.5L) for 2-year PGDM. Semester-wise: ₹3,12,500 per semester × 4. Includes tuition, library, IT, placement, and activity fees. Hostel: LBSIM does not have on-campus hostel — most students rent in Dwarka (₹8,000–15,000/month). Total cost of programme with living: ₹15–17L. Scholarship: merit-based fee concession up to 25% for top CAT/CMAT scorers. Education loan: LBSIM listed with SBI, HDFC Credila — no-collateral loans up to ₹15L." },
  { q: "What is the placement record of LBSIM Delhi?", a: "LBSIM Delhi placement 2024–25: Average package ₹10.5 LPA. Median package ₹9.5 LPA. Top package ₹22 LPA. 95%+ placement from a batch of ~180 students. Top recruiters: HDFC Bank, Axis Bank, ICICI Bank, Wipro, TCS, Accenture, Deloitte, EY, Capgemini, Mahindra, Maruti Suzuki, Asian Paints. Sectors: Banking & Finance 35%, IT/Consulting 30%, FMCG/Manufacturing 20%, Others 15%. LBSIM Information Management (IM) track places 10–15% higher than general PGDM due to IT sector demand." },
  { q: "Is LBSIM better than FORE School of Management Delhi?", a: "LBSIM vs FORE School of Management comparison 2026: Fees — LBSIM ₹12.5L (lower), FORE ₹16.5L. Placement avg — LBSIM ₹10.5 LPA, FORE ₹12 LPA. CAT cutoff — LBSIM 70–75 %ile (lower), FORE 80–85 %ile. Location — LBSIM Dwarka (West Delhi), FORE Qutab (South Delhi). NIRF — Both unranked. Specialization — FORE has 4 PGDM tracks; LBSIM has General + Information Management. Verdict: FORE is stronger for brand, placement, and location. LBSIM is better for candidates with 70–75 percentile who want a Delhi campus PGDM at lower fees. If shortlisted by both, choose FORE." },
  { q: "What is LBSIM's Information Management (IM) PGDM?", a: "LBSIM PGDM Information Management (IM) is a specialized 2-year PGDM combining management fundamentals with IT and technology management. Curriculum covers: IT Strategy and Management, Business Intelligence, ERP (SAP), Data Analytics, Digital Transformation, and Systems Analysis. Ideal for engineering graduates and IT professionals transitioning to management. Placement: avg ₹11 LPA (higher than general PGDM). Top IM recruiters: TCS, Infosys, Wipro, Accenture (IT management roles), and tech product companies. LBSIM IM is one of the best MBA IT programmes in Delhi for engineering graduates." },
]

export default function LBSIMDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "LBSIM Delhi", url: "/lbsim-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "LBSIM Delhi PGDM Programmes 2026",
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
          { label: "LBSIM Delhi", href: "/lbsim-delhi" },
        ]}
        h1="LBSIM Delhi 2026 — PGDM Fees, CAT Cutoff, Placement & Admission"
        subtitle="LBSIM (Lal Bahadur Shastri Institute of Management) is one of Delhi's established PGDM colleges — NAAC A, located in Dwarka (West Delhi). CAT cutoff 70–75 percentile, total fees ₹12.5L, average placement ₹10.5 LPA. 2 PGDM tracks: General Management and Information Management (IT focus)."
        heroStats={[
          { value: "NAAC A", label: "Accreditation" },
          { value: "₹12.5L", label: "Total PGDM Fees" },
          { value: "₹10.5 LPA", label: "Average Placement 2025" },
          { value: "70–75 %ile", label: "CAT Cutoff" },
        ]}
        introHeading="LBSIM Delhi 2026 — Complete PGDM Admission & Placement Guide"
        introParagraphs={[
          "LBSIM (Lal Bahadur Shastri Institute of Management) is an AICTE-approved, NAAC A-rated PGDM institute located in Dwarka, West Delhi. Established in 1995, LBSIM offers two 2-year PGDM programmes: General Management and Information Management (IT focus). CAT cutoff is 70–75 percentile — making LBSIM one of the most accessible Delhi-based PGDM colleges for candidates who miss FORE (80–85 %ile) or MDI (95+ %ile) cutoffs.",
          "LBSIM's strength is its Banking & Financial Services and IT sector placement network — HDFC Bank, Axis Bank, ICICI Bank, TCS, Wipro, and Accenture are consistent Day 1–2 recruiters. Average placement 2025: ₹10.5 LPA from a batch of 180 students, with 95%+ placement rate. LBSIM Information Management (IM) track is particularly strong for engineering graduates transitioning to IT management roles — avg ₹11 LPA placement.",
          "Key decision: LBSIM vs FORE vs IMT Ghaziabad. LBSIM is best for candidates with 70–75 CAT percentile who want a Delhi campus at ₹12.5L fees. If CAT score is 80+, FORE is a stronger choice. If flexible on location (Ghaziabad), IMT Ghaziabad at 82–87 percentile offers ₹17.6L fees but ₹12.5 LPA avg placement (higher than LBSIM). LBSIM's value proposition is Delhi campus + PGDM credential at lower cost than most Delhi autonomous colleges.",
        ]}
        colleges={colleges}
        whyHeading="Why Choose LBSIM Delhi for PGDM 2026?"
        whyPoints={[
          { title: "Accessible CAT Cutoff for Delhi Campus", description: "LBSIM's 70–75 percentile CAT cutoff is the lowest among Delhi's established AICTE-approved PGDM colleges. Candidates who miss FORE (80–85 %ile) cutoff can still access a Delhi campus PGDM at LBSIM. MAT, CMAT, and XAT are also accepted — widening the applicant pool. LBSIM is the best Delhi PGDM option for candidates with 65–75 percentile who want to avoid relocating outside Delhi." },
          { title: "Dwarka Location — Metro Connectivity", description: "LBSIM Dwarka campus is well-connected via the Blue Line (Dwarka Sector 10/11 Metro) — 10 minutes from IGI Airport, 20 minutes from Connaught Place, and 15 minutes from Gurgaon. Dwarka is one of Delhi's fastest-growing corporate zones — NSE Data Center, GSK, TCS, and Maruti Suzuki have offices nearby. Metro connectivity ensures students can attend internships and placements across Delhi NCR without relocating." },
          { title: "Lower Fees than Most Delhi PGDM Colleges", description: "At ₹12.5L total fees, LBSIM is significantly cheaper than FORE (₹16.5L), IMI Delhi (₹19.5L), and MDI Gurgaon (₹22.5L). For budget-conscious students who want a recognized Delhi PGDM — LBSIM offers the best fees-to-placement ratio among autonomous Delhi B-schools. Education loans available up to ₹15L without collateral through SBI and HDFC Credila tie-ups." },
          { title: "Strong Banking Sector Placement", description: "HDFC Bank, Axis Bank, ICICI Bank, and Kotak Mahindra Bank are consistent LBSIM recruiters — banking sector absorbs 30–35% of LBSIM placements annually. LBSIM's West Delhi location (near Dwarka financial district) and alumni network in banking gives students strong access to bank branch management, credit analysis, and retail banking roles at ₹6–12 LPA starting." },
          { title: "PGDM Information Management — IT + MBA Hybrid", description: "LBSIM's PGDM-IM is one of the few India B-school programmes combining full MBA curriculum with IT management — ERP (SAP), Business Intelligence, Digital Transformation, and Systems Management. Ideal for BCA/BTech/MCA graduates transitioning into IT project management, ERP consulting, and digital transformation roles. IT sector pays 10–15% more than general management for IM graduates." },
          { title: "Industry Interface — Corporate Guest Lectures", description: "LBSIM maintains active industry interface — guest lecture series with CFOs, HR directors, and marketing heads from Delhi-based corporates. Annual LBSIM management fest 'Utkarsh' hosts company competitions with prize money. Student clubs: Finance Club, HR Club, Marketing Club, IT Club. Regular industry visits to Maruti Suzuki (Gurgaon), Metro Cash & Carry, and HDFC operations centres." },
        ]}
        admissionHeading="LBSIM Delhi PGDM Admission Process 2026"
        admissionSteps={[
          { step: "1", title: "Appear for CAT 2025 / CMAT / XAT / MAT", description: "LBSIM accepts CAT 2025 (November), XAT 2026 (January), CMAT 2026 (March), MAT (September/December/February/May), and ATMA. Target: CAT 70–75 percentile overall. CMAT 85+ percentile. MAT 700+ score. GMAT 550+. Apply at lbsim.ac.in (application window: December 2025–March 2026). Application fee: ₹1,200. One application covers both PGDM and PGDM-IM programmes." },
          { step: "2", title: "LBSIM Shortlisting Criteria", description: "LBSIM shortlist: CAT/entrance score 50% weight + 10th/12th/graduation marks 30% + work experience 10% + gender diversity 10%. Work experience is well-rewarded — 2+ years adds significant points. Commerce graduates are preferred for General PGDM; Engineering graduates for PGDM-IM. LBSIM shortlists 2x the final intake — conversion rate at PI stage is 50–60%. Shortlist notification: February 2026 (CAT) and April 2026 (CMAT/MAT)." },
          { step: "3", title: "Group Discussion + Personal Interview", description: "LBSIM GD-PI rounds: March–May 2026 at Delhi campus (Dwarka Sector 11). GD: 8–10 candidates, 15–20 minutes on a business/current affairs topic. PI: 15–20 minutes, 2-panel. PI for General PGDM: general management, current affairs, work experience. PI for PGDM-IM: technology management, IT industry trends, why IM track. Both PIs include 'why LBSIM?' — prepare with specific faculty names and placement record knowledge." },
          { step: "4", title: "Merit List & Seat Acceptance", description: "LBSIM merit list: entrance score 40% + GD 20% + PI 35% + profile 5%. Merit list May 2026. First, second, and waitlist announced. Accept offer within 7 days — pay ₹50,000 seat acceptance fee. Track preference (General / IM) finalized at acceptance. Waitlist movement is significant at LBSIM — 30–40% of final batch from waitlist. Monitor lbsim.ac.in for waitlist updates." },
          { step: "5", title: "Join LBSIM & First-Year Orientation", description: "LBSIM 2026 batch begins July 2026. 3-day orientation covers campus facilities, committee introductions, and industry immersion session. Join Finance Club or IT Club in Week 1 — these clubs drive summer internship placement in BFSI and IT sectors. First semester: Accounting, Economics, Statistics, OB, Marketing — no specialization in Semester 1. PGDM-IM IT electives begin Semester 2. Accommodation: LBSIM does not provide hostel — Dwarka PG available from ₹8,000–15,000/month sharing, 5–10 min from campus." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free LBSIM Delhi Admission Guidance 2026"
        ctaSubtext="Tell us your CAT/CMAT score and work experience — our counsellors will assess your LBSIM shortlist probability and compare it against FORE, IMT, and other Delhi B-schools for your profile."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "🏛️" },
          { label: "FORE School of Management Delhi", href: "/fore-school-management-delhi", icon: "🏫" },
          { label: "IMT Ghaziabad — PGDM", href: "/imt-ghaziabad", icon: "🏫" },
          { label: "IP University MBA Colleges", href: "/ip-university-mba-delhi", icon: "🏛️" },
          { label: "PGDM Colleges Delhi", href: "/pgdm-colleges-delhi", icon: "📋" },
          { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi", icon: "💹" },
          { label: "MBA in HR Delhi", href: "/mba-in-hr-delhi", icon: "👥" },
          { label: "Government MBA Colleges Delhi", href: "/government-mba-colleges-delhi", icon: "🏛️" },
          { label: "Low Fees MBA Colleges Delhi", href: "/low-fees-mba-colleges-delhi", icon: "💰" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "🏆" },
        ]}
      />
    </>
  )
}
