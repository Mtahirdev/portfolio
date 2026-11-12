import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "motion/react";

import "swiper/css";

// replace with your own images
import img2 from "../assets/img1.png";
import img1 from "../assets/1.png";
import img3 from "../assets/chat.png";

const works = [
  {
    img: img1,
    title: "Shoppy E-commerce",
    desc: "Full MERN store with buyer and seller sites.",
    link: "#",
  },
  {
    img: img2,
    title: "Portfolio Website",
    desc: "Modern dark portfolio built with React and Tailwind.",
    link: "#",
  },
  {
    img: img3,
    title: "Chat Applicaton",
    desc: "Clean dashboard with charts",
    link: "#",
  },
];

const Work = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <div id="work" className="w-full h-fit scroll-mt-16 px-5 py-16">
        {/* heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-ink-50 text-3xl md:text-4xl font-bold"
        >
          My <span className="text-brand-400">Work</span>
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
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!px-2 !py-2 md:!mx-14"
          >
            {works.map((w) => (
              <SwiperSlide key={w.title} className="!h-auto">
                {/* card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full rounded-2xl p-4 border border-brand-500/30 bg-gradient-to-br from-brand-500/30 via-black to-transparent hover:border-brand-500 hover:shadow-glow transition-[border-color,box-shadow] duration-300"
                >
                  {/* img */}
                  <div className="group relative w-full h-48 rounded-xl overflow-hidden">
                    <img
                      src={w.img}
                      alt={w.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    {/* arrow button (top right) */}
                    <a
                      href={w.link}
                      className="absolute top-3 right-3 w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center text-xl shadow-glow opacity-100 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition duration-300"
                    >
                      <FiArrowUpRight />
                    </a>
                  </div>

                  {/* heading + desc */}
                  <h2 className="text-ink-50 text-xl font-semibold mt-4">
                    {w.title}
                  </h2>
                  <p className="text-ink-200 text-sm font-light mt-2">
                    {w.desc}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </>
  );
};

export default Work;
