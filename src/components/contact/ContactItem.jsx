import { motion } from "framer-motion";
const ACCENT = "#53AAA4";
export default function ContactItem({ Icon, title, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: [0.2, 0.9, 0.3, 1] }}
      className="flex items-start gap-4"
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        className="w-14 h-14 rounded-full grid place-items-center"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.03))",
          border: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <Icon className="w-6 h-6" style={{ color: ACCENT }} />
      </motion.div>

      <div>
        <div className="text-white font-semibold">{title}</div>
        <div className="text-white/70 mt-1">{children}</div>
      </div>
    </motion.div>
  );
}
