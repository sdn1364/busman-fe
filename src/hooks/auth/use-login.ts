import { useMutation } from "@tanstack/react-query";
import axios from "@/api/axios";
import useLocalStorage from "@/hooks/use-local-storage.ts";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/auth/use-auth.ts";

const useLogin = () => {
  const [setAccessToken] = useLocalStorage("access-token");
  const [setRefreshToken] = useLocalStorage("refresh-token");

  const { setToken } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (data: UserLoginData) =>
      await axios.post("/auth/login", {
        email: data.email,
        password: data.password,
      }),
    onSuccess: (res) => {
      console.log(res.data);
      setAccessToken(res.data.accessToken);
      setRefreshToken(res.data.refreshToken);
      setToken(res.data.accessToken);
      return navigate("/");
    },
    onError: (err) => console.log(err.message),
  });

  return {
    ...mutation,
  };
};

export default useLogin;
