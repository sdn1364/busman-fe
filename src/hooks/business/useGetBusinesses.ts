import { getBusinesses } from "@/api/services/business";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../auth/useAuth";

const useGetBusinesses = () => {
  const { user } = useAuth();

  const query = useQuery({
    queryKey: ["businesses"],
    queryFn: () => getBusinesses(user?.id),
  });
  return { ...query };
};

export default useGetBusinesses;
