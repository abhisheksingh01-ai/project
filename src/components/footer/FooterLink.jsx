import { motion } from "framer-motion";

export default function FooterLink({ href, children }) {
  return (
    <motion.a
      href={href}
      whileHover={{ x: 6 }}
      className="inline-flex items-center text-slate-400 hover:text-white 
                 transition-colors duration-200"
    >
      {children}
    </motion.a>
  );
}

