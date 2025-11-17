"use client";
import React, { useEffect, useState } from "react";

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Simple animation on scroll
    const cards = document.querySelectorAll(".pricing-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-blue-500 pt-20 pb-10 px-4">
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/917208475911?text=Hi%20Developous!%20I%20want%20to%20discuss%20a%20website%20project."
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-xl">💬</span>
        </a>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header Section with Urgency */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-16 px-8 text-center relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 text-6xl">🚀</div>
            <div className="absolute bottom-10 right-10 text-6xl">💻</div>
            <div className="absolute top-1/2 left-1/4 text-4xl">⭐</div>
          </div>

          <div className="relative z-10">
            <div className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-white">
              DEVELOPOUS
            </div>
            <div className="text-xl opacity-90 mb-5">
              Where Your Digital Dreams Become Reality
            </div>

            {/* Urgency Badge */}
            <div className="bg-amber-500 text-white px-6 py-2 rounded-full font-semibold inline-block mb-4 animate-pulse">
              🎯 LIMITED SPOTS AVAILABLE - NOVEMBER 2025
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Stop Losing Customers to Competitors.
              <br />
              <span className="text-amber-300">
                Get a Professional Website That Converts Visitors into Paying
                Customers
              </span>
            </h1>

            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join 200+ Indian businesses that increased their revenue by 47%
              within 3 months of launching their professional website
            </p>

            {/* Social Proof */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 opacity-90">
              <div className="flex items-center">
                <div className="text-amber-300 mr-2">⭐⭐⭐⭐⭐</div>
                <span className="text-sm">4.9/5 (127 Reviews)</span>
              </div>
              <div className="flex items-center">
                <div className="text-green-300 mr-2">✅</div>
                <span className="text-sm">200+ Happy Clients</span>
              </div>
              <div className="flex items-center">
                <div className="text-blue-300 mr-2">🏆</div>
                <span className="text-sm">Award Winning Designs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Problem-Solution Section */}
        <div className="py-12 px-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Are You Facing These{" "}
              <span className="text-red-500">Costly Problems</span>?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-left">
                <div className="flex items-start mb-4">
                  <div className="text-red-500 text-xl mr-3">❌</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Invisible to Potential Customers
                    </h3>
                    <p className="text-gray-600">
                      Your business doesn't show up when people search for your
                      services online
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <div className="text-red-500 text-xl mr-3">❌</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Unprofessional First Impression
                    </h3>
                    <p className="text-gray-600">
                      Outdated website makes customers doubt your credibility
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-red-500 text-xl mr-3">❌</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Missing Out on Mobile Traffic
                    </h3>
                    <p className="text-gray-600">
                      60%+ of your potential customers browse on mobile devices
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-left">
                <div className="flex items-start mb-4">
                  <div className="text-red-500 text-xl mr-3">❌</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      No 24/7 Lead Generation
                    </h3>
                    <p className="text-gray-600">
                      Your business stops making money when you're not working
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <div className="text-red-500 text-xl mr-3">❌</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Losing to Tech-Savvy Competitors
                    </h3>
                    <p className="text-gray-600">
                      Competitors with better websites are taking your customers
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-red-500 text-xl mr-3">❌</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Wasting Money on Ineffective Ads
                    </h3>
                    <p className="text-gray-600">
                      Poor website converts paid traffic into wasted money
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-500">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                Our Solution: Your 24/7 Sales Machine
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                We build websites that work while you sleep - generating leads,
                building trust, and converting visitors into loyal customers.
              </p>
              <div className="text-green-600 font-semibold text-xl">
                "Your website should be your hardest working employee - and it
                works 24/7 without breaks!"
              </div>
            </div>
          </div>
        </div>

        {/* ROI Calculator Section */}
        <div className="py-12 px-6 border-b border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-8">
              Calculate Your{" "}
              <span className="text-green-600">Potential ROI</span>
            </h2>
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    3-5x
                  </div>
                  <div className="text-gray-600">Average Revenue Increase</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    47%
                  </div>
                  <div className="text-gray-600">More Customer Inquiries</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    15-30
                  </div>
                  <div className="text-gray-600">Days to Break Even</div>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-700">
              Most clients recover their investment within the first month
              through new customer acquisitions
            </p>
          </div>
        </div>

        {/* Pricing Tiers Section */}
        <div className="py-12 px-6 border-b border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Choose Your Growth Engine
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every package includes our{" "}
              <span className="text-green-600 font-semibold">
                "Profit-Boosting" Guarantee
              </span>{" "}
              - we don't just build websites, we build business growth machines
            </p>
          </div>

          {/* Limited Time Offer Banner */}
          <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white py-4 px-6 rounded-lg text-center mb-8 max-w-2xl mx-auto">
            <div className="font-bold text-lg">
              🎁 LIMITED TIME: Book this month & get FREE Premium Hosting for 6
              Months (₹3,000 Value)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Starter Card */}
            <div className="pricing-card bg-white rounded-xl p-8 shadow-2xl border-2 border-green-500 hover:shadow-2xl transition-all duration-300 relative overflow-hidden hover:scale-105">
              {/* Ribbon */}
              
               <div className="absolute top-0 left-0 right-0 bg-green-500 text-white py-2 text-center font-bold">
                MOST POPULAR
              </div>

              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Starter Website
                </h3>
                <div className="text-sm text-gray-500">
                  Perfect for getting started online
                </div>
              </div>

              <div className="text-3xl font-bold text-blue-500 mb-2">
                ₹7,999 - ₹11,999
              </div>
              <div className="text-green-600 text-sm font-semibold mb-6">
                Pay once, own forever
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>3-5 Professional Pages</strong> that convert
                    visitors
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Mobile-First Design</strong> - looks amazing on all
                    devices
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>WhatsApp Business Integration</strong> for instant
                    leads
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Google Business Profile</strong> setup included
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Basic SEO Foundation</strong> to rank on Google
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>7-day delivery</strong> guaranteed
                  </span>
                </li>
              </ul>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <div className="font-semibold text-green-800 mb-1">
                  Perfect For:
                </div>
                <div className="text-sm text-green-700">
                  Local shops, freelancers, small service businesses
                </div>
              </div>

              <a
                href="https://wa.me/917208475911?text=Hi%20Developous!%20I'm%20interested%20in%20the%20Starter%20Website%20package."
                className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Start My Project 🚀
              </a>
            </div>

            {/* Business Card - HIGHLIGHTED */}
            <div className="pricing-card bg-white rounded-xl p-8 shadow-2xl border-2 border-blue-500 hover:shadow-2xl transition-all duration-300 relative overflow-hidden transform hover:scale-105 scale-105">
              <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white py-2 text-center font-bold">
                ⭐ BEST VALUE - RECOMMENDED
              </div>
              <div className="text-center mb-6 mt-9">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Business Website
                </h3>
                <div className="text-sm text-gray-500">
                  Complete online presence for growing businesses
                </div>
              </div>

              <div className="text-3xl font-bold text-blue-500 mb-2">
                ₹14,999 - ₹24,999
              </div>
              <div className="text-green-600 text-sm font-semibold mb-6">
                + FREE 6 Months Hosting
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>6-10 Professional Pages</strong> with conversion
                    optimization
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Advanced Contact Forms</strong> with spam protection
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Testimonials & Gallery</strong> to build trust
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Blog Section</strong> for content marketing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Premium SEO Setup</strong> - rank faster on Google
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>1 Month Free Support</strong> & training
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Custom Branding</strong> & professional visuals
                  </span>
                </li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <div className="font-semibold text-blue-800 mb-1">
                  Ideal For:
                </div>
                <div className="text-sm text-blue-700">
                  Coaching centers, clinics, gyms, established local businesses
                </div>
              </div>

              <a
                href="https://wa.me/917208475911?text=Hi%20Developous!%20I'm%20interested%20in%20the%20Business%20Website%20package."
                className="block w-full bg-blue-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Get Maximum Value 💎
              </a>
            </div>

            {/* Premium Card */}
            <div className="pricing-card bg-white rounded-xl p-8 shadow-2xl border-2 border-purple-500 hover:shadow-2xl transition-all duration-300 relative overflow-hidden transform hover:scale-105">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Premium + Admin
                </h3>
                <div className="text-sm text-gray-500">
                  For businesses that need full control
                </div>
              </div>

              <div className="text-3xl font-bold text-blue-500 mb-2">
                ₹29,999 - ₹49,999
              </div>
              <div className="text-green-600 text-sm font-semibold mb-6">
                + FREE 6 Months Hosting
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Custom Admin Dashboard</strong> - manage everything
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Content Management System</strong> - update easily
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Lead Management</strong> & tracking system
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Auto Notifications</strong> via Email & WhatsApp
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Multiple Admin Users</strong> for team access
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Analytics Dashboard</strong> to track performance
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>3 Months Free Support</strong> & priority help
                  </span>
                </li>
              </ul>

              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <div className="font-semibold text-purple-800 mb-1">
                  Perfect For:
                </div>
                <div className="text-sm text-purple-700">
                  Multi-location businesses, agencies, growing enterprises
                </div>
              </div>

              <a
                href="https://wa.me/917208475911?text=Hi%20Developous!%20I'm%20interested%20in%20the%20Premium%20%2B%20Admin%20package."
                className="block w-full bg-purple-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
              >
                Get Full Control 🔑
              </a>
            </div>

            {/* E-commerce Card */}
            <div className="pricing-card bg-white rounded-xl p-8 shadow-2xl border-2 border-amber-500 hover:shadow-2xl transition-all duration-300 relative overflow-hidden transform hover:scale-105">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  E-Commerce Pro
                </h3>
                <div className="text-sm text-gray-500">
                  Your complete online store solution
                </div>
              </div>

              <div className="text-3xl font-bold text-blue-500 mb-2">
                ₹34,999 - ₹79,999
              </div>
              <div className="text-green-600 text-sm font-semibold mb-6">
                + FREE 6 Months Hosting
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Complete Online Store</strong> with product catalog
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Secure Payment Gateway</strong> (Razorpay/UPI/Cards)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Booking & Appointment System</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Customer Accounts</strong> & order history
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Inventory Management</strong> system
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Order Tracking</strong> & notifications
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  <span>
                    <strong>Discount & Coupon System</strong>
                  </span>
                </li>
              </ul>

              <div className="bg-amber-50 p-4 rounded-lg mb-6">
                <div className="font-semibold text-amber-800 mb-1">
                  Ideal For:
                </div>
                <div className="text-sm text-amber-700">
                  Online stores, service booking, product businesses
                </div>
              </div>

              <a
                href="https://wa.me/917208475911?text=Hi%20Developous!%20I'm%20interested%20in%20the%20E-Commerce%20Pro%20package."
                className="block w-full bg-amber-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
              >
                Start Selling Online 🛒
              </a>
            </div>
          </div>

          {/* Risk Reversal Section */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 text-center border-2 border-green-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Zero-Risk Investment
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center">
                <div className="text-green-500 text-3xl mr-3">✅</div>
                <div className="text-left">
                  <div className="font-semibold">30-Day Support</div>
                  <div className="text-sm text-gray-600">
                    Free fixes & support
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-green-500 text-3xl mr-3">✅</div>
                <div className="text-left">
                  <div className="font-semibold">Satisfaction Guarantee</div>
                  <div className="text-sm text-gray-600">
                    Love your website or we fix it
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-green-500 text-3xl mr-3">✅</div>
                <div className="text-left">
                  <div className="font-semibold">Source Code Ownership</div>
                  <div className="text-sm text-gray-600">
                    You own everything
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Success Stories */}
        {/* <div className="py-12 px-6 border-b border-gray-200 bg-gray-50">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Success Stories from Our Clients
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-yellow-400 text-xl mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">
                "Developous transformed my coaching center's online presence. We
                got 15 new student admissions in the first month itself!"
              </p>
              <div className="font-semibold">
                - Rajesh Kumar, Coaching Center Owner
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-yellow-400 text-xl mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">
                "Our pet clinic website brings in 20+ new customers every month.
                The WhatsApp integration alone has doubled our appointments!"
              </p>
              <div className="font-semibold">
                - Priya Sharma, Pet Clinic Owner
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-yellow-400 text-xl mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">
                "From zero online sales to ₹50,000/month! The e-commerce website
                they built is incredibly easy to manage."
              </p>
              <div className="font-semibold">
                - Amit Patel, Fashion Boutique
              </div>
            </div>
          </div>
        </div> */}

        {/* Final CTA Section with Urgency */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-16 px-6 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-5 left-10 text-4xl">⚡</div>
            <div className="absolute bottom-5 right-10 text-4xl">🔥</div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>

            {/* Urgency Timer */}
            <div className="bg-amber-500 text-white py-3 px-6 rounded-lg inline-block mb-8 animate-pulse">
              ⏰ Limited Time: Next 3 Clients Get FREE Basic SEO Setup (₹5,000 Value)
            </div>

            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              Don't let your competitors take your customers. Let's build your
              24/7 revenue-generating website today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/917208475911?text=Hi%20Developous!%20I%20want%20to%20discuss%20a%20website%20project%20and%20claim%20the%20limited%20time%20offer."
                className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                📱 Claim My Free Consultation
              </a>

              <a
                href="tel:+917208475911"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-colors duration-300"
              >
                📞 Call Now: +91 72084 75911
              </a>
            </div>

            <p className="mt-8 text-lg opacity-90">
              <strong>Office Hours:</strong> Mon-Sun, 9 AM - 9 PM | Response
              Time: Under 15 Minutes
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-900 text-gray-400 py-8 px-6 text-center">
          <div className="font-medium mb-2">
            Email: contact@developous.com | Website: www.developous.com
          </div>
          <div className="text-sm mb-3 opacity-80 max-w-2xl mx-auto">
            Every website comes with 30-day free support, source code ownership,
            and our satisfaction guarantee. Prices include GST. Payment plans
            available for projects above ₹25,000.
          </div>
          <div className="text-sm opacity-90">
            © 2025 Developous. Transforming Indian Businesses Online. All rights
            reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
