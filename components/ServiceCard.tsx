'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Service } from '@/lib/data'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="
      group relative rounded-3xl overflow-hidden
      bg-white
      border border-slate-100
      shadow-[0_4px_20px_rgba(0,0,0,0.03)]
      hover:shadow-[0_20px_50px_rgba(88,193,233,0.18)]
      hover:-translate-y-1.5
      transition-all duration-700 cubic-bezier-[0.22,1,0.36,1]
      cursor-default
    ">

      {/* Image Container */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-1000 cubic-bezier-[0.22,1,0.36,1] group-hover:scale-110"
        />
        
        {/* Gradient overlay - Smooth transition duration matching the card */}
        <div className="
          absolute inset-0
          bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent
          group-hover:from-slate-900/90 group-hover:via-slate-900/40
          transition-all duration-700 ease-in-out
        " />

        {/* Title & Subtitle Container */}
        <div className="
          absolute bottom-0 left-0 right-0 p-7
          transform transition-transform duration-700 cubic-bezier-[0.22,1,0.36,1]
          group-hover:-translate-y-3
        ">
          <h3 className="font-serif text-[24px] font-bold text-white leading-tight">
            {service.title}
          </h3>
          <p className="
            text-[14px] text-white/80 mt-1.5 font-medium
            opacity-100 group-hover:opacity-0 group-hover:translate-y-2
            transition-all duration-500 ease-out
          ">
            {service.subtitle}
          </p>
        </div>
      </div>

      {/* Expandable Items List */}
      <div className="
        grid grid-rows-[0fr] group-hover:grid-rows-[1fr]
        transition-all duration-700 cubic-bezier-[0.22,1,0.36,1]
        bg-white
      ">
        <div className="overflow-hidden">
          <div className="px-7 pb-7 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
            <ul className="flex flex-col gap-3 mb-6">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13.5px] text-slate-500 font-medium leading-relaxed">
                  <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <Link
              href="/contact"
              className="
                inline-flex items-center gap-2
                text-[14px] font-bold text-[#58C1E9]
                hover:text-[#3aa8d4] transition-colors duration-300
              "
            >
              Demander ce service
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}