"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
// import { Link } from 'react-router-dom'; // If you're using React Router

interface NavbarProps {
  theme?: "light" | "dark" | "transparent";
  routes?: {
    name: string;
    path: string;
  }[];
}

const Navbar = ({ theme = "light", routes }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const bgColor = theme === "light" ? "" : "bg-transparent";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const bgColorResponsive = theme === "light" ? "bg-white" : theme==="dark" ? "bg-darkBlue" : "bg-gray-700";
  const borderColor = theme === "light" ? "border-black" : "border-white";

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`w-full z-10 ${bgColor}`}>
      <div className="w-full px-4 sm:px-0 lg:px-8">
        <div className="flex items-center justify-end h-16">
          <div className="flex items-center">
          </div>
          <div className="hidden mr-10 md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              {routes?.map((route) => (
                <Link
                  key={route.name}
                  href={route.path}
                  className={`${textColor} hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium`}
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="block md:hidden">
            <motion.button
              onClick={toggleNavbar}
              className={`inline-flex items-center ${textColor}  ${borderColor} justify-center p-2  border-2 rounded-md`}
              aria-expanded={isOpen}
              whileTap={{ scale: 0.9 }} 
            >
              Menu
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`md:hidden absolute w-full z-10 rounded-sm ${bgColorResponsive}  rounded `}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {routes?.map((route) => (
                <Link
                  key={route.name}
                  href={route.path}
                  className={`${textColor} hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium`}
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
