import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "MBA in Healthcare Management Delhi 2026",
  description: "Best MBA Healthcare Management colleges in Delhi 2026: IIHMR Delhi, FORE, IHMR. Hospital management, pharma, health-tech careers. Salary ₹8–20 LPA. Full guide.",
  path: "/mba-in-healthcare-management-delhi",
  keywords: [
    "mba in healthcare management delhi",
    "best mba healthcare management colleges delhi",
    "mba hospital management delhi",
    "mba in health management delhi",
    "healthcare mba delhi 2026",
    "mba in pharmaceutical management delhi",
    "hospital administration mba delhi",
    "mba healthcare salary delhi",
    "top mba healthcare colleges delhi ncr",
    "mba in health services management delhi",
    "mba healthcare admission delhi",
    "mba in hospital administration delhi",
    "healthcare management colleges delhi",
    "mba in health tech delhi",
    "mba pharma management delhi",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "IIHMR Delhi — MBA in Hospital and Health Management", location: "3, Pusa Road, New Delhi (near Rajendra Place)", naac: "A", fees: "₹9.5L total", placement: "₹8.5 LPA avg", slug: "iihmr-delhi-institute-health-management-research" },
  { name: "FORE School of Management — PGDM with Healthcare Electives", location: "B-18, Qutab Institutional Area, New Delhi", naac: "A+", fees: "₹16.5L total", placement: "₹12 LPA avg", slug: "fore-school-of-management-delhi" },
  { name: "Amity University — MBA Hospital Administration", location: "Sector 125, Noida (Delhi NCR)", naac: "A+", fees: "₹4.5L per year", placement: "₹7 LPA avg", slug: "amity-university-noida-mba-hospital-administration" },
  { name: "Manipal University Jaipur (Delhi NCR Students) — MBA Healthcare", location: "Online/Jaipur Campus (accessible from Delhi)", naac: "A+", fees: "₹3.5L per year", placement: "Self-placed", slug: "manipal-university-jaipur-mba-healthcare" },
  { name: "Delhi Pharmaceutical Sciences and Research University — MBA Pharmaceutical Management", location: "Pushp Vihar, Sector-3, New Delhi", naac: "A", fees: "₹2.5L per year", placement: "₹7 LPA avg", slug: "dpsru-delhi-pharmaceutical-sciences-mba" },
  { name: "Jamia Hamdard — MBA in Health Services Management", location: "Hamdard Nagar, New Delhi", naac: "A+", fees: "₹2.8L per year", placement: "₹7.5 LPA avg", slug: "jamia-hamdard-mba-health-services-management-delhi" },
]

