import { useRoutes } from "react-router-dom";
import DashboardLayout from "./components/Layout";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
import ProductList from "./pages/ProductList";
import { Page404 } from "./pages/Page404";
import Home from "./pages/HomeScreen";
import AuthScreen from "./pages/AuthScreen";
import CouponList from "./pages/CouponList";

export const RouteList: React.FC = () => {
  return useRoutes([
    {
      path: "/*",
      element: <Page404 />,
    },
    {
      element: <DashboardLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/product-list",
          element: <ProductList />,
        },
        {
          path: "/coupon-list",
          element: <CouponList />,
        },
        {
          path: "/shopping-cart",
          element: <ShoppingCart />,
        },
        { path: "/login-register", element: <AuthScreen /> },

        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
};
