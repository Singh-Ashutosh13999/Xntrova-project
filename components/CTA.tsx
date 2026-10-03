"use client";
import React from "react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-10 bg-blue-600 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[600px] h-[600px] bg-indigo-500 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-2xl md:text-5xl font-extrabold text-white mb-4 md:mb-6 tracking-tight">
            Ready to Dominate Your Market?
          </h2>
          <p className="text-base md:text-xl text-blue-100 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of forward-thinking companies that trust Xntrova to deliver exceptional digital experiences and measurable growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#contact" className="w-full sm:w-auto bg-white hover:bg-slate-50 text-blue-600 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Get Your Free Proposal
            </Link>
            <Link href="tel:+1234567890" className="w-full sm:w-auto bg-transparent border-2 border-white/30 hover:border-white text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