const faqs = [
  { q: "Which is the best college for MBA Healthcare Management in Delhi?", a: "IIHMR Delhi (Indian Institute of Health Management Research) is the best dedicated MBA Healthcare Management college in Delhi — specifically focused on hospital and health management, NAAC A rated, fees ₹9.5L total, placement ₹8.5 LPA avg in hospitals, healthcare companies, and pharma firms. Jamia Hamdard (NAAC A+) is the best value option — university campus, fees ₹2.8L/year, pharmacy industry placements. DPSRU is the best for pharmaceutical management specifically. FORE School of Management is the best option for healthcare management within a broader PGDM (better brand, higher placement at ₹12 LPA avg)." },
  { q: "What is the salary after MBA Healthcare Management in Delhi?", a: "MBA Healthcare Management salary in Delhi NCR 2025: Hospital Administrator (private hospitals — Max, Apollo, Fortis) ₹6–12 LPA starting, ₹15–25 LPA at 5 years. Healthcare Consultant (Deloitte Health, EY Health, McKinsey Health) ₹12–22 LPA. Pharmaceutical Marketing Manager (Sun Pharma, Cipla, Lupin, Dr. Reddy's — all with Delhi offices) ₹8–15 LPA. Health-Tech Product Manager (Practo, 1mg, Pharmeasy — NCR-based) ₹12–22 LPA. Insurance and TPA Manager (Star Health, Aditya Birla Health) ₹8–14 LPA. Public Health Officer (AIIMS, ICMR, MOHFW) ₹7–12 LPA." },
  { q: "What careers are available after MBA Hospital Administration in Delhi?", a: "Career options after MBA Hospital Administration in Delhi 2026: Hospital Operations Manager (Max, Apollo, Fortis, Medanta — all Delhi NCR) ₹7–15 LPA. Healthcare Consultant (Big 4 healthcare practice) ₹12–22 LPA. Health Insurance Manager (Star Health, HDFC ERGO Health) ₹8–15 LPA. Clinical Research Manager (pharma companies, CROs in Gurugram) ₹8–16 LPA. Health-Tech Product Manager (Practo, 1mg, Lybrate) ₹10–22 LPA. Pharmaceutical Brand Manager (top 10 pharma companies with Delhi offices) ₹8–14 LPA. Government Health Officer (AIIMS, MOHFW, NHM) ₹7–12 LPA. Delhi NCR has India's highest concentration of private hospitals — Max Healthcare (6 hospitals), Apollo Delhi, Fortis, and Medanta all recruit from Delhi healthcare MBA programmes." },
  { q: "Is MBA Healthcare Management a good career choice in Delhi?", a: "Yes — MBA Healthcare Management is a strong career choice in Delhi NCR for 2026. India's healthcare industry is growing at 22% CAGR, second only to IT in employment growth. Delhi NCR has India's largest private hospital cluster — Max Healthcare, Apollo, Fortis, Medanta, Sir Ganga Ram, AIIMS — creating thousands of management positions annually. Health-Tech is booming: Practo, 1mg, Pharmeasy, and Lybrate (all significant Delhi NCR operations) hire MBA healthcare graduates for product and business roles at ₹12–22 LPA. Post-COVID, hospital operations management is increasingly professionalized — creating strong demand for MBA healthcare graduates." },
  { q: "What is the difference between MBA Healthcare Management and MBA Hospital Administration?", a: "MBA Healthcare Management is a broader programme covering the entire healthcare ecosystem — hospitals, pharma, health insurance, health-tech, public health policy, and clinical research. MBA Hospital Administration is narrower — focused specifically on running hospital operations: patient flow, staffing, billing, quality management (NABH/JCI accreditation), and facility management. IIHMR Delhi offers Hospital and Health Management (broad). Amity offers Hospital Administration (operations-focused). DPSRU offers Pharmaceutical Management (pharma-specific). Choose based on target career: hospital operations → Hospital Administration MBA. Healthcare consulting or health-tech → Healthcare Management MBA." },
]

