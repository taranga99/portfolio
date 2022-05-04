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
                border={({ theme }) => theme.colors.secondary}
                color={({ theme }) => theme.colors.secondary}
                backgroundColor={({ theme }) => theme.colors.primary}
              >
                Contact Me <ContactIcon />
              </StyledButton>
              <StyledButton>
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
