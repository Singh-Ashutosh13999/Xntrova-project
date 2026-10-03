"use client";
import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Focused on <span className="text-blue-600">Results</span>
            </h2>
            <div className="text-lg text-slate-600 mb-8 space-y-6 leading-relaxed">
              <p>
                At Xntrova, we believe that the key to great marketing is understanding people. Each of our strategies is rooted in fresh ideas, robust planning, and a clear focus on what truly matters. We combine creativity with data-driven decisions to create meaningful experiences that connect, engage, and inspire action.
              </p>
              <p className="pl-5 border-l-4 border-blue-600 text-slate-700 italic font-medium text-left">
                Whether you want to shape your brand story, improve visibility, or drive conversion, we take a creative and data-driven approach to ensure the best possible results. Standing as the best digital marketing agency, we aim to create work that delivers measurable results.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8 mt-10 text-left">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Creative Ideas</h4>
                  <p className="text-slate-500 text-sm leading-snug">Fresh thinking that builds powerful brand stories.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Strategic Planning</h4>
                  <p className="text-slate-500 text-sm leading-snug">Smart strategies backed by deep market insights.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Data Analysis</h4>
                  <p className="text-slate-500 text-sm leading-snug">Real-time tracking to measure true marketing ROI.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Brand Excellence</h4>
                  <p className="text-slate-500 text-sm leading-snug">Elevating your visual identity to industry-leading standards.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Diagram - Scaled perfectly for all screens */}
          <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] mt-12 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] flex items-center justify-center scale-[0.6] sm:scale-[0.75] md:scale-[0.9] lg:scale-100 origin-center">
              
              {/* Outer dotted circles */}
              <div className="absolute w-[480px] h-[480px] border-[1.5px] border-dashed border-slate-200 rounded-full animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute w-[300px] h-[300px] border-[1.5px] border-dashed border-slate-200 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>

              {/* Connecting lines to center */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 500 500">
                <line x1="250" y1="250" x2="80" y2="120" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="250" y1="250" x2="420" y2="380" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              {/* Center Main Brand Circle */}
              <div className="relative z-10 w-48 h-48 bg-white rounded-full shadow-[0_15px_50px_-15px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center text-center p-4 border border-blue-50/50">
                <span className="text-3xl font-black bg-gradient-to-r from-blue-700 to-indigo-500 bg-clip-text text-transparent tracking-tight leading-tight">
                  XNTROVA
                </span>
                <span className="text-[11px] uppercase font-bold text-slate-500 tracking-[0.2em] mt-2 block">
                  Driven by Results
                </span>
              </div>

              {/* Orbiting Cards */}
              {/* Top Left */}
              <div className="absolute top-12 left-0 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 w-52 transition-transform hover:-translate-y-1 z-20">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
                </div>
                <h5 className="font-bold text-slate-900 text-sm mb-1">Drive Conversions</h5>
                <p className="text-slate-500 text-xs leading-relaxed">Turn clicks into customers with smart strategies.</p>
              </div>

              {/* Bottom Right */}
              <div className="absolute bottom-12 right-0 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 w-52 transition-transform hover:-translate-y-1 z-20">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h5 className="font-bold text-slate-900 text-sm mb-1">Measure & Improve</h5>
                <p className="text-slate-500 text-xs leading-relaxed">Track performance and optimize continuously.</p>
              </div>

              {/* Top Right Mini Card */}
              <div className="absolute top-16 right-4 bg-white px-5 py-3 rounded-xl shadow-lg border border-slate-100 z-20 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                <span className="text-sm font-bold text-slate-800">Performance</span>
              </div>

              {/* Bottom Left Mini Card */}
              <div className="absolute bottom-20 left-4 bg-white px-5 py-3 rounded-xl shadow-lg border border-slate-100 z-20 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-bold text-slate-800">Growing</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
