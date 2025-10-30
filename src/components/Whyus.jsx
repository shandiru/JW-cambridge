"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false, // triggers again when scrolling back up
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="about"
      className="relative bg-black text-white px-6 md:px-12 lg:px-24 py-20 overflow-hidden"
    >
      {/* 🔥 Red Glow Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#D70C09]/30 blur-[180px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D70C09]/20 blur-[160px] rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* 🏁 Top Section Title */}
      <div className="max-w-6xl mx-auto relative">
        <p
          data-aos="fade-down"
          className="text-white uppercase tracking-widest mb-4 border-l-4 border-[#D70C09] pl-4"
        >
          Discover the Passion and Expertise Behind Ovi Car Body Repair
        </p>

        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between relative"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Left Side Title */}
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight uppercase max-w-6xl z-10">
            Delivering Precision, Quality & Speed — The Trusted Name in Car Body
            Repair and Respray Services Since 2012
          </h2>

          {/* Rotating Tire Image on the Right */}
          <motion.img
            src="/image.svg"
            alt="Rotating tire"
            className="w-[220px] md:w-[280px] lg:w-[320px] opacity-30 md:opacity-40 mt-10 md:mt-0 md:ml-10"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      {/* 📘 Content Grid */}
      <div className="mt-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          {/* Our Story */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h6 className="text-white uppercase tracking-widest mb-3 border-l-4 border-[#D70C09] pl-4">
              Our Story
            </h6>
            <p className="text-gray-300 leading-relaxed max-w-lg">
              Since 2012, with over 28 years of experience, Ovi Car Body Repair
              has been providing one of the best spray booth services in the
              Sheffield area. We’ve built a strong reputation for fast,
              affordable, and reliable services — with a 24-hour turnaround on
              all vehicles. From minor dents and scratches to full collision
              repairs and complete resprays, we handle it all with precision and
              care.
            </p>
          </div>

          {/* Our Commitment */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h6 className="text-white uppercase tracking-widest mb-3 border-l-4 border-[#D70C09] pl-4">
              Our Commitment
            </h6>
            <p className="text-gray-300 leading-relaxed max-w-md">
              We use advanced Blowtherm paint respray technology to ensure a
              flawless finish every time. Whether it’s restoring your vehicle’s
              original shine or customizing its look, we guarantee top-quality
              results and a level of customer service that’s hard to beat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
