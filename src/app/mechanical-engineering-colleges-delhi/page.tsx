import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Mechanical Engineering colleges in Delhi 2026 | Fees, Placements & Cutoffs",
  description: "Top mechanical engineering colleges in Delhi 2026. DTU Delhi, NSUT, IIIT Delhi — compare fees (₹80K–3.8L), JEE Main cutoffs, and placements for Mech BTech.",
  path: "/mechanical-engineering-colleges-delhi",
  keywords: ["mechanical engineering colleges Delhi", "mech engineering colleges Delhi 2026", "best mechanical College Delhi", "mechanical btech Delhi"],
})

export const revalidate = 300

const colleges = [
  { name: "Delhi Technological University (DTU) - Mech", location: "Connaught Place", naac: "A+", fees: "₹80K-1.8L/yr", placement: "₹10 LPA avg", slug: "dtu-delhi-delhi-technological-university" },
  { name: "Indraprastha Institute of Information Technology (IIIT Delhi)", location: "Dwarka Sector 3", naac: "A+", fees: "₹1.6L-2.2L/yr", placement: "₹8.5 LPA avg", slug: "iiit-delhi-indraprastha-institute-of-information-technology" },
  { name: "Amity University Delhi - Mech", location: "Rohini", naac: "A+", fees: "₹2.0L-3.8L/yr", placement: "₹6.8 LPA avg", slug: "amity-university-noida-delhi-ncr" },
  { name: "Symbiosis Institute of Technology - Mech", location: "Knowledge Park Greater Noida", naac: "A+", fees: "₹3.6L-4.8L/yr", placement: "₹7.5 LPA avg", slug: "nit-delhi-national-institute-of-technology" },
  { name: "GL Bajaj Delhi Merit College of Engineering", location: "Knowledge Park", naac: "A", fees: "₹1.2L-1.7L/yr", placement: "₹5.2 LPA avg", slug: "GL Bajaj-gl-bajaj-institute-technology-management-noida" },
  { name: "Sharda University Engineering - Mech", location: "Vadgaon", naac: "A", fees: "₹1.15L-1.6L/yr", placement: "₹4.5 LPA avg", slug: "Sharda-college-of-engineering-Delhi" },
  { name: "Amity University Engineering", location: "Rohini Sector 17", naac: "A", fees: "₹1.45L-1.95L/yr", placement: "₹5.2 LPA avg", slug: "bharati-vidyapeeth-college-engineering-Delhi" },
  { name: "Bennett University Delhi Dwarka", location: "Dwarka", naac: "A", fees: "₹1.05L-1.55L/yr", placement: "₹4.8 LPA avg", slug: "dy-patil-college-engineering-Dwarka-Delhi" },
]

const faqs = [
  { q: "Which is the best mechanical engineering college in Delhi?", a: "DTU (Delhi Technological University) is best for Mechanical Engineering in Delhi due to its government status, NIRF ranking, and strong ties with Bajaj Auto, Tata Motors, and Cummins India. IIIT Delhi is the top private option for Mech." },
  { q: "What are the job opportunities for mechanical engineers from Delhi?", a: "Delhi's auto sector (Bajaj Auto, Tata Motors, Force Motors, Mahindra), manufacturing companies (Thermax, Cummins, Honeywell), and defense sector (HAL, DRDO) are major recruiters. Average starting salary is ₹4-8 LPA." },
  { q: "What is the JEE Main cutoff for mechanical engineering in Delhi?", a: "DTU Delhi Mechanical requires 90-95 percentile in JEE Main. IIIT Delhi Mech requires 80-88 percentile. Amity University Delhi Mech requires 70-80 percentile. Private colleges like GL Bajaj and Sharda accept 55-65 percentile." },
  { q: "Is mechanical engineering a good choice in Delhi in 2026?", a: "Yes. Delhi remains India's manufacturing capital with Bajaj Auto, Tata Motors, Force Motors, Kirloskar, and 500+ auto-ancillary companies offering strong mechanical engineering placements. The electric vehicle transition also creates new opportunities in EV design and battery systems." },
  { q: "Which companies recruit mechanical engineers from Delhi colleges?", a: "Top recruiters for Mech from Delhi colleges include Bajaj Auto (highest recruiter), Tata Motors, Cummins India, Thermax, L&T, Emerson, Bosch India, KPIT, Honeywell, and multinational auto component manufacturers." },
]

