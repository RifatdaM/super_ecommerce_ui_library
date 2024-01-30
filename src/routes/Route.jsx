import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllCards from "../components/Cards/AllCards/AllCards";
import AllBanner from "../components/Banner/AllBanner/AllBanner";
import AllCategory from "../components/Category/AllCategory/AllCategory";
import AllHeader from "../components/Header/AllHeader/AllHeader";

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
      {
        path: "/header",
        element: <AllHeader />,
      },
    ],
  },
]);

export default router;
