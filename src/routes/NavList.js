import ROUTES from "./Routes";
import { FiLink } from "react-icons/fi";
import { RiDashboardFill } from "react-icons/ri";
import { MdLibraryAdd, MdOutlineHomeRepairService } from "react-icons/md";
import { FaFileMedical, FaUsers } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const NAVLIST = [
  {
    path: ROUTES.home.path,
    icon: FiLink,
    title: "Dashboard",
  },
  {
    path: ROUTES.plans.path,
    icon: MdLibraryAdd,
    title: "Protection Plans",
  },
  {
    path: ROUTES.activations.path,
    icon: RiDashboardFill,
    title: ROUTES.activations.title,
  },
  {
    path: ROUTES.claims.path,
    icon: FaFileMedical,
    title: ROUTES.claims.title,
  },
  {
    path: ROUTES.repairs.path,
    icon: MdOutlineHomeRepairService,
    title: ROUTES.repairs.title,
  },
  {
    path: ROUTES.users.path,
    icon: FaUsers,
    title: ROUTES.users.title,
  },
  {
    path: ROUTES.settings.path,
    icon: IoMdSettings,
    title: ROUTES.settings.title,
  },
];

export default NAVLIST;
