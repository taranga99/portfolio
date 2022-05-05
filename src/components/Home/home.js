import React from "react";
import { Container } from "../Styles";
import {
  ContactIcon,
  StyledButton,
  StyledButtonContainer,
  StyledContainer,
  StyledHome,
  StyledImgContainer,
  StyledInfo,
  StyledInfoContainer,
  StyledSpan,
  WorksIcon,
} from "./homeStyled";

const home = () => {
  return (
    <StyledContainer id="home">
      <Container>
        <StyledHome>
          <StyledInfoContainer>
            <StyledInfo>
              Hi, <br />
              I'm <StyledSpan>Taranga Thapa</StyledSpan> <br />
              and I'm a <StyledSpan>web developer</StyledSpan>
            </StyledInfo>
            <StyledButtonContainer>
              <StyledButton
                border="border"
                color="color"
                backgroundcolor="background"
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Contact Me <ContactIcon />
              </StyledButton>
              <StyledButton
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                My Works <WorksIcon />
              </StyledButton>
            </StyledButtonContainer>
          </StyledInfoContainer>
          <StyledImgContainer></StyledImgContainer>
        </StyledHome>
      </Container>
    </StyledContainer>
  );
};

export default home;
