import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "../pages/GameDetailPage";
import Body from "../Body";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "games/:id",
        element: <GameDetailPage></GameDetailPage>,
      },
    ],
  },
]);

export default router;
