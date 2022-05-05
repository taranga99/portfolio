import React from "react";
import {
  GithubIcon,
  StyledContainer,
  StyledImg,
  StyledInfo,
  StyledLink,
  StyledProject,
  StyledTag,
  StyledTags,
  StyledTitle,
} from "./projectCardStyled";

const ProjectCard = ({ item }) => {
  return (
    <StyledContainer>
      <StyledProject>
        <StyledTitle>{item.title}</StyledTitle>
        <StyledImg src={item.img} alt="img" />
        <StyledInfo>{item.description}</StyledInfo>
        <StyledTags>
          {item.tags.map((tag) => (
            <StyledTag key={tag}>{tag}</StyledTag>
          ))}
        </StyledTags>
        <StyledLink href={item.githubLink}>
          View code on github <GithubIcon />
        </StyledLink>
      </StyledProject>
    </StyledContainer>
  );
};

export default ProjectCard;
