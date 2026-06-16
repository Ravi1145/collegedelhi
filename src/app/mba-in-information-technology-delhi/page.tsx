import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "MBA in Information Technology Delhi 2026 | Best IT MBA Colleges, Salary & Admission",
  description: "Best MBA IT colleges in Delhi 2026: LBSIM PGDM-IM, IMI Delhi, MDI, Amity. IT management, digital transformation, tech consulting careers. Salary ₹10–25 LPA. Full guide.",
  path: "/mba-in-information-technology-delhi",
  keywords: [
    "mba in information technology delhi",
    "mba it colleges delhi",
    "best mba it delhi",
    "mba in it management delhi",
    "mba information technology delhi 2026",
    "mba in it delhi ncr",
    "mba it salary delhi",
    "pgdm it delhi",
    "mba in technology management delhi",
    "mba it admission delhi",
    "mba in systems management delhi",
    "mba it colleges delhi ncr",
    "mba in digital transformation delhi",
    "best college for mba it delhi",
    "mba it fees delhi",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "LBSIM Delhi — PGDM Information Management (IT Focus)", location: "Plot No. 11/7, Sector-11, Dwarka, New Delhi", naac: "A", fees: "₹12.5L total", placement: "₹11 LPA avg", slug: "lbsim-pgdm-information-management-delhi" },
  { name: "IMI Delhi — PGDM with IT & Systems Electives", location: "Qutab Institutional Area, New Delhi", naac: "A+", fees: "₹19.5L total", placement: "₹14 LPA avg", slug: "imi-delhi-international-management-institute" },
  { name: "MDI Gurgaon — PGDM with IT Management Electives", location: "MG Road, Gurgaon, Haryana", naac: "A+", fees: "₹22.5L total", placement: "₹26 LPA avg", slug: "mdi-gurgaon-management-development-institute" },
  { name: "Amity University Noida — MBA Information Technology", location: "Sector 125, Noida (Delhi NCR)", naac: "A+", fees: "₹4.5L per year", placement: "₹8 LPA avg", slug: "amity-university-noida-mba-information-technology" },
  { name: "FORE School — PGDM Big Data Analytics (Tech Management Focus)", location: "B-18, Qutab Institutional Area, New Delhi", naac: "A+", fees: "₹16.5L total", placement: "₹13 LPA avg", slug: "fore-school-of-management-pgdm-bda-delhi" },
  { name: "IP University (USMS) — MBA with IT Specialization", location: "Dwarka Campus, New Delhi", naac: "A+", fees: "₹1.8L per year", placement: "₹6 LPA avg", slug: "usms-ggsipu-university-school-management-studies-delhi" },
]

