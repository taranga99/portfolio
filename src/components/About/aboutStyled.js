import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { IoSendSharp } from "react-icons/io5";

export const StyledContainer = styled.div`
  height: 600px;
  width: 100vw;
`;

export const StyledAbout = styled.div`
  display: flex;
  height: 600px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const StyledImgContainer = styled.div`
  height: 500px;
  width: 400px;
  background-image: url("../../images/6.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  background-repeat: no-repeat;
  margin-bottom: 50px;
`;

export const StyledInfoContainer = styled.div`
  width: 57.2%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;
  border: 2px solid black;
`;

export const StyledTitle = styled.h1`
  font-size: 40px;
`;

export const StyledDescription = styled.p`
  width: 100%;
  font-size: 20px;
  letter-spacing: 1.5px;
  line-height: 40px;
  border: 2px solid grey;
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
