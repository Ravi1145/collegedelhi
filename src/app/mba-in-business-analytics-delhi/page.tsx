import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "MBA in Business Analytics Delhi 2026 | Best Colleges, Salary & Admission",
  description: "Best MBA Business Analytics colleges in Delhi 2026: FORE BDA, IMI Delhi, MDI, Amity. Data science, analytics salary ₹12–25 LPA. Python, R, SQL curriculum. Full guide.",
  path: "/mba-in-business-analytics-delhi",
  keywords: [
    "mba in business analytics delhi",
    "best mba business analytics colleges delhi",
    "mba data analytics delhi",
    "mba in analytics delhi 2026",
    "business analytics mba delhi",
    "mba in data science delhi",
    "mba analytics salary delhi",
    "top mba analytics colleges delhi ncr",
    "mba in analytics admission delhi",
    "mba business analytics fees delhi",
    "pgdm business analytics delhi",
    "mba in big data analytics delhi",
    "mba in analytics delhi ncr",
    "mba data analytics career delhi",
    "best college for mba analytics delhi",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "FORE School of Management — PGDM (Big Data Analytics)", location: "B-18, Qutab Institutional Area, New Delhi", naac: "A+", fees: "₹16.5L total", placement: "₹13 LPA avg", slug: "fore-school-of-management-pgdm-bda-delhi" },
  { name: "MDI Gurgaon — PGDM with Business Analytics Electives", location: "MG Road, Gurgaon, Haryana", naac: "A+", fees: "₹22.5L total", placement: "₹26 LPA avg", slug: "mdi-gurgaon-management-development-institute" },
  { name: "IMI Delhi — PGDM with Analytics Electives", location: "Qutab Institutional Area, New Delhi", naac: "A+", fees: "₹19.5L total", placement: "₹14 LPA avg", slug: "imi-delhi-international-management-institute" },
  { name: "Amity University Noida — MBA Business Analytics", location: "Sector 125, Noida (Delhi NCR)", naac: "A+", fees: "₹5.5L per year", placement: "₹8 LPA avg", slug: "amity-university-noida-mba-business-analytics" },
  { name: "LBSIM Delhi — PGDM Information Management (Analytics Focus)", location: "Dwarka, New Delhi", naac: "A", fees: "₹12.5L total", placement: "₹11 LPA avg", slug: "lbsim-pgdm-information-management-delhi" },
  { name: "Great Lakes Institute — PGPM Business Analytics (1-Year)", location: "Gurgaon (Delhi NCR) + Chennai Campus", naac: "A", fees: "₹11.5L total", placement: "₹11 LPA avg", slug: "great-lakes-institute-management-gurgaon" },
]

