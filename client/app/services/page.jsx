'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Globe, Smartphone, Brain, Cloud, Palette, Users, Code, CheckCircle, Clock, DollarSign, Shield, Award, Zap, Database } from 'lucide-react';
import { services, guarantees, certifications } from '@/lib/data';
import { gsap } from 'gsap';

export default function Services() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(heroRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

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
      <section className="py-20 lg:py-32 overflow-hidden relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-8 w-24 h-24 bg-blue-400/15 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-12 w-20 h-20 bg-purple-400/15 rounded-full animate-bounce"></div>
          <div className="absolute bottom-24 left-1/3 w-16 h-16 bg-green-400/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-1/4 w-28 h-28 bg-orange-400/15 rounded-full animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroRef} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              Professional Services with Guaranteed Results
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Services</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
              Comprehensive tech solutions tailored to your business needs. 
              From web development to AI integration, we deliver excellence with every project.
            </p>
            
            {/* Interactive Service Preview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12 animate-fade-in-delay-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Web Development</h3>
                <p className="text-sm text-gray-600">Modern, responsive websites</p>
                <div className="text-xs text-blue-600 mt-2">Starting from $2,500</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Mobile Apps</h3>
                <p className="text-sm text-gray-600">iOS & Android applications</p>
                <div className="text-xs text-purple-600 mt-2">Starting from $5,000</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50 group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">AI Solutions</h3>
                <p className="text-sm text-gray-600">Smart automation & ML</p>
                <div className="text-xs text-green-600 mt-2">Starting from $8,000</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up-delay">
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="transform hover:scale-105 transition-all duration-300 border-2">
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Service Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-8 animate-float">
            <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Code className="h-7 w-7 text-blue-600" />
            </div>
          </div>
          <div className="absolute top-1/3 right-12 animate-float-delay">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Palette className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="absolute bottom-1/3 left-16 animate-float-delay-2">
            <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <div className="absolute bottom-1/4 right-8 animate-float">
            <div className="w-13 h-13 bg-orange-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Database className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results with proven expertise and reliability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.includes.map((item, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Starting Price:</span>
                          <span className="font-bold text-blue-600 text-lg">{service.startingPrice}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Delivery Time:</span>
                          <span className="font-medium">{service.deliveryTime}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Guarantee:</span>
                          <span className="text-green-600 font-medium">{service.guarantee}</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 4).map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <Button asChild className="w-full">
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
                <DollarSign className="h-6 w-6 text-green-600" />
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
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-purple-600">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}