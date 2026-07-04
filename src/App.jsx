import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import AboutDoctor from './pages/AboutDoctor.jsx'
import Services from './pages/Services.jsx'
import Pricing from './pages/Pricing.jsx'
import FAQ from './pages/FAQ.jsx'
import Contact from './pages/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shifokor-haqida" element={<AboutDoctor />} />
          <Route path="/xizmatlar" element={<Services />} />
          <Route path="/narxlar" element={<Pricing />} />
          <Route path="/savol-javob" element={<FAQ />} />
          <Route path="/aloqa" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
