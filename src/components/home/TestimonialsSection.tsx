import Link from "next/link"

interface Testimonial {
  id: number
  name: string
  college: string
  course: string
  year: string
  rating: number
  text: string
  initials: string
  color: string
}

const staticTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rohan Sharma",
    college: "DTU Delhi",
    course: "B.Tech Computer Engineering",
    year: "2024",
    rating: 5,
    text: "CollegeDelhi helped me find DTU's exact JEE Main cutoff branch-wise and category-wise. The counsellor explained the JOSAA counselling process in detail. Got into DTU CSE with 99.4 percentile!",
    initials: "RS",
    color: "bg-blue-600",
  },
  {
    id: 2,
    name: "Priya Kapoor",
    college: "FMS Delhi",
    course: "MBA Marketing",
    year: "2024",
    rating: 5,
    text: "I was confused between FMS Delhi and MDI Gurgaon. The comparison tool on CollegeDelhi showed me fees, placement, CAT cutoffs side-by-side. Enrolled at FMS - best decision ever. Placed at ₹28 LPA.",
    initials: "PK",
    color: "bg-red-600",
  },
  {
    id: 3,
    name: "Aditya Verma",
    college: "NSUT Delhi",
    course: "B.Tech IT",
    year: "2025",
    rating: 5,
    text: "The AI college finder matched me to NSUT when I entered my 98.5 percentile in JEE Main. The free counselling session cleared all my doubts about NSUT vs DTU. Placed at Microsoft in campus placement!",
    initials: "AV",
    color: "bg-green-600",
  },
  {
    id: 4,
    name: "Sneha Singh",
    college: "AIIMS Delhi",
    course: "MBBS",
    year: "2023",
    rating: 5,
    text: "AIIMS Delhi cutoffs are hard to find. CollegeDelhi had NEET category-wise cutoffs from 2020 onwards. The team also guided me through the AIIMS application process. Forever grateful for the support!",
    initials: "SS",
    color: "bg-red-600",
  },
  {
    id: 5,
    name: "Karan Mehta",
    college: "Amity University Delhi",
    course: "B.Tech Mechanical",
    year: "2024",
    rating: 4,
    text: "Was worried about hostel availability at Delhi colleges. CollegeDelhi showed hostel fees, capacity, and application process clearly for each college. The WhatsApp deadline alert saved me from missing the cutoff.",
    initials: "KM",
    color: "bg-purple-600",
  },
  {
    id: 6,
    name: "Ananya Joshi",
    college: "IMI Delhi",
    course: "MBA Finance",
    year: "2025",
    rating: 5,
    text: "Got scholarship information through CollegeDelhi's detailed guide on Delhi government and central scholarships. The step-by-step application walkthrough was very helpful. The team is super responsive!",
    initials: "AJ",
    color: "bg-teal-600",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-3">
          <div>
            <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">Student Stories</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Real Students. Real Results.
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg">
              Join 50,000+ students who found their college with CollegeDelhi - free, fast, and personalised.
            </p>
          </div>
          {/* Aggregate rating */}
          <div className="flex items-center gap-3 bg-yellow-50 border border-yellow-100 rounded-2xl px-5 py-3 flex-shrink-0">
            <div>
              <p className="text-3xl font-extrabold text-gray-900 leading-none">4.9</p>
              <StarRating rating={5} />
            </div>
            <div className="text-sm text-gray-600">
              <p className="font-semibold">Excellent</p>
              <p className="text-gray-400 text-xs">Based on 2,400+ reviews</p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {staticTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3"
            >
              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Quote */}
              <p className="text-sm text-gray-700 leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.course} &middot; {t.college} &rsquo;{t.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/counselling"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"
          >
            Get Free Counselling Like Them &rarr;
          </Link>
          <p className="text-xs text-gray-400 mt-3">247 students counselled this week &middot; 100% free</p>
        </div>
      </div>
    </section>
  )
}
