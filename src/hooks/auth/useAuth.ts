import {
  AuthActionContext,
  AuthStateContext,
} from "@/state/context/AuthContext";
import { useContext } from "react";

const UseAuth = () => {
  const state = useContext(AuthStateContext);
  const action = useContext(AuthActionContext);

  if (!state || !action) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return { ...state, ...action };
};

export default UseAuth;
