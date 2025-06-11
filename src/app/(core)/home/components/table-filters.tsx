import { DatePicker } from "@/components/custom/date-picket";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "@mynaui/icons-react";
import dayjs from "dayjs";
import { useState } from "react";

export function TableFilterComponent() {
  const [startDate, setStartDate] = useState<Date>(
    dayjs().startOf("month").toDate()
  );
  const [endDate, setEndDate] = useState<Date>(dayjs().endOf("month").toDate());

  return (
    <div className="flex items-center py-4 flex justify-between">
      <div>
        <div className="flex">
          <DatePicker
            className={"flex flex-col gap-3"}
            date={startDate}
            setDate={setStartDate}
            size="sm"
          />
          <DatePicker
            className={"flex flex-col gap-3"}
            date={endDate}
            setDate={setEndDate}
            size="sm"
          />
        </div>
      </div>
      <Button variant="secondary">
        Adicionar
        <PlusCircle />
      </Button>
    </div>
  );
}
