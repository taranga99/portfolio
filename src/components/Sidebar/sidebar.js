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
          <StyledLinks to="home">Home</StyledLinks>
        </StyledItem>
        <StyledItem>
          <StyledLinks to="about">About</StyledLinks>
        </StyledItem>
        <StyledItem>
          <StyledLinks to="skills">My Skills</StyledLinks>
        </StyledItem>
        <StyledItem>
          <StyledLinks to="projects">Projects</StyledLinks>
        </StyledItem>
        <StyledItem>
          <StyledLinks to="contact">Contact</StyledLinks>
        </StyledItem>
        <StyledDownload>
          <DownloadIcon />
          Download CV
        </StyledDownload>
      </StyledLinkContainer>
    </StyledContainer>
  );
};

export default Sidebar;
