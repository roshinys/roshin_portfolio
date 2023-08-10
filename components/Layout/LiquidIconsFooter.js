import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitHub, LinkedIn, Instagram, Twitter } from "@mui/icons-material";
import styles from "./LiquidIconsFooter.module.css";

const LiquidIconsFooter = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  const iconVariants = {
    hover: {
      color: ["#445069", "#E96479"],
      transition: { duration: 1 },
    },
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <motion.div
      className={styles.footer}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className={styles.icon}
        whileHover="hover"
        variants={iconVariants}
      >
        <GitHub />
      </motion.div>
      <motion.div
        className={styles.icon}
        whileHover="hover"
        variants={iconVariants}
      >
        <LinkedIn />
      </motion.div>
      <motion.div
        className={styles.icon}
        whileHover="hover"
        variants={iconVariants}
      >
        <Instagram />
      </motion.div>
      <motion.div
        className={styles.icon}
        whileHover="hover"
        variants={iconVariants}
      >
        <Twitter />
      </motion.div>
    </motion.div>
  );
};

export default LiquidIconsFooter;
