import { createContext, useContext } from "react";

export const AppCtx = createContext();

export function useApp() {
  const context = useContext(AppCtx);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}

export function AppProvider({ children, value }) {
  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}