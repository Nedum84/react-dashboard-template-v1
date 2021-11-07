import useAuth from "contexts/UserContext";
import React from "react";
import { AiFillBell, AiOutlineSearch } from "react-icons/ai";
import { useLocation } from "react-router";
import NAVLIST from "routes/NavList";
import { Container, ProfileWrapper, InputWrapper } from "./Styles";
import { ReactComponent as User } from "assets/user.svg";
import { IoMdArrowDropdown } from "react-icons/io";

function Header() {
  const { pathname } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [navDetails, setNavDetails] = React.useState({ icon: "", title: "" });

  const { user } = useAuth();

  React.useEffect(() => {
    const findNav = NAVLIST.find((n) => n.path === pathname);
    if (findNav) {
      setNavDetails({
        icon: findNav.icon,
        title: findNav.title,
      });
    }
  }, [pathname]);

  return (
    <Container>
      <div />
      <InputWrapper>
        <input type="text" placeholder="Search here..." />
        <AiOutlineSearch />
      </InputWrapper>
      <ProfileWrapper>
        <AiFillBell className="bell" />
        <User className="avater" />
        <span>{user.name}</span>
        <IoMdArrowDropdown />
      </ProfileWrapper>
    </Container>
  );
}

export default Header;
