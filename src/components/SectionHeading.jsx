import ScrollReveal from './ScrollReveal.jsx'

export default function SectionHeading({ eyebrow, title, description, center = true }) {
  return (
    <ScrollReveal className={center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2 className="font-display font-bold text-3xl md:text-4xl text-clinic-ink mt-3 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-clinic-muted mt-4 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </ScrollReveal>
  )
}
