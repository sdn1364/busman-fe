import {
  ThemeProviderActionContext,
  ThemeProviderStateContext,
} from "@/components/context/theme-provider";
import { useContext } from "react";

const useTheme = () => {
  const stateContext = useContext(ThemeProviderStateContext);
  const actionContext = useContext(ThemeProviderActionContext);

  return { ...stateContext, ...actionContext };
};

export default useTheme;
