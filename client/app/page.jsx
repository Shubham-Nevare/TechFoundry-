"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Smartphone,
  Brain,
  Cloud,
  Palette,
  Code,
  Shield,
  Award,
  Clock,
  Zap,
  Lock,
  TrendingUp,
} from "lucide-react";
import {
  services,
  teamMembers,
  testimonials,
  certifications,
  securityBadges,
  guarantees,
} from "@/lib/data";
import Chat from "@/components/ui/chat";
import Hero from "@/components/ui/hero";
import { gsap } from "gsap";
import Heromain from "@/components/ui/heromain";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const trustRef = useRef(null);

  useEffect(() => {
    if (!servicesRef.current || !trustRef.current) return;

    // Animate service cards on scroll
    gsap.fromTo(
      servicesRef.current.querySelectorAll(".service-card"),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate trust badges
    gsap.fromTo(
      trustRef.current.querySelectorAll(".trust-badge"),
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: trustRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <Heromain
        // title="Welcome to Developous"
        // subtitle="Your Tech Partner"
        title="We Develop."
        title2="You Succeed."
        subtitle="That's Developous."
        description="Transforming your vision into reality with powerful web, mobile, AI & cloud solutions — from concept to launch."
        primaryButton={{ text: "Start Your Project", href: "/contact" }}
        secondaryButton={{ text: "View Our Work", href: "/portfolio" }}
        badge="Trusted by 100+ Businesses Worldwide"
        stats={[
          {
            value: "100+",
            label: "Projects Completed",
            valueColor: "text-blue-600",
          },
          {
            value: "4.9/5",
            label: "Client Rating",
            valueColor: "text-purple-600",
          },
          {
            value: "50+",
            label: "Happy Clients",
            valueColor: "text-green-600",
          },
          {
            value: "100%",
            label: "Satisfaction",
            valueColor: "text-orange-600",
          },
        ]}
        floatingIcons={[
          {
            position: "top-1/4 left-10",
            size: "w-12 h-12",
            bg: "bg-blue-500/20",
            component: Globe,
            iconClass: "h-6 w-6 text-blue-600",
          },
          {
            position: "top-1/3 right-16",
            size: "w-10 h-10",
            bg: "bg-purple-500/20",
            component: Smartphone,
            iconClass: "h-5 w-5 text-purple-600",
          },
          {
            position: "bottom-1/3 left-20",
            size: "w-14 h-14",
            bg: "bg-green-500/20",
            component: Brain,
            iconClass: "h-7 w-7 text-green-600",
          },
          {
            position: "bottom-1/4 right-10",
            size: "w-11 h-11",
            bg: "bg-orange-500/20",
            component: Cloud,
            iconClass: "h-5 w-5 text-orange-600",
          },
        ]}
      />

      {/* Hidden branding image (contains 'developous' in filename) for SEO */}
      <img
        src="/logo-developous.svg"
        alt="Developous brand mark"
        className="hidden"
      />

      {/* Trust Badges Section */}
      <section ref={trustRef} className="mobile-py bg-white border-b">
        <div className="max-w-7xl mx-auto mobile-px">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="mobile-text-2xl font-bold text-gray-900 mb-2">
              Trusted & Certified
            </h2>
            <p className="mobile-text-sm text-gray-600">
              We maintain the highest standards of quality and security <br />{" "}
              Developous adheres to strict processes to keep your systems safe.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 mobile-gap">
            {securityBadges.map((badge, index) => (
              <div
                key={index}
                className="trust-badge text-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">
                  {badge.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mobile-text-xs">
                  {badge.name}
                </h3>
                <p className="mobile-text-xs text-gray-600">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="mobile-py-xl bg-white">
        <div className="max-w-7xl mx-auto mobile-px">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mobile-text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="mobile-text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end tech solutions tailored to your business needs.
              Developous designs scalable systems with performance and
              reliability in mind.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mobile-gap">
            {services.map((service) => {
              const IconComponent =
                {
                  Globe,
                  Smartphone,
                  Brain,
                  Cloud,
                  Palette,
                  Users,
                }[service.icon] || Code;

              return (
                <Card
                  key={service.id}
                  className="group hover:shadow-lg transition-shadow duration-300 rounded-xl border border-gray-200 bg-white dark:bg-gray-900"
                >
                  <CardHeader className="p-4 sm:p-6 flex flex-row gap-4">
                    {/* Icon */}
                    <div className="flex items-start justify-center mt-2">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                      </div>
                    </div>
                    <div className="justify-start items-start">
                      {/* Title */}
                      <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white  mb-2">
                        {service.title}
                      </CardTitle>

                      {/* Description */}
                      <CardDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-400 text-left">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="p-4 sm:p-6 pt-0">
                    {/* Features */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 justify-center">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs sm:text-sm bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* Pricing & Delivery */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                          Starting from
                        </span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">
                          {service.startingPrice}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                          Delivery time
                        </span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {service.deliveryTime}
                        </span>
                      </div>
                    </div>

                    {/* Guarantee */}
                    <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-green-600 dark:text-green-400">
                      <CheckCircle className="h-4 w-4" />
                      <span>{service.guarantee}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Button asChild className="mobile-text-sm">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="mobile-py-xl bg-gray-50">
        <div className="max-w-7xl mx-auto mobile-px">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mobile-text-3xl font-bold text-gray-900 mb-4">
              Our Guarantees
            </h2>
            <p className="mobile-text-lg text-gray-600 max-w-2xl mx-auto">
              We stand behind our work with these promises — Developous
              guarantees timely delivery and ongoing support.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mobile-gap">
            {guarantees.map((guarantee, index) => (
              <Card
                key={index}
                className="hidden md:block text-center p-4 sm:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {guarantee.icon}
                </div>
                <h3 className="mobile-text-base font-semibold text-gray-900 mb-2">
                  {guarantee.title}
                </h3>
                <p className="mobile-text-sm text-gray-600">
                  {guarantee.description}
                </p>
              </Card>
            ))}
            {guarantees.map((guarantee, index) => (
              <Card
                key={index}
                className="md:hidden text-center p-4 sm:p-6 hover:shadow-lg transition-shadow flex flex-row items-start justify-start gap-4"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {guarantee.icon}
                </div>
                <div className="justify-start  text-left">
                  <h3 className="mobile-text-base font-semibold text-gray-900 mb-2">
                    {guarantee.title}
                  </h3>
                  <p className="mobile-text-sm text-gray-600">
                    {guarantee.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="mobile-py-xl bg-white">
        <div className="max-w-7xl mx-auto mobile-px">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mobile-text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="mobile-text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success. The
              Developous team blends product thinking with engineering
              excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mobile-gap">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center hidden md:block">
                <CardHeader className="p-4 sm:p-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="mobile-text-base">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="mobile-text-sm">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="">
                  <p className="mobile-text-sm text-gray-600 mb-3 sm:mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center mb-3 sm:mb-4">
                    {member.skills.slice(0, 3).map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="mobile-text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="mobile-text-xs text-gray-500">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Clock className="h-3 w-3" />
                      <span>{member.experience} experience</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <Award className="h-3 w-3" />
                      <span>{member.certifications.length} certifications</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {teamMembers.map((member) => (
              <Card key={member.id} className="block md:hidden">
                <CardHeader className="p-4">
                  {/* Avatar, Name and Role - Side by side */}
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <CardTitle className="text-base font-semibold">
                        {member.name}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600">
                        {member.role}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-4 pt-0">
                  {/* Bio */}
                  <p className="text-sm text-gray-600 mb-4">{member.bio}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.skills.slice(0, 3).map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs px-2 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Experience & Certifications */}
                  <div className="text-xs text-gray-500 space-y-2">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{member.experience} experience</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="h-3 w-3" />
                      <span>{member.certifications.length} certifications</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mobile-py-xl bg-gray-50">
        <div className="max-w-7xl mx-auto mobile-px">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mobile-text-3xl font-bold text-gray-900 mb-4">
              Professional Certifications
            </h2>
            <p className="mobile-text-lg text-gray-600 max-w-2xl mx-auto">
              Our team holds industry-recognized certifications
            </p>
          </div>
          <div className="hidden md:grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="text-center p-3 sm:p-6 hover:shadow-lg transition-shadow bg-white/5 backdrop-blur-md rounded-2xl"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
                  />
                </div>
                <h3 className="font-semibold text-black mb-1 text-sm sm:text-base">
                  {cert.name}
                </h3>
                <p className="text-gray-400 mb-2 text-xs sm:text-sm">
                  {cert.issuer}
                </p>
                <Badge variant="secondary" className="text-xs sm:text-sm">
                  {cert.year}
                </Badge>
              </Card>
            ))}
          </div>

          <div className="md:hidden grid grid-cols-1 gap-3 px-2">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="flex flex-row items-start gap-3 p-4 hover:shadow-md transition-shadow border rounded-xl"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-1 mobile-text-sm">
                    {cert.name}
                  </h3>
                  <p className="mobile-text-xs text-gray-600 mb-2">
                    {cert.issuer}
                  </p>
                  <Badge variant="secondary" className="mobile-text-xs">
                    {cert.year}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      {/* <section className="mobile-py-xl bg-white">
        <div className="max-w-7xl mx-auto mobile-px">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mobile-text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="mobile-text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mobile-gap">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-4 sm:p-6 relative">
                {testimonial.verified && (
                  <div className="absolute -top-2 -right-2">
                    <Badge className="bg-green-100 text-green-800 mobile-text-xs">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                )}
                <div className="flex items-center space-x-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mobile-text-sm text-gray-600 mb-3 sm:mb-4">
                  "{testimonial.testimonial}"
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 mobile-text-sm">
                        {testimonial.name}
                      </div>
                      <div className="mobile-text-xs text-gray-500">
                        {testimonial.position}
                      </div>
                      <div className="mobile-text-xs text-gray-500">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 sm:pt-3 border-t">
                    <div className="mobile-text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                      Project: {testimonial.project}
                    </div>
                    <div className="space-y-1">
                      {testimonial.metrics.map((metric, index) => (
                        <div
                          key={index}
                          className="flex items-center mobile-text-xs text-gray-600"
                        >
                          <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="mobile-py-xl bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto mobile-px text-center">
          <h2 className="mobile-text-3xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="mobile-text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss your ideas and bring them to life with Developous. Our
            team is ready to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center mobile-gap-sm">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="mobile-text-sm"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white bg-transparant hover:bg-white hover:text-purple-600 mobile-text-sm"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Chat />
    </div>
  );
}
