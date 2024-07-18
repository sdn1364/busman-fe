import { Route, Routes } from "react-router-dom";
import Login from "@/routes/public/Login.tsx";
import { PathConstants } from "@/PathConstants.ts";
import Dashboard from "@/routes/Dashboard.tsx";
import SignUp from "./routes/public/Signup";
import PrivateLayout from "./components/layout/private/PrivateLayout";

function App() {
  return (
    <Routes>
      {/*public paths*/}
      <Route path={PathConstants.LOGIN} element={<Login />} />
      <Route path={PathConstants.REGISTER} element={<SignUp />} />
      {/*private paths*/}
      <Route element={<PrivateLayout />}>
        <Route path={PathConstants.DASHBOARD} element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
