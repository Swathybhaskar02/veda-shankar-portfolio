import { motion } from "framer-motion";
import Nav from "../components/site/Nav";
import Footer from "../components/site/Footer";

const collabs = [
  {
    id: 1,
    title: "Vaazha 2: Biopic of a Billion Bros",
    type: "Feature Film",
    role: "Female Lead",
    year: "2026",
    status: "Released",
    image: "/images/veda-3.jpg",
    description: "A Malayalam blockbuster where I portrayed a grounded character who becomes the emotional anchor of the film, providing motivation and support to the lead characters.",
    highlight: "Box Office Hit",
  },
  {
    id: 2,
    title: "No Land Beneath Our Wings",
    type: "Independent Film",
    role: "Lead",
    year: "2025",
    status: "Released",
    image: "/images/veda-4.jpg",
    description: "An indie feature that allowed me to explore complex emotional terrain, laying the foundation for the nuanced performances that would soon capture wider attention.",
    highlight: null,
  },
];

const upcomingText = "More exciting projects in the pipeline. Stay tuned for announcements.";

function CollabCard({ collab, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`grid lg:grid-cols-2 gap-6 lg:gap-12 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div 
        className={`relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden group ${isEven ? "" : "lg:col-start-2"}`}
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={collab.image}
          alt={collab.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        
        {collab.highlight && (
          <motion.div 
            className="absolute top-4 sm:top-6 left-4 sm:left-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="px-3 py-1.5 bg-[#c69c6d] text-[#050505] text-[10px] sm:text-xs uppercase tracking-wider font-medium">
              {collab.highlight}
            </span>
          </motion.div>
        )}

        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
          <p className="text-white/60 text-[10px] sm:text-xs uppercase tracking-widest mb-1">{collab.year}</p>
          <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-white leading-tight">{collab.title}</h3>
        </div>

        <motion.div
          className="absolute inset-0 border-2 border-[#c69c6d]/0 group-hover:border-[#c69c6d]/30 transition-all duration-500 pointer-events-none"
        />
      </motion.div>

      <motion.div 
        className={`space-y-4 sm:space-y-6 ${isEven ? "" : "lg:col-start-1 lg:text-right"}`}
        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 ${isEven ? '' : 'lg:justify-end'}">
          <span className="px-3 py-1 bg-white/5 border border-white/10 text-[#a3a3a3] text-[10px] sm:text-xs uppercase tracking-wider">
            {collab.type}
          </span>
          <span className="px-3 py-1 bg-[#c69c6d]/10 border border-[#c69c6d]/20 text-[#c69c6d] text-[10px] sm:text-xs uppercase tracking-wider">
            {collab.status}
          </span>
        </div>

        <div>
          <p className="text-[#c69c6d] text-xs sm:text-sm uppercase tracking-widest mb-2">Role</p>
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#f7f5f0] italic">{collab.role}</p>
        </div>

        <p className="text-[#a3a3a3] text-sm sm:text-base leading-relaxed max-w-lg">
          {collab.description}
        </p>

        <motion.div
          className={`flex items-center gap-2 text-[#737373] ${isEven ? "" : "lg:justify-end"}`}
          whileHover={{ x: isEven ? 5 : -5 }}
        >
          <span className="text-xs uppercase tracking-wider">View on IMDb</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Collabs() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Nav />
      
      <main className="pt-24 sm:pt-32">
        <section className="px-4 sm:px-6 lg:px-12 pb-16 sm:pb-20">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#c69c6d] text-[10px] sm:text-xs">Collaborations</p>
              <div className="flex-1 h-px bg-white/10 hidden sm:block" />
              <p className="uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#737373] text-[10px] sm:text-xs">Films & Projects</p>
            </motion.div>

            <motion.h1
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#f7f5f0] max-w-4xl mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Stories I've been
              <br />
              <span className="italic text-[#c69c6d]">part of.</span>
            </motion.h1>

            <motion.p
              className="text-[#a3a3a3] text-sm sm:text-base lg:text-lg max-w-2xl mb-16 sm:mb-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Every collaboration is a journey. Here are the projects that have shaped my craft and allowed me to explore the depths of human emotion on screen.
            </motion.p>

            <div className="space-y-16 sm:space-y-24 lg:space-y-32">
              {collabs.map((collab, index) => (
                <CollabCard key={collab.id} collab={collab} index={index} />
              ))}
            </div>

            <motion.div
              className="mt-20 sm:mt-32 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-4 px-6 sm:px-8 py-4 sm:py-5 border border-dashed border-[#c69c6d]/30 bg-[#c69c6d]/5">
                <div className="w-2 h-2 rounded-full bg-[#c69c6d] animate-pulse" />
                <p className="text-[#a3a3a3] text-xs sm:text-sm">{upcomingText}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
