import { useForm } from 'react-hook-form'
import { useState } from 'react'
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineCheckCircle,
} from 'react-icons/hi'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { services } from '../data/services.js'
import { FaTelegramPlane } from 'react-icons/fa'

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  const [sent, setSent] = useState(false)

  const [error, setError] = useState(false)

  const onSubmit = async (data) => {
    setError(false)
    const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
    const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID

    const text =
      `🩺 <b>Yangi qabulga yozilish so'rovi</b>\n\n` +
      `👤 <b>Ism:</b> ${data.fullName}\n` +
      `📞 <b>Telefon:</b> ${data.phone}\n` +
      `📅 <b>Sana:</b> ${data.date}\n` +
      `🔬 <b>Xizmat:</b> ${data.serviceType}\n` +
      (data.message ? `💬 <b>Xabar:</b> ${data.message}` : '')

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' }),
      })
      if (!res.ok) throw new Error('Telegram API xatosi')
      setSent(true)
      reset()
    } catch (e) {
      console.error('Botga yuborishda xatolik:', e)
      setError(true)
    }
  }

  return (
    <>
      <section className="bg-clinic-mist/50 section-pad">
        <div className="container-clinic text-center max-w-2xl mx-auto">
          <span className="eyebrow mb-4">Aloqa va qabulga yozilish</span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-clinic-ink mt-3 leading-tight">
            Qabulga yozilish uchun forma to'ldiring
          </h1>
          <p className="text-clinic-muted mt-5 leading-relaxed">
            Quyidagi formani to'ldiring yoki bevosita telefon orqali bog'laning — 
            tez orada siz bilan aloqaga chiqamiz
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-clinic grid lg:grid-cols-5 gap-10">
          {/* FORM */}
          <ScrollReveal className="lg:col-span-3">
            <div className="card-clinic">
              {sent && (
                <div className="alert bg-clinic-mist border-none text-primary mb-6 rounded-2xl flex items-center gap-2">
                  <HiOutlineCheckCircle className="text-xl" />
                  So'rovingiz qabul qilindi! Tez orada siz bilan bog'lanamiz.
                </div>
              )}
              {error && (
                <div className="alert bg-red-50 border-none text-error mb-6 rounded-2xl">
                  Xatolik yuz berdi. Iltimos, telefon orqali bog'laning yoki qayta urinib ko'ring.
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-clinic-ink mb-1.5" htmlFor="fullName">
                    To'liq ism sharif
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Masalan: Aziza Karimova"
                    className={`input input-bordered w-full rounded-xl bg-white ${errors.fullName ? 'input-error' : ''}`}
                    {...register('fullName', { required: "Ism sharifingizni kiriting" })}
                  />
                  {errors.fullName && (
                    <p className="text-error text-xs mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-clinic-ink mb-1.5" htmlFor="phone">
                    Telefon raqami
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+998 90 000 00 00"
                    className={`input input-bordered w-full rounded-xl bg-white ${errors.phone ? 'input-error' : ''}`}
                    {...register('phone', {
                      required: 'Telefon raqamingizni kiriting',
                      pattern: {
                        value: /^[+]?[0-9\s-]{9,15}$/,
                        message: "Telefon raqami noto'g'ri formatda",
                      },
                    })}
                  />
                  {errors.phone && <p className="text-error text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-clinic-ink mb-1.5" htmlFor="date">
                      Qulay sana
                    </label>
                    <input
                      id="date"
                      type="date"
                      className={`input input-bordered w-full rounded-xl bg-white ${errors.date ? 'input-error' : ''}`}
                      {...register('date', { required: 'Sanani tanlang' })}
                    />
                    {errors.date && <p className="text-error text-xs mt-1">{errors.date.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-clinic-ink mb-1.5" htmlFor="serviceType">
                      Xizmat turi
                    </label>
                    <select
                      id="serviceType"
                      defaultValue=""
                      className={`select select-bordered w-full rounded-xl bg-white ${errors.serviceType ? 'select-error' : ''}`}
                      {...register('serviceType', { required: 'Xizmat turini tanlang' })}
                    >
                      <option value="" disabled>
                        Tanlang
                      </option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                    {errors.serviceType && (
                      <p className="text-error text-xs mt-1">{errors.serviceType.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-clinic-ink mb-1.5" htmlFor="message">
                    Xabar (ixtiyoriy)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Qo'shimcha ma'lumot yoki savolingizni yozing..."
                    className="textarea textarea-bordered w-full rounded-xl bg-white"
                    {...register('message')}
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="btn-clinic-primary btn-lg w-full sm:w-auto">
                  {isSubmitting ? 'Yuborilmoqda...' : "So'rov yuborish"}
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* INFO */}
          <ScrollReveal delay={0.1} className="lg:col-span-2 space-y-6">
            <div className="card-clinic">
              <h3 className="font-display font-bold text-clinic-ink mb-5">Bog'lanish ma'lumotlari</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <HiOutlinePhone className="text-primary text-xl mt-0.5" />
                  <div>
                    <p className="font-semibold text-clinic-ink">Telefon</p>
                    <p className="text-clinic-muted">+998 94 266 24 14</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaTelegramPlane className="text-primary text-xl mt-0.5" />
                  <div>
                    <p className="font-semibold text-clinic-ink">Telegram</p>
                    <p className="text-clinic-muted">@orifultramed</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <HiOutlineLocationMarker className="text-primary text-xl mt-0.5" />
                  <div>
                    <p className="font-semibold text-clinic-ink">Manzil</p>
                    <p className="text-clinic-muted">Namangan shahar, 5-Poliklinika oldida</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <HiOutlineClock className="text-primary text-xl mt-0.5" />
                  <div>
                    <p className="font-semibold text-clinic-ink">Ish vaqti</p>
                    <p className="text-clinic-muted">Dush–Shan: 07:30–18:00</p>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}