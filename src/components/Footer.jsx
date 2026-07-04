import { NavLink } from 'react-router-dom'
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi'
import { FaTelegramPlane } from "react-icons/fa";
import PulseWave from './PulseWave.jsx'

export default function Footer() {
  return (
    <footer className="bg-clinic-ink text-white/90">
      <PulseWave color="#4FB3D9" height={36} className="opacity-40" />
      <div className="container-clinic py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-white font-display font-bold">
              OU
            </span>
            <span className="font-display font-bold text-lg text-white">Orif Ultramed</span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            Har bir tekshiruvda aniqlik, g'amxo'rlik va ishonch. Sizning sog'lig'ingiz — bizning ustuvorligimiz.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-white">Sahifalar</h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li><NavLink to="/shifokor-haqida" className="hover:text-secondary transition-colors">Shifokor haqida</NavLink></li>
            <li><NavLink to="/xizmatlar" className="hover:text-secondary transition-colors">Xizmatlar</NavLink></li>
            <li><NavLink to="/narxlar" className="hover:text-secondary transition-colors">Narxlar</NavLink></li>
            <li><NavLink to="/savol-javob" className="hover:text-secondary transition-colors">Savol-javob</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-white">Aloqa</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-2"><HiOutlinePhone className="text-secondary" /> +998 94 266 24 14</li>
            <li className="flex items-center gap-2"><FaTelegramPlane className="text-secondary" /> @orifultramed</li>
            <li className="flex items-start gap-2"><HiOutlineLocationMarker className="text-secondary mt-0.5" /> Namangan shahar, 5-Poliklinika oldida</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-white">Ish vaqti</h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li className="flex items-center gap-2"><HiOutlineClock className="text-secondary" /> Dush–Shan: 07:30 – 18:00</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-clinic py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span>© {new Date().getFullYear()} Orif Ultramed Klinikasi. Barcha huquqlar himoyalangan.</span>
          <span>Ushbu sayt tashxis maqsadlarida emas, faqat ma'lumot uchun mo'ljallangan.</span>
        </div>
      </div>
    </footer>
  )
}
