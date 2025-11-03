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
  Users,
} from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function NGOWebsite() {
  return (
    <ServicePageTemplate
      icon={Handshake}
      title="NGO Website"
      metaTitle="NGO Website Development | Developous"
      metaDescription="Design impactful NGO websites that inspire donations, attract volunteers, and spread awareness for your cause."
      description="We build professional, heart-driven NGO websites that amplify your mission, connect donors, and inspire positive change through storytelling and design."
      heroImage="/services_img/NGO_Website2-removebg.png"
      mainTitle="Custom NGO Website Development Services"
      mainParagraph={`Developous specializes in building impactful and purpose-driven NGO websites that help organizations raise awareness, connect with supporters, and increase donations. Our team crafts platforms that beautifully tell your story, highlight your projects, and motivate visitors to take action.
      
      The Developous team collaborates closely with NGOs of all sizes — from small community-based groups to large international organizations — to create websites that reflect your mission, showcase achievements, and simplify engagement through volunteer registrations, donation systems, and event updates. We focus on clean design, strong storytelling, and user-friendly functionality to ensure your website inspires trust and long-term support.`}
      processTitle="What We Provide in NGO Website Development"
      processSteps={[
        { Icon: Lightbulb, title: "Purpose-Driven Design", desc: "We create layouts and visuals that communicate your mission clearly and emotionally." },
        { Icon: Palette, title: "Donation & Fundraising Tools", desc: "Integration of secure online donation systems and recurring contribution options." },
        { Icon: Code, title: "Volunteer & Event Management", desc: "Custom forms and dashboards for volunteer registration, event tracking, and campaign updates." },
        { Icon: Rocket, title: "SEO & Outreach Optimization", desc: "We optimize your website for search visibility and social media engagement to attract more supporters." },
      ]}
      
      features={[
        "Donation & fundraising integration (Razorpay, PayPal, etc.)",
        "Volunteer registration forms",
        "Events & campaign management system",
        "Impact stories & media gallery",
        "SEO-optimized and mobile-responsive design",
      ]}
      serviceDetails={[
        ["Starting Price", "₹20,000"],
        ["Delivery Time", "2–4 weeks"],
        ["Support", "6 months free"],
        ["Guarantee", "100% Satisfaction"],
      ]}
      banner={{
        image: "https://i0.wp.com/ketto.blog/wp-content/uploads/2022/08/shutterstock_1797442786-min.jpg?resize=1536%2C865&ssl=1",
        title: "Empower Your Mission Online",
        subtitle: "Inspire action and donations with a website designed to make a difference.",
        buttonText: "Start Your NGO Website",
      }}
      faqs={[
        { q: "Can I accept donations online?", a: "Yes, we integrate secure and user-friendly donation gateways for NGOs." },
        { q: "Will I be able to update campaigns myself?", a: "Absolutely — our CMS allows easy management of content and updates." },
        { q: "Do you provide multilingual support?", a: "Yes, we can add multiple languages for broader reach." },
      ]}
      cta={{
        title: "Let’s Build an Impactful NGO Website",
        subtitle: "Spread your message and inspire the world with a strong digital presence.",
        button1: "Book a Free Consultation",
        button2: "View NGO Projects",
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
