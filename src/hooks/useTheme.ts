import { useContext } from "react";
import { ThemeContext } from "@contexts/ThemeCtx";

function useTheme() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw Error('Theme Context is not used inside the provider!');
  }

  const { mode, changeMode } = themeContext;

  return { mode, changeMode };
}

export default useTheme;