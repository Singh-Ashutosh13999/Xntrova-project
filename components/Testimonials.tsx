"use client";
import React from "react";

const testimonials = [
  { 
    text: "Xntrova completely transformed our online presence. Our conversion rates have doubled since the redesign. Their team is simply exceptional.", 
    author: "Sarah Jenkins", 
    role: "CEO, TechStart",
  },
  { 
    text: "Professional, responsive, and incredibly talented. They delivered exactly what we envisioned and more. We couldn't be happier with the results.", 
    author: "Michael Chen", 
    role: "Marketing Director, Elevate",
  },
  { 
    text: "The attention to detail and modern aesthetic they brought to our platform is unmatched. Highly recommended for any ambitious brand.", 
    author: "Emma Davis", 
    role: "Founder, StyleCo",
  },
  { 
    text: "Working with Xntrova was a game-changer for our business. They understand digital strategy better than any agency we've worked with.", 
    author: "David Miller", 
    role: "CMO, Nexus",
  },
  { 
    text: "A truly visionary team. The performance improvements on our site were immediate and significantly boosted our quarterly revenue.", 
    author: "Lisa Wong", 
    role: "VP Growth, Zenith",
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100 overflow-hidden" id="testimonials">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Client Success</h2>
          <p className="text-slate-500">
            Trusted by industry leaders. Hear what our partners have to say about our work.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex w-full overflow-hidden py-4">
        {/* Transparent Gradients for fading effect on edges */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-max animate-[marquee_50s_linear_infinite] whitespace-normal hover:[animation-play-state:paused]">
          {/* Double array for infinite scroll */}
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-[320px] md:w-[380px] mx-3 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-default flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{testimonial.author}</h4>
                  <span className="text-xs font-medium text-slate-500">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
