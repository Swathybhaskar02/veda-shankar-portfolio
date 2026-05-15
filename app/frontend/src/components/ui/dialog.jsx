import { createContext, useContext, useState } from "react";

const DialogContext = createContext(null);

export function Dialog({ children, open: controlledOpen, onOpenChange }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const setOpen = (value) => {
    if (!isControlled) {
      setInternalOpen(value);
    }
    onOpenChange?.(value);
  };

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({ children, asChild }) {
  const { setOpen } = useContext(DialogContext);

  const handleClick = () => setOpen(true);

  if (asChild && children) {
    return (
      <span onClick={handleClick} className="cursor-pointer">
        {children}
      </span>
    );
  }

  return (
    <button onClick={handleClick} type="button">
      {children}
    </button>
  );
}

export function DialogContent({ children, className = "" }) {
  const { open, setOpen } = useContext(DialogContext);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div
        className={`relative z-50 w-full max-w-4xl mx-4 bg-[#0f0f0f] border border-white/10 rounded-lg p-6 shadow-2xl ${className}`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          type="button"
          aria-label="Close dialog"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

export function DialogTitle({ children, className = "" }) {
  return (
    <h2 className={`text-xl font-semibold text-[#f7f5f0] ${className}`}>
      {children}
    </h2>
  );
}

export function DialogDescription({ children, className = "" }) {
  return (
    <p className={`text-[#a3a3a3] mt-2 ${className}`}>
      {children}
    </p>
  );
}
