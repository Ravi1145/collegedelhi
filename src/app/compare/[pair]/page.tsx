import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo"
import { allDelhiNCRColleges, CollegeEntry } from "@/data/delhiCollegesData"

export const revalidate = 300

// ── Top comparison pairs for static pre-generation ──────────────────────────
const TOP_PAIRS = [
  ["dtu-delhi-technological-university","nsut-delhi"],
  ["iit-delhi","dtu-delhi-technological-university"],
  ["fms-delhi-faculty-management-studies","mdi-gurgaon-management-development-institute"],
  ["iiit-delhi","nsut-delhi"],
  ["aiims-delhi","maulana-azad-medical-college-delhi"],
  ["miranda-house-du","lady-shri-ram-college-du"],
  ["srcc-du","hindu-college-du"],
  ["imt-ghaziabad","bimtech-birla-institute-management-technology-noida"],
  ["fore-school-management-delhi","lbsim-lal-bahadur-shastri-institute-management"],
  ["amity-university-noida-engineering","bennett-university-delhi-engineering"],
  ["igdtuw-delhi","nsut-delhi"],
  ["dms-iit-delhi-management-studies","fms-delhi-faculty-management-studies"],
  ["jmi-delhi","dtu-delhi-technological-university"],
]

export async function generateStaticParams() {
  return TOP_PAIRS.map(([a, b]) => ({ pair: `${a}-vs-${b}` }))
}

function findCollege(slug: string): CollegeEntry | undefined {
  return allDelhiNCRColleges.find(c => c.slug === slug)
}

function parsePair(pair: string): [string, string] | null {
  // Handle "slug1-vs-slug2" — the slug itself may contain hyphens so we
  // match the known "-vs-" separator that sits between two known slugs.
  const vsSplit = pair.indexOf("-vs-")
  if (vsSplit === -1) return null
  const a = pair.slice(0, vsSplit)
  const b = pair.slice(vsSplit + 4)
  return [a, b]
}

