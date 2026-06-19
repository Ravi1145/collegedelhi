import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/CollegeDelhi",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/CollegeDelhi",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@CollegeDelhi",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0A1628" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/collegedelhi",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917753831118",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.413A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fillOpacity=".15" />
        <path d="M12 3.5C7.313 3.5 3.5 7.313 3.5 12c0 1.744.503 3.37 1.372 4.74L3.5 20.5l3.87-1.356A8.462 8.462 0 0 0 12 20.5c4.687 0 8.5-3.813 8.5-8.5S16.687 3.5 12 3.5z" fillOpacity=".1" />
      </svg>
    ),
  },
]

const footerLinks = {
  "Top Colleges": [
    { label: "IIT Delhi",              href: "/colleges/iit-delhi" },
    { label: "DTU Delhi",              href: "/colleges/dtu-delhi" },
    { label: "NSUT Delhi",             href: "/colleges/nsut-delhi" },
    { label: "IIIT Delhi",             href: "/colleges/iiit-delhi" },
    { label: "FMS Delhi",              href: "/colleges/fms-delhi-faculty-management-studies" },
    { label: "AIIMS Delhi",            href: "/colleges/aiims-delhi" },
    { label: "Miranda House",          href: "/colleges/miranda-house-delhi-university" },
    { label: "SRCC Delhi",             href: "/colleges/srcc-sri-ram-college-commerce-du" },
    { label: "MDI Gurgaon",            href: "/mdi-gurgaon" },
    { label: "IIFT Delhi",             href: "/iift-delhi" },
    { label: "FMS Delhi Admission",    href: "/fms-delhi" },
    { label: "FORE School Delhi",      href: "/fore-school-management-delhi" },
  ],
  "Engineering Colleges": [
    { label: "Engineering Colleges Delhi",         href: "/engineering-colleges-delhi" },
    { label: "Top 10 Engineering Colleges",        href: "/top-10-engineering-colleges-in-delhi" },
    { label: "Top Engineering Colleges Delhi",     href: "/top-engineering-colleges-delhi" },
    { label: "Private Engineering Colleges Delhi", href: "/private-engineering-colleges-delhi" },
    { label: "Engineering Placement Delhi",        href: "/engineering-colleges-delhi-placement" },
    { label: "Low Fees Engineering Delhi",         href: "/low-fees-engineering-colleges-delhi" },
    { label: "Direct Admission Engineering",       href: "/direct-admission-engineering-colleges-delhi" },
    { label: "Engineering Without JEE Delhi",      href: "/engineering-admission-delhi-without-jee" },
    { label: "Computer Engineering Delhi",         href: "/computer-engineering-colleges-delhi" },
    { label: "Mechanical Engineering Delhi",       href: "/mechanical-engineering-colleges-delhi" },
    { label: "BTech Colleges Delhi",               href: "/btech-colleges-delhi" },
    { label: "MTech Colleges Delhi",               href: "/mtech-colleges-delhi" },
  ],
  "MBA Colleges": [
    { label: "MBA Colleges Delhi",                 href: "/mba-colleges-delhi" },
    { label: "Best MBA Colleges Delhi",            href: "/best-mba-colleges-delhi" },
    { label: "Top 10 MBA Colleges Delhi",          href: "/top-10-mba-colleges-in-delhi" },
    { label: "Government MBA Colleges Delhi",      href: "/government-mba-colleges-delhi" },
    { label: "Private MBA Colleges Delhi",         href: "/private-mba-colleges-delhi" },
    { label: "MBA Placement Delhi",                href: "/mba-colleges-delhi-placement" },
    { label: "MBA Without CAT Delhi",              href: "/mba-admission-delhi-without-cat" },
    { label: "Low Fees MBA Delhi",                 href: "/low-fees-mba-colleges-delhi" },
    { label: "PGDM Colleges Delhi",                href: "/pgdm-colleges-delhi" },
    { label: "Online MBA Delhi",                   href: "/online-mba-delhi" },
    { label: "Part-Time MBA Delhi",                href: "/part-time-mba-delhi" },
    { label: "Direct Admission MBA Delhi",         href: "/direct-admission-mba-colleges-delhi" },
  ],
  "MBA Specialisations": [
    { label: "MBA Finance Delhi",                  href: "/mba-in-finance-delhi" },
    { label: "MBA Marketing Delhi",                href: "/mba-in-marketing-delhi" },
    { label: "MBA HR Delhi",                       href: "/mba-in-hr-delhi" },
    { label: "MBA Business Analytics Delhi",       href: "/mba-in-business-analytics-delhi" },
    { label: "MBA Digital Marketing Delhi",        href: "/mba-in-digital-marketing-delhi" },
    { label: "MBA International Business Delhi",   href: "/mba-in-international-business-delhi" },
    { label: "MBA Operations Delhi",               href: "/mba-in-operations-delhi" },
    { label: "MBA IT Delhi",                       href: "/mba-in-information-technology-delhi" },
    { label: "MBA Banking & Finance Delhi",        href: "/mba-in-banking-finance-delhi" },
    { label: "MBA Healthcare Delhi",               href: "/mba-in-healthcare-management-delhi" },
    { label: "Executive MBA Delhi",                href: "/executive-mba-delhi" },
    { label: "PGDM vs MBA Delhi",                  href: "/pgdm-vs-mba-delhi" },
  ],
  "Other Streams": [
    { label: "Medical Colleges Delhi",             href: "/medical-colleges-delhi" },
    { label: "MBBS Colleges Delhi",                href: "/mbbs-colleges-delhi" },
    { label: "Top 10 Medical Colleges Delhi",      href: "/top-10-medical-colleges-in-delhi" },
    { label: "Arts Colleges Delhi",                href: "/arts-colleges-delhi" },
    { label: "Science Colleges Delhi",             href: "/science-colleges-delhi" },
    { label: "Commerce Colleges Delhi",            href: "/commerce-colleges-delhi" },
    { label: "Law Colleges Delhi",                 href: "/law-colleges-delhi" },
    { label: "LLB Colleges Delhi",                 href: "/llb-colleges-delhi" },
    { label: "Design Colleges Delhi",              href: "/design-colleges-delhi" },
    { label: "Architecture Colleges Delhi",        href: "/architecture-colleges-delhi" },
    { label: "BBA Colleges Delhi",                 href: "/bba-colleges-delhi" },
    { label: "BMS Colleges Delhi",                 href: "/bms-colleges-delhi" },
  ],
  "By Location (Delhi NCR)": [
    { label: "Colleges in Delhi",                  href: "/colleges-in-delhi" },
    { label: "Best Colleges in Delhi",             href: "/best-colleges-in-delhi" },
    { label: "Top Colleges in Delhi",              href: "/top-colleges-in-delhi" },
    { label: "Colleges in South Delhi",            href: "/colleges-south-delhi" },
    { label: "Colleges in North Delhi",            href: "/colleges-north-delhi" },
    { label: "Colleges in East Delhi",             href: "/colleges-east-delhi" },
    { label: "Colleges in Dwarka Delhi",           href: "/colleges-dwarka-delhi" },
    { label: "Colleges in Rohini Delhi",           href: "/colleges-rohini-delhi" },
    { label: "Colleges in Vasant Kunj Delhi",      href: "/colleges-vasant-kunj-delhi" },
    { label: "Engineering Colleges Noida",         href: "/engineering-colleges-noida" },
    { label: "MBA Colleges Noida",                 href: "/mba-colleges-noida" },
    { label: "Colleges in Gurgaon",                href: "/colleges-gurugram" },
  ],
  "Comparisons & Guides": [
    { label: "IIT Delhi vs DTU",                   href: "/iit-delhi-vs-dtu" },
    { label: "DTU vs NSUT",                        href: "/dtu-vs-nsut" },
    { label: "DTU vs IIIT Delhi",                  href: "/dtu-vs-iiit-delhi" },
    { label: "NSUT vs IIIT Delhi",                 href: "/nsut-vs-iiit-delhi" },
    { label: "MAIT vs MSIT",                       href: "/mait-vs-msit" },
    { label: "FMS vs IIFT",                        href: "/fms-vs-iift" },
    { label: "FMS Delhi vs MDI Gurgaon",           href: "/fms-delhi-vs-mdi-gurgaon" },
    { label: "MDI vs IMI",                         href: "/mdi-vs-imi" },
    { label: "MDI vs IMT",                         href: "/mdi-vs-imt" },
    { label: "FMS vs IMI Delhi",                   href: "/fms-vs-imi-delhi" },
    { label: "IMI Delhi vs FORE",                  href: "/imi-delhi-vs-fore" },
    { label: "IMI Delhi vs LBSIM",                 href: "/imi-delhi-vs-lbsim" },
    { label: "IMT vs BIMTECH",                     href: "/imt-vs-bimtech" },
    { label: "JIMS vs NDIM",                       href: "/jims-vs-ndim" },
    { label: "Miranda House vs LSR",               href: "/miranda-house-vs-lsr" },
    { label: "SRCC vs Hindu College",              href: "/srcc-vs-hindu-college" },
  ],
  "Exams & Admission": [
    { label: "JEE Colleges Delhi",                 href: "/jee-colleges-delhi" },
    { label: "NEET Colleges Delhi",                href: "/neet-colleges-delhi" },
    { label: "CUET Colleges Delhi",                href: "/cuet-colleges-delhi" },
    { label: "CAT Colleges Delhi",                 href: "/cat-colleges-delhi" },
    { label: "CET Colleges Delhi",                 href: "/cet-colleges-delhi" },
    { label: "DU Colleges Delhi",                  href: "/du-colleges-delhi" },
    { label: "IPU Colleges Delhi",                 href: "/ipu-colleges-delhi" },
    { label: "Cutoffs 2026",                       href: "/cutoffs" },
    { label: "JEE Main Cutoff 2026",              href: "/cutoffs/JEE Main" },
    { label: "NEET Cutoff 2026",                  href: "/cutoffs/neet" },
    { label: "CAT Cutoff MBA 2026",               href: "/cutoffs/cat" },
    { label: "IPU CET Cutoff 2026",               href: "/cutoffs/ipu-cet" },
    { label: "CLAT Cutoff Delhi 2026",            href: "/cutoffs/clat" },
    { label: "Delhi Admission Calendar 2026",      href: "/delhi-college-admission-calendar-2026" },
    { label: "Admission Deadline Tracker",         href: "/delhi-admission-deadline-tracker-2026" },
    { label: "Scholarships 2026",                  href: "/scholarships" },
    { label: "Free Counselling",                   href: "/counselling" },
  ],
  "Tools & Resources": [
    { label: "College Predictor",                  href: "/predictor" },
    { label: "Compare Colleges",                   href: "/compare" },
    { label: "ROI Calculator",                     href: "/roi-calculator" },
    { label: "Fees Calculator",                    href: "/delhi-college-fees-calculator" },
    { label: "Placement Comparator",               href: "/delhi-college-placement-comparator" },
    { label: "NIRF Insights",                      href: "/nirf-insights" },
    { label: "AI College Finder",                  href: "/ai-finder" },
    { label: "Alumni Q&A",                         href: "/qa" },
    { label: "Blog & Guides",                      href: "/blog" },
    { label: "News & Updates",                     href: "/news" },
    { label: "Entrance Exams",                     href: "/exams" },
    { label: "All Courses",                        href: "/courses" },
  ],
}

