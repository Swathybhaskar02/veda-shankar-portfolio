import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#films", label: "Films" },
  { href: "/collabs", label: "Collabs" },
  { href: "/profile", label: "Profile" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.5, 0.92]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.04]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ backgroundColor: `rgba(5, 5, 5, ${isScrolled ? 0.92 : 0.5})` }}
    >
      <motion.div
        className="absolute inset-0 backdrop-blur-xl"
        style={{ opacity: navOpacity }}
      />

      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-16 py-5 flex items-center justify-between">
        <MagneticButton>
          <a href="/" className="flex items-center gap-3 group">
            <motion.span 
              className="w-1.5 h-1.5 rounded-full bg-[#c4a47c]"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <span className="font-serif text-lg text-[#f5f3ee] tracking-[-0.01em]">
              <span className="italic font-light">Veda</span> Shankar
            </span>
          </a>
        </MagneticButton>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <MagneticButton key={link.href}>
              <motion.a
                href={link.href}
                className="relative text-[10px] uppercase tracking-[0.18em] text-[#9a9a9a] hover:text-[#f5f3ee] transition-all duration-400 py-2 font-medium"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover="hover"
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-px bg-[#c4a47c]"
                  initial={{ scaleX: 0 }}
                  variants={{
                    hover: { scaleX: 1 }
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ originX: 0 }}
                />
              </motion.a>
            </MagneticButton>
          ))}

          <MagneticButton className="ml-6">
            <motion.a
              href="/#connect"
              className="relative px-5 py-2.5 text-[#c4a47c] text-[10px] uppercase tracking-[0.15em] font-medium flex items-center gap-2 overflow-hidden group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover="hover"
            >
              <motion.span
                className="absolute inset-0 bg-[#c4a47c]/12 border border-[#c4a47c]/25"
                variants={{
                  hover: { scale: 1.03 }
                }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative">Enquire</span>
              <motion.svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="relative"
                variants={{
                  hover: { x: 2 }
                }}
                transition={{ duration: 0.4 }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </motion.a>
          </MagneticButton>
        </nav>

        <motion.button
          className="lg:hidden text-[#f5f3ee] relative w-8 h-8 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="absolute w-4 h-[1.5px] bg-current"
            animate={{
              rotate: mobileMenuOpen ? 45 : 0,
              y: mobileMenuOpen ? 0 : -3,
            }}
            transition={{ duration: 0.35 }}
          />
          <motion.span
            className="absolute w-4 h-[1.5px] bg-current"
            animate={{
              opacity: mobileMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.35 }}
          />
          <motion.span
            className="absolute w-4 h-[1.5px] bg-current"
            animate={{
              rotate: mobileMenuOpen ? -45 : 0,
              y: mobileMenuOpen ? 0 : 3,
            }}
            transition={{ duration: 0.35 }}
          />
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-[#050505]/98 border-t border-white/[0.04] overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <nav className="flex flex-col px-8 py-8 gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.18em] text-[#9a9a9a] hover:text-[#f5f3ee] py-3 border-b border-white/[0.04] font-medium transition-colors duration-400"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/#connect"
                className="mt-6 px-5 py-3 bg-[#c4a47c]/12 border border-[#c4a47c]/25 text-[#c4a47c] text-[10px] uppercase tracking-[0.15em] text-center font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.25 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Enquire
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
