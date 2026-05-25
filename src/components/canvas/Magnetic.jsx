import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Magnetic component that smoothly pulls its child element towards the user's cursor
 * when hovered, creating a highly tactile, premium interaction effect.
 */
const Magnetic = ({ children, range = 50, strength = 0.35 }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Center point of the element
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Distance from center to cursor
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Calculate direct line distance (Pythagorean theorem)
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    if (distance < range) {
      // Pull element towards cursor with defined strength multiplier
      setPosition({ x: distanceX * strength, y: distanceY * strength });
    } else {
      // Release
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
