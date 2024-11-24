import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { PathConstants } from "./PathConstants";
import {
  OnboardingLayout,
  PrivateLayout,
  PublicLayout,
} from "./resources/components/layout";
import CalendarLayout from "./resources/components/layout/private/calendarLayout/CalendarLayout";
import {
  BusinessSetting,
  Step01,
  Step02,
  Step03,
  Step04,
} from "./routes/private";
import Week from "./routes/private/calendar/week/Week";
import {
  Forget,
  Login,
  ResetPassword,
  SingUp,
  Verification,
} from "./routes/public";

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <App />,
    // errorElement: <ErrorElement />,
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
            element: <SingUp />,
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
            id: "calendarLayout",
            path: PathConstants.DASHBOARD,
            element: <CalendarLayout />,
            children: [
              {
                index: true,
                element: <Navigate to={PathConstants.WEEK} replace />,
              },
              {
                path: PathConstants.WEEK,
                element: <Week />,
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
          {
            path: PathConstants.STEP2,
            element: <Step02 />,
          },
          {
            path: PathConstants.STEP3,
            element: <Step03 />,
          },
          {
            path: PathConstants.STEP4,
            element: <Step04 />,
          },
        ],
      },
    ],
  },
]);
