// Motion blur animation variants
export const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export const AI_SOCIETY_ORGANIZATIONS = [
  { 
    id: "kthais",
    shortName: "KTHAIS",
    university: "KTH",
    name: "KTH AI Society",
    location: "Stockholm, Sweden",
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
    logo: "/liu-logo.jpg",
    color: "#60a5fa",
    website: "https://liuais.com",
    linkedin: "https://www.linkedin.com/company/liu-ai-society/",
    instagram: "https://www.instagram.com/liuaisociety",
  },
  {
    id: "uuais",
    shortName: "UUAIS",
    university: "Uppsala University",
    name: "UU AI Society",
    location: "Uppsala, Sweden",
 
    logo: "/uu_ai_society_logo.jpeg",
    color: "#dc2626",
    website: "https://www.uuais.com",
    linkedin: "https://www.linkedin.com/company/uu-ai-society/",
    instagram: "https://www.instagram.com/uuaisociety",
  },
  {
    id: "sasse",
    shortName: "SASS",
    university: "Stockholm School of Economics (SSE)",
    name: "SASSE AI Society",
    location: "Stockholm, Sweden",
    url: "https://sasse.com",
    logo: "/sasse-logo.jpeg",
    color: "#000000",
    website: undefined,
    linkedin: "https://www.linkedin.com/company/sasse-ai-society",
    instagram: undefined,
  }
];
