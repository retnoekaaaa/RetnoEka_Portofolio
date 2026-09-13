import React from "react";
import { Project } from "../../types/portfolio";
import { TechTag } from "./TechTag";
import { TapeSticker } from "../common/TapeSticker";
import { GithubIcon } from "../common/Icons";
import { ExternalLink, CheckCircle2, Calendar, User, Users, Terminal, Code2 } from "lucide-react";

interface ProjectFolderCardProps {
  project: Project;
  index: number;
}

export const ProjectFolderCard: React.FC<ProjectFolderCardProps> = ({ project, index }) => {
  return (
    <article className="relative mt-8 mb-12 bg-white border-2 border-[#171717] rounded-lg shadow-[6px_6px_0px_#171717] overflow-hidden">
      {/* Top Folder Header Tab & Meta */}
      <div className="bg-[#171717] text-white px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-400 text-neutral-950 font-pixel text-xs font-bold px-2.5 py-1 rounded-sm shadow-[1.5px_1.5px_0px_white]">
            {project.tabLabel}
          </div>
          <span className="font-mono text-xs text-neutral-300 tracking-wider uppercase">
            // {project.category}
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
            <span className="hidden sm:flex items-center gap-1 text-amber-300">
              <Users size={13} className="text-amber-400" />
              {project.team}
            </span>
          )}
        </div>
      </div>

      {/* Main Card Body */}
      <div className="p-5 sm:p-8 space-y-6">
        {/* Title & Headline */}
        <div>
          <div className="font-handwriting text-amber-700 text-lg font-bold">
            case study // {project.category.toLowerCase()}
          </div>
          <h3 className="font-pixel text-2xl sm:text-4xl text-neutral-900 mt-1 mb-2 tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base font-medium text-neutral-700 leading-relaxed max-w-3xl">
            {project.subtitle}
          </p>
        </div>

        {/* Narrative Description Block */}
        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-sans bg-[#fbf9f4] p-4 sm:p-5 border-l-4 border-[#171717] rounded-r-md italic shadow-xs">
          &quot;{project.description}&quot;
        </p>

        {/* Details Grid: Left Highlights, Right Specs & Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
          {/* Technical Highlights (7 cols) */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <Terminal size={15} className="text-neutral-800" />
                <span className="font-pixel text-xs text-neutral-700 uppercase tracking-wider">
                  Technical Architecture Highlights
                </span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-700 font-sans">
                {project.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5 bg-neutral-50 p-2.5 rounded border border-neutral-200/80">
                    <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Dossier / Stack Box (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative bg-[#fcfcf9] border-2 border-[#171717] rounded-lg p-4 sm:p-5 shadow-[3px_3px_0px_#171717]">
              <TapeSticker position="top-right" color="yellow" />
              
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-neutral-200">
                <Code2 size={15} className="text-neutral-700" />
                <span className="font-pixel text-xs text-neutral-800 uppercase tracking-wider">
                  Technology Stack
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
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

              {/* Dossier Metadata Mini Table */}
              <div className="font-mono text-[11px] space-y-1.5 pt-2 border-t border-dashed border-neutral-300 text-neutral-600">
                <div className="flex justify-between">
                  <span className="text-neutral-400">TIMELINE:</span>
                  <span className="font-bold text-neutral-800">{project.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">STRUCTURE:</span>
                  <span className="font-bold text-neutral-800">{project.team}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">DOMAIN:</span>
                  <span className="font-bold text-neutral-800">{project.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons (Live Demo & Source Code) */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 pt-4 border-t border-neutral-200">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-[#fef08a] px-5 py-2.5 text-xs font-mono font-bold text-neutral-950 rounded"
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
              className="brutal-btn w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-white px-5 py-2.5 text-xs font-mono font-bold text-neutral-950 rounded"
            >
              <GithubIcon size={14} />
              <span>VIEW REPO</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
