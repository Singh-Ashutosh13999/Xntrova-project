"use client";
import React from "react";
import Link from "next/link";

export default function Performance() {
  return (
    <section className="py-10 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Unique Visual Composition */}
          <div className="relative w-full h-[350px] md:h-[500px] mb-8 md:mb-0 max-w-full">
            {/* Main Background Image element */}
            <div className="absolute inset-0 bg-slate-200 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Performance Graph"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 to-transparent mix-blend-multiply"></div>
            </div>

            {/* Overlapping Floating Element */}
            <div className="absolute -bottom-4 right-4 md:-bottom-8 md:-right-8 bg-white p-4 md:p-6 rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] border border-slate-100 w-56 md:w-64 animate-[bounce_4s_ease-in-out_infinite] z-10 max-w-[90vw]">
              <div className="flex items-center justify-between mb-2 md:mb-4">
                <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider">Growth</span>
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <div className="text-2xl md:text-4xl font-black text-slate-900 mb-1">+248%</div>
              <p className="text-xs md:text-sm text-slate-500">Increase in total conversions</p>
            </div>

            {/* Overlapping Top Left Element */}
            <div className="absolute top-4 -left-4 md:top-8 md:-left-8 bg-blue-600 p-3 md:p-4 rounded-xl shadow-xl w-12 h-12 md:w-16 md:h-16 flex items-center justify-center z-10">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              Turning Potential Into <span className="text-blue-600">Performance</span>
            </h2>
            <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
              <p>
                Every brand has potential, but potential alone cannot drive growth. At Xntrova, we transform ideas into actions and strategies into measurable results. However, it is not our aim that makes us the best digital marketing company, but our unique approach.
              </p>
              <p>
                Moreover, we use a strategic approach that combines creativity with data. Through this, we ensure that every campaign, piece of content, and marketing effort serves a clear purpose. This is one of the key reasons that makes us the top digital marketing agency. In addition to this, we do not rely on guesswork and believe in complete transparency, collaboration, and continuous improvement.
              </p>
            </div>

            <div className="mt-10">
              <Link href="#contact" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-slate-900/20">
                Start Your Journey
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
