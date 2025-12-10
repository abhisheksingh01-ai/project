import { motion } from "framer-motion";
import { socialLinks } from "./footerData";

export default function FooterBrand() {
  return (
    <div className="lg:col-span-2">
      <div className="flex items-center gap-4">
        <img
          src="/FinalLogo.png"
          alt="TexorLab Logo"
          className="h-5/12 w-50 object-contain opacity-100"
          loading="lazy"
        />
      </div>

      <p className="mt-3 text-white/70 max-w-sm leading-relaxed">
        We create digital experiences that empower business growth. From
        stunning interfaces to high-performance development, we craft solutions
        that stand out.
      </p>

      <div className="flex gap-4 mt-4">
        {socialLinks.map(({ id, icon: Icon, href }) => (
          <motion.a
            key={id}
            href={href}
            whileHover={{ y: -4 }}
            className="p-2 rounded-full bg-white/10 hover:bg-[#53AAA4]/20 transition-colors"
          >
            <Icon className="text-white hover:text-[#53AAA4] transition-colors duration-200" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
