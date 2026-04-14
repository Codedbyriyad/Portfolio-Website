import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "ChromaBox",
    description:
      "An interactive color guessing game where players match RGB values to mystery colors. Built for fun and learning color theory.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/Codedbyriyad/ChromaBox",
    live: "https://chromaboxf.netlify.app",
    featured: true,
    icon: "🎨",
    color: "from-pink-500/20 to-rose-500/5",
  },
  {
    title: "RUET CSE Research Portal",
    description:
      "Department research section showcasing publications, projects, and research areas with a modern React frontend and clean data-driven structure.",
    tech: ["React", "Tailwind v4", "Vite", "Netlify"],
    github: "https://github.com/Codedbyriyad/RUET-CSE-RESEARCH-INNOVATION",
    live: "https://researchfontend.netlify.app",
    featured: true,
    icon: "🔬",
    color: "from-blue-500/20 to-indigo-500/5",
  },
  {
    title: "Pokémon Hover Cards",
    description:
      "Visually stunning Pokémon-themed card hover effects showcasing advanced CSS animations and responsive grid layouts.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Codedbyriyad/Card-Hover",
    live: "https://hover-games.netlify.app",
    icon: "✨",
    color: "from-yellow-500/20 to-amber-500/5",
  },
  {
    title: "Basic To-Do App",
    description:
      "A minimal, fast to-do app with local state management. Focused on React fundamentals: state, props, conditional rendering.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/Codedbyriyad/To-Do-basic",
    live: "https://to-do-basics.netlify.app",
    icon: "✅",
    color: "from-emerald-500/20 to-green-500/5",
  },
  {
    title: "RiyadGenix — Digital Marketing",
    description:
      "Founded a digital marketing venture offering paid ads, social media management, and creative strategy for clients on Facebook, TikTok, and Instagram.",
    tech: ["Meta Ads", "Canva", "Social Media"],
    github: null,
    live: null,
    icon: "📈",
    color: "from-violet-500/20 to-purple-500/5",
  },
  {
    title: "Jarvis — AI Voice Assistant",
    description:
      "A voice-controlled AI assistant built with Python. Uses wake word detection, British TTS, and supports web browsing via voice commands.",
    tech: ["Python", "Speech Recognition", "pyttsx3", "AI"],
    github: "https://github.com/Codedbyriyad/Jarvis-basic",
    live: null,
    icon: "🤖",
    color: "from-cyan-500/20 to-blue-500/5",
  },
];

function ProjectCard({ project, index, visible }) {
  return (
    <div
      className={`group relative rounded-2xl border bg-[#111118] overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-900/30 transition-all duration-400 flex flex-col
        ${project.featured ? "border-indigo-500/30 hover:border-indigo-400/50" : "border-gray-800/60 hover:border-gray-700/60"}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(32px)",
        transition: `all 0.6s ease ${index * 100}ms`,
      }}
    >
      {/* Top gradient bg */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 pointer-events-none`}
      />

      {project.featured && (
        <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-[10px] font-bold uppercase tracking-wider">
          Featured
        </div>
      )}

      <div className="relative z-10 p-6 flex flex-col flex-1">
        {/* Icon + title */}
        <div className="flex items-start gap-3 mb-3">
          <span className="text-3xl">{project.icon}</span>
          <div>
            <h3 className="font-bold text-white text-lg group-hover:text-indigo-300 transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md bg-gray-800/80 text-gray-400 text-xs font-medium border border-gray-700/50"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors border border-gray-700/60 hover:border-gray-500 rounded-lg px-3 py-1.5"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors border border-indigo-500/30 hover:border-indigo-400/50 rounded-lg px-3 py-1.5"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div ref={ref} className="max-w-5xl mx-auto">
        <div
          className={`flex items-center gap-3 mb-12 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <span className="text-indigo-400 font-mono text-sm">04.</span>
          <h2 className="text-3xl sm:text-4xl font-black">Projects</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent ml-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              visible={visible}
            />
          ))}
        </div>

        <div
          className={`text-center mt-10 transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <a
            href="https://github.com/Codedbyriyad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-indigo-400 text-sm font-medium transition-colors border border-gray-700/60 hover:border-indigo-500/40 rounded-full px-5 py-2.5"
          >
            View all projects on GitHub
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}