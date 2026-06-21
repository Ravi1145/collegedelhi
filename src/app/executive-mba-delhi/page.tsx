import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Executive MBA Delhi 2026 | Best EMBA Colleges, Fees & Eligibility",
  description: "Best Executive MBA colleges in Delhi 2026: MDI Gurgaon PGPM, FMS EMBA, IMI Delhi PGDM-Ex, IIM Lucknow (Noida campus). Fees ₹8L–₹25L, 5+ years experience required.",
  path: "/executive-mba-delhi",
  keywords: [
    "executive mba delhi",
    "executive mba delhi 2026",
    "emba colleges in delhi",
    "best executive mba in delhi",
    "executive mba admission delhi ncr",
    "mba for working professionals delhi",
    "part time mba delhi",
    "executive pgdm delhi",
    "weekend mba delhi",
    "executive mba fees delhi",
    "executive mba without gmat delhi",
    "iim executive mba delhi",
    "mdi gurgaon executive mba",
    "fms executive mba delhi",
    "executive mba eligibility delhi",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "MDI Gurgaon — PGPM (Post Graduate Programme for Managers)", location: "Mehrauli Road, Sukhrali, Gurgaon 122007", naac: "A+", fees: "₹18L total", placement: "₹25 LPA avg (experienced candidates)", slug: "mdi-gurgaon-management-development-institute" },
  { name: "FMS Delhi — Executive MBA (EMBA, Part-time)", location: "University Enclave, North Campus, Delhi", naac: "A++", fees: "₹3.5L total", placement: "Promotion-focused (not campus placement)", slug: "fms-delhi-faculty-management-studies" },
  { name: "IMI Delhi — PGDM-Executive", location: "Qutab Institutional Area, New Delhi", naac: "A+", fees: "₹15L total", placement: "Internal promotion / job change", slug: "imi-delhi-international-management-institute" },
  { name: "IIM Lucknow — IPMX (Noida Campus)", location: "Sector 62, Noida (Delhi NCR)", naac: "—", fees: "₹27L total", placement: "₹35+ LPA (senior leaders)", slug: "iim-lucknow-noida-campus-executive-mba" },
  { name: "LBSIM Delhi — PGDM-Executive (Weekend)", location: "Rohini, North Delhi", naac: "A", fees: "₹8L total", placement: "Internal promotion / lateral moves", slug: "lbsim-lal-bahadur-shastri-institute-management" },
  { name: "Amity University Noida — Executive MBA (Weekend)", location: "Sector 125, Noida (Delhi NCR)", naac: "A+", fees: "₹4L–6L total", placement: "Internal promotion", slug: "amity-university-noida-delhi-ncr" },
]

const faqs = [
  { q: "What is the best Executive MBA college in Delhi NCR?", a: "Best Executive MBA colleges in Delhi NCR 2026: (1) IIM Lucknow IPMX (Noida campus) — India's top EMBA, 12–15 years experience, ₹27L total fees, ₹35+ LPA salary post-EMBA. (2) MDI Gurgaon PGPM — NIRF #9, 5+ years experience, ₹18L total fees, ₹25 LPA avg. (3) IMI Delhi PGDM-Executive — 5 years experience, ₹15L total fees. (4) FMS Delhi Executive MBA (Part-time) — India's cheapest executive MBA at ₹3.5L total fees (University of Delhi), best ROI for working professionals in Delhi." },
  { q: "What is the eligibility for Executive MBA in Delhi 2026?", a: "Executive MBA eligibility in Delhi 2026: Minimum work experience: MDI PGPM — 5 years. IIM Lucknow IPMX — 10–15 years. IMI Delhi PGDM-Ex — 5 years. FMS Executive MBA — 5 years (full-time), 3 years (part-time). LBSIM Executive — 2–3 years. Educational qualification: Bachelor's degree in any discipline from a recognized university. Age: usually 27–45 years. Entrance exam: GMAT 600+ or CAT for most programmes. IIM Lucknow IPMX may waive GMAT for candidates with 15+ years experience." },
  { q: "What is the fees for Executive MBA in Delhi?", a: "Executive MBA fees in Delhi NCR 2026: FMS Delhi Part-time MBA ₹3.5L (cheapest, University of Delhi). LBSIM Delhi PGDM-Ex ₹8L. Amity Executive MBA ₹4–6L. IMI Delhi PGDM-Ex ₹15L. MDI Gurgaon PGPM ₹18L. IIM Lucknow IPMX ₹27L. All programmes are 1–2 years weekend or evening format so you don't leave your job. Employer sponsorship is common for MDI PGPM and IIM IPMX — many companies (Deloitte, EY, Infosys, TCS) sponsor senior employees for executive MBA." },
  { q: "Can I do Executive MBA without GMAT in Delhi?", a: "Executive MBA without GMAT in Delhi 2026: FMS Delhi Executive MBA — accepts CAT score (no GMAT required). LBSIM Delhi PGDM-Ex — accepts CAT score or own entrance, no GMAT. Amity Executive MBA — own AUAT test or just application/interview. IMI Delhi PGDM-Ex — accepts both GMAT and CAT, no GMAT mandatory. MDI Gurgaon PGPM — strongly prefers GMAT (600+), but exceptional candidates with 10+ years experience may be considered without GMAT on case-by-case basis. IIM Lucknow IPMX — GMAT preferred but experience can substitute." },
  { q: "Is Executive MBA worth it for a Delhi professional in 2026?", a: "Executive MBA ROI for Delhi professionals 2026: Yes — if you have 5–10 years experience and feel a salary ceiling or career stagnation. Average salary jump after Executive MBA: 30–60% increase within 2 years. MDI PGPM graduates: ₹15 LPA pre-EMBA → ₹25 LPA post-EMBA avg. IIM Lucknow IPMX: ₹25 LPA → ₹40 LPA. The EMBA network effect in Delhi NCR is powerful — 60–70% of EMBA graduates get new opportunities through batchmate referrals within 12 months of graduation. ROI is highest if company sponsors the programme." },
]