const seoLinks = [
  { label: "Best Colleges in Delhi 2026",          href: "/best-colleges-in-delhi" },
  { label: "Top Colleges in Delhi 2026",           href: "/top-colleges-in-delhi" },
  { label: "Best BTech College in Delhi",          href: "/engineering-colleges-delhi" },
  { label: "Best MBA College in Delhi",            href: "/mba-colleges-delhi" },
  { label: "Top 10 Engineering Colleges Delhi",    href: "/top-10-engineering-colleges-in-delhi" },
  { label: "Top 10 MBA Colleges Delhi",            href: "/top-10-mba-colleges-in-delhi" },
  { label: "Medical Colleges Delhi",               href: "/medical-colleges-delhi" },
  { label: "MBBS Colleges Delhi",                  href: "/mbbs-colleges-delhi" },
  { label: "Top 10 Medical Colleges Delhi",        href: "/top-10-medical-colleges-in-delhi" },
  { label: "Private Engineering Colleges Delhi",   href: "/private-engineering-colleges-delhi" },
  { label: "Private MBA Colleges Delhi",           href: "/private-mba-colleges-delhi" },
  { label: "Engineering Placement Delhi 2026",     href: "/engineering-colleges-delhi-placement" },
  { label: "MBA Placement Delhi 2026",             href: "/mba-colleges-delhi-placement" },
  { label: "Low Fee Engineering Colleges Delhi",   href: "/low-fees-engineering-colleges-delhi" },
  { label: "Low Fee MBA Colleges Delhi",           href: "/low-fees-mba-colleges-delhi" },
  { label: "Direct Admission Engineering Delhi",   href: "/direct-admission-engineering-colleges-delhi" },
  { label: "Direct Admission MBA Delhi",           href: "/direct-admission-mba-colleges-delhi" },
  { label: "DU Colleges Delhi List",               href: "/du-colleges-delhi" },
  { label: "IPU Colleges Delhi",                   href: "/ipu-colleges-delhi" },
  { label: "JEE Colleges Delhi",                   href: "/jee-colleges-delhi" },
  { label: "NEET Colleges Delhi",                  href: "/neet-colleges-delhi" },
  { label: "CUET Colleges Delhi",                  href: "/cuet-colleges-delhi" },
  { label: "CAT Colleges Delhi",                   href: "/cat-colleges-delhi" },
  { label: "Cutoffs 2026 All Exams",               href: "/cutoffs" },
  { label: "ROI Calculator Delhi",                 href: "/roi-calculator" },
  { label: "NIRF Rankings Delhi 2026",             href: "/nirf-insights" },
  { label: "Government Colleges Delhi",            href: "/government-colleges-delhi" },
  { label: "Law Colleges Delhi",                   href: "/law-colleges-delhi" },
  { label: "LLB Colleges Delhi",                   href: "/llb-colleges-delhi" },
  { label: "Design Colleges Delhi",                href: "/design-colleges-delhi" },
  { label: "Architecture Colleges Delhi",          href: "/architecture-colleges-delhi" },
  { label: "Arts Colleges Delhi",                  href: "/arts-colleges-delhi" },
  { label: "Science Colleges Delhi",               href: "/science-colleges-delhi" },
  { label: "Commerce Colleges Delhi",              href: "/commerce-colleges-delhi" },
  { label: "BBA Colleges Delhi",                   href: "/bba-colleges-delhi" },
  { label: "BCA Colleges Delhi",                   href: "/bca-colleges-delhi" },
  { label: "BMS Colleges Delhi",                   href: "/bms-colleges-delhi" },
  { label: "BCom Colleges Delhi",                  href: "/bcom-colleges-delhi" },
  { label: "Journalism Colleges Delhi",            href: "/journalism-colleges-delhi" },
  { label: "Mass Communication Colleges Delhi",    href: "/mass-communication-colleges-delhi" },
  { label: "Hotel Management Colleges Delhi",      href: "/hotel-management-colleges-delhi" },
  { label: "Nursing Colleges Delhi",               href: "/nursing-colleges-delhi" },
  { label: "Pharmacy Colleges Delhi",              href: "/pharmacy-colleges-delhi" },
  { label: "Paramedical Colleges Delhi",           href: "/paramedical-colleges-delhi" },
  { label: "Engineering Colleges Noida",           href: "/engineering-colleges-noida" },
  { label: "MBA Colleges Noida",                   href: "/mba-colleges-noida" },
  { label: "BBA Colleges Noida",                   href: "/bba-colleges-noida" },
  { label: "BCA Colleges Noida",                   href: "/bca-colleges-noida" },
  { label: "MBA Colleges Greater Noida",           href: "/mba-colleges-greater-noida" },
  { label: "MBA Colleges Gurgaon",                 href: "/mba-colleges-gurgaon" },
  { label: "Colleges Greater Noida",               href: "/colleges-greater-noida" },
  { label: "Colleges in Gurgaon",                  href: "/colleges-gurugram" },
  { label: "Colleges in South Delhi",              href: "/colleges-south-delhi" },
  { label: "Colleges in North Delhi",              href: "/colleges-north-delhi" },
  { label: "Colleges in Dwarka Delhi",             href: "/colleges-dwarka-delhi" },
  { label: "Colleges in Rohini Delhi",             href: "/colleges-rohini-delhi" },
  { label: "Colleges with Hostel Delhi",           href: "/colleges-in-delhi-with-hostel" },
  { label: "Girls Colleges Delhi",                 href: "/girls-colleges-delhi" },
  { label: "Low Fee Colleges Delhi",               href: "/low-fee-colleges-delhi" },
  { label: "NAAC A+ Colleges Delhi",              href: "/naac-a-plus-colleges-delhi" },
  { label: "Top Placement Colleges Delhi",         href: "/top-placement-colleges-delhi" },
  { label: "IIT Delhi vs DTU 2026",               href: "/iit-delhi-vs-dtu" },
  { label: "DTU vs NSUT 2026",                    href: "/dtu-vs-nsut" },
  { label: "NSUT vs IIIT Delhi 2026",             href: "/nsut-vs-iiit-delhi" },
  { label: "DTU vs IIIT Delhi 2026",              href: "/dtu-vs-iiit-delhi" },
  { label: "MAIT vs MSIT Delhi",                  href: "/mait-vs-msit" },
  { label: "FMS vs IIFT Delhi",                   href: "/fms-vs-iift" },
  { label: "FMS Delhi vs MDI Gurgaon",            href: "/fms-delhi-vs-mdi-gurgaon" },
  { label: "MDI vs IMI Delhi",                    href: "/mdi-vs-imi" },
  { label: "IMI Delhi vs FORE",                   href: "/imi-delhi-vs-fore" },
  { label: "Miranda House vs LSR",                href: "/miranda-house-vs-lsr" },
  { label: "JEE Main Cutoff Delhi 2026",          href: "/cutoffs/JEE Main" },
  { label: "NEET Cutoff Delhi 2026",              href: "/cutoffs/neet" },
  { label: "CAT Cutoff MBA Delhi 2026",           href: "/cutoffs/cat" },
  { label: "IPU CET Cutoff 2026",                 href: "/cutoffs/ipu-cet" },
  { label: "CLAT Cutoff Delhi 2026",              href: "/cutoffs/clat" },
  { label: "MBA Finance Colleges Delhi",          href: "/mba-in-finance-delhi" },
  { label: "MBA Marketing Colleges Delhi",        href: "/mba-in-marketing-delhi" },
  { label: "MBA Business Analytics Delhi",        href: "/mba-in-business-analytics-delhi" },
  { label: "Online MBA Delhi",                    href: "/online-mba-delhi" },
  { label: "Executive MBA Delhi",                 href: "/executive-mba-delhi" },
  { label: "Part-Time MBA Delhi",                 href: "/part-time-mba-delhi" },
  { label: "Admission Calendar 2026",             href: "/delhi-college-admission-calendar-2026" },
  { label: "Admission Deadline Tracker 2026",     href: "/delhi-admission-deadline-tracker-2026" },
  { label: "College Fees Calculator Delhi",       href: "/delhi-college-fees-calculator" },
  { label: "Engineering vs MBA Delhi",            href: "/delhi-colleges-comparison-engineering-mba" },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-navy)" }} className="text-gray-300">

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Brand + contact */}
        <div className="mb-8 pb-8 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-8">
            <Link href="/" className="inline-flex items-center shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="CollegeDelhi - Best colleges in Delhi"
                className="h-14 w-auto object-contain"
                style={{ mixBlendMode: "screen" }}
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              India&apos;s AI-powered college discovery portal for Delhi. Compare the best engineering, MBA, medical, and arts colleges with real fees, placements &amp; reviews.
            </p>
            <div className="flex flex-col gap-1.5 text-sm sm:ml-auto">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 shrink-0" style={{ color: "var(--color-accent)" }} />
                Connaught Place, New Delhi, Delhi 110001
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 shrink-0" style={{ color: "var(--color-accent)" }} />
                <a href="mailto:support@collegedelhi.com" className="hover:text-white transition-colors">support@collegedelhi.com</a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 shrink-0" style={{ color: "var(--color-accent)" }} />
                <a href="tel:+917753831118" className="hover:text-white transition-colors">+91 77538 31118</a>
              </div>
              <div className="flex items-center gap-2.5 mt-1">
                {socialLinks.map(({ label, href, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    aria-label={`CollegeDelhi on ${label}`}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors text-gray-300 hover:text-white bg-white/10 hover:bg-accent">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Link columns — 2 col on mobile, 4 col on md, 5 col on xl */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-3 border-b border-white/10 pb-2">
                {title}
              </h3>
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-start gap-1 text-xs text-gray-400 hover:text-white transition-colors py-0.5 group"
                    >
                      <span className="text-gray-600 group-hover:text-red-400 transition-colors mt-0.5 shrink-0">›</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* SEO keyword strip */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {seoLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; 2026 collegedelhi.com &middot; All rights reserved &middot; AI-powered college discovery for Delhi
          </p>
          <div className="flex items-center gap-5 text-xs text-gray-500">
            <Link href="/privacy"           className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms"             className="hover:text-gray-300 transition-colors">Terms of Use</Link>
            <Link href="/disclaimer"        className="hover:text-gray-300 transition-colors">Disclaimer</Link>
            <Link href="/editorial-policy"  className="hover:text-gray-300 transition-colors">Editorial Policy</Link>
            <Link href="/about"             className="hover:text-gray-300 transition-colors">About Us</Link>
            <Link href="/sitemap.xml"       className="hover:text-gray-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}
