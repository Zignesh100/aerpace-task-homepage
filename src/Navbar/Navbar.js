import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../images/download (1).svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const links = [
    "aerVerse",
    "aerDock",
    "aerWing",
    "aerCar",
    "aerVolt",
    "aerShield",
    "Racers",
    "#MakeTime",
  ];

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-10 backdrop-blur-lg text-white">
      <div className="mx-auto flex items-center justify-between px-20 py-4">
        <NavLink
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={Logo} alt="Logo" className="w-32" />
        </NavLink>

        {isDesktop ? (
          <nav className="flex items-center space-x-8">
            {links.map((text, idx) => (
              <NavLink
                key={idx}
                to="/"
                className="hover:text-blue-400 transition font-medium"
              >
                {text}
              </NavLink>
            ))}
            <a
              href="#"
              className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition text-sm font-medium"
            >
              Investor
            </a>
          </nav>
        ) : (
          <button onClick={() => setMenuOpen(true)}>
            <FaBars className="text-2xl" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {menuOpen && !isDesktop && (
          <motion.div
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-black text-white z-50 p-6 flex flex-col gap-6"
          >
            <div className="flex justify-end">
              <FaTimes
                className="text-2xl cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            </div>

            {links.map((text, idx) => (
              <NavLink
                key={idx}
                to="/"
                className="text-lg hover:text-blue-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                {text}
              </NavLink>
            ))}

            <a
              href="#"
              className="mt-auto px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition text-sm font-medium"
            >
              Investor
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
