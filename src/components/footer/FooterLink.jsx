import { motion } from "framer-motion";

export default function FooterLink({ href, children }) {
  return (
    <motion.a
      href={href}
      whileHover={{ x: 6 }}
      className="inline-flex items-center text-white/70 hover:text-[#53AAA4] transition-colors duration-200"
    >
      {children}
    </motion.a>
  );
}
