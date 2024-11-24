import { singup } from "@/models/services/auth";
import { PathConstants } from "@/PathConstants";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

const useSignUp = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: singup,
    onSuccess: (res) => {
      const user = res.user?.user_metadata;
      if (!user) return null;
      navigate({
        to: PathConstants.VERIFICATION,
      });
    },
  });
};

export default useSignUp;
