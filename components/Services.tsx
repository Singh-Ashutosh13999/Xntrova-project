"use client";

import React from "react";
import Link from "next/link";

const services = [
  {
    title: "UI/UX Design",
    desc: "Intuitive, user-centered designs that captivate and convert your target audience into loyal customers through seamless digital interactions.",
    linkText: "Explore Design",
    imgSrc:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    title: "Web Development",
    desc: "Fast, scalable, and secure websites built with modern technologies ensuring maximum performance and reliability for your growing business.",
    linkText: "Discover Development",
    imgSrc:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven strategies to increase your reach, drive qualified traffic, and maximize your ROI across all digital channels.",
    linkText: "View Strategies",
    imgSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "Brand Strategy",
    desc: "Crafting a unique and compelling brand identity that resonates with your audience and differentiates you from the competition.",
    linkText: "See Brand Services",
    imgSrc:
      "https://images.unsplash.com/photo-1557425955-df376b5903c8?w=800&q=80",
  },
  {
    title: "E-Commerce Solutions",
    desc: "End-to-end e-commerce platforms designed to provide a frictionless shopping experience and boost your online sales.",
    linkText: "Explore E-Commerce",
    imgSrc:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    title: "SEO Optimization",
    desc: "Advanced search engine optimization techniques to improve your organic visibility and rank higher on major search engines.",
    linkText: "Learn About SEO",
    imgSrc:
      "https://images.unsplash.com/photo-1432888117281-ea56699ebac1?w=800&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-16">
      <div className="container mx-auto px-6">

        {/* Heading Section */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Our Services
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            Comprehensive solutions tailored to elevate your brand. We combine
            creativity with technical expertise to deliver measurable results.
          </p>
        </div>

        {/* Services Grid / Scroll on Mobile */}
        <div className="mb-16 flex overflow-hidden gap-6 px-6 pb-8 -mx-6 md:mx-0 md:grid md:grid-cols-2 md:px-0 md:pb-0 lg:grid-cols-3">

          <div className="flex w-max gap-6 animate-[marquee_50s_linear_infinite] md:animate-none md:w-auto md:contents">

            {[...services, ...services].map((service, idx) => (
              <div
                key={idx}
                className={`
                  group flex w-[300px] shrink-0 flex-col
                  overflow-hidden rounded-3xl
                  border border-slate-100
                  bg-white
                  shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)]
                  sm:w-[350px]
                  md:w-auto
                  ${idx >= services.length ? "md:hidden" : ""}
                `}
              >

                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0" />
                </div>

                {/* Card Content */}
                <div className="flex flex-grow flex-col p-8">

                  <h3 className="mb-3 text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mb-6 line-clamp-3 flex-grow leading-relaxed text-slate-600">
                    {service.desc}
                  </p>

                  {/* Service Link */}
                  <Link
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group/link mt-auto inline-flex w-fit items-center font-semibold text-blue-600"
                  >
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover/link:-translate-y-full">
                        {service.linkText}
                      </span>

                      <span className="absolute left-0 top-0 inline-block translate-y-full text-blue-700 transition-transform duration-300 group-hover/link:translate-y-0">
                        {service.linkText}
                      </span>
                    </span>

                    <svg
                      className="ml-2 h-5 w-5 transition-transform duration-300 group-hover/link:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <Link
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-blue-600 px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-blue-500/30"
          >
            View All Services

            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}