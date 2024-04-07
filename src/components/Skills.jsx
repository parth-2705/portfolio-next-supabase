import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";
import ProgressBar from "./Progressbar";

const Skills = () => {
  const [data, setData] = useState([]);
  const getBasic = async () => {
    let { data: skills, error } = await supabase.from("skills").select("*");
    console.log(skills, error);
    setData(skills);
  };
  useEffect(() => {
    getBasic();
  }, []);
  return (
    <div className="skills-container">
      <h2>Skills ⭐</h2>
      <div className="grid-skills">
        {data.map((skill) => (
          <div className="skill">
            <h4>{skill.name}</h4>
            <ProgressBar level={skill.level} total={5}></ProgressBar>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
