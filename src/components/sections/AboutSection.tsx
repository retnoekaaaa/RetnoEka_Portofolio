"use client";

import React, { useState } from "react";
import { portfolioData } from "../../data/portfolioData";
import { StickyNote } from "../common/StickyNote";
import { TapeSticker } from "../common/TapeSticker";
import { TechTag } from "../ui/TechTag";
import { Terminal, Layers, Sparkles, Cpu, HardDrive } from "lucide-react";

export const AboutSection: React.FC = () => {
  const { personal, skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section id="about" className="relative py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-[#171717] pb-4 mb-10 gap-3">
          <div>
            <span className="font-handwriting text-2xl text-amber-700 font-bold block -mb-1">
              get to know me //
            </span>
            <h2 className="font-pixel text-4xl sm:text-6xl text-neutral-900 tracking-tight">
              ABOUT
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="retro-badge bg-[#fed7aa] text-neutral-900 font-mono">
              ENGINEER BIO
            </span>
            <span className="retro-badge bg-[#ddd6fe] text-neutral-900 font-mono">
              TECH STACK
            </span>
          </div>
        </div>

        {/* 2-Column Scrapbook Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Specifications & Approach Notes (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Sticky Note: Spesifikasi / Specifications */}
            <StickyNote
              title="spesifikasi //"
              color="blue"
              tapeColor="yellow"
              rotate={-1.5}
              className="w-full"
            >
              <div className="space-y-2.5 font-mono text-xs text-neutral-900">
                <div className="flex items-start gap-2 pb-2 border-b border-neutral-900/15">
                  <Terminal size={14} className="text-neutral-800 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold block text-neutral-700 uppercase tracking-tight text-[10px]">
                      Role:
                    </span>
                    <span className="font-bold text-sm">Fullstack / Frontend</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pb-2 border-b border-neutral-900/15">
                  <Cpu size={14} className="text-neutral-800 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold block text-neutral-700 uppercase tracking-tight text-[10px]">
                      Focus:
                    </span>
                    <span className="font-bold text-sm">Next.js, Laravel, Golang</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Layers size={14} className="text-neutral-800 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold block text-neutral-700 uppercase tracking-tight text-[10px]">
                      Editor:
                    </span>
                    <span className="font-bold text-sm">VS Code &amp; Figma</span>
                  </div>
                </div>
              </div>
            </StickyNote>

            {/* Sticky Note: Philosophy / Mindset Note */}
            <StickyNote
              title="craft &amp; mindset //"
              color="pink"
              tapeColor="blue"
              rotate={1.5}
              className="w-full"
            >
              <p className="font-handwriting text-lg font-bold text-neutral-800 leading-snug">
                &quot;Building from scratch means caring about both ends: clean systems under the hood, and genuine comfort for the user.&quot;
              </p>
              <div className="mt-3 font-mono text-[10px] font-bold text-neutral-600 uppercase tracking-wider">
                ▲ End-to-end Ownership
              </div>
            </StickyNote>
          </div>

          {/* Right Column: Bio Narrative & Skills Post-its (7 cols) */}
          <div className="md:col-span-7 space-y-6">
            {/* Main Narrative Card with Tape */}
            <div className="relative bg-white border-2 border-[#171717] p-6 sm:p-7 shadow-[5px_5px_0px_#171717] rounded">
              <TapeSticker position="top-left" color="yellow" />
              <TapeSticker position="top-right" color="blue" />

              <div className="font-handwriting text-2xl font-bold text-amber-700 mb-2">
                what&apos;s up! 👋
              </div>

              <div className="space-y-4 font-sans text-sm sm:text-base text-neutral-800 leading-relaxed">
                {personal.bioParagraphs.map((para, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Back story footer note */}
              <div className="mt-6 pt-4 border-t border-dashed border-neutral-300 font-handwriting text-base text-neutral-600">
                &quot;From raw ideas to usable software — designed with intention, built with care.&quot;
              </div>
            </div>

            {/* Interactive Skills Categorized as Post-Its */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-3">
                <span className="font-pixel text-xs text-neutral-500 uppercase tracking-wider">
                  Technical Arsenal &amp; Skills
                </span>
                <span className="font-handwriting text-sm text-neutral-500 font-bold">
                  click tabs to view stack ✨
                </span>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.map((category, cIdx) => (
                  <button
                    key={category.title}
                    onClick={() => setActiveCategory(cIdx)}
                    className={`font-mono text-xs font-bold px-3 py-1.5 border-2 border-[#171717] rounded transition-all ${
                      activeCategory === cIdx
                        ? "bg-[#171717] text-white shadow-[3px_3px_0px_#fef08a] -translate-y-0.5"
                        : "bg-white hover:bg-neutral-100 text-neutral-900 shadow-[2px_2px_0px_#171717]"
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>

              {/* Active Category Display as Sticky Note */}
              <div className="relative bg-[#fef08a] border-2 border-[#171717] p-5 shadow-[4px_4px_0px_#171717] rounded">
                <TapeSticker position="top-center" color="yellow" />
                <div className="font-handwriting text-xl font-bold text-neutral-900 mb-2">
                  {skills[activeCategory].title}
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {skills[activeCategory].skills.map((skill, sIdx) => (
                    <TechTag
                      key={sIdx}
                      name={skill}
                      color={
                        activeCategory === 0
                          ? "blue"
                          : activeCategory === 1
                          ? "green"
                          : activeCategory === 2
                          ? "pink"
                          : "purple"
                      }
                      size="md"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
