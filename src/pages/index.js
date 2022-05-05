import React from "react";
import About from "../components/About/about";
import Contact from "../components/Contact/contact";
import Header from "../components/Header/header";
import Home from "../components/Home/home";
import Project from "../components/Project/project";
import Skills from "../components/Skills/skills";

const PorfolioPage = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default PorfolioPage;
