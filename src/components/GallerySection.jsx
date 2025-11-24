"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GallerySection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  const galleryItems = [
    { src: "im.jpeg" },
    { src: "im1.jpeg" },
    { src: "im2.jpeg" },
    { src: "im3.jpeg" },
    { src: "im4.jpeg" },
    { src: "im5.jpeg" },
    { src: "im6.jpeg" },
  ];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-white text-black font-['Poppins'] py-12 border-t border-[#B9BDC1]/40"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-[#0078D6]/20 to-transparent blur-[200px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#B9BDC1]/25 to-transparent blur-[160px] rounded-full translate-x-1/3 translate-y-1/3"></div>

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center" data-aos="fade-up">
        <h2
          className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#0078D6] via-[#B9BDC1] to-[#0078D6] bg-clip-text text-transparent"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our Gallery
        </h2>
        <p
          className="mt-4 text-[#555555] max-w-2xl mx-auto text-base md:text-lg"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          A glimpse into our state-of-the-art facilities and expert team at work.
        </p>
      </div>

      {/* Straight Slider */}
      <div
        className="relative z-10 mx-auto max-w-[1300px] w-full px-4 sm:px-6 md:px-8 mt-12"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1.2}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {galleryItems.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded-xl overflow-hidden shadow-md border border-[#B9BDC1]/40 hover:scale-[1.03] transition duration-300">
                <img
                  src={item.src}
                  alt="Gallery Image"
                  className="w-full h-[280px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* FIX: Move dots down */}
        <style jsx global>{`
          .swiper-pagination {
            margin-top: 30px !important;
            position: relative !important;
          }
        `}</style>
      </div>
    </section>
  );
}
