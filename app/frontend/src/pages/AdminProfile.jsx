import { useState } from "react";
import { motion } from "framer-motion";
import AdminLayout from "../components/admin/AdminLayout";

const profileData = {
  name: "Veda Shankar",
  tagline: "Emerging Actress · Malayalam Cinema",
  location: "Kerala, India",
  languages: ["Malayalam", "English", "Hindi"],
  email: "contact@vedashankar.com",
  phone: "+91 XXXXX XXXXX",
  instagram: "@vedashnkr",
  about: "An emerging actress in Malayalam cinema, known for her breakout role in Vaazha 2: Biopic of a Billion Bros (2026). Recognized for bringing grounded, emotionally resonant characters to life.",
  films: [
    { title: "Vaazha 2: Biopic of a Billion Bros", year: "2026", role: "Female Lead" },
    { title: "No Land Beneath Our Wings", year: "2025", role: "Lead" },
  ],
  skills: ["Acting", "Classical Dance", "Emotional Depth", "Character Study"],
  achievements: [
    "Breakout Performance in Malayalam Box Office Hit (2026)",
    "Recognition as emerging talent in Malayalam film industry",
  ],
};

function ProfileCard({ onDownload }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#0f0f0f] to-[#0a0a0a] border border-white/10 overflow-hidden max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      id="profile-card"
    >
      <div className="relative h-32 sm:h-40 bg-gradient-to-r from-[#c69c6d]/30 via-[#c69c6d]/10 to-[#050505]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-4 left-4 w-20 h-20 border border-[#c69c6d]/20 rounded-full" />
          <div className="absolute bottom-4 right-8 w-12 h-12 border border-[#c69c6d]/20 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
      </div>

      <div className="px-6 sm:px-8 pb-8 -mt-16 relative">
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 mb-6">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-[#0f0f0f] overflow-hidden bg-[#1a1a1a] flex-shrink-0">
            <img
              src="/images/veda-1.jpg"
              alt="Veda Shankar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#f7f5f0]">{profileData.name}</h2>
            <p className="text-[#c69c6d] text-sm sm:text-base">{profileData.tagline}</p>
            <p className="text-[#737373] text-xs sm:text-sm mt-1">📍 {profileData.location}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-[#737373] text-[10px] sm:text-xs uppercase tracking-widest mb-2">About</h3>
            <p className="text-[#a3a3a3] text-sm leading-relaxed">{profileData.about}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h3 className="text-[#737373] text-[10px] sm:text-xs uppercase tracking-widest mb-3">Filmography</h3>
              <div className="space-y-2">
                {profileData.films.map((film, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#c69c6d] text-xs">{film.year}</span>
                    <div>
                      <p className="text-[#f7f5f0] text-sm">{film.title}</p>
                      <p className="text-[#737373] text-xs italic">{film.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[#737373] text-[10px] sm:text-xs uppercase tracking-widest mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {profileData.languages.map((lang, i) => (
                  <span key={i} className="px-3 py-1 bg-[#1a1a1a] border border-white/5 text-[#a3a3a3] text-xs">
                    {lang}
                  </span>
                ))}
              </div>

              <h3 className="text-[#737373] text-[10px] sm:text-xs uppercase tracking-widest mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profileData.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-[#c69c6d]/10 border border-[#c69c6d]/20 text-[#c69c6d] text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[#737373] text-[10px] sm:text-xs uppercase tracking-widest mb-3">Achievements</h3>
            <ul className="space-y-2">
              {profileData.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2 text-[#a3a3a3] text-sm">
                  <span className="text-[#c69c6d] mt-1">✦</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-white/5">
            <h3 className="text-[#737373] text-[10px] sm:text-xs uppercase tracking-widest mb-3">Contact</h3>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href={`mailto:${profileData.email}`} className="text-[#c69c6d] hover:underline">
                {profileData.email}
              </a>
              <span className="text-[#737373]">{profileData.instagram}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function AdminProfile() {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadPDF = () => {
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Veda Shankar - Profile</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: Georgia, serif; background: #050505; color: #f7f5f0; padding: 40px; }
          .header { text-align: center; margin-bottom: 40px; padding-bottom: 20px; border-bottom: 1px solid #333; }
          .name { font-size: 36px; margin-bottom: 8px; }
          .tagline { color: #c69c6d; font-size: 16px; }
          .location { color: #737373; font-size: 14px; margin-top: 8px; }
          .section { margin-bottom: 30px; }
          .section-title { color: #737373; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px; }
          .about { color: #a3a3a3; line-height: 1.6; }
          .film { margin-bottom: 12px; }
          .film-year { color: #c69c6d; font-size: 13px; }
          .film-title { font-size: 15px; margin-top: 2px; }
          .film-role { color: #737373; font-size: 13px; font-style: italic; }
          .tags { display: flex; flex-wrap: wrap; gap: 8px; }
          .tag { background: #1a1a1a; padding: 6px 12px; font-size: 12px; color: #a3a3a3; }
          .skill-tag { background: rgba(198, 156, 109, 0.1); color: #c69c6d; }
          .achievement { color: #a3a3a3; margin-bottom: 8px; padding-left: 16px; position: relative; }
          .achievement:before { content: "✦"; color: #c69c6d; position: absolute; left: 0; }
          .contact { color: #c69c6d; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
          @media print { body { background: white; color: black; } .section-title { color: #666; } .about, .achievement { color: #333; } }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="name">${profileData.name}</h1>
          <p class="tagline">${profileData.tagline}</p>
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
                ${profileData.skills.map(skill => `<span class="tag skill-tag">${skill}</span>`).join("")}
              </div>
            </div>
          </div>
        </div>
        
        <div class="section">
          <h2 class="section-title">Achievements</h2>
          ${profileData.achievements.map(a => `<p class="achievement">${a}</p>`).join("")}
        </div>
        
        <div class="section">
          <h2 class="section-title">Contact</h2>
          <p class="contact">${profileData.email} · ${profileData.instagram}</p>
        </div>
      </body>
      </html>
    `;

    const printWindow = window.open("", "_blank");
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <AdminLayout
      title="My Profile"
      subtitle="Your professional profile card - download and share"
    >
      <div className="mb-6 flex justify-center">
        <motion.button
          onClick={handleDownloadPDF}
          className="px-6 py-3 bg-[#c69c6d] text-[#050505] text-xs uppercase tracking-wider hover:bg-[#d4af37] transition-colors flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Profile / Print
        </motion.button>
      </div>

      <ProfileCard />

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-[#4a4a4a] text-xs">
          Tip: Use "Print / Save as PDF" and select "Save as PDF" in the print dialog for best results
        </p>
      </motion.div>
    </AdminLayout>
  );
}
