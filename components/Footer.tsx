import Link from 'next/link'

const BRAND_LIGHT_BLUE = '#58C1E9'

const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={BRAND_LIGHT_BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
)
const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={BRAND_LIGHT_BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
)
const IconMapPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={BRAND_LIGHT_BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
)
const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={BRAND_LIGHT_BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
)

export function Footer() {
  return (
    <footer className="bg-[#F0F9FF] text-slate-700 border-t border-[#C8EAF8]">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#C8EAF8]">

          {/* Column 1: Brand */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <img
                src="https://pub-85aceffc7f094aeeb5f4e65c0c3d3e04.r2.dev/photos/fulllogo.png"
                alt="Restez Chez Soi Logo"
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-sm font-medium">
              Une approche humaine et professionnelle des soins à domicile, dédiée au bien-être des aînés dans les régions de Québec et Lévis.
            </p>
            <div className="h-[2px] w-12 rounded-full" style={{ backgroundColor: BRAND_LIGHT_BLUE }} />
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-[12px] uppercase tracking-[0.2em] font-extrabold text-slate-400 mb-8">
              Navigation
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/services', label: 'Services' },
                { href: '/apropos', label: 'À propos' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-slate-500 hover:text-[#58C1E9] transition-colors duration-200 font-semibold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="md:col-span-3">
            <h4 className="text-[12px] uppercase tracking-[0.2em] font-extrabold text-slate-400 mb-8">
              Expertises
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                'Présence à domicile',
                'Soins infirmiers',
                'Soins Alzheimer',
                'Aide aux handicapés',
                'Soins de fin de vie',
              ].map((service) => (
                <li key={service} className="text-[14px] text-slate-500 font-semibold">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Coordonnées */}
          <div className="md:col-span-3">
            <h4 className="text-[12px] uppercase tracking-[0.2em] font-extrabold text-slate-400 mb-8">
              Coordonnées
            </h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <IconPhone />
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-slate-700">(418) 000-0000</span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-bold">Ligne directe</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <IconMail />
                <span className="text-[14px] font-semibold text-slate-500">info@restezchezsoi.ca</span>
              </li>
              <li className="flex items-start gap-4">
                <IconMapPin />
                <span className="text-[14px] font-semibold text-slate-500">Québec, Lévis et environs</span>
              </li>
              <li className="flex items-start gap-4">
                <IconClock />
                <div className="flex flex-col text-[13px] text-slate-500 font-medium">
                  <span>Lun–Ven: 7h – 20h</span>
                  <span>Sam–Dim: 8h – 18h</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-[12px] font-bold text-slate-400">
              © {new Date().getFullYear()} Restez Chez Soi
            </p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-slate-300" />
            <p className="text-[12px] font-bold text-slate-400">
              Services de santé agréés
            </p>
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="/confidentialite"
              className="text-[11px] font-bold text-slate-400 hover:text-[#58C1E9] uppercase tracking-widest transition-colors"
            >
              Confidentialité
            </Link>
            <Link
              href="/termes"
              className="text-[11px] font-bold text-slate-400 hover:text-[#58C1E9] uppercase tracking-widest transition-colors"
            >
              Termes
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}