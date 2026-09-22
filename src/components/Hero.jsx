import { useState, useEffect } from 'react'
import Header from './Header'
import photoProfil from '../assets/images/Profil.png'  // ← Import de ta photo

const Hero = () => {
  const [language, setLanguage] = useState('fr')
  const [displayText, setDisplayText] = useState('')
  const titles = ['React', 'Tailwind CSS', 'Next.js', 'Node.js', 'PHP', 'Symfony']
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }

    const handleStorageChange = (e) => {
      if (e.key === 'language') {
        setLanguage(e.newValue || 'fr')
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    let timer

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
        if (charIndex === 0) {
          setIsDeleting(false)
          setTitleIndex((titleIndex + 1) % titles.length)
        }
      }, 50)
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
        if (charIndex === currentTitle.length) {
          setIsDeleting(true)
        }
      }, 100)
    }

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, titleIndex, titles])

  const translations = {
    fr: {
      greeting: 'Bonjour, je suis',
      name: 'Lahatra',
      title: 'Développeur Full Stack',
      description: 'Je transforme vos idées en applications web modernes, performantes et élégantes.',
      contactBtn: 'Me contacter',
      projectsBtn: 'Voir mes projets'
    },
    en: {
      greeting: 'Hello, I am',
      name: 'Lahatra',
      title: 'Full Stack Developer',
      description: 'I turn your ideas into modern, performant, and elegant web applications.',
      contactBtn: 'Contact me',
      projectsBtn: 'View my projects'
    }
  }

  const t = translations[language]

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Header />
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* 📸 Photo de profil (gauche) */}
            <div className="flex justify-center md:justify-end order-1 md:order-1">
              <div className="relative">
                {/* Cercle décoratif derrière la photo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black to-gray-600 dark:from-white dark:to-gray-400 rounded-full blur-2xl opacity-20 scale-110"></div>

                {/* Photo */}
                <img
                  src={photoProfil}
                  alt="Lahatra"
                  className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-black dark:border-white shadow-2xl"
                />

                {/* Badge "Disponible" */}
                <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  {language === 'fr' ? 'Disponible' : 'Available'}
                </div>
              </div>
            </div>

            {/* Texte (droite) */}
            <div className="text-center md:text-left order-2 md:order-2">
              <p className="text-lg mb-4 opacity-80">{t.greeting}</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                  {t.name}
                </span>
              </h1>
              <div className="text-xl md:text-2xl mb-6">
                <span className="opacity-80">{t.title} • </span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              <p className="text-lg md:text-xl max-w-xl mb-10 opacity-75">
                {t.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary"
                >
                  {t.contactBtn}
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="btn-secondary"
                >
                  {t.projectsBtn}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Hero