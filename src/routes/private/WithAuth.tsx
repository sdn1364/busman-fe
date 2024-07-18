import { ComponentType } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "@/hooks/auth/use-auth.ts";

const WithAuth = (Component: ComponentType) => {
  return function InnerComponent(props: any) {
    const { token } = useAuth();

    if (!token) {
      return <Navigate to="/login" replace />;
    }
    return <Component {...props} />;
  };
};
export default WithAuth;
