"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header, Main, AI_SOCIETY_ORGANIZATIONS, Footer, useCarousel } from "@/components/home";
import { Background } from "@/components/ui/background";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentColor = AI_SOCIETY_ORGANIZATIONS[currentIndex].color;
  
  const { handleDragEnd } = useCarousel(
    currentIndex,
    setCurrentIndex,
    AI_SOCIETY_ORGANIZATIONS.length
  );

  return (
    <div className="relative min-h-dvh flex flex-col overflow-hidden">
      <Background color={currentColor} />
      
      <motion.div 
        className="relative z-10 flex flex-col min-h-dvh"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0}
        dragMomentum={false}
        dragDirectionLock
        onDragEnd={handleDragEnd}
        style={{ touchAction: 'pan-y' }}
      >
        <BackgroundRippleEffect />
        <Header />
        <Main currentIndex={currentIndex} onIndexChange={setCurrentIndex} />
        <Footer />
      </motion.div>
    </div>
  );
}