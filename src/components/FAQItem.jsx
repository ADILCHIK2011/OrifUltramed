import { useState } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal.jsx'

export default function FAQItem({ item, delay = 0 }) {
  const [open, setOpen] = useState(false)

  return (
    <ScrollReveal delay={delay}>
      <div className="border border-clinic-mist rounded-2xl bg-white overflow-hidden">
        <button
          className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 md:px-6 md:py-5"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          <span className="font-display font-semibold text-clinic-ink">{item.q}</span>
          <HiOutlineChevronDown
            className={`shrink-0 text-primary text-xl transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </button>
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <p className="px-5 pb-5 md:px-6 md:pb-6 text-sm text-clinic-muted leading-relaxed">
              {item.a}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
