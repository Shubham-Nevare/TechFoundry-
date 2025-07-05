'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Star, Users, Globe, Smartphone, Brain, Cloud, Palette, Code, Shield, Award, Clock, Zap, Lock, TrendingUp } from 'lucide-react';
import { services, teamMembers, testimonials, certifications, securityBadges, guarantees } from '@/lib/data';
import Chat from '@/components/ui/chat';
import { gsap } from 'gsap';

export default function Home() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const trustRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline();
    
    tl.fromTo(heroRef.current.querySelector('h1'),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(heroRef.current.querySelector('p'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(heroRef.current.querySelector('.hero-buttons'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    );

    // Animate service cards on scroll
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

    // Animate trust badges
    gsap.fromTo(trustRef.current.querySelectorAll('.trust-badge'),
      { scale: 0, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.1,
        scrollTrigger: {
          trigger: trustRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 lg:py-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-2 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-2 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-60 left-1/4 w-12 h-12 bg-blue-300/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 right-1/4 w-24 h-24 bg-purple-300/20 rounded-full animate-pulse"></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              Trusted by 100+ Businesses Worldwide
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Your Trusted
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Tech Partner</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
              We deliver exceptional web, mobile, AI, and cloud solutions for businesses of all sizes. 
              From concept to deployment, we handle everything with 100% satisfaction guarantee.
            </p>
            
            <div className="hero-buttons flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-slide-up-delay">
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="transform hover:scale-105 transition-all duration-300 border-2">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
            
            {/* Interactive Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-delay-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50">
                <div className="text-2xl font-bold text-blue-600 mb-1">100+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50">
                <div className="text-2xl font-bold text-purple-600 mb-1">4.9/5</div>
                <div className="text-sm text-gray-600">Client Rating</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50">
                <div className="text-2xl font-bold text-green-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50">
                <div className="text-2xl font-bold text-orange-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 animate-float">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Globe className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="absolute top-1/3 right-16 animate-float-delay">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Smartphone className="h-5 w-5 text-purple-600" />
            </div>
          </div>
          <div className="absolute bottom-1/3 left-20 animate-float-delay-2">
            <div className="w-14 h-14 bg-green-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Brain className="h-7 w-7 text-green-600" />
            </div>
          </div>
          <div className="absolute bottom-1/4 right-10 animate-float">
            <div className="w-11 h-11 bg-orange-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Cloud className="h-5 w-5 text-orange-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section ref={trustRef} className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Trusted & Certified</h2>
            <p className="text-gray-600">We maintain the highest standards of quality and security</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {securityBadges.map((badge, index) => (
              <div key={index} className="trust-badge text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="text-3xl mb-2">{badge.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm">{badge.name}</h3>
                <p className="text-xs text-gray-600">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end tech solutions tailored to your business needs
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
                <Card key={service.id} className="service-card group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Starting from</span>
                        <span className="font-bold text-blue-600">{service.startingPrice}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Delivery time</span>
                        <span className="font-medium">{service.deliveryTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>{service.guarantee}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {member.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500">
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
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
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

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 relative">
                {testimonial.verified && (
                  <div className="absolute -top-2 -right-2">
                    <Badge className="bg-green-100 text-green-800 text-xs">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                )}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.testimonial}"</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.position}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="pt-3 border-t">
                    <div className="text-sm font-medium text-gray-900 mb-2">Project: {testimonial.project}</div>
                    <div className="space-y-1">
                      {testimonial.metrics.map((metric, index) => (
                        <div key={index} className="flex items-center text-xs text-gray-600">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your ideas and bring them to life. Our team is ready to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-purple-600">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Chat />
    </div>
  );
}