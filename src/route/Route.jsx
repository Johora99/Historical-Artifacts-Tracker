import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../MainLayout/MainLayOut";
import HomePage from "../Pages/HomePage";
import SignUpPage from "../Pages/SignUpPage";
import LogInPage from "../Pages/LogInPage";
import AddArtifacts from "../Pages/AddArtifacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>
      },
      {
      path:'/addArtifacts',
      element:<AddArtifacts></AddArtifacts>
      },
      {
        path:'/signUp',
        element:<SignUpPage></SignUpPage>
      },
      {
        path:'/logIn',
        element:<LogInPage></LogInPage>
      }
    ]
  },
]);

export default router;