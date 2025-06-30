
'use client';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import {
  FaHtml5, FaCss3Alt, FaReact, FaBootstrap,
  FaFigma, FaWordpress, FaGithub, FaGitAlt, FaRegCommentDots
} from 'react-icons/fa';

import {
  SiJavascript, SiAdobephotoshop, SiAdobeillustrator,
  SiCanva, SiVisualstudiocode, SiNextdotjs, SiTailwindcss,
  SiEclipseide, SiMysql, SiMicrosoftoffice
} from 'react-icons/si';

const skills = {
  frontend: [
    { icon: <FaHtml5 />, name: 'HTML5', color: 'text-orange-500' },
    { icon: <FaCss3Alt />, name: 'CSS3', color: 'text-blue-500' },
    { icon: <SiJavascript />, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: <FaReact />, name: 'React', color: 'text-cyan-400' },
    { icon: <FaBootstrap />, name: 'Bootstrap', color: 'text-purple-500' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: 'text-sky-400' },
    { icon: <SiNextdotjs />, name: 'Next.js', color: 'text-neutral-900 dark:text-white' },
  ],
  uiux: [
    { icon: <FaFigma />, name: 'Figma', color: 'text-pink-500' },
    { icon: <FaWordpress />, name: 'WordPress', color: 'text-blue-600' },
    { icon: <SiAdobephotoshop />, name: 'Photoshop', color: 'text-blue-400' },
    { icon: <SiAdobeillustrator />, name: 'Illustrator', color: 'text-orange-600' },
    { icon: <SiCanva />, name: 'Canva', color: 'text-indigo-400' },
  ],
  tools: [
    { icon: <FaGitAlt />, name: 'Git', color: 'text-orange-600' },
    { icon: <FaGithub />, name: 'GitHub', color: 'text-white' },
    { icon: <SiEclipseide />, name: 'Eclipse IDE', color: 'text-indigo-300' },
    { icon: <SiMysql />, name: 'SQL Plus', color: 'text-blue-300' },
    { icon: <SiMicrosoftoffice />, name: 'MS Office', color: 'text-orange-400' },
    { icon: <SiVisualstudiocode />, name: 'VS Code', color: 'text-blue-400' },
    { icon: <FaRegCommentDots />, name: 'ChatGPT', color: 'text-teal-400' },
  ]
};

export default function SkillsGrid() {
  return (
    <>
   
    <div className="min-h-screen px-6 py-16 bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00ffd5] via-sky-500 to-purple-500 text-transparent bg-clip-text drop-shadow-lg mb-4">
         Tech Stack Used to Build This Website
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          These are the tools and technologies that help me turn concepts into powerful digital experiences. Designed for performance, aesthetics, and seamless user interaction.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center"
      >
        <SkillCard title="Frontend" items={skills.frontend} />
        <SkillCard title="UI/UX" items={skills.uiux} />
        <SkillCard title="Tools" items={skills.tools} />
      </motion.div>
    </div>
    </>
  );
}

function SkillCard({ title, items }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.15}
      scale={1.02}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className="transform transition duration-300 ease-in-out"
    >
      <div className="w-full rounded-2xl border border-[#00ffd5] bg-white/60 dark:bg-white/10 backdrop-blur-md shadow-[0_8px_30px_rgba(0,255,213,0.2)] hover:shadow-xl transition-all duration-300 hover:scale-[1.03]">
        <h3 className="text-xl font-bold text-center text-[#00ffd5] py-4 tracking-wide border-b border-[#00ffd5] bg-gradient-to-r from-white/20 to-transparent dark:from-[#00ffd5]/10">
          {title}
        </h3>
        <div className="grid grid-cols-2 gap-4 p-6">
          {items.map((skill, idx) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={idx}
              className="flex items-center gap-2 text-sm group"
            >
              <div className={`text-2xl ${skill.color} transition duration-300 group-hover:rotate-6`}>
                {skill.icon}
              </div>
              <span className="font-medium group-hover:text-[#00ffd5] transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Tilt>
  );
}
