// MenuItems.jsx
import React from "react";

const menuLinks = ["Home", "Services", "Portfolio", "About", "Contact"];

export const MenuItems = ({ isMobile = false, onClick }) => {
  return (
    <div
      className={`${
        isMobile ? "flex flex-col gap-4" : "hidden md:flex gap-10"
      } text-lg font-medium text-white`}
    >
      {menuLinks.map((link) => (
        <p
          key={link}
          className="hover:text-blue-400 transition cursor-pointer"
          onClick={onClick}
        >
          {link}
        </p>
      ))}
    </div>
  );
};
