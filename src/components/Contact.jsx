"use client";
import React from "react";
import { FiSend, FiPhone } from "react-icons/fi";

export default function ContactSection() {
  const primary = "#B9BDC1"; // metallic tone
  const accent = "#0078D6";  // brand blue

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
              schedule your personalized discovery call.
            </p>
          </div>

          {/* CONTACT OPTIONS */}
          <div className="flex flex-col sm:flex-row gap-5 mt-6">
            {/* CHAT BOX */}
            <div className="border border-[#B9BDC1]/40 rounded-2xl p-2 transition-all">
              <div className="flex-1 bg-linear-to-b from-[#F9FAFC] to-[#FFFFFF] border border-[#B9BDC1]/30 rounded-2xl p-6 hover:border-[#0078D6] hover:shadow-[0_0_20px_rgba(0,120,214,0.2)] transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#EAF4FF] rounded-lg text-[#0078D6]">
                    <FiSend size={20} />
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-[#000000]">
                  Chat with us
                </h3>
                <p className="text-[#555555] text-sm">
                  info@jwcambridge.co.uk
                </p>
              </div>
            </div>

            {/* CALL BOX */}
            <div className="border border-[#B9BDC1]/40 rounded-2xl p-2 transition-all">
              <div className="flex-1 bg-linear-to-b from-[#F9FAFC] to-[#FFFFFF] border border-[#B9BDC1]/30 rounded-2xl p-6 hover:border-[#0078D6] hover:shadow-[0_0_20px_rgba(0,120,214,0.2)] transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#EAF4FF] rounded-lg text-[#0078D6]">
                    <FiPhone size={20} />
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-[#000000]">
                  Call Us
                </h3>
                <p className="text-[#555555] text-sm">+44 1223 311711</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTACT FORM */}
        <div className="border border-[#B9BDC1]/40 rounded-2xl p-2 shadow-[0_0_25px_rgba(0,0,0,0.05)] hover:shadow-[0_0_35px_rgba(0,120,214,0.15)] transition-all">
          <div className="bg-linear-to-b from-[#F9FAFC] to-[#FFFFFF] border border-[#B9BDC1]/30 rounded-2xl p-8 transition-all">
            <form className="space-y-5">
              {/* NAME */}
              <div>
                <label className="block text-xs text-[#555555] mb-2">NAME</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border border-[#B9BDC1]/40 rounded-lg px-4 py-3 text-sm text-[#000000] focus:outline-none focus:border-[#0078D6] transition"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-xs text-[#555555] mb-2">EMAIL</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border border-[#B9BDC1]/40 rounded-lg px-4 py-3 text-sm text-[#000000] focus:outline-none focus:border-[#0078D6] transition"
                />
              </div>

              {/* NUMBER */}
              <div>
                <label className="block text-xs text-[#555555] mb-2">NUMBER</label>
                <input
                  type="text"
                  placeholder="Enter your number"
                  className="w-full bg-transparent border border-[#B9BDC1]/40 rounded-lg px-4 py-3 text-sm text-[#000000] focus:outline-none focus:border-[#0078D6] transition"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-xs text-[#555555] mb-2">MESSAGE</label>
                <textarea
                  placeholder="Enter your message"
                  rows="4"
                  className="w-full bg-transparent border border-[#B9BDC1]/40 rounded-lg px-4 py-3 text-sm text-[#000000] focus:outline-none focus:border-[#0078D6] transition"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-[#0078D6] hover:bg-[#0063b4] text-white py-3 rounded-lg transition text-sm font-medium shadow-[0_0_15px_rgba(0,120,214,0.25)] hover:shadow-[0_0_25px_rgba(0,120,214,0.4)]"
              >
                Send the Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
