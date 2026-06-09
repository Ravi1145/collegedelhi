import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  workboxOptions: {
    disableDevLogs: true,
  },
});

const nextConfig: NextConfig = {
  turbopack: {},
  // ✅ Keep nodemailer server-side only — prevents 'fs' error in client bundles
  serverExternalPackages: ['nodemailer'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        dns: false,
        child_process: false,
      }
    }
    return config
  },
  images: {
    formats: ["image/webp", "image/avif"],
    qualities: [75, 85, 90],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image-static.collegedunia.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.collegedunia.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/admissions", destination: "/counselling", permanent: true },
      { source: "/admission", destination: "/counselling", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/contact", destination: "/counselling", permanent: true },
    ]
  },
  async headers() {
    return [
      // Tell Google to index all public pages + add Last-Modified for crawl freshness
      {
        source: "/((?!admin|api).*)",
        headers: [
          { key: "X-Robots-Tag", value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
          { key: "Last-Modified", value: new Date().toUTCString() },
        ],
      },
      // Block indexing of admin
      {
        source: "/admin/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      // NOTE: /_next/static cache headers intentionally omitted — Vercel sets
      // immutable cache-control on /_next/static automatically. Adding it here
      // triggers a Next.js warning and can break dev HMR.
      // Cache college & blog pages with ISR
      {
        source: "/colleges/:path*",
        headers: [
          { key: "Cache-Control", value: "public, s-maxage=300, stale-while-revalidate=600" },
        ],
      },
      {
        source: "/blog/:path*",
        headers: [
          { key: "Cache-Control", value: "public, s-maxage=300, stale-while-revalidate=600" },
        ],
      },
    ]
  },
};

export default withPWA(nextConfig);
