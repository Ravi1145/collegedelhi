import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "MBA in Digital Marketing Delhi 2026 | Best Colleges, Fees & Salary",
  description: "Best MBA in Digital Marketing colleges in Delhi 2026: MICA (Delhi campus), IMI Delhi, LBSIM, Amity. CAT cutoffs, fees ₹3L–₹19.5L, digital marketing salary ₹8–22 LPA.",
  path: "/mba-in-digital-marketing-delhi",
  keywords: [
    "mba in digital marketing delhi",
    "best mba in digital marketing in delhi",
    "mba digital marketing colleges delhi ncr",
    "mba in digital marketing admission delhi 2026",
    "digital marketing mba salary delhi",
    "mba digital marketing fees delhi",
    "pgdm digital marketing delhi",
    "mba marketing digital delhi",
    "top digital marketing mba colleges delhi",
    "mba digital marketing vs mba marketing",
    "mba digital marketing placement delhi 2026",
    "mica delhi mba communications",
    "mba social media marketing delhi",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "MICA — School of Ideas, Ahmedabad (Delhi Admission)", location: "Ahmedabad (exam centres in Delhi)", naac: "A+", fees: "₹21L total", placement: "₹14 LPA avg", slug: "mica-mudra-institute-communications-ahmedabad" },
  { name: "IMI Delhi — PGDM (Marketing with Digital Electives)", location: "Qutab Institutional Area, New Delhi", naac: "A+", fees: "₹19.5L total", placement: "₹14 LPA avg", slug: "imi-delhi-international-management-institute" },
  { name: "LBSIM Delhi — PGDM (Digital Marketing & E-Business)", location: "Rohini, North Delhi", naac: "A", fees: "₹12.5L total", placement: "₹10.5 LPA avg", slug: "lbsim-lal-bahadur-shastri-institute-management" },
  { name: "Amity University Noida — MBA Digital Marketing", location: "Sector 125, Noida (Delhi NCR)", naac: "A+", fees: "₹4.5L total", placement: "₹7 LPA avg", slug: "amity-university-noida-delhi-ncr" },
  { name: "BIMTECH Greater Noida — PGDM (Marketing)", location: "Knowledge Park, Greater Noida", naac: "A", fees: "₹9.5L total", placement: "₹10 LPA avg", slug: "bimtech-birla-institute-management-technology-noida" },
  { name: "Symbiosis Centre for Management Studies (SCMS) — Noida", location: "Sector 62, Noida (Delhi NCR)", naac: "A", fees: "₹5L–7L total", placement: "₹7–9 LPA avg", slug: "symbiosis-scms-noida" },
]

const faqs = [
  { q: "Which is the best college for MBA in Digital Marketing in Delhi?", a: "For MBA Digital Marketing in Delhi NCR: IMI Delhi is the best campus B-school with dedicated digital marketing electives in PGDM (NIRF top 30, ₹14 LPA avg placement). MICA (while based in Ahmedabad) is India's #1 for communications and digital marketing and has a large Delhi alumni base — considered for Delhi students as the top national option. LBSIM Delhi (Rohini) offers a specific PGDM in Digital Marketing & E-Business at ₹12.5L total fees. For pure digital skills with lower investment: Amity Noida MBA Digital Marketing at ₹4.5L total fees." },
  { q: "What is the salary after MBA Digital Marketing in Delhi?", a: "Average salary after MBA Digital Marketing from Delhi colleges 2024: IMI Delhi Marketing ₹12–14 LPA. LBSIM Delhi Digital Marketing PGDM ₹9–11 LPA. BIMTECH Marketing ₹9–10 LPA. Amity Noida MBA Marketing ₹7–8 LPA. Top digital marketing roles paying highest in Delhi: Growth Marketing Manager (tech startups) ₹15–22 LPA. Performance Marketing Head (e-commerce) ₹18–28 LPA. Digital Marketing Director (MNC) ₹20–35 LPA. SEO/SEM specialists at Google/Meta/Amazon ₹12–20 LPA. Delhi NCR has India's largest digital marketing job market after Bangalore." },
  { q: "Is MBA Digital Marketing different from MBA Marketing?", a: "MBA Marketing vs MBA Digital Marketing: traditional MBA Marketing covers brand management, market research, consumer behaviour, product management, and advertising across all media (TV, print, digital). MBA Digital Marketing focuses specifically on SEO, SEM/PPC, social media marketing, content marketing, email marketing, analytics (Google Analytics, Meta Ads, HubSpot), and e-commerce. In Delhi NCR's job market, MBA Marketing from a top B-school (FMS, MDI, IMI) with 2-3 digital marketing certification courses (Google Ads, Meta Blueprint, HubSpot) is more valued than a standalone digital-only MBA from a mid-tier college." },
  { q: "What exams are needed for MBA Digital Marketing admission in Delhi 2026?", a: "MBA Digital Marketing admission in Delhi 2026 requires: CAT 2025 (for IMI Delhi, LBSIM Delhi, BIMTECH — 70–90 percentile range). MICAT (for MICA, held December 2025 + February 2026 in two phases) — tests creative and analytical abilities, not just quantitative aptitude. SNAP (Symbiosis, January 2026) for SCMS Noida. Amity own AUAT test (no CAT required). IPU CET (May 2026) for IPU-affiliated MBA Marketing programmes. For pure digital marketing skills without MBA, Google Career Certificates, Meta Blueprint, HubSpot Academy are industry-recognised alternatives." },
  { q: "What digital marketing skills are taught in MBA programmes in Delhi?", a: "MBA Digital Marketing curriculum in Delhi colleges (IMI, LBSIM): SEO (Search Engine Optimization) and keyword strategy. SEM/PPC (Google Ads, Bing Ads). Social Media Marketing (Meta Ads, Instagram, LinkedIn). Content Marketing and Inbound strategy. Email Marketing and Marketing Automation (HubSpot, Mailchimp). Web Analytics (Google Analytics 4, Adobe Analytics). E-commerce Marketing (Shopify, Amazon, Flipkart seller ecosystems). Influencer and Affiliate Marketing. Programmatic Advertising (DSPs, DMPs). AI in Marketing (ChatGPT for content, Midjourney for creatives). Industry certifications (Google Ads, Meta Blueprint) are awarded alongside the MBA." },
]

