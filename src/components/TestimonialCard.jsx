import { HiStar } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal.jsx'

export default function TestimonialCard({ item, delay = 0 }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="card-clinic h-full">
        <div className="flex gap-1 text-accent mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <HiStar key={i} />
          ))}
        </div>
        <p className="text-clinic-ink leading-relaxed mb-6">"{item.quote}"</p>
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-clinic-mist text-primary font-display font-bold">
            {item.name.charAt(0)}
          </span>
          <div>
            <p className="font-semibold text-sm text-clinic-ink">{item.name}</p>
            <p className="text-xs text-clinic-muted">{item.role}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
