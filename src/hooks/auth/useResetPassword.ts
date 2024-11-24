import { resetPassword } from "@/models/services/auth";
import { useMutation } from "@tanstack/react-query";

const useResetPassword = () => {
  const mutation = useMutation({
    mutationFn: resetPassword,
  });

  return { ...mutation };
};

export default useResetPassword;
