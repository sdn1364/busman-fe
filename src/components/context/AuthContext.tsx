import {
  createContext,
  PropsWithChildren,
  useLayoutEffect,
  useState,
} from "react";
import { axiosPrivate } from "@/api/axios";

export const AuthContext = createContext<IAuthContext>({
  token: "",
} as IAuthContext);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string | null>(null);

  useLayoutEffect(() => {
    const authInterceptor = axiosPrivate.interceptors.request.use((config) => {
      config.headers.Authorization =
        config._retry && token
          ? `Bearer ${token}`
          : config.headers.Authorization;

      return config;
    });
    () => {
      axiosPrivate.interceptors.request.eject(authInterceptor);
    };
  }, [token]);

  useLayoutEffect(() => {
    const refreshInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (
          error.response.status === 403 &&
          error.response.data.message === "Unauthorized"
        ) {
          try {
            const response = await axiosPrivate.get("/refresh");
            setToken(response.data.accessToken);
            originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
            originalRequest._retry = true;

            return axiosPrivate(originalRequest);
          } catch {
            setToken(null);
          }
        }
        return Promise.reject(error);
      },
    );
    () => {
      axiosPrivate.interceptors.response.eject(refreshInterceptor);
    };
  }, [token]);

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
