'use client';

import { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Award, Clock, CheckCircle, Star, Linkedin, Github, ExternalLink, Shield, Zap, Heart } from 'lucide-react';
import { teamMembers, certifications, guarantees } from '@/lib/data';
import Hero from '@/components/ui/hero';
import { gsap } from 'gsap';

export default function About() {
  const storyRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(storyRef.current,
      { x: -100, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  const stats = [
    { icon: Users, label: 'Team Members', value: '15+', description: 'Certified professionals' },
    { icon: Target, label: 'Projects Completed', value: '100+', description: 'Across 20+ countries' },
    { icon: Award, label: 'Years Experience', value: '8+', description: 'Industry expertise' },
    { icon: Clock, label: 'Response Time', value: '<24h', description: 'Guaranteed response' }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on quality. Every project receives our full attention and expertise.',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'Client-Centric',
      description: 'Your success is our success. We work closely with you throughout the entire process.',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Innovation',
      description: 'We stay ahead of the curve with the latest technologies and best practices.',
      icon: Star,
      color: 'text-purple-600'
    },
    {
      title: 'Reliability',
      description: 'Count on us to deliver on time and exceed your expectations every time.',
      icon: Shield,
      color: 'text-orange-600'
    }
  ];

  const achievements = [
    {
      title: '100% Client Satisfaction',
      description: 'Every client has been satisfied with our work',
      icon: Heart
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all our clients',
      icon: Zap
    },
    {
      title: 'Industry Recognition',
      description: 'Awarded for excellence in web development',
      icon: Award
    },
    {
      title: 'Global Reach',
      description: 'Serving clients across 20+ countries',
      icon: ExternalLink
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <Hero
        title="About"
        subtitle="TechFoundry Team"
        description="We're a passionate team of developers, designers, and innovators dedicated to helping businesses thrive in the digital world with proven expertise and reliability."
        primaryButton={{ text: 'Meet Our Team', href: '#team' }}
        secondaryButton={{ text: 'Our Story', href: '#story' }}
        badge="8+ Years of Excellence"
        stats={[
          { value: '15+', label: 'Team Members', valueColor: 'text-blue-600' },
          { value: '100+', label: 'Projects Completed', valueColor: 'text-purple-600' },
          { value: '8+', label: 'Years Experience', valueColor: 'text-green-600' },
          { value: '<24h', label: 'Response Time', valueColor: 'text-orange-600' }
        ]}
        floatingIcons={[
          { position: 'top-1/4 left-10', size: 'w-12 h-12', bg: 'bg-blue-500/20', component: Users, iconClass: 'h-6 w-6 text-blue-600' },
          { position: 'top-1/3 right-16', size: 'w-10 h-10', bg: 'bg-purple-500/20', component: Award, iconClass: 'h-5 w-5 text-purple-600' },
          { position: 'bottom-1/3 left-20', size: 'w-14 h-14', bg: 'bg-green-500/20', component: Target, iconClass: 'h-7 w-7 text-green-600' },
          { position: 'bottom-1/4 right-10', size: 'w-11 h-11', bg: 'bg-orange-500/20', component: Clock, iconClass: 'h-5 w-5 text-orange-600' }
        ]}
      />

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={storyRef}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2025, TechFoundry started as a vision to bridge the gap between 
                innovative technology and business needs. We saw too many companies struggling 
                with unreliable freelancers and impersonal agencies.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our solution was simple: create a dedicated team of experts who work together 
                seamlessly, providing the reliability of an in-house team with the flexibility 
                and cost-effectiveness of freelancing.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to have helped over 100 businesses transform their digital 
                presence and achieve their goals through innovative technology solutions.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team working together"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg text-white">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900">{stat.value}</CardTitle>
                  <CardDescription className="text-gray-600">{stat.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <value.icon className={`h-6 w-6 text-white`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones that define our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented individuals who make it all possible
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center hover:shadow-lg transition-shadow">
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
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1 justify-center mb-3">
                      {member.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div className="flex items-center justify-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{member.experience} experience</span>
                      </div>
                      <div className="flex items-center justify-center space-x-1">
                        <Award className="h-3 w-3" />
                        <span>{member.certifications.length} certifications</span>
                      </div>
                      <div className="text-xs text-gray-400">
                        {member.education}
                      </div>
                    </div>
                    <div className="flex justify-center space-x-2 pt-2">
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.github && (
                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {member.behance && (
                        <a href={member.behance} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
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

      {/* Guarantees Section */}
      <section className="py-20 bg-white">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how our team can help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50">
              Start Your Project
            </a>
            <a href="/portfolio" className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-purple-600">
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}