// src/components/ContactSection.jsx
"use client";
import React from "react";
import { FiSend, FiPhone, FiClock } from "react-icons/fi";

export default function ContactSection() {
  const primary = "#B9BDC1"; // metallic tone
  const accent = "#0078D6";  // brand blue

  const businessHours = [
    { day: "Mon - Thu", time: "9 AM – 5 PM" },
    { day: "Friday", time: "9 AM – 2:30 PM" },
    { day: "Sat - Sun", time: "Closed" },
  ];

  return (
    <section id="contact" className="bg-[#FFFFFF] text-[#000000] px-6 md:px-12 lg:px-24 py-20 border-t border-[#B9BDC1]/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <div>
            <p className="uppercase text-[#0078D6] text-sm tracking-widest mb-2">
              // Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-[#000000]">
              Get in Touch
            </h2>
            <p className="text-[#555555] max-w-md leading-relaxed">
              No delays, no vague replies — we respond within 24 hours to
              schedule your personalised discovery call.
            </p>
          </div>

          {/* CONTACT OPTIONS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            
            {/* CHAT BOX */}
            <div className="border border-[#B9BDC1]/40 rounded-2xl p-1 transition-all">
              <div className="h-full bg-linear-to-b from-[#F9FAFC] to-[#FFFFFF] border border-[#B9BDC1]/30 rounded-2xl p-5 hover:border-[#0078D6] hover:shadow-[0_0_20px_rgba(0,120,214,0.1)] transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#EAF4FF] rounded-lg text-[#0078D6]">
                    <FiSend size={18} />
                  </div>
                  <h3 className="font-semibold text-[#000000]">Chat with us</h3>
                </div>
                <p className="text-[#555555] text-sm truncate">info@jwcambridge.co.uk</p>
              </div>
            </div>

            {/* CALL BOX */}
            <div className="border border-[#B9BDC1]/40 rounded-2xl p-1 transition-all">
              <div className="h-full bg-linear-to-b from-[#F9FAFC] to-[#FFFFFF] border border-[#B9BDC1]/30 rounded-2xl p-5 hover:border-[#0078D6] hover:shadow-[0_0_20px_rgba(0,120,214,0.1)] transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#EAF4FF] rounded-lg text-[#0078D6]">
                    <FiPhone size={18} />
                  </div>
                  <h3 className="font-semibold text-[#000000]">Call Us</h3>
                </div>
                <p className="text-[#555555] text-sm">+44 74910 16816</p>
              </div>
            </div>

            {/* OPENING HOURS BOX (Spans 2 columns on mobile/tablet) */}
            <div className="sm:col-span-2 border border-[#B9BDC1]/40 rounded-2xl p-1 transition-all">
              <div className="bg-linear-to-b from-[#F9FAFC] to-[#FFFFFF] border border-[#B9BDC1]/30 rounded-2xl p-5 hover:border-[#0078D6] hover:shadow-[0_0_20px_rgba(0,120,214,0.1)] transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#EAF4FF] rounded-lg text-[#0078D6]">
                    <FiClock size={18} />
                  </div>
                  <h3 className="font-semibold text-[#000000]">Opening Hours</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  {businessHours.map((item, idx) => (
                    <div key={idx} className="flex flex-col border-l border-[#B9BDC1]/30 pl-3">
                      <span className="text-[#888888] text-[10px] uppercase tracking-wider font-bold">{item.day}</span>
                      <span className={`font-medium ${item.time === "Closed" ? "text-red-500/70" : "text-[#555555]"}`}>{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT CONTACT FORM */}
        <div className="border border-[#B9BDC1]/40 rounded-2xl p-2 shadow-[0_0_25px_rgba(0,0,0,0.05)] hover:shadow-[0_0_35px_rgba(0,120,214,0.15)] transition-all">
          <div className="bg-linear-to-b from-[#F9FAFC] to-[#FFFFFF] border border-[#B9BDC1]/30 rounded-2xl p-8 transition-all">
            <form className="space-y-5">
              <div>
                <label className="block text-xs text-[#555555] mb-2 font-bold tracking-tight">NAME</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border border-[#B9BDC1]/40 rounded-lg px-4 py-3 text-sm text-[#000000] focus:outline-none focus:border-[#0078D6] transition"
                />
              </div>

              <div>
                <label className="block text-xs text-[#555555] mb-2 font-bold tracking-tight">EMAIL</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border border-[#B9BDC1]/40 rounded-lg px-4 py-3 text-sm text-[#000000] focus:outline-none focus:border-[#0078D6] transition"
                />
              </div>

              <div>
                <label className="block text-xs text-[#555555] mb-2 font-bold tracking-tight">NUMBER</label>
                <input
                  type="text"
                  placeholder="Enter your number"
                  className="w-full bg-transparent border border-[#B9BDC1]/40 rounded-lg px-4 py-3 text-sm text-[#000000] focus:outline-none focus:border-[#0078D6] transition"
                />
              </div>

              <div>
                <label className="block text-xs text-[#555555] mb-2 font-bold tracking-tight">MESSAGE</label>
                <textarea
                  placeholder="Enter your message"
                  rows="4"
                  className="w-full bg-transparent border border-[#B9BDC1]/40 rounded-lg px-4 py-3 text-sm text-[#000000] focus:outline-none focus:border-[#0078D6] transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0078D6] hover:bg-[#0063b4] text-white py-3 rounded-lg transition text-sm font-medium shadow-[0_0_15px_rgba(0,120,214,0.25)] hover:shadow-[0_0_25px_rgba(0,120,214,0.4)]"
              >
                Send the Message
              </button>
              <p className="text-[10px] text-center text-[#888888] leading-tight px-4">
                By submitting this form, you agree to us processing your details to respond to your enquiry in line with our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}