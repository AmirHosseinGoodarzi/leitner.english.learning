import styles from "./themeSelector.module.scss";
import { THEMES } from "@/utils/enums";
import { Moon, Sun } from "react-bootstrap-icons";
import useTheme from "@/hooks/useTheme";

const ThemeSelector = () => {
  const { currentTheme, setCurrentTheme } = useTheme();
  return (
    <div className={`flex gap-2 border border-slate-200 dark:border-slate-600 rounded-full p-0.5 ${styles.theme_selector}`}>
      <button
        className={currentTheme === THEMES.DARK ? styles.active : ""}
        onClick={() => {
          setCurrentTheme(THEMES.DARK);
        }}
      >
        <Moon />
      </button>
      <button
        className={currentTheme === THEMES.LIGHT ? styles.active : ""}
        onClick={() => {
          setCurrentTheme(THEMES.LIGHT);
        }}
      >
        <Sun />
      </button>
    </div>
  );
};

export default ThemeSelector;
