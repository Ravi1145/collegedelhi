import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Online MBA in Delhi 2026 | Best Colleges, UGC Approved, Fees & Admission",
  description: "Best online MBA colleges for Delhi students 2026: Delhi University SOL, IGNOU, Amity Online, NMIMS Online, Manipal Online. UGC-approved, fees ₹60K–₹2.5L, admission process.",
  path: "/online-mba-delhi",
  keywords: [
    "online mba in delhi",
    "online mba colleges in delhi",
    "best online mba from delhi",
    "online mba ugc approved delhi",
    "online mba from du delhi",
    "distance mba in delhi",
    "distance mba colleges in delhi",
    "online mba for working professionals in delhi",
    "correspondence mba delhi",
    "ignou mba delhi",
    "best online mba delhi",
    "online mba fees delhi",
    "ugc approved online mba delhi",
    "online mba from delhi university",
    "distance mba from delhi",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "DU SOL — Delhi University School of Open Learning (MBA)", location: "5, Cavalry Lane, University of Delhi, Delhi", naac: "A++", fees: "₹20,000–35,000 per year", placement: "Self-placed", slug: "du-sol-delhi-university-school-open-learning-mba" },
  { name: "IGNOU — Indira Gandhi National Open University (MBA)", location: "Maidan Garhi, New Delhi", naac: "A", fees: "₹31,500 total (2 years)", placement: "Self-placed", slug: "ignou-indira-gandhi-national-open-university-mba-delhi" },
  { name: "Amity Online — MBA (UGC-DEB Approved)", location: "Sector 125, Noida (Delhi NCR)", naac: "A+", fees: "₹1.25L–1.5L per year", placement: "Career support provided", slug: "amity-online-mba-noida-delhi-ncr" },
  { name: "NMIMS Global Access (NGA-SCE) — Online MBA", location: "Online (NMIMS University, Mumbai-based)", naac: "A++", fees: "₹1.5L–2L per year", placement: "Career support provided", slug: "nmims-global-access-online-mba" },
  { name: "Manipal Online — MBA (MAHE)", location: "Online (Manipal Academy of Higher Education)", naac: "A++", fees: "₹1.25L–1.5L per year", placement: "Career support provided", slug: "manipal-online-mba-mahe" },
  { name: "LPU Online — MBA (Lovely Professional University)", location: "Online (LPU, Phagwara, Punjab)", naac: "A+", fees: "₹85,000–1L per year", placement: "Career support provided", slug: "lpu-online-mba-lovely-professional-university" },
]

const faqs = [
  { q: "Is online MBA from Delhi University (DU SOL) valid?", a: "Yes — Delhi University School of Open Learning (DU SOL) MBA is UGC-recognized and equivalent to a regular DU MBA for all purposes. DU SOL is part of University of Delhi — NAAC A++ rated. However, DU SOL MBA is a distance education programme — no campus placement drives are held. Students must self-place using the DU brand. Fees are very low (₹20,000–35,000/year). Best for: government job applicants needing a recognized degree, or working professionals who want DU brand at minimal cost." },
  { q: "Which is the best online MBA for working professionals in Delhi?", a: "Best online MBA for working professionals in Delhi (by use case): For brand value: NMIMS Global Access MBA (NMIMS is A++ NAAC, top private university brand). For lowest cost: IGNOU MBA (₹31,500 total — UGC recognized, valid for government jobs). For placements: Amity Online or Manipal Online (career support teams assist with job placement). For flexibility: All platforms offer recorded lectures + weekend live sessions — compatible with a 9-to-6 work schedule. For peer network in Delhi: Amity Online has the largest Delhi-NCR student base." },
  { q: "Are online MBA degrees UGC-approved and valid in India?", a: "Yes — UGC (University Grants Commission) approved online MBA degrees are fully valid in India since the 2020 UGC (Open and Distance Learning Mode) guidelines. Valid universities for online MBA: Delhi University (DU SOL), IGNOU, NMIMS, Amity, Manipal, LPU, Jain, Chandigarh University. Check validity at ugcdeb.inflibnet.ac.in — any institution listed here is approved. Warning: avoid MBA from private institutes not listed on UGC-DEB portal — these degrees are not recognized. Online MBA is valid for government jobs, bank PO, and most private sector jobs in 2026." },
  { q: "What is the fee for online MBA in Delhi 2026?", a: "Online MBA fees in Delhi 2026: DU SOL MBA: ₹20,000–35,000 per year (lowest). IGNOU MBA: ₹31,500 total for 2 years. LPU Online MBA: ₹85,000–1L per year. Amity Online MBA: ₹1.25–1.5L per year. Manipal Online MBA: ₹1.25–1.5L per year. NMIMS Global Access: ₹1.5–2L per year. Compare: a regular PGDM from FORE costs ₹16.5L total — online MBA is 80–95% cheaper. For working professionals upgrading credentials, online MBA delivers high ROI." },
  { q: "Can I get a government job after online MBA?", a: "Yes — online MBA from a UGC-recognized university is valid for all government jobs that require an MBA/management degree. Specifically: Bank PO/SO (MBA Banking & Finance), SSC CGL (Assistant, Audit officer), IBPS SO Marketing/IT officer, PSU management trainee roles (SAIL, BHEL, ONGC), State government administrative roles. IGNOU MBA and DU SOL MBA have the strongest government job acceptance as they are national/central university degrees. Verify specific job notification — some require 'regular mode' MBA (state clearly in advertisement)." },
]

