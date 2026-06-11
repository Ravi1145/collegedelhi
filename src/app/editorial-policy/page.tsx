import type { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "Editorial Policy | CollegeDelhi",
  description: "CollegeDelhi's editorial standards, data verification process, update schedule, and independence policy for Delhi college rankings, fees, and placement data.",
  path: "/editorial-policy",
})

export const revalidate = 86400

export default function EditorialPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span>Editorial Policy</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Editorial Policy</h1>
          <p className="text-blue-100 text-lg">
            How CollegeDelhi researches, verifies, and publishes college data for Delhi NCR.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Editorial Independence</h2>
          <p className="text-gray-700 leading-relaxed">
            CollegeDelhi does not accept payment to rank colleges higher, feature colleges in listings, or alter editorial content in any way. Every ranking, recommendation, and piece of data on this platform reflects our independent research and editorial judgment.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Colleges may submit corrections to factual errors (e.g., updated fee structures, NAAC grades) via our editorial team at <a href="mailto:support@collegedelhi.com" className="text-blue-600 hover:underline">support@collegedelhi.com</a>. Submitted corrections are verified against official sources before publication.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Sources</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All data published on CollegeDelhi is sourced from authoritative primary sources:
          </p>
          <div className="space-y-3">
            {[
              {
                title: "NIRF Rankings",
                source: "Ministry of Education, Government of India — nirfindia.org",
                detail: "Updated each year after the official NIRF release (typically August). We cross-check ranks across the Overall, University, Engineering, Management, Medical, and Law categories.",
              },
              {
                title: "NAAC Accreditation Grades",
                source: "National Assessment and Accreditation Council (NAAC) — naac.gov.in",
                detail: "Grades reflect the most recent accreditation cycle. We note the accreditation year alongside each grade, since NAAC accreditations are valid for 5 years.",
              },
              {
                title: "Fees & Admission Data",
                source: "Official college admission brochures, college websites, and state counselling portals",
                detail: "Fee structures are updated at the start of each academic year from official fee notices. For JAC Delhi-affiliated colleges, we use the official JAC Delhi seat matrix and fee data.",
              },
              {
                title: "Entrance Exam Cutoffs",
                source: "JAC Delhi, JOSAA, MCC, and official college cutoff documents",
                detail: "Cutoffs represent the closing ranks/marks from the previous year's final counselling rounds. We display multiple categories (General, OBC-NCL, SC, ST) where available.",
              },
              {
                title: "Placement Data",
                source: "Official college placement reports and AISHE (All India Survey on Higher Education) data",
                detail: "Average placement figures represent the median CTC offered in the final placement season. We note when data comes from a college's self-reported placement report vs. independently verified sources.",
              },
            ].map(({ title, source, detail }) => (
              <div key={title} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-xs text-blue-600 font-medium mb-2">{source}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Update Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Data Type</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Update Frequency</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Trigger</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["NIRF Rankings", "Annually", "After official NIRF release (Aug)"],
                  ["NAAC Grades", "As released", "After NAAC publishes new accreditation"],
                  ["Fees", "Annually", "After college fee notices for new academic year"],
                  ["JEE/NEET Cutoffs", "Annually", "After JOSAA/JAC Delhi/MCC final rounds"],
                  ["CAT/MBA Cutoffs", "Annually", "After final GD-PI selection lists"],
                  ["Placement Data", "Annually", "After placement reports published (May–July)"],
                  ["College Profiles", "Continuous", "Upon receiving verified updates"],
                ].map(([type, freq, trigger], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 text-gray-700">{type}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{freq}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{trigger}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Correction Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            If you believe any data on CollegeDelhi is incorrect, outdated, or misleading, please contact our editorial team at <a href="mailto:support@collegedelhi.com" className="text-blue-600 hover:underline">support@collegedelhi.com</a> with the page URL, the specific claim in question, and supporting evidence (official document link or screenshot).
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            We aim to review correction requests within 5 business days. Material corrections are published with a note indicating the correction date and nature of the change.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Advertising & Commercial Relationships</h2>
          <p className="text-gray-700 leading-relaxed">
            CollegeDelhi may display advertisements and may have affiliate or lead-generation arrangements with educational institutions. These commercial relationships do not influence editorial rankings, content, or recommendations.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Sponsored content, when published, is clearly labeled as "Sponsored" or "Advertisement" and is distinct from editorial content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Editorial Team</h2>
          <p className="text-gray-700 leading-relaxed">
            Content on CollegeDelhi is researched and written by our editorial team with direct experience of Delhi NCR higher education. See our <Link href="/about" className="text-blue-600 hover:underline">About page</Link> for full team credentials and backgrounds.
          </p>
        </section>

        <div className="border-t border-gray-200 pt-6 text-sm text-gray-500">
          <p>Last updated: June 2026 · Questions? Email <a href="mailto:support@collegedelhi.com" className="text-blue-600 hover:underline">support@collegedelhi.com</a></p>
        </div>

      </article>
    </main>
  )
}
