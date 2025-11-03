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
  Truck,
  Users,
} from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function ECommerceWebsite() {
  return (
    <ServicePageTemplate
      icon={ShoppingBag}
      title="E-Commerce Website"
      metaTitle="E-Commerce Website Development | Developous"
      metaDescription="Build high-performance e-commerce websites with seamless shopping experiences, secure payments, and conversion-focused design."
      description="Launch a powerful online store that drives sales and enhances customer experience. From intuitive UI to secure payment gateways — we build everything your business needs to grow online."
      heroImage="/services_img/E-Commerce_Website-removebg.png"
      mainTitle="Custom E-Commerce Website Development Services"
      mainParagraph={`In today’s digital marketplace, having a robust e-commerce website is essential for businesses looking to expand their reach and boost sales. At Developous, we specialize in creating custom e-commerce websites that deliver seamless shopping experiences, drive conversions, and build customer trust. 
      
      Our team of experienced designers and developers work closely with you to create an online store that represents your brand and is tailored to your products, audience, and goals. Whether you’re a startup launching your first store or an enterprise scaling online operations, we provide a complete e-commerce solution — from design and development to SEO, security, and ongoing support.
      
      A well-built e-commerce website not only showcases your products beautifully but also ensures secure payments, fast loading times, and easy management for both customers and administrators. We focus on creating responsive, conversion-focused websites optimized for performance and growth.`}
      
      processTitle="What We Include in E-Commerce Websites"
      processSteps={[
        {
          Icon: ShoppingBag,
          title: "Product & Inventory Management",
          desc: "Easily manage product listings, categories, stock levels, pricing, and variants with an intuitive admin dashboard.",
        },
        {
          Icon: DollarSign,
          title: "Secure Payment Integration",
          desc: "We integrate popular payment gateways such as Razorpay, PayPal, Stripe, and UPI to ensure smooth and secure transactions.",
        },
        {
          Icon: Truck,
          title: "Order & Shipping Management",
          desc: "Automated order tracking, shipping updates, and inventory synchronization to streamline your logistics workflow.",
        },
        {
          Icon: Users,
          title: "Customer Accounts & Wishlist",
          desc: "Enable customers to create profiles, save favorites, view order history, and manage addresses easily.",
        },
        {
          Icon: BarChart2,
          title: "Analytics & Conversion Optimization",
          desc: "Track sales, user behavior, and conversions using built-in analytics tools and growth-focused insights.",
        },
        {
          Icon: Globe,
          title: "Multi-Device & SEO Optimization",
          desc: "Your store will look perfect on every device and be optimized for search engines to increase visibility and traffic.",
        },
      ]}
      
      features={[
        "Product catalog & inventory management",
        "Advanced search & filtering system",
        "Secure payment gateway integration",
        "Order tracking & analytics dashboard",
        "Mobile-responsive shopping experience",
        "SEO-optimized product pages",
      ]}
      serviceDetails={[
        ["Starting Price", "₹25,000"],
        ["Delivery Time", "3–6 weeks"],
        ["Support", "6 months free"],
        ["Guarantee", "100% Satisfaction"],
      ]}
      banner={{
        image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=2000&q=60",
        title: "Sell Smarter. Grow Faster.",
        subtitle: "Build your e-commerce empire with a store designed to convert visitors into loyal customers.",
        buttonText: "Get a Free Quote",
      }}
      faqs={[
        { q: "Can I manage my own products after launch?", a: "Yes! We provide a complete admin dashboard where you can add, edit, and manage products easily." },
        { q: "Which payment gateways can I use?", a: "We integrate with trusted providers like Razorpay, Stripe, PayPal, and Paytm based on your region." },
        { q: "Will my site be optimized for mobile users?", a: "Absolutely — all e-commerce websites are fully responsive and mobile-friendly for best performance." },
      ]}
      cta={{
        title: "Ready to Launch Your Online Store?",
        subtitle: "Let’s turn your business idea into a seamless e-commerce experience that sells.",
        button1: "Book a Free Consultation",
        button2: "View Our E-Commerce Projects",
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
