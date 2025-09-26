"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(pathname);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Projects", path: "/projects" },
  ];

  const handleNavClick = (path: string) => {
    setActiveItem(path);
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-black p-4 flex items-center justify-between relative">
      {/* Logo */}
      <Link href="/">
        <Image
          src={"/logo.png"}
          alt="logo-png"
          width={80}
          height={80}
          className="pl-4"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-10 font-mono text-xl font-semibold mr-10">
        {navItems.map((item) => (
          <Link
            href={item.path}
            key={item.path}
            className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 ${
              pathname === item.path ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl mr-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-black flex flex-col items-center md:hidden py-4 shadow-lg z-10">
          {navItems.map((item) => (
            <Link
              href={item.path}
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`py-3 text-xl w-full text-center font-mono transition-all duration-300 ${
                activeItem === item.path
                  ? "bg-sky-500 text-white"
                  : "text-gray-400 hover:bg-gray-800"
              } md:bg-transparent`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
