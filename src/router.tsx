import { createBrowserRouter } from "react-router-dom";
import PrivateLayout from "@/components/layout/private/PrivateLayout.tsx";
import PublicLayout from "@/components/layout/public/PublicLayout.tsx";
import Login from "@/routes/public/Login.tsx";
import SignUp from "@/routes/public/Signup.tsx";

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    children: [
      {
        id: "publicLayout",
        element: <PublicLayout />,
        children: [
          {
            index: true,
            path: "/",
            element: <div>this is home</div>,
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/signup",
            element: <SignUp />,
          },
        ],
      },
      {
        id: "privateLayout",
        element: <PrivateLayout />,
        children: [],
      },
    ],
  },
]);
