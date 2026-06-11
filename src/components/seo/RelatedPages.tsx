import Link from "next/link"

interface RelatedPage {
  label: string
  href: string
  description?: string
}

interface Props {
  heading?: string
  pages: RelatedPage[]
  columns?: 2 | 3 | 4
}

export default function RelatedPages({ heading = "Related Guides", pages, columns = 3 }: Props) {
  if (!pages.length) return null
  const gridClass = columns === 4
    ? "grid grid-cols-2 sm:grid-cols-4 gap-2"
    : columns === 2
    ? "grid grid-cols-1 sm:grid-cols-2 gap-3"
    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"

  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold text-gray-900 mb-4">{heading}</h2>
      <nav aria-label={heading} className={gridClass}>
        {pages.map(({ label, href, description }) => (
          <Link
            key={href}
            href={href}
            className="flex flex-col gap-0.5 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 hover:border-red-200 hover:shadow transition-all group"
          >
            <span className="text-sm font-semibold text-gray-800 group-hover:text-red-700 transition-colors">
              {label}
            </span>
            {description && (
              <span className="text-xs text-gray-500 leading-snug">{description}</span>
            )}
          </Link>
        ))}
      </nav>
    </section>
  )
}
