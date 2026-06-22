import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "MBA in International Business Delhi 2026",
  description: "Best MBA International Business colleges in Delhi 2026: IIFT Delhi, FMS Delhi, FORE IB, MDI Gurgaon. IIFT exam cutoff, fees ₹18.5L–₹22.5L, IB salary ₹12–30 LPA.",
  path: "/mba-in-international-business-delhi",
  keywords: [
    "mba in international business colleges in delhi",
    "best mba in international business in delhi",
    "top mba international business colleges delhi",
    "mba international business delhi 2026",
    "iift delhi mba international business",
    "mba ib delhi",
    "international business mba salary delhi",
    "mba international business admission delhi",
    "mba in international trade delhi",
    "best college for mba international business delhi ncr",
    "mba international business fees delhi",
    "iift mba ib program delhi",
    "mba in global business delhi",
    "mba import export delhi",
    "mba international management delhi",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "IIFT Delhi — MBA (International Business) — India's #1 IB Programme", location: "Qutab Institutional Area, New Delhi", naac: "A++", fees: "₹18.5L total", placement: "₹22 LPA avg", slug: "iift-delhi-indian-institute-foreign-trade" },
  { name: "FMS Delhi — MBA with International Business Electives", location: "University Enclave, North Delhi", naac: "A++", fees: "₹55K total", placement: "₹32 LPA avg", slug: "fms-delhi-faculty-management-studies" },
  { name: "MDI Gurgaon — PGDM (International Business Track)", location: "MG Road, Gurgaon, Haryana", naac: "A+", fees: "₹22.5L total", placement: "₹26 LPA avg", slug: "mdi-gurgaon-management-development-institute" },
  { name: "FORE School of Management — PGDM-International Business", location: "B-18, Qutab Institutional Area, New Delhi", naac: "A+", fees: "₹16.5L total", placement: "₹12.5 LPA avg", slug: "fore-school-of-management-pgdm-ib-delhi" },
  { name: "IMI Delhi — PGDM with International Business Electives", location: "Qutab Institutional Area, New Delhi", naac: "A+", fees: "₹19.5L total", placement: "₹14 LPA avg", slug: "imi-delhi-international-management-institute" },
  { name: "BIMTECH Greater Noida — PGDM (International Business)", location: "Knowledge Park, Greater Noida", naac: "A", fees: "₹9.5L total", placement: "₹10 LPA avg", slug: "bimtech-birla-institute-management-technology-noida" },
]

const faqs = [
  { q: "Which is the best college for MBA International Business in Delhi?", a: "IIFT Delhi (Indian Institute of Foreign Trade) is India's #1 MBA International Business college and is located in Delhi — NAAC A++, NIRF #7 in management, ₹22 LPA average placement. IIFT's MBA-IB is specifically designed for international trade — curriculum covers EXIM policy, trade finance, WTO regulations, forex management, and global supply chains. Recruiters: Standard Chartered, Citibank, HSBC, Amazon Global, Flipkart Commerce, and major export-import companies. IIFT exam (December 2025) is required — separate from CAT." },
  { q: "What is the IIFT exam cutoff for MBA International Business Delhi?", a: "IIFT 2026 exam cutoff (expected for Delhi campus): Overall: 47–50 marks out of 100. Section-wise minimum: Verbal 8–10, Quant 12–15, DILR 10–12, GK 6–8. IIFT exam has negative marking (1/3 per wrong answer). Total 110 questions, 120 minutes. After written test: GD-Essay + Personal Interview. IIFT Delhi is highly competitive — only 220 seats for Delhi campus. Guwahati campus has 120 additional seats. CAT percentile equivalent: 97–99 percentile." },
  { q: "What is the salary after MBA International Business from Delhi?", a: "Average salary after MBA International Business from Delhi 2024: IIFT Delhi ₹22 LPA avg, top package ₹50+ LPA (international placement). FMS Delhi (IB elective track) ₹28–35 LPA avg. MDI Gurgaon ₹24–26 LPA. FORE PGDM-IB ₹12.5 LPA. IMI Delhi ₹13–14 LPA. Top IB roles: Trade Finance Manager (HSBC, Standard Chartered) ₹18–30 LPA. Export-Import Manager (large MNC) ₹12–22 LPA. International Business Development (Amazon Global, Flipkart) ₹15–25 LPA. EXIM Bank officer ₹10–15 LPA." },
  { q: "What jobs can I get after MBA International Business in Delhi?", a: "MBA International Business career options in Delhi 2026: Trade Finance Analyst/Manager (HSBC, Citi, Standard Chartered) ₹12–22 LPA. International Marketing Manager (MNC exporters) ₹10–18 LPA. Global Supply Chain Manager (Amazon, DHL, Maersk) ₹14–22 LPA. Business Development Manager — International (IT/Tech export companies) ₹12–20 LPA. EXIM Policy Analyst (EXIM Bank, DGFT) ₹8–15 LPA. Forex and Treasury Analyst (banks) ₹10–16 LPA. India is the 9th largest merchandise exporter — strong IB job market in Delhi, Mumbai, and Chennai." },
  { q: "Is MBA International Business better than MBA Finance in Delhi?", a: "MBA International Business vs Finance in Delhi: IB offers niche roles in trade, global markets, and cross-border commerce — unique career path not available in general MBA Finance. IB salary range (₹10–30 LPA) is slightly lower than peak Finance/IB roles (₹25–50 LPA for investment banking). However, IB career is more geographically diverse — IIFT alumni work in Singapore, Dubai, US, and Europe. Choose MBA IB if you want to work in global trade, export-import, trade finance, or cross-border e-commerce. Choose MBA Finance if targeting domestic investment banking or equity research." },
]

