import React, { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { motion } from "motion/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* for big screen */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden md:block w-full h-16 fixed inset-0 z-100 bg-black/50 backdrop-blur-md border-b border-brand-500/20 shadow-glow"
      >
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-400 to-transparent"></div>

        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[60%] h-6 rounded-full bg-brand-500/50 blur-xl pointer-events-none"></div>

        <div className="w-full h-full flex items-center">
          <div className="w-[30%] flex justify-center">
            <h1 className="text-ink-50 text-2xl font-medium">MTahirdev</h1>
          </div>
          <div className="w-[70%] flex justify-evenly text-ink-50 items-center font-medium">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.1 }}
              className="hover:text-brand-500 transition-colors"
            >
              Home
            </motion.a>
            <motion.a
              href="#work"
              whileHover={{ scale: 1.1 }}
              className="hover:text-brand-500 transition-colors"
            >
              Work
            </motion.a>
            <motion.a
              href="#myservices"
              whileHover={{ scale: 1.1 }}
              className="hover:text-brand-500 transition-colors"
            >
              My Services
            </motion.a>
            <motion.a
              href="#skill"
              whileHover={{ scale: 1.1 }}
              className="hover:text-brand-500 transition-colors"
            >
              Skills
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-400 text-black px-5 py-2 rounded-2xl"
            >
              Contact
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* for mobile */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="md:hidden w-full h-16 fixed inset-0 z-100 bg-black/50 backdrop-blur-md border-b border-brand-500/20 shadow-glow"
      >
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-400 to-transparent"></div>

        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[60%] h-6 rounded-full bg-brand-500/50 blur-xl pointer-events-none"></div>
        <div className="w-full h-full flex items-center justify-between px-5">
          <h1 className="text-ink-50 text-2xl font-medium">MTahirdev</h1>
          <motion.button
            onClick={() => setOpen(true)}
            whileTap={{ scale: 0.85 }}
            className="text-ink-50 text-3xl"
          >
            <RxHamburgerMenu />
          </motion.button>
        </div>
      </motion.div>

      {/* mobile menu (overlay) */}
      <motion.div
        onClick={() => setOpen(false)}
        initial={false}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden fixed inset-0 z-100 bg-black/60 ${
          open ? "" : "pointer-events-none"
        }`}
      ></motion.div>

      {/* mobile menu (slides from right) */}
      <motion.div
        initial={false}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 32 }}
        className="md:hidden fixed top-0 right-0 z-110 w-64 h-full bg-ink-900 border-l border-brand-500/30 shadow-glow"
      >
        <div className="w-full h-16 flex items-center justify-between px-5 border-b border-brand-500/20">
          <h1 className="text-ink-50 text-xl font-medium">MTahirdev</h1>
          <motion.button
            onClick={() => setOpen(false)}
            whileTap={{ scale: 0.85 }}
            className="text-ink-50 text-3xl"
          >
            <RxCross2 />
          </motion.button>
        </div>

        <div className="flex flex-col gap-2 p-5 text-ink-50 font-medium">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="py-3 border-b border-ink-700"
          >
            Home
          </a>
          <a
            href="#work"
            onClick={() => setOpen(false)}
            className="py-3 border-b border-ink-700"
          >
            Work
          </a>
          <a
            href="#myservices"
            onClick={() => setOpen(false)}
            className="py-3 border-b border-ink-700"
          >
            My Services
          </a>
          <a
            href="#skill"
            onClick={() => setOpen(false)}
            className="py-3 border-b border-ink-700"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 bg-brand-400 text-black text-center px-5 py-3 rounded-2xl"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
