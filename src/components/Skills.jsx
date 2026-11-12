import React from "react";
import { motion } from "motion/react";
import { FiLayout, FiServer, FiTool } from "react-icons/fi";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    icon: <FiLayout />,
    techs: [
      { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
      { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    ],
  },
  {
    title: "Backend",
    icon: <FiServer />,
    techs: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#5FA04E" },
      { name: "Express", icon: <SiExpress />, color: "#FFFFFF" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    ],
  },
  {
    title: "Tools",
    icon: <FiTool />,
    techs: [
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#FFFFFF" },
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    ],
  },
];

const row = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
};

const chip = {
  hidden: { opacity: 0, scale: 0.7 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const Skills = () => {
  return (
    <>
      <div
        id="skill"
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
          My <span className="text-brand-400">Skills</span>
        </motion.h1>

        {/* rows */}
        <div className="w-full max-w-4xl mt-10 flex flex-col gap-6">
          {skills.map((s) => (
            <motion.div
              key={s.title}
              variants={row}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row md:items-center gap-6 rounded-2xl p-5 border border-brand-500/30 bg-gradient-to-br from-brand-500/20 via-black to-transparent hover:border-brand-500 hover:shadow-glow transition-[border-color,box-shadow] duration-300"
            >
              {/* left: heading + logo */}
              <div className="flex items-center gap-4 md:w-[30%]">
                <span className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center text-2xl shrink-0">
                  {s.icon}
                </span>
                <h2 className="text-ink-50 text-xl md:text-2xl font-semibold">
                  {s.title}
                </h2>
              </div>

              {/* right: technology logos */}
              <div className="flex flex-wrap gap-3 md:w-[70%] md:justify-end">
                {s.techs.map((t) => (
                  <motion.div
                    key={t.name}
                    variants={chip}
                    whileHover={{ y: -4 }}
                    className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-brand-500/60 transition-colors duration-300"
                  >
                    <span
                      style={{ color: t.color }}
                      className="text-xl group-hover:scale-125 transition duration-300"
                    >
                      {t.icon}
                    </span>
                    <span className="text-ink-100 text-sm font-light">
                      {t.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
