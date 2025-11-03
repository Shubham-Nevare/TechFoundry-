"use client";
import {
  BarChart2,
  BookOpen,
  Briefcase,
  Calendar,
  Code,
  CreditCard,
  DollarSign,
  Globe,
  Handshake,
  Heart,
  Lightbulb,
  Map,
  Package,
  Palette,
  Plane,
  Rocket,
  Scissors,
  Search,
  ShoppingBag,
  Star,
} from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function TourTravelWebsite() {
  return (
    <ServicePageTemplate
      icon={Plane}
      title="Tour & Travel Website"
      metaTitle="Tour & Travel Website Development | Developous"
      metaDescription="Design dynamic travel websites that attract travelers, showcase destinations, and simplify bookings."
      description="Transform your travel business with a stunning and functional website that inspires adventure. From destination showcases to integrated booking — we build experiences that drive travelers to act."
      heroImage="/services_img/Tour___Travel_Website-removebg.png"
      mainTitle="Custom Tour & Travel Website Development Services"
      mainParagraph={`In the travel industry, a visually engaging and high-performing website is essential for attracting travelers and boosting bookings. At Developous, we create custom tour and travel websites that help agencies, operators, and hospitality brands stand out online. The Developous team focuses on building interactive, SEO-optimized, and conversion-driven websites that not only inspire wanderlust but also deliver seamless user experiences — from browsing destinations to booking trips.`}
      processTitle="What We Provide in Tour & Travel Websites"
      processSteps={[
        {
          Icon: Map,
          title: "Destination Showcasing",
          desc: "We design pages to beautifully highlight destinations, travel packages, and experiences with high-quality visuals and detailed itineraries.",
        },
        {
          Icon: Calendar,
          title: "Online Booking System",
          desc: "Developous integrates secure and easy-to-use booking systems with real-time availability and automated confirmations.",
        },
        {
          Icon: CreditCard,
          title: "Payment Gateway Integration",
          desc: "We set up multiple payment options including credit/debit cards, wallets, and international gateways for hassle-free transactions.",
        },
        {
          Icon: Search,
          title: "Tour Filtering & Search",
          desc: "Visitors can filter tours by destination, price, date, or category — improving navigation and booking efficiency.",
        },
        {
          Icon: Globe,
          title: "Multi-Language & Multi-Currency Support",
          desc: "Developous ensures global accessibility by adding language and currency conversion features for international travelers.",
        },
        {
          Icon: Star,
          title: "Customer Reviews & Testimonials",
          desc: "We include review and rating features to build trust and credibility for your travel services.",
        },
        {
          Icon: Rocket,
          title: "SEO & Performance Optimization",
          desc: "Our team optimizes site speed, structure, and content for better search visibility and smooth performance across all devices.",
        },
      ]}
      
      features={[
        "Tour package listing & filtering",
        "Online booking & payment integration",
        "Interactive destination galleries",
        "Travel blogs & customer reviews",
        "Multi-language and currency support",
      ]}
      serviceDetails={[
        ["Starting Price", "₹23,000"],
        ["Delivery Time", "3–5 weeks"],
        ["Support", "6 months free"],
        ["Guarantee", "100% Satisfaction"],
      ]}
      banner={{
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=60",
        title: "Inspire Journeys. Drive Bookings.",
        subtitle: "Showcase beautiful destinations and convert visitors into travelers.",
        buttonText: "Get a Free Quote",
      }}
      faqs={[
        { q: "Can I manage tour packages myself?", a: "Yes, we provide an admin dashboard to add or update packages anytime." },
        { q: "Do you include a booking system?", a: "Yes, your site can include booking and payment integration for travelers." },
        { q: "Will it work on all devices?", a: "Absolutely — your travel website will be fully responsive and optimized for all screens." },
      ]}
      cta={{
        title: "Let’s Build Your Travel Brand Online",
        subtitle: "Inspire wanderlust with a site designed to showcase destinations and drive bookings.",
        button1: "Book a Free Consultation",
        button2: "See Travel Projects",
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
