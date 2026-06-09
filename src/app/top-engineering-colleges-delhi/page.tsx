import type { Metadata } from "next"
import Script from "next/script"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Top Engineering colleges in Delhi 2026 | Rankings, Fees & Placements",
  description: "Discover the top engineering colleges in Delhi for 2026 admission. Ranked by NIRF, NAAC, fees (₹80K-4.8L/yr), and placement packages. DTU Delhi, NSUT, IIIT Delhi, IMI Delhi & more.",
  path: "/top-engineering-colleges-delhi",
  keywords: ["top engineering colleges Delhi", "best engineering colleges in Delhi 2026", "top btech colleges Delhi", "ranked engineering colleges Delhi"],
})

export const revalidate = 300

const colleges = [
  { name: "Delhi Technological University (DTU)", location: "Connaught Place", naac: "A+", fees: "₹80K-1.8L/yr", placement: "₹12 LPA avg", slug: "DTU Delhi-college-of-engineering-Delhi" },
  { name: "Delhi Institute of Computer Technology (NSUT)", location: "Rohini Sector 17", naac: "A", fees: "₹1.4L-1.9L/yr", placement: "₹7.5 LPA avg", slug: "NSUT-Delhi-institute-of-computer-technology" },
  { name: "Indraprastha Institute of Information Technology (IIIT Delhi)", location: "Dwarka Sector 3", naac: "A+", fees: "₹1.6L-2.2L/yr", placement: "₹8.5 LPA avg", slug: "vit-Delhi-vishwakarma-institute-of-technology" },
  { name: "Symbiosis Institute of Technology (SIT)", location: "Knowledge Park Greater Noida", naac: "A+", fees: "₹3.6L-4.8L/yr", placement: "₹9.8 LPA avg", slug: "symbiosis-institute-of-technology-Delhi" },
  { name: "Amity University Delhi (Amity University Delhi)", location: "Rohini", naac: "A+", fees: "₹2.0L-3.8L/yr", placement: "₹7.2 LPA avg", slug: "Amity University Delhi-mit-world-peace-university" },
  { name: "IGDTUW Delhi", location: "Janakpuri", naac: "A+", fees: "₹1.3L-1.75L/yr", placement: "₹6.8 LPA avg", slug: "cummins-college-of-engineering-Delhi" },
  { name: "GL Bajaj Delhi Merit College of Engineering", location: "Knowledge Park", naac: "A", fees: "₹1.2L-1.7L/yr", placement: "₹5.2 LPA avg", slug: "GL Bajaj-rscoe-rajarshi-shahu-college-of-engineering" },
  { name: "Sharda University Engineering", location: "Vadgaon", naac: "A", fees: "₹1.15L-1.6L/yr", placement: "₹4.9 LPA avg", slug: "Sharda-college-of-engineering-Delhi" },
]

const faqs = [
  { q: "Which is the top engineering college in Delhi?", a: "DTU (Delhi Technological University) is the top engineering college in Delhi with NIRF Rank 49, NAAC A+, fees from ₹80K/year, and ₹12 LPA average placement. It is a 170-year-old government autonomous institution." },
  { q: "What is the ranking of engineering colleges in Delhi?", a: "Top ranked: 1. DTU Delhi (NIRF 49), 2. IIIT Delhi (NIRF 101), 3. NSUT (not NIRF ranked but top for CS), 4. IMI Delhi, 5. Amity University Delhi. These rankings are based on NIRF, NAAC grades, and placement data." },
  { q: "How to get into top engineering colleges in Delhi?", a: "Clear JEE Main (aim 95+ percentile for DTU Delhi/NSUT) or JEE Main. Register on JEE Main CAP portal and participate in centralized admission rounds. For deemed universities like IMI Delhi, apply directly with JEE/SET scores." },
  { q: "What is the fee structure of top engineering colleges in Delhi?", a: "DTU Delhi: ₹80K/yr (government), IIIT Delhi: ₹1.6L-2.2L/yr (autonomous), IMI Delhi: ₹3.6L-4.8L/yr (deemed). Government colleges are cheapest, deemed universities are most expensive but offer premium placement." },
  { q: "Do top Delhi engineering colleges offer hostel facilities?", a: "Yes. DTU Delhi, IIIT Delhi, IMI Delhi, Amity University Delhi, and Cummins all offer hostel facilities. DTU Delhi hostels cost approximately ₹60,000-80,000/year. Private colleges offer both on-campus and off-campus accommodation options." },
]

