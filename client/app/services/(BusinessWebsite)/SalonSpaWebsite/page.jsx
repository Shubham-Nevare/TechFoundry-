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

export default function SalonSpaWebsite() {
  return (
    <ServicePageTemplate
      icon={Scissors}
      title="Salon & Spa Website"
      metaTitle="Salon & Spa Website Development | Developous"
      metaDescription="Build stunning and relaxing salon or spa websites with booking, service showcasing, and beauty gallery integrations."
      description="Create a luxurious online experience for your beauty business. Let clients explore your services, view your work, and book appointments effortlessly."
      heroImage="/services_img/Salon___Spa_Website-removebg.png"
      mainTitle="Custom Salon & Spa Website Development Services"
      mainParagraph={`Developous specializes in creating elegant, high-performing salon and spa websites that beautifully reflect your brand’s personality and deliver a relaxing, luxurious digital experience for your clients. We blend design, usability, and functionality to ensure every visitor feels the same warmth and care your salon provides in person.
      
      The Developous team crafts visually soothing, mobile-friendly websites equipped with features like online booking, service menus, gallery showcases, and customer testimonials. Whether you operate a boutique salon, spa retreat, or wellness center, our tailored web solutions enhance your digital presence, attract new clients, and build lasting relationships through seamless online experiences.`}
      processTitle="What We Provide in Salon & Spa Website Development"
      processSteps={[
        { Icon: Lightbulb, title: "Brand Discovery & Goals", desc: "We understand your brand identity, target clientele, and unique offerings to set the creative direction." },
        { Icon: Palette, title: "Aesthetic & Calming Design", desc: "Designing visually appealing layouts with soft tones, imagery, and modern typography that reflect your salon’s ambiance." },
        { Icon: Scissors, title: "Booking & Service Integration", desc: "Developing online appointment systems, detailed service menus, and client management portals." },
        { Icon: Rocket, title: "SEO & Local Promotion", desc: "Optimizing for mobile and local search visibility to help new clients find and book your services effortlessly." },
      ]}
      
      features={[
        "Online appointment booking system",
        "Service and pricing showcase",
        "Customer testimonials and gallery section",
        "Google Maps and contact form integration",
        "Mobile-friendly & SEO-optimized design",
      ]}
      serviceDetails={[
        ["Starting Price", "₹20,000"],
        ["Delivery Time", "2–4 weeks"],
        ["Support", "6 months free"],
        ["Guarantee", "100% Satisfaction"],
      ]}
      banner={{
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
        title: "Attract Clients with a Stylish Website",
        subtitle: "Your digital salon should feel as relaxing and elegant as your space.",
        buttonText: "Get a Free Quote",
      }}
      faqs={[
        { q: "Can clients book appointments online?", a: "Yes, we integrate a real-time booking system with notifications." },
        { q: "Can I update services and prices later?", a: "Absolutely — you'll have full access to manage your site anytime." },
      ]}
      cta={{
        title: "Give Your Salon a Digital Makeover",
        subtitle: "Let’s create a stunning online experience that grows your client base.",
        button1: "Book a Free Consultation",
        button2: "See Salon Website Demos",
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
