import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "motion/react";
import img from "../assets/TahirGreen.jpg";

const Hero = () => {
  let ref = useRef(null);

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: [
        "MERN Stack Developer",
        "React Developer",
        "Node.js Developer",
        "Web Designer",
      ],
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      <div id="home" className="w-full h-fit">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-10 flex justify-center items-center"
        >
          <h1 className="w-[80%] text-center text-ink-50 text-2xl font-medium">
            Hi! I'm Tahir - Web Developer
          </h1>
        </motion.div>

        <div className="w-full h-full mt-10">
          <div className="flex md:justify-between justify-center ">
            {/* emty div */}
            <div className="lg:w-[10%] md:w-[19%] hidden md:flex"></div>

            {/* writing div */}
            <div className="md:text-5xl text-[30px] font-bold flex flex-col justify-center items-center ">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Creative Designer &
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-brand-400 min-h-[1.5em] text-2xl"
              >
                <span ref={ref}></span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-ink-50 font-light md:text-[16px] text-center w-[80%] text-[14px] mt-2 md:w-full"
              >
                I build designs and website that solve problems,inspiring
                success
              </motion.p>
            </div>

            {/* shadow div (pulsing glow) */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="blur-3xl bg-brand-500/40 md:w-40 md:h-40 rounded-full justify-self-end "
            ></motion.div>
          </div>
        </div>

        {/* img */}
        <div className="w-full flex justify-center mt-10 mb-10">
          {/* 1) pop in once */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
              delay: 0.7,
            }}
          >
            {/* 2) float forever */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* glow behind the image */}
              <motion.div
                animate={{ opacity: [0.5, 0.9, 0.5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-3 rounded-3xl bg-brand-500/50 blur-2xl pointer-events-none"
              ></motion.div>

              <img
                src={img}
                alt="Tahir"
                className="relative w-32 sm:w-40 md:w-48 lg:w-52 aspect-7/9 object-cover rounded-2xl border border-brand-500/40"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
