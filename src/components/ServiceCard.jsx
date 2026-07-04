import { HiOutlineClock, HiOutlineClipboardCheck, HiOutlineCheckCircle } from 'react-icons/hi'
import ServiceIcon from './ServiceIcon.jsx'
import ScrollReveal from './ScrollReveal.jsx'
import { NavLink } from 'react-router-dom'

export default function ServiceCard({ service, delay = 0, compact = false }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="card-clinic h-full flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-clinic-mist text-primary text-2xl">
            <ServiceIcon name={service.icon} />
          </span>
          <h3 className="font-display font-bold text-lg text-clinic-ink leading-snug">
            {service.title}
          </h3>
        </div>

        <p className="text-clinic-muted text-sm leading-relaxed mb-5">{service.description}</p>

        {!compact && (
          <div className="space-y-3 mb-5 text-sm">
            <div className="flex items-start gap-2 text-clinic-ink">
              <HiOutlineClock className="text-primary mt-0.5 shrink-0" />
              <span><span className="font-semibold">Davomiyligi:</span> {service.duration}</span>
            </div>
            <div className="flex items-start gap-2 text-clinic-ink">
              <HiOutlineClipboardCheck className="text-primary mt-0.5 shrink-0" />
              <span><span className="font-semibold">Tayyorgarlik:</span> {service.preparation}</span>
            </div>
          </div>
        )}

        {!compact && (
          <ul className="space-y-2 mb-6">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-clinic-muted">
                <HiOutlineCheckCircle className="text-accent mt-0.5 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        )}

        <NavLink
          to="/aloqa"
          className="mt-auto btn-clinic-outline btn-sm justify-center"
        >
          Shu xizmatga yozilish
        </NavLink>
      </div>
    </ScrollReveal>
  )
}
