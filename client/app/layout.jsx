// app/layout.jsx

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://developous.com"),
  alternates: {
    canonical: "https://developous.com",
  },

  title: "Developous - Web, Mobile & AI Solutions",
  description:
    "Developous offers cutting-edge Web, Mobile, and AI development services. We design scalable digital products that empower businesses worldwide.",
  keywords:
    "Developous, Developus, web and mobile app development company, AI software solutions, custom web development, full-stack tech agency, SaaS product development, digital transformation partner, cloud application services, UI UX design studio, business automation software, startup technology solutions, IT consulting and support, AI chatbot development agency, software engineering experts",

  authors: [{ name: "Developous", url: "https://developous.com" }],
  robots: "index, follow",

  openGraph: {
    title: "Developous - Web, Mobile & AI Solutions",
    description:
      "End-to-end tech solutions for businesses. Developous builds modern, scalable systems with performance and reliability in mind.",
    type: "website",
    locale: "en_US",
    url: "https://developous.com",
    siteName: "Developous",
    images: [
      {
        url: "https://developous.com/logo_DT.png",
        width: 1200,
        height: 630,
        alt: "Developous - Web, Mobile & AI Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Developous - Web, Mobile & AI Solutions",
    description:
      "Developous offers Web, Mobile, and AI development services for businesses worldwide.",
    images: ["https://developous.com/logo_DT.png"],
    creator: "@Developous",
  },

  icons: {
    icon: "/logo_DT.ico", // ✅ Use .ico for browser tabs
    shortcut: "/logo_DT.png", // ✅ PNG for mobile & SEO
    apple: "/logo_DT.png", // ✅ iOS home screen
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ✅ Google Site Verification */}
        <meta
          name="google-site-verification"
          content="ssfJxf_KzpLqn74esKr2ntje3Qdiod5ru_olfp_NqhI"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />

        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Developous",
                url: "https://developous.com",
                logo: "https://developous.com/logo_DT.png",
                sameAs: [
                  "https://github.com/developous",
                  "https://www.linkedin.com/company/developous",
                  "https://www.instagram.com/developous.tech/",
                ],
                description:
                  "Developous is a full-service digital agency offering Web, Mobile, and AI solutions to empower businesses worldwide.",
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+91-7208475911",
                    contactType: "customer support",
                    areaServed: "Worldwide",
                    availableLanguage: ["English"],
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Developous",
                url: "https://developous.com",
                potentialAction: {
                  "@type": "SearchAction",
                  target:
                    "https://developous.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "ImageObject",
                url: "https://developous.com/logo_DT.png",
                width: 1200,
                height: 630,
                caption: "Developous - Web, Mobile & AI Solutions",
              },
            ]),
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
