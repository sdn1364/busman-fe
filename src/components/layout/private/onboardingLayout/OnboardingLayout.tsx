import { ToggleTheme } from "@/components/shared";
import withAuth from "@/routes/WithAuth";
import { Outlet } from "react-router-dom";

const OnboardingLayout = withAuth(() => {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center p-5">
      <ToggleTheme className="absolute right-0 top-0 border-none" />
      <Outlet />
    </div>
  );
});

export default OnboardingLayout;
