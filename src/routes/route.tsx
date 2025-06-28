import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Tasks from "../pages/Tasks";
import Users from "../pages/Users";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Tasks></Tasks>,
      },
      {
        path: "user",
        element: <Users></Users>,
      },
    ],
  },
  {
    path: "/login",
  },
]);

export default routes;
