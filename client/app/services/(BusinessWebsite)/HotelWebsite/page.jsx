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

export default function HotelWebsite() {
  return (
    <ServicePageTemplate
      icon={Package}
      title="Hotel Website"
      metaTitle="Hotel Website Development | Developous"
      metaDescription="Create an elegant hotel website with room booking, gallery, and reservation management features."
      description="Deliver a seamless online experience for your guests — from exploring rooms to confirming bookings — all through a stylish and responsive website."
      heroImage="/services_img/Hotel_Website-removebg.png"
      mainTitle="Custom Hotel Website Development Services"
      mainParagraph={`Developous specializes in creating elegant and conversion-focused hotel websites that help hospitality businesses increase direct bookings and enhance guest engagement. Our team designs and develops hotel websites for resorts, lodges, villas, and boutique stays — tailored to highlight each property’s unique experience. 
      
      The Developous team focuses on integrating essential booking functionalities, real-time availability, secure payment options, and visually rich room showcases. We ensure your website reflects your brand’s hospitality while offering a seamless user journey across all devices.`}
      processTitle="What We Provide in Hotel Website Development"
      processSteps={[
        { Icon: Lightbulb, title: "Responsive & Modern Design", desc: "We design stunning, mobile-friendly layouts that visually represent your property and attract potential guests." },
        { Icon: Palette, title: "Online Booking System", desc: "Integration of real-time booking engines, calendar management, and instant payment options for convenience." },
        { Icon: Code, title: "Property Management Features", desc: "Tools to manage room listings, pricing, availability, and guest inquiries with ease." },
        { Icon: Rocket, title: "SEO & Speed Optimization", desc: "We optimize your website for fast performance and high visibility on search engines to drive more direct bookings." },
      ]}
      
      features={[
        "Online booking and room management system",
        "Image galleries and virtual tour integration",
        "Dynamic pricing and availability calendar",
        "Customer reviews and contact form",
        "Multi-language and SEO support",
      ]}
      serviceDetails={[
        ["Starting Price", "₹30,000"],
        ["Delivery Time", "3–6 weeks"],
        ["Support", "6 months free"],
        ["Guarantee", "100% Satisfaction"],
      ]}
      banner={{
        image: "https://images.unsplash.com/photo-1714150476483-ced60cc1acfc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
        title: "Enhance Guest Experience Online",
        subtitle: "Turn your hotel’s digital presence into a booking magnet.",
        buttonText: "Get a Free Quote",
      }}
      faqs={[
        { q: "Can I manage bookings directly?", a: "Yes, you’ll have a dashboard to manage rooms, rates, and reservations." },
        { q: "Do you integrate payment gateways?", a: "Yes, we can connect PayPal, Razorpay, and Stripe for seamless payments." },
      ]}
      cta={{
        title: "Build a Hospitality Website That Converts",
        subtitle: "Let’s create a beautiful, high-converting website that fills your rooms faster.",
        button1: "Book a Free Consultation",
        button2: "See Hotel Projects",
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
