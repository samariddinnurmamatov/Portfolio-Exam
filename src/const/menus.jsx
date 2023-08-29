import {
  Experiences,
  Portfolios,
  Skills,
  Users,
} from "../pages/admin";
import Account from "../pages/admin/Account";
import Education from "../pages/admin/Education";
import { ROLE } from "../utils";
const routes = [
  {
    url: "Account",
    page: Account,
    label: "Account",
  },
  {
    url: "users",
    page: Users,
    label: "Users",
  },
  {
    url: "experiences",
    page: Experiences,
    label: "Experiences",
  },
  {
    url: "education",
    page: Education,
    label: "Education",
  },
  {
    url: "portfolios",
    page: Portfolios,
    label: "Portfolios",
  },
  {
    url: "skills",
    page: Skills,
    label: "Skills",
  },
];
let hiddenRoutes = ROLE === "client" ? ["users"] : [];
export const adminRoutes = routes.filter(
  (route) => !hiddenRoutes.includes(route.url)
);

