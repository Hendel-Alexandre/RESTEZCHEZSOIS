import Link from "next/link"

interface BandCTAProps {
  title?: string
  subtitle?: string
}

export function BandCTA({
  title = "Besoin d\u2019aide à domicile ?",
  subtitle = "Appelez-nous dès aujourd\u2019hui pour une évaluation gratuite sans engagement.",
}: BandCTAProps) {
  return (
    <section className="bg-bleu-dark py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-400 mb-2">
            {title}
          </h2>
          <p className="text-white/70 text-base">{subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
          <a
            href="tel:4180000000"
            className="text-2xl font-serif text-white font-400 hover:text-bleu-light transition-colors"
          >
            (418) 000-0000
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-bleu-dark px-6 py-3 rounded-full text-sm font-sans font-500 hover:bg-bleu-light transition-colors duration-200"
          >
            Évaluation gratuite →
          </Link>
        </div>
      </div>
    </section>
  )
}
