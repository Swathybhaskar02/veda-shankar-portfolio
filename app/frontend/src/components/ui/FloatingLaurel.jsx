import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

export default function FloatingLaurel() {
  const [sectionPositions, setSectionPositions] = useState({ films: 0, awards: 0, total: 1 });
  const [isSettled, setIsSettled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [awardsTopOffset, setAwardsTopOffset] = useState(0);
  const laurelRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  });

  const floatY = useMotionValue(0);
  const floatX = useMotionValue(0);

  useEffect(() => {
    const findSections = () => {
      const filmsSection = document.getElementById("films");
      const awardsSection = document.getElementById("awards");
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (filmsSection && awardsSection) {
        const filmsRect = filmsSection.getBoundingClientRect();
        const awardsRect = awardsSection.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        const awardsAbsoluteTop = awardsRect.top + scrollTop;
        setAwardsTopOffset(awardsAbsoluteTop);
        
        setSectionPositions({
          films: (filmsRect.top + scrollTop) / totalHeight,
          awards: (awardsRect.top + scrollTop) / totalHeight,
          awardsTop: awardsAbsoluteTop,
          total: totalHeight,
        });
      }
    };

    findSections();
    window.addEventListener("resize", findSections);
    
    const timeout = setTimeout(findSections, 1000);
    
    return () => {
      window.removeEventListener("resize", findSections);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    let animationFrame;
    let time = 0;

    const animate = () => {
      time += 0.02;
      if (!isSettled) {
        floatY.set(Math.sin(time) * 12);
        floatX.set(Math.cos(time * 0.7) * 6);
      } else {
        floatY.set(Math.sin(time * 0.5) * 3);
        floatX.set(0);
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [floatY, floatX, isSettled]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const filmsSection = document.getElementById("films");
      const awardsSection = document.getElementById("awards");
      
      if (filmsSection && awardsSection) {
        const filmsRect = filmsSection.getBoundingClientRect();
        const awardsRect = awardsSection.getBoundingClientRect();
        
        const filmsStart = filmsRect.top <= window.innerHeight * 0.8;
        const awardsInView = awardsRect.top <= 200;
        
        setIsVisible(filmsStart);
        setIsSettled(awardsInView);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filmsStart = sectionPositions.films - 0.05;
  const awardsStart = sectionPositions.awards - 0.02;
  
  const yPosition = useTransform(
    smoothProgress, 
    [filmsStart, filmsStart + 0.03, awardsStart - 0.1, awardsStart], 
    [120, 180, 280, 180]
  );
  
  const xOffset = useTransform(
    smoothProgress, 
    [filmsStart, filmsStart + 0.1, awardsStart - 0.1, awardsStart], 
    [60, 30, -10, 0]
  );

  const rotateY = useTransform(
    smoothProgress, 
    [filmsStart, awardsStart - 0.1, awardsStart], 
    [0, 180, 360]
  );
  const rotateX = useTransform(
    smoothProgress, 
    [filmsStart, filmsStart + 0.1, awardsStart - 0.1, awardsStart], 
    [0, 10, -10, 0]
  );
  const rotateZ = useTransform(smoothProgress, [filmsStart, awardsStart], [-8, 0]);
  
  const baseScale = useTransform(
    smoothProgress, 
    [filmsStart, filmsStart + 0.05, awardsStart - 0.05, awardsStart], 
    [0.6, 0.85, 1.0, 1.1]
  );
  const scale = useSpring(baseScale, { stiffness: 100, damping: 20 });

  return (
    <motion.div
      ref={laurelRef}
      className={`fixed z-30 pointer-events-none hidden lg:block ${isSettled ? "right-12 xl:right-16" : "right-8 lg:right-16"}`}
      style={{
        top: isSettled ? "180px" : undefined,
        y: isSettled ? 0 : yPosition,
        x: isSettled ? 0 : xOffset,
        scale: isSettled ? 1.1 : scale,
        rotateY: isSettled ? 360 : rotateY,
        rotateX: isSettled ? 0 : rotateX,
        rotateZ: isSettled ? 0 : rotateZ,
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        style={{
          y: floatY,
          x: floatX,
        }}
        animate={{
          filter: isSettled 
            ? "drop-shadow(0 0 30px rgba(198, 156, 109, 0.6))" 
            : "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4))",
        }}
        transition={{ duration: 0.5 }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
        >
          <defs>
            <linearGradient id="laurelGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="25%" stopColor="#f4e4ba" />
              <stop offset="50%" stopColor="#c69c6d" />
              <stop offset="75%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#a67c52" />
            </linearGradient>
            <linearGradient id="laurelHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fff8e7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#c69c6d" stopOpacity="0" />
            </linearGradient>
            <filter id="innerGlow">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          <g filter="url(#innerGlow)">
            <path
              d="M50 15 C45 20, 35 22, 30 28 C25 34, 22 42, 20 50 C18 58, 20 68, 25 75 C30 82, 38 88, 45 92"
              stroke="url(#laurelGold)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            
            <ellipse cx="28" cy="25" rx="6" ry="10" fill="url(#laurelGold)" transform="rotate(-30 28 25)" />
            <ellipse cx="22" cy="35" rx="6" ry="10" fill="url(#laurelGold)" transform="rotate(-45 22 35)" />
            <ellipse cx="19" cy="47" rx="6" ry="10" fill="url(#laurelGold)" transform="rotate(-60 19 47)" />
            <ellipse cx="20" cy="60" rx="6" ry="10" fill="url(#laurelGold)" transform="rotate(-75 20 60)" />
            <ellipse cx="25" cy="72" rx="6" ry="10" fill="url(#laurelGold)" transform="rotate(-85 25 72)" />
            <ellipse cx="33" cy="82" rx="6" ry="10" fill="url(#laurelGold)" transform="rotate(-95 33 82)" />
            <ellipse cx="43" cy="90" rx="5" ry="8" fill="url(#laurelGold)" transform="rotate(-100 43 90)" />

            <ellipse cx="28" cy="25" rx="3" ry="6" fill="url(#laurelHighlight)" transform="rotate(-30 28 25)" />
            <ellipse cx="22" cy="35" rx="3" ry="6" fill="url(#laurelHighlight)" transform="rotate(-45 22 35)" />
            <ellipse cx="19" cy="47" rx="3" ry="6" fill="url(#laurelHighlight)" transform="rotate(-60 19 47)" />
            <ellipse cx="20" cy="60" rx="3" ry="6" fill="url(#laurelHighlight)" transform="rotate(-75 20 60)" />
            <ellipse cx="25" cy="72" rx="3" ry="6" fill="url(#laurelHighlight)" transform="rotate(-85 25 72)" />
            
            <path
              d="M50 15 C55 20, 65 22, 70 28 C75 34, 78 42, 80 50 C82 58, 80 68, 75 75 C70 82, 62 88, 55 92"
              stroke="url(#laurelGold)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            
            <ellipse cx="72" cy="25" rx="6" ry="10" fill="url(#laurelGold)" transform="rotate(30 72 25)" />
            <ellipse cx="78" cy="35" rx="6" ry="10" fill="url(#laurelGold)" transform="rotate(45 78 35)" />
            <ellipse cx="81" cy="47" rx="6" ry="10" fill="url(#laurelGold)" transform="rotate(60 81 47)" />
            <ellipse cx="80" cy="60" rx="6" ry="10" fill="url(#laurelGold)" transform="rotate(75 80 60)" />
            <ellipse cx="75" cy="72" rx="6" ry="10" fill="url(#laurelGold)" transform="rotate(85 75 72)" />
            <ellipse cx="67" cy="82" rx="6" ry="10" fill="url(#laurelGold)" transform="rotate(95 67 82)" />
            <ellipse cx="57" cy="90" rx="5" ry="8" fill="url(#laurelGold)" transform="rotate(100 57 90)" />

            <ellipse cx="72" cy="25" rx="3" ry="6" fill="url(#laurelHighlight)" transform="rotate(30 72 25)" />
            <ellipse cx="78" cy="35" rx="3" ry="6" fill="url(#laurelHighlight)" transform="rotate(45 78 35)" />
            <ellipse cx="81" cy="47" rx="3" ry="6" fill="url(#laurelHighlight)" transform="rotate(60 81 47)" />
            <ellipse cx="80" cy="60" rx="3" ry="6" fill="url(#laurelHighlight)" transform="rotate(75 80 60)" />
            <ellipse cx="75" cy="72" rx="3" ry="6" fill="url(#laurelHighlight)" transform="rotate(85 75 72)" />
          </g>

          <circle cx="50" cy="10" r="4" fill="url(#laurelGold)" />
          <path
            d="M46 10 L50 5 L54 10"
            stroke="url(#laurelGold)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          <motion.circle
            cx="50"
            cy="10"
            r="6"
            fill="none"
            stroke="#f4e4ba"
            strokeWidth="1"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              scale: [0.5, 1.5, 2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </svg>

        {isSettled && (
          <motion.div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <span className="text-[8px] text-[#c69c6d]/80 uppercase tracking-[0.2em] font-medium">
              Recognition
            </span>
          </motion.div>
        )}
      </motion.div>

      {isSettled && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#c69c6d]"
              style={{
                left: "50%",
                top: "50%",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
                x: Math.cos((i * Math.PI * 2) / 6) * 40,
                y: Math.sin((i * Math.PI * 2) / 6) * 40,
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
}
