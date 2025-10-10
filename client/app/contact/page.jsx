'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Shield, CheckCircle, Zap, Users, Award } from 'lucide-react';
import Chat from '@/components/ui/chat';
import Hero from '@/components/ui/hero';
import { gsap } from 'gsap';

import Link from 'next/link';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(formRef.current,
      { x: -100, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/project-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Project request submitted successfully! We\'ll get back to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          projectType: '',
          budget: '',
          timeline: '',
          description: ''
        });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const trustFeatures = [
    {
      icon: Shield,
      title: 'Secure & Confidential',
      description: 'Your information is protected with enterprise-grade security'
    },
    {
      icon: Zap,
      title: '24-Hour Response',
      description: 'We guarantee to respond to your inquiry within 24 hours'
    },
    {
      icon: CheckCircle,
      title: 'No Obligation',
      description: 'Free consultation with no commitment required'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Work directly with certified professionals'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <Hero
        title="Start Your"
        subtitle="Project"
        description="Ready to bring your ideas to life? Let's discuss your project and create something amazing together."
        primaryButton={{ text: 'Get Started', href: '#contact-form' }}
        secondaryButton={{ text: 'View Portfolio', href: '/portfolio' }}
        badge="24-Hour Response Guarantee"
        previewCards={[
          {
            icon: Shield,
            iconBg: 'bg-gradient-to-r from-blue-600 to-purple-600',
            title: 'Secure & Confidential',
            description: 'Your information is protected',
            price: 'Enterprise-grade security',
            priceColor: 'text-blue-600'
          },
          {
            icon: Zap,
            iconBg: 'bg-gradient-to-r from-purple-600 to-pink-600',
            title: '24-Hour Response',
            description: 'We guarantee quick replies',
            price: 'Same day response',
            priceColor: 'text-purple-600'
          },
          {
            icon: CheckCircle,
            iconBg: 'bg-gradient-to-r from-green-600 to-blue-600',
            title: 'No Obligation',
            description: 'Free consultation included',
            price: 'No commitment required',
            priceColor: 'text-green-600'
          }
        ]}
        floatingIcons={[
          { position: 'top-1/4 left-10', size: 'w-12 h-12', bg: 'bg-blue-500/20', component: MessageCircle, iconClass: 'h-6 w-6 text-blue-600' },
          { position: 'top-1/3 right-16', size: 'w-10 h-10', bg: 'bg-purple-500/20', component: Mail, iconClass: 'h-5 w-5 text-purple-600' },
          { position: 'bottom-1/3 left-20', size: 'w-14 h-14', bg: 'bg-green-500/20', component: Phone, iconClass: 'h-7 w-7 text-green-600' },
          { position: 'bottom-1/4 right-10', size: 'w-11 h-11', bg: 'bg-orange-500/20', component: Send, iconClass: 'h-5 w-5 text-orange-600' }
        ]}
      />

      {/* Trust Features */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card ref={formRef} className="shadow-xl max-h-fit">
              <CardHeader>
                <CardTitle className="text-2xl">Project Details</CardTitle>
                <CardDescription>
                  Tell us about your project and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select value={formData.projectType} onValueChange={(value) => handleChange('projectType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="mobile">Mobile Development</SelectItem>
                        <SelectItem value="ai">AI & Machine Learning</SelectItem>
                        <SelectItem value="cloud">Cloud Solutions</SelectItem>
                        <SelectItem value="uiux">UI/UX Design</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget">Budget Range *</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under ₹5,000</SelectItem>
                          <SelectItem value="5k-10k">₹5,000 - ₹10,000</SelectItem>
                          <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                          <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                          <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                          <SelectItem value="100k-plus">₹1,00,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timeline">Timeline *</Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                          <SelectItem value="1-month">1 month</SelectItem>
                          <SelectItem value="2-3-months">2-3 months</SelectItem>
                          <SelectItem value="3-plus-months">3+ months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Tell us about your project, goals, and requirements..."
                      value={formData.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                      rows={5}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>Your information is secure and will never be shared with third parties.</span>
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Project Request
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Ready to start your project? We're here to help you bring your ideas to life. 
                  Contact us today for a free consultation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">snevare9@gmail.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+91 8010791864</p>
                    <p className="text-sm text-gray-500">Available Mon-Fri, 9 AM - 6 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Live Chat</h3>
                    <p className="text-gray-600">Chat with us online</p>
                    <p className="text-sm text-gray-500">Available 24/7 for instant support</p>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">24-Hour Response Guarantee</h3>
                      <p className="text-sm text-gray-600">We promise to get back to you within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card>
                <CardHeader>
                  <CardTitle>Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">100% Satisfaction Guarantee</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Certified Professionals</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Transparent Pricing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Post-Launch Support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Source Code Ownership</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about working with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How quickly can you start my project?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We can typically start within 1-2 weeks of project approval. For urgent projects, we offer expedited timelines.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What if I'm not satisfied with the work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We offer a 100% satisfaction guarantee. If you're not happy, we'll revise until you are completely satisfied.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you provide ongoing support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Yes, all projects include 3-12 months of post-launch support and maintenance depending on the service.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Who owns the source code?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">You own 100% of the source code and intellectual property. We provide full code transfer upon completion.</p>
              </CardContent>
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
              <Link href="#contact-form">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white bg-transparent hover:bg-white hover:text-purple-600">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Chat userName="Visitor" />
    </div>
  );
}