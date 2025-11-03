"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Code, ChevronDown, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBusinessWebsiteOpen, setIsBusinessWebsiteOpen] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const businessWebsiteDropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const businessHoverTimeoutRef = useRef(null);

  const businessWebsiteServices = [
    { title: "Business Website", href: "/services/BusinessWebsite" },
    { title: "Real Estate Website", href: "/services/RealEstateWebsite" },
    { title: "Educational Website", href: "/services/EducationalWebsite" },
    { title: "Healthcare Website", href: "/services/HealthcareWebsite" },
    { title: "Tour & Travel Website", href: "/services/TourTravelWebsite" },
    { title: "NGO Website", href: "/services/NGO-Website" },
    { title: "Salon & Spa Website", href: "/services/SalonSpaWebsite" },
    { title: "Hotel Website", href: "/services/HotelWebsite" },
    { title: "Finance Website", href: "/services/FinanceWebsite" },
    { title: "E-Commerce Website", href: "/services/ECommerceWebsite" },
  ];

  const services = [
    { title: "Digital Marketing", href: "/services/DigitalMarketing" },
    { title: "SEO", href: "/services/SEO" },
    {
      title: "Business Website",
      hasNested: true,
      children: businessWebsiteServices,
    },
    { title: "Software Development", href: "/services/software-development" },
    { title: "AI & Machine Learning", href: "/services/ai-ml" },
    { title: "Cloud Solutions", href: "/services/cloud-solutions" },
    { title: "UI/UX Design", href: "/services/ui-ux-design" },

    { title: "Landing Page", href: "/services/landing-page" },
    { title: "Consulting", href: "/services/consulting" },
  ];

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // Handle hover events for desktop dropdown
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
      setIsBusinessWebsiteOpen(false);
    }, 200);
  };

  // Handle business website hover events
  const handleBusinessMouseEnter = () => {
    if (businessHoverTimeoutRef.current) {
      clearTimeout(businessHoverTimeoutRef.current);
    }
    setIsBusinessWebsiteOpen(true);
  };

  const handleBusinessMouseLeave = () => {
    businessHoverTimeoutRef.current = setTimeout(() => {
      setIsBusinessWebsiteOpen(false);
    }, 200);
  };

  // Handle dropdown mouse events
  const handleDropdownMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
      setIsBusinessWebsiteOpen(false);
    }, 200);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target) &&
        businessWebsiteDropdownRef.current &&
        !businessWebsiteDropdownRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
        setIsBusinessWebsiteOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (businessHoverTimeoutRef.current) {
        clearTimeout(businessHoverTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const headerEl = headerRef.current;
    const logoEl = logoRef.current;

    if (headerEl) {
      gsap.fromTo(
        headerEl,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }

    if (logoEl) {
      gsap.fromTo(
        logoEl,
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 1,
          delay: 0.3,
          ease: "back.out(1.7)",
        }
      );
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div ref={logoRef} className="p-0 rounded-lg">
              <img
                src="/logo_main.png"
                alt="Developous logo"
                className="h-20 w-54"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <nav className="flex items-center gap-4">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  ref={item.hasDropdown ? servicesDropdownRef : null}
                >
                  {item.hasDropdown ? (
                    <div
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>

                      {/* Services Dropdown */}
                      {isServicesOpen && (
                        <div
                          className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50"
                          onMouseEnter={handleDropdownMouseEnter}
                          onMouseLeave={handleDropdownMouseLeave}
                        >
                          {services.map((service) => (
                            <div
                              key={service.title}
                              className="relative"
                              ref={
                                service.hasNested
                                  ? businessWebsiteDropdownRef
                                  : null
                              }
                              onMouseEnter={
                                service.hasNested
                                  ? handleBusinessMouseEnter
                                  : undefined
                              }
                              onMouseLeave={
                                service.hasNested
                                  ? handleBusinessMouseLeave
                                  : undefined
                              }
                            >
                              {service.hasNested ? (
                                <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                                  <span>{service.title}</span>
                                  <ChevronRight className="h-4 w-4" />
                                </div>
                              ) : (
                                <Link
                                  href={service.href}
                                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  {service.title}
                                </Link>
                              )}

                              {/* Business Website Nested Dropdown */}
                              {service.hasNested && isBusinessWebsiteOpen && (
                                <div
                                  className="absolute -top-4 left-full ml-0 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50"
                                  onMouseEnter={handleBusinessMouseEnter}
                                  onMouseLeave={handleBusinessMouseLeave}
                                >
                                  {service.children.map((childService) => (
                                    <Link
                                      key={childService.title}
                                      href={childService.href}
                                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                                      onClick={() => {
                                        setIsServicesOpen(false);
                                        setIsBusinessWebsiteOpen(false);
                                      }}
                                    >
                                      {childService.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-4 ml-4">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <Link href="/contact">Start a Project</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col h-full pt-8">
                  <nav className="flex-1 space-y-4">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        {item.hasDropdown ? (
                          <div className="space-y-2">
                            <Link
                              href={item.href}
                              className="flex items-center justify-between w-full text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-lg font-medium px-3 py-2"
                              onClick={() => setIsOpen(false)}
                            >
                              <span>{item.name}</span>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setIsServicesOpen(!isServicesOpen);
                                }}
                                className="p-1"
                              >
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform duration-200 ${
                                    isServicesOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                            </Link>
                            {isServicesOpen && (
                              <div className="pl-6 space-y-2 border-l-2 border-gray-200 dark:border-gray-700">
                                {services.map((service) => (
                                  <div key={service.title}>
                                    {service.hasNested ? (
                                      <div className="space-y-2">
                                        <button
                                          onClick={() =>
                                            setIsBusinessWebsiteOpen(
                                              !isBusinessWebsiteOpen
                                            )
                                          }
                                          className="flex items-center justify-between w-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-base font-medium px-3 py-2"
                                        >
                                          <span>{service.title}</span>
                                          <ChevronDown
                                            className={`h-4 w-4 transition-transform duration-200 ${
                                              isBusinessWebsiteOpen
                                                ? "rotate-180"
                                                : ""
                                            }`}
                                          />
                                        </button>
                                        {isBusinessWebsiteOpen && (
                                          <div className="pl-4 space-y-2 border-l-2 border-gray-200 dark:border-gray-700">
                                            {service.children.map(
                                              (childService) => (
                                                <Link
                                                  key={childService.title}
                                                  href={childService.href}
                                                  className="block text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm font-medium px-3 py-2"
                                                  onClick={() => {
                                                    setIsServicesOpen(false);
                                                    setIsBusinessWebsiteOpen(
                                                      false
                                                    );
                                                    setIsOpen(false);
                                                  }}
                                                >
                                                  {childService.title}
                                                </Link>
                                              )
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    ) : (
                                      <Link
                                        href={service.href}
                                        className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-base font-medium px-3 py-2"
                                        onClick={() => {
                                          setIsServicesOpen(false);
                                          setIsOpen(false);
                                        }}
                                      >
                                        {service.title}
                                      </Link>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-lg font-medium px-3 py-2"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                  <div className="pb-8">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        Start a Project
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
