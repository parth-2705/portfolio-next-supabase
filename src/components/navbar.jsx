import supabase from "@/utils/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [data, setData] = useState([]);
  const getBasic = async () => {
    let { data: basic, error } = await supabase
      .from("basic")
      .select("first_name", "resume");
    setData(basic[0]);
  };
  useEffect(() => {
    getBasic();
  }, []);
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">{data.first_name}'s Portfolio</Link>
      </div>
      <a href={data.resume} className="cta-btn">
        Resume
      </a>
    </div>
  );
};

export default Navbar;
