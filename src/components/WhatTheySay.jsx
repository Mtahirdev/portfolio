import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar, FaRegStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "motion/react";

import "swiper/css";

const reviews = [
  {
    name: "Ali Raza",
    role: "Store Owner",
    rating: 5,
    text: "Tahir built my online store exactly how I wanted. Fast, clean and easy to manage.",
  },
  {
    name: "Sara Khan",
    role: "Business Owner",
    rating: 5,
    text: "Great communication and the website looks amazing on mobile and desktop.",
  },
  {
    name: "Usman Ahmed",
    role: "Startup Founder",
    rating: 4,
    text: "Delivered the project on time and fixed every small change I asked for.",
  },
  {
    name: "Hina Malik",
    role: "Freelance Client",
    rating: 5,
    text: "Very professional and creative. My portfolio now looks modern and premium.",
  },
  {
    name: "Bilal Hussain",
    role: "Agency Manager",
    rating: 5,
    text: "Clean code, smooth animations and a design that our customers love.",
  },
];

const WhatTheySay = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <div id="whattheysay" className="w-full h-fit scroll-mt-16 px-5 py-16">
        {/* heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-ink-50 text-3xl md:text-4xl font-bold"
        >
          What They <span className="text-brand-400">Say</span>
        </motion.h1>

        {/* slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-6xl mx-auto mt-10"
        >
          {/* previous button (hidden on mobile) */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-brand-500 text-white items-center justify-center text-2xl shadow-glow hover:bg-brand-400 hover:shadow-glow-lg transition"
          >
            <FiChevronLeft />
          </button>

          {/* next button (hidden on mobile) */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-brand-500 text-white items-center justify-center text-2xl shadow-glow hover:bg-brand-400 hover:shadow-glow-lg transition"
          >
            <FiChevronRight />
          </button>

          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!px-2 !py-2 md:!mx-14"
          >
            {reviews.map((r) => (
              <SwiperSlide key={r.name} className="!h-auto">
                {/* card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full flex flex-col rounded-2xl p-6 border border-brand-500/30 bg-gradient-to-br from-brand-500/30 via-black to-transparent hover:border-brand-500 hover:shadow-glow transition-[border-color,box-shadow] duration-300"
                >
                  {/* rating (top of card), stars pop in one by one */}
                  <div className="flex gap-1 text-lg text-yellow-400">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <motion.span
                        key={n}
                        initial={{ scale: 0, rotate: -90 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: n * 0.1 }}
                        className="inline-flex"
                      >
                        {n <= r.rating ? <FaStar /> : <FaRegStar />}
                      </motion.span>
                    ))}
                  </div>

                  {/* text */}
                  <FaQuoteLeft className="text-brand-400/60 text-2xl mt-5" />
                  <p className="text-ink-200 text-sm font-light leading-relaxed mt-3 flex-1">
                    {r.text}
                  </p>

                  {/* person */}
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
                    <span className="w-11 h-11 rounded-full bg-brand-500 text-white font-semibold flex items-center justify-center shadow-glow">
                      {r.name.charAt(0)}
                    </span>
                    <div>
                      <h2 className="text-ink-50 font-semibold">{r.name}</h2>
                      <p className="text-brand-400 text-xs">{r.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </>
  );
};

export default WhatTheySay;
