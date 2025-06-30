'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
    {/* <div className="w-full h-[400px]  rounded-xl overflow-hidden border border-lightBorder dark:border-darkBorder shadow-xl">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.0599327341554!2d72.82045221541791!3d21.21558028787967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e80ac010ccb%3A0xe48edb3ae9f4c9e2!2sHome!5e0!3m2!1sen!2sin!4v1719400192040!5m2!1sen!2sin"
    width="100%"
    height="100%"
    allowFullScreen=""
    loading="lazy"
    className="border-0"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div> */}
<div className="w-full h-[400px] rounded-xl overflow-hidden border border-lightBorder dark:border-darkBorder shadow-xl bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText transition-colors duration-300">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.0599327341554!2d72.82045221541791!3d21.21558028787967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e80ac010ccb%3A0xe48edb3ae9f4c9e2!2sHome!5e0!3m2!1sen!2sin!4v1719400192040!5m2!1sen!2sin"
    width="100%"
    height="100%"
    allowFullScreen=""
    loading="lazy"
    className="border-0"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


    <footer className="bg-lightSurface dark:bg-darkBg text-lightText dark:text-darkText border-t border-lightBorder dark:border-darkBorder pt-10 pb-6 shadow-inner transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* About Column */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-primary dark:text-secondary">About</h3>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            I'm a passionate full-stack developer specializing in modern UI design, responsive layouts, and scalable web applications. Let’s build something amazing!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-primary dark:text-secondary">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#about" className="hover:text-primary dark:hover:text-secondary transition">About Me</Link></li>
            <li><Link href="#projects" className="hover:text-primary dark:hover:text-secondary transition">Projects</Link></li>
            <li><Link href="#skills" className="hover:text-primary dark:hover:text-secondary transition">Skills</Link></li>
            <li><Link href="#contact" className="hover:text-primary dark:hover:text-secondary transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-primary dark:text-secondary">Let's Connect</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" title="GitHub">
              <motion.div whileHover={{ scale: 1.2 }}>
                <FaGithub className="text-2xl hover:text-primary dark:hover:text-secondary transition" />
              </motion.div>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <motion.div whileHover={{ scale: 1.2 }}>
                <FaLinkedin className="text-2xl hover:text-primary dark:hover:text-secondary transition" />
              </motion.div>
            </a>
            <a href="mailto:princetasleemaarif@gmail.com" title="Email">
              <motion.div whileHover={{ scale: 1.2 }}>
                <FaEnvelope className="text-2xl hover:text-primary dark:hover:text-secondary transition" />
              </motion.div>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Md Tasleem Aarif. All rights reserved.
      </div>
    </footer>
    </>
  );
}
