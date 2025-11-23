import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import AuthLayout from "../Layouts/AuthLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "../SendParcel/SendParcel";
import Coverage from "../Coverage/Coverage";
import HomePage from "../Home/HomePage";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Rider from "../Rider/Rider";
import MyParcels from "../DashBoard/MyParcels";
import ErrorPage from "../ErrorPage/ErrorPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "rider",
        element: (
          <PrivateRoute>
            <Rider />
          </PrivateRoute>
        ),
      },
      {
        path: "send-parcel",
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:3000/warehouse"),
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("http://localhost:3000/warehouse"),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-parcels",
        Component: MyParcels,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
