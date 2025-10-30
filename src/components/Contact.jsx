"use client";
import React, { useEffect } from "react";
import { Home, Phone, Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  const accent = "#C0C0C0"; // Chrome Silver

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#000000] text-white font-['Poppins'] py-24 md:py-32 border-t border-[#1A1A1A]"
    >
      {/* 💠 Chrome Glow Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#E0E0E0]/15 to-transparent blur-[180px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#C0C0C0]/10 to-transparent blur-[140px] rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* 🌟 Section Content */}
      <div
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-8"
        data-aos="fade-up"
      >
        {/* LEFT SIDE — Contact Info */}
        <div
          data-aos="fade-right"
          className="bg-[#0E0E0E]/90 border border-[#1C1C1C] rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          <h3
            data-aos="fade-down"
            className="text-2xl font-bold mb-8 text-[#EAEAEA] uppercase tracking-wide"
          >
            Contact Information
          </h3>

          <div className="space-y-10">
            {/* Address */}
            <div
              className="flex items-start gap-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="p-3 bg-[#C0C0C0]/10 text-[#C0C0C0] rounded-full shadow-[0_0_15px_rgba(255,255,255,0.08)] flex items-center justify-center">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Office Address</h4>
                <a
                  href="https://maps.app.goo.gl/3BvXtzvyAL3xmKvRA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-sm text-[#AAAAAA] leading-relaxed cursor-pointer hover:underline">
                    Unit 1, 2 Swanns Rd, <br />
                    Cambridge CB5 8JZ
                  </p>
                </a>
              </div>
            </div>

            {/* Phone */}
            <div
              className="flex items-start gap-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="p-3 bg-[#C0C0C0]/10 text-[#C0C0C0] rounded-full shadow-[0_0_15px_rgba(255,255,255,0.08)] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">
                  Contact Number
                </h4>
                <a href="tel:01223311711" target="_blank">
                  <p className="text-sm text-[#AAAAAA] cursor-pointer hover:underline">
                    01223311711
                  </p>
                </a>
              </div>
            </div>

            {/* Email */}
            <div
              className="flex items-start gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="p-3 bg-[#C0C0C0]/10 text-[#C0C0C0] rounded-full shadow-[0_0_15px_rgba(255,255,255,0.08)] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Email Address</h4>
                <a href="mailto:info@jwcambridge.co.uk" target="_blank">
                  <p className="text-sm text-[#AAAAAA] cursor-pointer hover:underline">
                    info@jwcambridge.co.uk
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Contact Form */}
        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          className="bg-[#0E0E0E]/90 border border-[#1C1C1C] rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          <h2 className="text-3xl font-extrabold mb-3 uppercase tracking-wide text-white">
            Get In Touch
          </h2>
          <p className="text-[#AAAAAA] text-sm mb-10 leading-relaxed">
            We're always here to assist you at{" "}
            <span className="text-[#C0C0C0] font-semibold">JW Cambridge</span>.
            Our expert team is ready to help with your inquiries or booking
            requests.
          </p>

          <form
            className="space-y-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-[#AAAAAA]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border border-[#1C1C1C] rounded-md p-3 mt-1 text-white placeholder-[#888888] focus:outline-none focus:border-[#C0C0C0] transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#AAAAAA]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full bg-transparent border border-[#1C1C1C] rounded-md p-3 mt-1 text-white placeholder-[#888888] focus:outline-none focus:border-[#C0C0C0] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-[#AAAAAA]">
                  Phone No
                </label>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full bg-transparent border border-[#1C1C1C] rounded-md p-3 mt-1 text-white placeholder-[#888888] focus:outline-none focus:border-[#C0C0C0] transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#AAAAAA]">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-transparent border border-[#1C1C1C] rounded-md p-3 mt-1 text-white placeholder-[#888888] focus:outline-none focus:border-[#C0C0C0] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-[#AAAAAA]">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full bg-transparent border border-[#1C1C1C] rounded-md p-3 mt-1 text-white placeholder-[#888888] focus:outline-none focus:border-[#C0C0C0] transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              data-aos="zoom-in"
              data-aos-delay="400"
              className="w-full bg-[#C0C0C0] text-black py-3 rounded-md font-semibold uppercase tracking-wide hover:bg-[#E0E0E0] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
