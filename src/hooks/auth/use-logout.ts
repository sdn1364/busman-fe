import { useMutation } from "@tanstack/react-query";
import { logout } from "@/api/services/auth";

const useLogout = () => {
  const { mutate: signout } = useMutation({
    mutationFn: () => logout(),
  });

  return { signout };
};

export default useLogout;
