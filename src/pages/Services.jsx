import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import PulseWave from '../components/PulseWave.jsx'
import { services } from '../data/services.js'
import { NavLink } from 'react-router-dom'

export default function Services() {
  return (
    <>
      <section className="bg-clinic-mist/50 section-pad">
        <div className="container-clinic text-center max-w-2xl mx-auto">
          <span className="eyebrow mb-4">Xizmatlarimiz</span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-clinic-ink mt-3 leading-tight">
            Har bir ehtiyoj uchun ultratovush tekshiruvlari
          </h1>
          <p className="text-clinic-muted mt-5 leading-relaxed">
            Quyida barcha xizmatlarimiz haqida batafsil ma'lumot, davomiyligi, tayyorgarlik
            talablari va foydalari bilan tanishing.
          </p>
        </div>
        <PulseWave color="#4FB3D9" height={40} className="opacity-60 mt-10" />
      </section>

      <section className="section-pad">
        <div className="container-clinic grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={i * 0.06} />
          ))}
        </div>
      </section>

      <section className="section-pad bg-clinic-mist/40">
        <div className="container-clinic text-center">
          <SectionHeading
            eyebrow="Aniq narx bilmoqchimisiz?"
            title="Barcha xizmatlar narxi bilan tanishing"
          />
          <NavLink to="/narxlar" className="btn-clinic-primary btn-lg mt-8 inline-flex">
            Narxlar sahifasiga o'tish
          </NavLink>
        </div>
      </section>
    </>
  )
}
