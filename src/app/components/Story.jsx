"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectCards } from "swiper/modules";

export default function Story() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = [
    "/assets/couple.jpg",
    "/assets/couple1.webp",
    "/assets/couple3.webp",
  ];

  const stories = [
    {
      description:
        "Our story began in college, where two hearts crossed paths and slowly found their way to each other.",
    },
    {
      description:
        " From little moments to beautiful memories, we fell in love and discovered something truly special.",
    },
    {
      description:
        "And now, we’re ready to turn our favourite love story into a forever of our own.",
    },
  ];

  return (
    <div className="text-center mt-32">
      <p className="text-[12px] md:text-2xl text-[#C78617] cormorant-garamond uppercase tracking-[4px] font-semibold">
        A Glimpse of Our Journey
      </p>
      <h2 className="text-[#C78617] pinyon-script-regular text-center md:text-4xl text-[38px] lg:text-[60px] leading-tight mt-2">
        Our Story
      </h2>

      <div className="my-6 flex w-full items-center justify-center gap-4">
        <span className="h-px w-11 bg-gradient-to-r from-transparent to-[#d9a64e]" />
        <span className="text-lg leading-none text-[#b97b17]">✦</span>
        <span className="h-px w-11 bg-gradient-to-l from-transparent to-[#d9a64e]" />
      </div>
      <p className="mt-4 cormorant-garamond text-[14px] italic leading-relaxed text-[#5c5959]">
        The Beginnig of us❤️
      </p>

      <p className="mt-2 cormorant-garamond text-[10px]  uppercase tracking-[4px]  text-[#5c5959]  text-center">
        ✦ Swipe to flip ✦
      </p>

      <div className="mt-10 md:mt-18 lg:mt-20 flex justify-center items-center overflow-visible px-4">
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          style={{
            width: "min(78vw, 360px)",
            height: "520px",
            overflow: "visible",
          }}
        >
          {testimonial.map((item, index) => (
            <SwiperSlide
              key={index}
              className="!rounded-[18px] !border-[3px] !border-[#d5a84c] !bg-[#fff7e8] !p-[5px]"
              style={{
                overflow: "hidden",
                boxShadow:
                  "0 0 0 2px #815018, 0 5px 14px rgba(0,0,0,0.22), inset 0 0 0 1px #fff0b0",
              }}
            >
              {/* Outer golden border */}
              <div className="flex h-full w-full flex-col overflow-hidden rounded-[12px] border-2 border-[#e8c66c] bg-[#fffaf0]">
                {/* Image */}
                <div className="h-[390px] w-full shrink-0 overflow-hidden bg-[#5b100c]">
                  <img
                    src={item}
                    alt={`Wedding photo ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Text inside the border */}
                <div className="flex flex-1 items-center justify-center px-3 text-center">
                  <p className="text-[14px] leading-[1.5] italic text-[#535352] cormorant-garamond">
                    {stories[index]?.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
