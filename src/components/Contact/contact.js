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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//https://stackoverflow.com/questions/49378743/toast-is-not-rendered-react-toastify-component

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bg4reez",
        "template_2wbjmif",
        form.current,
        "_sixExnl-U21a_yo0"
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

    toast.success(
      "Thank you for your message. I will get back to you as soon as possible.",
      {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        draggablePercent: 60,
      }
    );
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
                    <StyledInfoTitle>Email:</StyledInfoTitle>
                    tarangathapa@gmail.com
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
                  <StyledSocialItem
                    href="https://www.facebook.com/taranga.thapa/"
                    target="_blank"
                  >
                    <FacebookIcon />
                  </StyledSocialItem>
                  <StyledSocialItem
                    href="https://www.instagram.com/tarangathapa/"
                    target="_blank"
                  >
                    <InstagramIcon />
                  </StyledSocialItem>
                  <StyledSocialItem
                    href="https://www.linkedin.com/in/taranga-thapa-251237209/"
                    target="_blank"
                  >
                    <LinkedinIcon />
                  </StyledSocialItem>
                  <StyledSocialItem
                    href="https://twitter.com/TarangaThapa"
                    target="_blank"
                  >
                    <TwitterIcon />
                  </StyledSocialItem>
                  <StyledSocialItem
                    href="https://github.com/taranga99"
                    target="_blank"
                  >
                    <GithubIcon />
                  </StyledSocialItem>
                </StyledLinkContainer>
              </StyledSocialContainer>
            </StyledContactInfo>
            <StyledContactForm ref={form} onSubmit={sendEmail}>
              <StyledContactContainer>
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
              <ToastContainer limit={2} draggablePercent={60} />
            </StyledContactForm>
          </StyledInfoContainer>
        </StyledContact>
      </Container>
    </StyledContainer>
  );
};

export default Contact;
