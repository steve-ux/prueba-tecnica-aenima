import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo1 from "../../Assets/logo/logo_01.png";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color: white;
  z-index: 1;

  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={Logo1} alt="Logo viajes"/>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar;
