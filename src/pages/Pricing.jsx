import { NavLink } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import PulseWave from '../components/PulseWave.jsx'
import { pricing } from '../data/pricing.js'

export default function Pricing() {
  return (
    <>
      <section className="bg-clinic-mist/50 section-pad">
        <div className="container-clinic text-center max-w-2xl mx-auto">
          <span className="eyebrow mb-4">Narxlar</span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-clinic-ink mt-3 leading-tight">
            Shaffof va qulay narxlar
          </h1>
          <p className="text-clinic-muted mt-5 leading-relaxed">
            Barcha xizmatlarimiz narxi quyida keltirilgan. Narxlar mintaqa va aksiyalarga qarab
            o'zgarishi mumkin, aniq ma'lumot uchun qabulxonaga murojaat qiling.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-clinic max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="overflow-x-auto rounded-3xl border border-clinic-mist shadow-card">
              <table className="table w-full">
                <thead>
                  <tr className="bg-clinic-mist text-clinic-ink">
                    <th className="font-display text-sm py-4">Xizmat</th>
                    <th className="font-display text-sm py-4">Narx (so'm)</th>
                    <th className="font-display text-sm py-4">Davomiyligi</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((row) => (
                    <tr key={row.service} className="hover:bg-clinic-mist/40 transition-colors">
                      <td className="font-medium text-clinic-ink py-4">{row.service}</td>
                      <td className="text-primary font-semibold py-4">{row.price}</td>
                      <td className="text-clinic-muted py-4">{row.duration}</td>
                      <td className="py-4">
                        <NavLink to="/aloqa" className="btn-clinic-outline btn-xs">
                          Yozilish
                        </NavLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <PulseWave color="#4FB3D9" height={40} className="opacity-60" />

      <section className="section-pad bg-clinic-mist/40">
        <div className="container-clinic text-center">
          <SectionHeading
            eyebrow="Savolingiz bormi?"
            title="Narxlar haqida to'liq ma'lumot uchun bog'laning"
          />
          <NavLink to="/aloqa" className="btn-clinic-primary btn-lg mt-8 inline-flex">
            Biz bilan bog'lanish
          </NavLink>
        </div>
      </section>
    </>
  )
}
