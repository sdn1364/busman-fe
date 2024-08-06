import { Route, Routes } from "react-router-dom";
import { PathConstants } from "./PathConstants";
import { Forget, Login, Singup, Verification } from "./routes/public";
import { BusinessSetting, Dashboard } from "./routes/private";
import PrivateLayout from "./components/layout/private/privateLayout/PrivateLayout";
import PublicLayout from "./components/layout/public/PublicLayout";
import ResetPassword from "./routes/public/ResetPassword";

function App() {
  return (
    <Routes>
      {/*public routes*/}
      <Route element={<PublicLayout />}>
        <Route path={PathConstants.LOGIN} element={<Login />} />
        <Route path={PathConstants.REGISTER} element={<Singup />} />
        <Route path={PathConstants.VERIFICATION} element={<Verification />} />
        <Route path={PathConstants.FORGETPASS} element={<Forget />} />
        <Route path={PathConstants.RESETPASSWORD} element={<ResetPassword />} />
      </Route>
      {/*private routes*/}
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
