import { createContext } from "react";

export const AuthStateContext = createContext<IAuthContext>({} as IAuthContext);
export const AuthActionContext = createContext<IAuthActionsContext>(
  {} as IAuthActionsContext,
);
