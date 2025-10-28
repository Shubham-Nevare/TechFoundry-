import Link from "next/link";
import {
  Code,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Github,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className=" space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <img
                src="/logo-developous.png"
                alt="Developous logo"
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Developous
              </span>
            </Link>

            <p className="text-gray-300 text-lg max-w-md leading-relaxed">
              Your trusted partner for end-to-end tech solutions. We deliver
              exceptional web, mobile, AI, and cloud solutions that drive
              business growth.
            </p>
          </div>

          {/* Mobile Links Grid */}
          <div className="md:hidden grid grid-cols-2 gap-8">
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  "Web Development",
                  "Mobile Apps",
                  "AI Solutions",
                  "Cloud Services",
                  "UI/UX Design",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Company
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Portfolio", href: "/portfolio" },
                  { name: "Case Studies", href: "/case-studies" },
                  { name: "Blog", href: "/blog" },
                  { name: "Contact", href: "/contact" },
                  { name: "Privacy Policy", href: "/privacy" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop Services */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile Apps",
                "AI Solutions",
                "Cloud Services",
                "UI/UX Design",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Company */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Contact Info */}
          <div className=" space-y-3">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Contact
            </h3>
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="bg-blue-600/20 p-2 rounded-lg">
                <Mail className="h-4 w-4 text-blue-400" />
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">
                contact@developous.com
              </span>
            </div>

            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="bg-green-600/20 p-2 rounded-lg">
                <Phone className="h-4 w-4 text-green-400" />
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">
                +91 72084 75911
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-purple-600/20 p-2 rounded-lg">
                <MapPin className="h-4 w-4 text-purple-400" />
              </div>
              <span className="text-gray-300">Mumbai, India</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {[
                {
                  icon: Github,
                  href: "https://github.com/developous",
                  color: "hover:text-gray-400",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/developous",
                  color: "hover:text-blue-500",
                  label: "LinkedIn",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/developous.tech/",
                  color: "hover:text-pink-400",
                  label: "Instagram",
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label} // ✅ accessible label
                  className={`p-2 bg-gray-800 rounded-lg transition-all hover:bg-gray-700 ${social.color}`}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />{" "}
                  {/* hides icon from screen reader */}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className=" justify-center items-center pt-8 border-t border-gray-800 space-y-4 sm:space-y-0">
          {/* Copyright */}
          <p className="text-gray-400 text-sm justify-center text-center">
            © 2025 Developous. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
