import { useCallback, useEffect, useState } from "react";
import { ThemeActionContext, ThemeStateContext } from "../context/ThemeContext";

function ThemeProvider({
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
    <ThemeActionContext.Provider value={{ handleTheme }}>
      <ThemeStateContext.Provider value={{ theme }}>
        {children}
      </ThemeStateContext.Provider>
    </ThemeActionContext.Provider>
  );
}

export default ThemeProvider;
