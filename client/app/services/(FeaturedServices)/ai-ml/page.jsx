"use client";
import {
  Brain,
  Code,
  Database,
  Cpu,
  BarChart,
  Rocket,
  Lightbulb,
  TrendingUp,
  Megaphone,
  Briefcase,
  Search,
  DollarSign,
  BookOpen,
  Heart,
  Plane,
  Handshake,
  Scissors,
  Package,
  Layers,
  Cloud,
  PenTool,
  FileText,
} from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function AIMLDevelopmentService() {
  return (
    <ServicePageTemplate
      icon={Brain}
      title="AI & Machine Learning"
      metaTitle="AI & ML Development Services | Developous"
      metaDescription="Developous delivers cutting-edge AI and Machine Learning solutions to help businesses automate, analyze, and innovate using data-driven intelligence."
      description="Empower your business with smart, data-driven AI and ML solutions from Developous. We build intelligent systems that automate workflows, predict trends, and enhance decision-making. From chatbots to predictive analytics, our custom AI services help you stay ahead in the digital age."
      heroImage="/services_img/ali ml-Photoroom.png"
      mainTitle="Custom AI & Machine Learning Development Services"
      mainParagraph={`At Developous, we help businesses harness the power of Artificial Intelligence and Machine Learning to transform operations and drive innovation. Our team of AI engineers and data scientists design intelligent systems that analyze data, predict outcomes, and automate complex business processes.

      From chatbots and recommendation engines to predictive analytics and computer vision applications — Developous builds AI-powered solutions tailored to your unique business goals. We use advanced ML algorithms, neural networks, and automation techniques to make your systems smarter and more efficient.

      Partner with Developous to bring intelligence, automation, and innovation to your organization through custom AI and ML solutions.`}
      processTitle="What We Provide in AI & ML Development"
      processSteps={[
        {
          Icon: Lightbulb,
          title: "AI Strategy & Consultation",
          desc: "We assess your business requirements and identify opportunities to implement AI-driven automation and intelligence.",
        },
        {
          Icon: Database,
          title: "Data Collection & Model Training",
          desc: "Developous collects, cleans, and processes data to train accurate, scalable, and performance-optimized ML models.",
        },
        {
          Icon: Cpu,
          title: "Custom AI Solution Development",
          desc: "We build tailored AI tools such as chatbots, recommendation systems, predictive analytics dashboards, and image recognition software.",
        },
        {
          Icon: BarChart,
          title: "Integration & Deployment",
          desc: "Seamlessly integrating AI models into your software systems, apps, or platforms for real-time intelligence and automation.",
        },
        // {
        //   Icon: Rocket,
        //   title: "Performance Optimization & Support",
        //   desc: "Developous provides continuous model improvement, monitoring, and updates for consistent accuracy and reliability.",
        // },
      ]}
      features={[
        "Custom Machine Learning Model Development",
        "Predictive Analytics & Data Visualization",
        "AI-Powered Chatbots & Virtual Assistants",
        "Computer Vision & Image Recognition",
        "Natural Language Processing (NLP)",
        "Automation & Process Optimization",
        "Cloud AI Integration (AWS, Azure, Google AI)",
      ]}
      serviceDetails={[
        ["Starting Price", "₹45,000/project"],
        ["Development Duration", "3–10 weeks (depending on project scope)"],
        ["Support", "Continuous model updates & performance tracking"],
        ["Technology Stack", "Python, TensorFlow, PyTorch, OpenAI API, Scikit-learn, AWS AI"],
      ]}
      banner={{
        image:
          "https://plus.unsplash.com/premium_photo-1701113010483-967a6ab8ba01?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932",
        title: "Build Smarter with AI & Machine Learning",
        subtitle:
          "Leverage the power of AI to automate, optimize, and accelerate your business with Developous’s intelligent solutions.",
        buttonText: "Get Free AI Consultation",
      }}
      faqs={[
        {
          q: "What industries do you provide AI/ML solutions for?",
          a: "Developous provides AI & ML solutions across industries including healthcare, finance, real estate, eCommerce, and education.",
        },
        {
          q: "Can AI integrate with my existing software?",
          a: "Yes, we integrate AI models seamlessly with your current systems, CRM, ERP, or web platforms for enhanced functionality.",
        },
        {
          q: "Do you provide AI maintenance and model retraining?",
          a: "Absolutely. Developous offers ongoing model monitoring, retraining, and optimization to ensure long-term performance.",
        },
        {
          q: "How do you ensure data privacy in AI projects?",
          a: "We follow strict data security protocols, anonymization methods, and compliance with global standards like GDPR and ISO.",
        },
      ]}
      cta={{
        title: "Let’s Build Intelligent Solutions Together",
        subtitle:
          "Partner with Developous to create smart, automated systems that transform your business with the power of AI & ML.",
        button1: "Get AI Project Quote",
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
