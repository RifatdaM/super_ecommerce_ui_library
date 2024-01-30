import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllCards from "../components/Cards/AllCards/AllCards";
import AllBanner from "../components/Banner/AllBanner/AllBanner";
import AllCategory from "../components/Category/AllCategory/AllCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllCards />,
      },
      {
        path: "/banner",
        element: <AllBanner />,
      },
      {
        path: "/category",
        element: <AllCategory />,
      },
    ],
  },
]);

export default router;
