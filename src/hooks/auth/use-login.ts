import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/auth/use-auth.ts";
import { login } from "@/api/services/auth";

const useLogin = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      if (res.session) {
        setAuth(true);
      }
      return navigate("/");
    },
    onError: (err) => err,
  });

  return {
    ...mutation,
  };
};

export default useLogin;
