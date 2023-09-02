"use client";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/themeContext";

const useTheme = () => {
  return useContext(ThemeContext);
};
export default useTheme;
