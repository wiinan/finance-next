"use client";

import * as React from "react";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BADGE_BY_FINANCE_TYPES, BADGE_BY_STATUS } from "@/constants/finance";
import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";
import { formatMoney } from "@/helpers/utils";
import { useTableFinanceHook } from "../hooks/table";
import { TableFilterComponent } from "./table-filters";

export const financeColumns: ColumnDef<any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "competence",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Data
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => {
      const formatedDate = dayjs(row.getValue("competence")).format(
        "DD/MM/YYYY"
      );
      return <div className="capitalize">{formatedDate}</div>;
    },
  },
  {
    accessorKey: "type",
    header: "",
    cell: ({ row }) => {
      const badgeOptions = BADGE_BY_FINANCE_TYPES[row.getValue("type")];

      return (
        <div className="capitalize text-left">
          <Badge variant={badgeOptions.variant}>{badgeOptions.name}</Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "paymentMethod",
    header: "Forma de pagamento",
    cell: ({ row }) => {
      const paymentMethod = row.getValue("paymentMethod");

      return <div className="capitalize">{paymentMethod}</div>;
    },
  },
  {
    accessorKey: "installment",
    header: "Parcela",
    cell: ({ row }) => {
      const installment = row.getValue("installment") || "A vista";

      return <div className="capitalize">{installment}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const badgeOptions = BADGE_BY_STATUS[row.getValue("status")];

      return (
        <div className="capitalize ">
          <Badge variant={badgeOptions.variant}>{badgeOptions.name}</Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "liquidPrice",
    header: () => <div className="text-right">Valor</div>,
    cell: ({ row }) => {
      const liquidPrice = +row.getValue("liquidPrice");
      const formattedLiquidPrice = formatMoney(liquidPrice);

      return (
        <div className="text-right font-medium">{formattedLiquidPrice}</div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => (
      <div className="text-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem>Visualizar</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Pagar</DropdownMenuItem>
            <DropdownMenuItem>
              <p className="text-red-400">Remover</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
  },
];

export function FinanceTableComponent() {
  const { table } = useTableFinanceHook();

  return (
    <div className="w-full">
      <TableFilterComponent />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={financeColumns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
