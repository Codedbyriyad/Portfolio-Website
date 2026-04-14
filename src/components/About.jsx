import { useEffect, useRef, useState } from 'react'

const stats = [
   { label: 'Research', value: 'Ongoing' },
  { label: 'Projects', value: '10+' },
  { label: 'GitHub Repos', value: '10+' },
  { label: 'Goal', value: 'PhD' },
]

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-28 px-6">
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-indigo-400 font-mono text-sm">02.</span>
          <h2 className="text-3xl sm:text-4xl font-black">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent ml-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text side */}
          <div className="space-y-5">
            <p className="text-gray-400 leading-relaxed text-[15px]">
              I'm <span className="text-white font-semibold">MD Kaysar Mahmud Riyad</span>, a passionate 2nd-year 
              Computer Science & Engineering student at{' '}
              <span className="text-indigo-400 font-medium">RUET (Rajshahi University of Engineering & Technology)</span>, Bangladesh.
            </p>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              My core focus is on <span className="text-indigo-300">Artificial Intelligence & Machine Learning</span>. 
              I'm actively building research skills, open-source contributions, and projects to secure a 
              <span className="text-white font-semibold"> fully funded PhD scholarship abroad</span> — 
              targeting universities in Europe, the USA, Canada, or Australia.
            </p>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              Beyond academia, I run <span className="text-indigo-300 font-medium">RiyadGenix</span>, 
              a digital marketing venture. I love building clean web experiences with React and Tailwind, 
              exploring generative AI, and contributing to meaningful open-source projects.
            </p>

            {/* Education card */}
            <div className="mt-6 p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0121 21H3a12.083 12.083 0 012.84-10.422L12 14z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">B.Sc. in Computer Science & Engineering</div>
                <div className="text-xs text-indigo-400 mt-0.5">RUET — Rajshahi, Bangladesh</div>
                <div className="text-xs text-gray-500 mt-1">2023 – 2027 (Expected)</div>
              </div>
            </div>
          </div>

          {/* Stats side */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ label, value }) => (
              <div
                key={label}
                className="p-6 rounded-2xl border border-gray-800/60 bg-[#111118] hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300 group"
              >
                <div className="text-3xl font-black text-indigo-400 group-hover:scale-110 transition-transform duration-200 inline-block">
                  {value}
                </div>
                <div className="text-gray-500 text-sm mt-1">{label}</div>
              </div>
            ))}

            {/* Quote card */}
            <div className="col-span-2 p-5 rounded-2xl border border-gray-800/60 bg-[#111118] italic text-gray-500 text-sm leading-relaxed">
              "The goal is not just to write code, but to build things that matter — 
              research that pushes boundaries and software that changes lives."
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
