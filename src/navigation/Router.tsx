import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from ".";
import Root from "@/pages/root/Root";
import Home from "@/pages/home/Home";

const Router = createBrowserRouter([
  {
    path: ROUTES.base,
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default Router;
