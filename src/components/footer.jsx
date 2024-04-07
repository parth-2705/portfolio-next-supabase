import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";

const Footer = () => {
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
    <>
      <hr />
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} {data.first_name}'s Portfolio
        </p>
        <p>
          This is an open source project. Check out my github for source code
          and documentation
        </p>
        <div className="social_icons">
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
    </>
  );
};

export default Footer;
