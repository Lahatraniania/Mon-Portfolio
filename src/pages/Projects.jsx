import { useState, useEffect } from 'react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('all')

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

  const projectsData = {
    fr: [
      {
        id: 1,
        title: "Gestion de caisse bancaire",
        description: "Application desktop développée en Python pour la gestion complète des opérations de caisse bancaire.",
        longDescription: "Ce projet a été réalisé dans le cadre d'un stage bancaire. Il inclut :\n• Gestion des comptes clients\n• Traçabilité des transactions\n• Génération de relevés bancaires\n• Système d'authentification sécurisé\n• Export de données vers Excel\n• Impression de reçus",
        image: "/src/assets/images/projet1.jpg",
        technologies: ["Python", "Tkinter", "SQLite", "ReportLab"],
        date: "2023",
        category: "desktop"
      },
      {
        id: 2,
        title: "Gestion de l'Église",
        description: "Application web développée en PHP pour la gestion administrative d'une église.",
        longDescription: "Fonctionnalités complètes :\n• Gestion des membres et familles\n• Suivi des dons et offrandes\n• Calendrier des événements religieux\n• Gestion des groupes de prière\n• Envoi de notifications par email\n• Rapports statistiques",
        image: "/src/assets/images/projet2.jpg",
        technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        date: "2024",
        category: "web"
      },
      {
        id: 3,
        title: "Gestion d'Employeurs",
        description: "Application web moderne avec React et Node.js pour la gestion complète des employés.",
        longDescription: "Solution complète RH :\n• Gestion des fiches de paie\n• Planning et gestion des horaires\n• Suivi des congés et absences\n• Évaluations de performance\n• Dashboard analytique\n• Export PDF des bulletins\n• Notifications automatiques\n• Gestion des documents",
        image: "/src/assets/images/projet3.jpg",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        date: "2025",
        category: "web"
      },
      {
        id: 4,
        title: "Gestion de Réservation Hôtelière",
        description: "Plateforme complète de réservation d'hôtels en ligne avec React et Node.js.",
        longDescription: "Fonctionnalités avancées :\n• Recherche et filtrage des chambres\n• Calendrier de disponibilité en temps réel\n• Paiement en ligne sécurisé\n• Gestion des utilisateurs et profils\n• Système d'avis et notations\n• Dashboard administrateur\n• Génération de factures\n• Newsletter automatique",
        image: "/src/assets/images/projet4.jpg",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Stripe"],
        date: "2025",
        category: "web"
      },
      {
        id: 5,
        title: "Plateforme Boutique en Ligne",
        description: "Projet de stage chez Spray Info. E-commerce complet avec React, Symfony et PostgreSQL.",
        longDescription: "Solution e-commerce professionnelle :\n• Catalogue produits dynamique\n• Panier d'achat et checkout\n• Paiement sécurisé\n• Gestion des stocks\n• Dashboard vendeur\n• Système de recommandations\n• Support multilingue\n• SEO optimisé\n• Interface responsive\n• Statistiques de vente",
        image: "/src/assets/images/projet5.png",
        technologies: ["React", "Symfony", "Tailwind CSS", "PostgreSQL", "API Platform"],
        date: "2025",
        category: "web",
        company: "Spray Info"
      },
      {
        id: 6,
        title: "Gestion d'Engagement - EDT",
        description: "Application mobile React Native pour la gestion des emplois du temps.",
        longDescription: "Application mobile complète :\n• Gestion des emplois du temps\n• Notifications push\n• Synchronisation cloud\n• Mode hors ligne\n• Export calendrier\n• Partage d'événements\n• Suivi des engagements\n• Statistiques personnelles\n• Interface intuitive",
        image: "/src/assets/images/projet6.jpg",
        technologies: ["React Native", "PostgreSQL", "Node.js", "Expo"],
        date: "2026",
        category: "mobile"
      },
      {
        id: 7,
        title: "Gestion Cartes Membres BAMAFI",
        description: "Application mobile pour l'association BAMAFI à Fianarantsoa.",
        longDescription: "Solution innovante pour l'association :\n• Scan QR code des cartes\n• Vérification en temps réel\n• Gestion des adhésions\n• Suivi des cotisations\n• Dashboard admin\n• Génération de rapports\n• Historique des vérifications\n• Export des données\n• Interface simple et rapide",
        image: "/src/assets/images/projet7.png",
        technologies: ["React Native", "Expo Go", "PostgreSQL", "Node.js"],
        date: "2026",
        category: "mobile",
        association: "BAMAFI"
      }
    ],
    en: [
      // Même structure en anglais
      {
        id: 1,
        title: "Bank Cash Management",
        description: "Desktop application in Python for bank cash management.",
        longDescription: "Features:\n• Customer account management\n• Transaction traceability\n• Bank statement generation\n• Secure authentication\n• Excel data export\n• Receipt printing",
        image: "/src/assets/images/projet1.jpg",
        technologies: ["Python", "Tkinter", "SQLite", "ReportLab"],
        date: "2023",
        category: "desktop"
      },
      {
        id: 2,
        title: "Church Management",
        description: "Web application in PHP for church management.",
        longDescription: "Features:\n• Member management\n• Donation tracking\n• Events calendar\n• Prayer groups\n• Email notifications\n• Statistical reports",
        image: "/src/assets/images/projet2.jpg",
        technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        date: "2024",
        category: "web"
      },
      {
        id: 3,
        title: "Employee Management",
        description: "Modern web app with React and Node.js for employee management.",
        longDescription: "HR solution:\n• Payroll management\n• Schedule planning\n• Leave tracking\n• Performance reviews\n• Analytics dashboard\n• PDF export\n• Notifications\n• Document management",
        image: "/src/assets/images/projet3.jpg",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        date: "2025",
        category: "web"
      },
      {
        id: 4,
        title: "Hotel Booking System",
        description: "Hotel booking platform with React and Node.js.",
        longDescription: "Features:\n• Room search\n• Real-time availability\n• Secure payment\n• User profiles\n• Reviews system\n• Admin dashboard\n• Invoice generation\n• Newsletter",
        image: "/src/assets/images/projet4.jpg",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Stripe"],
        date: "2025",
        category: "web"
      },
      {
        id: 5,
        title: "E-commerce Platform",
        description: "Internship project at Spray Info. Complete e-commerce platform.",
        longDescription: "E-commerce solution:\n• Product catalog\n• Shopping cart\n• Secure payment\n• Inventory management\n• Seller dashboard\n• Recommendations\n• Multilingual\n• SEO optimized\n• Responsive\n• Sales statistics",
        image: "/src/assets/images/projet5.png",
        technologies: ["React", "Symfony", "Tailwind CSS", "PostgreSQL", "API Platform"],
        date: "2025",
        category: "web"
      },
      {
        id: 6,
        title: "Schedule Management App",
        description: "Mobile app with React Native for schedule management.",
        longDescription: "Mobile app:\n• Schedule management\n• Push notifications\n• Cloud sync\n• Offline mode\n• Calendar export\n• Event sharing\n• Commitment tracking\n• Statistics\n• Intuitive interface",
        image: "/src/assets/images/projet6.jpg",
        technologies: ["React Native", "PostgreSQL", "Node.js", "Expo"],
        date: "2026",
        category: "mobile"
      },
      {
        id: 7,
        title: "BAMAFI Member Card Management",
        description: "Mobile app for BAMAFI association member card verification.",
        longDescription: "Solution:\n• QR code scanning\n• Real-time verification\n• Membership management\n• Dues tracking\n• Admin dashboard\n• Report generation\n• History tracking\n• Data export\n• Fast interface",
        image: "/src/assets/images/projet7.png",
        technologies: ["React Native", "Expo Go", "PostgreSQL", "Node.js"],
        date: "2026",
        category: "mobile"
      }
    ]
  }

  const projects = projectsData[language]
  const t = {
    title: language === 'fr' ? 'Mes Projets' : 'My Projects',
    filterAll: language === 'fr' ? 'Tous' : 'All',
    filterWeb: language === 'fr' ? 'Web' : 'Web',
    filterMobile: language === 'fr' ? 'Mobile' : 'Mobile',
    filterDesktop: language === 'fr' ? 'Desktop' : 'Desktop',
    technologies: language === 'fr' ? 'Technologies utilisées' : 'Technologies used',
    date: language === 'fr' ? 'Date' : 'Date',
    demoLink: language === 'fr' ? 'Voir la démo' : 'View demo',
    githubLink: language === 'fr' ? 'Code source' : 'Source code',
    close: language === 'fr' ? 'Fermer' : 'Close'
  }

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  // Fonction pour gérer l'erreur d'image
  const handleImageError = (e) => {
    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23333"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23fff" font-size="16"%3EImage non disponible%3C/text%3E%3C/svg%3E'
  }

  return (
    <section id="projects" className="py-20 min-h-screen">
      <div className="container-custom">
        <h2 className="section-title">{t.title}</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'web', 'mobile', 'desktop'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === cat
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {cat === 'all' && t.filterAll}
              {cat === 'web' && t.filterWeb}
              {cat === 'mobile' && t.filterMobile}
              {cat === 'desktop' && t.filterDesktop}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 bg-gray-300 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 dark:bg-white/70 text-white dark:text-black rounded-full text-sm">
                  {project.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="opacity-75 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <button className="text-sm font-semibold hover:opacity-70 transition">
                  {language === 'fr' ? 'En savoir plus →' : 'Learn more →'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setSelectedProject(null)}>
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-2xl hover:opacity-70 z-10 bg-white/20 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ✕
            </button>
            
            <div className="p-6 md:p-8">
              <div className="h-64 md:h-96 bg-gray-300 dark:bg-gray-800 rounded-xl mb-6 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">{selectedProject.date}</p>
              
              <div className="prose dark:prose-invert max-w-none mb-6">
                <p className="text-lg leading-relaxed whitespace-pre-line">{selectedProject.longDescription}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">{t.technologies}</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects