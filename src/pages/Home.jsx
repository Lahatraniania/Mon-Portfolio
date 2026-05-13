import { useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../pages/Projects'  // ← Ajouter
import Contact from '../components/Contact'

const Home = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />  {/* ← Ajouter */}
      <Contact />
    </div>
  )
}

export default Home