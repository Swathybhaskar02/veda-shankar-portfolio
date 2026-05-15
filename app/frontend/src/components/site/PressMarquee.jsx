const publications = [
  "Vogue India",
  "Filmfare",
  "GQ",
  "Grazia",
  "Hindustan Times",
  "Film Companion",
  "Variety",
  "Elle",
];

export default function PressMarquee() {
  return (
    <section className="py-20 lg:py-28 bg-black border-y border-white/5 overflow-hidden">
      <p className="text-center uppercase tracking-[0.4em] text-[#737373] text-xs mb-12">
        Featured In
      </p>

      <div className="space-y-8">
        <div className="flex items-center gap-12 lg:gap-20 whitespace-nowrap vs-marquee">
          {[...publications, ...publications, ...publications].map((pub, index) => (
            <span
              key={`row1-${index}`}
              className="font-serif italic text-4xl lg:text-5xl text-[#f7f5f0]/20 hover:text-[#c69c6d] transition-colors duration-500 cursor-default"
            >
              {pub}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-12 lg:gap-20 whitespace-nowrap vs-marquee" style={{ animationDirection: "reverse" }}>
          {[...publications].reverse().concat(publications, publications).map((pub, index) => (
            <span
              key={`row2-${index}`}
              className="font-serif italic text-4xl lg:text-5xl text-[#f7f5f0]/10 hover:text-[#c69c6d] transition-colors duration-500 cursor-default"
            >
              {pub}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
