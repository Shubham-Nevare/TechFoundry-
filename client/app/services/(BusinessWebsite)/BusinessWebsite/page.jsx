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
  Briefcase,
  Users,
  FileText,
  Shield,
} from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function BusinessWebsite() {
  return (
    <ServicePageTemplate
      icon={Briefcase}
      title="Business Website"
      metaTitle="Business Website Development | Developous"
      metaDescription="Professional business website development that helps you stand out, attract clients, and grow your brand online."
      description="We design and build powerful business websites that communicate your brand message, generate leads, and showcase your services effectively — helping you grow in the digital era."
      heroImage="/services_img/Business_Website-removebg.png"
      mainTitle="Professional Business Website Development Services"
      mainParagraph={`In today’s digital era, a professional business website is more than just an online presence — it’s the face of your brand, the first impression for potential clients, and a key driver for growth. At Developous, we specialize in building high-performing business websites that communicate trust, highlight your strengths, and convert visitors into loyal customers.
      
      Our team works closely with businesses of all sizes to design and develop websites that align with your goals and reflect your brand identity. Whether you’re a startup looking to establish credibility or an enterprise upgrading your digital presence, we create responsive, SEO-optimized, and visually stunning websites tailored to your needs.
      
      A well-crafted business website goes beyond design — it enhances visibility, builds brand authority, and simplifies customer interactions. From service showcases and lead generation tools to blog integration and analytics, we ensure your website becomes a complete growth engine for your business.`}
      
      processTitle="What We Include in Business Websites"
      processSteps={[
        {
          Icon: Briefcase,
          title: "Custom Business Design",
          desc: "We create modern, professional designs that align with your brand identity and industry standards.",
        },
        {
          Icon: Globe,
          title: "Responsive & SEO-Optimized Structure",
          desc: "Every website is built to perform flawlessly on all devices and optimized for search engines to enhance visibility.",
        },
        {
          Icon: Users,
          title: "Lead Generation & Contact Tools",
          desc: "Integration of inquiry forms, live chat, call-to-action buttons, and CRM tools to capture and convert leads.",
        },
        {
          Icon: FileText,
          title: "Service & Portfolio Pages",
          desc: "Showcase your services, projects, and success stories with organized layouts that engage visitors.",
        },
        {
          Icon: BarChart2,
          title: "Analytics & Performance Tracking",
          desc: "We integrate analytics dashboards to monitor traffic, conversions, and key performance metrics.",
        },
        {
          Icon: Shield,
          title: "Security & Maintenance",
          desc: "Regular updates, SSL integration, and backup systems ensure your website remains secure and stable.",
        },
      ]}
      
      features={[
        "Custom corporate website design",
        "Lead generation forms and contact management",
        "SEO optimization for business visibility",
        "Fast, secure, and scalable architecture",
        "CMS for easy content management",
      ]}
      serviceDetails={[
        ["Starting Price", "₹18,000"],
        ["Delivery Time", "2–4 weeks"],
        ["Support", "6 months free"],
        ["Guarantee", "100% Satisfaction"],
      ]}
      banner={{
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=60",
        title: "Build Trust. Drive Growth.",
        subtitle: "Establish a professional digital presence that attracts clients and builds credibility.",
        buttonText: "Get a Free Quote",
      }}
      faqs={[
        { q: "Is my website optimized for SEO?", a: "Yes, we include full on-page SEO optimization with every business site." },
        { q: "Can I update my content easily?", a: "Yes, you’ll get a CMS with full control over your text and images." },
        { q: "Do you provide hosting?", a: "We can recommend reliable hosting or set it up for you upon request." },
      ]}
      cta={{
        title: "Let’s Grow Your Business Online",
        subtitle: "Turn your business vision into a website that delivers results.",
        button1: "Book a Free Consultation",
        button2: "See Business Projects",
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
