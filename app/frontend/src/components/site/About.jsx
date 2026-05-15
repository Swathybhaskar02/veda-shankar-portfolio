const stats = [
  { value: "07", label: "Feature Releases" },
  { value: "12", label: "Brand Films" },
  { value: "04", label: "Festival Selections" },
  { value: "21", label: "Editorial Covers" },
];

export default function About() {
  return (
    <section 
      id="about" 
      className="relative bg-black py-28 lg:py-40 grain-overlay"
    >
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-12">
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-[#c69c6d] mb-12">
            <span>02 — About</span>
            <span className="flex-1 h-px bg-white/10" />
            <span>My Story</span>
          </div>
        </div>

        <div className="lg:col-span-5 lg:row-span-2">
          <div className="relative aspect-[3/4] overflow-hidden grain-overlay group">
            <img
              src="/images/veda-2.jpg"
              alt="Veda Shankar portrait"
              className="w-full h-full object-cover transition-all duration-[1200ms] grayscale group-hover:grayscale-0 group-hover:scale-[1.04]"
            />
          </div>
        </div>

        <div className="lg:col-span-7 lg:pt-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-light leading-[1.15] tracking-normal text-[#f7f5f0]">
            I'm drawn to <em className="italic text-[#c69c6d]">stillness</em>{" "}
            and <em className="italic text-[#c69c6d]">storm</em> — to
            characters who don't ask to be liked.
          </h2>
          <p className="mt-10 text-[#a3a3a3] font-light leading-[1.8] max-w-lg text-[13px] lg:text-[14px]">
            I move between languages, genres and silences with the same conviction. 
            Trained in classical performance and refined under camera lights, my work 
            seeks the quiet weight in every frame — the kind that lingers long after 
            the credits roll.
          </p>
          <p className="mt-5 text-[#a3a3a3] font-light leading-[1.8] max-w-lg text-[13px] lg:text-[14px]">
            Equally at home in Hindi, Tamil and English, I gravitate toward
            independent cinema, prestige streaming and brand films that respect
            craft. I'm currently developing original material with two
            independent studios.
          </p>
        </div>

        <div className="lg:col-span-7 mt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-black px-5 py-7 lg:px-6 lg:py-9"
              >
                <div className="font-serif text-4xl lg:text-5xl text-[#c69c6d] font-light">
                  {stat.value}
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#737373]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 mt-28 lg:mt-36">
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-[#c69c6d] mb-12">
          <span>My Approach</span>
          <span className="flex-1 h-px bg-white/10" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="relative">
            <span className="font-serif text-[120px] lg:text-[180px] text-[#c69c6d]/10 absolute -top-10 -left-4 lg:-top-16 lg:-left-8 leading-none select-none">"</span>
            <blockquote className="relative z-10">
              <p className="font-serif text-[22px] lg:text-[28px] text-[#f5f3ee] leading-[1.5] font-light italic">
                I believe every character carries a secret they never tell — not even to the camera. 
                My job is to live in that silence, to let the audience feel what's left unsaid.
              </p>
              <p className="font-serif text-[22px] lg:text-[28px] text-[#f5f3ee] leading-[1.5] font-light italic mt-6">
                I don't chase perfection in a take. I chase truth. Sometimes it's raw, sometimes it's 
                uncomfortable — but it's always honest.
              </p>
            </blockquote>
          </div>
          
          <div className="flex flex-col justify-center">
            <p className="text-[#a3a3a3] font-light leading-[1.9] text-[14px] lg:text-[15px]">
              Acting, for me, isn't about becoming someone else — it's about finding the parts of 
              myself I've been afraid to show. Every role is an invitation to explore what it means 
              to be human, vulnerable, and alive.
            </p>
            <p className="text-[#a3a3a3] font-light leading-[1.9] text-[14px] lg:text-[15px] mt-5">
              I'm drawn to stories that challenge me, directors who push boundaries, and collaborations 
              where craft is the currency. If you're building something meaningful — I want to be part 
              of that conversation.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#c69c6d]" />
              <span className="font-serif italic text-[#c69c6d] text-[15px]">Veda</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
