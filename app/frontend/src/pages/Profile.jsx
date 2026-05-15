import { motion } from "framer-motion";
import Nav from "../components/site/Nav";
import Footer from "../components/site/Footer";

const profileData = {
  name: "Veda Shankar",
  tagline: "Emerging Actress",
  subtitle: "Malayalam Cinema",
  location: "Kerala, India",
  languages: ["Malayalam", "English", "Hindi", "Tamil"],
  contact: {
    instagram: "@vedashnkr",
    instagramUrl: "https://www.instagram.com/vedashnkr/",
    email: "contact@vedashankar.com",
    imdb: "Veda Shankar",
    imdbUrl: "https://www.imdb.com/name/nm12345678/",
  },
  about: "An emerging voice in Malayalam cinema, known for bringing grounded, emotionally resonant characters to life. Recognized for her breakout performance in Vaazha 2: Biopic of a Billion Bros (2026).",
  films: [
    { title: "Vaazha 2: Biopic of a Billion Bros", year: "2026", role: "Female Lead", status: "Released" },
    { title: "No Land Beneath Our Wings", year: "2025", role: "Lead", status: "Released" },
  ],
  skills: ["Method Acting", "Emotional Depth", "Classical Dance", "Dialogue Delivery", "Character Immersion"],
  physical: {
    height: "5'4\"",
    eyes: "Brown",
    hair: "Black",
  },
  achievements: [
    "Breakout Performance — Vaazha 2 (2026)",
    "Emerging Talent — Malayalam Film Industry",
  ],
};

function StatCard({ label, value, delay = 0 }) {
  return (
    <motion.div
      className="text-center p-4 sm:p-6 bg-white/[0.02] border border-white/5 hover:border-[#c69c6d]/20 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
    >
      <p className="text-[#c69c6d] font-serif text-2xl sm:text-3xl lg:text-4xl mb-1">{value}</p>
      <p className="text-[#737373] text-[10px] sm:text-xs uppercase tracking-widest">{label}</p>
    </motion.div>
  );
}

