import React, { useRef } from "react";
import {
  EmailIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneIcon,
  SendIcon,
  StyledButtonInput,
  StyledContact,
  StyledContactContainer,
  StyledContactForm,
  StyledContactHeader,
  StyledContactInfo,
  StyledContactInfoContainer,
  StyledContainer,
  StyledHeader,
  StyledInfo,
  StyledInfoContainer,
  StyledInfoTitle,
  StyledInput,
  StyledItem,
  StyledLinkContainer,
  StyledSocialContainer,
  StyledSocialItem,
  StyledTextArea,
  TwitterIcon,
} from "./contactStyled";
import { Container } from "../Styles";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hps3kig",
        "template_5z57jcr",
        form.current,
        "Y3D7UVV5STRPOdyrh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <StyledContainer id="contact">
      <Container>
        <StyledContact>
          <StyledHeader>Get In Touch</StyledHeader>
          <StyledInfoContainer>
            <StyledContactInfo>
              <StyledContactHeader>Contact Info:</StyledContactHeader>
              <StyledContactInfoContainer>
                <StyledInfo>
                  <EmailIcon />
                  <StyledItem>
                    <StyledInfoTitle>Email:</StyledInfoTitle> email@email.com
                  </StyledItem>
                </StyledInfo>
                <StyledInfo>
                  <PhoneIcon />
                  <StyledItem>
                    <StyledInfoTitle>Phone Number:</StyledInfoTitle> +977
                    9806790317
                  </StyledItem>
                </StyledInfo>
              </StyledContactInfoContainer>
              <StyledSocialContainer>
                <StyledContactHeader>Social Links:</StyledContactHeader>
                <StyledLinkContainer>
                  <StyledSocialItem>
                    <FacebookIcon />
                  </StyledSocialItem>
                  <StyledSocialItem>
                    <InstagramIcon />
                  </StyledSocialItem>
                  <StyledSocialItem>
                    <LinkedinIcon />
                  </StyledSocialItem>
                  <StyledSocialItem>
                    <TwitterIcon />
                  </StyledSocialItem>
                  <StyledSocialItem>
                    <GithubIcon />
                  </StyledSocialItem>
                </StyledLinkContainer>
              </StyledSocialContainer>
            </StyledContactInfo>
            <StyledContactForm ref={form} onSubmit={sendEmail}>
              <StyledContactContainer>
                {/* <StyledLabel>Name</StyledLabel> */}
                <StyledInput
                  name="name"
                  placeholder="Your Name"
                  type="text"
                  required
                  height="40px"
                  width="100%"
                  maxLength={30}
                />
              </StyledContactContainer>
              <StyledContactContainer>
                {/* <StyledLabel>Subject</StyledLabel> */}
                <StyledInput
                  name="subject"
                  placeholder="Your Subject"
                  type="text"
                  height="40px"
                  width="100%"
                  maxLength={50}
                  required
                />
              </StyledContactContainer>
              <StyledContactContainer>
                {/* <StyledLabel>Email</StyledLabel> */}
                <StyledInput
                  name="email"
                  placeholder="Your Email"
                  type="email"
                  height="40px"
                  width="100%"
                  maxLength={50}
                  required
                />
              </StyledContactContainer>
              <StyledContactContainer>
                {/* <StyledLabel>Message</StyledLabel> */}
                <StyledTextArea
                  name="message"
                  maxLength={300}
                  placeholder="Your Message"
                  type="text"
                  required
                ></StyledTextArea>
              </StyledContactContainer>
              <StyledButtonInput
                type="submit"
                placeholder="Your Message"
                required
              >
                Send Message <SendIcon />
              </StyledButtonInput>
            </StyledContactForm>
          </StyledInfoContainer>
        </StyledContact>
      </Container>
    </StyledContainer>
  );
};

export default Contact;
