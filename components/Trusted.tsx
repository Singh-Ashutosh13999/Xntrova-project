"use client";

import React from "react";

const companies = [
  { name: "TechCorp", color: "text-blue-600", dot: "bg-blue-500" },
  { name: "GlobalReach", color: "text-emerald-600", dot: "bg-emerald-500" },
  { name: "InnovateX", color: "text-violet-600", dot: "bg-violet-500" },
  { name: "Apex Marketing", color: "text-orange-600", dot: "bg-orange-500" },
  { name: "Stellar Solutions", color: "text-cyan-600", dot: "bg-cyan-500" },
  { name: "Nexus Digital", color: "text-indigo-600", dot: "bg-indigo-500" },
  { name: "Vanguard Media", color: "text-rose-600", dot: "bg-rose-500" },
  { name: "Peak Performance", color: "text-amber-600", dot: "bg-amber-500" },
  { name: "Quantum Growth", color: "text-teal-600", dot: "bg-teal-500" },
  { name: "Elevate Brands", color: "text-pink-600", dot: "bg-pink-500" },
];

export default function Trusted() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white py-10">

      {/* Heading */}
      <div className="mx-auto mb-10 max-w-7xl px-6 text-center">
        <span className="mb-3 inline-block rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Our Network
        </span>

        <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          Trusted by innovative companies
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
          Helping ambitious businesses turn ideas into powerful digital
          experiences.
        </p>
      </div>

      {/* Company Grid */}
      <div className="mx-auto overflow-hidden pb-4 -mx-6 px-6 sm:px-6 sm:mx-auto max-w-6xl">
        <div className="flex w-max animate-[marquee_30s_linear_infinite] sm:animate-none sm:w-auto sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[...companies, ...companies].map((company, idx) => (
            <div
              key={idx}
              className={`
                group relative flex items-center gap-3
                rounded-2xl border border-slate-200
                bg-white px-5 py-4
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-slate-300
                hover:shadow-lg
                w-[280px] sm:w-auto shrink-0
                ${idx >= companies.length ? 'sm:hidden' : ''}
              `}
            >
              {/* Colored dot */}
              <span
                className={`h-2.5 w-2.5 rounded-full ${company.dot} shadow-sm transition-transform duration-300 group-hover:scale-150`}
              />

              {/* Company Name */}
              <span
                className={`text-sm font-bold ${company.color} transition-all duration-300 group-hover:tracking-wide`}
              >
                {company.name}
              </span>

              {/* Hover Arrow */}
              <span className="ml-auto translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
            </div>
          ))}

        </div>
      </div>
      {/* Bottom Trust Text */}
      <div className="mt-10 flex items-center justify-center gap-2 text-sm text-slate-400">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Growing together with forward-thinking businesses
      </div>

    </section>
  );
}
