import FooterBrand from "./FooterBrand";
import FooterSection from "./FooterSection";
import { services, company, resources } from "./footerData";

export default function Footer() {
  return (
    <footer className="bg-[rgb(12,12,12)] text-[#EAEAEA] pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          <FooterBrand />
          <FooterSection title="Services" items={services} />
          <FooterSection title="Company" items={company} />
          <FooterSection title="Resources" items={resources} />
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© 2025 TexorLab Agency. All rights reserved.</p>
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
