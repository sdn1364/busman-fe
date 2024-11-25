import { useGetBusinesses } from "@/hooks";
import { PathConstants } from "@/PathConstants";
import { router } from "@/router";
import {
  BusinessActionContext,
  BusinessStateContext,
} from "@/state/context/BusinessContext";
import { Tables } from "@/types/database.types";
import { redirect } from "@tanstack/react-router";
import { PropsWithChildren, useEffect, useState } from "react";

const BusinessProvider = ({ children }: PropsWithChildren) => {
  const [business, setBusiness] = useState<Tables<"business"> | null>(null);
  const { data, isPending, isSuccess } = useGetBusinesses();

  console.log(router);

  useEffect(() => {
    if (data && data.length < 1) {
      if (!router.state) {
        throw redirect({
          to: PathConstants.ONBOARDING + "/" + PathConstants.STEP1,
          // state: {
          //   prevPath: PathConstants.ONBOARDING + "/" + PathConstants.STEP1,
          // },
        });
      } else {
        // throw red irect({ to: router.params.state as string });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (isSuccess && data.length > 0) {
      data.forEach((business) => {
        business.business_location.forEach((location) => {
          if (location.is_primary) {
            setBusiness(business);
          }
        });
      });
      if (router.state) {
        router.history.push("/", { state: null });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default BusinessProvider;
