// 'use client';

// import HeroTmf from '@/components/HeroTmf';
// import About from '@/components/About';
// import Projects from '@/components/Projects';
// import Skills from '@/components/Skills';
// import Resume from '@/components/Resume';
// import ContactSection from '@/components/ContactSection';
// import Services from '@/components/MyServicesSection';


// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import {
//   FaHome, FaUser, FaTools, FaProjectDiagram, FaFileAlt, FaEnvelope,
//   FaLinkedin, FaSun, FaMoon, FaBars, FaTimes, FaArrowUp
// } from 'react-icons/fa';
// import SkillsGrid from '@/components/SkillsGrid';
// import Footer from '@/components/Footer';


// export default function Navbar() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [active, setActive] = useState('#home');
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', darkMode);
//   }, [darkMode]);

//   useEffect(() => {
//     const onScroll = () => {
//       const scrollY = window.scrollY;
//       const height = document.body.scrollHeight - window.innerHeight;
//       setScrollProgress((scrollY / height) * 100);
//       setShowScrollTop(scrollY > 300);
//       const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
//       for (const id of sections) {
//         const el = document.getElementById(id);
//         if (el && el.offsetTop - 80 <= scrollY) setActive(`#${id}`);
//       }
//     };

//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   const navLinks = [
//     { href: '#home', icon: FaHome, label: 'Home' },
//     { href: '#about', icon: FaUser, label: 'About' },
//     { href: '#projects', icon: FaProjectDiagram, label: 'Projects' },
//     { href: '#skills', icon: FaTools, label: 'Skills' },
//     { href: '#resume', icon: FaFileAlt, label: 'Resume', download: true },
//     { href: '#contact', icon: FaEnvelope, label: 'Contact' }
//   ];

//   return (
//     <>
    
//       {/* Scroll Progress Bar */}
//       <div className="fixed top-0 left-0 w-full h-1 z-[999]">
//         <div
//           className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full transition-all duration-300"
//           style={{ width: `${scrollProgress}%` }}
//         />
//       </div>
//       <div id="home">
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-3 
//         bg-lightSurface/80 dark:bg-darkBg/90 backdrop-blur-md 
//         border-b border-lightBorder dark:border-darkBorder 
//         shadow-xl transition-colors duration-300">
        
//         {/* Logo */}
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Link href="/" className="flex items-center gap-2 ml-4">
//             <Image
//               src="/assets/myname logo.png"
//               alt="Md Tasleem Aarif"
//               width={90}
//               height={28}
//               className="h-auto w-auto object-contain hover:opacity-80 transition-opacity"
//               priority
//             />
//           </Link>
//         </motion.div>

//         {/* Center Nav */}
//         <motion.div
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, type: 'spring' }}
//           className="hidden md:flex bg-lightSurface dark:bg-darkSurface 
//           border border-lightBorder dark:border-darkBorder 
//           rounded-full px-10 py-4 gap-8 items-center 
//           text-lightText dark:text-darkText shadow-xl"
//         >
//           {navLinks.map(({ href, icon: Icon, label, download }) => (
//             <Link
//               key={href}
//               href={href}
//               onClick={() => setActive(href)}
//               className={`flex flex-col items-center gap-1 transition-all duration-300 
//               hover:text-primary dark:hover:text-secondary ${
//                 active === href ? 'text-primary dark:text-secondary scale-105' : ''
//               }`}
//               {...(download ? { download: true } : {})}
//             >
//               <Icon className="text-[28px]" />
//               <span className="text-sm font-semibold">{label}</span>
//             </Link>
//           ))}
//         </motion.div>

//         {/* Right Icons */}
//         <div className="flex items-center gap-4 mr-10">
//           <a title="Email" href="mailto:example@mail.com" target="_blank" rel="noopener noreferrer">
//             <FaEnvelope className="text-2xl text-lightText dark:text-darkText hover:text-primary dark:hover:text-secondary transition" />
//           </a>
//           <a title="LinkedIn" href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin className="text-2xl text-lightText dark:text-darkText hover:text-primary dark:hover:text-secondary transition" />
//           </a>

//           {/* Theme Toggle */}
//           <div
//             onClick={() => setDarkMode(!darkMode)}
//             className="relative w-16 h-8 bg-lightBorder dark:bg-darkBorder rounded-full flex items-center px-1 cursor-pointer"
//           >
//             <motion.div
//               className="absolute w-6 h-6 rounded-full"
//               animate={{ x: darkMode ? 32 : 0 }}
//               transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//               style={{ backgroundColor: darkMode ? '#0ea5e9' : '#6366f1' }}
//             />
//             <FaSun className="text-white z-10 ml-1 text-xs" />
//             <FaMoon className="text-cyan-400 z-10 ml-auto mr-1 text-xs" />
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden text-lightText dark:text-darkText text-2xl ml-2">
//             <button onClick={() => setMenuOpen(!menuOpen)}>
//               {menuOpen ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 flex flex-col items-center gap-4 
//           bg-lightSurface dark:bg-darkSurface text-lightText dark:text-darkText 
//           p-4 rounded-xl shadow-xl w-[90%]">
//             {navLinks.map(({ href, icon: Icon, label }) => (
//               <Link
//                 key={href}
//                 href={href}
//                 onClick={() => {
//                   setActive(href);
//                   setMenuOpen(false);
//                 }}
//                 className="flex items-center gap-2 text-lg font-semibold hover:text-primary dark:hover:text-secondary"
//               >
//                 <Icon className="text-xl" />
//                 {label}
//               </Link>
//             ))}
//           </div>
//         )}
//       </nav>

