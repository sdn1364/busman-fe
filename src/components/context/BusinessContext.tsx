import useGetBusinesses from "@/hooks/business/useGetBusinesses";
import { PathConstants } from "@/PathConstants";
import {
  createContext,
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { Tables } from "@/types/database.types";
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

  useLayoutEffect(() => {
    if (isSuccess && data.length === 0) {
      navigate(PathConstants.ONBOARDING);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, data]);

  useEffect(() => {
    if (isSuccess) {
      data.forEach((business) => {
        business.business_location.forEach((location) => {
          if (location.is_primary) {
            setBusiness(business);
          }
        });
      });
    }
  }, [isSuccess, data]);

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
