import Link from "next/link";
import React, { useState ,useEffect } from "react";
import { isLogin, LookupJwt } from "../../apolloClient";
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
import { useReactiveVar } from "@apollo/client";
const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MyNavLink = styled.div`
  color: ${({ theme }) => theme?.color?.white};
  position : relative;
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
    background-color: ${({ theme }) => theme?.color?.white}; 
  }*/
`;

const NavBar = ({ modalController , CartItemCount }) => {
  const login = useReactiveVar(isLogin)
  useEffect(()=>{
     isLogin((LookupJwt() == undefined ? false : true  ))
  },[login])
  return (
    <NavContainer>
      <Link href="/collections">
        <MyNavLink>
          <NavList title="Collections" logo={<FaItchIo />} />
        </MyNavLink>
      </Link>
      <Link href="/cart">
        <MyNavLink>
          <span style={{position : "absolute", top: 0, right : 0 , color : "red" }}>
              {CartItemCount}
          </span>
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
            <div onClick={()=> {
               localStorage.removeItem('jwt_token');
               localStorage.removeItem('logedInUserId');
               isLogin(false)
            }}>
            <NavList title="LogOut" logo={<FaSignOutAlt />} />
            </div>
          </MyNavLink>
        </NavContainer>
      ) : (
        <MyNavLink onClick={() => modalController(true)}>
          <NavList title="LogIn" logo={<FaSignInAlt />} />
        </MyNavLink>
      )}
    </NavContainer>
  );
};

export default NavBar;
