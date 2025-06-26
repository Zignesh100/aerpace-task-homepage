import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import img1 from "../images/img-hardware-1.jpg";
import img2 from "../images/img-hardware-2.jpg";
import img3 from "../images/img-hardware-3.jpg";
import img4 from "../images/img-hardware-4.jpg";
import img5 from "../images/img-hardware-5.jpg";

const images = [
  { src: img1, title: `Zero operating emissions` },
  { src: img2, title: `Vertical take-off and landing` },
  { src: img3, title: `Fully electric,\nsustainable` },
  { src: img4, title: `Low Noise\ntechnology` },
  { src: img5, title: `Modular design,\nmaximum versatility` },
];

const HardwareCarousel = () => {
  return (
    <section className="w-full bg-[#F8F8F8] py-12 px-4 sm:px-6 lg:px-20">
      <motion.h2
        className="text-[#323237] text-2xl sm:text-4xl lg:text-6xl font-bold mb-10 sm:mb-14 leading-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Building radically better <br className="hidden sm:block" />
        ways of moving.
      </motion.h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="group relative h-[100vh] rounded-2xl overflow-hidden shadow-md">
              <img
                src={img.src}
                alt={img.title}
                className="h-[100vh] w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
              />
              <div className="absolute inset-0 flex  p-4 sm:px-8 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                <h3 className="text-white text-4xl sm:text-4xl lg:text-4xl font-bold whitespace-pre-line">
                  {img.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: #1e293b;
          background-color: #ffffffcc;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-weight: bold;
          transition: background-color 0.3s;
        }
        :global(.swiper-button-next:hover),
        :global(.swiper-button-prev:hover) {
          background-color: #ffffffee;
        }
      `}</style>
    </section>
  );
};

export default HardwareCarousel;
