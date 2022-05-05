import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { IoSendSharp } from "react-icons/io5";

export const StyledContainer = styled.div`
  height: 600px;
  overflow: hidden;
`;

export const StyledAbout = styled.div`
  display: flex;
  height: 600px;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const StyledImgContainer = styled.div`
  height: 520px;
  width: 40.8%;
  background-image: url("../../images/6.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  background-repeat: no-repeat;
  margin-bottom: 50px;

  @media screen and (max-width: 750px) {
    position: absolute;
    width: 34%;
    left: -30px;
  }

  @media screen and (max-width: 670px) {
    position: absolute;
    left: -40px;
  }

  @media screen and (max-width: 600px) {
    position: absolute;
    left: -60px;
    width: 35%;
  }

  @media screen and (max-width: 550px) {
    position: absolute;
    left: -60px;
    width: 40%;
  }

  @media screen and (max-width: 490px) {
    position: absolute;
    left: -110px;
    width: 50%;
  }

  @media screen and (max-width: 440px) {
    position: absolute;
    left: -120px;
    width: 60%;
  }

  @media screen and (max-width: 400px) {
    background-color: ${({ theme }) => theme.colors.secondary};
    background-image: none;
    border: 10px solid grey;
    border-radius: 10px;
    left: -150px;
  }
`;

export const StyledInfoContainer = styled.div`
  width: 57.2%;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;

  @media screen and (max-width: 750px) {
    position: absolute;
    right: 0;
    width: 65%;
  }

  @media screen and (max-width: 670px) {
    width: 70%;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 40px;

  @media screen and (max-width: 910px) {
    font-size: 35px;
  }

  @media screen and (max-width: 490px) {
    font-size: 25px;
  }
`;

export const StyledDescription = styled.p`
  width: 100%;
  height: 70%;
  font-size: 20px;
  letter-spacing: 1.5px;
  line-height: 40px;

  @media screen and (max-width: 910px) {
    letter-spacing: 1.2px;
    line-height: 37px;
  }

  @media screen and (max-width: 830px) {
    letter-spacing: 1.2px;
    line-height: 35px;
    font-size: 18px;
  }

  @media screen and (max-width: 630px) {
    line-height: 31px;
  }

  @media screen and (max-width: 530px) {
    line-height: 30px;
    font-size: 17px;
    letter-spacing: 0.9px;
  }

  @media screen and (max-width: 490px) {
    line-height: 30px;
    font-size: 17px;
    letter-spacing: 0.9px;
  }

  @media screen and (max-width: 470px) {
    line-height: 25px;
    letter-spacing: 0.9px;
    font-size: 15px;
  }

  @media screen and (max-width: 380px) {
    line-height: 21px;
    letter-spacing: 0.5px;
    font-size: 15px;
  }

  @media screen and (max-width: 310px) {
    margin-top: -30px;
    line-height: 21px;
    letter-spacing: 0.5px;
    font-size: 12px;
  }
`;

export const StyledButton = styled(LinkS)`
  font-size: 15px;
  padding: 5px 15px;
  font-weight: bold;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 170px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 0.4s ease-in-out;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ContactIcon = styled(IoSendSharp)``;