export default function MechanicalEngineeringCollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Mechanical Engineering Colleges Delhi", url: "/mechanical-engineering-colleges-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mechanical Engineering colleges in Delhi 2026",
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
        breadcrumb={[{ label: "Mechanical Engineering colleges in Delhi", href: "/mechanical-engineering-colleges-delhi" }]}
        h1="Mechanical Engineering colleges in Delhi 2026"
        subtitle="Compare the best mechanical engineering colleges in Delhi for 2026 BTech admission. Real data on JEE Main cutoffs, fees, auto-sector placements, and NAAC grades."
        heroStats={[
          { value: "30+", label: "Mech Colleges" },
          { value: "₹80K-3.8L", label: "Annual Fees" },
          { value: "Bajaj Auto", label: "Top Recruiter" },
          { value: "₹10 LPA", label: "Best Avg Package" },
        ]}
        introHeading="Mechanical Engineering colleges in Delhi: The Auto Capital's Best"
        introParagraphs={[
          "Delhi is India's undisputed manufacturing capital and home to the headquarters of Bajaj Auto, Tata Motors R&D, Force Motors, and Cummins India. This industrial ecosystem makes Delhi uniquely advantageous for mechanical engineering students, offering unparalleled internship and placement opportunities with global automotive and manufacturing giants.",
          "Mechanical engineering colleges in Delhi range from the prestigious DTU Delhi (one of India's oldest and best engineering institutions, est. 1854) to modern autonomous colleges like IIIT Delhi with world-class mechanical labs, CNC machining centers, and CAD/CAM facilities. The 2026 batch can also access new BTech specializations in Mechatronics, Automobile Engineering, and Manufacturing Engineering.",
          "With Delhi's transition to electric vehicles, colleges like Amity University Delhi and IMI Delhi have introduced EV-specific courses within mechanical engineering programs. Battery management systems, motor design, and EV powertrain are being integrated into the 2026 curriculum - making Delhi mechanical engineers well-positioned for India's ₹10 trillion EV industry.",
        ]}
        colleges={colleges}
        whyHeading="Why Study Mechanical Engineering in Delhi?"
        whyPoints={[
          { title: "Auto Industry Access", description: "Delhi hosts Bajaj Auto, Tata Motors, Force Motors, Mahindra, and 500+ auto-ancillary firms. Mechanical engineering students get direct campus placement opportunities from these industry leaders." },
          { title: "Advanced Lab Infrastructure", description: "Top Delhi mech colleges have CNC machining centers, FEM analysis labs, rapid prototyping facilities, and CAD/CAM suites sponsored by industry partners like Siemens, ANSYS, and Autodesk." },
          { title: "EV & Future Tech Readiness", description: "Delhi's leadership in EV adoption means mech engineers learn EV powertrain design, battery systems, and motor engineering - skills valued at ₹8-15 LPA by EV companies like Ather, Ola Electric, and Bajaj." },
          { title: "Diverse Industry Base", description: "Beyond autos, Delhi has aerospace (HAL, Bharat Forge), defense (DRDO), FMCG machinery, and IT hardware companies creating diverse mechanical engineering career paths." },
          { title: "Research Opportunities", description: "DTU Delhi and IIIT Delhi have active mechanical engineering research labs funded by DST and industry, offering students publication opportunities and exposure to cutting-edge R&D." },
          { title: "Core + IT Hybrid Roles", description: "Delhi mechanical engineers are increasingly recruited into product design, simulation engineering, and digital manufacturing roles at IT companies and global MNCs at ₹6-12 LPA." },
        ]}
        admissionHeading="Mechanical Engineering Admission Process in Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Target JEE Main PCM Percentile", description: "Mechanical is less competitive than CS in JEE Main. DTU Delhi Mech: aim 90-95 percentile. IIIT Delhi Mech: 80-88 percentile. Private colleges: 55-70 percentile. Start JEE Main prep from November 2025." },
          { step: "2", title: "Research College Labs & Industry Connections", description: "Before CAP, visit mechanical engineering labs at shortlisted colleges. Check their industry MoUs (Bajaj Auto, Tata Motors, Cummins), placement records, and alumni working in core mechanical roles." },
          { step: "3", title: "Register on CAP Portal Post-Results", description: "After JEE Main results in June 2026, register on jacdelhi.admissions.nic.in. Submit documents including 10th/12th marksheets, caste certificate, and domicile proof for Delhi seat eligibility." },
          { step: "4", title: "Fill Preferences (Mech First at Top Colleges)", description: "List college-branch combinations with Mechanical Engineering at DTU Delhi, IIIT Delhi, Amity University Delhi as first preferences, followed by realistic targets. Include non-Delhi options as safety nets." },
          { step: "5", title: "Explore Management Quota if CAP Does Not Work", description: "If CAP allotment is unsatisfactory, approach private colleges for management quota seats. These require direct applications to colleges and typically cost 20-30% more than government-controlled fees." },
        ]}
        faqs={faqs}
        ctaHeading="Find the Best Mech Engineering College for Your JEE Main Score"
        ctaSubtext="Our counsellors specialize in mechanical engineering admissions in Delhi. Get personalized college recommendations, scholarship guidance, and admission support - all free."
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

