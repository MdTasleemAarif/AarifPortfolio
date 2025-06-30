// 'use client';

// import TextModel from './TextModel';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// export default function HeroTmf() {
//   return (
//     <section className="relative w-full min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-10 bg-gradient-to-bl from-white via-slate-100 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-300">
//       {/* 3D Text Section */}
//       <div className="w-full md:w-2/3 h-[420px] sm:h-[500px] md:h-[600px]">
//         <TextModel />
//       </div>

//       {/* Right Side - Image & Description */}
//       <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col items-center justify-center text-center">
//         {/* 3D Dog Image */}
//         <div className="w-48 h-48 relative mb-4">
//           <Image
//             src="/assets/myphoto.png" // Make sure this image is available in public/assets
//             alt="3D Dog Character"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>

//         {/* Description */}
//         <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 font-medium max-w-xl leading-relaxed">
//           I'm a UI/UX Designer and Web Developer crafting <br />
//           beautiful, user-centered digital experiences.
//         </p>

//         {/* Role Buttons */}
//         <div className="mt-6 flex flex-wrap gap-4 justify-center">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-indigo-600 text-white px-5 py-2 rounded-full shadow-md flex items-center gap-2"
//           >
//             <span className="text-lg">💻</span> Developer
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-blue-500 text-white px-5 py-2 rounded-full shadow-md flex items-center gap-2"
//           >
//             <span className="text-lg">✏️</span> Designer
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-cyan-500 text-white px-5 py-2 rounded-full shadow-md flex items-center gap-2"
//           >
//             <span className="text-lg">📣</span> Digital Marketer
//           </motion.button>
//         </div>
//       </div>
      
//     </section>
    
//   );
// }








// //Darkmode

// 'use client';

// import TextModel from './TextModel';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// export default function HeroTmf() {
//   return (
//     <section
//       className="relative w-full min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-10
//       bg-white dark:bg-[#010A1F] transition-all duration-300"
//     >
//       {/* 3D Text Section */}
//       <div className="w-full md:w-2/3 h-[420px] sm:h-[500px] md:h-[600px]">
//         <TextModel />
//       </div>

//       {/* Right Side - Image & Description */}
//       <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col items-center justify-center text-center">
//         {/* Image */}
//         <div className="w-48 h-48 relative mb-4">
//           <Image
//             src="/assets/myphoto.png"
//             alt="UI/UX Developer"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="text-lg md:text-xl text-slate-800 dark:text-slate-100 font-medium max-w-xl leading-relaxed"
//         >
//           I'm a UI/UX Designer and Web Developer crafting <br />
//           beautiful, user-centered digital experiences.
//         </motion.p>

//         {/* Role Buttons */}
//         <div className="mt-6 flex flex-wrap gap-4 justify-center">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-indigo-600 dark:bg-indigo-500 text-white px-5 py-2 rounded-full shadow-md flex items-center gap-2"
//           >
//             <span className="text-lg">💻</span> Developer
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-blue-500 dark:bg-blue-400 text-white px-5 py-2 rounded-full shadow-md flex items-center gap-2"
//           >
//             <span className="text-lg">✏️</span> Designer
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-cyan-500 dark:bg-cyan-400 text-white px-5 py-2 rounded-full shadow-md flex items-center gap-2"
//           >
//             <span className="text-lg">📣</span> Creative Thinker
//           </motion.button>
//         </div>
//       </div>
//     </section>
//   );
// }







// 'use client';

// import TextModel from './TextModel';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// export default function HeroTmf() {
//   return (
//     <section
//       className="relative w-full min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-10 bg-white dark:bg-[#010A1F] transition-all duration-300"
//     >
//       {/* Left Side - 3D + Text */}
//       <div className="w-full md:w-2/3 flex flex-col gap-4 justify-center items-center md:items-start text-center md:text-left">
//         {/* Greeting Text */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
//         >
//           Hi! I'm Aarif
//         </motion.h1>
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="text-2xl sm:text-3xl font-semibold text-indigo-600 dark:text-cyan-300"
//         >
//           UI/UX Developer
//         </motion.h2>

//         {/* 3D Canvas */}
//         <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] mt-4">
//           <TextModel />
//         </div>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="text-lg md:text-xl text-slate-700 dark:text-slate-200 font-medium max-w-xl leading-relaxed mt-6"
//         >
//           I'm a UI/UX Designer and Web Developer crafting <br />
//           beautiful, user-centered digital experiences.
//         </motion.p>

//         {/* Unclickable Role Tags */}
//         <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
//           <div className="bg-indigo-600 dark:bg-indigo-500 text-white px-5 py-2 rounded-full shadow-md text-md font-medium pointer-events-none">
//             💻 Developer
//           </div>
//           <div className="bg-blue-500 dark:bg-blue-400 text-white px-5 py-2 rounded-full shadow-md text-md font-medium pointer-events-none">
//             ✏️ Designer
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Image or Model */}
//       <div className="w-full md:w-1/3 mt-12 md:mt-0 flex justify-center items-center">
//         <div className="w-64 h-64 relative">
//           <Image
//             src="/assets/myphoto.png"
//             alt="Aarif - UI/UX Developer"
//             fill
//             className="object-contain rounded-full shadow-[0_0_30px_rgba(0,255,255,0.2)]"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// }






// 'use client';

// import TextModel from './TextModel';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// export default function HeroTmf() {
//   return (
//     <section
//       className="relative w-full min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-10 bg-white dark:bg-[#010A1F] text-lightText dark:text-darkText font-[Outfit]"
//     >
//       {/* Left Side - 3D + Text */}
//       <div className="w-full md:w-2/3 flex flex-col gap-4 justify-center items-center md:items-start text-center md:text-left">
//         {/* Headline Text */}


