"use client";
import React from "react";

const seoMethods = [
  {
    title: "Keyword Research",
    desc: "We target high-intent, high-volume keywords to attract the right audience to your business.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    )
  },
  {
    title: "On-Page Optimization",
    desc: "From metadata to content structure, we optimize your website elements to rank higher effortlessly.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    )
  },
  {
    title: "Link Building",
    desc: "We build authoritative and relevant backlinks to signal trust and relevance to search engines.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
    )
  },
  {
    title: "Technical SEO",
    desc: "Enhancing your site's speed, mobile-friendliness, and crawlability for maximum search engine performance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    )
  }
];

export default function SeoGrowth() {
  return (
    <section className="py-10 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            How to Grow Your Business Using <span className="text-blue-600">SEO</span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Unlock the true potential of organic search. We use proven, white-hat SEO strategies to elevate your rankings, increase visibility, and drive high-converting traffic globally.
          </p>
        </div>

        {/* Marquee on mobile, Grid on desktop */}
        <div className="overflow-hidden pb-4 -mx-6 px-6 sm:px-6 sm:mx-auto">
          <div className="flex w-max gap-6 animate-[marquee_40s_linear_infinite] sm:animate-none sm:w-auto sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {[...seoMethods, ...seoMethods].map((method, idx) => (
              <div 
                key={idx} 
                className={`
                  w-[280px] sm:w-auto shrink-0 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group
                  ${idx >= seoMethods.length ? 'sm:hidden' : ''}
                `}
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{method.title}</h3>
                <p className="text-slate-500 leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
