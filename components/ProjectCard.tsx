// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// interface Props {
//   image: string;
//   title: string;
//   text: string;
// }

// const ProjectCard = ({ image, title, text }: Props) => {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   function handleFlip() {
//     if (!isAnimating) {
//       setIsFlipped(!isFlipped);
//       setIsAnimating(true);
//     }
//   }

//   return (
//     <div
//       onClick={handleFlip}
//       className="w-[400px] h-[200px] sm:w-[500px] sm:h-[230px] rounded-md cursor-pointer relative overflow-hidden shadow-lg"
//     >
//       <motion.div
//         className={`flip-card-inner w-full h-full relative`}
//         initial={false}
//         animate={{ rotateY: isFlipped ? 180 : 0 }}
//         transition={{ duration: 0.6 }}
//         onAnimationComplete={() => setIsAnimating(false)}
//       >
//         {/* Front Side */}
//         <div
//           style={{ backgroundImage: `url(${image})` }}
//           className="flip-card-front w-full h-full bg-cover bg-center text-white rounded-lg p-4 flex items-center justify-center"
//         >
//           <div className="absolute inset-0 w-full h-full bg-black opacity-0 hover:opacity-40 transition-opacity duration-300" />
//           <div className="absolute text-white text-lg font-bold z-10">
//             Learn More &gt;
//           </div>
//         </div>

//         {/* Back Side */}
//         <div className="absolute w-full h-full flip-card-back bg-cover bg-center rounded-lg p-4 text-white flex flex-col justify-between">
//           <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-0 rounded-lg" />
//           <div className="relative z-10 text-center">
//             <h1 className="text-2xl font-semibold">{title}</h1>
//             <p className="text-gray-50 text-sm mt-2">{text}</p>
//           </div>
//           <div className="relative z-10 flex justify-center mt-4">
//             <a
//               href=""
//               target="_blank"
//               rel="noopener noreferrer"
//               className="button-primary py-2 px-6 text-center bg-transparent border border-white text-white text-lg hover:bg-white hover:text-black rounded-lg transition-all"
//             >
//               To Visit
//             </a>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ProjectCard;













"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  text: string;
  link: string;
}

const ProjectCard = ({ image, title, text, link }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      onClick={handleFlip}
      className="w-[400px] h-[200px] sm:w-[500px] sm:h-[230px] rounded-md cursor-pointer relative overflow-hidden shadow-lg"
    >
      <motion.div
        className={`flip-card-inner w-full h-full relative`}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* Front Side */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="flip-card-front w-full h-full bg-cover bg-center text-white rounded-lg p-4 flex items-center justify-center"
        >
          <div className="absolute inset-0 w-full h-full bg-black opacity-0 hover:opacity-40 transition-opacity duration-300" />
          <div className="absolute text-white text-lg font-bold z-10">
            Learn More &gt;
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full flip-card-back bg-cover bg-center rounded-lg p-4 text-white flex flex-col justify-between">
          <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-0 rounded-lg" />
          <div className="relative z-10 text-center">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-gray-50 text-sm mt-2">{text}</p>
          </div>
          <div className="relative z-10 flex justify-center mt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary py-2 px-6 text-center bg-transparent border border-white text-white text-lg hover:bg-white hover:text-black rounded-lg transition-all"
            >
              To Visit
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