export default function ExecutiveMBADelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "Executive MBA Delhi", url: "/executive-mba-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Executive MBA Colleges in Delhi 2026",
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
          { label: "Executive MBA Delhi", href: "/executive-mba-delhi" },
        ]}
        h1="Best Executive MBA Colleges in Delhi 2026 — EMBA for Working Professionals"
        subtitle="Executive MBA (EMBA) is a 1–2 year weekend/part-time management programme for working professionals with 3–15 years experience. Top Executive MBA programmes in Delhi NCR — MDI Gurgaon PGPM, IIM Lucknow IPMX (Noida), FMS Part-time MBA, IMI Delhi PGDM-Ex. Fees ₹3.5L–₹27L."
        heroStats={[
          { value: "8+", label: "EMBA Programmes Delhi NCR" },
          { value: "₹3.5L–₹27L", label: "Total Fees Range" },
          { value: "30–60%", label: "Avg Salary Jump Post-EMBA" },
          { value: "5+ yrs", label: "Min Work Experience Required" },
        ]}
        introHeading="Executive MBA in Delhi 2026 — Complete Admission Guide"
        introParagraphs={[
          "Executive MBA (EMBA) is designed for mid-career professionals — managers, consultants, entrepreneurs, and senior executives — who want to upgrade their management credentials without quitting their jobs. Unlike regular MBA (full-time, 2 years), EMBA programmes in Delhi NCR are structured as weekend classes (Saturday–Sunday) or evening sessions, allowing you to continue working while earning your degree.",
          "Delhi NCR is an ideal location for EMBA because the region's corporate density is unmatched — Gurgaon alone has 250+ Fortune 500 company offices, and EMBA batchmates become lifetime professional contacts. MDI Gurgaon's PGPM (Post Graduate Programme for Managers, 5+ years experience) and IIM Lucknow's IPMX (Noida campus, 10+ years) are the most prestigious EMBA options in the NCR corridor.",
          "For cost-conscious professionals, FMS Delhi's Part-time MBA (Executive) at ₹3.5L total fees from University of Delhi is India's best EMBA value. LBSIM Delhi's weekend PGDM-Ex at ₹8L total is another strong option for Rohini/North Delhi-based professionals seeking an AICTE-approved PGDM degree.",
        ]}
        colleges={colleges}
        whyHeading="Why Executive MBA in Delhi NCR?"
        whyPoints={[
          { title: "No Career Break Needed", description: "Executive MBA programmes in Delhi NCR — MDI PGPM, IMI Delhi PGDM-Ex, LBSIM PGDM-Ex — are designed around your work schedule. Classes are held on weekends (Saturday 9am–6pm, Sunday 9am–1pm) or weekday evenings. You maintain your salary, seniority, and professional momentum while earning the EMBA credential." },
          { title: "Employer Sponsorship Available", description: "Many Delhi NCR companies sponsor employee EMBA fees — Deloitte, EY, KPMG, Infosys, TCS, Wipro, Amazon India, and major banks have formal EMBA sponsorship policies. MDI Gurgaon PGPM has 40–50% employer-sponsored students. For manager-level employees (5–8 years experience), requesting EMBA sponsorship as part of your appraisal conversation is a legitimate career move." },
          { title: "IIM Brand Without Full-Time Commitment", description: "IIM Lucknow IPMX (Noida campus) delivers IIM-quality faculty, network, and curriculum in a weekend format designed for senior professionals with 10+ years experience. The IIM brand on your LinkedIn profile opens doors equivalent to full-time IIM graduates for lateral hiring at Director/VP levels in consulting, banking, and corporate strategy." },
          { title: "Peer Network of Senior Executives", description: "EMBA batchmates are fundamentally different from regular MBA classmates — they're working managers at L5–L8 (Senior Manager, Director, VP) levels across FMCG, consulting, tech, banking, manufacturing, and media. The peer learning and referral network from 60 senior professionals across industries is worth more than the curriculum for many EMBA graduates." },
          { title: "Entrepreneurship Track", description: "MDI Gurgaon's PGPM has a specific entrepreneurship track for professionals who want to launch ventures after 8–10 years of corporate experience. Delhi NCR's startup ecosystem (Gurugram, Noida) makes it ideal for EMBA entrepreneurs — many MDI PGPM alumni have launched funded ventures within 2 years of graduation." },
          { title: "International Module Options", description: "MDI Gurgaon PGPM includes an International Immersion module at partner schools in Europe (HEC Paris, ESCP) and USA. IIM Lucknow IPMX has a Singapore module. These international exposures help senior Delhi professionals build global business contacts and perspective for multinational roles." },
        ]}
        admissionHeading="Executive MBA Admission Process Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Check Eligibility & Choose Programme Level", description: "Work experience tiers: 2–3 years: LBSIM PGDM-Ex, Amity Executive MBA. 5+ years: MDI PGPM, IMI Delhi PGDM-Ex, FMS Part-time MBA. 10–15 years: IIM Lucknow IPMX. Choose based on: (a) your current CTC — if above ₹15 LPA, premium programmes (MDI, IIM) offer better peer quality. (b) Geography — LBSIM for North Delhi, MDI for Gurgaon-based professionals. (c) Time commitment — IIM IPMX is the most intensive (5 days per month at Noida campus)." },
          { step: "2", title: "Appear for GMAT or CAT", description: "GMAT: international standard for EMBA, targeted score 600+ for MDI, 650+ for IIM IPMX. Study time: 3–4 months (focus: Verbal Reasoning and Integrated Reasoning for senior professionals). CAT: accepted by FMS Delhi and LBSIM — if you already took CAT for regular MBA, reuse that score. Working professionals often find GMAT easier to prepare for than CAT (GMAT has no Data Sufficiency traps unique to Indian exam culture). GMAT prep: Official GMAT Guide + Manhattan GMAT Verbal Guide." },
          { step: "3", title: "Prepare Profile Summary & Essays", description: "EMBA applications are heavily profile-driven. Prepare: 2-page professional resume highlighting leadership impact (not just job descriptions). 2–3 essays: Why EMBA now? What will you bring to the class? Post-EMBA career goals. 2 professional references (manager + peer). MDI PGPM essay: 'Describe a leadership challenge and what you learned from it (500 words).' IIM IPMX: detailed Personal Data Sheet covering P&L responsibility, team size managed, and international exposure." },
          { step: "4", title: "Group Discussion & PI (Career-Focused)", description: "EMBA interviews differ from regular MBA: longer (60–90 min), deeper on your professional experience, focused on leadership examples, strategic thinking, and why this specific programme. MDI PGPM PI: structured around your company's business challenges and how you handled them. IIM IPMX: case-based interview testing business judgement at senior level. FMS Part-time MBA: academic-style PI testing analytical thinking. Prepare STAR (Situation, Task, Action, Result) format stories for 5–6 key leadership moments." },
          { step: "5", title: "Joining & Managing Work-Study Balance", description: "Successfully completing an EMBA requires structured time management. Recommended approach: Block 6–8 hours every Saturday and Sunday for classes and assignments. Communicate with your manager upfront about the EMBA schedule — most Delhi NCR employers are accommodating. Form a study group with 3–4 batchmates for case study preparation. Leverage your real work projects as MBA assignments wherever the programme allows. The best EMBA outcomes come from treating every class discussion as a live strategy session for your actual job." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free Executive MBA Counselling for Delhi NCR"
        ctaSubtext="Tell us your years of experience and current CTC — our counsellors will match you with the best Executive MBA programme in Delhi NCR that fits your goals and budget."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
          { label: "FMS Delhi MBA Admission", href: "/fms-delhi", icon: "" },
          { label: "IIFT Delhi — MBA IB", href: "/iift-delhi", icon: "" },
          { label: "MDI Gurgaon PGPM Admission", href: "/mdi-gurgaon", icon: "" },
          { label: "MBA in HR Delhi", href: "/mba-in-hr-delhi", icon: "" },
          { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi", icon: "" },
          { label: "MBA in Operations Delhi", href: "/mba-in-operations-delhi", icon: "" },
          { label: "Government MBA Colleges Delhi", href: "/government-mba-colleges-delhi", icon: "" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "" },
          { label: "MBA Colleges Gurgaon", href: "/mba-colleges-gurgaon", icon: "" },
          { label: "PGDM Colleges Delhi", href: "/pgdm-colleges-delhi", icon: "" },
        ]}
      />
    </>
  )
}
