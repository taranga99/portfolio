import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineFilePdf } from "react-icons/ai";

export const StyledContainer = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ topColor, theme }) =>
    topColor ? theme.colors.backgroundColor : "transparent"};
`;

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const StyledButton = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 5px 20px;
  font-size: 23px;
  font-weight: 900;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  /* width: 150px; */

  &:hover {
    transition: all 0.4s ease-in-out;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    border: ${({ theme }) => `2px solid ${theme.colors.secondary}`};
  }
`;

export const StyledWebContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 73%;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const StyledMobileContainer = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 1000px) {
    display: flex;
  }
`;

export const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
`;

export const StyledItem = styled.li`
  list-style: none;
  width: 30%;
  height: 80px;
`;

export const StyledLinks = styled(LinkS)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
    font-weight: bold;
  }
`;

export const StyledDownload = styled.a`
  border-radius: 10px;
  padding: 5px 10px;
  box-shadow: 0px 0px 7px grey;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(0.95);
  }
`;

export const MobileIcon = styled(GiHamburgerMenu)``;

export const DownloadIcon = styled(AiOutlineFilePdf)`
  margin-right: 5px;
  font-size: 20px;
`;
