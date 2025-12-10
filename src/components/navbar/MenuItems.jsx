import React from "react";
import { Link } from "react-router-dom";

const menuLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const MenuItems = ({ isMobile = false, onClick }) => {
  return (
    <div
      className={`${
        isMobile ? "flex flex-col gap-4 text-white" : "hidden md:flex gap-10 text-white"
      } text-lg font-medium`}
    >
      {menuLinks.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          onClick={onClick}
          className="transition cursor-pointer hover:text-[#53AAA4]"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
