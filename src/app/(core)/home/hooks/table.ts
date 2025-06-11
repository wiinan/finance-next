import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { financeColumns } from "../components/table-finance";
import { getFinances } from "@/services/finance";
import dayjs from "dayjs";
import { DEFAULT_DATE_FORMAT } from "@/constants/helpers";

export function useTableFinanceHook() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [finances, setFinances] = useState([]);

  const filter = {
    startDate: dayjs("2025-05-14").format(DEFAULT_DATE_FORMAT),
    endDate: dayjs("2025-06-14").format(DEFAULT_DATE_FORMAT),
  };

  const getFinanceHandler = async () => {
    const financesData = await getFinances(filter);

    setFinances(financesData);
  };

  useEffect(() => {
    getFinanceHandler();
  }, []);

  const table = useReactTable({
    data: finances,
    columns: financeColumns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return { table, finances };
}
