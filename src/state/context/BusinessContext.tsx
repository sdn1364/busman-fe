import { createContext } from "react";

export const BusinessStateContext = createContext<IBusinessContext>({
  business: null,
} as IBusinessContext);

export const BusinessActionContext = createContext<IBusinessActionContext>(
  {} as IBusinessActionContext,
);
