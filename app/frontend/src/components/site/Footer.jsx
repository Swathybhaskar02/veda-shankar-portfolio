const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "IMDb", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.04] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="py-20 lg:py-28 border-b border-white/[0.04]">
          <p className="uppercase tracking-[0.18em] text-[#c4a47c] text-[10px] font-medium mb-5">
            Get in Touch
          </p>
          <a
            href="mailto:contact@vedashankar.in"
            className="font-serif italic text-[26px] lg:text-[40px] text-[#f5f3ee] inline-block font-light tracking-[-0.01em] hover:text-[#c4a47c] transition-colors duration-500"
          >
            contact@vedashankar.in
          </a>

          <div className="grid md:grid-cols-2 gap-14 mt-20">
            <div>
              <p className="uppercase tracking-[0.18em] text-[#666666] text-[10px] font-medium mb-4">Representation</p>
              <p className="text-[#9a9a9a] text-[14px] leading-[1.7]">Independent · India</p>
              <p className="text-[#9a9a9a] text-[14px] leading-[1.7]">Open to global collaborations</p>
            </div>
            <div>
              <p className="uppercase tracking-[0.18em] text-[#666666] text-[10px] font-medium mb-4">Based In</p>
              <p className="text-[#9a9a9a] text-[14px] leading-[1.7]">Mumbai · Bengaluru</p>
            </div>
          </div>
        </div>

        <div className="py-16 overflow-hidden">
          <h2 className="font-serif text-[9vw] lg:text-[7vw] text-[#f5f3ee] leading-[0.92] tracking-[-0.02em] font-light">
            <span className="italic">Veda</span>{" "}
            <span className="text-[#c4a47c]">Shankar</span>
          </h2>
        </div>

        <div className="py-10 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[#444444] text-[10px] uppercase tracking-[0.15em] font-medium">
            © 2026 Veda Shankar
          </p>

          <div className="flex items-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#666666] hover:text-[#c4a47c] transition-all duration-400 block"
                aria-label={link.name}
              >
                {link.name === "Instagram" && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1" fill="currentColor" />
                  </svg>
                )}
                {link.name === "IMDb" && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="6" width="20" height="12" rx="1" />
                    <text x="12" y="15" fontSize="6" textAnchor="middle" fill="#050505" fontWeight="bold">IMDb</text>
                  </svg>
                )}
                {link.name === "YouTube" && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="16" rx="4" />
                    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                  </svg>
                )}
                {link.name === "Twitter" && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                )}
              </a>
            ))}
          </div>

          <p className="text-[#444444] text-[10px] uppercase tracking-[0.15em] font-medium">
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
