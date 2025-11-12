import Image from "next/image";
import { TextScramble } from "@/components/ui/text-scramble";

export function Header() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 py-3 sm:py-4 shrink-0">
      <div className="flex items-center gap-1 sm:gap-2">
      <Image src="/black-logo.svg" alt="AI Society" width={30} height={30} className="w-6 h-6 sm:w-[30px] sm:h-[30px] [filter:drop-shadow(0_0_6px_rgba(255,255,255,0.8))]" />
      <TextScramble as="span" className="text-sm sm:text-base lg:text-lg font-medium font-martian-mono text-gray-900 [text-shadow:0_0_12px_rgb(255_255_255/90%),0_0_6px_rgb(255_255_255/80%)]">{getCurrentYear().toString()}</TextScramble>
      <TextScramble as="span" className="text-sm sm:text-base lg:text-lg font-medium font-martian-mono text-gray-900 [text-shadow:0_0_12px_rgb(255_255_255/90%),0_0_6px_rgb(255_255_255/80%)]">(AI Society)</TextScramble>
      </div>
      <TextScramble as="span" className="text-sm sm:text-base lg:text-lg font-medium font-martian-mono text-gray-900 [text-shadow:0_0_12px_rgb(255_255_255/90%),0_0_6px_rgb(255_255_255/80%)]">[Home Page]</TextScramble>
    </div>
  );
}