const faqs = [
  { q: "Which is the best college for MBA IT in Delhi?", a: "LBSIM Delhi's PGDM Information Management is the best dedicated MBA IT programme in Delhi — combining full MBA curriculum with IT management (ERP/SAP, Business Intelligence, Digital Transformation, Systems Analysis). NAAC A, fees ₹12.5L, avg placement ₹11 LPA. For higher placement and brand: IMI Delhi (PGDM + IT electives, ₹14 LPA avg, CAT 82–87 percentile) and MDI Gurgaon (IT management electives, ₹26 LPA avg, CAT 95+ percentile) are stronger. FORE BDA (Big Data Analytics track) is best for tech-heavy analytics roles. For budget: Amity MBA-IT (₹4.5L/year) or IP University MBA with IT (₹1.8L/year)." },
  { q: "What is the salary after MBA IT in Delhi?", a: "MBA Information Technology salary in Delhi NCR 2025: IT Consultant (Big 4 — Deloitte, EY, Accenture) ₹12–20 LPA. IT Project Manager (TCS, Infosys, Wipro senior roles) ₹10–18 LPA. Product Manager – Tech (startups, e-commerce, SaaS) ₹12–25 LPA. ERP Consultant (SAP, Oracle — Gurgaon/Noida IT parks) ₹10–18 LPA. Digital Transformation Manager (MNC Delhi offices) ₹14–22 LPA. Business Analyst – IT (banks, insurance with digital arms) ₹8–15 LPA. IT Sales Manager (enterprise software companies) ₹10–18 LPA. MDI Gurgaon IT management track: ₹22–26 LPA. LBSIM PGDM-IM: ₹11 LPA avg." },
  { q: "What is PGDM Information Management at LBSIM Delhi?", a: "LBSIM PGDM Information Management (IM) is a 2-year PGDM designed for IT and technology management careers. Core IT curriculum: IT Strategy and Governance, Enterprise Resource Planning (SAP basics), Business Intelligence and Data Warehousing, Systems Analysis and Design, Digital Transformation Management, IT Project Management, E-Commerce and Digital Business. Standard MBA subjects also covered: Marketing, Finance, HR, Operations. Ideal for: BTech/BCA/MCA graduates moving into management roles, IT professionals wanting an MBA without leaving their technology domain. Placement avg ₹11 LPA — 10% higher than LBSIM General PGDM due to IT sector premium." },
  { q: "Is MBA IT better than MBA Business Analytics in Delhi?", a: "MBA IT vs MBA Business Analytics in Delhi 2026: MBA IT covers technology management broadly — ERP, digital transformation, IT project management, systems analysis, IT governance. MBA Business Analytics focuses narrowly on data science for business — Python, SQL, machine learning, data visualization. Career comparison: MBA IT opens IT consulting, project management, ERP, and product management roles. MBA Analytics opens data analyst, business analyst, and analytics consulting roles. Salary: both are comparable (₹10–22 LPA at 2–5 years). Choose MBA IT if you want broader tech management. Choose MBA Analytics if you enjoy working with data specifically. Both are strong choices at Delhi B-schools." },
  { q: "Can I do MBA IT in Delhi without an engineering background?", a: "Yes — MBA IT programmes in Delhi do not require an engineering background. LBSIM PGDM-IM, IMI Delhi IT electives, and Amity MBA-IT all accept commerce, arts, and science graduates. IT management is about managing technology projects, vendors, and digital transformation — business and management skills matter more than coding. However, BTech graduates have an advantage in technical IT roles (ERP, system design). Commerce graduates are preferred for IT Finance and IT Audit roles. MBA IT from a good Delhi B-school without engineering is valued for IT consulting, IT sales, and digital transformation roles at MNCs." },
]

