import { useEffect, useRef, useState } from 'react'

const skills = [
  { name: 'Python', level: 75, icon: '🐍', color: 'from-yellow-500 to-yellow-400', category: 'AI/ML' },
  { name: 'Java', level: 70, icon: '☕', color: 'from-orange-500 to-orange-400', category: 'Backend' },
  { name: 'JavaScript', level: 72, icon: '⚡', color: 'from-yellow-400 to-amber-400', category: 'Frontend' },
  { name: 'React.js', level: 68, icon: '⚛️', color: 'from-cyan-500 to-blue-400', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 80, icon: '🎨', color: 'from-teal-500 to-cyan-400', category: 'Frontend' },
  { name: 'Node.js', level: 50, icon: '🟢', color: 'from-green-500 to-emerald-400', category: 'Backend' },
  { name: 'C/C++', level: 65, icon: '⚙️', color: 'from-blue-500 to-indigo-400', category: 'Core' },
  { name: 'Digital Marketing', level: 85, icon: '📈', color: 'from-pink-500 to-rose-400', category: 'Marketing' },
  { name: 'Git & GitHub', level: 72, icon: '🐙', color: 'from-gray-400 to-gray-300', category: 'Tools' },
]

function SkillCard({ skill, visible, index }) {
  return (
    <div
      className="group p-5 rounded-2xl border border-gray-800/60 bg-[#111118] hover:border-indigo-500/30 hover:bg-[#13131e] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-900/20"
      style={{ transitionDelay: `${index * 60}ms`, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all 0.5s ease' }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <div>
            <div className="font-semibold text-white text-sm">{skill.name}</div>
            <div className="text-xs text-gray-600 mt-0.5">{skill.category}</div>
          </div>
        </div>
        <span className="text-xs font-bold text-indigo-400">{skill.level}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 rounded-full bg-gray-800 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
          style={{ width: visible ? `${skill.level}%` : '0%', transitionDelay: `${index * 60 + 300}ms` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`flex items-center gap-3 mb-12 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-indigo-400 font-mono text-sm">03.</span>
          <h2 className="text-3xl sm:text-4xl font-black">Skills</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent ml-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} visible={visible} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
