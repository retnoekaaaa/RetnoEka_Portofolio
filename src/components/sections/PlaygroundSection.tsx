"use client";

import React, { useState } from "react";
import { portfolioData } from "../../data/portfolioData";
import { TapeSticker } from "../common/TapeSticker";
import { StickyNote } from "../common/StickyNote";
import { Sparkles, Terminal, Code, Cpu, ExternalLink, Heart } from "lucide-react";
import confetti from "canvas-confetti";

export const PlaygroundSection: React.FC = () => {
  const { experiments } = portfolioData;
  const [typedMessage, setTypedMessage] = useState<string>("hello");

  const easterEggMessages = [
    "hello",
    "sudo make me a coffee",
    "git commit -m 'magic'",
    "it works on my machine",
    "404: bug not found",
    "eka.os running smooth"
  ];

  const cycleMessage = () => {
    const nextIdx = (easterEggMessages.indexOf(typedMessage) + 1) % easterEggMessages.length;
    setTypedMessage(easterEggMessages[nextIdx]);
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="playground" className="relative py-16 px-4 sm:px-6 bg-[#faf8f3] border-y-2 border-[#171717]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-[#171717] pb-4 mb-10 gap-3">
          <div>
            <span className="font-handwriting text-2xl text-amber-700 font-bold block -mb-1">
              inspired //
            </span>
            <h2 className="font-pixel text-4xl sm:text-6xl text-neutral-900 tracking-tight">
              JUST FOR FUN
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="retro-badge bg-[#fef08a] text-neutral-900 font-mono">
              LAB &amp; EXPERIMENTS
            </span>
            <span className="retro-badge bg-[#fbcfe8] text-neutral-900 font-mono">
              RETRO TECH
            </span>
          </div>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Classic Macintosh "hello" Computer Showcase */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative p-2 sm:p-4 max-w-full">
              {/* Floating Scrap Stickers around the computer (contained within bounds) */}
              <div className="absolute top-0 left-1 bg-[#bae6fd] border border-[#171717] px-2 py-0.5 font-handwriting text-xs sm:text-sm font-bold shadow-[2px_2px_0px_#171717] -rotate-6 z-20 pointer-events-none">
                hello world! 👾
              </div>
              <div className="absolute bottom-2 left-1 bg-[#fbcfe8] border border-[#171717] px-2 py-0.5 font-mono text-[9px] sm:text-[10px] font-bold shadow-[2px_2px_0px_#171717] rotate-3 z-20 pointer-events-none">
                100% caffeine
              </div>
              <div className="absolute top-2 right-1 bg-[#bbf7d0] border border-[#171717] px-2 py-0.5 font-handwriting text-xs sm:text-sm font-bold shadow-[2px_2px_0px_#171717] rotate-6 z-20 pointer-events-none">
                next fav 💡
              </div>

              {/* Retro Macintosh 128k Chassis as an accessible Button */}
              <button
                type="button"
                onClick={cycleMessage}
                aria-label="Interactive Retro Macintosh. Click or tap to change message."
                title="Tap or click computer to change message!"
                className="cursor-pointer brutal-btn relative bg-[#dedad0] border-3 border-[#171717] rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_#171717] sm:shadow-[8px_8px_0px_#171717] w-[250px] sm:w-[300px] transition-all active:scale-95 active:shadow-[2px_2px_0px_#171717] text-left block select-none"
              >
                <TapeSticker position="top-center" color="yellow" />

                {/* CRT Screen Bezel */}
                <div className="bg-[#5c5c56] border-2 border-[#171717] rounded-xl p-3 shadow-inner">
                  {/* CRT Screen Display */}
                  <div className="bg-[#1f2937] border border-[#171717] rounded-lg h-32 sm:h-36 flex flex-col items-center justify-center p-3 relative overflow-hidden">
                    {/* Scanlines Effect */}
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />
                    
                    {/* Retro Cursive hello */}
                    <div className="font-handwriting text-3xl sm:text-5xl text-neutral-100 font-bold tracking-wider select-none text-center animate-pulse">
                      {typedMessage}
                    </div>

                    <div className="absolute bottom-1.5 text-[9px] sm:text-[10px] font-mono text-emerald-400 font-bold">
                      [👉 TAP TO CYCLE]
                    </div>
                  </div>
                </div>

                {/* Floppy Disk Drive & Rainbow Badge */}
                <div className="mt-4 sm:mt-5 flex items-center justify-between px-2">
                  <div className="w-20 sm:w-24 h-2 bg-[#171717] rounded-full border border-neutral-600" />
                  <div className="flex items-center gap-1">
                    <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-500 border border-black/40" />
                    <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-yellow-400 border border-black/40" />
                    <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-blue-500 border border-black/40" />
                  </div>
                </div>
              </button>
            </div>

            {/* Explicit Mobile-Friendly Interactive Button */}
            <button
              type="button"
              onClick={cycleMessage}
              className="brutal-btn mt-3 bg-[#fef08a] hover:bg-yellow-300 text-neutral-950 font-mono text-xs font-bold px-4 py-2 rounded-full border-2 border-[#171717] shadow-[2px_2px_0px_#171717] active:translate-x-0.5 active:translate-y-0.5 inline-flex items-center gap-1.5 cursor-pointer select-none"
            >
              <Sparkles size={14} className="text-amber-600" />
              <span>TAP TO CYCLE MESSAGE</span>
            </button>

            <div className="mt-2 font-mono text-[11px] font-bold text-neutral-500 text-center">
              ▲ 1984 Macintosh 128k Homage // Interactive CRT
            </div>
          </div>

          {/* Right: Experiments List as Scrap Cards */}
          <div className="lg:col-span-6 space-y-4">
            <div className="font-handwriting text-xl font-bold text-neutral-700">
              tiny scripts &amp; visual hacks //
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {experiments.map((exp) => (
                <button
                  type="button"
                  key={exp.id}
                  onClick={() => {
                    confetti({ particleCount: 20, spread: 40 });
                  }}
                  className="cursor-pointer text-left relative bg-white border-2 border-[#171717] p-4 rounded shadow-[3px_3px_0px_#171717] hover:translate-x-[1px] hover:translate-y-[1px] active:scale-98 transition-all group select-none block w-full"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      style={{ backgroundColor: exp.badgeColor || "#fef08a" }}
                      className="font-mono text-[10px] font-bold px-2 py-0.5 border border-[#171717] rounded shadow-[1px_1px_0px_#171717]"
                    >
                      {exp.tag}
                    </span>
                    <Sparkles size={13} className="text-amber-500 group-hover:rotate-45 transition-transform" />
                  </div>

                  <h4 className="font-pixel text-sm font-bold text-neutral-900 mb-1">
                    {exp.title}
                  </h4>

                  <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                    {exp.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Note on Creative Coding */}
            <div className="bg-[#fbcfe8] border-2 border-[#171717] p-3.5 rounded shadow-[3px_3px_0px_#171717] flex items-center gap-3">
              <Heart size={20} className="text-pink-700 shrink-0" />
              <p className="font-sans text-xs text-neutral-900 font-medium">
                Building side projects keeps engineering playful. Always tinkering with shaders, micro-frameworks, and canvas math.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
