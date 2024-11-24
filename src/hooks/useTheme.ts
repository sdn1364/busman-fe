import {
  ThemeActionContext,
  ThemeStateContext,
} from "@/state/context/ThemeContext";
import { useContext } from "react";

const useTheme = () => {
  const stateContext = useContext(ThemeStateContext);
  const actionContext = useContext(ThemeActionContext);

  return { ...stateContext, ...actionContext };
};

export default useTheme;
