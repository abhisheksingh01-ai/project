import { motion } from "framer-motion";
import TexorLabLogo from "./TexorLabLogo";

export default function FooterBrand({ socialLinks }) {
  return (
    <div className="lg:col-span-2">
      <TexorLabLogo/>

      <p className="mt-4 text-slate-400 max-w-sm leading-relaxed">
        We create digital experiences that empower business growth.  
        From stunning interfaces to high-performance development,  
        we craft solutions that stand out.
      </p>

      <div className="flex gap-4 mt-6">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.id}
              href={social.href}
              whileHover={{ y: -3 }}
              className="bg-slate-900 p-2 rounded-full hover:bg-slate-800 transition-colors"
            >
              <Icon />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
