import { lazy } from "react";

const Login = lazy(() => import("../pages/Auth/Login/Login"));
const Register = lazy(() => import("../pages/Auth/Register/Register"));
const Activations = lazy(() => import("../pages/Activations/Activations"));
const Claims = lazy(() => import("../pages/Claims/Claims"));
const Home = lazy(() => import("../pages/Home/Home"));
const Plans = lazy(() => import("../pages/Plans/Plans"));
const Repairs = lazy(() => import("../pages/Repairs/Repairs"));
const Settings = lazy(() => import("../pages/Settings/Settings"));
const Users = lazy(() => import("../pages/Users/Users"));
const UserProfile = lazy(() => import("../pages/UserProfile/UserProfile"));

const ROUTES = {
  default: {
    path: "/",
    title: "Login",
    component: Login,
    isPrivate: false,
    exact: true,
  },
  login: {
    path: "/login",
    title: "Login",
    component: Login,
    isPrivate: false,
    exact: true,
  },
  register: {
    path: "/register",
    title: "Register",
    component: Register,
    isPrivate: false,
    exact: true,
  },
  activations: {
    path: "/activations",
    title: "Activations",
    component: Activations,
    isPrivate: true,
    exact: true,
  },
  claims: {
    path: "/claims",
    title: "Claims",
    component: Claims,
    isPrivate: true,
    exact: true,
  },
  home: {
    path: "/home",
    title: "Dashboard",
    component: Home,
    isPrivate: true,
    exact: true,
  },
  plans: {
    path: "/plans",
    title: "My Plans",
    component: Plans,
    isPrivate: true,
    exact: true,
  },
  repairs: {
    path: "/repairs",
    title: "Repairs",
    component: Repairs,
    isPrivate: true,
    exact: true,
  },
  settings: {
    path: "/settings",
    title: "Settings",
    component: Settings,
    isPrivate: true,
    exact: true,
  },
  users: {
    path: "/users",
    title: "Users",
    component: Users,
    isPrivate: true,
    exact: true,
  },
  profile: {
    path: "/users/:userId",
    title: "UserProfile",
    component: UserProfile,
    isPrivate: true,
    exact: true,
  },
  error404: {
    path: "*",
    title: "Login",
    component: () => <div>Error</div>,
    isPrivate: false,
    exact: true,
  },
};

export default ROUTES;
