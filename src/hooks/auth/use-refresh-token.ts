import useAuth from "@/hooks/auth/use-auth.ts";
import useLocalStorage from "../use-local-storage";
import { getRefreshToken } from "@/api/services/auth";

const UseRefreshToken = () => {
  const { setToken } = useAuth();
  const [setAccessToken] = useLocalStorage("access-token");
  const [setRefreshToken] = useLocalStorage("refresh-token");

  return async () => {
    const refreshToken = localStorage.getItem("refresh-token");
    if (refreshToken) {
      await getRefreshToken(refreshToken)
        .then((res) => {
          setAccessToken(res.data.accessToken);
          setRefreshToken(res.data.refreshToken);
        })
        .catch(() => {
          localStorage.removeItem("access-token");
          localStorage.removeItem("refresh-token");
          setToken(null);
        });
    }
    return null;
  };
};

export default UseRefreshToken;
