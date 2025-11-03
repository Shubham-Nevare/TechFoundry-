"use client";
import {
  BarChart2,
  BookOpen,
  Briefcase,
  Code,
  DollarSign,
  Globe,
  Handshake,
  Heart,
  Lightbulb,
  Package,
  Palette,
  Plane,
  Rocket,
  Scissors,
  ShoppingBag,
} from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function FinanceWebsite() {
  return (
    <ServicePageTemplate
      icon={DollarSign}
      title="Finance Website"
      metaTitle="Finance Website Development | Developous"
      metaDescription="Professional finance and investment website development with secure, trustworthy, and conversion-driven design."
      description="Establish a strong digital presence for your financial brand. We build websites for finance professionals, consultants, and institutions focused on trust, clarity, and conversion."
      heroImage="/services_img/Finance_Website-removebg.png"
      mainTitle="Custom Finance Website Development Services"
      mainParagraph={`A finance website is the digital face of your financial business, designed to build trust, showcase expertise, and provide clients with valuable insights and tools. At Developous, we create professional finance websites for investment firms, financial advisors, accountants, consultants, loan providers, and fintech startups. 
      
      Our finance websites include essential features such as service overviews, client portals, financial calculators, blogs for market insights, inquiry forms, and secure payment integrations. We ensure your website is user-friendly, mobile-responsive, and optimized for conversions — helping you attract clients, display credibility, and grow your financial brand online.`}
      processTitle="What We Include in Finance Websites"
      processSteps={[
        { Icon: Lightbulb, title: "Discovery & Compliance Research", desc: "We analyze your financial services, goals, and compliance standards before starting the design." },
        { Icon: Palette, title: "Design with Credibility", desc: "Crafting modern, clean, and trustworthy layouts that reflect your financial expertise and reliability." },
        { Icon: Code, title: "Development & Data Integration", desc: "Building fast, secure websites with tools like ROI calculators, inquiry forms, and CRM integrations." },
        { Icon: Rocket, title: "Optimization & Go Live", desc: "Testing, optimizing for SEO and speed, and launching your finance website for maximum performance." },
      ]}
      
      features={[
        "Financial calculators and data visualization",
        "Secure contact and lead forms",
        "Blog and insights section for investors",
        "SEO and compliance-ready structure",
        "Mobile-responsive and performance optimized",
      ]}
      serviceDetails={[
        ["Starting Price", "₹25,000"],
        ["Delivery Time", "3–5 weeks"],
        ["Support", "6 months free"],
        ["Guarantee", "100% Satisfaction"],
      ]}
      banner={{
        image: "https://images.unsplash.com/photo-1539009139598-75df7c89734d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2093",
        title: "Inspire Trust. Drive Conversions.",
        subtitle: "Launch a finance website that builds credibility and attracts clients confidently.",
        buttonText: "Get a Free Quote",
      }}
      faqs={[
        { q: "Can you build a site for financial advisors?", a: "Yes, we design custom websites for advisors, accountants, and consultants." },
        { q: "Is it secure and compliant?", a: "Absolutely. We follow best practices for data protection, SSL, and content compliance." },
        { q: "Can you integrate lead capture tools?", a: "Yes, we include CRM and lead form integrations for easy client management." },
      ]}
      cta={{
        title: "Build a Trusted Finance Website Today",
        subtitle: "Empower your firm with a website that drives leads and builds credibility.",
        button1: "Book a Free Consultation",
        button2: "See Finance Projects",
      }}
      OtherServices={[
        { icon: Briefcase, title: "Business Website", href: "/services/BusinessWebsite" },
        { icon: BarChart2, title: "Real Estate Website", href: "/services/RealEstateWebsite" },
        { icon: BookOpen, title: "Educational Website", href: "/services/EducationalWebsite" },
        { icon: Heart, title: "Healthcare Website", href: "/services/HealthcareWebsite" },
        { icon: Plane, title: "Tour & Travel Website", href: "/services/TourTravelWebsite" },
        { icon: Handshake, title: "NGO Website", href: "/services/NGO-Website" },
        { icon: Scissors, title: "Salon & Spa Website", href: "/services/SalonSpaWebsite" },
        { icon: Package, title: "Hotel Website", href: "/services/HotelWebsite" },
        { icon: DollarSign, title: "Finance Website", href: "/services/FinanceWebsite" },
        { icon: Globe, title: "E-Commerce Website", href: "/services/ECommerceWebsite" },
      ]}
    />
  );
}
