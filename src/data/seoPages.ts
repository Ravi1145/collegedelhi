export interface SEOPage {
  slug: string
  title: string
  h1: string
  description: string
  keywords: string[]
  category: 'stream' | 'location' | 'fee' | 'exam' | 'specialty' | 'type'
  filterKey?: string
  filterValue?: string | number | boolean
}

export const seoPages: SEOPage[] = []

export function getSEOPageBySlug(slug: string): SEOPage | undefined {
  return seoPages.find((p) => p.slug === slug)
}
