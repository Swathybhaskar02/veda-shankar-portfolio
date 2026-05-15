import { useState, useRef, useEffect } from "react";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { TextReveal } from "../ui/TextReveal";

const portfolioItems = [
  {
    id: 1,
    year: "2025",
    title: "Twilight Editorial",
    subtitle: "Tropical Noir",
    category: "Editorial",
    image: "/images/veda-5.jpg",
  },
  {
    id: 2,
    year: "2025",
    title: "Night & Shadow",
    subtitle: "Moody Elegance",
    category: "Portrait",
    image: "/images/veda-4.jpg",
  },
  {
    id: 3,
    year: "2024",
    title: "Film Noir",
    subtitle: "Cinematic Stills",
    category: "Cinema",
    image: "/images/veda-3.jpg",
  },
  {
    id: 4,
    year: "2024",
    title: "Pondicherry Dreams",
    subtitle: "Floral Collection",
    category: "Lookbook",
    image: "/images/veda-2.jpg",
  },
  {
    id: 5,
    year: "2024",
    title: "Golden Hour",
    subtitle: "Candid Portraits",
    category: "Portrait",
    image: "/images/veda-1.jpg",
  },
  {
    id: 6,
    year: "2024",
    title: "Midnight Garden",
    subtitle: "Editorial Series",
    category: "Editorial",
    image: "/images/veda-4.jpg",
  },
  {
    id: 7,
    year: "2024",
    title: "Balcony Sessions",
    subtitle: "Monochrome Study",
    category: "Art",
    image: "/images/veda-3.jpg",
  },
  {
    id: 8,
    year: "2024",
    title: "Heritage Steps",
    subtitle: "Traditional Meets Modern",
    category: "Lookbook",
    image: "/images/veda-2.jpg",
  },
];

function PortfolioCard({ item, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[340px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(item)}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a]">
        <motion.img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.06 : 1,
            filter: isHovered ? "grayscale(0%) brightness(1)" : "grayscale(50%) brightness(0.92)",
          }}
          transition={{ duration: 0.6 }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

        <motion.div
          className="absolute inset-0 bg-[#c4a47c]/8"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        <motion.span 
          className="absolute top-4 left-4 px-2 py-1 bg-black/50 backdrop-blur-sm text-[#c4a47c] text-[9px] uppercase tracking-[0.12em] font-medium"
          animate={{ opacity: isHovered ? 1 : 0.4 }}
        >
          {item.category}
        </motion.span>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-[#c4a47c] text-[10px] font-medium mb-1">{item.year}</p>
          <h3 className="font-serif text-[16px] text-white leading-tight font-light">{item.title}</h3>
          <motion.p 
            className="text-[#777] text-[11px] mt-1 italic"
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 4 }}
            transition={{ duration: 0.25 }}
          >
            {item.subtitle}
          </motion.p>
        </div>

        <motion.div
          className="absolute bottom-4 right-4"
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.85 }}
          transition={{ duration: 0.25 }}
        >
          <div className="w-9 h-9 rounded-full bg-[#c4a47c] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="1.5">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function InfiniteSlider({ items, direction = "left", speed = 25, onSelect }) {
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedItems = [...items, ...items, ...items];
  const containerRef = useRef(null);

  return (
    <div 
      className="overflow-hidden cursor-grab active:cursor-grabbing"
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-4 sm:gap-6"
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0.1}
        animate={isPaused ? {} : {
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
        onDragStart={() => setIsPaused(true)}
        whileTap={{ cursor: "grabbing" }}
      >
        {duplicatedItems.map((item, index) => (
          <PortfolioCard 
            key={`${item.id}-${index}`} 
            item={item} 
            onSelect={onSelect}
          />
        ))}
      </motion.div>
    </div>
  );
}

function FilmStripModal({ item, onClose }) {
  if (!item) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/96 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.button
        className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white/50 hover:text-white z-10 p-2 transition-colors duration-400"
        onClick={onClose}
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </motion.button>

      <motion.div
        className="max-w-4xl w-full"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-[#0a0a0a] border border-white/[0.06]">
          <div className="absolute top-0 bottom-0 left-0 w-7 sm:w-9 flex flex-col justify-around py-4">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#141414] rounded-sm mx-auto" />
            ))}
          </div>
          <div className="absolute top-0 bottom-0 right-0 w-7 sm:w-9 flex flex-col justify-around py-4">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#141414] rounded-sm mx-auto" />
            ))}
          </div>
          
          <div className="px-11 sm:px-14 py-6 sm:py-8">
            <img
              src={item.image}
              alt={item.title}
              className="w-full max-h-[65vh] object-contain"
            />
          </div>
        </div>
        
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-[#c4a47c] text-[10px] uppercase tracking-[0.15em] font-medium">{item.year}</span>
            <span className="w-1 h-1 rounded-full bg-[#c4a47c]" />
            <span className="text-[#666666] text-[10px] uppercase tracking-[0.15em] font-medium">{item.category}</span>
          </div>
          <h3 className="font-serif text-[22px] text-white font-light">{item.title}</h3>
          <p className="text-[#666666] text-[13px] italic mt-1">{item.subtitle}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioGallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  const topRowItems = portfolioItems.slice(0, 4);
  const bottomRowItems = portfolioItems.slice(4);

  return (
    <section id="portfolio" className="py-24 sm:py-32 lg:py-44 bg-[#050505] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 mb-14 sm:mb-18">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.2em] text-[#c4a47c] text-[10px] font-medium">Portfolio</p>
          <div className="flex-1 h-px bg-white/[0.06] hidden sm:block" />
          <p className="uppercase tracking-[0.18em] text-[#666666] text-[10px] font-medium">Selected Work</p>
        </motion.div>

        <motion.h2
          className="font-serif text-[26px] sm:text-[32px] lg:text-[40px] text-[#f5f3ee] max-w-2xl leading-[1.2] tracking-[-0.01em]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <TextReveal>
            Frames that linger long after the credits roll.
          </TextReveal>
        </motion.h2>
      </div>

      <div className="space-y-7 sm:space-y-9">
        <InfiniteSlider 
          items={topRowItems} 
          direction="left" 
          speed={35}
          onSelect={setSelectedItem}
        />
        
        <InfiniteSlider 
          items={bottomRowItems} 
          direction="right" 
          speed={40}
          onSelect={setSelectedItem}
        />
      </div>

      <motion.div 
        className="max-w-[1400px] mx-auto px-8 lg:px-16 mt-14 sm:mt-18 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-[#444444] text-[11px] font-medium">Drag to scroll · Click to view</p>
      </motion.div>

      <AnimatePresence>
        {selectedItem && (
          <FilmStripModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
