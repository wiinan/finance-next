import { Dispatch, SetStateAction } from "react";

export type DatePickerPropsDto = {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
  className?: string;
  size?: "sm" | "md" | "lg";
};
