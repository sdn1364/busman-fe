import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="w-screen">
      <Outlet />
    </div>
  );
};

export default PublicLayout;
