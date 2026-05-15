import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AdminLayout from "../components/admin/AdminLayout";

const initialCollabs = [
  {
    id: 1,
    brand: "Vaazha 2: Biopic of a Billion Bros",
    type: "Film",
    role: "Female Lead",
    date: "2026",
    status: "completed",
    description: "Malayalam blockbuster film where I played a grounded character providing emotional support to the lead characters.",
    notes: "Breakthrough role - gained significant recognition",
  },
  {
    id: 2,
    brand: "No Land Beneath Our Wings",
    type: "Film",
    role: "Lead",
    date: "2025",
    status: "completed",
    description: "Independent film that showcased emotional range and complex character work.",
    notes: "Indie project before mainstream breakthrough",
  },
];

const statusOptions = ["planning", "in-progress", "completed", "cancelled"];
const typeOptions = ["Film", "Web Series", "Brand Campaign", "Photoshoot", "Event", "Other"];

const statusColors = {
  planning: { bg: "bg-yellow-500/20", text: "text-yellow-400", border: "border-yellow-500/30" },
  "in-progress": { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30" },
  completed: { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/30" },
  cancelled: { bg: "bg-red-500/20", text: "text-red-400", border: "border-red-500/30" },
};

function CollabCard({ collab, onEdit, onDelete }) {
  const colors = statusColors[collab.status];

  return (
    <motion.div
      className="bg-[#0f0f0f] border border-white/5 p-5 sm:p-6 hover:border-[#c69c6d]/20 transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      layout
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#c69c6d] text-xs uppercase tracking-wider">{collab.type}</span>
            <span className="text-[#4a4a4a]">·</span>
            <span className="text-[#737373] text-xs">{collab.date}</span>
          </div>
          <h3 className="text-lg sm:text-xl text-[#f7f5f0] font-serif">{collab.brand}</h3>
          <p className="text-[#c69c6d] text-sm italic mt-1">{collab.role}</p>
        </div>
        <span className={`px-3 py-1 text-[10px] uppercase tracking-wider ${colors.bg} ${colors.text} ${colors.border} border self-start`}>
          {collab.status}
        </span>
      </div>

      {collab.description && (
        <p className="text-[#a3a3a3] text-sm leading-relaxed mb-3">{collab.description}</p>
      )}

      {collab.notes && (
        <p className="text-[#737373] text-xs italic border-l-2 border-[#c69c6d]/30 pl-3 mb-4">{collab.notes}</p>
      )}

      <div className="flex gap-3">
        <button
          onClick={() => onEdit(collab)}
          className="text-[#737373] hover:text-[#c69c6d] text-xs uppercase tracking-wider transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(collab.id)}
          className="text-[#737373] hover:text-red-400 text-xs uppercase tracking-wider transition-colors"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
}

function CollabForm({ collab, onSave, onCancel }) {
  const [formData, setFormData] = useState(
    collab || {
      brand: "",
      type: "Film",
      role: "",
      date: new Date().getFullYear().toString(),
      status: "planning",
      description: "",
      notes: "",
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, id: collab?.id || Date.now() });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-[#0a0a0a] border border-white/5 p-5 sm:p-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="text-lg font-serif text-[#f7f5f0] mb-6">
        {collab ? "Edit Collaboration" : "Add New Collaboration"}
      </h3>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-[#737373] text-xs uppercase tracking-wider mb-2">
            Project / Brand Name *
          </label>
          <input
            type="text"
            value={formData.brand}
            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
            required
            className="w-full bg-[#0f0f0f] border border-white/10 px-4 py-2.5 text-[#f7f5f0] placeholder-[#4a4a4a] focus:border-[#c69c6d]/50 focus:outline-none"
            placeholder="e.g., Film name, Brand name"
          />
        </div>

        <div>
          <label className="block text-[#737373] text-xs uppercase tracking-wider mb-2">
            Role *
          </label>
          <input
            type="text"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            required
            className="w-full bg-[#0f0f0f] border border-white/10 px-4 py-2.5 text-[#f7f5f0] placeholder-[#4a4a4a] focus:border-[#c69c6d]/50 focus:outline-none"
            placeholder="e.g., Lead, Supporting, Brand Ambassador"
          />
        </div>

        <div>
          <label className="block text-[#737373] text-xs uppercase tracking-wider mb-2">
            Type
          </label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="w-full bg-[#0f0f0f] border border-white/10 px-4 py-2.5 text-[#f7f5f0] focus:border-[#c69c6d]/50 focus:outline-none"
          >
            {typeOptions.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[#737373] text-xs uppercase tracking-wider mb-2">
            Year / Date
          </label>
          <input
            type="text"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full bg-[#0f0f0f] border border-white/10 px-4 py-2.5 text-[#f7f5f0] placeholder-[#4a4a4a] focus:border-[#c69c6d]/50 focus:outline-none"
            placeholder="e.g., 2026, Jan 2026"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-[#737373] text-xs uppercase tracking-wider mb-2">
            Status
          </label>
          <div className="flex flex-wrap gap-2">
            {statusOptions.map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setFormData({ ...formData, status })}
                className={`px-4 py-2 text-xs uppercase tracking-wider border transition-all ${
                  formData.status === status
                    ? `${statusColors[status].bg} ${statusColors[status].text} ${statusColors[status].border}`
                    : "border-white/10 text-[#737373] hover:border-white/20"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-[#737373] text-xs uppercase tracking-wider mb-2">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={3}
            className="w-full bg-[#0f0f0f] border border-white/10 px-4 py-3 text-[#f7f5f0] placeholder-[#4a4a4a] focus:border-[#c69c6d]/50 focus:outline-none resize-none"
            placeholder="Brief description of the project..."
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-[#737373] text-xs uppercase tracking-wider mb-2">
            Personal Notes
          </label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            rows={2}
            className="w-full bg-[#0f0f0f] border border-white/10 px-4 py-3 text-[#f7f5f0] placeholder-[#4a4a4a] focus:border-[#c69c6d]/50 focus:outline-none resize-none"
            placeholder="Internal notes, memories, learnings..."
          />
        </div>
      </div>

      <div className="flex gap-3 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2 text-[#737373] text-xs uppercase tracking-wider hover:text-[#f7f5f0] transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-[#c69c6d]/20 border border-[#c69c6d]/40 text-[#c69c6d] text-xs uppercase tracking-wider hover:bg-[#c69c6d]/30 transition-colors"
        >
          {collab ? "Save Changes" : "Add Collaboration"}
        </button>
      </div>
    </motion.form>
  );
}

export default function AdminCollabs() {
  const [collabs, setCollabs] = useState(initialCollabs);
  const [editingCollab, setEditingCollab] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredCollabs = filterStatus === "all" 
    ? collabs 
    : collabs.filter((c) => c.status === filterStatus);

  const handleSave = (collab) => {
    if (editingCollab) {
      setCollabs(collabs.map((c) => (c.id === collab.id ? collab : c)));
    } else {
      setCollabs([collab, ...collabs]);
    }
    setEditingCollab(null);
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this collaboration?")) {
      setCollabs(collabs.filter((c) => c.id !== id));
    }
  };

  const handleEdit = (collab) => {
    setEditingCollab(collab);
    setShowForm(true);
  };

  const stats = {
    total: collabs.length,
    completed: collabs.filter((c) => c.status === "completed").length,
    inProgress: collabs.filter((c) => c.status === "in-progress").length,
    planning: collabs.filter((c) => c.status === "planning").length,
  };

  return (
    <AdminLayout
      title="My Collaborations"
      subtitle="Track and manage your projects, films, and brand partnerships"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <motion.div
          className="bg-[#0f0f0f] border border-white/5 p-4 sm:p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-[#737373] text-[10px] sm:text-xs uppercase tracking-wider mb-1">Total</p>
          <p className="text-2xl sm:text-3xl font-serif text-[#c69c6d]">{stats.total}</p>
        </motion.div>
        <motion.div
          className="bg-[#0f0f0f] border border-white/5 p-4 sm:p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-[#737373] text-[10px] sm:text-xs uppercase tracking-wider mb-1">Completed</p>
          <p className="text-2xl sm:text-3xl font-serif text-emerald-400">{stats.completed}</p>
        </motion.div>
        <motion.div
          className="bg-[#0f0f0f] border border-white/5 p-4 sm:p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-[#737373] text-[10px] sm:text-xs uppercase tracking-wider mb-1">In Progress</p>
          <p className="text-2xl sm:text-3xl font-serif text-blue-400">{stats.inProgress}</p>
        </motion.div>
        <motion.div
          className="bg-[#0f0f0f] border border-white/5 p-4 sm:p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-[#737373] text-[10px] sm:text-xs uppercase tracking-wider mb-1">Planning</p>
          <p className="text-2xl sm:text-3xl font-serif text-yellow-400">{stats.planning}</p>
        </motion.div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="text-[#737373] text-xs uppercase tracking-wider">Filter:</span>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-[#0f0f0f] border border-white/10 px-3 py-2 text-sm text-[#f7f5f0] focus:border-[#c69c6d]/50 focus:outline-none"
          >
            <option value="all">All</option>
            {statusOptions.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>

        <button
          onClick={() => {
            setEditingCollab(null);
            setShowForm(true);
          }}
          className="px-5 py-2.5 bg-[#c69c6d] text-[#050505] text-xs uppercase tracking-wider hover:bg-[#d4af37] transition-colors"
        >
          + Add Collaboration
        </button>
      </div>

      <AnimatePresence>
        {showForm && (
          <div className="mb-6">
            <CollabForm
              collab={editingCollab}
              onSave={handleSave}
              onCancel={() => {
                setEditingCollab(null);
                setShowForm(false);
              }}
            />
          </div>
        )}
      </AnimatePresence>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {filteredCollabs.length === 0 ? (
            <motion.div
              className="sm:col-span-2 lg:col-span-3 text-center py-16 bg-[#0f0f0f] border border-white/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-[#737373] mb-2">No collaborations found</p>
              <p className="text-[#4a4a4a] text-sm">Add your first project to get started</p>
            </motion.div>
          ) : (
            filteredCollabs.map((collab) => (
              <CollabCard
                key={collab.id}
                collab={collab}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          )}
        </AnimatePresence>
      </div>
    </AdminLayout>
  );
}
