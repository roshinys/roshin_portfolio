import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);
  return (
    <>
      {!isLoading && <>{children}</>}
      {isLoading && (
        <AnimatePresence>
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              width: "100vw",
              height: "100vh",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              fontFamily: "sans-serif",
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ fontSize: "2rem", fontWeight: "bold" }}
            >
              <p className={styles.name}>Roshin</p>
            </motion.span>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default LoadingScreen;
