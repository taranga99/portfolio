import React from "react";
import About from "../components/About/about";
import Header from "../components/Header/header";
import Home from "../components/Home/home";
import Project from "../components/project/project";
import Skills from "../components/Skills/skills";

const PorfolioPage = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Project />
    </>
  );
};

export default PorfolioPage;
