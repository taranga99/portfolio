import styled from "styled-components";
import { BsGithub } from "react-icons/bs";

export const StyledContainer = styled.div`
  width: 100%;
`;

export const StyledProject = styled.div`
  width: 100%;
  height: 550px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin-top: 30px;
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.secondary},
    -1px -1px 5px ${({ theme }) => theme.colors.secondary};
`;

export const StyledTitle = styled.h1`
  font-size: 20px;
  text-align: center;
`;

export const StyledImg = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  margin-top: 10px;
`;

export const StyledInfo = styled.p`
  margin-top: 10px;
  height: 150px;
  letter-spacing: 1.2px;

  @media screen and (max-width: 970px) {
    font-size: 15px;
  }

  @media screen and (max-width: 830px) {
    font-size: 13px;
  }

  @media screen and (max-width: 710px) {
    font-size: 15px;
  }

  @media screen and (max-width: 510px) {
    font-size: 13px;
  }

  @media screen and (max-width: 390px) {
    font-size: 11px;
  }

  @media screen and (max-width: 300px) {
    font-size: 9px;
  }
`;

export const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const StyledLink = styled.a`
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding: 5px 0;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 510px) {
    font-size: 13px;
  }

  @media screen and (max-width: 390px) {
    font-size: 11px;
  }

  @media screen and (max-width: 300px) {
    font-size: 9px;
  }
`;

export const StyledTag = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 15px;
  padding: 4px 10px;
  margin-left: 5px;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 13px;
  text-align: center;

  @media screen and (max-width: 970px) {
    font-size: 12px;
  }

  @media screen and (max-width: 830px) {
    font-size: 10px;
  }

  @media screen and (max-width: 710px) {
    font-size: 13px;
  }

  @media screen and (max-width: 510px) {
    font-size: 11px;
  }

  @media screen and (max-width: 390px) {
    font-size: 9px;
  }

  @media screen and (max-width: 300px) {
    font-size: 7px;
  }
`;

export const GithubIcon = styled(BsGithub)`
  margin-left: 10px;
`;
