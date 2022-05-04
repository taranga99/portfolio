import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { Link as LinkS } from "react-scroll";
import { AiOutlineDownload } from "react-icons/ai";

export const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  flex-direction: column;
  z-index: 999;
  transition: 0.5s ease-in-out;
`;

export const StyledCloseContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: center;
  width: 90vw;
`;

export const CloseIcon = styled(AiOutlineClose)`
  cursor: pointer;
`;

export const StyledLinkContainer = styled.div`
  background-color: white;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledItem = styled.li`
  list-style: none;
`;

export const StyledLinks = styled(LinkS)`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
`;

export const StyledDownload = styled.div`
  width: 150px;
  border-radius: 10px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 7px grey;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(0.95);
    transition: 0.2s ease-in-out;
  }
`;

export const DownloadIcon = styled(AiOutlineDownload)`
  margin-right: 5px;
`;
