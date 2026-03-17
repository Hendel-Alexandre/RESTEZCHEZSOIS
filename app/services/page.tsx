'use client'

import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { BandCTA } from '@/components/BandCTA'
import { RevealWrapper } from '@/components/RevealWrapper'

const BRAND = '#58C1E9'

const categories = [
  {
    id: 'aide',
    image: 'https://pub-85aceffc7f094aeeb5f4e65c0c3d3e04.r2.dev/photos/nurse%20inside.png',
    tag: 'AUTONOMIE & SOUTIEN',
    title: 'Soins à domicile',
    intro: 'Notre équipe prend soin de vos proches directement chez eux, avec respect, discrétion et professionnalisme. Chaque visite est pensée pour préserver leur autonomie et leur qualité de vie.',
    note: 'Un suivi infirmier complet est inclus dans tous nos services à domicile.',
    items: [
      'Rappels de médicaments',
      'Accompagnement fin de vie',
      'Soutien Alzheimer',
      'Réhabilitation',
      'Veille de nuit',
      'Soutien à la mobilité',
      'Aide à l’hygiène',
      'Préparation des repas',
    ],
    reverse: false,
    bg: 'bg-white',
  },
  {
    id: 'infirmiers',
    image: 'https://pub-85aceffc7f094aeeb5f4e65c0c3d3e04.r2.dev/photos/service1.jpg',
    tag: 'EXPERTISE CLINIQUE',
    title: 'Soins infirmiers',
    intro: 'Nos infirmières et infirmiers qualifiés se déplacent à votre domicile pour assurer un suivi médical rigoureux. Plus besoin de vous déplacer — les soins viennent à vous.',
    note: 'Évaluation initiale de l’état de santé offerte gratuitement lors de la première visite.',
    items: [
      'Bilan complet de santé',
      'Suivi infirmier régulier',
      'Conseils cliniques',
      'Soins palliatifs',
      'Suivi Alzheimer',
      'Traitement des plaies',
      'Prélèvements sanguins',
      'Suivi du diabète',
    ],
    reverse: true,
    bg: 'bg-[#F7FBFE]',
  },
  {
    id: 'accompagnement',
    image: 'https://pub-85aceffc7f094aeeb5f4e65c0c3d3e04.r2.dev/photos/outside%20nurse.png',
    tag: 'VIE SOCIALE ACTIVE',
    title: 'Accompagnement extérieur',
    intro: 'Maintenir une vie sociale active est essentiel au bien-être. Nos intervenants accompagnent vos proches dans leurs sorties pour qu’ils puissent continuer à profiter pleinement de la vie.',
    note: 'Ce service offre également un répit précieux pour les proches aidants.',
    items: [
      'Consultations médicales',
      'Activités de loisirs',
      'Soutien à la mobilité',
      'Courses et emplettes',
      'Promenades accompagnées',
      'Sorties culturelles',
    ],
    reverse: false,
    bg: 'bg-white',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="L'excellence des soins à domicile"
        subtitle="Une expertise clinique et humaine dédiée à votre autonomie, vous permettant de savourer chaque instant dans le confort absolu de votre foyer."
      />

      {categories.map((cat) => (
        <section key={cat.id} id={cat.id} className={`py-16 md:py-32 ${cat.bg}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`
              grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center
            `}>

              {/* Colonne Image - Toujours en premier sur mobile via l'ordre CSS si besoin, 
                  mais ici on laisse le flux naturel grid pour une lecture fluide */}
              <div className={`${cat.reverse ? 'lg:order-2' : ''}`}>
                <RevealWrapper direction={cat.reverse ? 'right' : 'left'}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5]">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-1000 hover:scale-105"
                    />
                  </div>
                </RevealWrapper>
              </div>

              {/* Colonne Texte */}
              <div className={`${cat.reverse ? 'lg:order-1' : ''}`}>
                <RevealWrapper direction="up">
                  <div className="pt-4">
                    <span 
                      className="block text-[11px] font-bold tracking-[0.2em] mb-4 uppercase text-slate-400"
                    >
                      {cat.tag}
                    </span>
                    
                    <h2 className="font-serif text-[32px] md:text-[48px] font-bold text-slate-900 leading-tight mb-6">
                      {cat.title}
                    </h2>
                    
                    <p className="text-[16px] md:text-[18px] text-slate-600 leading-relaxed mb-8 font-medium">
                      {cat.intro}
                    </p>

                    {/* Encadré Note */}
                    <div
                      className="rounded-2xl px-6 py-5 mb-10 border-l-[4px] text-[14px] leading-relaxed font-semibold shadow-sm"
                      style={{
                        background: '#EEF9FD',
                        borderColor: BRAND,
                        color: '#2a86b0',
                      }}
                    >
                      {cat.note}
                    </div>

                    {/* Liste des prestations */}
                    <div className="mb-10">
                       <div className="flex items-center gap-3 mb-6">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Prestations incluses</span>
                          <div className="h-px flex-grow bg-slate-100" />
                       </div>
                       
                       <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                        {cat.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-[14px] text-slate-600 font-bold leading-snug"
                          >
                            <span
                              className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: BRAND }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full text-[14px] font-bold transition-all duration-300 hover:shadow-lg active:scale-95 w-full sm:w-auto"
                      style={{ backgroundColor: BRAND }}
                    >
                      Demander ce service
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </RevealWrapper>
              </div>

            </div>
          </div>
        </section>
      ))}

      <BandCTA />
    </>
  )
}