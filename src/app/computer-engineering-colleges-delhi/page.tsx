import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Computer Engineering colleges in Delhi 2026",
  description: "Best computer engineering colleges in Delhi 2026. NSUT, DTU Delhi, IIIT Delhi — compare CS fees, JEE Main cutoffs, placement packages up to ₹45 LPA.",
  path: "/computer-engineering-colleges-delhi",
  keywords: ["computer engineering colleges Delhi", "cs colleges Delhi", "it engineering colleges Delhi 2026", "best cs College Delhi"],
})

export const revalidate = 300

const colleges = [
  { name: "Delhi Institute of Computer Technology (NSUT)", location: "Rohini Sector 17", naac: "A", fees: "₹1.4L-1.9L/yr", placement: "₹7.5 LPA avg | ₹35 LPA highest", slug: "nsut-delhi" },
  { name: "Delhi Technological University (DTU) - CSE", location: "Connaught Place", naac: "A+", fees: "₹80K-1.8L/yr", placement: "₹12 LPA avg | ₹45 LPA highest", slug: "dtu-delhi-delhi-technological-university" },
  { name: "Indraprastha Institute of Information Technology (IIIT Delhi)", location: "Dwarka Sector 3", naac: "A+", fees: "₹1.6L-2.2L/yr", placement: "₹8.5 LPA avg", slug: "iiit-delhi-indraprastha-institute-of-information-technology" },
  { name: "Sharda University", location: "Knowledge Park Greater Noida", naac: "A+", fees: "₹3.6L-4.8L/yr", placement: "₹9.8 LPA avg", slug: "sharda-university" },
  { name: "Amity University Delhi - CSE/AIML", location: "Rohini", naac: "A+", fees: "₹2.0L-3.8L/yr", placement: "₹7.2 LPA avg", slug: "amity-university-noida-delhi-ncr" },
  { name: "IGDTUW Delhi", location: "Janakpuri", naac: "A+", fees: "₹1.3L-1.75L/yr", placement: "₹6.8 LPA avg", slug: "igdtuw-delhi-indira-gandhi-technical-university" },
  { name: "GL Bajaj Institute of Technology and Management - Computer Engineering", location: "Knowledge Park, Greater Noida", naac: "A", fees: "₹1.2L-1.7L/yr", placement: "₹5.2 LPA avg", slug: "gl-bajaj-institute-of-technology-and-management" },
]

const faqs = [
  { q: "Which is the best computer engineering college in Delhi?", a: "NSUT (Delhi Institute of Computer Technology) is the top CS-focused college in Delhi, with 98%+ placement rate and ₹7.5 LPA average. For overall prestige, DTU Delhi CSE branch (NIRF #49, ₹12 LPA avg) is the best option if you can get 99.5+ percentile." },
  { q: "What is the JEE Main cutoff for computer engineering in Delhi?", a: "DTU Delhi CSE requires 99.5+ percentile. NSUT requires 95-97 percentile. IIIT Delhi CS requires 88-92 percentile. Amity University Delhi CS/AIML requires 75-85 percentile. GL Bajaj NIET accepts 60-70 percentile for CS." },
  { q: "What is the placement package for computer engineers from Delhi colleges?", a: "DTU Delhi CS graduates earn ₹12 LPA average with ₹45 LPA highest. NSUT averages ₹7.5 LPA with ₹35 LPA highest. IMI Delhi averages ₹9.8 LPA. Top recruiters: Google, Microsoft, Amazon, TCS Digital, Infosys, Goldman Sachs." },
  { q: "Is there any college in Delhi that specializes only in computer engineering?", a: "Yes, NSUT (Delhi Institute of Computer Technology) is exclusively a computer and IT engineering college. It offers only CS, IT, and related branches, making it the most specialized CS college in Delhi with exceptional industry connections." },
  { q: "What new CS specializations are available in Delhi colleges for 2026?", a: "For 2026, several Delhi colleges offer specialized CS branches: AI & Machine Learning (Amity University Delhi, IMI Delhi), Data Science (IIIT Delhi, Amity University Delhi), Cyber Security (DTU Delhi, IIIT Delhi), Cloud Computing, and IoT Engineering. These have slightly lower cutoffs than core CSE." },
]

