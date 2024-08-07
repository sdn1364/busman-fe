import {
  BusinessActionContext,
  BusinessStateContext,
} from "@/components/context/BusinessContext";
import { useContext } from "react";

const useBusiness = () => {
  const action = useContext(BusinessActionContext);
  const state = useContext(BusinessStateContext);
  return { ...action, ...state };
};
export default useBusiness;
