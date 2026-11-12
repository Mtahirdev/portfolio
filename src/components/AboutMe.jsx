import React from "react";
import { motion } from "motion/react";

const list = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const line = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutMe = () => {
  return (
    <>
      <div
        id="about"
        className="w-full h-fit flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-6 px-5 py-16 overflow-hidden"
      >
        {/* left: about text (line by line) */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center font-light text-ink-50 text-xl sm:text-2xl md:text-xl lg:text-3xl md:w-[45%]"
        >
          <motion.h1 variants={line}>About Me: Young freelancer</motion.h1>
          <motion.h1 variants={line}>
            who enjoy <span className="text-brand-500">web design</span> and
          </motion.h1>
          <motion.h1 variants={line} className="text-brand-500">
            development,<span className="text-ink-50">passionate about</span>
          </motion.h1>
          <motion.h1 variants={line}>my work, disciplined, and</motion.h1>
          <motion.h1 variants={line}>successful.</motion.h1>
        </motion.div>

        {/* right: text + button */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left md:w-[40%] max-w-md"
        >
          <h1 className="text-ink-200 text-sm sm:text-base lg:text-lg leading-relaxed">
            if you have a project in mind, check out my work and contact me to
            work together, Best of luck!
          </h1>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-6 bg-brand-500 text-white font-medium px-8 py-3 rounded-2xl shadow-glow hover:bg-white hover:text-brand-600 hover:shadow-glow-lg transition-[background-color,color,box-shadow] duration-300"
          >
            Contact
          </motion.a>
        </motion.div>
      </div>
    </>
  );
};

export default AboutMe;
