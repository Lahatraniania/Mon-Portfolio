import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

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
    fr: {
      title: 'Me contacter',
      name: 'Nom complet',
      email: 'Adresse email',
      message: 'Message',
      send: 'Envoyer le message',
      sending: 'Envoi en cours...',
      success: 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.',
      error: 'Erreur lors de l\'envoi. Veuillez réessayer.',
      placeholderName: 'Votre nom',
      placeholderEmail: 'votre@email.com',
      placeholderMessage: 'Votre message...'
    },
    en: {
      title: 'Contact me',
      name: 'Full name',
      email: 'Email address',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending...',
      success: 'Message sent successfully! I will get back to you soon.',
      error: 'Error sending message. Please try again.',
      placeholderName: 'Your name',
      placeholderEmail: 'your@email.com',
      placeholderMessage: 'Your message...'
    }
  }

  const t = translations[language]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: '', message: '' })

    // Configuration EmailJS - Remplace par tes vraies clés
    const serviceId = 'service_emz5z4g'  // À remplacer
    const templateId = 'template_a15leia' // À remplacer
    const publicKey = 'BJORW7adZqcDAyd-p'   // À remplacer

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Lahatra',
      reply_to: formData.email
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      setStatus({ type: 'success', message: t.success })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Erreur:', error)
      setStatus({ type: 'error', message: t.error })
    } finally {
      setIsLoading(false)
      setTimeout(() => setStatus({ type: '', message: '' }), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <h2 className="section-title">{t.title}</h2>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">{t.name}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
                placeholder={t.placeholderName}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.email}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
                placeholder={t.placeholderEmail}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.message}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition resize-none"
                placeholder={t.placeholderMessage}
              ></textarea>
            </div>

            {status.message && (
              <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? t.sending : t.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact