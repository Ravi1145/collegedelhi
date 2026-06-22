import type { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateOrganizationSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "About CollegeDelhi — India's Delhi College Discovery",
  description: "CollegeDelhi is India's AI-powered portal for Delhi college discovery",
  path: "/about",
})

export const revalidate = 86400

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "Editor-in-Chief, Higher Education",
    credentials: "MBA (FMS Delhi, 2016), 8 years covering Delhi NCR higher education",
    expertise: "MBA admissions, NIRF rankings, placement data verification",
  },
  {
    name: "Rahul Verma",
    role: "Senior Research Analyst, Engineering",
    credentials: "B.Tech (DTU Delhi, 2014), Former JAC Delhi counsellor",
    expertise: "JEE cutoffs, engineering college rankings, JAC Delhi counselling data",
  },
  {
    name: "Ananya Singh",
    role: "Content Lead, Medical & Science",
    credentials: "B.Sc. (Delhi University, 2018), Medical education researcher",
    expertise: "NEET counselling, AIIMS admission data, NAAC accreditation",
  },
  {
    name: "Vikram Nair",
    role: "Data & Research Lead",
    credentials: "B.Tech (NSUT Delhi, 2015), Data science background",
    expertise: "NIRF data analysis, placement statistics, fee structure research",
  },
]

const milestones = [
  { year: "2020", event: "CollegeDelhi founded to solve the information gap for Delhi college admissions" },
  { year: "2021", event: "Launched detailed college profiles for 50+ Delhi colleges with verified fee and placement data" },
  { year: "2022", event: "Reached 1 lakh monthly users seeking Delhi college guidance" },
  { year: "2023", event: "Launched AI College Finder tool for personalized recommendations" },
  { year: "2024", event: "Expanded to 108+ college profiles with NAAC grades and NIRF rankings" },
  { year: "2025", event: "Crossed 5 lakh students helped with Delhi college admissions counselling" },
]

export default function AboutPage() {
  const orgSchema = generateOrganizationSchema()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About CollegeDelhi</h1>
            <p className="text-blue-100 text-xl max-w-3xl mx-auto leading-relaxed">
              India&apos;s most trusted platform for discovering, comparing, and applying to the best colleges in Delhi NCR — trusted by 5 lakh+ students every year.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            CollegeDelhi was built to solve a single problem: <strong>Delhi has 900+ colleges, but finding accurate, unbiased information about them is extraordinarily difficult.</strong> Fee structures change every year. NIRF rankings shift. Placement claims are often inflated. For a student from outside Delhi navigating JAC Delhi counselling or CUET for the first time, the information landscape is confusing and often misleading.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our editorial team researches every claim before it goes live. NIRF ranks are sourced directly from the <strong>Ministry of Education&apos;s NIRF portal</strong>. NAAC grades are cross-checked against the NAAC website. Placement data is verified from official placement reports and AISHE data where available. Fee structures are updated at the start of each academic year from official college notices.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We do not accept payment for rankings or college listings. Every recommendation — whether in our AI Finder, comparison tools, or editorial guides — is based solely on verified data and editorial judgment.
          </p>
        </section>

        {/* Data Methodology */}
        <section className="bg-blue-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Methodology</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "NIRF Rankings", desc: "Sourced directly from the Ministry of Education NIRF portal (nirfindia.org). Updated annually after NIRF release, typically in August." },
                { title: "NAAC Grades", desc: "Cross-verified against the NAAC official database (naac.gov.in). Grades reflect the most recent accreditation cycle for each institution." },
                { title: "Fees & Placements", desc: "Fee structures collected from official college fee notices and admission brochures. Placement data verified from official placement reports published by colleges." },
                { title: "Entrance Exam Cutoffs", desc: "JEE/NEET/CAT cutoffs sourced from official counselling portals (JAC Delhi, JOSAA, MCC) and corroborated with college admission offices." },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-5 border border-blue-100">
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Data sources: <a href="https://www.nirfindia.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">NIRF India</a> · <a href="https://www.naac.gov.in" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">NAAC</a> · <a href="https://jacdelhi.admissions.nic.in" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">JAC Delhi</a> · <a href="https://josaa.nic.in" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">JOSAA</a> · <a href="https://mcc.nic.in" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">MCC</a>
            </p>
          </div>
        </section>

        {/* Editorial Team */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Editorial Team</h2>
          <p className="text-gray-600 mb-8">
            Every article, guide, and college profile on CollegeDelhi is written or reviewed by team members with direct, first-hand experience of Delhi&apos;s higher education system.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {teamMembers.map((member) => (
              <div key={member.name} className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm flex-shrink-0">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{member.name}</div>
                    <div className="text-xs text-blue-600 font-medium">{member.role}</div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-1"><strong>Background:</strong> {member.credentials}</p>
                <p className="text-xs text-gray-500"><strong>Covers:</strong> {member.expertise}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <div className="space-y-4">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-4 items-start">
                  <div className="w-14 text-right flex-shrink-0">
                    <span className="font-bold text-blue-700 text-sm">{year}</span>
                  </div>
                  <div className="w-0.5 bg-blue-200 self-stretch mx-1" />
                  <p className="text-gray-700 text-sm leading-relaxed pb-3">{event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            <div className="bg-blue-50 rounded-xl p-5 text-center">
              <div className="text-2xl mb-2"></div>
              <div className="font-semibold text-gray-900 mb-1">Editorial</div>
              <a href="mailto:support@collegedelhi.com" className="text-blue-600 text-sm hover:underline">support@collegedelhi.com</a>
            </div>
            <div className="bg-blue-50 rounded-xl p-5 text-center">
              <div className="text-2xl mb-2"></div>
              <div className="font-semibold text-gray-900 mb-1">Counselling</div>
              <a href="tel:+917753831118" className="text-blue-600 text-sm hover:underline">+91-7753831118</a>
            </div>
            <div className="bg-blue-50 rounded-xl p-5 text-center">
              <div className="text-2xl mb-2"></div>
              <div className="font-semibold text-gray-900 mb-1">Address</div>
              <span className="text-gray-600 text-sm">Connaught Place, New Delhi — 110001</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/counselling" className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors text-sm">
              Free Counselling Session
            </Link>
            <Link href="/colleges" className="px-6 py-3 border border-blue-200 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors text-sm">
              Browse All Colleges
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
