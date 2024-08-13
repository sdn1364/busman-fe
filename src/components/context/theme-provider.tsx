import { createContext, useCallback, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
};
type ThemeProviderAction = {
  handleTheme: (theme: Theme) => void;
};

export const ThemeProviderActionContext = createContext<ThemeProviderAction>(
  {} as ThemeProviderAction,
);

export const ThemeProviderStateContext = createContext<ThemeProviderState>({
  theme: "system",
} as ThemeProviderState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const handleTheme = useCallback(
    (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <ThemeProviderActionContext.Provider value={{ handleTheme }}>
      <ThemeProviderStateContext.Provider value={{ theme }}>
        {children}
      </ThemeProviderStateContext.Provider>
    </ThemeProviderActionContext.Provider>
  );
}
