import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDashboardHook } from "../hooks/dashboard";
import { formatMoney } from "@/helpers/utils";

export default function DashboardComponent() {
  const { user } = useDashboardHook();

  return (
    <div className="grid grid-cols-6 gap-6 my-6">
      <div>
        <Card className="w=full max-w-sm">
          <CardHeader>
            <CardDescription>Entrada</CardDescription>
            <CardTitle className="text-2xl font-semibold text-green-500">
              {formatMoney(user?.incomeBalance)}
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <CardDescription>Valor total para receber.</CardDescription>
          </CardFooter>
        </Card>
      </div>
      <div>
        <Card className="w=full max-w-sm">
          <CardHeader>
            <CardDescription>Saida</CardDescription>
            <CardTitle className="text-2xl font-semibold text-red-500">
              {formatMoney(user?.expenseBalance)}
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <CardDescription>Valor total das despesas.</CardDescription>
          </CardFooter>
        </Card>
      </div>
      <div>
        <Card className="w=full max-w-sm">
          <CardHeader>
            <CardDescription>Previsão</CardDescription>
            <CardTitle className="text-2xl font-semibold text-blue-600">
              {formatMoney(
                (user?.incomeBalance || 0) - (user?.expenseBalance || 0)
              )}
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <CardDescription>Calculo dos valores a receber.</CardDescription>
          </CardFooter>
        </Card>
      </div>
      <div>
        <Card className="w=full max-w-sm">
          <CardHeader>
            <CardDescription>Saldo</CardDescription>
            <CardTitle className="text-2xl font-semibold">
              {formatMoney(user?.receivedBalance)}
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <CardDescription>Valor total recebido e pago.</CardDescription>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
