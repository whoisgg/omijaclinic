export default function IntroSection() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          {/* Left side - Social links */}
          <div className="md:col-span-3">
            <nav className="flex flex-row md:flex-col gap-4 md:gap-2">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm md:text-base">
                Instagram
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm md:text-base">
                Facebook
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm md:text-base">
                TikTok
              </a>
            </nav>
          </div>

          {/* Right side - Large text */}
          <div className="md:col-span-9">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight uppercase">
              OMIYA CLINIC Un espacio donde bienestar, calma y salud se vuelven uno.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
