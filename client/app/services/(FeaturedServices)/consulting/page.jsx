"use client";
import {
  Lightbulb,
  Briefcase,
  BarChart,
  Handshake,
  Rocket,
  Code,
  Megaphone,
  DollarSign,
  BookOpen,
  Heart,
  Plane,
  Scissors,
  Package,
  Search,
  Cloud,
  PenTool,
  FileText,
} from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function ConsultingService() {
  return (
    <ServicePageTemplate
      icon={Briefcase}
      title="Consulting Services"
      metaTitle="Business Consulting Services | Expert Solutions by Developous"
      metaDescription="Developous offers professional business consulting services to help you improve strategy, streamline operations, and achieve long-term growth. Get expert guidance today."
      description="Transform your business with Developous’s expert consulting services. We help organizations refine strategy, boost performance, and embrace digital transformation to stay competitive in today’s market."
      heroImage="/services_img/laptop-work2-Photoroom2.png"
      mainTitle="Professional Business Consulting Services"
      mainParagraph={`In an evolving business environment, having the right guidance and strategy is essential for sustainable success. At Developous, we provide tailored consulting services that help businesses optimize operations, enhance productivity, and achieve measurable growth. Whether you're a startup or an established enterprise, our experienced consultants collaborate with you to create customized solutions that align with your vision and objectives.
      
      The Developous team specializes in business strategy, process improvement, digital transformation, and performance optimization. Our goal is to empower you with the insights, tools, and frameworks needed to make data-driven decisions and scale your business effectively.`}
      processTitle="What We Provide in Consulting Services"
      processSteps={[
        {
          Icon: Lightbulb,
          title: "Business Analysis & Strategy Development",
          desc: "We analyze your business model, market position, and competition to develop a strategy tailored to your growth goals.",
        },
        {
          Icon: BarChart,
          title: "Operational & Process Optimization",
          desc: "Identifying inefficiencies and implementing best practices to streamline workflows and improve productivity.",
        },
        {
          Icon: Handshake,
          title: "Digital Transformation Consulting",
          desc: "Helping your business adopt new technologies, automation, and data-driven solutions to stay ahead in the digital era.",
        },
        {
          Icon: Rocket,
          title: "Growth & Performance Monitoring",
          desc: "We track key performance metrics and continuously refine strategies for sustainable long-term growth.",
        },
      ]}
      features={[
        "Comprehensive Business Analysis",
        "Strategic Planning & Execution",
        "Operational Efficiency Consulting",
        "Digital Transformation Guidance",
        "Marketing & Financial Strategy Support",
        "Performance Monitoring & Reporting",
        "Customized Solutions for Startups & Enterprises",
      ]}
      serviceDetails={[
        ["Starting Price", "₹15,000/project"],
        ["Consultation Mode", "Online / On-site"],
        ["Support", "Ongoing strategic guidance & reporting"],
        ["Goal", "To enhance efficiency and accelerate growth"],
      ]}
      banner={{
        image:
          "https://images.unsplash.com/photo-1740818576269-2e6e20dbf7f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
        title: "Empower Your Business with Expert Consulting",
        subtitle:
          "Partner with Developous to refine your strategy, improve operations, and drive measurable business success.",
        buttonText: "Book a Free Consultation",
      }}
      faqs={[
        {
          q: "What industries do you provide consulting for?",
          a: "Developous provides consulting services across various sectors including technology, finance, healthcare, education, real estate, and digital services.",
        },
        {
          q: "Can you help startups with business planning?",
          a: "Absolutely! We help startups with business model design, strategy development, and digital roadmap planning for sustainable growth.",
        },
        {
          q: "Do you offer digital transformation consulting?",
          a: "Yes, Developous helps businesses adopt automation, analytics, and AI-driven strategies to modernize their operations.",
        },
        {
          q: "What’s included in your consulting service?",
          a: "Our consulting includes market analysis, process optimization, growth planning, and performance tracking tailored to your business needs.",
        },
      ]}
      cta={{
        title: "Let’s Build a Stronger Business Together",
        subtitle:
          "Partner with Developous for strategic consulting that accelerates growth and ensures long-term success.",
        button1: "Schedule a Free Consultation",
        button2: "Explore Business Services",
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
