import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../images/download (1).svg";
import Footercontact from "./Footercontact";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="font-sans">
      <Footercontact />

      <footer className="bg-black text-white pt-16 pb-8 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <NavLink
                  to="/"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <img src={logo} alt="Logo" className="w-36 mb-6" />
                </NavLink>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Building the future of aerial mobility through innovation and
                  sustainability.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-medium text-white mb-6 pb-3 border-b border-gray-700 tracking-wider">
                CONNECT
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    icon: <FaLinkedin />,
                    label: "LinkedIn",
                    url: "https://in.linkedin.com/company/aerpace-official",
                  },
                  {
                    icon: <FaXTwitter />,
                    label: "Twitter",
                    url: "https://x.com/aerpaceofficial?t=tpgikcmc85jGI34WTribWA&s=08",
                  },
                  {
                    icon: <FaYoutube />,
                    label: "YouTube",
                    url: "https://www.youtube.com/@aerpace/",
                  },
                  {
                    icon: <FaInstagram />,
                    label: "Instagram",
                    url: "https://www.instagram.com/aerpaceofficial?igshid=ZDdkNTZiNTM%3D",
                  },
                  {
                    icon: <FaFacebookF />,
                    label: "Facebook",
                    url: "https://www.facebook.com/aerpaceofficial/?mibextid=ZbWKwL",
                  },
                ].map(({ icon, label, url }) => (
                  <motion.li
                    key={label}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="flex items-center"
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <span className="text-xl">{icon}</span>
                      <span>{label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-medium text-white mb-6 pb-3 border-b border-gray-700 tracking-wider">
                SOLUTIONS
              </h3>
              <ul className="space-y-3">
                {[
                  "aerVerse",
                  "Platform",
                  "aerDock",
                  "aerWing",
                  "aerCar",
                  "aerVolt",
                  "aerShield",
                ].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-medium text-white mb-6 pb-3 border-b border-gray-700 tracking-wider">
                COMPANY
              </h3>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "Newsroom",
                  "Investors",
                  "Careers",
                  "Tech Blog",
                ].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          >
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 Aerpace Industries. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {["Terms", "Privacy", "Cookies"].map((item) => (
                <motion.a
                  key={item}
                  whileHover={{ y: -2 }}
                  className="text-gray-500 hover:text-white text-sm cursor-pointer transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
