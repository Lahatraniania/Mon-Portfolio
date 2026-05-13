import { ThemeProvider } from './contexts/ThemeProvider'  // ← Changé
import Home from './pages/Home'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Home />
      <Footer />
    </ThemeProvider>
  )
}

export default App