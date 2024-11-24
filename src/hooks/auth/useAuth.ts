import {
  AuthActionContext,
  AuthStateContext,
} from "@/state/context/AuthContext";
import { useContext } from "react";

const UseAuth = () => {
  const state = useContext(AuthStateContext);
  const action = useContext(AuthActionContext);
  return { ...state, ...action };
};

export default UseAuth;
