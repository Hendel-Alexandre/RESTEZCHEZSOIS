'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface RevealWrapperProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
  className?: string
}

export function RevealWrapper({
  children,
  delay = 0,
  direction = 'up',
  className,
}: RevealWrapperProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // On server / before hydration: render fully visible, no animation
  if (!isClient) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'up' ? 24 : 0, x: direction === 'left' ? -32 : direction === 'right' ? 32 : 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0, margin: '400px 0px 0px 0px' }}
      transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
