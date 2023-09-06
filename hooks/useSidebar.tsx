"use client";
import { useContext } from "react";
import { SidebarContext } from "@/contexts/sidebarContext";

const useSidebar = () => {
  return useContext(SidebarContext);
};
export default useSidebar;
