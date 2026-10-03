"use client";
import React, { useState } from "react";

export default function Hero() {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });
  const [formStatus, setFormStatus] = useState("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setFormStatus("Please fill required fields.");
      return;
    }
    setFormStatus("We'll contact you shortly!");
    setFormData({ name: "", phone: "", service: "" });
  };

  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-16 relative overflow-hidden bg-slate-900">
      {/* Background with dark gradient for premium look */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-950 -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Slogan */}
          <div className="text-left">
            <div className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold mb-6 shadow-sm border border-blue-500/30 backdrop-blur-sm">
              Premium Digital Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Transform Your Digital <span className="text-blue-400">Presence</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
              We craft modern, premium, and conversion-focused digital experiences that help your business grow and stand out in a crowded market.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button onClick={() => scrollToSection("portfolio")} className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg">
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Side: Let's Talk Card */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative">
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Let's Talk</h3>
            <p className="text-slate-500 mb-6 text-sm">Have a project in mind? Fill the form below and we will get back to you.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="phone">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="service">Interested Service</label>
                <select 
                  id="service"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-700"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">Select a service...</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="web">Web Development</option>
                  <option value="marketing">Digital Marketing</option>
                </select>
              </div>
              
              {formStatus && (
                <div className={`text-sm font-medium ${formStatus.includes("Please") ? "text-red-500" : "text-green-500"}`}>
                  {formStatus}
                </div>
              )}

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/30 mt-2">
                Get Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
