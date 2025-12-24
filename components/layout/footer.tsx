import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative z-20 bg-neutral-900">
      <div className="flex h-full w-full flex-col justify-between px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
        <div className="flex flex-col gap-2 sm:gap-3">
          <Link
            href="/"
            className="text-sm text-white transition-colors duration-300 hover:text-neutral-400 sm:text-lg"
          >
            Home
          </Link>
          <Link
            href="/acerca-de"
            className="text-sm text-white transition-colors duration-300 hover:text-neutral-400 sm:text-lg"
          >
            Acerca de
          </Link>
          <Link
            href="/wellaging"
            className="text-sm text-white transition-colors duration-300 hover:text-neutral-400 sm:text-lg"
          >
            Well Aging
          </Link>
          <Link
            href="#treatments"
            className="text-sm text-white transition-colors duration-300 hover:text-neutral-400 sm:text-lg"
          >
            Tratamientos
          </Link>
        </div>

        <div className="mt-8 flex flex-col items-start gap-2 sm:mt-12 lg:mt-16">
          <h1 className="whitespace-nowrap text-[12vw] font-bold leading-[0.8] tracking-tight text-white sm:text-[10vw] lg:text-[14vw]">
            OMIYA CLINIC
          </h1>
          <p className="text-[11px] text-white sm:text-sm lg:text-base">©copyright</p>
        </div>
      </div>
    </footer>
  )
}