export default function OnlineMBADelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "Online MBA Delhi", url: "/online-mba-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Online MBA Colleges for Delhi Students 2026",
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
          { label: "Online MBA Delhi", href: "/online-mba-delhi" },
        ]}
        h1="Best Online MBA in Delhi 2026 — UGC-Approved Colleges, Fees & Admission"
        subtitle="Online MBA is the fastest-growing MBA format for working professionals in Delhi. UGC-approved online MBA programmes from DU, IGNOU, Amity, NMIMS, and Manipal cost ₹30K–₹2L — 80–95% cheaper than regular PGDM. Fully valid for government jobs and private sector roles."
        heroStats={[
          { value: "₹31,500", label: "IGNOU MBA Total Fees" },
          { value: "UGC-DEB", label: "Approval Required — Check" },
          { value: "2 Years", label: "Duration (Flexible Pace)" },
          { value: "40+", label: "Online MBA Options for Delhi" },
        ]}
        introHeading="Online MBA in Delhi 2026 — Complete Guide for Working Professionals"
        introParagraphs={[
          "Online MBA (also called Distance MBA or ODL MBA) has become the most popular MBA format for working professionals in Delhi. Since UGC's 2020 guidelines allowing fully online degrees, 50+ universities now offer UGC-approved online MBA programmes — valid for private sector jobs, government jobs, and higher education. Delhi students most commonly choose DU SOL, IGNOU, Amity Online, NMIMS Global Access, and Manipal Online.",
          "For working professionals in Delhi with 2–5 years of experience, an online MBA is the best credential upgrade at minimal cost. IGNOU MBA (₹31,500 total) is the cheapest UGC-recognized option. Amity Online and NMIMS Global Access offer career placement support with ₹1.25–2L annual fees. Classes are conducted via recorded videos + live weekend sessions — compatible with full-time jobs. No CAT required for admission to most online MBA programmes.",
          "Critical decision point: Online MBA vs Regular MBA vs Executive MBA. Choose online MBA if you want to upgrade credentials without leaving your job, are budget-constrained, or need a degree for a government/PSU job requirement. Choose regular PGDM (FMS/MDI/FORE) if you want campus placements and are willing to leave your job for 2 years. Choose Executive MBA (MDI PGPM) if you have 5+ years experience and want premium campus exposure with a job guarantee.",
        ]}
        colleges={colleges}
        whyHeading="Why Online MBA for Delhi Professionals 2026?"
        whyPoints={[
          { title: "No CAT Required", description: "All online MBA programmes listed above do NOT require CAT. Admission is based on graduation marks + work experience. IGNOU MBA: pass 10+2 and graduation. Amity Online/Manipal: 50% graduation + optional entrance test. DU SOL: DU admission process (CUET or merit). Zero exam stress — apply directly in March–May 2026." },
          { title: "80–95% Cheaper than Regular MBA", description: "IGNOU MBA total cost: ₹31,500. Regular PGDM at FORE: ₹16.5L. Difference: ₹16L. For working professionals already employed at ₹6–10 LPA, paying ₹16L for a degree plus 2 years of lost income (₹12–20L) makes little sense unless targeting a ₹20+ LPA job. Online MBA ROI is strongest for salary increments of ₹2–5 LPA — achievable with online credentials." },
          { title: "Weekend + Recorded Learning Format", description: "All UGC-approved online MBA programmes offer: recorded video lectures (watch anytime), live weekend classes (Saturday/Sunday 2–4 hours), and online exams (conducted at authorized centres or proctored online). Compatible with any work schedule. Most platforms have mobile apps for learning on-the-go. Delhi has multiple IGNOU and university exam centres for offline proctored exams." },
          { title: "Specialization Options", description: "Online MBA specializations available in 2026: Finance, Marketing, HR, Operations, IT/Systems, Data Analytics, Healthcare, Logistics, Banking, and Digital Marketing. NMIMS Global Access and Amity Online offer the widest specialization choice. IGNOU MBA is a general management programme (no specialization). Choose specialization aligned with your current job domain for maximum salary impact." },
          { title: "Valid for Government Jobs & PSUs", description: "UGC-approved online MBA degrees are accepted for government job applications. PSUs like SAIL, BHEL, ONGC, and NTPC accept online MBA from recognized universities for Management Trainee positions. Bank SO (Specialist Officer) Marketing/HR positions accept online MBA. Central government MBA requirement for civil service posts accepts online degrees if UGC-DEB listed." },
          { title: "Global Credential Recognition", description: "UGC-approved online degrees from IGNOU, NMIMS, Amity, and Manipal are recognized by AIU (Association of Indian Universities) for equivalency with foreign degrees. UAE/Singapore work visa applications accept these degrees. NMIMS is WES-evaluated for Canada immigration. Students planning to migrate for work should choose NMIMS or Manipal Online for best global recognition." },
        ]}
        admissionHeading="Online MBA Admission Process Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Choose the Right Online MBA Programme", description: "Decision framework: Budget ₹50K total → IGNOU MBA. Brand value priority → NMIMS Global Access or DU SOL. Career support/placement → Amity Online or Manipal Online. Government job requirement → IGNOU or DU SOL (central/state university). Check UGC-DEB portal (ugcdeb.inflibnet.ac.in) to verify the university is listed before paying any fee." },
          { step: "2", title: "Check Admission Dates", description: "IGNOU MBA: January session (apply October–November) and July session (apply March–May). DU SOL: CUET-based, apply with CUET form (March 2026). Amity Online/Manipal/NMIMS: Rolling admissions — apply any time, batches start January and July. LPU Online: rolling admissions year-round. Most programmes accept applications online — no physical visit required." },
          { step: "3", title: "Apply Online & Submit Documents", description: "Apply at respective university portal. Documents required: graduation marksheet (all semesters), 10th and 12th marksheets, photo ID (Aadhaar/passport), recent passport-sized photo, work experience certificate (if required for admission). For IGNOU: apply at ignou.samarth.edu.in. For Amity Online: amityonline.com. For NMIMS: nmims.edu. Pay application fee ₹500–2,000 online." },
          { step: "4", title: "Pay Fees & Access Learning Platform", description: "After admission confirmation, pay semester fees online (EMI available at Amity/Manipal/LPU — 3–6 month EMI without interest). Receive login credentials for the learning management system (LMS) within 48 hours. Install the university app (Amity has eStudy app, Manipal has MULearn, IGNOU has eGyankosh). Download study materials and join online student community." },
          { step: "5", title: "Appear for Exams & Earn Degree", description: "Online MBA exams: IGNOU exams at nearest study centre (June and December). Amity/Manipal: proctored online exams (from home with camera). Duration: 2 years (can extend to 4–6 years at IGNOU if needed). On completion: attend convocation at university campus or receive degree by post. Apply for graduation certificate via student portal. Degree is physically identical to regular MBA degree — no 'online' marking on certificate." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free Online MBA Guidance for Delhi 2026"
        ctaSubtext="Tell us your budget, current job, and goal — our counsellors will recommend the best UGC-approved online MBA programme for your career needs."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
          { label: "Executive MBA Delhi", href: "/executive-mba-delhi", icon: "" },
          { label: "Government MBA Colleges Delhi", href: "/government-mba-colleges-delhi", icon: "" },
          { label: "Low Fees MBA Colleges Delhi", href: "/low-fees-mba-colleges-delhi", icon: "" },
          { label: "MBA Admission Without CAT Delhi", href: "/mba-admission-delhi-without-cat", icon: "" },
          { label: "FMS Delhi — ₹55K MBA", href: "/fms-delhi", icon: "" },
          { label: "IP University MBA Colleges", href: "/ip-university-mba-delhi", icon: "" },
          { label: "PGDM Colleges Delhi", href: "/pgdm-colleges-delhi", icon: "" },
          { label: "MBA in HR Delhi", href: "/mba-in-hr-delhi", icon: "" },
          { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi", icon: "" },
        ]}
      />
    </>
  )
}
