"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";

const Heromain = ({
  title,
  title2,
  subtitle,
  description,
  primaryButton = { text: "Get Started", href: "/contact" },
  secondaryButton = { text: "Learn More", href: "/about" },
  badge = null,
  stats = null,
  previewCards = null,
  floatingIcons = null,
  backgroundElements = true,
  className = "",
}) => {
  const heroRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline();

    const h1 = heroRef.current?.querySelector("h1");
    const p = heroRef.current?.querySelector("p");
    const buttons = heroRef.current?.querySelector(".hero-buttons");

    if (h1) {
      tl.fromTo(
        h1,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }

    if (p) {
      tl.fromTo(
        p,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );
    }

    if (buttons) {
      tl.fromTo(
        buttons,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );
    }

    // Animate preview cards if they exist in the DOM
    if (previewCards) {
      const previewNodes = heroRef.current?.querySelectorAll(".preview-card");
      if (previewNodes && previewNodes.length > 0) {
        gsap.fromTo(
          previewNodes,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            delay: 0.5,
          }
        );
      }
    }

    // Animate stats if they exist in the DOM
    if (stats) {
      const statNodes = heroRef.current?.querySelectorAll(".stat-card");
      if (statNodes && statNodes.length > 0) {
        gsap.fromTo(
          statNodes,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.8,
          }
        );
      }
    }
  }, [previewCards, stats]);

  return (
    <section
      ref={heroRef}
      className={`relative pt-20 overflow-hidden ${className}`}
    >
       {/* <section ref={heroRef}   className={`relative min-h-screen flex items-center justify-center pt-20 overflow-hidden ${className}`}>  */}
      {/* Animated Background Elements - Hidden on mobile for better performance */}
      {backgroundElements && (
        <div className="absolute inset-0 mobile-hidden">
          <div className="absolute top-2 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-2 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-60 left-1/4 w-12 h-12 bg-blue-300/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 right-1/4 w-24 h-24 bg-purple-300/20 rounded-full animate-pulse"></div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="relative max-w-7xl mx-auto mobile-px">
        <div className="text-center mb-8 sm:mb-16">
          {badge && (
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full mobile-text-xs font-medium mb-4 sm:mb-6 animate-fade-in">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full mr-1.5 sm:mr-2 animate-pulse"></span>
              {badge}
            </div>
          )}

          <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-5 md:mb-6 leading-tight animate-slide-up text-center">
            <span className="block sm:inline">{title}</span>{" "}
            <span className="block sm:inline">{title2}</span>
            {subtitle && (
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-5xl font-semibold">
                {subtitle}
              </span>
            )}
          </h1>

          <p className="mobile-text-lg text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in-delay px-4 sm:px-0">
            {description}
          </p>

          {/* Preview Cards */}
          {previewCards && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mobile-gap max-w-5xl mx-auto mb-8 sm:mb-12 animate-fade-in-delay-2">
              {previewCards.map((card, index) => (
                <div
                  key={index}
                  className="preview-card bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50 group"
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${card.iconBg} rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform`}
                  >
                    <card.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 mobile-text-sm">
                    {card.title}
                  </h3>
                  <p className="mobile-text-xs text-gray-600">
                    {card.description}
                  </p>
                  {card.price && (
                    <div
                      className={`mobile-text-xs ${card.priceColor} mt-1 sm:mt-2`}
                    >
                      {card.price}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Stats Cards */}
          {stats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 mobile-gap-sm max-w-4xl mx-auto mb-8 sm:mb-12 animate-fade-in-delay-2">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-card bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50"
                >
                  <div
                    className={`mobile-text-xl font-bold ${stat.valueColor} mb-0.5 sm:mb-1`}
                  >
                    {stat.value}
                  </div>
                  <div className="mobile-text-xs text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="hero-buttons flex flex-col sm:flex-row justify-center mobile-gap-sm animate-slide-up-delay">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mobile-text-sm"
            >
              <Link href={primaryButton.href}>{primaryButton.text}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="transform hover:scale-105 transition-all duration-300 border-2 mobile-text-sm"
            >
              <Link href={secondaryButton.href}>{secondaryButton.text}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Icons - Hidden on mobile for better performance */}
      {floatingIcons && (
        <div className="absolute inset-0 pointer-events-none mobile-hidden">
          {floatingIcons.map((icon, index) => (
            <div
              key={index}
              className={`absolute ${icon.position} animate-float${
                index > 0 ? `-delay${index}` : ""
              }`}
            >
              <div
                className={`${icon.size} ${icon.bg} rounded-lg flex items-center justify-center backdrop-blur-sm`}
              >
                <icon.component className={icon.iconClass} />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Heromain;
