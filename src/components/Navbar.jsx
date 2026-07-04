import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineMenu, HiOutlineX, HiOutlinePhone } from 'react-icons/hi'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Bosh sahifa' },
  { to: '/shifokor-haqida', label: 'Shifokor haqida' },
  { to: '/xizmatlar', label: 'Xizmatlar' },
  { to: '/narxlar', label: 'Narxlar' },
  { to: '/savol-javob', label: 'Savol-javob' },
  { to: '/aloqa', label: 'Aloqa' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur shadow-card' : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <nav className="container-clinic flex items-center justify-between h-20">
        <NavLink to="/" className="flex items-center gap-2.5 group">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-white font-display font-bold shadow-soft">
            OU
            <span className="absolute inset-0 rounded-2xl border-2 border-secondary animate-ripple" />
          </span>
          <span className="font-display font-bold uppercase text-lg text-clinic-ink">
            Orif <span className="text-primary">Ultramed</span>
          </span>
        </NavLink>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-clinic-mist text-primary'
                      : 'text-clinic-muted hover:text-primary hover:bg-clinic-mist'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <p className="flex items-center gap-2 text-sm font-semibold text-clinic-ink">
            <HiOutlinePhone className="text-primary text-lg" />
            +998 94 266 24 14
          </p>
          <NavLink to="/aloqa" className="btn-clinic-primary btn-sm h-11">
            Qabulga yozilish
          </NavLink>
        </div>

        <button
          className="lg:hidden p-2 text-clinic-ink"
          aria-label={open ? 'Menyuni yopish' : 'Menyuni ochish'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiOutlineX size={26} /> : <HiOutlineMenu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-clinic-mist"
          >
            <ul className="container-clinic flex flex-col py-4 gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-base font-semibold ${
                        isActive ? 'bg-clinic-mist text-primary' : 'text-clinic-ink'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <NavLink to="/aloqa" onClick={() => setOpen(false)} className="btn-clinic-primary w-full">
                  Qabulga yozilish
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
