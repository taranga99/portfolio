import React from "react";
import {
  ContactIcon,
  StyledAbout,
  StyledButton,
  StyledContainer,
  StyledDescription,
  StyledImgContainer,
  StyledInfoContainer,
  StyledTitle,
} from "./aboutStyled";
import { Container } from "../Styles";

const About = () => {
  return (
    <StyledContainer id="about">
      <Container>
        <StyledAbout>
          <StyledImgContainer></StyledImgContainer>
          <StyledInfoContainer>
            <StyledTitle>About Me</StyledTitle>
            <StyledDescription>
              I'm a front end web developer from Nepal with a interest in
              learning new technologies. Currenlty, I develop websites using
              react. I have also developed apps using react native and full
              stack projects using nodejs, express as backend and mongodb as the
              database. Besides, web development I like gaming, playing football
              and trekking. Hit me up if you have some projects.
            </StyledDescription>
            <StyledButton
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              Let's Talk <ContactIcon />
            </StyledButton>
          </StyledInfoContainer>
        </StyledAbout>
      </Container>
    </StyledContainer>
  );
};

export default About;
