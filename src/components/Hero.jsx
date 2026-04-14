import { useEffect, useState } from "react";

const roles = [
  "CSE Student",
  "Aspiring AI/ML Engineer",
  "Web Developer",
  "Open Source Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let i = typing ? 0 : current.length;
    const interval = setInterval(
      () => {
        if (typing) {
          setDisplayed(current.slice(0, i + 1));
          i++;
          if (i === current.length) {
            clearInterval(interval);
            setTimeout(() => setTyping(false), 1800);
          }
        } else {
          setDisplayed(current.slice(0, i - 1));
          i--;
          if (i === 0) {
            clearInterval(interval);
            setRoleIndex((prev) => (prev + 1) % roles.length);
            setTyping(true);
          }
        }
      },
      typing ? 70 : 40,
    );
    return () => clearInterval(interval);
  }, [roleIndex, typing]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px]" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-16 text-center md:text-left">
        {/* Left — Text content */}
        <div className="flex-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl font-black mb-4 leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300">
                Riyad
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full" />
            </span>
          </h1>

          {/* Typewriter */}
          <div className="text-xl sm:text-2xl text-gray-400 font-medium mb-6 h-8">
            <span className="text-indigo-300">{displayed}</span>
            <span className="animate-pulse text-indigo-400">|</span>
          </div>

          {/* Tagline */}
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mb-10 leading-relaxed mx-auto md:mx-0">
            Building the future with code. Passionate about AI research,
            crafting elegant software, and solving real-world problems one
            commit at a time.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 rounded-full font-semibold text-white transition-all duration-200 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:scale-105 flex items-center gap-2"
            >
              View Projects
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3.5 rounded-full font-semibold text-gray-300 border border-gray-700 hover:border-indigo-500/50 hover:text-indigo-300 transition-all duration-200"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right — Photo placeholder */}
        <div className="flex-shrink-0 flex flex-col items-center gap-3">
          <div className="relative w-52 h-52 sm:w-64 sm:h-64">
            {/* Rotating border ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/30 animate-spin"
              style={{ animationDuration: "12s" }}
            />
            {/* Glow */}
            <div className="absolute inset-2 rounded-full bg-indigo-600/10 blur-xl" />
            {/* Photo frame */}
            <div className="absolute inset-3 rounded-full border-2 border-indigo-500/40 bg-[#111118] overflow-hidden">
              <img
                src="/src/assets/profile.png"
                alt="Riyad"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs animate-bounce">
          <span>scroll</span>
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
