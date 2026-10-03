"use client";
import React from "react";

const stats = [
  { value: "500+", label: "Projects Delivered", desc: "Successfully completed for global clients." },
  { value: "98%", label: "Client Retention", desc: "Our clients trust us for long-term growth." },
  { value: "$10M+", label: "Revenue Generated", desc: "Driven through our marketing strategies." },
  { value: "15+", label: "Years Experience", desc: "Industry-leading expertise and innovation." },
];

export default function Statistics() {
  return (
    <section className="relative flex min-h-[500px] items-center overflow-hidden bg-slate-900 py-10 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Our Impact
          </span>
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Metrics That Define Our Digital Excellence
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400">
            We don't just deliver projects; we deliver measurable success. Our data-driven approach ensures consistent growth and unparalleled results for every partner.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="group relative bg-slate-800/50 backdrop-blur-md border border-slate-700/60 p-8 rounded-3xl text-center hover:-translate-y-2 hover:bg-slate-800 hover:border-blue-500/50 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] transition-all duration-300 shadow-xl"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-400 mb-3 drop-shadow-sm">
                {stat.value}
              </h3>
              <h4 className="text-lg font-bold text-white mb-2">{stat.label}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
