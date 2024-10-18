import { useRoutes } from "react-router-dom";
import "./App.css";
import AddCoupon from "./components/Admin/coupons/add-coupon";
import EditCoupon from "./components/Admin/coupons/edit-coupon";
import CouponList from "./components/Admin/coupons/list-coupon";
import Statistics from "./components/Admin/coupons/statistic";
import UsageReport from "./components/Admin/coupons/usageReport";
import AddProduct from "./components/Admin/products/product-add";
import ListProduct from "./components/Admin/products/product-list";
import EditUser from "./components/Admin/user/edit-user";
import UserList from "./components/Admin/user/user-list";
import Login from "./components/client/Login/Login";
import Main from "./components/client/Main/Main";
import Register from "./components/client/Register/Register";
import Admin from "./pages/Admin";
import Client from "./pages/Client";
import Products from "./components/client/products/Products";
import ProductDetails from "./components/client/products/ProductDetails";

function App() {
  const router = useRoutes([
    {
      path: "",
      element: <Client />,
      children: [
        { path: "", element: <Main /> },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
        { path: "/products", element: <Products /> },
        { path: "/products/details", element: <ProductDetails /> },
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
