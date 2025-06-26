import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FooterContact = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div className="w-full bg-gradient-to-br from-black to-gray-900 px-4 py-16 sm:py-24 md:py-32">
      <motion.div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            <span className="block">Revolution.</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              It’s a team effort.
            </span>
          </h2>

          <div className="h-1 w-24 bg-blue-500 my-6"></div>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            We know we can’t do this alone. It takes collaboration and
            commitment to realize an idea this bold. Join us. Let’s build a new
            era of flight.{" "}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
              Stay Updated
            </h3>

            <div className="space-y-6">
              <div className="relative">
                <input
                  type="email"
                  placeholder=" "
                  className="peer w-full py-4 px-4 bg-transparent border-b-2 border-gray-600 text-white placeholder-transparent focus:border-blue-500 focus:outline-none transition-all"
                />
                <label className="absolute left-4 -top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400">
                  Your Email
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className="peer w-full py-4 px-4 bg-transparent border-b-2 border-gray-600 text-white placeholder-transparent focus:border-blue-500 focus:outline-none transition-all"
                />
                <label className="absolute left-4 -top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400">
                  Your Name
                </label>
              </div>

              <div className="flex items-start space-x-4 pt-2">
                <input
                  type="checkbox"
                  id="consent-checkbox"
                  className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="consent-checkbox"
                  className="text-gray-400 text-sm"
                >
                  I hereby consent to processing of my personal data in
                  accordance with the data protection declaration of consent.
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Submit
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <p className="text-center text-gray-500 text-sm">
            We respect your privacy. Your information will never be shared.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FooterContact;
