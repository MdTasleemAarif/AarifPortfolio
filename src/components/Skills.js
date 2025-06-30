

// 'use client';

// import { useEffect } from 'react';

// const skillGroups = [
//   {
//     title: 'Development',
//     skills: [
//       { name: 'HTML', level: 95, icon: '🌐' },
//       { name: 'CSS', level: 90, icon: '🎨' },
//       { name: 'JavaScript', level: 85, icon: '🧠' },
//       { name: 'React.js', level: 80, icon: '⚛️' },
//       { name: 'Bootstrap', level: 95, icon: '📦' },
//       { name: 'WordPress', level: 90, icon: '📝' }
//     ],
//   },
//   {
//     title: 'Design',
//     skills: [
//       { name: 'Photoshop', level: 95, icon: '🖼️' },
//       { name: 'Illustrator', level: 90, icon: '✏️' },
//       { name: 'Figma', level: 80, icon: '🧩' },
//       { name: 'Adobe XD', level: 75, icon: '📐' },
//     ],
//   },
// ];

// export default function SkillsSection() {
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const el = entry.target;
//             const fill = el.querySelector('.fill');
//             const dot = el.querySelector('.dot');
//             const percentText = el.querySelector('.value');
//             const percent = parseInt(el.dataset.percent);

//             el.classList.add('visible');
//             fill.style.width = percent + '%';
//             dot.style.left = percent + '%';

//             let count = 0;
//             const interval = setInterval(() => {
//               if (count >= percent) {
//                 clearInterval(interval);
//               } else {
//                 count++;
//                 percentText.textContent = count + '%';
//               }
//             }, 20);

//             observer.unobserve(el);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     document.querySelectorAll('.skill-item').forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       id="skills"
//       className="py-10 font-[Poppins] bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText"
//     >
//       <div className="mx-auto max-w-6xl px-6 sm:px-10">
//         <h2 className="text-center text-4xl font-bold mb-12 bg-gradient-to-r from-[#00ffd5] to-[#00c3ff] bg-clip-text text-transparent animate-fade-in-up">
//           My Skills
//         </h2>

//         {skillGroups.map((group, idx) => (
//           <div key={idx} className="mb-12">
//             <h3 className="text-[#00ffd5] text-2xl mb-6 border-l-4 border-[#00ffd5] pl-3 animate-fade-in-up">
//               {group.title}
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//               {group.skills.map((skill, i) => (
//                 <div
//                   key={i}
//                   className="skill-item opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
//                   data-percent={skill.level}
//                 >
//                   <div className="flex justify-between mb-2 font-semibold text-lg">
//                     <span className="flex gap-2 items-center">
//                       {skill.icon} {skill.name}
//                     </span>
//                     <span className="value text-[#00ffd5]">0%</span>
//                   </div>
//                   <div className="relative h-2 bg-white/20 dark:bg-white/10 rounded-full overflow-hidden">
//                     <div className="fill h-full w-0 bg-gradient-to-r from-[#00ffd5] to-[#00c3ff] rounded-full transition-all duration-[2500ms] ease-in-out"></div>
//                     <div className="dot absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#00ffd5] rounded-full transition-all duration-[2500ms] ease-in-out"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         .visible {
//           opacity: 1 !important;
//           transform: translateY(0) !important;
//         }
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in-up {
//           animation: fadeInUp 1s ease forwards;
//         }
//       `}</style>
//     </section>
//   );
// }










'use client';

import { useEffect } from 'react';

const skillGroups = [
  {
    title: 'Development',
    skills: [
      { name: 'HTML', level: 95, icon: <img src="/logos/html.svg" alt="HTML" className="h-6 w-6 inline-block mr-2" /> },
      { name: 'CSS', level: 90, icon: <img src="/logos/css.svg" alt="CSS" className="h-6 w-6 inline-block mr-2" /> },
      { name: 'JavaScript', level: 85, icon: <img src="/logos/javaScript.svg" alt="JavaScript" className="h-6 w-6 inline-block mr-2" /> },
      { name: 'React.js', level: 80, icon: <img src="/logos/react.svg" alt="React" className="h-6 w-6 inline-block mr-2" /> },
      { name: 'Bootstrap', level: 95, icon: <img src="/logos/bootstrap.svg" alt="Bootstrap" className="h-6 w-6 inline-block mr-2" /> },
      { name: 'WordPress', level: 90, icon: <img src="/logos/wordpress.svg" alt="WordPress" className="h-6 w-6 inline-block mr-2" /> },
    ],
  },
  {
    title: 'Design',
    skills: [
      { name: 'Photoshop', level: 95, icon: <img src="/logos/photoshop.svg" alt="Photoshop" className="h-6 w-6 inline-block mr-2" /> },
      { name: 'Illustrator', level: 90, icon: <img src="/logos/illustrator.svg" alt="Illustrator" className="h-6 w-6 inline-block mr-2" /> },
      { name: 'Figma', level: 80, icon: <img src="/logos/figma.svg" alt="Figma" className="h-6 w-6 inline-block mr-2" /> },
      { name: 'Adobe XD', level: 75, icon: '📐' },
    ],
  },
];

export default function SkillsSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const fill = el.querySelector('.fill');
            const dot = el.querySelector('.dot');
            const percentText = el.querySelector('.value');
            const percent = parseInt(el.dataset.percent);

            el.classList.add('visible');
            fill.style.width = percent + '%';
            dot.style.left = percent + '%';

            let count = 0;
            const interval = setInterval(() => {
              if (count >= percent) {
                clearInterval(interval);
              } else {
                count++;
                percentText.textContent = count + '%';
              }
            }, 20);

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('.skill-item').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="py-12 font-[Poppins] bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="text-center text-4xl font-bold mb-12 bg-gradient-to-r from-[#00ffd5] to-[#00c3ff] bg-clip-text text-transparent animate-fade-in-up">
          My Skills
        </h2>

        {skillGroups.map((group, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-[#00ffd5] text-2xl mb-6 border-l-4 border-[#00ffd5] pl-3 animate-fade-in-up">
              {group.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {group.skills.map((skill, i) => (
                <div
                  key={i}
                  className="skill-item opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
                  data-percent={skill.level}
                >
                  <div className="flex justify-between mb-2 font-semibold text-lg">
                    <span className="flex gap-2 items-center">
                      {skill.icon} {skill.name}
                    </span>
                    <span className="value text-[#00ffd5]">0%</span>
                  </div>
                  <div className="relative h-2 bg-white/20 dark:bg-white/10 rounded-full overflow-hidden">
                    <div className="fill h-full w-0 bg-gradient-to-r from-[#00ffd5] to-[#00c3ff] rounded-full transition-all duration-[2500ms] ease-in-out"></div>
                    <div className="dot absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#00ffd5] rounded-full transition-all duration-[2500ms] ease-in-out"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease forwards;
        }
      `}</style>
    </section>
  );
}
