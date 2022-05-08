import styled from "styled-components";
import { RiMailSendFill } from "react-icons/ri";
import { VscProject } from "react-icons/vsc";
import { Link as LinkS } from "react-scroll";

export const StyledContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const StyledHome = styled.div`
  height: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInfoContainer = styled.div`
  width: 50%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 700px) {
    width: 55%;
  }

  @media screen and (max-width: 660px) {
    width: 52%;
  }

  @media screen and (max-width: 470px) {
    width: 55%;
  }
`;

export const StyledImgContainer = styled.div`
  height: 500px;
  width: 48.3%;
  background-image: url("images/1.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  background-repeat: no-repeat;
  margin-bottom: 20px;
  border: 10px solid grey;

  @media screen and (max-width: 750px) {
    position: absolute;
    width: 41%;
    right: -10px;
  }
`;

export const StyledInfo = styled.div`
  font-size: 30px;

  @media screen and (max-width: 860px) {
    font-size: 25px;
  }

  @media screen and (max-width: 800px) {
    font-size: 23px;
  }

  @media screen and (max-width: 550px) {
    font-size: 20px;
  }

  @media screen and (max-width: 470px) {
    font-size: 18px;
  }
`;

export const StyledSpan = styled.span`
  font-size: 40px;
  font-weight: bold;

  @media screen and (max-width: 860px) {
    font-size: 35px;
  }

  @media screen and (max-width: 800px) {
    font-size: 32px;
  }

  @media screen and (max-width: 550px) {
    font-size: 27px;
  }

  @media screen and (max-width: 470px) {
    font-size: 23px;
  }
`;

export const StyledButtonContainer = styled.div`
  width: 370px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 860px) {
    width: 90%;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: 30%;
    margin-top: 40px;
  }

  @media screen and (max-width: 470px) {
    width: 80%;
  }
`;

export const StyledButton = styled(LinkS)`
  font-size: 15px;
  width: 170px;
  height: 40px;
  padding: 5px 15px;
  font-weight: bold;
  border-radius: 5px;

  border: ${({ border, theme }) =>
    border
      ? `2px solid ${theme.colors.secondary}`
      : `2px solid ${theme.colors.secondary}`};
  color: ${({ color, theme }) =>
    color ? `${theme.colors.secondary}` : `${theme.colors.primary}`};
  background-color: ${({ backgroundcolor, theme }) =>
    backgroundcolor ? `${theme.colors.primary}` : `${theme.colors.secondary}`};
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.07);
  }

  @media screen and (max-width: 860px) {
    width: 150px;
    padding: 5px 10px;
  }

  @media screen and (max-width: 470px) {
    width: 130px;
  }

  @media screen and (max-width: 290px) {
    width: 125px;
    font-size: 14px;
  }
`;

export const ContactIcon = styled(RiMailSendFill)`
  font-size: 20px;
`;

export const WorksIcon = styled(VscProject)`
  font-size: 20px;
`;
