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
  Wrench,
} from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function ServicesWebsite() {
  return (
    <ServicePageTemplate
      icon={Wrench}
      title="Services Website"
      metaTitle="Service-Based Business Website Development | Developous"
      metaDescription="Create a professional service-based website that showcases your offerings, builds trust, and attracts more clients."
      description="We craft engaging service-based websites that help you stand out from competitors, convert visitors into leads, and clearly communicate your value to potential customers."
      heroImage="/portfolio-2048x1798.png"
      mainTitle="Custom Service-Based Website Development Services"
      mainParagraph={`Developous specializes in building high-impact websites for service-based businesses that aim to convert visitors into loyal clients. Whether you’re a consultant, agency, freelancer, or local service provider, our custom web solutions are designed to elevate your brand, highlight your expertise, and drive measurable results.
      
      The Developous team crafts websites that function as both a portfolio and a lead-generation powerhouse — combining strategic design, persuasive copy, and seamless functionality. From showcasing your services and testimonials to integrating booking forms and contact systems, we ensure every detail works together to build trust and generate inquiries. With responsive layouts and SEO optimization, your business stands out and connects with the right audience effortlessly.`}
      processTitle="What We Provide in Service-Based Website Development"
      processSteps={[
        { Icon: Lightbulb, title: "Business Understanding & Strategy", desc: "We dive deep into your services, goals, and target audience to create a strategy-driven website." },
        { Icon: Palette, title: "Professional Design & Brand Alignment", desc: "Designing a polished and trustworthy interface that reflects your expertise and builds confidence." },
        { Icon: Briefcase, title: "Lead Generation & Conversion Tools", desc: "Implementing inquiry forms, call scheduling, and engagement features to turn visitors into clients." },
        { Icon: Rocket, title: "Performance Optimization & Launch", desc: "Testing for speed, responsiveness, and conversion efficiency before launching your live site." },
      ]}
      
      features={[
        "Modern, responsive web design",
        "Service landing pages and call-to-actions",
        "Lead capture and inquiry forms",
        "SEO and performance optimization",
        "Integrated chat or booking options",
      ]}
      serviceDetails={[
        ["Starting Price", "₹14,999"],
        ["Delivery Time", "2–3 weeks"],
        ["Support", "6 months free updates"],
        ["Guarantee", "Performance & satisfaction assurance"],
      ]}
      banner={{
        image:
          "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=2000&q=60",
        title: "Showcase Your Services, Grow Your Clients",
        subtitle:
          "A results-driven website designed to convert visitors into loyal customers.",
        buttonText: "Get a Free Quote",
      }}
      faqs={[
        {
          q: "Can you add online booking or inquiry forms?",
          a: "Yes, we integrate advanced booking, inquiry, and contact systems to streamline customer engagement.",
        },
        {
          q: "Will my website be SEO optimized?",
          a: "Yes, we follow on-page SEO best practices to ensure high visibility on search engines.",
        },
        {
          q: "Can I edit content myself later?",
          a: "You’ll receive a CMS that allows you to easily manage and update services, images, and pricing.",
        },
      ]}
      cta={{
        title: "Build a Service Website That Converts",
        subtitle:
          "Turn your services into a powerful online presence with a professional, lead-focused website.",
        button1: "Start Your Project",
        button2: "View Our Work",
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
