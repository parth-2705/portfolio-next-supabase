import supabase from "@/utils/supabase.js";
import { projectData } from "./data.js";
import { useEffect, useState } from "react";
import { dateToMonth } from "@/utils/date.js";

const Experience = () => {
  const [data, setData] = useState([]);
  const getexperience = async () => {
    let { data: experience, error } = await supabase
      .from("experience")
      .select("*")
      .order("start", { ascending: false });
    setData(experience);
  };
  useEffect(() => {
    getexperience();
  }, []);
  return (
    <div className="projects-container">
      <h2>Experience 🧙‍♂️</h2>
      <div className="projects-grid">
        {data.map((exp) => {
          return (
            <div className="exp-row">
              <h4>{exp.designation}</h4>
              <div className="exp-row-sub">
                <p>{exp.company}</p>
                <p className="exp-date">
                  {dateToMonth(exp.start)} - {dateToMonth(exp.end) || "present"}
                </p>
              </div>
              <p>{exp.summary}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
