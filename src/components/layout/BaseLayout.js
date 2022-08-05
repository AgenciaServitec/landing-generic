import React, { useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons/lib";
import { Link as LinkR } from "react-router-dom";
import { Link as LinKS } from "react-scroll";
import { default as Cobiene } from "../images/cobiene.webp";
export const BaseLayout = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <Img src={Cobiene} />
              Jefatura de Administración de Casas del Ejercito
            </NavLogo>
            <NavMenu>
              <NavItem>
                <NavLinks>Inicio</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>Nosotros</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>Requisitos</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>Tramites</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

const Nav = styled.div`
  background: #fff;
  //margin-top: -80px;
  //padding-top: 10px;
  //margin: -10px;
  display: flex;
  width: 101%;
  position: fixed;
  padding: 0.5rem;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1300px;
`;
const NavLogo = styled(LinkR)`
  color: #0d0d0d;
  justify-self: flex-start;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  //padding-top: 10px;
`;

const Img = styled.img`
  width: 10%;
  padding-right: 0.6rem;
  padding-top: 0px;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
`;
const NavItem = styled.li`
  height: 80px;
`;
const NavLinks = styled(LinKS)`
  color: #0d0d0d;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  font-size: 22px;
`;
