import { singup } from "@/api/services/auth";
import { useMutation } from "@tanstack/react-query";

const useSignUp = () => {
  const mutation = useMutation({
    mutationFn: singup,
  });
  return mutation;
};

export default useSignUp;
