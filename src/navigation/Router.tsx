import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from ".";
import Root from "@/pages/root/Root";
import Home from "@/pages/home/Home";
import Album from "@/pages/album/Album";
import Search from "@/pages/search/Search";

const Router = createBrowserRouter([
  {
    path: ROUTES.base,
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTES.album,
        element: <Album />,
      },
      {
        path: ROUTES.search,
        element: <Search />,
      },
    ],
  },
]);

export default Router;
