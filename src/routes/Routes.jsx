import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/components/Home/Home";
import Login from "../pages/components/Home/Login";
import Register from "../pages/components/Home/Register";

const Routes = () => {
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
          element: <Login />,
        },
        {
          path: "/auth/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
