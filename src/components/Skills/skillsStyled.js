import styled from "styled-components";

export const StyledContainer = styled.div`
  @media screen and (max-width: 900px) {
    height: 980px;
  }

  @media screen and (max-width: 650px) {
    height: 1400px;
  }

  @media screen and (max-width: 400px) {
    height: 1580px;
  }
`;

export const StyledSkills = styled.div``;

export const StyledTitle = styled.h1`
  text-align: center;
  font-size: 40px;

  @media screen and (max-width: 910px) {
    font-size: 35px;
  }
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

  @media screen and (max-width: 1000px) {
    height: 600px;
  }

  @media screen and (max-width: 900px) {
    height: 400px;
    width: 100%;
  }

  @media screen and (max-width: 650px) {
    height: 600px;
    width: 100%;
  }

  @media screen and (max-width: 400px) {
    height: 700px;
    width: 100%;
  }
`;

export const StyledHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;

  @media screen and (max-width: 700px) {
    font-size: 17px;
  }
`;

export const StyledInfo = styled.p`
  letter-spacing: 1.5px;
  line-height: 30px;

  @media screen and (max-width: 700px) {
    font-size: 15px;
  }
`;

export const StyledSkillsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 30px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 850px;
  }

  @media screen and (max-width: 650px) {
    height: 1270px;
    width: 100%;
  }

  @media screen and (max-width: 400px) {
    height: 1470px;
  }
`;

export const StyledItemContainer = styled.div``;

export const StyledItem = styled.li`
  margin-top: 10px;
`;
