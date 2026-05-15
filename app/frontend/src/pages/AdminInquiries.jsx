import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = "http://localhost:3001/api";

const statusColors = {
  new: { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/30" },
  contacted: { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30" },
  converted: { bg: "bg-[#c69c6d]/20", text: "text-[#c69c6d]", border: "border-[#c69c6d]/30" },
  archived: { bg: "bg-zinc-500/20", text: "text-zinc-400", border: "border-zinc-500/30" },
};

const typeLabels = {
  business: "Business Collaboration",
  casting: "Casting Inquiry",
};

function StatCard({ label, value, icon, color = "text-[#c69c6d]" }) {
  return (
    <motion.div
      className="bg-[#0f0f0f] border border-white/5 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ borderColor: "rgba(198, 156, 109, 0.2)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-[#737373] text-xs uppercase tracking-widest">{label}</span>
        <span className={`text-xl ${color}`}>{icon}</span>
      </div>
      <p className={`text-4xl font-serif ${color}`}>{value}</p>
    </motion.div>
  );
}

function InquiryCard({ inquiry, onSelect, isSelected }) {
  const colors = statusColors[inquiry.status];

  return (
    <motion.div
      className={`bg-[#0f0f0f] border p-5 cursor-pointer transition-all ${
        isSelected ? "border-[#c69c6d]/50" : "border-white/5 hover:border-white/10"
      }`}
      onClick={() => onSelect(inquiry)}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ x: 4 }}
      layout
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-[#f7f5f0] font-medium truncate">{inquiry.name}</h3>
          <p className="text-[#737373] text-sm truncate">{inquiry.email}</p>
        </div>
        <span className={`px-2 py-1 text-[10px] uppercase tracking-wider ${colors.bg} ${colors.text} ${colors.border} border`}>
          {inquiry.status}
        </span>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <span className="text-[#c69c6d] text-xs">{typeLabels[inquiry.type]}</span>
        {inquiry.company && (
          <>
            <span className="text-[#4a4a4a]">·</span>
            <span className="text-[#737373] text-xs truncate">{inquiry.company}</span>
          </>
        )}
      </div>

      <p className="text-[#a3a3a3] text-sm line-clamp-2">{inquiry.message}</p>

      <p className="text-[#4a4a4a] text-xs mt-3">
        {new Date(inquiry.createdAt).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </motion.div>
  );
}

function InquiryDetail({ inquiry, onUpdate, onClose }) {
  const [status, setStatus] = useState(inquiry.status);
  const [notes, setNotes] = useState(inquiry.notes || "");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      await fetch(`${API_URL}/inquiries/${inquiry.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, notes }),
      });
      onUpdate();
    } catch (error) {
      console.error("Failed to update:", error);
    }
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this inquiry?")) return;
    try {
      await fetch(`${API_URL}/inquiries/${inquiry.id}`, { method: "DELETE" });
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Failed to delete:", error);
    }
  };

  return (
    <motion.div
      className="bg-[#0a0a0a] border border-white/5 h-full flex flex-col"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className="p-6 border-b border-white/5 flex items-center justify-between">
        <div>
          <h2 className="text-xl text-[#f7f5f0] font-serif">{inquiry.name}</h2>
          <p className="text-[#c69c6d] text-sm">{typeLabels[inquiry.type]}</p>
        </div>
        <button onClick={onClose} className="text-[#737373] hover:text-[#f7f5f0] transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-auto p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-[#737373] text-xs uppercase tracking-wider mb-1">Email</p>
            <a href={`mailto:${inquiry.email}`} className="text-[#c69c6d] hover:underline">
              {inquiry.email}
            </a>
          </div>
          {inquiry.phone && (
            <div>
              <p className="text-[#737373] text-xs uppercase tracking-wider mb-1">Phone</p>
              <a href={`tel:${inquiry.phone}`} className="text-[#f7f5f0]">{inquiry.phone}</a>
            </div>
          )}
          {inquiry.company && (
            <div>
              <p className="text-[#737373] text-xs uppercase tracking-wider mb-1">Company</p>
              <p className="text-[#f7f5f0]">{inquiry.company}</p>
            </div>
          )}
          {inquiry.project && (
            <div>
              <p className="text-[#737373] text-xs uppercase tracking-wider mb-1">Project</p>
              <p className="text-[#f7f5f0]">{inquiry.project}</p>
            </div>
          )}
          {inquiry.budget && (
            <div>
              <p className="text-[#737373] text-xs uppercase tracking-wider mb-1">Budget</p>
              <p className="text-[#f7f5f0]">{inquiry.budget}</p>
            </div>
          )}
          <div>
            <p className="text-[#737373] text-xs uppercase tracking-wider mb-1">Received</p>
            <p className="text-[#f7f5f0]">
              {new Date(inquiry.createdAt).toLocaleDateString("en-IN", { dateStyle: "long" })}
            </p>
          </div>
        </div>

        <div>
          <p className="text-[#737373] text-xs uppercase tracking-wider mb-2">Message</p>
          <div className="bg-[#0f0f0f] border border-white/5 p-4 text-[#a3a3a3] leading-relaxed">
            {inquiry.message}
          </div>
        </div>

        <div>
          <p className="text-[#737373] text-xs uppercase tracking-wider mb-2">Status</p>
          <div className="flex gap-2 flex-wrap">
            {Object.keys(statusColors).map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`px-4 py-2 text-xs uppercase tracking-wider border transition-all ${
                  status === s
                    ? `${statusColors[s].bg} ${statusColors[s].text} ${statusColors[s].border}`
                    : "border-white/10 text-[#737373] hover:border-white/20"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[#737373] text-xs uppercase tracking-wider mb-2">Internal Notes</p>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add notes about this inquiry..."
            className="w-full h-32 bg-[#0f0f0f] border border-white/10 px-4 py-3 text-[#f7f5f0] placeholder-[#4a4a4a] focus:border-[#c69c6d]/50 focus:outline-none resize-none"
          />
        </div>
      </div>

      <div className="p-6 border-t border-white/5 flex items-center justify-between">
        <button
          onClick={handleDelete}
          className="px-4 py-2 text-red-400 text-xs uppercase tracking-wider hover:bg-red-500/10 transition-colors"
        >
          Delete
        </button>
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-6 py-2 bg-[#c69c6d]/20 border border-[#c69c6d]/40 text-[#c69c6d] text-xs uppercase tracking-wider hover:bg-[#c69c6d]/30 transition-colors disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </motion.div>
  );
}

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [stats, setStats] = useState(null);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [inquiriesRes, statsRes] = await Promise.all([
        fetch(`${API_URL}/inquiries?status=${filterStatus}&type=${filterType}`),
        fetch(`${API_URL}/stats`),
      ]);

      const inquiriesData = await inquiriesRes.json();
      const statsData = await statsRes.json();

      setInquiries(inquiriesData.inquiries);
      setStats(statsData.stats);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [filterStatus, filterType]);

  const handleUpdate = () => {
    fetchData();
    if (selectedInquiry) {
      const updated = inquiries.find((i) => i.id === selectedInquiry.id);
      if (updated) setSelectedInquiry(updated);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f7f5f0]">
      <header className="border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-5 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="/" className="flex items-center gap-2 sm:gap-3">
              <span className="w-2 h-2 rounded-full bg-[#c69c6d]" />
              <span className="font-serif text-lg sm:text-xl">
                <span className="italic">Veda</span> Shankar
              </span>
            </a>
            <span className="text-[#4a4a4a]">/</span>
            <span className="text-[#737373] text-sm">Admin</span>
          </div>
          <a
            href="/"
            className="text-[#737373] hover:text-[#f7f5f0] text-xs sm:text-sm transition-colors"
          >
            ← Back to Site
          </a>
        </div>
      </header>

      <main className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-serif text-[#f7f5f0] mb-1 sm:mb-2">Inquiries Dashboard</h1>
          <p className="text-[#737373] text-sm sm:text-base">Manage incoming casting leads and collaboration requests</p>
        </div>

        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
            <StatCard label="Total" value={stats.total} icon="📊" />
            <StatCard label="New" value={stats.new} icon="✨" color="text-emerald-400" />
            <StatCard label="Contacted" value={stats.contacted} icon="📞" color="text-blue-400" />
            <StatCard label="Converted" value={stats.converted} icon="🎬" />
            <StatCard label="Archived" value={stats.archived} icon="📁" color="text-zinc-400" />
            <StatCard label="Business" value={stats.business} icon="💼" color="text-purple-400" />
            <StatCard label="Casting" value={stats.casting} icon="🎭" color="text-pink-400" />
          </div>
        )}

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-[#737373] text-xs uppercase tracking-wider">Status:</span>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-[#0f0f0f] border border-white/10 px-3 py-2 text-sm text-[#f7f5f0] focus:border-[#c69c6d]/50 focus:outline-none"
            >
              <option value="all">All</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="converted">Converted</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#737373] text-xs uppercase tracking-wider">Type:</span>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-[#0f0f0f] border border-white/10 px-3 py-2 text-sm text-[#f7f5f0] focus:border-[#c69c6d]/50 focus:outline-none"
            >
              <option value="all">All</option>
              <option value="business">Business</option>
              <option value="casting">Casting</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <AnimatePresence>
              {loading ? (
                <div className="text-center py-20 text-[#737373]">Loading...</div>
              ) : inquiries.length === 0 ? (
                <motion.div
                  className="text-center py-20 bg-[#0f0f0f] border border-white/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-[#737373] mb-2">No inquiries yet</p>
                  <p className="text-[#4a4a4a] text-sm">
                    New submissions will appear here instantly
                  </p>
                </motion.div>
              ) : (
                inquiries.map((inquiry, index) => (
                  <InquiryCard
                    key={inquiry.id}
                    inquiry={inquiry}
                    onSelect={setSelectedInquiry}
                    isSelected={selectedInquiry?.id === inquiry.id}
                  />
                ))
              )}
            </AnimatePresence>
          </div>

          <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)]">
            <AnimatePresence mode="wait">
              {selectedInquiry ? (
                <InquiryDetail
                  key={selectedInquiry.id}
                  inquiry={selectedInquiry}
                  onUpdate={handleUpdate}
                  onClose={() => setSelectedInquiry(null)}
                />
              ) : (
                <motion.div
                  className="h-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="text-center">
                    <p className="text-[#737373] mb-2">Select an inquiry</p>
                    <p className="text-[#4a4a4a] text-sm">Click on any item to view details</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
