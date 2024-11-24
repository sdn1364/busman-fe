import { useGetBusinesses } from "@/hooks";
import {
  BusinessActionContext,
  BusinessStateContext,
} from "@/state/context/BusinessContext";
import { Tables } from "@/types/database.types";
import { PropsWithChildren, useState } from "react";

const BusinessProvider = ({ children }: PropsWithChildren) => {
  const [business, setBusiness] = useState<Tables<"business"> | null>(null);
  const { data, isPending, isSuccess } = useGetBusinesses();

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

export default BusinessProvider;
