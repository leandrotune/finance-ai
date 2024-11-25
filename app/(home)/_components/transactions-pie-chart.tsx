"use client";

import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionPercentagePerType } from "@/app/_data/get-dashboard/types";
import { TransactionType } from "@prisma/client";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { Pie, PieChart } from "recharts";
import { PercentageItem } from "./percentage-item";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investimento",
    color: "#FFFFFF",
  },
  [TransactionType.DEPOSIT]: {
    label: "Deposito",
    color: "#55B02E",
  },
  [TransactionType.EXPENSE]: {
    label: "Despensa",
    color: "#E93030",
  },
} satisfies ChartConfig;

interface TransactionsPieChartProps {
  typesPercentage: TransactionPercentagePerType;
  depositTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

export const TransactionsPieChart = ({
  typesPercentage,
  depositTotal,
  investmentsTotal,
  expensesTotal,
}: TransactionsPieChartProps) => {
  const chartData = [
    {
      type: TransactionType.DEPOSIT,
      amount: depositTotal,
      fill: "#55B02E",
    },
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#FFFFFF",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: "#E93030",
    },
  ];
  return (
    <Card className="flex flex-col rounded-[20px] p-12">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>

        <div className="space-y-3">
          <PercentageItem
            icon={<TrendingUpIcon size={16} className="text-primary" />}
            title="Receita"
            value={typesPercentage.DEPOSIT}
          />
          <PercentageItem
            icon={<TrendingDownIcon size={16} className="text-red-500" />}
            title="Despesas"
            value={typesPercentage.EXPENSE}
          />
          <PercentageItem
            icon={<PiggyBankIcon size={16} />}
            title="Investimento"
            value={typesPercentage.INVESTMENT}
          />
        </div>
      </CardContent>
    </Card>
  );
};
