import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../components/site/Nav";
import Hero from "../components/site/Hero";
import About from "../components/site/About";
import Filmography from "../components/site/Filmography";
import PortfolioGallery from "../components/site/PortfolioGallery";
import Awards from "../components/site/Awards";
import PressMarquee from "../components/site/PressMarquee";
import InstagramSection from "../components/site/InstagramSection";
import CTASection from "../components/site/CTASection";
import Footer from "../components/site/Footer";
import CustomCursor from "../components/ui/CustomCursor";

export default function Portfolio() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <AnimatePresence>
      <motion.main 
        className="relative min-h-screen bg-[#050505] text-[#f7f5f0] overflow-x-hidden cursor-none lg:cursor-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CustomCursor />
        <Nav />
        <Hero />
        <About />
        <Filmography />
        <PortfolioGallery />
        <Awards />
        <PressMarquee />
        <CTASection />
        <InstagramSection />
        <Footer />
        
        <motion.div
          className="fixed bottom-8 right-8 z-40 hidden lg:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.a
            href="#"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#c69c6d]/20 border border-[#c69c6d]/40 text-[#c69c6d]"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(198, 156, 109, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.main>
    </AnimatePresence>
  );
}
