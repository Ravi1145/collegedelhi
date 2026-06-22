import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Amity University MBA Delhi/Noida 2026",
  description: "Amity University MBA Noida 2026: NAAC A+, fees ₹4–5.5L per year, 60+ MBA specializations, average placement ₹7–9 LPA. Admission without CAT (Amity JEE)",
  path: "/amity-university-mba-delhi",
  keywords: [
    "amity university mba",
    "amity university mba noida",
    "amity university mba delhi",
    "amity mba fees",
    "amity mba admission",
    "amity mba cutoff",
    "amity mba placement",
    "amity university mba review",
    "amity mba without cat",
    "amity university noida mba 2026",
    "amity mba program",
    "amity mba salary",
    "amity university mba ranking",
    "amity noida mba fees 2026",
    "is amity mba good",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "Amity Business School (ABS) — MBA General Management", location: "Amity University, Sector 125, Noida (Delhi NCR)", naac: "A+", fees: "₹5.2L per year", placement: "₹8 LPA avg", slug: "amity-university-noida-mba" },
  { name: "Amity Business School — MBA Finance", location: "Sector 125, Noida (Delhi NCR)", naac: "A+", fees: "₹5.2L per year", placement: "₹8.5 LPA avg", slug: "amity-university-noida-mba-finance" },
  { name: "Amity Business School — MBA Marketing", location: "Sector 125, Noida (Delhi NCR)", naac: "A+", fees: "₹5.2L per year", placement: "₹8 LPA avg", slug: "amity-university-noida-mba-marketing" },
  { name: "Amity Business School — MBA HR", location: "Sector 125, Noida (Delhi NCR)", naac: "A+", fees: "₹5.2L per year", placement: "₹7.5 LPA avg", slug: "amity-university-noida-mba-hr" },
  { name: "Amity Business School — MBA IT & Systems", location: "Sector 125, Noida (Delhi NCR)", naac: "A+", fees: "₹4.8L per year", placement: "₹8 LPA avg", slug: "amity-university-noida-mba-information-technology" },
  { name: "Amity Online — MBA (Distance / Online Mode)", location: "Online Programme (UGC-DEB Approved)", naac: "A+", fees: "₹1.25L per year", placement: "Career support provided", slug: "amity-online-mba-noida-delhi-ncr" },
]

