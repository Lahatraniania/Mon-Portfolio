import { useState, useEffect } from 'react'
import Header from './Header'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const titles = ['React', 'Next.js', 'Node.js', 'PHP','Symfony']
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const [language, setLanguage] = useState(() => {
    // Initialisation directe sans useEffect
    return localStorage.getItem('language') || 'fr'
  })

  // Effet UNIQUEMENT pour écouter les changements externes
  useEffect(() => {
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
        <div className="container-custom text-center">
          <div className="animate-fadeIn">
            <p className="text-lg mb-4 opacity-80">{t.greeting}</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                {t.name}
              </span>
            </h1>
            <div className="text-2xl md:text-3xl mb-6">
              <span className="opacity-80">{t.title} • </span>
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-75">
              {t.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                {t.contactBtn}
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="btn-secondary"
              >
                {t.projectsBtn}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
