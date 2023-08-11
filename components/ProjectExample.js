import React, { useEffect, useState } from "react";
import SkillExample from "./SkillExample";
import styles from "./ProjectExample.module.css";
import { motion } from "framer-motion";
import { Card, Button } from "react-bootstrap";

function ProjectExample({ sortedSkills, initialProjects, extraProjects }) {
  const [showExtraProjects, setShowExtraProjects] = useState(false);
  const [projectsToShow, setProjectsToShow] = useState(
    initialProjects !== undefined ? initialProjects : []
  );

  useEffect(() => {
    if (showExtraProjects) {
      setProjectsToShow((prevState) => [...prevState, ...extraProjects]);
    } else {
      setProjectsToShow(initialProjects);
    }
  }, [showExtraProjects, initialProjects, extraProjects]);

  return (
    <div>
      <SkillExample sortedSkills={sortedSkills} />
      <h2>Projects</h2>
      <div className={styles.projectContainer}>
        <div className={styles.projects}>
          {projectsToShow.map((project, index) => (
            <motion.div
              key={index}
              className={styles.project}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={project.imageSrc} />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <button onClick={() => setShowExtraProjects(!showExtraProjects)}>
        {showExtraProjects ? "Show Fewer Projects" : "Show More Projects"}
      </button>
    </div>
  );
}

export default ProjectExample;
