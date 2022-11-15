import Link from "next/link";
import React, { useState ,useEffect } from "react";
import { isLogin, message, LookupJwt , pocketKhali} from "../../apolloClient";
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
import { useRouter } from "next/router";
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
  padding: 5px 0px;
  margin-right: 10px !important;
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
  const router = useRouter()  
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
      <Link href="/cart" onClick={() => pocketKhali(false)}>
        <MyNavLink>
          <span style={{position : "absolute", top: 0, right : -3 , color : "red", backgroundColor:"#fff", color: "#60C3D8" , fontSize:"12px", padding: "0px 2px", borderRadius: "5px", border:"1px solid #60C3D8" }}>
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
          <Link href="/dashboard">
            <MyNavLink>
              <NavList title="Dashboard" logo={<FaUserCircle />} />
            </MyNavLink>
          </Link>
          <MyNavLink href="">
            <div onClick={()=> {
               localStorage.removeItem('jwt_token');
               localStorage.removeItem('logedInUserId');

               isLogin(false)
               message({type: 'success', body: 'Successfully Logged Out'})

               router.push("/")


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
