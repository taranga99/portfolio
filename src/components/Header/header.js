import React, { useState, useEffect } from "react";
import Nav from "../Nav/nav";
import Sidebar from "../Sidebar/sidebar";
import { StyledHeader } from "./headerStyled";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topColor, setTopColor] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setTopColor(true);
    } else {
      setTopColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <StyledHeader topColor={topColor}>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} topColor={topColor} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </StyledHeader>
  );
};

export default Header;
