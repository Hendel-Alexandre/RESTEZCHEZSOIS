import { PageHero } from '@/components/PageHero'
import { ContactForm } from '@/components/ContactForm'
import { RevealWrapper } from '@/components/RevealWrapper'

const infoCards = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Téléphone',
    value: '(418) 000-0000',
    href: 'tel:4180000000',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Courriel',
    value: 'info@restezchezsoi.ca',
    href: 'mailto:info@restezchezsoi.ca',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Région desservie',
    value: 'Québec, Lévis et environs',
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Heures d\'ouverture',
    value: 'Lun–Ven 7h–20h · Sam–Dim 8h–18h',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Parlons de vos besoins"
        subtitle="Remplissez le formulaire ci-dessous ou contactez-nous directement. Nous vous répondrons sous 24 heures."
      />

      <section className="py-24 bg-blanc">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info left */}
            <RevealWrapper direction="left" className="lg:col-span-2">
              <div>
                <h2 className="font-serif text-3xl text-noir mb-2">Nous joindre</h2>
                <p className="text-gris-mid text-[15px] leading-relaxed mb-8">
                  Notre équipe est disponible pour répondre à toutes vos questions et vous guider vers les soins appropriés.
                </p>

                <div className="flex flex-col gap-4">
                  {infoCards.map((card) => (
                    <div
                      key={card.label}
                      className="bg-white border border-bleu/15 rounded-2xl p-5 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-bleu-bg flex items-center justify-center text-bleu flex-shrink-0">
                        {card.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gris-mid font-sans mb-0.5">{card.label}</p>
                        {card.href ? (
                          <a
                            href={card.href}
                            className="text-[15px] font-sans font-500 text-noir hover:text-bleu-dark transition-colors"
                          >
                            {card.value}
                          </a>
                        ) : (
                          <p className="text-[15px] font-sans font-500 text-noir">{card.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-bleu-bg border border-bleu/15 rounded-2xl p-6">
                  <h3 className="font-serif text-lg text-noir mb-2">Évaluation gratuite</h3>
                  <p className="text-sm text-gris-mid leading-relaxed">
                    Remplissez le formulaire pour recevoir une évaluation personnalisée de vos besoins, sans frais et sans engagement.
                  </p>
                </div>
              </div>
            </RevealWrapper>

            {/* Form right */}
            <RevealWrapper direction="right" delay={0.1} className="lg:col-span-3">
              <ContactForm />
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24 bg-blanc">
        <div className="max-w-7xl mx-auto px-6">
          <RevealWrapper>
            <div className="rounded-3xl overflow-hidden shadow-sm border border-gris-light">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85100.78804027398!2d-71.28318!3d46.81228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb896c9a5f2e3e3%3A0x9ec813abe0b36553!2sQu%C3%A9bec%2C%20QC%2C%20Canada!5e0!3m2!1sfr!2sca!4v1700000000000!5m2!1sfr!2sca"
                className="w-full h-[480px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte Québec"
              />
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
