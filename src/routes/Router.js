import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import ErrorPage from "./ErrorPage";
import Settings from "./pages/Settings";


const Router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
      errorElement: <ErrorPage/>,
    },
    {
        path: 'User',
        element: <User/>,
        errorElement: <ErrorPage/>,
    },
    {
      path: 'Settings',
      element: <Settings/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "User/:UserId",
          element: <User />,
        },
      ],

    },
    
  ]);

  export default Router