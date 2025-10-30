"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: 1,
    quote:
      "Ovi did an amazing job on my car after I had an accident. It looks completely brand new and exceeded my expectations. A very reasonable price and quick turnaround. I really appreciated the way he kept me informed throughout by sending me pictures and updates of the progress. I highly recommend him to anyone that wants a professional job doing. Lastly he was very welcoming and simplified things as I am not at all mechanical. Thank you Ovi :)",
    name: "Kitti Nangtalar",
    location: "UK",
    avatar: "1.png",
  },
  {
    id: 2,
    quote:
      "Ovi did a really excellent job on my van. We had scratches and dents on the rear panel caused by a lorry. It was a big job and Ovi was one of the few body workers in Sheffield willing to take it on.",
    name: "Jerome Mowat",
    location: "UK",
    avatar: "2.png",
  },
  {
    id: 3,
    quote:
      "My Renault Capture car was involved in an accident and the rear passenger door and panel was damaged and dented. Ovi completed the job on time and to a high standard. Strongly recommend him for any body repair job.",
    name: "Jay J",
    location: "UK",
    avatar: "3.png",
  },
  {
    id: 4,
    quote:
      "Ovi delivered perfectly — my car looks brand new now! I’m super impressed with the job he did and got updates throughout the process. Highly recommended!",
    name: "Phoebe Potkins",
    location: "UK",
    avatar: "4.png",
  },
];

const TestimonialsSection = () => {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#000000] text-white py-24 px-6 md:px-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 🔥 Red Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#D70C09]/30 blur-[180px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D70C09]/20 blur-[160px] rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* 🏁 Header */}
      <div
        className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-14"
        data-aos="fade-up"
      >
        <div data-aos="fade-right">
          <p className="text-[#D70C09] uppercase tracking-[5px] text-sm font-semibold mb-2">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.2] text-white">
            What Our <span className="text-[#D70C09]">Customers</span> Say
          </h2>
          <p className="text-[#868386] text-base mt-4 max-w-lg">
            At Ovi Car Body Repair, our mission is to deliver precision, passion
            and perfection. Here’s what real customers have to say about their
            experience with our expert team.
          </p>
        </div>

        <button
          data-aos="zoom-in"
          data-aos-delay="200"
          className="mt-8 md:mt-0 flex items-center gap-2 bg-[#D70C09] hover:bg-[#868386] text-white font-semibold uppercase px-8 py-3 rounded-md transition-all duration-300"
        >
          Book Your Repair
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* 💬 Top Row */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="relative z-10 flex gap-8 animate-scroll-left"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {[...testimonials, ...testimonials].map((item, i) => (
          <div
            key={`row1-${i}`}
            className="bg-[#0E0E0E] border border-[#1C1C1C] rounded-2xl p-6 flex flex-col justify-between flex-shrink-0 hover:border-[#D70C09]/40 transition-all duration-300 w-[360px] h-[340px]"
          >
            <p className="italic text-[#CCCCCC] text-[15px] leading-relaxed line-clamp-[8] overflow-hidden">
              “{item.quote}”
            </p>
            <div className="flex items-center gap-3 mt-6">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover border border-[#D70C09]/40"
              />
              <div>
                <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                <p className="text-[#868386] text-xs">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 💬 Bottom Row */}
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="relative z-10 flex gap-8 mt-10 animate-scroll-right"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {[...testimonials, ...testimonials].map((item, i) => (
          <div
            key={`row2-${i}`}
            className="bg-[#0E0E0E] border border-[#1C1C1C] rounded-2xl p-6 flex flex-col justify-between flex-shrink-0 hover:border-[#D70C09]/40 transition-all duration-300 w-[340px] h-[320px]"
          >
            <p className="italic text-[#CCCCCC] text-[15px] leading-relaxed line-clamp-[8] overflow-hidden">
              “{item.quote}”
            </p>
            <div className="flex items-center gap-3 mt-6">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover border border-[#D70C09]/40"
              />
              <div>
                <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                <p className="text-[#868386] text-xs">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🎨 Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#000000] to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#000000] to-transparent pointer-events-none"></div>

      {/* ⏩ Auto Scroll Keyframes */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 45s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-scroll-right {
          animation: scroll-right 50s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
