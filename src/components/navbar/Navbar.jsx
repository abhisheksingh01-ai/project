import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import TexorLabNavbar from "./TexorLabNavbar";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black/95 text-white shadow-[0_0_30px_rgba(0,0,0,0.5)] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <TexorLabNavbar/>
        <MenuItems />
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4">
          <MenuItems isMobile={true} onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
