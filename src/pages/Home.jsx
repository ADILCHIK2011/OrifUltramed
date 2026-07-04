import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineUserGroup,
  HiOutlineBadgeCheck,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
} from 'react-icons/hi'
import PulseWave from '../components/PulseWave.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import { services } from '../data/services.js'
import { testimonials } from '../data/testimonials.js'

const stats = [
  { value: '12+', label: 'yillik tajriba' },
  { value: '15 000+', label: 'muvaffaqiyatli tekshiruv' },
  { value: '20 daq', label: "o'rtacha kutish vaqti" },
  { value: '4.9 / 5', label: 'bemorlar bahosi' },
]

const whyUs = [
  {
    icon: HiOutlineBadgeCheck,
    title: 'Tajribali sonograf shifokor',
    text: "12 yildan ortiq amaliy tajribaga ega shifokor tomonidan shaxsan o'tkaziladigan tekshiruvlar.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Zamonaviy va aniq uskunalar',
    text: "Yuqori aniqlikdagi ultratovush skanerlari orqali eng kichik o'zgarishlarni ham aniqlaymiz.",
  },
  {
    icon: HiOutlineClock,
    title: 'Tez va qulay xizmat',
    text: "Navbatsiz qabul, shu kuniyoq tayyor natija va aniq belgilangan vaqt oralig'i.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Oilaviy va g'amxo'r muhit",
    text: "Har bir bemorga individual e'tibor, tushunarli izoh va samimiy munosabat.",
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-clinic-mist/70 via-white to-white">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-floaty" />
        <div className="pointer-events-none absolute top-40 -left-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-floaty" />

        <div className="container-clinic relative section-pad grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              Ishonchli tashxis markazi
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-clinic-ink mt-5"
            >
              Aniq va Ishonchli <span className="text-primary">Ultratovush</span> Diagnostikasi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-clinic-muted text-lg mt-6 max-w-xl leading-relaxed"
            >
              Homiladorlikdan tortib umumiy diagnostikagacha — oilangiz salomatligini
              tajribali shifokor nazorati ostida, zamonaviy uskunalarda, g'amxo'rlik bilan tekshiramiz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <NavLink to="/aloqa" className="btn-clinic-primary btn-lg">
                Qabulga yozilish
              </NavLink>
              <NavLink to="/xizmatlar" className="btn-clinic-outline btn-lg">
                Xizmatlarni ko'rish
              </NavLink>
            </motion.div>

            <div className="flex items-center gap-3 mt-8 text-sm text-clinic-muted">
              <HiOutlinePhone className="text-primary text-lg" />
              Tezkor savol uchun: <p className="font-semibold text-clinic-ink">+998 94 266 24 14</p>
            </div>
          </div>

          <ScrollReveal delay={0.15}>
            <div className="relative mx-auto max-w-md">
              <div className="relative rounded-[2.5rem] bg-white shadow-soft border border-clinic-mist p-8 overflow-hidden">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10" />
 
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                  Namunaviy tekshiruv natijasi
                </p>
                <p className="font-display font-bold text-clinic-ink text-xl mb-6">
                  Oshqozon osti bezi skanerlash
                </p>
 
                <div className="aspect-[4/3] rounded-2xl bg-clinic-mist flex items-center justify-center overflow-hidden">
                  <span className="text-clinic-muted text-xs text-center px-6">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwEL9kNhLsGtCXlkg9kE8Yu2sJ2po3E-XRozz73BklA&s=10" alt="" />
                  </span>
                </div>
 
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="rounded-2xl bg-clinic-mist p-4">
                    <p className="text-2xl font-display font-bold text-primary">22 mm</p>
                    <p className="text-xs text-clinic-muted">Bosh qismi (me'yorda)</p>
                  </div>
                  <div className="rounded-2xl bg-clinic-mist p-4">
                    <p className="text-2xl font-display font-bold text-primary">Bir xil</p>
                    <p className="text-xs text-clinic-muted">Struktura holati</p>
                  </div>
                </div>
 
                <div className="flex items-center gap-2 mt-5 text-sm">
                  <HiOutlineCheckCircle className="text-accent text-lg shrink-0" />
                  <span className="text-clinic-ink font-medium">Xulosa: patologik o'zgarishlar aniqlanmadi</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <PulseWave color="#4FB3D9" height={48} className="opacity-70" />
      </section>

      {/* STATS */}
      <section className="bg-primary">
        <div className="container-clinic grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-display font-extrabold text-3xl md:text-4xl text-white">{s.value}</p>
              <p className="text-white/70 text-sm mt-1">{s.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="section-pad">
        <div className="container-clinic grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="eyebrow mb-4">Klinikamiz haqida</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-clinic-ink mt-3 leading-tight">
              Sog'lig'ingiz uchun aniqlik va samimiylik bir joyda
            </h2>
            <p className="text-clinic-muted mt-5 leading-relaxed">
              Orif Ultramed klinikasida biz har bir bemorga individual yondashamiz.
              Tajribali sonograf shifokorimiz zamonaviy uskunalar yordamida sizga va oilangizga
              tez, aniq va tushunarli diagnostika xizmatini taqdim etadi. Bizning maqsadimiz —
              nafaqat tashxis qo'yish, balki har bir bemorni xotirjam va ishonch bilan uyiga qaytarish.
            </p>
            <NavLink to="/shifokor-haqida" className="btn-clinic-outline mt-6 inline-flex">
              Shifokorimiz bilan tanishing
            </NavLink>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="aspect-[4/3] rounded-[2rem] bg-clinic-mist border border-clinic-mist flex items-center justify-center overflow-hidden">
              <span className="text-clinic-muted text-sm px-8 text-center">
                <img src="https://i.postimg.cc/nrsXS5pL/91c53a73-9420-4c35-8c19-a73da117a20b.jpg" alt="" />
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section-pad bg-clinic-mist/40">
        <div className="container-clinic">
          <SectionHeading
            eyebrow="Xizmatlarimiz"
            title="Har bir yosh va ehtiyoj uchun tekshiruvlar"
            description="Homiladorlikdan umumiy diagnostikagacha — barcha asosiy ultratovush xizmatlari bir joyda."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.id} service={s} delay={i * 0.08} compact />
            ))}
          </div>
          <div className="text-center mt-10">
            <NavLink to="/xizmatlar" className="btn-clinic-primary btn-lg">
              Barcha xizmatlarni ko'rish
            </NavLink>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-pad">
        <div className="container-clinic">
          <SectionHeading
            eyebrow="Nima uchun bizni tanlashadi"
            title="Bemorlar bizga nima uchun ishonishadi"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="card-clinic h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-clinic-mist text-primary text-2xl mb-4">
                    <item.icon />
                  </span>
                  <h3 className="font-display font-bold text-clinic-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-clinic-muted leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-clinic-mist/40">
        <div className="container-clinic">
          <SectionHeading
            eyebrow="Bemorlar fikri"
            title="Mijozlarimiz biz haqimizda nima deyishadi"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} item={t} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT PREVIEW / CTA */}
      <section className="section-pad">
        <div className="container-clinic">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-14 md:px-16 md:py-16 text-center">
              <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10" />
              <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10" />
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white relative">
                Bugun qabulga yoziling
              </h2>
              <p className="text-white/80 mt-4 max-w-xl mx-auto relative">
                Savolingiz bormi yoki tekshiruv vaqtini belgilashni xohlaysizmi? Bizga qo'ng'iroq qiling
                yoki onlayn shakl orqali murojaat qoldiring — tez orada bog'lanamiz.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-8 relative">
                <NavLink to="/aloqa" className="btn bg-white text-primary hover:bg-clinic-mist border-none rounded-full px-8">
                  Qabulga yozilish
                </NavLink>
                <p className="btn btn-outline text-white border-white hover:bg-white hover:text-primary rounded-full px-8">
                  <HiOutlinePhone /> +998 94 266 24 14
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 mt-6 text-white/70 text-sm relative">
                <HiOutlineLocationMarker />
                Namangan shahar, 5-Poliklinika oldida
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
