import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage.jsx";
import Timeline from "../pages/timeline/Timeline.jsx";
import Stats from "../pages/stats/Stats.jsx";
import Error404 from "../pages/error404/Error404.jsx";
import FriendDetails from "../pages/friendDetails/FriendDetails.jsx";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>,
      },
      {
        path: "/stats",
        element: <Stats></Stats>,
      },
      {
        path: "/*",
        element: <Error404></Error404>,
      },
      {
        path: 'friendDetails/:id',
        element: <FriendDetails></FriendDetails>
      }
    ],
  },
]);
