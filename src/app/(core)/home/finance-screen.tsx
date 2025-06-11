"use client";

import { Separator } from "@radix-ui/react-dropdown-menu";
import DashboardComponent from "./components/dashboard";
import { FinanceTableComponent } from "./components/table-finance";

export function FinanceScreen() {
  return (
    <div className="box-content px-24 py-6">
      <h1 className="font-medium text-2xl">Dashboard</h1>
      <Separator className="my-3" />
      <DashboardComponent />
      <Separator className="my-3" />
      <FinanceTableComponent />
    </div>
  );
}
