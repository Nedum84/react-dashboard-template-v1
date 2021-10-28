import useAuth from "contexts/UserContext";
import React from "react";
import { useLocation } from "react-router";
import NAVLIST from "routes/NavList";

function Header() {
  const { pathname } = useLocation();
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
    <div>
      {navDetails.title} - {navDetails.icon} ::: Header {user.name}
    </div>
  );
}

export default Header;
