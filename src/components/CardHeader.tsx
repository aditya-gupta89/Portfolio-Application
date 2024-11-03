import React from "react";
import StartIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";
import DownloadIcon from "../assets/icons/download.svg";
const CardHeader = ({
  title,
  description,
  className,
  isResume = false,
}: {
  title: string;
  description: string;
  className?: string;
  isResume?: boolean;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-4">
        <StartIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-lg  lg:text-3xl">{title}</h3>
        {isResume && (
          <a
            onClick={() => navigator.vibrate(200)}
            type="button"
            href="https://drive.google.com/file/d/1v7kj0aW3xWeIiYelcl3mkMk6aYqWJJpS/view?usp=sharing"
            target="_blank"
            className="text-white items-center cursor-pointer flex gap-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-[12px] px-1.5 py-1.5 lg:px-2 lg:py-2 text-center "
          >
            {" "}
            Download CV
            <DownloadIcon className="w-[20px] h-[20px] text-cyan-300" />
          </a>
        )}
      </div>
      <p className="text-sm text-white/60 mt-2">{description}</p>
    </div>
  );
};

export default CardHeader;
