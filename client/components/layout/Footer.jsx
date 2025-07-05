import Link from 'next/link';
import { Code, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">TechFoundry</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted partner for end-to-end tech solutions. We deliver exceptional 
              web, mobile, AI, and cloud solutions for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm">snevare9@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">+91 7758875837</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">AI Solutions</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Cloud Services</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/admin" className="text-gray-400 hover:text-white transition-colors">Admin</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 FreelanceTeam. All rights reserved. Built with Next.js and love.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;