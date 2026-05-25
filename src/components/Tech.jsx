import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import {
  javascript,
  java,
  mongodb,
  mobile,
  azure,
  github,
  bitbucket,
  kotlin,
  android_studio,
  xcode,
  swift,
  python
} from "../assets";
import figma from "../assets/tech/figma.png";

const programming = [
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
  { name: "Java", icon: java },
  { name: "Kotlin", icon: kotlin },
  { name: "Swift", icon: swift },
  { name: "MongoDB", icon: mongodb },
];

const itTools = [
  { name: "Xcode", icon: xcode },
  { name: "Android Studio", icon: android_studio },
  { name: "Figma", icon: figma },
  { name: "Jira", icon: azure },
  { name: "Github", icon: github },
  { name: "Bitbucket", icon: bitbucket },
];

const Tech = () => {
  const [rows, setRows] = useState({
    programming: [],
    itTools: [],
  });

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const calculateRows = (width, techArray) => {
    if (width < 380) {
      return [techArray.slice(0, 2), techArray.slice(2, 4), techArray.slice(4)].filter((row) => row.length > 0);
    }
    if (width < 500) {
      return [techArray.slice(0, 3), techArray.slice(3)].filter((row) => row.length > 0);
    }
    if (width < 1024) {
      return [techArray.slice(0, 3), techArray.slice(3)].filter((row) => row.length > 0);
    }

    const rowSize = Math.min(6, techArray.length);
    return [techArray.slice(0, rowSize), techArray.slice(rowSize)].filter((row) => row.length > 0);
  };

  useEffect(() => {
    const calculateRowsForAllCategories = () => {
      setRows({
        programming: calculateRows(window.innerWidth, programming),
        itTools: calculateRows(window.innerWidth, itTools),
      });
    };

    calculateRowsForAllCategories();

    const handleResize = () => {
      calculateRowsForAllCategories();
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hexagonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: Math.random() * 1.5,
        duration: 0.5,
        type: "spring",
      },
    },
    hover: {
      scale: 1.05,
      zIndex: 2,
      transition: { duration: 0.3 },
    },
  };

  const renderCategory = (categoryName, categoryRows) => (
    <motion.div
      key={categoryName}
      className="category-container"
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
    >
      <motion.h2
        className="category-title top"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        style={{
          fontFamily: "'Gill Sans', cursive",
          fontSize: "26px",
          background: "linear-gradient(90deg, #915EFF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          filter: "drop-shadow(0 0 10px #915EFF)",
        }}
      >{`<${categoryName}>`}</motion.h2>
      <div className="honeycomb-grid">
        {categoryRows?.map((row, rowIndex) => (
          <div
            key={`${categoryName}-row-${rowIndex}`}
            className={`honeycomb-row ${rowIndex % 2 === 1 ? "staggered-row" : ""}`}
          >
            {row.map((tech) => (
              <motion.div
                key={tech.name}
                className="hexagon"
                variants={hexagonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <img src={tech.icon} alt={tech.name} style={{ userSelect: "none" }} draggable="false" />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      <motion.h2
        className="category-title bottom"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        style={{
          fontFamily: "'Gill Sans', cursive",
          fontSize: "26px",
          background: "linear-gradient(90deg, #915EFF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          filter: "drop-shadow(0 0 10px #915EFF)",
        }}
      >{`</${categoryName}>`}</motion.h2>
    </motion.div>
  );

  return (
    <section className="skills" ref={ref}>
      <div className="container">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Technical Proficiencies</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
        </motion.div>
        {renderCategory("programming", rows.programming)}
        {renderCategory("itTools", rows.itTools)}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");
