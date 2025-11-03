"use client";
import {
  BarChart2,
  BookOpen,
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
  Home,
  Briefcase,
} from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function RealEstateWebsite() {
  return (
    <ServicePageTemplate
      icon={BarChart2}
      title="Real Estate Website"
      metaTitle="Real Estate Website Development | Developous"
      metaDescription="Build high-performance real estate websites with property listings, advanced search, and lead generation tools."
      description="Create a real estate website that converts visitors into clients. Showcase properties with rich visuals, search filters, and seamless inquiry features."
      heroImage="/services_img/Real_Estate_Website2-removebg.png"
      mainTitle="Custom Real Estate Website Development Services"
      mainParagraph={`Developous specializes in developing high-performing real estate websites that help agents, brokers, and agencies connect with potential buyers and sellers effortlessly. Our team designs visually engaging, easy-to-navigate platforms that make property browsing simple, fast, and interactive.
      
      The Developous team focuses on integrating essential features like advanced property search, map-based listings, CRM integration, and automated lead management — helping you capture and convert leads efficiently. Whether you’re showcasing residential, commercial, or rental properties, we deliver websites that reflect professionalism, build trust, and generate real results for your business.`}
      processTitle="What We Provide in Real Estate Website Development"
      processSteps={[
        { Icon: Lightbulb, title: "Market & Property Research", desc: "We understand your niche, audience, and target property segments to plan the ideal structure." },
        { Icon: Palette, title: "Interactive Property Design", desc: "Designing immersive listing pages with image galleries, maps, and filtering options for easy navigation." },
        { Icon: Code, title: "Advanced Search & CRM Integration", desc: "Developing robust property search tools, location-based mapping, and CRM systems for managing leads." },
        { Icon: BarChart2, title: "SEO & Conversion Optimization", desc: "Optimizing your website for search visibility and ensuring smooth lead capture for business growth." },
      ]}
      
      features={[
        "Advanced property search and filters",
        "Google Maps and location integration",
        "Lead capture and inquiry forms",
        "Admin dashboard for property management",
        "Mobile-friendly and SEO-optimized design",
      ]}
      serviceDetails={[
        ["Starting Price", "₹28,000"],
        ["Delivery Time", "3–5 weeks"],
        ["Support", "6 months free"],
        ["Guarantee", "100% Satisfaction"],
      ]}
      banner={{
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=60",
        title: "Showcase Properties that Sell.",
        subtitle: "Turn your real estate listings into engaging digital experiences that attract buyers.",
        buttonText: "Get a Free Quote",
      }}
      faqs={[
        { q: "Can I add new properties myself?", a: "Yes, you'll get a simple dashboard to manage all listings easily." },
        { q: "Can you integrate my CRM?", a: "Absolutely, we can integrate your preferred CRM like Zoho or HubSpot." },
      ]}
      cta={{
        title: "Grow Your Real Estate Business Online",
        subtitle: "Let’s create a high-performing website to attract and convert more clients.",
        button1: "Schedule a Free Demo",
        button2: "See Real Estate Projects",
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
