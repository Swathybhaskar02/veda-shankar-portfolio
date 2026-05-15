import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { TextReveal } from "../ui/TextReveal";
import { FadeInOnScroll } from "../ui/SmoothScroll";
import MagneticButton from "../ui/MagneticButton";

const films = [
  {
    id: 1,
    title: "Aandhi Raat",
    year: "2025",
    studio: "Noir Pictures",
    role: "Lead — Maya",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
  },
  {
    id: 2,
    title: "Kaagaz Ke Phool",
    year: "2024",
    studio: "Mira Nair Films",
    role: "Supporting — Aaradhya",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
  },
  {
    id: 3,
    title: "Monsoon Letters",
    year: "2024",
    studio: "Sister Pictures",
    role: "Lead — Ira",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
  },
  {
    id: 4,
    title: "Showreel · 2025",
    year: "2025",
    studio: "Compiled",
    role: "Reel",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80",
  },
];

function FilmCard({ film, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          ref={cardRef}
          className="group relative aspect-[16/10] overflow-hidden cursor-pointer bg-[#0a0a0a]"
          style={{ y, scale }}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.02 }}
          data-cursor
          data-cursor-text="Play"
        >
          <motion.img
            src={film.image}
            alt={film.title}
            className="absolute inset-0 w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
              opacity: isHovered ? 0.9 : 0.6,
            }}
            transition={{ duration: 0.6 }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
          >
            <motion.div
              className="w-20 h-20 rounded-full border-2 border-[#c69c6d]/60 flex items-center justify-center"
              animate={{
                scale: isHovered ? 1.1 : 1,
                borderColor: isHovered ? "rgba(198, 156, 109, 1)" : "rgba(198, 156, 109, 0.6)",
                backgroundColor: isHovered ? "rgba(198, 156, 109, 0.1)" : "transparent",
              }}
              transition={{ duration: 0.3 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#c69c6d] ml-1"
                animate={{ x: isHovered ? 2 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
              </motion.svg>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            <div className="flex items-center justify-between mb-2">
              <motion.p
                className="text-[#737373] text-xs uppercase tracking-[0.15em]"
                animate={{ y: isHovered ? -5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {film.year} · {film.studio}
              </motion.p>
              <p className="text-[#737373] text-xs uppercase tracking-[0.15em]">Role</p>
            </div>
            <div className="flex items-center justify-between">
              <motion.h3
                className="font-serif text-xl lg:text-2xl text-[#f7f5f0]"
                animate={{ y: isHovered ? -5 : 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
              >
                {film.title}
              </motion.h3>
              <motion.p
                className="text-[#a3a3a3] text-sm"
                animate={{ y: isHovered ? -5 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {film.role}
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center"
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: isHovered ? 1 : 0, rotate: isHovered ? 0 : -45 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c69c6d" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </motion.div>
        </motion.div>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle className="sr-only">{film.title}</DialogTitle>
        <DialogDescription className="sr-only">{film.title} ({film.year})</DialogDescription>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <span className="text-[#c69c6d] text-xs uppercase tracking-[0.15em]">{film.year}</span>
            <span className="w-1 h-1 rounded-full bg-[#c69c6d]" />
            <span className="text-[#737373] text-xs uppercase tracking-[0.15em]">{film.studio}</span>
          </div>
          <h3 className="font-serif text-2xl text-[#f7f5f0]">{film.title}</h3>
          <div className="aspect-video bg-black rounded overflow-hidden relative">
            <img src={film.image} alt={film.title} className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-20 h-20 rounded-full border-2 border-[#c69c6d] flex items-center justify-center bg-black/50 cursor-pointer"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(198, 156, 109, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#c69c6d] ml-1">
                  <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                </svg>
              </motion.div>
            </div>
          </div>
          <p className="text-[#a3a3a3] text-sm">Role: {film.role}</p>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

export default function MovieClippings() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} id="films" className="py-32 lg:py-40 px-6 lg:px-12 bg-[#050505] overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        <motion.div
          className="flex items-center gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.4em] text-[#c69c6d] text-xs">04 — Filmography</p>
          <motion.div
            className="flex-1 h-px bg-white/10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ originX: 0 }}
          />
          <p className="uppercase tracking-[0.3em] text-[#737373] text-xs hidden md:block">Clippings · Reels</p>
        </motion.div>

        <div className="mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-[#f7f5f0] leading-tight max-w-3xl">
            <TextReveal>Selected films, shorts and</TextReveal>{" "}
            <span className="italic text-[#c69c6d]">
              <TextReveal delay={0.2}>unreleased reels.</TextReveal>
            </span>
          </h2>
          <FadeInOnScroll delay={0.3}>
            <p className="mt-6 text-[#a3a3a3] max-w-2xl leading-relaxed">
              A working selection of feature roles, independent shorts and a current showreel. 
              Press play for embeds — or step inside for the gallery view.
            </p>
          </FadeInOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {films.map((film, index) => (
            <FilmCard key={film.id} film={film} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MagneticButton>
            <motion.a
              href="#"
              className="inline-flex items-center gap-3 text-[#c69c6d] text-xs uppercase tracking-[0.2em] group"
              whileHover="hover"
            >
              <span>Watch Full Reel</span>
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                variants={{ hover: { x: 5 } }}
                transition={{ duration: 0.3 }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </motion.a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
