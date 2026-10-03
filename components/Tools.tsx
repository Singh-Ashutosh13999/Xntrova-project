"use client";

import React from "react";

const tools = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Node.js", category: "Backend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Figma", category: "Design" },
  { name: "AWS", category: "Cloud" },
  { name: "Google Analytics", category: "Data" },
  { name: "MongoDB", category: "Database" },
  { name: "Vercel", category: "Deployment" },
  { name: "Framer Motion", category: "Animation" },
  { name: "GraphQL", category: "API" },
];

export default function Tools() {
  return (
    <section className="relative flex min-h-[700px] items-center overflow-hidden bg-slate-900 py-20">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <span className="mb-4 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Technology Stack
          </span>

          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Tools We Work With
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            We leverage powerful modern technologies and platforms to build
            fast, secure, and scalable digital solutions.
          </p>

        </div>

        {/* Skills */}
        <div className="mx-auto overflow-hidden pb-4 -mx-6 px-6 sm:px-6 sm:mx-auto max-w-5xl">
          <div className="flex w-max animate-[marquee_30s_linear_infinite] sm:animate-none sm:w-auto sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {[...tools, ...tools].map((tool, idx) => (
              <div
                key={idx}
                className={`
                  group flex items-center gap-3
                  rounded-2xl
                  border border-slate-700/60
                  bg-slate-800/60
                  px-5 py-4
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/50
                  hover:bg-slate-800
                  hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)]
                  w-[280px] sm:w-auto shrink-0
                  ${idx >= tools.length ? 'sm:hidden' : ''}
                `}
              >

                {/* Dot */}
                <span
                  className="
                    h-2.5 w-2.5 shrink-0 rounded-full
                    bg-blue-500
                    shadow-[0_0_10px_rgba(59,130,246,0.7)]
                    transition-transform duration-300
                    group-hover:scale-150
                  "
                />

                {/* Content */}
                <div className="min-w-0 text-left">
                  <h3 className="truncate text-sm font-bold text-white md:text-base">
                    {tool.name}
                  </h3>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    {tool.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}