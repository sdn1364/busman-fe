import { logout } from "@/models/services/auth";
import { useMutation } from "@tanstack/react-query";

const useLogout = () => {
  const { mutate: signout } = useMutation({
    mutationFn: () => logout(),
  });

  return { signout };
};

export default useLogout;
