import { useState, useEffect } from 'react'

// Import des images
import projet1 from '../assets/images/projet1.png'
import projet2 from '../assets/images/projet2.png'
import projet3 from '../assets/images/projet3.png'
import projet4 from '../assets/images/projet4.png'
import projet5 from '../assets/images/projet5.png'
import projet7 from '../assets/images/projet7.png'
import projet8 from '../assets/images/projet8.png'
import projet9 from '../assets/images/projet9.png'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('all')

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'fr'
  })

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
        id: 9,
        title: "Reservation_HOTEL - Plateforme de Réservation avec IA",
        description: "Plateforme complète de réservation d'hôtels à Madagascar avec intelligence artificielle intégrée. Django REST Framework, React, PostgreSQL, Stripe et Gemini AI.",
        longDescription: `Plateforme innovante de réservation d'hôtels avec intelligence artificielle.

GESTION COMPLÈTE
• Système multi-rôles (Client, Propriétaire, Administrateur)
• Gestion des hôtels et chambres avec photos
• Réservations en temps réel avec disponibilité dynamique
• Notifications instantanées pour tous les utilisateurs

PAIEMENT SÉCURISÉ
• Intégration Stripe Checkout
• Conversion automatique MGA / USD
• Commission automatique de 1% reversée à l'administrateur
• Webhooks Stripe pour la confirmation des paiements

INTELLIGENCE ARTIFICIELLE (GEMINI)
• Agent conversationnel "Ravorona" bilingue (Français / Malgache)
• Recommandations personnalisées basées sur les préférences et l'historique
• Génération automatique de contenu (descriptions d'hôtels, chambres)
• Traduction intelligente français / malgache
• Suggestion de prix optimal basée sur la concurrence
• Chatbot multi-actions : recherche, comparaison, support

TABLEAUX DE BORD
• Dashboard propriétaire : gestion hôtels, chambres, réservations, revenus nets
• Dashboard admin : validation demandes, commissions, statistiques
• Espace client : profil, réservations, paiements

SÉCURITÉ
• Authentification JWT avec rôles
• Protection des données personnelles
• Conversations IA privées par utilisateur
• Gestion des permissions par rôle

FONCTIONNALITÉS AVANCÉES
• Agent IA multi-conversations
• Filtrage par ville, type, prix
• Système de favoris
• Upload multiple d'images
• Interface responsive et moderne
• Design élégant avec TailwindCSS`,
        image: projet9,
        technologies: ["Django", "React", "PostgreSQL", "Tailwind CSS", "Stripe", "Gemini AI", "JWT", "Python"],
        date: "2026",
        category: "web",
        githubLink: "https://github.com/Lahatraniania/Reservation_HOTEL"
      },
      {
        id: 5,
        title: "Plateforme Boutique en Ligne",
        description: "Projet de stage chez Spray Info. E-commerce complet avec React, Symfony et PostgreSQL.",
        longDescription: `Solution e-commerce professionnelle.

CATALOGUE
• Produits dynamiques avec images multiples
• Catégories et sous-catégories
• Recherche avancée avec filtres

ACHAT
• Panier d'achat persistant
• Checkout sécurisé
• Paiement en ligne intégré
• Historique des commandes

GESTION
• Stocks en temps réel
• Dashboard vendeur complet
• Statistiques de vente
• Système de recommandations

TECHNIQUE
• Support multilingue
• SEO optimisé
• Interface responsive
• API REST`,
        image: projet5,
        technologies: ["React", "Symfony", "Tailwind CSS", "PostgreSQL", "API Platform"],
        date: "2025",
        category: "web",
        company: "Spray Info",
        githubLink: "https://github.com/Lahatraniania"
      },
      {
        id: 1,
        title: "Gestion de caisse bancaire",
        description: "Application desktop développée en Python pour la gestion complète des opérations de caisse bancaire.",
        longDescription: `Application desktop pour la gestion bancaire.

FONCTIONNALITÉS
• Gestion complète des comptes clients
• Traçabilité de toutes les transactions
• Génération automatique de relevés bancaires
• Système d'authentification sécurisé
• Export de données vers Excel
• Impression de reçus personnalisés

SÉCURITÉ
• Mots de passe cryptés
• Journalisation des actions
• Sauvegarde automatique
• Contrôle d'accès par rôle`,
        image: projet1,
        technologies: ["Python", "Tkinter", "SQLite", "ReportLab"],
        date: "2023",
        category: "desktop",
        githubLink: "https://github.com/Lahatraniania"
      },
      {
        id: 2,
        title: "Gestion de l'Église",
        description: "Application web développée en PHP pour la gestion administrative d'une église.",
        longDescription: `Application web pour la gestion d'église.

GESTION DES MEMBRES
• Fiches complètes des membres et familles
• Suivi des dons et offrandes
• Catégorisation par groupes

ORGANISATION
• Calendrier des événements religieux
• Gestion des groupes de prière
• Système de notifications par email

RAPPORTS
• Rapports statistiques détaillés
• Export des données
• Graphiques de tendance`,
        image: projet2,
        technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        date: "2024",
        category: "web",
        githubLink: "https://github.com/Lahatraniania"
      },
      {
        id: 3,
        title: "Gestion d'Employeurs",
        description: "Application web moderne avec React et Node.js pour la gestion complète des employés.",
        longDescription: `Solution complète de gestion RH.

RESSOURCES HUMAINES
• Gestion des fiches de paie
• Planning et gestion des horaires
• Suivi des congés et absences

PERFORMANCE
• Évaluations de performance
• Dashboard analytique
• Objectifs et KPI

DOCUMENTATION
• Export PDF des bulletins
• Notifications automatiques
• Gestion électronique des documents
• Archivage sécurisé`,
        image: projet3,
        technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        date: "2025",
        category: "web",
        githubLink: "https://github.com/Lahatraniania"
      },
      {
        id: 4,
        title: "Gestion de Réservation Hôtelière",
        description: "Plateforme complète de réservation d'hôtels en ligne avec React et Node.js.",
        longDescription: `Plateforme de réservation hôtelière.

RECHERCHE
• Recherche avancée par ville et dates
• Filtrage par type, prix, équipements
• Tri par popularité et note

RÉSERVATION
• Calendrier de disponibilité en temps réel
• Paiement en ligne sécurisé
• Confirmation instantanée
• Gestion des utilisateurs et profils

ADMINISTRATION
• Système d'avis et notations
• Dashboard administrateur
• Génération de factures
• Newsletter automatique`,
        image: projet4,
        technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Stripe"],
        date: "2025",
        category: "web",
        githubLink: "https://github.com/Lahatraniania"
      },
      {
        id: 7,
        title: "Gestion Cartes Membres BAMAFI",
        description: "Application mobile pour l'association BAMAFI à Fianarantsoa.",
        longDescription: `Solution mobile pour la gestion des membres.

VÉRIFICATION
• Scan du QR code des cartes
• Vérification en temps réel
• Authentification sécurisée

ADHÉSIONS
• Gestion complète des adhésions
• Suivi des cotisations
• Renouvellement automatique

ADMINISTRATION
• Dashboard administrateur
• Génération de rapports
• Historique complet des vérifications
• Export des données
• Interface rapide et intuitive`,
        image: projet7,
        technologies: ["React Native", "Expo Go", "PostgreSQL", "Node.js"],
        date: "2026",
        category: "mobile",
        association: "BAMAFI",
        githubLink: "https://github.com/Lahatraniania"
      },
      {
        id: 8,
        title: "Gestion des Enseignants - Android",
        description: "Application mobile Android pour la gestion complète des enseignants avec CRUD, statistiques et visualisation graphique.",
        longDescription: `Application mobile Android pour la gestion des enseignants.

GESTION DES ENSEIGNANTS
• Ajouter, modifier, supprimer des enseignants
• Informations : numéro, nom, heures, taux horaire
• Interface intuitive et rapide

CALCULS AUTOMATIQUES
• Salaire = heures × taux horaire
• Affichage en temps réel dans la liste
• Mise à jour instantanée

STATISTIQUES
• Salaire minimal, maximal et total
• Calcul automatique à chaque modification
• Affichage en bas du tableau

VISUALISATION
• Diagramme circulaire (camembert)
• Histogramme comparatif
• Répartition des salaires

TECHNIQUE
• Base de données SQLite locale
• Bibliothèque MPAndroidChart
• Application native Java`,
        image: projet8,
        technologies: ["Android Studio", "Java", "SQLite", "MPAndroidChart", "XML"],
        date: "2026",
        category: "mobile",
        githubLink: "https://github.com/Lahatraniania"
      }
    ],
    en: [
      {
        id: 9,
        title: "Reservation_HOTEL - Booking Platform with AI",
        description: "Complete hotel booking platform in Madagascar with integrated artificial intelligence. Django REST Framework, React, PostgreSQL, Stripe and Gemini AI.",
        longDescription: `Innovative hotel booking platform with artificial intelligence.

COMPLETE MANAGEMENT
• Multi-role system (Client, Owner, Administrator)
• Hotel and room management with photos
• Real-time reservations with dynamic availability
• Instant notifications for all users

SECURE PAYMENT
• Stripe Checkout integration
• Automatic MGA / USD conversion
• Automatic 1% commission to administrator
• Stripe webhooks for payment confirmation

ARTIFICIAL INTELLIGENCE (GEMINI)
• Conversational agent "Ravorona" bilingual (French / Malagasy)
• Personalized recommendations based on preferences and history
• Automatic content generation (hotel/room descriptions)
• Intelligent translation French / Malagasy
• Optimal price suggestion based on competition
• Multi-action chatbot: search, comparison, support

DASHBOARDS
• Owner dashboard: hotels, rooms, reservations, net revenue
• Admin dashboard: request validation, commissions, statistics
• Client area: profile, reservations, payments

SECURITY
• JWT authentication with roles
• Personal data protection
• Private AI conversations per user
• Role-based permissions

ADVANCED FEATURES
• Multi-conversation AI agent
• Filtering by city, type, price
• Favorites system
• Multiple image upload
• Responsive and modern interface
• Elegant design with TailwindCSS`,
        image: projet9,
        technologies: ["Django", "React", "PostgreSQL", "Tailwind CSS", "Stripe", "Gemini AI", "JWT", "Python"],
        date: "2026",
        category: "web",
        githubLink: "https://github.com/Lahatraniania/Reservation_HOTEL"
      },
      {
        id: 5,
        title: "E-commerce Platform",
        description: "Internship project at Spray Info. Complete e-commerce platform with React, Symfony and PostgreSQL.",
        longDescription: `Professional e-commerce solution.

CATALOG
• Dynamic products with multiple images
• Categories and subcategories
• Advanced search with filters

PURCHASE
• Persistent shopping cart
• Secure checkout
• Integrated online payment
• Order history

MANAGEMENT
• Real-time inventory
• Complete seller dashboard
• Sales statistics
• Recommendation system

TECHNICAL
• Multilingual support
• SEO optimized
• Responsive interface
• REST API`,
        image: projet5,
        technologies: ["React", "Symfony", "Tailwind CSS", "PostgreSQL", "API Platform"],
        date: "2025",
        category: "web",
        company: "Spray Info",
        githubLink: "https://github.com/Lahatraniania"
      },
      {
        id: 1,
        title: "Bank Cash Management",
        description: "Desktop application in Python for complete bank cash management.",
        longDescription: `Desktop application for banking management.

FEATURES
• Complete customer account management
• Traceability of all transactions
• Automatic bank statement generation
• Secure authentication system
• Excel data export
• Custom receipt printing

SECURITY
• Encrypted passwords
• Action logging
• Automatic backup
• Role-based access control`,
        image: projet1,
        technologies: ["Python", "Tkinter", "SQLite", "ReportLab"],
        date: "2023",
        category: "desktop",
        githubLink: "https://github.com/Lahatraniania"
      },
      {
        id: 2,
        title: "Church Management",
        description: "Web application in PHP for church administrative management.",
        longDescription: `Web application for church management.

MEMBER MANAGEMENT
• Complete member and family records
• Donation and offering tracking
• Group categorization

ORGANIZATION
• Religious events calendar
• Prayer groups management
• Email notification system

REPORTS
• Detailed statistical reports
• Data export
• Trend charts`,
        image: projet2,
        technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        date: "2024",
        category: "web",
        githubLink: "https://github.com/Lahatraniania"
      },
      {
        id: 3,
        title: "Employee Management",
        description: "Modern web app with React and Node.js for complete employee management.",
        longDescription: `Complete HR management solution.

HUMAN RESOURCES
• Payroll management
• Schedule planning
• Leave and absence tracking

PERFORMANCE
• Performance reviews
• Analytics dashboard
• Objectives and KPIs

DOCUMENTATION
• PDF export of payslips
• Automatic notifications
• Electronic document management
• Secure archiving`,
        image: projet3,
        technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        date: "2025",
        category: "web",
        githubLink: "https://github.com/Lahatraniania"
      },
      {
        id: 4,
        title: "Hotel Booking System",
        description: "Complete online hotel booking platform with React and Node.js.",
        longDescription: `Hotel booking platform.

SEARCH
• Advanced search by city and dates
• Filter by type, price, amenities
• Sort by popularity and rating

BOOKING
• Real-time availability calendar
• Secure online payment
• Instant confirmation
• User profile management

ADMINISTRATION
• Review and rating system
• Administrator dashboard
• Invoice generation
• Automatic newsletter`,
        image: projet4,
        technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Stripe"],
        date: "2025",
        category: "web",
        githubLink: "https://github.com/Lahatraniania"
      },
      {
        id: 7,
        title: "BAMAFI Member Card Management",
        description: "Mobile app for BAMAFI association in Fianarantsoa.",
        longDescription: `Mobile solution for member management.

VERIFICATION
• QR code scanning
• Real-time verification
• Secure authentication

MEMBERSHIPS
• Complete membership management
• Dues tracking
• Automatic renewal

ADMINISTRATION
• Administrator dashboard
• Report generation
• Complete verification history
• Data export
• Fast and intuitive interface`,
        image: projet7,
        technologies: ["React Native", "Expo Go", "PostgreSQL", "Node.js"],
        date: "2026",
        category: "mobile",
        association: "BAMAFI",
        githubLink: "https://github.com/Lahatraniania"
      },
      {
        id: 8,
        title: "Teacher Management - Android",
        description: "Android mobile app for complete teacher management with CRUD, statistics and graphical visualization.",
        longDescription: `Android mobile app for teacher management.

TEACHER MANAGEMENT
• Add, edit, delete teachers
• Information: ID, name, hours, hourly rate
• Intuitive and fast interface

AUTOMATIC CALCULATIONS
• Salary = hours × hourly rate
• Real-time display in the list
• Instant update

STATISTICS
• Minimum, maximum and total salary
• Automatic calculation on every modification
• Display at the bottom of the table

VISUALIZATION
• Pie chart
• Comparative histogram
• Salary distribution

TECHNICAL
• Local SQLite database
• MPAndroidChart library
• Native Java application`,
        image: projet8,
        technologies: ["Android Studio", "Java", "SQLite", "MPAndroidChart", "XML"],
        date: "2026",
        category: "mobile",
        githubLink: "https://github.com/Lahatraniania"
      }
    ]
  }

  const projects = projectsData[language]
  const t = {
    title: language === 'fr' ? 'Mes Projets' : 'My Projects',
    filterAll: language === 'fr' ? 'Tous' : 'All',
    filterWeb: 'Web',
    filterMobile: 'Mobile',
    filterDesktop: 'Desktop',
    technologies: language === 'fr' ? 'Technologies utilisées' : 'Technologies used',
    githubLink: language === 'fr' ? 'Code source' : 'Source code',
    learnMore: language === 'fr' ? 'En savoir plus' : 'Learn more',
  }

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  const handleImageError = (e) => {
    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23222"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23fff" font-size="14" font-family="sans-serif"%3EIMAGE%3C/text%3E%3C/svg%3E'
  }

  return (
    <section id="projects" className="py-20 min-h-screen bg-white dark:bg-black">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black dark:text-white tracking-tight">
          {t.title}
        </h2>
        <div className="w-16 h-px bg-black dark:bg-white mx-auto mb-16"></div>

        {/* FILTRES */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {['all', 'web', 'mobile', 'desktop'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 border ${filter === cat
                  ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white'
                  : 'bg-transparent text-black dark:text-white border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white'
                }`}
            >
              {cat === 'all' && t.filterAll}
              {cat === 'web' && t.filterWeb}
              {cat === 'mobile' && t.filterMobile}
              {cat === 'desktop' && t.filterDesktop}
            </button>
          ))}
        </div>

        {/* GRILLE PROJETS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-black border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-500 hover:border-black dark:hover:border-white flex flex-col"
            >
              {/* IMAGE */}
              <div
                className="relative h-48 bg-gray-100 dark:bg-gray-900 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={handleImageError}
                />
                <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium tracking-wider bg-black text-white dark:bg-white dark:text-black">
                  {project.date}
                </div>
              </div>

              {/* CONTENU */}
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="text-lg font-bold mb-3 text-black dark:text-white line-clamp-2 leading-tight cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* ✅ ACTIONS EN BAS : En savoir plus + Code source */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-medium tracking-wider uppercase text-black dark:text-white hover:opacity-60 transition-opacity"
                  >
                    {t.learnMore} →
                  </button>

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-black dark:text-white hover:opacity-60 transition-opacity"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>{t.githubLink}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL PROJET */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-black border border-gray-200 dark:border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* BOUTON FERMER */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-lg z-10 w-9 h-9 flex items-center justify-center border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            >
              ✕
            </button>

            <div className="p-6 md:p-10">
              {/* IMAGE */}
              <div className="h-64 md:h-80 bg-gray-100 dark:bg-gray-900 overflow-hidden mb-8 border border-gray-200 dark:border-gray-800">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </div>

              {/* TITRE */}
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-black dark:text-white leading-tight">
                {selectedProject.title}
              </h3>
              <div className="text-xs tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-8">
                {selectedProject.date}
              </div>

              {/* DESCRIPTION */}
              <div className="mb-8">
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* TECHNOLOGIES */}
              <div className="mb-10 pt-6 border-t border-gray-200 dark:border-gray-800">
                <h4 className="text-xs tracking-widest uppercase font-bold mb-4 text-black dark:text-white">
                  {t.technologies}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* BOUTON GITHUB CENTRÉ */}
              {selectedProject.githubLink && (
                <div className="flex justify-center pt-4">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black text-sm font-medium tracking-wider uppercase hover:opacity-80 transition-opacity"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>{t.githubLink}</span>
                    <span>→</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects