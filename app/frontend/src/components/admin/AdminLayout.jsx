import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { path: "/admin/inquiries", label: "Inquiries", icon: "📬" },
  { path: "/admin/collabs", label: "My Collabs", icon: "🤝" },
  { path: "/admin/profile", label: "Profile", icon: "👤" },
];

export default function AdminLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f7f5f0]">
      <header className="border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="/" className="flex items-center gap-2 sm:gap-3">
                <span className="w-2 h-2 rounded-full bg-[#c69c6d]" />
                <span className="font-serif text-lg sm:text-xl">
                  <span className="italic">Veda</span> Shankar
                </span>
              </a>
              <span className="text-[#4a4a4a] hidden sm:inline">/</span>
              <span className="text-[#737373] hidden sm:inline">Admin</span>
            </div>
            <a
              href="/"
              className="text-[#737373] hover:text-[#f7f5f0] text-xs sm:text-sm transition-colors"
            >
              ← Back to Site
            </a>
          </div>
          
          <nav className="flex gap-1 sm:gap-2 overflow-x-auto pb-1 -mb-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 sm:px-4 py-2 text-xs sm:text-sm uppercase tracking-wider transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-[#c69c6d]/20 text-[#c69c6d] border-b-2 border-[#c69c6d]"
                      : "text-[#737373] hover:text-[#f7f5f0] hover:bg-white/5"
                  }`
                }
              >
                <span className="mr-1.5 sm:mr-2">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
        {(title || subtitle) && (
          <motion.div 
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {title && <h1 className="text-2xl sm:text-3xl font-serif text-[#f7f5f0] mb-1 sm:mb-2">{title}</h1>}
            {subtitle && <p className="text-[#737373] text-sm sm:text-base">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </main>
    </div>
  );
}
