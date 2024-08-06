import { singup } from "@/api/services/auth";
import { PathConstants } from "@/PathConstants";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: singup,
    onSuccess: (res) => {
      const user = res.user?.user_metadata;
      if (!user) return null;
      navigate(PathConstants.VERIFICATION, {
        state: user.first_name,
      });
    },
  });
};

export default useSignUp;
