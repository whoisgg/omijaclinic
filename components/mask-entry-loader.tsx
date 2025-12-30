"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

export function MaskEntryLoader() {
  const [shouldShow, setShouldShow] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Check if loader has already been shown
    const hasShown = sessionStorage.getItem("mask-loader-shown")

    if (!hasShown) {
      setShouldShow(true)
      sessionStorage.setItem("mask-loader-shown", "true")

      const timer = setTimeout(() => {
        setIsComplete(true)
      }, 3000)

      return () => clearTimeout(timer)
    } else {
      // Already shown, don't display loader
      setIsComplete(true)
    }
  }, [])

  if (!shouldShow || isComplete) return null

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{
        duration: 1.2,
        delay: 1.5,
        ease: [0.76, 0, 0.24, 1],
      }}
      style={{ backgroundColor: "#e8e6e1" }}
      className="fixed inset-0 z-[9999] bg-[#e8e6e1] flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[90vw] max-h-[90vh]"
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
