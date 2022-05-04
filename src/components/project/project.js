import React from "react";
import {
  StyledContainer,
  StyledProject,
  StyledProjectContainer,
  StyledTitle,
} from "./projectStyled";
import { Container } from "../Styles";
import { data } from "../Data";
import ProjectCard from "../ProjectCard/projectCard";

const Project = () => {
  return (
    <StyledContainer id="projects">
      <Container>
        <StyledProject>
          <StyledTitle>My Projects</StyledTitle>
          <StyledProjectContainer>
            {data.map((item) => (
              <ProjectCard item={item} key={item.id} />
            ))}
          </StyledProjectContainer>
        </StyledProject>
      </Container>
    </StyledContainer>
  );
};

export default Project;
