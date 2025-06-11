import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Button } from "../ui/button";
import dayjs from "dayjs";
import { DatePickerPropsDto } from "@/commons/dtos/components";

export function DatePicker({
  date,
  setDate,
  className,
  size,
}: DatePickerPropsDto) {
  const sizeOptions = {
    sm: "130px",
    md: "160px",
    lg: "190px",
  };

  const sizeButton = sizeOptions[size || "md"];

  return (
    <div className={className}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={`w-[${sizeButton}] pl-3 text-left font-normal`}
          >
            {date ? dayjs(date).format("DD/MM/YYYY") : <span>Pick a date</span>}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            captionLayout="dropdown"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow-md"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
