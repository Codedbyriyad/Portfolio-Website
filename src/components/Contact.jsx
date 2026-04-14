import { useEffect, useRef, useState } from 'react'

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/Codedbyriyad',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: 'hover:text-white hover:border-gray-500',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kaysar-mahmud-riyad',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: 'hover:text-blue-400 hover:border-blue-500/50',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/kaysar.mahmud.riyad',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: 'hover:text-blue-500 hover:border-blue-600/50',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  const inputClass = "w-full bg-[#0d0d18] border border-gray-800/60 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-[#0f0f1f] transition-all duration-200"

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-indigo-400 font-mono text-sm">05.</span>
          <h2 className="text-3xl sm:text-4xl font-black">Get In Touch</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent ml-4" />
        </div>
        <p className="text-gray-500 text-sm mb-12 ml-8">
          Have an opportunity, collaboration idea, or just want to say hi? I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5 ml-1">Your Name</label>
              <input
                type="text"
                placeholder="MD Kaysar Mahmud"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5 ml-1">Email Address</label>
              <input
                type="email"
                placeholder="hello@example.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5 ml-1">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2
                ${sent
                  ? 'bg-emerald-600 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:scale-[1.02]'
                }`}
            >
              {sent ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Info side */}
          <div className="space-y-6">
            <div className="p-5 rounded-2xl border border-gray-800/60 bg-[#111118]">
              <div className="text-sm font-semibold text-white mb-1">📍 Location</div>
              <div className="text-gray-500 text-sm">Rajshahi, Bangladesh</div>
            </div>
            <div className="p-5 rounded-2xl border border-gray-800/60 bg-[#111118]">
              <div className="text-sm font-semibold text-white mb-1">📬 Email</div>
              <a href="mailto:riyadmahmud1931@gmail.com" className="text-indigo-400 text-sm hover:text-indigo-300 transition-colors">riyadmahmud1931@gmail.com</a>
            </div>
            <div className="p-5 rounded-2xl border border-gray-800/60 bg-[#111118]">
              <div className="text-sm font-semibold text-white mb-3">🌐 Social Links</div>
              <div className="flex gap-3">
                {socials.map(s => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.name}
                    className={`w-10 h-10 rounded-xl border border-gray-700/60 bg-gray-800/30 flex items-center justify-center text-gray-500 transition-all duration-200 ${s.color} hover:-translate-y-1`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="p-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/5">
              <div className="text-indigo-300 text-sm font-medium">🎯 Open to:</div>
              <div className="text-gray-400 text-sm mt-1">Research collaborations, internships, freelance projects, and scholarship opportunities.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
