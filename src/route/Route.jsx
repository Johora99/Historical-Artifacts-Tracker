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
import PrivatePage from "../Pages/PrivatePage";
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
      element:<PrivatePage><AddArtifacts></AddArtifacts></PrivatePage>
      },
      {
       path:'/allArtifacts',
       element:<AllArtifactsPage></AllArtifactsPage>
      },
      {
       path:'/artifactsDetails/:id',
       element:<PrivatePage><ArtifactsDetailsPage></ArtifactsDetailsPage></PrivatePage>
      },
      {
      path:'/myArtifacts',
      element:<PrivatePage><MyArtifactsPage></MyArtifactsPage></PrivatePage>
      },
      {
       path:'/myLikedArtifacts',
       element:<PrivatePage><MyLikedArtifactsPage></MyLikedArtifactsPage></PrivatePage>
      },
      {
       path:'/updateArtifacts/:id',
       element:<PrivatePage><UpdatePage></UpdatePage></PrivatePage>
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