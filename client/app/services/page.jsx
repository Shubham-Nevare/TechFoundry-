'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Globe, Smartphone, Brain, Cloud, Palette, Users, Code, CheckCircle, Clock, DollarSign, Shield, Award, Zap, Database, IndianRupee } from 'lucide-react';
import { services, guarantees, certifications } from '@/lib/data';
import Hero from '@/components/ui/hero';

import { gsap } from 'gsap';
export default function Services() {
  const servicesRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(servicesRef.current.querySelectorAll('.service-card'),
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and technical requirements.',
      icon: Users,
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team creates wireframes, mockups, and technical architecture for your project.',
      icon: Palette,
      duration: '1-3 weeks'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution using best practices and conduct thorough testing.',
      icon: Code,
      duration: '2-8 weeks'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We deploy your project and provide ongoing support and maintenance.',
      icon: CheckCircle,
      duration: 'Ongoing'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Expert Team',
      description: 'Certified professionals with 5+ years of experience',
      icon: Award
    },
    {
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee on all projects',
      icon: Shield
    },
    {
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality',
      icon: Zap
    },
    {
      title: 'Ongoing Support',
      description: 'Post-launch support and maintenance included',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <Hero
        title="Our"
        subtitle="Services"
        description="Comprehensive tech solutions tailored to your business needs. From web development to AI integration, we deliver excellence with every project."
        primaryButton={{ text: 'Get Free Quote', href: '/contact' }}
        secondaryButton={{ text: 'View Case Studies', href: '/case-studies' }}
        badge="Professional Services with Guaranteed Results"
        previewCards={[
          {
            icon: Globe,
            iconBg: 'bg-gradient-to-r from-blue-600 to-purple-600',
            title: 'Web Development',
            description: 'Modern, responsive websites',
            price: 'Starting from ₹2,500',
            priceColor: 'text-blue-600'
          },
          {
            icon: Smartphone,
            iconBg: 'bg-gradient-to-r from-purple-600 to-pink-600',
            title: 'Mobile Apps',
            description: 'iOS & Android applications',
            price: 'Starting from ₹5,000',
            priceColor: 'text-purple-600'
          },
          {
            icon: Brain,
            iconBg: 'bg-gradient-to-r from-green-600 to-blue-600',
            title: 'AI Solutions',
            description: 'Smart automation & ML',
            price: 'Starting from ₹8,000',
            priceColor: 'text-green-600'
          }
        ]}
        floatingIcons={[
          { position: 'top-1/4 left-8', size: 'w-14 h-14', bg: 'bg-blue-500/20', component: Code, iconClass: 'h-7 w-7 text-blue-600' },
          { position: 'top-1/3 right-12', size: 'w-12 h-12', bg: 'bg-purple-500/20', component: Palette, iconClass: 'h-6 w-6 text-purple-600' },
          { position: 'bottom-1/3 left-16', size: 'w-16 h-16', bg: 'bg-green-500/20', component: Users, iconClass: 'h-8 w-8 text-green-600' },
          { position: 'bottom-1/4 right-8', size: 'w-13 h-13', bg: 'bg-orange-500/20', component: Database, iconClass: 'h-6 w-6 text-orange-600' }
        ]}
      />

      {/* Why Choose Us */}
      <section className="mobile-py-xl bg-white">
        <div className="max-w-7xl mx-auto mobile-px">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mobile-text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="mobile-text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results with proven expertise and reliability
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mobile-gap">
            {whyChooseUs.map((item, index) => (
                              <Card key={index} className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="mobile-text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="mobile-text-sm text-gray-600">{item.description}</p>
                </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="mobile-py-xl bg-gray-50">
        <div className="max-w-7xl mx-auto mobile-px">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mobile-text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="mobile-text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mobile-gap">
            {services.map((service) => {
              const IconComponent = {
                Globe,
                Smartphone,
                Brain,
                Cloud,
                Palette,
                Users
              }[service.icon] || Code;
              
              return (
                <Card key={service.id} className="service-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <CardTitle className="mobile-text-xl">{service.title}</CardTitle>
                    <CardDescription className="mobile-text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 mobile-text-sm">What's Included:</h4>
                        <ul className="space-y-1 sm:space-y-2">
                          {service.includes.map((item, index) => (
                            <li key={index} className="flex items-center mobile-text-sm text-gray-600">
                              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center justify-between mobile-text-xs">
                          <span className="text-gray-600">Starting Price:</span>
                          <span className="font-bold text-blue-600 mobile-text-base">{service.startingPrice}</span>
                        </div>
                        <div className="flex items-center justify-between mobile-text-xs">
                          <span className="text-gray-600">Delivery Time:</span>
                          <span className="font-medium">{service.deliveryTime}</span>
                        </div>
                        <div className="flex items-center justify-between mobile-text-xs">
                          <span className="text-gray-600">Guarantee:</span>
                          <span className="text-green-600 font-medium">{service.guarantee}</span>
                        </div>
                      </div>

                      <div className="pt-3 sm:pt-4 border-t">
                        <h4 className="font-semibold text-gray-900 mb-2 mobile-text-sm">Key Features:</h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {service.features.slice(0, 4).map((feature, index) => (
                            <Badge key={index} variant="outline" className="mobile-text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 sm:pt-4 border-t">
                        <Button asChild className="w-full mobile-text-sm">
                          <Link href="/contact">
                            Get Started <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven approach to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardHeader>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 mt-4">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {step.duration}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Guarantees
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We stand behind our work with these promises
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{guarantee.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{guarantee.title}</h3>
                <p className="text-sm text-gray-600">{guarantee.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team holds industry-recognized certifications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center">
                  <img 
                    src={cert.logo} 
                    alt={cert.issuer}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
                <Badge variant="secondary" className="text-xs">{cert.year}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No hidden costs, no surprises. Clear pricing for all our services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <IndianRupee className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fixed Pricing</h3>
              <p className="text-sm text-gray-600">Clear, upfront pricing with no hidden fees</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Time Estimates</h3>
              <p className="text-sm text-gray-600">Accurate delivery timelines for every project</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-sm text-gray-600">Guaranteed quality with revision cycles included</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white bg-transparent hover:bg-white hover:text-purple-600">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}