const faqs = [
  { q: "Which is the best MBA Business Analytics college in Delhi?", a: "FORE School of Management Delhi is the best dedicated MBA Business Analytics college in Delhi — its PGDM Big Data Analytics (BDA) is a 2-year programme with dedicated analytics curriculum: Python, R, SQL, Tableau, machine learning for business, and data-driven decision making. CAT 80–85 percentile, fees ₹16.5L, placement ₹13 LPA avg. For candidates with 95+ CAT percentile, MDI Gurgaon's analytics electives (SAS, R, Tableau) and ₹26 LPA placement is the stronger choice. IMI Delhi is a good option at 82–87 CAT percentile with analytics specialization." },
  { q: "What is the salary after MBA Business Analytics in Delhi?", a: "MBA Business Analytics salary in Delhi 2025: Data Analyst (entry, 0–2 years) ₹6–10 LPA. Business Analyst (IT/consulting, 2–4 years) ₹10–18 LPA. Analytics Manager (5+ years) ₹18–30 LPA. Data Science Manager (tech companies) ₹20–35 LPA. Top companies paying ₹15–25 LPA for MBA analytics graduates in Delhi: Amazon, Flipkart, EXL Service (Noida HQ), WNS Analytics, Genpact Analytics, Mu Sigma, McKinsey Analytics. FORE BDA avg ₹13 LPA, MDI analytics avg ₹22–26 LPA, IMI Delhi analytics avg ₹14 LPA." },
  { q: "What technical skills do I learn in MBA Business Analytics in Delhi?", a: "MBA Business Analytics curriculum at Delhi colleges 2026: Programming: Python (pandas, numpy, sklearn, matplotlib), R (statistical computing), SQL (database querying, joins, aggregations). BI Tools: Tableau, Power BI, Google Data Studio. Statistics: Regression, hypothesis testing, A/B testing, time series forecasting. Machine Learning: Classification, clustering, decision trees, random forests. Big Data: Hadoop, Spark basics (FORE BDA curriculum). Database: MySQL, PostgreSQL. Excel Advanced: VBA, pivot tables. Additional: Excel for Financial Modelling, SAS (MDI Gurgaon). Most programmes require no prior coding — Python and SQL taught from scratch." },
  { q: "What jobs can I get after MBA Business Analytics in Delhi?", a: "MBA Business Analytics career options in Delhi NCR 2026: Business Analyst (IT/product companies) ₹8–16 LPA. Data Analyst (e-commerce, BFSI) ₹7–14 LPA. Product Analyst (Zomato, Paytm, MakeMyTrip — all Delhi NCR) ₹10–20 LPA. Analytics Consultant (Deloitte Analytics, EY Analytics, KPMG) ₹12–22 LPA. Risk Analyst (banks, insurance) ₹10–18 LPA. Digital Marketing Analyst (performance marketing) ₹8–15 LPA. Supply Chain Analytics (Amazon, Flipkart logistics centers in NCR) ₹10–18 LPA. EXL Service, WNS Analytics, and Genpact (all Noida-based) are the largest analytics employers in Delhi NCR." },
  { q: "Is MBA Business Analytics better than MBA Finance in Delhi?", a: "MBA Business Analytics vs Finance in Delhi 2026: Analytics is a newer, faster-growing field — demand growing 25% per year vs 10% for traditional Finance. Analytics salary at 5 years: ₹18–30 LPA (comparable to Finance). Analytics roles exist in every sector — banking, retail, healthcare, e-commerce, consulting — more diverse than Finance. Finance has clearer premium exit paths (investment banking ₹25–45 LPA). Choose Analytics if you enjoy data/statistics and technology. Choose Finance if you prefer financial markets, banking, and investment. Both are strong choices at top Delhi B-schools — some students do Finance + Analytics double specialization at MDI and FORE." },
]

export default function MBABusinessAnalyticsDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "MBA in Business Analytics Delhi", url: "/mba-in-business-analytics-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best MBA Business Analytics Colleges in Delhi NCR 2026",
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
          { label: "MBA in Business Analytics Delhi", href: "/mba-in-business-analytics-delhi" },
        ]}
        h1="Best MBA in Business Analytics Colleges in Delhi 2026"
        subtitle="MBA Business Analytics combines management skills with data science — Python, SQL, Tableau, machine learning, and business decision-making. FORE School PGDM-BDA is Delhi's best dedicated analytics programme. MDI Gurgaon and IMI Delhi offer strong analytics tracks. Analytics salary in Delhi: ₹10–25 LPA."
        heroStats={[
          { value: "₹13 LPA", label: "FORE BDA Avg Placement" },
          { value: "Python + SQL", label: "Core Analytics Skills Taught" },
          { value: "25%/year", label: "Analytics Job Growth India" },
          { value: "80–95 %ile", label: "CAT Cutoff Range" },
        ]}
        introHeading="MBA Business Analytics in Delhi 2026 — Programmes, Skills & Careers"
        introParagraphs={[
          "MBA in Business Analytics is the fastest-growing MBA specialization in Delhi NCR — as India's tech and e-commerce hub, Delhi NCR hosts EXL Service, WNS Analytics, Genpact, Amazon, Flipkart, and 100+ analytics-driven companies that actively recruit analytics MBA graduates. Analytics job postings in Delhi NCR grew 28% in 2024–25, making it the hottest specialization for MBA students who enjoy data and technology.",
          "FORE School of Management's PGDM Big Data Analytics (BDA) is the best dedicated analytics MBA in Delhi — Python, R, SQL, Tableau, Hadoop, and machine learning form the core curriculum alongside standard MBA subjects. CAT 80–85 percentile, fees ₹16.5L, avg placement ₹13 LPA from analytics-first companies. For candidates with higher CAT scores, MDI Gurgaon's analytics electives (95+ percentile) deliver ₹22–26 LPA avg placement with analytics coursework as part of a broader PGDM.",
          "No prior coding knowledge is required for MBA Business Analytics — all programmes teach Python and SQL from scratch. Mathematics comfort (basic statistics, probability) is helpful but not mandatory. Engineering graduates enter with a coding advantage; management and commerce graduates develop stronger business domain understanding. Top analytics employers value the combination of domain knowledge (FMCG, banking, supply chain) + analytics skills — a strength MBA students have over pure data science graduates.",
        ]}
        colleges={colleges}
        whyHeading="Why MBA Business Analytics in Delhi NCR 2026?"
        whyPoints={[
          { title: "EXL, WNS, Genpact Analytics Hub", description: "Delhi NCR is India's analytics BPO capital — EXL Service (Noida HQ, 35,000+ employees), WNS Analytics (Noida), and Genpact (Gurgaon HQ, 125,000+ employees) are the world's largest analytics outsourcing companies and recruit 100+ MBA analytics graduates per year. Starting packages: ₹8–14 LPA for senior analyst roles. Fast promotion path — Manager level (₹18–25 LPA) within 3–4 years." },
          { title: "E-Commerce Analytics at Amazon & Flipkart", description: "Amazon India's corporate office (Gurgaon) and Flipkart's analytics center employ hundreds of business analysts. Product Analyst and Business Intelligence Analyst roles at Amazon and Flipkart pay ₹14–22 LPA for MBA analytics graduates. Zomato, MakeMyTrip, Naukri (all Delhi-NCR based) also hire analytics MBA graduates for growth analytics, pricing analytics, and customer analytics roles." },
          { title: "Consulting Analytics Track", description: "Deloitte Analytics, EY Analytics, KPMG Data & Analytics, PwC Analytics, and Accenture Applied Intelligence all have large Delhi analytics practices. MBA + Analytics skills unlock consulting roles at ₹13–22 LPA — 20–30% higher than general management consulting starting packages. Big 4 analytics consulting is the most common analytics placement destination at FORE BDA and MDI Gurgaon analytics track." },
          { title: "Python, SQL & Tableau in Delhi B-School Curriculum", description: "All top Delhi analytics MBA programmes now teach: Python (3–4 courses covering data manipulation, visualization, ML), SQL (2 courses covering querying, data modeling), Tableau/Power BI (2 courses covering dashboard design and BI reporting), Statistics (4 courses from descriptive to regression and ML). Students graduate with a portfolio of 5–8 analytics projects that can be presented to employers as evidence of skills." },
          { title: "Growing BFSI Analytics Demand", description: "Delhi's banking sector (HDFC, ICICI, Axis, Kotak, SBI — all with NCR operations) increasingly hires analytics MBA graduates for credit risk modelling, fraud detection, customer segmentation, and digital banking analytics. Risk Analyst roles pay ₹10–18 LPA. McKinsey Analytics, Oliver Wyman (risk consulting), and Accenture Analytics recruit Delhi analytics MBA graduates specifically for BFSI analytics projects." },
          { title: "FORE BDA — Only Dedicated Analytics PGDM in Delhi", description: "FORE School's PGDM Big Data Analytics is the only dedicated 2-year analytics PGDM at an AICTE-approved institute in Delhi. Core analytics curriculum is taught by faculty with industry analytics experience and PhDs in statistics/data science. Capstone project: 6-month real-world analytics project with a company partner. Guest lecturers from EXL, WNS, and Deloitte Analytics provide live industry perspective in every semester." },
        ]}
        admissionHeading="MBA Business Analytics Admission Process Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Choose the Right Programme by Target Role", description: "Consulting analytics (Deloitte, EY, KPMG) → MDI Gurgaon (95+ %ile CAT) or FORE BDA (80–85 %ile). E-commerce/product analytics (Amazon, Flipkart, Zomato) → IMI Delhi or FORE BDA. BPO analytics (EXL, WNS, Genpact) → LBSIM PGDM-IM or Amity Business Analytics. Banking analytics (HDFC, ICICI risk) → IMT Ghaziabad Finance + Analytics. Pure analytics without MBA → IIT Delhi MBA or Great Lakes PGPM Analytics (1-year, Gurgaon campus)." },
          { step: "2", title: "Build Analytics Pre-MBA Foundation", description: "Before MBA starts (June 2026): complete one free online course to build foundation. Recommended: Python for Data Science (Kaggle Learn, free, 5 hours), SQL Basics (Mode Analytics, free), and Excel Advanced (Chandoo.org). These basics allow you to hit the ground running when Python courses begin in Semester 1. Kaggle competitions during MBA break periods build portfolio projects and strengthen resume for analytics placements." },
          { step: "3", title: "Apply for Analytics-Specific Programmes", description: "FORE PGDM-BDA: Apply at forecollege.com (December 2025–February 2026). FORE BDA requires indication of BDA programme preference in application. CAT 80+ %ile + strong academics + analytics interest motivation letter. IMI Delhi: Apply at imi.edu (December 2025–February 2026). MDI Gurgaon: Apply at mdi.ac.in (December 2025–January 2026). Analytics specialization selected in Semester 3 at MDI — score above 7.5 CGPA to get Analytics specialization preference." },
          { step: "4", title: "Prepare Analytics PI Story", description: "For analytics MBA Personal Interview: prepare a clear answer to 'Why Analytics?' with a specific example of a data-driven decision you've made or a business problem you'd solve with data. Study 1–2 current analytics use cases (Netflix recommendation system, Amazon pricing algorithm, Zomato delivery optimization). Know basic concepts: what is regression, what is clustering, what is A/B testing. Interviewers don't expect technical depth — they want curiosity about data and business problem-solving instinct." },
          { step: "5", title: "Join Analytics Club on Day 1 of MBA", description: "Analytics Club membership is the most important first-week decision for MBA analytics students. FORE's Analytics Club, MDI's Analytics Club, and IMI's Data Analytics Committee run: company-sponsored case competitions (EXL, WNS), Python/R workshops for skill-building, speaker series from analytics industry leaders, and networking events with alumni at analytics companies. Club members get first access to analytics internship opportunities — typically 3–4 months before formal internship season." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free MBA Business Analytics Admission Guidance Delhi 2026"
        ctaSubtext="Tell us your CAT percentile and current domain (IT / BFSI / e-commerce / consulting) — our counsellors will match you with the best MBA analytics programme in Delhi NCR."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
          { label: "FORE School of Management Delhi", href: "/fore-school-management-delhi", icon: "" },
          { label: "MDI Gurgaon — PGDM", href: "/mdi-gurgaon", icon: "" },
          { label: "IMT Ghaziabad — PGDM", href: "/imt-ghaziabad", icon: "" },
          { label: "LBSIM Delhi — PGDM", href: "/lbsim-delhi", icon: "" },
          { label: "MBA in IT Delhi", href: "/mba-in-information-technology-delhi", icon: "" },
          { label: "MBA in Operations Delhi", href: "/mba-in-operations-delhi", icon: "" },
          { label: "PGDM Colleges Delhi", href: "/pgdm-colleges-delhi", icon: "" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "" },
          { label: "MBA Colleges Delhi Placement", href: "/mba-colleges-delhi-placement", icon: "" },
        ]}
      />
    </>
  )
}
