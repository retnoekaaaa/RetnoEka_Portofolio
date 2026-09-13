"use client";

import React, { useState } from "react";
import { portfolioData } from "../../data/portfolioData";
import { ProjectFolderCard } from "../ui/ProjectFolderCard";
import { FolderGit2, Sparkles, Filter } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = ["ALL", "Fullstack", "Frontend", "Backend/API", "Web App"];

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="works" className="relative py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-[#171717] pb-4 mb-6 gap-3">
          <div>
            <span className="font-handwriting text-2xl text-amber-700 font-bold block -mb-1">
              selected case studies //
            </span>
            <h2 className="font-pixel text-4xl sm:text-6xl text-neutral-900 tracking-tight">
              FEATURED WORKS
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="retro-badge bg-[#bae6fd] text-neutral-900 font-mono">
              PRODUCTION APPS
            </span>
            <span className="retro-badge bg-[#bbf7d0] text-neutral-900 font-mono">
              OPEN SOURCE
            </span>
          </div>
        </div>

        {/* Filter Tabs Bar (styled like folder tabs) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Filter size={15} className="text-neutral-600" />
            <span className="font-mono text-xs font-bold text-neutral-600 uppercase">
              Filter by domain:
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono text-xs font-bold px-3 py-1.5 border-2 border-[#171717] rounded transition-all ${
                  selectedCategory === cat
                    ? "bg-[#171717] text-white shadow-[2.5px_2.5px_0px_#fef08a]"
                    : "bg-white hover:bg-neutral-100 text-neutral-900 shadow-[1.5px_1.5px_0px_#171717]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards List */}
        <div>
          {filteredProjects.map((project, idx) => (
            <ProjectFolderCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center font-handwriting text-xl text-neutral-600 mt-6">
          ✨ Want to see more experimental repos? Check out the{" "}
          <a href="#playground" className="underline font-bold text-neutral-900 hover:text-amber-600">
            Playground Lab
          </a>{" "}
          below!
        </div>
      </div>
    </section>
  );
};
