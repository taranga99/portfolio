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
import Resume from "../../Resume/Taranga-Thapa-Resume.pdf";

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
            onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
          >
            Contact
          </StyledLinks>
        </StyledItem>
        <StyledDownload download href={Resume}>
          <DownloadIcon />
          Download CV
        </StyledDownload>
      </StyledLinkContainer>
    </StyledContainer>
  );
};

export default Sidebar;
