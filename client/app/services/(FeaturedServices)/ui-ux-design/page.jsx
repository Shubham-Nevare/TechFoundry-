"use client";
import {
  Palette,
  PenTool,
  Code,
  Lightbulb,
  Rocket,
  Monitor,
  Globe,
  Megaphone,
  Briefcase,
  DollarSign,
  BookOpen,
  Heart,
  Handshake,
  Plane,
  Scissors,
  Package,
  Search,
  Cloud,
  FileText,
} from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function UIUXDesignService() {
  return (
    <ServicePageTemplate
      icon={PenTool}
      title="UI/UX Design"
      metaTitle="UI/UX Design Services | Elevate User Experience with Developous"
      metaDescription="Developous creates intuitive, visually stunning, and conversion-driven UI/UX designs that enhance digital experiences and strengthen brand identity."
      description="Transform your digital presence with Developous’s UI/UX Design Services. We craft beautiful, user-centered interfaces that blend creativity, functionality, and strategy to deliver exceptional user experiences."
      heroImage="/services_img/ui ux-Photoroom.png"
      mainTitle="Creative UI/UX Design Services to Enhance User Engagement"
      mainParagraph={`At Developous, we believe that great design is more than just visuals—it’s about creating experiences that delight users and drive results. Our UI/UX design team combines creativity, research, and user psychology to craft interfaces that are intuitive, responsive, and conversion-focused.

Whether you're launching a new digital product, redesigning an existing website, or building a mobile app, Developous ensures every interaction feels seamless and engaging. We focus on usability, accessibility, and brand consistency to deliver designs that leave a lasting impression.

Partner with Developous to transform your ideas into user-friendly, aesthetically powerful digital experiences that inspire trust and action.`}
      processTitle="What We Provide in UI/UX Design Services"
      processSteps={[
        {
          Icon: Lightbulb,
          title: "Research & Discovery",
          desc: "We begin by understanding your brand, target audience, and business goals through detailed research and analysis to guide our design direction.",
        },
        {
          Icon: Palette,
          title: "Wireframing & Prototyping",
          desc: "Developous creates low and high-fidelity wireframes to visualize user flow, ensuring functionality and layout align with user expectations.",
        },
        {
          Icon: Code,
          title: "Visual Design & Branding",
          desc: "Our designers craft stunning interfaces using modern design principles, color psychology, and typography to reflect your brand identity.",
        },
        {
          Icon: Monitor,
          title: "Interactive Prototyping & Testing",
          desc: "We create interactive prototypes to test usability, collect feedback, and refine experiences before final development.",
        },
        // {
        //   Icon: Rocket,
        //   title: "Design Handoff & Continuous Improvement",
        //   desc: "The Developous team delivers pixel-perfect design assets, style guides, and supports seamless handoff to development for flawless execution.",
        // },
      ]}
      features={[
        "User Research & Persona Development",
        "Wireframing & Interactive Prototyping",
        "UI/UX for Websites & Mobile Apps",
        "Custom Iconography & Visual Design Systems",
        "Usability Testing & Iterative Design",
        "Design Systems & Brand Guidelines",
        "Cross-Platform Consistency & Accessibility",
      ]}
      serviceDetails={[
        ["Starting Price", "₹15,000/project"],
        ["Design Duration", "1–2 weeks"],
        ["Support", "Post-design revisions & development collaboration"],
        ["Guarantee", "Pixel-perfect, user-tested designs"],
      ]}
      banner={{
        image:
          "https://media.istockphoto.com/id/1268368872/photo/the-web-designer-team-is-helping-to-design-applications-for-mobile-phones-ux-ui-designer.jpg?s=612x612&w=0&k=20&c=k3e0vp-lmzXO52A1mFSH4Bfs9lPJebUPSckDeSTuQhY=",
        title: "Design That Inspires and Performs",
        subtitle:
          "Create memorable digital experiences with Developous. From concept to final design, we make every pixel matter.",
        buttonText: "Start Your Design Project",
      }}
      faqs={[
        {
          q: "Do you design for both web and mobile?",
          a: "Yes, Developous designs responsive web interfaces and mobile app UI/UX that adapt beautifully across all devices.",
        },
        {
          q: "Can you redesign our existing website or app?",
          a: "Absolutely! We evaluate your current design, identify usability issues, and craft a refreshed experience that improves performance and engagement.",
        },
        {
          q: "What tools do you use for UI/UX design?",
          a: "We use leading tools such as Figma, Adobe XD, Sketch, and Illustrator for designing, prototyping, and collaboration.",
        },
        {
          q: "Do you provide development support after design?",
          a: "Yes. Our designers work closely with developers to ensure pixel-perfect implementation and design consistency during development.",
        },
      ]}
      cta={{
        title: "Craft Exceptional User Experiences with Developous",
        subtitle:
          "Partner with Developous to create designs that combine creativity, usability, and strategy — driving user engagement and brand success.",
        button1: "Request a Free Design Consultation",
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
