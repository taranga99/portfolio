import React from "react";
import {
  MobileIcon,
  StyledButton,
  StyledContainer,
  StyledDownload,
  StyledItem,
  StyledLinkContainer,
  StyledLinks,
  StyledMobileContainer,
  StyledNav,
  StyledWebContainer,
  DownloadIcon,
} from "./navStyled";
import { Container } from "../Styles";
import { animateScroll as scroll } from "react-scroll/modules";

const Nav = ({ setIsOpen, topColor }) => {
  const toggle = () => {
    scroll.scrollToTop();
  };

  return (
    <StyledContainer topColor={topColor}>
      <Container>
        <StyledNav>
          <StyledButton onClick={toggle}>TTM99</StyledButton>
          <StyledWebContainer>
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
            </StyledLinkContainer>
            <StyledDownload href="www.github.com">
              <DownloadIcon />
              Download CV
            </StyledDownload>
          </StyledWebContainer>
          <StyledMobileContainer>
            <MobileIcon onClick={() => setIsOpen(true)} />
          </StyledMobileContainer>
        </StyledNav>
      </Container>
    </StyledContainer>
  );
};

export default Nav;
