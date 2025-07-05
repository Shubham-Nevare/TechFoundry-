// app/layout.jsx

import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';
import ThemeToggle from '@/components/layout/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TechFoundry - End-to-End Tech Solutions',
  description: 'TechFoundry provides professional web, mobile, AI, cloud, and UI/UX solutions for startups, businesses, and entrepreneurs.',
  icons: {
    icon: '/logo2.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <Header />
        {/* <ThemeToggle /> */}
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
