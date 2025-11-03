"use client";
import {
  Lightbulb,
  Code,
  Palette,
  Rocket,
  Megaphone,
  Briefcase,
  DollarSign,
  BookOpen,
  Heart,
  Handshake,
  Plane,
  Scissors,
  Package,
  BarChart,
  Search,
  Cloud,
  PenTool,
  FileText,
} from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function LandingPageService() {
  return (
    <ServicePageTemplate
      icon={Rocket}
      title="Landing Page Design"
      metaTitle="Landing Page Design Services | High-Converting Pages by Developous"
      metaDescription="Developous offers professional landing page design services focused on conversions, lead generation, and sales. Get a stunning, responsive landing page built to convert visitors into customers."
      description="Boost your marketing performance with Developous’s high-converting landing page design services. We create responsive, visually appealing, and conversion-optimized pages for campaigns, products, and lead generation."
      heroImage="/services_img/landing_page2-removebg-preview2.png"
      mainTitle="High-Converting Landing Page Design Services"
      mainParagraph={`A powerful landing page can make all the difference between a visitor and a customer. At Developous, we specialize in designing high-converting landing pages that capture attention, communicate your value proposition clearly, and drive measurable results. Whether it’s for lead generation, product launches, or ad campaigns, our team ensures every element—from visuals to copy—is optimized for performance.
      
      The Developous team focuses on conversion-driven layouts, persuasive call-to-actions, and responsive design principles to ensure your landing page delivers maximum ROI. We build landing pages tailored to your marketing objectives, helping you boost engagement, conversions, and overall campaign success.`}
      processTitle="What We Provide in Landing Page Design"
      processSteps={[
        {
          Icon: Lightbulb,
          title: "Market Research & Strategy",
          desc: "Understanding your target audience and campaign goals to create a landing page that converts effectively.",
        },
        {
          Icon: Palette,
          title: "Creative UI/UX Design",
          desc: "Designing visually appealing, intuitive, and responsive layouts that enhance user engagement and trust.",
        },
        {
          Icon: Code,
          title: "Custom Development",
          desc: "Implementing fast, SEO-friendly, and mobile-optimized landing pages integrated with your preferred marketing tools.",
        },
        {
          Icon: Rocket,
          title: "A/B Testing & Optimization",
          desc: "Testing variations to improve conversion rates, reduce bounce rates, and achieve continuous growth.",
        },
      ]}
      features={[
        "Conversion-Focused Landing Page Design",
        "Custom Layouts for Campaigns & Ads",
        "A/B Testing & Analytics Integration",
        "Responsive and Mobile-First Design",
        "Fast-Loading & SEO-Friendly Structure",
        "Integration with CRM & Marketing Tools",
        "Ongoing Optimization & Support",
      ]}
      serviceDetails={[
        ["Starting Price", "₹8,000/page"],
        ["Delivery Time", "3–5 business days"],
        ["Support", "Post-launch optimization & revisions"],
        ["Goal", "Higher conversions and campaign ROI"],
      ]}
      banner={{
        image:
          "https://images.unsplash.com/photo-1648134859186-a05fb609f41e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2060",
        title: "Convert Visitors into Customers",
        subtitle:
          "Developous designs landing pages that not only look stunning but are built to drive results and boost your ROI.",
        buttonText: "Get Your Landing Page Now",
      }}
      faqs={[
        {
          q: "What is a landing page used for?",
          a: "A landing page is designed to capture leads or drive specific actions like purchases, sign-ups, or downloads from marketing campaigns.",
        },
        {
          q: "Can you design landing pages for ad campaigns?",
          a: "Yes, Developous creates optimized landing pages for Google Ads, Facebook Ads, and other marketing platforms to maximize conversion rates.",
        },
        {
          q: "Will my landing page be mobile-friendly?",
          a: "Absolutely! All our landing pages are fully responsive and optimized for seamless performance across all devices.",
        },
        {
          q: "Do you provide analytics integration?",
          a: "Yes, we can integrate Google Analytics, Facebook Pixel, and conversion tracking tools to measure campaign performance.",
        },
      ]}
      cta={{
        title: "Let’s Build a Landing Page That Converts",
        subtitle:
          "Partner with Developous to design high-performing landing pages that turn your visitors into loyal customers.",
        button1: "Get a Free Design Consultation",
        button2: "Explore Web Design Services",
      }}
      OtherServices={[
        {
            icon: Megaphone,
            title: "Digital Marketing",
            href: "/services/DigitalMarketing",
          },
          {
            icon: Search,
            title: "SEO",
            href: "/services/SEO",
          },
          {
            icon: Briefcase,
            title: "Business Website",
            href: "/services/BusinessWebsite",
          },
          {
            icon: Code,
            title: "Software Development",
            href: "/services/software-development",
          },
          {
            icon: Lightbulb,
            title: "AI & Machine Learning",
            href: "/services/ai-ml",
          },
          {
            icon: Cloud,
            title: "Cloud Solutions",
            href: "/services/cloud-solutions",
          },
          {
            icon: PenTool,
            title: "UI/UX Design",
            href: "/services/ui-ux-design",
          },
          {
            icon: FileText,
            title: "Landing Page",
            href: "/services/landing-page",
          },
          {
            icon: Handshake,
            title: "Consulting",
            href: "/services/consulting",
          },
        
      ]}
    />
  );
}
