// app/layout.jsx

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import ThemeToggle from "@/components/layout/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Developous - Web, Mobile & AI Solutions",
  description:
    "Developous provides web, mobile, AI, and cloud solutions for businesses worldwide.",
  keywords:
    "web development, mobile apps, AI solutions, cloud services, UI/UX design, software development",
  authors: [{ name: "Developous" }],
  robots: "index, follow",
  openGraph: {
    title: "Developous - Web, Mobile & AI Solutions",
    description: "Developous provides web, mobile, AI, and cloud solutions for businesses worldwide.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/logo-developous.svg",
    // apple: '/apple-touch-icon.png',
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Developous",
          "url": "https://www.developous.com",
          "logo": "https://www.developous.com/logo.png"
        }) }} />
        <Header />
        {/* <ThemeToggle /> */}
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
