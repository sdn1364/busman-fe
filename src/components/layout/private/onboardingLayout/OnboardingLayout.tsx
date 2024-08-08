import { Outlet } from "react-router-dom";

const OnboardingLayout = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center p-5">
      <Outlet />
    </div>
  );
};

export default OnboardingLayout;
