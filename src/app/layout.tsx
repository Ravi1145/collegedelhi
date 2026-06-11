import type { Metadata } from "next"
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import AIChatWidget from "@/components/ai/AIChatWidget"
import { CompareFloatingBar } from "@/components/ui/CompareButton"
import LeadWidgets from "@/components/leads/LeadWidgets"
import LeadBar from "@/components/leads/LeadBar"

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://www.collegedelhi.com"),
  title: {
    default: "Best Colleges in Delhi 2026 | CollegeDelhi - AI-Powered Discovery",
    template: "%s | CollegeDelhi",
  },
  description: "India's AI-powered college discovery portal for Delhi. Find and compare engineering, MBA, medical, and arts colleges in Delhi with real fees, placements, NAAC grades, and student reviews.",
  keywords: [
    "colleges in Delhi",
    "colleges in Delhi 2026",
    "best college in Delhi",
    "best college in Delhi 2026",
    "best colleges in Delhi 2026",
    "top colleges in Delhi 2026",
    "engineering colleges Delhi",
    "engineering colleges in Delhi 2026",
    "best engineering college in Delhi 2026",
    "mba colleges Delhi",
    "best mba colleges in Delhi 2026",
    "medical colleges Delhi 2026",
    "arts colleges in Delhi 2026",
    "bca colleges in Delhi 2026",
    "bba colleges in Delhi 2026",
    "naac a+ colleges in Delhi 2026",
    "nirf ranked colleges Delhi 2026",
    "college admission Delhi 2026",
    "du colleges Delhi 2026",
    "delhi university colleges",
    "ip university affiliated colleges 2026",
    "government colleges in Delhi 2026",
    "private colleges in Delhi 2026",
    "top 10 colleges in Delhi 2026",
    "colleges in Delhi with fees 2026",
    "low fee colleges Delhi 2026",
    "DTU Delhi admission 2026",
    "NSUT Delhi admission 2026",
    "AIIMS Delhi admission 2026",
    "FMS Delhi MBA admission",
  ],
  authors: [{ name: "CollegeDelhi Editorial Team" }],
  creator: "CollegeDelhi",
  publisher: "CollegeDelhi",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "CollegeDelhi",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 682,
        alt: "CollegeDelhi - Best Colleges in Delhi 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CollegeDelhi",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" className={`${plusJakarta.variable} ${dmSans.variable} h-full antialiased`}>
      <head>
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />
        <link rel="llms" href="/llms.txt" />
      </head>
      <body className="min-h-full flex flex-col font-dm-sans bg-white">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-700 text-white px-4 py-2 rounded z-50 font-semibold text-sm">
          Skip to main content
        </a>
        <LeadBar />
        <Header />
        <main id="main-content" className="flex-1 pt-14 lg:pt-24">
          {children}
        </main>
        <Footer />
        <AIChatWidget />
        <CompareFloatingBar />
        <LeadWidgets />
      </body>
    </html>
  )
}
