import { useState } from "react";

const API_URL = "http://localhost:3001/api";

function FormInput({ label, required, ...props }) {
  return (
    <div>
      <label className="block text-[#737373] text-[9px] uppercase tracking-[0.2em] font-light mb-3">
        {label} {required && "*"}
      </label>
      <input
        {...props}
        className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-[#f5f3ee] text-[13px] placeholder-[#555555] focus:border-[#c4a47c]/40 focus:outline-none transition-all duration-500"
        required={required}
      />
    </div>
  );
}

export default function CTASection() {
  const [activeTab, setActiveTab] = useState("business");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.target);
    const data = {
      type: activeTab,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || null,
      company: formData.get("company") || null,
      project: formData.get("project") || null,
      budget: formData.get("budget") || null,
      message: formData.get("message"),
    };

    try {
      const response = await fetch(`${API_URL}/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Submission failed");

      setSubmitted(true);
      e.target.reset();
    } catch (err) {
      setError("Failed to submit. Please try again or email directly.");
    }

    setSubmitting(false);
  };

  if (submitted) {
    return (
      <section id="connect" className="py-36 lg:py-48 px-8 lg:px-16 bg-black overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-xl mx-auto text-center py-24">
            <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-[#c4a47c]/15 border border-[#c4a47c]/25 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c4a47c" strokeWidth="1.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="font-serif text-[32px] text-[#f5f3ee] mb-4 font-light">Thank You</h2>
            <p className="text-[#9a9a9a] text-[14px] leading-[1.7] mb-10">
              Your inquiry has been received. I'll respond within 48 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-7 py-3 bg-[#c4a47c]/12 border border-[#c4a47c]/25 text-[#c4a47c] text-[10px] uppercase tracking-[0.15em] font-medium hover:bg-[#c4a47c]/18 transition-all duration-400"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="connect" className="bg-black overflow-hidden py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="flex items-center gap-8 mb-12">
          <p className="uppercase tracking-[0.4em] text-[#c69c6d] text-xs">06 — Collaborate</p>
          <div className="flex-1 h-px bg-white/10" />
          <p className="uppercase tracking-[0.3em] text-[#737373] text-xs hidden md:block">Work With Me</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="font-serif text-[28px] sm:text-[36px] lg:text-[46px] text-[#f5f3ee] leading-[1.15] tracking-normal font-light mb-8">
              Bring a story.
              <br />
              <span className="italic text-[#c69c6d]">Or a brand worth telling one for.</span>
            </h2>

            <div className="hidden lg:flex flex-wrap gap-3 mb-8">
              <button
                type="button"
                onClick={() => setActiveTab("business")}
                className={`px-5 py-2.5 text-[10px] uppercase tracking-[0.15em] font-light transition-all duration-400 flex items-center gap-2 ${
                  activeTab === "business"
                    ? "bg-[#c69c6d] text-black border border-[#c69c6d]"
                    : "bg-transparent text-[#737373] border border-white/15 hover:border-white/25"
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                Business Collaboration
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("casting")}
                className={`px-5 py-2.5 text-[10px] uppercase tracking-[0.15em] font-light transition-all duration-400 flex items-center gap-2 ${
                  activeTab === "casting"
                    ? "bg-[#c69c6d] text-black border border-[#c69c6d]"
                    : "bg-transparent text-[#737373] border border-white/15 hover:border-white/25"
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15.6 11.6L22 7v10l-6.4-4.6v-1z" />
                  <rect x="2" y="6" width="14" height="12" rx="2" ry="2" />
                </svg>
                Casting Inquiry
              </button>
            </div>

            <div className="relative aspect-[9/16] max-w-[300px] overflow-hidden group hidden lg:block">
              <video
                src="/videos/veda-cta.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white/60 text-[10px] uppercase tracking-[0.15em] font-medium">.vedashnkr</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-white/[0.06] p-6 sm:p-8 lg:p-10">
            <div className="flex lg:hidden mb-8">
              <button
                type="button"
                onClick={() => setActiveTab("business")}
                className={`flex-1 py-3 text-[10px] uppercase tracking-[0.12em] font-medium transition-all duration-300 ${
                  activeTab === "business"
                    ? "bg-[#c69c6d] text-black"
                    : "bg-transparent text-[#737373] border border-white/10"
                }`}
              >
                Business
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("casting")}
                className={`flex-1 py-3 text-[10px] uppercase tracking-[0.12em] font-medium transition-all duration-300 ${
                  activeTab === "casting"
                    ? "bg-[#c69c6d] text-black"
                    : "bg-transparent text-[#737373] border border-white/10"
                }`}
              >
                Casting
              </button>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                {error}
              </div>
            )}

            {activeTab === "business" && (
              <div>
                <div className="mb-10">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#737373] font-light mb-2">For Brands & Agencies</p>
                  <h3 className="font-serif text-[22px] text-[#f5f3ee] font-light">
                    Endorsements · Brand films · Editorial
                  </h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <FormInput label="Your Name" name="name" type="text" placeholder="Anika Mehta" required />
                    <FormInput label="Email" name="email" type="email" placeholder="you@brand.com" required />
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <FormInput label="Phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                    <FormInput label="Brand / Company" name="company" type="text" placeholder="House of Masaba" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <FormInput label="Campaign / Project" name="project" type="text" placeholder="SS26 brand film" />
                    <FormInput label="Budget Range" name="budget" type="text" placeholder="₹ 8L – 15L" />
                  </div>
                  <div>
                    <label className="block text-[#737373] text-[9px] uppercase tracking-[0.2em] font-light mb-3">
                      Brief *
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell us about the concept, deliverables and timeline."
                      rows={4}
                      className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-[#f5f3ee] text-[13px] placeholder-[#555555] focus:border-[#c4a47c]/40 focus:outline-none transition-all duration-500 resize-none"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between pt-8">
                    <p className="text-[#555555] text-[10px] font-light tracking-wide">
                      Replies within 48 hours
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-8 py-3 bg-[#c69c6d] text-black text-[10px] uppercase tracking-[0.15em] font-medium hover:bg-[#d4ad7d] transition-all duration-400 flex items-center gap-3 disabled:opacity-50"
                    >
                      {submitting ? "Sending..." : "Send Inquiry"}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "casting" && (
              <div>
                <div className="mb-10">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#737373] font-light mb-2">For Casting Directors</p>
                  <h3 className="font-serif text-[22px] text-[#f5f3ee] font-light">
                    Film · OTT · Theatre
                  </h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <FormInput label="Casting Director" name="name" type="text" placeholder="Your Name" required />
                    <FormInput label="Email" name="email" type="email" placeholder="casting@production.com" required />
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <FormInput label="Production House" name="company" type="text" placeholder="Dharma Productions" />
                    <FormInput label="Project Title" name="project" type="text" placeholder="Untitled Feature" />
                  </div>
                  <div>
                    <label className="block text-[#737373] text-[9px] uppercase tracking-[0.2em] font-light mb-3">
                      Role Description *
                    </label>
                    <textarea
                      name="message"
                      placeholder="Describe the character, shoot dates, and any specific requirements."
                      rows={4}
                      className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-[#f5f3ee] text-[13px] placeholder-[#555555] focus:border-[#c4a47c]/40 focus:outline-none transition-all duration-500 resize-none"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between pt-8">
                    <p className="text-[#555555] text-[10px] font-light tracking-wide">
                      Scripts welcomed
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-8 py-3 bg-[#c69c6d] text-black text-[10px] uppercase tracking-[0.15em] font-medium hover:bg-[#d4ad7d] transition-all duration-400 flex items-center gap-3 disabled:opacity-50"
                    >
                      {submitting ? "Sending..." : "Send Inquiry"}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
