import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Disclaimer — CollegeDelhi",
  description: "Disclaimer for collegedelhi.com — understand the nature of our services, information accuracy, and limitations of liability as an education information",
  alternates: { canonical: "https://www.collegedelhi.com/disclaimer" },
  robots: { index: true, follow: true },
}

const sections = [
  {
    id: "nature",
    title: "1. Nature of Our Services",
    content: `collegedelhi.com is an education information and discovery platform that provides guidance services to students and educational seekers in Delhi. We collect, compile, and present information from various publicly available sources to help users make informed decisions about educational opportunities in Delhi, Delhi.`,
    note: "CollegeDelhi acts purely as an information intermediary. We are not affiliated with any educational institution unless explicitly stated.",
  },
  {
    id: "information-accuracy",
    title: "2. Information Sources & Accuracy",
    subsections: [
      {
        label: "Sources of Information",
        bullets: [
          "Official websites of educational institutions",
          "Government education portals (NIRF, NAAC, UGC, AICTE)",
          "Public databases and directories",
          "Published brochures, prospectuses, and college handbooks",
          "News articles, press releases, and media reports",
          "Social media, public forums, and user-submitted data",
        ],
      },
      {
        label: "Information Accuracy Disclaimer",
        bullets: [
          "Information is provided for general informational purposes only",
          "We do not guarantee the accuracy, completeness, or timeliness of any information on this platform",
          "Educational institutions may change their policies, fees, courses, cutoffs, or requirements without prior notice to us",
          "Users must verify all information directly with the respective educational institutions before making any decisions",
          "We are not responsible for any outdated, incorrect, or incomplete information displayed on the platform",
          "College fees, placement statistics, and cutoff data are indicative and may vary year to year",
        ],
      },
    ],
  },
  {
    id: "liability",
    title: "3. Limitation of Liability",
    content: `CollegeDelhi shall not be liable for any decisions — academic, financial, or career-related — made based on information provided through our platform. Users acknowledge that they use this information at their own risk and must independently verify all details with official sources.`,
    bulletsLabel: "We do NOT guarantee:",
    bullets: [
      "Admission to any educational program or institution",
      "Specific educational outcomes or career results",
      "Availability of courses, programs, or seats",
      "Accuracy of fees, tuition costs, or hostel charges",
      "Scholarship amounts or financial aid availability",
      "Placement packages, hiring rates, or recruiter information",
      "NIRF ranks, NAAC grades, or other ranking information as current",
    ],
  },
  {
    id: "user-responsibilities",
    title: "4. User Responsibilities",
    content: `By using CollegeDelhi, you accept responsibility for:`,
    bullets: [
      "Independently verifying all information with original, official sources",
      "Conducting your own research and due diligence before making any decisions",
      "Contacting educational institutions directly for official, up-to-date information",
      "Making informed decisions based on verified information from multiple sources",
      "Complying with admission requirements, procedures, and deadlines set by institutions",
      "Understanding that our service is advisory and informational in nature only",
    ],
  },
  {
    id: "third-party",
    title: "5. Third-Party Information",
    content: `Information on CollegeDelhi is collected from publicly available sources under fair use principles for informational and educational purposes. If any educational institution or content owner believes their information has been used inappropriately or inaccurately, please contact us at support@collegedelhi.com for immediate review and resolution.`,
    bullets: [
      "Accuracy or availability of third-party website content",
      "Privacy policies or data practices of linked external sites",
      "Terms of service or policies of external platforms",
      "Technical functionality or security of linked websites",
    ],
    bulletsLabel: "We are not responsible for external website content, including:",
  },
  {
    id: "reviews",
    title: "6. User-Submitted Reviews",
    content: `Reviews and ratings submitted by users on CollegeDelhi represent individual opinions and experiences. CollegeDelhi does not verify the accuracy of user-submitted reviews beyond basic moderation. We are not liable for any decisions made based on user reviews. Reviews are moderated for spam and abuse, but CollegeDelhi does not endorse any specific review's content as factual.`,
  },
  {
    id: "intellectual-property",
    title: "7. Intellectual Property",
    content: `Our compilation, presentation, and organisation of information — along with our website design, AI tools, comparison features, and other proprietary tools — are protected by applicable intellectual property laws. We respect the intellectual property rights of educational institutions and other content creators. College names, logos, and trademarks belong to their respective owners and are used for identification and informational purposes only.`,
  },
  {
    id: "intermediary",
    title: "8. Intermediary Role",
    content: `CollegeDelhi functions solely as an information intermediary and facilitator. We do not act as an agent, representative, or authorised partner of any educational institution unless explicitly mentioned. Our services include:`,
    bullets: [
      "Information aggregation and presentation from public sources",
      "General guidance and free educational counselling",
      "Connecting students with relevant educational opportunities",
      "Providing comparative analysis and tools for decision making",
      "Facilitating contact between students and institutions",
    ],
  },
  {
    id: "ai-tools",
    title: "9. AI-Powered Tools",
    content: `CollegeDelhi uses AI-powered features including college recommendations, predictors, and counselling tools. These AI outputs are indicative only and should not be relied upon as definitive academic or career advice. AI recommendations are based on historical data and patterns and may not accurately predict individual outcomes. Always consult with a qualified education counsellor for personalised guidance.`,
  },
  {
    id: "changes",
    title: "10. Changes & Updates",
    content: `We reserve the right to update information, modify services, change this disclaimer, or add or remove educational institutions from the platform without prior notice. Users are encouraged to review this disclaimer periodically for any changes. Continued use of the platform after changes constitutes acceptance of the updated disclaimer.`,
  },
  {
    id: "acknowledgment",
    title: "11. Acknowledgment",
    content: `By using collegedelhi.com, you acknowledge and agree that:`,
    bullets: [
      "You have read and understood this Disclaimer",
      "You agree to use our services at your own risk",
      "You will independently verify all information from official sources before making decisions",
      "You understand CollegeDelhi's role as an information intermediary only",
      "You will not hold CollegeDelhi liable for any decisions, outcomes, or losses based on information from this platform",
      "CollegeDelhi's liability, if any, is limited to the maximum extent permitted by applicable Indian law",
    ],
  },
]

