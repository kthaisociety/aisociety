"use client";

import { useState } from "react";
import { Header } from "@/components/home/header";
import { Main, AI_SOCIETY_ORGANIZATIONS } from "@/components/home/main";
import { Footer } from "@/components/home/footer";
import { Background } from "@/components/ui/background";

export function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentColor = AI_SOCIETY_ORGANIZATIONS[currentIndex].color;

  return (
    <div className="relative min-h-[100dvh] flex flex-col">
      <Background color={currentColor} />
      <div className="relative z-10 flex flex-col min-h-[100dvh]">
        <Header />
        <Main currentIndex={currentIndex} onIndexChange={setCurrentIndex} />
        <Footer />
      </div>
    </div>
  );
}