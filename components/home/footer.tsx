import { TextScramble } from "@/components/ui/text-scramble";

export function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  const handleEmailClick = () => {
    const email = "contact@kthais.com";
    const subject = "AI Society";
    const body = "I have a question about the AI Society";
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 w-full max-w-7xl mx-auto px-4 py-2 sm:py-3 shrink-0 z-10">
      <TextScramble as="span" className="text-xs sm:text-sm font-medium font-martian-mono text-gray-900 [text-shadow:0_0_12px_rgb(255_255_255/90%),0_0_6px_rgb(255_255_255/80%)]">
        {`© ${getCurrentYear()} (AIS)`}
      </TextScramble>
      <TextScramble as="span" className="text-xs sm:text-sm font-medium font-martian-mono text-gray-900 [text-shadow:0_0_12px_rgb(255_255_255/90%),0_0_6px_rgb(255_255_255/80%)] hidden sm:inline">|</TextScramble>
      <span onClick={handleEmailClick} className="cursor-pointer">
        <TextScramble as="span" className="text-xs sm:text-sm font-medium font-martian-mono text-gray-900 [text-shadow:0_0_12px_rgb(255_255_255/90%),0_0_6px_rgb(255_255_255/80%)]">
          contact@kthais.com
        </TextScramble>
      </span>
    </div>
  );
}