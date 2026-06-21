import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { extracurricular } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const CertificationCard = ({ title, icon, type, date, points, certificate_link }) => (
  <Tilt
    options={{
      max: 15,
      scale: 1.03,
      speed: 450,
    }}
    className="w-full h-full"
  >
    <div className="certification-card bg-tertiary p-6 rounded-2xl w-full h-full flex flex-col justify-between no-select shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/5">
      <div>
        <div className="relative w-full h-[50px] mb-4">
          <img
            src={icon}
            alt={title}
            className="w-auto h-full object-contain no-select"
          />
        </div>
        <h3 className="text-white-100 font-bold text-[20px] mb-2 no-select">{title}</h3>
        <p className="text-secondary text-[12px] mb-1 no-select">{type}</p>
        <p className="text-secondary text-[12px] mb-3 no-select">{date}</p>
        <ul className="list-disc ml-5 space-y-1 mb-4">
          {points.slice(0, 2).map((point, index) => (
            <li
              key={`certification-point-${index}`}
              className="text-white-100 text-[12px] pl-1 tracking-wider no-select"
            >
              {point}
            </li>
          ))}
        </ul>
        {certificate_link && (
          <button
            onClick={() => window.open(certificate_link, "_blank")}
            className="w-full py-2 px-4 bg-gradient-to-r from-[var(--accent-2)] to-[var(--accent-1)] hover:from-[var(--accent-1)] hover:to-[var(--accent-2)] text-white font-bold rounded-lg text-[13px] shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:-translate-y-[1px]"
          >
            View Certificate
          </button>
        )}
      </div>
    </div>
  </Tilt>
);

const Extracurricular = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <p className={`${styles.sectionSubText} text-center`}>Continuous Learning</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className={`${styles.sectionHeadText} text-center`}>Certifications</h2>
      </motion.div>

      <motion.div 
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-20 flex flex-col items-center"
      >
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          spaceBetween={0}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false, // Disable slide shadows entirely
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1024:{
              slidesPerView: 3,
            }
          }}
         
        >
          {extracurricular.map((certification, index) => (
            <SwiperSlide key={`certification-${index}`}>
              <CertificationCard {...certification} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <style jsx global>{`
        .mySwiper {
          width: 100%;
          padding-top: 50px;
          padding-bottom: 50px;
        }
        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 280px;
          height: 280px;
        }
        .swiper-slide-active {
          transform: scale(1.1) !important;
        }
        .swiper-slide img {
          display: block;
          width: 100%;
        }
        .swiper-pagination-bullet {
          background: var(--accent-1);
        }
        .certification-card {
          background-color: rgba(29, 45, 117, 0.85);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px 0 rgba(13, 17, 59, 0.37);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease-in-out;
        }
        @media (max-width: 768px) {
          .swiper-slide {
            width: 90vw;
            max-width: 300px;
            height: auto;
            min-height: 340px;
            opacity: 1 !important;
            transform: scale(1) !important;
          }
          .swiper-slide-active {
            transform: scale(1) !important;
          }
          .mySwiper {
            padding-left: 5vw;
            padding-right: 5vw;
          }
          .certification-card {
            background-color: rgba(30, 30, 60, 0.8);
            box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.37);
          }
          .swiper-slide-next,
          .swiper-slide-prev {
            opacity: 0 !important;
            visibility: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(Extracurricular, "extracurricular");
