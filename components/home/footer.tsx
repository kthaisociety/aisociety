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
    <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
      <TextScramble as="span" className="text-xs sm:text-sm font-medium font-martian-mono text-gray-900 [text-shadow:0_0_12px_rgb(255_255_255/90%),0_0_6px_rgb(255_255_255/80%)]">
        {`© ${getCurrentYear()} (AI Society)`}
      </TextScramble>
      <TextScramble as="span" className="text-xs sm:text-sm font-medium font-martian-mono text-gray-900 [text-shadow:0_0_12px_rgb(255_255_255/90%),0_0_6px_rgb(255_255_255/80%)] hidden sm:inline">|</TextScramble>
      <TextScramble as="span" className="text-xs sm:text-sm font-medium font-martian-mono text-gray-900 [text-shadow:0_0_12px_rgb(255_255_255/90%),0_0_6px_rgb(255_255_255/80%)] cursor-pointer" onClick={handleEmailClick}>
        contact@kthais.com
      </TextScramble>
    </div>
  );
}