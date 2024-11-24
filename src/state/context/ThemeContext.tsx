import { createContext } from "react";

export const ThemeActionContext = createContext<ThemeProviderAction>(
  {} as ThemeProviderAction,
);

export const ThemeStateContext = createContext<ThemeProviderState>({
  theme: "system",
} as ThemeProviderState);
