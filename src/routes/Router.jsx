import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import DonationCampaigns from "../pages/DonationCampaigns";
import HowToHelp from "../pages/HowToHelp";
import Dashboard from "../pages/Dashboard";
import DonationDetails from "../pages/DonationDetails";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <DonationCampaigns></DonationCampaigns>,
        loader: () => fetch("/donations.json"),
      },

      {
        path: "/help",
        element: <HowToHelp></HowToHelp>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:detailsId",
        element: (
          <PrivateRoute>
            <DonationDetails></DonationDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/donations.json"),
      },
      //   {
      //     path: "*",
      //     element: <ErrorPage></ErrorPage>,
      //   },
    ],
  },
]);

export default router;