export default function MBADigitalMarketingDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "MBA in Digital Marketing Delhi", url: "/mba-in-digital-marketing-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best MBA Digital Marketing Colleges in Delhi 2026",
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
          { label: "MBA in Digital Marketing Delhi", href: "/mba-in-digital-marketing-delhi" },
        ]}
        h1="Best MBA in Digital Marketing Colleges in Delhi 2026"
        subtitle="MBA in Digital Marketing combines traditional marketing strategy with digital channels — SEO, SEM, Social Media, Performance Marketing, and Analytics. Delhi NCR's tech and e-commerce ecosystem makes it the ideal location for digital marketing MBA graduates. Compare fees ₹4.5L–₹21L, placements ₹7–22 LPA."
        heroStats={[
          { value: "10+", label: "MBA Dig. Marketing Colleges NCR" },
          { value: "₹4.5L–₹19.5L", label: "Total Fees Range" },
          { value: "₹22 LPA", label: "Top Placement (Performance Mktg)" },
          { value: "70+ %ile", label: "CAT Cutoff (IMI/LBSIM)" },
        ]}
        introHeading="MBA Digital Marketing in Delhi 2026 — Career, Colleges & Salary"
        introParagraphs={[
          "MBA in Digital Marketing is one of the fastest-growing MBA specializations as brands shift ad spends from traditional media to digital. Delhi NCR is India's second-largest digital marketing hub after Bangalore — Google India, Meta India, Amazon, Flipkart, and 500+ digital agencies are headquartered or have major offices in Delhi NCR, creating thousands of digital marketing manager and director roles annually.",
          "The best MBA option for digital marketing in Delhi NCR is IMI Delhi's PGDM with marketing specialization — NAAC A+, NIRF top-30, ₹19.5L total fees, ₹14 LPA avg placement. For candidates seeking India's best digital marketing brand, MICA (Mudra Institute of Communications, Ahmedabad) is the national leader — MICAT exam in December and February — with a massive Delhi alumni network. LBSIM Delhi offers a specialized PGDM in Digital Marketing & E-Business at ₹12.5L.",
          "Key insight: in Delhi's job market, hiring managers for senior digital marketing roles (₹18–28 LPA) prefer MBA Marketing from an IIM/FMS/MDI + Google/Meta certifications over a standalone 'MBA in Digital Marketing' from a mid-tier college. If your CAT score allows top B-schools, choose an MBA Marketing from there and add digital certifications. If not, LBSIM Delhi or BIMTECH offer the best specialized digital marketing MBA below 90 percentile.",
        ]}
        colleges={colleges}
        whyHeading="Why MBA Digital Marketing in Delhi NCR?"
        whyPoints={[
          { title: "India's Largest Digital Marketing Job Market", description: "Delhi NCR hosts Google India HQ (Gurgaon), Meta India (Aerocity), Amazon India tech teams, Flipkart's Delhi NCR operations, and 500+ digital agencies. Performance Marketing, Growth Hacking, and Digital Analytics roles pay ₹15–28 LPA at these companies. MBA Digital Marketing graduates from Delhi colleges have direct campus recruitment access." },
          { title: "E-Commerce Capital of North India", description: "Amazon, Flipkart, Meesho, Snapdeal, and Nykaa all have major operations in Delhi NCR. E-commerce has created specialized digital roles: Marketplace Marketing Manager, Amazon DSP Specialist, Flipkart Performance Manager — all paying ₹12–20 LPA and actively recruiting from Delhi MBA programmes." },
          { title: "Google & Meta Certifications During MBA", description: "LBSIM Delhi, IMI Delhi, and BIMTECH integrate Google Ads (Google Skillshop), Meta Blueprint, HubSpot Marketing, and SEMrush certifications into their digital marketing MBA curriculum. Graduates enter the job market with both an MBA and 3–5 industry certifications — making them more competitive than pure-certification candidates." },
          { title: "Startup Ecosystem Internships", description: "Delhi NCR's Gurugram startup hub (Paytm, Info Edge, PolicyBazaar, MakeMyTrip) regularly offers digital marketing summer internships to MBA students. A strong SIP (Summer Internship Programme) in a Delhi-NCR startup (₹30K–60K/month stipend) builds a portfolio of live digital campaigns that's critical for final placements." },
          { title: "AI-Enhanced Digital Marketing Roles", description: "AI tools — ChatGPT for content, Midjourney for visuals, Google Performance Max, Meta Advantage+ — are creating new hybrid 'AI + Marketing' roles at ₹18–30 LPA. MBA Digital Marketing programmes in Delhi (2025–2026 curriculum) have integrated AI marketing tools, prompt engineering for marketing, and AI analytics into their courses." },
          { title: "B2B Digital Marketing — Delhi Advantage", description: "Unlike Bangalore (B2C tech-heavy), Delhi NCR has a strong B2B ecosystem — manufacturing, logistics, real estate, pharmaceuticals, and government contracting. MBA Digital Marketing graduates from Delhi often move into LinkedIn B2B marketing, ABM (Account-Based Marketing), and B2B content strategy roles at ₹12–20 LPA." },
        ]}
        admissionHeading="MBA Digital Marketing Admission Process Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Choose Right Exam Based on Target College", description: "CAT 2025 (November): IMI Delhi, LBSIM Delhi, BIMTECH, FORE School. Cutoff 70–90 percentile. MICAT (December 2025 + February 2026): MICA — two-phase test covering psychometric, creative, and analytical sections — very different from CAT, needs specific prep. SNAP (January 2026): Symbiosis SCMS Noida. AUAT: Amity University own entrance. Strategy: If CAT 85+ percentile, target IMI Delhi or BIMTECH. If below 70 percentile, target LBSIM or Amity. If interested in MICA, start MICAT prep separately alongside CAT." },
          { step: "2", title: "Build Digital Portfolio Before Application", description: "Unlike generic MBA applications, digital marketing college interviewers specifically ask about your digital presence. Before applying: create a personal blog (written or video), build a LinkedIn profile with 500+ connections, run a small Google Ads or Meta Ads campaign (even with ₹500 budget — document the results), get at least one Google Analytics or HubSpot certification. This portfolio differentiates you in GD-PI." },
          { step: "3", title: "Group Discussion & Interview Preparation", description: "MBA Digital Marketing GD-PI topics frequently covered: growth hacking strategies, social media trends (Reels vs YouTube Shorts), AI impact on marketing jobs, programmatic advertising, data privacy and cookie deprecation, influencer marketing ROI, D2C brand strategies. MICA MICAT phase 2 includes a creative exercise. IMI Delhi PI asks about specific digital campaigns you've observed or executed." },
          { step: "4", title: "Select Digital Marketing Electives in Year 2", description: "At IMI Delhi and LBSIM Delhi, digital marketing specialization is chosen in Semester 3. Core digital marketing electives: Digital Marketing Strategy, Performance Marketing (Google/Meta Ads), Content Marketing, SEO & SEM, Web Analytics, Social Media Marketing, E-commerce Marketing, Marketing Automation. Student clubs: Digital Marketing Club at IMI Delhi conducts live brand campaigns as projects." },
          { step: "5", title: "Internship & Final Placement Strategy", description: "Summer Internship Programme (SIP) in digital marketing: target Google, Meta, Amazon, Flipkart, or fast-growing D2C brands (Mamaearth, boAt, Sugar Cosmetics). Prepare a live campaign analysis: show 2–3 digital campaigns you analyzed or ran, with metrics (CTR, ROAS, CPA, LTV). For final placements: Performance Marketing Manager and Growth Marketing roles pay highest (₹12–22 LPA). Supplement MBA with Google Ads and Meta Blueprint certification before placement season." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free MBA Digital Marketing Admission Guidance"
        ctaSubtext="Tell us your CAT score and target role (Performance Marketing / Brand / Analytics) — we'll shortlist the best digital marketing MBA college in Delhi NCR for your profile."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
          { label: "MBA in Marketing Delhi", href: "/mba-in-marketing-delhi", icon: "" },
          { label: "FMS Delhi — ₹55K MBA", href: "/fms-delhi", icon: "" },
          { label: "MDI Gurgaon — PGDM", href: "/mdi-gurgaon", icon: "" },
          { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi", icon: "" },
          { label: "MBA in HR Delhi", href: "/mba-in-hr-delhi", icon: "" },
          { label: "MBA in Operations Delhi", href: "/mba-in-operations-delhi", icon: "" },
          { label: "Executive MBA Delhi", href: "/executive-mba-delhi", icon: "" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "" },
          { label: "MBA Colleges Gurgaon", href: "/mba-colleges-gurgaon", icon: "" },
          { label: "MBA Colleges Greater Noida", href: "/mba-colleges-greater-noida", icon: "" },
          { label: "PGDM Colleges Delhi", href: "/pgdm-colleges-delhi", icon: "" },
        ]}
      />
    </>
  )
}