export default function TopEngineeringCollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Top Engineering Colleges Delhi", url: "/top-engineering-colleges-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top Engineering colleges in Delhi 2026",
    numberOfItems: colleges.length,
    itemListElement: colleges.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `https://collegedelhi.com/colleges/${c.slug}`,
    })),
  }

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <SEOLandingPage
        breadcrumb={[{ label: "Top Engineering colleges in Delhi", href: "/top-engineering-colleges-delhi" }]}
        h1="Top Engineering colleges in Delhi 2026"
        subtitle="Ranked by NIRF, NAAC grades, fees, and placement packages - the definitive guide to the best engineering institutions in Delhi for 2026 admission."
        heroStats={[
          { value: "50+", label: "Engineering Colleges" },
          { value: "NIRF #49", label: "Best Rank (DTU Delhi)" },
          { value: "₹12 LPA", label: "Best Avg Placement" },
          { value: "JEE Main/JEE", label: "Primary Entrance" },
        ]}
        introHeading="Top Engineering colleges in Delhi: 2026 Ranking Guide"
        introParagraphs={[
          "Delhi is home to some of India's most respected engineering colleges, with a legacy dating back to 1854 when the Delhi Technological University (DTU) was established. Today, the city hosts 50+ AICTE-approved engineering institutions ranging from government autonomous colleges with fees as low as ₹80,000/year to premium deemed universities with world-class facilities.",
          "Ranking Delhi engineering colleges requires evaluating multiple factors: NIRF national ranking, NAAC accreditation grade, annual fees and scholarship availability, placement statistics (average and highest packages), faculty-student ratio, infrastructure, and research output. This guide synthesizes all these parameters for 2026 admissions.",
          "The top engineering colleges in Delhi maintain strong industry connections with Delhi's thriving auto, IT, and manufacturing sectors. Companies like Bajaj Auto, Tata Motors, Infosys, TCS, L&T, and global MNCs conduct campus placements every year, ensuring excellent career outcomes for graduates.",
        ]}
        colleges={colleges}
        whyHeading="Why Delhi Engineering Colleges Rank Among India's Best"
        whyPoints={[
          { title: "NIRF Top 101 Institutions", description: "DTU (NIRF #49) and IIIT Delhi (NIRF #101) are among India's top 101 engineering institutions, validated by the Ministry of Education's independent ranking framework." },
          { title: "Industry-Integrated Curriculum", description: "Top Delhi engineering colleges offer internship programs with Bajaj Auto, Thermax, Cummins India, and 500+ IT companies, bridging the gap between academia and industry requirements." },
          { title: "Research & Innovation Culture", description: "DTU Delhi's startup incubation center, Amity University Delhi's innovation lab, and IMI Delhi's research clusters produce 100+ patents annually, making them nationally recognized research institutions." },
          { title: "Diverse Branch Options", description: "From Computer Science to Mechanical, Civil, Electronics, Chemical, and emerging AI/ML engineering specializations - Delhi colleges offer 30+ branch options to match every interest." },
          { title: "Government Scholarship Access", description: "Students admitted via JEE Main JAC Delhi Rounds to government-aided colleges qualify for EBC scholarship, merit scholarship, and central government schemes covering up to 100% fees." },
          { title: "Alumni Network Strength", description: "DTU Delhi and NSUT alumni communities span Google, Microsoft, Infosys, and Bajaj Auto leadership, providing mentorship, job referrals, and startup funding access to current students." },
        ]}
        admissionHeading="How to Get Admission in Top Engineering colleges in Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Register for JEE Main 2026", description: "Fill the JEE Main application form at mahacet.org between January-February 2026. Pay application fee of ₹800 (general) or ₹600 (reserved categories). Aim for 95+ percentile for DTU Delhi/NSUT." },
          { step: "2", title: "Appear for Entrance Exam", description: "JEE Main is conducted in April-May 2026. JEE Main (January and April sessions) is also accepted at DTU Delhi, IIIT Delhi, IMI Delhi, and Amity University Delhi for management quota and some general seats." },
          { step: "3", title: "Fill CAP Registration Form", description: "After results (June), register on the JEE Main CAP portal (cetcell.mahacet.org). Upload documents, verify eligibility, and fill college preferences in your preferred order." },
          { step: "4", title: "JAC Delhi Rounds & Seat Allotment", description: "Three JAC Delhi Rounds are conducted in July-August. Accept the allotment within the deadline and pay seat acceptance fee (₹5,000-15,000) to confirm. If not satisfied, wait for next round." },
          { step: "5", title: "Report to College", description: "Report to the allotted college with original documents (10th/12th marksheets, CET scorecard, caste/domicile certificates, Aadhar, photos) within the specified deadline and pay full fees." },
        ]}
        faqs={faqs}
        ctaHeading="Find Your Perfect Engineering College in Delhi"
        ctaSubtext="Use our AI-powered college finder to match your JEE Main percentile with the best engineering colleges in Delhi. Free, personalized guidance from expert counsellors."
      relatedGuides={[
        { label: "Best Engineering colleges in Delhi 2026", href: "/engineering-colleges-delhi", icon: "🏛️" },
        { label: "Top 10 Engineering Colleges — Ranked", href: "/top-10-engineering-colleges-in-delhi", icon: "🏆" },
        { label: "Placement Stats — Avg & Highest LPA", href: "/engineering-colleges-delhi-placement", icon: "💼" },
        { label: "Low Fees Engineering Colleges", href: "/low-fees-engineering-colleges-delhi", icon: "💰" },
        { label: "Engineering Scholarships in Delhi", href: "/engineering-colleges-delhi-scholarship", icon: "🎓" },
        { label: "JEE Main Colleges & Cutoffs 2026", href: "/JEE Main-colleges-Delhi", icon: "📝" },
        { label: "JEE Main colleges in Delhi", href: "/jee-colleges-delhi", icon: "📚" },
        { label: "Computer Engineering Colleges Delhi", href: "/computer-engineering-colleges-delhi", icon: "💻" },
        { label: "Government colleges in Delhi", href: "/government-colleges-delhi", icon: "🏛️" },
      ]}
      />
    </>
  )
}

