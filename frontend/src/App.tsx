import { useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Admin from "./pages/Admin";
import ListProduct from "./components/Admin/products/product-list";
import UserList from "./components/Admin/user/user-list";
import EditUser from "./components/Admin/user/edit-user";
import CouponList from "./components/Admin/coupons/list-coupon";
import AddCoupon from "./components/Admin/coupons/add-coupon";
import UsageReport from "./components/Admin/coupons/usageReport";
import EditCoupon from "./components/Admin/coupons/edit-coupon";
import Statistics from "./components/Admin/coupons/statistic";
import AddProduct from "./components/Admin/products/product-add";
import Client from "./pages/Client";
import Main from "./components/client/Main/Main";
import Register from "./components/client/Register/Register";
import Login from "./components/client/Login/Login";
import Logout from "./components/client/Logout/Logout";

function App() {
  const router = useRoutes([
    {
      path: "",
      element: <Client />,
      children: [
        { path: "", element: <Main /> },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
        { path: "/logouy", element: <Logout /> },
      ],
    },
    {
      path: "dashboard",
      element: <Admin />,
      children: [
        // User
        { path: "list-user", element: <UserList /> },
        { path: "edit-user", element: <EditUser /> },
        //
        { path: "list-product", element: <ListProduct /> },
        { path: "add-product", element: <AddProduct /> },

        // coupons
        { path: "coupon-list", element: <CouponList /> },
        { path: "coupon-add", element: <AddCoupon /> },
        { path: "coupon-edit", element: <EditCoupon /> },
        { path: "coupon-usagereport", element: <UsageReport /> },
        { path: "coupon-statistic", element: <Statistics /> },
      ],
    },
  ]);
  return router;
}

export default App;
