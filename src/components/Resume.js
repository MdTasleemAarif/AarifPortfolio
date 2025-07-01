'use client';

import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';

const resumeFile = '/md-tasleem-aarif.pdf';

const timelineData = [
  {
    title: 'UI/UX Design Certification',
    year: '2025',
    subtitle: 'Tech Mahindra Foundation',
    description: 'Pursuing 4-month intensive program in user interface and experience design.',
    icon: '/logos/UIUX.png',
  },
  {
    title: 'Worked in Concentrix',
    year: '2024',
    subtitle: 'Advisor',
    description: '',
    icon: '/logos/cnx.webp',
  },
  {
    title: 'MBA in Marketing',
    year: '2022 – 2024',
    subtitle: 'Andhra University, Visakhapatnam',
    description: '57.8%',
    icon: '/logos/mba.svg',
  },
  {
    title: 'Bachelor of Technology in Mechanical Engineering',
    year: '2017 – 2021',
    subtitle: 'M.V.G.R College of Engineering, Vizianagaram',
    description: 'GPA: 6.85/10',
    icon: '/logos/btech.jpg',
  },
  
];

const ResumeSection = () => {
  return (
    <section className="py-12 px-4 bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText font-poppins transition-all duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl text-center font-bold mb-12 text-[#00c9ff] dark:text-[#00e6e6] relative after:absolute after:content-[''] after:h-1 after:w-20 after:bg-[#00c9ff] after:dark:bg-[#00e6e6] after:left-1/2 after:-translate-x-1/2 after:-bottom-2">
          Education & Experience
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-[#00c9ff] dark:border-[#00e6e6] ml-4">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-10 ml-6 relative"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[1.4rem] top-2 w-4 h-4 rounded-full bg-[#00c9ff] dark:bg-[#00e6e6] ring-4 ring-white dark:ring-[#0d0d0d] shadow-md" />

              {/* Timeline Card */}
              <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-lg shadow-xl hover:scale-[1.01] hover:shadow-cyan-400/20 dark:hover:shadow-cyan-400/10 border border-gray-200 dark:border-gray-700 transition-all">
                <div className="flex items-start gap-4">
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={`${item.title} icon`}
                      className="w-10 h-10 rounded-full bg-white dark:bg-black p-1 ring-2 ring-[#00c9ff] dark:ring-[#00e6e6]"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-[#00c9ff] dark:text-[#00e6e6] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{item.year}</p>
                    <p className="text-sm font-medium mb-2 text-gray-800 dark:text-gray-300">{item.subtitle}</p>
                    {item.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-14 text-center flex flex-col sm:flex-row justify-center gap-6">
          <a
            href={resumeFile}
            download
            className="inline-flex items-center justify-center gap-2 bg-[#00c9ff] hover:bg-[#00b3e6] text-black font-semibold py-3 px-6 rounded-full transition-all"
          >
            <FaDownload />
            Download Resume
          </a>

          <a
            href="mailto:princetasleemaarif@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-white dark:bg-[#1a1a1a] text-[#333] dark:text-[#e0e0e0] border border-gray-300 dark:border-gray-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 dark:hover:bg-[#222] transition-all"
          >
            <FaEnvelope />
            Mail Me Personally
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
