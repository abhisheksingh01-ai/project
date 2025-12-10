import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { IconMap } from "./icons";

export default function ServiceModal({ open, svc, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && svc && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-6" role="dialog" aria-modal="true">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }} className="absolute inset-0 bg-black" onClick={onClose} />
          <motion.div initial={{ y: 18, opacity: 0, scale: 0.98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 18, opacity: 0, scale: 0.98 }} transition={{ type: "spring", stiffness: 300, damping: 26 }} className="relative z-10 max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#F4F4F4] flex items-center justify-center">
                {IconMap[svc.key]({ className: "text-[#0C0C0C]" })}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-[Urbanist] font-bold text-[#0C0C0C]">{svc.title}</h3>
                <p className="mt-3 text-sm text-[#4A4A4A]">{svc.details}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {svc.keywords.map((k) => <span key={k} className="text-xs px-2 py-1 rounded-full bg-[#F3F3F3] text-[#0C0C0C]">{k}</span>)}
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={onClose} className="px-4 py-2 rounded-md bg-white border border-gray-200 hover:bg-gray-50">Close</button>
              <a href="#contact" className="px-5 py-2 rounded-md bg-[#53AAA4] text-white font-medium hover:bg-[#4f9890]">Get this service</a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
