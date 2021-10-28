import "./App.css";
import useAuth from "contexts/UserContext";
import AuthApp from "app/auth";
import UnAuthApp from "app/unauth";
import ROUTES from "./routes/Routes";

function App() {
  const { user } = useAuth();

  const publicRoutes = Object.values(ROUTES).filter(
    (route) => route.isPrivate !== true
  );

  const authPages = [ROUTES.login.path, ROUTES.register.path];
  const pathname = window.location.pathname;

  const isPublic = publicRoutes.includes(pathname);
  const isNotAuthPage = !authPages.includes(pathname);

  //--> If user isn't authenticated 'OR' user is authenticated but requesting to view public pages(eg: /about or /terms)
  return !user || (isPublic && !isNotAuthPage) ? <UnAuthApp /> : <AuthApp />;

  //--> OR
  //--> If user is authenticated but requesting to view public pages(eg: /about or /terms)
  // if (isPublic && !isNotAuthPage) {
  //   return <UnAuthApp />;
  // }

  // return !user ? <UnAuthApp /> : <AuthApp />;
}

export default App;
