/**
 * Structured answer block optimised for AI Overview extraction and GEO.
 * Renders a clearly labelled "Quick Answer" section that LLMs and Google
 * can lift verbatim for featured snippets and AI overviews.
 */
interface GEOContentBlockProps {
  id?: string
  question: string
  answer: string
  bulletPoints?: string[]
  lastUpdated?: string
}

export default function GEOContentBlock({
  id = "quick-answer",
  question,
  answer,
  bulletPoints,
  lastUpdated,
}: GEOContentBlockProps) {
  return (
    <section
      id={id}
      className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8"
      aria-label="Quick Answer"
    >
      <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-2">Quick Answer</p>
      <h2 className="text-base font-bold text-gray-900 mb-3">{question}</h2>
      <p className="text-gray-700 text-sm leading-relaxed mb-3">{answer}</p>
      {bulletPoints && bulletPoints.length > 0 && (
        <ul className="space-y-1.5 mt-2">
          {bulletPoints.map((pt, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-green-500 font-bold mt-0.5 shrink-0"></span>
              {pt}
            </li>
          ))}
        </ul>
      )}
      {lastUpdated && (
        <p className="text-xs text-gray-400 mt-3">Last updated: {lastUpdated}</p>
      )}
    </section>
  )
}
