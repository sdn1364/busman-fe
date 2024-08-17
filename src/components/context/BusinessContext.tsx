import useGetBusinesses from "@/hooks/business/useGetBusinesses";
import { Tables } from "@/types/database.types";
import { createContext, PropsWithChildren, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export const BusinessStateContext = createContext<IBusinessContext>({
  business: null,
} as IBusinessContext);

export const BusinessActionContext = createContext<IBusinessActionContext>(
  {} as IBusinessActionContext,
);

export const BusinessProvider = ({ children }: PropsWithChildren) => {
  const [business, setBusiness] = useState<Tables<"business"> | null>(null);
  const navigate = useNavigate();
  const { data, isPending, isSuccess } = useGetBusinesses();
  const location = useLocation();

  // useEffect(() => {
  //   if (data && data.length < 1) {
  //     if (!location.state) {
  //       navigate(PathConstants.ONBOARDING + "/" + PathConstants.STEP1, {
  //         state: PathConstants.ONBOARDING + "/" + PathConstants.STEP1,
  //       });
  //     } else {
  //       navigate(location.state);
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data]);

  // useEffect(() => {
  //   if (isSuccess && data.length > 0) {
  //     data.forEach((business) => {
  //       business.business_location.forEach((location) => {
  //         if (location.is_primary) {
  //           setBusiness(business);
  //         }
  //       });
  //     });
  //     if (location.state) {
  //       navigate("/", { state: null });
  //     }
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isSuccess, data]);

  return (
    <BusinessActionContext.Provider value={{ setBusiness }}>
      <BusinessStateContext.Provider
        value={{
          business,
        }}
      >
        {!isPending && children}
      </BusinessStateContext.Provider>
    </BusinessActionContext.Provider>
  );
};
