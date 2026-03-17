'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// --- Simple SVG Icons ---
const IconMenu = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="4" y1="12" x2="20" y2="12"/>
    <line x1="4" y1="6" x2="20" y2="6"/>
    <line x1="4" y1="18" x2="20" y2="18"/>
  </svg>
)

const IconX = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
)

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/apropos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

const BRAND_LIGHT_BLUE = '#58C1E9'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-6xl transition-all duration-500 ${
        scrolled ? 'translate-y-[-4px]' : 'translate-y-0'
      }`}
    >
      <nav
        className={`relative transition-all duration-300 border ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-blue-50 shadow-[0_12px_40px_rgba(0,0,0,0.06)]' 
            : 'bg-white border-slate-100 shadow-sm'
        } rounded-2xl px-5 md:px-8 h-[72px] flex items-center justify-between`}
      >
        <div 
          className="absolute top-0 left-12 right-12 h-[2px] opacity-20"
          style={{ backgroundColor: BRAND_LIGHT_BLUE }}
        />

        <Link href="/" className="flex items-center transition-transform active:scale-95 flex-shrink-0 h-full py-2">
          <img 
            src="https://pub-85aceffc7f094aeeb5f4e65c0c3d3e04.r2.dev/photos/fulllogo.png" 
            alt="Restez Chez Soi Logo" 
            className="h-full w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[15px] font-bold transition-all duration-200 rounded-xl ${
                  isActive
                    ? 'text-slate-900'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute inset-0 opacity-15 rounded-xl -z-10"
                    style={{ backgroundColor: BRAND_LIGHT_BLUE }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            style={{ backgroundColor: BRAND_LIGHT_BLUE }}
            className="hidden sm:inline-flex items-center justify-center text-white px-6 py-2.5 rounded-xl text-[14px] font-extrabold transition-all duration-300 shadow-lg shadow-blue-100 hover:brightness-105 hover:shadow-blue-200 active:scale-95 uppercase tracking-wider"
          >
            Nous joindre
          </Link>

          <button
            className="md:hidden p-2.5 text-slate-500 hover:bg-slate-50 rounded-xl transition-colors border border-slate-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[80px] left-0 right-0 p-2"
          >
            <div className="bg-white/98 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-4 flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    pathname === link.href
                      ? 'bg-blue-50'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                  style={{ color: pathname === link.href ? BRAND_LIGHT_BLUE : '' }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-[1px] bg-slate-100 my-2" />
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                style={{ backgroundColor: BRAND_LIGHT_BLUE }}
                className="flex items-center justify-center text-white px-4 py-3.5 rounded-xl text-base font-bold shadow-lg shadow-blue-100"
              >
                Nous joindre
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}