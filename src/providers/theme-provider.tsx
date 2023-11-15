import React from "react";
import { defaultTheme, ThemeContext } from "../context/theme-context";

type ThemeProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = React.useState(defaultTheme);

  React.useEffect(() => {
    const currentTheme = "#f4f2f0";
    setTheme(currentTheme);
  }, []);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
