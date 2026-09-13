"use client";

import React, { useState } from "react";
import { portfolioData } from "../../data/portfolioData";
import { TapeSticker } from "../common/TapeSticker";
import { StickyNote } from "../common/StickyNote";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../common/Icons";
import {
  Send,
  Mail,
  Copy,
  Check,
  Smile,
  MessageSquare,
  Sparkles
} from "lucide-react";
import confetti from "canvas-confetti";

export const ContactSection: React.FC = () => {
  const { personal, socials } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("eka.contact@example.com");
    setCopied(true);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#fef08a", "#bae6fd", "#fbcfe8", "#bbf7d0", "#171717"]
    });
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case "github":
        return <GithubIcon size={15} />;
      case "linkedin":
        return <LinkedinIcon size={15} />;
      case "instagram":
        return <InstagramIcon size={15} />;
      default:
        return <Mail size={15} />;
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Top Header with Big Iconic Smiley */}
        <div className="text-center space-y-4 mb-12">
          {/* Big Yellow Smiley Badge */}
          <div className="inline-block relative">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#fde047] border-3 border-[#171717] shadow-[6px_6px_0px_#171717] flex items-center justify-center mx-auto hover:rotate-12 transition-transform cursor-pointer">
              {/* Retro SVG Smiley */}
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#171717]" fill="currentColor">
                {/* Eyes */}
                <circle cx="34" cy="38" r="6" />
                <circle cx="66" cy="38" r="6" />
                {/* Classic Smile */}
                <path
                  d="M 28 58 Q 50 82 72 58"
                  stroke="#171717"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          <div>
            <h2 className="font-pixel text-5xl sm:text-7xl text-neutral-950 tracking-tight">
              LET&apos;S TALK
            </h2>
            <p className="font-handwriting text-xl sm:text-2xl text-neutral-700 font-bold max-w-lg mx-auto mt-2">
              Got a project, a hard engineering problem, or just want to say hi? Send it away. I read every message! ✨
            </p>
          </div>
        </div>

        {/* Contact Form Card (styled as a big taped sticky note) */}
        <div className="relative max-w-2xl mx-auto bg-white border-2 border-[#171717] p-6 sm:p-10 rounded shadow-[6px_6px_0px_#171717]">
          <TapeSticker position="top-center" color="yellow" />
          <TapeSticker position="top-right" color="blue" />

          {isSubmitted ? (
            <div className="text-center py-10 space-y-3">
              <div className="font-handwriting text-3xl font-bold text-emerald-600">
                Message received! 🎉
              </div>
              <p className="font-sans text-sm text-neutral-700">
                Thanks for reaching out, {formState.name || "friend"}. I will get back to your inbox as soon as possible!
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormState({ name: "", email: "", message: "" });
                }}
                className="brutal-btn mt-4 bg-[#fef08a] px-4 py-2 text-xs font-mono font-bold rounded"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs font-bold text-neutral-700 mb-1 uppercase">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ada Lovelace"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#fbf9f4] border-2 border-[#171717] rounded text-sm font-sans focus:outline-hidden focus:bg-yellow-50 shadow-[2px_2px_0px_#171717]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold text-neutral-700 mb-1 uppercase">
                    Your Email:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ada@computing.org"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#fbf9f4] border-2 border-[#171717] rounded text-sm font-sans focus:outline-hidden focus:bg-yellow-50 shadow-[2px_2px_0px_#171717]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs font-bold text-neutral-700 mb-1 uppercase">
                  Tell me about your project, idea, or role:
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hey Eka, we're building a new web platform and need a skilled developer..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#fbf9f4] border-2 border-[#171717] rounded text-sm font-sans focus:outline-hidden focus:bg-yellow-50 shadow-[2px_2px_0px_#171717]"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto brutal-btn inline-flex items-center justify-center gap-2 bg-[#171717] text-white px-6 py-3 font-pixel text-xs rounded shadow-[4px_4px_0px_#fef08a]"
                >
                  <Send size={14} className="text-yellow-400" />
                  <span>SEND MESSAGE</span>
                </button>

                {/* Quick Copy Direct Email */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#fef08a] border-2 border-[#171717] px-3.5 py-2.5 rounded font-mono text-xs font-bold text-neutral-950 shadow-[2px_2px_0px_#171717] hover:bg-yellow-300 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-700" />
                      <span>COPIED TO CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>COPY DIRECT EMAIL</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Socials Link Row */}
          <div className="mt-8 pt-6 border-t-2 border-dashed border-neutral-300 flex flex-wrap items-center justify-center gap-2.5">
            <span className="font-mono text-xs font-bold text-neutral-500 uppercase mr-1">
              Find me on:
            </span>
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn inline-flex items-center gap-1.5 bg-[#faf8f3] text-neutral-900 px-3 py-1.5 rounded text-xs font-mono font-bold"
              >
                {getSocialIcon(social.iconName)}
                <span>{social.platform}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center mt-12 space-y-2 font-mono text-xs text-neutral-500">
          <p>© 2026 {personal.fullName} — Crafted with Next.js &amp; Retro Scrapbook Aesthetics.</p>
          <p>Built for curious minds and modern software builders.</p>
        </div>
      </div>
    </section>
  );
};
