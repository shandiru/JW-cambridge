// src/components/FindUs.jsx
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FindUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="py-16 px-4 bg-[#000000] transition-colors duration-500"
      id="find-us"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <p
          className="text-[#C0C0C0] font-semibold tracking-widest mb-3 uppercase text-lg"
          data-aos="fade-up"
        >
          Find Us
        </p>

        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#E0E0E0] mb-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Visit Our Location
        </h2>

        {/* Google Map */}
        <div
          className="rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.05)] border border-[#2A2A2A] w-full h-[400px]"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.6072067924106!2d0.15048799999999998!3d52.214185199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8705e77c42243%3A0x546461090d261f0f!2sJW%20Cambridge!5e0!3m2!1sen!2slk!4v1761847678922!5m2!1sen!2slk"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full grayscale hover:grayscale-0 transition duration-500"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
