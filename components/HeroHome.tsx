'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function HeroHome() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => { setIsClient(true) }, [])

  const anim = (delay = 0, x = 0, y = 0) =>
    isClient
      ? { initial: { opacity: 0, y, x }, animate: { opacity: 1, y: 0, x: 0 }, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const, delay } }
      : { initial: { opacity: 1 }, animate: { opacity: 1 } }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://pub-85aceffc7f094aeeb5f4e65c0c3d3e04.r2.dev/HeroVID.mp4"
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(105deg, rgba(28,28,30,0.72) 0%, rgba(28,28,30,0.28) 100%)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <motion.h1
              {...anim(0.1, 0, 28)}
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
            >
              Une présence chaleureuse qui redonne le sourire.
            </motion.h1>
            <motion.p
              {...anim(0.3, 0, 28)}
              className="text-[19px] text-white/85 leading-relaxed max-w-xl"
            >
              Nous proposons une multitude de soins et de services à domicile pour les personnes âgées et leurs familles à Québec et Lévis.
            </motion.p>
          </div>
          <motion.div {...anim(0.3, 36, 0)} className="lg:col-span-2">
            <div className="bg-white/12 backdrop-blur-md border border-white/20 rounded-3xl p-9">
              <p className="text-white/80 text-sm font-sans leading-relaxed mb-6">
                Obtenez une évaluation personnalisée de vos besoins, sans engagement et sans frais. Notre équipe vous contacte sous 24h.
              </p>
              <Link
                href="/contact"
                className="block w-full text-center bg-bleu text-white px-6 py-4 rounded-2xl text-base font-sans hover:bg-bleu-dark transition-colors duration-200 mb-3"
              >
                Évaluation gratuite →
              </Link>
              <Link
                href="/services"
                className="block w-full text-center border border-white/60 text-white px-6 py-3.5 rounded-2xl text-base font-sans hover:bg-white/10 transition-colors duration-200"
              >
                Nos services
              </Link>
            
            </div>
          </motion.div>
        </div>
      </div>
      {isClient && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center"
          >
            <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
