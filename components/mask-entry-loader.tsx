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

    const totalResources =
      document.images.length + document.querySelectorAll('video, link[rel="stylesheet"], script').length
    const resourcesPerFrame = Math.max(1, Math.ceil(totalResources / 50))

    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(prev + resourcesPerFrame / totalResources, 1)
        if (newProgress >= 1) {
          clearInterval(progressInterval)
          setTimeout(() => {
            setIsComplete(true)
            document.body.style.overflow = "auto"
            document.body.classList.add("loader-complete")
          }, 500)
        }
        return newProgress
      })
    }, 30)

    // Also wait for actual load event
    const handleLoad = () => {
      clearInterval(progressInterval)
      setProgress(1)
      setTimeout(() => {
        setIsComplete(true)
        document.body.style.overflow = "auto"
        document.body.classList.add("loader-complete")
      }, 500)
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => {
      clearInterval(progressInterval)
      window.removeEventListener("load", handleLoad)
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
        <motion.div
          className="h-full bg-[#C5A059] origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress }}
          transition={{ duration: 0.3, ease: "linear" }}
        />
      </div>
    </motion.div>
  )
}
