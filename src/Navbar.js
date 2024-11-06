import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1741b3;
  color: white;
`;

const NavLista = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 1000;
  font-size: 20px;

  &:hover {
    color: #f0db4f;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>     
      <NavLista>
        <li><NavLink href="#home">Home</NavLink></li>
        <li><NavLink href="#about">Sobre</NavLink></li>
        <li><NavLink href="#contact">Contato</NavLink></li>
      </NavLista>
    </NavbarContainer>
  );
}

export default Navbar;
