import { useEffect } from "react";

function ReelPreview({ video, image, index }) {
  return (
    <a
      href="https://www.instagram.com/vedashnkr/"
      target="_blank"
      rel="noopener noreferrer"
      className="relative aspect-[9/16] overflow-hidden group cursor-pointer"
    >
      {video ? (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
        />
      ) : (
        <img
          src={image}
          alt="Instagram Reel"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
        />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      
      <div className="absolute top-3 right-3">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="opacity-80">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </div>

      <div className="absolute bottom-3 left-3 right-3">
        <p className="text-white text-xs font-medium">.vedashnkr</p>
      </div>

      <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500" />
    </a>
  );
}

export default function InstagramSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 sm:py-28 lg:py-36 px-8 lg:px-16 bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-12 sm:mb-14">
          <p className="uppercase tracking-[0.2em] text-[#c4a47c] text-[10px] font-medium">Instagram</p>
          <div className="flex-1 h-px bg-white/[0.06] hidden sm:block" />
          <p className="uppercase tracking-[0.18em] text-[#666666] text-[10px] font-medium">@vedashnkr</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="font-serif text-[26px] sm:text-[32px] lg:text-[40px] text-[#f5f3ee] mb-5 sm:mb-7 leading-[1.2] font-light">
              Follow the journey.
              <br />
              <span className="italic text-[#c4a47c]">Behind the scenes & beyond.</span>
            </h2>
            <p className="text-[#9a9a9a] text-[14px] leading-[1.8] mb-8 sm:mb-10 max-w-lg">
              Get exclusive glimpses of life on set, audition prep, travel diaries, 
              and the everyday moments that shape an actor's journey. Join the community.
            </p>

            <a
              href="https://www.instagram.com/vedashnkr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white text-[10px] uppercase tracking-[0.15em] font-medium hover:opacity-90 transition-opacity duration-400"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @vedashnkr
            </a>
          </div>

          <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
            <ReelPreview video="/videos/reel-1.mp4" index={0} />
            <ReelPreview video="/videos/reel-2.mp4" index={1} />
            <ReelPreview video="/videos/veda-cta.mp4" index={2} />
          </div>
        </div>

      </div>
    </section>
  );
}
