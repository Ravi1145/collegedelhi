import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

const API = "https://college-delhi-backend.vercel.app/api"

async function fetchApprovedBlogs() {
  try {
    const res = await fetch(`${API}/blogs?status=approved&limit=3`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return []
    const data = await res.json()
    return data.success ? (data.data || []) : []
  } catch {
    return []
  }
}

export default async function BlogPreview() {
  const blogs = await fetchApprovedBlogs()

  if (blogs.length === 0) return null

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              College Guides &amp; Insights
            </h2>
            <p className="text-gray-500 mt-1">Expert advice on admissions, fees, placements &amp; career planning</p>
          </div>
          <Link href="/blog" className="hidden sm:flex items-center gap-2 text-red-700 font-semibold hover:text-red-800">
            All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog: any, i: number) => (
            <Link key={blog._id} href={`/blog/${blog.slug}`} className="group">
              <article className="bg-white rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                {/* Colored header */}
                <div className={`h-3 ${
                  i === 0 ? "bg-gradient-to-r from-red-400 to-red-700" :
                  i === 1 ? "bg-gradient-to-r from-blue-400 to-blue-600" :
                  "bg-gradient-to-r from-green-400 to-green-600"
                }`} />
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium bg-red-50 text-red-800 px-2.5 py-1 rounded-full">
                      {blog.category || "General"}
                    </span>
                    {blog.read_time && (
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="w-3 h-3" />
                        {blog.read_time}
                      </div>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1 line-clamp-3">
                    {blog.excerpt || blog.description || ""}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-xs text-red-800 font-bold">
                          {(blog.author || "C")[0].toUpperCase()}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">{blog.author || "CollegeDelhi"}</span>
                    </div>
                    <span className="text-xs text-red-700 font-semibold group-hover:text-red-800">
                      Read more â†’
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-5 text-center sm:hidden">
          <Link href="/blog" className="inline-flex items-center gap-2 text-red-700 font-semibold">
            All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

