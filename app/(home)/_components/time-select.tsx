"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

const MONTH_OPTIONS = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "may" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

export const TimeSelect = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const monthCurrent = searchParams.get("month");
  const handleMonthChange = (month: string) => {
    push(`/?month=${month}`);
  };

  return (
    <div>
      <Select
        onValueChange={(value) => handleMonthChange(value)}
        defaultValue={monthCurrent ?? ""}
      >
        <SelectTrigger className="w-[9.375rem] rounded-full">
          <SelectValue placeholder="Selecione mês" />
        </SelectTrigger>
        <SelectContent>
          {MONTH_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
