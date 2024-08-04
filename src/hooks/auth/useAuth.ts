import { AuthContext } from "@/components/context/AuthContext";
import { useContext } from "react";

const UseAuth = (): IAuthContext => {
  return useContext(AuthContext);
};

export default UseAuth;
