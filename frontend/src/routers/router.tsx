import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import CheckLoginRoute from "./CheckLoginRoute";
import Home from "../pages/Home";
import News from "../pages/News";
import Hiring from "../pages/Hiring";
import About from "../pages/About";
import Maintenance from "../pages/Maintenance";
import Contact from "../pages/Contact";
import AllProduct from "../pages/AllProduct";
import ProductDetails from "../pages/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import Settings from "../pages/Settings";
import DetailUser from "../pages/detailUser";
import Cart from "../pages/Cart";
import RedirectRoute from "./RedirectRoute";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import RegisterSuccess from "../pages/RegisterSuccess";
import VerifyAccount from "../pages/VerifyAccount";
import ButtonSetting from "../components/ButtonSetting/ButtonSetting";
import Notfound from "../pages/error/Notfound";
import ScrollToTop from "../hooks/useScrollToTop";

const router = createBrowserRouter(
  [
    {
      element: <ScrollToTop/>,
      children: [
        {
          element: <ButtonSetting/>,
          children: [
            {
              element: <Layout/>,
              children: [
                {
                  element: <CheckLoginRoute/>,
                  children: [
                    {
                      path: '/',
                      element: <Home/>
                    },
                    {
                      path: '/news',
                      element: <News/>
                    },
                    {
                      path: '/hiring',
                      element: <Hiring/>
                    },
                    {
                      path: '/about',
                      element: <About/>
                    },
                    {
                      path: '/maintenance',
                      element: <Maintenance/>
                    },
                    {
                      path: '/contact',
                      element: <Contact/>
                    },
                    {
                      path:'/showall',
                      element: <AllProduct/>
                    },
                    {
                      path: '/product/:productId',
                      element: <ProductDetails/>
                    },
                    {
                      path: '/settings',
                      element: <Settings/>
                    },
                    {
                      element: <PrivateRoute/>,
                      children: [
                        {
                          path: '/detailUser',
                          element: <DetailUser/>
                        },
                        {
                          path: '/cart',
                          element: <Cart/>
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              path: '/auth',
              element: <RedirectRoute/>,
              children: [
                {
                  path: 'login',
                  element: <Login/>
                },
                {
                  path: 'signup',
                  element: <Signup/>
                },
                {
                  path: 'forgotPassword',
                  element: <ForgotPassword/>
                },
                {
                  path: 'success',
                  element: <RegisterSuccess/>
                },
                {
                  path: 'verify/:token',
                  element: <VerifyAccount/>
                },
              ]
            }
          ]
        },
        {
          path: '*',
          element: <Notfound/>
        }
      ]
    }
  ]
);

export default router;