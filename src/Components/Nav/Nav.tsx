"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
// import { Link } from 'react-router-dom'; // If you're using React Router

interface NavbarProps {
  theme?: "light" | "dark";
  routes?: {
    name: string;
    path: string;
  }[];
}

const Navbar = ({ theme = "light", routes }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const bgColor = theme === "light" ? "" : "bg-transparent";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const bgColorResponsive = theme === "light" ? "bg-white" : "bg-darkBlue";

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
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md focus:outline-none"
              aria-expanded={isOpen}
              whileTap={{ scale: 0.9 }} 
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <motion.svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }} 
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }} 
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </motion.svg>
              )}
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
