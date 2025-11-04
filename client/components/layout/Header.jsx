"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { Menu, Code, ChevronDown, ChevronRight, X } from "lucide-react";
import { gsap } from "gsap";
import ThemeToggle from "./ThemeToggle";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBusinessWebsiteOpen, setIsBusinessWebsiteOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileBusinessWebsiteOpen, setMobileBusinessWebsiteOpen] =
    useState(false);

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

  // Close mobile menu when link is clicked
  const handleMobileLinkClick = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setMobileBusinessWebsiteOpen(false);
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
              {/* <ThemeToggle /> */}
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <Link href="/contact">Start a Project</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {/* <ThemeToggle /> */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[70vw] max-w-sm sm:max-w-md"
              >
                 <VisuallyHidden>
    <DialogTitle>Mobile Navigation Menu</DialogTitle>
    <DialogDescription>
      Navigate through the site using the links below.
    </DialogDescription>
  </VisuallyHidden>
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between  border-b border-gray-200 dark:border-gray-700">
                    <Link
                      href="/"
                      className="flex items-center space-x-2"
                      onClick={handleMobileLinkClick}
                    >
                      <img
                        src="/logo_main.png"
                        alt="Developous logo"
                        className="h-16 w-auto"
                      />
                    </Link>
                    {/* <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="h-8 w-8"
                    >
                      <X className="h-4 w-4" />
                    </Button> */}
                    {/* <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <X className="h-4 w-4" />
                      </Button>
                    </SheetClose> */}
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1 overflow-y-auto py-4">
                    <div className="space-y-2">
                      {navigation.map((item) => (
                        <div key={item.name}>
                          {item.hasDropdown ? (
                            <div className="space-y-2">
                              {/* Services Dropdown Trigger */}
                              <button
                                onClick={() =>
                                  setMobileServicesOpen(!mobileServicesOpen)
                                }
                                className="flex items-center justify-between w-full py-2 text-left text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                              >
                                <span>{item.name}</span>
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform duration-200 ${
                                    mobileServicesOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              {/* Services Dropdown Content */}
                              {mobileServicesOpen && (
                                <div className="pl-4 space-y-2 border-l border-gray-200 dark:border-gray-700 ml-2">
                                  {services.map((service) => (
                                    <div key={service.title}>
                                      {service.hasNested ? (
                                        <div className="space-y-2">
                                          {/* Business Website Nested Dropdown Trigger */}
                                          <button
                                            onClick={() =>
                                              setMobileBusinessWebsiteOpen(
                                                !mobileBusinessWebsiteOpen
                                              )
                                            }
                                            className="flex items-center justify-between w-full py-2 text-left text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                          >
                                            <span>{service.title}</span>
                                            <ChevronDown
                                              className={`h-4 w-4 transition-transform duration-200 ${
                                                mobileBusinessWebsiteOpen
                                                  ? "rotate-180"
                                                  : ""
                                              }`}
                                            />
                                          </button>

                                          {/* Business Website Nested Dropdown Content */}
                                          {mobileBusinessWebsiteOpen && (
                                            <div className="pl-4 space-y-1 border-l border-gray-200 dark:border-gray-700 ml-2">
                                              {service.children.map(
                                                (childService) => (
                                                  <Link
                                                    key={childService.title}
                                                    href={childService.href}
                                                    className="block py-2 text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                                    onClick={
                                                      handleMobileLinkClick
                                                    }
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
                                          className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                          onClick={handleMobileLinkClick}
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
                              className="block py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                              onClick={handleMobileLinkClick}
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </nav>

                  {/* Footer */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      onClick={handleMobileLinkClick}
                    >
                      <Link href="/contact">Start a Project</Link>
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
