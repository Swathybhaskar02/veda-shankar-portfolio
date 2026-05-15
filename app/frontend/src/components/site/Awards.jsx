import { motion } from "framer-motion";

const awards = [
  { year: "2025", title: "Best Female Debut", organization: "Filmfare Critics Circle", film: "For Aandhi Raat" },
  { year: "2024", title: "Special Jury Mention", organization: "MAMI Mumbai Film Festival", film: "Monsoon Letters" },
  { year: "2024", title: "Rising Talent of the Year", organization: "Vogue Women of the Year", film: null },
  { year: "2023", title: "Best Short — Performance", organization: "Dharamshala International FF", film: "Coda" },
  { year: "2023", title: "Audience Choice", organization: "Bengaluru Film Society", film: "Untitled Verse" },
];

function GoldLaurelBadge() {
  return (
    <motion.div 
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        animate={{ 
          filter: ["drop-shadow(0 0 15px rgba(198, 156, 109, 0.4))", "drop-shadow(0 0 25px rgba(198, 156, 109, 0.7))", "drop-shadow(0 0 15px rgba(198, 156, 109, 0.4))"]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="awardGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="25%" stopColor="#f4e4ba" />
              <stop offset="50%" stopColor="#c69c6d" />
              <stop offset="75%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#a67c52" />
            </linearGradient>
            <linearGradient id="awardHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fff8e7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#c69c6d" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          <g>
            <path
              d="M50 12 C42 18, 30 20, 24 28 C18 36, 14 46, 14 55 C14 65, 18 75, 26 82 C34 89, 42 94, 48 96"
              stroke="url(#awardGold)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            
            <ellipse cx="26" cy="22" rx="7" ry="11" fill="url(#awardGold)" transform="rotate(-25 26 22)" />
            <ellipse cx="18" cy="34" rx="7" ry="11" fill="url(#awardGold)" transform="rotate(-40 18 34)" />
            <ellipse cx="14" cy="48" rx="7" ry="11" fill="url(#awardGold)" transform="rotate(-55 14 48)" />
            <ellipse cx="15" cy="62" rx="7" ry="11" fill="url(#awardGold)" transform="rotate(-70 15 62)" />
            <ellipse cx="22" cy="75" rx="7" ry="11" fill="url(#awardGold)" transform="rotate(-80 22 75)" />
            <ellipse cx="32" cy="86" rx="6" ry="10" fill="url(#awardGold)" transform="rotate(-90 32 86)" />
            <ellipse cx="44" cy="93" rx="5" ry="8" fill="url(#awardGold)" transform="rotate(-95 44 93)" />
            
            <path
              d="M50 12 C58 18, 70 20, 76 28 C82 36, 86 46, 86 55 C86 65, 82 75, 74 82 C66 89, 58 94, 52 96"
              stroke="url(#awardGold)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            
            <ellipse cx="74" cy="22" rx="7" ry="11" fill="url(#awardGold)" transform="rotate(25 74 22)" />
            <ellipse cx="82" cy="34" rx="7" ry="11" fill="url(#awardGold)" transform="rotate(40 82 34)" />
            <ellipse cx="86" cy="48" rx="7" ry="11" fill="url(#awardGold)" transform="rotate(55 86 48)" />
            <ellipse cx="85" cy="62" rx="7" ry="11" fill="url(#awardGold)" transform="rotate(70 85 62)" />
            <ellipse cx="78" cy="75" rx="7" ry="11" fill="url(#awardGold)" transform="rotate(80 78 75)" />
            <ellipse cx="68" cy="86" rx="6" ry="10" fill="url(#awardGold)" transform="rotate(90 68 86)" />
            <ellipse cx="56" cy="93" rx="5" ry="8" fill="url(#awardGold)" transform="rotate(95 56 93)" />
          </g>
          
          <text x="50" y="56" textAnchor="middle" className="font-serif" fill="url(#awardGold)" fontSize="11" fontWeight="300" fontStyle="italic">
            AWARDS
          </text>
        </svg>
      </motion.div>

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#f4e4ba]"
          style={{
            left: "50%",
            top: "50%",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            x: [0, Math.cos((i * Math.PI * 2) / 8) * 80],
            y: [0, Math.sin((i * Math.PI * 2) / 8) * 80],
          }}
          transition={{
            duration: 2.5,
            delay: i * 0.15,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      ))}
    </motion.div>
  );
}

export default function Awards() {
  return (
    <section id="awards" className="py-32 lg:py-40 px-6 lg:px-12 bg-black overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-center justify-between mb-12">
          <p className="uppercase tracking-[0.3em] text-[#c69c6d] text-[10px]">05 — Awards</p>
          <p className="uppercase tracking-[0.3em] text-[#c69c6d] text-[10px]">Recognition</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          <div className="flex items-start gap-6">
            <h2 className="font-serif text-[36px] lg:text-[44px] text-[#f7f5f0] leading-[1.1] font-light">
              Awards &
              <br />
              <span className="italic text-[#c69c6d]">Recognition</span>
            </h2>
            <div className="mt-2">
              <GoldLaurelBadge />
            </div>
          </div>
          <div className="lg:pt-4">
            <p className="text-[#a3a3a3] leading-[1.8] text-[13px] lg:text-[14px] max-w-md">
              A short list of moments where my craft was recognised — across juries, critics circles and audience choice.
            </p>
          </div>
        </div>

        <div>
          {awards.map((award, index) => (
            <div
              key={index}
              className="group grid grid-cols-12 gap-4 py-7 border-t border-white/10 hover:border-[#c69c6d]/30 transition-colors duration-500"
            >
              <div className="col-span-2 lg:col-span-2">
                <p className="font-serif text-[28px] lg:text-[32px] text-[#c69c6d] font-light">
                  {award.year}
                </p>
              </div>
              <div className="col-span-6 lg:col-span-6">
                <h3 className="font-serif italic text-lg lg:text-[22px] text-[#f7f5f0] group-hover:text-[#c69c6d] transition-colors duration-500 mb-1">
                  {award.title}
                </h3>
                <p className="text-[#666666] text-[11px] lg:text-[12px]">{award.organization}</p>
              </div>
              <div className="col-span-4 lg:col-span-4 text-right">
                {award.film && (
                  <p className="text-[#666666] text-[10px] lg:text-[11px] uppercase tracking-[0.15em]">{award.film}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
