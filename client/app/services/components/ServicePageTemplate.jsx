"use client";
import Link from "next/link";
import Head from "next/head";
import { ChevronRight } from "lucide-react";

export default function ServicePageTemplate({
  icon: Icon,
  title,
  metaTitle,
  metaDescription,
  description,
  heroImage,
  mainTitle,
  mainParagraph,
  processTitle,
  processSteps = [],
  features = [],
  serviceDetails = [],
  banner,
  faqs = [],
  cta,
  OtherServices = [],
}) {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      {/* Breadcrumb */}
      <div className="max-w-7xl pt-20 mx-auto px-4 lg:px-8">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-gray-400" />
          <Link href="/services" className="hover:text-blue-600">
            Services
          </Link>
          <ChevronRight className="h-3 w-3 text-gray-400" />
          <span className="text-gray-800">{title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-10 md:pt-5 md:pb-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
            {/* Left */}
            <div className="lg:col-span-1 items-start">
              <div className="mb-6 flex justify-center md:justify-start">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-600 text-white">
                  <Icon className="h-6 w-6" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#3b3664] mb-6 text-center md:text-left">
                {title}
                {/* <br />
                Design & Development */}
              </h1>
              <p className="text-[#3b3664] text-lg mb-8 max-w-2xl text-center md:text-justify">
                {description}
              </p>
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_200%] text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-500 ease-in-out hover:bg-right"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-1 flex justify-center  relative pt-8 md:pt-0 overflow-visible">
              <div className="relative w-full !max-w-none flex items-center justify-center overflow-visible">
                {/* Blob background */}
                <img
                  src="/blob-cropped.svg"
                  alt="decorative background shape"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[20rem] sm:w-[30rem] md:w-[45rem] lg:w-[75rem]
                      scale-90 sm:scale-100  md:scale-100
                      opacity-90 -z-10"
                />
                <img
                  src={heroImage}
                  alt="service mockup"
                  className="relative z-10 w-[100%] md:w-[110%] lg:w-[170%]  h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {mainTitle}
              </h2>
              <p className="text-gray-600 mb-6 whitespace-pre-line">
                {mainParagraph}
              </p>

              {/* Process */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {processTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {processSteps.map((step, i) => (
                    <div
                      key={i}
                      className="bg-card p-6 rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all"
                    >
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-blue-600 mb-4">
                        <step.Icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  What You’ll Get
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                  {features.map((item, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="text-blue-600">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              <div className="bg-card rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Service Details
                </h3>
                {serviceDetails.map(([label, value], i) => (
                  <div
                    key={i}
                    className="flex justify-between py-3 border-b border-gray-100"
                  >
                    <span className="text-gray-600 w-40">{label}</span>
                    <span
                      className={`font-bold text-right ${
                        value.includes("Satisfaction")
                          ? "text-green-600"
                          : "text-gray-800"
                      }`}
                    >
                      {value}
                    </span>
                  </div>
                ))}
                <Link href="/contact">
                  <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                    Get Free Consultation
                  </button>
                </Link>
                <p className="mt-6 text-center text-gray-500 text-sm">
                  Need help choosing the right plan?{" "}
                  <Link
                    href="/contact"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Contact our experts
                  </Link>
                </p>
              </div>

              {/* Other Services */}
              <div className="bg-card rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Other Services
                </h3>
                <ul className="divide-y divide-gray-100">
                  {OtherServices.map((s, i) => (
                    <li key={i} className="py-3 flex items-center">
                      <s.icon className="h-5 w-5 text-purple-600 mr-3" />
                      <Link
                        href={s.href}
                        className="text-foreground hover:text-blue-600 transition"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${banner.image})`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl text-white py-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              {banner.title}
            </h2>
            <p className="text-lg text-white/90 mb-8">{banner.subtitle}</p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {cta && (
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">{cta.title}</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">{cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <button className="bg-white text-blue-600 hover:text-blue-700 px-6 py-3 rounded-lg font-medium transition">
                  {cta.button1}
                </button>
              </Link>
              <Link
                href="/portfolio"
                className="border border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition text-white"
              >
                {cta.button2}
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
