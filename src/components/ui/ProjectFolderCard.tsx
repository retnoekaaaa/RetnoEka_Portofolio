import React from "react";
import { Project } from "../../types/portfolio";
import { TechTag } from "./TechTag";
import { TapeSticker } from "../common/TapeSticker";
import { GithubIcon } from "../common/Icons";
import { ExternalLink, ArrowUpRight, CheckCircle2, Calendar, User, Users } from "lucide-react";

interface ProjectFolderCardProps {
  project: Project;
  index: number;
}

export const ProjectFolderCard: React.FC<ProjectFolderCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  const metricColors = {
    yellow: "bg-[#fef08a] border-[#171717]",
    blue: "bg-[#bae6fd] border-[#171717]",
    pink: "bg-[#fbcfe8] border-[#171717]",
    green: "bg-[#bbf7d0] border-[#171717]",
    purple: "bg-[#ddd6fe] border-[#171717]",
  };

  return (
    <article className="relative mt-8 mb-16 bg-white border-2 border-[#171717] rounded-lg shadow-[6px_6px_0px_#171717] overflow-hidden">
      {/* Top Folder Header Tab & Meta */}
      <div className="bg-[#171717] text-white px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-400 text-neutral-950 font-pixel text-xs font-bold px-2.5 py-1 rounded-sm shadow-[1.5px_1.5px_0px_white]">
            {project.tabLabel}
          </div>
          <span className="font-mono text-xs text-neutral-300 tracking-wider">
            {project.category}
          </span>
        </div>

        <div className="flex items-center flex-wrap gap-2.5 sm:gap-4 text-xs font-mono text-neutral-300">
          <span className="flex items-center gap-1">
            <Calendar size={13} className="text-yellow-400" />
            {project.date}
          </span>
          <span className="flex items-center gap-1 text-emerald-300">
            <User size={13} className="text-emerald-400" />
            {project.role}
          </span>
          {project.team && (
            <span className="hidden md:flex items-center gap-1 text-amber-300">
              <Users size={13} className="text-amber-400" />
              {project.team}
            </span>
          )}
        </div>
      </div>

      {/* Main Card Body */}
      <div className="p-4 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Project Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="font-handwriting text-amber-700 text-lg font-bold">
                case study // {project.category.toLowerCase()}
              </div>
              <h3 className="font-pixel text-2xl sm:text-4xl text-neutral-900 mt-1 mb-2 tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base font-medium text-neutral-700 leading-relaxed">
                {project.subtitle}
              </p>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed font-sans bg-[#fbf9f4] p-3 sm:p-4 border-l-3 border-[#171717] italic">
              &quot;{project.description}&quot;
            </p>

            {/* Impact / Results Metrics (like in reference image bottom right) */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="pt-2">
                <span className="font-pixel text-xs text-neutral-500 uppercase tracking-wider block mb-2">
                  Key Impact &amp; Metrics
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                  {project.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className={`border-2 p-2.5 sm:p-3 text-center shadow-[2px_2px_0px_#171717] sm:shadow-[3px_3px_0px_#171717] ${
                        metricColors[metric.color || "yellow"]
                      }`}
                    >
                      <div className="font-pixel text-lg sm:text-2xl font-black text-neutral-900">
                        {metric.value}
                      </div>
                      <div className="font-mono text-[9px] sm:text-[10px] font-bold text-neutral-800 uppercase tracking-tight mt-0.5 sm:mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Engineering Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-2 pt-1">
                <span className="font-pixel text-xs text-neutral-500 uppercase tracking-wider block">
                  Technical Architecture Highlights
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-700 font-sans">
                  {project.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="pt-2">
              <span className="font-pixel text-xs text-neutral-500 uppercase tracking-wider block mb-2">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, tIdx) => {
                  const colors: ("yellow" | "blue" | "pink" | "green" | "purple")[] = [
                    "yellow",
                    "blue",
                    "pink",
                    "green",
                    "purple",
                  ];
                  return (
                    <TechTag key={tIdx} name={tag} color={colors[tIdx % colors.length]} size="sm" />
                  );
                })}
              </div>
            </div>

            {/* Action Buttons (Live Demo & Source Code) */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 pt-4 border-t border-neutral-200">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-[#fef08a] px-4 py-2.5 text-xs font-mono font-bold text-neutral-950 rounded"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink size={14} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-white px-4 py-2.5 text-xs font-mono font-bold text-neutral-950 rounded"
                >
                  <GithubIcon size={14} />
                  <span>VIEW REPO</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Visual Mockup Showcase (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative group">
              <TapeSticker position="top-right" color="yellow" />
              <div className="relative bg-neutral-100 border-2 border-[#171717] rounded shadow-[4px_4px_0px_#171717] overflow-hidden aspect-[4/3]">
                <img
                  src={project.featuredImage}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 right-2 bg-black/80 text-white font-mono text-[10px] px-2 py-0.5 rounded backdrop-blur-xs">
                  {project.category}
                </div>
              </div>
            </div>

            {project.secondaryImage && (
              <div className="relative group hidden sm:block">
                <TapeSticker position="top-left" color="blue" />
                <div className="relative bg-neutral-100 border-2 border-[#171717] rounded shadow-[4px_4px_0px_#171717] overflow-hidden aspect-[16/9]">
                  <img
                    src={project.secondaryImage}
                    alt={`${project.title} secondary preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 left-2 bg-white/90 border border-neutral-800 text-neutral-900 font-mono text-[10px] px-2 py-0.5 rounded">
                    Architecture &amp; Mobile
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
