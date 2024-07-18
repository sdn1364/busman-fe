import axios from "@/api/axios";
import useAuth from "@/hooks/auth/use-auth.ts";
import useLocalStorage from "../use-local-storage";

const UseRefreshToken = () => {
  const { setToken } = useAuth();
  const [setAccessToken] = useLocalStorage("access-token");
  const [setRefreshToken] = useLocalStorage("refresh-token");

  return async () => {
    const refreshToken = localStorage.getItem("refresh-token");
    if (refreshToken) {
      await axios
        .post(
          "/auth/refresh",
          {},
          {
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${refreshToken}`,
            },
          },
        )
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
