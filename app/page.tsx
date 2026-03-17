import Image from 'next/image'
import Link from 'next/link'
import { HeroHome } from '@/components/HeroHome'
import { ServiceCard } from '@/components/ServiceCard'
import { BandCTA } from '@/components/BandCTA'
import { RevealWrapper } from '@/components/RevealWrapper'
import { services } from '@/lib/data'

const BRAND = '#58C1E9'

const photos = [
  'https://pub-85aceffc7f094aeeb5f4e65c0c3d3e04.r2.dev/photos/2026-03-15%2001_38_07-Downloads%20-%20File%20Explorer.png',
  'https://pub-85aceffc7f094aeeb5f4e65c0c3d3e04.r2.dev/photos/2026-03-15%2001_38_55-Downloads%20-%20File%20Explorer.png',
  'https://pub-85aceffc7f094aeeb5f4e65c0c3d3e04.r2.dev/photos/2026-03-15%2001_40_32-Media%20Player.png',
]

export default function HomePage() {
  return (
    <>
      <HeroHome />

      {/* ── SERVICES SECTION ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <RevealWrapper className="max-w-2xl mb-16">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#58C1E9] mb-3">
              Nos soins
            </p>
            <h2 className="font-serif text-4xl md:text-[46px] font-bold text-slate-900 leading-[1.15] mb-4">
              Soins et services<br className="hidden md:block" /> à domicile
            </h2>
            <p className="text-[15px] text-slate-500 leading-relaxed">
              Une gamme complète de services personnalisés pour permettre à vos proches
              de rester chez eux confortablement et en toute sécurité.
            </p>
          </RevealWrapper>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {services.map((service, i) => (
              <RevealWrapper key={service.id} delay={i * 0.08} direction="up">
                <ServiceCard service={service} />
              </RevealWrapper>
            ))}
          </div>

          {/* CTA row */}
          <RevealWrapper>
            <div className="flex items-center gap-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-[#58C1E9] text-white px-7 py-3.5 rounded-full text-[14px] font-bold hover:bg-[#3aa8d4] transition-colors duration-200"
              >
                Découvrir tous nos services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="text-[14px] font-bold text-slate-400 hover:text-slate-700 transition-colors duration-200 flex items-center gap-1.5"
              >
                Évaluation gratuite →
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <BandCTA />

      {/* ── ABOUT STRIP ── */}
      <section className="py-28 bg-[#F7FBFE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Left — text */}
            <RevealWrapper direction="left">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#58C1E9] mb-4">
                Notre approche
              </p>
              <h2 className="font-serif text-4xl md:text-[44px] font-bold text-slate-900 leading-[1.15] mb-6">
                Une aide humaine,<br className="hidden md:block" /> pas juste un service.
              </h2>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-4">
                Chez Restez Chez Soi, nous croyons que chaque personne mérite de vieillir chez elle, entourée de chaleur et de respect. Notre équipe qualifiée s'adapte à chaque situation pour offrir une aide sur mesure.
              </p>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-8">
                Nous servons les familles de Québec et Lévis avec une approche humaine avant tout — nous prenons le temps de connaître chaque personne, ses habitudes et ses préférences.
              </p>

              {/* Points */}
              <ul className="flex flex-col gap-3.5 mb-10">
                {[
                  'Personnel formé, vérifié et bienveillant',
                  'Services disponibles 7 jours sur 7',
                  'Évaluation gratuite sans engagement',
                  'Accompagnement personnalisé à domicile',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[14.5px] text-slate-600 font-medium">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EEF9FD' }}
                    >
                      <svg className="w-3 h-3" style={{ color: BRAND }} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/apropos"
                className="inline-flex items-center gap-2 bg-[#58C1E9] text-white px-6 py-3.5 rounded-full text-[14px] font-bold hover:bg-[#3aa8d4] transition-colors duration-200"
              >
                En savoir plus →
              </Link>
            </RevealWrapper>

            {/* Right — photos */}
            <RevealWrapper direction="right">
              <div className="grid grid-cols-2 gap-3">

                {/* Main large photo */}
                <div className="col-span-2 relative rounded-2xl overflow-hidden" style={{ height: '300px' }}>
                  <Image
                    src={photos[0]}
                    alt="Soins à domicile à Québec"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  {/* Subtle branded overlay bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#58C1E9]/10 to-transparent" />
                </div>

                {/* Two smaller photos */}
                <div className="relative rounded-2xl overflow-hidden" style={{ height: '200px' }}>
                  <Image
                    src={photos[1]}
                    alt="Aide à domicile professionnelle"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden" style={{ height: '200px' }}>
                  <Image
                    src={photos[2]}
                    alt="Soins personnalisés"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>

              </div>

              {/* Small stat strip below photos */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                {[
                  { value: '7j/7', label: 'Disponibilité' },
                  { value: '100%', label: 'Évaluation gratuite' },
                  { value: 'Québec', label: '& Lévis' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl px-4 py-3.5 border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-center"
                  >
                    <p className="font-serif text-[18px] font-bold text-slate-800">{stat.value}</p>
                    <p className="text-[11px] text-slate-400 font-semibold mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </RevealWrapper>

          </div>
        </div>
      </section>
    </>
  )
}