function feeNum(fees: string): number {
  const m = fees.match(/[\d.]+/)
  return m ? Math.round(parseFloat(m[0]) * 100000) : 0
}
function placementNum(p: string): number {
  const m = p.match(/₹([\d.]+)\s*LPA/)
  return m ? Math.round(parseFloat(m[1]) * 100000) : 0
}
function verdict(a: CollegeEntry, b: CollegeEntry): string {
  const aScore = (a.nirf ? 1000 / a.nirf : 100) + placementNum(a.avgPlacement) / 100000
  const bScore = (b.nirf ? 1000 / b.nirf : 100) + placementNum(b.avgPlacement) / 100000
  const winner = aScore >= bScore ? a : b
  const loser  = aScore >= bScore ? b : a
  return `${winner.name.split("—")[0].trim()} has a stronger overall profile ${winner.nirf ? `(NIRF #${winner.nirf})` : ""} with ${winner.avgPlacement.split("|")[0].trim()} placement average, making it the safer choice for most students. ${loser.name.split("—")[0].trim()} is worth considering if you prefer ${loser.city !== winner.city ? `the ${loser.city} location or` : ""} lower fees — at ${loser.fees} it is more budget-friendly.`
}

type Props = { params: Promise<{ pair: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pair } = await params
  const slugs = parsePair(pair)
  if (!slugs) return {}
  const [aSlug, bSlug] = slugs
  const a = findCollege(aSlug)
  const b = findCollege(bSlug)
  if (!a || !b) return {}
  const aShort = a.name.split("—")[0].trim()
  const bShort = b.name.split("—")[0].trim()
  return {
    title: `${aShort} vs ${bShort} 2026 — Fees, Placements, Cutoff Compared`,
    description: `${aShort} vs ${bShort} 2026: NAAC grade, NIRF rank, fees, placement data, cutoff and admission process compared side-by-side. Which is better for you?`,
    alternates: { canonical: `/compare/${pair}` },
    keywords: [
      `${aShort} vs ${bShort}`,
      `${aShort} vs ${bShort} which is better`,
      `${aShort} vs ${bShort} placements`,
      `${aShort} vs ${bShort} fees`,
      `${aShort} vs ${bShort} cutoff 2026`,
    ],
  }
}

const COMPARE_ROWS: { label: string; key: keyof CollegeEntry | "placement" }[] = [
  { label: "City", key: "city" },
  { label: "Type", key: "type" },
  { label: "NAAC Grade", key: "naac" },
  { label: "NIRF Rank 2024", key: "nirf" },
  { label: "Established", key: "established" },
  { label: "Affiliation", key: "affiliation" },
  { label: "Courses Offered", key: "streams" },
  { label: "Annual Fees", key: "fees" },
  { label: "Avg Placement", key: "placement" },
]

function cellVal(col: CollegeEntry, row: typeof COMPARE_ROWS[number]): string {
  if (row.key === "placement") return col.avgPlacement
  const v = col[row.key as keyof CollegeEntry]
  if (Array.isArray(v)) return (v as string[]).join(", ")
  if (v === undefined || v === null) return "N/A"
  return String(v)
}

export default async function ComparePage({ params }: Props) {
  const { pair } = await params
  const slugs = parsePair(pair)
  if (!slugs) notFound()
  const [aSlug, bSlug] = slugs
  const colA = findCollege(aSlug)
  const colB = findCollege(bSlug)
  if (!colA || !colB) notFound()

  const aShort = colA.name.split("—")[0].trim()
  const bShort = colB.name.split("—")[0].trim()

  const faqs = [
    { question: `Which is better: ${aShort} or ${bShort}?`, answer: verdict(colA, colB) },
    { question: `What are the fees at ${aShort} vs ${bShort}?`, answer: `${aShort} charges ${colA.fees} and ${bShort} charges ${colB.fees} per year. Check each college's official site for the latest fee structure.` },
    { question: `Which has better placements — ${aShort} or ${bShort}?`, answer: `${aShort} reports ${colA.avgPlacement}. ${bShort} reports ${colB.avgPlacement}. Both figures are from official placement brochures.` },
    { question: `What is the NIRF rank of ${aShort} and ${bShort}?`, answer: `${aShort} is ${colA.nirf ? `ranked #${colA.nirf} in NIRF 2024` : "not NIRF ranked yet"}. ${bShort} is ${colB.nirf ? `ranked #${colB.nirf} in NIRF 2024` : "not NIRF ranked yet"}.` },
    { question: `Which college has better campus life?`, answer: `Both ${aShort} and ${bShort} are located in ${colA.city === colB.city ? colA.city : `${colA.city} and ${colB.city} respectively`}. Visit each campus before deciding — location matters for internships and placements.` },
  ]

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Compare Colleges", url: "/compare" },
    { name: `${aShort} vs ${bShort}`, url: `/compare/${pair}` },
  ])
  const faqSchema = generateFAQSchema(faqs)

  // Related comparisons for interlinking
  const related = allDelhiNCRColleges
    .filter(c => c.slug !== aSlug && c.slug !== bSlug && (c.streams.some(s => colA.streams.includes(s)) || c.city === colA.city))
    .slice(0, 5)
    .map(c => ({
      label: `${aShort} vs ${c.name.split("—")[0].trim()}`,
      href: `/compare/${aSlug}-vs-${c.slug}`,
    }))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] text-white py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="text-sm text-white/60 mb-4 flex flex-wrap gap-1 items-center">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <Link href="/compare" className="hover:text-white">Compare</Link>
              <span>›</span>
              <span className="text-white/90">{aShort} vs {bShort}</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
              {aShort} vs {bShort} 2026
            </h1>
            <p className="text-white/80 text-lg max-w-3xl">
              Detailed comparison of fees, NIRF rank, placements, cutoff, and campus — everything you need to choose between the two.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[["Fees", "#fees"], ["Placements", "#placements"], ["Courses", "#courses"], ["Verdict", "#verdict"]].map(([label, href]) => (
                <a key={href} href={href} className="text-xs bg-white/10 text-blue-200 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors">
                  {label} →
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">

          {/* Main comparison table */}
          <section id="comparison">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              {aShort} vs {bShort} — Quick Comparison
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-[#0A1628] text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold w-1/3">Parameter</th>
                    <th className="text-left px-4 py-3 font-semibold w-1/3">{aShort}</th>
                    <th className="text-left px-4 py-3 font-semibold w-1/3">{bShort}</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-semibold text-gray-700">{row.label}</td>
                      <td className="px-4 py-3 text-gray-800">{cellVal(colA, row)}</td>
                      <td className="px-4 py-3 text-gray-800">{cellVal(colB, row)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Fees section */}
          <section id="fees">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fees Comparison</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[colA, colB].map(col => (
                <div key={col.slug} className="border border-gray-200 rounded-2xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{col.name.split("—")[0].trim()}</h3>
                  <p className="text-3xl font-extrabold text-red-600 mb-1">{col.fees}</p>
                  <p className="text-sm text-gray-500">{col.type} · {col.city}</p>
                  <Link href={`/colleges/${col.slug}`} className="mt-3 inline-block text-sm text-red-700 font-semibold hover:underline">
                    Full fee structure →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Placements section */}
          <section id="placements">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Placement Comparison</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[colA, colB].map(col => (
                <div key={col.slug} className="bg-green-50 border border-green-100 rounded-2xl p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{col.name.split("—")[0].trim()}</h3>
                  <p className="text-green-700 font-bold">{col.avgPlacement}</p>
                  <p className="text-sm text-gray-500 mt-1">{col.highlight}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Verdict */}
          <section id="verdict" className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Expert Verdict</h2>
            <p className="text-gray-700 leading-relaxed">{verdict(colA, colB)}</p>
            <p className="text-sm text-gray-500 mt-3">Data sourced from NIRF 2024, NAAC public database, and official placement brochures.</p>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex justify-between items-center px-5 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 list-none">
                    {faq.question}
                    <span className="text-gray-400 group-open:rotate-90 transition-transform">›</span>
                  </summary>
                  <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </section>

          {/* Related comparisons */}
          {related.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Related Comparisons</h2>
              <div className="flex flex-wrap gap-2">
                {related.map(r => (
                  <Link key={r.href} href={r.href}
                    className="text-sm bg-red-50 text-red-700 border border-red-100 px-3 py-1.5 rounded-full hover:bg-red-100 transition-colors">
                    {r.label} →
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white text-center">
            <h2 className="text-2xl font-extrabold mb-2">Still Deciding?</h2>
            <p className="text-white/85 mb-5">Get a personalised recommendation from our AI counsellor — free, in 2 minutes.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/ai-finder" className="bg-white text-red-700 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors">
                AI College Finder
              </Link>
              <Link href="/counselling" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
                Talk to Advisor
              </Link>
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
