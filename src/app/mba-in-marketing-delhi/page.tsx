import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Best MBA in Marketing Colleges in Delhi 2026 | Fees, CAT Cutoff & Jobs",
  description: "Top MBA Marketing colleges in Delhi 2026: FMS Delhi, MDI Gurgaon, IMI Delhi, FORE. CAT cutoffs, fees ₹55K–₹22.5L total, marketing placements ₹8–28 LPA.",
  path: "/mba-in-marketing-delhi",
  keywords: [
    "mba in marketing colleges in delhi",
    "best mba in marketing in delhi",
    "top mba marketing colleges delhi",
    "mba marketing delhi 2026",
    "mba marketing admission delhi",
    "cat cutoff mba marketing delhi",
    "fms delhi mba marketing",
    "mba marketing salary delhi",
    "mba marketing vs mba finance delhi",
    "best college for mba marketing in delhi ncr",
    "mba marketing placement delhi",
    "digital marketing mba delhi",
    "mba in digital marketing delhi",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "FMS Delhi — Faculty of Management Studies", location: "University Enclave, North Delhi", naac: "A++", fees: "₹55K total (2 yr)", placement: "₹32 LPA avg", slug: "fms-delhi-faculty-management-studies" },
  { name: "MDI Gurgaon — PGDM Marketing", location: "MG Road, Gurgaon (NCR)", naac: "A+", fees: "₹22.5L total", placement: "₹26 LPA avg", slug: "mdi-gurgaon-management-development-institute" },
  { name: "IMI Delhi — PGDM Marketing", location: "Qutab Institutional Area, Delhi", naac: "A+", fees: "₹19.5L total", placement: "₹14 LPA avg", slug: "imi-delhi-international-management-institute" },
  { name: "FORE School of Management — PGDM Marketing", location: "Qutab Institutional Area, Delhi", naac: "A", fees: "₹16.5L total", placement: "₹12 LPA avg", slug: "fore-school-management-delhi" },
  { name: "LBSIM Delhi — PGDM Marketing", location: "Rohini, North Delhi", naac: "A", fees: "₹12.5L total", placement: "₹10.5 LPA avg", slug: "lbsim-lal-bahadur-shastri-institute-management" },
  { name: "BIMTECH Greater Noida — PGDM Marketing", location: "Knowledge Park, Greater Noida", naac: "A", fees: "₹9.5L total", placement: "₹10 LPA avg", slug: "bimtech-birla-institute-management-technology-noida" },
]

const faqs = [
  { q: "Which is the best college for MBA Marketing in Delhi?", a: "FMS Delhi is the best MBA Marketing college in Delhi with ₹32 LPA average placement (Marketing sector places at ₹12–28 LPA) at just ₹55,000 total fees. MDI Gurgaon is second (₹22.5L fees, ₹26 LPA avg — top FMCG and tech marketing roles). IMI Delhi is strong for Brand Management placements (HUL, ITC, P&G). CAT cutoff: FMS 99+ %ile, MDI 97+ %ile, IMI 85–90 %ile." },
  { q: "What is the CAT cutoff for MBA Marketing in Delhi 2026?", a: "CAT 2026 cutoffs for MBA Marketing colleges in Delhi NCR: FMS Delhi — 99+ percentile. MDI Gurgaon — 95–97 percentile (Marketing specialization). IMI Delhi — 85–90 percentile. FORE Delhi — 80–85 percentile. LBSIM Delhi — 75–80 percentile. BIMTECH Greater Noida — 75–80 percentile. Marketing is Delhi's most oversubscribed specialization — apply early and prepare strong GD-PI answers about brand strategy and consumer behaviour." },
  { q: "What is the salary after MBA Marketing from Delhi?", a: "Average salary after MBA Marketing from Delhi colleges 2024: FMS Delhi ₹32 LPA (Marketing sector ₹12–28 LPA), MDI Gurgaon ₹26 LPA (Brand/FMCG roles ₹15–35 LPA), IMI Delhi ₹14 LPA, FORE Delhi ₹12 LPA, LBSIM Delhi ₹10.5 LPA. Top Marketing roles: Brand Manager (HUL, P&G, Nestle) ₹12–22 LPA. Digital Marketing (Google, Meta) ₹10–18 LPA. Sales Manager (FMCG) ₹8–14 LPA." },
  { q: "Which sectors hire MBA Marketing graduates from Delhi?", a: "Top sectors hiring MBA Marketing graduates from Delhi 2026: FMCG (HUL, ITC, Nestle, P&G, Colgate) — Brand Management roles ₹12–22 LPA. Tech/E-commerce (Amazon, Flipkart, Meesho) — Growth Marketing ₹10–18 LPA. Digital Marketing (Google, Meta, LinkedIn) ₹10–16 LPA. Retail (Reliance, DMart, Tata Trent) ₹8–12 LPA. Advertising & Media (GroupM, Ogilvy) ₹8–12 LPA. FMCG consistently offers the highest Marketing packages from Delhi MBA colleges." },
  { q: "Is MBA Marketing better than MBA Finance in Delhi?", a: "MBA Marketing vs Finance in Delhi: Marketing offers more diverse roles and is accessible from any academic stream. Finance offers higher peak packages (₹30–50 LPA for IB) but is more technical and requires Commerce/Quant background. Marketing average: ₹8–14 LPA from mid-tier colleges, ₹20–35 LPA from FMS/MDI. Finance average: ₹10–16 LPA mid-tier, ₹25–45 LPA top-tier. Choose Marketing if you prefer client-facing, creative, brand-building roles. Choose Finance for analytical, investment-focused careers." },
]

