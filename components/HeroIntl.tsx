"use client";
import React, { useState } from "react";

export default function HeroIntl() {
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
    <section id="home" className="pt-20 pb-8 md:pt-24 md:pb-10 relative overflow-hidden bg-slate-950">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay -z-20 pointer-events-none"
      />
      {/* Background with dark gradient for premium look */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/60 via-slate-900/80 to-slate-950 -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Slogan */}
          <div className="text-left">
            <div className="inline-block px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-semibold mb-6 shadow-sm border border-indigo-500/30 backdrop-blur-sm">
              Global Digital Excellence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Scale Your Reach <span className="text-indigo-400">Internationally</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
              We empower businesses with cutting-edge digital solutions designed to dominate international markets and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button onClick={() => scrollToSection("portfolio")} className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-indigo-500/30">
                View Global Portfolio
              </button>
            </div>
          </div>

          {/* Right Side: Let's Talk Card */}
          <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl shadow-black/50 border border-slate-800 relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Start Your Journey</h3>
            <p className="text-slate-400 mb-6 text-sm">Fill the form below to connect with our international growth experts.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-slate-700 transition-all placeholder:text-slate-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="phone">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-slate-700 transition-all placeholder:text-slate-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="service">Interested Service</label>
                <select 
                  id="service"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-slate-700 transition-all"
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
                <div className={`text-sm font-medium ${formStatus.includes("Please") ? "text-red-400" : "text-green-400"}`}>
                  {formStatus}
                </div>
              )}

              <button type="submit" className="w-full bg-white hover:bg-slate-100 text-slate-900 px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg mt-2">
                Get Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
