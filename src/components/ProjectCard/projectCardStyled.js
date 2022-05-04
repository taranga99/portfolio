import styled from "styled-components";
import { BsGithub } from "react-icons/bs";

export const StyledContainer = styled.div``;

export const StyledProject = styled.div`
  width: 500px;
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
`;

export const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledLink = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding: 5px 0;
`;

export const StyledTag = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  padding: 4px 10px;
  margin-left: 5px;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 13px;
  text-align: center;
`;

export const GithubIcon = styled(BsGithub)`
  margin-left: 10px;
`;
