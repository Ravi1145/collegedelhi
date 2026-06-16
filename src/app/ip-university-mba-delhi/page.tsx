import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "IP University MBA Colleges Delhi 2026 | IPU CET, Fees & Placement",
  description: "Best IP University MBA colleges in Delhi 2026: JIMS, USMS, BPIT, VIPS, MAIT. IPU CET cutoff, fees ₹1.8L–₹2.5L per year, placement ₹4–10 LPA. Full guide.",
  path: "/ip-university-mba-delhi",
  keywords: [
    "ip university mba colleges list",
    "ip university affiliated mba colleges delhi",
    "best ip university mba college delhi",
    "ip university mba cutoff",
    "ipu cet mba",
    "ip university mba fees",
    "guru gobind singh indraprastha university mba",
    "ggsipu mba colleges delhi",
    "ip university mba admission 2026",
    "ip university mba counseling 2026",
    "ip university mba placement",
    "ipu mba colleges list delhi",
    "best mba college affiliated to ip university",
    "ip cet mba syllabus",
    "ipu cet mba previous year papers",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "USMS — University School of Management Studies, GGSIPU", location: "Sector 16C, Dwarka, New Delhi", naac: "A+", fees: "₹1.8L per year", placement: "₹6.5 LPA avg", slug: "usms-ggsipu-university-school-management-studies-delhi" },
  { name: "JIMS — Jagan Institute of Management Studies, Rohini", location: "Rohini, North Delhi", naac: "A", fees: "₹2.2L per year", placement: "₹5.5 LPA avg", slug: "jims-jagan-institute-management-studies-rohini-delhi" },
  { name: "BPIT — Bhagwan Parshuram Institute of Technology", location: "Rohini, North Delhi", naac: "A", fees: "₹2.1L per year", placement: "₹5 LPA avg", slug: "bpit-bhagwan-parshuram-institute-technology-delhi" },
  { name: "VIPS — Vivekananda Institute of Professional Studies", location: "Pitampura, North Delhi", naac: "A", fees: "₹2.0L per year", placement: "₹5 LPA avg", slug: "vips-vivekananda-institute-professional-studies-delhi" },
  { name: "MAIT — Maharaja Agrasen Institute of Technology", location: "Rohini, North Delhi", naac: "A", fees: "₹2.0L per year", placement: "₹4.5 LPA avg", slug: "mait-maharaja-agrasen-institute-technology-delhi" },
  { name: "MSIT — Maharaja Surajmal Institute of Technology", location: "Janakpuri, West Delhi", naac: "A", fees: "₹2.0L per year", placement: "₹4.5 LPA avg", slug: "msit-maharaja-surajmal-institute-technology-delhi" },
]

const faqs = [
  { q: "Which is the best IP University MBA college in Delhi 2026?", a: "USMS (University School of Management Studies) is the best IP University MBA college — it is the parent university's own school, located at Dwarka campus, with the lowest fees (₹1.8L/year) and highest placement (₹6.5 LPA avg). JIMS Rohini is the best private IP University affiliated MBA college — NAAC A, strong alumni network, consistent ₹5–7 LPA placements, well-known recruiters from FMCG, banking, and IT. Both require IPU CET score for admission." },
  { q: "What is IPU CET MBA and how to apply?", a: "IPU CET (Indraprastha University Common Entrance Test) for MBA is conducted by GGSIPU (Guru Gobind Singh Indraprastha University) every year — typically in May. Eligibility: Graduation in any stream with minimum 50% marks (45% for SC/ST). Registration: ipu.admissions.nic.in (opens February–March 2026). Fee: ₹1,000–1,500. Exam format: 150 MCQs in 150 minutes covering English, Logical Reasoning, General Knowledge, Quantitative Aptitude, and Management Awareness. No negative marking. Score used for counselling to fill ~2,500+ MBA seats across 50+ affiliated colleges." },
  { q: "What is the IPU CET MBA cutoff 2026?", a: "IPU CET MBA cutoffs 2026 (expected based on 2025 trends): USMS (university school): top 500 rank. JIMS Rohini: 1,000–3,000 rank. BPIT: 2,000–5,000 rank. VIPS Pitampura: 2,000–5,000 rank. MAIT Rohini: 3,000–6,000 rank. Lower-rank colleges admit up to 15,000+ rank. Counselling is merit-based — higher the score, better the college choice. 3–4 rounds of counselling are held between June and August." },
  { q: "What is the fee for MBA in IP University colleges?", a: "MBA fees at IP University affiliated colleges 2026: USMS (government): ₹1,75,000–1,90,000 per year (total ₹3.5–3.8L for 2 years). JIMS Rohini: ₹2,00,000–2,25,000 per year (total ₹4–4.5L). BPIT, VIPS, MAIT, MSIT: ₹1,90,000–2,20,000 per year (total ₹3.8–4.4L). These fees are regulated by GGSIPU — no capitation fee is permitted. Hostel is separate: ₹60,000–90,000/year at college hostels." },
  { q: "What is the placement record of IP University MBA colleges?", a: "IP University MBA placement 2024–25: USMS: avg ₹6–7 LPA, top package ₹12 LPA. JIMS Rohini: avg ₹5–6 LPA, top ₹10 LPA, companies: HDFC, Axis Bank, Wipro, Cognizant, Amazon. BPIT: avg ₹4.5–5.5 LPA. VIPS: avg ₹4.5–5 LPA. IP University MBA placements are strongest in Banking & Financial Services, IT/ITES, FMCG, and Retail sectors. Most students placed within Delhi NCR with hybrid work options." },
]

