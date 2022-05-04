import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 600px;
`;

export const StyledSkills = styled.div``;

export const StyledTitle = styled.h1`
  text-align: center;
  font-size: 40px;
`;

export const StyledInfoContainer = styled.div`
  height: 500px;
  width: 45%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 20px;
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.secondary},
    -1px -1px 5px ${({ theme }) => theme.colors.secondary};
`;

export const StyledHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
`;

export const StyledInfo = styled.p`
  letter-spacing: 1.5px;
  line-height: 30px;
`;

export const StyledSkillsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 30px;
`;

export const StyledItemContainer = styled.div``;

export const StyledItem = styled.li`
  margin-top: 10px;
`;
