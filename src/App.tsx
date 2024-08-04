import { Route, Routes } from "react-router-dom";
import { PathConstants } from "./PathConstants";
import { Login, Singup } from "./routes/public";
import { BusinessSetting, Dashboard } from "./routes/private";
import PrivateLayout from "./components/layout/private/privateLayout/PrivateLayout";

function App() {
  return (
    <Routes>
      {/*public routes*/}
      <Route path={PathConstants.LOGIN} element={<Login />} />
      <Route path={PathConstants.REGISTER} element={<Singup />} />

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
