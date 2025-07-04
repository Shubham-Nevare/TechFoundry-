import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';
import ThemeToggle from '@/components/layout/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'FreelanceTeam - End-to-End Tech Solutions',
  description: 'Professional freelance team providing web, mobile, AI, cloud, and UI/UX solutions for businesses.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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