const faqs = [
  { q: "Is Amity University MBA good for career in Delhi NCR?", a: "Amity University MBA is a good option for students who: want a Delhi NCR campus MBA without needing a high CAT score, prefer a wide choice of 60+ specializations, or need a recognized university MBA (not PGDM) for government job applications. Amity is NAAC A+, UGC-recognized, and its Noida campus gives direct access to Noida's IT and corporate ecosystem. However, Amity's placement (₹7–9 LPA avg) is significantly lower than FORE (₹12 LPA), IMT Ghaziabad (₹12.5 LPA), or LBSIM (₹10.5 LPA). Best for: students with 50–70 CAT percentile, those needing a University MBA degree (not PGDM), or students targeting IT companies in Noida with MBA IT specialization." },
  { q: "Can I get MBA admission in Amity without CAT?", a: "Yes — Amity University MBA admission does NOT require CAT. Amity conducts its own entrance test called Amity JEE (Joint Entrance Examination) for MBA programmes. Amity JEE MBA 2026: available online year-round. Pattern: 90 MCQs in 90 minutes covering English, Logical Reasoning, Quantitative Aptitude, and GK. No negative marking. Alternatively, Amity also accepts CAT, CMAT, XAT, MAT, and GMAT scores — high scores in these can waive the Amity JEE and provide scholarship up to 50% fee reduction. No minimum score cutoff published — Amity has open admissions for most programmes." },
  { q: "What is the fee for Amity University MBA Noida 2026?", a: "Amity University MBA fees 2026 (Noida campus): General MBA / MBA Finance / MBA Marketing / MBA HR: ₹5,20,000 per year (₹10.4L total for 2 years). MBA IT & Systems: ₹4,80,000 per year (₹9.6L total). MBA Biotechnology Management: ₹4,50,000 per year. Hostel: ₹1.5–2L per year additional (Amity has residential hostels on campus). Total programme cost: ₹11–14L with hostel. Amity Online MBA (distance mode): ₹1,25,000–1,50,000 per year (₹2.5–3L total) — much cheaper. Scholarship: CAT 75+ %ile gets 25–50% fee waiver. Amity JEE merit scholarship reduces fees by 10–25%." },
  { q: "What is Amity University MBA placement record?", a: "Amity University MBA placement 2024–25 (Noida campus): Average package ₹7.5–9 LPA. Median package ₹7 LPA. Top package ₹22 LPA. 85–90% placement from MBA batch of 200–250 students. Top recruiters: TCS, Infosys, Wipro, HCL, Capgemini, HDFC Bank, Axis Bank, ICICI Bank, Accenture, Deloitte, Amazon (ops roles), EXL Service, WNS. Strengths: strong IT sector (TCS, Infosys, HCL — Noida neighbors), banking (HDFC, Axis), and analytics BPO (EXL, WNS). Weakness: limited Big 4 consulting and FMCG (HUL, P&G) recruitment compared to top-tier Delhi B-schools." },
  { q: "What specializations are available in Amity MBA Noida?", a: "Amity University Noida offers 60+ MBA specializations — the widest selection of any MBA college in Delhi NCR. Popular specializations 2026: Finance, Marketing, HR, Operations, IT & Systems, Business Analytics, International Business, Retail Management, Logistics & Supply Chain, Healthcare Administration, Media Management, Sports Management, Pharma Management, Banking & Insurance, and Digital Marketing. Dual specialization allowed in most combinations — students can choose Finance + Analytics or Marketing + Digital Marketing. This variety makes Amity particularly popular for niche or emerging MBA tracks not available at FORE or LBSIM." },
]

