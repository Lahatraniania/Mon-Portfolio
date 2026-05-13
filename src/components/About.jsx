import { useState, useEffect } from 'react'

const About = () => {
  const [language, setLanguage] = useState('fr')

  useEffect(() => {
    // Lire directement depuis localStorage sans setState dans l'effet
    const checkLanguage = () => {
      const savedLanguage = localStorage.getItem('language')
      if (savedLanguage && savedLanguage !== language) {
        setLanguage(savedLanguage)
      }
    }
    
    checkLanguage()
    
    const handleStorageChange = (e) => {
      if (e.key === 'language' && e.newValue) {
        setLanguage(e.newValue)
      }
    }
    
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [language]) 

  const translations = {
    fr: {
      title: 'À propos de moi',
      description1: 'Je suis un développeur Full Stack passionné, spécialisé dans la création d\'applications web modernes et performantes. Mon expertise couvre tout l\'écosystème JavaScript moderne ainsi que des technologies backend robustes.',
      description2: 'Actuellement étudiant en M1 à ENI, je suis constamment à la recherche de nouveaux défis pour améliorer mes compétences et créer des solutions innovantes. Ma passion pour le développement web me pousse à rester à jour avec les dernières technologies.',
      description3: 'Ce que j\'aime par-dessus tout, c\'est transformer des idées en réalité grâce au code, en créant des expériences utilisateur fluides et des applications qui font la différence.',
      downloadCV: 'Télécharger mon CV',
      technologies: 'Technologies maîtrisées'
    },
    en: {
      title: 'About me',
      description1: 'I am a passionate Full Stack Developer, specialized in creating modern and performant web applications. My expertise covers the entire modern JavaScript ecosystem as well as robust backend technologies.',
      description2: 'Currently an M1 student at ENI, I am constantly looking for new challenges to improve my skills and create innovative solutions. My passion for web development drives me to stay up-to-date with the latest technologies.',
      description3: 'What I love most is turning ideas into reality through code, creating seamless user experiences and applications that make a difference.',
      downloadCV: 'Download my CV',
      technologies: 'Technologies mastered'
    }
  }

  const t = translations[language]

  const techStack = ['React', 'Tailwind CSS', 'Next.js', 'Node.js', 'PHP', 'Java', 'Symfony', 'MySQL', 'PostgreSQL']

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <h2 className="section-title">{t.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed opacity-80">
              {t.description1}
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              {t.description2}
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              {t.description3}
            </p>
            <button className="btn-primary inline-block">
              {t.downloadCV}
            </button>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">{t.technologies}</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-semibold hover:scale-105 transition-transform cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
