import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy — CollegeDelhi",
  description: "CollegeDelhi Privacy Policy — how we collect, use, and protect your personal information. Read our commitment to your data privacy.",
  alternates: { canonical: "https://collegedelhi.com/privacy" },
  robots: { index: true, follow: true },
}

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: `When you visit or use collegedelhi.com, we may collect the following types of information:`,
    subsections: [
      {
        label: "a) Personal Information",
        bullets: [
          "Full Name",
          "Email Address",
          "Mobile / WhatsApp Number",
          "Location / City",
          "Educational Preferences (Courses, Colleges, Streams, etc.)",
          "Passout year, current course details",
          "Any additional information you provide voluntarily through forms, chat, or review submissions",
        ],
      },
      {
        label: "b) Non-Personal / Usage Data",
        bullets: [
          "IP Address and approximate location",
          "Browser type and version",
          "Device type, operating system",
          "Pages visited, search queries made on the platform",
          "Cookies and usage analytics data (to improve user experience)",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: `We may use the information collected for the following purposes:`,
    bullets: [
      "To provide personalised educational counselling and college guidance",
      "To connect you with partnered colleges and universities in Delhi for admission assistance",
      "To send promotional content, updates, and educational resources (via SMS, Email, WhatsApp, or calls)",
      "To respond to your queries, review submissions, or requests",
      "To improve our website, features, and overall user experience",
      "For internal record-keeping, analytics, and legal compliance",
      "To verify and moderate user-submitted reviews and ratings",
    ],
  },
  {
    id: "sharing",
    title: "3. Sharing of Information",
    content: `We may share your personal information in the following circumstances:`,
    bullets: [
      "With partnered colleges and universities in Delhi for admission and counselling purposes",
      "With trusted third-party service providers who help us operate the Website (under strict confidentiality agreements)",
      "When required by law, court order, or legal process",
      "To protect the rights, property, or safety of CollegeDelhi, our users, or the public",
    ],
    note: "We do NOT sell your personal information to third parties for their own marketing purposes.",
  },
  {
    id: "communication-consent",
    title: "4. Communication Consent",
    content: `By filling out any enquiry form, counselling booking, or lead capture form on CollegeDelhi, you expressly authorise CollegeDelhi and its partners to contact you with updates, notifications, and guidance via Email, SMS, WhatsApp, or phone calls. This consent overrides your DND/NDNC registration. You may opt out at any time by contacting us at support@collegedelhi.com.`,
  },
  {
    id: "cookies",
    title: "5. Cookies & Tracking Technologies",
    content: `We use cookies and similar tracking technologies to:`,
    bullets: [
      "Maintain your session and remember your preferences",
      "Analyse site traffic and understand user behaviour anonymously",
      "Personalise content and college recommendations",
      "Display relevant advertisements (Google Ads, Meta Ads)",
    ],
    note: "You can manage or disable cookies through your browser settings. Disabling cookies may affect some features of the Website.",
  },
  {
    id: "data-security",
    title: "6. Data Security",
    content: `We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. Our servers are protected with industry-standard encryption and access controls. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security. We encourage you to use strong passwords and keep your login credentials safe.`,
  },
  {
    id: "rights",
    title: "7. Your Rights",
    content: `You have the following rights regarding your personal data:`,
    bullets: [
      "Access: Request a copy of the personal information we hold about you",
      "Correction: Request correction of inaccurate or incomplete data",
      "Deletion: Request deletion of your personal data (subject to legal requirements)",
      "Opt-out: Unsubscribe from promotional communications at any time by emailing support@collegedelhi.com",
      "Portability: Request a portable copy of your data in a structured format",
    ],
    note: "To exercise any of these rights, please contact us at support@collegedelhi.com with your request.",
  },
  {
    id: "reviews-data",
    title: "8. Reviews & User-Generated Content",
    content: `When you submit a review or rating for a college on CollegeDelhi, the review content (name, course, year, rating, and review text) may be displayed publicly on the respective college page after moderation and approval. Your email address is never displayed publicly. By submitting a review, you grant CollegeDelhi a non-exclusive licence to display that content on the platform.`,
  },
  {
    id: "third-party",
    title: "9. Third-Party Links",
    content: `Our Website may contain links to external college websites, government portals, and other educational resources. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any external websites you visit.`,
  },
  {
    id: "children",
    title: "10. Children's Privacy",
    content: `CollegeDelhi is primarily intended for students aged 16 and above. We do not knowingly collect personal information from children under 13 years of age. If you believe a child has provided personal information to us, please contact us immediately at support@collegedelhi.com and we will delete such data promptly.`,
  },
  {
    id: "changes",
    title: "11. Changes to This Privacy Policy",
    content: `We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Any changes will be posted on this page with the revised date. Your continued use of collegedelhi.com after updates signifies your acceptance of the revised policy. We recommend reviewing this page periodically.`,
  },
  {
    id: "contact",
    title: "12. Contact Us",
    content: `For any concerns, questions, or data-related requests regarding this Privacy Policy, please contact:`,
    contact: {
      email: "support@collegedelhi.com",
      phone: "+91 77538 31118",
      address: "Connaught Place, New Delhi, Delhi 110001",
    },
  },
]

export default function PrivacyPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-[#0A1628] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">â€º</span>
            <span className="text-gray-200">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">
            Last updated: June 2026 &nbsp;·&nbsp; We value and respect your privacy.
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
                className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 px-2.5 py-1 rounded-full transition-colors">
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Intro */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8">
          <p className="text-sm text-gray-700 leading-relaxed">
            At <strong>collegedelhi.com</strong>, we value and respect your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website and use our services. By using our website, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-5">
          {sections.map(section => (
            <div key={section.id} id={section.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 scroll-mt-20">
              <h2 className="text-base font-bold text-[#0A1628] mb-3 pb-2 border-b border-gray-100">
                <span className="text-blue-500 mr-2">{section.title.split(".")[0]}.</span>
                {section.title.split(". ").slice(1).join(". ")}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">{section.content}</p>

              {section.subsections?.map((sub, si) => (
                <div key={si} className="mt-3">
                  <p className="text-sm font-semibold text-gray-700 mb-2">{sub.label}</p>
                  <ul className="space-y-1.5">
                    {sub.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-blue-400 mt-0.5 shrink-0">â€º</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {section.bullets && (
                <ul className="mt-3 space-y-1.5">
                  {section.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-blue-400 mt-0.5 shrink-0">â€º</span> {b}
                    </li>
                  ))}
                </ul>
              )}
              {section.note && (
                <p className="mt-3 text-xs text-gray-500 italic border-l-2 border-blue-200 pl-3">
                  {section.note}
                </p>
              )}
              {section.contact && (
                <div className="mt-3 bg-gray-50 rounded-xl p-4 text-sm text-gray-600 space-y-1.5">
                  <p><strong>Email:</strong>{" "}
                    <a href={`mailto:${section.contact.email}`} className="text-blue-600 hover:underline">{section.contact.email}</a>
                  </p>
                  <p><strong>Phone:</strong>{" "}
                    <a href={`tel:${section.contact.phone.replace(/\s/g,"")}`} className="text-blue-600 hover:underline">{section.contact.phone}</a>
                  </p>
                  <p><strong>Address:</strong> {section.contact.address}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-8 bg-[#0A1628] text-white rounded-2xl p-6 text-center">
          <p className="text-sm font-semibold mb-2">Related Policies</p>
          <p className="text-xs text-gray-400 mb-4">
            By using collegedelhi.com, you also agree to our Terms &amp; Conditions and acknowledge our Disclaimer.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <Link href="/terms" className="text-red-400 hover:text-red-300 font-medium transition-colors">Terms &amp; Conditions</Link>
            <Link href="/disclaimer" className="text-red-400 hover:text-red-300 font-medium transition-colors">Disclaimer</Link>
            <Link href="/counselling" className="text-red-400 hover:text-red-300 font-medium transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

