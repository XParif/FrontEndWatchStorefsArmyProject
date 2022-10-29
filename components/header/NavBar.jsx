import Link from "next/link";
import React, { useState } from "react";
import {
  FaBullhorn,
  FaCartPlus,
  FaItchIo,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import styled from "styled-components";
import NavList from "./NavList";
const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MyNavLink = styled.div`
  color: ${({ theme }) => theme?.color?.white};
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    color: ${({ bg = "primary", theme }) =>
      theme.color[bg] ?? theme?.color?.secondary};
    background-color: ${({ theme }) => theme?.color?.white};
  }
  /* &:active {
    color: ${({ bg = "primary", theme }) =>
      theme.color[bg] ?? theme?.color?.secondary};
    background-color: ${({ theme }) => theme?.color?.white}; */
  }
`;

const NavBar = ({ openModal }) => {
  const [login, setLogin] = useState(true);
  return (
    <NavContainer>
      <Link href="/collections">
        <MyNavLink>
          <NavList title="Collections" logo={<FaItchIo />} />
        </MyNavLink>
      </Link>
      <Link href="/cart">
        <MyNavLink>
          <NavList title="Cart" logo={<FaCartPlus />} />
        </MyNavLink>
      </Link>
      <Link href="/announcement">
        <MyNavLink>
          <NavList title="Announcement" logo={<FaBullhorn />} />
        </MyNavLink>
      </Link>
      {login ? (
        <NavContainer>
          <Link href="/profile">
            <MyNavLink>
              <NavList title="Profile" logo={<FaUserCircle />} />
            </MyNavLink>
          </Link>
          <MyNavLink href="">
            <NavList title="LogOut" logo={<FaSignOutAlt />} />
          </MyNavLink>
        </NavContainer>
      ) : (
        <MyNavLink onClick={() => openModal(true)}>
          <NavList title="LogIn" logo={<FaSignInAlt />} />
        </MyNavLink>
      )}
    </NavContainer>
  );
};

export default NavBar;
