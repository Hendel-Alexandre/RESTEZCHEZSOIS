'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface PageHeroProps {
  title: string
  subtitle?: string
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => { setIsClient(true) }, [])

  const wrap = (delay: number, y: number, children: React.ReactNode, className?: string) =>
    isClient ? (
      <motion.div
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
        className={className}
      >
        {children}
      </motion.div>
    ) : (
      <div className={className}>{children}</div>
    )

  return (
    <section className="relative bg-bleu-dark pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-bleu rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {wrap(0.1, 28,
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-5">
            {title}
          </h1>
        )}
        {subtitle && wrap(0.2, 28,
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 28C840 36 960 42 1080 40C1200 38 1320 28 1380 23L1440 18V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="#FAFAFA"
          />
        </svg>
      </div>
    </section>
  )
}
