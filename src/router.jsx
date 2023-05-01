import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Notfound from "./views/Notfound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";
import Register from "./views/Register";
import EmailConfirm from "./views/EmailConfirm";
import EmailVerify from "./views/EmailVerify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard " />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/email-confirm",
        element: <EmailConfirm />,
      },
      {
        path: "/email-verified",
        element: <EmailVerify />,
      },
    ],
  },

  {
    path: "*",
    element: <Notfound />,
  },
]);

export default router;
