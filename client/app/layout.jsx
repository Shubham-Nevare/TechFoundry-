// app/layout.jsx

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import ThemeToggle from "@/components/layout/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.developous.com"),

  title: "Developous - Web, Mobile & AI Solutions",
  description:
    "Developous provides web, mobile, AI, and cloud solutions for businesses worldwide.",
  keywords:
    "web development, mobile apps, AI solutions, cloud services, UI/UX design, software development, Developous, Developlus,developus, digital web agency, digital agency company, tech solutions provider, custom software development, IT consulting services, technology partner, full-stack development, mobile app development company, AI and machine learning solutions, cloud computing services, DevOps and cloud infrastructure, web application development, e-commerce solutions, responsive web design, user experience design, digital transformation services, creative agencies near me, top digital agencies, best web development companies, leading mobile app developers, innovative AI solution providers, trusted cloud service providers, design and marketing agency, branding services, online marketing solutions, SEO services, social media marketing, content creation services, digital strategy consulting, growth hacking services, conversion rate optimization, email marketing services, PPC advertising services, web analytics and reporting, developer, develop website, develop app, develop software",
  authors: [{ name: "Developous" }],
  robots: "index, follow",

  openGraph: {
    title: "Developous - Web, Mobile & AI Solutions",
    description:
      "Developous provides web, mobile, AI, and cloud solutions for businesses worldwide.",
    type: "website",
    locale: "en_US",
    url: "https://www.developous.com",
    images: [
      {
        url: "https://www.developous.com/logo-developous.svg", // ✅ Full URL
        width: 1200,
        height: 630,
        alt: "Developous - Web, Mobile & AI Solutions",
      },
    ],
  },

  // ✅ (Optional but good for SEO)
  twitter: {
    card: "summary_large_image",
    title: "Developous - Web, Mobile & AI Solutions",
    description:
      "Developous provides web, mobile, AI, and cloud solutions for businesses worldwide.",
    images: ["https://www.developous.com/logo-developous.svg"],
    creator: "@Developous", // Replace if you have a Twitter handle
  },

  icons: {
    icon: "/logo-developous.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="ssfJxf_KzpLqn74esKr2ntje3Qdiod5ru_olfp_NqhI"
        />
        <meta itemProp="name" content="Developous" />
        <meta itemProp="url" content="https://www.developous.com" />
      </head>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Developous",
              url: "https://www.developous.com",
              logo: "https://www.developous.com/logo-developous.svg",
              sameAs: [
                "https://www.linkedin.com/company/developous/",
                "https://x.com/developous",
              ],
            }),
          }}
        />
        <Header />
        {/* <ThemeToggle /> */}
        <h1 className="hidden">Developous</h1>
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
