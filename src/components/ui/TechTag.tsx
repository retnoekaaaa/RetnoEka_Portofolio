import React from "react";

interface TechTagProps {
  name: string;
  color?: "yellow" | "blue" | "pink" | "green" | "purple" | "orange";
  size?: "sm" | "md";
  className?: string;
}

export const TechTag: React.FC<TechTagProps> = ({
  name,
  color = "yellow",
  size = "md",
  className = "",
}) => {
  const colorClasses = {
    yellow: "bg-[#fef08a] text-neutral-900",
    blue: "bg-[#bae6fd] text-neutral-900",
    pink: "bg-[#fbcfe8] text-neutral-900",
    green: "bg-[#bbf7d0] text-neutral-900",
    purple: "bg-[#ddd6fe] text-neutral-900",
    orange: "bg-[#fed7aa] text-neutral-900",
  };

  const sizeClasses = {
    sm: "text-[11px] px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
  };

  return (
    <span
      className={`inline-flex items-center font-mono font-bold border-1.5 border-[#171717] rounded shadow-[1.5px_1.5px_0px_#171717] hover:translate-x-[0.5px] hover:translate-y-[0.5px] transition-all select-none ${colorClasses[color]} ${sizeClasses[size]} ${className}`}
    >
      #{name}
    </span>
  );
};
