import Link from "next/link"

export default function Footer() {
  return (
    <footer
      className="relative h-[400px] max-h-[800px] sm:h-[600px] lg:h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative -top-[100vh] h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)]">
        <div className="sticky top-[calc(100vh-400px)] h-[400px] sm:top-[calc(100vh-600px)] sm:h-[600px] lg:top-[calc(100vh-800px)] lg:h-[800px]">
          <div className="flex h-full w-full flex-col justify-between bg-neutral-900 px-4 py-4 sm:px-6 sm:py-6 lg:py-8">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 text-xs uppercase text-neutral-400 sm:mb-2 sm:text-sm">About</h3>
                <Link
                  href="/projects"
                  className="text-sm text-white transition-colors duration-300 hover:text-neutral-400 sm:text-base"
                >
                  Projects
                </Link>
                <Link
                  href="/mission"
                  className="text-sm text-white transition-colors duration-300 hover:text-neutral-400 sm:text-base"
                >
                  Our Mission
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-white transition-colors duration-300 hover:text-neutral-400 sm:text-base"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 text-xs uppercase text-neutral-400 sm:mb-2 sm:text-sm">Education</h3>
                <Link
                  href="/news"
                  className="text-sm text-white transition-colors duration-300 hover:text-neutral-400 sm:text-base"
                >
                  News
                </Link>
                <Link
                  href="/learn"
                  className="text-sm text-white transition-colors duration-300 hover:text-neutral-400 sm:text-base"
                >
                  Learn
                </Link>
                <Link
                  href="/publications"
                  className="text-sm text-white transition-colors duration-300 hover:text-neutral-400 sm:text-base"
                >
                  Publications
                </Link>
              </div>
            </div>
            <div className="mt-4 flex flex-col items-start justify-between gap-4 sm:mt-6 sm:flex-row sm:items-end sm:gap-0 lg:mt-10">
              <h1 className="text-[18vw] font-bold leading-[0.8] tracking-tight text-white sm:text-[16vw] lg:text-[14vw]">
                OMIYA CLINIC
              </h1>
              <p className="text-sm text-white sm:text-base">©copyright</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
