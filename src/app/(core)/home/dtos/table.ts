export type FinanceFiltersStateDto = {
  startDate: Date;
  endDate: Date;
};

export type FinanceFilterActionDto = {
  type: "UPDATE_FILTER";
  payload: FinanceFiltersStateDto;
};
