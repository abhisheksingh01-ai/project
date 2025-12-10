import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <nav className="w-full bg-[rgb(12,12,12)] text-white shadow-[0_0_30px_rgba(0,0,0,0.5)] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* LOGO */}
        <div className="flex items-center gap-4">
          <img
            src="/FinalLogo.png"
            alt="TexorLab Logo"
            className="h-22 w-auto object-contain opacity-100"
            loading="lazy"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center">
          <MenuItems />
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-white/60"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
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
