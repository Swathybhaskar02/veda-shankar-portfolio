export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-24 lg:pb-40 overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
        style={{ backgroundImage: `url('/images/veda-5.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/70 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[#c4a47c] uppercase tracking-[0.2em] text-[11px] font-medium mb-6">
              Portfolio · MMXXVI
            </p>

            <h1 className="font-serif text-[13vw] lg:text-[10vw] leading-[0.88] text-[#f5f3ee] tracking-[-0.02em]">
              <span className="block italic font-light">Veda</span>
              <span className="block text-[#c4a47c] font-normal">Shankar</span>
            </h1>

            <p className="mt-10 text-[#666666] uppercase tracking-[0.18em] text-[10px] font-medium">
              Now Booking · 2026
            </p>

            <p className="mt-8 font-serif italic text-lg lg:text-xl text-[#f5f3ee]/70 max-w-md leading-[1.6] font-light">
              "The frame should feel her absence before it ever finds her face."
            </p>
          </div>

          <div className="hidden lg:block text-right">
            <p className="uppercase tracking-[0.18em] text-[10px] text-[#9a9a9a] font-medium mb-3">
              Actress · Storyteller
            </p>
            <p className="text-[#666666] text-[13px] font-light">
              Mumbai · Bengaluru
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-20 pt-10 border-t border-white/[0.06]">
          <a
            href="#about"
            className="flex items-center gap-4 text-[#9a9a9a] hover:text-[#f5f3ee] transition-all duration-500 group"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="animate-bounce"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
            <span className="uppercase tracking-[0.2em] text-[10px] font-medium">
              Explore
            </span>
          </a>

          <span className="text-[#666666] text-[12px] font-light tracking-wide">
            01 / 06
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}
