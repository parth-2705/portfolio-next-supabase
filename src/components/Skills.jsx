import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";
import Progressbar from "@/components/Progressbar";

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
            <Progressbar level={skill.level} total={5}></Progressbar>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
