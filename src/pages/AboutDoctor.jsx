import { HiOutlineAcademicCap, HiOutlineBadgeCheck, HiOutlineSparkles } from 'react-icons/hi'
import ScrollReveal from '../components/ScrollReveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import PulseWave from '../components/PulseWave.jsx'

const specializations = [
  'Homiladorlik va akusherlik ultratovushi',
  "Qorin bo'shlig'i organlari diagnostikasi",
  'Doppler va qon tomir tekshiruvlari',
  'Qalqonsimon bez va endokrin diagnostika',
]

const certifications = [
  { title: 'Andijon Davlat Tibbiyot Instituti'}
]

export default function AboutDoctor() {
  return (
    <>
      <section className="relative overflow-hidden bg-clinic-mist/50 section-pad">
        <div className="container-clinic grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="eyebrow mb-4">Shifokorimiz bilan tanishing</span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-clinic-ink mt-3 leading-tight">
              Dr. Mirzaahmedov Orifjon
            </h1>
            <p className="text-primary font-semibold mt-2">Ultratovush diagnostikasi shifokori (sonograf)</p>
            <p className="text-clinic-muted mt-5 leading-relaxed">
              12 yildan ortiq amaliy tajribaga ega shifokor sifatida, minglab bemorlarga aniq
              tashxis qo'yish va sog'lom qarorlar qabul qilishda yordam berganman. Har bir bemorimga
              o'z oilamning a'zosidek g'amxo'rlik va e'tibor bilan yondashaman.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <p className="font-display font-extrabold text-2xl text-primary">12+</p>
                <p className="text-xs text-clinic-muted mt-1">yillik tajriba</p>
              </div>
              <div className="text-center">
                <p className="font-display font-extrabold text-2xl text-primary">15 000+</p>
                <p className="text-xs text-clinic-muted mt-1">tekshiruv</p>
              </div>
              <div className="text-center">
                <p className="font-display font-extrabold text-2xl text-primary">4.9</p>
                <p className="text-xs text-clinic-muted mt-1">bemorlar bahosi</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="relative mx-auto max-w-sm">
              <div className="aspect-[4/5] rounded-[2.5rem] bg-white border border-clinic-mist shadow-soft flex items-center justify-center overflow-hidden">
                <span className="text-clinic-muted text-sm text-center px-8">
                  [ Shifokor profil surati uchun joy ]
                </span>
              </div>
              <span className="absolute -bottom-5 -left-5 h-16 w-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-soft">
                <HiOutlineBadgeCheck size={28} />
              </span>
            </div>
          </ScrollReveal>
        </div>
        <PulseWave color="#4FB3D9" height={40} className="opacity-60 mt-12" />
      </section>

      {/* BIO */}
      <section className="section-pad">
        <div className="container-clinic max-w-3xl mx-auto">
          <SectionHeading eyebrow="Professional biografiya" title="Kasbiy yo'l va yondashuv" center={false} />
          <div className="mt-6 space-y-4 text-clinic-muted leading-relaxed">
            <p>
              Men tibbiyot sohasida faoliyatimni Andijon Davlat Tibbiyot Instituti
              bitirgandan so'ng boshlaganman. O'z faoliyatim davomida ultratovush diagnostikasi
              yo'nalishida chuqur ixtisoslashib, mintaqadagi yetakchi tibbiyot muassasalarida tajriba
              orttirdim.
            </p>
            <p>
              Har bir tekshiruvga individual va e'tiborli yondashuv — bu shifokorning asosiy tamoyili.
              Men bemorlarga faqat tashxis qo'yib qolmay, natijalarni tushunarli tilda izohlayman va
              keyingi qadamlar bo'yicha aniq tavsiyalar beraman.
            </p>
            <p>
              Muntazam ravishda malaka oshirish kurslari va xalqaro seminarlarda ishtirok etib,
              zamonaviy diagnostika usullarini o'z amaliyotiga tatbiq etib boraman.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIALIZATIONS */}
      <section className="section-pad bg-clinic-mist/40">
        <div className="container-clinic">
          <SectionHeading eyebrow="Ixtisoslashuv" title="Qaysi sohalarda tekshiruv o'tkazadi" />
          <div className="grid sm:grid-cols-2 gap-5 mt-10 max-w-3xl mx-auto">
            {specializations.map((s, i) => (
              <ScrollReveal key={s} delay={i * 0.08}>
                <div className="flex items-center gap-3 bg-white rounded-2xl border border-clinic-mist px-5 py-4 shadow-card">
                  <HiOutlineSparkles className="text-primary text-xl shrink-0" />
                  <span className="text-clinic-ink font-medium text-sm">{s}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section-pad">
        <div className="container-clinic">
          <SectionHeading title="Ta'lim" />
          <div
            className={`grid gap-6 mt-10 ${
              certifications.length === 1
                ? 'max-w-sm mx-auto'
                : certifications.length === 2
                ? 'sm:grid-cols-2 max-w-2xl mx-auto'
                : 'sm:grid-cols-3'
            }`}
          >
            {certifications.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.1}>
                <div className="card-clinic h-full text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-clinic-mist text-primary text-2xl mx-auto mb-4">
                    <HiOutlineAcademicCap />
                  </span>
                  <p className="font-semibold text-clinic-ink text-sm">{c.title}</p>
                  <p className="text-xs text-clinic-muted mt-2">{c.year}</p>
                  <div className="mt-4 aspect-[4/3] rounded-xl bg-clinic-mist/70 flex items-center justify-center">
                    <span className="text-[11px] text-clinic-muted px-4 text-center">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLMl7NUTdl_PZ1O9r0gdjYtWpIaYa66QeOIIEp0crJQ&s=10" alt="Andijon davlat tibbiyot instituti" />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
