import { motion } from "framer-motion";

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

function FilmStrip({ direction = "left", rotate = "-2deg" }) {
  const frames = [...Array(50)];
  
  return (
    <div className="overflow-hidden" style={{ transform: `rotate(${rotate})` }}>
      <motion.div 
        className="flex"
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear",
          repeatType: "loop"
        }}
      >
        {[...frames, ...frames].map((_, i) => (
          <div 
            key={i} 
            className="flex-shrink-0 w-12 sm:w-14 h-8 sm:h-10 mx-0.5 relative bg-[#0a0a0a] border border-[#c4a47c]/20"
          >
            <div className="absolute top-0 left-0 right-0 h-1 flex justify-between px-0.5">
              {[...Array(4)].map((_, j) => (
                <div key={j} className="w-0.5 h-0.5 bg-[#c4a47c]/30 rounded-[1px] mt-0.5" />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 flex justify-between px-0.5">
              {[...Array(4)].map((_, j) => (
                <div key={j} className="w-0.5 h-0.5 bg-[#c4a47c]/30 rounded-[1px] mb-0.5" />
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function PressMarquee() {
  return (
    <section className="py-16 lg:py-24 bg-black overflow-hidden">
      <FilmStrip direction="left" rotate="-2deg" />
      
      <div className="py-16 lg:py-20">
        <p className="text-center uppercase tracking-[0.4em] text-[#c69c6d] text-xs mb-12">
          Featured In
        </p>

        <div className="space-y-8">
          <div className="flex items-center gap-12 lg:gap-20 whitespace-nowrap vs-marquee">
            {[...publications, ...publications, ...publications].map((pub, index) => (
              <span
                key={`row1-${index}`}
                className="font-serif italic text-4xl lg:text-5xl text-[#c69c6d] hover:text-[#f4e4ba] hover:drop-shadow-[0_0_30px_rgba(244,228,186,0.8)] hover:scale-105 transition-all duration-300 cursor-default"
              >
                {pub}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-12 lg:gap-20 whitespace-nowrap vs-marquee" style={{ animationDirection: "reverse" }}>
            {[...publications].reverse().concat(publications, publications).map((pub, index) => (
              <span
                key={`row2-${index}`}
                className="font-serif italic text-4xl lg:text-5xl text-[#c69c6d]/70 hover:text-[#f4e4ba] hover:drop-shadow-[0_0_30px_rgba(244,228,186,0.8)] hover:scale-105 transition-all duration-300 cursor-default"
              >
                {pub}
              </span>
            ))}
          </div>
        </div>
      </div>

      <FilmStrip direction="right" rotate="2deg" />
    </section>
  );
}
