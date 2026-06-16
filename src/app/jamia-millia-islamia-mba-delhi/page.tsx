import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Jamia Millia Islamia MBA Delhi 2026 | Fees, Cutoff, Placement & Admission",
  description: "Jamia Millia Islamia MBA 2026: Central university, NAAC A+, fees ₹55K–₹80K per year, CAT/CMAT cutoff, average placement ₹7–10 LPA. OBC/Minority quota. Full guide.",
  path: "/jamia-millia-islamia-mba-delhi",
  keywords: [
    "jamia millia islamia mba",
    "jamia millia islamia mba admission",
    "jamia mba delhi",
    "jamia mba fees",
    "jamia mba cutoff",
    "jamia mba placement",
    "jamia millia islamia management programme",
    "jamia mba 2026",
    "jamia mba without cat",
    "jamia mba review",
    "jamia millia mba program",
    "jamia mba eligibility",
    "jamia mba entrance exam",
    "jamia millia islamia mba minority quota",
    "jamia mba ranking",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "Jamia Millia Islamia — MBA (Faculty of Management Studies)", location: "Maulana Mohammad Ali Jauhar Marg, Jamia Nagar, New Delhi", naac: "A+", fees: "₹55,000–₹80,000 per year", placement: "₹7.5 LPA avg", slug: "jamia-millia-islamia-mba-faculty-management-studies-delhi" },
  { name: "Jamia Hamdard (Hamdard University) — MBA Health Services Management", location: "Hamdard Nagar, New Delhi", naac: "A+", fees: "₹2.8L per year", placement: "₹7.5 LPA avg", slug: "jamia-hamdard-mba-health-services-management-delhi" },
]

const faqs = [
  { q: "What is the fee for MBA at Jamia Millia Islamia Delhi?", a: "Jamia Millia Islamia MBA fees 2026: ₹55,000–₹80,000 per year (₹1.1L–₹1.6L total for 2 years). This makes Jamia's MBA one of the cheapest central university MBA programmes in Delhi — second only to FMS (₹55K total) in the central university MBA category. Exact fees differ by programme: MBA (Faculty of Management Studies) is ~₹55,000/year. MBA Human Resource Management is ~₹60,000/year. All fees are regulated by UGC norms for central universities. No capitation fee. SC/ST fee waiver available per UGC norms. Total affordable MBA from a central university with Delhi location." },
  { q: "What is the CAT cutoff for Jamia Millia Islamia MBA?", a: "Jamia Millia Islamia MBA 2026 admission: Jamia conducts its own entrance test (Jamia MBA Entrance Exam) — CAT score alone is not used. Jamia MBA Entrance Exam: conducted annually (typically April–May 2026). Pattern: 100 MCQs in 120 minutes covering English, Quantitative Aptitude, Logical Reasoning, and GK. No negative marking. Jamia also accepts CAT 2025 scores for a portion of general category seats. Minority quota (Muslim Minority): 50% seats reserved for Muslim minority candidates — significantly lower cutoff. OBC/SC/ST/EWS reservations as per central government norms. Competition is lower than FMS or top private B-schools — a good option for average-to-good entrance exam performers." },
  { q: "Is Jamia Millia Islamia MBA good for placement?", a: "Jamia Millia Islamia MBA placement 2024–25: Average package ₹7–7.5 LPA. Top package ₹15 LPA. 80–85% placement from MBA batch. Top recruiters: HDFC Bank, ICICI Bank, Axis Bank, Deloitte, TCS, Infosys, Amazon (ops), and Delhi NCR-based companies. Jamia MBA placement is comparable to Amity University and IP University affiliated colleges — lower than FORE (₹12 LPA), LBSIM (₹10.5 LPA), or IMT (₹12.5 LPA). Best suited for students targeting banking, government PSU, and entry-level corporate roles at ₹6–10 LPA. Jamia's south Delhi location (Okhla area) gives access to e-commerce and IT sector recruiters nearby." },
  { q: "What is the minority quota at Jamia Millia Islamia MBA?", a: "Jamia Millia Islamia is a Minority Institution (Muslim minority) recognized by the National Commission for Minority Educational Institutions (NCMEI). 50% of all MBA seats are reserved for Muslim minority candidates — a significant quota that substantially reduces competition for eligible candidates. Muslim minority candidates need a lower entrance score to secure admission compared to general category applicants competing for the remaining 50% open seats. Additionally, SC/ST/OBC/EWS reservations apply within both the minority and open portions as per UGC guidelines. Foreign nationals and NRI candidates have separate quota seats." },
  { q: "How does Jamia MBA compare to IP University MBA and Amity MBA?", a: "Jamia Millia Islamia MBA vs Amity MBA vs IP University MBA comparison 2026: Fees — Jamia ₹55–80K/year (cheapest), IP University ₹1.8–2.5L/year, Amity ₹4.8–5.2L/year. Placement avg — Jamia ₹7.5 LPA, IP University (USMS) ₹6.5 LPA, Amity ₹8 LPA. University type — Jamia: central government university (most prestigious of the three). IP University: Delhi state government. Amity: private deemed university. Entrance — Jamia: own test + minority quota, IP University: IPU CET, Amity: Amity JEE (no CAT). Choose Jamia if: eligible for minority quota, want cheapest central university MBA, located in South Delhi. Choose Amity if: need maximum specialization choices, don't qualify for any quota." },
]

export default function JamiaMilliaIslamiaMBAPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "Jamia Millia Islamia MBA", url: "/jamia-millia-islamia-mba-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Jamia Millia Islamia MBA Programmes Delhi 2026",
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
          { label: "Jamia Millia Islamia MBA", href: "/jamia-millia-islamia-mba-delhi" },
        ]}
        h1="Jamia Millia Islamia MBA Delhi 2026 — Fees, Cutoff, Placement & Admission"
        subtitle="Jamia Millia Islamia is a central government university (NAAC A+) offering MBA at just ₹55–80K per year — one of Delhi's most affordable central university MBAs. 50% minority quota seats available. South Delhi location (Jamia Nagar/Okhla). Average placement ₹7.5 LPA."
        heroStats={[
          { value: "NAAC A+", label: "Central University Accreditation" },
          { value: "₹55–80K/yr", label: "MBA Fees — Very Affordable" },
          { value: "50%", label: "Minority Quota Seats Available" },
          { value: "₹7.5 LPA", label: "Average Placement 2025" },
        ]}
        introHeading="Jamia Millia Islamia MBA 2026 — Complete Admission & Placement Guide"
        introParagraphs={[
          "Jamia Millia Islamia (JMI) is one of India's premier central universities — established in 1920, NAAC A+ rated, and recognized as an Institution of National Importance. Located in Jamia Nagar (South Delhi/Okhla area), Jamia offers MBA through the Faculty of Management Studies at extraordinarily low fees: ₹55,000–₹80,000 per year (total ₹1.1–1.6L for 2 years). As a central government university, Jamia's MBA degree is fully UGC-recognized and equivalent in government job eligibility to DU or JNU degrees.",
          "Jamia's MBA has a unique feature: 50% of all seats are reserved for Muslim minority candidates — making it significantly more accessible for eligible candidates who might face intense competition in general category at FMS or other top Delhi colleges. Within the minority seats, competition is substantially lower, giving minority candidates access to a central university MBA at nominal fees. SC/ST/OBC/EWS reservations apply additionally as per central government norms across both general and minority portions.",
          "Jamia MBA placement (₹7.5 LPA avg) reflects its position as an affordable central university option — comparable to Amity MBA and IP University affiliated colleges, but below the private autonomous PGDM colleges (FORE, LBSIM, IMT). Jamia's strongest placement sectors are banking and financial services, IT services, and South Delhi-based e-commerce companies. Students who leverage Jamia's central university brand and Delhi location actively can access better placements through self-effort and alumni networking.",
        ]}
        colleges={colleges}
        whyHeading="Why Choose Jamia Millia Islamia for MBA 2026?"
        whyPoints={[
          { title: "Central University Brand at ₹55K/Year", description: "Jamia Millia Islamia is a central university established by Parliament — the same status as JNU, Hyderabad Central University, and BHU. Its MBA degree carries 'central university' prestige that is valued by PSU recruiters, government departments, and employers who specifically prefer university-degree candidates over PGDM holders. Total cost ₹1.1–1.6L for 2 years makes it one of the most affordable quality MBAs in Delhi after FMS." },
          { title: "50% Minority Quota — Lower Competition", description: "As a declared Muslim minority institution, Jamia reserves 50% of all MBA seats for Muslim minority candidates. This dramatically reduces the competition for eligible applicants — minority candidates compete among themselves rather than against the full applicant pool. For Muslim minority students who scored 60–70 percentile in CAT or average marks in Jamia's own entrance exam, this quota provides central university MBA access that would otherwise be out of reach." },
          { title: "South Delhi Location — E-Commerce & IT Access", description: "Jamia's Okhla/Jamia Nagar campus is in South Delhi — excellent metro connectivity (Jamia Millia Islamia Metro Station on Magenta Line). South Delhi's Okhla Industrial Area, Nehru Place IT Market, and nearby Noida border give students access to IT companies, e-commerce operations (Amazon Okhla fulfillment center), and manufacturing company offices. Notable employers near Jamia campus: Asian Paints, Hero MotoCorp, and several pharma distribution companies." },
          { title: "Government PSU & Civil Services Pathway", description: "Jamia MBA's central university recognition makes it ideal for students targeting government careers post-MBA: PSU Management Trainee programmes (SAIL, BHEL, NTPC, ONGC — accept MBA from central universities), Bank PO / Bank SO (central university MBA preferred), and UPSC Civil Services (MBA helps for certain administrative roles). FMS and Jamia MBA are the most recognized central university MBAs in Delhi for government career pathways." },
          { title: "Research and Academic Culture", description: "Jamia Millia Islamia's broader academic environment enriches the MBA experience — interaction with Law School, Engineering, and Social Science departments creates cross-disciplinary perspectives. Jamia's A.J.K. Mass Communication Research Centre (one of India's best) and Faculty of Architecture create opportunities for MBA students interested in media management and real estate. PhD and research opportunities post-MBA are strong at Jamia — for students considering academia." },
          { title: "Diverse, Multicultural Cohort", description: "Jamia's national and international student diversity creates a unique multicultural learning environment. Students from Jammu & Kashmir, Assam, UP, Bihar, and international students from Middle East and Africa attend Jamia alongside Delhi students. This diversity prepares MBA graduates for India's multicultural corporate environment and international business contexts — particularly valuable for students targeting government, NGO, or international development careers." },
        ]}
        admissionHeading="Jamia Millia Islamia MBA Admission Process 2026"
        admissionSteps={[
          { step: "1", title: "Check Eligibility and Quota", description: "Before applying, confirm your eligibility: Graduation in any stream with 50% marks (45% for SC/ST). Check minority eligibility: Muslim minority candidates apply under minority quota (50% seats). SC/ST/OBC/EWS: apply under respective reservation as per central government norms. General/Other: apply for open category (50% general seats). International students: apply under NRI/Foreign National quota. Jamia MBA application at jmicoe.in (Central Online Admission, typically April–June 2026)." },
          { step: "2", title: "Jamia MBA Entrance Exam 2026", description: "Jamia MBA Entrance Exam: Conducted at Jamia campus (Okhla, South Delhi). Typically April–June 2026. Pattern: 100 MCQs, 120 minutes. Sections: English Language 25Q, Quantitative Aptitude 25Q, Logical Reasoning 25Q, GK/Current Affairs 25Q. No negative marking. Difficulty: moderate (similar to CMAT, easier than CAT). Application fee: ₹800 (general), ₹400 (SC/ST). Alternatively: CAT 2025 score accepted — check jmicoe.in for CAT acceptance in 2026 cycle (varies by year). GMAT scores considered for NRI seats." },
          { step: "3", title: "Personal Interview at Jamia Campus", description: "Jamia MBA PI: conducted at Faculty of Management Studies building, Jamia campus. PI is 15–20 minutes: current affairs (India focus), academic background, career goals, why Jamia MBA, and domain knowledge (Finance/HR/Marketing based on specialization). PI weightage is 30–40% of final merit score. Cultural fit assessment is part of PI at Jamia — demonstrate awareness of Jamia's diverse, inclusive culture. Document submission at PI: mark sheets, category certificate, minority certificate (from local government body), domicile (if applicable)." },
          { step: "4", title: "Merit List and Minority Quota Allocation", description: "Jamia MBA merit list: entrance score 60% + PI 30% + academic record 10%. Separate merit lists for minority category, SC, ST, OBC, EWS, and general. Merit list at jmicoe.in. Accept offer within 7 days and pay semester fee (₹27,500–40,000 first semester). Hostels: Jamia has residential hostels — apply immediately after admission (limited hostel seats). Off-campus accommodation: Jamia Nagar/Okhla area has affordable PG options at ₹5,000–10,000/month sharing." },
          { step: "5", title: "Leverage Central University Brand for Career", description: "To maximize career outcomes from Jamia MBA: join Jamia's placement cell activities from Day 1. Connect with Jamia alumni network (LinkedIn — search 'Jamia Millia Islamia MBA'). Target nearby employers: Asian Paints (Okhla plant), Hero MotoCorp (Dharuhera, 1 hr), Amazon (Okhla FC, internship), HDFC Bank and Axis Bank branches in South Delhi. Apply for government PSU Management Trainee programmes (SAIL, BHEL, NTPC) in Semester 3 — Jamia's central university MBA is fully eligible. Supplement with CFA Level 1 (Finance track) or SHRM-CP (HR track) certification during MBA." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free Jamia Millia Islamia MBA Admission Guidance 2026"
        ctaSubtext="Tell us your entrance test score, graduation marks, and category (general / minority / OBC / SC-ST) — our counsellors will guide you through Jamia MBA application and help you assess your admission chances."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "🏛️" },
          { label: "FMS Delhi — ₹55K Central University MBA", href: "/fms-delhi", icon: "🎓" },
          { label: "Government MBA Colleges Delhi", href: "/government-mba-colleges-delhi", icon: "🏛️" },
          { label: "IP University MBA Colleges Delhi", href: "/ip-university-mba-delhi", icon: "🏛️" },
          { label: "Amity University MBA Delhi/Noida", href: "/amity-university-mba-delhi", icon: "🏫" },
          { label: "Low Fees MBA Colleges Delhi", href: "/low-fees-mba-colleges-delhi", icon: "💰" },
          { label: "MBA Admission Without CAT Delhi", href: "/mba-admission-delhi-without-cat", icon: "📝" },
          { label: "Online MBA Delhi", href: "/online-mba-delhi", icon: "💻" },
          { label: "MBA in Healthcare Management Delhi", href: "/mba-in-healthcare-management-delhi", icon: "🏥" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "🏆" },
        ]}
      />
    </>
  )
}
