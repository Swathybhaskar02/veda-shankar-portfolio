import { motion } from "framer-motion";

const films = [
  {
    id: 1,
    title: "Vaazha 2: Biopic of a Billion Bros",
    year: "2026",
    studio: "Malayalam Cinema",
    director: "Vipin Das",
    role: "Female Lead",
    approach: "In my breakout role, I portrayed a grounded character who becomes the emotional anchor of the film. My focus was on understated presence — providing the motivation and support that drives the lead characters forward. It was a performance that resonated deeply with audiences across Kerala.",
    awards: "Breakout Performance — 2026 Malayalam Box Office Hit",
    video: "/videos/vaazha2.mp4",
    poster: "/images/veda-3.jpg",
  },
  {
    id: 2,
    title: "No Land Beneath Our Wings",
    year: "2025",
    studio: "Independent Film",
    director: "—",
    role: "Lead",
    approach: "This project showcased my range before my mainstream breakthrough. This indie feature allowed me to explore complex emotional terrain, laying the foundation for the nuanced performances that would soon capture wider attention.",
    awards: null,
    video: "https://videos.pexels.com/video-files/3015510/3015510-hd_1920_1080_24fps.mp4",
    poster: "/images/veda-4.jpg",
  },
];

function FilmStripDivider() {
  const frames = [...Array(40)];
  
  return (
    <div className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="w-[250%] sm:w-[200%] -rotate-2 sm:-rotate-3">
        <motion.div 
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {[...frames, ...frames].map((_, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-16 sm:w-20 h-12 sm:h-14 mx-0.5 relative bg-[#0a0a0a] border border-[#c4a47c]/30"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 flex justify-between px-0.5">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="w-1 h-1 bg-[#c4a47c]/50 rounded-[1px] mt-0.5" />
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1.5 flex justify-between px-0.5">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="w-1 h-1 bg-[#c4a47c]/50 rounded-[1px] mb-0.5" />
                ))}
              </div>
              <div className="absolute inset-1.5 top-2.5 bottom-2.5 bg-[#c4a47c]/10" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function FilmBlock({ film, index, isReversed }) {
  return (
    <div className="relative py-14 sm:py-18 lg:py-24">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 xl:gap-16 items-center">
          
          <div className={`relative lg:col-span-3 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
            <div className="relative aspect-[16/9] overflow-hidden bg-black group">
              <video
                src={film.video}
                poster={film.poster}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 cursor-pointer">
                <button className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full border border-white/60 flex items-center justify-center bg-black/30 backdrop-blur-sm hover:bg-[#c4a47c]/30 transition-colors duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="ml-1">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </button>
              </div>

              <div className="absolute bottom-4 sm:bottom-5 lg:bottom-6 left-4 sm:left-5 lg:left-6 right-4 sm:right-5 lg:right-6 flex items-end justify-between">
                <div>
                  <p className="text-white/50 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-medium mb-1">{film.year}</p>
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-white font-light">{film.title}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className={`space-y-5 sm:space-y-6 lg:col-span-2 ${isReversed ? "lg:order-1 lg:text-right" : "lg:order-2"}`}>
            <div>
              <p className="text-[#c4a47c] text-[9px] sm:text-[10px] uppercase tracking-[0.18em] font-medium mb-3">
                {film.studio} · Dir. {film.director}
              </p>
              <h2 className="font-serif text-xl sm:text-2xl lg:text-[28px] text-[#f5f3ee] mb-2 font-light leading-[1.2]">
                {film.title}
              </h2>
              <p className="text-[#c4a47c] font-serif italic text-[14px] sm:text-[15px] font-light">{film.role}</p>
            </div>

            <div className={`${isReversed ? "lg:ml-auto" : ""}`}>
              <p className="text-[#666666] text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-medium mb-2">The Approach</p>
              <p className="text-[#9a9a9a] text-[13px] sm:text-[14px] leading-[1.75]">
                {film.approach}
              </p>
            </div>

            {film.awards && (
              <div className={`inline-flex items-center gap-2.5 px-3.5 py-2.5 bg-[#c4a47c]/8 border border-[#c4a47c]/15 ${isReversed ? "lg:ml-auto" : ""}`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c4a47c" strokeWidth="1.5" className="flex-shrink-0">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-[#c4a47c] text-[9px] sm:text-[10px] font-medium">{film.awards}</span>
              </div>
            )}

            <div className={`pt-2 ${isReversed ? "lg:flex lg:justify-end" : ""}`}>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#f5f3ee] text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-medium group hover:text-[#c4a47c] transition-colors duration-300"
              >
                {isReversed && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="rotate-180">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
                <span>View Credits</span>
                {!isReversed && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Filmography() {
  return (
    <section id="films" className="relative bg-black">
      <div className="relative">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-20 sm:pt-28 lg:pt-40">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-12 lg:mb-16">
            <p className="uppercase tracking-[0.2em] text-[#c4a47c] text-[10px] font-medium">Filmography</p>
            <div className="flex-1 h-px bg-white/[0.06] hidden sm:block" />
            <p className="uppercase tracking-[0.18em] text-[#666666] text-[10px] font-medium">Featured Work</p>
          </div>

          <h2 className="font-serif text-[24px] sm:text-[32px] lg:text-[40px] text-[#f5f3ee] max-w-2xl leading-[1.2] font-light">
            Stories that stay long after the screen fades to black.
          </h2>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20">
          {films.map((film, index) => (
            <div key={film.id}>
              <FilmBlock 
                film={film} 
                index={index}
                isReversed={index % 2 !== 0}
              />
              {index < films.length - 1 && <FilmStripDivider />}
            </div>
          ))}
        </div>

        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-16 sm:py-20 lg:py-28 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-6 py-3 border border-[#c4a47c]/25 text-[#c4a47c] text-[10px] uppercase tracking-[0.15em] font-medium hover:bg-[#c4a47c]/8 transition-all duration-400"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Watch Showreel
          </a>
        </div>
      </div>
    </section>
  );
}
