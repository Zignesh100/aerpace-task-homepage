import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BgVideo from "../video/ecosystem_hero_mobile_new.mp4";
import herobg from "../images/superwing_home_hero.jpg";
import carTravelImage from "../images/superwing_home_block_1.jpg";
import leftImage from "../images/superwing_home_block_2.jpg";
import rightImage from "../images/superwing_home_block_3.jpg";
import Navbar from "../Navbar/Navbar";
import Carousel from "../cart/Carousel";
import aerhome from "../images/aerdock_home_block_1.jpg";
import aerhome2 from "../images/aerdock_home_block_2.jpg";
import aerhome3 from "../images/aerdock_home_block_3.jpg";
import aerhome4 from "../images/aerdock_home_block_4.jpg";
import img1 from "../images/img-superwing-vm-bg@2x-Photoroom.png";
import img2 from "../images/img-superwing-vm-bg_2x-removebg-preview.png";
import bgImage from "../images/aerdock_home_hero.jpg";
const Home = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <div className="w-full scroll-smooth">
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src={BgVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />
        <Navbar />
        <motion.div
          className="absolute left-6 md:left-20 top-1/2 transform -translate-y-1/2 text-white text-4xl sm:text-5xl lg:text-7xl font-bold z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Everyday travel. <br /> Elevated.
        </motion.div>
      </div>

      <section
        ref={sectionRef}
        className="relative h-screen overflow-hidden flex items-center justify-center px-4 sm:px-10"
      >
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.img
            src={herobg}
            alt="Air Mobility"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
        <div className="relative z-20 text-center max-w-3xl">
          <motion.p
            style={{ opacity }}
            className="text-gray-300 text-xl sm:text-2xl mb-4"
          >
            Unlocking the future of transport
          </motion.p>
          <motion.h1
            style={{ scale, opacity }}
            className="text-white text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight"
          >
            An all-electric <br />
            <span className="text-blue-400">air mobility.</span>
          </motion.h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 bg-blue-500 text-white px-6 py-3 text-base font-semibold rounded-full shadow-md hover:bg-blue-600 transition"
          >
            Explore Innovation →
          </motion.button>
        </div>
      </section>

      <motion.p
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#323237] px-4 sm:px-10 lg:px-16 py-10 sm:py-12 text-center md:text-left"
      >
        Meet{" "}
        <motion.span
          whileHover={{ scale: 1.1 }}
          className="text-blue-700 transition duration-300 inline-block"
        >
          aerWing
        </motion.span>
        . An unmanned,
        <br className="hidden sm:block" />
        <span className="text-blue-500">eVTOL</span> transportation fleet.
      </motion.p>

      <section className="relative w-full my-10 px-4 sm:px-8 md:px-16 lg:px-20 rounded-3xl overflow-hidden">
        {/* Background Image */}
        <motion.img
          src={carTravelImage}
          alt="Convenient Travel"
          className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] object-cover rounded-3xl"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 z-10 rounded-3xl" />

        {/* Text Content */}
        <motion.div
          className="absolute inset-0 flex flex-col items-start justify-center px-4 sm:px-10 md:px-20 z-20"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="p-4 sm:p-8 md:p-16">
            <h2 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 drop-shadow-lg">
              Convenient
            </h2>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-md font-medium drop-shadow-lg mb-4 sm:mb-6">
              Take your car with you, whether you are flying alone or with
              company.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-full shadow-md hover:bg-gray-100 transition"
            >
              Discover More →
            </motion.button>
          </div>
        </motion.div>
      </section>

      <section className="w-full py-10 sm:py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Image Section */}
          <motion.div
            style={{ willChange: "transform, opacity" }}
            className="relative w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl"
            initial={{ y: -80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img
              src={leftImage}
              alt="Economical travel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex  justify-center px-6 sm:px-10 min-h-[350px]">
              <div className="text-white text-center md:text-left max-w-md my-10 space-y-4">
                <motion.h3
                  style={{ willChange: "transform, opacity" }}
                  className="text-blue-300 text-2xl font-bold uppercase tracking-widest"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Economical
                </motion.h3>
                <motion.h2
                  style={{ willChange: "transform, opacity" }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Interstate & intercity travel—designed for everyone.
                </motion.h2>
              </div>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            style={{ willChange: "transform, opacity" }}
            className="relative w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl"
            initial={{ y: -80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src={rightImage}
              alt="Faster travel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex  justify-center px-6 sm:px-10 min-h-[350px]">
              <div className="text-white text-center md:text-left my-10 max-w-md space-y-4">
                <motion.h3
                  style={{ willChange: "transform, opacity" }}
                  className="text-blue-300 text-2xl font-bold  uppercase tracking-widest"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Faster
                </motion.h3>
                <motion.h2
                  style={{ willChange: "transform, opacity" }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  200 km/h cruise speeds reduce travel time to minutes.
                </motion.h2>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Carousel />

      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <motion.img
          src={bgImage}
          alt="Air Mobility"
          className="absolute inset-0 w-full h-full object-cover z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Text Content */}
        <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 text-center sm:text-left">
          <motion.div
            className="max-w-3xl text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Elevate every journey
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Give your cars <br />
              <span className="text-blue-400">aerWing to fly.</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      <motion.p
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="text-xl sm:text-3xl md:text-4xl lg:text-6xl text-[#323237] font-bold px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-12 text-center sm:text-left"
      >
        Meet{" "}
        <motion.span
          whileHover={{ scale: 1.1 }}
          className="inline-block text-blue-600 transition-transform"
        >
          aerDock
        </motion.span>
        . A fully automated,
        <br />
        <span className="text-blue-500">futuristic</span> docking station.
      </motion.p>

      <section className="relative w-full h-[70vh] sm:h-[80vh] my-10 sm:my-16 px-4 sm:px-10 md:px-16 lg:px-20 rounded-3xl overflow-hidden">
        <motion.img
          src={aerhome}
          alt="Convenient Travel"
          className="w-full h-full object-cover rounded-3xl"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <div className="absolute inset-0 z-10 rounded-3xl" />

        <motion.div
          className="absolute inset-0 flex flex-col items-start justify-center px-4 sm:px-10 md:px-20 z-20"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="p-4 sm:p-8 md:p-16">
            <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 drop-shadow-lg">
              Space efficient
            </h2>
            <p className="text-white text-base sm:text-lg md:text-xl max-w-lg font-medium mb-5 sm:mb-6 drop-shadow-lg">
              Uses less space than an airport and is faster to deploy.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-full shadow-md hover:bg-gray-100 transition"
            >
              Discover More →
            </motion.button>
          </div>
        </motion.div>
      </section>

      <section className="w-full py-10 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Image Section */}
          <motion.div
            className="relative w-full md:w-1/2 h-full overflow-hidden rounded-2xl shadow-xl"
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img
              src={aerhome2}
              alt="Economical"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center  px-4 sm:px-6 md:px-10 z-10">
              <div className="text-white max-w-md space-y-4 my-10 text-center md:text-left">
                <motion.h3
                  className="text-blue-300 text-2xl font-bold uppercase tracking-widest"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Move swiftly
                </motion.h3>
                <motion.h2
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  An aerDock can serve hundreds of travelers a day without
                  waiting.
                </motion.h2>
              </div>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="relative w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl"
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src={aerhome3}
              alt="Faster"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex flex-col items-center  px-4 sm:px-6 md:px-10 z-10">
              <div className="text-white max-w-md space-y-4 text-center my-10 md:text-left">
                <motion.h3
                  className="text-blue-300 text-2xl font-bold uppercase tracking-widest"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Thinking ahead
                </motion.h3>
                <motion.h2
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  From medical to cargo, a platform that moves more than just
                  your car.
                </motion.h2>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative w-full my-10 sm:my-16 px-4 sm:px-8 md:px-16 lg:px-20 rounded-3xl overflow-hidden">
        <motion.img
          src={aerhome4}
          alt="Convenient Travel"
          className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] object-cover rounded-3xl"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 z-10" />
        <motion.div
          className="absolute inset-0 flex flex-col items-start   px-4 sm:px-8 md:px-16 z-20"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="p-4 sm:p-8 md:p-16">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl px-2 sm:px-6 mb-2 sm:mb-4 drop-shadow-lg">
              Visual spectacle
            </h2>
            <p className="text-white text-base sm:text-xl md:text-2xl px-2 sm:px-6 max-w-xl font-semibold drop-shadow-lg mb-2">
              Designed to accentuate the unique aerWing take off and landing.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-2 sm:px-6 text-blue-500 font-medium text-base sm:text-xl transition"
            >
              More about the aerDock →
            </motion.button>
          </div>
        </motion.div>
      </section>

      <section className="w-full py-10 sm:py-16">
        <div className="mx-auto flex items-center justify-center relative px-4 sm:px-6 md:px-20">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl">
            <img
              src={img1}
              alt="Main Image"
              className="w-full h-full object-cover"
            />

            <motion.div
              className="absolute inset-0 flex  mt-5 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-[#264466] text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg px-4">
                aerpace — The Future of Transportation
              </h2>
            </motion.div>

            <motion.div
              className="absolute bottom-4 sm:bottom-6 right-8 sm:right-14 overflow-hidden"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={img2}
                alt="Overlay Image"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="w-full bg-white px-4 sm:px-8 md:px-16 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="relative p-8 rounded-lg border-2 border-black bg-white overflow-hidden group"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />
              <motion.div
                className="w-12 h-0.5 bg-black mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8 }}
              />
              <h2 className="text-2xl font-bold mb-4 text-black">
                Future ready solutions
              </h2>
              <p className="text-gray-700">
                Fully designed and crafted for an unparalleled travel
                experience, made possible with the coming-of-age technology.
              </p>
            </motion.div>

            <motion.div
              className="relative p-8 rounded-lg border-2 border-black bg-white overflow-hidden group"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.div
                className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />
              <motion.div
                className="w-12 h-0.5 bg-black mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              />
              <h2 className="text-2xl font-bold mb-4 text-black">
                Faster, Easier, Better
              </h2>
              <p className="text-gray-700">
                Designed for a better environment, superior travel time
                management, minimisation of land use and optimisation of
                resources.
              </p>
            </motion.div>

            <motion.div
              className="relative p-8 rounded-lg border-2 border-black bg-white overflow-hidden group"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />
              <motion.div
                className="w-12 h-0.5 bg-black mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <h2 className="text-2xl font-bold mb-4 text-black">
                Tomorrow’s energy today
              </h2>
              <p className="text-gray-700">
                Hydrogen energy distribution is at the core to our ecosystem,
                making sure the future is more efficient and sustainable.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              className="px-10 py-4 bg-black text-white text-lg font-medium rounded-sm relative overflow-hidden"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Discover More</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
