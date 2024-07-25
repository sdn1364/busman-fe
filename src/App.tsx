import { Route, Routes } from "react-router-dom";
import Login from "@/routes/public/Login.tsx";
import { PathConstants } from "@/PathConstants.ts";
import Dashboard from "@/routes/private/dashboard/Dashboard";
import SignUp from "./routes/public/Signup";
import BusinessSetting from "./routes/private/settings/businessSettings/BusinessSettings";
import PrivateLayout from "./components/layout/private/privateLayout/PrivateLayout";

function App() {
  return (
    <Routes>
      {/*public paths*/}
      <Route path={PathConstants.LOGIN} element={<Login />} />
      <Route path={PathConstants.REGISTER} element={<SignUp />} />
      {/*private paths*/}
      <Route element={<PrivateLayout />}>
        <Route path={PathConstants.DASHBOARD} element={<Dashboard />} />
        <Route path={PathConstants.SETTINGS}>
          <Route path={PathConstants.BUSINESS} element={<BusinessSetting />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
