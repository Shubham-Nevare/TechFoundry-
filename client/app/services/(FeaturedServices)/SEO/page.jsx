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
  Cloud,
} from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function SEOService() {
  return (
    <ServicePageTemplate
      icon={Search}
      title="SEO (Search Engine Optimization)"
      metaTitle="SEO Services | Rank Higher on Google with Developous"
      metaDescription="Developous offers expert SEO services that improve your Google ranking, increase organic traffic, and grow your business visibility online."
      description="Boost your visibility and attract qualified traffic with Developous’s data-driven SEO strategies. From keyword research and on-page optimization to backlinks and content planning, we help your business achieve sustainable search growth."
      heroImage="/services_img/seo-optimization-Photoroom.png"
      mainTitle="Expert SEO Services to Elevate Your Online Presence"
      mainParagraph={`In today’s competitive digital world, a strong SEO foundation is crucial for improving visibility and driving consistent organic traffic. At Developous, we provide expert SEO services that help businesses achieve higher search engine rankings and long-term online success. The Developous team combines technical expertise, data-driven insights, and creative strategies to optimize your website, increase discoverability, and enhance user engagement.
      Our goal is to ensure your brand stands out on search engines, attracts the right audience, and converts visitors into loyal customers.
      
      Partner with Developous to unlock the full potential of SEO and take your online presence to new heights.
      `}
      processTitle="What We Provide in SEO Services"
      processSteps={[
        {
          Icon: Search,
          title: "Comprehensive Website SEO Audit",
          desc: "We conduct in-depth audits to evaluate technical issues, on-page elements, and backlink health, identifying opportunities for improvement.",
        },
        {
          Icon: Code,
          title: "On-Page SEO Optimization",
          desc: "Developous optimizes meta tags, headings, internal links, and content to improve keyword relevance and enhance search engine crawlability.",
        },
        {
          Icon: Globe,
          title: "Off-Page SEO & Link Building",
          desc: "Our team builds high-quality backlinks and brand mentions from trusted sources to improve domain authority and online reputation.",
        },
        {
          Icon: TrendingUp,
          title: "Keyword Research & Content Strategy",
          desc: "We identify high-performing keywords and create a content strategy focused on attracting and retaining your target audience.",
        },
        {
          Icon: BarChart,
          title: "Analytics, Reporting & Continuous Growth",
          desc: "Developous provides detailed performance reports and continuously refines your SEO strategy to ensure long-term visibility and ROI.",
        },
      ]}
            
      features={[
        "Comprehensive SEO Audit & Competitor Analysis",
        "Keyword Research & Strategy Planning",
        "On-Page & Technical SEO Optimization",
        "High-Quality Backlink Building",
        "Content Optimization & SEO Copywriting",
        "Local SEO for Google My Business",
        "Monthly Reports & Traffic Insights",
      ]}
      serviceDetails={[
        ["Starting Price", "₹12,000/month"],
        ["Setup Duration", "1–2 weeks"],
        ["Support", "Monthly performance tracking & strategy updates"],
        ["Guarantee", "Organic growth through data-backed methods"],
      ]}
      banner={{
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=60",
        title: "Rank Higher. Grow Faster.",
        subtitle:
          "Turn your website into a traffic magnet with our SEO expertise. Drive organic visitors, leads, and revenue growth with Developous.",
        buttonText: "Get Free SEO Audit",
      }}
      faqs={[
        {
          q: "How long does it take to see SEO results?",
          a: "SEO is a long-term strategy. You can expect visible improvements in 2–3 months, with major ranking growth usually within 6 months depending on your industry and competition.",
        },
        {
          q: "Do you offer local SEO services?",
          a: "Yes, we specialize in optimizing Google Business Profiles and local citations to boost visibility in your specific region or city.",
        },
        {
          q: "Can you improve my existing website’s SEO?",
          a: "Absolutely! We audit your current site, fix technical issues, and optimize content to improve overall ranking and performance.",
        },
        {
          q: "Do I need to invest in SEO every month?",
          a: "Yes. SEO is ongoing — search engines and competitors change constantly. Continuous optimization ensures your rankings stay strong.",
        },
      ]}
      cta={{
        title: "Let’s Improve Your Google Ranking",
        subtitle:
          "Partner with Developous to grow your organic traffic and stay ahead of competitors with proven SEO strategies.",
        button1: "Request a Free SEO Audit",
        button2: "Explore Digital Marketing Services",
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
