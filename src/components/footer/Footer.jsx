// Footer.jsx
import FooterBrand from "./FooterBrand";
import FooterSection from "./FooterSection";
import { services, company, resources, socialLinks } from "./footerData";

export default function Footer() {
  return (
    <footer className="relative bg-[rgb(12,12,12)] text-[#EAEAEA] pt-20 pb-10 overflow-hidden">
      
      {/* --- PREMIUM RIGHT-SIDE DOT PATTERN (SAFE POSITIONED) --- */}
      <div
        aria-hidden="true"
        className="
          absolute right-0 
          top-[120px] md:top-[140px] lg:top-[250px] 
          h-[70%] w-[200px] 
          z-0 opacity-[0.65] pointer-events-none
        "
      >
        <div className="absolute inset-y-0 right-0 w-full flex items-start justify-end">
          <div className="grid grid-cols-6 gap-3 mt-6 mr-6">
            {Array.from({ length: 54 }).map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-[#ABDDD9]/10 rounded-sm blur-[0.3px] 
                           shadow-[0_0_4px_rgba(171,221,217,0.05)]"
              />
            ))}
          </div>
        </div>

        {/* Gradient fade so pattern blends */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-l from-transparent to-[rgb(12,12,12)]"></div>
      </div>

      {/* ---- FOOTER CONTENT ---- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <FooterBrand socialLinks={socialLinks} />
          <FooterSection title="Services" items={services} />
          <FooterSection title="Company" items={company} />
          <FooterSection title="Resources" items={resources} />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row 
                        justify-between items-center text-sm text-white/60">
          
          <p>© 2025 Nexus Digital Agency. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#53AAA4] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#53AAA4] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#53AAA4] transition-colors">Cookies</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
