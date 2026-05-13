import { useState, useEffect } from 'react'

const Skills = () => {
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

  const translations = {
    fr: { title: 'Mes compétences', frontend: 'Frontend', backend: 'Backend', database: 'Base de données' },
    en: { title: 'My skills', frontend: 'Frontend', backend: 'Backend', database: 'Database' }
  }

  const t = translations[language]

  // Remplace les URLs par tes propres images dans le dossier src/assets/images/
  const skillsData = {
    frontend: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 90 },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', level: 88 },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', level: 85 },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 90 }
    ],
    backend: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 85 },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 80 },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 75 },
      { name: 'Symfony', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg', level: 78 }
    ],
    database: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 85 },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', level: 82 }
    ]
  }

  const SkillCard = ({ skill }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-4">
        <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
        <h3 className="text-xl font-semibold">{skill.name}</h3>
      </div>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <span className="text-xs font-semibold inline-block opacity-80">
            Maîtrise
          </span>
          <span className="text-xs font-semibold inline-block">
            {skill.level}%
          </span>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
          <div
            style={{ width: `${skill.level}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400"
          ></div>
        </div>
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-20">
      <div className="container-custom">
        <h2 className="section-title">{t.title}</h2>
        
        <div className="space-y-16">
          {/* Frontend */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center opacity-80">{t.frontend}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillsData.frontend.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center opacity-80">{t.backend}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillsData.backend.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Database */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center opacity-80">{t.database}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {skillsData.database.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
