import {
  AuthActionContext,
  AuthStateContext,
} from "@/components/context/AuthContext";
import { useContext } from "react";

const UseAuth = (): IAuthContext => {
  const state = useContext(AuthStateContext);
  const action = useContext(AuthActionContext);
  return { ...state, ...action };
};

export default UseAuth;
