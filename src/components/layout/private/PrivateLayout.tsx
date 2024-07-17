import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div>
      this is private layout
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
