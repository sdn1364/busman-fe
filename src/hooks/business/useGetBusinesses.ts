import { getBusinesses } from "@/api/services/business";
import useAuth from "../auth/useAuth";
import { useQuery } from "@tanstack/react-query";

const useGetBusinesses = () => {
  const { user } = useAuth();

  const query = useQuery({
    queryKey: ["businesses"],
    queryFn: () => getBusinesses(user?.id),
  });
  return { ...query };
};

export default useGetBusinesses;
