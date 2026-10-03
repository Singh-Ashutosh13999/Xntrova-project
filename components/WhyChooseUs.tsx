"use client";
import React from "react";

export default function WhyChooseUs() {
  const reasons = [
    "Premium Quality Standards",
    "Conversion-Focused Approach",
    "Dedicated Ongoing Support"
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Us?</h3>
      <ul className="space-y-4">
        {reasons.map((reason, idx) => (
          <li key={idx} className="flex items-center gap-4 text-slate-700 font-medium">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">✓</span>
            {reason}
          </li>
        ))}
      </ul>
    </div>
  );
}