export default function AmityMBADelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "Amity University MBA Delhi/Noida", url: "/amity-university-mba-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Amity University MBA Programmes in Delhi NCR 2026",
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
          { label: "Amity University MBA", href: "/amity-university-mba-delhi" },
        ]}
        h1="Amity University MBA Noida/Delhi 2026 — Fees, Admission & Placement"
        subtitle="Amity University Noida (Sector 125) is Delhi NCR's largest private university — NAAC A+, 60+ MBA specializations, fees ₹4.8–5.2L per year, admission without CAT (Amity JEE). Average placement ₹7–9 LPA with TCS, Infosys, HDFC, and EXL as top recruiters."
        heroStats={[
          { value: "NAAC A+", label: "Accreditation" },
          { value: "60+", label: "MBA Specializations Available" },
          { value: "₹8 LPA", label: "Average Placement 2025" },
          { value: "No CAT", label: "Required — Amity JEE Accepted" },
        ]}
        introHeading="Amity University MBA 2026 — Complete Guide for Delhi NCR Students"
        introParagraphs={[
          "Amity University Noida is Delhi NCR's largest and most well-known private university — NAAC A+, UGC recognized, with a sprawling 150-acre residential campus in Sector 125, Noida (25 minutes from Delhi, directly on the metro). Amity Business School (ABS) is Amity's flagship management school, offering 60+ MBA specializations from Finance and Marketing to Sports Management and Media Management — the widest MBA specialization range in Delhi NCR.",
          "The key advantage of Amity MBA: admission does not require CAT. Amity JEE (conducted online year-round) is the primary admission test — 90 MCQs in 90 minutes, significantly easier than CAT. High CAT/CMAT scorers can use their national test scores for scholarship (up to 50% fee waiver for CAT 75+ percentile). This makes Amity accessible for students with strong academic backgrounds who didn't clear CAT, or who are applying later in the admission cycle.",
          "Amity MBA placement (₹7–9 LPA avg) is lower than top-tier Delhi B-schools like FORE (₹12 LPA), IMT Ghaziabad (₹12.5 LPA), or FMS (₹32 LPA). Amity's placement strength is in IT services (TCS, Infosys, HCL, Wipro — all with large Noida campuses), banking (HDFC Bank, Axis Bank, ICICI), and analytics BPO (EXL Service, WNS Analytics — both Noida-based). Choose Amity if your CAT score is 50–70 percentile, you prefer a university MBA degree over PGDM, or you're targeting the Noida IT and BPO sector.",
        ]}
        colleges={colleges}
        whyHeading="Why Choose Amity University MBA 2026?"
        whyPoints={[
          { title: "Admission Without CAT — Amity JEE", description: "Amity MBA does not require CAT — Amity JEE is the primary test (90 MCQs, 90 min, conducted online). No minimum score cutoff — admission is based on JEE score + academic record. Application available year-round at amity.edu. Multiple admission rounds (January, March, May, July batches). For students who missed the CAT cycle or scored below 60 percentile, Amity is a reliable Delhi NCR MBA option without requiring a year's wait for the next CAT." },
          { title: "60+ Specializations — Most in Delhi NCR", description: "Amity offers 60+ MBA specializations — no other Delhi NCR MBA college comes close in variety. Unique specializations not available at FORE or LBSIM: Sports Management, Media & Entertainment, Pharma Management, Logistics & SCM, Retail Management, NGO Management, and Defence Studies. Students can pursue dual specializations in most combinations. For students with niche career goals (pharma, media, sports), Amity is often the only option with a dedicated specialization." },
          { title: "Noida Location — IT & BPO Ecosystem", description: "Amity's Sector 125 Noida campus is surrounded by India's largest IT and BPO cluster: TCS Noida (30,000+ employees, 5 km), HCL Technologies (Noida HQ, 10 km), EXL Service (Noida HQ, 8 km), WNS Analytics (Noida, 6 km), Genpact (15 km), and 500+ IT companies in Noida Sector 62/63. This proximity gives Amity MBA students easy access to IT company placements, internships, and guest lecture programs that strengthen the IT management and analytics MBA tracks." },
          { title: "Residential Campus with International Exposure", description: "Amity's 150-acre Noida campus is fully residential — 30+ hostels, food courts, sports facilities, and a hospital on campus. Amity has 200+ international university partnerships for student exchange and dual degree programmes. 20% of batch participates in exchange semesters to UK, USA, and Europe. Amity International School of Business (Amity London) allows 1-semester exchange. International exposure is one of Amity's genuine differentiators from similarly-priced Delhi B-schools." },
          { title: "University MBA Degree — Government Job Eligibility", description: "Amity awards an MBA degree (not PGDM) — recognized by UGC as a full university degree from a deemed university. This is important for: government job applications (PSU Management Trainee, UPSC Civil Services) that require 'MBA from recognized university,' teacher eligibility (NET-qualified MBA holders can teach management), bank PO/SO positions specifying 'MBA from UGC-recognized university.' FORE and LBSIM offer PGDM (not MBA degree) — fine for private sector but Amity MBA has an advantage for government roles." },
          { title: "CAT Score Scholarships up to 50%", description: "Amity offers merit scholarships for national test scores: CAT 90+ %ile → 50% fee waiver (saves ₹5.2L). CAT 75–89 %ile → 25% fee waiver (saves ₹2.6L). CMAT 90+ %ile → 25% waiver. XAT 80+ %ile → 25% waiver. These scholarships significantly reduce the effective fee for strong test-takers who choose Amity over higher-ranked colleges for personal reasons (location preference, family constraints, specific niche specialization). Apply for scholarship at admission stage — not available post-admission." },
        ]}
        admissionHeading="Amity University MBA Admission Process 2026"
        admissionSteps={[
          { step: "1", title: "Register and Write Amity JEE 2026", description: "Amity JEE for MBA: Register at amity.edu/apply (year-round registration, no fixed last date). Online test: 90 MCQs in 90 minutes. Sections: English 30, Logical Reasoning 30, Quantitative Aptitude 20, GK 10. No negative marking. Difficulty: moderate — significantly easier than CAT. Test available at Amity assessment centres in Delhi, Noida, Gurugram, and 30+ Indian cities. Result within 48 hours of test. Alternatively, submit CAT 2025 / CMAT 2026 / XAT 2026 / MAT score in lieu of Amity JEE for automatic shortlisting and scholarship consideration." },
          { step: "2", title: "Personal Interview at Amity Noida Campus", description: "Amity MBA PI: conducted weekly at Noida campus (Sector 125) and in Delhi/Gurugram centres. PI is 15–20 minutes — friendly and structured. Topics: academic background, why MBA, career goals, current affairs, knowledge of chosen specialization. No technical depth required. GD is not conducted — direct PI. Amity accepts most shortlisted candidates — acceptance rate is high compared to FORE or MDI. Receive offer letter within 3–5 days of PI. Multiple intakes per year — July 2026 batch is largest, January 2026 batch available for late applicants." },
          { step: "3", title: "Select Specialization — All 60+ Available", description: "After offer acceptance, select your MBA specialization from 60+ options at amity.edu specialization portal. Popular choices: Finance, Marketing, HR, IT & Systems, Business Analytics, International Business, Retail, Logistics. Dual specialization: select primary (12 elective credits) and secondary specialization (6 credits). First-come basis for limited-seat niche programmes (Media Management, Sports Management have 30–40 seats). Specialization can be changed in Semester 1 — change request processed by the academic office." },
          { step: "4", title: "Apply for CAT/CMAT Scholarship Before Fee Payment", description: "If you have CAT 75+ or CMAT 90+ score: apply for merit scholarship before paying fees at amity.edu/scholarship. Submit score card + offer letter. Scholarship approved within 7–10 days. With CAT 90+ %ile scholarship (50% waiver): effective fees drop from ₹5.2L/year to ₹2.6L/year (₹5.2L total instead of ₹10.4L) — making Amity one of the most cost-effective MBA options in Delhi NCR at that price point. Pay remaining fees by DD/online after scholarship confirmation." },
          { step: "5", title: "Plan Noida IT Ecosystem Internship Early", description: "Amity MBA students should target Noida's IT and BPO companies for summer internship (March–May 2026, Semester 2). Top Amity internship targets accessible without strong alumni network: TCS Noida (apply at tcs.com/careers), HCL Technologies (hcltech.com), EXL Service (exlservice.com), WNS Analytics (wns.com), Genpact (genpact.com). All these companies have recruitment relationships with Amity given proximity. Apply directly via LinkedIn + Amity's placement office referrals. A Noida IT/BPO internship converts to a full-time offer 40–60% of the time at these companies." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free Amity University MBA Admission Guidance 2026"
        ctaSubtext="Tell us your 12th/graduation marks, Amity JEE or CAT score, and preferred specialization — our counsellors will guide you through Amity admission and scholarship application."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
          { label: "MBA Colleges Noida", href: "/mba-colleges-noida", icon: "" },
          { label: "MBA Colleges Greater Noida", href: "/mba-colleges-greater-noida", icon: "" },
          { label: "MBA Admission Without CAT Delhi", href: "/mba-admission-delhi-without-cat", icon: "" },
          { label: "IP University MBA Colleges Delhi", href: "/ip-university-mba-delhi", icon: "" },
          { label: "Online MBA Delhi", href: "/online-mba-delhi", icon: "" },
          { label: "Low Fees MBA Colleges Delhi", href: "/low-fees-mba-colleges-delhi", icon: "" },
          { label: "MBA in Business Analytics Delhi", href: "/mba-in-business-analytics-delhi", icon: "" },
          { label: "MBA in IT Delhi", href: "/mba-in-information-technology-delhi", icon: "" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "" },
        ]}
      />
    </>
  )
}
