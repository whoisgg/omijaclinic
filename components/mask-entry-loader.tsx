"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

export function MaskEntryLoader() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const hasShown = sessionStorage.getItem("mask-loader-shown")
    if (hasShown) {
      setVisible(false)
      document.body.style.overflow = "auto"
      document.body.classList.add("loader-complete")
      return
    }

    document.body.style.overflow = "hidden"

    sessionStorage.setItem("mask-loader-shown", "true")

    const loadingDuration = 2500 // 2.5 seconds
    const startTime = Date.now()

    // Animate progress bar smoothly over 2.5 seconds
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min(elapsed / loadingDuration, 1)
      setProgress(newProgress)

      if (newProgress >= 1) {
        clearInterval(progressInterval)
        setIsComplete(true)
        document.body.style.overflow = "auto"
        document.body.classList.add("loader-complete")
      }
    }, 16) // ~60fps

    return () => {
      clearInterval(progressInterval)
      document.body.style.overflow = "auto"
    }
  }, [])

  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={isComplete ? { opacity: 0 } : { opacity: 1 }}
      transition={{
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={() => {
        if (isComplete) setVisible(false)
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#e8e8e8]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-[400px] h-[280px] md:w-[600px] md:h-[400px] mb-12"
      >
        <Image
          src="/images/omiyaclinic-logovariaciones-mesa-20de-20trabajo-201-21.png"
          alt="OMIYA CLINIC"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      <div className="w-[300px] md:w-[400px] h-[2px] bg-[#C5A059]/20 rounded-full overflow-hidden">
        <motion.div className="h-full bg-[#C5A059] origin-left" style={{ transform: `scaleX(${progress})` }} />
      </div>
    </motion.div>
  )
}
