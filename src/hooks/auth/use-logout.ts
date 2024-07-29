import useLocalStorage from "../use-local-storage";
import useAuth from "./use-auth";
import { useMutation } from "@tanstack/react-query";
import { logout } from "@/api/services/auth";

const useLogout = () => {
  const [setAccessToken] = useLocalStorage("access-token");

  const { setToken, token } = useAuth();

  const { mutate: signout } = useMutation({
    mutationFn: () => logout(token!),
    onSuccess: () => {
      setToken("");
      setAccessToken("");
    },
  });

  return { signout };
};

export default useLogout;
