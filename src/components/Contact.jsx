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

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#000000] text-white font-['Poppins'] py-24 md:py-32 border-t border-[#1A1A1A]"
    >
      {/* 🔥 Red Gradient Glow (Same as Testimonials Section) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#D70C09]/30 blur-[160px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D70C09]/20 blur-[140px] rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* 🌟 Section Content */}
      <div
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-8"
        data-aos="fade-up"
      >
        {/* LEFT SIDE — Contact Info */}
        <div
          data-aos="fade-right"
          className="bg-[#0E0E0E]/90 border border-[#1C1C1C] rounded-2xl p-8 shadow-[0_0_30px_rgba(215,12,9,0.15)]"
        >
          <h3
            data-aos="fade-down"
            className="text-2xl font-bold mb-8 text-[#D70C09] uppercase tracking-wide"
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
              <div className="p-3 bg-[#D70C09]/15 text-[#D70C09] rounded-full shadow-[0_0_15px_rgba(215,12,9,0.3)]">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Office Address</h4>
                <p className="text-sm text-[#868386] leading-relaxed">
                  4517 Washington Ave. <br />
                  Manchester, Kentucky 39495
                </p>
              </div>
            </div>

            {/* Phone */}
            <div
              className="flex items-start gap-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="p-3 bg-[#D70C09]/15 text-[#D70C09] rounded-full shadow-[0_0_15px_rgba(215,12,9,0.3)]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">
                  Contact Number
                </h4>
                <p className="text-sm text-[#868386]">(603) 555-0123</p>
                <p className="text-sm text-[#868386]">(319) 555-0115</p>
              </div>
            </div>

            {/* Email */}
            <div
              className="flex items-start gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="p-3 bg-[#D70C09]/15 text-[#D70C09] rounded-full shadow-[0_0_15px_rgba(215,12,9,0.3)]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">
                  Email Address
                </h4>
                <p className="text-sm text-[#868386]">info@ovicars.com</p>
                <p className="text-sm text-[#868386]">support@ovicars.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Contact Form */}
        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          className="bg-[#0E0E0E]/90 border border-[#1C1C1C] rounded-2xl p-8 shadow-[0_0_30px_rgba(215,12,9,0.15)]"
        >
          <h2 className="text-3xl font-extrabold mb-3 uppercase tracking-wide text-white">
            Get In Touch
          </h2>
          <p className="text-[#868386] text-sm mb-10 leading-relaxed">
            We're always here to assist you at{" "}
            <span className="text-[#D70C09] font-semibold">
              Ovi Car Body Repair
            </span>
            . Our expert team is ready to help with your inquiries or booking
            requests.
          </p>

          <form
            className="space-y-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-[#868386]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border border-[#1C1C1C] rounded-md p-3 mt-1 text-white placeholder-[#868386] focus:outline-none focus:border-[#D70C09] transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#868386]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full bg-transparent border border-[#1C1C1C] rounded-md p-3 mt-1 text-white placeholder-[#868386] focus:outline-none focus:border-[#D70C09] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-[#868386]">
                  Phone No
                </label>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full bg-transparent border border-[#1C1C1C] rounded-md p-3 mt-1 text-white placeholder-[#868386] focus:outline-none focus:border-[#D70C09] transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#868386]">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-transparent border border-[#1C1C1C] rounded-md p-3 mt-1 text-white placeholder-[#868386] focus:outline-none focus:border-[#D70C09] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-[#868386]">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full bg-transparent border border-[#1C1C1C] rounded-md p-3 mt-1 text-white placeholder-[#868386] focus:outline-none focus:border-[#D70C09] transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              data-aos="zoom-in"
              data-aos-delay="400"
              className="w-full bg-[#D70C09] text-white py-3 rounded-md font-semibold uppercase tracking-wide hover:bg-[#868386] transition-all duration-300"
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
