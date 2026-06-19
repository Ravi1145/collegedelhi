import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "https://www.collegedelhi.com"
  return {
    rules: [
      // Google — search + Gemini AI Overview
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Googlebot-Video",
          "Googlebot-News",
          "Google-Extended",      // Google Gemini / AI Overview training + citations
          "GoogleOther",          // Google experimental crawlers
          "AdsBot-Google",
        ],
        allow: "/",
      },
      // Microsoft — Bing + Copilot
      {
        userAgent: [
          "Bingbot",
          "msnbot",
          "BingPreview",
        ],
        allow: "/",
      },
      // OpenAI — ChatGPT search + browsing
      {
        userAgent: [
          "GPTBot",           // ChatGPT web search indexing
          "OAI-SearchBot",    // OpenAI search features
          "ChatGPT-User",     // ChatGPT live browsing
        ],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // Anthropic — Claude AI
      {
        userAgent: [
          "ClaudeBot",        // Claude web features + citations
          "anthropic-ai",     // Anthropic crawlers
          "Claude-Web",
        ],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // Perplexity AI
      {
        userAgent: [
          "PerplexityBot",    // Perplexity search + citations
          "Perplexity-User",
        ],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // Meta AI — Meta AI assistant + Facebook/Instagram AI
      {
        userAgent: [
          "meta-externalagent",   // Meta AI crawler
          "Meta-ExternalFetcher",
          "FacebookBot",
          "facebookexternalhit",
        ],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // Apple — Siri, Spotlight, Safari
      {
        userAgent: [
          "Applebot",
          "Applebot-Extended",    // Apple AI features
        ],
        allow: "/",
      },
      // Amazon — Alexa, AWS AI services
      {
        userAgent: [
          "Amazonbot",
        ],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // You.com AI search
      {
        userAgent: [
          "YouBot",
        ],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // DuckDuckGo — DuckAssist AI answers
      {
        userAgent: [
          "DuckDuckBot",
          "DuckAssistBot",
        ],
        allow: "/",
      },
      // ByteDance — TikTok AI
      {
        userAgent: [
          "Bytespider",
        ],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // Cohere AI
      {
        userAgent: [
          "cohere-ai",
        ],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // Diffbot — structured data extraction for AI
      {
        userAgent: [
          "Diffbot",
        ],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // Block training-only crawlers that don't provide search/citation benefit
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      // All other bots — standard access
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}
