"use client";

import React, { useState, useEffect } from "react";
import { WindowHeader } from "../components/common/WindowHeader";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { PlaygroundSection } from "../components/sections/PlaygroundSection";
import { ContactSection } from "../components/sections/ContactSection";

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "works", "playground", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen notebook-paper-bg paper-texture text-neutral-900 selection:bg-yellow-200 overflow-x-hidden w-full max-w-full">
      {/* Top macOS Styled Window Bar */}
      <WindowHeader currentSection={activeSection} />

      {/* Main Content with Notebook Margins */}
      <main className="relative z-10 binder-holes w-full max-w-full overflow-x-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Featured Projects Section */}
        <ProjectsSection />

        {/* Playground & Retro Mac Section */}
        <PlaygroundSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
    </div>
  );
}
