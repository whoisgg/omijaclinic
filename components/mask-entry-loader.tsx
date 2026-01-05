"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

export function MaskEntryLoader() {
  const [visible, setVisible] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const hasShown = sessionStorage.getItem("mask-loader-shown")
    if (hasShown) return

    sessionStorage.setItem("mask-loader-shown", "true")
    setVisible(true)

    const checkResourcesLoaded = () => {
      // Wait for DOM content to be loaded
      if (document.readyState === "complete") {
        // Give a bit more time for videos and heavy assets to start loading
        setTimeout(() => {
          setIsReady(true)
        }, 800)
      } else {
        window.addEventListener("load", () => {
          setTimeout(() => {
            setIsReady(true)
          }, 800)
        })
      }
    }

    checkResourcesLoaded()
  }, [])

  if (!visible) return null

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={isReady ? { y: "-100%" } : { y: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={() => {
        if (isReady) setVisible(false)
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-[400px] h-[280px] md:w-[600px] md:h-[400px]"
      >
        <Image
          src="/images/omiyaclinic-logovariaciones-mesa-20de-20trabajo-201-21.png"
          alt="OMIYA CLINIC"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </motion.div>
  )
}
