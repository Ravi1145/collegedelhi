import Link from "next/link"

interface PageLink {
  label: string
  href: string
  tag?: string
}

interface InPageLinksProps {
  heading: string
  links: PageLink[]
  columns?: 2 | 3 | 4
}

/**
 * Contextual in-page link block — renders a compact grid of related page links
 * to distribute crawl budget and signal topical relevance to Google.
 * Use mid-page or at the bottom of section content.
 */
export default function InPageLinks({ heading, links, columns = 3 }: InPageLinksProps) {
  const colClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  }[columns]

  return (
    <div className="my-8 p-5 bg-gray-50 rounded-2xl border border-gray-100">
      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">{heading}</p>
      <div className={`grid ${colClass} gap-2`}>
        {links.map(({ label, href, tag }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center justify-between gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 hover:text-red-700 hover:border-red-200 hover:shadow-sm transition-all group"
          >
            <span className="font-medium group-hover:underline underline-offset-2 leading-tight">{label}</span>
            {tag && (
              <span className="shrink-0 text-[10px] font-bold bg-red-50 text-red-600 rounded-full px-2 py-0.5">{tag}</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
