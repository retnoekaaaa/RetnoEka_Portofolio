"use client";

import React, { useState } from "react";
import { portfolioData } from "../../data/portfolioData";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../common/Icons";
import { Mail, Copy, Check, ArrowUp } from "lucide-react";
import confetti from "canvas-confetti";

export const ContactSection: React.FC = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("retnoe54@gmail.com");
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.85 },
      colors: ["#fef08a", "#bae6fd", "#fbcfe8", "#bbf7d0", "#171717"]
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const channelCards = [
    {
      name: "GitHub",
      handle: "@retnoekaaaa",
      url: "https://github.com/retnoekaaaa",
      desc: "Repositories & open source",
      icon: <GithubIcon size={20} />,
      bg: "bg-white hover:bg-neutral-50",
      accent: "border-[#171717]"
    },
    {
      name: "LinkedIn",
      handle: "Retno Eka",
      url: "https://www.linkedin.com/in/retno-eka-7a59612b8/",
      desc: "Professional career & network",
      icon: <LinkedinIcon size={20} />,
      bg: "bg-[#bae6fd]/40 hover:bg-[#bae6fd]/70",
      accent: "border-[#171717]"
    },
    {
      name: "Instagram",
      handle: "@retno_ekaa",
      url: "https://instagram.com/retno_ekaa",
      desc: "Design, updates & daily life",
      icon: <InstagramIcon size={20} />,
      bg: "bg-[#fbcfe8]/40 hover:bg-[#fbcfe8]/70",
      accent: "border-[#171717]"
    },
    {
      name: "Email",
      handle: "retnoe54@gmail.com",
      url: "mailto:retnoe54@gmail.com",
      desc: "Direct communication & inquiries",
      icon: <Mail size={20} />,
      bg: "bg-[#fef08a]/50 hover:bg-[#fef08a]/80",
      accent: "border-[#171717]",
      isEmail: true
    }
  ];

  return (
    <footer id="contact" className="relative border-t-2 border-[#171717] bg-[#f7f5ed] pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Top Header of Footer */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-dashed border-neutral-300 pb-8">
          <div>
            <span className="font-handwriting text-2xl text-amber-700 font-bold block -mb-1">
              get in touch //
            </span>
            <h2 className="font-pixel text-3xl sm:text-5xl text-neutral-900 tracking-tight">
              CONTACT CHANNELS
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-600 mt-2 max-w-xl">
              Available for fullstack &amp; frontend opportunities, academy collaboration, or discussing new projects.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="brutal-btn inline-flex items-center gap-2 bg-[#fef08a] border-2 border-[#171717] px-4 py-2.5 rounded text-xs font-mono font-bold text-neutral-950 shadow-[3px_3px_0px_#171717]"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-700" />
                  <span>EMAIL COPIED!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>

            <button
              onClick={scrollToTop}
              className="brutal-btn inline-flex items-center gap-1.5 bg-white border-2 border-[#171717] px-3.5 py-2.5 rounded text-xs font-mono font-bold text-neutral-950 shadow-[3px_3px_0px_#171717]"
              title="Scroll to Top"
            >
              <ArrowUp size={14} />
              <span className="hidden sm:inline">TOP</span>
            </button>
          </div>
        </div>

        {/* 4 Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {channelCards.map((channel) => (
            <a
              key={channel.name}
              href={channel.url}
              target={channel.isEmail ? undefined : "_blank"}
              rel={channel.isEmail ? undefined : "noopener noreferrer"}
              className={`group relative p-5 border-2 ${channel.accent} ${channel.bg} rounded-lg shadow-[4px_4px_0px_#171717] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#171717] transition-all flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-white border-2 border-[#171717] rounded shadow-[2px_2px_0px_#171717]">
                    {channel.icon}
                  </div>
                  <span className="font-mono text-[11px] font-bold text-neutral-500 group-hover:text-neutral-900 transition-colors uppercase">
                    ↗ VISIT
                  </span>
                </div>

                <div className="font-pixel text-base text-neutral-900 mb-1">
                  {channel.name}
                </div>
                <div className="font-mono text-xs font-bold text-neutral-800 break-all">
                  {channel.handle}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-300/80 font-sans text-xs text-neutral-600">
                {channel.desc}
              </div>
            </a>
          ))}
        </div>

        {/* Bottom System Footer Info */}
        <div className="pt-8 border-t-2 border-[#171717] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-600">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>📍 Jakarta, Indonesia • Ready for New Challenges</span>
          </div>

          <div className="text-center sm:text-right">
            © 2026 <strong className="text-neutral-900">{personal.fullName}</strong>. Built with Next.js &amp; Retro Aesthetics.
          </div>
        </div>
      </div>
    </footer>
  );
};