export default function DisclaimerPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-[#0A1628] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">â€º</span>
            <span className="text-gray-200">Disclaimer</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Disclaimer</h1>
          <p className="text-gray-400 text-sm">
            Last updated: June 2026 &nbsp;·&nbsp; Please read carefully before using our services.
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
                className="text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 px-2.5 py-1 rounded-full transition-colors">
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Intro banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
          <p className="text-sm text-gray-700 leading-relaxed">
            Please read this disclaimer carefully before using our services. By accessing collegedelhi.com and using our services,
            you acknowledge and agree to the terms set forth in this disclaimer.
            <strong className="block mt-2">
              CollegeDelhi is an information platform, not an authorised agent or representative of any educational institution.
            </strong>
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-5">
          {sections.map(section => (
            <div key={section.id} id={section.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 scroll-mt-20">
              <h2 className="text-base font-bold text-[#0A1628] mb-3 pb-2 border-b border-gray-100">
                <span className="text-amber-500 mr-2">{section.title.split(".")[0]}.</span>
                {section.title.split(". ").slice(1).join(". ")}
              </h2>

              {section.content && (
                <p className="text-sm text-gray-600 leading-relaxed">{section.content}</p>
              )}

              {section.subsections?.map((sub, si) => (
                <div key={si} className="mt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">{sub.label}</p>
                  <ul className="space-y-1.5">
                    {sub.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-amber-500 mt-0.5 shrink-0">â€º</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {section.bulletsLabel && (
                <p className="text-sm font-semibold text-gray-700 mt-3 mb-2">{section.bulletsLabel}</p>
              )}
              {section.bullets && (
                <ul className={`space-y-1.5 ${section.content ? "mt-3" : ""}`}>
                  {section.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-amber-500 mt-0.5 shrink-0">â€º</span> {b}
                    </li>
                  ))}
                </ul>
              )}
              {section.note && (
                <p className="mt-3 text-xs text-gray-500 italic border-l-2 border-amber-200 pl-3">
                  {section.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-8 bg-[#0A1628] text-white rounded-2xl p-6 text-center">
          <p className="text-sm font-semibold mb-2">Related Policies</p>
          <p className="text-xs text-gray-400 mb-4">
            For complete information on how we operate, please also review our Terms &amp; Conditions and Privacy Policy.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <Link href="/terms" className="text-red-400 hover:text-red-300 font-medium transition-colors">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="text-red-400 hover:text-red-300 font-medium transition-colors">Privacy Policy</Link>
            <Link href="/counselling" className="text-red-400 hover:text-red-300 font-medium transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

