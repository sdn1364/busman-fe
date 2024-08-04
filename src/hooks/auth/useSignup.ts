import { singup } from "@/api/services/auth";
import { useMutation } from "@tanstack/react-query";

const useSignUp = () => {
  return useMutation({
    mutationFn: singup,
  });
};

export default useSignUp;
