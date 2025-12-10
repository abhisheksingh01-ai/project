// Navbar.jsx
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import TexorLabNavbar from "./TexorLabNavbar";
import { MenuItems } from "./MenuItems";
import logoImg from "../../assest/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <nav className="w-full bg-[rgb(12,12,12)] text-white shadow-[0_0_30px_rgba(0,0,0,0.5)] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-4 group">
          <img
            src={logoImg}
            alt="TexorLab Logo"
            className="
      h-22 w-auto object-contain 
      transition-all duration-300 
      group-hover:scale-105 
      group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]
    "
            loading="lazy"
          />
        </div>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <MenuItems />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-white/60"
          onClick={() => setOpen((s) => !s)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[rgb(12,12,12)] text-white px-6 py-4"
          role="menu"
        >
          <MenuItems isMobile onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
