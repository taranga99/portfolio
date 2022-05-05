import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  margin-top: 30px;

  @media screen and (max-width: 710px) {
    height: 2450px;
  }
`;

export const StyledProject = styled.div`
  padding: 10px 0;
  width: 100%;
  height: 1250px;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  font-size: 40px;

  @media screen and (max-width: 910px) {
    font-size: 35px;
  }

  @media screen and (max-width: 490px) {
    font-size: 25px;
  }
`;

export const StyledProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 48%);
  grid-template-rows: repeat(2, 550px);
  justify-content: space-between;
  grid-row-gap: 30px;

  @media screen and (max-width: 710px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 550px);
  }
`;
