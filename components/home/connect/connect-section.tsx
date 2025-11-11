"use client";

import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

interface ConnectSectionProps {
  organization: {
    name: string;
    location: string;
    university: string;
    color: string;
    website: string;
    linkedin: string;
    instagram: string;
  };
}

export function ConnectSection({ organization }: ConnectSectionProps) {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3 mt-2 sm:mt-4">
      <p className="text-xs sm:text-sm text-black/60 font-martian-mono max-w-md text-center ">
        Cultivating the next generation of AI leaders at <span style={{ color: organization.color }} className="font-bold">{organization.university}</span>
      </p>
      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
        <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
          <a
            href={organization.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex shrink-0 items-center gap-px rounded-full bg-zinc-100 px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs sm:text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50"
          >
            Website
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-2.5 w-2.5 sm:h-3 sm:w-3"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </Magnetic>
        <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
          <a
            href={organization.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex shrink-0 items-center gap-px rounded-full bg-zinc-100 px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs sm:text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50"
          >
            LinkedIn
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-2.5 w-2.5 sm:h-3 sm:w-3"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </Magnetic>
        <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
          <a
            href={organization.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex shrink-0 items-center gap-px rounded-full bg-zinc-100 px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs sm:text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50"
          >
            Instagram
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-2.5 w-2.5 sm:h-3 sm:w-3"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </Magnetic>
      </div>  
    </div>
  );
}
