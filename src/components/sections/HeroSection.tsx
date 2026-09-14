"use client";

import React from "react";
import { portfolioData } from "../../data/portfolioData";
import { TapeSticker } from "../common/TapeSticker";
import { ArrowDown, Code2, Send } from "lucide-react";

export const HeroSection: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="home" className="relative pt-12 pb-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <span className="retro-badge bg-[#bbf7d0] text-neutral-900 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
            {personal.statusBadge}
          </span>

          <span className="font-handwriting text-neutral-600 text-lg sm:text-xl font-bold">
            by {personal.fullName} // dev portfolio
          </span>

          <span className="retro-badge bg-[#fef08a] text-neutral-900 font-mono">
            STAGE: 2026.1
          </span>
        </div>

        {/* Big Pixel Display Name */}
        <div className="relative inline-block my-2">
          {/* Decorative side stickers */}
          <div className="hidden sm:block absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-[#171717] bg-[#fbcfe8] flex items-center justify-center shadow-[2px_2px_0px_#171717] soft-float">
            <span className="font-pixel text-xs font-bold text-neutral-900">&gt;_</span>
          </div>

          <h1 className="font-pixel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-neutral-950 tracking-tight select-none drop-shadow-sm px-2">
            {personal.nickname}
          </h1>

          <div className="hidden sm:block absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-[#171717] bg-[#bae6fd] flex items-center justify-center shadow-[2px_2px_0px_#171717] soft-float">
            <Code2 size={22} className="text-neutral-900" />
          </div>
        </div>

        {/* Role & Core Headline */}
        <div className="mt-4 max-w-2xl mx-auto space-y-4">
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-600 bg-white/70 inline-block px-3 py-1 border border-neutral-300 rounded shadow-xs">
            {personal.role}
          </p>

          <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-neutral-900 leading-tight">
            {personal.tagline}
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-medium max-w-xl mx-auto leading-relaxed">
            {personal.subTagline}
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href="#contact"
            className="brutal-btn inline-flex items-center gap-2 bg-[#171717] text-white px-6 py-3 font-pixel text-sm rounded shadow-[4px_4px_0px_#fef08a]"
          >
            <Send size={15} className="text-yellow-400" />
            <span>LET&apos;S TALK</span>
          </a>

          <a
            href="#works"
            className="brutal-btn inline-flex items-center gap-2 bg-[#fef08a] text-neutral-950 px-6 py-3 font-pixel text-sm rounded shadow-[4px_4px_0px_#171717]"
          >
            <span>VIEW PROJECTS</span>
            <ArrowDown size={15} />
          </a>
        </div>

        {/* Location & Availability footnote */}
        <div className="mt-8 font-handwriting text-lg text-neutral-600">
          📍 based in {personal.location} — {personal.availability}
        </div>
      </div>
    </section>
  );
};
