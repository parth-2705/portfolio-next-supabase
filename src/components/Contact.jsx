import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";

const Contact = () => {
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
    <div className="contact-container">
      <h2>Get In Touch</h2>
      <p>
        If you want us to work together or have any question my inbox is always
        open. Even if you just want to say hi, I'll try my best to get back to
        you! Cheers!
      </p>
      <div className="contact-box">
        <div>
          <h3>📧</h3>
          <a href={`mailto:${data.email}`} className="contact-button">
            {data.email}
          </a>
        </div>
        <div>
          <h3>☎️</h3>
          <a href={`tel:${data.phone}`} className="contact-button">
            {data.phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
