import FooterBrand from "./FooterBrand";
import FooterSection from "./FooterSection";
import { services, company, resources, socialLinks } from "./footerData";


export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          <FooterBrand socialLinks={socialLinks} />
          <FooterSection title="Services" items={services} />
          <FooterSection title="Company" items={company} />
          <FooterSection title="Resources" items={resources} />

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row 
                        justify-between items-center text-sm text-slate-500">
          
          <p>© 2025 Nexus Digital Agency. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
