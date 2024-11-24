import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="grid w-screen grid-cols-1">
      <div className="grid h-screen w-full grid-cols-1">
        <div className="relative flex flex-col items-center justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;
