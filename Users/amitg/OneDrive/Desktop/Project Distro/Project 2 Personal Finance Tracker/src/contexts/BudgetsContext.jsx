import React, { createContext, useContext, useState } from "react";

const BudgetsContext = createContext();

export function useBudgets() {
  return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {
  return <BudgetsContext.Provider>{children}</BudgetsContext.Provider>;
};
