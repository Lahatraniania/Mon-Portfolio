import { useState, useEffect } from 'react'

const Footer = () => {
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
      contact: 'Contact',
      email: 'Email',
      phone: 'Téléphone',
      location: 'Localisation',
      rights: 'Tous droits réservés',
      followMe: 'Suivez-moi'
    },
    en: {
      contact: 'Contact',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      rights: 'All rights reserved',
      followMe: 'Follow me'
    }
  }

  const t = translations[language]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Lahatra</h3>
            <p className="opacity-75">
              Full Stack Developer
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">{t.contact}</h3>
            <div className="space-y-2 opacity-75">
              <p>📧 lahatranandra@gmail.com</p>
              <p>📱 +261 34 43 669 43</p>
              <p>📍 Antananarivo, Madagascar</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">{t.followMe}</h3>
            <div className="flex justify-center md:justify-end gap-4">
              <a href="https://www.facebook.com/lahatraniaina.iarvun" className="hover:opacity-70 transition">Facebook</a>
              <a href="https://www.linkedin.com/in/lahatra-randriamitantsoa-b354023b9/" className="hover:opacity-70 transition">LinkedIn</a>
              <a href="https://wa.me/+261341366943" className="hover:opacity-70 transition">WhatsApp</a>
              <a href="https://www.facebook.com/lahatraniaina.iarvun" className="hover:opacity-70 transition">GitHub</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center opacity-75">
          <p>&copy; 2026 Lahatra. {t.rights}</p>
          <button
            onClick={scrollToTop}
            className="mt-4 text-sm hover:opacity-70 transition"
          >
            ↑ Retour en haut
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer