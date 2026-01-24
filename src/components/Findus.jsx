import React, { useEffect } from "react";

export default function FindUs() {

  return (
    <section
      id="find-us"
      className="py-16 px-4 bg-[#e5e9ee] transition-colors duration-500 border-t border-[#B9BDC1]/40"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <p
          className="text-[#0078D6] font-semibold tracking-widest mb-3 uppercase text-lg"
          data-aos="fade-up"
        >
          Find Us
        </p>

        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#000000] mb-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Visit Our Location
        </h2>

        {/* Google Map */}
        <div
          className="rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.1)] border border-[#B9BDC1]/50 w-full h-[400px] transition-all duration-500"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.6072067924106!2d0.15048799999999998!3d52.214185199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8705e77c42243%3A0x546461090d261f0f!2sJW%20Cambridge!5e0!3m2!1sen!2slk!4v1761847678922!5m2!1sen!2slk"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full grayscale hover:grayscale-0 transition duration-500 hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(0,120,214,0.3)]"
          ></iframe>
        </div>

        {/* Address Info */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-8 text-center"
        >
          <p className="text-[#555555] text-sm sm:text-base">
            Unit 1, 2 Swanns Rd, Cambridge CB5 8JZ, United Kingdom
          </p>
         
        </div>
      </div>
    </section>
  );
}
