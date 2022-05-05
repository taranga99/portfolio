import React from "react";
import {
  StyledContainer,
  CloseIcon,
  StyledLinkContainer,
  StyledItem,
  StyledLinks,
  StyledCloseContainer,
  StyledDownload,
  DownloadIcon,
} from "./sidebarStyled";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <StyledContainer isOpen={isOpen}>
      <StyledCloseContainer>
        <CloseIcon onClick={() => setIsOpen(false)} />
      </StyledCloseContainer>
      <StyledLinkContainer>
        <StyledItem>
          <StyledLinks
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Home
          </StyledLinks>
        </StyledItem>
        <StyledItem>
          <StyledLinks
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            About
          </StyledLinks>
        </StyledItem>
        <StyledItem>
          <StyledLinks
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            My Skills
          </StyledLinks>
        </StyledItem>
        <StyledItem>
          <StyledLinks
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Projects
          </StyledLinks>
        </StyledItem>
        <StyledItem>
          <StyledLinks
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Contact
          </StyledLinks>
        </StyledItem>
        <StyledDownload href="www.github.com">
          <DownloadIcon />
          Download CV
        </StyledDownload>
      </StyledLinkContainer>
    </StyledContainer>
  );
};

export default Sidebar;