export default function MBAMarketingDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "MBA in Marketing Delhi", url: "/mba-in-marketing-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best MBA Marketing Colleges in Delhi 2026",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <SEOLandingPage
        breadcrumb={[
          { label: "MBA Colleges Delhi", href: "/mba-colleges-delhi" },
          { label: "MBA in Marketing Delhi", href: "/mba-in-marketing-delhi" },
        ]}
        h1="Best MBA in Marketing Colleges in Delhi 2026"
        subtitle="MBA Marketing is Delhi's most popular MBA specialization — covering Brand Management, Digital Marketing, FMCG, and E-commerce. Compare top MBA Marketing colleges in Delhi NCR by CAT cutoff, fees, and marketing sector placements up to ₹35 LPA."
        heroStats={[
          { value: "25+", label: "MBA Marketing Colleges Delhi NCR" },
          { value: "₹55K–₹22.5L", label: "Total Fee Range" },
          { value: "₹32 LPA", label: "FMS Delhi Avg Placement" },
          { value: "HUL, P&G, Amazon", label: "Top Marketing Recruiters" },
        ]}
        introHeading="MBA Marketing Colleges in Delhi 2026 — FMS, MDI & Admission Guide"
        introParagraphs={[
          "MBA in Marketing is the most popular specialization across Delhi's MBA colleges, offering pathways into Brand Management, Digital Marketing, Sales Leadership, and E-commerce roles. Delhi NCR's status as India's FMCG and retail capital — with HUL, P&G, Nestle, ITC, Unilever, and Amazon India having major operations — makes it the ideal city for Marketing MBA graduates.",
          "Top MBA Marketing colleges in Delhi 2026: FMS Delhi (₹32 LPA avg, CAT 99+ %ile, ₹55K total fees), MDI Gurgaon (₹26 LPA avg, CAT 97+ %ile, ₹22.5L), and IMI Delhi (₹14 LPA avg, CAT 85–90 %ile, ₹19.5L). Marketing specialization is chosen at end of Year 1 at most colleges. FORE Delhi and LBSIM Delhi offer Marketing PGDM at ₹12–16.5L with strong FMCG placements.",
          "In 2026, Digital Marketing and E-commerce have emerged as the fastest-growing Marketing MBA sub-tracks. Companies like Google, Meta, LinkedIn, Amazon Advertising, and 50+ D2C brands (Mamaearth, boAt, Sugar Cosmetics) actively recruit MBA Marketing graduates from Delhi colleges for Growth, Performance Marketing, and Brand roles.",
        ]}
        colleges={colleges}
        whyHeading="Why MBA Marketing in Delhi?"
        whyPoints={[
          { title: "FMCG & Retail Capital of India", description: "Delhi NCR hosts regional HQs of HUL, P&G, Nestle India, ITC, Mondelez, PepsiCo, and Unilever — India's top FMCG employers. MBA Marketing students get direct access to Brand Manager internships and placement opportunities from these companies." },
          { title: "Digital Marketing Ecosystem", description: "Google's India office, Meta India, LinkedIn APAC, and 200+ digital marketing agencies are based in Gurgaon-Delhi corridor. MBA Marketing graduates pursuing Digital, Performance, or Growth Marketing careers have unmatched networking opportunities." },
          { title: "E-commerce Giants", description: "Amazon India (Gurgaon HQ), Flipkart (Noida office), Meesho, and Myntra recruit aggressively from Delhi MBA colleges for Category Management, Seller Growth, and Brand Partnership roles at ₹12–20 LPA." },
          { title: "Diverse MBA Specialization Tracks", description: "Delhi MBA Marketing covers Brand Management, Digital & E-commerce Marketing, Sales Management, Retail, International Marketing, and B2B Marketing — wider than most other cities." },
          { title: "Any Stream Eligible", description: "Unlike MBA Finance (which favors Commerce/Quant background), MBA Marketing welcomes graduates from Engineering, Science, Humanities, and Commerce. Strong communication, creativity, and analytical thinking matter more than specific degree background." },
          { title: "Advertising & Media Access", description: "GroupM, Ogilvy, Dentsu, JWT, McCann, and 100+ advertising agencies are headquartered in Delhi. MBA Marketing students can intern and place in Media Planning, Brand Strategy, and Digital Campaign Management roles." },
        ]}
        admissionHeading="MBA Marketing Admission Process in Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Appear for CAT 2025", description: "All top MBA Marketing colleges in Delhi (FMS, MDI, IMI, FORE, LBSIM, BIMTECH) require CAT 2025 scores. Register at iimcat.ac.in (August 2025). Exam in November 2025. For MBA Marketing, strengthen Verbal Ability and Data Interpretation sections — these are most relevant for Marketing roles." },
          { step: "2", title: "Apply to Target Marketing Colleges", description: "FMS Delhi: Apply via DU MBA admission process at admission.uod.ac.in (January 2026). MDI Gurgaon: mdi.ac.in (December 2025). IMI Delhi: imi.edu (December 2025–February 2026). FORE: forecollege.com. Apply to 4–6 colleges covering different CAT percentile ranges." },
          { step: "3", title: "GD/WAT + Personal Interview", description: "Marketing specialization GD topics: FMCG brand strategy, D2C vs traditional marketing, social media ROI, purpose-driven brands. PI for Marketing: Prepare answers about your favourite brand campaign, consumer behaviour examples, and why Marketing over Finance. Case studies may be given." },
          { step: "4", title: "Choose Marketing as Specialization", description: "At FMS Delhi and MDI Gurgaon, Marketing electives are available from Semester 3 (Year 2). Popular marketing courses: Consumer Behaviour, Brand Management, Digital Marketing Analytics, Retail Management, Sales & Distribution. Pre-placement talks by FMCG companies happen in Semester 3." },
          { step: "5", title: "Target Summer Internship (SIP)", description: "MBA Marketing SIP (Summer Internship) is the most crucial step — most final placements convert from SIP offers. Target HUL, P&G, Nestle (Platinum recruiters) for FMCG, or Amazon/Flipkart for e-commerce. FMS and MDI have Day 0 placement drives where top FMCG companies recruit on campus." },
        ]}
        faqs={faqs}
        ctaHeading="Get Personalized MBA Marketing Admission Guidance for Delhi"
        ctaSubtext="Tell us your CAT percentile and target sector (FMCG / Digital / E-commerce) — our counsellors will shortlist the best MBA Marketing colleges in Delhi NCR for your profile."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
          { label: "FMS Delhi — ₹55K MBA", href: "/fms-delhi", icon: "" },
          { label: "MDI Gurgaon — PGDM", href: "/mdi-gurgaon", icon: "" },
          { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi", icon: "" },
          { label: "MBA in HR Delhi", href: "/mba-in-hr-delhi", icon: "" },
          { label: "MBA in Digital Marketing Delhi", href: "/mba-in-digital-marketing-delhi", icon: "" },
          { label: "MBA in Operations Delhi", href: "/mba-in-operations-delhi", icon: "" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "" },
          { label: "FMS Delhi vs MDI Gurgaon", href: "/fms-delhi-vs-mdi-gurgaon", icon: "" },
          { label: "MBA Colleges Gurgaon", href: "/mba-colleges-gurgaon", icon: "" },
          { label: "MBA Placement Rankings", href: "/mba-colleges-delhi-placement", icon: "" },
          { label: "Government MBA Colleges Delhi", href: "/government-mba-colleges-delhi", icon: "" },
        ]}
      />
    </>
  )
}
