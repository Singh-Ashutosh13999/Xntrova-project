"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import HeroIntl from "../../components/HeroIntl";
import Trusted from "../../components/Trusted";
import SeoGrowth from "../../components/SeoGrowth";
import ServicesIntl from "../../components/ServicesIntl";
import CTAIntl from "../../components/CTAIntl";
import Tools from "../../components/Tools";
import Testimonials from "../../components/Testimonials";

export default function HomeUS() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      <Navbar />
      <main>
        <HeroIntl />
        <ServicesIntl />
        <CTAIntl />
        <Trusted />
        <SeoGrowth />
        <Tools />
        <Testimonials />


        {/* Footer */}
        <footer className="bg-slate-900 pt-16 pb-8 text-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
              <div>
                <h4 className="text-2xl font-bold text-blue-400 mb-4">Xntrova</h4>
                <p className="text-slate-400 leading-relaxed">
                  Crafting premium digital experiences that drive growth and inspire audiences worldwide.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-6">Company</h4>
                <ul className="space-y-3 text-slate-400">
                  <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                  <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                  <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
                  <li><a href="#contact" className="hover:text-blue-400 transition-colors">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6">Support</h4>
                <ul className="space-y-3 text-slate-400">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6">Connect</h4>
                <ul className="space-y-3 text-slate-400">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Dribbble</a></li>
                </ul>
              </div>
            </div>
            <div className="text-center text-slate-500 text-sm">
              <p>&copy; {new Date().getFullYear()} Xntrova. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
