"use client";

import { useEffect, useRef, useState } from "react";
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
  ExternalLink,
  ArrowRight,
  Calendar,
  DollarSign,
  Users,
  TrendingUp,
  Target,
  CheckCircle,
  IndianRupee,
} from "lucide-react";
import { portfolioItems, testimonials } from "@/lib/data";
import Hero from "@/components/ui/hero";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const portfolioRef = useRef(null);

  const categories = [
    "all",
    "Web Development",
    "Mobile Development",
    "AI & Machine Learning",
    "Cloud Solutions",
    "UI/UX Design",
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    const nodes = portfolioRef.current?.querySelectorAll(".portfolio-card");
    if (nodes && nodes.length > 0) {
      gsap.fromTo(
        nodes,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: portfolioRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <Hero
        title="Our"
        subtitle="Portfolio"
        description="Explore our latest projects and see how we've helped businesses achieve their goals with measurable results"
        primaryButton={{ text: "Start Your Project", href: "/contact" }}
        secondaryButton={{ text: "View Case Studies", href: "/case-studies" }}
        badge="100+ Projects Delivered"
        stats={[
          { value: "50+", label: "Happy Clients", valueColor: "text-blue-600" },
          {
            value: "4.9/5",
            label: "Client Rating",
            valueColor: "text-purple-600",
          },
          {
            value: "100%",
            label: "Success Rate",
            valueColor: "text-green-600",
          },
          { value: "20+", label: "Industries", valueColor: "text-orange-600" },
        ]}
        floatingIcons={[
          {
            position: "top-1/4 left-10",
            size: "w-12 h-12",
            bg: "bg-blue-500/20",
            component: Target,
            iconClass: "h-6 w-6 text-blue-600",
          },
          {
            position: "top-1/3 right-16",
            size: "w-10 h-10",
            bg: "bg-purple-500/20",
            component: TrendingUp,
            iconClass: "h-5 w-5 text-purple-600",
          },
          {
            position: "bottom-1/3 left-20",
            size: "w-14 h-14",
            bg: "bg-green-500/20",
            component: CheckCircle,
            iconClass: "h-7 w-7 text-green-600",
          },
          {
            position: "bottom-1/4 right-10",
            size: "w-11 h-11",
            bg: "bg-orange-500/20",
            component: Users,
            iconClass: "h-5 w-5 text-orange-600",
          },
        ]}
      />

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

      {/* Portfolio Grid */}
      <section ref={portfolioRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((item) => (
              <Card
                key={item.id}
                className="portfolio-card group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(item)}
              >
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
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Link
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
                        <span className="text-gray-600">
                          {item.results.length} results
                        </span>
                      </div>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="text-xs text-gray-500 mb-2">
                        Key Results:
                      </div>
                      <div className="space-y-1">
                        {item.results.slice(0, 2).map((result, index) => (
                          <div
                            key={index}
                            className="flex items-center text-xs text-gray-600"
                          >
                            <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-600">{selectedProject.description}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                >
                  <span className="text-2xl">×</span>
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Project Overview
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-blue-500" />
                        <span>
                          <strong>Client:</strong> {selectedProject.client}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-green-500" />
                        <span>
                          <strong>Duration:</strong> {selectedProject.duration}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-purple-500" />
                        <span>
                          <strong>Budget:</strong> {selectedProject.budget}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target className="h-4 w-4 text-orange-500" />
                        <span>
                          <strong>Category:</strong> {selectedProject.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Challenge</h3>
                    <p className="text-gray-600 text-sm">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Solution</h3>
                    <p className="text-gray-600 text-sm">
                      {selectedProject.solution}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Results Achieved
                    </h3>
                    <div className="space-y-2">
                      {selectedProject.results.map((result, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedProject.link && (
                    <Button asChild className="w-full">
                      <Link
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live Project{" "}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              <Card key={testimonial.id} className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 bg-yellow-400 rounded-full"
                    ></div>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "{testimonial.testimonial}"
                </p>
                <div className="flex items-center space-x-3">
                  {testimonial.avatar && (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name || "User Avatar"}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  )}

                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.company}
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
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Your project could be our
            next success story.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
