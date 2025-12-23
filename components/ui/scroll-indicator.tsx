"use client"

import { ArrowDown } from "lucide-react"

export default function ScrollIndicator() {
  return (
    <div className="fixed right-8 bottom-12 z-40 flex items-center gap-2">
      <ArrowDown className="w-4 h-4 text-white/60" />
      <span className="text-white/60 text-xs font-light tracking-wider uppercase">(SCROLL DOWN)</span>
    </div>
  )
}
