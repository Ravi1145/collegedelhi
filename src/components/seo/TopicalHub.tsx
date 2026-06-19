import Link from "next/link"

interface HubLink {
  label: string
  href: string
  description?: string
}

interface TopicalHubProps {
  pillarTitle: string
  pillarKeyword: string
  spokeLinks: HubLink[]
  relatedPillarLinks?: HubLink[]
}

/**
 * Renders the pillar→spoke internal link cluster for a given topic.
 * Place at the bottom of every pillar page to pass link equity to spoke pages
 * and signal topical depth to Google.
 */
export default function TopicalHub({ pillarTitle, pillarKeyword, spokeLinks, relatedPillarLinks }: TopicalHubProps) {
  return (
    <section className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-10" aria-label={`More about ${pillarKeyword}`}>
      <h2 className="text-lg font-bold text-gray-900 mb-1">{pillarTitle}</h2>
      <p className="text-sm text-gray-500 mb-5">Explore all guides in this topic cluster</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {spokeLinks.map(({ label, href, description }) => (
          <Link
            key={href}
            href={href}
            className="block bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 hover:border-red-300 hover:shadow transition-all group"
          >
            <span className="text-sm font-semibold text-gray-800 group-hover:text-red-700 transition-colors block">
              {label}
            </span>
            {description && (
              <span className="text-xs text-gray-500 mt-0.5 block">{description}</span>
            )}
          </Link>
        ))}
      </div>

      {relatedPillarLinks && relatedPillarLinks.length > 0 && (
        <>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Related topics</p>
          <div className="flex flex-wrap gap-2">
            {relatedPillarLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600 hover:text-red-700 hover:border-red-300 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
