import React from "react";
import Image from "next/image";
import { TapeSticker } from "./TapeSticker";

interface PolaroidFrameProps {
  src: string;
  alt: string;
  caption?: string;
  rotate?: number;
  tapePosition?: "top-center" | "top-left" | "top-right";
  tapeColor?: "yellow" | "blue" | "pink" | "green";
  width?: number;
  height?: number;
  className?: string;
}

export const PolaroidFrame: React.FC<PolaroidFrameProps> = ({
  src,
  alt,
  caption,
  rotate = -3,
  tapePosition = "top-center",
  tapeColor = "yellow",
  width = 300,
  height = 360,
  className = "",
}) => {
  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`relative inline-block bg-white border-2 border-[#171717] p-3 pb-6 shadow-[5px_5px_0px_#171717] hover:rotate-0 hover:scale-105 transition-all duration-200 z-10 ${className}`}
    >
      <TapeSticker position={tapePosition} color={tapeColor} />

      <div className="relative overflow-hidden border border-neutral-300 bg-neutral-100 aspect-[4/5] w-full min-w-[200px] max-w-[280px]">
        {/* Fallback to standard img or Next Image */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover grayscale-[15%] contrast-105 hover:grayscale-0 transition-all"
        />
      </div>

      {caption && (
        <div className="text-center mt-3 font-handwriting text-lg text-neutral-800 font-bold tracking-wide">
          {caption}
        </div>
      )}
    </div>
  );
};
