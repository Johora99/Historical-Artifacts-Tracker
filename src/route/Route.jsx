import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../MainLayout/MainLayOut";
import HomePage from "../Pages/HomePage";
import SignUpPage from "../Pages/SignUpPage";
import LogInPage from "../Pages/LogInPage";
import AddArtifacts from "../Pages/AddArtifacts";
import AllArtifactsPage from "../Pages/AllArtifactsPage";
import ArtifactsDetailsPage from "../Pages/ArtifactsDetailsPage";
import MyArtifactsPage from "../Pages/MyArtifactsPage";
import UpdatePage from "../Pages/UpdatePage";
import MyLikedArtifactsPage from "../Pages/MyLikedArtifactsPage";
import ErrorPage from "../Pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement:<ErrorPage></ErrorPage>,
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
       path:'/allArtifacts',
       element:<AllArtifactsPage></AllArtifactsPage>
      },
      {
       path:'/artifactsDetails/:id',
       element:<ArtifactsDetailsPage></ArtifactsDetailsPage>
      },
      {
      path:'/myArtifacts',
      element:<MyArtifactsPage></MyArtifactsPage>
      },
      {
       path:'/myLikedArtifacts',
       element:<MyLikedArtifactsPage></MyLikedArtifactsPage>
      },
      {
       path:'/updateArtifacts/:id',
       element:<UpdatePage></UpdatePage>
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