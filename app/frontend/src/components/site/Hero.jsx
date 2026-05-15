import { useState } from "react";

export default function Hero() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleInteraction = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setPos({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
  };

  return (
    <section 
      className="relative min-h-screen flex items-end pb-24 lg:pb-40 overflow-hidden bg-black cursor-none lg:cursor-auto"
      onMouseMove={handleInteraction}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onTouchStart={(e) => { setIsActive(true); handleInteraction(e); }}
      onTouchMove={handleInteraction}
      onTouchEnd={() => setIsActive(false)}
    >
      <div
        className="absolute inset-0 bg-cover bg-[center_25%] lg:bg-[60%_25%] bg-no-repeat grayscale"
        style={{ backgroundImage: `url('/images/veda-2.jpg')` }}
      />
      
      <div
        className="absolute inset-0 bg-cover bg-[center_25%] lg:bg-[60%_25%] bg-no-repeat pointer-events-none"
        style={{ 
          backgroundImage: `url('/images/veda-2.jpg')`,
          opacity: isActive ? 1 : 0,
          transition: 'opacity 0.4s ease',
          maskImage: `radial-gradient(circle 200px at ${pos.x}px ${pos.y}px, black 0%, black 40%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 200px at ${pos.x}px ${pos.y}px, black 0%, black 40%, transparent 100%)`,
        }}
      />

      {isActive && (
        <div 
          className="absolute w-[400px] h-[400px] rounded-full pointer-events-none z-20 mix-blend-soft-light"
          style={{
            left: pos.x - 200,
            top: pos.y - 200,
            background: 'radial-gradient(circle, rgba(196,164,124,0.3) 0%, rgba(196,164,124,0.1) 40%, transparent 70%)',
            filter: 'blur(20px)',
            transition: 'left 0.05s ease-out, top 0.05s ease-out',
          }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/70 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[#c4a47c] uppercase tracking-[0.2em] text-[11px] font-medium mb-6">
              Portfolio · MMXXVI
            </p>

            <h1 className="font-serif text-[13vw] lg:text-[10vw] leading-[0.88] text-[#f5f3ee] tracking-[-0.02em]">
              <span className="block italic font-light">Veda</span>
              <span className="block text-[#c4a47c] font-normal">Shankar</span>
            </h1>

            <p className="mt-10 text-[#666666] uppercase tracking-[0.18em] text-[10px] font-medium">
              Now Booking · 2026
            </p>

            <p className="mt-8 font-serif italic text-lg lg:text-xl text-[#f5f3ee]/70 max-w-md leading-[1.6] font-light">
              "I want the frame to feel my absence before it ever finds my face."
            </p>
          </div>

          <div className="hidden lg:block text-right">
            <p className="uppercase tracking-[0.18em] text-[10px] text-[#9a9a9a] font-medium mb-3">
              Actress · Storyteller
            </p>
            <p className="text-[#666666] text-[13px] font-light">
              Mumbai · Bengaluru
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-20 pt-10 border-t border-white/[0.06]">
          <a
            href="#about"
            className="flex items-center gap-4 text-[#9a9a9a] hover:text-[#f5f3ee] transition-all duration-500 group"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="animate-bounce"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
            <span className="uppercase tracking-[0.2em] text-[10px] font-medium">
              Explore
            </span>
          </a>

          <span className="text-[#666666] text-[12px] font-light tracking-wide">
            01 / 06
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}