export default function Profile() {
  const handleDownload = () => {
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Veda Shankar - Actor Profile</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #fff; color: #1a1a1a; padding: 50px; max-width: 800px; margin: 0 auto; }
          .header { text-align: center; margin-bottom: 40px; padding-bottom: 30px; border-bottom: 2px solid #c69c6d; }
          .name { font-family: 'Playfair Display', serif; font-size: 42px; margin-bottom: 8px; color: #1a1a1a; }
          .tagline { color: #c69c6d; font-size: 18px; font-weight: 500; }
          .subtitle { color: #666; font-size: 14px; margin-top: 5px; }
          .location { color: #888; font-size: 13px; margin-top: 10px; }
          .section { margin-bottom: 30px; }
          .section-title { color: #c69c6d; font-size: 11px; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 15px; font-weight: 600; }
          .about { color: #444; line-height: 1.8; font-size: 15px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
          .film { margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee; }
          .film:last-child { border-bottom: none; }
          .film-year { color: #c69c6d; font-size: 12px; font-weight: 600; }
          .film-title { font-family: 'Playfair Display', serif; font-size: 16px; margin-top: 3px; }
          .film-role { color: #666; font-size: 13px; font-style: italic; }
          .tags { display: flex; flex-wrap: wrap; gap: 10px; }
          .tag { background: #f5f5f5; padding: 8px 16px; font-size: 12px; color: #555; border-radius: 2px; }
          .physical-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: center; }
          .physical-item p:first-child { color: #c69c6d; font-size: 20px; font-family: 'Playfair Display', serif; }
          .physical-item p:last-child { color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-top: 5px; }
          .achievement { color: #444; margin-bottom: 10px; padding-left: 20px; position: relative; font-size: 14px; }
          .achievement:before { content: "✦"; color: #c69c6d; position: absolute; left: 0; }
          .contact { text-align: center; margin-top: 40px; padding-top: 30px; border-top: 2px solid #c69c6d; }
          .contact-title { color: #c69c6d; font-size: 11px; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 15px; }
          .contact-info { color: #666; font-size: 14px; }
          @media print { body { padding: 30px; } }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="name">${profileData.name}</h1>
          <p class="tagline">${profileData.tagline}</p>
          <p class="subtitle">${profileData.subtitle}</p>
          <p class="location">📍 ${profileData.location}</p>
        </div>
        
        <div class="section">
          <h2 class="section-title">About</h2>
          <p class="about">${profileData.about}</p>
        </div>
        
        <div class="grid">
          <div class="section">
            <h2 class="section-title">Filmography</h2>
            ${profileData.films.map(film => `
              <div class="film">
                <span class="film-year">${film.year}</span>
                <p class="film-title">${film.title}</p>
                <p class="film-role">${film.role}</p>
              </div>
            `).join("")}
          </div>
          
          <div>
            <div class="section">
              <h2 class="section-title">Languages</h2>
              <div class="tags">
                ${profileData.languages.map(lang => `<span class="tag">${lang}</span>`).join("")}
              </div>
            </div>
            
            <div class="section">
              <h2 class="section-title">Skills</h2>
              <div class="tags">
                ${profileData.skills.map(skill => `<span class="tag">${skill}</span>`).join("")}
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">Physical Attributes</h2>
          <div class="physical-grid">
            <div class="physical-item">
              <p>${profileData.physical.height}</p>
              <p>Height</p>
            </div>
            <div class="physical-item">
              <p>${profileData.physical.eyes}</p>
              <p>Eyes</p>
            </div>
            <div class="physical-item">
              <p>${profileData.physical.hair}</p>
              <p>Hair</p>
            </div>
          </div>
        </div>
        
        <div class="section">
          <h2 class="section-title">Recognition</h2>
          ${profileData.achievements.map(a => `<p class="achievement">${a}</p>`).join("")}
        </div>
        
        <div class="contact">
          <h2 class="contact-title">Connect</h2>
          <p class="contact-info">
            Instagram: ${profileData.contact.instagram}<br/>
            Email: ${profileData.contact.email}
          </p>
        </div>
      </body>
      </html>
    `;

    const printWindow = window.open("", "_blank");
    printWindow.document.write(printContent);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 250);
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      <Nav />
      
      <main className="pt-24 sm:pt-32">
        <section className="px-4 sm:px-6 lg:px-12 pb-16 sm:pb-20">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#c69c6d] text-[10px] sm:text-xs">Profile</p>
              <div className="flex-1 h-px bg-white/10 hidden sm:block" />
              <p className="uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#737373] text-[10px] sm:text-xs">Actor Card</p>
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6 group">
                  <img
                    src="/images/veda-1.jpg"
                    alt={profileData.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <motion.div
                    className="absolute inset-0 border-2 border-[#c69c6d]/0 group-hover:border-[#c69c6d]/40 transition-all duration-500"
                  />
                </div>

                <motion.button
                  onClick={handleDownload}
                  className="w-full py-3 sm:py-4 bg-[#c69c6d] text-[#050505] text-xs sm:text-sm uppercase tracking-wider font-medium hover:bg-[#d4af37] transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Profile
                </motion.button>
              </motion.div>

              <motion.div 
                className="lg:col-span-3 space-y-8"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div>
                  <motion.h1
                    className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f7f5f0] mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {profileData.name}
                  </motion.h1>
                  <p className="text-[#c69c6d] text-lg sm:text-xl">{profileData.tagline}</p>
                  <p className="text-[#737373] text-sm sm:text-base">{profileData.subtitle}</p>
                  <p className="text-[#a3a3a3] text-xs sm:text-sm mt-2 flex items-center gap-2">
                    <span>📍</span> {profileData.location}
                  </p>
                </div>

                <div>
                  <p className="text-[#737373] text-[10px] sm:text-xs uppercase tracking-widest mb-3">About</p>
                  <p className="text-[#a3a3a3] text-sm sm:text-base leading-relaxed">
                    {profileData.about}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <StatCard label="Height" value={profileData.physical.height} delay={0.3} />
                  <StatCard label="Eyes" value={profileData.physical.eyes} delay={0.4} />
                  <StatCard label="Hair" value={profileData.physical.hair} delay={0.5} />
                </div>

                <div>
                  <p className="text-[#737373] text-[10px] sm:text-xs uppercase tracking-widest mb-3">Languages</p>
                  <div className="flex flex-wrap gap-2">
                    {profileData.languages.map((lang, i) => (
                      <motion.span
                        key={lang}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 text-[#a3a3a3] text-xs sm:text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                      >
                        {lang}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[#737373] text-[10px] sm:text-xs uppercase tracking-widest mb-3">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#c69c6d]/10 border border-[#c69c6d]/20 text-[#c69c6d] text-xs sm:text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[#737373] text-[10px] sm:text-xs uppercase tracking-widest mb-3">Connect</p>
                  <div className="space-y-3">
                    <motion.a
                      href={profileData.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[#a3a3a3] hover:text-[#f7f5f0] transition-colors group"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] p-[1.5px] group-hover:scale-110 transition-transform">
                        <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="sm:w-4 sm:h-4">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </div>
                      </div>
                      <span className="text-sm sm:text-base">{profileData.contact.instagram}</span>
                    </motion.a>

                    <motion.a
                      href={`mailto:${profileData.contact.email}`}
                      className="flex items-center gap-3 text-[#a3a3a3] hover:text-[#f7f5f0] transition-colors group"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.65 }}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#c69c6d]/20 border border-[#c69c6d]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#c69c6d] sm:w-4 sm:h-4">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base">{profileData.contact.email}</span>
                    </motion.a>

                    <motion.a
                      href={profileData.contact.imdbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[#a3a3a3] hover:text-[#f7f5f0] transition-colors group"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F5C518]/20 border border-[#F5C518]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-[#F5C518] text-[10px] sm:text-xs font-bold">IMDb</span>
                      </div>
                      <span className="text-sm sm:text-base">View on IMDb</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-16 sm:mt-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#737373] text-[10px] sm:text-xs uppercase tracking-widest mb-6 sm:mb-8">Filmography</p>
              
              <div className="space-y-4 sm:space-y-6">
                {profileData.films.map((film, i) => (
                  <motion.div
                    key={film.title}
                    className="grid sm:grid-cols-12 gap-4 sm:gap-6 items-center p-4 sm:p-6 bg-white/[0.02] border border-white/5 hover:border-[#c69c6d]/20 transition-all group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="sm:col-span-2">
                      <span className="text-[#c69c6d] font-serif text-2xl sm:text-3xl">{film.year}</span>
                    </div>
                    <div className="sm:col-span-6">
                      <h3 className="font-serif text-lg sm:text-xl text-[#f7f5f0] group-hover:text-[#c69c6d] transition-colors">
                        {film.title}
                      </h3>
                      <p className="text-[#737373] text-sm italic">{film.role}</p>
                    </div>
                    <div className="sm:col-span-4 sm:text-right">
                      <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs uppercase tracking-wider">
                        {film.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mt-16 sm:mt-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#737373] text-[10px] sm:text-xs uppercase tracking-widest mb-6 sm:mb-8">Recognition</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {profileData.achievements.map((achievement, i) => (
                  <motion.div
                    key={achievement}
                    className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-[#c69c6d]/5 border border-[#c69c6d]/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-[#c69c6d] text-lg">✦</span>
                    <p className="text-[#a3a3a3] text-sm sm:text-base">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
