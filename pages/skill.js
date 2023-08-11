import SkillExample from "@/components/SkillExample";

export default function Skill({ sortedSkills }) {
  return <SkillExample sortedSkills={sortedSkills} />;
}

export async function getStaticProps() {
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
    },
  };
}
