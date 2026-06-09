/**
 * db.ts — CollegeDelhi data layer
 *
 * ALL read operations → live Delhi backend API (no static fallbacks)
 * Write operations (leads / enquiries / bookings) → backend API + email
 */

const BACKEND_API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api'

const getSendLeadEmail = () => import('@/lib/mailer').then(m => m.sendLeadEmail)

export type { Lead, Enquiry, CounsellingBooking, AdminStats } from '@/types'
import type { Lead, Enquiry, CounsellingBooking, AdminStats } from '@/types'

function normalizeStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return []
  return value
    .map((item: unknown) => {
      if (typeof item === 'string') return item
      if (typeof item === 'object' && item !== null) {
        const obj = item as Record<string, unknown>
        return (obj.value as string) || (obj.title as string) || ''
      }
      return ''
    })
    .filter((s): s is string => Boolean(s))
}

let _idCounter = Date.now()
function nextId() { return ++_idCounter }

// ── LEAD FUNCTIONS ────────────────────────────────────────────────────────────

export async function insertLead(
  data: Omit<Lead, 'id' | 'created_at' | 'updated_at'>
): Promise<number> {
  try {
    await fetch(`${BACKEND_API}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  } catch (err) {
    console.error('[insertLead] backend failed:', err)
  }
  try {
    const sendLeadEmail = await getSendLeadEmail()
    await sendLeadEmail({ ...data })
  } catch (err) {
    console.error('[insertLead] email failed:', err)
  }
  return nextId()
}

export async function getAllLeads(_filters?: {
  status?: string; source?: string; stream?: string
  search?: string; page?: number; limit?: number
}): Promise<{ leads: Lead[]; total: number; page: number; totalPages: number }> {
  return { leads: [], total: 0, page: 1, totalPages: 0 }
}

export async function updateLeadStatus(_id?: number, _status?: string, _notes?: string): Promise<void> { /* no-op */ }

export async function getLeadsStats(): Promise<AdminStats> {
  return {
    totalLeads: 0, leadsToday: 0, leadsThisWeek: 0,
    newLeads: 0, contactedLeads: 0, convertedLeads: 0,
    leadsBySource: [], leadsByStream: [], dailyTrend: [],
  }
}

export async function exportLeadsCSV(): Promise<string> { return 'name,phone,email,source\n' }

// ── ENQUIRY FUNCTIONS ─────────────────────────────────────────────────────────

export async function insertEnquiry(
  data: Omit<Enquiry, 'id' | 'created_at'>
): Promise<number> {
  try {
    await fetch(`${BACKEND_API}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, type: 'Enquiry' }),
    })
  } catch (err) {
    console.error('[insertEnquiry] backend failed:', err)
  }
  try {
    const sendLeadEmail = await getSendLeadEmail()
    await sendLeadEmail({ type: 'Enquiry', ...data })
  } catch (err) {
    console.error('[insertEnquiry] email failed:', err)
  }
  return nextId()
}

export async function getAllEnquiries(): Promise<Enquiry[]> { return [] }
export async function updateEnquiryStatus(): Promise<void> { /* no-op */ }

// ── COUNSELLING FUNCTIONS ─────────────────────────────────────────────────────

