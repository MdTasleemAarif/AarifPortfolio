'use client';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export default function FadeInWhenVisible({ children, delay = 0.2 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const observer = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    observer(); // Initial check
    const observerConfig = new MutationObserver(observer);
    observerConfig.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observerConfig.disconnect();
  }, []);

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  // Define different variants based on mode
  const variants = isDarkMode
    ? {
        hidden: { opacity: 0, scale: 0.9, y: 50 },
        visible: { opacity: 1, scale: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
