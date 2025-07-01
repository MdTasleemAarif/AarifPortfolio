
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 transition-colors duration-300 bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText font-['Outfit']"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14 md:gap-20 ">
        {/* Profile Image */}
        <div>
          <Image
            src="/assets/mydp1.jpg"
            alt="MD Tasleem Aarif"
            width={320}
            height={320}
            className="object-cover w-full h-full rounded-2xl"
            loading="lazy"
          />
        </div>

        {/* About Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
          className="text-center md:text-left max-w-2xl space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed"
          >
            Hi, I'm <strong className="text-blue-600 dark:text-yellow-400">MD Tasleem Aarif</strong>, a passionate{' '}
            <span className="font-bold text-purple-600 dark:text-purple-300">UI/UX Designer</span> &{' '}
            <span className="font-bold text-pink-600 dark:text-pink-300">Frontend Developer</span> who turns ideas into
            beautiful, intuitive, and high-performance web experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            I specialize in <strong>responsive, accessible, pixel-perfect interfaces</strong> built with{' '}
            <strong>React.js, Tailwind CSS</strong> and design tools like <strong>Figma & Adobe Suite</strong>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            I blend code with creativity to deliver visually compelling and user-first designs that leave lasting impressions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap justify-center md:justify-start gap-5 pt-6"
          >
            <a
              href="/md-tasleem-aarif.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-2 px-6 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              📄 View Resume
            </a>
            <a
              href="mailto:princetasleemaarif@gmail.com"
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-medium py-2 px-6 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              📬 Let's Connect
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
