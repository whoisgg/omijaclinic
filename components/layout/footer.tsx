import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative z-20 bg-neutral-900">
      <div className="flex h-full w-full flex-col justify-between px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
        <div className="flex shrink-0 gap-4 sm:gap-8 lg:gap-20">
          <div className="flex flex-col gap-1 sm:gap-2">
            <h3 className="mb-1 text-[10px] uppercase text-neutral-400 sm:mb-2 sm:text-sm">About</h3>
            <Link
              href="/projects"
              className="text-[11px] text-white transition-colors duration-300 hover:text-neutral-400 sm:text-base"
            >
              Projects
            </Link>
            <Link
              href="/mission"
              className="text-[11px] text-white transition-colors duration-300 hover:text-neutral-400 sm:text-base"
            >
              Our Mission
            </Link>
            <Link
              href="/contact"
              className="text-[11px] text-white transition-colors duration-300 hover:text-neutral-400 sm:text-base"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <h3 className="mb-1 text-[10px] uppercase text-neutral-400 sm:mb-2 sm:text-sm">Education</h3>
            <Link
              href="/news"
              className="text-[11px] text-white transition-colors duration-300 hover:text-neutral-400 sm:text-base"
            >
              News
            </Link>
            <Link
              href="/learn"
              className="text-[11px] text-white transition-colors duration-300 hover:text-neutral-400 sm:text-base"
            >
              Learn
            </Link>
            <Link
              href="/publications"
              className="text-[11px] text-white transition-colors duration-300 hover:text-neutral-400 sm:text-base"
            >
              Publications
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:mt-12 sm:flex-row sm:items-end sm:gap-0 lg:mt-16">
          <h1 className="text-[18vw] font-bold leading-[0.8] tracking-tight text-white sm:text-[16vw] lg:text-[14vw]">
            OMIYA CLINIC
          </h1>
          <p className="text-[11px] text-white sm:text-base">©copyright</p>
        </div>
      </div>
    </footer>
  )
}
