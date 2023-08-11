import React from "react";
import { motion } from "framer-motion";
import styles from "./SkillExample.module.css"; // Import the CSS module

function SkillExample({ sortedSkills }) {
  return (
    <div className={styles.skillExample}>
      <div className={styles.skillsContainer}>
        {sortedSkills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <div className={styles.skillName}>{skill.name}</div>
            <div className={styles.skillBar}>
              <motion.div
                className={styles.skillFill}
                initial={{ width: 0 }}
                animate={{ width: `${skill.percentage}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
                style={{ backgroundColor: "#E96479" }} // Set the desired color for the indicator glow
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillExample;
