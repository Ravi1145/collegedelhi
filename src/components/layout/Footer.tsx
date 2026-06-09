import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import LeadCapture from "@/components/leads/LeadCapture"

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
    { label: "DTU Delhi",              href: "/colleges/delhi-technological-university-dtu" },
    { label: "NSUT Delhi",             href: "/colleges/nsut-netaji-subhas-university-of-technology" },
    { label: "IIIT Delhi",             href: "/colleges/iiit-delhi" },
    { label: "FMS Delhi",              href: "/colleges/fms-delhi-faculty-management-studies" },
    { label: "AIIMS Delhi",            href: "/colleges/aiims-delhi" },
    { label: "Miranda House",          href: "/colleges/miranda-house-delhi-university" },
    { label: "SRCC Delhi",             href: "/colleges/srcc-sri-ram-college-commerce-du" },
    { label: "Amity Noida",            href: "/colleges/amity-university-noida-engineering" },
  ],
  "Engineering & MBA": [
    { label: "Engineering Colleges Delhi",   href: "/engineering-colleges-delhi" },
    { label: "Top 10 Engineering Colleges",  href: "/top-10-engineering-colleges-in-delhi" },
    { label: "Engineering Placement Delhi",  href: "/engineering-colleges-delhi-placement" },
    { label: "Low Fees Engineering Delhi",   href: "/low-fees-engineering-colleges-delhi" },
    { label: "MBA Colleges Delhi",           href: "/mba-colleges-delhi" },
    { label: "Top 10 MBA Colleges Delhi",    href: "/top-10-mba-colleges-in-delhi" },
    { label: "MBA Placement Delhi",          href: "/mba-colleges-delhi-placement" },
    { label: "MBA Without CAT Delhi",        href: "/mba-admission-delhi-without-cat" },
  ],
  "Other Streams": [
    { label: "Medical Colleges Delhi",       href: "/medical-colleges-delhi" },
    { label: "Arts & Science Colleges",      href: "/arts-colleges-delhi" },
    { label: "Law Colleges Delhi",           href: "/law-colleges-delhi" },
    { label: "BCA Colleges Delhi",           href: "/bca-colleges-delhi" },
    { label: "Design Colleges Delhi",        href: "/design-colleges-delhi" },
    { label: "Pharmacy Colleges Delhi",      href: "/pharmacy-colleges-delhi" },
    { label: "Government Colleges Delhi",    href: "/government-colleges-delhi" },
    { label: "Colleges with Hostel Delhi",   href: "/colleges-in-delhi-with-hostel" },
  ],
  "Tools & Resources": [
    { label: "College Predictor",            href: "/predictor" },
    { label: "Compare Colleges",             href: "/compare" },
    { label: "ROI Calculator",               href: "/roi-calculator" },
    { label: "NIRF Insights",                href: "/nirf-insights" },
    { label: "Cutoffs 2026",                 href: "/cutoffs" },
    { label: "Scholarships 2026",            href: "/scholarships" },
    { label: "Alumni Q&A",                   href: "/qa" },
    { label: "Free Counselling",             href: "/counselling" },
  ],
}

const seoLinks = [
  { label: "Best College in Delhi",                href: "/" },
  { label: "Best BTech College in Delhi",          href: "/engineering-colleges-delhi" },
  { label: "Best MBA College in Delhi",            href: "/mba-colleges-delhi" },
  { label: "Top Engineering Colleges Delhi",       href: "/top-10-engineering-colleges-in-delhi" },
  { label: "Top MBA Colleges Delhi",               href: "/top-10-mba-colleges-in-delhi" },
  { label: "Medical Colleges Delhi",               href: "/medical-colleges-delhi" },
  { label: "Private Engineering Colleges Delhi",   href: "/private-engineering-colleges-delhi" },
  { label: "Private MBA Colleges Delhi",           href: "/private-mba-colleges-delhi" },
  { label: "Engineering Placement 2026",           href: "/engineering-colleges-delhi-placement" },
  { label: "MBA Placement 2026",                   href: "/mba-colleges-delhi-placement" },
  { label: "Low Fee Engineering Colleges Delhi",   href: "/low-fees-engineering-colleges-delhi" },
  { label: "Low Fee MBA Colleges Delhi",           href: "/low-fees-mba-colleges-delhi" },
  { label: "Direct Admission Engineering Delhi",   href: "/direct-admission-engineering-colleges-delhi" },
  { label: "Direct Admission MBA Delhi",           href: "/direct-admission-mba-colleges-delhi" },
  { label: "Delhi University Colleges List",       href: "/colleges" },
  { label: "JEE Colleges Delhi",                   href: "/jee-colleges-delhi" },
  { label: "Cutoffs 2026 All Exams",               href: "/cutoffs" },
  { label: "ROI Calculator Delhi",                 href: "/roi-calculator" },
  { label: "NIRF Rankings Delhi 2026",             href: "/nirf-insights" },
  { label: "Government Colleges Delhi",            href: "/government-colleges-delhi" },
  { label: "Law Colleges Delhi",                   href: "/law-colleges-delhi" },
  { label: "Design Colleges Delhi",                href: "/design-colleges-delhi" },
  { label: "Arts Colleges Delhi",                  href: "/arts-colleges-delhi" },
  { label: "Engineering Colleges Noida",           href: "/engineering-colleges-noida" },
  { label: "MBA Colleges Noida",                   href: "/mba-colleges-noida" },
  { label: "Colleges Greater Noida",              href: "/colleges-greater-noida" },
  { label: "Colleges in Gurugram (Gurgaon)",      href: "/colleges-gurugram" },
  { label: "DTU vs NSUT 2026",                    href: "/dtu-vs-nsut" },
  { label: "Admission Calendar 2026",             href: "/delhi-college-admission-calendar-2026" },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-navy)" }} className="text-gray-300">

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">

          {/* Brand + contact */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="CollegeDelhi - Best colleges in Delhi"
                className="h-14 w-auto object-contain"
                style={{ mixBlendMode: "screen" }}
              />
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-xs">
              India&apos;s AI-powered college discovery portal for Delhi. Compare the best engineering, MBA, medical, and arts colleges with real fees, placements &amp; reviews.
            </p>

            <div className="space-y-2 text-sm mb-5">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 shrink-0" style={{ color: "var(--color-accent)" }} />
                Connaught Place, New Delhi, Delhi 110001
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 shrink-0" style={{ color: "var(--color-accent)" }} />
                <a href="mailto:support@collegedelhi.com" className="hover:text-white transition-colors">
                  support@collegedelhi.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 shrink-0" style={{ color: "var(--color-accent)" }} />
                <a href="tel:+917753831118" className="hover:text-white transition-colors">
                  +91 77538 31118
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`CollegeDelhi on ${label}`}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors text-gray-300 hover:text-white bg-white/10 hover:bg-accent"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Footer lead form */}
            <div className="mt-5">
              <LeadCapture
                source="footer_form"
                minimal
                buttonText="Get Free Guidance"
                placeholderName="Your Name"
                placeholderPhone="WhatsApp Number"
                title="Free College Counselling"
              />
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h3 className="text-white font-bold text-sm mb-4 border-b border-white/10 pb-2">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-gray-400 hover:text-white transition-colors leading-snug"
                    >
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
            <Link href="/privacy"     className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms"       className="hover:text-gray-300 transition-colors">Terms of Use</Link>
            <Link href="/disclaimer"  className="hover:text-gray-300 transition-colors">Disclaimer</Link>
            <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}
