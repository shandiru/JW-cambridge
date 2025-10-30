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
      className="relative overflow-hidden bg-[#000000] text-white font-['Poppins'] py-12 border-t border-[#1A1A1A]"
    >
      {/* 💠 Chrome Glow Gradients */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-linear-to-br from-[#C0C0C0]/20 to-transparent blur-[200px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-linear-to-tl from-[#E0E0E0]/10 to-transparent blur-[160px] rounded-full translate-x-1/3 translate-y-1/3"></div>

      {/* 🏁 Section Heading */}
      <div
        className="relative z-10 mx-auto max-w-6xl px-6 text-center"
        data-aos="fade-up"
      >
        <h2
          className="text-4xl md:text-6xl font-extrabold leading-tight bg-linear-to-r from-[#EAEAEA] to-[#B0B0B0] bg-clip-text text-transparent"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our Gallery
        </h2>
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
          textColor="#E0E0E0"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </section>
  );
}
