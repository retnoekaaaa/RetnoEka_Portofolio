import React from "react";

interface TapeStickerProps {
  position?: "top-left" | "top-right" | "top-center" | "custom";
  color?: "yellow" | "blue" | "pink" | "green";
  className?: string;
  angle?: number;
}

export const TapeSticker: React.FC<TapeStickerProps> = ({
  position = "top-center",
  color = "yellow",
  className = "",
  angle,
}) => {
  const colorMap = {
    yellow: "bg-yellow-200/80 border-amber-600/30",
    blue: "bg-sky-200/80 border-sky-600/30",
    pink: "bg-pink-200/80 border-pink-600/30",
    green: "bg-emerald-200/80 border-emerald-600/30",
  };

  const positionClasses = {
    "top-center": "-top-3 left-1/2 -translate-x-1/2 -rotate-1 w-24",
    "top-left": "-top-3 -left-3 -rotate-12 w-20",
    "top-right": "-top-3 -right-3 rotate-12 w-20",
    custom: "",
  };

  const style = angle !== undefined ? { transform: `rotate(${angle}deg)` } : {};

  return (
    <div
      style={style}
      aria-hidden="true"
      className={`absolute h-6 z-20 pointer-events-none shadow-sm backdrop-blur-[1px] border-l-2 border-r-2 border-dashed ${colorMap[color]} ${positionClasses[position]} ${className}`}
    />
  );
};
