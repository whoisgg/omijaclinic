import Image from "next/image"

export default function FeaturedSection() {
  return (
    <section className="flex min-h-screen flex-col px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-0">
      <div className="mb-8 h-[400px] flex-1 lg:order-2 lg:mb-0 lg:h-[800px]">
        <Image
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          width={600}
          height={800}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center text-left lg:order-1 lg:mr-12 lg:h-[800px]">
        <h3 className="mb-4 uppercase text-sm tracking-wider">Features That Refuse to Sit Still</h3>
        <p className="mb-8 text-2xl lg:text-4xl leading-relaxed text-pretty">
          Not just bullet points—living, breathing highlights. Each feature adapts to movement, context, and mood,
          making your product feel alive from the very first glance.
        </p>
        <button className="w-fit cursor-pointer border border-black bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black">
          LEARN MORE
        </button>
      </div>
    </section>
  )
}
