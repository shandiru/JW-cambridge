"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CircularGallery from "./CircularGallery";

export default function GallerySection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  const galleryItems = [
    { type: "image", src: "im.jpeg", text: "Our Workshop" },
    { type: "image", src: "im1.jpeg", text: "Our Workshop" },
    { type: "image", src: "im2.jpeg", text: "Our Workshop" },
    { type: "image", src: "im3.jpeg", text: "Our Workshop" },
    { type: "image", src: "im4.jpeg", text: "Our Workshop" },
    { type: "image", src: "im5.jpeg", text: "Our Workshop" },
    { type: "image", src: "im6.jpeg", text: "Our Workshop" },
  ];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#000000] text-white font-['Poppins'] py-24 md:py-32 border-t border-[#1A1A1A]"
    >
      {/* 🔥 Red Glow Gradient */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#D70C09]/30 blur-[180px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D70C09]/20 blur-[160px] rounded-full translate-x-1/3 translate-y-1/3"></div>

      {/* 🏁 Section Heading */}
      <div
        className="relative z-10 mx-auto max-w-6xl px-6 text-center"
        data-aos="fade-up"
      >
        <p
          className="text-[#D70C09] uppercase tracking-[5px] text-sm font-semibold mb-4"
          data-aos="fade-down"
        >
          Ovi Car Body Repair
        </p>

        <h2
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="text-white">PERFORMANCE MEETS </span>
          <span className="text-[#D70C09]">PERFECTION</span>
        </h2>

        <p
          className="text-[#868386] max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          At Ovi Car Body Repair, we redefine automotive care through precision,
          passion, and performance. From dent removals to full restorations, our
          experts ensure your car looks and drives as good as new.
        </p>

        {/* 🔘 Buttons with animation */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-14"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <button className="bg-[#D70C09] hover:bg-[#868386] text-white font-semibold uppercase px-8 py-3 rounded-md transition-all duration-300">
            Book Repair
          </button>
          <button className="border border-[#D70C09] hover:border-[#868386] hover:text-[#868386] text-white font-semibold uppercase px-8 py-3 rounded-md transition-all duration-300">
            View Services
          </button>
        </div>
      </div>

      {/* 🌀 Circular Gallery */}
      <div
        className="relative z-10 mx-auto max-w-[1200px] w-full px-4 sm:px-6 md:px-8"
        style={{ height: "600px", position: "relative" }}
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </section>
  );
}
