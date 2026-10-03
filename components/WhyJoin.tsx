"use client";
import React from "react";

const reasons = [
  {
    title: "Unmatched Expertise",
    desc: "Our team consists of industry veterans who have successfully navigated complex digital landscapes, ensuring your brand stays ahead of the curve.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    )
  },
  {
    title: "Data-Driven Decisions",
    desc: "We don't guess. Every campaign, strategy, and adjustment is backed by rigorous data analysis to guarantee maximum ROI for your investment.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    )
  },
  {
    title: "Tailored Strategies",
    desc: "Your business is unique, and so is our approach. We craft hyper-personalized marketing funnels designed specifically for your target audience.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
    )
  }
];

export default function WhyJoin() {
  return (
    <section className="py-10 bg-white relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 translate-x-20 -z-10 hidden lg:block"></div>
      
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-bold uppercase tracking-widest text-blue-600 shadow-sm">
            Our Advantage
          </span>
          <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl leading-tight">
            Why Partner With Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Global Digital Experts?</span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
            Partnering with us means gaining an extension of your own team. We are fiercely dedicated to turning your vision into measurable digital success.
          </p>
        </div>

        {/* Cards Section - Marquee on Mobile, Grid on Desktop */}
        <div className="mb-16 flex overflow-hidden gap-6 px-6 pb-8 -mx-6 md:mx-0 md:grid md:grid-cols-3 md:px-0 md:pb-0">
          <div className="flex w-max gap-8 animate-[marquee_40s_linear_infinite] md:animate-none md:w-auto md:contents">
            {[...reasons, ...reasons].map((reason, idx) => (
              <div
                key={idx}
                className={`
                  group relative flex w-[300px] shrink-0 flex-col
                  overflow-hidden rounded-[2rem]
                  bg-white
                  p-10
                  border border-slate-100
                  shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]
                  transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(37,99,235,0.15)]
                  sm:w-[350px]
                  md:w-auto
                  ${idx >= reasons.length ? "md:hidden" : ""}
                `}
              >
                {/* Unique Card Design Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110 -z-10"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 group-hover:rotate-6 transition-transform duration-300">
                  {reason.icon}
                </div>
                
                <h3 className="mb-4 text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {reason.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed text-base flex-grow">
                  {reason.desc}
                </p>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer">
                  Learn more 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