//       {/* Scroll to Top Button */}
//       {showScrollTop && (
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           className="fixed bottom-6 right-6 bg-primary dark:bg-secondary text-white p-3 rounded-full 
//           shadow-xl hover:bg-indigo-700 dark:hover:bg-cyan-400 z-[999]"
//           title="Back to Top"
//         >
//           <FaArrowUp />
//         </button>
//       )}

//       {/* Hero Section */}
//       <HeroTmf />
// </div>
      



//   {/* About Section */}
// <div id="about" className="scroll-mt-28">
//   <About />
// </div>

// {/* Projects Section */}
// <div id="projects" className="scroll-mt-36">
//   <Projects />
// </div>

// {/* Skills Section */}
// <div id="skills" className="scroll-mt-36">
//   <Skills />
// </div>

// {/* Resume Section */}
// <div id="resume" className="scroll-mt-36">
//   <Resume />
// </div>

// {/* Contact Section */}
// <div id="contact" className="scroll-mt-48">
//   <ContactSection />
// </div>




// < SkillsGrid />
// <Services />
// <Footer/>
//     </>
//   );
// }











'use client';

import HeroTmf from '@/components/HeroTmf';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import ContactSection from '@/components/ContactSection';
import Services from '@/components/MyServicesSection';
import SkillsGrid from '@/components/SkillsGrid';
import Footer from '@/components/Footer';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaHome, FaUser, FaTools, FaProjectDiagram, FaFileAlt, FaEnvelope,
  FaLinkedin, FaSun, FaMoon, FaBars, FaTimes, FaArrowUp
} from 'react-icons/fa';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((scrollY / height) * 100);
      setShowScrollTop(scrollY > 300);

      const sections = ['home', 'about', 'projects', 'skills', 'resume', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 120 <= scrollY) {
          setActive(`#${id}`);
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#home', icon: FaHome, label: 'Home' },
    { href: '#about', icon: FaUser, label: 'About' },
    { href: '#projects', icon: FaProjectDiagram, label: 'Projects' },
    { href: '#skills', icon: FaTools, label: 'Skills' },
    { href: '#resume', icon: FaFileAlt, label: 'Resume', download: true },
    { href: '#contact', icon: FaEnvelope, label: 'Contact' }
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 z-[999]">
        <div
          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div id="home">
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-3 \
          bg-lightSurface/80 dark:bg-darkBg/90 backdrop-blur-md \
          border-b border-lightBorder dark:border-darkBorder \
          shadow-xl transition-colors duration-300">

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <Link href="/" className="flex items-center gap-2 ml-4">
              <Image
                src="/assets/Myname logo4.png"
                alt="Md Tasleem Aarif"
                width={90}
                height={28}
                className="h-auto w-auto object-contain hover:opacity-80 transition-opacity"
                priority
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            className="hidden md:flex bg-lightSurface dark:bg-darkSurface \
            border border-lightBorder dark:border-darkBorder \
            rounded-full px-10 py-4 gap-8 items-center \
            text-lightText dark:text-darkText shadow-xl">
            {navLinks.map(({ href, icon: Icon, label, download }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setActive(href)}
                className={`flex flex-col items-center gap-1 transition-all duration-300 \
                hover:text-primary dark:hover:text-secondary ${
                  active === href ? 'text-primary dark:text-secondary scale-105' : ''
                }`}
                {...(download ? { download: true } : {})}>
                <Icon className="text-[28px]" />
                <span className="text-sm font-semibold">{label}</span>
              </Link>
            ))}
          </motion.div>

          <div className="flex items-center gap-4 mr-10">
            <a title="Email" href="mailto:princetasleemaarif@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="text-2xl text-lightText dark:text-darkText hover:text-primary dark:hover:text-secondary transition" />
            </a>
            <a title="LinkedIn" href="https://www.linkedin.com/in/tasleem-aarif-mohammed-9bbb261a4/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-lightText dark:text-darkText hover:text-primary dark:hover:text-secondary transition" />
            </a>
            <div
              onClick={() => setDarkMode(!darkMode)}
              className="relative w-16 h-8 bg-lightBorder dark:bg-darkBorder rounded-full flex items-center px-1 cursor-pointer">
              <motion.div
                className="absolute w-6 h-6 rounded-full"
                animate={{ x: darkMode ? 32 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ backgroundColor: darkMode ? '#0ea5e9' : '#6366f1' }}
              />
              <FaSun className="text-white z-10 ml-1 text-xs" />
              <FaMoon className="text-cyan-400 z-10 ml-auto mr-1 text-xs" />
            </div>
            <div className="md:hidden text-lightText dark:text-darkText text-2xl ml-2">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 flex flex-col items-center gap-4 \
            bg-lightSurface dark:bg-darkSurface text-lightText dark:text-darkText \
            p-4 rounded-xl shadow-xl w-[90%]">
              {navLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => {
                    setActive(href);
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-lg font-semibold hover:text-primary dark:hover:text-secondary">
                  <Icon className="text-xl" />
                  {label}
                </Link>
              ))}
            </div>
          )}
        </nav>

        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 bg-primary dark:bg-secondary text-white p-3 rounded-full \
            shadow-xl hover:bg-indigo-700 dark:hover:bg-cyan-400 z-[999]"
            title="Back to Top">
            <FaArrowUp />
          </button>
        )}

        <HeroTmf />
      </div>

      <section id="about" className="scroll-mt-48">
        <About />
      </section>

      <section id="projects" className="scroll-mt-48">
        <Projects />
      </section>

      <section id="skills" className="scroll-mt-48">
        <Skills />
      </section>

      <section id="resume" className="scroll-mt-48">
        <Resume />
      </section>
<SkillsGrid />
      <Services />
      <section id="contact" className="scroll-mt-56">
        <ContactSection />
      </section>

      

      
      <Footer />
    </>
  );
}
