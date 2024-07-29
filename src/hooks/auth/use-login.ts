import { useMutation } from "@tanstack/react-query";
import useLocalStorage from "@/hooks/use-local-storage.ts";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/auth/use-auth.ts";
import { login } from "@/api/services/auth";

const useLogin = () => {
  const [setAccessToken] = useLocalStorage("access-token");
  const [setRefreshToken] = useLocalStorage("refresh-token");

  const { setToken } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      console.log(res);
      setAccessToken(res.accessToken);
      setRefreshToken(res.refreshToken);
      setToken(res.accessToken);
      return navigate("/");
    },
    onError: (err) => err,
  });

  return {
    ...mutation,
  };
};

export default useLogin;
