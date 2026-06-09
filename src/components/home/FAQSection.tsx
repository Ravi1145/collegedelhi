"use client"
import * as Accordion from "@radix-ui/react-accordion"
import { useState } from "react"
import { ChevronDown, HelpCircle, ChevronRight } from "lucide-react"

const faqs = [
  {
    q: "Which is the best college in Delhi for B.Tech / Engineering in 2026?",
    a: "DTU (Delhi Technological University) is consistently Delhi's top engineering college - NIRF top 50, NAAC A+ accredited. Annual fees: ₹1.5L-2L/year. Average placement: ₹18 LPA, highest ₹72 LPA. JEE Main 2026 cutoff: 99+ percentile for CSE. Other top options: NSUT (Netaji Subhas University of Technology, NIRF top 60, avg ₹16 LPA), IGDTUW (women's engineering college, govt, avg ₹14 LPA), and Jamia Millia Islamia Engineering (central university, affordable fees)."
  },
  {
    q: "What is the best MBA college in Delhi for 2026 admissions?",
    a: "FMS Delhi (Faculty of Management Studies, Delhi University) is the top MBA college in Delhi - near-free fees (~₹30K/year), average placements ₹32 LPA, requires CAT 99+ percentile. MDI Gurgaon (near Delhi, NIRF top 10, CAT-based, avg ₹28 LPA, fees ₹23L total) is another premium option. IMI Delhi, Fore School of Management, and BIMTECH are strong mid-tier options (CAT 85-95 percentile required, fees ₹10-18L). IIFT Delhi is best for international trade MBA."
  },
  {
    q: "Which medical college in Delhi has the best NEET cutoff and facilities?",
    a: "AIIMS Delhi is India's best medical college - NIRF #1, near-free fees, requires NEET 690+ score for General category. Maulana Azad Medical College (MAMC) and Lady Hardinge Medical College (LHMC) are top government options accessible with NEET 650+ (Delhi state quota). IP University medical colleges accept 580-620 NEET scores. For private options, Jamia Hamdard and other IP-affiliated medical colleges have good facilities at ₹5-12L/year fees."
  },
  {
    q: "What entrance exams are required for engineering admission in Delhi 2026?",
    a: "For Delhi engineering colleges: JEE Main 2026 is required for DTU, NSUT, IGDTUW (Delhi government colleges through JOSAA/CSAB counselling). CUET is accepted by Delhi University affiliated engineering programs. IP University (GGSIPU) runs its own CET for private engineering colleges in Delhi. JEE Advanced is required for IIT Delhi (the premier technical institute in Delhi). Private colleges like Amity and Bennett University also accept JEE Main scores."
  },
  {
    q: "What are the fees for B.Tech in Delhi colleges in 2026?",
    a: "B.Tech fees in Delhi 2026 vary by college type: Government colleges (DTU, NSUT, IGDTUW): ₹1.5L-2L/year. Central University colleges (Jamia Millia Islamia Engineering): ₹80K-1.5L/year. IP University affiliated private colleges: ₹1.5L-2.8L/year. Private universities (Amity, Bennett, GD Goenka): ₹2.5L-5L/year. Delhi Government and Central Government scholarships provide fee waivers for SC/ST/OBC students. EWS scholarship also available for economically weaker sections."
  },
  {
    q: "Which Delhi colleges offer hostel facilities in 2026?",
    a: "Most top Delhi colleges offer hostel facilities. Hostel fees approximate: DTU: ₹60K-80K/year including mess. NSUT: ₹50K-75K/year. IGDTUW (women's only): ₹55K-70K/year. FMS Delhi: ₹40K-60K/year. AIIMS Delhi: ₹30K-50K/year (subsidised). IP University affiliated colleges: ₹50K-90K/year. Private universities (Amity, Bennett): ₹1.2L-2L/year including meals. Apply for government college hostels immediately after admission as seats fill very quickly."
  },
  {
    q: "How does NAAC grading work and which Delhi colleges have A++ or A+ grade?",
    a: "NAAC (National Assessment and Accreditation Council) grades colleges: A++ (best) -> A+ -> A -> B++ -> B+ -> B. In Delhi, AIIMS Delhi and a few institutions hold A++ grade. Top NAAC A+ colleges in Delhi: DTU, NSUT, Jamia Millia Islamia (Central Univ), Delhi University colleges (Miranda House, Lady Shri Ram, St. Stephen's), FMS Delhi, Jamia Hamdard. NAAC grade is checked by banks for education loans and employers for recruitment. Colleges reapply every 5 years."
  },
  {
    q: "What are the best low-budget colleges in Delhi for 2026?",
    a: "Best low-budget options in Delhi 2026 - Engineering: DTU (₹1.5L/yr, govt), NSUT (₹1.5L/yr, govt), IGDTUW (₹1.2L/yr, govt women's). Arts & Science: Delhi University colleges (Miranda House, LSR, St. Stephen's, Kirori Mal) - ₹10K-50K/year. MBA: FMS Delhi (₹30K/year - best value MBA in India). For SC/ST/OBC/EWS students, central and state government scholarships (NSP portal) can cover partial or full tuition fees at most government colleges."
  },
  {
    q: "Which is the No. 1 college in Delhi in 2026?",
    a: "AIIMS Delhi is Delhi's highest NIRF-ranked institution at #1 nationally (medical). Among engineering colleges, DTU is #1 in Delhi (NIRF top 50, avg ₹18 LPA). Among MBA colleges, FMS Delhi is #1 (avg ₹32 LPA, near-free fees). For arts and humanities, Miranda House and Lady Shri Ram College (Delhi University) rank #1 nationally for women's liberal arts. IIT Delhi is the premier technology institute in Delhi (NIRF #2 engineering nationally)."
  },
  {
    q: "When does college admission start in Delhi 2026?",
    a: "Delhi college admissions 2026 calendar: JEE Main Session 1 - January 2026. JEE Main Session 2 - April 2026. NEET - May 3, 2026. JEE Main results - February & May 2026. JEE Advanced - June 2026. JOSAA counselling (IIT/NIT/DTU/NSUT) - June-July 2026. CUET UG for Delhi University - May 2026 (results July 2026). IP University CET - May 2026. CAT/SNAP for MBA - November-December 2026 (for 2027 batch)."
  },
  {
    q: "Which areas in Delhi have the best colleges?",
    a: "Major college zones in Delhi 2026: Rohini / Dwarka - DTU (Delhi Tech Univ), NSUT (West Campus). Janakpuri - IGDTUW (women's engineering). Okhla / Jamia Nagar - Jamia Millia Islamia (central univ). South Delhi (Hauz Khas, JNU Campus) - FMS Delhi, JNU. North Delhi (University Road) - Delhi University North Campus (Hindu, Kirori Mal, Miranda House, Hansraj). South Delhi (Lodi Road area) - AIIMS Delhi. Noida / Greater Noida extension - Amity, Sharda University (NCR region)."
  },
  {
    q: "Which colleges in Delhi are NAAC A+ accredited in 2026?",
    a: "NAAC A+ (and A++) colleges in Delhi 2026: AIIMS Delhi (A++ national level), Delhi University colleges including Miranda House (NAAC A++), Lady Shri Ram College, Gargi College, IP College for Women, DTU Delhi (A+), NSUT (A+), Jamia Millia Islamia (A+ central univ), FMS Delhi (A+), Jamia Hamdard (A+). NAAC grade is checked by banks for education loans and by employers for recruitment purposes."
  }
]

const INITIAL_COUNT = 5

export default function FAQSection() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? faqs : faqs.slice(0, INITIAL_COUNT)

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 text-sm font-medium px-4 py-2 rounded-full mb-3">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Common Questions About Delhi Colleges 2026
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Everything you need to know about admissions, fees, placements, and entrance exams in Delhi
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-3">
          {visible.map((faq, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              <Accordion.Trigger className="flex items-center justify-between w-full px-4 sm:px-6 py-4 sm:py-5 text-left group">
                <span className="text-sm sm:text-base font-semibold text-gray-900 pr-4 group-data-[state=open]:text-red-700 transition-colors">
                  {faq.q}
                </span>
                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-data-[state=open]:rotate-180 group-data-[state=open]:text-red-600" />
              </Accordion.Trigger>
              <Accordion.Content className="px-4 sm:px-6 pb-4 sm:pb-5">
                <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        {!showAll && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              View More FAQs <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
