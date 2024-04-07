import supabase from "@/utils/supabase";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [data, setData] = useState([]);
  const getBasic = async () => {
    let { data: basic, error } = await supabase.from("basic").select("*");
    console.log(basic, error);
    setData(basic[0]);
  };
  useEffect(() => {
    getBasic();
  }, []);
  return (
    <div className="hero-container">
      <Image
        src={data.photo}
        className="profile-img"
        width={300}
        height={300}
        alt={`${data.first_name}'s personal headshot`}
      />
      <div className="hero-text">
        <h1>
          Hey, I'm {data.first_name} {data.last_name}👋
        </h1>
        <p>{data.description}</p>
        <div className="social-icons">
          <a
            href={data.github}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href={data.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
