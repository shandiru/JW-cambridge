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
      className="py-16 px-4 bg-black transition-colors duration-500"
      id="find-us"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <p
          className="text-[#D70C09]  font-semibold tracking-widest mb-3 uppercase text-lg"
          data-aos="fade-up"
        >
          Find Us
        </p>

        <h2
          className="text-3xl md:text-4xl font-extrabold text-white  mb-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Visit Our Body Shop Location
        </h2>

        {/* Google Map */}
        <div
          className="rounded-xl overflow-hidden shadow-lg border border-gray-200  w-full h-[400px]"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <iframe
            title="Google Map - Ovi Car Body Repair"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1962.4160863668385!2d-1.4711455!3d53.3622136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879828604312ce5%3A0xeaa84131f59b895a!2sOvi%20Car%20Body%20Repair!5e1!3m2!1sen!2slk!4v1761680560902!5m2!1sen!2slk"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
