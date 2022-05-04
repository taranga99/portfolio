import styled from "styled-components";
import { RiMailSendFill } from "react-icons/ri";
import { VscProject } from "react-icons/vsc";
import { Link as LinkS } from "react-scroll";

export const StyledContainer = styled.div``;

export const StyledHome = styled.div`
  height: 600px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledInfoContainer = styled.div`
  width: 50%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const StyledImgContainer = styled.div`
  height: 500px;
  width: 500px;
  background-image: url("../../images/1.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  background-repeat: no-repeat;
  margin-bottom: 20px;
`;

export const StyledInfo = styled.div`
  font-size: 30px;
`;

export const StyledButtonContainer = styled.div`
  width: 370px;
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled(LinkS)`
  font-size: 15px;
  padding: 5px 15px;
  font-weight: bold;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
  width: 170px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 0.4s ease-in-out;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: scale(1.1);
  }
`;

export const StyledSpan = styled.span`
  font-size: 40px;
  font-weight: bold;
`;

export const ContactIcon = styled(RiMailSendFill)`
  font-size: 20px;
`;

export const WorksIcon = styled(VscProject)`
  font-size: 20px;
`;
