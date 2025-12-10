// FooterBrand.jsx
import { motion } from "framer-motion";
import TexorLabLogo from "./TexorLabLogo";
import logoImg from "../../assest/logo.png";

export default function FooterBrand({ socialLinks }) {
  return (
    <div className="lg:col-span-2">
      <div className="flex items-center gap-4 group">
        <img
          src={logoImg}
          alt="TexorLab Logo"
          className="
            h-40 w-auto object-contain 
            transition-all duration-300 
            group-hover:scale-105 
            group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]
          "
          loading="lazy"
        />
      </div>
      {/* <TexorLabLogo/> */}

      <p className="mt-4 text-white/70 max-w-sm leading-relaxed">
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
              whileHover={{ y: -4 }}
              className="p-2 rounded-full bg-white/10 hover:bg-[#53AAA4]/20 transition-colors"
            >
              <Icon className="text-white hover:text-[#53AAA4] transition-colors duration-200" />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
