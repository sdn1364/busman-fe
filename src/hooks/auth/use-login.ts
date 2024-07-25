import { useMutation } from "@tanstack/react-query";
import useLocalStorage from "@/hooks/use-local-storage.ts";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/auth/use-auth.ts";
import { login } from "@/api/services/auth";

const useLogin = () => {
  const [setAccessToken] = useLocalStorage("access-token");

  const { setToken } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      setAccessToken(res.data);
      setToken(res.data);
      return navigate("/");
    },
    onError: (err) => console.log(err.message),
  });

  return {
    ...mutation,
  };
};

export default useLogin;
