import { Route, Routes } from "react-router-dom";
import { PathConstants } from "./PathConstants";
import { Login, Singup } from "./routes/public";
import { BusinessSetting, Dashboard } from "./routes/private";
import PrivateLayout from "./components/layout/private/privateLayout/PrivateLayout";
import Verification from "./routes/public/Verification";
import PublicLayout from "./components/layout/public/PublicLayout";

function App() {
  return (
    <Routes>
      {/*public routes*/}
      <Route element={<PublicLayout />}>
        <Route path={PathConstants.LOGIN} element={<Login />} />
        <Route path={PathConstants.REGISTER} element={<Singup />} />
        <Route path={PathConstants.VERIFICATION} element={<Verification />} />
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
