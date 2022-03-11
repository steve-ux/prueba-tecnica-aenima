import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    font-family: Montserrat Regular;
    color: grey;
    text-transform: uppercase;
  }
  li:hover {
      color: black;
  }
  a {
      text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: black;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/"><li>Home</li></Link>
      <Link to="/Tendencias"><li>Tendencias</li></Link>
      <Link to="/Blog"><li>Blog</li></Link>
    </Ul>
  )
}

export default RightNav;