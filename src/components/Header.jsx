import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
// Supprimer l'import de useTheme car pas utilisé

const Header = () => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'fr'
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])



  const translations = {
  fr: { home: 'Accueil', about: 'À propos', skills: 'Compétences', projects: 'Projets', contact: 'Contact' },
  en: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' }
  }

  const t = translations[language]

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Lahatra
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="hover:opacity-70 transition">
              {t.home}
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:opacity-70 transition">
              {t.about}
            </button>
            <button onClick={() => scrollToSection('skills')} className="hover:opacity-70 transition">
              {t.skills}
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:opacity-70 transition">
              {t.contact}
            </button>
            
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 rounded ${language === 'fr' ? 'bg-black text-white dark:bg-white dark:text-black' : 'opacity-50'}`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded ${language === 'en' ? 'bg-black text-white dark:bg-white dark:text-black' : 'opacity-50'}`}
              >
                EN
              </button>
            </div>
            
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <div className="flex gap-2">
              <button onClick={() => setLanguage('fr')} className={`px-2 py-1 text-sm rounded ${language === 'fr' ? 'bg-black text-white dark:bg-white dark:text-black' : 'opacity-50'}`}>FR</button>
              <button onClick={() => setLanguage('en')} className={`px-2 py-1 text-sm rounded ${language === 'en' ? 'bg-black text-white dark:bg-white dark:text-black' : 'opacity-50'}`}>EN</button>
            </div>
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} className="text-left hover:opacity-70">{t.home}</button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:opacity-70">{t.about}</button>
              <button onClick={() => scrollToSection('skills')} className="text-left hover:opacity-70">{t.skills}</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:opacity-70">{t.contact}</button>
              <button onClick={() => scrollToSection('projects')} className="hover:opacity-70 transition">{t.projects}</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header