//         {/* 3D Canvas */}
//         <div className="w-full h-[250px] sm:h-[320px] md:h-[400px] mt-4">
//           <TextModel />
//         </div>

//         {/* Animated Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.6 }}
//           className="text-xl sm:text-sm md:text-[1.3rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 animate-pulse mt-6"
//         >
//           I Enjoy building websites that look great and work smoothly on all devices. I pay close attention to design details and make sure everything is easy to use and visually clear. I turn ideas into clean, user-friendly web experiences that people love to interact with.

//         </motion.p>

//         {/* Role Tags - Stylish & Large */}
//         <div className="mt-6 flex flex-wrap gap-6 justify-center md:justify-start">
//           <motion.div
//             whileHover={{ scale: 1.08 }}
//             className="text-lg sm:text-xl font-bold bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-indigo-300 transition-all duration-300 pointer-events-none"
//           >
//             💻 Developer
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.08 }}
//             className="text-lg sm:text-xl font-bold bg-blue-500 dark:bg-blue-400 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-blue-300 transition-all duration-300 pointer-events-none"
//           >
//             ✏️ Designer
//           </motion.div>
//         </div>
//       </div>

//       {/* Right Side - Image or Avatar */}
//       <div className="w-full md:w-1/3 mt-12 md:mt-0 flex justify-center items-center">
//         <div className="w-64 h-64 relative rounded-full shadow-[0_0_40px_rgba(0,255,255,0.2)] overflow-hidden">
//           <Image
//             src="/assets/heroimage.png"
//             alt="Aarif - UI/UX Developer"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// }










// 'use client';

// import TextModel from './TextModel';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// export default function HeroTmf() {
//   return (
//     <section
//       className="relative w-full min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-10 bg-white dark:bg-[#010A1F] text-lightText dark:text-darkText font-[Outfit]"
//     >
//       {/* Left Side - 3D + Text */}
//       <div className="w-full md:w-2/3 flex flex-col gap-4 justify-center items-center md:items-start text-center md:text-left">
//         {/* 3D Canvas */}
//         <div className="w-full h-[200px] sm:h-[260px] md:h-[300px]">
//           <TextModel />
//         </div>

//         {/* Animated Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 animate-text-pulse leading-relaxed mt-6"
//         >
//           I create modern, responsive websites that blend clean design with smooth functionality. My goal is to deliver digital experiences that are beautiful, easy to use, and accessible to everyone.
//         </motion.p>

//         {/* Role Tags */}
//         <div className="mt-6 flex flex-wrap gap-6 justify-center md:justify-start">
//           <motion.div
//             whileHover={{ scale: 1.08 }}
//             className="text-xl font-bold bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-indigo-400 transition-all duration-300 pointer-events-none"
//           >
//             💻 Developer
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.08 }}
//             className="text-xl font-bold bg-blue-500 dark:bg-blue-400 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-blue-400 transition-all duration-300 pointer-events-none"
//           >
//             ✏️ Designer
//           </motion.div>
//         </div>
//       </div>

//       {/* Right Side - Normal Image */}
//       <div className="w-full md:w-1/3 mt-12 md:mt-0 flex justify-center items-center">
//         <div className="w-64 h-64 relative overflow-hidden">
//           <Image
//             src="/assets/heroimage.png"
//             alt="Aarif - UI/UX Developer"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// }








'use client';

import TextModel from './TextModel';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroTmf() {
  return (

  // <section className="w-full min-h-screen bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText font-[Outfit] pt-20 pb-8">
  <section className="w-full min-h-screen bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText font-[Outfit] pt-32 pb-8">

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10">
        {/* Left Side - 3D Text + Description */}
        <div className="w-full md:w-2/3 flex flex-col gap-6 justify-center items-center md:items-start text-center md:text-left">
          {/* 3D Canvas */}
          <div className="w-full flex justify-center">
            <div className="w-[380px] sm:w-[500px] md:w-[600px] h-[260px] sm:h-[300px] md:h-[340px]">
              <TextModel />
            </div>
          </div>

          {/* Animated Description */}
          {/* Animated Highlighted Paragraph */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  className="relative bg-gradient-to-r from-cyan-100/60 via-blue-100/60 to-purple-100/60 dark:from-cyan-900/40 dark:via-blue-900/40 dark:to-purple-900/40 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700 max-w-3xl"
>
  <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
    <span className="text-cyan-600 dark:text-cyan-300 font-bold">I build elegant, responsive websites</span> with 
    <span className="text-blue-600 dark:text-blue-300 font-bold"> modern UI/UX</span> that deliver 
    <span className="text-purple-600 dark:text-purple-300 font-bold"> smooth user experiences</span> across all devices.
  </p>
</motion.div>

{/* Role Tags */}
<div className="mt-1 flex flex-wrap gap-4 justify-center md:justify-start">
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="text-lg md:text-xl font-semibold bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-indigo-400/80 transition-all duration-300"
  >
    💻 Developer
  </motion.div>
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="text-lg md:text-xl font-semibold bg-blue-500 dark:bg-blue-400 text-white px-6 py-3 rounded-full shadow-md hover:shadow-blue-400/80 transition-all duration-300"
  >
    ✏️ Designer
  </motion.div>
</div>

        </div>

        {/* Right Side - Image */}
{/* Right Side - Image */}
{/* Right Side - Image */}
<div className="w-full md:w-1/3 mt-12 md:mt-0 flex justify-center items-center">
  <div className="w-[500px] h-[500px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] relative bg-transparent">
    <Image
      src="/assets/heroimage1.png"
      alt="Aarif - UI/UX Developer"
      fill
      className="object-contain bg-transparent"
      priority
    />
  </div>
</div>



      </div>
    </section>
  );
}
