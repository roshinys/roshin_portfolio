import React from "react";
import { motion } from "framer-motion";
import styles from "./ImageDescriptionSection.module.css";

const ImageDescriptionSection = ({ imageSrc, description }) => {
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  return (
    <motion.div
      className={styles["image-description-container"]}
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
    >
      <div className={styles["image-description-content"]}>
        <div className={styles["image-container"]}>
          <motion.img
            src={imageSrc}
            alt="Image"
            className={styles["image"]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
        </div>
        <div className={styles["description"]}>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageDescriptionSection;
