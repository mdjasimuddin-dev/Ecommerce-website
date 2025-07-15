import { createBrowserRouter } from "react-router";
import Error from "../Pages/Error";
import Root from "../layouts/Root";
import HomePage from "../pages/HomePage";

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
      
    ],
  },
]);

export default router;
