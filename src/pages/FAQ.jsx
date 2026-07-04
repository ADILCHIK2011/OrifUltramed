import { NavLink } from 'react-router-dom'
import FAQItem from '../components/FAQItem.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { faqs } from '../data/faqs.js'

export default function FAQ() {
  return (
    <>
      <section className="bg-clinic-mist/50 section-pad">
        <div className="container-clinic text-center max-w-2xl mx-auto">
          <span className="eyebrow mb-4">Savol-javob</span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-clinic-ink mt-3 leading-tight">
            Ko'p beriladigan savollar
          </h1>
          <p className="text-clinic-muted mt-5 leading-relaxed">
            Bemorlarimiz tez-tez so'raydigan savollarga javoblarni shu yerda toping.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-clinic max-w-3xl mx-auto space-y-4">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} item={item} delay={i * 0.04} />
          ))}
        </div>
      </section>

      <section className="section-pad bg-clinic-mist/40">
        <div className="container-clinic text-center">
          <SectionHeading
            eyebrow="Javobingizni topmadingizmi?"
            title="Savolingizni bevosita bizga bering"
          />
          <NavLink to="/aloqa" className="btn-clinic-primary btn-lg mt-8 inline-flex">
            Bog'lanish
          </NavLink>
        </div>
      </section>
    </>
  )
}
