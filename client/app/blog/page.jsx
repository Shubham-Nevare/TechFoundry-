'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight, BookOpen, PenTool, Lightbulb, TrendingUp } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import Hero from '@/components/ui/hero';
import { gsap } from 'gsap';

export default function Blog() {
  const postsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(postsRef.current.querySelectorAll('.blog-card'),
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: postsRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <Hero
        title="Our"
        subtitle="Blog"
        description="Insights, tutorials, and industry trends from our team of experts"
        primaryButton={{ text: 'Subscribe', href: '#newsletter' }}
        secondaryButton={{ text: 'Latest Posts', href: '#posts' }}
        badge="Expert Insights & Tutorials"
        stats={[
          { value: '50+', label: 'Articles Published', valueColor: 'text-blue-600' },
          { value: '10K+', label: 'Monthly Readers', valueColor: 'text-purple-600' },
          { value: '5+', label: 'Expert Authors', valueColor: 'text-green-600' },
          { value: 'Weekly', label: 'New Content', valueColor: 'text-orange-600' }
        ]}
        floatingIcons={[
          { position: 'top-1/4 left-10', size: 'w-12 h-12', bg: 'bg-blue-500/20', component: BookOpen, iconClass: 'h-6 w-6 text-blue-600' },
          { position: 'top-1/3 right-16', size: 'w-10 h-10', bg: 'bg-purple-500/20', component: PenTool, iconClass: 'h-5 w-5 text-purple-600' },
          { position: 'bottom-1/3 left-20', size: 'w-14 h-14', bg: 'bg-green-500/20', component: Lightbulb, iconClass: 'h-7 w-7 text-green-600' },
          { position: 'bottom-1/4 right-10', size: 'w-11 h-11', bg: 'bg-orange-500/20', component: TrendingUp, iconClass: 'h-5 w-5 text-orange-600' }
        ]}
      />

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Post</h2>
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <Badge variant="secondary" className="mb-4">
                    {blogPosts[0].category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${blogPosts[0].id}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={postsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="blog-card group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href={`/blog/${post.id}`}>
                      Read More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights and updates from our team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <Button variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}