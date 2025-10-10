'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ArrowRight, Calendar, DollarSign, Users, TrendingUp, Target, Clock, CheckCircle, Star, Award, Zap, IndianRupee } from 'lucide-react';
import { portfolioItems } from '@/lib/data';
import Hero from '@/components/ui/hero';
import { gsap } from 'gsap';

export const metadata = {
  title: "Case Studies - Developous Success Stories",
  description:
    "Discover real-world case studies showcasing how Developous helps clients with web, mobile, and AI-powered solutions.",
  keywords:
    "Developous case studies, client success stories, web development results, AI project success, portfolio examples",
};


export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);
  const casesRef = useRef(null);

  const categories = ['all', 'Web Development', 'Mobile Development', 'AI & Machine Learning', 'Cloud Solutions', 'UI/UX Design'];

  const filteredCases = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  useEffect(() => {
    gsap.fromTo(casesRef.current.querySelectorAll('.case-card'),
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: casesRef.current,
          start: "top 80%",
        }
      }
    );
  }, [selectedCategory]);

  const metrics = [
    { label: 'Projects Completed', value: '100+', icon: Target },
    { label: 'Client Satisfaction', value: '100%', icon: Star },
    { label: 'Average Rating', value: '4.9/5', icon: Award },
    { label: 'Response Time', value: '<24h', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <Hero
        title="Case"
        subtitle="Studies"
        description="Real projects, real results. Explore how we've helped businesses achieve their goals with measurable outcomes."
        primaryButton={{ text: 'Start Your Project', href: '/contact' }}
        secondaryButton={{ text: 'View Portfolio', href: '/portfolio' }}
        badge="Real Results, Real Impact"
        stats={[
          { value: '100+', label: 'Projects Completed', valueColor: 'text-blue-600' },
          { value: '100%', label: 'Client Satisfaction', valueColor: 'text-purple-600' },
          { value: '4.9/5', label: 'Average Rating', valueColor: 'text-green-600' },
          { value: '<24h', label: 'Response Time', valueColor: 'text-orange-600' }
        ]}
        floatingIcons={[
          { position: 'top-1/4 left-10', size: 'w-12 h-12', bg: 'bg-blue-500/20', component: Target, iconClass: 'h-6 w-6 text-blue-600' },
          { position: 'top-1/3 right-16', size: 'w-10 h-10', bg: 'bg-purple-500/20', component: Star, iconClass: 'h-5 w-5 text-purple-600' },
          { position: 'bottom-1/3 left-20', size: 'w-14 h-14', bg: 'bg-green-500/20', component: Award, iconClass: 'h-7 w-7 text-green-600' },
          { position: 'bottom-1/4 right-10', size: 'w-11 h-11', bg: 'bg-orange-500/20', component: Zap, iconClass: 'h-5 w-5 text-orange-600' }
        ]}
      />

      {/* Metrics Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <metric.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={casesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((item) => (
              <Card key={item.id} className="case-card group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer" onClick={() => setSelectedCase(item)}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                    {item.link && (
                      <Button variant="ghost" size="icon" asChild onClick={(e) => e.stopPropagation()}>
                        <Link href={item.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-blue-500" />
                        <span className="text-gray-600">{item.client}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">{item.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <IndianRupee className="h-4 w-4 text-purple-500" />
                         
                        <span className="text-gray-600">{item.budget}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-orange-500" />
                        <span className="text-gray-600">{item.results.length} results</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="text-xs text-gray-500 mb-2">Key Results:</div>
                      <div className="space-y-1">
                        {item.results.slice(0, 2).map((result, index) => (
                          <div key={index} className="flex items-center text-xs text-gray-600">
                            <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Full Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Study Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <Badge variant="secondary" className="mb-4">
                    {selectedCase.category}
                  </Badge>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{selectedCase.title}</h2>
                  <p className="text-xl text-gray-600">{selectedCase.description}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setSelectedCase(null)}>
                  <span className="text-2xl">×</span>
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <img 
                      src={selectedCase.image} 
                      alt={selectedCase.title}
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Project Overview</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Client:</span>
                          <span className="font-medium">{selectedCase.client}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-medium">{selectedCase.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Budget:</span>
                          <span className="font-medium">{selectedCase.budget}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Category:</span>
                          <span className="font-medium">{selectedCase.category}</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Technologies Used</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {selectedCase.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
                      <p className="text-gray-600 leading-relaxed">{selectedCase.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
                      <p className="text-gray-600 leading-relaxed">{selectedCase.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Results Achieved</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedCase.results.map((result, index) => (
                          <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                            <span className="text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Highlights</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">On-time delivery</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">100% client satisfaction</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Post-launch support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Source code ownership</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Client Testimonial</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm italic mb-3">
                        "Exceptional work and outstanding results. The team delivered exactly what we needed and more."
                      </p>
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">Client Representative</div>
                        <div className="text-gray-500">{selectedCase.client}</div>
                      </div>
                    </CardContent>
                  </Card>

                  {selectedCase.link && (
                    <Button asChild className="w-full">
                      <Link href={selectedCase.link} target="_blank" rel="noopener noreferrer">
                        View Live Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's work together to achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white bg-transparent hover:bg-white hover:text-purple-600">
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 