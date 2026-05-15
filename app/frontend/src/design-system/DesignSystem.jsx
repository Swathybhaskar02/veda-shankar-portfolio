/**
 * Veda Shankar Portfolio — Design System Storybook
 * 
 * This file documents all design tokens, typography, spacing,
 * and component patterns used throughout the site.
 * 
 * Based on reference: https://veda-films.preview.emergentagent.com/
 */

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f7f5f0] p-6 lg:p-12">
      <div className="max-w-[1500px] mx-auto">
        
        {/* Header */}
        <header className="mb-20 pb-8 border-b border-white/10">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight mb-4">
            Design System
          </h1>
          <p className="text-[#a3a3a3] font-light text-base lg:text-[15px]">
            Veda Shankar Portfolio — Typography, Colors, Spacing & Components
          </p>
        </header>

        {/* Colors Section */}
        <section className="mb-24">
          <SectionTitle>Color Palette</SectionTitle>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8">
            <ColorSwatch color="#050505" name="Background" token="bg-[#050505]" light />
            <ColorSwatch color="#0a0a0a" name="Surface" token="bg-[#0a0a0a]" light />
            <ColorSwatch color="#c69c6d" name="Accent Gold" token="text-[#c69c6d]" />
            <ColorSwatch color="#f7f5f0" name="Text Primary" token="text-[#f7f5f0]" />
            <ColorSwatch color="#a3a3a3" name="Text Body" token="text-[#a3a3a3]" />
            <ColorSwatch color="#737373" name="Text Muted" token="text-[#737373]" light />
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-24">
          <SectionTitle>Typography</SectionTitle>
          
          <div className="space-y-12 mt-8">
            {/* Display / Hero */}
            <TypeSpecimen
              name="Display / Hero"
              specs="font-serif · text-[15vw] lg:text-[12vw] · leading-[0.85] · tracking-tight"
            >
              <span className="font-serif text-[60px] lg:text-[100px] leading-[0.85] tracking-tight">
                <span className="italic">Veda</span> Shankar
              </span>
            </TypeSpecimen>

            {/* Heading 1 - Section Headlines */}
            <TypeSpecimen
              name="Heading 1 (Section)"
              specs="font-serif · text-4xl md:text-5xl lg:text-6xl · font-light · leading-[1.05] · tracking-tight · text-[#f7f5f0]"
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-[#f7f5f0]">
                A performer of <em className="italic text-[#c69c6d]">stillness</em>{" "}
                and <em className="italic text-[#c69c6d]">storm</em>
              </h2>
            </TypeSpecimen>

            {/* Heading 2 */}
            <TypeSpecimen
              name="Heading 2"
              specs="font-serif · text-3xl lg:text-4xl · font-light · leading-[1.1]"
            >
              <span className="font-serif text-3xl lg:text-4xl font-light leading-[1.1] text-[#f7f5f0]">
                Stories that stay long after the screen fades to black
              </span>
            </TypeSpecimen>

            {/* Body */}
            <TypeSpecimen
              name="Body Text"
              specs="text-[#a3a3a3] · font-light · leading-relaxed · text-base lg:text-[15px] · max-w-xl"
            >
              <p className="text-[#a3a3a3] font-light leading-relaxed max-w-xl text-base lg:text-[15px]">
                A rising voice in contemporary Indian cinema, Veda Shankar moves between 
                languages, genres and silences with the same conviction. Trained in classical 
                performance and refined under camera lights, her work seeks the quiet weight 
                in every frame — the kind that lingers long after the credits roll.
              </p>
            </TypeSpecimen>

            {/* Section Labels */}
            <TypeSpecimen
              name="Section Labels"
              specs="text-[10px] · uppercase · tracking-[0.4em] · text-[#c69c6d]"
            >
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-[#c69c6d]">
                <span>02 — About</span>
                <span className="flex-1 h-px bg-white/10 max-w-[200px]" />
                <span>The Performer</span>
              </div>
            </TypeSpecimen>

            {/* Stats Labels */}
            <TypeSpecimen
              name="Stats Labels"
              specs="text-[10px] · uppercase · tracking-[0.3em] · text-[#737373]"
            >
              <div className="flex gap-8">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#737373]">
                  Feature Releases
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#737373]">
                  Brand Films
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#737373]">
                  Festival Selections
                </span>
              </div>
            </TypeSpecimen>

            {/* Stats Numbers */}
            <TypeSpecimen
              name="Stats Numbers"
              specs="font-serif · text-4xl lg:text-5xl · text-[#c69c6d] · font-light"
            >
              <div className="grid grid-cols-4 gap-px bg-white/10 max-w-2xl">
                {[
                  { value: "07", label: "Feature Releases" },
                  { value: "12", label: "Brand Films" },
                  { value: "04", label: "Festival Selections" },
                  { value: "21", label: "Editorial Covers" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#050505] px-5 py-7 lg:px-6 lg:py-9">
                    <div className="font-serif text-4xl lg:text-5xl text-[#c69c6d] font-light">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#737373]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </TypeSpecimen>
          </div>
        </section>

        {/* Spacing Section */}
        <section className="mb-24">
          <SectionTitle>Spacing Scale</SectionTitle>
          
          <div className="mt-8 space-y-4">
            <SpacingItem size="4px" name="1" tailwind="gap-1" />
            <SpacingItem size="16px" name="4" tailwind="gap-4" />
            <SpacingItem size="24px" name="6" tailwind="gap-6, px-6" />
            <SpacingItem size="40px" name="10" tailwind="gap-10" />
            <SpacingItem size="48px" name="12" tailwind="px-12, mb-12" />
            <SpacingItem size="64px" name="16" tailwind="gap-16" />
            <SpacingItem size="112px" name="28" tailwind="py-28" />
            <SpacingItem size="160px" name="40" tailwind="py-40" />
          </div>

          <div className="mt-12 p-6 bg-[#0a0a0a] border border-white/10">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#c69c6d] mb-4">Section Spacing (Reference)</p>
            <ul className="text-[#a3a3a3] font-light text-[15px] space-y-3 leading-relaxed">
              <li>• Vertical Section Padding: <code className="text-[#c69c6d]">py-28 lg:py-40</code> (112px → 160px)</li>
              <li>• Horizontal Padding: <code className="text-[#c69c6d]">px-6 lg:px-12</code> (24px → 48px)</li>
              <li>• Max Content Width: <code className="text-[#c69c6d]">max-w-[1500px]</code></li>
              <li>• Grid Gap: <code className="text-[#c69c6d]">gap-10 lg:gap-16</code> (40px → 64px)</li>
              <li>• Section Label Margin: <code className="text-[#c69c6d]">mb-12</code> (48px)</li>
            </ul>
          </div>
        </section>

        {/* Components Section */}
        <section className="mb-24">
          <SectionTitle>Components</SectionTitle>
          
          <div className="space-y-16 mt-8">
            
            {/* Section Header */}
            <ComponentDemo name="Section Header" code={`<div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-[#c69c6d] mb-12">
  <span>02 — About</span>
  <span className="flex-1 h-px bg-white/10" />
  <span>The Performer</span>
</div>`}>
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-[#c69c6d]">
                <span>02 — About</span>
                <span className="flex-1 h-px bg-white/10" />
                <span>The Performer</span>
              </div>
            </ComponentDemo>

            {/* Buttons */}
            <ComponentDemo name="Buttons">
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-[#c69c6d]/20 border border-[#c69c6d]/40 text-[#c69c6d] text-xs uppercase tracking-[0.2em] hover:bg-[#c69c6d]/30 transition-colors">
                  Primary CTA
                </button>
                <button className="px-6 py-3 bg-transparent border border-white/10 text-[#a3a3a3] text-xs uppercase tracking-[0.2em] hover:border-white/20 transition-colors">
                  Ghost Button
                </button>
                <button className="px-6 py-3 text-[#f7f5f0] text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                  Text Link
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </ComponentDemo>

            {/* Navigation */}
            <ComponentDemo name="Navigation Links">
              <nav className="flex items-center gap-8">
                <a href="#" className="text-xs uppercase tracking-[0.25em] text-[#f7f5f0]">
                  About
                </a>
                <a href="#" className="text-xs uppercase tracking-[0.25em] text-[#a3a3a3] hover:text-[#f7f5f0] transition-colors">
                  Portfolio
                </a>
                <a href="#" className="text-xs uppercase tracking-[0.25em] text-[#a3a3a3] hover:text-[#f7f5f0] transition-colors">
                  Films
                </a>
                <a href="#" className="text-xs uppercase tracking-[0.25em] text-[#a3a3a3] hover:text-[#f7f5f0] transition-colors">
                  Contact
                </a>
              </nav>
            </ComponentDemo>

            {/* Stats Row - Reference Style */}
            <ComponentDemo name="Stats Row (Reference Style)" code={`<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
  {stats.map((s) => (
    <div className="bg-[#050505] px-5 py-7 lg:px-6 lg:py-9">
      <div className="font-serif text-4xl lg:text-5xl text-[#c69c6d] font-light">{s.value}</div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#737373]">{s.label}</div>
    </div>
  ))}
</div>`}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
                {[
                  { value: "07", label: "Feature Releases" },
                  { value: "12", label: "Brand Films" },
                  { value: "04", label: "Festival Selections" },
                  { value: "21", label: "Editorial Covers" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#050505] px-5 py-7 lg:px-6 lg:py-9">
                    <div className="font-serif text-4xl lg:text-5xl text-[#c69c6d] font-light">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#737373]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ComponentDemo>

            {/* Dividers */}
            <ComponentDemo name="Dividers">
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] text-[#737373] uppercase tracking-[0.3em] mb-2">Standard (10% opacity)</p>
                  <div className="h-px bg-white/10" />
                </div>
                <div>
                  <p className="text-[10px] text-[#737373] uppercase tracking-[0.3em] mb-2">Stats Grid (gap-px bg-white/10)</p>
                  <div className="flex gap-px bg-white/10">
                    <div className="flex-1 h-8 bg-[#050505]" />
                    <div className="flex-1 h-8 bg-[#050505]" />
                    <div className="flex-1 h-8 bg-[#050505]" />
                  </div>
                </div>
              </div>
            </ComponentDemo>

            {/* Image Treatment */}
            <ComponentDemo name="Image Treatment">
              <div className="max-w-sm">
                <p className="text-[10px] text-[#737373] uppercase tracking-[0.3em] mb-4">aspect-[3/4] · grain-overlay · hover:scale-[1.04] · duration-[1200ms]</p>
                <div className="relative aspect-[3/4] overflow-hidden grain-overlay bg-[#0a0a0a]">
                  <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center text-[#737373] text-[10px] uppercase tracking-[0.3em]">
                    Image Placeholder
                  </div>
                </div>
              </div>
            </ComponentDemo>

          </div>
        </section>

        {/* Layout Examples */}
        <section className="mb-24">
          <SectionTitle>Layout Patterns</SectionTitle>
          
          <div className="mt-8 space-y-8">
            
            {/* 12-Column Grid - About Section */}
            <div className="p-6 bg-[#0a0a0a] border border-white/10">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#c69c6d] mb-4">About Section Grid (12-col)</p>
              <p className="text-[10px] text-[#737373] uppercase tracking-[0.3em] mb-4">grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16</p>
              <div className="grid grid-cols-12 gap-2 h-40">
                <div className="col-span-12 bg-[#1a1a1a] flex items-center justify-center text-[#737373] text-[10px] uppercase tracking-[0.2em] h-8">
                  Section Label (col-span-12)
                </div>
                <div className="col-span-5 row-span-2 bg-[#1a1a1a] flex items-center justify-center text-[#737373] text-[10px] uppercase tracking-[0.2em]">
                  Image (col-span-5, row-span-2)
                </div>
                <div className="col-span-7 bg-[#141414] flex items-center justify-center text-[#737373] text-[10px] uppercase tracking-[0.2em]">
                  Headline + Body (col-span-7)
                </div>
                <div className="col-span-7 bg-[#0f0f0f] flex items-center justify-center text-[#737373] text-[10px] uppercase tracking-[0.2em]">
                  Stats Row (col-span-7)
                </div>
              </div>
            </div>

            {/* Container */}
            <div className="p-6 bg-[#0a0a0a] border border-white/10">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#c69c6d] mb-4">Container</p>
              <p className="text-[10px] text-[#737373] uppercase tracking-[0.3em] mb-4">max-w-[1500px] mx-auto px-6 lg:px-12</p>
              <div className="border border-dashed border-white/20 p-4">
                <div className="bg-[#1a1a1a] h-16 flex items-center justify-center text-[#737373] text-[10px] uppercase tracking-[0.2em]">
                  Content Area
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Guidelines */}
        <section className="mb-24">
          <SectionTitle>Guidelines</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-px bg-white/10 mt-8">
            <div className="p-8 bg-[#050505]">
              <p className="text-[#c69c6d] text-[10px] uppercase tracking-[0.4em] mb-6">Do</p>
              <ul className="text-[#a3a3a3] font-light text-[15px] space-y-3 leading-relaxed">
                <li>✓ Use generous whitespace (py-28 lg:py-40)</li>
                <li>✓ Keep animations subtle (duration-[1200ms])</li>
                <li>✓ Maintain font-light for body text</li>
                <li>✓ Use font-serif for all headings</li>
                <li>✓ Apply #c69c6d accent on italics</li>
                <li>✓ Use grain-overlay on images</li>
                <li>✓ Stats use gap-px bg-white/10 borders</li>
              </ul>
            </div>
            <div className="p-8 bg-[#050505]">
              <p className="text-[#737373] text-[10px] uppercase tracking-[0.4em] mb-6">Don't</p>
              <ul className="text-[#a3a3a3] font-light text-[15px] space-y-3 leading-relaxed">
                <li>✗ Use Framer Motion for simple reveals</li>
                <li>✗ Add decorative corner frames</li>
                <li>✗ Use colors other than gold accent</li>
                <li>✗ Crowd content (max-w-xl for body)</li>
                <li>✗ Mix font weights (stick to font-light)</li>
                <li>✗ Use solid borders (prefer bg-white/10)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-24">
          <SectionTitle>Quick Reference</SectionTitle>
          
          <div className="mt-8 p-8 bg-[#0a0a0a] border border-white/10 font-mono text-[13px]">
            <p className="text-[#c69c6d] mb-4">// Key Classes from Reference</p>
            <div className="space-y-2 text-[#a3a3a3]">
              <p><span className="text-[#737373]">// Container:</span> max-w-[1500px] mx-auto px-6 lg:px-12</p>
              <p><span className="text-[#737373]">// Section:</span> py-28 lg:py-40 bg-[#050505] grain-overlay</p>
              <p><span className="text-[#737373]">// Grid:</span> grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16</p>
              <p><span className="text-[#737373]">// Label:</span> text-[10px] uppercase tracking-[0.4em] text-[#c69c6d]</p>
              <p><span className="text-[#737373]">// H1:</span> font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight</p>
              <p><span className="text-[#737373]">// Body:</span> text-[#a3a3a3] font-light leading-relaxed text-base lg:text-[15px]</p>
              <p><span className="text-[#737373]">// Stats Num:</span> font-serif text-4xl lg:text-5xl text-[#c69c6d] font-light</p>
              <p><span className="text-[#737373]">// Stats Label:</span> text-[10px] uppercase tracking-[0.3em] text-[#737373]</p>
              <p><span className="text-[#737373]">// Image:</span> aspect-[3/4] hover:scale-[1.04] duration-[1200ms]</p>
              <p><span className="text-[#737373]">// Divider:</span> h-px bg-white/10</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

// Helper Components

function SectionTitle({ children }) {
  return (
    <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-[#c69c6d] mb-12">
      <span>{children}</span>
      <span className="flex-1 h-px bg-white/10" />
    </div>
  );
}

function ColorSwatch({ color, name, token, light }) {
  return (
    <div>
      <div 
        className="aspect-square border border-white/10" 
        style={{ backgroundColor: color }}
      />
      <p className={`text-[12px] mt-3 ${light ? 'text-[#f7f5f0]' : 'text-[#a3a3a3]'} font-light`}>{name}</p>
      <p className="text-[10px] text-[#737373] mt-1">{color}</p>
      <p className="text-[9px] text-[#555] mt-0.5 font-mono">{token}</p>
    </div>
  );
}

function TypeSpecimen({ name, specs, children }) {
  return (
    <div className="pb-10 border-b border-white/10">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-6">
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#c69c6d]">{name}</p>
        <p className="text-[10px] text-[#737373] lg:text-right max-w-[400px] font-mono">{specs}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}

function SpacingItem({ size, name, tailwind }) {
  const width = parseInt(size);
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 text-right">
        <span className="text-[12px] text-[#a3a3a3] font-light">{name}</span>
      </div>
      <div 
        className="h-4 bg-[#c69c6d]/40" 
        style={{ width: `${Math.min(width, 300)}px` }}
      />
      <span className="text-[11px] text-[#737373]">{size}</span>
      <span className="text-[10px] text-[#555] font-mono">{tailwind}</span>
    </div>
  );
}

function ComponentDemo({ name, code, children }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.4em] text-[#c69c6d] mb-4">{name}</p>
      <div className="p-6 bg-[#0a0a0a] border border-white/10">
        {children}
      </div>
      {code && (
        <pre className="mt-4 p-4 bg-[#0a0a0a] border border-white/10 text-[11px] text-[#737373] font-mono overflow-x-auto">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}
