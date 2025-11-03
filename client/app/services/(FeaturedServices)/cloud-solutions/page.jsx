"use client";
import {
  Cloud,
  Code,
  Globe,
  Lightbulb,
  Rocket,
  Shield,
  Server,
  BarChart,
  Megaphone,
  Briefcase,
  DollarSign,
  BookOpen,
  Heart,
  Handshake,
  Plane,
  Scissors,
  Package,
  PenTool,
  FileText,
  Search,
} from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function CloudSolutionsService() {
  return (
    <ServicePageTemplate
      icon={Cloud}
      title="Cloud Solutions & Infrastructure Services"
      metaTitle="Cloud Solutions & Infrastructure | Developous Cloud Services"
      metaDescription="Developous offers secure, scalable, and cost-effective cloud solutions. We specialize in cloud migration, management, and optimization to empower your digital transformation."
      description="Transform your business with Developous’s expert cloud solutions. From cloud migration to infrastructure optimization, we deliver secure, scalable, and high-performance cloud environments that drive innovation and efficiency. Our team specializes in AWS, Azure, and Google Cloud services, ensuring your cloud infrastructure aligns with your business goals and growth strategies."
      heroImage="/services_img/cloud-computiong-Photoroom.png"
      mainTitle="Empower Your Business with Cloud Solutions by Developous"
      mainParagraph={`In today’s digital-first world, cloud computing is the foundation of agility, scalability, and innovation. At Developous, we deliver reliable and efficient cloud solutions designed to enhance performance, reduce costs, and support your business growth. 

The Developous team helps organizations migrate, deploy, and manage cloud environments across platforms like AWS, Microsoft Azure, and Google Cloud. We focus on building secure, scalable, and future-ready infrastructures that streamline workflows and enable seamless collaboration.

Whether you’re moving from legacy systems or optimizing existing infrastructure, Developous ensures a smooth, secure, and high-performance cloud journey that aligns with your business goals.`}
      processTitle="What We Provide in Cloud Solutions"
      processSteps={[
        {
          Icon: Lightbulb,
          title: "Cloud Consultation & Strategy",
          desc: "We assess your business requirements, current systems, and long-term objectives to design a customized cloud adoption roadmap that drives efficiency and innovation.",
        },
        {
          Icon: Code,
          title: "Cloud Migration & Deployment",
          desc: "Developous ensures seamless migration of your data, apps, and workloads to leading platforms like AWS, Azure, or Google Cloud — with zero downtime and full data integrity.",
        },
        {
          Icon: Globe,
          title: "Cloud Integration & Optimization",
          desc: "We integrate cloud environments with your existing tools and optimize performance, scalability, and cost using smart automation and monitoring.",
        },
        {
          Icon: Rocket,
          title: "Cloud Management & Monitoring",
          desc: "The Developous team continuously manages and monitors your cloud infrastructure, ensuring uptime, security, and smooth performance 24/7.",
        },
        // {
        //   Icon: Shield,
        //   title: "Data Security & Disaster Recovery",
        //   desc: "We implement advanced cloud security protocols, backups, and recovery solutions to safeguard your business data and maintain continuity during any disruption.",
        // },
      ]}
      features={[
        "End-to-End Cloud Migration & Management",
        "AWS, Azure, and Google Cloud Expertise",
        "Secure, Scalable, and Cost-Efficient Solutions",
        "Cloud Integration with Existing Systems",
        "Automated Monitoring & Performance Optimization",
        "Data Protection & Disaster Recovery",
        "Custom Cloud Infrastructure Design",
      ]}
      serviceDetails={[
        ["Starting Price", "₹20,000/project"],
        ["Setup Duration", "1–3 weeks"],
        ["Support", "24/7 cloud monitoring & management"],
        ["Guarantee", "High availability & secure infrastructure"],
      ]}
      banner={{
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=60",
        title: "Modernize Your Infrastructure with Cloud Power",
        subtitle:
          "Adopt scalable, secure, and high-performance cloud solutions with Developous. Experience the future of digital transformation today.",
        buttonText: "Get Free Cloud Consultation",
      }}
      faqs={[
        {
          q: "Which cloud platforms do you work with?",
          a: "Developous specializes in major cloud platforms including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).",
        },
        {
          q: "Can you migrate our existing infrastructure to the cloud?",
          a: "Absolutely. Our team ensures a seamless and secure migration with minimal downtime and zero data loss.",
        },
        {
          q: "Do you offer ongoing cloud management and support?",
          a: "Yes. We provide continuous monitoring, maintenance, and optimization to ensure your cloud systems run efficiently and securely.",
        },
        {
          q: "How do you ensure cloud security?",
          a: "Developous implements multi-layered security, encryption, access control, and regular audits to protect your data and applications.",
        },
      ]}
      cta={{
        title: "Scale Smarter with Developous Cloud Solutions",
        subtitle:
          "Partner with Developous to build, optimize, and manage your cloud infrastructure for long-term success.",
        button1: "Request Free Consultation",
        button2: "Explore Software Development Services",
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
