import ProjectExample from "@/components/ProjectExample";

export default function Skill({
  sortedSkills,
  initialProjects,
  extraProjects,
}) {
  return (
    <ProjectExample
      sortedSkills={sortedSkills}
      initialProjects={initialProjects}
      extraProjects={extraProjects}
    />
  );
}

export async function getStaticProps() {
  const initialProjects = [
    {
      name: "Project 1",
      imageSrc: "https://placekitten.com/200/200",
      description: "This is the description of Project 1.",
    },
    {
      name: "Project 2",
      imageSrc: "https://placekitten.com/200/200",
      description: "This is the description of Project 2.",
    },
    {
      name: "Project 3",
      imageSrc: "https://placekitten.com/200/200",
      description: "This is the description of Project 3.",
    },
    {
      name: "Project 4",
      imageSrc: "https://placekitten.com/200/200",
      description: "This is the description of Project 4.",
    },
  ];

  const extraProjects = [
    {
      name: "Extra Project 1",
      imageSrc: "https://placekitten.com/200/200",
      description: "This is the description of Extra Project 1.",
    },
    {
      name: "Extra Project 2",
      imageSrc: "https://placekitten.com/200/200",
      description: "This is the description of Extra Project 2.",
    },
    {
      name: "Extra Project 3",
      imageSrc: "https://placekitten.com/200/200",
      description: "This is the description of Extra Project 3.",
    },
    {
      name: "Extra Project 4",
      imageSrc: "https://placekitten.com/200/200",
      description: "This is the description of Extra Project 4.",
    },
  ];
  const skills = [
    { name: "HTML", percentage: 80 },
    { name: "CSS", percentage: 70 },
    { name: "JavaScript", percentage: 60 },
    { name: "React", percentage: 75 },
    { name: "Node.js", percentage: 65 },
    { name: "Express.js", percentage: 60 },
  ];
  const sortedSkills = [...skills].sort((a, b) => a.name.localeCompare(b.name));
  return {
    props: {
      sortedSkills,
      initialProjects,
      extraProjects,
    },
  };
}
