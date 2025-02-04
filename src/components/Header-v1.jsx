import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaInstagram, FaSpotify, FaBars } from "react-icons/fa";
import { SiTiktok, SiApplemusic } from "react-icons/si";
import { useState } from "react";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  position: relative; /* Ensures absolute positioning inside */
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  width: 36rem;
  justify-content: space-between;
  align-items: center;

  li svg {
    fill: var(--col-brand-1);
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
  }

  /* Sidebar menu styles for mobile */
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; /* Slide effect */
    height: 100vh;
    width: 230px;
    background-color: white; /* Dark background */
    box-shadow: -5px 0 10px rgba(0, 0, 0, 0.2);
    padding-top: 10rem;
    transition: right 0.3s ease-in-out;
    align-items: center;
    display: flex;
    justify-content: right;
    gap: 2rem;
    align-items: flex-end;
    padding-right: 5rem;

    & li a {
      padding: 0;
    }
  }
`;

const Logo = styled.h2`
  font-family: var(--font-title);
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  color: var(--col-brand-1);
  text-decoration: none;

  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
    color: var(--col-brand-1);
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--col-brand-1);
  font-size: 1.8rem;
  text-transform: uppercase;
  padding: 10px;
  display: block;

  &:visited,
  &:hover {
    text-decoration: none;
  }

  &.active:link,
  &.active:visited {
    text-decoration: underline;
  }
`;

const HamburgerBox = styled.button`
  display: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 1001; /* Ensure it is above the menu */

  & svg {
    width: 2.5rem;
    height: 2.5rem;
    color: var(--col-brand-1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

function HeaderV1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHeader>
      <StyledLink to="/">
        <Logo>freeman</Logo>
      </StyledLink>

      {/* Hamburger Icon */}
      <HamburgerBox onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </HamburgerBox>

      {/* Navigation Menu */}
      <Ul isOpen={isOpen}>
        <li>
          <StyledNavLink to="home" onClick={() => setIsOpen(false)}>
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="contact" onClick={() => setIsOpen(false)}>
            Contact
          </StyledNavLink>
        </li>
        <li>
          <Link to="https://www.instagram.com/4ever.freeman/" target="_blank">
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link
            to="https://www.tiktok.com/@4ever.freeman?lang=en"
            target="_blank"
          >
            <SiTiktok />
          </Link>
        </li>
        <li>
          <Link
            to="https://open.spotify.com/artist/3B0ebSCq9GpO2RmStboNRM"
            target="_blank"
          >
            <FaSpotify />
          </Link>
        </li>
        <li>
          <Link
            to="https://music.apple.com/us/artist/fr33man/1694237958"
            target="_blank"
          >
            <SiApplemusic />
          </Link>
        </li>
      </Ul>
    </StyledHeader>
  );
}

export default HeaderV1;
