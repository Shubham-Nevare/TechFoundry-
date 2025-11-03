"use client";
import {
  BarChart2,
  BookOpen,
  Briefcase,
  ClipboardList,
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
  Search,
  Shield,
  ShoppingBag,
  Users,
  Video,
} from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function EducationalWebsite() {
  return (
    <ServicePageTemplate
      icon={BookOpen}
      title="Educational Website"
      metaTitle="Educational Website Development | Developous"
      metaDescription="Build interactive educational platforms with course management, e-learning tools, and student dashboards."
      description="Empower your institute with a dynamic educational website featuring online classes, course modules, and student engagement tools."
       heroImage="/services_img/Educational_Website-removebg.png"
       mainTitle="Custom Educational Website Development Services"
       mainParagraph={`In today’s digital age, having a robust educational website is essential for institutions and educators looking to expand their reach and enhance the learning experience. At Developous, we specialize in creating custom educational websites that provide seamless access to course materials, facilitate online learning, and engage students effectively.
       
       Our team of expert designers and developers work closely with schools, colleges, coaching centers, and e-learning startups to build responsive, high-performance platforms that simplify education delivery. Whether you’re launching an online course platform or upgrading your institution’s website, we ensure your digital presence supports both learning and growth.`}
       
       processTitle="What We Include in Educational Websites"
       processSteps={[
         {
           Icon: BookOpen,
           title: "Course & Curriculum Management",
           desc: "We build systems to manage courses, lessons, modules, and schedules — making it easy for administrators and teachers to organize learning materials efficiently.",
         },
         {
           Icon: Users,
           title: "Student & Teacher Dashboards",
           desc: "Interactive dashboards that allow teachers to manage assignments, track performance, and communicate directly with students through secure logins.",
         },
         {
           Icon: Video,
           title: "E-Learning Integration",
           desc: "Integration with online learning tools like Zoom, Google Meet, or custom video platforms for live and recorded sessions.",
         },
         {
           Icon: ClipboardList,
           title: "Exams, Results & Certificates",
           desc: "Automated test modules, result generation, and digital certificate distribution to streamline evaluation processes.",
         },
        
       ]}
       
      features={[
        "Course and student management system",
        "Online payment integration for courses",
        "Virtual classroom integration",
        "Teacher and student dashboards",
        "Announcements and notification system",
      ]}
      serviceDetails={[
        ["Starting Price", "₹22,000"],
        ["Delivery Time", "3–5 weeks"],
        ["Support", "6 months free"],
        ["Guarantee", "100% Satisfaction"],
      ]}
      banner={{
        image: "https://images.unsplash.com/photo-1642054220431-649c53b0d3de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
        title: "Empower Learning with Technology.",
        subtitle: "Create an online education platform that inspires and connects learners globally.",
        buttonText: "Get a Free Quote",
      }}
      faqs={[
        { q: "Can we upload video courses?", a: "Yes, you can upload video lectures, PDFs, and quizzes easily." },
        { q: "Is it suitable for schools and universities?", a: "Yes, we customize solutions for both institutions and individual educators." },
      ]}
      cta={{
        title: "Build Your E-Learning Platform Today",
        subtitle: "Let’s transform your educational vision into a digital learning experience.",
        button1: "Book a Free Consultation",
        button2: "See Educational Projects",
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
