'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, CheckCircle, Calendar, UserCheck, FileText, Database } from 'lucide-react';
import Hero from '@/components/ui/hero';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Privacy() {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(contentRef.current.querySelectorAll('.content-section'),
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  const privacyFeatures = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Your information is protected with enterprise-grade security measures'
    },
    {
      icon: Lock,
      title: 'Secure Storage',
      description: 'All data is encrypted and stored securely on protected servers'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We are transparent about how we collect and use your data'
    },
    {
      icon: CheckCircle,
      title: 'GDPR Compliant',
      description: 'We follow GDPR guidelines and respect your privacy rights'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <Hero
        title="Privacy"
        subtitle="Policy"
        description="We take your privacy seriously. Learn how we protect and handle your information."
        primaryButton={{ text: 'Contact Us', href: '/contact' }}
        secondaryButton={{ text: 'Learn More', href: '#content' }}
        badge="GDPR Compliant & Secure"
        previewCards={[
          {
            icon: Shield,
            iconBg: 'bg-gradient-to-r from-blue-600 to-purple-600',
            title: 'Data Protection',
            description: 'Enterprise-grade security measures',
            price: 'Encrypted & Secure',
            priceColor: 'text-blue-600'
          },
          {
            icon: Lock,
            iconBg: 'bg-gradient-to-r from-purple-600 to-pink-600',
            title: 'Secure Storage',
            description: 'Protected servers & encryption',
            price: '24/7 Monitoring',
            priceColor: 'text-purple-600'
          },
          {
            icon: Eye,
            iconBg: 'bg-gradient-to-r from-green-600 to-blue-600',
            title: 'Transparency',
            description: 'Clear data handling practices',
            price: 'Full Disclosure',
            priceColor: 'text-green-600'
          }
        ]}
        floatingIcons={[
          { position: 'top-1/4 left-10', size: 'w-12 h-12', bg: 'bg-blue-500/20', component: Shield, iconClass: 'h-6 w-6 text-blue-600' },
          { position: 'top-1/3 right-16', size: 'w-10 h-10', bg: 'bg-purple-500/20', component: Lock, iconClass: 'h-5 w-5 text-purple-600' },
          { position: 'bottom-1/3 left-20', size: 'w-14 h-14', bg: 'bg-green-500/20', component: UserCheck, iconClass: 'h-7 w-7 text-green-600' },
          { position: 'bottom-1/4 right-10', size: 'w-11 h-11', bg: 'bg-orange-500/20', component: Database, iconClass: 'h-5 w-5 text-orange-600' }
        ]}
      />

      {/* Privacy Features */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {privacyFeatures.map((feature, index) => (
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

      {/* Privacy Policy Content */}
      <section ref={contentRef} className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="content-section">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Introduction</CardTitle>
                  <CardDescription>Last updated: {new Date().toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    At FreelanceTeam ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. 
                    This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                  </p>
                  <p className="text-gray-600">
                    By using our services, you agree to the collection and use of information in accordance with this policy.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Information We Collect */}
            <div className="content-section">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                    <p className="text-gray-600 mb-3">We may collect the following personal information:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                      <li>Name and contact information (email, phone number)</li>
                      <li>Company name and job title</li>
                      <li>Project requirements and specifications</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Information</h3>
                    <p className="text-gray-600 mb-3">We automatically collect certain technical information:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                      <li>IP address and browser type</li>
                      <li>Pages visited and time spent</li>
                      <li>Device information and operating system</li>
                      <li>Cookies and similar technologies</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* How We Use Information */}
            <div className="content-section">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 mb-3">We use the collected information for the following purposes:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Service Delivery:</strong> To provide and maintain our services</li>
                    <li><strong>Communication:</strong> To respond to your inquiries and provide support</li>
                    <li><strong>Project Management:</strong> To understand your requirements and deliver projects</li>
                    <li><strong>Improvement:</strong> To improve our services and user experience</li>
                    <li><strong>Legal Compliance:</strong> To comply with legal obligations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Data Protection */}
            <div className="content-section">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Data Protection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, 
                    alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication</li>
                    <li>Secure hosting and infrastructure</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Data Sharing */}
            <div className="content-section">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Data Sharing and Disclosure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>Consent:</strong> With your explicit consent</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Your Rights */}
            <div className="content-section">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Your Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 mb-3">You have the following rights regarding your personal data:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Access:</strong> Request access to your personal data</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                    <li><strong>Objection:</strong> Object to processing of your data</li>
                    <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    To exercise these rights, please contact us at <span className="text-blue-600">snevare9@gmail.com</span>
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Cookies */}
            <div className="content-section">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Cookies and Tracking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    We use cookies and similar tracking technologies to enhance your experience on our website. 
                    These technologies help us:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Improve website functionality and performance</li>
                    <li>Provide personalized content and recommendations</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Data Retention */}
            <div className="content-section">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Data Retention</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, 
                    unless a longer retention period is required by law. Typically, we retain:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Project-related data for 7 years after project completion</li>
                    <li>Communication records for 3 years</li>
                    <li>Website analytics data for 2 years</li>
                    <li>Marketing data until consent is withdrawn</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="content-section">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    If you have any questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <strong>Email:</strong> <span className="text-blue-600">snevare9@gmail.com</span>
                    </p>
                    <p className="text-gray-600">
                      <strong>Phone:</strong> +91 7758875837
                    </p>
                    <p className="text-gray-600">
                      <strong>Response Time:</strong> We aim to respond to privacy-related inquiries within 24 hours.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Your privacy is our priority. Start your project with confidence knowing your data is protected.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50">
              Start Your Project
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-purple-600">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 