import { Outlet } from "react-router-dom";
import TopMenubar from "./components/Menubar";

const PrivateLayout = () => {
  return (
    <div>
      <TopMenubar />
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
