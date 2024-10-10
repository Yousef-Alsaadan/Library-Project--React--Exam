import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Detaile from "./pages/Detaile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  { path: "/login", element: <Login /> },
  { path: "/signin", element: <Signin /> },
  { path: "/details/:id", element: <Detaile /> },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
