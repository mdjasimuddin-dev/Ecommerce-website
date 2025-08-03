import { createBrowserRouter } from "react-router";
import Error from "../Pages/Error";
import Root from "../layouts/Root";
import HomePage from "../pages/HomePage";
import Brands from "../components/brands/Brands";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
      },
      
    ],
  },
]);

export default router;
