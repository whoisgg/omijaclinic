"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

export function MaskEntryLoader() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hasShown = sessionStorage.getItem("mask-loader-shown")
    if (hasShown) return

    sessionStorage.setItem("mask-loader-shown", "true")
    setVisible(true)
  }, [])

  if (!visible) return null

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{
        duration: 1.2,
        delay: 1.5,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={() => setVisible(false)}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#e8e6e1] pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full w-full max-h-[90vh] max-w-[90vw]"
      >
        <Image
          src="/images/whisk-7777f1ee0e5d3dc9d5243fcff766ac6ddr-photoroom.png"
          alt="OMIYA Logo"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </motion.div>
  )
}
