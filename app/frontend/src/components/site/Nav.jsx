import { useState, useEffect } from "react";

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.04] transition-all duration-500"
      style={{ backgroundColor: `rgba(5, 5, 5, ${isScrolled ? 0.95 : 0.7})` }}
    >
      <div className="absolute inset-0 backdrop-blur-xl" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c4a47c]" />
          <span className="font-serif text-lg text-[#f5f3ee] tracking-[-0.01em]">
            <span className="italic font-light">Veda</span> Shankar
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[10px] uppercase tracking-[0.18em] text-[#9a9a9a] hover:text-[#f5f3ee] transition-all duration-400 py-2 font-medium group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-px bg-[#c4a47c] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            </a>
          ))}

          <a
            href="/#connect"
            className="relative ml-6 px-5 py-2.5 text-[#c4a47c] text-[10px] uppercase tracking-[0.15em] font-medium flex items-center gap-2 bg-[#c4a47c]/12 border border-[#c4a47c]/25 hover:bg-[#c4a47c]/20 transition-all duration-400"
          >
            <span>Enquire</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </nav>

        <button
          type="button"
          className="lg:hidden relative w-12 h-12 flex items-center justify-center z-[100] -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span 
              className={`block w-full h-[2px] bg-[#f5f3ee] transition-all duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}
            />
            <span 
              className={`block w-full h-[2px] bg-[#f5f3ee] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-0' : ''}`}
            />
            <span 
              className={`block w-full h-[2px] bg-[#f5f3ee] transition-all duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}
            />
          </div>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050505] border-t border-white/[0.04]">
          <nav className="flex flex-col px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] uppercase tracking-[0.15em] text-[#f5f3ee] py-4 border-b border-white/[0.06] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#connect"
              className="mt-6 px-5 py-3 bg-[#c4a47c] text-black text-[11px] uppercase tracking-[0.15em] text-center font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Enquire
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
