import React from "react";
import grainImages from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
const Card = ({
  className,
  children,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?:React.CSSProperties;
}) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0  z-0 after:-z-10 overflow-hidden after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20   after:pointer-events-none p-6",
        className
      )}
      style={style}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImages.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};

export default Card;
