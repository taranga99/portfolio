import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineDownload } from "react-icons/ai";

export const StyledContainer = styled.div`
  width: 100%;
  height: 80px;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ topColor, theme }) =>
    topColor ? "#086788" : "transparent"};
`;

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const StyledButton = styled.button`
  border: 2px solid black;
  background-color: transparent;
  border-radius: 10px;
  padding: 5px 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  width: 150px;

  &:hover {
    transition: all 0.4s ease-in-out;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledWebContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 73%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledMobileContainer = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
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
  width: 20%;
`;

export const StyledLinks = styled(LinkS)`
  cursor: pointer;
  width: 30px;

  &.active {
    border-bottom: 3px solid black;
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

  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(0.95);
  }
`;

export const MobileIcon = styled(GiHamburgerMenu)``;

export const DownloadIcon = styled(AiOutlineDownload)`
  margin-right: 5px;
`;