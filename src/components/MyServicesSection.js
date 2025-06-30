'use client';

import { FaLightbulb, FaMobileAlt, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Creative UI Design',
    icon: <FaLightbulb className="text-3xl text-white" />,
    description:
      'I specialize in crafting visually striking and user-centric interface designs that balance aesthetics with functionality. With a keen eye for detail and modern trends, I transform complex ideas into simple, intuitive layouts that elevate the user experience and reflect brand identity effectively.',
    color: 'from-pink-500 to-red-400',
  },
  {
    title: 'Responsive Web Design',
    icon: <FaMobileAlt className="text-3xl text-white" />,
    description:
      'I build fully responsive, cross-browser-compatible websites that adapt seamlessly to all screen sizes. My designs prioritize accessibility, performance, and user behavior—ensuring fluid interaction on desktops, tablets, and smartphones for a consistently delightful experience.',
    color: 'from-indigo-500 to-blue-400',
  },
  {
    title: 'Full-Stack Development',
    icon: <FaLaptopCode className="text-3xl text-white" />,
    description:
      'I develop robust and scalable web applications using both front-end and back-end technologies. From creating dynamic UIs to managing server-side logic and databases, I deliver end-to-end solutions that are fast, secure, and optimized for real-world business needs.',
    color: 'from-green-500 to-emerald-400',
  },
];

export default function MyServicesSection() {
  return (
     <section className="px-4 bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText font-poppins transition-all duration-300">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4 text-[#00c9ff] dark:text-[#00e6e6]">
          Turning Ideas into Impact <span className="inline-block">🚀</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-14 max-w-2xl mx-auto">
          I specialize in transforming creative concepts into real-world digital solutions. From intuitive UI designs to powerful web applications, my work bridges imagination with functionality to deliver meaningful user experiences.
        </p>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.03 }}
              className={`bg-gradient-to-br ${service.color} p-[2px] rounded-xl shadow-xl transform transition-transform hover:shadow-[0_0_30px_#00c9ff55]`}
            >
              
                <div className="h-full w-full bg-white dark:bg-[#1a1a1a] p-6 rounded-lg flex flex-col items-start gap-4 hover:cursor-pointer">
                  <div className="bg-black dark:bg-gray-800 p-3 rounded-full shadow-md">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-left">
                    {service.description}
                  </p>
                </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
