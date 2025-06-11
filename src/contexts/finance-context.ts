import { FinanceFiltersStateDto } from "@/app/(core)/home/dtos/table";
import { INITIAL_FILTERS_STATE } from "@/app/(core)/home/reducers/finance";
import { useContext, createContext } from "react";

export const FinanceFilterContext = createContext<FinanceFiltersStateDto>(
  INITIAL_FILTERS_STATE
);

export const useFinanceFilterReduce = () => {
  return useContext(FinanceFilterContext);
};
