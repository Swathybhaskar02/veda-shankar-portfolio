const awards = [
  { year: "2025", title: "Best Female Debut", organization: "Filmfare Critics Circle", film: "For Aandhi Raat" },
  { year: "2024", title: "Special Jury Mention", organization: "MAMI Mumbai Film Festival", film: "Monsoon Letters" },
  { year: "2024", title: "Rising Talent of the Year", organization: "Vogue Women of the Year", film: null },
  { year: "2023", title: "Best Short — Performance", organization: "Dharamshala International FF", film: "Coda" },
  { year: "2023", title: "Audience Choice", organization: "Bengaluru Film Society", film: "Untitled Verse" },
];

export default function Awards() {
  return (
    <section id="awards" className="py-32 lg:py-40 px-6 lg:px-12 bg-black overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-center justify-between mb-20">
          <p className="uppercase tracking-[0.3em] text-[#737373] text-[10px]">05 — Awards</p>
          <p className="uppercase tracking-[0.3em] text-[#737373] text-[10px]">Recognition</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          <div>
            <h2 className="font-serif text-[36px] lg:text-[44px] text-[#f7f5f0] leading-[1.1] font-light">
              Quietly collected,
              <br />
              <span className="italic text-[#c69c6d]">honestly earned.</span>
            </h2>
          </div>
          <div className="lg:pt-4">
            <p className="text-[#a3a3a3] leading-[1.8] text-[13px] lg:text-[14px] max-w-md">
              A short list of moments where craft was recognised — across juries, critics circles and audience choice.
            </p>
          </div>
        </div>

        <div>
          {awards.map((award, index) => (
            <div
              key={index}
              className="group grid grid-cols-12 gap-4 py-7 border-t border-white/10 hover:border-[#c69c6d]/30 transition-colors duration-500"
            >
              <div className="col-span-2 lg:col-span-2">
                <p className="font-serif text-[28px] lg:text-[32px] text-[#c69c6d] font-light">
                  {award.year}
                </p>
              </div>
              <div className="col-span-6 lg:col-span-6">
                <h3 className="font-serif italic text-lg lg:text-[22px] text-[#f7f5f0] group-hover:text-[#c69c6d] transition-colors duration-500 mb-1">
                  {award.title}
                </h3>
                <p className="text-[#666666] text-[11px] lg:text-[12px]">{award.organization}</p>
              </div>
              <div className="col-span-4 lg:col-span-4 text-right">
                {award.film && (
                  <p className="text-[#666666] text-[10px] lg:text-[11px] uppercase tracking-[0.15em]">{award.film}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
