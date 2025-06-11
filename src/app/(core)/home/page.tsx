"use client";

import { FinanceFilterContext } from "@/contexts/finance-context";
import { FinanceScreen } from "./finance-screen";
import {
  financeFiltersReducer,
  INITIAL_FILTERS_STATE,
} from "./reducers/finance";
import { useReducer } from "react";

export default function HomePage() {
  const [state, dispatch] = useReducer(
    financeFiltersReducer,
    INITIAL_FILTERS_STATE
  );

  return (
    <FinanceFilterContext.Provider value={{ state, dispatch }}>
      <FinanceScreen />
    </FinanceFilterContext.Provider>
  );
}