export default function IPUniversityMBADelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "IP University MBA Colleges", url: "/ip-university-mba-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best IP University MBA Colleges in Delhi 2026",
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
          { label: "IP University MBA Colleges", href: "/ip-university-mba-delhi" },
        ]}
        h1="IP University MBA Colleges in Delhi 2026 — IPU CET, Fees & Placement"
        subtitle="GGSIPU (Guru Gobind Singh Indraprastha University) affiliates 50+ MBA colleges in Delhi with regulated fees ₹1.8–2.5L/year. Admission through IPU CET — conducted annually in May. Compare the best IP University MBA colleges by rank, placement, and location."
        heroStats={[
          { value: "50+", label: "IP University MBA Colleges Delhi" },
          { value: "₹3.5–4.5L", label: "Total 2-Year Fees" },
          { value: "₹10 LPA", label: "Top Package (JIMS/USMS)" },
          { value: "2,500+", label: "MBA Seats via IPU CET" },
        ]}
        introHeading="IP University MBA Colleges Delhi 2026 — Complete Guide"
        introParagraphs={[
          "Guru Gobind Singh Indraprastha University (GGSIPU) is Delhi's largest affiliating university for MBA, with 50+ affiliated management institutes offering MBA programmes at regulated fees. The IPU CET MBA exam (held every May) is the single gateway for admission to all GGSIPU-affiliated MBA colleges — no separate college entrance tests needed. Total fees are regulated at ₹1.8–2.5L per year across all affiliated colleges.",
          "The top IP University MBA college is USMS (University School of Management Studies) — the university's own school at Dwarka campus, with the lowest fees and best placement (₹6.5 LPA avg). Among private affiliated colleges, JIMS Rohini is the most recognized — consistent HDFC, Axis Bank, and IT company placements, NAAC A accreditation. BPIT, VIPS, MAIT, and MSIT are strong Tier 2 options with good North Delhi campus locations.",
          "Key advantage of IP University MBA: affordable regulated fees (much cheaper than private PGDM programmes), Delhi location (100+ companies recruit within NCR), and government-recognized MBA degree. Limitation: placement at IPU-affiliated colleges (₹4–7 LPA) is lower than autonomous PGDM colleges like FORE or LBSIM (₹10–14 LPA). Choose IP University MBA if budget is the primary constraint and you want a recognized Delhi University-affiliated degree.",
        ]}
        colleges={colleges}
        whyHeading="Why Choose IP University MBA 2026?"
        whyPoints={[
          { title: "Regulated Low Fees", description: "GGSIPU caps MBA fees at all affiliated colleges — ₹1.8–2.5L per year. Total 2-year cost ₹3.5–4.5L is 60–70% cheaper than comparable PGDM programmes (FORE: ₹16.5L, LBSIM: ₹12.5L). No capitation fees permitted. EMI financing available via Vidya Lakshmi portal." },
          { title: "Government-Recognized MBA Degree", description: "GGSIPU is a state university recognized by UGC — MBA degree is equivalent to a university MBA, not a diploma. Valued for government job applications, PSU recruitment, and foreign university PhD admissions where a 'recognized university' MBA is required." },
          { title: "Single Entrance Exam (IPU CET)", description: "One exam, 50+ colleges. IPU CET MBA (May 2026) unlocks all GGSIPU-affiliated seats through centralized counselling. No need to apply to 10 colleges separately. Score once, choose college based on rank and preference." },
          { title: "Delhi NCR Location Advantage", description: "All GGSIPU-affiliated MBA colleges are in Delhi (Rohini, Dwarka, Pitampura, Janakpuri). Proximity to Delhi NCR's corporate belt means easy access to internships, part-time work, and placement drives. Metro connectivity to all campuses." },
          { title: "Reservation & Quota Benefits", description: "GGSIPU follows Delhi government reservation policy — 85% seats for Delhi domicile students, with SC/ST/OBC/EWS/PWD reservations as per government norms. Significantly benefits Delhi residents and reserved category students over private autonomous colleges." },
          { title: "Strong Banking & IT Sector Placements", description: "IP University MBA colleges have strong recruiter relationships with HDFC Bank, Axis Bank, ICICI Bank, Wipro, Cognizant, and retail chains. Banking sector absorbs 30–40% of MBA graduates. ₹4–7 LPA entry packages with fast growth trajectory in BFSI and IT roles." },
        ]}
        admissionHeading="IP University MBA Admission Process 2026"
        admissionSteps={[
          { step: "1", title: "Register for IPU CET MBA 2026", description: "Visit ipu.admissions.nic.in (registration opens February 2026). Fill application form, upload photo/signature, pay ₹1,000–1,500 registration fee. Download admit card (April 2026). Exam in May 2026 — 150 MCQs in 150 minutes. Sections: English 30, Reasoning 30, GK 30, Quant 30, Management 30. No negative marking. Eligibility: any graduation 50% (45% SC/ST)." },
          { step: "2", title: "Prepare for IPU CET MBA", description: "Focus areas: English (RC, vocab, grammar), Logical Reasoning (syllogisms, puzzles, series), Quantitative Aptitude (basic math, data interpretation), General Knowledge (current affairs, static GK), and Management Awareness (basic B-school concepts, marketing/finance terms). IPU CET is easier than CAT — 2 months preparation sufficient. Previous year papers: available on ggsipu.ac.in. Target top 2,000 rank for USMS/JIMS." },
          { step: "3", title: "Check Results & Register for Counselling", description: "IPU CET MBA results declared on ggsipu.ac.in (June 2026). Check your score and rank. Register for online counselling (separate from exam registration — requires fee ₹5,000 refundable deposit). Document verification: mark sheets, domicile certificate (Delhi residents for 85% quota), category certificate (SC/ST/OBC/EWS), transfer certificate." },
          { step: "4", title: "Participate in Online Counselling", description: "IPU counselling is fully online — login to ipu.admissions.nic.in, fill college preferences in order (rank all 50+ colleges). Seat allotment based on rank + preference. 3–4 rounds typically (Round 1: June, Round 2: July, Open round: August). Accept seat and pay ₹25,000 seat acceptance fee online. If unsatisfied, participate in next round (seat locked after Round 2 withdrawal)." },
          { step: "5", title: "Report to College & Pay Fees", description: "Report to allotted college within 7 days of seat allotment. Submit original documents for verification. Pay first year fee (₹1.8–2.5L) by DD/online. Collect admission letter and student ID. Classes begin July 2026. USMS semester exams are conducted by GGSIPU centrally. Affiliated college students appear for university exams — results declared by GGSIPU." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free IP University MBA Admission Guidance 2026"
        ctaSubtext="Tell us your IPU CET rank and preferred location (North/West/South Delhi) — our counsellors will shortlist the best GGSIPU-affiliated MBA college for your profile."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "🏛️" },
          { label: "Government MBA Colleges Delhi", href: "/government-mba-colleges-delhi", icon: "🏛️" },
          { label: "Low Fees MBA Colleges Delhi", href: "/low-fees-mba-colleges-delhi", icon: "💰" },
          { label: "FMS Delhi — ₹55K MBA", href: "/fms-delhi", icon: "🎓" },
          { label: "MBA Admission Without CAT Delhi", href: "/mba-admission-delhi-without-cat", icon: "📝" },
          { label: "PGDM Colleges Delhi", href: "/pgdm-colleges-delhi", icon: "📋" },
          { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi", icon: "💹" },
          { label: "MBA in HR Delhi", href: "/mba-in-hr-delhi", icon: "👥" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "🏆" },
          { label: "MBA Colleges Noida", href: "/mba-colleges-noida", icon: "📍" },
        ]}
      />
    </>
  )
}
