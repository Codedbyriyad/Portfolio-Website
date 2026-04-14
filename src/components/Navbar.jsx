import { useState, useEffect } from 'react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-md border-b border-indigo-500/10 shadow-lg shadow-indigo-900/10' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span className="text-xl font-black tracking-tight">
          <span className="text-indigo-400">&lt;</span>
          Riyad
          <span className="text-indigo-400">/&gt;</span>
        </span>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {links.map(link => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-sm font-medium text-gray-400 hover:text-indigo-400 transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-400 group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        {/* Hire Me button */}
        <a
          href="mailto:riyadmahmud1931@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/50 text-indigo-400 text-sm font-medium hover:bg-indigo-500/10 transition-all duration-200"
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#0d0d1a]/95 backdrop-blur-md border-t border-indigo-500/10 px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-gray-300 hover:text-indigo-400 transition-colors py-1 font-medium"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
