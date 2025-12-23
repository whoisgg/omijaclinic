"use client"

import { ArrowDown } from "lucide-react"

export default function ScrollIndicator() {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 bottom-6 md:bottom-12 z-40 flex items-center gap-2">
      <ArrowDown className="w-4 h-4 md:w-4 md:h-4 text-white/60" />
      <span className="text-white/60 text-xs font-light tracking-wider uppercase hidden md:inline">(SCROLL DOWN)</span>
    </div>
  )
}
