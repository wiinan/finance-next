import dayjs from "dayjs";
import { FinanceFilterActionDto, FinanceFiltersStateDto } from "../dtos/table";

export const INITIAL_FILTERS_STATE = {
  startDate: dayjs().startOf("month").toDate(),
  endDate: dayjs().endOf("month").toDate(),
};

export function financeFiltersReducer(
  state: FinanceFiltersStateDto,
  action: FinanceFilterActionDto
) {
  switch (action.type) {
    case "UPDATE_FILTER":
      return { state, ...action.payload };
    default:
      return state;
  }
}
