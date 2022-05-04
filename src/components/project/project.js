import React from "react";
import {
  StyledContainer,
  StyledProject,
  StyledProjectContainer,
  StyledTitle,
} from "./projectStyled";
import { Container } from "../styles";

const Project = () => {
  return (
    <StyledContainer>
      <Container>
        <StyledProject>
          <StyledTitle>My Projects</StyledTitle>
          <StyledProjectContainer></StyledProjectContainer>
        </StyledProject>
      </Container>
    </StyledContainer>
  );
};

export default Project;
