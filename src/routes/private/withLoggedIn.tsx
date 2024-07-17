import { ComponentType } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "@/hooks/auth/use-auth.ts";

const WithLoggedIn = (Component: ComponentType) => {

  return function InnerComponent(props: any) {
    const { token } = useAuth();
    console.log(token);
    if (!token) {
      return <Navigate to="/login" replace />;
    }
    return <Component {...props} />;
  };
};
export default WithLoggedIn;
