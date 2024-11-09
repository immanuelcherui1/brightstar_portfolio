import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const StyledTiktokIcon = styled.svg`
  margin: 0 0.5rem;
  font-size: 1.5rem;
  color: ${({ color, theme }) => color || theme.text_primary}; /* Default color from theme or passed prop */
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const TiktokIcon = ({ color = "#FFFFFF" }) => {
  return (
    <StyledTiktokIcon
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="25%"  /* You can adjust width/height if needed */
      height="25%"
      fontSize="2rm" 
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </StyledTiktokIcon>
  );
};


const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Brightstar Kasyoka</Logo>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Engagements">Engagements</NavLink>
          <NavLink href="#Honours">Honours</NavLink>
          <NavLink href="#Contacts">Contacts</NavLink>
        </Nav>
        <SocialMediaIcons href={Bio.tiktok} target="_blank">
          <TiktokIcon/>
          <SocialMediaIcon href={Bio.facebook} target="display">
            <FacebookIcon  />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display">
            <XIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display">
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; {year} Brightstar Kasyoka. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
