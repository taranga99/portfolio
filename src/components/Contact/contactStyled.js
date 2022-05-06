import styled from "styled-components";
import { IoSendSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export const StyledContainer = styled.div`
  height: 600px;

  @media screen and (max-width: 800px) {
    height: 1000px;
    padding: 20px 0;
    margin-top: -70px;
  }
`;

export const StyledContact = styled.div`
  width: 100%;
  padding: 20px 20px;

  @media screen and (max-width: 800px) {
    padding: 20px 0;
  }
`;

export const StyledContactForm = styled.form`
  width: 50%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const StyledInput = styled.input`
  margin-top: 5px;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  padding: 5px 10px;
`;

export const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  @media screen and (max-width: 800px) {
    margin-top: 20px;
  }
`;

export const StyledButton = styled.button``;

export const StyledHeader = styled.h1`
  font-size: 40px;
  text-align: center;

  @media screen and (max-width: 910px) {
    font-size: 35px;
  }

  @media screen and (ax-width: 490px) {
    font-size: 25px;
  }
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  justify-content: space-between;
  margin-top: 20px;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const StyledContactInfo = styled.div`
  width: 50%;
  padding: 20px;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: 40px;
  }
`;

export const StyledTextArea = styled.textarea`
  padding: 5px 10px;
  height: 150px;
  width: 100%;
  margin-top: 5px;
`;

export const StyledButtonInput = styled.button`
  margin-top: 10px;
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

  @media screen and (max-width: 800px) {
    font-size: 13px;
    margin-top: 20px;
  }
`;

export const SendIcon = styled(IoSendSharp)``;

export const StyledContactHeader = styled.h1`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;

  @media screen and (max-width: 910px) {
    font-size: 23px;
  }

  @media screen and (max-width: 490px) {
    font-size: 20px;
  }
`;

export const StyledContactInfoContainer = styled.div`
  margin-top: 40px;
`;

export const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

export const StyledItem = styled.p`
  margin-left: 10px;
  font-size: 17px;
  letter-spacing: 1.2px;

  @media screen and (max-width: 870px) {
    font-size: 15px;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }

  @media screen and (max-width: 380px) {
    font-size: 12px;
  }
`;

export const StyledInfoTitle = styled.span`
  font-weight: bold;

  @media screen and (max-width: 870px) {
    font-size: 15px;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }

  @media screen and (max-width: 380px) {
    font-size: 12px;
  }
`;

export const EmailIcon = styled(MdEmail)`
  font-size: 30px;
`;

export const PhoneIcon = styled(BsFillTelephoneInboundFill)`
  font-size: 25px;
`;

export const StyledSocialContainer = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSocialItem = styled.a`
  width: 40px;
  height: 40px;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  border-radius: 50px;
  box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.secondary},
    -1px -1px 1px ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 360px) {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  @media screen and (max-width: 310px) {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export const FacebookIcon = styled(FaFacebookSquare)`
  font-size: 25px;

  @media screen and (max-width: 360px) {
    font-size: 21px;
  }
`;

export const InstagramIcon = styled(BsInstagram)`
  font-size: 25px;

  @media screen and (max-width: 360px) {
    font-size: 21px;
  }
`;

export const LinkedinIcon = styled(BsLinkedin)`
  font-size: 25px;

  @media screen and (max-width: 360px) {
    font-size: 21px;
  }
`;

export const TwitterIcon = styled(BsTwitter)`
  font-size: 25px;

  @media screen and (max-width: 360px) {
    font-size: 21px;
  }
`;

export const GithubIcon = styled(BsGithub)`
  font-size: 25px;

  @media screen and (max-width: 360px) {
    font-size: 21px;
  }
`;

export const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
  width: 90%;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
