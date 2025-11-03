"use client";
import {
  BarChart2,
  Code,
  Globe,
  Search,
  Lightbulb,
  Rocket,
  FileText,
  TrendingUp,
  Megaphone,
  PenTool,
  Briefcase,
  DollarSign,
  BookOpen,
  Heart,
  Handshake,
  Plane,
  Scissors,
  Package,
  BarChart,
  Cpu,
  Smartphone,
  Layers,
  Shield,
  Cloud,
} from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function SoftwareDevelopmentService() {
  return (
    <ServicePageTemplate
      icon={Code}
      title="Software Development"
      metaTitle="Custom Software Development Services | Developous"
      metaDescription="Developous provides end-to-end software development services — from web and mobile app creation to ERP, CRM, and custom enterprise solutions that accelerate your business growth."
      description="Transform your business operations with Developous’s custom software solutions. We design and develop scalable, secure, and high-performance applications tailored to your goals. From web and mobile apps to enterprise systems like ERP and CRM, our expert team delivers innovative software that drives efficiency and growth."
      heroImage="/services_img/laptop-work2-Photoroom2.png"
      mainTitle="Custom Software Development Services Tailored for Your Business"
      mainParagraph={`At Developous, we craft powerful, scalable, and innovative software solutions designed to meet your business goals. Our team of expert developers, designers, and strategists work together to deliver custom applications that simplify processes, enhance user experience, and drive measurable results.

      Whether you need a web application, mobile app, ERP system, or a fully integrated business solution, Developous ensures high-quality performance, security, and scalability. We leverage modern technologies and agile methodologies to deliver software that evolves with your business.

      Partner with Developous to turn your ideas into high-impact digital solutions that boost efficiency and productivity.`}
      processTitle="What We Provide in Software Development"
      processSteps={[
        {
          Icon: Lightbulb,
          title: "Custom Software Solutions",
          desc: "We design and build tailor-made applications to match your business requirements, ensuring flexibility and scalability.",
        },
        {
          Icon: Layers,
          title: "Web & Mobile App Development",
          desc: "Developous builds responsive web platforms and cross-platform mobile applications with seamless user experiences.",
        },
        {
          Icon: Cpu,
          title: "Enterprise Software (ERP & CRM)",
          desc: "From ERP to CRM, we create integrated systems that optimize workflow, automate operations, and enhance decision-making.",
        },
        {
          Icon: Shield,
          title: "Secure & Scalable Architecture",
          desc: "We prioritize data security and scalability, ensuring your software remains stable and safe as your business grows.",
        },
        {
          Icon: Rocket,
          title: "Ongoing Support & Maintenance",
          desc: "Developous provides regular updates, performance monitoring, and technical support for smooth, long-term operations.",
        },
      ]}
      features={[
        "Custom Web & Mobile App Development",
        "Enterprise Solutions (ERP, CRM, POS)",
        "API Development & System Integration",
        "UI/UX Design & Frontend Engineering",
        "Cloud Deployment & Infrastructure Setup",
        "Quality Assurance & Performance Testing",
        "Ongoing Maintenance & Technical Support",
      ]}
      serviceDetails={[
        ["Starting Price", "₹35,000/project"],
        ["Development Duration", "2–8 weeks (depending on project size)"],
        ["Support", "Comprehensive post-launch support & updates"],
        ["Technology Stack", "React, Node.js, Python, PHP, Flutter, AWS, and more"],
      ]}
      banner={{
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=2000&q=60",
        title: "Build Smarter Software with Developous",
        subtitle:
          "Empower your business with powerful, scalable, and secure software solutions tailored to your goals.",
        buttonText: "Get Free Project Consultation",
      }}
      faqs={[
        {
          q: "What type of software does Developous build?",
          a: "We develop a wide range of software — including web applications, mobile apps, ERP, CRM, POS systems, and custom business solutions.",
        },
        {
          q: "Can you integrate my new software with existing systems?",
          a: "Yes, Developous ensures seamless integration with your existing tools, databases, and third-party APIs for a unified ecosystem.",
        },
        {
          q: "Do you provide ongoing support after development?",
          a: "Absolutely! We offer long-term maintenance, updates, and performance monitoring to keep your software optimized.",
        },
        {
          q: "How do you ensure the security of the software?",
          a: "Developous follows best practices for data protection, encryption, and secure code implementation throughout development.",
        },
      ]}
      cta={{
        title: "Let’s Build Your Next Software Solution",
        subtitle:
          "Collaborate with Developous to design, develop, and launch high-performing software that drives real business results.",
        button1: "Get Free Project Quote",
        button2: "Explore Business Website Services",
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
