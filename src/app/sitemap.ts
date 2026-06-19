import { MetadataRoute } from "next"
import { getAllColleges, getAllBlogs, getAllExams, getAllCourses } from "@/lib/db"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.collegedelhi.com"

// Use real content dates — update these only when content actually changes
const CONTENT_DATE = new Date("2026-06-01")
const STATIC_DATE  = new Date("2026-06-11")

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                               lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/colleges`,                 lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/blog`,                     lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/exams`,                    lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/courses`,                  lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/ai-finder`,                lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/compare`,                  lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/counselling`,              lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/predictor`,                lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/roi-calculator`,           lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/scholarships`,             lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/news`,                     lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/qa`,                       lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/cutoffs`,                  lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/nirf-insights`,            lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/privacy`,                  lastModified: new Date("2025-01-01") },
    { url: `${BASE_URL}/terms`,                    lastModified: new Date("2025-01-01") },
  ]

  // College detail pages
  let collegeSlugs: string[] = []
  try {
    const { colleges } = await getAllColleges({ status: 'published', limit: 500 })
    collegeSlugs = colleges.map(c => c.slug).filter(s => !s.includes('test'))
  } catch { /* fall through */ }
  const collegePages: MetadataRoute.Sitemap = collegeSlugs.map(slug => ({
    url: `${BASE_URL}/colleges/${slug}`,
    lastModified: CONTENT_DATE,
  }))

  // Blog pages
  let blogSlugs: string[] = []
  try {
    const { blogs } = await getAllBlogs({ limit: 500 })
    blogSlugs = blogs.map(b => b.slug)
  } catch { /* fall through */ }
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map(slug => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: CONTENT_DATE,
  }))

  // Exam detail pages
  let examSlugs: string[] = []
  try {
    const { exams } = await getAllExams({ limit: 100 })
    examSlugs = exams.map(e => e.slug)
  } catch { /* fall through */ }
  const examPages: MetadataRoute.Sitemap = examSlugs.map(slug => ({
    url: `${BASE_URL}/exams/${slug}`,
    lastModified: CONTENT_DATE,
  }))

  // Course detail pages
  let courseSlugs: string[] = []
  try {
    const { courses } = await getAllCourses({ limit: 200 })
    courseSlugs = courses.map(c => c.slug)
  } catch { /* fall through */ }
  const coursePages: MetadataRoute.Sitemap = courseSlugs.map(slug => ({
    url: `${BASE_URL}/courses/${slug}`,
    lastModified: CONTENT_DATE,
  }))

  // Delhi SEO landing pages
  const seoPages: MetadataRoute.Sitemap = [
    // Stream guides
    { url: `${BASE_URL}/engineering-colleges-delhi`,                  lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/mba-colleges-delhi`,                          lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/medical-colleges-delhi`,                      lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/law-colleges-delhi`,                          lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/design-colleges-delhi`,                       lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/arts-colleges-delhi`,                         lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/pharmacy-colleges-delhi`,                     lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/bca-colleges-delhi`,                          lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/bba-colleges-delhi`,                          lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/bsc-it-colleges-delhi`,                       lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/architecture-colleges-delhi`,                 lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/government-colleges-delhi`,                   lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/science-colleges-delhi`,                      lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/commerce-colleges-delhi`,                     lastModified: CONTENT_DATE },
    // Ranking pages
    { url: `${BASE_URL}/top-10-engineering-colleges-in-delhi`,        lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/top-10-mba-colleges-in-delhi`,                lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/top-10-medical-colleges-in-delhi`,            lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/naac-a-plus-colleges-delhi`,                  lastModified: CONTENT_DATE },
    // Placement guides
    { url: `${BASE_URL}/engineering-colleges-delhi-placement`,        lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/mba-colleges-delhi-placement`,                lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/top-placement-colleges-delhi`,                lastModified: CONTENT_DATE },
    // Fees
    { url: `${BASE_URL}/low-fees-engineering-colleges-delhi`,         lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/low-fees-mba-colleges-delhi`,                 lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/low-fee-colleges-delhi`,                      lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/colleges-delhi-fees`,                         lastModified: CONTENT_DATE },
    // Hostel
    { url: `${BASE_URL}/colleges-in-delhi-with-hostel`,               lastModified: CONTENT_DATE },
    // Admission guides
    { url: `${BASE_URL}/engineering-admission-delhi-without-jee`,     lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/mba-admission-delhi-without-cat`,             lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/direct-admission-engineering-colleges-delhi`, lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/direct-admission-mba-colleges-delhi`,         lastModified: CONTENT_DATE },
    // Engineering deep-dives
    { url: `${BASE_URL}/btech-colleges-delhi`,                        lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/computer-engineering-colleges-delhi`,         lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/mechanical-engineering-colleges-delhi`,       lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/private-engineering-colleges-delhi`,          lastModified: CONTENT_DATE },
    // MBA deep-dives
    { url: `${BASE_URL}/best-mba-colleges-delhi`,                     lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/pgdm-colleges-delhi`,                         lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/private-mba-colleges-delhi`,                  lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/cat-colleges-delhi`,                          lastModified: CONTENT_DATE },
    // Medical
    { url: `${BASE_URL}/mbbs-colleges-delhi`,                         lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/neet-colleges-delhi`,                         lastModified: CONTENT_DATE },
    // Entrance exam clusters
    { url: `${BASE_URL}/jee-colleges-delhi`,                          lastModified: CONTENT_DATE },
    // Area-specific — existing
    { url: `${BASE_URL}/colleges-south-delhi`,                        lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/colleges-north-delhi`,                        lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/colleges-east-delhi`,                         lastModified: CONTENT_DATE },
    // Area-specific — locality pages
    { url: `${BASE_URL}/colleges-dwarka-delhi`,                       lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/colleges-rohini-delhi`,                       lastModified: CONTENT_DATE },
    // Comparison pages
    { url: `${BASE_URL}/dtu-vs-nsut`,                                 lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/srcc-vs-hindu-college`,                       lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/fms-delhi-vs-mdi-gurgaon`,                   lastModified: CONTENT_DATE },
    // Admission calendar
    { url: `${BASE_URL}/delhi-college-admission-calendar-2026`,       lastModified: CONTENT_DATE },
    // Tools
    { url: `${BASE_URL}/delhi-college-fees-calculator`,               lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/delhi-college-placement-comparator`,          lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/delhi-colleges-comparison-engineering-mba`,   lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/delhi-admission-deadline-tracker-2026`,       lastModified: CONTENT_DATE },
    // Scholarships
    { url: `${BASE_URL}/engineering-colleges-delhi-scholarship`,      lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/mba-colleges-delhi-scholarship`,              lastModified: CONTENT_DATE },
    // MBA specialisation pages
    { url: `${BASE_URL}/mba-in-banking-finance-delhi`,               lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/mba-in-business-analytics-delhi`,            lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/mba-in-healthcare-management-delhi`,         lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/mba-in-digital-marketing-delhi`,             lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/mba-in-finance-delhi`,                       lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/mba-in-hr-delhi`,                            lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/mba-in-information-technology-delhi`,        lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/mba-in-international-business-delhi`,        lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/mba-in-marketing-delhi`,                     lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/mba-in-operations-delhi`,                    lastModified: CONTENT_DATE },
    // College-specific MBA pages
    { url: `${BASE_URL}/lbsim-delhi`,                                lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/amity-university-mba-delhi`,                 lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/jamia-millia-islamia-mba-delhi`,             lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/fore-school-management-delhi`,               lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/iift-delhi`,                                 lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/mdi-gurgaon`,                                lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/imt-ghaziabad`,                              lastModified: CONTENT_DATE },
    // MBA comparison pages
    { url: `${BASE_URL}/fms-delhi-vs-iift-delhi`,                    lastModified: CONTENT_DATE },
    // New gap pages vs competitors
    { url: `${BASE_URL}/hotel-management-colleges-delhi`,            lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/cuet-colleges-delhi`,                        lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/ba-colleges-delhi`,                          lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/mass-communication-colleges-delhi`,          lastModified: CONTENT_DATE },
    // Tier 2 gap pages vs competitors
    { url: `${BASE_URL}/journalism-colleges-delhi`,                  lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/llb-colleges-delhi`,                         lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/bms-colleges-delhi`,                         lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/paramedical-colleges-delhi`,                 lastModified: CONTENT_DATE },
    // MBA format & mode pages
    { url: `${BASE_URL}/executive-mba-delhi`,                        lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/online-mba-delhi`,                           lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/part-time-mba-delhi`,                        lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/government-mba-colleges-delhi`,              lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/ip-university-mba-delhi`,                    lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/mba-colleges-gurgaon`,                       lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/mba-colleges-greater-noida`,                 lastModified: CONTENT_DATE },
  ]

  // NCR location pages
  const ncrPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/engineering-colleges-noida`,    lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/mba-colleges-noida`,            lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/bca-colleges-noida`,            lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/bba-colleges-noida`,            lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/colleges-greater-noida`,        lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/colleges-janakpuri-delhi`,      lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/colleges-pitampura-delhi`,      lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/colleges-vasant-kunj-delhi`,    lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/dtu-vs-iiit-delhi`,             lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/miranda-house-vs-lsr`,          lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/colleges-gurugram`,             lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/cet-colleges-delhi`,            lastModified: CONTENT_DATE },
  ]

  // University-specific and high-traffic category pages
  const universityPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/du-colleges-delhi`,       lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/ipu-colleges-delhi`,      lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/girls-colleges-delhi`,    lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/bcom-colleges-delhi`,     lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/mtech-colleges-delhi`,    lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/nursing-colleges-delhi`,  lastModified: CONTENT_DATE },
  ]

  // Programmatic comparison pairs
  const comparisonPairs = [
    "dtu-delhi-technological-university-vs-nsut-delhi",
    "iit-delhi-vs-dtu-delhi-technological-university",
    "fms-delhi-faculty-management-studies-vs-mdi-gurgaon-management-development-institute",
    "iiit-delhi-vs-nsut-delhi",
    "aiims-delhi-vs-maulana-azad-medical-college-delhi",
    "miranda-house-du-vs-lady-shri-ram-college-du",
    "srcc-du-vs-hindu-college-du",
    "imt-ghaziabad-vs-bimtech-birla-institute-management-technology-noida",
    "fore-school-management-delhi-vs-lbsim-lal-bahadur-shastri-institute-management",
    "amity-university-noida-engineering-vs-bennett-university-delhi-engineering",
    "igdtuw-delhi-vs-nsut-delhi",
    "dms-iit-delhi-management-studies-vs-fms-delhi-faculty-management-studies",
    "jmi-delhi-vs-dtu-delhi-technological-university",
  ]
  const comparisonPages: MetadataRoute.Sitemap = comparisonPairs.map(pair => ({
    url: `${BASE_URL}/compare/${pair}`,
    lastModified: CONTENT_DATE,
  }))

  // Competitive gap pages and new pages
  const newPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/pgdm-vs-mba-delhi`,         lastModified: STATIC_DATE },
    { url: `${BASE_URL}/colleges-in-delhi`,          lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/best-colleges-in-delhi`,     lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/top-colleges-in-delhi`,      lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/about`,                      lastModified: STATIC_DATE },
    { url: `${BASE_URL}/editorial-policy`,           lastModified: STATIC_DATE },
  ]

  return [...staticPages, ...seoPages, ...ncrPages, ...universityPages, ...newPages, ...comparisonPages, ...collegePages, ...blogPages, ...examPages, ...coursePages]
}
