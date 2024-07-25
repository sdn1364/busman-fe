import { useNavigate } from "react-router-dom";
import useLocalStorage from "../use-local-storage";
import useAuth from "./use-auth";

const useLogout = () => {
  const [setAccessToken] = useLocalStorage("access-token");

  const { setToken } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setToken("");
    setAccessToken("");
  };

  return { logout };
};

export default useLogout;