export default function MBAHealthcareManagementDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "MBA in Healthcare Management Delhi", url: "/mba-in-healthcare-management-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best MBA Healthcare Management Colleges in Delhi 2026",
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
          { label: "MBA in Healthcare Management Delhi", href: "/mba-in-healthcare-management-delhi" },
        ]}
        h1="Best MBA in Healthcare Management Colleges in Delhi 2026"
        subtitle="MBA Healthcare Management prepares you for hospital administration, pharmaceutical management, health-tech, and healthcare consulting careers. IIHMR Delhi is India's top dedicated healthcare management institute. Salary range: ₹8–22 LPA. Delhi NCR hosts India's largest private hospital cluster — Max, Apollo, Fortis, Medanta."
        heroStats={[
          { value: "22% CAGR", label: "India Healthcare Industry Growth" },
          { value: "₹8–22 LPA", label: "Healthcare MBA Salary Range" },
          { value: "6+", label: "Dedicated Healthcare MBA Colleges Delhi" },
          { value: "No CAT", label: "Many Programmes Accept CMAT/MAT" },
        ]}
        introHeading="MBA Healthcare Management in Delhi 2026 — Programmes, Careers & Guide"
        introParagraphs={[
          "MBA in Healthcare Management is one of the fastest-growing MBA specializations in India — and Delhi NCR is the ideal place to study it. Delhi is home to India's largest private hospital cluster (Max Healthcare 6 hospitals, Apollo Delhi, Fortis, Medanta Gurugram, AIIMS — the world's largest hospital), AIIMS (India's premier medical institution), dozens of pharma company offices, and a booming health-tech ecosystem (Practo, 1mg, Pharmeasy). Healthcare management graduates from Delhi B-schools have a vast placement market within 30 km.",
          "IIHMR Delhi (Indian Institute of Health Management Research) is India's best dedicated healthcare management institute — specifically designed for hospital and health management careers. Located near Pusa Road (Central Delhi), IIHMR Delhi's MBA-HHM programme covers hospital operations, health financing, pharmaceutical management, and public health policy. CAT/MAT/GMAT accepted, fees ₹9.5L total, placement ₹8.5 LPA avg. Jamia Hamdard's MBA Health Services Management is the best value option — university campus, fees ₹2.8L/year, with strong pharmacy industry placement.",
          "Healthcare management careers span three major sectors in Delhi: Hospital Administration (private hospital chains pay ₹7–15 LPA for MBA graduates), Pharmaceutical Management (Sun Pharma, Cipla, Lupin Delhi offices recruit for sales, marketing, and brand management at ₹8–14 LPA), and Health-Tech (Practo, 1mg, Lybrate pay ₹12–22 LPA for product and business roles). Post-COVID healthcare professionalization has significantly increased demand for MBA healthcare management graduates across all three sectors.",
        ]}
        colleges={colleges}
        whyHeading="Why MBA Healthcare Management in Delhi NCR 2026?"
        whyPoints={[
          { title: "India's Largest Private Hospital Cluster", description: "Delhi NCR has India's highest concentration of quality private hospitals: Max Healthcare (6 Delhi hospitals, 2,400 beds), Apollo Delhi (2 campuses), Fortis (5 Delhi NCR hospitals), Medanta (Gurugram — 1,200 beds, largest private hospital in India), Sir Ganga Ram, BLK Max, Safdarjung (government), AIIMS. All these hospitals have professional management teams and hire MBA healthcare graduates for operations, quality, and administration roles annually." },
          { title: "AIIMS — World-Class Healthcare Ecosystem", description: "AIIMS Delhi (1,000+ beds, 80+ departments) is the world's largest hospital and India's foremost medical institution. AIIMS proximity means Delhi healthcare management graduates interact with India's best medical minds — internship opportunities at AIIMS departments, exposure to public health policy (MOHFW is in Delhi), and research collaboration with ICMR (also Delhi-based). IIHMR Delhi has formal AIIMS faculty interactions in curriculum." },
          { title: "Pharmaceutical Sector Headquarters", description: "Most top Indian pharma companies have Delhi offices for government affairs, regulatory liaison, and sales management: Sun Pharma, Cipla, Lupin, Dr. Reddy's, Abbott India, GSK India (all have Delhi NCR operations). Pharma marketing and brand management MBA roles pay ₹8–14 LPA starting. DPSRU (Delhi Pharmaceutical Sciences) and Jamia Hamdard have direct pharma industry placement relationships." },
          { title: "Health-Tech Boom in NCR", description: "Practo (Gurgaon HQ), 1mg (Gurugram), Lybrate (Delhi), Pharmeasy (NCR operations) — all major Indian health-tech companies have NCR presence. Health-Tech Product Manager and Business Development Manager roles pay ₹12–22 LPA for MBA healthcare graduates who combine domain knowledge with product thinking. Digital health is the fastest-growing subsector — consulting (Deloitte Digital Health) and MNCs (Abbott Digital, Roche Digital Health) also hire from Delhi." },
          { title: "Healthcare Consulting at Big 4", description: "Deloitte Health, EY Health, KPMG Healthcare, and PwC Health have dedicated healthcare consulting practices in Delhi. McKinsey's Delhi office has healthcare as a core vertical. Healthcare consulting roles pay ₹13–22 LPA starting for MBA healthcare graduates with analytical ability. Big 4 Delhi offices recruit from IIHMR Delhi, FORE (healthcare elective), and Jamia Hamdard for hospital operations consulting and health policy projects." },
          { title: "Health Insurance & TPA Sector", description: "Star Health Insurance, HDFC ERGO Health, Aditya Birla Health Insurance, and major insurance TPAs (Medi Assist, Raksha TPA) have large Delhi NCR operations. Health Insurance Manager and TPA Manager roles pay ₹8–15 LPA for MBA healthcare graduates — growing rapidly with PM Jan Arogya Yojana (Ayushman Bharat) expansion requiring more insurance operations management." },
        ]}
        admissionHeading="MBA Healthcare Management Admission Process Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Choose the Right Healthcare MBA Programme", description: "Hospital operations career → IIHMR Delhi MBA-HHM (₹9.5L, CAT/MAT). Pharma career → DPSRU MBA Pharma Management (₹2.5L/year, GPAT/CMAT) or Jamia Hamdard MBA-HSM (₹2.8L/year, Jamia entrance). Health-Tech/Consulting → FORE PGDM with healthcare electives (₹16.5L, CAT 80+). Budget option → Amity University MBA Hospital Administration (₹4.5L/year, Amity JEE). Online/distance option → Manipal University Jaipur or Sikkim Manipal (₹3.5L/year, accessible from Delhi)." },
          { step: "2", title: "IIHMR Delhi Application Process", description: "IIHMR Delhi MBA-HHM 2026: Apply at iihmr.edu (February–April 2026). Accepts CAT, XAT, GMAT, MAT, CMAT, and IIHMR's own entrance test. Eligibility: any graduation with 50% marks. No healthcare background required. Shortlisting: entrance score 60% + academic record 20% + work experience 20%. Work experience in healthcare is a strong positive signal but not mandatory. PI covers: healthcare system knowledge, motivation for healthcare management, current healthcare news." },
          { step: "3", title: "Jamia Hamdard MBA-HSM Application", description: "Jamia Hamdard MBA Health Services Management: Apply at jamiahamdard.edu (March–June 2026). Entrance: Jamia Hamdard Management Admission Test (JHMAT) conducted at Jamia campus. Subjects: English, Logical Reasoning, GK, Quantitative Aptitude. Eligibility: any graduation 50%. Fees ₹2.8L/year — lowest among Delhi healthcare MBA colleges with university-campus experience. Strong pharma sector placement due to Hamdard group's pharmaceutical background." },
          { step: "4", title: "Build Healthcare Domain Knowledge", description: "Before healthcare MBA starts (June–July 2026): study India's healthcare system structure — MOHFW, NHPS/Ayushman Bharat, NMC Act, NABH accreditation standards. Learn basic healthcare finance: DRG (Diagnostic Related Groups) pricing, CGHS rates, insurance TPA process. Read: 'Being Mortal' (Atul Gawande), 'India's Health System' (Government reports). Follow healthcare news: Express Healthcare, ET Health, Economic Times Health. This domain knowledge impresses in PI and fast-tracks your learning in Semester 1." },
          { step: "5", title: "Plan Hospital Internship During MBA", description: "Healthcare MBA students must secure a hospital or healthcare organization internship (8 weeks, typically March–May 2026 in Semester 2). Top Delhi internship targets: Max Healthcare (apply via LinkedIn 4 months before), Apollo Hospitals Management Trainee internship, Fortis Healthcare Corporate Office, AIIMS Hospital Administration (apply through IIHMR faculty contacts). Pharma track: Cipla, Sun Pharma, Abbott internship programs. Health-tech: Practo, 1mg business development internships. Healthcare internships are best found through direct application + faculty referrals — not formal campus placement drives." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free MBA Healthcare Management Guidance Delhi 2026"
        ctaSubtext="Tell us your background (medicine / pharma / IT / general) and target role (hospital / pharma / health-tech / consulting) — our counsellors will recommend the best healthcare MBA in Delhi for you."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
          { label: "FORE School of Management Delhi", href: "/fore-school-management-delhi", icon: "" },
          { label: "Government MBA Colleges Delhi", href: "/government-mba-colleges-delhi", icon: "" },
          { label: "MBA in HR Delhi", href: "/mba-in-hr-delhi", icon: "" },
          { label: "MBA in Operations Delhi", href: "/mba-in-operations-delhi", icon: "" },
          { label: "MBA Admission Without CAT Delhi", href: "/mba-admission-delhi-without-cat", icon: "" },
          { label: "Low Fees MBA Colleges Delhi", href: "/low-fees-mba-colleges-delhi", icon: "" },
          { label: "MBA in Business Analytics Delhi", href: "/mba-in-business-analytics-delhi", icon: "" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "" },
          { label: "MBA Colleges Delhi Placement", href: "/mba-colleges-delhi-placement", icon: "" },
        ]}
      />
    </>
  )
}
