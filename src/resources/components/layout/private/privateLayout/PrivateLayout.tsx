import WithAuth from "@/routes/WithAuth";
import { Outlet } from "react-router-dom";
import TopMenubar from "./components/Menubar";

const PrivateLayout = WithAuth(() => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <TopMenubar />
      <Outlet />
    </div>
  );
});

export default PrivateLayout;