export async function insertBooking(
  data: Omit<CounsellingBooking, 'id' | 'created_at'>
): Promise<number> {
  try {
    await fetch(`${BACKEND_API}/counselling`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  } catch (err) {
    console.error('[insertBooking] backend failed:', err)
  }
  try {
    const sendLeadEmail = await getSendLeadEmail()
    await sendLeadEmail({ type: 'Counselling Booking', ...data })
  } catch (err) {
    console.error('[insertBooking] email failed:', err)
  }
  return nextId()
}

// ── COLLEGE TYPES ─────────────────────────────────────────────────────────────

export interface CollegeDetails {
  courses_fees?: {
    program: string; duration: string; level?: string
    eligibility: string; selection: string
    fees_per_year: number; total_fees: number; seats?: number
  }[]
  admission_process?: { step: number; title: string; description: string }[]
  cutoffs?: {
    program: string; exam: string; year: string
    general?: string; obc?: string; sc?: string; st?: string; ews?: string
  }[]
  placements?: {
    year: string
    stats: {
      program: string; avg_package: number; median_package?: number
      highest_package: number; students_placed?: number
      total_eligible?: number; companies_visited?: number; placement_pct?: number
    }[]
    sector_wise?: { sector: string; percentage: number }[]
  }
  rankings?: { agency: string; category: string; rank: number | null; grade?: string; year: string }[]
  scholarships?: { name: string; eligibility: string; amount: string; provider?: string }[]
  facilities?: { name: string; description: string }[]
  alumni?: { name: string; designation: string; batch?: string }[]
  hostel_info?: {
    available: boolean; boys_hostels?: number; girls_hostels?: number
    total_capacity?: number; fees_per_year?: number; facilities?: string[]; notes?: string
  }
  campus_area?: string; total_students?: number; faculty_count?: number
  student_faculty_ratio?: string; faqs?: { q: string; a: string }[]
}

export interface DBCollege {
  id?: number; slug: string; name: string; short_name?: string
  type?: string; established?: number; affiliation?: string
  naac_grade?: string; nirf_rank?: number | null; city: string
  state?: string; address?: string; description?: string
  highlights?: string[]; tags?: string[]; fees_min?: number; fees_max?: number
  avg_placement?: number; highest_pkg?: number; top_recruiters?: string[]
  entrance_exams?: string[]; courses?: string[]; specializations?: string[]
  hostel?: boolean; rating?: number; review_count?: number
  website?: string; phone?: string; email?: string; stream?: string
  image_url?: string; logo_base64?: string
  faqs?: { q: string; a: string }[]; details?: CollegeDetails
  status?: string; isFeatured?: boolean; ai_generated?: boolean
  meta_title?: string; meta_desc?: string; seo_keywords?: string[]
  created_at?: string; updated_at?: string
}

function mapCollege(c: Record<string, unknown>): DBCollege {
  return {
    id: undefined,
    slug:            c.slug as string,
    name:            c.name as string,
    short_name:      c.short_name as string,
    type:            c.type as string,
    established:     c.established as number,
    affiliation:     c.affiliation as string,
    naac_grade:      c.naac_grade as string,
    nirf_rank:       (c.nirf_rank as number) ?? null,
    city:            c.city as string,
    address:         c.address as string,
    description:     c.about as string,
    highlights:      normalizeStringArray(c.highlights),
    tags:            normalizeStringArray(c.tags),
    fees_min:        c.fees_min as number,
    fees_max:        c.fees_max as number,
    avg_placement:   c.avg_placement as number,
    highest_pkg:     c.highest_pkg as number,
    top_recruiters:  normalizeStringArray(c.top_recruiters),
    entrance_exams:  normalizeStringArray(c.entrance_exams),
    courses:         normalizeStringArray(c.courses),
    specializations: normalizeStringArray(c.specializations),
    hostel:          c.hostel as boolean,
    rating:          c.rating as number,
    review_count:    c.review_count as number,
    website:         c.website as string,
    phone:           c.phone as string,
    email:           c.email as string,
    stream:          c.stream as string,
    image_url:       c.image_url as string,
    logo_base64:     c.logo_base64 as string | undefined,
    isFeatured:      c.isFeatured as boolean | undefined,
    faqs:            (c.faqs as {question: string; answer: string}[] | undefined)?.map(f => ({ q: f.question, a: f.answer })),
    details: {
      courses_fees:      c.courses_fees as CollegeDetails['courses_fees'],
      admission_process: c.admission_process as CollegeDetails['admission_process'],
      cutoffs:           c.cutoffs as CollegeDetails['cutoffs'],
      placements:        undefined,
      rankings: (c.rankings as {agency: string; category: string; rank: string; year: string}[] | undefined)?.map(r => ({
        agency: r.agency, category: r.category,
        rank: isNaN(Number(r.rank?.replace('#', ''))) ? null : Number(r.rank?.replace('#', '')),
        grade: r.rank, year: r.year,
      })),
      scholarships: c.scholarships as CollegeDetails['scholarships'],
      facilities:   c.facilities as CollegeDetails['facilities'],
      alumni:       c.alumni as CollegeDetails['alumni'],
    },
    status: 'published',
  }
}

// ── COLLEGE FUNCTIONS ─────────────────────────────────────────────────────────

export async function getAllColleges(filters?: {
  status?: string; excludeArchived?: boolean; city?: string; stream?: string
  search?: string; featured?: string; page?: number; limit?: number
}): Promise<{ colleges: DBCollege[]; total: number; page: number; totalPages: number }> {
  try {
    const qs = new URLSearchParams()
    qs.set('status', filters?.status || 'published')
    if (filters?.city)     qs.set('city',     filters.city)
    if (filters?.stream)   qs.set('stream',   filters.stream)
    if (filters?.search)   qs.set('search',   filters.search)
    if (filters?.featured) qs.set('featured', filters.featured)
    if (filters?.limit)    qs.set('limit',    String(filters.limit))
    if (filters?.page)     qs.set('page',     String(filters.page))

    const res = await fetch(`${BACKEND_API}/colleges?${qs}`, { next: { revalidate: 60 } })
    if (!res.ok) {
      console.error('[db] getAllColleges API error:', res.status)
      return { colleges: [], total: 0, page: 1, totalPages: 1 }
    }
    const data = await res.json()
    const colleges = (data.data || []).map((c: Record<string, unknown>) => mapCollege(c))
    return { colleges, total: data.total || colleges.length, page: data.page || 1, totalPages: data.totalPages || 1 }
  } catch (err) {
    console.error('[db] getAllColleges fetch failed:', err)
    return { colleges: [], total: 0, page: 1, totalPages: 1 }
  }
}

export async function getCollegeById(_id: number): Promise<DBCollege | null> { return null }

export async function getCollegeBySlug(slug: string): Promise<DBCollege | null> {
  try {
    const res = await fetch(`${BACKEND_API}/colleges/${slug}`, { next: { revalidate: 60 } })
    if (!res.ok) return null
    const data = await res.json()
    return data.data ? mapCollege(data.data) : null
  } catch (err) {
    console.error('[db] getCollegeBySlug failed:', err)
    return null
  }
}

export async function insertCollege(): Promise<number> { return nextId() }
export async function updateCollege(): Promise<void> { /* no-op */ }
export async function deleteCollege(): Promise<void> { /* no-op */ }

export async function getCollegesStats(): Promise<{
  total: number; published: number; draft: number; aiGenerated: number
}> {
  try {
    const res = await fetch(`${BACKEND_API}/colleges/stats`, { next: { revalidate: 300 } })
    if (res.ok) {
      const data = await res.json()
      const total = data.total || data.data?.total || 0
      return { total, published: total, draft: 0, aiGenerated: 0 }
    }
  } catch { /* fall through */ }
  return { total: 0, published: 0, draft: 0, aiGenerated: 0 }
}

// ── BLOG TYPES ────────────────────────────────────────────────────────────────

export interface DBBlog {
  id?: number | string; slug: string; title: string; excerpt?: string
  body?: string; author?: string; category?: string; tags?: string[]
  read_time?: string; status?: string; views?: number; ai_generated?: boolean
  meta_title?: string; meta_desc?: string; seo_keywords?: string[]
  image_url?: string; published_at?: string; created_at?: string; updated_at?: string
}

function mapBackendBlog(b: Record<string, unknown>, fallbackSlug?: string): DBBlog {
  return {
    id:           (b._id as string) || (b.id as string) || fallbackSlug || (b.slug as string),
    slug:         (b.slug as string) || fallbackSlug || '',
    title:        b.title as string,
    excerpt:      b.excerpt as string,
    body:         (b.content as string) || (b.body as string),
    author:       b.author as string,
    category:     b.category as string,
    tags:         (b.tags as string[]) || [],
    read_time:    (b.readTime as string) || (b.read_time as string),
    status:       'published',
    image_url:    (b.coverImage as string) || (b.image_url as string),
    views:        b.views as number,
    published_at: (b.publishedAt as string) || (b.published_at as string),
    created_at:   (b.createdAt as string) || (b.created_at as string),
    updated_at:   (b.updatedAt as string) || (b.updated_at as string),
    meta_title:   b.meta_title as string,
    meta_desc:    b.meta_desc as string,
    seo_keywords: b.seo_keywords as string[],
  }
}

// ── BLOG FUNCTIONS ────────────────────────────────────────────────────────────

export async function getAllBlogs(filters?: {
  status?: string; excludeArchived?: boolean; category?: string
  search?: string; page?: number; limit?: number
}): Promise<{ blogs: DBBlog[]; total: number; page: number; totalPages: number }> {
  try {
    const qs = new URLSearchParams()
    if (filters?.category) qs.set('category', filters.category)
    if (filters?.search)   qs.set('search',   filters.search)
    if (filters?.page)     qs.set('page',     String(filters.page))
    if (filters?.limit)    qs.set('limit',    String(filters.limit))

    const queryString = qs.toString()
    const url = `${BACKEND_API}/blogs${queryString ? `?${queryString}` : ''}`
    const res = await fetch(url, { next: { revalidate: 300 } })

    if (res.ok) {
      const data = await res.json()
      const raw: Record<string, unknown>[] = data.data || []
      return {
        blogs:      raw.map(b => mapBackendBlog(b)),
        total:      (data.total as number) || raw.length,
        page:       (data.page as number) || 1,
        totalPages: (data.totalPages as number) || 1,
      }
    }
    console.error('[db] getAllBlogs API error:', res.status)
  } catch (err) {
    console.error('[db] getAllBlogs fetch failed:', err)
  }
  return { blogs: [], total: 0, page: 1, totalPages: 0 }
}

export async function getBlogById(_id: number): Promise<DBBlog | null> { return null }

export async function getBlogBySlug(slug: string): Promise<DBBlog | null> {
  try {
    const res = await fetch(`${BACKEND_API}/blogs/${slug}`, { next: { revalidate: 300 } })
    if (res.ok) {
      const data = await res.json()
      const b = data.data as Record<string, unknown> | null
      if (b) return mapBackendBlog(b, slug)
    }
  } catch (err) {
    console.error('[db] getBlogBySlug fetch failed:', err)
  }
  return null
}

export async function insertBlog(): Promise<number> { return nextId() }
export async function updateBlog(): Promise<void> { /* no-op */ }
export async function deleteBlog(): Promise<void> { /* no-op */ }

// ── COURSE TYPES & FUNCTIONS ──────────────────────────────────────────────────

export interface DBCourse {
  _id?: string; slug: string; name: string; fullName?: string
  shortName?: string; level?: string; stream?: string; duration?: string
  description?: string; about?: string; highlights?: string[]
  fees?: { min?: number; max?: number; total?: number }
  eligibility?: { minPercentage?: number; requiredSubjects?: string[] }
  career?: { avgSalary?: { min?: number; max?: number }; topRecruiters?: string[]; careerOptions?: string[] }
  status?: string
}

export async function getAllCourses(filters?: {
  stream?: string; level?: string; search?: string; page?: number; limit?: number
}): Promise<{ courses: DBCourse[]; total: number; page: number; totalPages: number }> {
  try {
    const qs = new URLSearchParams()
    qs.set('status', 'published')
    if (filters?.stream) qs.set('stream', filters.stream)
    if (filters?.level)  qs.set('level',  filters.level)
    if (filters?.search) qs.set('search', filters.search)
    if (filters?.page)   qs.set('page',   String(filters.page))
    if (filters?.limit)  qs.set('limit',  String(filters.limit))

    const res = await fetch(`${BACKEND_API}/courses?${qs}`, { next: { revalidate: 300 } })
    if (res.ok) {
      const data = await res.json()
      return { courses: data.data || [], total: data.total || 0, page: data.page || 1, totalPages: data.totalPages || 1 }
    }
  } catch (err) {
    console.error('[db] getAllCourses fetch failed:', err)
  }
  return { courses: [], total: 0, page: 1, totalPages: 1 }
}

export async function getCourseBySlug(slug: string): Promise<DBCourse | null> {
  try {
    const res = await fetch(`${BACKEND_API}/courses/${slug}`, { next: { revalidate: 300 } })
    if (res.ok) {
      const data = await res.json()
      return data.data || null
    }
  } catch (err) {
    console.error('[db] getCourseBySlug failed:', err)
  }
  return null
}

// ── EXAM TYPES & FUNCTIONS ────────────────────────────────────────────────────

export interface DBExam {
  _id?: string; slug: string; name: string; fullName?: string
  shortName?: string; type?: string; streams?: string[]
  conductedBy?: string; description?: string; about?: string
  highlights?: string[]; examMode?: string; duration?: string
  totalMarks?: number; importantDates?: { event: string; date: string }[]
  status?: string
}

export async function getAllExams(filters?: {
  stream?: string; type?: string; search?: string; page?: number; limit?: number
}): Promise<{ exams: DBExam[]; total: number; page: number; totalPages: number }> {
  try {
    const qs = new URLSearchParams()
    qs.set('status', 'published')
    if (filters?.stream) qs.set('stream', filters.stream)
    if (filters?.type)   qs.set('type',   filters.type)
    if (filters?.search) qs.set('search', filters.search)
    if (filters?.page)   qs.set('page',   String(filters.page))
    if (filters?.limit)  qs.set('limit',  String(filters.limit))

    const res = await fetch(`${BACKEND_API}/exams?${qs}`, { next: { revalidate: 300 } })
    if (res.ok) {
      const data = await res.json()
      return { exams: data.data || [], total: data.total || 0, page: data.page || 1, totalPages: data.totalPages || 1 }
    }
  } catch (err) {
    console.error('[db] getAllExams fetch failed:', err)
  }
  return { exams: [], total: 0, page: 1, totalPages: 1 }
}

export async function getExamBySlug(slug: string): Promise<DBExam | null> {
  try {
    const res = await fetch(`${BACKEND_API}/exams/${slug}`, { next: { revalidate: 300 } })
    if (res.ok) {
      const data = await res.json()
      const exam = data.data || null
      if (exam && Array.isArray(exam.highlights)) {
        exam.highlights = exam.highlights.map((h: any) =>
          typeof h === 'string' ? h : `${h.title ?? ''}: ${h.value ?? ''}`
        )
      }
      return exam
    }
  } catch (err) {
    console.error('[db] getExamBySlug failed:', err)
  }
  return null
}

// ── CITY PAGE (stub) ──────────────────────────────────────────────────────────

export interface DBCityPage {
  id?: number; city: string; stream: string; slug: string
  title?: string; intro?: string; faqs?: { q: string; a: string }[]
  cta_text?: string; status?: string; ai_generated?: boolean
  meta_title?: string; meta_desc?: string; created_at?: string; updated_at?: string
}

export async function getCityPage(_city?: string, _stream?: string): Promise<DBCityPage | null> { return null }
export async function upsertCityPage(): Promise<void> { /* no-op */ }
export async function logAIJob(): Promise<void> { /* no-op */ }