export default function MBAITDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "MBA in Information Technology Delhi", url: "/mba-in-information-technology-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best MBA Information Technology Colleges in Delhi NCR 2026",
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
          { label: "MBA in IT Delhi", href: "/mba-in-information-technology-delhi" },
        ]}
        h1="Best MBA in Information Technology Colleges in Delhi 2026"
        subtitle="MBA in Information Technology (IT Management) combines business leadership with technology strategy — covering ERP, digital transformation, IT project management, and systems management. LBSIM PGDM-IM is Delhi's best dedicated MBA IT programme. Salary: ₹10–25 LPA. Delhi NCR houses India's largest IT services hub in Noida and Gurgaon."
        heroStats={[
          { value: "₹11 LPA", label: "LBSIM PGDM-IM Avg Placement" },
          { value: "₹10–25 LPA", label: "IT Management Salary Range" },
          { value: "500K+", label: "IT Professionals in Delhi NCR" },
          { value: "No Coding", label: "Required — Management Focus" },
        ]}
        introHeading="MBA IT in Delhi 2026 — Programmes, IT Career Guide & Admission"
        introParagraphs={[
          "MBA in Information Technology (also called MBA IT Management or PGDM Information Management) is designed for professionals who want to manage technology — not just use it. Delhi NCR is the ideal location: Noida's IT parks (Sector 62, 63, 125) host TCS, Infosys, HCL, and 500+ IT companies. Gurgaon's Cyber City is India's second-largest corporate IT hub. Over 500,000 IT professionals work in Delhi NCR — creating massive demand for MBA IT graduates who can bridge the gap between business needs and technology execution.",
          "LBSIM Delhi's PGDM Information Management is the most specialized MBA IT programme in Delhi — ERP (SAP), Business Intelligence, Digital Transformation, and IT Strategy courses alongside the standard MBA curriculum. BTech and BCA graduates who join LBSIM-IM avoid starting from scratch in management while retaining their technical identity. Avg placement ₹11 LPA with top recruiters TCS, Infosys, Wipro, Accenture, and Deloitte IT consulting. IMI Delhi offers IT management electives within PGDM at ₹14 LPA avg placement.",
          "Key career tracks for MBA IT graduates in Delhi: IT Consulting at Big 4 (Deloitte, EY, Accenture — largest IT consulting practices in Gurgaon) pays ₹12–20 LPA. Product Management at tech companies (Noida-based product startups, MakeMyTrip, Zomato tech) pays ₹14–25 LPA. ERP Consulting (SAP, Oracle — major Noida/Gurgaon deployments) pays ₹10–18 LPA. Digital Transformation Manager at Delhi MNC offices pays ₹14–22 LPA.",
        ]}
        colleges={colleges}
        whyHeading="Why MBA IT in Delhi NCR 2026?"
        whyPoints={[
          { title: "Noida — India's IT Services Capital", description: "Noida (part of Delhi NCR) is India's IT services capital with 500+ IT companies: TCS Noida (30,000+ employees), HCL Technologies (Noida HQ), Infosys, Wipro, Tech Mahindra, and hundreds of smaller IT firms. IT management roles (project manager, delivery manager, account manager) at these companies pay ₹10–20 LPA for MBA IT graduates. LBSIM's Dwarka location gives easy metro access to Noida IT parks." },
          { title: "Gurgaon — IT Consulting Hub", description: "Gurgaon's Cyber City and DLF Cyber Park house India's largest IT consulting practices: Accenture India HQ, Deloitte India, EY India, KPMG India, IBM India, Capgemini India. These firms hire MBA IT management graduates for IT consulting, digital transformation, and technology advisory roles at ₹12–20 LPA. MDI Gurgaon's location within Gurgaon gives it the strongest IT consulting placement of any Delhi B-school." },
          { title: "SAP ERP Consulting Demand", description: "India has 8,000+ SAP implementations across manufacturing, BFSI, and retail — and SAP consultants are in high demand. MBA IT graduates with SAP knowledge (FI/CO, MM, SD modules) earn ₹10–18 LPA as SAP Functional Consultants. LBSIM PGDM-IM includes SAP basics. Tata Consultancy Services, IBM, Deloitte, and Infosys BPM all have large SAP practices in Noida and Gurgaon that recruit MBA IT graduates." },
          { title: "Digital Transformation Roles at MNCs", description: "Every large MNC Delhi office now has a Digital Transformation team — implementing cloud migration, AI automation, and ERP modernization. Digital Transformation Manager roles pay ₹14–22 LPA. MBAs with IT background are preferred over pure IT engineers for these roles because digital transformation requires change management, stakeholder communication, and business process redesign — all MBA skills. Delhi's MNC density creates 1,000+ such openings annually." },
          { title: "Product Management in Tech Startups", description: "Delhi NCR's startup ecosystem (200+ funded startups in Noida-Gurgaon) creates strong demand for technical product managers — people who can write product specs, talk to engineers, and understand business metrics. MakeMyTrip (Gurgaon), Zomato (Gurgaon), PaperBoat, PolicyBazaar (Gurgaon), and Lenskart (Gurgaon) all hire MBA IT graduates as Product Managers at ₹14–25 LPA. MBA IT is the fastest path from IT engineering to product management." },
          { title: "IT Audit & Cybersecurity Management", description: "Every bank, insurance company, and large corporate in Delhi NCR requires IT Audit and Information Security management — driven by RBI IT Framework, SEBI cybersecurity guidelines, and DPDP Act 2023. IT Audit Manager roles (EY, Deloitte, KPMG) pay ₹12–20 LPA. CISA (Certified Information Systems Auditor) alongside MBA IT is the strongest credential combination for this path. LBSIM PGDM-IM and IMI Delhi IT management track both include Information Security courses." },
        ]}
        admissionHeading="MBA IT Admission Process Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Choose Programme by Budget & CAT Score", description: "CAT 95+ %ile → MDI Gurgaon PGDM (₹22.5L, IT management electives, ₹26 LPA avg). CAT 82–87 %ile → IMI Delhi PGDM (₹19.5L, IT electives, ₹14 LPA avg). CAT 80–85 %ile → FORE BDA (₹16.5L, tech analytics, ₹13 LPA avg). CAT 70–75 %ile → LBSIM PGDM-IM (₹12.5L, dedicated IT management, ₹11 LPA avg). Budget priority → Amity MBA-IT (₹4.5L/year, NAAC A+, ₹8 LPA avg) or USMS IP University (₹1.8L/year, ₹6 LPA avg). For working IT professionals: Great Lakes PGPM (1-year, Gurgaon campus) at ₹11.5L total." },
          { step: "2", title: "Apply to LBSIM PGDM-IM", description: "LBSIM PGDM-IM 2026: Apply at lbsim.ac.in (December 2025–March 2026). Accepts CAT, XAT, CMAT, MAT, GMAT. Indicate PGDM-IM preference in application (both PGDM and PGDM-IM have same application — preference selected at form submission). Shortlisting criteria: entrance score 50% + academic record 30% + work experience 20%. BTech/BCA graduates preferred for PGDM-IM; engineering background given additional weight in shortlisting." },
          { step: "3", title: "IT-Focused Personal Interview Preparation", description: "MBA IT Personal Interview at Delhi B-schools: 'Why IT Management?' — prepare with a specific example from work or projects where technology and business intersected. Know current IT trends: Cloud (AWS, Azure, GCP), AI/ML in enterprise, Digital Payments (UPI, RuPay), Cybersecurity regulations (DPDP Act 2023), IT outsourcing market. For LBSIM PGDM-IM: expect questions on ERP systems, IT project lifecycle, and agile methodology basics. For IMI/MDI: broader technology strategy questions." },
          { step: "4", title: "Learn Basic IT Tools Before Joining", description: "Before MBA IT starts (June–July 2026): complete these free foundations — Excel Advanced (pivot tables, VLOOKUP, basic VBA — critical for all management roles), SQL Basics (Mode Analytics tutorial, 4 hours — query databases, understand joins), and Project Management basics (PMI's free PMP Overview, or Coursera Google Project Management Certificate). These three tools are used in 80% of IT management roles — starting with them learned saves valuable time in Semester 1." },
          { step: "5", title: "Certifications to Pursue During MBA IT", description: "High-value certifications to pursue alongside MBA IT in Delhi 2026: PMP (Project Management Professional) — exam-based, ₹30,000 exam fee, ₹2–4 LPA salary increment. CISA (Certified Information Systems Auditor) — ₹25,000 exam fee, opens IT Audit roles at Big 4. SAP Certified Application Associate — ₹15,000–25,000, SAP-certified consultants earn 20–30% premium. AWS Cloud Practitioner — free study, ₹8,000 exam fee, cloud knowledge valued in all IT roles. Most LBSIM, IMI, and MDI IT management students pursue 1–2 certifications during their MBA — Finance and consulting-track MBA students pursue CFA/ACCA similarly." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free MBA IT Admission Guidance Delhi 2026"
        ctaSubtext="Tell us your background (BTech / BCA / Commerce), CAT score, and target role (IT consulting / product management / ERP) — our counsellors will recommend the best MBA IT programme in Delhi NCR."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "🏛️" },
          { label: "LBSIM Delhi — PGDM", href: "/lbsim-delhi", icon: "🏛️" },
          { label: "MBA in Business Analytics Delhi", href: "/mba-in-business-analytics-delhi", icon: "📊" },
          { label: "FORE School of Management Delhi", href: "/fore-school-management-delhi", icon: "🏫" },
          { label: "IMT Ghaziabad — PGDM", href: "/imt-ghaziabad", icon: "🏫" },
          { label: "MBA Colleges Noida", href: "/mba-colleges-noida", icon: "📍" },
          { label: "MBA Colleges Greater Noida", href: "/mba-colleges-greater-noida", icon: "🏘️" },
          { label: "PGDM Colleges Delhi", href: "/pgdm-colleges-delhi", icon: "📋" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "🏆" },
          { label: "MBA in Operations Delhi", href: "/mba-in-operations-delhi", icon: "⚙️" },
        ]}
      />
    </>
  )
}
