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

export default function HealthcareWebsite() {
  return (
    <ServicePageTemplate
      icon={Heart}
      title="Healthcare Website"
      metaTitle="Healthcare Website Development | Developous"
      metaDescription="Build reliable, patient-focused healthcare websites that enhance credibility, provide information, and drive appointment bookings."
      description="We create secure and user-friendly healthcare websites for hospitals, clinics, and doctors — focusing on patient trust, clarity, and accessibility."
      heroImage="/services_img/Healthcare_Website-removebg.png"
      mainTitle="Custom Healthcare Website Development Services"
      mainParagraph={`A healthcare website plays a crucial role in connecting patients with medical professionals, clinics, and hospitals. At Developous, we build custom healthcare websites designed to enhance patient engagement, streamline appointment bookings, and provide easy access to medical information. 
      
      We specialize in developing websites for hospitals, clinics, doctors, diagnostic centers, pharmacies, and telemedicine providers. Our healthcare websites include features like online appointment systems, patient portals, service listings, doctor profiles, health blogs, and secure communication tools — all designed to improve trust, accessibility, and care delivery.`}
      processTitle="What We Include in Healthcare Websites"
      processSteps={[
        { Icon: Lightbulb, title: "Healthcare Requirement Analysis", desc: "We study your medical services, audience, and compliance needs to plan the right website solution." },
        { Icon: Palette, title: "Patient-Focused Design", desc: "Designing intuitive, accessible layouts that make it easy for patients to find information and book services." },
        { Icon: Code, title: "Development & System Integration", desc: "Building secure platforms with appointment systems, patient management tools, and EMR integrations." },
        { Icon: Rocket, title: "Testing, Compliance & Launch", desc: "Ensuring HIPAA compliance, site speed, and functionality before launching your healthcare website." },
      ]}
      
      features={[
        "Online appointment booking system",
        "Doctor profiles & specialization pages",
        "Health blogs and patient resources",
        "HIPAA-compliant data protection",
        "Mobile-friendly and ADA-accessible design",
      ]}
      serviceDetails={[
        ["Starting Price", "₹22,000"],
        ["Delivery Time", "3–5 weeks"],
        ["Support", "6 months free"],
        ["Guarantee", "100% Satisfaction"],
      ]}
      banner={{
        image: "https://images.unsplash.com/photo-1580115465903-0e4a824a4e9a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
        title: "Care. Trust. Technology.",
        subtitle: "Build a digital experience that connects healthcare providers and patients with confidence.",
        buttonText: "Get a Free Quote",
      }}
      faqs={[
        { q: "Can patients book appointments online?", a: "Yes, we include an integrated appointment booking system." },
        { q: "Is the website secure for patient data?", a: "Absolutely — we follow healthcare data compliance and SSL security standards." },
        { q: "Can I update my content easily?", a: "Yes, we provide a user-friendly CMS for managing your content and profiles." },
      ]}
      cta={{
        title: "Create a Website that Builds Patient Trust",
        subtitle: "Deliver healthcare digitally with a platform designed for care and credibility.",
        button1: "Book a Free Consultation",
        button2: "View Healthcare Projects",
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
