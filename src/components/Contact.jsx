import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";

// EmailJS data
const SERVICE_ID = "service_g3usino";
const TEMPLATE_ID = "template_hb7enr5";
const PUBLIC_KEY = "iyrQfxcSpa0IAffqI";

const info = [
  {
    icon: <FiMail />,
    label: "Email",
    value: "tahirpansota796@gmail.com",
    href: "mailto:tahirpansota796@gmail.com",
  },
  {
    icon: <FiPhone />,
    label: "Phone",
    value: "+92 320 3981965",
    href: "tel:+923203981965",
  },
  {
    icon: <FiMapPin />,
    label: "Location",
    value: "Faisalabad, Pakistan",
    href: null,
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", text: "" });

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus({
            type: "success",
            text: "Message sent! I will reply soon.",
          });
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
          setTimeout(() => setStatus({ type: "", text: "" }), 4000);
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus({
            type: "error",
            text: "Failed to send. Please try again.",
          });
          setLoading(false);
        },
      );
  };

  return (
    <>
      <div
        id="contact"
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
          Contact <span className="text-brand-400">Me</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-ink-200 font-light text-center mt-3 max-w-md text-sm md:text-base"
        >
          Have a project in mind? Send me a message and let's work together.
        </motion.p>

        <div className="w-full max-w-5xl mt-10 flex flex-col md:flex-row gap-6 overflow-hidden">
          {/* left: form */}
          <motion.form
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="md:w-[60%] flex flex-col gap-4 rounded-2xl p-6 border border-brand-500/30 bg-gradient-to-br from-brand-500/20 via-black to-transparent"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-ink-50 placeholder:text-ink-400 outline-none focus:border-brand-500 focus:shadow-glow transition"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-ink-50 placeholder:text-ink-400 outline-none focus:border-brand-500 focus:shadow-glow transition"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your message"
              required
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-ink-50 placeholder:text-ink-400 outline-none resize-none focus:border-brand-500 focus:shadow-glow transition"
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center gap-2 bg-brand-500 text-white font-medium px-8 py-3 rounded-2xl shadow-glow hover:bg-brand-400 hover:shadow-glow-lg transition-[background-color,box-shadow] duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"} <FiSend />
            </motion.button>

            <AnimatePresence>
              {status.text && (
                <motion.p
                  key={status.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`text-sm text-center ${
                    status.type === "success"
                      ? "text-brand-400"
                      : "text-red-400"
                  }`}
                >
                  {status.text}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>

          {/* right: contact info */}
          <div className="md:w-[40%] flex flex-col gap-4">
            {info.map((item, idx) => {
              const content = (
                <>
                  <span className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center text-2xl shrink-0">
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-brand-400 text-xs">{item.label}</p>
                    <h2 className="text-ink-50 font-medium break-words">
                      {item.value}
                    </h2>
                  </div>
                </>
              );

              const cardProps = {
                initial: { opacity: 0, x: 60 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true, amount: 0.3 },
                whileHover: {
                  scale: 1.03,
                  transition: { duration: 0.2, delay: 0 },
                },
                transition: { duration: 0.6, delay: idx * 0.15 },
                className:
                  "flex items-center gap-4 rounded-2xl p-5 border border-brand-500/30 bg-gradient-to-br from-brand-500/20 via-black to-transparent hover:border-brand-500 hover:shadow-glow transition-[border-color,box-shadow] duration-300",
              };

              return item.href ? (
                <motion.a key={item.label} href={item.href} {...cardProps}>
                  {content}
                </motion.a>
              ) : (
                <motion.div key={item.label} {...cardProps}>
                  {content}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
