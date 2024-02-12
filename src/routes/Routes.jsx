import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/components/Home/Home";
import Register from "../pages/components/Home/Register";
import Login from "../pages/components/Home/Login";

const Routes = ({ setIsRedirect }) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/auth/login",
          element: <Login setIsRedirect={setIsRedirect} />,
        },
        {
          path: "/auth/register",
          element: <Register setIsRedirect={setIsRedirect} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
