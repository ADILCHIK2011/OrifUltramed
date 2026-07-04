# Orif Ultramed — Ultratovush Klinikasi Veb-sayti

React + Vite + Tailwind CSS + DaisyUI + Framer Motion asosida qurilgan, mobil-birinchi,
zamonaviy va konversiyaga yo'naltirilgan tibbiyot klinikasi veb-sayti.

## 1. Sayt xaritasi (Sitemap)

| Sahifa | Manzil (route) | Maqsad |
|---|---|---|
| Bosh sahifa | `/` | Hero, xizmatlar preview, nega biz, sharhlar, CTA |
| Shifokor haqida | `/shifokor-haqida` | Profil, tajriba, sertifikatlar, ixtisoslik |
| Xizmatlar | `/xizmatlar` | 6 ta xizmatning to'liq tavsifi |
| Narxlar | `/narxlar` | Narxlar jadvali |
| Savol-javob | `/savol-javob` | 13 ta FAQ (accordion) |
| Aloqa | `/aloqa` | Qabulga yozilish formasi + kontakt ma'lumotlari |

## 2. Komponent arxitekturasi

```
src/
├── components/       # Qayta ishlatiladigan UI qismlari
│   ├── Navbar.jsx         # Sticky navbar + mobil menyu
│   ├── Footer.jsx         # Footer + kontakt
│   ├── PulseWave.jsx      # Signature: animatsion ultratovush to'lqin chizig'i
│   ├── ScrollReveal.jsx   # Scroll-da paydo bo'lish animatsiyasi (wrapper)
│   ├── SectionHeading.jsx # Bo'lim sarlavhasi shabloni
│   ├── ServiceCard.jsx    # Xizmat kartochkasi
│   ├── ServiceIcon.jsx    # Xizmat ikonkalari xaritasi
│   ├── TestimonialCard.jsx
│   └── FAQItem.jsx        # Accordion elementi
├── data/              # Statik ma'lumotlar (oson yangilanadigan)
│   ├── services.js
│   ├── testimonials.js
│   ├── faqs.js
│   └── pricing.js
├── pages/             # Har bir route uchun sahifa
│   ├── Home.jsx
│   ├── AboutDoctor.jsx
│   ├── Services.jsx
│   ├── Pricing.jsx
│   ├── FAQ.jsx
│   └── Contact.jsx
├── App.jsx            # Routing
├── main.jsx           # Entry point
└── index.css          # Tailwind + global uslublar
```

## 3. Dizayn tizimi

- **Ranglar:** oq fon (`#FFFFFF`), och ko'k mist (`#EAF5FA`), asosiy teal-ko'k (`#0F6E8C`),
  ikkinchi darajali ochiq ko'k (`#4FB3D9`), urg'u rangi teal (`#14B8A6`), qorong'i matn (`#152232`).
- **Shriftlar:** sarlavhalar uchun **Manrope** (Google Fonts), matn uchun **Inter**.
- **Signature element:** `PulseWave` — ultratovush/Doppler pulsini eslatuvchi animatsion
  chiziqli SVG, bo'limlar orasida va Hero blokida ishlatiladi.
- **Kutubxonalar:** `tailwindcss` + `daisyui` (tugmalar, forma elementlari, jadval),
  `framer-motion` (scroll animatsiyalari), `react-icons` (ikonkalar), `react-hook-form`
  (forma validatsiyasi), `react-router-dom` (sahifalar aro navigatsiya).

## 4. O'rnatish (Installation)

```bash
# 1. Papkaga kiring
cd ultrasound-clinic

# 2. Kerakli paketlarni o'rnating
npm install

# 3. Development serverni ishga tushiring
npm run dev
```

Sayt odatda `http://localhost:5173` manzilida ochiladi.

## 5. Build (production uchun)

```bash
npm run build       # dist/ papkasida optimallashtirilgan fayllar hosil bo'ladi
npm run preview      # build natijasini lokal ko'rish
```

## 6. Joylashtirish (Deployment)

Loyihani quyidagi xizmatlardan biriga bemalol joylashtirishingiz mumkin:

- **Vercel:** GitHub repozitoriyni ulang → Framework: *Vite* → Build command: `npm run build` → Output: `dist`
- **Netlify:** Build command: `npm run build`, Publish directory: `dist`
- **Oddiy hosting (cPanel va h.k.):** `npm run build` dan so'ng `dist/` papkasi ichidagi fayllarni serverga yuklang

## 7. Tez o'zgartiriladigan joylar

- **Shifokor ismi, surati, sertifikatlari:** `src/pages/AboutDoctor.jsx` — `[...]` qavs
  ichidagi joy-belgilarni almashtiring.
- **Telefon, email, manzil:** `src/components/Navbar.jsx`, `Footer.jsx`, `src/pages/Contact.jsx`.
- **Narxlar:** `src/data/pricing.js`.
- **Xizmatlar matni:** `src/data/services.js`.
- **FAQ savollari:** `src/data/faqs.js`.
- **Forma yuborilishi (backend/email integratsiyasi):** `src/pages/Contact.jsx` ichidagi
  `onSubmit` funksiyasiga API chaqiruvini qo'shing (masalan, Formspree, EmailJS yoki
  o'z backendingiz).

## 8. SEO eslatmalari

- `index.html` da meta title, description, Open Graph va `MedicalClinic` schema.org
  JSON-LD namunasi mavjud — real ma'lumotlar bilan to'ldiring.
- Har bir sahifa semantik HTML teglaridan (`header`, `main`, `footer`, `section`, `h1`–`h3`)
  foydalanadi.
- Rasm qo'shganingizda albatta tavsifli `alt` matnlarini kiriting.