export default function MBAInternationalBusinessDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "MBA in International Business Delhi", url: "/mba-in-international-business-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best MBA International Business Colleges in Delhi 2026",
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
          { label: "MBA in International Business Delhi", href: "/mba-in-international-business-delhi" },
        ]}
        h1="Best MBA in International Business Colleges in Delhi 2026"
        subtitle="MBA International Business (MBA-IB) covers global trade, EXIM policy, trade finance, forex management, and cross-border supply chains. IIFT Delhi is India's only dedicated IB institution — NAAC A++, ₹22 LPA avg placement. Compare all IB MBA colleges in Delhi NCR by cutoff, fees, and global career scope."
        heroStats={[
          { value: "NIRF #7", label: "IIFT Delhi Management Rank" },
          { value: "₹18.5L–₹22.5L", label: "Total Fees Range" },
          { value: "₹22 LPA", label: "IIFT Avg Placement" },
          { value: "Dec 2025", label: "IIFT Exam Date" },
        ]}
        introHeading="MBA International Business in Delhi 2026 — IIFT, FORE & Career Guide"
        introParagraphs={[
          "MBA in International Business (MBA-IB) is a specialized MBA track focused on cross-border commerce — covering international trade law, EXIM (export-import) finance, WTO regulations, forex and treasury management, global supply chain, and international marketing. Delhi is the ideal location for IB studies — as India's trade capital, Delhi NCR is home to EXIM Bank, the Ministry of Commerce, and hundreds of export-import companies.",
          "IIFT Delhi (Indian Institute of Foreign Trade) is India's premier IB institution — the only government-funded business school dedicated exclusively to international business. With NAAC A++ accreditation, NIRF #7 rank, and ₹22 LPA average placement (top package ₹50+ LPA for international postings), IIFT is the top MBA-IB choice for Delhi students. Admission requires the IIFT exam (separate from CAT) held every December. 220 seats for the Delhi campus.",
          "For candidates who miss IIFT's cutoff, excellent IB tracks exist at FMS Delhi (IB electives, ₹55K total fees), MDI Gurgaon (IB specialization, CAT 95+ %ile), FORE Delhi (dedicated PGDM-IB, CAT 80+ %ile), and BIMTECH Greater Noida (PGDM-IB, affordable at ₹9.5L). Each offers a distinct IB-focused curriculum preparing students for global trade, EXIM banking, and international marketing roles.",
        ]}
        colleges={colleges}
        whyHeading="Why MBA International Business in Delhi NCR?"
        whyPoints={[
          { title: "India's Trade Capital", description: "Delhi NCR houses: EXIM Bank India HQ, Ministry of Commerce & Industry, DGFT (Director General of Foreign Trade), hundreds of export-import companies (garments, gems, IT exports), and major MNC regional HQs. MBA IB graduates can build career directly in trade policy, export promotion, and international banking — all within Delhi NCR." },
          { title: "IIFT Delhi — India's Only Dedicated IB School", description: "IIFT Delhi (est. 1963) is India's only government business school exclusively for international trade. Unique curriculum: Customs Law, EXIM Finance, WTO and International Trade Law, Country Studies (China, US, EU trade), and Currency Risk Management. 10 specialized research centres including China Studies Centre and ASEAN Studies. Alumni hold key positions in EXIM Bank, Ministry of Commerce, Standard Chartered, and Amazon Global." },
          { title: "Cross-Border E-Commerce Boom", description: "India's cross-border e-commerce exports are projected to reach $50 billion by 2027. Amazon India Global Selling, Flipkart Commerce, and Meesho are hiring IB MBA graduates for international expansion. MBA-IB graduates who understand both Indian export regulations and global marketplace operations command ₹15–25 LPA at these companies." },
          { title: "Global Banking & Trade Finance", description: "HSBC, Standard Chartered, Deutsche Bank, Citi India, and DBS all have trade finance divisions in Delhi that recruit MBA IB graduates. Trade finance (letters of credit, bank guarantees, export financing) is a specialized field where IB knowledge commands 20–30% salary premium over general banking roles. IIFT alumni dominate this space." },
          { title: "Forex & Treasury Roles", description: "India's forex market turnover exceeds $70 billion/day. RBI-regulated primary dealers and bank treasury departments in Delhi hire MBA IB graduates as Forex Analysts (₹8–15 LPA starting), Treasury Managers (₹15–25 LPA at mid-career), and Derivatives Traders (₹18–35 LPA senior level). IIFT's forex trading simulation lab prepares students for these roles." },
          { title: "Global Posting & International Career", description: "MBA IB from IIFT and FMS Delhi opens international career paths unavailable through general MBA. IIFT alumni are posted in Dubai, Singapore, New York, and London by Standard Chartered, HSBC, and Maersk. Average global posting salary: ₹30–60 LPA equivalent. For students targeting careers abroad, MBA-IB is the single most direct route from a Delhi college." },
        ]}
        admissionHeading="MBA International Business Admission Process Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Register for IIFT Exam 2025 (or CAT for other colleges)", description: "For IIFT Delhi: Register at iift.ac.in (October–November 2025). IIFT exam: December 2025. Exam pattern: 110 MCQs in 120 minutes — Verbal Ability 25Q, Reading Comprehension 16Q, Quantitative Aptitude 25Q, DILR 22Q, General Knowledge 22Q. Negative marking 1/3. For FORE, MDI, IMI: Appear for CAT 2025 (November 2025) targeting 80–95+ percentile depending on target college." },
          { step: "2", title: "Prepare for IIFT-Specific GK Section", description: "IIFT exam's GK section (22 questions) is the differentiator — most candidates lose marks here. Prepare: international trade news, WTO updates, India's export figures, India's FTA (Free Trade Agreements) with UAE/Australia/UK, RBI forex policy, EXIM Bank schemes, and global economic events. GK cutoff: 6–8 marks. Start GK preparation 3 months before exam with daily newspaper reading (Economic Times, Financial Express)." },
          { step: "3", title: "GD-Essay + Personal Interview at IIFT", description: "IIFT shortlist released January 2026. GD-Essay + PI at IIFT Delhi campus (February–March 2026). GD: business/current affairs topic, 10 students, 15 minutes. Essay: 250 words, 15 minutes. PI: 20–25 minutes, 3-person panel including an IIFT faculty economist, industry expert, and alumni panelist. PI focuses on: India's trade policy, EXIM procedures, global economics, and your motivation for international business." },
          { step: "4", title: "FORE PGDM-IB Alternative Path", description: "For FORE PGDM-IB (if IIFT not available): Apply at forecollege.com (December 2025–February 2026). CAT 80+ percentile required. FORE PGDM-IB-specific curriculum: International Trade Finance, Export Documentation, Country Risk Assessment, and Global Marketing. FORE IB track places at avg ₹12.5 LPA in trade-related companies — Mahindra & Mahindra export division, EXIM traders, logistics MNCs." },
          { step: "5", title: "Build IB Knowledge Before Joining", description: "Before MBA-IB batch begins (June–July 2026): study India's top export sectors (IT services ₹156B, pharma, gems, textiles), learn INCOTERMS (FOB, CIF, DDP), understand HS codes and customs procedures, follow DGFT notifications. Reading: 'The World is Flat' (Thomas Friedman), IIFT Centre for WTO Studies publications. LinkedIn connections with IIFT alumni for mentorship before joining campus." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free MBA International Business Admission Guidance Delhi 2026"
        ctaSubtext="Tell us your IIFT score or CAT percentile and target role (trade finance / IB sales / EXIM) — our counsellors will shortlist the best MBA-IB college in Delhi for your profile."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
          { label: "IIFT Delhi — MBA International Business", href: "/iift-delhi", icon: "" },
          { label: "FMS Delhi — ₹55K MBA", href: "/fms-delhi", icon: "" },
          { label: "MDI Gurgaon — PGDM", href: "/mdi-gurgaon", icon: "" },
          { label: "FORE School of Management Delhi", href: "/fore-school-management-delhi", icon: "" },
          { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi", icon: "" },
          { label: "MBA in Operations Delhi", href: "/mba-in-operations-delhi", icon: "" },
          { label: "Government MBA Colleges Delhi", href: "/government-mba-colleges-delhi", icon: "" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "" },
          { label: "MBA Colleges Delhi Placement", href: "/mba-colleges-delhi-placement", icon: "" },
        ]}
      />
    </>
  )
}
