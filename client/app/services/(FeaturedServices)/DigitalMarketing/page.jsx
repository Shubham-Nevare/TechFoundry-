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
  Megaphone,
  Package,
  Palette,
  Rocket,
  Scissors,
  Plane,
  Layout,
  TrendingUp,
  Search,
  Cloud,
  PenTool,
  FileText,
} from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function DigitalMarketing() {
  return (
    <ServicePageTemplate
      icon={Megaphone}
      title="Digital Marketing"
      metaTitle="Digital Marketing Website Development | Agency & Freelancer Websites | Developous"
      metaDescription="Developous creates professional, conversion-driven websites for digital marketing agencies, freelancers, and businesses. Showcase services, case studies, and boost client inquiries."
      description="Your digital marketing website is more than just a portfolio — it’s a growth engine. At Developous, we design high-performing websites tailored for marketing agencies, freelancers, and consultancies who want to attract more clients, build trust, and stand out online. Our team focuses on creating visually appealing, user-friendly, and SEO-optimized websites that highlight your expertise and drive conversions. Whether you need a sleek landing page or a comprehensive site with multiple service offerings, Developous has the skills to deliver a solution that meets your unique needs."
      heroImage="/services_img/digital-marketing-Photoroom.png"
      mainTitle="Professional Websites for Digital Marketing Agencies & Freelancers"
      mainParagraph={`In the competitive world of digital marketing, having a professional and effective website is crucial for attracting clients and showcasing your expertise. At Developous, we specialize in creating custom websites tailored specifically for digital marketing agencies, freelancers, and consultants. Our websites are designed to highlight your services, case studies, and client success stories, helping you build credibility and grow your business.

        A well-designed digital marketing website not only serves as a portfolio but also acts as a powerful lead generation tool. We focus on creating user-friendly layouts, compelling content, and clear calls-to-action that encourage visitors to engage with your services. Whether you need a simple landing page or a comprehensive site with multiple service offerings, we have the expertise to deliver a solution that meets your needs.`}
      processTitle="Our Digital Marketing Website Development Process"
      processSteps={[
        {
          Icon: Lightbulb,
          title: "Understanding Your Brand & Goals",
          desc: "We start by learning about your agency’s mission, audience, and goals to build a website that reflects your brand personality and converts visitors into leads.",
        },
        {
          Icon: Layout,
          title: "Design & Content Strategy",
          desc: "We craft visually stunning layouts and write clear, persuasive content that showcases your services, results, and expertise in the best light.",
        },
        {
          Icon: Code,
          title: "Development & Integration",
          desc: "We build fast, SEO-friendly, and responsive websites with lead forms, analytics, and CRM integration — optimized for performance and conversion.",
        },
        {
          Icon: Rocket,
          title: "Testing, Launch & Optimization",
          desc: "We ensure every page loads fast, looks great on all devices, and is optimized for conversions — ready to generate leads from day one.",
        },
      ]}
      features={[
        "Modern, responsive design for all devices",
        "Lead-focused service pages with conversion forms",
        "Portfolio & case study showcase sections",
        "SEO-ready structure and content setup",
        "Integration with CRMs and marketing tools",
        "Blog setup for content marketing and SEO growth",
        "Analytics & conversion tracking implementation",
        "Fast-loading, secure, and scalable hosting setup",
      ]}
      serviceDetails={[
        ["Starting Price", "₹20,000"],
        ["Delivery Time", "2–3 weeks"],
        ["CMS Options", "WordPress / Next.js / Custom CMS"],
        ["Support", "3 months free maintenance"],
        ["Goal", "Lead generation & client acquisition"],
      ]}
      banner={{
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=60",
        title: "Showcase Your Marketing Power with a Modern Website",
        subtitle:
          "We design digital marketing websites that convert — highlight your expertise, attract clients, and grow your agency’s credibility online.",
        buttonText: "Start Your Project",
      }}
      faqs={[
        {
          q: "Who is this website ideal for?",
          a: "Our digital marketing website packages are designed for marketing agencies, freelancers, consultants, and startups offering SEO, PPC, or branding services.",
        },
        {
          q: "Can you include case studies or portfolio sections?",
          a: "Yes. We create custom portfolio layouts and case study pages that help showcase your success stories and client results.",
        },
        {
          q: "Is the website optimized for SEO?",
          a: "Absolutely. We build every site with proper meta tags, structured data, and fast performance to rank better on Google.",
        },
        {
          q: "Can I manage the website myself?",
          a: "Yes. You’ll get an easy-to-use CMS dashboard to update content, add blogs, and manage leads without needing code.",
        },
      ]}
      cta={{
        title: "Ready to Build a Website That Markets for You?",
        subtitle:
          "Let’s craft a high-converting digital marketing website that captures leads, builds authority, and fuels your growth.",
        button1: "Get a Free Quote",
        button2: "View Our Work",
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
