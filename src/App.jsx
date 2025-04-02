import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Owner from "./pages/Owner";
import User from "./pages/User";
import AdminSystem from "./components/AdminSystem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "owner",
        element: <Owner />,
      },
      {
        path: "user",
        element: <User />
      }
    ],
  },
]);

export default function App() {
  return (<RouterProvider router={router} />);
}