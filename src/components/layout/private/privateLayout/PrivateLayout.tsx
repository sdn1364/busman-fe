import { Outlet } from "react-router-dom";
import TopMenubar from "./components/Menubar";
import WithAuth from "@/routes/WithAuth";

const PrivateLayout = WithAuth(() => {
  return (
    <div>
      <TopMenubar />
      <Outlet />
    </div>
  );
});

export default PrivateLayout;
