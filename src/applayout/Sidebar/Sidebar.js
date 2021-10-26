import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import NAVLIST from "routes/NavList";
import styled from "styled-components";

function Sidebar() {
  const { pathname } = useLocation();
  return (
    <Container>
      <h4>Head Image</h4>
      {NAVLIST.map((list, index) => {
        const isActive = list.path === pathname;

        return (
          <NavItem key={`nav-${index}`} isActive={isActive}>
            {list.icon}: <Link to={list.path}>{list.title}</Link>
          </NavItem>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  background-color: gray;
  width: 150px;
  height: 100vh;
`;
const NavItem = styled.div`
  color: ${({ isActive }) => (isActive ? "green" : "white")};
`;

export default Sidebar;
