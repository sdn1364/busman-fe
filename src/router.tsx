import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "./App";
import {
  OnboardingLayout,
  PrivateLayout,
  PublicLayout,
} from "./components/layout";
import { PathConstants } from "./PathConstants";
import ErrorElement from "./routes/ErrorElement";
import { BusinessSetting, Dashboard, Step01 } from "./routes/private";
import {
  Forget,
  Login,
  ResetPassword,
  Singup,
  Verification,
} from "./routes/public";

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        id: "publicLayout",
        element: <PublicLayout />,
        children: [
          {
            path: PathConstants.LOGIN,
            element: <Login />,
          },
          {
            path: PathConstants.REGISTER,
            element: <Singup />,
          },
          {
            path: PathConstants.VERIFICATION,
            element: <Verification />,
          },
          {
            path: PathConstants.FORGETPASS,
            element: <Forget />,
          },
        ],
      },
      {
        id: "privateLayout",
        element: <PrivateLayout />,
        children: [
          {
            path: PathConstants.RESETPASSWORD,
            element: <ResetPassword />,
          },
          {
            path: PathConstants.DASHBOARD,
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <Dashboard />,
              },
            ],
          },
          {
            path: PathConstants.SETTINGS,
            children: [
              {
                path: PathConstants.BUSINESS,
                element: <BusinessSetting />,
              },
            ],
          },
          {
            path: PathConstants.ONBOARDING,
            element: <OnboardingLayout />,
            children: [
              {
                path: PathConstants.STEP1,
                element: <Step01 />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
