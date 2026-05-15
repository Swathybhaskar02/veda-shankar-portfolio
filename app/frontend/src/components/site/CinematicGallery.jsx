import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { TextReveal } from "../ui/TextReveal";

const portfolioItems = [
  {
    id: 1,
    year: "2025",
    title: "Vogue India",
    subtitle: "The Stillness Issue",
    category: "Editorial",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=90",
    description: "A 12-page editorial exploring stillness in motion. Shot on location in Rajasthan's abandoned palaces.",
  },
  {
    id: 2,
    year: "2025",
    title: "Forest Essentials",
    subtitle: "Ayurveda Meets Cinema",
    category: "Campaign",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1600&q=90",
    description: "A brand film celebrating ancient beauty rituals through contemporary visual storytelling.",
  },
  {
    id: 3,
    year: "2024",
    title: "Grazia",
    subtitle: "Cover Story",
    category: "Editorial",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1600&q=90",
    description: "The breakout cover that defined the season. Intimate portraits shot in natural light.",
  },
  {
    id: 4,
    year: "2024",
    title: "On Set",
    subtitle: "Behind Aandhi Raat",
    category: "Documentary",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1600&q=90",
    description: "Behind-the-scenes stills from the psychological thriller that premiered at Venice.",
  },
  {
    id: 5,
    year: "2024",
    title: "GQ India",
    subtitle: "Power Issue",
    category: "Portrait",
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=1600&q=90",
    description: "Studio portraits exploring vulnerability and strength in equal measure.",
  },
  {
    id: 6,
    year: "2023",
    title: "Raw Mango",
    subtitle: "Heritage Reimagined",
    category: "Lookbook",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1600&q=90",
    description: "A collaboration celebrating traditional Indian textiles through modern silhouettes.",
  },
];

function FullscreenImage({ item, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.button
        className="absolute top-8 right-8 text-white/60 hover:text-white z-10"
        onClick={onClose}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </motion.button>

      <motion.img
        src={item.image}
        alt={item.title}
        className="max-w-[90vw] max-h-[90vh] object-contain"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4 }}
      />

      <motion.div
        className="absolute bottom-8 left-8 right-8 flex items-end justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div>
          <p className="text-[#c69c6d] text-xs uppercase tracking-widest mb-2">{item.year} · {item.category}</p>
          <h3 className="font-serif text-3xl text-white">{item.title}</h3>
          <p className="font-serif italic text-white/60">{item.subtitle}</p>
        </div>
        <p className="text-white/40 max-w-md text-sm text-right hidden lg:block">{item.description}</p>
      </motion.div>
    </motion.div>
  );
}

function HeroImage({ item, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <motion.div
      ref={ref}
      className="relative h-[90vh] overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 1 }}
    >
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          animate={{ filter: isHovered ? "grayscale(0%)" : "grayscale(30%)" }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30" />

      <motion.div
        className="absolute inset-0 bg-[#c69c6d]/10"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <div className="absolute inset-0 flex items-end">
        <div className="w-full px-8 lg:px-16 pb-16 lg:pb-24">
          <motion.div
            className="max-w-4xl"
            animate={{ y: isHovered ? -20 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.p
              className="text-[#c69c6d] text-xs uppercase tracking-[0.3em] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {item.year} · {item.category}
            </motion.p>

            <motion.h3
              className="font-serif text-5xl lg:text-7xl text-white mb-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {item.title}
            </motion.h3>

            <motion.p
              className="font-serif italic text-2xl lg:text-3xl text-white/60 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {item.subtitle}
            </motion.p>

            <motion.p
              className="text-white/50 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.description}
            </motion.p>
          </motion.div>

          <motion.div
            className="absolute bottom-16 right-16 hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function SplitImage({ item, index, isReversed }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={ref}
      className={`grid lg:grid-cols-2 min-h-[80vh] ${isReversed ? "lg:grid-flow-dense" : ""}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={`relative overflow-hidden cursor-pointer ${isReversed ? "lg:col-start-2" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ y: imageY }}
      >
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover min-h-[60vh]"
          animate={{
            scale: isHovered ? 1.05 : 1,
            filter: isHovered ? "grayscale(0%)" : "grayscale(50%)",
          }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          className="absolute inset-0 bg-[#c69c6d]/10"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-20 h-20 rounded-full border border-white/50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      <div className={`flex items-center px-8 lg:px-16 py-16 bg-[#0a0a0a] ${isReversed ? "lg:col-start-1 lg:text-right" : ""}`}>
        <motion.div
          className="max-w-lg"
          initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[#c69c6d] text-xs uppercase tracking-[0.3em] mb-6">
            {item.year} · {item.category}
          </p>

          <h3 className="font-serif text-4xl lg:text-5xl text-[#f7f5f0] mb-3">
            {item.title}
          </h3>

          <p className="font-serif italic text-xl text-[#a3a3a3] mb-8">
            {item.subtitle}
          </p>

          <p className="text-[#737373] leading-relaxed mb-8">
            {item.description}
          </p>

          <motion.a
            href="#"
            className={`inline-flex items-center gap-2 text-[#c69c6d] text-xs uppercase tracking-widest ${isReversed ? "flex-row-reverse" : ""}`}
            whileHover={{ x: isReversed ? -5 : 5 }}
          >
            <span>View Project</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={isReversed ? "rotate-180" : ""}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function CinematicGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="portfolio" className="bg-[#050505]">
      <div className="py-20 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            className="flex items-center gap-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-[0.4em] text-[#c69c6d] text-xs">04 — Portfolio</p>
            <motion.div
              className="flex-1 h-px bg-white/10"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ originX: 0 }}
            />
            <p className="uppercase tracking-[0.3em] text-[#737373] text-xs hidden md:block">Selected Work</p>
          </motion.div>

          <h2 className="font-serif text-5xl lg:text-7xl text-[#f7f5f0] max-w-4xl mb-8">
            <TextReveal>Every frame tells</TextReveal>
            <br />
            <span className="italic text-[#c69c6d]">
              <TextReveal delay={0.2}>a story worth remembering.</TextReveal>
            </span>
          </h2>

          <motion.p
            className="text-[#a3a3a3] max-w-2xl text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            A curated selection of editorial work, brand campaigns, and cinematic stills that define the visual language of Veda Shankar.
          </motion.p>
        </div>
      </div>

      <div onClick={() => setSelectedImage(portfolioItems[0])}>
        <HeroImage item={portfolioItems[0]} index={0} />
      </div>

      <div className="py-8 lg:py-16">
        {portfolioItems.slice(1, 3).map((item, index) => (
          <div key={item.id} onClick={() => setSelectedImage(item)}>
            <SplitImage item={item} index={index + 1} isReversed={index % 2 !== 0} />
          </div>
        ))}
      </div>

      <div onClick={() => setSelectedImage(portfolioItems[3])}>
        <HeroImage item={portfolioItems[3]} index={3} />
      </div>

      <div className="py-8 lg:py-16">
        {portfolioItems.slice(4).map((item, index) => (
          <div key={item.id} onClick={() => setSelectedImage(item)}>
            <SplitImage item={item} index={index + 4} isReversed={index % 2 === 0} />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <FullscreenImage item={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
