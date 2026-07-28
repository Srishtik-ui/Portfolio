import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function Navbar() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
    
    if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    } else {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  return (
    <header className="sticky top-0 z-50 py-4 backdrop-blur-md bg-white/80 dark:bg-bg-dark/80 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="container mx-auto max-w-3xl px-4 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <a href="#home">
            <img
              src="/assets/pfp.jpeg"
              alt="Srishti Kumari"
              className="h-11 w-11 rounded-full object-cover border border-neutral-200 dark:border-neutral-700 bg-yellow-400 dark:bg-yellow-300 transition-transform duration-300 hover:scale-90"
              onError={(e) => {
                e.target.src = 'https://ui-avatars.com/api/?name=Srishti+Kumari&background=eab308&color=fff'
              }}
            />
          </a>
          <nav className="flex items-center gap-5">
            <a href="#skills" className="text-sm font-medium hover:underline hover:decoration-2 hover:underline-offset-4 text-neutral-800 dark:text-neutral-200 transition-all">Skills</a>
            <a href="#projects" className="text-sm font-medium hover:underline hover:decoration-2 hover:underline-offset-4 text-neutral-800 dark:text-neutral-200 transition-all">Projects</a>
            <a href="#education" className="text-sm font-medium hover:underline hover:decoration-2 hover:underline-offset-4 text-neutral-800 dark:text-neutral-200 transition-all">Education</a>
            <a href="#contact" className="text-sm font-medium hover:underline hover:decoration-2 hover:underline-offset-4 text-neutral-800 dark:text-neutral-200 transition-all">Contact</a>
          </nav>
        </div>
        <div>
          <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center size-10 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-300 active:scale-95 cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun className="size-4" /> : <FiMoon className="size-4" />}
          </button>
        </div>
      </div>
    </header>
  )
}
