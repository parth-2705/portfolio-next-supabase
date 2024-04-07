import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { useEffect } from "react";
import Head from "next/head";
import supabase from "@/utils/supabase";

const Home = () => {
  return (
    <>
      <Head>
        <title>Parth's Portfolio</title>
        <meta name="description" content="Parth's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </>
  );
};

export default Home;
