"use client";
import React from "react";
import { FiSend, FiPhone } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section className="bg-[#050505] text-white px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <p className="uppercase text-[#8aff80] text-sm tracking-widest mb-2">
              // Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Get in touch
            </h2>
            <p className="text-gray-400 max-w-md leading-relaxed">
              No delays, no vague replies — we respond within 24 hours to
              schedule your personalized discovery call.
            </p>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-5 mt-55">
            {/* Chat Box */}
            <div className="border border-[#1a1a1a] rounded-2xl p-2">
              <div className="flex-1 bg-linear-to-b px-8 from-[#0b0b0b] to-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-6 transition-all hover:border-[#20C964] hover:shadow-[0_0_20px_#20C96433]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#0f0f0f] rounded-lg text-[#20C964]">
                    <FiSend size={20} />
                  </div>
                </div>
                <h3 className="font-semibold text-lg">Chat to sales</h3>
                <p className="text-gray-400 text-sm">
                  stackwise@support.com
                </p>
              </div>
            </div>

            {/* Call Box */}
            <div className="border border-[#1a1a1a] rounded-2xl p-2">
              <div className="flex-1 bg-linear-to-b px-13 from-[#0b0b0b] to-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-6 transition-all hover:border-[#20C964] hover:shadow-[0_0_20px_#20C96433]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#0f0f0f] rounded-lg text-[#20C964]">
                    <FiPhone size={20} />
                  </div>
                </div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-gray-400 text-sm">+359 988 777 98</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="border border-[#1a1a1a] rounded-2xl p-2 shadow-[0_0_25px_rgba(0,0,0,0.4)] hover:shadow-[0_0_35px_#20C96433] active:shadow-[0_0_35px_#20C96433]">
          <div className="bg-linear-to-b from-[#0b0b0b] to-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-8  transition-all">
            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-xs text-gray-400 mb-2">NAME</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border border-[#1a1a1a] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#20C964] transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs text-gray-400 mb-2">EMAIL</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full bg-transparent border border-[#1a1a1a] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#20C964] transition"
                />
              </div>

              {/* Number */}
              <div>
                <label className="block text-xs text-gray-400 mb-2">NUMBER</label>
                <input
                  type="text"
                  placeholder="Enter Your Number"
                  className="w-full bg-transparent border border-[#1a1a1a] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#20C964] transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs text-gray-400 mb-2">MORE INFO</label>
                <textarea
                  placeholder="Enter Your Message"
                  rows="4"
                  className="w-full bg-transparent border border-[#1a1a1a] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#20C964] transition"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#0f3b1c] hover:bg-[#20C964] hover:text-black text-white py-3 rounded-lg transition text-sm font-medium shadow-[0_0_10px_rgba(32,201,100,0.1)] hover:shadow-[0_0_20px_#20C96455]"
              >
                Send the message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section >
  );
}
