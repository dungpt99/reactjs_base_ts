import Dashboard from "../pages/Dashboard";
import DefaultLayout from "../layouts/DefaultLayout";
import Login from "../pages/Login";

const publicRoutes = [
  { path: "/", component: Login, layout: DefaultLayout },
  { path: "/dashboard", component: Dashboard },
];

const privateRoutes: any = [];

export { publicRoutes, privateRoutes };