export default function ComputerEngineeringCollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Computer Engineering Colleges Delhi", url: "/computer-engineering-colleges-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Computer Engineering colleges in Delhi 2026",
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
        breadcrumb={[{ label: "Computer Engineering colleges in Delhi", href: "/computer-engineering-colleges-delhi" }]}
        h1="Computer Engineering colleges in Delhi 2026"
        subtitle="Find the best CS, IT, and AI/ML engineering colleges in Delhi. Compare JEE Main cutoffs, fees, placement packages, and new specializations for 2026 admission."
        heroStats={[
          { value: "25+", label: "CS/IT Colleges" },
          { value: "₹45 LPA", label: "Highest Package" },
          { value: "98%+", label: "Best Placement Rate" },
          { value: "99.5%ile", label: "DTU Delhi CSE Cutoff" },
        ]}
        introHeading="Computer Engineering colleges in Delhi: The Complete 2026 Guide"
        introParagraphs={[
          "Computer Engineering (CS/IT) is the most sought-after BTech branch in Delhi, driven by the city's massive IT ecosystem in Noida Sector 62, Cyber City Gurugram, and Sector 63 Noida tech parks. Delhi colleges offering CS engineering produce graduates hired by Google, Microsoft, Amazon, Goldman Sachs, TCS Digital, and hundreds of product companies and startups.",
          "Delhi has unique advantages for CS students: proximity to 600+ IT companies offering internships from second year, a thriving startup ecosystem with access to angel investors, and strong alumni networks at top tech firms. Colleges like NSUT are entirely focused on CS/IT, while DTU Delhi's CSE department consistently produces IIT-equivalent placements.",
          "For 2026 admission, computer engineering seats in Delhi are highly competitive. New specializations like AI & Machine Learning, Data Science, Cyber Security, and Cloud Computing have been added by several colleges, offering more options for students at slightly lower cutoffs than traditional CS. This guide covers all CS/IT colleges in Delhi with real cutoff data.",
        ]}
        colleges={colleges}
        whyHeading="Why Study Computer Engineering in Delhi?"
        whyPoints={[
          { title: "Direct Access to IT Jobs", description: "Noida Sector 62 IT Hub (10 km from most colleges) hosts Infosys, Wipro, Cognizant, HSBC Tech, and 300+ companies - the world's most accessible IT employment hub for Delhi CS students." },
          { title: "Highest Starting Salaries", description: "CS/IT engineers from top Delhi colleges start at ₹6-12 LPA, with product companies offering ₹15-45 LPA packages. The average salary for Delhi CS graduates is 40% higher than national average." },
          { title: "AI & Emerging Tech Focus", description: "Delhi colleges now offer AI/ML, Data Science, and Cyber Security specializations with industry-partnered curricula, preparing students for the next decade of tech evolution." },
          { title: "Internship Ecosystem", description: "Delhi's IT density means CS students can secure internships at paid rates of ₹15,000-50,000/month from second year, gaining 2+ years of industry experience before graduation." },
          { title: "Startup & Entrepreneurship Support", description: "DTU Delhi's E-Cell, NSUT's startup community, and Amity University Delhi's incubator have launched 100+ funded startups, making Delhi CS colleges excellent launchpads for entrepreneurial engineers." },
          { title: "Research & Higher Education Pathway", description: "Strong CS research labs at DTU Delhi and IMI Delhi offer pathways to IIT/IISc M.Tech admission, international MS programs, and industry research roles at top product companies." },
        ]}
        admissionHeading="Computer Engineering Admission Process in Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Target JEE Main PCM Score", description: "CS/IT is the most competitive branch. Target 95+ percentile for NSUT, 99+ for DTU Delhi CSE, 85+ for VIT/Amity University Delhi CS. JEE Main above 90 percentile also qualifies for premium college management quota." },
          { step: "2", title: "Apply on CAP Portal After Results", description: "Register on jacdelhi.admissions.nic.in after JEE Main results. Verify documents and fill college-branch preferences. Put CS as first preference at all target colleges." },
          { step: "3", title: "Research Colleges Before JAC Delhi Round 1", description: "Visit college campuses, attend open days, research placement data on LinkedIn, and talk to current students before locking preferences. Use CollegeDelhi's comparison tool for data-driven decisions." },
          { step: "4", title: "Fill 50+ Preferences Strategically", description: "Fill preferences across tiers: dream colleges first (DTU Delhi/NSUT), then realistic targets (IIIT Delhi, Amity University Delhi), then safe options (GL Bajaj, NIET Noida). Never leave preferences blank." },
          { step: "5", title: "Accept Allotment or Upgrade in Next Round", description: "If Round 1 allots a lower-preference college, decide: accept to secure a seat (safer) or freeze/upgrade to wait for better options in Round 2. Floating option allows upgrades if better seat opens." },
        ]}
        faqs={faqs}
        ctaHeading="Which CS College in Delhi Suits Your JEE Main Score?"
        ctaSubtext="Enter your JEE Main percentile and get a personalized list of computer engineering colleges in Delhi where you have the best chance of admission."
      relatedGuides={[
        { label: "Best Engineering colleges in Delhi 2026", href: "/engineering-colleges-delhi", icon: "" },
        { label: "Top 10 Engineering Colleges — Ranked", href: "/top-10-engineering-colleges-in-delhi", icon: "" },
        { label: "Placement Stats — Avg & Highest LPA", href: "/engineering-colleges-delhi-placement", icon: "" },
        { label: "Low Fees Engineering Colleges", href: "/low-fees-engineering-colleges-delhi", icon: "" },
        { label: "Engineering Scholarships in Delhi", href: "/engineering-colleges-delhi-scholarship", icon: "" },
        { label: "JEE Main Colleges & Cutoffs 2026", href: "/jee-colleges-delhi", icon: "" },
        { label: "JEE Main colleges in Delhi", href: "/jee-colleges-delhi", icon: "" },
        { label: "Government colleges in Delhi", href: "/government-colleges-delhi", icon: "" },
      ]}
      />
    </>
  )
}

