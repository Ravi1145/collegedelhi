import { MetadataRoute } from "next"
import { getAllColleges, getAllBlogs, getAllExams, getAllCourses } from "@/lib/db"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://collegedelhi.com"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                               lastModified: new Date(), changeFrequency: "daily",   priority: 1.0 },
    { url: `${BASE_URL}/colleges`,                 lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${BASE_URL}/blog`,                     lastModified: new Date(), changeFrequency: "daily",   priority: 0.8 },
    { url: `${BASE_URL}/exams`,                    lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/courses`,                  lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/ai-finder`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/compare`,                  lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE_URL}/counselling`,              lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/predictor`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/roi-calculator`,           lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/scholarships`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/news`,                     lastModified: new Date(), changeFrequency: "daily",   priority: 0.85 },
    { url: `${BASE_URL}/qa`,                       lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/cutoffs`,                  lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/nirf-insights`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/privacy`,                  lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE_URL}/terms`,                    lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ]

  // College detail pages
  let collegeSlugs: string[] = []
  try {
    const { colleges } = await getAllColleges({ status: 'published', limit: 500 })
    collegeSlugs = colleges.map(c => c.slug)
  } catch { /* fall through */ }
  const collegePages: MetadataRoute.Sitemap = collegeSlugs.map(slug => ({
    url: `${BASE_URL}/colleges/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  // Blog pages
  let blogSlugs: string[] = []
  try {
    const { blogs } = await getAllBlogs({ limit: 500 })
    blogSlugs = blogs.map(b => b.slug)
  } catch { /* fall through */ }
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map(slug => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Exam detail pages
  let examSlugs: string[] = []
  try {
    const { exams } = await getAllExams({ limit: 100 })
    examSlugs = exams.map(e => e.slug)
  } catch { /* fall through */ }
  const examPages: MetadataRoute.Sitemap = examSlugs.map(slug => ({
    url: `${BASE_URL}/exams/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Course detail pages
  let courseSlugs: string[] = []
  try {
    const { courses } = await getAllCourses({ limit: 200 })
    courseSlugs = courses.map(c => c.slug)
  } catch { /* fall through */ }
  const coursePages: MetadataRoute.Sitemap = courseSlugs.map(slug => ({
    url: `${BASE_URL}/courses/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }))

  // Delhi SEO landing pages
  const seoPages: MetadataRoute.Sitemap = [
    // Stream guides
    { url: `${BASE_URL}/engineering-colleges-delhi`,                  lastModified: new Date(), changeFrequency: "weekly",  priority: 0.95 },
    { url: `${BASE_URL}/mba-colleges-delhi`,                          lastModified: new Date(), changeFrequency: "weekly",  priority: 0.95 },
    { url: `${BASE_URL}/medical-colleges-delhi`,                      lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/law-colleges-delhi`,                          lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/design-colleges-delhi`,                       lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/arts-colleges-delhi`,                         lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/pharmacy-colleges-delhi`,                     lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/bca-colleges-delhi`,                          lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/bba-colleges-delhi`,                          lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/bsc-it-colleges-delhi`,                       lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/architecture-colleges-delhi`,                 lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/government-colleges-delhi`,                   lastModified: new Date(), changeFrequency: "monthly", priority: 0.93 },
    { url: `${BASE_URL}/science-colleges-delhi`,                      lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/commerce-colleges-delhi`,                     lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    // Ranking pages
    { url: `${BASE_URL}/top-10-engineering-colleges-in-delhi`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/top-10-mba-colleges-in-delhi`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/top-10-medical-colleges-in-delhi`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/naac-a-plus-colleges-delhi`,                  lastModified: new Date(), changeFrequency: "monthly", priority: 0.90 },
    { url: `${BASE_URL}/top-engineering-colleges-delhi`,              lastModified: new Date(), changeFrequency: "monthly", priority: 0.90 },
    // Placement guides
    { url: `${BASE_URL}/engineering-colleges-delhi-placement`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/mba-colleges-delhi-placement`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/top-placement-colleges-delhi`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    // Fees
    { url: `${BASE_URL}/low-fees-engineering-colleges-delhi`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/low-fees-mba-colleges-delhi`,                 lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/low-fee-colleges-delhi`,                      lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/colleges-delhi-fees`,                         lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    // Hostel
    { url: `${BASE_URL}/colleges-in-delhi-with-hostel`,               lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    // Admission guides
    { url: `${BASE_URL}/engineering-admission-delhi-without-jee`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/mba-admission-delhi-without-cat`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/direct-admission-engineering-colleges-delhi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.82 },
    { url: `${BASE_URL}/direct-admission-mba-colleges-delhi`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.82 },
    // Engineering deep-dives
    { url: `${BASE_URL}/btech-colleges-delhi`,                        lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/computer-engineering-colleges-delhi`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/mechanical-engineering-colleges-delhi`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/private-engineering-colleges-delhi`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    // MBA deep-dives
    { url: `${BASE_URL}/best-mba-colleges-delhi`,                     lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/pgdm-colleges-delhi`,                         lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/private-mba-colleges-delhi`,                  lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/cat-colleges-delhi`,                          lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    // Medical
    { url: `${BASE_URL}/mbbs-colleges-delhi`,                         lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/neet-colleges-delhi`,                         lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    // Entrance exam clusters
    { url: `${BASE_URL}/jee-colleges-delhi`,                          lastModified: new Date(), changeFrequency: "monthly", priority: 0.90 },
    // Area-specific — existing
    { url: `${BASE_URL}/colleges-south-delhi`,                        lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/colleges-north-delhi`,                        lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/colleges-east-delhi`,                         lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    // Area-specific — new locality pages (zero competition)
    { url: `${BASE_URL}/colleges-dwarka-delhi`,                       lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/colleges-rohini-delhi`,                       lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    // Comparison pages (high-value zero-competition)
    { url: `${BASE_URL}/dtu-vs-nsut`,                                 lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/srcc-vs-hindu-college`,                       lastModified: new Date(), changeFrequency: "monthly", priority: 0.90 },
    { url: `${BASE_URL}/fms-delhi-vs-mdi-gurgaon`,                   lastModified: new Date(), changeFrequency: "monthly", priority: 0.90 },
    // Admission calendar — bookmark/link magnet
    { url: `${BASE_URL}/delhi-college-admission-calendar-2026`,       lastModified: new Date(), changeFrequency: "weekly",  priority: 0.92 },
    // Tools
    { url: `${BASE_URL}/delhi-college-fees-calculator`,               lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/delhi-college-placement-comparator`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/delhi-colleges-comparison-engineering-mba`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/delhi-admission-deadline-tracker-2026`,       lastModified: new Date(), changeFrequency: "weekly",  priority: 0.88 },
    // Scholarships
    { url: `${BASE_URL}/engineering-colleges-delhi-scholarship`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/mba-colleges-delhi-scholarship`,              lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  ]

  // NEW: NCR location pages
  const ncrPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/engineering-colleges-noida`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/mba-colleges-noida`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.90 },
    { url: `${BASE_URL}/bca-colleges-noida`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/bba-colleges-noida`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/colleges-greater-noida`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.90 },
    { url: `${BASE_URL}/colleges-janakpuri-delhi`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/colleges-pitampura-delhi`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/colleges-vasant-kunj-delhi`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    // NEW: Comparison pages
    { url: `${BASE_URL}/dtu-vs-iiit-delhi`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/miranda-house-vs-lsr`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.90 },
    // NEW: Gurugram
    { url: `${BASE_URL}/colleges-gurugram`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    // CET, BSC-IT
    { url: `${BASE_URL}/cet-colleges-delhi`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
  ]

  // NEW: University-specific and high-traffic category pages
  const universityPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/du-colleges-delhi`,       lastModified: new Date(), changeFrequency: "weekly",  priority: 0.95 },
    { url: `${BASE_URL}/ipu-colleges-delhi`,      lastModified: new Date(), changeFrequency: "weekly",  priority: 0.95 },
    { url: `${BASE_URL}/girls-colleges-delhi`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/bcom-colleges-delhi`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.93 },
    { url: `${BASE_URL}/mtech-colleges-delhi`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/nursing-colleges-delhi`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
  ]

  return [...staticPages, ...seoPages, ...ncrPages, ...universityPages, ...collegePages, ...blogPages, ...examPages, ...coursePages]
}
