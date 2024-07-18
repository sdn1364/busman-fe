import { createContext, PropsWithChildren, useState } from "react";

export const AuthContext = createContext<IAuthContext>({
  token: "",
} as IAuthContext);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("access-token");
  });

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
