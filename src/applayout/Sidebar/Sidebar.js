import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import NAVLIST from "routes/NavList";
import { Container, NavItem, NavHead, NavContent, LogoWrapper } from "./Styles";
import { ReactComponent as Logo } from "assets/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";

function Sidebar() {
  const { pathname } = useLocation();
  const [collapse, setCollapse] = React.useState(false);

  const menuClick = () => {
    setCollapse(!collapse);
  };
  return (
    <Container collapse={collapse}>
      <NavHead collapse={collapse}>
        <AiOutlineMenu size={18} className="menuicon" onClick={menuClick} />
        <Logo className="logo" />
      </NavHead>
      <NavContent>
        {NAVLIST.map((list, index) => {
          const isActive = list.path === pathname;

          const { icon: Icon } = list;
          return (
            <NavItem
              collapse={collapse}
              key={`nav-${index}`}
              isActive={isActive}
            >
              <Link to={list.path}>
                <Icon />
                <span>{list.title}</span>
              </Link>
            </NavItem>
          );
        })}
      </NavContent>
      <LogoWrapper collapse={collapse}>
        <Logo className="logo" />
      </LogoWrapper>
    </Container>
  );
}

export default Sidebar;
