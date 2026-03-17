import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { RevealWrapper } from '@/components/RevealWrapper'
import { values } from '@/lib/data'

const photos = [
  'https://pub-85aceffc7f094aeeb5f4e65c0c3d3e04.r2.dev/photos/2026-03-15%2001_38_07-Downloads%20-%20File%20Explorer.png',
  'https://pub-85aceffc7f094aeeb5f4e65c0c3d3e04.r2.dev/photos/2026-03-15%2001_38_55-Downloads%20-%20File%20Explorer.png',
  'https://pub-85aceffc7f094aeeb5f4e65c0c3d3e04.r2.dev/photos/2026-03-15%2001_40_32-Media%20Player.png',
]

export default function AProposPage() {
  return (
    <>
      <PageHero
        title="Notre mission, votre bien-être"
        subtitle="Depuis notre fondation, nous nous engageons à offrir des soins à domicile exceptionnels avec chaleur humaine et professionnalisme."
      />

      {/* Section 1 — Mission */}
      <section className="py-24 bg-blanc">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealWrapper direction="left">
              <h2 className="font-serif text-4xl md:text-5xl text-noir mb-6 leading-tight">
                Permettre à chacun de vieillir chez soi
              </h2>
              <p className="text-gris leading-relaxed text-[15px] mb-4">
                Restez Chez Soi est née d'une conviction profonde : toute personne âgée mérite de rester dans son chez-soi, entourée de soins professionnels et d'une présence chaleureuse. Nous offrons une gamme complète de services personnalisés pour soutenir les personnes âgées et leurs familles à Québec et Lévis.
              </p>
              <p className="text-gris leading-relaxed text-[15px] mb-8">
                Notre équipe de professionnels qualifiés — aides à domicile, infirmières et accompagnateurs — travaille avec dévouement pour améliorer la qualité de vie de chaque personne que nous accompagnons.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "Plus de 10 ans d\u2019exp\u00e9rience dans les soins \u00e0 domicile",
                  "Intervenants certifi\u00e9s et v\u00e9rifi\u00e9s ant\u00e9c\u00e9dents",
                  "Plans de soins personnalis\u00e9s et \u00e9volutifs",
                  "Communication r\u00e9guli\u00e8re avec les familles",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-gris">
                    <span className="w-2 h-2 rounded-full bg-rose flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-bleu text-white px-6 py-3 rounded-full text-sm font-sans hover:bg-bleu-dark transition-colors duration-200"
              >
                Découvrir nos services →
              </Link>
            </RevealWrapper>

            <RevealWrapper direction="right" delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 rounded-3xl overflow-hidden aspect-[16/9] relative">
                  <Image src={photos[0]} alt="Notre équipe" fill unoptimized className="object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square relative">
                  <Image src={photos[1]} alt="Soins à domicile" fill unoptimized className="object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square relative">
                  <Image src={photos[2]} alt="Présence rassurante" fill unoptimized className="object-cover" />
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* Section 2 — Valeurs */}
      <section className="py-24 bg-bleu-bg">
        <div className="max-w-7xl mx-auto px-6">
          <RevealWrapper className="text-center mb-14">
            <h2 className="font-serif text-4xl md:text-5xl text-noir mb-4">
              Ce qui nous guide au quotidien
            </h2>
            <p className="text-gris-mid text-lg max-w-xl mx-auto">
              Nos valeurs fondamentales orientent chacune de nos actions et décisions.
            </p>
          </RevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <RevealWrapper key={value.id} delay={i * 0.1} direction="up">
                <div className="bg-white rounded-2xl p-7 hover:shadow-md transition-shadow duration-300">
                  <span className="font-serif text-5xl text-bleu/25 block mb-3">
                    {value.number}
                  </span>
                  <h3 className="font-serif text-xl text-noir mb-3">{value.title}</h3>
                  <p className="text-[14px] text-gris-mid leading-relaxed">{value.description}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
