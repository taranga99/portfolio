import React from "react";
import {
  StyledContainer,
  StyledHeader,
  StyledInfo,
  StyledInfoContainer,
  StyledItem,
  StyledItemContainer,
  StyledSkills,
  StyledSkillsContainer,
  StyledTitle,
} from "./skillsStyled";
import { Container } from "../Styles";

const Skills = () => {
  return (
    <StyledContainer id="skills">
      <Container>
        <StyledSkills>
          <StyledTitle>My Skills</StyledTitle>
          <StyledSkillsContainer>
            <StyledInfoContainer>
              <StyledHeader>Frontend</StyledHeader>
              <StyledInfo>
                As, I love working on the frontend, I am always looking for ways
                to make websites simple but eye catching and give the user a
                pleasent experience. I have developed several websites and have
                learned new things from each and every one of them which has
                helped me to sharpen my frontend skills even more. Here are my
                forntend skills that I have learned though out my learning
                phase:
              </StyledInfo>
              <StyledItemContainer>
                <StyledItem>HTML</StyledItem>
                <StyledItem>CSS</StyledItem>
                <StyledItem>Javascript</StyledItem>
                <StyledItem>Reactjs</StyledItem>
              </StyledItemContainer>
            </StyledInfoContainer>
            <StyledInfoContainer>
              <StyledHeader>Backend</StyledHeader>
              <StyledInfo>
                Although, I am currently more focused on frontend part of the
                web development I have took my time to learn some of the backend
                skills too. I have done some small full stack projects using the
                backend skills that I have learned. Here are my backend skills
                that I have learned through out my learning phase:
              </StyledInfo>
              <StyledItemContainer>
                <StyledItem>Nodejs</StyledItem>
                <StyledItem>Express</StyledItem>
                <StyledItem>MongoDB</StyledItem>
              </StyledItemContainer>
            </StyledInfoContainer>
          </StyledSkillsContainer>
        </StyledSkills>
      </Container>
    </StyledContainer>
  );
};

export default Skills;
