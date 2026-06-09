import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms & Conditions — CollegeDelhi",
  description: "Terms and Conditions for using collegedelhi.com — India's college discovery portal for Delhi.",
  alternates: { canonical: "https://collegedelhi.com/terms" },
  robots: { index: true, follow: true },
}

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By accessing or using collegedelhi.com ("the Website"), you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree to these Terms, please do not use our Website. These terms apply to all visitors, students, parents, and counsellors who access the platform.`,
  },
  {
    id: "ownership",
    title: "2. Ownership",
    content: `collegedelhi.com is owned and operated by CollegeDelhi — a college discovery and counselling service based in Delhi, Delhi, India. All content, trademarks, logos, and intellectual property on this Website belong to CollegeDelhi unless otherwise stated.`,
  },
  {
    id: "services",
    title: "3. Use of Services",
    content: `collegedelhi.com provides information about colleges, courses, admissions, placements, fees, and related educational services for colleges in Delhi. You agree to use the Website only for lawful purposes and in accordance with these Terms.`,
    bulletsLabel: "You agree NOT to:",
    bullets: [
      "Misuse or reproduce the information on the Website without prior permission",
      "Engage in any fraudulent, deceptive, or unlawful activities through the Website",
      "Attempt to disrupt, hack, or harm the Website's functionality or servers",
      "Use automated bots or scrapers to extract data from the Website",
      "Post false, misleading, or defamatory content including fake reviews",
    ],
  },
  {
    id: "user-information",
    title: "4. User Information",
    content: `By submitting any information — such as your name, email, phone number, or educational preferences through forms, lead capture, counselling booking, or review submissions — you agree that we may use this information to:`,
    bullets: [
      "Contact you for counselling, guidance, or admission-related assistance",
      "Share relevant information with partnered colleges and universities in Delhi for admission purposes",
      "Send educational content, updates, and promotional material (via SMS, Email, WhatsApp, or calls)",
      "Improve our services and personalise your experience on the platform",
    ],
    note: "For full details on data usage and protection, please refer to our Privacy Policy.",
  },
  {
    id: "no-guarantee",
    title: "5. No Guarantee of Admission",
    content: `While collegedelhi.com provides assistance, counselling, and information to help students with college admissions in Delhi, we do not guarantee admission to any institution listed on our Website. Final admission decisions are made solely by the respective educational institutions based on their own eligibility criteria and seat availability.`,
  },
  {
    id: "reviews",
    title: "6. User Reviews & Ratings",
    content: `Users may submit reviews and ratings for colleges listed on CollegeDelhi. By submitting a review, you confirm that your content is honest, based on personal experience, and does not violate any laws or third-party rights. CollegeDelhi reserves the right to moderate, reject, or remove reviews that are found to be false, abusive, or in violation of these Terms. All reviews are subject to admin moderation before being published.`,
  },
  {
    id: "communication",
    title: "7. Communication Consent",
    content: `By filling out any enquiry form, counselling booking form, or review form on CollegeDelhi, you authorise CollegeDelhi and its representatives to contact you with updates, notifications, and guidance via Email, SMS, WhatsApp, or phone calls. This consent will override your DND/NDNC registration. In case you have submitted your personal information and contact details, CollegeDelhi and its partners reserve the right to call, SMS, email, or WhatsApp about educational products and services, even if your number has DND activated on it.`,
  },
  {
    id: "liability",
    title: "8. Limitation of Liability",
    content: `collegedelhi.com is not responsible for:`,
    bullets: [
      "Any inaccuracies, errors, or outdated information in college, course, fees, or placement details",
      "Any decisions — academic, financial, or career-related — made based on the information provided on the Website",
      "Any technical issues, website downtime, or data loss",
      "The accuracy of information provided by third-party college websites or portals",
    ],
    note: "Your use of the Website and its information is at your own risk. Always verify details directly with the educational institution.",
  },
  {
    id: "intellectual-property",
    title: "9. Intellectual Property",
    content: `All content on collegedelhi.com — including text, graphics, logos, icons, images, college data compilations, rankings, and software — is the intellectual property of CollegeDelhi unless stated otherwise. Unauthorised reproduction, distribution, or use of any content from this Website is strictly prohibited.`,
  },
  {
    id: "changes",
    title: "10. Changes to Terms",
    content: `We may update these Terms at any time without prior notice. Any changes will be posted on this page. By continuing to use the Website after changes are made, you agree to the revised Terms. We encourage you to review these Terms periodically.`,
  },
  {
    id: "dispute",
    title: "11. Dispute Resolution",
    content: `In case of any disputes arising from the use of collegedelhi.com or these Terms, you agree that they will be resolved under Indian laws. The exclusive jurisdiction for resolving disputes shall be the courts of Delhi, Delhi, India.`,
  },
  {
    id: "contact",
    title: "12. Contact Information",
    content: `For any concerns, questions, or complaints regarding these Terms & Conditions, please contact us:`,
    contact: {
      email: "support@collegedelhi.com",
      phone: "+91 77538 31118",
      address: "Connaught Place, New Delhi, Delhi 110001",
    },
  },
]

export default function TermsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-[#0A1628] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">â€º</span>
            <span className="text-gray-200">Terms &amp; Conditions</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Terms &amp; Conditions
          </h1>
          <p className="text-gray-400 text-sm">
            Last updated: June 2026 &nbsp;·&nbsp; Effective immediately upon use of collegedelhi.com
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Quick nav */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Jump to Section</p>
          <div className="flex flex-wrap gap-2">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`}
                className="text-xs bg-red-50 text-red-800 hover:bg-red-100 px-2.5 py-1 rounded-full transition-colors">
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Intro banner */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-5 mb-8">
          <p className="text-sm text-gray-700 leading-relaxed">
            Welcome to <strong>collegedelhi.com</strong>. These Terms &amp; Conditions govern your use of our website and services.
            Please read them carefully before accessing or using the platform. By using CollegeDelhi, you acknowledge and agree to these Terms.
            If you disagree, please discontinue using the platform immediately.
          </p>
        </div>

        {/* Section cards */}
        <div className="space-y-5">
          {sections.map(section => (
            <div key={section.id} id={section.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 scroll-mt-20">
              <h2 className="text-base font-bold text-[#0A1628] mb-3 pb-2 border-b border-gray-100">
                <span className="text-red-600 mr-2">{section.title.split(".")[0]}.</span>
                {section.title.split(". ").slice(1).join(". ")}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">{section.content}</p>

              {section.bulletsLabel && (
                <p className="text-sm font-semibold text-gray-800 mt-3 mb-2">{section.bulletsLabel}</p>
              )}
              {section.bullets && (
                <ul className="mt-2 space-y-1.5">
                  {section.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-red-400 mt-0.5 shrink-0 font-bold">â€º</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {section.note && (
                <p className="mt-3 text-xs text-gray-500 italic border-l-2 border-red-200 pl-3">
                  {section.note}
                </p>
              )}
              {section.contact && (
                <div className="mt-3 bg-gray-50 rounded-xl p-4 text-sm text-gray-600 space-y-1.5">
                  <p><strong>Email:</strong>{" "}
                    <a href={`mailto:${section.contact.email}`} className="text-red-700 hover:underline">
                      {section.contact.email}
                    </a>
                  </p>
                  <p><strong>Phone:</strong>{" "}
                    <a href={`tel:${section.contact.phone.replace(/\s/g, "")}`} className="text-red-700 hover:underline">
                      {section.contact.phone}
                    </a>
                  </p>
                  <p><strong>Address:</strong> {section.contact.address}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom links */}
        <div className="mt-8 bg-[#0A1628] text-white rounded-2xl p-6 text-center">
          <p className="text-sm font-semibold mb-2">Related Policies</p>
          <p className="text-xs text-gray-400 mb-4">
            By using collegedelhi.com, you also agree to our Privacy Policy and acknowledge our Disclaimer of Liability.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <Link href="/privacy" className="text-red-400 hover:text-red-300 font-medium transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="text-red-400 hover:text-red-300 font-medium transition-colors">
              Disclaimer
            </Link>
            <Link href="/counselling" className="text-red-400 hover:text-red-300 font-medium transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

