import { ComponentType } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "@/hooks/auth/use-auth.ts";

const WithAuth = (Component: ComponentType) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function InnerComponent(props: any) {
    const { auth } = useAuth();
    const location = useLocation();

    if (!auth) {
      return (
        <Navigate to={"/login"} replace state={{ path: location.pathname }} />
      );
    }
    return <Component {...props} />;
  };
};
export default WithAuth;
