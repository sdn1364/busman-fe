import useAuth from "@/hooks/auth/useAuth";
import { login } from "@/models/services/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

const useLogin = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      if (res.session) {
        setIsAuthenticated(true);
      }
      return navigate({ to: "/" });
    },
    onError: (err) => err,
  });

  return {
    ...mutation,
  };
};

export default useLogin;
