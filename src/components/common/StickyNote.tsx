import React from "react";
import { TapeSticker } from "./TapeSticker";

interface StickyNoteProps {
  title?: string;
  children: React.ReactNode;
  color?: "yellow" | "blue" | "pink" | "green" | "purple" | "orange";
  rotate?: number;
  tapeColor?: "yellow" | "blue" | "pink" | "green";
  showTape?: boolean;
  className?: string;
}

export const StickyNote: React.FC<StickyNoteProps> = ({
  title,
  children,
  color = "yellow",
  rotate = 0,
  tapeColor = "yellow",
  showTape = true,
  className = "",
}) => {
  const colorClasses = {
    yellow: "bg-[#fef08a] text-neutral-900 border-[#171717]",
    blue: "bg-[#bae6fd] text-neutral-900 border-[#171717]",
    pink: "bg-[#fbcfe8] text-neutral-900 border-[#171717]",
    green: "bg-[#bbf7d0] text-neutral-900 border-[#171717]",
    purple: "bg-[#ddd6fe] text-neutral-900 border-[#171717]",
    orange: "bg-[#fed7aa] text-neutral-900 border-[#171717]",
  };

  const rotationStyle = {
    transform: `rotate(${rotate}deg)`,
  };

  return (
    <div
      style={rotationStyle}
      className={`relative border-2 p-5 shadow-[4px_4px_0px_#171717] transition-all hover:scale-[1.02] hover:shadow-[6px_6px_0px_#171717] ${colorClasses[color]} ${className}`}
    >
      {showTape && <TapeSticker position="top-center" color={tapeColor} />}
      
      {title && (
        <div className="font-handwriting text-xl sm:text-2xl font-bold tracking-wide mb-2 text-neutral-800 border-b border-neutral-900/20 pb-1">
          {title}
        </div>
      )}

      <div className="font-sans text-sm leading-relaxed">{children}</div>
    </div>
  );
};
