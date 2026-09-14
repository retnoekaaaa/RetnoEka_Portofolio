"use client";

import React from "react";
import confetti from "canvas-confetti";
import { Terminal } from "lucide-react";

interface WindowHeaderProps {
  currentSection?: string;
}

export const WindowHeader: React.FC<WindowHeaderProps> = ({ currentSection = "home" }) => {
  const handleConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.1 },
      colors: ["#fef08a", "#bae6fd", "#fbcfe8", "#bbf7d0", "#171717"]
    });
  };

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "WORKS", href: "#works" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fbf9f4] border-b-2 border-[#171717] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between gap-2">
        {/* Left: macOS Traffic Lights & System Identity */}
        <div className="flex items-center gap-3">
          <div className="mac-traffic-lights" title="Mac OS Window Controls">
            <button
              onClick={handleConfetti}
              aria-label="Close / Confetti"
              className="traffic-light traffic-red hover:opacity-80 transition-opacity"
              title="Click for surprise!"
            />
            <span className="traffic-light traffic-yellow" title="Minimize" />
            <span className="traffic-light traffic-green" title="Maximize" />
          </div>

          <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-neutral-400 text-xs font-mono font-bold text-neutral-700">
            <Terminal size={13} className="text-neutral-800" />
            <span>eka.os / v2.4</span>
          </div>
        </div>

        {/* Navigation Pills (styled like the reference) */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-1 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {navItems.map((item) => {
            const isActive = currentSection.toLowerCase() === item.label.toLowerCase();
            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-[11px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-full border border-[#171717] transition-all flex items-center gap-1 whitespace-nowrap ${
                  isActive
                    ? "bg-[#171717] text-white shadow-[2px_2px_0px_rgba(0,0,0,0.3)]"
                    : "bg-white/80 hover:bg-[#fef08a] text-neutral-900 shadow-[1px_1px_0px_#171717]"
                }`}
              >
                <span className="text-amber-500 font-bold">*</span>
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
