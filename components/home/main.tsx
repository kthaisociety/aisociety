"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ConnectSection } from "./connect/connect-section";
import { useCarousel } from "./use-carousel";

// Motion blur animation variants
const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

const AI_SOCIETY_ORGANIZATIONS = [
  { 
    id: "kthais",
    shortName: "KTHAIS",
    university: "KTH",
    name: "KTH AI Society",
    location: "Stockholm, Sweden",
    url: "https://kthais.com",
    logo: "/kthaisociety_logo.jpeg",
    color: "#1751A6",
    website: "https://kthais.com",
    linkedin: "https://www.linkedin.com/company/kthaisociety/",
    instagram: "https://www.instagram.com/kthaisociety/",
  
  },
  {
    id: "liuais",
    shortName: "LIUAIS",
    university: "Linköping University",
    name: "LIU AI Society",
    location: "Linköping, Sweden",
    url: "https://liuais.com",
    logo: "/liu-logo.jpg",
    color: "#60a5fa",
    website: "https://liuais.com",
    linkedin: "https://www.linkedin.com/company/liu-ai-society/",
    instagram: "https://www.instagram.com/liuai/",
  },
  {
    id: "uuais",
    shortName: "UUAIS",
    university: "Uppsala University",
    name: "UU AI Society",
    location: "Uppsala, Sweden",
    url: "https://www.uuais.com",
    logo: "/uu_ai_society_logo.jpeg",
    color: "#dc2626",
    website: "https://www.uuais.com",
    linkedin: "https://www.linkedin.com/company/uu-ai-society/",
    instagram: "https://www.instagram.com/uuais/",
  },
];

export { AI_SOCIETY_ORGANIZATIONS };

export function Main({ currentIndex, onIndexChange }: { currentIndex: number; onIndexChange: (index: number) => void }) {
  const { handleDotClick } = useCarousel(
    currentIndex,
    onIndexChange,
    AI_SOCIETY_ORGANIZATIONS.length
  );

  const currentOrg = AI_SOCIETY_ORGANIZATIONS[currentIndex];

  return (
    <motion.div 
      className="flex flex-col items-center justify-center flex-1 px-4 py-4 sm:py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={VARIANTS_CONTAINER}
    >
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentOrg.id}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={VARIANTS_CONTAINER}
            className="flex flex-col items-center gap-3 sm:gap-4"
          >
            <motion.div 
              className="flex items-center gap-4 sm:gap-4 md:gap-8"
              variants={VARIANTS_SECTION}
            >
              <motion.div 
                className="flex flex-col items-center justify-center gap-2 sm:gap-3"
                variants={VARIANTS_SECTION}
              >   
                <Image 
                  src={currentOrg.logo} 
                  alt={currentOrg.name} 
                  width={150} 
                  height={150}
                  className='rounded w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-[150px] lg:h-[150px]'
                />
               
              </motion.div>
              <motion.div 
                className="h-16 sm:h-24 md:h-32 lg:h-32 w-px bg-gray-900 shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                variants={VARIANTS_SECTION}
              />
              <motion.h1 
                className="font-times text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 [text-shadow:0_0_20px_rgb(255_255_255/90%),0_0_10px_rgb(255_255_255/80%)]"
                variants={VARIANTS_SECTION}
              >
                {currentOrg.name}
              </motion.h1>
            </motion.div>
            <motion.div
              variants={VARIANTS_SECTION}
            >
              <ConnectSection organization={currentOrg} />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-3 pt-4 pb-2">
        {AI_SOCIETY_ORGANIZATIONS.map((org, index) => (
          <button
            key={org.id}
            onClick={() => handleDotClick(index)}
            className="group relative focus:outline-none focus:ring-2 focus:ring-gray-900 rounded-full"
            aria-label={`Go to ${org.name}`}
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gray-900 shadow-[0_0_8px_rgba(255,255,255,0.8)] scale-110"
                  : "bg-gray-900/40 hover:bg-gray-900/70 shadow-[0_0_4px_rgba(255,255,255,0.5)]"
              }`}
            />
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 w-3 h-3 rounded-full border-2 border-gray-900 shadow-[0_0_6px_rgba(255,255,255,0.6)]"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 1.8, opacity: 0 }}
                transition={{
                  duration: 5,
                  ease: "linear",
                  repeat: 0,
                }}
                key={`progress-${currentIndex}`}
              />
            )}
          </button>
        ))}
      </div>
    </motion.div>
  );
}