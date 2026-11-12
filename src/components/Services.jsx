import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FiMonitor,
  FiServer,
  FiPenTool,
  FiShoppingCart,
  FiChevronDown,
} from "react-icons/fi";

const services = [
  {
    icon: <FiMonitor />,
    title: "Frontend Developer",
    desc: "I build fast, responsive and clean user interfaces using React and Tailwind CSS that look great on every device.",
  },
  {
    icon: <FiServer />,
    title: "Backend Developer",
    desc: "I create secure APIs, databases and server logic with Node.js, Express and MongoDB.",
  },
  {
    icon: <FiPenTool />,
    title: "UI / UX Designer",
    desc: "I design simple, modern layouts and color themes so your website is easy to use and nice to look at.",
  },
  {
    icon: <FiShoppingCart />,
    title: "E-commerce Websites",
    desc: "I build complete online stores with cart, checkout, and buyer and seller dashboards.",
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <div
        id="myservices"
        className="w-full h-fit scroll-mt-16 px-5 py-16 flex flex-col items-center"
      >
        {/* heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-ink-50 text-3xl md:text-4xl font-bold"
        >
          My <span className="text-brand-400">Services</span>
        </motion.h1>

        {/* accordion */}
        <div className="w-full max-w-2xl mt-10 flex flex-col gap-4">
          {services.map((s, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl border bg-gradient-to-br from-brand-500/20 via-black to-transparent transition-[border-color,box-shadow] duration-300 ${
                  isOpen
                    ? "border-brand-500 shadow-glow"
                    : "border-brand-500/30 hover:border-brand-500/60"
                }`}
              >
                {/* main heading row (click) */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-11 h-11 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center text-2xl">
                      {s.icon}
                    </span>
                    <h2 className="text-ink-50 text-lg md:text-xl font-semibold">
                      {s.title}
                    </h2>
                  </div>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-brand-400 shrink-0"
                  >
                    <FiChevronDown />
                  </motion.span>
                </button>

                {/* short description (animated height) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-ink-200 text-sm md:text-base font-light leading-relaxed">
                        {s.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
