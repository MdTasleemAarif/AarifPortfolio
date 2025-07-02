
'use client';

import { useState } from "react";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';

// Categories with real logos
const devCategories = [
  { label: "HTML", icon: <img src="/logos/html.svg" alt="HTML" className="h-6 w-6 inline-block mr-2" /> },
  { label: "CSS", icon: <img src="/logos/css.svg" alt="CSS" className="h-6 w-6 inline-block mr-2" /> },
  { label: "JavaScript", icon: <img src="/logos/javascript.svg" alt="Photoshop" className="h-6 w-6 inline-block mr-2" /> },
  { label: "WordPress", icon: <img src="/logos/wordpress.svg" alt="Photoshop" className="h-6 w-6 inline-block mr-2" /> },
  { label: "BootStrap", icon: <img src="/logos/bootstrap.svg" alt="Photoshop" className="h-6 w-6 inline-block mr-2" /> },
  { label: "React.js", icon: <img src="/logos/react.svg" alt="React" className="h-6 w-6 inline-block mr-2" />},
  
];

const designCategories = [
  { label: "Illustrator", icon: <img src="/logos/illustrator.svg" alt="Illustrator" className="h-6 w-6 inline-block mr-2" /> },
  { label: "Photoshop", icon: <img src="/logos/photoshop.svg" alt="Photoshop" className="h-6 w-6 inline-block mr-2" /> },
  { label: "Figma", icon: <img src="/logos/figma.svg" alt="Figma" className="h-6 w-6 inline-block mr-2" /> }
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [mode, setMode] = useState("development"); // or 'designer'

  const activeCategories = mode === "development" ? devCategories : designCategories;

  const filteredProjects = filter === "All"
    ? projects.filter((p) => p.mode === mode)
    : projects.filter((p) => p.category === filter && p.mode === mode);

  return (
    <section className="py-12 px-4 md:px-10 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText font-poppins">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-playfair font-bold text-orange-600 mb-2">
          Explore My Projects
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
          Crafting clean, accessible, and eco-conscious digital experiences through modern technologies.
        </p>

        {/* Mode Switch */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            disabled={mode === "development"}
            onClick={() => { setMode("development"); setFilter("All"); }}
            className={`px-6 py-2 border rounded-full font-semibold transition ${
              mode === "development"
                ? "bg-gradient-to-r from-indigo-500 to-teal-400 text-white shadow-lg"
                : "text-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:text-white"
            }`}
          >
            {mode === "development" ? "Development Work" : "Shift to Development Work"}
          </button>
          <button
            disabled={mode === "designer"}
            onClick={() => { setMode("designer"); setFilter("All"); }}
            className={`px-6 py-2 border rounded-full font-semibold transition ${
              mode === "designer"
                ? "bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-lg"
                : "text-pink-500 border-pink-500 hover:bg-pink-500 hover:text-white"
            }`}
          >
            {mode === "designer" ? "Designer Work" : "Shift to Designer Work"}
          </button>
        </div>

        {/* Filters */}
        <ul className="flex flex-wrap justify-center gap-4 mb-10">
          <li
  onClick={() => setFilter("All")}
  className={`px-4 py-2 rounded-full font-semibold border flex items-center gap-2 transition transform hover:scale-110 ${
    filter === "All"
      ? "bg-gradient-to-r from-indigo-500 to-teal-400 text-white shadow-lg"
      : "border-gray-300 text-gray-800 dark:text-gray-300 dark:border-gray-600 hover:bg-indigo-500 hover:text-white"
  }`}
>
  <img
    src={mode === "development" ? "/logos/code.svg" : "/logos/code.svg"}
    alt="All"
    className="w-6 h-6"
  />
  <span>All</span>
</li>

          {activeCategories.map(({ label, icon }) => (
            <li
              key={label}
              onClick={() => setFilter(label)}
              className={`px-4 py-2 rounded-full font-semibold border transition transform hover:scale-110 ${
                filter === label
                  ? "bg-gradient-to-r from-indigo-500 to-teal-400 text-white shadow-lg"
                  : "border-gray-300 text-gray-800 dark:text-gray-300 dark:border-gray-600 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              {icon}<span className="align-middle">{label}</span>
            </li>
          ))}
        </ul>

        {/* Project Cards */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.slice(0, visibleCount).map((proj, i) => (
            <Tilt
              key={i}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              transitionSpeed={700}
              scale={1.03}
              className="group bg-white/20 dark:bg-[#1a1a22]/30 backdrop-blur-md rounded-xl shadow-md overflow-hidden transition hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] hover:animate-border-glow"
            >
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * .1 }}>
                <a href={proj.url} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-full h-[360px] sm:h-[400px] md:h-[440px] overflow-hidden rounded-t-xl">
                    <img src={proj.src} alt={proj.title} className="object-cover w-full h-full transition-transform group-hover:scale-110"/>
                  </div>
                </a>
                <div className="p-5 text-center">
                  <h4 className="text-xl font-playfair font-bold text-fuchsia-600 dark:text-cyan-400 hover:text-purple-700 cursor-pointer" onClick={() => window.open(proj.url, "_blank")}>{proj.title}</h4>
                  <p className="text-sm font-poppins font-medium text-orange-600 dark:text-yellow-300 mt-2">{proj.description}</p>
                  <a href={proj.url} target="_blank" className="mt-4 inline-block px-5 py-2 border border-blue-500 text-blue-500 rounded-full text-sm font-poppins font-semibold hover:bg-blue-500 hover:text-white transition">
                    View Project
                  </a>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-10">
            <button onClick={() => setVisibleCount(visibleCount + 6)} className="px-6 py-2 bg-gradient-to-r from-indigo-400 to-teal-400 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition font-poppins">
              Load More Items
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
